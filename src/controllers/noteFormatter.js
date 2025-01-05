export default function noteFormatter(e) {
	const { textContent: text } = e;

	if (!e.firstChild || e.firstChild.nodeType === Node.TEXT_NODE) {
		let wrapper;
		wrapper = document.createElement('p');
		wrapper.textContent = text;
		e.innerHTML = '';
		e.appendChild(wrapper);
		window.getSelection().modify('move', 'right', 'word');
	}
}
