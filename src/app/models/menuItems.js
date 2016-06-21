export default class MenuItems {

  constructor() {
    this.menuItems = [
      {
        title: "Recent",
        iconClass: 'menu-recent',
        link: '/recent'
      },
      {
        title: "New group",
        iconClass: 'menu-groups',
        link: '/group'
      },
      {
        title: "Groups",
        iconClass: 'menu-groups',
        link: '/groups'
      },
      {
        title: "Contacts",
        iconClass: 'menu-contacts',
        link: '/contacts'
      },
      {
        title: "Settings",
        iconClass: 'menu-settings',
        link: '#'
      }
    ];
  }
}