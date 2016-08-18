export default class Singleton  {

  constructor() {
      this.data = 'Hello from singleton ;)';
  }

  static get instance() {

    if(!this.singleton) {
      this.singleton = new Singleton();
    }
    return this.singleton;

  }

}

