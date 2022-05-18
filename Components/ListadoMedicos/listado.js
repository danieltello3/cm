const especialidades = [
   "Cardiología",
   "Dermatología",
   "Endocrinología",
   "Gastroenterología",
   "Geriatría",
   "Ginecología",
   "Hematología",
   "Infectología",
   "Medicina General",
   "Medicina Interna",
   "Nefrología",
   "Neumología",
   "Neurología",
   "Odontología",
   "Oncología",
   "Pediatría",
   "Traumatología",
];

const Medicos = [
   {
      nombres: "Gregory House",
      especialidad: "Infectología",
      genero: "Masculino",
      CMP: "47547",
      RNE: "35745",
      valoracion: 5,
      precios: {
         virtual: "40",
         presencial: "100",
      },
      direccion: "Calle Los Libertadores 542, San Isidro",
      descripcion:
         "Equipped with a dry and acerbic sense of humor, House is enigmatic and conceals many facets of his personality with a veneer of sarcasm. He appears and sometimes himself claims to be narcissistic (although he also shows many signs of self-contempt which would be impossible for an actual narcissist) and appears to have a disdain for most people, leading some to label him 'a misanthrope.'",
      comentarios: [
         {
            nombre: "Nelson Mandela",
            comentario:
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non odio euismod lacinia at. Arcu odio ut sem nulla pharetra diam. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.",
         },
         {
            nombre: "Lisa Cuddy",
            comentario: "Lorem ipsum dolor sit amet.",
         },
      ],
   },
   {
      nombres: "Lisa Cuddy",
      especialidad: "Medicina General",
      genero: "Femenino",
      CMP: "46441",
      RNE: "35213",
      valoracion: 4,
      precios: {
         virtual: "35",
         presencial: "80",
      },
      direccion: "Av. Manuel Olguin 305, Surco",
      descripcion:
         "Cuddy is now Chief Administrator and Dean of Medicine of PPTH. She is hard working. However, her number one problem is still Gregory House, who regularly abuses his teaching fellows, constantly disregards hospital protocol, chooses which cases he will work on, doesn’t get as much in fees as he spends on staff and procedures, and (most importantly) hasn’t done any clinic duty in six years.",
      comentarios: [
         {
            nombre: "Jose Diaz",
            comentario:
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non odio euismod lacinia at. Arcu odio ut sem nulla pharetra diam. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.",
         },
         {
            nombre: "Pedro Castillo",
            comentario: "Lorem ipsum dolor sit amet.",
         },
      ],
   },
   {
      nombres: "Robert Chase",
      especialidad: "Cardiología",
      genero: "Masculino",
      CMP: "48954",
      RNE: "36987",
      valoracion: 3,
      precios: {
         virtual: "55",
         presencial: "75",
      },
      direccion: "Av. Javier Prado Oeste 2124, San Isidro",
      descripcion:
         "Chase was born in Australia. His father was Rowan Chase, who later became a wealthy and world renowned rheumatologist. Rowan had emigrated to Australia from Czechoslovakia a few years before Robert was born. The name of Chase‘s mother has never been revealed.",
      comentarios: [
         {
            nombre: "Lisa Cuddy",
            comentario: "Lorem ipsum dolor sit amet.",
         },
      ],
   },
   {
      nombres: "Allison Cameron",
      especialidad: "Neurología",
      genero: "Femenino",
      CMP: "47598",
      RNE: "35732",
      valoracion: 4,
      precios: {
         virtual: "60",
         presencial: "120",
      },
      direccion: "Av. aviacion 2430, San Borja",
      descripcion:
         "Cameron could justifiably be described as sweet, trusting, and compassionate. She's kind and caring, though unlike Thirteen, doesn't always look past stereotypes (as in drug use). Although these would appear to help make her an excellent doctor, House delights in pointing out how each one is a weakness to her ability to objectively deal with a patient.",
      comentarios: [
         {
            nombre: "Nelson Mandela",
            comentario:
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu non odio euismod lacinia at. Arcu odio ut sem nulla pharetra diam. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra.",
         },
      ],
   },
];

const buscador = document.getElementById("busqueda");
const botonTodo = document.getElementById("btn-all");

const Listado = (especialidades) => {
   const datalist = document.getElementById("Especialidades");
   especialidades.forEach((especialidad) => {
      const item = document.createElement("option");
      item.value = especialidad;
      datalist.appendChild(item);
   });
};
Listado(especialidades);

