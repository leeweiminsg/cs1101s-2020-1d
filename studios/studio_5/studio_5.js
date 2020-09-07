function print() {
  const lst = list(7, list(list(6, 5), list(4), 3, 2), list(list(1)));
  draw_data(lst);
  return head(head(head(tail(tail(lst)))));
}

print();

// Shivam Tiwari
const lst = list(list(7), list(6, 5, 4), list(3, 2), 1);
const lst = list(7, list(6), list(5, list(4)), list(3, list(2, list(1))));
const lst = list(7, list(list(6, 5), list(4), 3, 2), list(list(1)));

// Trushti and Shee Hui
function every_second(items) {
  function every_second_help(items, count) {
    if (count >= length(items)) {
      return null;
    } else {
      return pair(list_ref(items, count), every_second_help(items, count + 2));
    }
  }

  return every_second_help(items, 1);
}

every_second(list("a", "x", "b", "y", "c", "z", "d"));

every_second(list("a", "x", "b", "y", "c", "z", "d"));

function every_second(lst) {
  function counter(lst, n) {
    return is_null(lst)
      ? null
      : n % 2 === 0
      ? counter(tail(lst), n + 1)
      : pair(head(lst), counter(tail(lst), n + 1));
  }
  return counter(lst, 0);
}

function every_second_even(lst) {
  function counter(lst, n) {
    return is_null(lst)
      ? null
      : n % 2 !== 0
      ? counter(tail(lst), n + 1)
      : pair(head(lst), counter(tail(lst), n + 1));
  }
  return counter(lst, 0);
}

function sums(lst) {
  function sums_helper(lst, sum) {
    return is_null(lst) ? sum : sums_helper(tail(lst), sum + head(lst));
  }
  return list(
    sums_helper(every_second_even(lst), 0),
    sums_helper(every_second(lst), 0)
  );
}
function sums(lst) {
  function counter(lst, n, sum_odd, sum_even) {
    return is_null(lst)
      ? list(sum_even, sum_odd)
      : n % 2 === 0
      ? counter(tail(lst), n + 1, sum_odd, sum_even + head(lst))
      : counter(tail(lst), n + 1, sum_odd + head(lst), sum_even);
  }
  return counter(lst, 0, 0, 0);
}
sums(list(1, 2, 3, 4, 5));
sums(list(1, 2, 3, 4, 5));

const lst = list(1, 2, 3, 4);

function reverse(lst) {
  function reversed_helper(original, reversed) {
    return is_null(original)
      ? reversed
      : reversed_helper(tail(original), pair(head(original), reversed));
  }
  return reversed_helper(lst, null);
}

reverse(lst);
