document.addEventListener('DOMContentLoaded', () => {
    const secondHand = document.querySelector('.secondHand')
    const minuteHand = document.querySelector('.minuteHand')
    const hourHand = document.querySelector('.hourHand')

    const changeRotation = () => {
        const seconds = new Date().getSeconds()

        const secondHandRotate = ((seconds / 60) * 360) + 90
        secondHand.style.transform = `rotate(${secondHandRotate}deg)`


        const minutes = new Date().getMinutes()

        const minuteHandRotate = ((minutes / 60) * 360) + 90
        minuteHand.style.transform = `rotate(${minuteHandRotate}deg)`


        const hours = new Date().getHours()

        const hourHandRotate = ((hours / 12) * 360) + 90
        hourHand.style.transform = `rotate(${hourHandRotate}deg)`
    }

    changeRotation()

    setInterval(changeRotation, 1000)
})