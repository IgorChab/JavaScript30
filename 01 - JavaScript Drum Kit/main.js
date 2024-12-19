document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', (e) => {
        const audio = document.querySelector(`audio[data-key="${e.code}"]`);

        if (!audio) return

        audio.currentTime = 0;
        audio.play();

        const key = document.querySelector(`.key[data-key="${e.code}"]`);
        key.classList.add('playing');

        setTimeout(() => {
            key.classList.remove('playing');
        }, 70)
    });
});