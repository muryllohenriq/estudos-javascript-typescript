let pets = [
    {
        nome: 'Batman',
        tipo: 'cão',
        raca: 'Labrador',
        idade: 5,
        genero: 'M',
        vacinado: false,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'Costelinha',
        tipo: 'cão',
        raca: 'SRD',
        idade: 10,
        genero: 'M',
        vacinado: true,
        servicos: ['banho']
    },
    {
        nome: 'Scooby Doo',
        tipo: 'cão',
        raca: 'Dogue Alemão',
        idade: 51,
        genero: 'M',
        vacinado: false,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'Tom',
        tipo: 'gato',
        raca: 'SRD',
        idade: 5,
        genero: 'M',
        vacinado: false,
        servicos: ['corte de unha']
    },
    {
        nome: 'Ada',
        tipo: 'iguana',
        raca: 'albina',
        idade: 5,
        genero: 'F',
        vacinado: true,
        servicos: ['banho']
    }
];

const listarPets = () => {
    console.log('** TODOS OS PETS CADASTRADOS **');
    for (let contador = 0; contador < pets.length; contador++) {
        console.log(`
            nome: ${pets[contador].nome}
            raça: ${pets[contador].raca}
            idade: ${pets[contador].idade} anos
            gênero: ${pets[contador].genero == "M" ? "macho" : "femea"}
            vacinado: ${pets[contador].vacinado ? "sim" : "não"}
        `);
    }
}

listarPets();