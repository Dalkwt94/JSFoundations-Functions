function greet(name) {
  console.log(`Hello ${name}`);
}
greet("dalal");

//===========================================================================//

function isOdd(n) {
  if (n % 2 !== 0) {
    return true;
  } else {
    return false;
  }
}
isOdd(8);

//===========================================================================//

function oddsSmallerThan(n) {
  let s = n / 2;
  return Math.floor(s);
}

//let res = oddsSmallerThan(7);
//console.log(res);

//===========================================================================//

function squareOrDouble(n) {
  if (n % 2 !== 0) {
    return n * n;
  } else if (n % 2 === 0) {
    return n + n;
  }
}

//let res2 = squareOrDouble(8);
//console.log(res2);

module.exports = { greet, isOdd, oddsSmallerThan, squareOrDouble };
