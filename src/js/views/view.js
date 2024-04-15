import icons from 'url:../../img/icons.svg';
export default class View {
  //_parentElement = ''; //if the property is defined in Child class, then also fine.
  _errorMessage = 'Receipe not found. Please try again.';
  _message = '';
  _data;

  /**
   * Render the received object to the DOM
   * @param {Object | Object[]} data The data to be rendered.
   * @param {Boolean} [render=true] If false, create markup string insted of render into DOM
   * @returns {undefined | string} A markup string is returned if render=false
   * @extends {} This is the Parent View class
   */
  render(data, render = true) {
    //console.log(data);
    //if(data.isArray())
    this._data = data;
    const markup = this._generateMarkup();
    //console.log(markup);
    if (!render) return markup;
    this._clearHTML();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  //these are JS Documentation. Refer Jsdoc.app
  /**
   * JS Documentation
   * @param {Object | Object[]} data Updated data will be rendered into DOM
   * @returns {undefined}
   */
  update(data) {
    this._data = data;
    const newMarkup = this._generateMarkup();

    //creates a temporary dom element in the memory.
    const newDOM = document.createRange().createContextualFragment(newMarkup);
    const newElements = Array.from(newDOM.querySelectorAll('*'));
    const curElements = Array.from(this._parentElement.querySelectorAll('*'));

    newElements.forEach((newEl, i) => {
      const curEl = curElements[i];
      // console.log(curEl, newEl.isEqualNode(curEl));

      // Updates changed TEXT
      if (
        !newEl.isEqualNode(curEl) &&
        newEl.firstChild?.nodeValue.trim() !== ''
      ) {
        // console.log('💥', newEl.firstChild.nodeValue.trim());
        curEl.textContent = newEl.textContent;
      }

      // Updates changed ATTRIBUES
      if (!newEl.isEqualNode(curEl))
        Array.from(newEl.attributes).forEach(attr =>
          curEl.setAttribute(attr.name, attr.value)
        );
    });
  }

  renderSpinner() {
    const markup = `
    <div class="spinner">
    <svg>
      <use href="${icons}#icon-loader"></use>
    </svg>
    </div>`;
    this._clearHTML();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  _clearHTML() {
    this._parentElement.innerHTML = '';
  }
  _generateMarkup() {}
  //when no parameter is passed, default 'this._errorMessage' will be the argument.
  renderError(message = this._errorMessage) {
    const markup = `
              <div class="error">
                <div>
                  <svg>
                    <use href="${icons}#icon-alert-triangle"></use>
                  </svg>
                </div>
                <p>${message}</p>
              </div>
        `;
    this._clearHTML();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
  //when no parameter is passed, default 'this._message' will be the argument.
  renderSuccess(message = this._message) {
    const markup = `
              <div class="error">
                <div>
                  <svg>
                    <use href="${icons}#icon-smile"></use>
                  </svg>
                </div>
                <p>${message}</p>
              </div>
        `;
    this._clearHTML();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
