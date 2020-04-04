/***
 * Flyweight (Легковес/Приспособленец) - структурный паттерн, который позволяет
 * вместить большее количество определенных объектов в выделенную оперативную память.
 * Другими словами, он позволяет экономить ресурсы, разделяя общее состояние объектов между собой,
 * вместо хранения одинаковых данных в каждом объекте.
 * Flyweight неизменяем. Его нельзя изменить после создания, у него не должно быть публичных
 * полей и сеттеров.
 * Удобно создавать с помощью фабрики.
 */

/***
 * Auto - легковес,
 * AutoFactory - фабрика моделей, которая использует легковес
 */

class Auto {
  constructor(model) {
    this.model = model;
  }
}

class AutoFactory {
  constructor() {
    this.models = {}
  }

  create(name) {
    let model = this.models[name];
    if (model) return model;
    console.count('model');
    this.models[name] = new Auto(name);
    return this.models[name];
  }
  getModels() {
    console.table(this.models)
  }
}

const factory = new AutoFactory();

const bmw = factory.create('BMW');
const audi = factory.create('Audi');
const tesla = factory.create('Tesla');
const blackTesla = factory.create('Tesla');

console.log(factory.getModels())
