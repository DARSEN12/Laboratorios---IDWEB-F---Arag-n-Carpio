// Devuelve una cadena legible con todos los datos
function mostrarDatos(nombre, edad, ...hobbies) {
  const lista = hobbies.length ? hobbies.join(', ') : '—';
  return `Nombre: ${nombre} | Edad: ${edad} | Hobbies: ${lista}`;
}
