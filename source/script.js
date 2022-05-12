const start_btn = document.querySelector(".start_btn button");
const home_screen = document.querySelector(".start_btn");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const country_advise_text = document.getElementById("country-advise-text");
const country_flag = document.getElementById("country-flag");

start_btn.onclick = ()=>{
    showQuetions(0);
    info_box.classList.add("activeInfo");
    home_screen.style.visibility='hidden';
}

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    home_screen.style.visibility='visible';
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuetions(0);
}

let que_count = 0;
let que_numb = 1;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    que_count = 0;
    que_numb = 1;
    showQuetions(que_count);
    questionCounter(que_numb);
    next_btn.classList.remove("show");
}

quit_quiz.onclick = ()=>{
    window.location.reload();
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");
bottom_ques_counter.innerHTML = '<span><p>'+ 1 +'</p> of <p>'+ questions.length +'</p> Questions</span>';

next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++;
        que_numb++;
        showQuetions(que_count);
        questionCounter(que_numb);
        next_btn.classList.remove("show");
    }else{
        showResult();
    }
}

function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
        + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'

    //Voor 3 opties - Repeat voor 4 opties.
    if (questions[index].options[2] != null) {
        option_tag += '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    }
    if (questions[index].options[3] != null) {
        option_tag += '<div class="option"><span>'+ questions[index].options[3] +'</span></div>'
    }

    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");

    for(let i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';

function optionSelected(answer){
    let userAns = answer.textContent;
    const allOptions = option_list.children.length;

    let key = "answer_" + questions[que_count].numb;
    localStorage.setItem(key, userAns);
    answer.setAttribute("class", "option correct");
    answer.insertAdjacentHTML("beforeend", tickIconTag);

    for(let i = 0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled");
    }
    next_btn.classList.add("show");
}

function showResult(){
    info_box.classList.remove("activeInfo");
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    adviceLocation();
}

function questionCounter(index){
    let questionNumber = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = questionNumber;
}

function adviceLocation() {
    let answer1 = localStorage.getItem("answer_1");
    let answer2 = localStorage.getItem("answer_2");
    let answer3 = localStorage.getItem("answer_3");
    let answer4 = localStorage.getItem("answer_4");
    let answer5 = localStorage.getItem("answer_5");

    fetch('http://localhost:3000/game/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json, text/plain, */*'
        },
        body: JSON.stringify({answerOne: answer1, answerTwo: answer2, answerThree: answer3, answerFour: answer4, answerFive: answer5})
    })
        .then(async (res) => {
            if (res.status === 200) {
                let country = await res.json();
                country_advise_text.innerHTML = country;
                setCountryFlag(country);
            } else {
                alert("Error");
            }
        })
}

function setCountryFlag(country) {
    let url = 'http://localhost:3000/game/' + country;

    fetch( url, {
        method: 'GET',
        headers: {
            'Content-Type': 'image/png',
            'Content-Transfer-Encoding': 'base64',
            'Accept': 'application/json, text/plain, image/png',
            'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Content-Encoding'
        },
    })
        .then(res => res.blob())
        .then(blob => {
            country_flag.src = window.URL.createObjectURL(blob);
        })
}