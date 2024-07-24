function isPalindrome(word) {
    return word === word.split('').reverse().join('')
  }
  
  const word = 'racecar'
  if (isPalindrome(word)) {
    console.log('It is a palindrome!')
  } else {
    console.log('It is not a palindrome!')
  }

  const word2 = 'testnonpalindrome'
  if (isPalindrome(word2)) {
    console.log('It is a palindrome!')
  } else {
    console.log('It is not a palindrome!')
  }