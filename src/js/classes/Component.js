export default class Component {
  constructor($parent, elementType, attributes = {}, props = {}) {
    this.$parent = $parent;
    this.$self = document.createElement(elementType);
    this.attributes = attributes;
    this.props = props;

    this.$parent.appendChild(this.$self);
    this.init();
  }

  init() {
    this.setAttribute();
    this.attachEvents();
    this.render(this.props);
  }

  setAttribute() {
    Object.entries(this.attributes).forEach(([name, value]) =>
      this.$self.setAttribute(name, value),
    );
  }

  attachEvents() {}
  render() {}
}