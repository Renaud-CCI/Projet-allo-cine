function popup (title, poster, released, plot, actors, imdbRating, director, genre, runtime, country, language, awards, image1, image2, image3) {
    w=open("","nom_popup","menubar=no, status=no, scrollbars=no, menubar=no, width=300px", height="300px"); 
    w.document.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Infos on ${title.replace("¤", "'")}</title>
        <link rel="stylesheet" href="./css/style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        </head><body>`)
    w.document.write(`
    <div class="container d-flex my-2 border border-primary-subtle rounded">
        <div class="col-5 col-md-4 align-items-center">
            <img class="p-2 movie-poster" src="${poster}" width=100%>
        </div>

        <div class="col-7 col-md-8">
            <h2 class="text-success p-2">${title.replace("¤", "'")}</h2> 
            <p><u>Released</u> : ${released}</p>
            <p><u>Teaser</u> : ${plot.replaceAll("¤", "'").replaceAll('*', '"')}</p>
            <p><u>Actors</u> : ${actors}</p>
            <p><u>Director</u> : ${director}</p>
            <p><u>Genre</u> : ${genre}</p>
            <p><u>Runtime</u> : ${runtime}</p>
            <p><u>Country</u> : ${country}</p>
            <p><u>Language</u> : ${language}</p>
            <p><u>Awards</u> : ${awards}</p>


            <div class="container d-flex px-0 py-3">
                <div class="col-3">
                    <div class="text-center">Notation</div>
                    <div class="progress mx-2 text-start">
                        <div class="progress-bar" style="width:${imdbRating*10}%" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100">${imdbRating}</div>
                    </div>
                </div>
                    <div class="col-3">
                    <img src="${image1}" width=90% height=100%>
                    </div>
                    <div class="col-3">
                    <img src="${image2}" width=90% height=100%>
                    </div>
                    <div class="col-3">
                    <img src="${image3}" width=90% height=100%>
                    </div>
            </div>

        </div>
    `)
    w.document.write("</body></html>")
    }

// document.addEventListener('DOMContentLoaded', function() {
//     window.onscroll = function() {
//         document.getElementById("back-icon").className = (window.pageYOffset > 100) ? "a-visible" : "a-invisible";
//     };
//     });

fetch('./../data/moovies.json')
    .then(response => response.json())
    .then(function(movies){
        let cardDiv = document.querySelector(".card1")
        movies.forEach(function(movie){
            console.log(movie)
            cardDiv.innerHTML += `
            <div class="container d-flex my-3 border border-light border-opacity-25 rounded text-light">
                <div class="col-5 col-md-4 d-flex align-items-center justify-content-center">
                    <img class="p-2 movie-poster" src="${movie.Poster}" width=100% height=100%>
                </div>

                <div class="col-7 col-md-8">
                    <h2 class="text-success p-2">${movie.Title} <span class="text-white-50 fs-6">${movie.Year}</span></h2> 
                    <p>${movie.Plot}</p>
                    <p>Actors : ${movie.Actors}</p>

                    <a href="#" onclick="popup('${movie.Title.replace("'", "¤")}', '${movie.Poster}','${movie.Released}', '${movie.Plot.replaceAll("'", "¤").replaceAll('"', '*')}', '${movie.Actors}', '${movie.imdbRating}', '${movie.Director}', '${movie.Genre}', '${movie.Runtime}', '${movie.Country}', '${movie.Language}','${movie.Awards}', '${movie.Images[0]}', '${movie.Images[1]}', '${movie.Images[2]}')" class="text-danger">more infos</a>

                    <div class="container d-flex px-0 py-3">
                        <div class="col-3">
                            <div class="text-center">Notation</div>
                            <div class="progress mx-2 text-start">
                                <div class="progress-bar" style="width:${movie.imdbRating*10}%" role="progressbar" aria-valuenow="" aria-valuemin="0" aria-valuemax="100">${movie.imdbRating}</div>
                            </div>
                        </div>
                        <div class="col-3">
                            <img src="${movie.Images[0]}" width=90% height=100%>
                        </div>
                        <div class="col-3">
                            <img src="${movie.Images[1]}" width=90% height=100%>
                        </div>
                        <div class="col-3">
                            <img src="${movie.Images[2]}" width=90% height=100%>
                        </div>
                    </div>
                </div>
            </div>
            `
        })
    })



