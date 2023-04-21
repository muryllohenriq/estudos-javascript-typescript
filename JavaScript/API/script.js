function fetchApiData() {
    // não instancia o método pois o fetch usa por padrão o 'GET'
    // fetch() faz a promise, e .then() é o que fará depois de receber a promise.
    fetch('https://jsonplaceholder.typicode.com/todos/')
        // 'response' é o que a promise retorna
        .then(response =>
            // como a response retorna outros dados, o .json() transforma os dados do body da response em json
            response.json())
        // 'data' é o item que o response.json() retornará
        .then(data => {
            const list = document.querySelector('#fill_list')

            data.map((item) => {
                const li = document.createElement('li');

                li.setAttribute('id', item.id);
                li.innerHTML = item.title;
                list.appendChild(li);
            })
        })
}

function postApiData() {
    fetch('https://reqres.in/api/users', {
        // especifica o método da requisição
        method: 'POST',
        // especifica o valor da requisição
        headers: {
            'Content-Type' : 'application/json'
        },
        // body é o corpo da nossa requisição, e é aqui que fica o valor que vamos mandar e o JSON.stringify() converte os valores javascript para JSON
        body: JSON.stringify({
            name: 'Muryllo'
        })
    })
    .then((response) => response.json())
    .then((data) => console.log(data))
}