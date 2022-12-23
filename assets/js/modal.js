// Structure of modal

/**
 * @param {string} header_title - Title of modal
 * @param {string} header_color - Color of title
 * @param {string} header_background_color - Background color of title
 * @param {string} text - Text of modal
 * @param {string} footer_text - Text of footer
 * @param {string} footer_color - Color of footer
 * @param {string} footer_background_color - Background color of footer
 * @param {number} time - Time to show modal in seconds
 * @param {boolean} isShown - Show modal or not
 * @param {string} button_color - Color of buttons
 * @param {string} button_background_color - Background color of buttons
 * @param {string} button_hover_background_color - Background color of buttons when hover
 * @param {string} messages - Messages of buttons
 * @summary Create a modal
 *
 */
class Modal {
	static modal_header;
	static modal_body;
	static modal_footer;
	constructor(
		header_title,
		header_color,
		header_background_color,
		text,
		footer_text,
		footer_color,
		footer_background_color,
		time,
		isShown
	) {
		this.header_title = header_title;
		this.header_color = header_color;
		this.header_background_color = header_background_color;
		this.text = text;
		this.footer_text = footer_text;
		this.footer_color = footer_color;
		this.footer_background_color = footer_background_color;
		this.time = time;
		this.modal_header = this.createModalHeader();
		this.modal_body = this.createModalBody();
		this.modal_footer = this.createModalFooter();
		this.modal = this.createModal();
		if (time != 'infinite') {
			setTimeout(() => {
				this.closeModal();
			}, time * 1000);
		}
		if (isShown) {
			this.showModal();
		}
	}

	createModal() {
		// Modal
		let modal = document.createElement('div');
		modal.classList.add('modal');
		modal.style.display = 'none';
		modal.id = 'myModal';

		// Modal content
		let modal_content = document.createElement('div');
		modal_content.classList.add('modal-content');
		modal_content.appendChild(this.modal_header);
		modal_content.appendChild(this.modal_body);
		modal_content.appendChild(this.modal_footer);

		// Append modal content to modal
		modal.appendChild(modal_content);
		modal.addEventListener('click', (event) => {
			if (event.target == modal) {
				this.closeModal();
			}
		});
		document.body.appendChild(modal);
		return modal;
	}

	createModalHeader() {
		let modal_header = document.createElement('div');
		modal_header.style.color = this.header_color;
		modal_header.style.backgroundColor = this.header_background_color;
		modal_header.classList.add('modal-header');
		let modal_header_title = document.createElement('h2');
		modal_header_title.innerHTML = this.header_title;
		modal_header_title.style.color = this.header_color;
		let modal_header_close = document.createElement('span');
		modal_header_close.classList.add('close');
		modal_header_close.innerHTML = '&times;';
		modal_header.appendChild(modal_header_close);
		modal_header.appendChild(modal_header_title);
		modal_header_close.addEventListener('click', () => {
			this.closeModal();
		});
		return modal_header;
	}

	createModalBody() {
		let modal_body = document.createElement('div');
		modal_body.classList.add('modal-body');
		let modal_body_text = document.createElement('p');
		modal_body_text.innerHTML = this.text;
		modal_body.appendChild(modal_body_text);
		return modal_body;
	}

	createModalFooter() {
		let modal_footer = document.createElement('div');
		modal_footer.style.color = this.footer_color;
		modal_footer.style.backgroundColor = this.footer_background_color;
		modal_footer.classList.add('modal-footer');
		let modal_footer_text = document.createElement('h3');
		modal_footer_text.innerHTML = this.footer_text;
		modal_footer_text.style.color = this.footer_color;
		modal_footer.appendChild(modal_footer_text);
		return modal_footer;
	}

	get Modal_header() {
		return this.modal_header;
	}
	get Modal_body() {
		return this.modal_body;
	}

	get Modal_footer() {
		return this.modal_footer;
	}

