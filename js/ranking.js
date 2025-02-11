// Aquí agregaríamos el código JavaScript que se encargará de cambiar los datos al seleccionar una categoría
  const selectCategoria = document.getElementById("categoria");
  const posicionElement = document.getElementById("posicion");
  const porcentajeElement = document.getElementById("porcentaje");
  const rankingUsuarios = document.getElementById("ranking-usuarios");

  selectCategoria.addEventListener("change", function() {
      const categoriaSeleccionada = selectCategoria.value;

      // Aquí colocaríamos lógica para actualizar la información según la categoría seleccionada
      // Por ejemplo, cambiar la posición, porcentaje y los usuarios en la lista

      // Para este ejemplo, simplemente simulamos los cambios:
      if (categoriaSeleccionada === "general") {
          posicionElement.textContent = "#5";
          porcentajeElement.textContent = "85%";
          rankingUsuarios.innerHTML = `
              <li>Jugador 4 - 90% - <strong>#4</strong></li>
              <li>Jugador 3 - 92% - <strong>#3</strong></li>
              <li>Jugador 2 - 95% - <strong>#2</strong></li>
              <li>Jugador 1 - 98% - <strong>#1</strong></li>
          `;
      } else if (categoriaSeleccionada === "deportes") {
          posicionElement.textContent = "#2";
          porcentajeElement.textContent = "92%";
          rankingUsuarios.innerHTML = `
              <li>Jugador 4 - 90% - <strong>#4</strong></li>
              <li>Jugador 3 - 93% - <strong>#3</strong></li>
              <li>Jugador 1 - 98% - <strong>#1</strong></li>
          `;
      }
      // Aquí puedes añadir más condiciones para cada categoría.
  });
