import MiniSearch from 'minisearch';

export default async function getPosts() {
  const input = document.querySelector('#sm-search-input');

  const key = 'd35f69f3db93fb938668b47f13';
  const url = 'http://localhost:2370';

  const res = await fetch(
    `${url}/ghost/api/content/posts/?limit=all&formats=plaintext&key=${key}`,
  );
  const { posts } = await res.json();

  const miniSearch = new MiniSearch({
    fields: ['title', 'plaintext'], // fields to index for full-text search
    storeFields: ['title', 'url'], // fields to return with search results
  });

  function renderResults(searchResults) {
    const results = searchResults.map(
      (result) =>
        `<p class="sm-search-result"><a href="${result.url}">${result.title}</a></p>`,
    );
    return results.join('');
  }

  function search(e) {
    // Reset search results contain if no input
    if (!e.currentTarget.value.length) {
      document.querySelector('.sm-search-results-container').innerHTML = '';
      document
        .querySelector('.sm-clear-search-button')
        .classList.remove('sm-show-clear-button');
      return;
    }

    // Show clear button after input
    document
      .querySelector('.sm-clear-search-button')
      .classList.add('sm-show-clear-button');

    // Search with default options
    const results = miniSearch.search(e.currentTarget.value);
    document.querySelector('.sm-search-results-container').innerHTML =
      results.length
        ? renderResults(results)
        : '<p class="sm-search-result">No results</p>';
  }

  // Index all documents
  miniSearch.addAll(posts);

  input.addEventListener('input', search);
}
