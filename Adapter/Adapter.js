/**
 * Adapter(Адаптер) - структурный паттерн, оборачивает несовместимый с чем-то объект и делает совместимым, не изменяя код объекта.
 */

/**
 * Два несовместимых объекта и класс, который запускает двигатель
 */

class Engine2 {
  simpleInterface() {
    console.log('Engine 2/0')
  }
}

class EngineV8 {
  complecatedInterface() {
    console.log('Engine v8')
  }
}

class Auto {
  startEngine(engine) {
    engine.simpleInterface();
    console.log('was started')
  }
}


/**
 * Адаптер для класса EngineV8
 */

class EngineV8Adapter {
  constructor(engine) {
    this.engine = engine;
  }

  simpleInterface() {
    this.engine.complecatedInterface()
  }
}

/***
 * Используем адаптер
 */

const myCar = new Auto();
const oldEngine = new Engine2();
const newEngine = new EngineV8();

myCar.startEngine(oldEngine);
myCar.startEngine(new EngineV8Adapter(newEngine));
myCar.startEngine(newEngine); //Error
