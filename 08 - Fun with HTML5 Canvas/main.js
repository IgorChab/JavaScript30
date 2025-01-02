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

const draw = (e) => {
    if (!isDrawing) {
        return
    }

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;

    ctx.beginPath()
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()

    lastX = e.offsetX
    lastY = e.offsetY

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

document.addEventListener("mousedown", (e) => {
    isDrawing = true

    lastX = e.offsetX
    lastY = e.offsetY

    draw(e)
})
document.addEventListener("mousemove", draw)
document.addEventListener("mouseup", () => isDrawing = false)
document.addEventListener("mouseleave", () => isDrawing = false)