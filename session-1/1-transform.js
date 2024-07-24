function transform(nums) {
    if(Array.isArray(nums) === true && nums.every(num => typeof num === "number")){
      return nums.map(num => num * num).sort((a, b) => a - b)
    }
    return "Input an array of numbers."
  }
  
  const nums = [4,9,5,3,8]
  const sortedSquaredNums = transform(nums)
  console.log(sortedSquaredNums) // [9,16,25,64,81]
  console.log(transform('hello'))
  console.log(transform('hello'.split('')))
  console.log(transform(1))