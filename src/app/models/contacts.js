export default class ContactsModel {

  constructor() {
    this.contacts = [
      {
        name: "Chandler",
        online: true,
        icon: 'chandler.png',
        group: 'friend'
      },
      {
        name: "Rachel Green",
        online: false,
        icon: 'rachel.png',
        group: 'favourite'
      },
      {
        name: "Fibi Bufe",
        online: true,
        icon: 'fibi.png',
        group: 'favourite'
      },
      {
        name: "Joey Tribbiani",
        online: true,
        icon: 'joey.png',
        group: 'friend'
      },
      {
        name: "Ross Geller",
        online: false,
        icon: 'ross.png',
        group: 'favourite'
      },
      {
        name: "Monica",
        online: true,
        icon: 'monica.png',
        group: 'friend'
      }
    ];
  }
}