//Define a list of translations
const translations = {
 "book": "գիրք",
 "reading": "կարդալ",
 "page": "էջ",
 "Great": "մեծն",
 "story": "Պատմություն",
 "summer": "Ամառ",
 "Boy": "տղա",
 "map": "Քարտեզ",
 "and": "և",
 "four": "Չորս",
 "four,": "Չորս",
 "man": "Տղամարդ, մարդ"
};

// Add translations to the list
const translationsList = document.getElementById("translations-list");

for (const [key, value] of Object.entries(translations)) {
  const translationItem = document.createElement("li");
  translationItem.innerText = `${key}: ${value}`;
  translationsList.appendChild(translationItem);
}

// Add a new translation
const addTranslationForm = document.getElementById("add-translation-form");

addTranslationForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  const keyInput = document.getElementById("key-input");
  const valueInput = document.getElementById("value-input");
  
  const newKey = keyInput.value;
  const newValue = valueInput.value;
  
  translations[newKey] = newValue;
  
  // Add the new translation to the list
  const newTranslationItem = document.createElement("li");
  newTranslationItem.innerText = `${newKey}: ${newValue}`;
  translationsList.appendChild(newTranslationItem);
  
  // Clear the form inputs
  keyInput.value = "";
  valueInput.value = "";
});