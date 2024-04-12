import Component from "../../classes/Component";

export class SudokuGameScreen extends Component {
    constructor($parent, attribute = {}, props = {}) {
        super($parent, 'div', attribute, props);
    }

    render(props) {
        this.$self.innerHTML = `<span>${props.text}</span>`;
    }
}