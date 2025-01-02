const canvas = document.getElementById('draw')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const ctx = canvas.getContext('2d')

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDrawing = false
let lastX = 0
let lastY = 0
let hue = 0
let direction = true

const draw = ({ offsetX, offsetY }) => {
    if (!isDrawing) {
        return
    }

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(offsetX, offsetY)
    ctx.stroke()

    lastX = offsetX
    lastY = offsetY

    hue++

    if (hue >= 360) {
        hue = 0;
    }

    if (ctx.lineWidth >= 100 || ctx.lineWidth <= 10) {
        direction = !direction
    }

    if (direction) {
        ctx.lineWidth++
    } else {
        ctx.lineWidth--
    }
}

const handleTouchMove = (e) => {
    const touch = e.touches[0];
    draw({ offsetX: touch.clientX, offsetY: touch.clientY })
}

const handleMouseMove = (e) => {
    draw({ offsetX: e.offsetX, offsetY: e.offsetY })
}

const handleStart = ({ offsetX, offsetY }) => {
    isDrawing = true

    lastX = offsetX
    lastY = offsetY

    draw({ offsetX, offsetY })
}

document.addEventListener("mousedown", (e) => {
    handleStart({ offsetX: e.offsetX, offsetY: e.offsetY })
})
document.addEventListener("mousemove", handleMouseMove)
document.addEventListener("mouseup", () => isDrawing = false)
document.addEventListener("mouseleave", () => isDrawing = false)


document.addEventListener("touchstart", (e) => {
    const touch = e.touches[0];

    handleStart({ offsetX: touch.clientX, offsetY: touch.clientY })
})
document.addEventListener("touchmove", handleTouchMove)
document.addEventListener("touchend", () => isDrawing = false)