/* ADDING HOVER SOUND EFFECT */
/* this part is for loading another ejs file so it doesn't get default value */
if (localStorage.getItem("sound") == 0 || localStorage.getItem("sound") == null) {
    sound_off()
} else {
    sound_on()
    $("#sound-trigger").click()
}

/* trigger each time on/off is clicked */
$('#sound-trigger').on('click', () => {
    if ($('#sound-trigger').text() == 'OFF') {
        localStorage.setItem('sound', 1)
        sound_on()
    }
    else if ($('#sound-trigger').text() == 'ON') {
        localStorage.setItem('sound', 0)
        sound_off()
    }
})

/* function for sound off */
function sound_off() {
    localStorage.setItem('sound', 0)
    $('#sound-trigger').text('OFF')
}

/* function for sound on */
function sound_on() {
    localStorage.setItem('sound', 1)
    $('#sound-trigger').text('ON')

    var audio = $('audio');
    $('a').on('mouseover', () => {
        audio[0].play()
    })
}