	showModal() {
		this.modal.style.display = 'block';
		document.body.style.overflow = 'hidden';
	}
	closeModal() {
		this.modal.style.display = 'none';
		document.body.style.overflow = 'auto';
		this.modal.remove();
	}
}

class ButtonModal extends Modal {
	constructor(
		header_title,
		header_color,
		header_background_color,
		text,
		footer_text,
		footer_color,
		footer_background_color,
		time,
		isShown,
		button_color,
		button_background_color,
		button_hover_background_color,
		...messages
	) {
		super(
			header_title,
			header_color,
			header_background_color,
			text,
			footer_text,
			footer_color,
			footer_background_color,
			time,
			isShown
		);
		this.button_color = button_color;
		this.button_background_color = button_background_color;
		this.button_hover_background_color = button_hover_background_color;
		this.messages = messages;
		this.addButtons(messages);
	}

	addButtons(messages) {
		let modal_footer_buttons = document.createElement('div');
		modal_footer_buttons.classList.add('modal-footer-buttons');
		super.Modal_footer.appendChild(modal_footer_buttons);
		for (let i = 0; i < messages.length; i++) {
			let modal_footer_button = document.createElement('button');
			modal_footer_button.style.color = this.button_color;
			modal_footer_button.style.backgroundColor =
				this.button_background_color;
			modal_footer_button.addEventListener('mouseover', () => {
				modal_footer_button.style.backgroundColor =
					this.button_hover_background_color;
			});
			modal_footer_button.addEventListener('mouseout', () => {
				modal_footer_button.style.backgroundColor =
					this.button_background_color;
			});
			modal_footer_button.classList.add('modal-footer-button');
			modal_footer_button.innerHTML = messages[i];
			modal_footer_button.id = 'btnmodal-' + [i];
			modal_footer_buttons.appendChild(modal_footer_button);
			modal_footer_button.addEventListener('click', () => {
				this.closeModal();
			});
		}
	}
}

// Example of modal
class InfoModal extends Modal {
	constructor(header_title, text) {
		super(
			header_title,
			'white',
			'blue',
			text,
			'',
			'',
			'blue',
			'infinite',
			true
		);
	}
}

class ErrorModal extends Modal {
	constructor(header_title, text) {
		super(
			header_title,
			'white',
			'red',
			text,
			'',
			'',
			'red',
			'infinite',
			true
		);
	}
}

class SuccessModal extends Modal {
	constructor(header_title, text) {
		super(
			header_title,
			'white',
			'green',
			text,
			'',
			'',
			'green',
			'infinite',
			true
		);
	}
}

class ConfirmModal extends ButtonModal {
	constructor(header_title, text) {
		super(
			header_title,
			'white',
			'#1d95d1',
			text,
			'',
			'',
			'white',
			'infinite',
			true,
			'white',
			'grey',
			'darkgrey',
			'Confirmer',
			'Annuler'
		);
	}
}

var btn = document.getElementById('myBtn');
btn.onclick = function () {
	// var newErrorModal = new ErrorModal(
	// 	'⚠ - Error',
	// 	"L'accès à la base de donnée est impossible actuellement, veuillez réessayer plus tard !"
	// );
	// var newSuccessModal = new SuccessModal(
	// 	'Inscription réussie',
	// 	'Nous vous souhaitons la bienvenue sur notre site !'
	// );
	// var newInfoModal = new InfoModal(
	// 	'Maintenance en cours',
	// 	'Le site est en maintenance, Veuillez attendre la fin du processus'
	// );
	// var newConfirmModal = new ConfirmModal(
	// 	'Veuillez confirmer',
	// 	'Confirmer svp'
	// );
	var newConfirmModal2 = new ConfirmModal(
		'Etes vous sûr de vouloir passez en plein écran ?',
		''
	);
	// let confirmbutton = document.querySelector('#btnmodal-0');
	// confirmbutton.addEventListener('click', function () {
	// 	console.log('ouais');
	// });
};

// Todo: Transformer le système pour créer des classes CSS par type de modal
