// function my_map(f, xs)  {
//     return accumulate(pair, null, map(f, xs));
// }

// display_list(my_map(x => x + 1, list(1,2,3)));

// function my_map(f, xs) {
//     return accumulate((x, y) => pair(f(x), y), null, xs);
// }
// my_map(x => x + 1, list(1, 2, 3, 4));

// function remove_duplicates(lst) {

//     return is_null(lst)
//         ? null
//         : pair(head(lst), remove_duplicates(filter(x => x !== head(lst),
//                                                             tail(lst))));
// }

// remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));
// // Result: list(1, 2, 3, 4)
// remove_duplicates(list("a", "x", "b", "c", "c", "b", "d"));
// // Result: list("a", "x", "b", "c", "d")

// function makeup_amount(x, coins) {
//     if (x === 0) {
//         return list(null);
//     } else if (x < 0 || is_null(coins)) {
//         return null;
//     } else {
//         //combinations that do not use the head coin
//         const combi_A = makeup_amount(x, tail(coins));

//         const combi_B = makeup_amount(x - head(coins), tail(coins));

//         const combi_C = map(c => pair(head(coins), c), combi_B);

//      return append(combi_A, combi_C);
//     }
// }

// display_list(makeup_amount(22, list(1, 10, 5, 20, 1, 5, 1, 50)));

// function remove_duplicates(lst){
//     function filter_list(lst){
//          return is_null(lst)
//         ? null
//         : pair(head(lst), remove_duplicates(filter(x => x !== head(lst),
//                                                             tail(lst))));
//     }

//     return accumulate((x, y) => append(filter_list(x), y), null, lst);
// }

function remove_duplicates(lst) {
  return accumulate(
    (x, y) =>
      pair(
        x,
        filter((z) => z !== x, y)
      ),
    null,
    lst
  );
}

remove_duplicates(list(1, 2, 3, 4, 4, 3, 2, 1, 2));

function subsets(xs) {
  if (is_null(xs)) {
    return list(null);
  } else {
    const without_head = subsets(tail(xs));

    const with_head = map((c) => pair(head(xs), c), without_head);

    return append(with_head, without_head);
  }
}

function permutations(s) {
  return is_null(s)
    ? list(null)
    : accumulate(
        append,
        null,
        map((x) => map((p) => pair(x, p), permutations(remove(x, s))), s)
      );
}
