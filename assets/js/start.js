var points = 0
var counter = 0
var question_list = []
var correct_list = []
var incorrect_matrix = []
var answers_matrix = []
var sorted_list = []
var current_correct = ''

/* searching for questions on load */
$('document').ready(() => {
    get_questions()

    /* adding game sound on /start route */
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

/* API CALL */
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

/* HELPING FUNCTIONS */
function write_question_and_answers() {
    $('#points').html(`Points: ${points}`)
    $('#question').html(`<b>Question: </b>${question_list[counter]}?`)
    $('#itsA').html(`A: ${sorted_list[0]}`)
    $('#itsB').html(`B: ${sorted_list[1]}`)
    $('#itsC').html(`C: ${sorted_list[2]}`)
    $('#itsD').html(`D: ${sorted_list[3]}`)
}

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

function false_answer_template() {
    $('#start-section').html(`
        <div class="container text-center" id="over">
            <div class="row">
                <div class="col-md-12 d-flex flex-column justify-content-center" id="over-div">
                    <h2 class="display-2">Your answer was not correct!</h2>
                    <h2 class="display-2">Score: ${points}</h2>
                </div>
                <div class="col-md-12 d-flex flex-column justify-content-center" id="over-div">
                    <form>
                        <div class="col-md-12">
                            <h2 class="display-2">Username: </h2>
                        </div>
                        <div class="col-md-12">
                            <input type="text" id="name" name="name" 
                            required minlength="1" maxlength="10">
                        </div>
                        <div class="col-md-12">
                            <button type="submit" class="btn btn-lg btn-outline-dark px-5 my-3 text-right">Submit</button>
                        </div>
                    </form>
                </div>
                <div class="col-md-12 d-flex flex-column justify-content-center" id="over-div">
                    <a href="/start" class="display-2 my-2 menu-a">Play Again</a>
                    <a href="/highscore" class="display-2 my-2 menu-a">HighScore</a>    
                </div>
            </div>
        </div>`)
    $('.sedd').on('click', () => {
        console.log('salji')
    })
}