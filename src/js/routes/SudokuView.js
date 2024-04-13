import Component from "../classes/Component";
import Sudoku from "../logics/Sudoku";
import { SudokuDifficultyButton } from '../components/sudoku/SudokuDifficultyButton';
import { SudokuGrid } from "../components/sudoku/SudokuGrid";
import { SudokuValidateButton } from "../components/sudoku/SudokuValidateButton";

export class SudokuView extends Component {
    constructor($parent) {
        super($parent, 'div');
    }

    getInitBoard() {
        return Sudoku.generate('easy');
    }

    getUserBoard() {
        const grids = document.getElementsByClassName('sudoku-grid');
        let board = '';
        [...grids].forEach((grid) => {
            board += grid.innerHTML === '' ? '.' : grid.innerHTML;
        })
        return board;
    }

    renderTopButtons() {
        const buttons = document.createElement('div');
        buttons.className = 'd-flex justify-content-center';
        new SudokuDifficultyButton(buttons, { 'class': 'buttonicon difficulty' }, { 'text': '쉬움' });
        new SudokuDifficultyButton(buttons, { 'class': 'buttonicon difficulty' }, { 'text': '보통' });
        new SudokuDifficultyButton(buttons, { 'class': 'buttonicon difficulty' }, { 'text': '어려움' });
        new SudokuDifficultyButton(buttons, { 'class': 'buttonicon difficulty' }, { 'text': '짱어려움' });
        new SudokuDifficultyButton(buttons, { 'class': 'buttonicon difficulty' }, { 'text': '짱짱어려움' });
        new SudokuDifficultyButton(buttons, { 'class': 'buttonicon difficulty' }, { 'text': '짱짱짱어려움' });
        return buttons;
    }

    renderSudokuScreen() {
        const sudoku = this.getInitBoard();
        const screen = document.createElement('div');
        const screenWrap = document.createElement('div');
        screen.className = 'd-flex justify-content-center sudoku-container';
        for (let i = 0; i < 9; i++) {
            const sudokuWrap = document.createElement('div');
            sudokuWrap.className = 'd-flex sudoku-wrap';

            for (let j = 0; j < 9; j++) {
                const number = sudoku[i * 9 + j];
                const sudokuGrid = new SudokuGrid(sudokuWrap, { 'class': `sudoku-grid ${number !== '.' ? 'immutable' : 'mutable'}`}, { 'text': `${number !== '.' ? number : ''}`});
                sudokuGrid.$self.addEventListener('click', () => {
                    if (sudokuGrid.$self.classList.contains('mutable')) {
                        console.log(this);
                        sudokuGrid.$self.classList.add('clicked');
                    }
                })
            }
            screenWrap.appendChild(sudokuWrap);
        }
        screen.appendChild(screenWrap);
        return screen;
    }

    renderValidateButton() {
        const footer = document.createElement('div');
        footer.className = 'd-flex justify-content-center sudoku-footer';
        const validateButton = new SudokuValidateButton(footer, { 'class': 'buttonicon validate' });
        validateButton.$self.addEventListener('click', () => {
            const solveResult = Sudoku.solve(this.getUserBoard());
            console.log(solveResult);
        })
        return footer;
    }

    render() {
        this.$self.appendChild(this.renderTopButtons());
        
        this.$self.appendChild(this.renderSudokuScreen());

        this.$self.appendChild(this.renderValidateButton());
    }
}