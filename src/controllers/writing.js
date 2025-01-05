import noteFormatter from './noteFormatter';

// Recive input event as param
export default function writingHandler(e) {
	const element = e.target;
	const { children } = e.target;
	const content = [...children];
	let elementContent = [];
	const tree = noteFormatter(element);

	content.forEach((e) => {
		let { innerText: txt, localName: tag } = e;
		tag = 'p';
		let tree = {};
		if (txt === '\n') {
			tag = 'br';
			txt = '';
		}

		tree = {
			[tag]: txt
		};

		elementContent.push(tree);
	});

	return elementContent;
}
