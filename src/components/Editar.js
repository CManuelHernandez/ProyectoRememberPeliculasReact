import React from "react";

export const Editar = ({
  peli,
  conseguirPeliculas,
  setEditar,
  setListadoState,
}) => {
  const tituloComponente = "Editar pelicula";

  const guardarEdiccion = (e, id) => {
    e.preventDefault();
    // Conseguir el target del eventeo
    let target = e.target;
    // Buscar el indice del objeto de la pelicula a actualziar
    const pelisAlmacenadas = conseguirPeliculas();
    const indice = pelisAlmacenadas.findIndex((peli) => peli.id === id);
    // Crear objeto con ese id de indice, titulo y descipcion del formulario
    let peliActualizada = {
      id,
      titulo: target.titulo.value,
      descripcion: target.descripcion.value,
    };
    // Actualizar el elemento con ese indice
    pelisAlmacenadas[indice] = peliActualizada;
    // Guardar el nuevo array de objetos en el localstorage
    localStorage.setItem("pelis", JSON.stringify(pelisAlmacenadas));
    // Actualizar estados
    setListadoState(pelisAlmacenadas);
    setEditar(0);
  };

  return (
    <div className="edit_form">
      <h3 className="title">{tituloComponente}</h3>
      <form onSubmit={(e) => guardarEdiccion(e, peli.id)}>
        <input
          type="text"
          name="titulo"
          className="titulo_editado"
          defaultValue={peli.titulo}
        />
        <textarea
          name="descripcion"
          defaultValue={peli.descripcion}
          className="descripcion_editada"
        />
        <input type="submit" className="editar" value="Actualizar" />
      </form>
    </div>
  );
};
