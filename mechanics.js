const holes = [...document.querySelectorAll('.hole')]
const scoreElement = document.querySelector('.score .span')
const cursor = document.querySelector('.cursor')

let score = 0
let timer = null

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
run()

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
