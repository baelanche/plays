import Component from "../classes/Component";
import { GameChooseButton } from '../components/main/GameChooseButton';
import { Router } from '../classes/Router';

export class MainView extends Component {
    constructor($parent) {
        super($parent, 'div');
    }

    render() {
        const row1 = document.createElement('div');
        row1.className = 'd-flex justify-content-center';
        const sudokuButton = new GameChooseButton(row1, { 'class': 'p-4 buttonicon sudoku' });
        sudokuButton.$self.addEventListener('click', () => {
            Router.getInstance().push('/sudoku');
        })

        new GameChooseButton(row1, { 'class': 'p-4 buttonicon game2' });
        this.$self.appendChild(row1);

        const row2 = document.createElement('div');
        row2.className = 'd-flex justify-content-center';
        new GameChooseButton(row2, { 'class': 'p-4 buttonicon game3' });
        new GameChooseButton(row2, { 'class': 'p-4 buttonicon game4' });
        this.$self.appendChild(row2);
    }
}