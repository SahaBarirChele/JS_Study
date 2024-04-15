class SearchView {
  _parentElement = document.querySelector('.search');
  #query = '';

  #getQuery() {
    this.#query = this._parentElement.querySelector('.search__field').value;
    this.#clearSerachField();
    //return query;
  }
  #clearSerachField() {
    this._parentElement.querySelector('.search__field').value = '';
  }

  addHandleRender(handle) {
    const self = this; //assigning 'this' into 'self'
    this._parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      self.#getQuery();
      handle(self.#query);
    });
  }
}

export default new SearchView();
