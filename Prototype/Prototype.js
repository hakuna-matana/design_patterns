/**
 * Prototype(Прототип) - паттерн, который позволяет копировать объекты,
 * не вдаваясь в подробности их реализации.
 * В шаблоне Prototype есть базовая реализация класса. И используя
 * упрощенный интерфейс, мы можем создавать клоны объекта.
 * Порождающий паттерн.
 * */

/** Класс прототипа, с методом produce, который клонирует объект */
class TeslaCar {
  constructor(model, price, interior, autopilot) {
    this.model = model;
    this.price = price;
    this.interior = interior;
    this.autopilot = autopilot;
  }
  produce() {
    return new TeslaCar(this.model, this.price, this.interior, this.autopilot)
  }
}

/** Создаем экземпляр класса. Это прототип автомобиля. */
const prototypeCar = new TeslaCar('S', 80000, 'black', false);

/** Клонируем объект */
const car1 = prototypeCar.produce();
const car2 = prototypeCar.produce();
const car3 = prototypeCar.produce();

/** Изменяем клон, когда нужно поменять
 * только один объект, не изменяя базовой структуры
 * */
car1.interior = 'white';
car1.autopilot = true;
