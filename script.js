'use strict';
// please do not delete the 'use strict' line above

// document.getElementById('color-button').addEventListener('click', changeColor)

// function changeColor() {
//   console.log('Button clicked!'); // feel free to change/delete this line
// }


// 6. クリックしたらページの色が変わるボタンを作りましょう。
// 色はボタンをクリックするたびにランダムで決まります。

// 手順
// 4.コードを修正して実装にとりかかりましょう。

// 'use strict';
// please do not delete the 'use strict' line above

// document.getElementById('color-button').addEventListener('click', changeColor)

// function changeColor() {
//     console.log('Button clicked!'); // feel free to change/delete this line
//     let colorString = "#";
//     for (let i = 0; i < 3; i++){
//         let cStr = Number(Math.trunc(Math.random() * 256)).toString(16);
//         if (cStr.length < 2){
//             cStr = "0" + cStr;
//         }
//         colorString += cStr;
//     }
//     document.body.style.backgroundColor = colorString;
// }


// 5.ページの色が変わるボタンの作成が終わっら、新しい要素やボタンを追加して何かおもしろい機能を追加してください。
// 次に例を挙げます。

let changeColor = false;

document.getElementById('color-button').addEventListener('click', () =>{
    console.log('Button clicked!');
    changeColor = !changeColor;
});

const randomColor = window.setInterval(function (){
    if (changeColor){
        let colorString = "#";
        for (let i = 0; i < 3; i++){
            let cStr = Number(Math.trunc(Math.random() * 256)).toString(16);
            if (cStr.length < 2){
                cStr = "0" + cStr;
            }
            colorString += cStr;
        }
        document.body.style.backgroundColor = colorString;
    }
}, 100);