//funcion que genera un cuadro con la info del doctor, incluye el modal
const generarDoctor = (doctor) => {
   const item = document.createElement("div");
   item.setAttribute("id", "listado-item");
   item.setAttribute("class", "d-flex mx-auto shadow p-3 mb-5 bg-body rounded");
   item.innerHTML = `<img
    src=${
       doctor.genero === "Masculino"
          ? "../../Assets/Images/Avatar_doctor.png"
          : "../../Assets/Images/Avatar_doctora.png"
    }
    alt="Foto Medico"
    class="img-avatar p-3"
    id="avatar"
 />
 <div id="medico" class="ms-4 w-100">
    <p class="fs-3 m-0">${doctor.genero === "Masculino" ? "Dr." : "Dra."} ${
      doctor.nombres
   }</p>
    <p class="fs-6 text-secondary">${doctor.especialidad}</p>
    <div class="d-flex justify-content-end gap-2 mt-5">
       <button
          class="btn btn-outline-secondary"
          data-bs-toggle="modal"
          data-bs-target="#informacion${doctor.CMP}"
       >
          Información
       </button>
       <div
          class="modal fade"
          id="informacion${doctor.CMP}"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
       >
          <div
             class="modal-dialog modal-lg modal-dialog-centered"
          >
             <div class="modal-content" id="modalContent">
                <div class="modal-body d-flex flex-column">
                   <div class="d-flex justify-content-end">
                      <button
                         type="button"
                         class="btn-close"
                         data-bs-dismiss="modal"
                         aria-label="Close"
                      ></button>
                   </div>
                   <div class="d-flex">
                      <div>
                         <img
                            class="img-avatar p-2"
                            src=${
                               doctor.genero === "Masculino"
                                  ? "../../Assets/Images/Avatar_doctor.png"
                                  : "../../Assets/Images/Avatar_doctora.png"
                            }
                            alt=""
                         />
                         <div
                            class="d-flex gap-2 justify-content-center" id="valoracion${
                               doctor.CMP
                            }"
                         >
                            
                         </div>
                      </div>
                      <div class="d-flex flex-column ps-5 w-100">
                         <div
                            class="d-flex justify-content-between"
                         >
                            <div>
                               <p class="fs-2 m-0">${
                                  doctor.genero === "Masculino" ? "Dr." : "Dra."
                               } ${doctor.nombres}</p>
                               <p class="fs-5 text-secondary">
                                  ${doctor.especialidad}
                               </p>
                            </div>
                            <div
                               class="fs-6 pe-3 pt-3 text-secondary"
                            >
                               <p class="m-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Colegio Médico del Perú">CMP: ${
                                  doctor.CMP
                               }</p>
                               <p class="m-0" data-bs-toggle="tooltip" data-bs-placement="top" title="Registro nacional de especialista">RNE: ${
                                  doctor.RNE
                               }</p>
                            </div>
                         </div>
                         <div class="p-2">
        ${doctor.descripcion}
                         </div>
                         <div class="px-4 py-3 mt-3 border">
                            <p class="fs-4 m-0">Precios</p>
                            <hr />
                            <div
                               class="d-flex justify-content-between fs-5"
                            >
                               <p class="m-0">Virtual</p>
                               <p class="m-0">S/ ${doctor.precios.virtual}</p>
                            </div>
                            <div
                               class="d-flex justify-content-between fs-5"
                            >
                               <div>
                                  <p class="m-0">Presencial</p>
                                  <p
                                     class="text-secondary fs-6 m-0 ps-3"
                                  >
                                  ${doctor.direccion}
                                  </p>
                               </div>

                               <p class="m-0">S/ ${
                                  doctor.precios.presencial
                               }</p>
                            </div>
                         </div>
                         <div>
                            <p class="my-3 fs-4 text-center">
                               Disponibilidad
                            </p>
                         </div>
                         <div
                            class="container-fluid mx-auto"
                            id="calendario${doctor.CMP}"
                         ></div>
                         <div
                            class="mt-4 px-4 py-3 border d-flex flex-column"
                            id="comentarios${doctor.CMP}"
                         >
                            <p class="fs-4 m-0">Comentarios</p>
                            <hr />
                            
                         </div>
                         <div
                            class="d-flex justify-content-end gap-2 mt-4"
                         >
                            <button
                               class="btn btn-outline-secondary"
                               data-bs-toggle="modal"
                               data-bs-target="#informacion"
                            >
                               Hacer pregunta
                            </button>
                            <a
                               href="../ReservaCita/ReservaCitaPaso1.html"
                               role="button"
                               class="btn color-primary-bg-btn"
                            >
                               Sacar Cita
                            </a>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
       </div>
       <a
         href="../ReservaCita/ReservaCitaPaso1.html"
         role="button"
         class="btn color-primary-bg-btn"
        >
            Sacar Cita
        </a>
    </div>
 </div>`;
   return item;
};

