

const inputText = document.getElementById("inputtext");
const searchBtn = document.getElementById("searchbtn");
const movieData = document.getElementById("moviedata");
const error = document.getElementById("error");

async function MovieData() {
    const movieName = inputText.value;

    if (!movieName) {
        error.innerText = "Please enter a movie name";
        movieData.innerText = "";
        return;
    }
    error.innerText = "Loading...";

    const url = `https://www.omdbapi.com/?t=${movieName}&apikey=bdfc891e`;

    try {
        const response = await fetch(url);
        const data = await response.json();


        if (data.Response === "False") {
            error.innerText = "Movie not found!";
            movieData.innerText = "";
            return;
        }
        error.innerText = "";

        movieData.innerHTML = `
<h2>${data.Title}</h2>
<p><strong>Released:</strong> ${data.Released}</p>
<p><strong>Genre:</strong> ${data.Genre}</p>
<p><strong>Director:</strong> ${data.Director}</p>
<p><strong>Actors:</strong> ${data.Actors}</p>
<p><strong>Plot:</strong> ${data.Plot}</p>
<img src="${data.Poster !== "N/A" ? data.Poster : 'https://via.placeholder.com/150'}" alt="Poster">
`;

    }
    catch (err) {
        error.innerText = "An error occurred while fetching data.";
        movieData.innerHTML = "";
    }
}

searchBtn.addEventListener("click",()=>{
    MovieData();
} );