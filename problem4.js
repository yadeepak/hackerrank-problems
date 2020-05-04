//https://www.hackerrank.com/challenges/chocolate-feast/problem

// Complete the chocolateFeast function below.

function chocolateFeast(n, c, m) {
let eats = Math.floor(Number(n)/Number(c));
let remainWrappers = eats;
if(eats >= m){
   eats = buyAgain(eats , m , remainWrappers , c);
}
return eats
}

function buyAgain(eats , m , remainWrappers ){
    if(remainWrappers >= m){
            let countEet = Math.floor(remainWrappers/m);
           remainWrappers = (remainWrappers-m*countEet) + countEet;
         eats = eats + countEet;
       return buyAgain(eats , m , remainWrappers);
    }
    return eats;
}