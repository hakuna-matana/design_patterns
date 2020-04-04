/**
 * Bridge(Мост) - структурный паттерн, который разделяет один или несколько классов
 * на несколько отдельных иерархий, которые называются абстракия и реализация,
 * что помогает изменять их без зависимости друг от друга.
 * Абстракция - специаьная обертка, которая не выполняет работу, а дилегирует одному из объектов реализации
 * Реализация - объект, в котором описана сама реализация
 */

/**
 * Абстрактные классы
 */

class Model {
  constructor(color) {
    this.color = color;
  }
};

class Color {
  constructor(type) {
    this.type = type;
  }
  get() {
    return this.type;
  }
};

/**
 * Реализация цветов
 */

class BlackColor extends Color {
  constructor() {
    super('dark-black');
  }
}

class SilverColor extends Color{
  constructor() {
    super('Silver-metallic')
  }
}

/**
 * Реализация моделей машин
 * Мост между моделью и цветом - это this.color.get
 */

class Audi extends Model {
  constructor(color) {
    super(color);
  }
  paint() {
    return `Auto: Audi, Color: ${this.color.get()}`
  }
}

class Bmw extends Model {
  constructor(color) {
    super(color);
  }
  paint() {
    return `Auto: Bmw, Color: ${this.color.get()}`
  }
}

const blackBmw = new Bmw(new BlackColor())

console.log(blackBmw.paint())