import icons from 'url:../../img/icons.svg';
import View from './view.js';
import preview from './preview.js';

class SearchResults extends View {
  _parentElement = document.querySelector('.results');
  _generateMarkup() {
    //console.log(this._data);
    return `${this._data.map(result => preview.render(result, false)).join()}`;
  }
}

export default new SearchResults();
