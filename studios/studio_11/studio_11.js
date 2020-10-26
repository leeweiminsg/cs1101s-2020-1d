// 1,2,4,8...
// A is the infinite stream containing the powers of two: 1
// 0
// , 2
// 1
// , 2
// 2
// , 2
// 3 etc, which means it

// contains the numbers: 1, 2, 4, 8, . . .

// 1,1,2,6,24....

// B is the stream of factorials: 0!, 1!, 2!, 3!, 4!, etc, which means it contains the numbers: 1, 1,
// 2, 6, 24, 120, . . .

// const neg_power = x => math_pow(-1, x);
// const alt_ones = fun_to_series(neg_power);
// const zeros = add_series(alt_ones, negate_series(alt_ones));

// function helper(n) {
//     return pair(n, () => helper(-n));
// }
// const alt_ones = helper(1);

// const ones = pair(1, () => ones);

// const pos_integers = pair(1, () => add_streams(ones, pos_integers));

// https://drive.google.com/file/d/1fbJCMO2KkAOmaQnJ_KX1fjhiEMzKQJCb/view

// pair(1, 2), pair(1, 3), pair(1, 4), pair(1, 5),
// pair(2, 3), pair(2, 4), pair(2, 5),
// pair(3, 4), pair(3, 5),
// pair(4, 5)

// stream_pairs produces a stream containing all pairs (p1, p2) where p1 occurs before
// p2 in the given finite stream. stream_pairs works by “wishful thinking”: We assume
// that stream_pairs produces the stream of pairs from the tail of the given stream.
// What is missing are those pairs that start with the first element p1 of the given stream.
// Therefore stream_pairs returns the result of appending the stream of those pairs to
// the stream of pairs from the tail. The first stream is the result of a call of stream_map
// to the tail, where each element p2 of the tail becomes the pair containing p1 and the
// respective p2.

// The program runs forever. The reason for this is that function stream_pairs calls
// itself recursively in the second argument of stream_append. The argument is the tail
// of the given stream. According to applicative order reduction, we need to evaluate the
// second argument of stream_append before we evaluate the body of stream_append. If
// the given stream is infinite, this results in an infinite loop.

// The function stream_append_pickle expects its second argument to be wrapped in
// a nullary function, a “pickle”. Thus the caller function stream_pairs2 passes the
// recursive call inside a nullary function as second argument to stream_append_pickle.
// This “pickle” will be activiated (i.e. applied to no arguments) when we reach the empty
// list at the end of the first argument list.

// A possible remedy in this situation is a common idea in computing, when we deal with
// more than one possibly infinite sequences and need to make sure that we reach every
// element. It is the idea of interleaving. If we don’t care about the order of elements, we
// can combine two streams in an interleaving manner as follows:
// function interleave_stream_append(s1, s2) {
// return is_null(s1)
// ? s2
// : pair(head(s1), () => interleave_stream_append(s2,
// stream_tail(s1)));

// }
// Note that in the recursive call, the roles of s1 and s2 are switched, so that the two
// streams are taking turns at supplying the elements of the result stream. Here is how
// we make use of interleave_stream_append to improve stream_pairs:
// function stream_pairs3(s) {
// return (is_null(s) || is_null(stream_tail(s)))
// ? null
// : pair(pair(head(s), head(stream_tail(s))),
// () => interleave_stream_append(

// stream_map(x => pair(head(s), x),
// stream_tail(stream_tail(s))),
// stream_pairs3(stream_tail(s))));

// }

// Calculation for last qn
// function add_streams(s1, s2) {
// return is_null(s1)
// ? s2
// : is_null(s2)
// ? s1
// : pair(head(s1) + head(s2),
// () => add_streams(stream_tail(s1),
// stream_tail(s2)));

// }
// function scale_stream(c, stream) {
// return stream_map(x => c * x, stream);
// }
// const add_series = add_streams;
// const scale_series = scale_stream;
// function mul_series(s1, s2) {
// return pair(head(s1) * head(s2),
// () => add_series(
// stream_tail(scale_series(head(s2), s1)),
// mul_series(stream_tail(s2), s1)));

// }
