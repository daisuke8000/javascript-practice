'use strict';

{
    const btn = document.getElementById('btn');
    btn.addEventListener('click', () => {
        const arr = ['大吉', '中吉', '凶', '吉'];
        // const triple = Math.floor(Math.random() * arr.length);
        // console.log(triple);
        // btn.textContent = arr[triple];
        const n = Math.random();
        if (n < 0.05) {
            btn.textContent = "大吉";
        } else if (n < 0.2) {
            btn.textContent = '中吉';
        } else {
            btn.textContent = '凶';
        }
        // btn.textContent = arr[Math.floor(Math.random() * arr.length)];
        // btn.textContent = triple;
        // console.log(triple);
        // switch (true) {
        //     case triple < 1:
        //         btn.textContent = '大吉';
        //         alert('大当たり！！')
        //         break;
        //     case triple <= 10:
        //         btn.textContent = '吉';
        //         break;
        //     default:
        //         btn.textContent = '凶';
        //         break;
        // }
    });
}