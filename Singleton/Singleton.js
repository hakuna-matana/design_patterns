/**
 * Singleton(одиночка) - объект, который существует в приложении
 * в одном экземпляре и предоставляет глобальную точку доступа к этому экзепляру
 * */


/** Первый вариант реализации.
 * Создается глобальная переменная, в конструкторе проверяется, был ли он уже создан
 * Если не был - this присваивается в эту глобальную переменную */
let instance;

class Counter {
  constructor() {
    if (!instance) {
      instance = this;
      this.count = 0;
    }
    return instance;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    return this.count++;
  }
}

/** Создается первый экземпляр */

const myCount1 = new Counter();
myCount1.increaseCount();
myCount1.increaseCount();

/** Пытаемся создать второй экземпляр */

const myCount2 = new Counter();
myCount2.increaseCount();
myCount2.increaseCount();

/** Проверяем */

console.log(myCount2.getCount()); // 4
console.log(myCount1.getCount()); // 4

/**
 * Второй вариант реализации, без использования глобальной переменной,
 * используя статическое свойство класса.
 * */

class Counter2 {
  constructor() {
    if (typeof Counter.instance === "object") {
      return Counter.instance;
    };
    this.count = 0;
    Counter.instance = this;
    return this;
  }

  getCount() {
    return this.count;
  }

  increaseCount() {
    return this.count++;
  }
}

/** Создается первый экземпляр */

const myCount3 = new Counter2();
myCount3.increaseCount();
myCount3.increaseCount();

/** Пытаемся создать второй экземпляр */

const myCount4 = new Counter2();
myCount4.increaseCount();
myCount4.increaseCount();

/** Проверяем */

console.log(myCount3.getCount()); // 4
console.log(myCount3.getCount()); // 4
