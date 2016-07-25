import View from '../views/NewGroupView';

export default class NewGroupController {
  constructor (container) {
    this.view = new View(container);
    this.render();

    this.initEvents();
  }

  initEvents() {
    let contacts = document.querySelectorAll('.new-group-contact');

    contacts.forEach((contact) => {
      contact.addEventListener('click', this.addPersonToList.bind(this, contact));
    });
  }

  addPersonToList(contact) {
    let members = document.getElementById('newGroupMember');
    let contactRadio = contact.getElementsByClassName('new-group-membership-indicator')[0];

    contact.classList.toggle('new-group-contact-added');

    if (contactRadio.checked) {
      contactRadio.checked = false;
      members.innerHTML = members.innerHTML.replace(contactRadio.value, '');
    } else {
      contactRadio.checked = true;
      members.innerHTML += contactRadio.value + ' ';
    }
  }

  render () {
    return this.view.render();
  }
}