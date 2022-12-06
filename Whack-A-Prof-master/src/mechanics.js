//intro
//------------------------------------------------------------------------
let intro = document.querySelector('.intro');
let whackAPro = document.querySelector('.game-header');
let whackASpan = document.querySelectorAll('.Wack-A-Professor');
let run = false;

//cursor and two array one for random getting a hole and the other for 
//O(L) which is the length of the array, I will explain it later thro the 
//code
//------------------------------------------------------------------------
const cursor = document.querySelector('.cursor')
const holes = document.querySelectorAll('.hole')
const truthHole = [];

//This is for popup
//------------------------------------------------------------------------

let popup = document.getElementById("popup");

// Use for gettig the hole in a index 
//------------------------------------------------------------------------
let hole = null;
//------------------------------------------------------------------------

// Used to get the score are a number and convert as a string and display it 
//------------------------------------------------------------------------
const scoreEl = document.querySelector('.score span')
let score = 0;
var preScore = 0;
//------------------------------------------------------------------------

//Start button 
//------------------------------------------------------------------------
const startButton = document.getElementById('start');
//------------------------------------------------------------------------

//Timer
//-----------------------------------------------------------
const startingM = 2;
var time = startingM * 60;
//-----------------------------------------------------------

//timer and gamesrest is not being use at this moment
//-----------------------------------------------------------
const cd = document.getElementById('countdown');
const gamerest = document.getElementById('start');

//Popup and Popdown timming for Professor
//-----------------------------------------------------------
 let stayup = 3500;
 let staydown = 1500;
//-----------------------------------------------------------


//Popip and Popdown timming for student
//------------------------------------------------------------
let studentPopup = stayup 
let studentPopdown = staydown - (staydown * .1)
//------------------------------------------------------------

// indexies for the student, dean, prfoessor, and admin
//-----------------------------------------------------------
var t = 0;
var h = 0;
var i = 0;
var k = 0;
// var seconds = 0;
// const min = 0;
//-----------------------------------------------------------


// start transition
// ------------------------------------------------------------------------
window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {

       
        whackASpan.forEach((span, idx) => {

            setTimeout(() => {

                span.classList.add('active');
                

            }, (idx + 1) * 400)
       }) 

       setTimeout(() => {
        
            whackASpan.forEach((span, idx) => {
            
                setTimeout(() => {
                
                    span.classList.remove('active');
                    span.classList.add('fade');

                }, (idx + 1) * 500)
            })
        },2000);

        setTimeout(() => {

            intro.style.top = '-500vh'
            whackAPro.remove();

        },5500);
    })
    run = true;
})
//------------------------------------------------------------------------

//Game starting button, runGame() is fuction of the game and clockRun() is
//the clock 
document.getElementById('start').onclick = function () {


    runGame();
    clockRun();
}

//This is to get the time when is a number divide by 60 to get the minintes and then 
//get second by getting the remainer and then convert it into a string and and then 
//countdown and it is using recursion
function clockRun(){

    setInterval(update, 1000)

    function update(){

        const min = Math.floor(time/60);
        let seconds = time%60;
        let secondString = seconds < 10 ? '0' + seconds : seconds;

        cd.innerHTML = min + ":" + secondString;
        if(time > 0){

            time--;
        }
    }
}

//This is going to going to take an index and that look in the truthhole to see if its is false or true
//if its false then it will convert to true and return the index. If it is false then it will get a 
//another random index from 0 - 7 to find a place in the array to see if it is true or not. 
//This is O(L) and not O(n) because if I did O(n) its still going linear at random but when it come to
//other code itself, when there 4 element in play, I have to comapre a index with another index, with 
//anther index with final another index. I;m compaaring 4 index (its like im (n) 4 times in a sense is 
//not really n^4 its more like O(4n))which can take more 
//time and can be buggy but if I make a array with boolean with the same size of the array and then 
// compare weather the index is being use in true and false, I can take ONE index and that array and see
// if that place in the index is true or false, This is basic on length because we are dealing with 4 
// objects and that better the array for this problem the better so if one object is true then the 
// chance of getting a true is 1/9 = .11.., of two object is 2/9 = .22.. , 3/9 = .333, 4/9 = .4444, 
// this is great. because if the array was long then the percent of the worst case (depend on how it 
// is being used) is great and fast. 
function setLookTruth(num){

    if(truthHole[num] == false){
            
        truthHole[num] = true;
        
        return num;
    }
    else {

        while(truthHole[num] == true){

            num = Math.floor(Math.random() * holes.length)
        }
        truthHole[num] = true;
        return num;
    }
}

//This is fuction that is running the game, its has other fuction but it is basically copy and paste so 
//what is when the element is click it will there give, take, add time to the player, there is some "animation"
//when you click on the element when when the element disaper (when the timer/pause count down to zero) it will 
//turn the index that is have in turth hole into false
function runGame(){

//Professor images
//-----------------------------------------------------------
    let pro = document.createElement("img");
    pro.src = 'graphics/professor/professor.svg';
    pro.id = "professor";
    pro.classList.add('professor');

//----------------------------------------------------------

    if(time == 0){
        return;
    }

    i = Math.floor(Math.random() * holes.length);

    if(truthHole[setLookTruth(i)] == true){

        hole = holes[i];
        let timer = null;

        pro.addEventListener('click', () => {

            score += 15;
            scoreEl.textContent = score;

            pro.id = 'professor_hit';
            pro.src = 'graphics/professor/professor_hit.svg';

            setTimeout(() => {

                // pro.id = 'professor_win';
                // pro.src = 'graphics/professor/professor_win.svg';

                pro.id = "professor_lose";
                pro.src = 'graphics/professor/professor_lose.svg';

            }, 500)
            
            // setTimeout(() => {

                
            // }, 100)
            clearTimeout(timer);

            setTimeout(() => {

                hole.removeChild(pro);
                return runGame();
            }, 3000)

        }, {once : true})

        // setTimeout(() => {
        // }, 500)
        // pro.id = 'professor_win';
        // pro.src = 'graphics/professor/professor_win.svg';

        hole.appendChild(pro);

        timer = setTimeout(() => {


            // pro.id = 'professor_win';
            // pro.src = 'graphics/professor/professor_win.svg';

            hole.removeChild(pro);
            return runGame();
        }, stayup) 

        truthHole[i] = false;
        deanrun();
        student();
        admin();
    }

}

