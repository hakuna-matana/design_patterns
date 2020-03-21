/**
 * Decorator(Декоратор) - с помощью этого паттерна можем динамически изменять(расширять) поведение или добавлять новые свойства
 *
 * Структурный паттерн.
 * Используется чтобы обернуть существующий класс и расширить его функциональность.
 * */

/**
 * Базовый класс
 */

class Car {
  constructor() {
    this.price = 100000;
    this.model = 'Car';
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.model;
  }
}

/**
 * Классы, которые отнаследовались от базового класса
 */

class Tesla extends Car {
  constructor(props) {
    super(props);
    this.price = 250000;
    this.model = 'Tesla'
  }
}

class Audi extends Car {
  constructor(props) {
    super(props);
    this.price = 210000;
    this.model = 'Audi'
  }
}

/**
 * Декораторы, добавляющие дополнительную функциональность
 */

class Autopilot {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 50000;
  }

  getDescription() {
    return `${this.car.getDescription()} with autopilot`
  }
}

class ParkingSensors {
  constructor(car) {
    this.car = car;
  }

  getPrice() {
    return this.car.getPrice() + 20000;
  }

  getDescription() {
    return `${this.car.getDescription()} with parking sensors`
  }
}

/**
 * Экзампляр класса Tesla и Audi, расширенные декораторами
 */
  let tesla = new Tesla();
  tesla = new Autopilot(tesla);
  tesla = new ParkingSensors(tesla);

  console.log(tesla.getDescription(), tesla.getPrice())

  let audi = new Audi();
  audi = new Autopilot(audi);
  audi = new ParkingSensors(audi);

  console.log(audi.getDescription(), audi.getPrice())