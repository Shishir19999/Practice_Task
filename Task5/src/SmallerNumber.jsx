import {useState} from 'react';

function SmallerNumber() {
    const [nums, setNums] = useState([]);
    const [result, setResult] = useState([]);
    const [error, setError] = useState('');
  
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
      if (nums.length === 0) {
        setError('Please enter at least one number.');
        setResult([]);
        return;
      }
      if (nums.some((n) => Number.isNaN(n))) {
        setError('Invalid input: use only numbers separated by commas, e.g. 5, 2, 6, 1.');
        setResult([]);
        return;
      }
      setError('');
      const computedResult = countSmaller(nums);
      setResult(computedResult);
    };
  
    const inputOnChange = (e) => {
      const value = e.target.value;
      const numsArray = value.trim() === ''
        ? []
        : value.split(',').map((part) => (part.trim() === '' ? NaN : Number(part)));
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

        {error && <p role="alert" style={{ color: 'red' }}>{error}</p>}
        
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
