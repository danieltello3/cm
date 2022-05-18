const historico = [
   {
      doctor: "Dr. Juan Perez",
      especialidad: "Cardiologo",
      diagnostico:
         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt culpa quo labore eos numquam illo molestias aliquam eveniet, tempora mollitia!",
      receta: ["Paracetamol c/8 horas", "Naproxeno c/12 horas"],
      fecha: "12-12-2021",
   },
   {
      doctor: "Dr. House",
      especialidad: "M.D.",
      diagnostico:
         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt culpa quo labore eos numquam illo molestias aliquam eveniet, tempora mollitia!",
      receta: ["Vicodin c/12 horas", "Aspirina c/8 horas"],
      fecha: "23-11-2021",
   },
   {
      doctor: "Dr. Robert Chase",
      especialidad: "Cirujano",
      diagnostico:
         "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt culpa quo labore eos numquam illo molestias aliquam eveniet, tempora mollitia!",
      receta: ["Lexotiroxina sódica c/8 horas", "Ramipril c/12 horas"],
      fecha: "25-02-2022",
   },
];

const registros = document.getElementById("registros");
historico
   .sort((a, b) => {
      const newDateA = a.fecha.split("-").reverse().join("-");
      const newDateB = b.fecha.split("-").reverse().join("-");
      return +new Date(newDateB) - +new Date(newDateA);
   })
   .forEach((registro) => {
      //se crea el contenedor del registro
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
      fechaText.textContent = registro.fecha;
      fecha.appendChild(fechaText);

      //se asigna el medico
      let doctor = document.createElement("div");
      doctor.setAttribute("class", "col-lg-3");
      let doctorNombre = document.createElement("p");
      doctorNombre.setAttribute("class", "fs-4 mb-0 ms-4");
      doctorNombre.textContent = registro.doctor;
      let doctorEspecialidad = document.createElement("p");
      doctorEspecialidad.setAttribute("class", "text-secondary fs-5 ms-4");
      doctorEspecialidad.textContent = registro.especialidad;
      doctor.appendChild(doctorNombre);
      doctor.appendChild(doctorEspecialidad);

      //se agrega el diagnostico y receta
      let diagnostico = document.createElement("div");
      diagnostico.setAttribute("class", "col-lg-8");
      let diagTitle = document.createElement("p");
      diagTitle.setAttribute("class", "fs-5 fw-bold text-color-primary");
      diagTitle.textContent = "Diagnostico:";
      let diagContent = document.createElement("p");
      diagContent.setAttribute("class", "ps-3");
      diagContent.textContent = registro.diagnostico;
      let recetaTitle = document.createElement("p");
      recetaTitle.setAttribute("class", "fs-5 fw-bold text-color-primary");
      recetaTitle.textContent = "Receta:";
      let recetaContent = document.createElement("div");
      recetaContent.setAttribute("class", "ps-3");
      let recetaList = document.createElement("ul");
      recetaList.setAttribute("class", "list-unstyled");
      registro.receta.forEach((medicamento) => {
         let recetaItem = document.createElement("li");
         recetaItem.textContent = medicamento;
         recetaList.appendChild(recetaItem);
      });
      recetaContent.appendChild(recetaList);

      diagnostico.appendChild(diagTitle);
      diagnostico.appendChild(diagContent);
      diagnostico.appendChild(recetaTitle);
      diagnostico.appendChild(recetaContent);

      container.appendChild(fecha);
      container.appendChild(doctor);
      container.appendChild(diagnostico);

      registros.appendChild(container);
   });
