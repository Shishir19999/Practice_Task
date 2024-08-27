const practiceFunction=(arr)=>{
    const arrSet=new Set(arr);
    let longestSeq=0;
    
    for(let element of arr)
    {
        
        if(!arrSet.has(element-1))
        {
            let currNum=element;
            let currSequence=1;

            while(arrSet.has(currNum+1))
            {
                 currNum += 1;
                 currSequence+=1;
            }
            longestSeq=Math.max(longestSeq,currSequence);
        }
    }
    return longestSeq;  
}

let arr=[1,9,2,3,6,8,11,4,5,15];
console.log(practiceFunction(arr));