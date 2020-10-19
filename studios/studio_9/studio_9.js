function d_filter(pred, xs) {
  if (is_null(xs)) {
    return xs;
  } else if (pred(head(xs))) {
    set_tail(xs, d_filter(pred, tail(xs)));
    return xs;
  } else {
    return d_filter(pred, tail(xs));
  }
}


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