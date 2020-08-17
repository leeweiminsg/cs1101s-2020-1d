// session-id: 973c9c96-407f-4575-b591-76185bcb31d1

function biggie_size(combo) {
  return combo + 4;
}

function un_biggie_size(combo) {
  return combo - 4;
}

function is_biggie_size(combo) {
  return combo > 4;
}

function is_biggie_size(combo) {
  return combo >= 5;
}

function combo_price(combo) {
  const a = 1.17;
  const b = 0.5;
  return combo > 4 ? combo * a + b : combo * a;
}

function combo_price(combo) {
  return is_biggie_size(combo)
    ? un_biggie_size(combo) * 1.17 + 0.5
    : combo * 1.17;
}

function empty_order() {
  return 0;
}

function add_to_order(order, combo) {
  return 10 * order + combo;
}

function last_combo(order) {
  return order % 10;
}

function last_combo(order) {
  return order - other_combos(order) * 10;
}

function other_combos(order) {
  return math_floor(order / 10);
}