//funcion que muestra los resultados cuando se realiza una busqueda
const mostrarResultados = () => {
   const valor = buscador.value;
   const Filtro = Medicos.filter((x) => x.especialidad === valor);
   const resultados = document.getElementById("Resultados");
   resultados.innerHTML = "";
   const title = document.createElement("h3");
   title.setAttribute("class", "display-5 text-center color-primary mb-5");
   title.textContent = "Resultado de búsqueda";
   resultados.appendChild(title);
   if (Filtro.length == 0) {
      const noResultado = document.createElement("p");
      noResultado.setAttribute("class", "text-center fs-5");
      noResultado.textContent =
         "No se encontraron Medicos con esta especialidad";
      resultados.appendChild(noResultado);
   }
   Filtro.forEach((doctor) => {
      resultados.appendChild(generarDoctor(doctor));
      generarCalendario(`calendario${doctor.CMP}`);
      generarValoracion(`valoracion${doctor.CMP}`, doctor.valoracion);
      generarComentarios(`comentarios${doctor.CMP}`, doctor.comentarios);
   });
};

//envento on click al seleccionar mostrar todo
botonTodo.addEventListener("click", () => {
   const resultados = document.getElementById("Resultados");
   resultados.innerHTML = "";
   const title = document.createElement("h3");
   title.setAttribute("class", "display-5 text-center color-primary mb-5");
   title.textContent = "Resultado de búsqueda";
   resultados.appendChild(title);
   Medicos.forEach((doctor) => {
      resultados.appendChild(generarDoctor(doctor));
      generarCalendario(`calendario${doctor.CMP}`);
      generarValoracion(`valoracion${doctor.CMP}`, doctor.valoracion);
      generarComentarios(`comentarios${doctor.CMP}`, doctor.comentarios);
   });
});

//evento que se activa cuando cambia el campo de busqueda
buscador.addEventListener("change", mostrarResultados);

//se carga la valoracion por doctor
const generarValoracion = (id, valoracion) => {
   const puntuacion = document.getElementById(id);
   for (let i = 1; i <= 5; i++) {
      const estrella = document.createElement("i");
      if (i <= valoracion) {
         estrella.setAttribute("class", "bi bi-star-fill checked");
      } else {
         estrella.setAttribute("class", "bi bi-star-fill");
      }
      puntuacion.appendChild(estrella);
   }
};

//se cargan los comentarios por doctor
const generarComentarios = (id, comentarios) => {
   const section = document.getElementById(id);
   comentarios.forEach((comentario) => {
      const comment = document.createElement("div");
      comment.setAttribute("class", "border border-dark ps-4 pt-2 mb-2");
      comment.innerHTML = `<p>${comentario.nombre}</p>
        <p>
           ${comentario.comentario}
        </p>`;
      section.appendChild(comment);
   });
};

//se genera el calendario por cada doctor
const generarCalendario = (id) => {
   const hoy = new Date();
   const mes = new Intl.DateTimeFormat("es-PE", { month: "long" }).format(hoy);
   const daysInMonth =
      new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate() + 1;
   let firstDay = new Date(hoy.getFullYear(), hoy.getMonth()).getDay();

   const res = document.getElementById(id);
   res.innerHTML = `<div class="row w-75 py-2 mx-auto color-primary-bg">
   <div class="col-md-2">
      <i
         class="bi bi-caret-left-fill"
      ></i>
   </div>
   <div class="col-md-8 text-center fs-5">${mes} - ${hoy.getFullYear()}</div>
   <div class="col-md-2 d-flex justify-content-end">
      <i
         class="bi bi-caret-right-fill"
      ></i>
   </div>
</div>
<div class="row w-75 mx-auto">
    <div class="col text-center fw-bold">Do</div>
    <div class="col text-center fw-bold">Lu</div>
    <div class="col text-center fw-bold">Ma</div>
    <div class="col text-center fw-bold">Mi</div>
    <div class="col text-center fw-bold">Ju</div>
    <div class="col text-center fw-bold">Vi</div>
    <div class="col text-center fw-bold">Sa</div>
</div>`;

   let count = 1;
   for (let i = 1; i <= 6; i++) {
      let row = document.createElement("div");
      row.classList.add("row", "w-75", "mx-auto");
      for (let j = 1; j <= 7; j++) {
         let random = Math.floor(Math.random() * 2);
         let element = document.createElement("div");
         if (j < firstDay && i === 1) {
            element.classList.add("col");

            element.textContent = "";
         } else {
            element.classList.add(
               "col",
               "border",
               "text-center",
               "btn",
               "btn-light"
            );

            element.textContent = count;
         }

         if (random === 0) {
            element.classList.add("disabled", "text-decoration-line-through");
         }
         if (count == hoy.getDate()) {
            element.classList.replace("btn-light", "color-primary-bg-btn");
         }
         if (count > daysInMonth) {
            element.classList.remove(
               "btn-light",
               "border",
               "text-center",
               "btn"
            );
            element.textContent = "";
         } else {
            count++;
         }
         row.appendChild(element);
      }
      res.appendChild(row);
   }
};
