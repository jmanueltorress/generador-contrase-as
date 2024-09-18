// variable para generar almacenarar limite de caracteres minimos
let cantidad = document.getElementById("cantidad");

// variables a utilizar en funcion boton generar
let boton = document.getElementById("generar");
let contrasena=document.getElementById("contrasena");
const cadenaCaracteres ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789";
const caracteresEspeciales = "!@#$%^&*()_+[]{}|;:,.<>?"; 
  function generarPass() {
    /* El input maneja los caracteres ingresados como tipo de dato texto, 
      entonces hay que convertir el valor ingresado a número */
    let numeroDigitado = parseInt(cantidad.value);
  
    // Validación de caracteres y creacion de contraseña
    if (numeroDigitado >= 7) {
      // Generar contraseña
      
      let password = '';
      for (let i = 0; i < numeroDigitado-1; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        let charEspecial = caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)];
        password += caracterAleatorio;
      }
       // Insertar al menos un carácter especial en una posición aleatoria
       let charEspecial = caracteresEspeciales[Math.floor(Math.random() * caracteresEspeciales.length)];
       let posicionAleatoria = Math.floor(Math.random() * password.length);
       
       // Insertar el carácter especial en la posición aleatoria
       password = password.slice(0, posicionAleatoria) + charEspecial + password.slice(posicionAleatoria);
       
      console.log('Password generada: ' + password);
      contrasena.value = password; // Asignar la contraseña al input
    } else {
      // No se genera ni asigna contraseña si el número de caracteres es menor a 7
      alert("Su contraseña debe tener 7 caracteres o más");
      contrasena.value = ''; // Limpiar el campo de la contraseña
    }
  }
  
//funcion clear pass
  function cleanPass() {
   
      contrasena.value = ''; // Limpiar el campo de la contraseña
    }

//funcion copy pass
function copyText() {
  // Obtener el campo de texto
  var copyText = document.getElementById("contrasena");

  // Seleccionar el texto del campo
  copyText.select();
  copyText.setSelectionRange(0, 99999); // Para dispositivos móviles

  // Copiar el texto al portapapeles
  document.execCommand("copy");

  // Opcional: Alerta para confirmar que se copió el texto
  // alert("Texto copiado: " + copyText.value);
}
  
  
