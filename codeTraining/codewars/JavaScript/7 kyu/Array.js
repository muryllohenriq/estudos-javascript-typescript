// - Find Count of Most Frequent Item in an Array
// Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
// Example
// input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
// ouptut: 5

function mostFrequentItemCount(collection) {
  // começa returnando 0 caso o valor passado seja 0
  if (collection.length === 0) return 0;

  // cria um objeto vazio pra guardar os resultados
  let count = Object.create(null);

  // O método forEach() vai executar uma dada função para cada elemento do array.
  collection.forEach((item) => {
    // soma 1 cada vez que o item é encontrado no array
    count[item] = (count[item] || 0) + 1;
  });

  // Math.max() retorna o maior valor do array
  return Math.max(...Object.values(count));
}
console.log(mostFrequentItemCount([2, 2, 3, 3, 3, 4, 5]));
