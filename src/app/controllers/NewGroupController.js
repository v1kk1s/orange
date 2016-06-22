import View from '../views/NewGroupView';

export default class NewGroupController {
  constructor (container) {
    this.view = new View(container);
    this.render();

    this.initEvents();
  }

  initEvents() {
    let radioMasks = document.querySelectorAll('.new-group-added');
    let radios = document.querySelectorAll('.new-group-membership-indicator');

    radioMasks.forEach((radioMask) => {
      radioMask.addEventListener('click', this.clearRadio.bind(this, radioMask));
    });

    radios.forEach((radio) => {
      radio.addEventListener('click', this.addPersonToList.bind(this, radio));
    });
  }

  clearRadio(radioMask) {
    let members = document.getElementById('newGroupMember');
    radioMask.previousElementSibling.checked = false;
    members.innerHTML = members.innerHTML.replace(radioMask.previousElementSibling.value, '');
  }

  addPersonToList(radio) {
    let members = document.getElementById('newGroupMember');
    //members.innerHTML += (members.innerHTML ? ', ' + radio.value : radio.value);
    members.innerHTML += radio.value + ' ';
  }

  render () {
    return this.view.render();
  }
}