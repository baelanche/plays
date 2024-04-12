import Component from "../classes/Component";
import Sudoku from "../logics/Sudoku";
import { SudokuDifficultyButton } from '../components/sudoku/SudokuDifficultyButton';
import { SudokuGameScreen } from "../components/sudoku/SudokuGameScreen";
import { SudokuValidateButton } from "../components/sudoku/SudokuValidateButton";

export class SudokuView extends Component {
    constructor($parent) {
        super($parent, 'div');
    }

    getBoard() {
        const grids = document.getElementsByClassName('sudoku-grid');
        let board = '';
        [...grids].forEach((grid) => {
            board += grid.innerHTML === '' ? '.' : grid.innerHTML;
        })
        return board;
    }

    render() {
        const buttons = document.createElement('div');
        buttons.className = 'd-flex justify-content-center';
        new SudokuDifficultyButton(buttons, { 'class': 'buttonicon difficulty' }, { 'text': '쉬움' });
        new SudokuDifficultyButton(buttons, { 'class': 'buttonicon difficulty' }, { 'text': '보통' });
        new SudokuDifficultyButton(buttons, { 'class': 'buttonicon difficulty' }, { 'text': '어려움' });
        new SudokuDifficultyButton(buttons, { 'class': 'buttonicon difficulty' }, { 'text': '짱어려움' });
        new SudokuDifficultyButton(buttons, { 'class': 'buttonicon difficulty' }, { 'text': '짱짱어려움' });
        new SudokuDifficultyButton(buttons, { 'class': 'buttonicon difficulty' }, { 'text': '짱짱짱어려움' });
        this.$self.appendChild(buttons);

        const screen = document.createElement('div');
        screen.className = 'd-flex justify-content-center sudoku-container';
        new SudokuGameScreen(screen);
        this.$self.appendChild(screen);

        const footer = document.createElement('div');
        footer.className = 'd-flex justify-content-center sudoku-footer';
        const validateButton = new SudokuValidateButton(footer, { 'class': 'buttonicon validate' });
        validateButton.$self.addEventListener('click', () => {
            const solveResult = Sudoku.solve(this.getBoard());
            console.log(solveResult);
        })

        this.$self.appendChild(footer);
    }
}