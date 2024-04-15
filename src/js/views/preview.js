import icons from 'url:../../img/icons.svg';
import View from './view.js';

class Preview extends View {
  _generateMarkup() {
    //console.log(this._data);
    //console.log(item);
    const id = window.location.hash.slice(1);
    return `
    <li class="preview">
     <a class="preview__link ${
       id === this._data.id ? 'preview__link--active' : ''
     }" href="#${this._data.id}">
      <figure class="preview__fig">
        <img src="${this._data.imageUrl}" alt="Test" />
      </figure>
      <div class="preview__data">
        <h4 class="preview__title">${this._data.title}</h4>
        <p class="preview__publisher">${this._data.publisher}</p>
        <div class="preview__user-generated">
          <svg>
             ${this._data.key ? `<use href="${icons}#icon-user"></use>` : ''}
          </svg>
        </div>
      </div>
     </a>
    </li>`;
  }
}

export default new Preview();
