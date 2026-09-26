// Contenido del cubo. Todo el texto académico vive aquí para poder editarlo
// sin tocar la lógica 3D. `resumen` se muestra sobre la cara del cubo;
// `html` es el desarrollo completo que se abre al tocar la cara.
//
// El texto de cada cara proviene de la "Solución de la evaluación" (caras 1,
// 4, 5 y 6 en texto; caras 2 y 3 de sus infografías), organizado según la
// guía y con citas en formato APA 7 tomadas de los materiales de las semanas
// 3 y 4.

export const portada = {
  tema: 'Transformaciones de las infancias y evolución de la educación infantil en Colombia y Latinoamérica',
  lema: 'Seis miradas para comprender cómo se transforman las infancias y su educación.',
  estudiante: '[Nombre completo de la estudiante]',
  asignatura: 'Educación Infantil en Colombia y Latinoamérica',
  programa: 'Licenciatura en Educación Infantil',
  grupo: '2026-3C',
  docente: 'Lic. María Trinidad Cabanzo Cuadrado',
  universidad: 'Universidad INCCA de Colombia',
  fecha: '4 de octubre de 2026',
  evaluacion: 'Evaluación del primer corte · Semanas 3 y 4',
};

export const caras = [
  {
    id: 'descripcion',
    numero: 1,
    titulo: 'Descripción',
    icono: '👁️',
    color: '#e76f51',
    pregunta: '¿Qué transformaciones centrales se estudiaron en las semanas 3 y 4?',
    resumen: [
      'De receptores de asistencia a sujetos de derechos y actores sociales',
      'Infancias diversas',
      'Del cuidado y el bienestar a la educación inicial y la atención integral',
      'Hitos: ICBF (1968) y Decreto 088 de 1976',
    ],
    html: `
      <p>En estas dos semanas vimos cómo ha cambiado la manera de entender a las niñas y los niños, y cómo esos cambios transformaron la educación para la primera infancia en Colombia.</p>

      <h3>Semana 3: concepciones de niño, niña e infancia</h3>
      <p>Aprendimos que antes los niños eran vistos sobre todo como quienes “necesitaban ayuda, protección o corrección”. Predominaban miradas asistencialistas y muy centradas en el adulto. Con el tiempo, y gracias a avances como la Convención sobre los Derechos del Niño, esto cambió: hoy se reconoce a niñas y niños como <strong>sujetos de derechos</strong>, con voz, dignidad y capacidad de participar según su edad (Corte Constitucional de Colombia, 2022). Además, se les entiende como <strong>actores sociales</strong>, es decir, personas que interpretan, crean, opinan y transforman su entorno (Peláez Córdoba, 2023). También comprendimos que no existe una sola infancia, sino <strong>infancias diversas</strong> según el territorio, la cultura, la familia y las condiciones sociales (Sepúlveda-Kattan, 2021).</p>

      <h3>Semana 4: evolución de la educación infantil en Colombia</h3>
      <p>Conectamos ese cambio de mirada con la evolución de la educación infantil en Colombia. Vimos que todo comenzó con instituciones centradas en el cuidado y el bienestar, y poco a poco se fue construyendo una educación más organizada y con intención pedagógica. Aparecen hitos importantes como la creación del <strong>ICBF en 1968</strong>, que fortaleció programas para la niñez, y el <strong>Decreto 088 de 1976</strong>, que incorporó por primera vez la <strong>educación preescolar</strong> al sistema educativo (Ministerio de Educación Nacional [MEN], s.f.). Con los años surgieron currículos, jardines infantiles y modalidades comunitarias, hasta llegar a la <strong>educación inicial</strong>, que hoy tiene identidad propia (Presidencia de la República de Colombia, 2022) y se articula con la <strong>atención integral</strong>, donde educación, salud, nutrición, cuidado y protección trabajan de manera coordinada.</p>

      <p class="nota">En conjunto, las dos semanas muestran un cambio profundo: pasamos de ver a los niños como receptores de asistencia a reconocerlos como sujetos de derechos, y de ofrecer solo cuidado básico a construir una educación inicial sólida, respetuosa de su desarrollo y conectada con sus contextos.</p>
    `,
  },
  {
    id: 'comparacion',
    numero: 2,
    titulo: 'Comparación',
    icono: '⚖️',
    color: '#f4a261',
    pregunta: '¿Qué semejanzas y diferencias pueden establecerse entre las concepciones y modelos estudiados?',
    resumen: [
      'A. Antes: asistencia y protección · Ahora: sujetos de derechos',
      'B. Preescolar · Educación inicial · Atención integral',
      'Semejanzas, diferencias y transformaciones',
    ],
    html: `
      <h3>A. Concepciones de niño, niña e infancia (Semana 3)</h3>
      <div class="tabla">
      <p class="tabla-num"><strong>Tabla 1</strong></p>
      <p class="tabla-titulo"><em>De la asistencia a los derechos y la participación</em></p>
      <div class="tabla-wrap"><table>
        <thead><tr><th></th><th>Antes: necesitan asistencia y protección</th><th>Ahora: sujetos de derechos y actores sociales</th></tr></thead>
        <tbody>
          <tr><th>Papel del adulto</th><td>El adulto decide todo.</td><td>Niñas y niños tienen voz y participación.</td></tr>
          <tr><th>Papel del niño</th><td>Niño receptor pasivo.</td><td>Niños como actores sociales.</td></tr>
          <tr><th>Forma de relación</th><td>Control y corrección.</td><td>Reconocimiento de la diversidad de infancias.</td></tr>
        </tbody>
      </table></div>
      <p class="tabla-nota"><em>Nota.</em> Elaboración propia a partir de Sepúlveda-Kattan (2021) y Corte Constitucional de Colombia (2022).</p>
      </div>
      <p><strong>Semejanzas:</strong> ambas miradas buscan el bienestar infantil y reconocen la protección.</p>
      <p><strong>Diferencias:</strong> en la mirada asistencial el adulto decide y el niño recibe; en la mirada actual el niño tiene voz, participa y es reconocido en su diversidad.</p>
      <p><strong>Transformación:</strong> de la asistencia a los derechos y la participación.</p>

      <h3>B. Modelos de educación para la primera infancia en Colombia (Semana 4)</h3>
      <div class="tabla">
      <p class="tabla-num"><strong>Tabla 2</strong></p>
      <p class="tabla-titulo"><em>Educación preescolar, educación inicial y atención integral</em></p>
      <div class="tabla-wrap"><table>
        <thead><tr><th></th><th>Educación preescolar</th><th>Educación inicial</th><th>Atención integral</th></tr></thead>
        <tbody>
          <tr><th>Características</th><td>Sistema escolar. Grados: prejardín, jardín y transición.</td><td>Juego, arte y exploración. Para menores de 6 años.</td><td>Educación + salud + nutrición + cuidado.</td></tr>
          <tr><th>Hito</th><td>Decreto 088 de 1976</td><td>Decreto 1411 de 2022</td><td>Ley 1804 de 2016</td></tr>
        </tbody>
      </table></div>
      <p class="tabla-nota"><em>Nota.</em> Elaboración propia a partir de MEN (s.f.), Presidencia de la República de Colombia (2022) y Congreso de la República de Colombia (2016).</p>
      </div>
      <p><strong>Semejanzas:</strong> los tres están dirigidos a la primera infancia y tienen historias institucionales relacionadas (MEN, s.f.).</p>
      <p><strong>Diferencias:</strong> la educación preescolar forma parte de la educación formal y se organiza en grados; la educación inicial es un servicio educativo para menores de seis años con identidad pedagógica propia (Presidencia de la República de Colombia, 2022); la atención integral articula educación, salud, nutrición y cuidado. Por eso, educación inicial no es sinónimo de preescolar, y entre estos niveles aún existen discontinuidades en metodologías y prácticas (Restrepo-Restrepo, 2022).</p>
      <p><strong>Transformación:</strong> de preescolar a educación inicial y atención integral.</p>
    `,
  },
  {
    id: 'asociacion',
    numero: 3,
    titulo: 'Asociación',
    icono: '🔗',
    color: '#e9c46a',
    pregunta: '¿Con qué autores, pedagogos, instituciones, normas y experiencias se relacionan los contenidos?',
    resumen: [
      'Autora: Sepúlveda-Kattan (2021)',
      'Pedagogos: Fröbel y Montessori',
      'Instituciones: ICBF y MEN',
      'Normas: Decreto 088/1976 y 1411/2022 · País: Chile',
    ],
    html: `
      <p class="tabla-num"><strong>Tabla 3</strong></p>
      <p class="tabla-titulo"><em>Contribuciones a la educación inicial en Colombia: referentes que inspiran, transforman y fortalecen la infancia</em></p>
      <ul class="asociaciones">
        <li><span class="tag">Autora contemporánea (Semana 3)</span><strong>Sepúlveda-Kattan (2021).</strong> Su trabajo sobre la sociología de la infancia latinoamericana ayuda a comprender que las concepciones de niño y niña no son universales, sino que dependen del contexto social, cultural y territorial. Gracias a ella entendemos que reconocer a los niños como sujetos de derechos y actores sociales implica mirar sus vidas desde sus propias realidades, no desde modelos impuestos.</li>
        <li><span class="tag">Pedagogo histórico (Semana 4)</span><strong>Friedrich Fröbel.</strong> Con su propuesta del Kindergarten, mostró que la educación infantil debía tener espacios y materiales propios, donde el juego fuera el centro del aprendizaje. Su idea transformó la visión del niño como receptor pasivo en un niño activo que aprende haciendo.</li>
        <li><span class="tag">Pedagoga histórica (Semana 4)</span><strong>María Montessori.</strong> Aportó la idea del ambiente preparado, donde el niño desarrolla autonomía y aprende a través de la exploración. Su enfoque se conecta con la educación inicial actual, que promueve la autonomía, la observación y el respeto por los ritmos individuales.</li>
        <li><span class="tag">Institución colombiana</span><strong>Instituto Colombiano de Bienestar Familiar (ICBF).</strong> Creado en 1968, marcó un hito al organizar programas de nutrición, cuidado y protección infantil. Representa el paso del asistencialismo hacia una atención más estructurada y educativa, base de la actual atención integral (MEN, s.f.).</li>
        <li><span class="tag">Institución colombiana</span><strong>Ministerio de Educación Nacional (MEN).</strong> Ha sido clave en la consolidación de la educación preescolar y la educación inicial. A través de decretos y orientaciones curriculares, fortaleció la dimensión pedagógica y la formación docente, impulsando una visión más integral del desarrollo infantil (MEN, s.f.).</li>
        <li><span class="tag">Norma o hito</span><strong>Decreto 088 de 1976.</strong> Incorporó el preescolar al sistema educativo formal colombiano, reconociendo la educación de los niños pequeños como parte esencial del sistema escolar. Este decreto transformó la atención infantil en una etapa educativa con propósito pedagógico (MEN, s.f.).</li>
        <li><span class="tag">Norma o hito</span><strong>Decreto 1411 de 2022.</strong> Reglamentó la educación inicial como servicio educativo para menores de seis años, definiendo su organización y responsabilidades. Consolidó la idea de que los primeros años tienen valor educativo propio y no son solo preparación para la primaria (Presidencia de la República de Colombia, 2022).</li>
        <li><span class="tag">País latinoamericano</span><strong>Chile (Peralta Espinosa, 2021).</strong> El estudio comparativo de Peralta Espinosa (2021) sobre las políticas curriculares de Chile, Ecuador, México y Uruguay muestra cómo los países latinoamericanos han desarrollado sus propios modelos de educación infantil. Su trabajo permite comparar y entender que, al igual que Colombia, Chile busca currículos contextualizados que respondan a la diversidad cultural y territorial.</li>
      </ul>
    `,
  },
  {
    id: 'analisis',
    numero: 4,
    titulo: 'Análisis',
    icono: '🔍',
    color: '#2a9d8f',
    pregunta: '¿Cómo se compone la transformación estudiada y qué factores la hicieron posible?',
    resumen: [
      'Dimensiones histórica, pedagógica e institucional',
      'Normativa y de política pública',
      'Latinoamericana',
      'Relaciones de causa, transformación y continuidad',
    ],
    html: `
      <p><strong>Transformación de la educación infantil en Colombia y Latinoamérica</strong></p>
      <dl class="dimensiones">
        <dt>1. Dimensión histórica</dt>
        <dd>La transformación de la educación infantil comenzó cuando la infancia se entendía desde el asistencialismo y el cuidado básico. Con el paso del tiempo, los cambios sociales y laborales impulsaron la creación de instituciones para atender a los niños pequeños. La fundación del ICBF en 1968 marcó el inicio de una atención más organizada, y el Decreto 088 de 1976 integró el preescolar al sistema educativo (MEN, s.f.). Estos avances reflejan cómo las necesidades sociales y económicas llevaron a una evolución desde el bienestar hacia una educación formal y estructurada.</dd>

        <dt>2. Dimensión pedagógica</dt>
        <dd>Las ideas de Fröbel, Montessori, Decroly y Dewey transformaron la forma de enseñar. Se pasó de una educación centrada en la transmisión de contenidos a una basada en la experiencia, el juego y la autonomía. En Colombia, Agustín Nieto Caballero adaptó estas ideas con la Escuela Activa.
          <br><span class="rel">Causa:</span> las nuevas corrientes pedagógicas internacionales inspiraron una educación más participativa.
          <br><span class="rel">Continuidad:</span> esas bases siguen presentes en la educación inicial actual, que valora el juego, el arte y la exploración.</dd>

        <dt>3. Dimensión institucional</dt>
        <dd>La educación infantil se consolidó gracias a la acción de instituciones como el ICBF y el Ministerio de Educación Nacional. El ICBF fortaleció programas de nutrición y cuidado, mientras el MEN estructuró el nivel preescolar y promovió la formación docente (MEN, s.f.).
          <br><span class="rel">Causa:</span> la necesidad de coordinación entre sectores.
          <br><span class="rel">Transformación:</span> la atención infantil dejó de ser solo asistencial y se convirtió en un servicio educativo con identidad pedagógica.</dd>

        <dt>4. Dimensión normativa y de política pública</dt>
        <dd>Las normas fueron clave para formalizar los avances. El Decreto 088 de 1976 incorporó el preescolar al sistema educativo (MEN, s.f.); la Ley 1804 de 2016 (De Cero a Siempre) consolidó la atención integral como política de Estado (Congreso de la República de Colombia, 2016); y el Decreto 1411 de 2022 reglamentó la educación inicial como servicio educativo (Presidencia de la República de Colombia, 2022).
          <br><span class="rel">Causa:</span> la necesidad de garantizar derechos y continuidad educativa.
          <br><span class="rel">Continuidad:</span> las normas reflejan el paso de la asistencia al reconocimiento del valor educativo de los primeros años.</dd>

        <dt>5. Dimensión latinoamericana</dt>
        <dd>En el contexto regional, autoras como Victoria Peralta Espinosa, educadora chilena, mostraron que cada país ha construido sus propios modelos de educación infantil. Su análisis comparativo evidencia que los currículos deben ser contextualizados y responder a la diversidad cultural y territorial (Peralta Espinosa, 2021).
          <br><span class="rel">Causa:</span> la influencia de los debates internacionales y la búsqueda de identidad latinoamericana.
          <br><span class="rel">Transformación:</span> la educación infantil dejó de copiar modelos europeos y empezó a construir referentes propios.</dd>
      </dl>
    `,
  },
  {
    id: 'aplicacion',
    numero: 5,
    titulo: 'Aplicación',
    icono: '🧩',
    color: '#457b9d',
    pregunta: '¿Cómo se traduce lo aprendido en la práctica del Licenciado en Educación Infantil?',
    resumen: [
      'Situación: niños de 4 años observan la lluvia',
      'Participación e intención pedagógica',
      'Cuidado y acción educativa',
      'Diversidad, familias y atención integral',
    ],
    html: `
      <h3>Situación pedagógica</h3>
      <p>En un jardín infantil, el grupo de niños de 4 años llega al aula después de observar la lluvia en el patio. Varias niñas y niños comentan lo que vieron: unos hablan de los charcos, otros del sonido del agua y uno menciona que en su casa la lluvia entra por el techo.</p>

      <h3>Actuación del licenciado</h3>
      <ul class="criterios">
        <li><span class="tag">Niñas y niños como participantes</span>El profesor no impone un tema; por el contrario, a través de diversas preguntas incorpora a los niños en la actividad y los hace partícipes, para que de manera autónoma entiendan que son sujetos de derechos capaces de identificar e interpretar su entorno.</li>
        <li><span class="tag">Intencionalidad pedagógica</span>El profesor decide aprovechar ese momento para construir una experiencia significativa: observar cómo cae el agua y, a partir de ello, construir una actividad en la que se aprecia la intencionalidad pedagógica.</li>
        <li><span class="tag">Cuidado y acción educativa</span>La experiencia también considera fundamental el bienestar de los niños: participan disfrutando de la lluvia de manera segura, estando secos y cómodos. El cuidado acompaña la experiencia, mientras la acción educativa se encuentra en la observación, las preguntas y la interpretación del entorno.</li>
        <li><span class="tag">Pertinencia con el contexto</span>Cuando uno de los niños menciona que la lluvia entra por su techo, se abre un tema importante: reconocer que la infancia es diversa y que cada niño vive una realidad distinta (Sepúlveda-Kattan, 2021). La conversación se adapta para que todos puedan compartir sus experiencias sin invisibilizar ni juzgar las de los demás.</li>
        <li><span class="tag">Familia, comunidad y otros sectores</span>El docente puede articular esta información contando a las familias la experiencia que se vivió en la institución e invitándolas, si lo desean, a compartir una imagen o un pequeño relato. De esta manera, si se evidencia alguna situación, se puede remitir a servicios comunitarios o institucionales, entendiendo que la atención integral implica coordinar educación, cuidado y protección (Congreso de la República de Colombia, 2016).</li>
        <li><span class="tag">Identidad pedagógica propia</span>La experiencia parte de lo que los niños observan y comentan, y no de contenidos escolares impuestos: el aporte del licenciado sigue siendo pedagógico aun cuando participa en la atención integral.</li>
      </ul>
    `,
  },
  {
    id: 'argumentacion',
    numero: 6,
    titulo: 'Argumentación',
    icono: '💬',
    color: '#6d597a',
    pregunta: '¿Qué postura académica puede defenderse frente a la evolución de la educación infantil?',
    resumen: [
      'Tesis: campo pedagógico con identidad propia',
      'Tres argumentos: infancias, pedagogía, normas',
      'Reto: aplicar la identidad pedagógica',
      'Conclusión',
    ],
    html: `
      <blockquote>“La educación infantil no puede reducirse al cuidado ni a la preparación para la primaria; requiere una identidad pedagógica propia y una atención articulada con las realidades de las infancias.”</blockquote>

      <h3>Tesis</h3>
      <p>La educación infantil debe reconocerse como un campo pedagógico con identidad propia, porque su propósito no es solo cuidar ni preparar para la primaria, sino acompañar el desarrollo integral de niñas y niños desde sus experiencias, contextos y derechos.</p>

      <h3>Argumentos</h3>
      <ol>
        <li><strong>Las infancias son diversas.</strong> Sepúlveda-Kattan (2021) señala que las infancias son diversas y deben comprenderse desde sus realidades sociales y culturales. Esto implica que el docente no actúa únicamente como cuidador, sino como un mediador que promueve participación, autonomía y aprendizaje significativo.</li>
        <li><strong>Transformación pedagógica y metodológica.</strong> Pedagogos como Fröbel y Montessori demostraron que el juego, la exploración y la libertad son esenciales para el aprendizaje temprano. Sus aportes inspiran la educación inicial actual, centrada en la experiencia, la curiosidad y el protagonismo infantil.</li>
        <li><strong>Evolución institucional y normativa en Colombia.</strong> El Decreto 088 de 1976 integró el preescolar al sistema educativo (MEN, s.f.), y el Decreto 1411 de 2022 reconoció la educación inicial como servicio educativo (Presidencia de la República de Colombia, 2022). Estas normas consolidan una visión en la que el cuidado se articula con la pedagogía y la atención integral, fortaleciendo la identidad del campo y reconociendo el valor educativo de los primeros años.</li>
      </ol>

      <h3>Reto actual</h3>
      <p>Uno de los retos actuales en Colombia y Latinoamérica es lograr que esta identidad pedagógica se aplique realmente en las instituciones. Persisten prácticas centradas en el asistencialismo o en la preparación escolar, lo que exige formación docente continua y políticas que garanticen coherencia entre teoría y práctica.</p>

      <h3>Conclusión</h3>
      <p>La educación infantil es un espacio de formación, participación y desarrollo integral, no una etapa de transición. Su evolución demuestra que cuidar y educar son acciones complementarias, pero distintas, y que reconocer la diversidad de las infancias es esencial para construir una educación más humana, pertinente y transformadora.</p>
    `,
  },
];

