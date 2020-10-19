// Type your program in here!

// Cedric
// function bubblesort_list(L) {

//     const pointer_L = L;

//     function find_max(L, copy_L, copy_L2) {

//         if (is_null(L) || is_null(copy_L2)) {
//             return null;
//         } else if (head(copy_L2) === head(L)) {
//             if (head(copy_L) > head(L)) {
//                 const temp = head(copy_L2);
//                 set_head(copy_L2, head(copy_L));
//                 set_head(copy_L, temp);
//             } else {}
//         } else {
//             if (head(copy_L) > head(copy_L2)) {
//                 const temp = head(copy_L2);
//                 set_head(copy_L2, head(copy_L));
//                 set_head(copy_L, temp);
//                 // return find_max(L, tail(copy_L), tail(copy_L2));
//             } else {
//                 // return find_max(L, tail(copy_L), tail(copy_L2));
//             }
//             return find_max(L, tail(copy_L), tail(copy_L2));
//         }

//     }

//     function bubblesort_helper(original, current) {

//         if (is_null(current)) {
//             return null;
//         } else {
//             bubblesort_helper(original, tail(current));
//             find_max(current, original, tail(original));
//             return current;
//         }

//     }

//     return bubblesort_helper(pointer_L, L);

// }

// const L = list(1,4,5,3,2354235225, -1, 0);

// bubblesort_list(L);

// Quoc Huy
// function bubblesort_list(L) {
//     // Your solution here.
//     const len = length(L);
//     // let el = L;
//     for (let i = len - 1; i > 0; i = i - 1) {
//         let el = L;
//         for (let j = 0; j < i; j = j + 1) {
//             if (head(el) > head(tail(el))) {
//                 const temp = head(el);
//                 set_head(el, head(tail(el)));
//                 set_head(tail(el), temp);
//                 // el = tail(el);
//             } else {
//                 // el = tail(el);
//             }
//             el = tail(el);
//         }
//     }
// }

// const LL = list(3, 5, 2, 4, 1);
// bubblesort_list(LL);
// LL; // should show [1, [2, [3, [4, [5, null]]]]]

// Quang Vinh
const mem = [];

function read(n, k) {
  return mem[n] === undefined ? undefined : mem[n][k];
}

function write(n, k, value) {
  if (mem[n] === undefined) {
    mem[n] = [];
  } else {
  }
  mem[n][k] = value;
}

// n is the amount in cents, and k is the number of denominations.
function mcc(n, k) {
  if (n < 0) {
    return 0;
  } else if (read(n, k) !== undefined) {
    return read(n, k);
  } else {
    const result =
      n === 0
        ? 1
        : k === 0
        ? 0
        : mcc(n, k - 1) + mcc(n - first_denomination(k), k);
    write(n, k, result);
    return result;
  }
}

function first_denomination(kinds_of_coins) {
  return kinds_of_coins === 1
    ? 5
    : kinds_of_coins === 2
    ? 10
    : kinds_of_coins === 3
    ? 20
    : kinds_of_coins === 4
    ? 50
    : kinds_of_coins === 5
    ? 100
    : 0;
}

mcc(365, 5); // Expected result: 1730
mcc(365, 1);

// Trushti and Cedric
function rotate_matrix(M) {
  let len = array_length(M);

  for (let i = 0; i < len; i = i + 1) {
    for (let j = 0; j < i; j = j + 1) {
      const temp = M[i][j];
      M[i][j] = M[j][i];
      M[j][i] = temp;
    }
  }

  for (let i = 0; i < len; i = i + 1) {
    for (let j = 0; j < math_floor(len / 2); j = j + 1) {
      let last_index = len - 1 - j;
      let temp = M[i][j];
      M[i][j] = M[i][last_index];
      M[i][last_index] = temp;
    }
  }
}

const A = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

rotate_matrix(A);
A;

// Studio 9
function count_pairs(x) {
  let pairs = null;
  function check(y) {
    if (!is_pair(y)) {
      return undefined;
    } else if (!is_null(member(y, pairs))) {
      return undefined;
    } else {
      pairs = pair(y, pairs);

      check(head(y));
      check(tail(y));
    }
  }
  check(x);
  return length(pairs);
}
