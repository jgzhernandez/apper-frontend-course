function convertToVowels(word) {
    if (typeof(word) !== 'string') {
        return 'Input a string.'
    }
    return word.split('').map((letter) => {
        if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
            return letter
        }}).join('')
  }
  
  const word = 'thisissomeword'
  const wordWithOnlyVowels = convertToVowels(word)
  console.log(wordWithOnlyVowels) // iioeo