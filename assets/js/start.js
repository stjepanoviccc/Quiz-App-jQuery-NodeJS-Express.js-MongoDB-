/* adding game sound on /start route */
if (localStorage.getItem("sound") == 0 || localStorage.getItem("sound") == null) {
    console.log('music off')
} else {
    var audio = $('audio');
    audio[0].play()
}

