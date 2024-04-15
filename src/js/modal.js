import { async } from 'regenerator-runtime';
import { API_URL, RESULT_PER_PAGE, KEY } from './config.js';
import { getJSON, sendJSON } from './helper.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultCount: '',
    resultPerPage: RESULT_PER_PAGE,
    currentPage: 1,
  },
  bookmarks: [],
};

const formatRecipeResponse = function (data) {
  //console.log(data);
  state.recipe = {
    id: data.id,
    publisher: data.publisher,
    cookingTime: data.cooking_time,
    imageUrl: data.image_url,
    ingredients: data.ingredients,
    servings: data.servings,
    sourceUrl: data.source_url,
    title: data.title,
    ...(data.key && { key: data.key }),
  };
  //console.log(state.recipe);
};

export const loadRecipe = async function (id) {
  try {
    const data = await getJSON(`${API_URL}${id}?key=${KEY}`);
    let { recipe } = data.data;
    formatRecipeResponse(recipe);

    //console.log(state.recipe);
    if (state.bookmarks.some(bookmark => bookmark.id === id))
      state.recipe.bookmarked = true;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const updateServings = function (serving) {
  state.recipe.ingredients.forEach(element => {
    element.quantity = (element.quantity * serving) / state.recipe.servings;
  });
  state.recipe.servings = serving;
};

export const loadSearchResults = async function (query) {
  state.search.query = query;
  state.search.currentPage = 1;
  try {
    //1. Get search data from server using query parameter
    const data = await getJSON(`${API_URL}?search=${query}&key=${KEY}`);
    //console.log(data);
    if (!data.results) throw new Error(`No Records Found for ${query}`);

    //2. Populate state variable with search results.
    state.search.results = data.data.recipes.map(rcp => {
      return {
        id: rcp.id,
        publisher: rcp.publisher,
        imageUrl: rcp.image_url,
        title: rcp.title,
        key: rcp.key,
      };
    });
  } catch (err) {
    console.error(err);
    throw err;
  }
};

export const loadResultPerPage = function (page = state.search.currentPage) {
  //pagination code.
  state.search.currentPage = page;
  state.search.resultCount = state.search.results.length;
  const startFrom = (page - 1) * state.search.resultPerPage;
  const endTo = page * state.search.resultPerPage;
  return state.search.results.slice(startFrom, endTo);
};

const persistBookmar = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const addBookmark = function (recipe) {
  // add into bookmark array
  state.bookmarks.push(recipe);
  // mark current recipe as bookmarked
  state.recipe.bookmarked = true;
  persistBookmar();
};

export const deleteBookmark = function (id) {
  const idx = state.bookmarks.findIndex(bookmark => bookmark.id === id);
  //delete from bbokmark array
  state.bookmarks.splice(idx, 1);
  state.recipe.bookmarked = false;
  persistBookmar();
};

export const uploadRecipe = async function (uploadRecipe) {
  //console.log(uploadRecipe);
  try {
    const ingredients = Object.entries(uploadRecipe)
      .filter(entry => entry[0].startsWith('ingredient') && entry[1] != '')
      .map(ing => {
        const ingArr = ing[1].replaceAll(' ', '').split(',');
        if (ingArr.length !== 3) throw new Error('Wrong Ingredient format.');
        const [quantity, unit, description] = ingArr;
        return { quantity: quantity ? +quantity : null, unit, description };
      });
    const newRecipe = {
      publisher: uploadRecipe.publisher,
      cooking_time: uploadRecipe.cookingTime,
      image_url: uploadRecipe.image,
      ingredients: ingredients,
      servings: uploadRecipe.servings,
      source_url: uploadRecipe.sourceUrl,
      title: uploadRecipe.title,
    };
    //console.log(newRecipe);
    const data = await sendJSON(`${API_URL}?key=${KEY}`, newRecipe);
    formatRecipeResponse(data.data.recipe);
    addBookmark(state.recipe);
    //console.log(state.recipe);
  } catch (err) {
    throw err;
  }
};

const loadBookmarks = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};
loadBookmarks();
