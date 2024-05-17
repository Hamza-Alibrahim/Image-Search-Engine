let input = document.getElementById("search-box"),
    search_result = document.getElementById("search-result"),
    button = document.getElementById("show-more"),
    keyword = "", page;
async function searchImges() {
    keyword = input.value;
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=6kB_DViMdCqN_62DQ1ZgOZ3CoTD-CdrWN5yiyMfUyCM&per_page=12`;
    let res = await fetch(url);
    let data = await res.json();
    let results = data.results;
    if (page === 1) search_result.innerHTML = "";
    results.forEach((result) => {
        let image = document.createElement("img");
        image.src = result.urls.small;
        let imagelink = document.createElement("a");
        imagelink.href = result.links.html;
        imagelink.target = "_blank";
        imagelink.appendChild(image);
        search_result.appendChild(imagelink);
    });
    button.style.display = "block";
};
input.addEventListener("keydown", e => {
    if (e.key === "ENTER") document.querySelector("form button").click();
});
document.querySelector("form button").onclick = (e => {
    e.preventDefault();
    page = 1;
    searchImges();
});
button.addEventListener("click", () => {
    page++;
    searchImges();
});