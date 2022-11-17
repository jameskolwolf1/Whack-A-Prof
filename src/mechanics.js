const cursor = document.querySelector('.cursor')
const holes = [...document.querySelectorAll('.hole')]
const scoreEl = document.querySelector('.score span')
let score = 0;
const button= document.getElementById('start');


//Timer and start
//-----------------------------------------------------------
const startingM = .6;
let time = startingM * 60;
//-----------------------------------------------------------
const cd = document.getElementById('countdown');
const gamerest = document.getElementById('start');
//-----------------------------------------------------------



//Popup and Popdown timming for Professor
//-----------------------------------------------------------
 var popup = 3500;
 var popdown = 1500;
//-----------------------------------------------------------

//Popup and Popdown timming for dean (Testing)
//------------------------------------------------------------
var deanPopup = popup //- (popup * .1)
var deanPopdown = popdown //- (popdown * 1)
//------------------------------------------------------------

//Popip and Popdown timming for student
//------------------------------------------------------------
var studentPopup = popup
var studentPopdown = popdown - (popdown * .1)
//------------------------------------------------------------

// indexies for the student, dean and prfoessor
//-----------------------------------------------------------
var t = 0;
var h = 0;
var i = 0;
//-----------------------------------------------------------

// Remember that the timiing and position is remmber  that two
//entitles will not show up in the same square, the problem is
//that javascript is weird and I can get the time in mililsceond
//time  or make a ecexption or a break with in the code that get
//meaning information

//Can play with the time and get the less likly time intervale
// that is will element will be in the same box
//-----------------------------------------------------------

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

		i = Math.floor(Math.random() * holes.length)
		const hole = holes[i];
		let timer = null;

		pro.src = protemp.src;
		pro.className = 'professor';
		pro.addEventListener('click', () => {
			
			score = score + 15;
			scoreEl.textContent = score;
			pro.className = 'professor_hit';
			pro.src = '../graphics/professor/professor_hit.svg'
			clearTimeout(timer)
			setTimeout(() => {

				hole.removeChild(pro)
				return run();
			}, popdown)
		}, {once : true})

		hole.appendChild(pro)
		var currenly = i;

		timer = setTimeout(() => {

			hole.removeChild(pro)
			return run();
		}, popup)

		deanrun(currenly)

		setTimeout(() =>{

			student(currently)
		}, 1000);
	
	}

	run()}


// DEAN (LOGIC MIGHT NEED CHANGING)
// //------------------------------------------------------------------------------
function deanrun(currenly){

	if(score % 25 == 0 && score > 100){

		t = Math.floor(Math.random() * holes.length);

		while(t == currenly){

			t = Math.floor(Math.random() * holes.length);
		}

		const hole2  = holes[t];

		dea.src = tempdea.src;
		dea.className = 'dean';

		dea.addEventListener('click', () => {

			score  = score + 20;
			scoreEl.textContent = score;
			dea.className = 'dean_hit';
			dea.src = '../graphics/dean/DeanNotHit.png'

			clearTimeout(timer);

		}, {once : true})

		hole2.appendChild(dea)                                                                                                                                                                                   
		timer = setTimeout(() => {

			hole2.removeChild(dea)
		}, deanPopup)
	}
}
//--------------------------------------------------------------------------------------
//
//student (LOGIC MIGHT NEED CHANGING)
function student(currenly){

	if(score % 100 == 0 && score > 100){

		h  = Math.floor(Math.random() * holes.length);

		while(t == i && h == t){

			h = Math.floor(Math.random() * holes.length);
		}

		const hole2  = holes[h];
		stu.src = tempstu.src;
		stu.className = 'student';

		stu.addEventListener('click', () => {

			score  = score - (score * .20);
			scoreEl.textContent = score;

			stu.className = 'student_hit';
			stu.src = '../graphics/student/student_hit.svg';
			setTimeout(() => {

				hole2.removeChild(stu)
			}, studentPopdown)
		}, {once : true})

		hole2.appendChild(stu)

		timer = setTimeout(() => {

			hole2.removeChild(stu)

		}, studentPopup)
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
