export const validateEmail = (ValueEmail) => {
	let Response = {
		Result: null,
		message: null,
		resultValidation: false,
	};

	let expression = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	if (expression.test(ValueEmail)) {
		let TempResult = validateEmailDomains(ValueEmail);
		return TempResult;
	} else {
		Response.Result = false;
		Response.resultValidation = true;
		Response.message = 'Verifique que su correo electrónico sea valido';
		return Response;
	}
};
  
const validateEmailDomains = (ValueEmail) => {
	let Response = {
		Result: null,
		message: null,
		resultValidation: false,
	};
	let EmailSplit = ValueEmail.split('@');
	EmailSplit = EmailSplit[1];
	let domainsArray = [];
	if (EmailSplit.includes('.')) {
		domainsArray = EmailSplit.split('.');
	}
	const tempArrayDuplicate = [];
	for (let i = 0; i < domainsArray.length; i++) {
		if (domainsArray[i + 1] === domainsArray[i]) {
			tempArrayDuplicate.push(domainsArray[i]);
		}
	}
	if (tempArrayDuplicate.length === 0 &&domainsArray.length<=4) {
		if (ValueEmail.endsWith('.')) {
			Response.Result = false;
			Response.resultValidation = true;
			Response.message = 'Verifique que su correo electrónico sea valido';
			return Response;
		} else {
  
			Response.Result = true;
			Response.resultValidation = true;
			Response.message = 'Email Correcto';
			return Response;
		}
	} else {
		Response.Result = false;
		Response.resultValidation = true;
		Response.message = 'Verifique que su correo electrónico sea valido';
		return Response;
	}
};
  

export const validateComment =(ValueComment)=>{
	let Response = {
		Result: null,
		message: null,
		resultValidation: false,
	};
	let expression = /^(?!\s*$).{10,}$/ ;
	if (expression.test(ValueComment)) {
		Response.Result = true;
		Response.resultValidation = true;
		Response.message = 'Comentario Correcto';
		return Response;
	} else {
		Response.Result = false;
		Response.resultValidation = true;
		Response.message = 'El comentario debe tener al menos 10 caracteres y no puede estar en blanco.';
		return Response;
	}

};
export const validateUser =(ValueUser)=>{
	let Response = {
		Result: null,
		message: null,
		resultValidation: false,
	};

	const words = ValueUser.split(' ');
	if (words.length < 2 || words.some(word => word.trim() === '' || word.endsWith(' '))) {
		Response.Result = false;
		Response.resultValidation = true;
		Response.message = 'Por favor ingrese nombre y apellido';
		return Response;
		
	} else {
		Response.Result = true;
		Response.resultValidation = true;
		return Response;
	}
};