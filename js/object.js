'use strict';

// {
//     //初期配列
//     const scores = [80, 90, 40];
//     //末尾追加
//     scores.push(60, 100, 34, 67);
//     //先頭削除
//     scores.shift();
//     //先頭追加
//     scores.unshift(99, 29);
//     //末尾削除
//     scores.pop();
//     //配列操作
//     console.log('-----------------')
//     console.log(scores);
//     scores.splice(1, 1, 40);
//     scores.splice(0, 5, 99, 99, 99, 99, 99);
//     console.log(scores);
//     for (let i = 0; i < scores.length; i++) {
//         console.log(`Score ${i}: ${scores[i]}`)
//     }
// }
//
// {
//     const otherScores = [22, 44];
//     const scores2 = [80, 90, 12, 15, ...otherScores];
//     console.log('-----------------')
//     console.log(scores2);
//     const sumds = function (a, b) {
//         console.log(a + b);
//     }
//     sumds(...otherScores);
// }
//
// {
//     const scores3 = [80, 90, 12, 33, 76];
//     const [a, b, ...others] = scores3;
//     console.log('-----------------')
//     console.log(a);
//     console.log(b);
//     console.log(scores3);
//     console.log(others);
//
//     let x = 30;
//     let y = 70;
//     [x, y] = [y, x];
//     //ｘ，ｙのいれかえ
//     console.log(x);
//     console.log(y);
// }
// {   // forEarch(インデックスも指定できる)
//     // アロー関数での書き方
//     console.log('-----------------')
//     const scores4 = [12, 13, 14, 15, 16, 17];
//     scores4.forEach((sco, index) => {
//         console.log(`Score ${index}: ${sco}`);
//     });
//     // 普通のfunctionでの書き方
//     console.log('-----------------')
//     const scores5 = [22, 23, 24, 25, 26, 27];
//     scores5.forEach(function Fit(sco5, index5) {
//         console.log(`Score ${index5}: ${sco5}`);
//     });
// }
// {   //map
//     const price6 = [60, 70, 80];
//     //Normal
//     const updatePrice6 = price6.map((price) => {
//         return price + 30;
//     });
//     console.log('-----------------');
//     console.log(updatePrice6);
//     //oneliner
//     const updatePrice7 = price6.map(price => price + 20);
//     console.log('-----------------');
//     console.log(updatePrice7);
// }
// {
//     console.log('-----------------');
//     const numbers = [1, 3, 52, 76, 9, 10];
//     // const eventNumbers = numbers.filter(number => {
//     //     if (number % 2 === 0){
//     //         return true;
//     //     }else{
//     //         return false;
//     //     }
//     // });
//
//     //oneliner
//     const eventNumbers = numbers.filter(numbers => numbers % 2 === 0);
//     console.log(eventNumbers);
// }
// {   //make object
//     const othersProps = {
//         r: 4,
//         color: 'red',
//     };
//     const point = {x: 100, y: 200, ...othersProps};
//     console.log(point);
//
//     //propty
//     point.x = 120;
//     //x: 100 => 120
//     console.log(point);
//     //z: 90 add
//     point.z = 90;
//     y: delete
//         // delete point.y;
//         //x: 120, z: 90
//         console.log(point);
//     console.log('-----------------');
//     console.log('-----------------');
//     const {x, z, ...others} = point;
//     console.log(x);
//     console.log(z);
//     console.log(others);
//     console.log('-----------------');
//     console.log('-----------------');
//     // const keys = Object.keys(point);
//     // keys.forEach((key,i) => {
//     // console.log(`index: ${i}\nKey: ${key}\nValue: ${point[key]}`)});
//     const points = [
//         {x: 30, y: 50},
//         {x: 90, y: 110},
//         {x: 180, y: 50},
//     ]
//     console.log(points[0].y);
//     console.log(points[1].y);
//     console.log(points[2].x);
// }
// {
//     let x = [1, 2];
//     let y = [...x];
//     x[0] = 5;
//     console.log(x);
//     console.log(y);
// }
// {
//     const str = 'hello';
//     console.log(str.length);
//     console.log(str.substring(2, 4));
//     console.log(str[1]);
// }
// {
//     const d = [2020, 9, 1];
//     const t = '17:08:24';
//     console.log(t.split(':'));
//     const [hour, min, sec] = t.split(':');
//     console.log(`hour: ${hour}`);
//     console.log(`min: ${min}`);
//     console.log(`sec: ${sec}`);
// }
// {
//     const score10 = [20, 46, 82, 11];
//     let sumA = 0;
//     score10.forEach(score => {
//         sumA += score;
//     })
//
//     const avgA = sumA / score10.length;
//     console.log(sumA);
//     console.log(avgA);
//     //繰り下げ
//     console.log(Math.floor(avgA));
//     //繰り上げ
//     console.log(Math.ceil(avgA));
//     //四捨五入
//     console.log(Math.round(avgA));
//     //少数点指定位置までを表示
//     console.log(avgA.toFixed(3));
//     //ランダム（０〜１未満）
//     console.log(Math.random());
// }
// {
//     //0,1,2
//     console.log(Math.floor(Math.random() * 3));
//     //0,...n
//     //最後の１を入れないと０を含む
//     console.log(Math.floor(Math.random() * (10 + 1)));
//     //サイコロ
//     // Math.floor(Math.random() * (max + 1 - min)) + min
//     console.log(Math.floor(Math.random() * 6 + 1 - 1) + 1);
// // }
// {
//     const d = new Date();
//     console.log(`${d.getMonth() + 1}月 ${d.getDate()}日`)
//     //年と月を入力(月は 0,1,2 = 1,2,3月扱い..)
//     const dw = new Date(2020, 8);
//     //hour,min,sec
//     dw.setHours(10, 20, 30);
//     //day(1~31)ただし、30日までの月で31を入力などすると月をまたぐ仕様
//     dw.setDate(31)
//     console.log(dw)
// }
// {
//     //alert('hello');
//     let answer = confirm('削除しちゃう？');
//     //Normal
//     if (answer) {
//         console.log('delete');
//     } else {
//         console.log('cancel');
//     }
//     ;
//oneliner
// answer ?  console.log('delete') : console.log('cancel');
// }
// {
//roop1
// let i = 0;
// function showTime(){
//     console.log(new Date());
//     i++;
//     if (i > 2){
//         clearInterval(intervalId);
//     }
// };
// // showTimeの後ろに()をつけないのがポイント
// const intervalId = setInterval(showTime,1000);
// setTimeout(showTime, 1000);

