const animals = ['puppy', 'cat'];

function showAnimals() {
  animals.map((el) => console.log(el));
}

export { animals as ani, showAnimals as show };
