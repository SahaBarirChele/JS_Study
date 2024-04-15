import { TIMEOUT_SEC } from './config.js';

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

export const getJSON = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    //'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza'
    //'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc8fd'
    //`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`

    const data = await res.json();
    //console.log(data);
    if (data.status !== 'success') throw new Error(`${data.message}`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const sendJSON = async function (url, uploadRecipe) {
  try {
    const fetchPro = fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadRecipe),
    });
    const res = await Promise.race([fetchPro, timeout(TIMEOUT_SEC)]);
    //'https://forkify-api.herokuapp.com/api/v2/recipes?search=pizza'
    //'https://forkify-api.herokuapp.com/api/v2/recipes/5ed6604591c37cdc054bc8fd'
    //`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`

    const data = await res.json();
    //console.log(data);
    if (data.status !== 'success') throw new Error(`${data.message}`);
    return data;
  } catch (err) {
    throw err;
  }
};
