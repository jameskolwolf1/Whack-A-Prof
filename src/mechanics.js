const cursor = document.querySelector('.cursor')
const holes = [...document.querySelectorAll('.hole')]
const scoreEl = document.querySelector('.score span')
let score = 0
const button= document.getElementById('start');
const startingM = .1;
let time = startingM * 60
const cd = document.getElementById('countdown');
const button2= document.getElementById('restart');
button2.disabled = true;


document.getElementById('start').onclick = function(){
button.disabled = true;
button2.disabled = false;
button2.style.visibility = "visible";
button.style.visibility = "hidden";
score=0
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
        return
    }
    const i = Math.floor(Math.random() * holes.length)
    const hole = holes[i]
    let timer = null

    const img = document.createElement('img')
    img.classList.add('student')
    img.src = 'mole.png'

    img.addEventListener('click', () => {
        score += 10
        img.disabled=true;
        scoreEl.textContent = score
        img.src = 'mole-whacked.png'
        clearTimeout(timer)
        setTimeout(() => {
            hole.removeChild(img)
            return run();
        }, 500)
    })

    hole.appendChild(img)

    timer = setTimeout(() => {
        hole.removeChild(img)
        return run();
    }, 1500)
}
run()}



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
