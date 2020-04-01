/**
 * Composite (Компоновщик) - структурный паттерн, который позволяет сгруппировать
 * несколько объектов в древовидную структуру.
 * И работать с этой структурой так, как будто это один объект.
 *
 * Сам объект мало что знает о вложенных в него структурах.
 * Просто реализует те же методы, что и вложенные в него компоненты.
 * Вместо вызова своего метода передает управление вложенным в него компонентам.
 * А те компоненты передают вызовы своим вложенным структурам.
 * Листья и ветки.
 */

/**
 * Три компонента которые реализуют методы "название" и "цена".
 */

class Equipment {
  getPrice() {
    return this.price || 0;
  }

  getName() {
    return this.name;
  }

  setPrice(price) {
    this.price = price
  }

  setName(name) {
    this.name = name;
  }
}

class Body extends Equipment {
 constructor() {
   super();
   this.setName('Body');
   this.setPrice(1000)
 }
}

class Engine extends Equipment {
  constructor() {
    super();
    this.setName('Engine');
    this.setPrice(3000)
  }
}

class Tools extends Equipment {
  constructor() {
    super();
    this.setName('Tools');
    this.setPrice(3000)
  }
}

/**
 * Класс-компоновщик, который считает стоимость всех
 */

class Composite extends Equipment {
  constructor() {
    super();
    this.equipments = [];
  }

  add(equipment) {
    this.equipments.push(equipment)
  }

  getPrice() {
    return this.equipments
      .map(eq => eq.getPrice())
      .reduce((a, b) => a + b, 0);
  }
}

/**
 * Использование компоновщика
 */

class Car extends Composite {
  constructor() {
    super();
    this.setName('Audi');
  }
};

const myCar = new Car();

myCar.add(new Engine());
myCar.add(new Body());
myCar.add(new Tools())

console.log(`${myCar.getName()} price is ${myCar.getPrice()}`)