import Component from "../../classes/Component";

export class SudokuValidateButton extends Component {
    constructor($parent, attribute = {}, props = {}) {
        super($parent, 'button', attribute, props);
    }

    render() {
        this.$self.innerHTML = `<span>제출</span>`;
    }
}