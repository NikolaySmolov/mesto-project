export default class Section {
    constructor({ data, renderer }, selector) {
        this._items = data;
        this._renderer = renderer;
        this._container = document.querySelector(selector);
    }

    renderItems() {
        this._items.forEach(item => this._renderer(item));

    }

    setItem(item) {
        this._container.append(item);
    };
}