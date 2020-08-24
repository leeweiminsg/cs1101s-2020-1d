//mukund and trushti

function moony_1(bottom_right) {
  return stack(beside(circle, blank), beside(square, bottom_right));
}

show(moony_1(ribbon));

// Quang Vinh and Shee Hui
// function moony_2(n){
//     return n === 2 ? moony_1(circle) : stack(beside(circle, blank), beside(square, moony_2(n-1)));
// }

//Cedric and Quoc Huy
function moony_2(n) {
  return moony_2_helper(n, circle);
}

function moony_2_helper(n, rune) {
  return n === 1
    ? rune
    : beside(stack(rune, square), stack(blank, moony_2_helper(n - 1, rune)));
}

// model
function moony_2_1(n) {
  return n === 1 ? circle : moony_1(moony_2(n - 1));
}

// evening rows
// function moony_3(n) {
//     return n === 1
//         ? circle
//         : stack_frac(1/n,
//                 beside(circle, blank),
//                 beside(square, moony_3(n - 1)));
// }

// Quang Vinh and Shee Hui
function moony_3(n) {
  return n === 2
    ? moony_1(circle)
    : stack_frac(
        1 / n,
        beside_frac(1 / n, circle, blank),
        beside_frac(1 / n, square, moony_3(n - 1))
      );
}

show(moony_3(5));

// O(n)
