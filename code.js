const question_1 = document.getElementById("question_1");
const question_2 = document.getElementById("question_2");
const question_3 = document.getElementById("question_3");
const question_4 = document.getElementById("question_4");
const question_5 = document.getElementById("question_5");

const answer_1 = document.getElementById("answer_1");
const answer_2 = document.getElementById("answer_2");
const answer_3 = document.getElementById("answer_3");
const answer_4 = document.getElementById("answer_4");
const answer_5 = document.getElementById("answer_5");

//Eventos click para mostrar y ocultar las respuestas
question_1.addEventListener("click", ()=> {
    if (answer_1.style.display == "none") {
        answer_1.style.display = "flex";
        answer_2.style.display = "none";
        answer_3.style.display = "none";
        answer_4.style.display = "none";
        answer_5.style.display = "none";
    }else{
        answer_1.style.display = "none";
    }
});

question_2.addEventListener("click", ()=> {
    if (answer_2.style.display == "none") {
        answer_2.style.display = "flex";
        answer_1.style.display = "none";
        answer_3.style.display = "none";
        answer_4.style.display = "none";
        answer_5.style.display = "none";
    }else{
        answer_2.style.display = "none";
    }
});

question_3.addEventListener("click", ()=> {
    if (answer_3.style.display == "none") {
        answer_3.style.display = "flex";
        answer_1.style.display = "none";
        answer_2.style.display = "none";
        answer_4.style.display = "none";
        answer_5.style.display = "none";
    }else{
        answer_3.style.display = "none";
    }
});

question_4.addEventListener("click", ()=> {
    if (answer_4.style.display == "none") {
        answer_4.style.display = "flex";
        answer_1.style.display = "none";
        answer_2.style.display = "none";
        answer_3.style.display = "none";
        answer_5.style.display = "none";
    }else{
        answer_4.style.display = "none";
    }
});

question_5.addEventListener("click", ()=> {
    if (answer_5.style.display == "none") {
        answer_5.style.display = "flex";
        answer_1.style.display = "none";
        answer_2.style.display = "none";
        answer_3.style.display = "none";
        answer_4.style.display = "none";
    }else{
        answer_5.style.display = "none";
    }
});
