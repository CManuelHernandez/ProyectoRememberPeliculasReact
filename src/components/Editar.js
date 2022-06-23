import React from "react";

export const Editar = () => {
  const tituloComponente = "Editar pelicula";

  return (
    <div className="edit_form">
      <h3 className="title">{tituloComponente}</h3>
      <from>
        <input
          type="text"
          name="titulo"
          className="titulo_editado"
          defaultValue="Titulo orginal de la pelicula"
        />
        <textarea
          name="descripcion"
          defaultValue="descripcion original"
          className="descripcion_editada"
        />
        <input type="submit" className="editar" value="Actualizar" />
      </from>
    </div>
  );
};
