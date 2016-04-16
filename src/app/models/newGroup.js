export default class GroupModel {

  constructor() {
    this.contacts = [
      {
        name: "Chandler",
        online: true,
        icon: 'chandler.png',
        isInGroup: true
      },
      {
        name: "Rachel Green",
        online: false,
        icon: 'rachel.png',
        isInGroup: true
      },
      {
        name: "Fibi Bufe",
        online: true,
        icon: 'fibi.png',
        isInGroup: false
      },
      {
        name: "Joey Tribbiani",
        online: true,
        icon: 'joey.png',
        isInGroup: false
      },
      {
        name: "Ross Geller",
        online: false,
        icon: 'ross.png',
        isInGroup: false
      },
      {
        name: "Monica",
        online: true,
        icon: 'monica.png',
        isInGroup: false
      }
    ];
  }
}