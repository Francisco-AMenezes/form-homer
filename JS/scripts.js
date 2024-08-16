document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // previne o envio do formulário para fins de teste

  const phone = document.getElementById("phone").value;
  const cep = document.getElementById("cep").value;
  const whatsapp = document.getElementById("whatsapp").value;
  const documentNumber = document.getElementById("document").value;

  // remove qualquer caracter não numérico
  const phoneNumber = Number(phone.replace(/\D/g, ""));
  const cepNumber = Number(cep.replace(/\D/g, ""));
  const documentNumberClean = Number(documentNumber.replace(/\D/g, ""));
  const whatsappNumber = Number(whatsapp.replace(/\D/g, ""));

  console.log(phoneNumber, cepNumber, documentNumberClean, whatsappNumber);
});
