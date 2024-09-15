function filterCuisine() {
    const filter = document.getElementById('cuisine-filter').value;
    const articles = document.querySelectorAll('.restaurant');

    articles.forEach(article => {
        if (filter === 'all' || article.getAttribute('data-cuisine') === filter) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
}
