import View from '../views/NewGroupView';
import Groups from '../models/groups';
import Contacts from '../models/contacts';

export default class NewGroupController {
  constructor (container) {
    this.view = new View(container);
    this.groups = new Groups().groups;
    this.contacts = new Contacts().contacts;
    this.render();
    this.counter = 0;

    this.initEvents();
  }

  initEvents() {
    let contacts = document.querySelectorAll('.new-group-contact');
    let form = document.getElementById('addGroup');

    form.addEventListener('submit', (ev) => {
      ev.preventDefault();
      this.addNewGroup();
      return false;
    });

    contacts.forEach((contact) => {
      contact.addEventListener('click', this.addPersonToList.bind(this, contact));
    });
  }

  addPersonToList(contact) {
    let members = document.getElementById('newGroupMember');
    let contactRadio = contact.getElementsByClassName('new-group-membership-indicator')[0];
    let counterElement = document.getElementById('newGroupCounter');
    let contactName = this.getContactName(contactRadio);

    contact.classList.toggle('new-group-contact-added');

    if (contactRadio.checked) {
      contactRadio.checked = false;
      members.innerHTML = members.innerHTML.replace(contactName, '');
      this.counter--;
    } else {
      contactRadio.checked = true;
      members.innerHTML += contactName + ' ';
      this.counter++;
    }

    counterElement.innerHTML = this.counter;
  }

  getContactName(radio) {
    let name = this.contacts.filter((contact)=>{
      return contact.id == radio.value;
    });
    ;
    return name[0].name;
  }

  addNewGroup() {
    let name = document.getElementById('groupName').value;
    let radios = document.querySelectorAll('.new-group-membership-indicator');
    let members = [];

    radios.forEach((radio) => {
      if (radio.checked) {
        members.push(radio.value);
      }
    });

    let newGroup = {
      name,
      members
    };

    this.pushToFile(newGroup);
  }

  pushToFile(group) {
    console.log(group);
  }

  render () {
    return this.view.render();
  }
}