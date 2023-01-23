// Select all text elements in the HTML book
const textElements = document.querySelectorAll("p, h1, h2, span");

// Loop through each text element
textElements.forEach(element => {
  // Split the text content into words
  const words = element.textContent.split(" ");
  
  // Loop through each word
  words.forEach((word, index) => {
    // Check if the word is in the translations list
    if (translations[word]) {
      // Replace the word with a translated version
      words[index] = `<span class="translated" title="${translations[word]}">${word}</span>`;
    }
  });
  
  // Update the text content with the translated words
  element.innerHTML = words.join(" ");
});

// Select all translated elements in the HTML book
const translatedElements = document.querySelectorAll(".translated");

// Loop through each translated element
translatedElements.forEach(element => {
  // Add a click event listener to the element
  element.addEventListener("click", function() {
    // Get the word from the element's text content
    const word = this.textContent;
    // Play the audio file of the word's pronunciation
    new Audio(`audio/${word}.mp3`).play();
  });
});
