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
