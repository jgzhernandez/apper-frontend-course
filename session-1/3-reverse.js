function reverse(word) {
    if (typeof(word) === 'string'){
        return word.split('').reverse().join('')
   }
   return "Input a string."
}
   
   const word = 'hello'
   const reversedWord = reverse(word)
   console.log(reversedWord) // 'olleh'
   console.log(reverse(123)) // 'Input a string.'
   console.log(reverse("race")) // 'race'