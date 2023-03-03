$('.menu-a').on('click', () => {
    console.log('radi')
})

var points = 0

$('.answer').on('click', (e) => {
    correct = e.target.classList
    if (correct.contains('correct')) {
        console.log('tacno')
        points += 1
        console.log(points)
        $('#itsA').removeClass('correct')
        $('#itsA').text('S')
    } else {
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
})
