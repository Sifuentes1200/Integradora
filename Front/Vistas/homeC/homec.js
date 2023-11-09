function crearRestaurante(id, nombre, rate, tiempo, ruta) {
    const restaurante = document.createElement('div');
    restaurante.id = id;

   
    restaurante.innerHTML = `
      <button id="Cerrar" onclick="borrar('${id}')"></button>
      <div class="logoComedor">
          <img id="logo" src="${ruta}" alt="${nombre}">
      </div>
      <h1 class="nombreComedor">${nombre}</h1>
      <div class="rateComedor">
          <p class="rate">${rate}</p>
          <img class="estrella" src="../Assets/Imagenes/Recursos%20Extras/estrella.png" alt="Estrella">
      </div>
      <div class="tiempoComedor">
          <img class="reloj" src="../Assets/Imagenes/Recursos%20Extras/reloj.png" alt="Reloj">
          <p class="tiempo">: ${tiempo} min</p>
      </div>
      <button id="ingresarComedor">Entrar</button>
    `;
  
    return restaurante;
  }
  
  // Crear y agregar los restaurantes al contenedor
  const restaurantes = [
    crearRestaurante('restaurante1', 'Dominos Pizza', '2.3', '10',"../Assets/Imagenes/Restaurantes/Dominos_Logo.png"),
    crearRestaurante('restaurante2', 'Pequeño Cesarin', '2.3', '10', "../Assets/Imagenes/Restaurantes/LittleCaesars_Logo.png"),
    crearRestaurante('restaurante3', 'Pizza Hot', '2.3', '10', "../Assets/Imagenes/Restaurantes/PizzaHot_Logo.png"),
    
    
  ];
  
  const restauranteContainer = document.getElementById('comedoresDisponibles');
  let currentIndex = 0; // Índice actual en la lista de restaurantes

  const botonSiguiente = document.getElementById('Seguir');
  const botonAnterior = document.getElementById('Regresar');

  function mostrarRestaurantes(direccion) {


    if (direccion === 'anterior') { //Cambie esto
      currentIndex = (currentIndex + 1) % restaurantes.length;
    } else if (direccion === 'siguiente') { //Por esto
      currentIndex = (currentIndex - 1 + restaurantes.length) % restaurantes.length;
    }
    // Obtener los restaurantes segun su pocicion en el arregrlo
    const restauranteIzquierda = restaurantes[currentIndex];
    const restauranteMedio = restaurantes[(currentIndex + 1) % restaurantes.length];
    const restauranteDerecha = restaurantes[(currentIndex + 2) % restaurantes.length];

     // Borra el contenido actual del contenedor
    restauranteContainer.innerHTML = ''; 
   
    if (restaurantes.length >= 3) {
      restauranteIzquierda.classList = [];
      restauranteMedio.classList = [];
      restauranteDerecha.classList = [];

      restauranteIzquierda.classList.add('side1');
      restauranteMedio.classList.add('central');
      restauranteDerecha.classList.add('side2');
      /*
      restauranteIzquierda.classList.add('side1');
      restauranteMedio.classList.remove('side1');
      restauranteMedio.classList.remove('side2');
      restauranteDerecha.classList.add('side2');  


    restauranteIzquierda.classList.remove('central');
    restauranteMedio.classList.add('central');
    restauranteDerecha.classList.remove('central');
        */
    restauranteContainer.appendChild(restauranteIzquierda);
    restauranteContainer.appendChild(restauranteMedio);
    restauranteContainer.appendChild(restauranteDerecha); 
    
    
    } else if (restaurantes.length <= 2) {
    botonAnterior.style.display = 'none';
    botonSiguiente.style.display = 'none';


    restauranteIzquierda.classList.add("side1")
    restauranteMedio.classList.add('side2');

    restauranteContainer.appendChild(restauranteIzquierda);
    restauranteContainer.appendChild(restauranteMedio);
    }
  } 
  
  
  
  // Llama a la función inicialmente para mostrar los primeros restaurantes
  mostrarRestaurantes();
  

botonSiguiente.addEventListener('click', () => {
    mostrarRestaurantes('siguiente');
  });
  
  // Para retroceder al conjunto anterior de restaurantes
  botonAnterior.addEventListener('click', () => {
    mostrarRestaurantes('anterior');
  });

  function borrar(id) {
    // Utiliza el método filter para crear un nuevo arreglo sin el restaurante que deseas eliminar
    const restaurantesFiltrados = restaurantes.filter(restaurante => restaurante.id !== id);
    restaurantes = restaurantesFiltrados;
  }