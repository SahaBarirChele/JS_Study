import icons from 'url:../../img/icons.svg';
import View from './view.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandleRender(handle) {
    this._parentElement.addEventListener('click', function (e) {
      //console.log(e.target);
      //console.log(e.target.closest('.btn--inline').dataset.page);
      if (e.target.closest('.btn--inline')) {
        handle(+e.target.closest('.btn--inline').dataset.page);
      }
      //console.log(this._parentElement.closest('.btn--inline'));
    });
  }
  _generateMarkup() {
    //console.log(this._data);
    const totalPages = Math.ceil(
      this._data.resultCount / this._data.resultPerPage
    );
    //1. First page and other pages available
    if (this._data.currentPage === 1 && totalPages > this._data.currentPage) {
      //return this.#nextPage();
      return this.#nextOrPrevPage('next');
    }

    //2. On other page and more pages available
    if (this._data.currentPage > 1 && totalPages > this._data.currentPage) {
      //return [this.#nextPage(), this.#prevPage()].join('');
      return [this.#nextOrPrevPage('next'), this.#nextOrPrevPage('prev')].join(
        ''
      );
    }

    //3. On Last page
    if (this._data.currentPage === totalPages && totalPages > 1) {
      //return this.#prevPage();
      return this.#nextOrPrevPage('prev');
    }
    return '';
  }

  /*   #nextPage() {
    return `        
        <button data-page=${
          this._data.currentPage + 1
        } class="btn--inline pagination__btn--next">
          <span>Page ${this._data.currentPage + 1}</span>
          <svg class="search__icon">
             <use href="${icons}#icon-arrow-right"></use>
          </svg>
        </button>
       `;
  }
  #prevPage() {
    return `
        <button data-page=${
          this._data.currentPage - 1
        } class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.currentPage - 1}</span>
        </button>`;
  } */
  #nextOrPrevPage(what) {
    return `        
        <button data-page=${
          what === 'next'
            ? this._data.currentPage + 1
            : this._data.currentPage - 1
        } class="btn--inline pagination__btn--${what}">
          <span>Page ${
            what === 'next'
              ? this._data.currentPage + 1
              : this._data.currentPage - 1
          }</span>
          <svg class="search__icon">
             <use href="${icons}#icon-arrow-${
      what === 'next' ? 'right' : 'left'
    }"></use>
          </svg>
        </button>
       `;
  }
}

export default new PaginationView();
