import { portada, caras, referencias, declaracionIA } from './content.js';

// Versión imprimible del cubo: una página por sección, en el orden que pide
// la guía (portada, seis caras, referencias, declaración de IA).
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

const page = (cls, inner, color) =>
  `<section class="page ${cls}"${color ? ` style="--c:${color}"` : ''}>${inner}</section>`;

const cover = page('cover', `
  <p class="kicker">${portada.universidad}</p>
  <p class="eval">${portada.evaluacion}</p>
  <h1>${portada.tema}</h1>
  <p class="lema">“${portada.lema}”</p>
  <div class="net">
    ${caras.map((c, i) => `
      <div class="net-face" style="--c:${c.color};grid-column:${NET[i][0]};grid-row:${NET[i][1]}">
        <span class="n">${c.numero}</span><span class="i">${c.icono}</span><b>${c.titulo}</b>
      </div>`).join('')}
  </div>
  <dl class="datos">
    <dt>Estudiante</dt><dd>${portada.estudiante}</dd>
    <dt>Asignatura</dt><dd>${portada.asignatura}</dd>
    <dt>Programa</dt><dd>${portada.programa}</dd>
    <dt>Grupo</dt><dd>${portada.grupo}</dd>
    <dt>Docente</dt><dd>${portada.docente}</dd>
    <dt>Fecha</dt><dd>${portada.fecha}</dd>
  </dl>
  <p class="link">Versión interactiva en 3D: <a href="${SITE}">${SITE.replace('https://', '')}</a></p>
`);

const faces = caras.map((c) => page('face', `
  <header>
    <span class="n">${c.numero}</span>
    <div>
      <p class="kicker">Cara ${c.numero} de 6</p>
      <h2>${c.icono} ${c.titulo}</h2>
      <p class="q">${c.pregunta}</p>
    </div>
  </header>
  <div class="body">${c.html}</div>
`, c.color)).join('');

const refs = page('extra', `
  <header><span class="n">📚</span><div><h2>Referencias</h2><p class="q">Formato APA 7.ª edición</p></div></header>
  <ul class="refs">${referencias.map((r) => `<li>${r}</li>`).join('')}</ul>
`, '#264653');

const ia = page('extra', `
  <header><span class="n">🤖</span><div><h2>Declaración de uso de Inteligencia Artificial</h2></div></header>
  <div class="body">${declaracionIA}</div>
`, '#264653');

document.querySelector('#doc').innerHTML = cover + faces + refs + ia;
