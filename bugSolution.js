function foo(a, b) {
  a = a === undefined ? 0 : a;
  a = a === null ? 0 : a;
  return a + b;
}

console.log(foo(undefined, 1)); // 1
console.log(foo(null, 1)); // 1
console.log(foo(1,2)); //3