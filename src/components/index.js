import '../pages/index.css';
import { page, addCard, openPopup, closePopup, settings, renderTextProfile, makeVisible } from './utils';
import { createCard } from './card';

import {
  formProfile,
  editProfile,
  saveProfile,
  popupAddPlace,
  formPlace,
  submitFormPlace,
  deleteCardSubmit,
  renderAvatar,
  avatar,
  formAvatar,
  avatarSubmit,
  popupAvatarEdit,
} from './modal';

import { enableValidation } from './validate';
import { getUser, getCards } from './api';


//загружаем карточки и профиль с бэка на страницу
const profileInfo = page.querySelector('.profile__info')

Promise.all([
  getCards(),
  getUser()
]).then(([cards, user]) => {
  renderAvatar(user.avatar)
  renderTextProfile(user.name, user.about);
  cards.forEach((item) => {
    const initialCard = createCard(item.link, item.name, item.likes, item.owner._id, user._id, item._id);
    addCard(initialCard)
  })
}).catch((e) => {
    console.log(e)
}).finally(() => {
  makeVisible(profileInfo);
})


//закрыть попап
const popups = page.querySelectorAll('.popup');

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    } else if (evt.target.classList.contains('popup__close')) {
      closePopup(popup)
    }
  })
})

//профиль
const buttonEditProfile = page.querySelector('.profile__button');

buttonEditProfile.addEventListener('click', editProfile);

formProfile.addEventListener('submit', (evt) => { 
  evt.preventDefault();
  saveProfile();
});

//аватар
avatar.addEventListener('click', () => openPopup(popupAvatarEdit));
formAvatar.addEventListener('submit', avatarSubmit)



//новая карточка
const buttonAddPlace = page.querySelector('.button_type_add');

buttonAddPlace.addEventListener('click', () => {
  openPopup(popupAddPlace);
});

formPlace.addEventListener('submit', (evt) => {
  evt.preventDefault();
  submitFormPlace();
})

//удаление карточки
const formDeleteCard = page.querySelector('.form_type_delete');

formDeleteCard.addEventListener('submit', deleteCardSubmit)


enableValidation(settings);