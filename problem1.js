// https://www.hackerrank.com/challenges/the-birthday-bar/problem

function birthday(s, d, m) {
    let month = [];
  month.length =m;
    month.fill('',0,m);
 const rtn = s.map((value , i , arr) =>{       
     const total =  month.reduce((acc,cur,j)=>{
            acc+=arr[i+j]
            return acc;
        },0)
        return total
})
const res = rtn.filter(v=>v===d)
return res.length
}

//method 2

function birthday(s, d, m) {
    let count = 0;
      if (s.length < m) {
          return count;
      }
      function arrSum(arr) {
          return arr.reduce((a, c) => a + c);
      }
      s.forEach((val, index) => {
          const sum = arrSum(s.slice(index, m + index))
          if (sum === d) count += 1;
      })
      return count;
  }
  