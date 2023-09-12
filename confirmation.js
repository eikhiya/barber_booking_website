
// This function will get the query string from the booking form and 
// display the information in the confirmation page

const params = new URLSearchParams(window.location.search);
		document.getElementById('name').textContent = params.get('name');
		document.getElementById('email').textContent = params.get('email');
		document.getElementById('phone').textContent = params.get('phone');
		document.getElementById('date').textContent = params.get('date');
		document.getElementById('time').textContent = params.get('time');
		document.getElementById('message').textContent = params.get('message');