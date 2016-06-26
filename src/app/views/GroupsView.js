import GroupsModel from '../models/groups';

export default class GroupsView {
  constructor (container) {
    this.container = container;
    this.content = null;
    this.groups = new GroupsModel().groups;
  }

  getGroups(group) {
    return `
      <div class="groups-item">
        <div class="groups-img default">
          <div class="groups-counter">${group.members.length}</div>
        </div>
        <div class="groups-name">${group.name}</div>
      </div>
    `
  }

  render () {

    this.content = `
      <div class="groups list-page">

        ${this.groups.map(this.getGroups.bind(this)).join('')}

        <div class="groups-add-new" id="addNewGroup">Add new group</div>

      </div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}