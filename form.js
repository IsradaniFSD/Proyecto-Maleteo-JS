document.addEventListener("DOMContentLoaded", function () {
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    var form = document.getElementById("form");
    var nombre = document.getElementById("nombre");
    var email = document.getElementById("email");
    var horario = document.getElementById("horario");
    var ciudad = document.getElementById("city");


    nombre = nombre.value;
    email = email.value;
    horario = horario.value;
    ciudad = ciudad.value;
    expresion = /\w+@\w+\.[a-z]/;

    if (nombre.length < 4) {
      alert("el nombre es muy corto");
      return false;
    }
    else if (horario.length > 20) {
      alert("Horario tener 20 caracteres como maximo");
      return false;
    }
    else if (!expresion.test(email)) {
      alert("el email no es valido");

      return false;
    }

    var cajita = document.getElementById("msg");
    cajita.classList.add("mensaje");

    var form = document.getElementById("form");
    form.classList.add("sent");
    msg.focus();



    const formData = new FormData(document.getElementById("myForm"));
    var url = document.getElementById("myForm").action;
    var metodo = document.getElementById("myForm").method;
    console.log(formData);

    fetch(url, {
      method: metodo,
      body: formData
    })

      .then(function (respuesta) {
        console.log("todo ok");
        console.log(respuesta);
        respuesta.json();
        console.log(url);
        console.log("esta es la respuesta " + respuesta.status);
      })


      .catch(function (respuesta) {
        console.log("todo mal");
        console.log(respuesta);
      });

  });


});

