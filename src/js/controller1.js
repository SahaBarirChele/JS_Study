// import * as simplelogics from './simplelogics.js';
const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const showRecipe = async function () {
  try {
    const res = await fetch(
      //'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza'
      'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc8fd'
      // 'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc886'
    );
    const data = await res.json();
    console.log(data);
    if (data.status !== 'success') throw new Error(`${data.message}`);

    let { recipe } = data.data;
    recipe = {
      id: recipe.id,
      publisher: recipe.publisher,
      cookingTime: recipe.cooking_time,
      imageUrl: recipe.image_url,
      ingredients: recipe.ingredients,
      servings: recipe.servings,
      sourceUrl: recipe.source_url,
      title: recipe.title,
    };
    console.log(recipe);
  } catch (err) {
    alert(err);
  }
};
showRecipe();

const showMovieGenres = async function (key) {
  const url = 'https://moviesminidatabase.p.rapidapi.com/genres/';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a32f757486msh9dbe736018d921bp1a4322jsn4d28101215a1',
      'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    // const result = await response.text();
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};

//showMovieGenres();

const showMoviesByGenres = async function () {
  const url =
    'https://moviesminidatabase.p.rapidapi.com/movie/byGen/%7Bgen%7D/';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a32f757486msh9dbe736018d921bp1a4322jsn4d28101215a1',
      'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
};
//showMoviesByGenres('Crime');

const showAllMovies = async function () {
  //const URL = 'https://a-movies-api.herokuapp.com/movies';
  //const URL = 'http://cors-anywhere.herokuapp.com/movies';
  const URL = 'http://www.omdbapi.com/?apikey=9832ebc2&s=Antman';
  const options = {
    mode: 'no-cors',
  };
  try {
    const response = await fetch(URL);
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
//showAllMovies();

const showAllMovies_tmdb = async function () {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmUwMDM2YTgzOTViYzQzZjIzODJlMjcyYWU5Y2Y1OCIsInN1YiI6IjY1NDNmMjNmMWFjMjkyMDExYjNjZmMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.985e0atKmGKFZZWjE88lB67TgQR5mSJRksd4rWhMBDU',
    },
  };

  fetch('https://api.themoviedb.org/3/movie/changes?', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
};
//showAllMovies_tmdb();

const searchMovieDetailsByID_tmdb = async function (id) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhZmUwMDM2YTgzOTViYzQzZjIzODJlMjcyYWU5Y2Y1OCIsInN1YiI6IjY1NDNmMjNmMWFjMjkyMDExYjNjZmMxMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.985e0atKmGKFZZWjE88lB67TgQR5mSJRksd4rWhMBDU',
    },
  };
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    );
    const result = await res.json();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};
//searchMovieDetailsByID_tmdb('1242446');
