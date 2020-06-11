$(document).ready(function () {
    /* OPEN SEARCH INPUT HEADER */
    const searchInputBtn = document.getElementById('search-btn');
    const searchInput = document.getElementById('search-input');

    searchInputBtn.addEventListener('click', function (e) {

        const inputElement = searchInput.querySelector('input');
        e.preventDefault();

        console.log(inputElement.value.length);
        if (inputElement.value == '') {
            searchInput.classList.toggle('active');
            this.closest('.header-search').classList.toggle('active');
        }
    })
})