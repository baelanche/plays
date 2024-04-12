import Component from "../../classes/Component";

export class GameChooseButton extends Component {
    constructor($parent, attribute = {}) {
        super($parent, 'button', attribute);
    }

    render() {
        this.$self.innerHTML = `<span></span>`;
    }
}