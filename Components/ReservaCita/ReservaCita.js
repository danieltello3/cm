const horas = [
   {
      hora: "9:00",
      disponible: 1,
      tipo: "presencial",
   },
   {
      hora: "9:30",
      disponible: 0,
      tipo: "presencial",
   },
   {
      hora: "10:00",
      disponible: 1,
      tipo: "presencial",
   },
   {
      hora: "10:30",
      disponible: 0,
      tipo: "presencial",
   },
   {
      hora: "11:00",
      disponible: 1,
      tipo: "presencial",
   },
   {
      hora: "11:30",
      disponible: 0,
      tipo: "presencial",
   },
   {
      hora: "15:00",
      disponible: 1,
      tipo: "virtual",
   },
   {
      hora: "15:30",
      disponible: 1,
      tipo: "virtual",
   },
   {
      hora: "16:00",
      disponible: 0,
      tipo: "virtual",
   },
   {
      hora: "16:30",
      disponible: 1,
      tipo: "virtual",
   },
   {
      hora: "17:00",
      disponible: 1,
      tipo: "virtual",
   },
   {
      hora: "17:30",
      disponible: 1,
      tipo: "virtual",
   },
];

window.onload = (event) => {
   if (event.target.title === "Reservar Cita | 1") {
      const generarCalendario = (id) => {
         const hoy = new Date();
         const mes = new Intl.DateTimeFormat("es-PE", { month: "long" }).format(
            hoy
         );
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
                     "dia",
                     "col",
                     "border",
                     "text-center",
                     "btn",
                     "btn-light"
                  );

                  element.textContent = count;
               }

               if (random === 0) {
                  element.classList.add(
                     "disabled",
                     "text-decoration-line-through"
                  );
               }
               if (count == hoy.getDate()) {
                  element.classList.replace(
                     "btn-light",
                     "color-primary-bg-btn"
                  );
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

      const generarHoras = (id, horas) => {
         const res = document.getElementById(id);
         res.innerHTML = "";
         res.setAttribute("class", "mb-5 w-50 mx-auto");
         //se crea el titulo
         const title = document.createElement("h3");
         title.setAttribute("class", "display-4 mb-3 text-center");
         title.textContent = "Escoge un horario";
         res.appendChild(title);
         //crear filtro entre presencial y virtual
         const toggle = document.createElement("div");
         toggle.setAttribute("class", "row w-75 mx-auto mb-3");

         const virtual = document.createElement("button");
         virtual.setAttribute(
            "class",
            "btn btn-outline-secondary border col-sm-6"
         );
         virtual.setAttribute("id", "virtual");
         virtual.textContent = "Virtual";
         toggle.appendChild(virtual);

         const presencial = document.createElement("button");
         presencial.setAttribute(
            "class",
            "btn btn-outline-secondary border col-sm-6"
         );
         presencial.setAttribute("id", "presencial");
         presencial.textContent = "Presencial";
         toggle.appendChild(presencial);

         res.appendChild(toggle);
         //se crea una fila donde iran las horas
         let row = document.createElement("div");
         row.classList.add("row", "ps-5", "gap-1");
         for (let i = 0; i < horas.length; i++) {
            let element = document.createElement("div");
            element.classList.add(
               "col-sm-2",
               "border",
               "text-center",
               "btn",
               "hora"
            );
            element.textContent = horas[i].hora;
            if (horas[i].disponible === 0) {
               element.classList.add(
                  "disabled",
                  "text-decoration-line-through"
               );
            }
            row.appendChild(element);
         }
         res.appendChild(row);
         renderHoras();
      };

      generarCalendario("calendario");

      const diaSelected = document.getElementsByClassName("dia");
      for (let i = 0; i < diaSelected.length; i++) {
         diaSelected[i].onclick = () => {
            diaSelected[i].classList.add("color-primary-bg-btn");
            for (let j = 0; j < diaSelected.length; j++) {
               if (j !== i) {
                  diaSelected[j].classList.remove("color-primary-bg-btn");
               }
            }
            generarHoras("Horas", horas);
         };
      }
      const renderHoras = () => {
         const btnVirtual = document.getElementById("virtual");
         const btnPresencial = document.getElementById("presencial");

         btnVirtual.onclick = () => {
            const filtro = horas.filter((x) => x.tipo === "virtual");
            generarHoras("Horas", filtro);
         };

         btnPresencial.addEventListener("click", () => {
            const filtro = horas.filter((x) => x.tipo === "presencial");
            generarHoras("Horas", filtro);
         });

         const horaSelected = document.getElementsByClassName("hora");
         for (let i = 0; i < horaSelected.length; i++) {
            horaSelected[i].onclick = () => {
               horaSelected[i].classList.add("color-primary-bg-btn");
               for (let j = 0; j < horaSelected.length; j++) {
                  if (j !== i) {
                     horaSelected[j].classList.remove("color-primary-bg-btn");
                  }
               }
            };
         }
      };
   }
};
