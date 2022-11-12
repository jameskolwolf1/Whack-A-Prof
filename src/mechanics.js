const cursor = document.querySelector('.cursor')
const holes = [...document.querySelectorAll('.hole')]
const scoreEl = document.querySelector('.score span')
let score = 0;
const button= document.getElementById('start');
const startingM = .1;
let time = startingM * 60;
const cd = document.getElementById('countdown');
const gamerest = document.getElementById('start');
const pro = document.createElement("img");
pro.src = '../graphics/professor/professor.svg';
pro.id = "professor";
pro.classList.add('student');

document.getElementById('start').onclick = function(){
	button.disabled = true;
	setInterval(update, 1000)


	function update(){
		    const min = Math.floor(time/60);
		    let seconds = time % 60;
		    seconds = seconds < 10 ? '0' + seconds : seconds;
		    cd.innerHTML = min +":"+ seconds ;
		    if (time>0){
			            time--;
			        }
	}

	function run(){

		if(time==0){

			button.disabled = false;
			button.innerText = "Game Over";
			reset();
			return;
		}

		const i = Math.floor(Math.random() * holes.length)
		const hole = holes[i]
		let timer = null
		const img = document.createElement('professor')
		pro.src = '../graphics/professor/professor.svg'

		pro.addEventListener('click', () => {

			score += 10
			scoreEl.textContent = score
			pro.src = '../graphics/professor/professor_hit.svg'
			clearTimeout(timer)
			setTimeout(() => {

				hole.removeChild(pro)
				return run();
			}, 500)
		}, {once : true})

		hole.appendChild(pro)
		timer = setTimeout(() => {

			hole.removeChild(pro)
			return run();
		}, 1500)
	}

	run()}

function reset(){

	if(time <=0 ){

		gamerest.onclick = function(){

			startingM = .1;
			time = startingM * 60;
			score = 0;
			run();
		}
	}
}
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
