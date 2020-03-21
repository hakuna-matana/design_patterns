/**
 * Abstract Factory (Абстрактная фабрика) - паттерн, который создает интерфейс,
 * группирующий другие фабрики, которые логически связаны друг с другом.
 * То есть, абстракция для фабрики и фабричного метода.
 * Порождающий паттерн.
 * */

/** Абстрактная фабрика */
function bmwProducer(kind) {
  return kind === 'sport' ? sportCarFactory : familyCarFactory;
}

/** Фабрики */

function sportCarFactory() {
  return new Z4();
}

function familyCarFactory() {
  return new I3();
}

class Z4 {
  info() {
    return 'Z4 is a Sport car!'
  }
}

class I3 {
  info() {
    return 'I3 is a Sport car!'
  }
}

/** Инициализация Абстрактной фабрики спортивных автомобилей*/
const produce = bmwProducer('sport');

const myCar = produce();

console.log(myCar.info())  // Z4 is a Sport car!
