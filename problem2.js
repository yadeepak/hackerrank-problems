// https://www.hackerrank.com/challenges/sherlock-and-squares/problem
function squares(a, b) {
    let nos = [];
    let cur = 1
    let index = 1 ;
while(cur <= b){
    cur = index * index;
    if(cur >= a && cur<=b){
    nos.push(cur)
    }
    index++;
}
return nos.length;

}


//with math functions

function squares(a, b) {
    let count = 0;
    let limit1 = Math.floor(Math.sqrt(a));
    let limit2 = Math.ceil(Math.sqrt(b));
    for (let i = limit1; i <= limit2; i++) {
      let sqr = Math.pow(i,2);
      if (sqr >= a && sqr <= b) count += 1;
    }
    return count;
  }