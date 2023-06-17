export const validateEmail = (ValueEmail) => {
    let Response = {
      Result: null,
      message: null,
      resultValidation: false,
    };
  
    let expresion =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (expresion.test(ValueEmail)) {
      let TempResult = validateEmailDomains(ValueEmail);
      return TempResult;
    } else {
      Response.Result = false;
      Response.resultValidation = true;
      Response.message = "Verifique que su correo electrónico sea valido";
      return Response;
    }
  };
  
  const validateEmailDomains = (ValueEmail) => {
    let Response = {
      Result: null,
      message: null,
      resultValidation: false,
    };
    let EmailSplit = ValueEmail.split("@");
    EmailSplit = EmailSplit[1];
    let domainsArray = [];
    if (EmailSplit.includes(".")) {
      domainsArray = EmailSplit.split(".");
    }
    const tempArrayDuplicate = [];
    for (let i = 0; i < domainsArray.length; i++) {
      if (domainsArray[i + 1] === domainsArray[i]) {
        tempArrayDuplicate.push(domainsArray[i]);
      }
    }
    if (tempArrayDuplicate.length === 0 &&domainsArray.length<=4) {
      if (ValueEmail.endsWith(".")) {
        Response.Result = false;
        Response.resultValidation = true;
        Response.message = "Verifique que su correo electrónico sea valido";
        return Response;
      } else {
  
        Response.Result = true;
        Response.resultValidation = true;
        Response.message = "Email Correcto";
        return Response;
      }
    } else {
      Response.Result = false;
      Response.resultValidation = true;
      Response.message = "Verifique que su correo electrónico sea valido";
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
        Response.message = "Comentario Correcto";
        return Response;
      } else {
        Response.Result = false;
        Response.resultValidation = true;
        Response.message = "El comentario debe tener al menos 10 caracteres y no puede estar en blanco.";
        return Response;
      }

}
export const validateUser =(ValueComment)=>{
    let Response = {
        Result: null,
        message: null,
        resultValidation: false,
      };
    let expression =/^([a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+)\s+([a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+)$/;
    if (expression.test(ValueComment)) {
        Response.Result = true;
        Response.resultValidation = true;
        return Response;
      } else {
        Response.Result = false;
        Response.resultValidation = true;
        Response.message = "Por favor ingrese nombre y apellido";
        return Response;
      }

}