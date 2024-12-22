const inputs = document.querySelectorAll("input")

inputs.forEach((node) => {
    node.addEventListener('input', (e) => {
        const suffix = e.target.dataset.sizing || ''
        document.documentElement.style.setProperty(`--${e.target.name}`, e.target.value + suffix)
    })
})