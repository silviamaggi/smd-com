const endpoint = '/assets/js/search.json';

const pages = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(data => pages.push(...data))

function findResults(termToMatch, pages) {
  return pages.filter(item => {
    const regex = new RegExp(termToMatch, 'gi');
    return item.title.match(regex) || item.content.match(regex);
  });
}

function displayResults() {
  const resultsArray = findResults(this.value, pages);
  const html = resultsArray.map(item => {
    return `
      <li class="item item-result">
        <article class="article typeset">
          <h4><a href="${item.url}">${item.title}</a></h4>
          <p>${item.excerpt}</p>
        </article>
      </li>`;
  }).join('');
  if ((resultsArray.length == 0) || (this.value == '')) {
    resultsList.innerHTML = `<p>Sorry, nothing was found</p>`;
  } else {
    resultsList.innerHTML = html;
  }
}

const field = document.querySelector('#search');
const resultsList = document.querySelector('#list');

field.addEventListener('keyup', displayResults);

field.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
  }
});