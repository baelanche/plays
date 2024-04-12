import Component from "../classes/Component";
import sudoku from "../logics/Sudoku";
import { SudokuDifficultyButton } from '../components/sudoku/SudokuDifficultyButton';

export class SudokuView extends Component {
    constructor($parent) {
        super($parent, 'div');
    }

    getSudoku() {
        /**
         * easy : 36~46
         * medium : 32~35
         * hard : 28~31
         * evil : 17~27
         */
        return sudoku.generate("easy")
    }

    render() {
        const sudoku = this.getSudoku();
        console.log(sudoku);

        const div = document.createElement('div');
        div.className = 'd-flex justify-content-center';
        new SudokuDifficultyButton(div, { 'class': 'buttonicon difficulty' }, { 'text': '쉬움' });
        new SudokuDifficultyButton(div, { 'class': 'buttonicon difficulty' }, { 'text': '보통' });
        new SudokuDifficultyButton(div, { 'class': 'buttonicon difficulty' }, { 'text': '어려움' });
        this.$self.appendChild(div);
    }
}