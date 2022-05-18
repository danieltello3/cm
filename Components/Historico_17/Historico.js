const Cantidad_ConsultasM = [
   "Enero",
   "Febrero",
   "Marzo",
   "Abril",
   "Mayo",
   "Junio",
   "Julio",
   "Agosto",
   "Septiembre",
   "Octubre",
   "Noviembre",
   "Diciembre",
];
const Cantidad_ConsultasD = [
   "Lunes",
   "Martes",
   "Miercoles",
   "Jueves",
   "Viernes",
   "Sabado",
];
const Monto_GanadoM = [
   1200, 2000, 1300, 1500, 15, 1200, 2000, 1300, 1500, 1560, 3000, 2500,
];
const Monto_GanadoD = [60, 70, 65, 40, 15, 0, 15];

const mitabla = (frec, mont, ctx) => {
   new Chart(ctx, {
      type: "line",
      data: {
         labels: frec,
         datasets: [
            {
               label: "Monto Obtenido en soles",
               data: mont,
               backgroundClor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
               ],
               borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
               ],
               borderWidth: 1.5,
            },
         ],
      },
   });
};

const valor = document.getElementById("valor");
const contenedor = document.getElementById("contenedor_tabla");

//primer render
const ctx = document.createElement("canvas");
mitabla(Cantidad_ConsultasM, Monto_GanadoM, ctx);
contenedor.appendChild(ctx);

valor.addEventListener("change", () => {
   //funcion anonima
   console.log(valor.value);
   contenedor.innerHTML = "";
   if (valor.value === "Dias") {
      const ctx = document.createElement("canvas");
      mitabla(Cantidad_ConsultasD, Monto_GanadoD, ctx);
      contenedor.appendChild(ctx);
   } else if (valor.value === "Meses") {
      const ctx = document.createElement("canvas");
      mitabla(Cantidad_ConsultasM, Monto_GanadoM, ctx);
      contenedor.appendChild(ctx);
   }
});
