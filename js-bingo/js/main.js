'use strict';
{

    function createColumn(col) {
        //配列B生成
        const source = [];
        const array = 15
        for (let i = 0; i < array; i++) {
            source.push(i + 1 + 15 * col);
        }

        //配列Bからランダム抽出
        const column = [];
        for (let i = 0; i < 5; i++) {
            column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
        }
        return column;
    }

    function createColumns() {
        const columns = [];
        for (let i = 0; i < 5; i++) {
            columns[i] = createColumn(i);
        }
        columns[2][2] = 'FREE';
        return columns;
    }

    // function createBingo(columns) {
    //     const bingo = [];
    //     for (let row = 0; row < 5; row++) {
    //         bingo[row] = [];
    //         for (let col = 0; col < 5; col++) {
    //             bingo[row][col] = columns[col][row];
    //         }
    //     }
    //     return bingo;
    // }

    //さらに短縮
    function renderBingo(columns){
        for (let xrow = 0; xrow < 5; xrow++) {
            const tr = document.createElement('tr');
            for (let col = 0; col < 5; col++) {
                const td = document.createElement('td');
                td.textContent = columns[col][xrow];
                tr.appendChild(td);
            }
            document.querySelector('tbody').appendChild(tr);
        }
    }

    // function renderBingo(bingo){
    //     for (let xrow = 0; xrow < 5; xrow++) {
    //         const tr = document.createElement('tr');
    //         for (let col = 0; col < 5; col++) {
    //             const td = document.createElement('td');
    //             td.textContent = bingo[xrow][col];
    //             tr.appendChild(td);
    //         }
    //         document.querySelector('tbody').appendChild(tr);
    //     }
    // }
    const columns = createColumns();
    // const bingo = createBingo(columns);
    renderBingo(columns);
}