//https://www.hackerrank.com/challenges/service-lane/problem

function serviceLane(n,t ,w, cases) {
    const resultArray = [];
for(let i= 0;i<t;i++){
const distance = cases[i];
const newArray = w.slice(distance[0],distance[1]+1);
const min = Math.min(...newArray);
resultArray.push(min);
}
return resultArray;

}