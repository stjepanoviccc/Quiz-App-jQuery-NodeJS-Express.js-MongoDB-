var points = 0
var counter = 0
var question_list = []
var correct_list = []
var incorrect_matrix = []
var answers_matrix = []
var sorted_list = []
var current_correct = ''

// searching for questions on load
$('document').ready(() => {
    get_questions()

    // adding game sound on /start route
    if (localStorage.getItem("sound") == 0 || localStorage.getItem("sound") == null) {
    } else {
        var audio = $('audio');
        audio[0].play()
    }
})

function main_load() {
    answers_matrix.push(correct_list, incorrect_matrix)
    sorting_list()
    write_question_and_answers()
    $('.answer').on('click', (e) => {
        var correct_a = e.target.textContent.slice(3)
        if (correct_a == localStorage.getItem('current')) {
            var n = counter / 8
            if (Number.isInteger(n) && n != 0) {
                get_questions()
            }
            counter += 1
            points += 1
            sorted_list = []
            sorting_list()
            write_question_and_answers()
        } else {
            false_answer_template()
        }
    })
}

// API CALL 
function get_questions() {
    $.get('https://the-trivia-api.com/api/questions', function (response) {
        for (let i in response) {
            question_list.push(response[i].question)
            correct_list.push(response[i].correctAnswer)
            incorrect_matrix.push(response[i].incorrectAnswers)
        }
        if (points == 0) {
            main_load()
        }
    })
}

// function to write q and a
function write_question_and_answers() {
    $('#points').html(`Points: ${points}`)
    $('#question').html(`<b>Question: </b>${question_list[counter]}?`)
    $('#itsA').html(`<span class="fw-bold">A:</span> ${sorted_list[0]}`)
    $('#itsB').html(`<span class="fw-bold">B:</span> ${sorted_list[1]}`)
    $('#itsC').html(`<span class="fw-bold">C:</span> ${sorted_list[2]}`)
    $('#itsD').html(`<span class="fw-bold">D:</span> ${sorted_list[3]}`)
}

// function to sort highscores list
function sorting_list() {
    sorted_list.push(answers_matrix[0][counter], answers_matrix[1][counter][0], answers_matrix[1][counter][1],
        answers_matrix[1][counter][2])
    sorted_list.sort()
    for (let j in sorted_list) {
        var correct = correct_list[counter]
        if (sorted_list[j] == correct) {
            localStorage.setItem('current', correct)
        }
    }
}

// after wrong answer send to url: /false
function false_answer_template() {
    localStorage.setItem('points', points)
    location.href = '/false'
}