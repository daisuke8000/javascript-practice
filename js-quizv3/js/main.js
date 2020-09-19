'use strict';
{
    const question = document.getElementById('question');
    const choices = document.getElementById('choices');
    const btn = document.getElementById('btn');
    const result = document.getElementById('result');
    const scoreLabel = document.querySelector('#result > p')

    const quizSet = shuffle([
        {q: 'The largest lake in the world?', c: ['Caspian Sea', 'Caribbean Sea', 'moraine lake']},
        {q: 'The biggest mountain in the world?', c: ['Everest', 'Manaslu', 'K2']},
        {q: 'The most densely populated country in the world?', c: ['Bangladesh', 'South Korea', 'Rwanda']},
    ]);
    let currentNum = 0;
    let isAnswered;
    let score = 0;

    function shuffle(arr) {
        for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[j], arr[i]] = [arr[i], arr[j]];
        }
        return arr;
    }

    function checkAnswer(li) {
        if (isAnswered) {
            return;
        }

        isAnswered = true;
        if (li.textContent === quizSet[currentNum].c[0]) {
            li.classList.add('correct');
            score++;
        } else {
            li.classList.add('wrong');
        }
        btn.classList.remove('disabled');
    }

    function setQuiz() {
        isAnswered = false;
        question.textContent = quizSet[currentNum].q;
        while (choices.firstChild) {
            choices.removeChild(choices.firstChild);
        }


        // "[...[何かしらの配列]]"の形（スプレッド構文）にすることで要素の参照を保って別の配列を生成できる。
        //　つまりコピーされた違う配列ができるため、元の配列の要素を変化させる恐れがない。
        const shuffledChoices = shuffle([...quizSet[currentNum].c]);
        console.log(quizSet[currentNum].c)

        shuffledChoices.forEach(choice => {
            const li = document.createElement('li');
            li.textContent = choice;
            li.addEventListener('click', () => {
                checkAnswer(li);
            })
            choices.appendChild(li);
        });

        if (currentNum === quizSet.length - 1) {
            btn.textContent = "Show Score!";
        }
    }

    setQuiz();
    btn.addEventListener('click', () => {
        if (btn.classList.contains('disabled')) {
            return;
        }
        btn.classList.add('disabled');

        if (currentNum === quizSet.length - 1) {
            scoreLabel.textContent = `Score: ${score} / ${quizSet.length}`
            result.classList.remove('hidden');
        } else {
            currentNum++;
            setQuiz();
        }
    })
}