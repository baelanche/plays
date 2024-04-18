import './css/main.css';
import './css/sudoku.css';
import { Router } from './js/classes/Router';
import { MainView } from './js/routes/MainView';
import { SudokuView } from './js/routes/SudokuView';

const initRouter = () => {
    Router.init(document.getElementById('root'), {
        '/': MainView,
        '/sudoku': SudokuView
    });
}

initRouter();