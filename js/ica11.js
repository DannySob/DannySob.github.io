const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    getQuote();
    localStorage.setItem("text", quoteText);
});

const quoteText = document.querySelector("#js-quote-text")

function getQuote() {
    fetch('https://trivia.cyberwisp.com/getrandomchristmasquestion')
    .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.text();
    })
    .then((text) => quoteText.textContent = text)
    .catch((error) => quoteText.textContent = `Could not fetch verse: ${error}`);

  }

function displayQuote(quote) {
    const text = document.createElement('p');
    text.textContent = quote;
    quoteText.appendChild(text);
}