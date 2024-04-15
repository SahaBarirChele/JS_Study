// import * as simplelogics from './simplelogics.js';
import * as modal from './modal.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import searchResults from './views/searchResults.js';
import paginationView from './views/paginationView.js';
import bookmarkView from './views/bookmarkView.js';
import addRecipe from './views/addRecipe.js';
import 'core-js/stable'; //polyfilling everything else
import 'regenerator-runtime/runtime';
import { async } from 'regenerator-runtime'; //polyfilling aynsc/wait

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  const id = window.location.hash.slice(1);
  //console.log(id);
  if (!id) return;
  //load recipe
  recipeView.renderSpinner();
  try {
    await modal.loadRecipe(id);
    //show recipes
    //const { recipe } = modal.state;
    searchResults.update(modal.loadResultPerPage());
    recipeView.render(modal.state.recipe);
    bookmarkView.update(modal.state.bookmarks);
    //console.log(modal.state.recipe);
  } catch (err) {
    recipeView.renderError();
    console.log(err);
  }
};

const controlServings = function (serving) {
  modal.updateServings(serving);
  recipeView.update(modal.state.recipe);
};

const controlSearchResults = async function (query) {
  //const query = searchView.getQuery(); //made 'getQuery' private. So commented this line
  //console.log(query);
  searchResults.renderSpinner();
  if (!query) return;
  //load recipe
  //recipeView.renderSpinner();
  try {
    //1. get search results
    await modal.loadSearchResults(query);
    //show search results
    searchResults.render(modal.loadResultPerPage());
    paginationView.render(modal.state.search);
    //console.log(modal.state.search.results);
  } catch (err) {
    searchResults.renderError(err);
  }
};

const controlPagination = function (page) {
  //show search results
  searchResults.render(modal.loadResultPerPage(page));
  //render pagination buttons
  paginationView.render(modal.state.search);
};

const controlBookmark = function () {
  if (!modal.state.recipe.bookmarked) modal.addBookmark(modal.state.recipe);
  else modal.deleteBookmark(modal.state.recipe.id);
  recipeView.update(modal.state.recipe);
  bookmarkView.render(modal.state.bookmarks);
};

const bookmarkOnLoad = function () {
  if (modal.state.bookmarks.length > 0)
    bookmarkView.render(modal.state.bookmarks);
  else bookmarkView.renderError();
};

const controlAddRecipe = async function (uploadRecipe) {
  try {
    await modal.uploadRecipe(uploadRecipe);
    //addRecipe.renderSuccess('Recipe added successfully');
    recipeView.render(modal.state.recipe);
    addRecipe.renderSuccess();
    bookmarkView.render(modal.state.bookmarks);
    //update new recipe ID in the URL
    window.history.pushState(null, '', `#${modal.state.recipe.id}`);
    setTimeout(function () {
      addRecipe.toggleWindow();
    }, 2000);
  } catch (err) {
    addRecipe.renderError(err);
  }
};

//Initialize function to initialize event handlers using normal function call.
/* const init = function () {
  recipeView.addHandleRender(controlRecipes);  //Initialize function to initialize event handlers
  searchView.addHandleRender(controlSearchResults);
  //console.log('Test');
};
init(); */

//Initialize event handlers using IIFE(Immediately Invoked Function Expression).
(function () {
  bookmarkView.bookmarkOnLoadHandle(bookmarkOnLoad);
  recipeView.addHandleRender(controlRecipes);
  recipeView.addUpdateRecipeHandle(controlServings);
  recipeView.addDeleteBookmarkHandle(controlBookmark);
  searchView.addHandleRender(controlSearchResults);
  paginationView.addHandleRender(controlPagination);
  addRecipe.uploadButtonHandler(controlAddRecipe);
})();
