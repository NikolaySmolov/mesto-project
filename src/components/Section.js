export default class Section {
  constructor({ items, renderer }, selector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(selector);
  }

  renderItems(items) {
    this._renderer(items);
  }

  addItem(item) {
    this._container.prepend(item);
  };
}
