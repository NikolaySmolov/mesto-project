import Popup from "./Popup";

export default class PopupWithForm extends Popup {
    constructor(selector, handleSubmit) {
        super(selector);
        this._handleSumbit = handleSubmit;
        this._popup = document.querySelector(selector);
        this._form = popup.querySelector('form');
        this._inputList = this._form.querySelectorAll('.form__input');

    };

    _getInputValues() {
        this._inputValues = {};
        this._inputList.forEach((input) => {
            this._inputValues[input.name] = input.name
        });
        return this._inputValues
    };

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener('click', (evt) => {
            evt.preventDefault();
            this._handleSumbit(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._form.reset();
    };

}
