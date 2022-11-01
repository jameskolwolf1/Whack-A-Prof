const holesdiv  = document.querySelector(".holes");
const score = document.querySelector(".score");
const time = document.querySelector(".time");



for(let i = 1; i <= 9;i++){
    let hole = document.createElement("div")
    hole.classList.add("hole")
    holesdiv.appendChild(hole);

    let student = document.createElement("img");
    student.classList.add("student");
    student.src = "./images/student.png";

    let professor = document.createElement("img");
    professor.classList.add("professor");
    professor.src = "./images/professor.png";

    let dean = document.createElement("img");
    dean.classList.add("dean");
    dean.src = "./images/dean.png";

    let admin = document.createElement("img");
    admin.classList.add("admin");
    admin.src = "./images/admin.png";



}
