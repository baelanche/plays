import Component from "../../classes/Component";
import Sudoku from "../../logics/Sudoku"

export class SudokuGameScreen extends Component {
    constructor($parent, attribute = {}, props = {}) {
        super($parent, 'div', attribute, props);
    }

    getSudoku() {
        return Sudoku.generate("easy");
    }

    render() {
        const sudoku = this.getSudoku();

        let sudokuScreen = '';

        for (let i = 0; i < 9; i++) {
            sudokuScreen += '<div class="d-flex sudoku-wrap">';

            for (let j = 0; j < 9; j++) {
                const number = sudoku[i * 9 + j];

                sudokuScreen += `<div class="sudoku-grid ${number !== '.' ? 'immutable' : 'mutable'}">${number !== '.' ? number : ''}</div>`;
            }

            sudokuScreen += '</div>';
        }

        this.$self.innerHTML = sudokuScreen;
    }
}