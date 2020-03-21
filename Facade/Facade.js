/**
 * Facade(Фасад) - с помощью этого паттерна можно скрыть сложную логику "за фасадом".
 * Структурный паттерн.
 * С помощью него можно прятать неудобную и сложную реализацию внутри себя, а наружу выдавать удобный интерфейс взаимодействия.
 */

/**
 * Сложный класс
 */

class CarConveyor {
  setBody() {
    console.log('Body set!')
  }
  getEngine() {
    console.log('Dismantle Engine!')
  }
  setEngine() {
    console.log('Set engine!')
  }
  getInterior() {
    console.log('Update interior!')
  }
  setInterior() {
    console.log('Set interior!')
  }
  setExterior() {
    console.log('Body exterior!')
  }
  setWheels() {
    console.log('Set wheels!')
  }
  addElectronics() {
    console.log('Added electronics!')
  }
  paint() {
    console.log('Car painted!')
  }
}

/**
 * Фасад для сложного класса
 * */

class CarConveyorFacade {
  constructor(car) {
    this.car = car
  }

  assembleCar() {
    this.car.setBody();
    this.car.setEngine();
    this.car.setInterior();
    this.car.setExterior();
    this.car.setWheels();
    this.car.addElectronics();
    this.car.paint();
  }

  changeEngine() {
    this.car.getEngine();
    this.car.setEngine();
  }
}

const conveyor = new CarConveyorFacade(new CarConveyor());

let car = conveyor.assembleCar();
console.log(car);
car = conveyor.changeEngine();
console.log(car);