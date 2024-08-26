function sendWhatsappMessage(event) {
  event.preventDefault();

  // coleta os valores do formulário

  const name = document.getElementById("name").value;
  const documentNumber = document.getElementById("document").value;
  const ie = document.getElementById("ie").value.trim();
  const addres = document.getElementById("addres").value;
  const cep = document.getElementById("cep").value;
  const neighborhood = document.getElementById("neighborhood").value;
  const city = document.getElementById("city").value;
  const uf = document.getElementById("uf").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value.trim();
  const whatsapp = document.getElementById("whatsapp").value;

  
}
