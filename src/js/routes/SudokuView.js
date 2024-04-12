import Component from "../classes/Component";
import { SudokuDifficultyButton } from '../components/sudoku/SudokuDifficultyButton';
import { SudokuGameScreen } from "../components/sudoku/SudokuGameScreen";

export class SudokuView extends Component {
    constructor($parent) {
        super($parent, 'div');
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
    }
}