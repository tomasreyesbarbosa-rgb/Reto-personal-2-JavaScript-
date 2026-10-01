const valoresPorDefecto = { tema: "claro", volumen: 80, idioma: "es" };
const usuarioAjustes = { tema: "oscuro", volumen: 50 };

const configuracionFinal = {
    ...usuarioAjustes,
    ...valoresPorDefecto,
};

console.log(configuracionFinal);
