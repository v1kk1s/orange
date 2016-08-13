

export default class ConversationView {
  constructor (container) {
    this.container = container;
    this.content = null;
  }


  render (messages) {
    console.log(messages);

    this.content = `
			<div class="convers list-page">

      ${messages.map((msg) => {

        if(msg.userId == 999) {
          return `
            <div class="convers-wrap convers-me">
              <div class="convers-msg">${msg.message}</div>
              <div class="convers-date">${msg.time.getHours()}:${msg.time.getMinutes()}</div>
            </div>
          `;
        } else {
          return `
            <div class="convers-wrap convers-other">
              <div class="convers-img"></div>
              <div class="convers-msg">${msg.message}</div>
              <div class="convers-date">${msg.time.getHours()}:${msg.time.getMinutes()}</div>
            </div>
          `;
        }

      })}



			</div>
		`;

    this.container.insertAdjacentHTML('beforeend', this.content );
  }
}
