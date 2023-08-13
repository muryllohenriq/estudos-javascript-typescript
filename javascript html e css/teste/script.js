const url = 'https://spotify23.p.rapidapi.com/albums/?ids=3IBcauSj5M2A6lTeffJzdv';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a76ddd2a25msh95f11ee3fc38cc5p1941bajsn566c59622264',
		'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
	}
};

async function fetchData() {
	try {
		const response = await fetch(url, options);
		const result = await response.json();
		const data = await result;
        console.log(data);
	} catch (error) {
		console.error(error);
	}
}

fetchData();