// 2) Extend Number type with the reverse() function.
// The function is to reverse the value of the Number on which it was called.


Number.prototype.reverse = function () {
    return 1 / this;
};

console.log((8).reverse());
console.log((0).reverse());