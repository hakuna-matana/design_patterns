/**
 * Proxy (Заместитель) - структурный паттерн. Вместо реальных объектов предоставляет объектозаменители.
 * Эти объекты перехватывают обращение к оригиналу, и позволяют что-то сделать до или после обращения к реальному объекту.
 * Прослойка для дополнительных манипуляций.
 * Частый кейс - авторизация.
 */

/**
 * Оригинальный класс
 * */

class CarAccess {
  open() {
    console.log('Car was opened');
  }

  close() {
    console.log('Car was closed')
  }
}

/**
 * Proxy для CarAccess
 * */

class SecuritySystem {
  constructor(door) {
    this.door = door
  }

  open(password) {
    if (this.authenticate(password)) {
      this.door.open()
    } else {
      console.log('Access denied')
    }
  }

  authenticate(password) {
    return password === "Ilon"
  }

  close() {
    this.door.close()
  }
}

const door = new SecuritySystem(new CarAccess());

door.open('Jack');

door.open('Ilon');

door.close();