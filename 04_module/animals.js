const animals = ['puppy', 'cat'];

// exports.animals = animals;

function showAnimals() {
  animals.map((el) => console.log(el));
}

module.exports = {
  animals,
  showAnimals,
};
