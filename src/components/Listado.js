import React, { useEffect, useState } from "react";

export const Listado = ({ listadoState, setListadoState }) => {
  // const [listadoState, setListadoState] = useState([]);

  useEffect(() => {
    conseguirPeliculas();
  }, []);

  const conseguirPeliculas = () => {
    let peliculas = JSON.parse(localStorage.getItem("pelis"));

    setListadoState(peliculas);

    return peliculas;
  };

  const borrarPeli = (id) => {
    // Conseguir peliculas almacenadas
    let pelisAlmacenadas = conseguirPeliculas();
    // Filtrar esas peliculas para que elimine del array la que no quiero
    let nuevoArrayPeliculas = pelisAlmacenadas.filter(
      (peli) => peli.id !== parseInt(id)
    );
    //Actualizar estado del listado
    setListadoState(nuevoArrayPeliculas);
    //Actualizar los datos en el localStorage
    localStorage.setItem("pelis", JSON.stringify(nuevoArrayPeliculas));
  };

  return (
    <>
      {listadoState != null ? (
        listadoState.map((peli) => {
          return (
            <article key={peli.id} className="peli-item">
              <h3 className="title">{peli.titulo}</h3>
              <p className="description">{peli.descripcion}</p>
              <button className="edit">Editar</button>
              <button className="delete" onClick={() => borrarPeli(peli.id)}>
                Borrar
              </button>
            </article>
          );
        })
      ) : (
        <h2>No hay peliculas para mostrar</h2>
      )}
    </>
  );
};
