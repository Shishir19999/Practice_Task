import React ,{useState} from 'react'

function SmallerNumber() {
    const [nums, setNums] = useState([]);
    const [result, setResult] = useState([]);
  
    const countSmaller = (nums) => {
      const result = [];
      for (let i = 0; i < nums.length; i++) {
        let count = 0;
        for (let j = i + 1; j < nums.length; j++) {
          if (nums[j] < nums[i]) {
            count++;
          }
        }
        result.push(count);
      }
      return result;
    };
  
    const results = () => {
      const computedResult = countSmaller(nums);
      setResult(computedResult);
    };
  
    const inputOnChange = (e) => {
      const value = e.target.value;
      const numsArray = value.split(',').map(Number);
      setNums(numsArray);
    };
  
    return (
      <div>
        <h1>Count Smaller Elements to the Right</h1>
        
        <input
          type="text"
          placeholder="Enter numbers separated by commas"
          onChange={inputOnChange}
        />
        
        <button onClick={results}>Compute</button>
        
        <div>
          <h2>Results:</h2>
          <ul>
            {result.map((count, index) => (
              <li key={index}>Element {nums[index]}: {count} smaller elements to the right</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

export default SmallerNumber
