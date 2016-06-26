export default class ContactsModel {

  constructor() {
    this.contacts = [
      {
        name: "Chandler",
        online: true,
        icon: 'chandler.png',
        group: 'friend',
        lastSeen: "last seen 2 hours ago"
      },
      {
        name: "Rachel Green",
        online: false,
        icon: 'rachel.png',
        group: 'favourite',
        lastSeen: "last seen 2 hours ago"
      },
      {
        name: "Fibi Bufe",
        online: true,
        icon: 'fibi.png',
        group: 'favourite',
        lastSeen: "last seen 2 hours ago"
      },
      {
        name: "Joey Tribbiani",
        online: true,
        icon: 'joey.png',
        lastSeen: "last seen 2 hours ago",
        group: 'friend'
      },
      {
        name: "Ross Geller",
        online: false,
        icon: 'ross.png',
        lastSeen: "last seen 2 hours ago",
        group: 'favourite'
      },
      {
        name: "Monica",
        online: true,
        icon: 'monica.png',
        lastSeen: "last seen 2 hours ago",
        group: 'friend'
      },
      {
        name: "Anabel Estanza",
        lastSeen: "last seen 2 hours ago",
        icon: 'anabelEstanza.png',
        online: true,
        group: 'friend'
      },
      {
        name: "Maryse Ouellet",
        lastSeen: "last seen 8 hours ago",
        icon: 'MaryseO.png',
        online: true,
        group: false
      },
      {
        name: "Trish Stratus",
        lastSeen: "last seen 9 hours ago",
        icon: 'TrishS.png',
        online: true,
        group: false
      },
      {
        name: "Randy Orton",
        lastSeen: "last seen yesterday at 16:23",
        icon: 'TrishS.png',
        online: true,
        group: false
      },
      {
        name: "Edge WWe",
        lastSeen: "last seen yesterday 15:24",
        icon: 'EdgeW.png',
        online: true,
        group: false
      },
      {
        name: "Brianna Garsia",
        lastSeen: "last seen yesterday at 14:12",
        icon: 'BriannaG.png',
        online: true,
        group: false
      },
      {
        name: "Aj Lee",
        lastSeen: "last seen yeasterday at 13:40",
        icon: 'AjL.png',
        online: true,
        group: false
      }
    ];
  }
}