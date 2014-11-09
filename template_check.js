function supportsTemplate() {
	return 'content' in document.createElement('template');
}

if (supportsTemplate()) {
	alert('Yay!');
} else { 
	alert('Nay!');
}