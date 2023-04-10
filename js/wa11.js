const btn = document.querySelector('button');
btn.addEventListener('click', () => {
    getQuote();
});

const quoteText = document.querySelector("#js-quote-text")
const quoteAuthor = document.querySelector("#js-quote-author")

async function getQuote() {
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  if (response.ok) {
    quoteText.textContent = data.content;
    quoteAuthor.textContent = data.author;
  } else {
    quote.textContent = "An error occured";
    console.log(data);
  }
}
