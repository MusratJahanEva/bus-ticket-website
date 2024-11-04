function buyTickets() {
    const phParibahan = document.getElementById('ph-paribahan')
    phParibahan.scrollIntoView({ behavior: "smooth" })

}
const allBtn = document.getElementsByClassName('sit-btn')
for (const btn of allBtn) {
    btn.addEventListener('click', function (event) {
        const sitNumber = event.target.innerText
        const sitPrice = getConvertedValue('sit-price')
        const sitClassPrice = document.getElementById('sit-class-price')

        event.target.setAttribute('disabled', false)

        const seat4Count = getConvertedValue('seat-count')
        if (seat4Count + 1 > 4) {
            alert('sit not enough for you')
            return
        }

        event.target.style.backgroundColor = '#1DD100'
        event.target.style.color = 'white'

        const seatsLeft = getConvertedValue('seats-left')
        document.getElementById('seats-left').innerText = seatsLeft - 1

        const seatCount = getConvertedValue('seat-count')
        document.getElementById('seat-count').innerText = seatCount + 1

        const div = document.createElement('div')
        div.classList.add('flex')
        div.classList.add('justify-between')

        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')

        p1.innerText = sitNumber
        p2.innerText = 'Economoy'
        p3.innerText = sitPrice


        div.appendChild(p1)
        div.appendChild(p2)
        div.appendChild(p3)
        sitClassPrice.appendChild(div)

        updateTotalPrice(sitPrice)
        updateGrandTotalPrice()
    })
}
function updateGrandTotalPrice(status) {

    const totalPrice = getConvertedValue('total-price')
    if (status == undefined) {
        document.getElementById('grand-total').innerText = totalPrice
    }
    else {
        const couponCode = document.getElementById('coupon-code').value

        if (couponCode === 'New15') {
            const discount = totalPrice * 0.15
            const discountPrice = document.getElementById('discount-price')
            discountPrice.classList.add('flex')
            const p1 = document.createElement('p')
            const p2 = document.createElement('p')
            p1.innerText = 'Discount Price : '
            p2.innerText = discount
            discountPrice.appendChild(p1)
            discountPrice.appendChild(p2)

            document.getElementById('grand-total').innerText = totalPrice - discount

        }
        else if (couponCode === 'Couple20') {
            const discounted = totalPrice * 0.2
            document.getElementById('grand-total').innerText = totalPrice - discounted

        }

        else {
            alert('not a valid code')
        }

        const applyBtn = document.getElementById('apply-btn')
        applyBtn.setAttribute('disabled', false)
        applyBtn.style.backgroundColor = 'white'
    }



}

function updateTotalPrice(value) {
    const totalPrice = getConvertedValue('total-price')
    sum = totalPrice + value
    document.getElementById('total-price').innerText = sum
}
document.getElementById('phone-number').addEventListener('keyup', function (event) {
    const number = event.target.value
    const sitNumber = event.target.innerText
    const nextBtn = document.getElementById('next-btn')
    if (number === number && sitNumber === sitNumber) {
        nextBtn.removeAttribute('disabled')
    }
    else {
        alert('btn and number add')
    }
})

function getConvertedValue(id) {
    const element = document.getElementById(id).innerText
    const convertElement = parseInt(element)
    return convertElement
}