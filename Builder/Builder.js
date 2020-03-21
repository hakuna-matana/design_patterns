/**
 * Builder(Строитель) - используется для создания объектов со сложными состояниями.
 * Может иметь дополнительный слой абстракций - Director(директор), который управляет несколькими строителями.
 * Структурный паттерн.
 *
 * Позволяет создавать сложные объекты, инициализацию которых сложно уместить в конструкторе.
 * Позволяет создавать разные конфигурации объектов, не засоряя исходный конструктор дополнительной логикой.
 * Или разбивать создание объекта на несколько шагов.
 * */

/**
 * Базовый класс
 */
  class Car {
    constructor() {
      this.autoPilot = false;
      this.parkingSensors = false;
      this.signaling = false;
    }
  }

/**
 * Builder для модификации
 */
class CarBuilder {

  constructor() {
    this.car = new Car();
  }

  addAutoPilot(autoPilot) {
    this.car.autoPilot = autoPilot;
    return this;
  }

  addParkingSensors(parkingSensors) {
    this.car.parkingSensors = parkingSensors;
    return this;
  }

  addSignaling(signaling) {
    this.car.signaling = signaling;
    return this;
  }

  updateEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  build() {
    return this.car;
  }
  
}

/**
 * Создание экземпляра класса с помощью Builder
 */

const car = new CarBuilder()
  .addAutoPilot(true)
  .addParkingSensors(true)
  .updateEngine('V8')
  .build()

console.log(car);