// Referencias APA 7 (orden alfabético, sangría francesa en la vista).
// Datos tomados tal como aparecen en los materiales de las semanas 3 y 4.
export const referencias = [
  'Congreso de la República de Colombia. (2016). <em>Ley 1804 de 2016. Política de Estado para el Desarrollo Integral de la Primera Infancia De Cero a Siempre</em>.',
  'Corte Constitucional de Colombia. (2022). <em>Sentencia SU-180 de 2022</em>.',
  'Ministerio de Educación Nacional. (s.f.). <em>Historia de la educación infantil y orientaciones para el grado transición</em>.',
  'Peláez Córdoba, L. (2023). La construcción de la infancia en Guapi: Desarrollo infantil y agencia desde una perspectiva cultural. <em>Infancias Imágenes</em>.',
  'Peralta Espinosa, V. (2021). <em>Análisis comparativo curricular para la primera infancia en América Latina: Estudio comparativo en Chile, Ecuador, México y Uruguay</em>. IIPE UNESCO, Oficina para América Latina y el Caribe.',
  'Presidencia de la República de Colombia. (2022). <em>Decreto 1411 de 2022. Por medio del cual se reglamenta la prestación del servicio de educación inicial en Colombia</em>.',
  'Restrepo-Restrepo, N. (2022). Educación infantil en Colombia: Análisis sobre la articulación entre los niveles educativos. <em>Revista Colombiana de Educación</em>, (84), 1–18. https://doi.org/10.17227/rce.num84-11317',
  'Sepúlveda-Kattan, N. (2021). Sociología de la infancia y América Latina como su lugar de enunciación. <em>Íconos. Revista de Ciencias Sociales</em>, <em>70</em>, 133–150. https://doi.org/10.17141/iconos.70.2021.4438',
];

export const declaracionIA = `
  <p>Utilicé <strong>Claude (Anthropic)</strong> para <strong>organizar las respuestas que elaboré para las seis caras según la estructura de la guía, revisar la ubicación de las citas y el formato de las referencias conforme a las normas APA 7, y construir la página web interactiva del cubo</strong>. La empleé durante las etapas de <strong>organización del contenido, revisión de formato y diseño digital</strong>.</p>
  <p>Verifiqué la información mediante <strong>las lecturas y documentos de Moodle de las semanas 3 y 4 (Sepúlveda-Kattan, 2021; Peláez Córdoba, 2023; Restrepo-Restrepo, 2022; Peralta Espinosa, 2021; MEN, s.f.; Presidencia de la República de Colombia, 2022)</strong>, y el contenido de cada cara corresponde a mi comprensión de los temas.</p>
  <p class="nota">La IA no se presenta como fuente bibliográfica.</p>
`;
