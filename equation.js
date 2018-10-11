let a, b, c;
a = process.argv[2]
b = process.argv[3]
c = process.argv[4]
resolve(a, b, c)

function resolve (a, b, c) {
  console.log(`Your equation: ${a}x^2 + (${b})x + (${c})`);

  let disc = b*b - (4*a*c);
  if (disc > 0) {
    x1 = (-b + Math.sqrt(disc))/2*a;
    x2 = (-b - Math.sqrt(disc))/2*a;
    console.log(`Radicals are: \n\t\tx1 = ${x1}  \n\t\tx2 = ${x2}`);
    return;
  } else if (disc == 0){
    x = -b/(2*a);
    console.log(`Your radical is: \n\t\tx = ${x}`);
    return;
  } else {
    disc = Math.abs(disc)
    x1 = `(${-b} + ${Math.sqrt(disc)}i)/${2*a}`;
    x2 = `(${-b} - ${Math.sqrt(disc)}i)/${2*a}`;
    console.log(`Radicals are: \n\t\tx1 = ${x1}  \n\t\tx2 = ${x2}`);
    return;
  }
}
