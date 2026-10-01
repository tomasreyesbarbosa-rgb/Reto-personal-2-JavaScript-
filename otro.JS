const configDefault = {
    idioma:"español",
    notificaciones:true,
    nivel:1
};

const configUsuario = {
    notificaciones:false,
    nivel:5,
    colorFavorito:"azul"
};

const configFinal = {
    ...configDefault,
    ...configUsuario
};

console.log(configFinal);