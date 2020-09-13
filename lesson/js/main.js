'use strict'
let price = 500;
let price2 = 200;

//変数の計算
// price += price; //1000
// price -= price2; //800
// console.log(price); //800

//型の確認
// console.log(typeof 'hello');
// console.log(typeof 6);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(null);

//比較演算子
// const price3 = 1200;
// console.log(price3 > 1000);
// console.log(price3 < 1000);
// console.log(price3 >= 1000);
// console.log(price3 <= 1000);
// console.log(price3 === 1000);
// console.log(price3 !== 1000);

//
// const score = 20;
// if (score >= 80) {
//     console.log('Greeeeeeeaaaat!!');
// }else if (score >= 60){
//     console.log('good!!');
// }else{
//     console.log('ok...');
// }
//
// const score = 80;
// const name = 'sasaki';
// //短縮if文
// score >= 80 ? console.log('great!') : console.log('ok!');
// //論理演算子_patarnA
// // if (score >= 60) {
// //     if (name === 'sasaki'){
// //         console.log('Good Job!');
// //     }
// // }
// //論理演算子_patarnB
// if (score >= 70 && name === 'sasaki') {
//     console.log('Good Job!');
// }

//switch
// const signal = 'pink';
//
// switch (signal) {
//     case 'red':
//         console.log('stop');
//         break;
//     case 'yellow':
//         console.log('caution');
//         break;
//     case 'blue':
//     case 'green':
//         console.log('go');
//         break;
//     default:
//         console.log('wrong signal!');
//         break;
// }
//for templateリテラル
// for (let i = 1; i <= 10; i++) {
//     console.log(`hello ${i}`);
// }
//while
// let hp = 100;
// while (hp > 0) {
//     console.log(`残り、${hp}です。`);
//     hp -= 15;
// let hp = -50;
// do {
//     console.log(`残り、${hp}です。`);
//     hp -= 15;
// } while (hp > 0)
// for (let i = 1; i <= 10; i++) {
//     if (i === 4){
//         // continue;
//         break;
//     }
//     console.log(i);
// }

//function
// function instAd(message = '引数を設定しないとこれがデフォルト表示されるよ'){
//     console.log('--------------------');
//     console.log(`${message}`);
//     console.log('--------------------');
// }

// instAd('Header');
// console.log('Tom is Great!');
// instAd('Header_second');
// console.log('Bob is Great!');
// instAd()
// // instAd('Header_third');
// console.log('Steve is Great!');
// instAd('Header_end');
// console.log('Richard is Great!');

// function sum(a,b,c){
//     // console.log(a + b + c);
//     return a + b + c;
// }

// const sum = function(a,b,c){
//     return a + b + c;
// };
// const sum = (a,b,c) => a + b + c;
// let vd = sum(1,2,3);
// let bd = sum(3,4,6);
// const total = vd + bd;
// console.log(total);

const a = 5;
const double = function (a) {
    return a * 2;
}

const doubles = (a) => a * 2;

console.log(double(2));
console.log(doubles(10));
console.log(a)
{
    const x = 100;
    console.log(x);
}


