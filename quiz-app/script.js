        // Variavel com as perguntas do quiz

const quizData = [
    {
        question: "Qual a data de nascimento do criador do quiz?",
        a: "21/03/2002",
        b:"21/03/1998",
        c: "21/09/1993",
        d: "23/03/2001",
        correct: "a"
    }, {
        question: "Em qual linguagem de progamação esse quiz foi escrito?",
        a: 'Python',
        b: 'Java',
        c: 'C',
        d: 'JavaScript',
        correct: 'd'
    }, {
        question: 'Quando surgiu a lingaguem JavaScript?',
        a: '1995',
        b: '1997',
        c: '2001',
        d: '1985',
        correct: 'a'
    }, {
        question: 'Qual o nome do garoto que é feito de borracha e quer ser o rei dos piratas?',
        a: 'Goku',
        b: 'Naruto',
        c: 'Luffy',
        d: 'Gon',
        correct: 'c'
    }, {
        question: 'Qual a maneira correta de se declarar uma variável em Javascript?',
        a: 'var = a',
        b: 'var = a()',
        c: 'var nome = a();',
        d: 'var nome = a;',
        correct: 'd'
    }

];

    // outras váriaveis

const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz")
const a_text = document.getElementById("a_text"); 
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit-btn")


let currentQuiz = 0;
let score = 0;


    //iniciando o quiz
loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    const answersEl = document.querySelectorAll(".answer");

    let answer = undefined;

    answersEl.forEach((answersEl) => {
        if(answersEl.checked) {
            answer = answersEl.id;
        }
    });

    return answer;
}

submitBtn.addEventListener('click', () => {

    // checar pra ver se tem resposta
    const answer = getSelected();

    //Adicionando score se a resposta estiver correta

    if(answer) {
        if(answer == quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            
            quiz.innerHTML = `<h2>Você chegou ao final do quiz. Agora relaxe e tome um café ( ͡❛ ‿ ͡❛)</h2>
            <p> Acertou ${score} de 5 questões
            <button onclick="location.reload()">Tentar Novamente</button>`;

        }

    }

});

        //A data de nascimento do criador é 21/03/2002 caso não tenha encontrado em nenhum outro lugar xD