const quizDB = [
    {
        question: "In which decade was the American Institute of Electrical Engineers (AIEE) founded?",
        options:
        {
            A: "1850s",
            B: "1880s",
            C: "1930s",
            D: "1950s"
        },
        Option: "ansb"
    },
    {
        question: "What is part of a database that holds only one type of information?",
        options:
        {
            A: "Report",
            B: "Field",
            C: "Record",
            D: "File"
        },
        Correct: "ansb"

    },
    {
        question: "'OS' computer abbreviation usually means ?",
        option: {
            A: "Order of Sigificance",
            B: "Open Software",
            C: "Operating System",
            D: "Optical Sensor"
        },
        Correct: "ansc"
    },
    {
        question: "In which decade with the first transatlantic radio broadcast occur?",

        options: {
            A: "1850s",
            B: "1860s",
            C: "1870s",
            D: "1900s"
        },
        Correct: "ansd"
    },
    {
        question: "'.MOV' extension refers usually to what kind of file?",

        options: {
            A: "Image file",
            B: "Animation/movie file",
            C: "Audio file",
            D: "MS Office document"

        },
        Correct: "ansb"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const sumbit = document.querySelector('#sumbit');
const answers = document.querySelectorAll('.answer');

const showScore=document.querySelector('#showScore')

let questionCount = 0;
let score=0;
const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.options.A;
    option2.innerHTML = questionList.options.B;
    option3.innerHTML = questionList.options.C;
    option4.innerHTML = questionList.options.D;

}
const getCheckAnwser = () =>
 {

    let answer;
    answers.forEach((curAnsElem) =>{
        if (curAnsElem.checked)
         {
            answer = curAnsElem.id;
            // console.log(curAnsElem);
        }

    });
    return answer;
 }
    loadQuestion();

    sumbit.addEventListener('click', () => {
        const checkAnswer = getCheckAnwser();
        console.log(checkAnswer);

        if(checkAnswer==quizDB[questionCount].Correct){
        score++;
        };
        questionCount++;
        if(questionCount<quizDB.length)
        {   
        loadQuestion();
        } 
        else{
            showScore.innerHTML=`
            <h3>Your Score ${score}/${quizDB.length}</h3>
            <button class="btn" onclick="location.reload()"></button>
        `;
        showScore.classList.remove('scoreArea');
        }

          

    })

