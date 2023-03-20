// Take it from someone who learned how to code without the help of anyone:
// Coding is not too different than things you already know, it's just a language used to express your understanding of how to solve a problem, the first step is to "imagine" the steps of solving the problem in your head, you can do that using "common sense" and step by step procedures of breaking down a complex parts into smaller ones, after that what is left is learning what keys to press on your keyboard to "translate" the solution into computer language.
// you will NEVER be able to code something that you didn't solved in your head firsthand.

function mostFrequentItemCount(collection) {
    if (collection.length === 0) return 0;

    var count = Object.create(null);
  
    collection.forEach((item) => {
        count[item] = (count[item] || 0) + 1;
      });
      
    return count;
  }

  console.log(mostFrequentItemCount([2, 2, 3, 3, 3, 4, 5, 0]));