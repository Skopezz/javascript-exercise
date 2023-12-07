window.alert("Hello World!")
document.write("<h1>Hello from external Javascript file</h1>")
/* define the variable */
let x = 3;
let y = 6;
let z = 8;

/* Calculate A, B and C */
let A = x + y + z;
let B = (2*x) + (3*z);

console.log("A = ",A);
console.log("B = ",B);

window.alert(A);
window.alert(B);

document.write("<h1>A =", A, "</h1>", "<h1>B = ", B, "</h1>");
document.write("<table border=2><tr><td>", A,"</td></tr></table>");

fname = prompt("What's your name?");
document.write("<h1>Hello ", fname, "</h1>");
