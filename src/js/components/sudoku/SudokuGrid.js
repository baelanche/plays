import Component from "../../classes/Component";

export class SudokuGrid extends Component {
    constructor($parent, attribute = {}, props = {}) {
        super($parent, 'div', attribute, props);
    }

    render(props) {
        this.$self.innerHTML = `${props.text}`;
    }
}