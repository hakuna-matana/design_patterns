/**
 * Factory Method(Фабричный метод) - шаблон, при котором создается класс(суперкласс),
 * который позволяет создавать объекты(подклассы) на основании каких-либо входных данных.
 *
 * Используется, когда нужно создавать много однотипных объектов(одинаковая структура и разные данные).
 * Порождающий паттерн.
 * */

/**
 * Класс, который создает объект
 * */
class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

/**
 * Фабрика - надстройка над классом
 * */
class BmwFactory {
  create(type) {
    if (type === 'X5') {
      return new Bmw(type, 108000, 300)
    }
    if (type === 'X6') {
      return new Bmw(type, 111000, 320)
    }
  }
}

const factory = new BmwFactory();

const x5 = factory.create('X5');
const x6 = factory.create('X6');

console.log(x5); // Bmw { model: 'X5', price: 108000, maxSpeed: 300 }
console.log(x6); // Bmw { model: 'X6', price: 111000, maxSpeed: 320 }
