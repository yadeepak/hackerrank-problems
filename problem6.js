//https://www.hackerrank.com/challenges/lisa-workbook/

// Complete the workbook function below.
function workbook(n, k, arr) {
    let noOfPages , specialProblem = 0;
    for(let i=0;i<arr.length;i++){
    const chapter = arr[i];
    if(chapter <= k){
    noOfPages = noOfPages+1;
    if(noOfPages <= chapter){
      specialProblem =specialProblem+1;
    }
    }
    else{
     let pagesPerChapter =  Math.floor(chapter/k);
     const remains = chapter - pagesPerChapter*k
     if(remains > 0){
         pagesPerChapter = pagesPerChapter+1; 
     }
     const arrChapter = Array.from({length: chapter}, (v, key) => key+1); 
     for(let j = 0;j<pagesPerChapter;j++){
         noOfPages = noOfPages+1;
         const getProblems = arrChapter.slice(j*k,(j*k)+k);
         const special = getProblems.includes(noOfPages);
         if(special){
            specialProblem =specialProblem+1; 
         }
     }
    }
}
return specialProblem;
}
