var socket = io();
var form = document.getElementById('form');
var input = document.getElementById('input');

form.addEventListener('submit', function(e) {
	e.preventDefault();
	if (input.value) {
		socket.emit('nickname', input.value);
		input.value = '';
	}
});