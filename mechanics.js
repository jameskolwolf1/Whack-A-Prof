const holes = [...document.querySelectorAll('.hole')]
const scoreElement = document.querySelector('.score .span')
const cursor = document.querySelector('.cursor')
const startTime = 1;

let score = 0
let timer = null

const count = document.getElementById("time")

//The event will start when the start button is clicked------------------------------------
start.addEventListener('click', function()){

	setInterval(countDown, 1000)
	function countDown(){

		const minutes = Math.Floor(timer/60)
		let seconds = timer % 60;

		seconds = seconds < 10 ? '0' + seconds : seconds
		count.innerHTML = minutes + " : " + seconds
		if(timer > 0){

			timer--
		}
	}

}
//----------------------------------------------------------------------------------------


function run(){
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null

    const img = document.createElement('img')
    img.classList.add('students')
    img.src = 'graphics/student/student.svg'

    img.addEventListener('click', () => {
        score -= 10
        sound.play()
        scoreElement.textContent = score
        img.src = 'graphics/student/student_hit.svg'
        clearTimeout(timer)
        setTimeout(() => {
            hole.removeChild(img)
            run()
        }, 500)
    })

    hole.appendChild(img)

    timer = setTimeout(() => {
        hole.removeChild(img)
        run()
    }, 2000)
}
// The start bnutton wioll start the ghame when clicked ----------------------------------------
function StartGame(){


	let startDiv = document.getElementById("Start");
	let gameCanvas = document.getElementById("canvas");
	let gameover = document.getElementByID("game-over");

	startDiv.style.display = "none";
	gameCanvas.style.display = "none";
	gameover.style.display = "none";

	run();
}
function gameOver(){

	let startDiv = document.getElementById("start");
	let gameCanvas = document.getElementById("canvas");
	let gameover = document.getElementById("game-over");

	startDiv.style.display = "none";
	gameCanvas.style.display = "none";
	gameover.style.display = "block";
}
//--------------------------------------------------------------------------------------------
window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px'
    cursor.style.left = e.pageX + 'px'
})
window.addEventListener('mousedown', () => {
    cursor.classList.add('active')
})
window.addEventListener('mouseup', () => {
    cursor.classList.remove('active')
})
