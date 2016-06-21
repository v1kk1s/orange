import View from '../views/NewGroupView';

export default class NewGroupController {
  constructor (container) {
    this.view = new View(container);
    this.render();

    this.initEvents();
  }

  initEvents() {
    let radioMasks = document.querySelectorAll('.new-group-added');

    radioMasks.forEach((radioMask) => {
      radioMask.addEventListener('click', this.clearRadio.bind(this, radioMask));
    });
  }

  clearRadio(radioMask) {
    //radioMask.previousSibling.prop('checked', false);
    radioMask.style.display = 'none';
  }

  render () {
    return this.view.render();
  }
}