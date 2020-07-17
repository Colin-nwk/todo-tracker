const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// select tab function item
function selectItem(e) {
	removeShowContent();
	removeBorder();
	// border to current tab

	this.classList.add('tab-border');
	// grab content item from DOM
	console.log(this.id);
	const tabContentItemShow = document.querySelector(`#${this.id}-content`);
	//add shhow class
	tabContentItemShow.classList.add('show');
}

//remove border
function removeShowContent() {
	tabContentItems.forEach((item) => item.classList.remove('show'));
}
function removeBorder() {
	tabItems.forEach((item) => item.classList.remove('tab-border'));
}

// listener for tab click
tabItems.forEach((item) => item.addEventListener('click', selectItem));
