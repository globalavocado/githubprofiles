function supportsTemplate() {
	return 'content' in document.createElement('template');
}

if (supportsTemplate()) {
} else { 
	$('#profile-template').hide();
}