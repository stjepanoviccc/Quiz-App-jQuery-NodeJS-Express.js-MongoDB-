/* ADDING HOVER SOUND EFFECT */
/* this part is after loading another ejs file so it doesn't get default value */
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

// ----------------------------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------------------------- //

// MODE SWITCHER
if (localStorage.getItem("mode") == 0 || localStorage.getItem("mode") == null) {
    light_mode()
} else {
    dark_mode()
    $("#mode-trigger").click()
}

/* trigger each time light/dark is clicked */
$('#mode-trigger').on('click', () => {
    if ($('#mode-trigger').text() == 'LIGHT') {
        localStorage.setItem('mode', 1)
        dark_mode()
    }
    else if ($('#mode-trigger').text() == 'DARK') {
        localStorage.setItem('mode', 0)
        light_mode()
    }
})

/* function for light mode */
function light_mode() {
    localStorage.setItem('mode', 0)
    $('#mode-trigger').text('LIGHT')
    // console.log('light')
    $('body').css('background', 'white')
}

/* function for dark mode */
function dark_mode() {
    localStorage.setItem('mode', 1)
    $('#mode-trigger').text('DARK')
    // console.log('dark')
    $('body').css('background', 'gray')
}