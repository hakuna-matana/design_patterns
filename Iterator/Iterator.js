/***
 * Iterator - поведенческий паттерн, который дает возможность последоватльно обходить
 * элементы составных объектов, не раскрывая их внутреннее представление.
 * То есть, никак не изменяя данные объекты
 */

class Iterator {
  constructor(el) {
    this.index = 0;
    this.keys = Object.keys(el)
    this.elements = el;
  }

  next() {
    return this.elements[this.keys[this.index++]];
  }

  hasNext() {
    return this.index < this.keys.length;
  }
}

const autos = {
  audi: {model: 'Audi', color: 'black', price: '20000'},
  bmw: {model: 'BMW', color: 'white', price: '30000'},
  tesla: {model: 'Tesla', color: 'gray', price: '40000'},
}

const collection = new Iterator(autos);

while (collection.hasNext()) {
  console.log(collection.next());
}