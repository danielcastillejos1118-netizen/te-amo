function toggleNote() {
    const box = document.getElementById("noteBox");
    box.style.display = box.style.display === "block" ? "none" : "block";
}

/*
  MENSAJE DESDE BACKEND

  ⚠️ Este texto NO es editable por el usuario.
  Cuando conectes backend, reemplaza esto por fetch o template.
*/

// MENSAJE DE EJEMPLO (temporal)
document.getElementById("message").innerText =
    "Mi amor mi niña preciosa otro 11:11 y la verdad deseo que podamos seguir compartiendo muchos momentos juntos, sabes que amo todos nuestros momentos juntos y que quiero que estemos siempre agarrados de la manita y seamos equipo, sé que hay peleas pero siempre a tu lado, si me preguntan, sí eres la persona y la niña más bonita que existe, la dueña de mi corazón, sabes que siempre podras contar conmigo y nop importa que pase, vamos a estar juntos, yo sé que sí, muchas gracias por estar y acompañarme, por ser mi compañera de vida durante estos casi 8 meses, estoy tan agradecido de estar contigo y de que la vida nos siga dando más para seguir más tiempo juntos, te amo demasiado mi vida, muaaackkkk, te amo preciosa 💜";

function togglePoem() {
    const poem = document.getElementById("poemBox");
    poem.style.display = poem.style.display === "block" ? "none" : "block";
}