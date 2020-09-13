// {
//     // function update() {
//     //     // document.querySelector('p').textContent = 'Changed p!'
//     //     const getTexts = document.querySelectorAll('p');
//     //     getTexts.forEach((text, i) => {
//     //         console.log(i, text);
//     //         text.textContent = 'おはようございます！';
//     //     })
//     // };
//
//     document.querySelector('button').addEventListener("click", () => {
//         // const item3 = document.createElement('li');
//         // item3.textContent = 'test3';
//         // const ulNode = document.querySelector('ul');
//         // ulNode.appendChild(item3);
//         // const targetNode = document.getElementById('target')
//         // targetNode.className = 'mycolor myborder';
//         // targetNode.classList.add('mycolor');
//         // if (targetNode.classList.contains('mycolor') === true) {
//         //     targetNode.classList.remove('mycolor');
//         // } else {
//         //     targetNode.classList.add('mycolor');
//         // }
//         // targetNode.classList.toggle('mycolor');
//         // targetNode.textContent = 'The Title Text!';
//         // targetNode.textContent = targetNode.dataset.translation;
//         // const item1 = document.querySelectorAll('li')[0];
//         // const copy = item1.cloneNode(true);
//         // const ulNode = document.querySelector('ul');
//         // const item2 = document.querySelectorAll('li')[2];
//         // ulNode.insertBefore(copy, item2);
//     old Brouza only..
//        const rem = document.querySelectorAll('li');
//        rem.remove();
//     });
// }
// {
//     document.querySelector('button').addEventListener("click", () => {
//         const item = document.querySelectorAll('li')[1];
//         const rem = document.querySelector('ul');
//         rem.removeChild(item);
//     });
// }
// {
//     document.querySelector('button').addEventListener("click", () => {
//         const li = document.createElement('li');
//         const text = document.querySelector('input');
//         li.textContent = text.value;
//
//         const node = document.querySelector('ul');
//         node.appendChild(li);
//
//         text.value = null;
//         text.focus();
//     });
// }
// {
//     //selectbox
//     document.querySelector('button').addEventListener("click", () => {
//         const li = document.createElement('li');
//         const color = document.querySelector('select');
//         li.textContent = `${color.value} - ${color.selectedIndex}`;
//         document.querySelector('ul').appendChild(li);
//     });
// }
// {
//     //radiobutton
//     document.querySelector('button').addEventListener("click", () => {
//         const colors = document.querySelectorAll('input');
//         let selectedColor;
//         colors.forEach(color => {
//             if (color.checked === true) {
//                 selectedColor = color.value;
//             }
//         });
//         const li = document.createElement('li');
//         li.textContent = selectedColor
//         document.querySelector('ul').appendChild(li);
//     });
// }
// {
//     //checkbox
//     document.querySelector('button').addEventListener("click", () => {
//         const checkboxs = document.querySelectorAll('input');
//         const selectBoxs = [];
//         checkboxs.forEach((checkbox => {
//             if (checkbox.checked === true) {
//                 selectBoxs.push(checkbox.value);
//             }
//         }));
//         const li = document.createElement('li');
//         li.textContent = selectBoxs;
//         document.querySelector('ul').appendChild(li);
//
//     });
// }
// {
//     document.querySelector('button').addEventListener('dblclick', () => {
//         console.log('dblclick!')
//     });
//     document.addEventListener('mousemove',e => {
//         //console.log('moved!')
//        console.log(e.clientX,e.clientY);
//     });
//     document.addEventListener('keydown',e => {
//         console.log(e.key);
//     });
// }
// {
//     const text = document.querySelector('textarea');
//     // text.addEventListener('focus', () => {
//     //     console.log('focus on')
//     // });
//     //
//     // text.addEventListener('blur', () => {
//     //     console.log('focus off')
//     // });
//     text.addEventListener('input', () => {
//         // console.log(text.textLength);
//         console.log(text.value.length);
//     });
//
//     text.addEventListener('change', () => {
//         console.log('change!');
//     });
// }
// {
//     document.querySelector('form').addEventListener('submit',e => {
//         e.preventDefault();
//         console.log('submit');
//     })
// }
{
    document.querySelector('ul').addEventListener('click', e => {
        if (e.target.nodeName === 'LI') {
            e.target.classList.toggle('done')
        };
    });
}
