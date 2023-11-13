const propiedades_ventas = [
  {
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: "123 Luxury Lane, Prestige Suburb, CA 45678",
    habitaciones: 2,
    baños: 2,
    costo: 10000,
    smoke: true,
    pets: true
  },
  {
    nombre: 'Apartamento acogedor en la montaña',
    src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
    descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
    ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
    habitaciones: 2,
    baños: 2,
    costo: 3000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Penthouse de lujo con terraza panorámica',
    src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
    descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
    ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
    habitaciones: 5,
    baños: 5,
    costo: 25000,
    smoke: false,
    pets: true
  },
  {
    nombre: 'Casa premium con piscina',
    src: 'https://img.freepik.com/foto-gratis/villa-lujo-piscina-espectacular-diseno-contemporaneo-arte-digital-bienes-raices-hogar-casa-propiedad-ge_1258-150765.jpg?size=626&ext=jpg&ga=GA1.1.386372595.1698278400&semt=ais',
    descripcion: 'Esta casa ofrece un gran espacio tanto interior como exterior',
    ubicacion: 'Quinta avenida #345, Valparaiso',
    habitaciones: 5,
    baños: 3,
    costo: 8000,
    smoke: true,
    pets: true
  }
]

for (let propiedad of propiedades_ventas) {

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

  let propiedadesSection = document.querySelector("#venta")
  const template = `

    <div class="container-fluid mt-2">
      <section id="venta">
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