const findPairs = (numbers, targetSum) => {
  const pairs = [];
  const result = new Set();;

  for(const number of numbers) {
    const complement = targetSum - num;
    if(result.has(complement)) {
      pairs.push([complement, number])
    }
    result.add(num)
  }

  return pairs;
}
