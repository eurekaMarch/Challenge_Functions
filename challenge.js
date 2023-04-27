// Question 1
console.log("===== Start Question 1 =====")
function addition(x, y) {
    return x + y;
}

console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));


// Question 2
console.log("===== Start Question 2 =====")
function convert(a) {
   return a * 60;
}

console.log(convert(5));
console.log(convert(3));
console.log(convert(2));


// Question 3
console.log("===== Start Question 3 =====")
function findPerimeter(a, b) {
    return (a + b) * 2;
}

console.log(findPerimeter(6, 7));
console.log(findPerimeter(20, 10));
console.log(findPerimeter(2, 9));


// Question 4
console.log("===== Start Question 4 =====")
function checkDevide(a,b) {
    if (a % b == 0) {
        return "true";
    } else {
        return "false";
    } 
}

console.log(checkDevide(5, 1));
console.log(checkDevide(6, 3));
console.log(checkDevide(10, 3));


// Question 5
console.log("===== Start Question 5 =====")
function calcAge(x) {
    return x * 365;
}

console.log(calcAge(65));
console.log(calcAge(0));
console.log(calcAge(20));


// Question 6
console.log("===== Start Question 6 =====")
function footballPoints(wins, draws, losses) {
    return wins * 3 + draws * 1 + losses * 0;
}

console.log(footballPoints(3, 4, 2));
console.log(footballPoints(5, 0, 2));
console.log(footballPoints(0, 0, 1));