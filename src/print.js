import { portada, caras, referencias, declaracionIA } from './content.js';

// Versión imprimible con formato APA 7 (trabajo de estudiante), en el orden
// que pide la guía: portada, seis caras, referencias y declaración de IA.
const SITE = 'https://carlows.github.io/cubo-tatis/';

// Posición de cada cara en el cubo desplegado (cruz de 4×3).
const NET = [
  [2, 2], // 1 Descripción (centro)
  [3, 2], // 2 Comparación
  [4, 2], // 3 Asociación
  [1, 2], // 4 Análisis
  [2, 1], // 5 Aplicación
  [2, 3], // 6 Argumentación
];

const page = (cls, inner) => `<section class="page ${cls}">${inner}</section>`;

const cover = page('cover', `
  <div class="cover-title">
    <p class="titulo"><strong>${portada.tema}</strong></p>
    <p class="subtitulo">Cubo de las Seis Caras: Análisis Tridimensional</p>
  </div>
  <p>${portada.estudiante}</p>
  <p>${portada.programa}, ${portada.universidad}</p>
  <p>${portada.asignatura}</p>
  <p>Grupo ${portada.grupo}</p>
  <p>${portada.docente}</p>
  <p>${portada.fecha}</p>
`);

const figura = page('figure', `
  <h1>El Cubo de las Seis Caras</h1>
  <p class="fig-num"><strong>Figura 1</strong></p>
  <p class="fig-titulo"><em>Cubo desplegado con las seis caras de análisis</em></p>
  <div class="net">
    ${caras.map((c, i) => `
      <div class="net-face" style="grid-column:${NET[i][0]};grid-row:${NET[i][1]}">
        <span class="n">Cara ${c.numero}</span><b>${c.titulo}</b>
      </div>`).join('')}
  </div>
  <p class="fig-nota"><em>Nota.</em> Cada cara aborda el tema central desde una operación intelectual: describir, comparar, asociar, analizar, aplicar y argumentar. Versión interactiva en 3D: ${SITE}</p>
`);

const faces = caras.map((c) => page('face', `
  <h1>Cara ${c.numero}. ${c.titulo}</h1>
  <p class="pregunta"><strong>Pregunta orientadora:</strong> ${c.pregunta}</p>
  <div class="body">${c.html}</div>
`)).join('');

const refs = page('refs', `
  <h1>Referencias</h1>
  ${referencias.map((r) => `<p class="ref">${r}</p>`).join('')}
`);

const ia = page('ia', `
  <h1>Declaración de Uso de Inteligencia Artificial</h1>
  <div class="body">${declaracionIA}</div>
`);

document.querySelector('#doc').innerHTML = cover + figura + faces + refs + ia;
