let a, b, c;
console.log('Please enter values for your equation: a, b and c together with sign');


function resolve (a, b, c) {
  console.log(`Your equation: ${a}x^2 + (${b})x + (${c})`);

  let disc = a*a - (4*a*c);

  if (disc > 0) {
    x1 = (-b + Math.sqrt(disc))/2*a;
    x2 = (-b - Math.sqrt(disc))/2*a;
    return `Radicals are: \n\t\tx1 = ${x1}  \n\t\tx2 = ${x2}`;
  } else if (disc = 0){
    x = -b/(2*a);
    return `Your radical is: \n\t\tx = ${x}`;
  } else {
    return `Your equation doen't has radicals`;
  }
}
