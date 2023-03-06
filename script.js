const hour = document.querySelector(".hour")
const minute = document.querySelector(".minute")
const second = document.querySelector(".second")
const hours = document.querySelector(".hours")
const minutes = document.querySelector(".minutes")
// const seconds = document.querySelector(".seconds")

function clock() {
    const date = new Date()
    const csecond = date.getSeconds() / 60
    const cminute = (csecond + date.getMinutes()) / 60
    const chour = (cminute + date.getHours()) / 12
    setRotation(second, csecond)
    setRotation(minute, cminute)
    setRotation(hour, chour)

    hours.innerHTML = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    minutes.innerHTML = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    setTimeout(clock, 1000)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
clock()