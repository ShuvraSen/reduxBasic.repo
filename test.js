const add = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
// console.log(add(2)(2)(1));
// console.log(add(2));----eta annonymous function return kore. reference dhore rakhe
const level = add(3);
console.log(level(2)(1));
console.log(level(21)(4));
console.log(level(2)(1));
