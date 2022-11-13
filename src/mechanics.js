const cursor = document.querySelector('.cursor')
const holes = [...document.querySelectorAll('.hole')]
const scoreEl = document.querySelector('.score span')
let score = 0;
const button= document.getElementById('start');
const startingM = .6;
let time = startingM * 60;
const cd = document.getElementById('countdown');
const gamerest = document.getElementById('start');

//Professor images
////------------------------------------------------------
const pro = document.createElement("img");
const protemp = document.createElement("img");
protemp.src = '../graphics/professor/professor.svg';
pro.src = '../graphics/professor/professor.svg';
pro.id = "professor";
pro.classList.add('professor');
//-------------------------------------------------------

//Dean images
//---------------------------------------------------------
const dea = document.createElement("img");
const tempdea = document.createElement("img");
tempdea.src = '../graphics/deen/DeanNotHit.png';
dea.src = '../graphics/deen/DeanNotHit.png';
dea.id = '.dean';
dea.classList.add('dean');
//---------------------------------------------------------
//Admin images
////---------------------------------------------------------
//// 
////---------------------------------------------------------

//Student images
//---------------------------------------------------------
const stu = document.createElement("img");
const tempstu = document.createElement("img");
tempstu.src = '../graphics/student/student.svg';
stu.src = '../graphics/student/student_hit.svg';
stu.id = '.student';
stu.classList.add('student');
//---------------------------------------------------------




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
		const hole = holes[i];
		let timer = null;
		deanrun(i);
		//admin(i);  
		//student(i);

		pro.src = protemp.src;
		pro.addEventListener('click', () => {
			
			score = score + 15;
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


// DEAN (LOGIC MIGHT NEED CHANGING)
// //------------------------------------------------------------------------------
function deanrun(i){

	if(score % 25 == 0 && score > 100){

		let t = Math.floor(Math.random() * holes.length);

		while(t == i){

			t = Math.floor(Math.random() * holes.length);
		}

		const hole2  = holes[t];
		dea.addEventListener('click', () => {

			score  = score + 20;
			scoreEl.textContent = score
			dea.src = 'graphics/dean/DeanNotHit.png'

			setTimeout(() => {

				hole2.removeChild(dea)
				return run();
			}, 500)

		}, {once : true})

		hole2.appendChild(dea)                                                                                                                                                                                   
		timer = setTimeout(() => {

			hole2.removeChild(dea)
		}, 1500)
	}
}
//--------------------------------------------------------------------------------------
//
//student (LOGIC MIGHT NEED CHANGING)
function student(i){

	if(score % 100 == 0 && score > 100){

		let  = Math.floor(Math.random() * holes.length);

		while(t == i){

			t = Math.floor(Math.random() * holes.length);
		}

		const hole2  = holes[t];
		stu.addEventListener('click', () => {

			score  = score - (score * .20);
			scoreEl.textContent = score
			stu.src = '../graphics/student/student_hit.svg';
			setTimeout(() => {

				hole2.removeChild(stu)
			}, 500)
		}, {once : true})

		hole2.appendChild(stu)

		timer = setTimeout(() => {

			hole2.removeChild(stu)

		}, 1500)
	}
}

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