function deanrun(){

//Dean images
//----------------------------------------------------------
    const dea = document.createElement("img");
    dea.src = 'graphics/dean/dean.svg';
    dea.id = '.dean';
    dea.classList.add('dean');
//---------------------------------------------------------

//Popup and Popdown timming for dean (Testing)
//------------------------------------------------------------
let deanPopup = stayup //- (popup * .1)
let deanPopdown = staydown //- (popdown * 1)
//------------------------------------------------------------

let hole2 = null;

    if(score % 25 == 0 && score > 100){

        t = Math.floor(Math.random() * holes.length);
        

        if(truthHole[setLookTruth(t)] == true){

            hole2  = holes[t];
            let timer = null;


            dea.addEventListener('click', () => {

                score  = score + 20;
                scoreEl.textContent = score
                

                dea.id = 'dean_hit';
                dea.src = 'graphics/dean/dean_hit.svg'

                setTimeout(() => {

                    dea.id = 'dean_lose';
                    dea.src = 'graphics/dean/dean_lose.svg'
                },500)

                clearTimeout(timer);

                setTimeout(() => {
                hole2.removeChild(dea)

                }, 2000)
            }, {once : true})
    
            hole2.appendChild(dea)

            timer = setTimeout(() => {
                hole2.removeChild(dea)
            
            },2000)

            truthHole[t] = false;
            
        }
        

    }
}

function student(){
    

    //Student images
//---------------------------------------------------------
    const stu = document.createElement("img");
    stu.src = 'graphics/student/student.svg';
    stu.id = '.student';
    stu.classList.add('student');
//---------------------------------------------------------

    let hole3 = null;

    if(score % 100 == 0 && score > 100){


        
        h = Math.floor(Math.random() * holes.length);

        if(truthHole[setLookTruth(h)]){

            hole3 = holes[h]
            let timer = null;

            stu.addEventListener('click', () => {

                score  = score / 2;
                scoreEl.textContent = score
                

                stu.id = 'student_hit';
                stu.src = 'graphics/student/student_hit.svg'

                setTimeout(() => {

                    stu.id = 'student_lose';
                    stu.src = 'graphics/student/student_lose.svg';
                },500)

                clearTimeout(timer);

                setTimeout(() => {
                hole3.removeChild(stu)

                }, 3000)
            }, {once : true})
    
            hole3.appendChild(stu)

            timer = setTimeout(() => {
                hole3.removeChild(stu)
            
            },3000)

            truthHole[h] = false;
        }

    }
}

function admin(){

    //Admin images
//---------------------------------------------------------
    const adm = document.createElement("img");
    adm.src = 'graphics/admin/Admin_Default.svg'
    adm.id = '.admin';
    adm.classList.add('admin');

    let hole4 = null;

    if(score % 300 == 0 && score > 700){

        k = Math.floor(Math.random() * holes.length);

        if(truthHole[setLookTruth(k)]){

            hole4 = holes[k];
            let timer = null;

            adm.addEventListener('click', () => {

                
                seconds = seconds + 1%60;
                let secondString = seconds < 10 ? '0' + seconds : seconds;
                cd.innerHTML = min + ":" + secondString;

                adm.id = 'admin_hit';
                adm.src = 'graphics/admin/Admin_hit.svg'

                setTimeout(() => {

                    adm.id = 'admin_lose'
                    adm.src = 'graphics/admin/Admin_lose.svg';

                },500)

                clearInterval(timer);

                setTimeout(() => {

                    hole4.removeChild(adm);
                }, 4000)

            }, {once : true})

            hole4.appendChild(adm);

            timer = setTimeout(() => {

                hole4.removeChild(adm)
            },4000)

            truthHole[k] = false;
        }

    }
//---------------------------------------------------------

}

// this going to make some of the display in the begining game remove when you press the start button 
// and then full the truthhole array will all false boolean
function startGame(){

    let startDiv = document.getElementById("start");
    let gameCanvas = document.getElementById("canvas");
    let gameOver = document.getElementById("game-over");
    let tutorialdiv = document.getElementById("tutorial");
    let board = document.getElementsByClassName('board')[0];

    startDiv.style.display = "none";
    gameCanvas.style.display = "block";
    gameOver.style.display = "none";
    tutorialdiv.style.display = "none";
    board.style.visibility = "visible";

    for(var d = 0; d<8 ; d++){
    
        truthHole.push(false);
    }
    
}

//This is used to open the instruction when pressing the tutorial button and click ok to take it off 
function openPopup() {

    popup.classList.add("open-popup");
}
function closePopup() {
    popup.classList.remove("open-popup");
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


