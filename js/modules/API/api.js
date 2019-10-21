function bodyBuilder() {
	const body = {
		name: document.querySelector('#name').value,
		subject: document.querySelector('#subject').value,
		email: document.querySelector('#email').value,
		message: document.querySelector('#message').value
	};
	return body;
}

function generateHeader(method) {
	return {
		'Content-Type': 'application/json',
		'Accept': 'application/json,text/*;q=0.99'
	};
}

async function send() {
    displayError(false);
    if(checkValidators()){
        let msg = bodyBuilder();
        msg = {
            from: 'email@email.com',
            to: msg.email,
            subject: msg.subject,
            text: `
                Nome: ${msg.name}
                Email: ${msg.email}
                Message: ${msg.message}
            `
        };
        try {
            const data = await fetch('https://fiap-sender.herokuapp.com/email/send', {
                method: 'POST',
                body: JSON.stringify(msg),
                headers: generateHeader()
            });
            console.log(data);
            
        } catch (err) {
            console.error(err);
        }
    }else{
        displayError(true);
    }
}
