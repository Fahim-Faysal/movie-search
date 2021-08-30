const loadmovie = async () => {
	const inputFiled = document.getElementById('input');
	const inputValue = inputFiled.value;
	console.log(inputValue);
	const res = await fetch(`https://api.tvmaze.com/search/shows?q=${inputValue}`);
	const data = await res.json();

	display(data);
};

const display = (movies) => {
	const root = document.getElementById('div');
	root.textContent = '';
	for (movie of movies) {
		const div = document.createElement('div');

		div.classList.add('inside');
		div.innerHTML = `
            <h1 class="text-blue-600">${movie.show.name}</h1>
            <img src="${movie.show.image.medium}" alt="">
            <p class="text-green-600">${movie.show.genres[0]}</p>
            `;
		root.appendChild(div);
	}
};
