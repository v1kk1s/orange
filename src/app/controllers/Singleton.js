class Singleton  {

  constructor() {

    if (!Singleton.instance) {
      this.data = 'Hello from singleton ;)';
      this.time = new Date().toLocaleString();

      Singleton.instance = this;
    }

    console.log('creation time is', Singleton.instance.time);

    return Singleton.instance;
  }

}
export default Singleton;