//roop2
//     let xi = 0;
//
//     function showTime() {
//         console.log(new Date());
//         const timeoutId = setTimeout(showTime, 1000);
//         xi++;
//         if (xi > 2) {
//             clearTimeout(timeoutId);
//             console.log("end!")
//         }
//     };
//     showTime();
// }
// {
//     try {
//         // const name = 'sasaki';
//         const name = 5;
//         console.log(name.toUpperCase());
//     } catch (e) {
//         console.log(e);
//     }
//     console.log('Finish!')
// }
// {
//     const posts = [
//         {
//             text: 'Hello JavaScript!',
//             likeCount: 0,
//             // show: function () {
//             //     console.log(`${this.text} - ${this.likeCount}いいね！`);
//             // },
//             show() {
//                 console.log(`${this.text} - ${this.likeCount}いいね！`);
//             },
//         },
//         {
//             text: 'bye!',
//             likeCount: 2,
//             show() {
//                 console.log(`${this.text} - ${this.likeCount}いいね！`);
//             },
//         },
//     ];
//
//     // for (let i = 0; i < posts.length; i++){
//     //     show(posts[i]);
//     // };
//     // show(posts[0]);
//     posts[0].show();
//     posts[1].show();
// }
{
    // 親クラス
    class Post {
        constructor(text) {
            this.text = text;
            this.likeCount = 0;
        }

        show() {
            console.log(`${this.text} - ${this.likeCount}likes！`);
        }

        like() {
            this.likeCount++;
            this.show();
        }

        // //静的method
        // //thisは使えない。静的メソッドはインスタンスを生成しないから。
        // static showInfo() {
        //     console.log("Post class version 1.0");
        // }
    }

    //子クラス
    class SponsoredPost extends Post {
        constructor(text, sponsor) {
            //子クラスのコンストラクタで"this"を使うために親クラスのコンストラクタを呼ぶため、"super"の記述がいる
            //こっちでも"text"は使っているので引数としてわたしてあげる。
            super(text);
            this.sponsor = sponsor;
        }

        show() {
            //親クラスのshowを使うのに以下の記述の仕方をする。
            super.show();
            console.log(`...sponsored by ${this.sponsor}`);
        }
    }


    const posts = [
        new Post('Hello JavaScript!'),
        new Post('Bye JavaScript!'),
        new SponsoredPost('お試し広告！', 'hogehoge社長'),
    ];
    // Post.showInfo();
    // posts[0].show();
    // posts[0].like();
    // posts[1].show();
    posts[2].show();
    posts[2].like();
}

// {
//     class You {
//         constructor(who) {
//             this.name = who;
//             this.text = "Happy Birthday";
//         };
//
//         message() {
//             console.log(`${this.text}, ${this.name}!!`);
//         }
//     }
//
//     const birth = new You('kaonashi')
//     birth.message();
//     new You('kaoari').message();
// }