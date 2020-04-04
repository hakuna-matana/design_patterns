/***
 * Mediator (Посредник) - поведенческий паттерн, который позволяет уменьшить взаимосвязь классов между собой,
 * вынося межклассовые связи в "класс-посредник".
 * Благодаря этому увеличивается переиспользуемость классов.
 */

class OfficialDealer {
  constructor() {
    this.customers = [];
  }

  orderAuto(customer, auto, info) {
    const name = customer.getName();
    console.log(`Name: ${name}. Order: ${auto}`);
    console.log(`Info: ${info}`);
    this.addToCustomers(name);
  }

  addToCustomers(name) {
    this.customers.push(name)
  }

  getCustomers() {
    return this.customers;
  }
}

class Customer {
  constructor(name, dealerMediator) {
    this.name = name;
    this.dealerMediator = dealerMediator;
  }

  getName() {
    return this.name;
  }

  makeOrder(auto, info) {
    this.dealerMediator.orderAuto(this, auto, info)
  }
}

const mediator = new OfficialDealer();

const igor = new Customer('Igor', mediator);
const valera = new Customer('Valera', mediator);

igor.makeOrder('Tesla', 'With autopilot');
valera.makeOrder('BMW', 'With black windows');

console.log(mediator.getCustomers())