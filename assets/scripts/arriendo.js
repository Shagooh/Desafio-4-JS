const propiedades_arriendo = [
  {
    nombre: 'Apartamento en el centro de la ciudad',
    src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
    descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo.',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 200,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Apartamento luminoso con vista al mar',
    src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
    ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
    habitaciones: 3,
    baños: 3,
    costo: 250,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Condominio moderno en zona residencial',
    src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
    descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
    ubicacion: '123 Main Street, Anytown, CA 91234',
    habitaciones: 2,
    baños: 2,
    costo: 220,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Cabaña con vista al mar',
    src: 'https://www.vivamancora.com/peru/wp-content/uploads/casa-vista-bonita-1.jpg',
    descripcion: 'Esta hermsoa cabaña ofrece todo lo que uno desea',
    ubicacion: 'Camino Internacional #488',
    habitaciones: 2,
    baños: 2,
    costo: 350,
    smoke: false,
    pets: true
  }
]


for (let propiedad of propiedades_arriendo) {

  let mostrarFumar = "";
  let mostrarMascota = "";

  if (propiedad.smoke == true)
    mostrarFumar = '<p class="text-smoke"><i class="fas fa-smoking-ban"></i> Permitido fumar';
  else
    mostrarFumar = '<p class="ban-smoke"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>'

  if (propiedad.pets == true)
    mostrarMascota = '<p class="text-pets"><i class="fas fa-paw"></i> Permitido mascotas</p>';
  else
    mostrarMascota = '<p class="ban-pets"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>'

  let propiedadesSection = document.querySelector("#arriendo")
  const template = `
  
    <div class="container-fluid mt-2">
      <section id="arriendo">
        <div class="row">
          <div class="col-md-6 mb-4">
            <div class="card">
              <img
                src="${propiedad.src}"
                class="card-img-top"
                alt="Imagen del departamento"
              />
              <div class="card-body">
                <h5 class="card-title">
                  ${propiedad.nombre}
                </h5>
                <p class="card-text">
                ${propiedad.descripcion}
                </p>
                <p>
                  <i class="fas fa-map-marker-alt">
                  ${propiedad.ubicacion}</i> 
                </p>
                <p>
                  <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                  <i class="fas fa-bath"></i> ${propiedad.baños} Baños
                </p>
                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>
                ${mostrarFumar}
                ${mostrarMascota}
              </div>
            </div>
          </div>
      </section>
    </div>
        `
  propiedadesSection.innerHTML += template;
}