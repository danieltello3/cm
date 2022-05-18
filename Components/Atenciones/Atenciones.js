const historico = [
   {
      id: 1,
      doctor: "Dr. Gregory House",
      especialidad: "Infectología",
      diagnostico:
         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt culpa quo labore eos numquam illo molestias aliquam eveniet, tempora mollitia!",
      receta: ["Paracetamol c/8 horas", "Naproxeno c/12 horas"],
      fecha: "12-12-2021",
      valoracion: 5,
   },
   {
      id: 2,
      doctor: "Dr. Robert Chase",
      especialidad: "Cardiología",
      diagnostico:
         "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit incidunt optio beatae quae soluta animi reprehenderit dignissimos et labore laboriosam error at, eligendi sint explicabo commodi eum dicta consectetur vitae ratione? Iure qui voluptatem doloremque amet commodi? Qui similique repellendus in, explicabo minus dolorum odio magni quas mollitia, reiciendis nihil.",
      receta: [
         "Ramipril c/8 horas",
         "Naproxeno c/12 horas",
         "Paracetamol c/8 horas",
      ],
      fecha: "18-11-2021",
      valoracion: 4,
   },
   {
      id: 3,
      doctor: "Dr. Juan Perez",
      especialidad: "Odontología",
      diagnostico:
         "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi adipisci maxime totam repellat, corporis expedita eos molestiae quia quasi tempore qui recusandae modi odio reprehenderit obcaecati non placeat reiciendis consequatur blanditiis sed ea omnis vero fugit enim! Ad, enim doloremque?",
      receta: ["Simvastatina  c/8 horas", "Naproxeno c/12 horas"],
      fecha: "25-03-2022",
      valoracion: null,
   },
   {
      id: 4,
      doctor: "Dra. Rita",
      especialidad: "Hematología",
      diagnostico:
         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt culpa quo labore eos numquam illo molestias aliquam eveniet, tempora mollitia!",
      receta: ["Omeprazol c/8 horas", "Amlodipina c/12 horas"],
      fecha: "15-01-2022",
      valoracion: null,
   },
];
//genera la valoracion del doctor (estrellas)
const generarValoracion = (id, valoracion) => {
   const puntuacion = document.getElementById(id);
   if (valoracion === null) {
      return;
   }
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
//genera el boton junto al modal para puntuar la cita
const generarBtnPuntuacion = (padreId, id) => {
   const botonContainer = document.getElementById(padreId);

   let puntuar = document.createElement("button");
   puntuar.setAttribute("class", "btn color-primary-bg-btn w-25");
   puntuar.setAttribute("type", "button");
   puntuar.setAttribute("data-bs-toggle", "modal");
   puntuar.setAttribute("data-bs-target", "#modalPuntuacion" + id);
   puntuar.textContent = "Calificar";
   botonContainer.appendChild(puntuar);

   let modal = document.createElement("div");
   modal.setAttribute("class", "modal fade");
   modal.setAttribute("id", "modalPuntuacion" + id);
   modal.setAttribute("tabindex", "-1");
   modal.setAttribute("aria-labelledby", "exampleModalLabel");
   modal.setAttribute("aria-hidden", "true");
   modal.innerHTML = `<div class="modal-dialog">
   <div class="modal-content">
     <div class="modal-header">
       <h5 class="modal-title text-center" id="exampleModalLabel">Calificar Cita</h5>
       <button type="button" id="modalClose${id}" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
     </div>
     <div class="modal-body">
      <select class="form-select w-50 mx-auto" id="puntuacionSelect${id}">
         <option selected>--Elegir puntuacion--</option>
         <option value="0">0</option>
         <option value="1">1</option>
         <option value="2">2</option>
         <option value="3">3</option>
         <option value="4">4</option>
         <option value="5">5</option>
      </select>
     </div>
     <div class="modal-footer justify-content-center">
       <button type="button" class="btn color-primary-bg-btn" id="puntuacionBtn${id}">Calificar</button>
     </div>
   </div>
 </div>`;

   botonContainer.appendChild(modal);
};

//evalua el estado de la cita, si tiene valoracion: muestra la valoracion,
//si la valoracion es null: muestra el boton para calificar la cita
const estadoEvaluacion = (cita) => {
   if (cita.valoracion === null) {
      generarBtnPuntuacion("btnContainer" + cita.id, cita.id);
      const puntuacionBtn = document.getElementById("puntuacionBtn" + cita.id);
      puntuacionBtn.addEventListener("click", () => {
         const puntuacionSelect = document.getElementById(
            "puntuacionSelect" + cita.id
         ).value;
         cita.valoracion = puntuacionSelect;
         document.getElementById("modalClose" + cita.id).click();
         const btnContainer = document.getElementById("btnContainer" + cita.id);
         btnContainer.innerHTML = "";
         estadoEvaluacion(cita);
      });
   }
   generarValoracion("valoracion" + cita.id, cita.valoracion);
};

const generarCita = (cita) => {
   let container = document.createElement("div");
   container.setAttribute(
      "class",
      "row my-4 w-75 mx-auto shadow p-3 mb-5 bg-body rounded"
   );
   //se asigna la fecha
   let fecha = document.createElement("div");
   fecha.setAttribute("class", "col-lg-12");
   let fechaText = document.createElement("p");
   fechaText.setAttribute("class", "text-end mb-0");
   fechaText.textContent = cita.fecha;
   fecha.appendChild(fechaText);

   //se asigna el medico
   let doctor = document.createElement("div");
   doctor.setAttribute("class", "col-lg-3 mb-4 p-0");
   let doctorNombre = document.createElement("p");
   doctorNombre.setAttribute("class", "fs-4 m-0");
   doctorNombre.textContent = cita.doctor;
   let doctorEspecialidad = document.createElement("p");
   doctorEspecialidad.setAttribute("class", "fs-6 text-secondary");
   doctorEspecialidad.textContent = cita.especialidad;
   let valoracion = document.createElement("div");
   valoracion.setAttribute("class", "d-flex gap-2");
   valoracion.setAttribute("id", "valoracion" + cita.id);
   doctor.appendChild(doctorNombre);
   doctor.appendChild(doctorEspecialidad);
   doctor.appendChild(valoracion);

   //se agrega el diagnostico y receta
   let diagnostico = document.createElement("div");
   diagnostico.setAttribute("class", "col-lg-8");
   let diagTitle = document.createElement("p");
   diagTitle.setAttribute("class", "fs-5 fw-bold text-color-primary");
   diagTitle.textContent = "Diagnostico:";
   let diagContent = document.createElement("p");
   diagContent.setAttribute("class", "ps-3");
   diagContent.textContent = cita.diagnostico;
   let recetaTitle = document.createElement("p");
   recetaTitle.setAttribute("class", "fs-5 fw-bold text-color-primary");
   recetaTitle.textContent = "Receta:";
   let recetaContent = document.createElement("div");
   recetaContent.setAttribute("class", "ps-3");
   let recetaList = document.createElement("ul");
   recetaList.setAttribute("class", "list-unstyled");
   cita.receta.forEach((medicamento) => {
      let recetaItem = document.createElement("li");
      recetaItem.textContent = medicamento;
      recetaList.appendChild(recetaItem);
   });
   recetaContent.appendChild(recetaList);

   diagnostico.appendChild(diagTitle);
   diagnostico.appendChild(diagContent);
   diagnostico.appendChild(recetaTitle);
   diagnostico.appendChild(recetaContent);

   //boton para valorar
   let botonContainer = document.createElement("div");
   botonContainer.setAttribute(
      "class",
      "col-lg-12 d-flex flex-column align-items-end"
   );
   botonContainer.setAttribute("id", "btnContainer" + cita.id);

   container.appendChild(fecha);
   container.appendChild(doctor);
   container.appendChild(diagnostico);
   container.appendChild(botonContainer);

   return container;
};

const registros = document.getElementById("citasContainer");

//aqui se generan las citas
historico
   .sort((a, b) => {
      const newDateA = a.fecha.split("-").reverse().join("-");
      const newDateB = b.fecha.split("-").reverse().join("-");
      return +new Date(newDateB) - +new Date(newDateA);
   })
   .forEach((cita) => {
      registros.appendChild(generarCita(cita));
      estadoEvaluacion(cita);
   });
