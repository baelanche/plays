import Component from "../../classes/Component";

export class SudokuDifficultyButton extends Component {
    constructor($parent, attribute = {}, props = {}) {
        super($parent, 'button', attribute, props);
    }

    render(props) {
        this.$self.innerHTML = `<span>${props.text}</span>`;
    }
}