export function playErrorSound() {
    const audio = new Audio('/error.mp3')
    audio.volume = 0.3
    return audio.play().catch((error) => {
        // Ignore autoplay errors
        console.log('Audio playback failed:', error)
    })
}

