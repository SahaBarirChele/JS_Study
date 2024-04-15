import icons from 'url:../../img/icons.svg';
import View from './view.js';
import preview from './preview.js';

class BookmarkView extends View {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it :)';

  bookmarkOnLoadHandle(handle) {
    window.addEventListener('load', handle);
  }
  _generateMarkup() {
    //console.log(this._data);
    return `${this._data
      .map(bookmark => preview.render(bookmark, false))
      .join()}`;
  }
}

export default new BookmarkView();
