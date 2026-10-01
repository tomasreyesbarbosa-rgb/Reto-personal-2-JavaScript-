const usuariov1 = {
    nombre: "Pablo",
    email: "pablozorra@gmail.com",
    version: 1
};
function PerfilActualizado (Perfil, nuevosDatos) {
    return {
        ...Perfil,
        ...nuevosDatos,
        version: Perfil.version +1
    };
};
const usuariov2 = PerfilActualizado(usuariov1, {email: "tomasreyes@gmail.com"});

console.log(usuariov1);
console.log(usuariov2)