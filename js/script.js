var rsvpModal = document.querySelector("#rsvpSection");
var form = document.querySelector("#theForm");
	function sendMail(e) {
		e.preventDefault();
		var firstname = document.getElementById("firstname");
		var lastname = document.getElementById("lastname");
		var email = document.getElementById("email");
		var guests = document.getElementById("guests");
		var fullName = firstname.value + "  " +lastname.value;
		var theGuest = guests.value;
		Email.send("tomkrell@gmail.com",
			"htdwrsvp@gmail.com",
			"RSVP: Installation",
			`"NAME:" ${fullName} ", EMAIL:" ${email.value} ", GUESTS:" ${theGuest}`,
			{token: "d4ae1ed7-86b2-4090-8081-1e25e1977325"});
		rsvpModal.classList.add('show');
		window.scrollTop = 0;
	}

form.addEventListener('submit', sendMail);
