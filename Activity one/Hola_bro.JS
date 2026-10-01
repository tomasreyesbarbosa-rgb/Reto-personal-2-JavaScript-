const Perfil =  {
    nombre: "Tómas",
    profesion: "Desarrollador web",
    nivel: 1
};
const PerfilActualizado = {
    ...Perfil,
    nivel: 2,
    Notificacion: true
    };

const datosPersonales = {
    nombre: "Tómas",
    ciudad: "Bogotá"
};
const configuracionApp = {
    tema: "oscuro",
    notifiaciones: true
};
const perfilCompleto = {
    ...datosPersonales,
    ...configuracionApp,
}
console.log(Perfil);
console.log(PerfilActualizado);
console.log(perfilCompleto);

