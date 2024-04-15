// export const arr_merge = function () {
const arr_merge = function () {
  let arr1 = [1, 2, 3, 0, 0, 0];
  let arr2 = [2, 5, 6];
  let m = 3;
  const n = arr2.length;
  const tot = m + n;
  let i = 0;
  let j = 0;
  let t = 0;

  const push_into_arr1 = function (val, idx) {
    arr1[idx + 1] = arr1[idx];
    arr1[idx] = val;
    t = j + 1;
  };

  const copy_remaining = function (idx1, idx2) {
    for (let i = idx2; i < n; i++) {
      arr1[idx1] = arr2[i];
      idx1++;
    }
  };

  while (i < m) {
    if (arr1[i] > arr2[j]) {
      let k = arr2[j];
      push_into_arr1(k, i);
      m++;
      i++;
      j++;
      //console.log(`if ${i} ${m}`);
    } else {
      i++;
      j = 0;
      if (i === m && i < tot) {
        copy_remaining(i, t);
      }
      //console.log(`else ${i} ${m}`);
    }
  }
  console.log(arr1);
};
arr_merge();
