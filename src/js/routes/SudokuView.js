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
        return Sudoku.generate('inhuman');
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
                new SudokuGrid(sudokuWrap, { 'class': `sudoku-grid ${number !== '.' ? 'immutable' : 'mutable'}`}, { 'text': `${number !== '.' ? number : ''}`});
            }
            screenWrap.appendChild(sudokuWrap);
        }
        screen.addEventListener('click', (e) => {
            const target = e.target;
            const clicked = document.querySelector('.clicked');
            const allGrid = document.querySelectorAll('.sudoku-grid');
            const notice = document.querySelector('.sudoku-notice');
            if (clicked === null) {
                if (target.classList.contains('mutable')) {
                    target.classList.add('clicked');
                    allGrid.forEach((grid) => {
                        if (!grid.classList.contains('clicked')) {
                            grid.style.opacity = 0.75;
                        }
                    })
                    notice.style.visibility = 'visible';
                }
            } else {
                clicked.classList.remove('clicked');
                allGrid.forEach((grid) => {
                    grid.style.opacity = 1;
                })
                notice.style.visibility = 'hidden';
            }
        })

        window.addEventListener('keyup', (e) => {
            const clicked = document.querySelector('.clicked');
            const allGrid = document.querySelectorAll('.sudoku-grid');
            const notice = document.querySelector('.sudoku-notice');
            if ('1' <= e.key && e.key <= '9') {
                if (clicked !== null) {
                    clicked.innerHTML = e.key;
                    clicked.classList.remove('clicked');
                    allGrid.forEach((grid) => {
                        grid.style.opacity = 1;
                    })
                    notice.style.visibility = 'hidden';
                }
            }
        })

        screen.appendChild(screenWrap);
        return screen;
    }

    renderNoticeMessage() {
        const section = document.createElement('div');
        section.className = 'd-flex justify-content-center sudoku-notice';
        const noticeMessage = document.createElement('h6');
        noticeMessage.innerHTML = '1에서 9사이의 숫자를 입력해주세요';
        section.style.visibility = 'hidden';
        section.appendChild(noticeMessage);
        return section;
    }

    renderValidateButton() {
        const footer = document.createElement('div');
        footer.className = 'd-flex justify-content-center sudoku-footer';
        const validateButton = new SudokuValidateButton(footer, { 'class': 'buttonicon validate' });
        validateButton.$self.addEventListener('click', () => {
            const userBoard = this.getUserBoard();
            const solvedBoard = Sudoku.solve(userBoard);
            if (userBoard === solvedBoard) {
                alert('클리어~~');
                this.render();
            } else {
                alert('틀렸어요ㅠ');
            }
        })
        return footer;
    }

    render() {
        this.$self.innerHTML = '';

        this.$self.appendChild(this.renderTopButtons());
        
        this.$self.appendChild(this.renderSudokuScreen());

        this.$self.appendChild(this.renderNoticeMessage());

        this.$self.appendChild(this.renderValidateButton());
    }
}