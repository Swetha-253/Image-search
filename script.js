const inputForm = document.getElementById('input-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('more');

const accessKey = "NGpbCn00iHh5IZOS50AjAcTvcxITGzWiiRKBoZGwLmA";
let page = 1;
let keyword = "";

async function searchImages() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response = await fetch(url);
    const data = await response.json();
   
    displayImages(data.results);

    showMoreBtn.style.display="block";
}

function displayImages(images) {
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.urls.small;
        searchResult.appendChild(imgElement);
    });
}

inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    page = 1;
    searchResult.innerHTML = ''; // Clear previous results
    searchImages();
});

showMoreBtn.addEventListener('click', () => {
    page++;
    searchImages();
});
