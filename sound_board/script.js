const sounds = ['chord', 'give', 'dry', 'bld', 'punchy', 'brk']

sounds.forEach((sound) => {
    const button = document.createElement('button')
    button.classList.add('btn')

    button.innerText = sound

    button.addEventListener('click', () => {
        stopSongs()
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').appendChild(button)
})

function stopSongs() {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)
        song.pause()
        song.currentTime= 0;
    })
}