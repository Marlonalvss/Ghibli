document.addEventListener('DOMContentLoaded', () => {
    const inputYear = document.getElementById('year-filter');
    const inputTitle = document.getElementById('search');
    const inputDirector = document.getElementById('director-filter');
    const movieList = document.getElementById('movie-list');
    const sortFilter = document.getElementById('sort-filter'); 

    let allMovies = [];

    fetch('https://ghibliapi.vercel.app/films')
        .then(response => response.json())
        .then(data => {
            allMovies = data;

            const uniqueYears = new Set(data.map(movie => movie.release_date));
            const uniqueDirectors = new Set(data.map(movie => movie.director));

            uniqueYears.forEach(year => inputYear.appendChild(new Option(year)));
            uniqueDirectors.forEach(director => inputDirector.appendChild(new Option(director)));

            renderMovies();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Sorry, we encountered an error loading the movies.');
        });

    function renderMovies() {
        movieList.innerHTML = '';

        const sortedMovies = [...allMovies];

        if (sortFilter.value === 'newest') {
            sortedMovies.sort((a, b) => b.release_date - a.release_date);
        } else if (sortFilter.value === 'oldest') {
            sortedMovies.sort((a, b) => a.release_date - b.release_date); 
        }
        sortedMovies.forEach(movie => {
            const matchesYear = !inputYear.value || movie.release_date === inputYear.value;
            const matchesDirector = !inputDirector.value || movie.director === inputDirector.value;
            const matchesTitle = movie.title.toLowerCase().includes(inputTitle.value.toLowerCase());

            if (matchesYear && matchesDirector && matchesTitle) {
                const movieCard = document.createElement('div');
                movieCard.className = 'max-w-xs bg-white/70 p-3 rounded-lg shadow-md cursor-pointer transition-transform transform hover:scale-105 hover:shadow-lg';

                movieCard.innerHTML = `
                <img src="${movie.image}" alt="${movie.title}" class="h-65 w-full mb-4">
                <h3 class="text-xl font-semibold text-center">${movie.title}</h3>
                <p id="detailsOne-${movie.id}" class="text-gray-800 text-sm mt-2">${movie.description.slice(0, 150)}...</p>
                <div id="details-${movie.id}" class="max-h-0 opacity-0 overflow-hidden mt-4 text-gray-700 transition-all ease-in-out duration-700">
                    <p class="pb-3 text-gray-800">${movie.description}</p>
                    <p><strong>Director:</strong> ${movie.director}</p>
                    <p><strong>Producer:</strong> ${movie.producer}</p>
                    <p><strong>Release Date:</strong> ${movie.release_date}</p>
                    <p><strong>Rating:</strong> ${movie.rt_score}</p>
                    <p><strong>Release Time:</strong> ${Math.floor(movie.running_time / 60)}h ${movie.running_time % 60}m</p>
                </div>
                <a href="javascript:void(0);" class="text-blue-500 hover:underline mt-4 block text-center">Read more</a>
                `;

                movieCard.addEventListener('click', () => {
                    const details = document.getElementById(`details-${movie.id}`);
                    const detailsOne = document.getElementById(`detailsOne-${movie.id}`);
                    detailsOne.classList.toggle('max-h-0');
                    detailsOne.classList.toggle('opacity-0');
                    details.classList.toggle('opacity-0');
                    details.classList.toggle('max-h-0');
                    details.classList.toggle('opacity-100');
                    details.classList.toggle('max-h-screen');
                });

                movieList.appendChild(movieCard);
            }
        });
    }

    inputYear.addEventListener('change', renderMovies);
    inputDirector.addEventListener('change', renderMovies);
    inputTitle.addEventListener('input', renderMovies);
    sortFilter.addEventListener('change', renderMovies); 
});
