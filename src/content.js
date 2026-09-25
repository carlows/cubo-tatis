// Contenido del cubo. Todo el texto académico vive aquí para poder editarlo
// sin tocar la lógica 3D. `resumen` se muestra sobre la cara del cubo;
// `html` es el desarrollo completo que se abre al tocar la cara.

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
      'De “objeto de cuidado” a sujeto de derechos y actor social',
      'Del asistencialismo a la atención integral',
      'Preescolar → educación inicial → atención integral',
      'Hitos: Ley 115 de 1994 y Ley 1804 de 2016',
    ],
    html: `
      <p>Durante las semanas 3 y 4 estudiamos un mismo proceso visto desde dos lados: <strong>cómo ha cambiado la manera de entender a niñas y niños</strong> y <strong>cómo ha cambiado la educación que se les ofrece</strong> en Colombia y en la región.</p>

      <h3>Las concepciones de niño, niña e infancia</h3>
      <p>Durante buena parte del siglo XX la infancia se pensó como una etapa de carencia: el niño era un “adulto incompleto”, frágil, que debía ser alimentado, vigilado y protegido. Esa mirada dio origen a respuestas <em>asistencialistas</em>, centradas en suplir necesidades básicas. Hoy se reconoce que niñas y niños son <strong>sujetos de derechos</strong> —titulares de derechos desde que nacen, no cuando crecen— y <strong>actores sociales</strong> que piensan, opinan, participan y transforman los contextos donde viven. Además, se entiende que no existe <em>una</em> infancia sino <em>infancias</em>, marcadas por el territorio, la cultura, la clase social y la historia latinoamericana (Sepúlveda-Kattan, 2021; Peláez Córdoba, 2023).</p>

      <h3>La educación de la primera infancia</h3>
      <p>En Colombia, la atención empezó con asilos, salas cunas y programas de protección. Con la creación del <strong>ICBF (1968)</strong> se amplió la atención a familias y niños en condición de vulnerabilidad. Más tarde, el sistema educativo incorporó la <strong>educación preescolar</strong> (Decreto 088 de 1976; Decreto 1002 de 1984), luego el <strong>grado cero</strong> y, con la <strong>Ley 115 de 1994</strong>, un grado obligatorio de preescolar. La <strong>Ley 1098 de 2006</strong> estableció la protección integral y el derecho al desarrollo integral en la primera infancia; la estrategia <strong>De Cero a Siempre</strong> y la <strong>Ley 1804 de 2016</strong> la convirtieron en política de Estado, y el <strong>Decreto 1411 de 2022</strong> reglamentó la educación inicial como derecho.</p>

      <h3>Tres términos que no son sinónimos</h3>
      <ul>
        <li><strong>Educación preescolar:</strong> nivel del sistema educativo formal (prejardín, jardín y transición), ligado a la escuela.</li>
        <li><strong>Educación inicial:</strong> proceso pedagógico intencionado para niñas y niños de 0 a 6 años, con identidad propia, basado en el juego, el arte, la literatura y la exploración del medio.</li>
        <li><strong>Atención integral:</strong> conjunto articulado de acciones de salud, nutrición, protección, cultura y educación que garantizan el desarrollo integral; la educación inicial es una de ellas (Ley 1804, 2016).</li>
      </ul>
      <p class="nota">En síntesis: pasamos de <em>cuidar para sobrevivir</em> y <em>preparar para la escuela</em> a <em>educar y garantizar derechos</em> reconociendo a cada niña y niño como protagonista de su desarrollo.</p>
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
      'Asistencia/protección vs. sujetos de derechos',
      'Preescolar vs. inicial vs. atención integral',
      'Semejanzas, diferencias y transformaciones',
    ],
    html: `
      <h3>A. Semana 3 · Asistencia/protección vs. sujetos de derechos y actores sociales</h3>
      <div class="tabla-wrap"><table>
        <thead><tr><th></th><th>Mirada asistencial / protectora</th><th>Sujetos de derechos y actores sociales</th></tr></thead>
        <tbody>
          <tr><th>Imagen del niño</th><td>Ser incompleto, dependiente, “menor”.</td><td>Persona completa en el presente, con capacidades, voz y agencia.</td></tr>
          <tr><th>Papel del adulto</th><td>Decide por el niño; lo resguarda.</td><td>Garante de derechos; escucha y acompaña la autonomía progresiva.</td></tr>
          <tr><th>Participación</th><td>Casi inexistente; el niño recibe.</td><td>Derecho a opinar y a ser tenido en cuenta según su edad y madurez.</td></tr>
          <tr><th>Origen de la acción</th><td>Caridad, beneficencia, situación irregular.</td><td>Obligación del Estado, la familia y la sociedad (corresponsabilidad).</td></tr>
        </tbody>
      </table></div>
      <p><strong>Semejanza:</strong> ambas miradas reconocen que la infancia necesita cuidado y protección especial. <strong>Diferencia:</strong> en la primera, la protección se impone desde afuera; en la segunda, protección y participación van juntas. <strong>Transformación:</strong> el cuidado no desaparece, se resignifica: pasa de ser un fin en sí mismo a ser un derecho que se garantiza <em>con</em> los niños y no solo <em>para</em> ellos (Sepúlveda-Kattan, 2021).</p>

      <h3>B. Semana 4 · Preescolar, educación inicial y atención integral</h3>
      <div class="tabla-wrap"><table>
        <thead><tr><th></th><th>Educación preescolar</th><th>Educación inicial</th><th>Atención integral</th></tr></thead>
        <tbody>
          <tr><th>Qué es</th><td>Nivel del sistema educativo formal.</td><td>Proceso pedagógico intencionado, permanente y estructurado.</td><td>Conjunto de acciones intersectoriales que aseguran el desarrollo integral.</td></tr>
          <tr><th>Edades</th><td>3 a 5 años (prejardín, jardín, transición).</td><td>Desde la gestación hasta los 6 años.</td><td>Desde la gestación hasta los 6 años (y continuidad posterior).</td></tr>
          <tr><th>Norma clave</th><td>Ley 115 de 1994.</td><td>Ley 1804 de 2016; Decreto 1411 de 2022.</td><td>Ley 1098 de 2006; Ley 1804 de 2016.</td></tr>
          <tr><th>Quién actúa</th><td>Instituciones educativas.</td><td>Maestras/os, agentes educativos, CDI, jardines, hogares.</td><td>Educación, salud, ICBF, cultura, familia y comunidad.</td></tr>
          <tr><th>Riesgo</th><td>Escolarizar y adelantar la primaria.</td><td>Confundirse con cuidado o con aprestamiento.</td><td>Fragmentar las atenciones si no hay articulación.</td></tr>
        </tbody>
      </table></div>
      <p><strong>Semejanzas:</strong> los tres buscan el desarrollo de niñas y niños y comparten la idea de que la primera infancia es decisiva. <strong>Diferencias:</strong> el preescolar se define por su lugar en la escuela; la educación inicial, por su sentido pedagógico propio; la atención integral, por la articulación de sectores. <strong>Relación y transformación:</strong> no se reemplazan, se contienen: la atención integral incluye a la educación inicial, y el grado de transición debe dialogar con ella para garantizar tránsitos armónicos hacia la básica (Restrepo-Restrepo, 2022).</p>
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
      'Autora: Sepúlveda-Kattan · Peláez Córdoba',
      'Pedagogos: Montessori y Dewey',
      'ICBF · Agustín Nieto Caballero',
      'Ley 1804 · Decreto 1411 · Chile',
    ],
    html: `
      <p>Cada relación conecta un concepto con un referente y explica <em>por qué</em> ese referente ayuda a comprenderlo o transformarlo.</p>
      <ul class="asociaciones">
        <li><span class="tag">Autor contemporáneo (S3)</span><strong>Infancias situadas ↔ Sepúlveda-Kattan (2021).</strong> Su análisis social de las infancias latinoamericanas permite entender que la desigualdad, la migración o la ruralidad producen formas distintas de vivir la infancia; por eso no se puede educar con un modelo único.</li>
        <li><span class="tag">Autor contemporáneo (S3)</span><strong>Agencia infantil ↔ Peláez Córdoba (2023).</strong> Relaciona la agencia de niñas y niños con la cultura y el territorio colombiano: el niño actúa y aporta a su comunidad, lo que respalda la idea de actor social.</li>
        <li><span class="tag">Pedagogo histórico (S4)</span><strong>Autonomía progresiva ↔ María Montessori.</strong> El ambiente preparado y la libertad con límites anticipan lo que hoy llamamos autonomía progresiva: el adulto organiza el entorno para que el niño decida y actúe por sí mismo.</li>
        <li><span class="tag">Pedagogo histórico (S4)</span><strong>Participación ↔ John Dewey.</strong> Su idea de “aprender haciendo” y de la escuela como experiencia democrática se conecta con la voz y la participación infantil: se aprende a participar participando.</li>
        <li><span class="tag">Pedagogo histórico (S4)</span><strong>Juego como actividad rectora ↔ Friedrich Fröbel y Ovide Decroly.</strong> Fröbel dio valor educativo al juego con el kindergarten; Decroly propuso los centros de interés. Ambos sustentan que la educación inicial parte de los intereses del niño y no de asignaturas.</li>
        <li><span class="tag">Actor colombiano</span><strong>Escuela Activa ↔ Agustín Nieto Caballero.</strong> Con el Gimnasio Moderno (1914) apropió en Colombia las ideas de Decroly y la Escuela Nueva: el niño como centro del proceso, lo que abrió camino a una pedagogía no memorística.</li>
        <li><span class="tag">Institución colombiana</span><strong>Del asistencialismo a la atención integral ↔ ICBF.</strong> Nació (1968) con un enfoque de protección y nutrición; con el tiempo sus modalidades (hogares comunitarios, CDI) se integraron a la estrategia De Cero a Siempre, mostrando la transición de asistir a garantizar derechos.</li>
        <li><span class="tag">Norma</span><strong>Educación inicial como derecho ↔ Ley 1804 de 2016.</strong> Convierte De Cero a Siempre en política de Estado y define la educación inicial como proceso pedagógico con identidad propia dentro de la atención integral.</li>
        <li><span class="tag">Norma</span><strong>Calidad y garantía ↔ Decreto 1411 de 2022.</strong> Reglamenta la prestación de la educación inicial, lo que obliga a que deje de ser un “programa” y se garantice como derecho de niñas y niños menores de seis años.</li>
        <li><span class="tag">País latinoamericano</span><strong>Currículo propio para la primera infancia ↔ Chile.</strong> Las Bases Curriculares de la Educación Parvularia y la creación de una Subsecretaría específica muestran otro camino regional para dar identidad pedagógica al nivel; Peralta Espinosa (2021) invita a este diálogo curricular latinoamericano. También Uruguay (Plan CAIF) articula educación, salud y familia.</li>
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
      'Dimensiones: histórica, pedagógica, institucional',
      'Normativa y de política pública · Latinoamericana',
      'Tres relaciones de causa, transformación y continuidad',
    ],
    html: `
      <h3>Dimensiones de la transformación</h3>
      <dl class="dimensiones">
        <dt>Histórica</dt>
        <dd>Urbanización, trabajo femenino y pobreza crearon, a mediados del siglo XX, la necesidad de lugares donde cuidar a los niños. La respuesta inicial fue asistencial porque el problema se leyó como carencia.</dd>
        <dt>Pedagógica</dt>
        <dd>Fröbel, Montessori, Decroly y Dewey pusieron al niño en el centro del aprendizaje. En Colombia, Agustín Nieto Caballero trajo esas ideas con la Escuela Activa, sembrando la base de una pedagogía propia para la infancia.</dd>
        <dt>Institucional</dt>
        <dd>Del asilo y la sala cuna se pasó al ICBF, a los hogares comunitarios, al preescolar en la escuela y luego a los CDI y a la articulación intersectorial de De Cero a Siempre.</dd>
        <dt>Normativa y de política pública</dt>
        <dd>La Convención sobre los Derechos del Niño (1989), ratificada por Colombia en 1991, y la Constitución de 1991 (art. 44) cambiaron el marco. Siguieron la Ley 115 de 1994, la Ley 1098 de 2006, la Ley 1804 de 2016 y el Decreto 1411 de 2022.</dd>
        <dt>Latinoamericana</dt>
        <dd>Países como Chile, Uruguay, México y Ecuador construyeron currículos y sistemas para la primera infancia; el intercambio regional muestra que la identidad del nivel se construye desde la diversidad cultural de la región (Peralta Espinosa, 2021).</dd>
      </dl>

      <h3>Relaciones que explican el cambio</h3>
      <ol class="relaciones">
        <li><strong>Causa:</strong> la Convención de 1989 y la Constitución de 1991 → la Ley 1098 de 2006. Al reconocer los derechos de los niños como prevalentes, el Estado ya no podía seguir tratándolos desde la “situación irregular”; el Código de Infancia sustituyó el Código del Menor y trajo la protección integral.</li>
        <li><strong>Transformación:</strong> la experiencia fragmentada de programas (ICBF, preescolar escolar, salud por separado) → De Cero a Siempre y Ley 1804 de 2016. La evidencia de que las atenciones sueltas no garantizaban el desarrollo llevó a organizarlas alrededor del niño mediante la Ruta Integral de Atenciones.</li>
        <li><strong>Continuidad:</strong> las ideas de la Escuela Activa (juego, interés, experiencia) → las actividades rectoras de la educación inicial (juego, arte, literatura y exploración del medio). La política actual no inventa desde cero: retoma un siglo de pedagogía activa y le da estatus de derecho.</li>
        <li><strong>Tensión que permanece:</strong> la Ley 115 ubicó el preescolar dentro de la escuela, lo que favorece la cobertura pero mantiene el riesgo de “escolarizar” la infancia; por eso el Decreto 1411 de 2022 insiste en el sentido propio de la educación inicial (Restrepo-Restrepo, 2022).</li>
      </ol>
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
      'Situación: CDI con familias campesinas y migrantes',
      'Niñas y niños como participantes',
      'Cuidado + intención pedagógica',
      'Articulación con familia y comunidad',
    ],
    html: `
      <h3>La situación</h3>
      <p>En un Centro de Desarrollo Infantil de un municipio de Cundinamarca asisten 20 niñas y niños de 3 a 4 años, varios de familias campesinas y algunos de familias venezolanas migrantes. Las familias piden que “les enseñen las vocales y a escribir el nombre” para que lleguen preparados al colegio. En la jornada, el tiempo se va en rutinas de alimentación, aseo y descanso, y los niños casi no tienen espacios para proponer.</p>

      <h3>Cómo actuaría la licenciada</h3>
      <ul class="criterios">
        <li><span class="tag">Participantes</span>Abre asambleas cortas para preguntar a los niños qué les gustaría explorar. Surgen las gallinas de la finca de un compañero y las arepas que cocinan en casa. Sus ideas se convierten en el punto de partida del proyecto.</li>
        <li><span class="tag">Intencionalidad pedagógica</span>Planea experiencias con propósito claro (lenguaje oral, pensamiento, exploración del medio), usando el juego, el arte, la literatura y la exploración, y registra lo que observa para hacer seguimiento al desarrollo.</li>
        <li><span class="tag">Cuidado vs. acción educativa</span>No elimina las rutinas: las vuelve experiencias educativas. En el almuerzo los niños conversan, sirven, cuentan; en el aseo se promueve la autonomía. El cuidado es necesario, pero no es todo lo que ocurre en el CDI.</li>
        <li><span class="tag">Familia y comunidad</span>Explica a las familias que la lectura y la escritura se preparan con conversación, cuentos y juego, no con planas. Las invita a contar recetas y relatos de su región y de Venezuela; articula con el puesto de salud para el seguimiento nutricional.</li>
        <li><span class="tag">Pertinencia con el contexto</span>Usa elementos del territorio (semillas, animales, alimentos, canciones de ambos países) y reconoce la diversidad cultural del grupo como recurso, no como obstáculo.</li>
        <li><span class="tag">Identidad propia</span>Defiende que la educación inicial no es un “pre-colegio”: su meta es el desarrollo integral y el disfrute del presente, tal como plantean la Ley 1804 de 2016 y el Decreto 1411 de 2022.</li>
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
      'Tesis: identidad pedagógica propia',
      'Tres argumentos fundamentados',
      'Reto: escolarización y desigualdad territorial',
      'Conclusión',
    ],
    html: `
      <blockquote>“La educación infantil no puede reducirse al cuidado ni a la preparación para la primaria; requiere una identidad pedagógica propia y una atención articulada con las realidades de las infancias.”</blockquote>

      <h3>Tesis</h3>
      <p>Estoy de acuerdo con la afirmación. La educación infantil es un campo pedagógico con sentido propio: educa en el presente a niñas y niños que son sujetos de derechos, y solo puede cumplir ese propósito si se articula con la salud, la familia, la cultura y el territorio.</p>

      <h3>Argumentos</h3>
      <ol>
        <li><strong>Reducirla al cuidado niega que los niños son sujetos de derechos.</strong> Si solo se alimenta y se vigila, se vuelve a la lógica asistencial. La Ley 1098 de 2006 reconoce el derecho al desarrollo integral en la primera infancia y la Ley 1804 de 2016 define la educación inicial como un proceso pedagógico intencionado, no como custodia.</li>
        <li><strong>Reducirla a preparar para la primaria desconoce cómo aprenden los niños.</strong> Desde Fröbel, Montessori, Decroly y Dewey sabemos que la primera infancia aprende jugando, explorando y experimentando. Adelantar planas y contenidos escolares rompe con esa tradición y convierte la infancia en un tiempo de espera; la articulación con la básica debe hacerse cuidando los tránsitos, no anticipándolos (Restrepo-Restrepo, 2022).</li>
        <li><strong>Sin articulación con las realidades, la educación infantil no llega a todas las infancias.</strong> Las infancias latinoamericanas están atravesadas por desigualdad, ruralidad, conflicto y migración (Sepúlveda-Kattan, 2021). Una propuesta uniforme excluye; por eso la atención integral y el diálogo curricular con la cultura y el territorio (Peralta Espinosa, 2021; Peláez Córdoba, 2023) son condiciones de calidad.</li>
      </ol>

      <h3>Reto actual</h3>
      <p>En Colombia persisten brechas entre lo urbano y lo rural en el acceso y la calidad de la educación inicial, y en muchas instituciones el grado de transición sigue funcionando como “primero adelantado”. El reto es que la educación inicial llegue con calidad a los territorios rurales y dispersos sin perder su identidad frente a la presión por resultados escolares.</p>

      <h3>Conclusión</h3>
      <p>La historia muestra que avanzamos del asilo a la atención integral y del niño “menor” al niño sujeto de derechos. Mantener ese avance exige licenciadas y licenciados que defiendan la especificidad pedagógica del nivel, escuchen a los niños y trabajen de la mano con familias y comunidades.</p>
    `,
  },
];

// Referencias APA 7. Las fuentes de Moodle tienen campos entre corchetes que
// deben completarse con los datos exactos de cada lectura.
export const referencias = [
  'Congreso de la República de Colombia. (1994, 8 de febrero). <em>Ley 115 de 1994, por la cual se expide la Ley General de Educación</em>. Diario Oficial No. 41.214.',
  'Congreso de la República de Colombia. (2006, 8 de noviembre). <em>Ley 1098 de 2006, por la cual se expide el Código de la Infancia y la Adolescencia</em>. Diario Oficial No. 46.446.',
  'Congreso de la República de Colombia. (2016, 2 de agosto). <em>Ley 1804 de 2016, por la cual se establece la política de Estado para el Desarrollo Integral de la Primera Infancia de Cero a Siempre y se dictan otras disposiciones</em>. Diario Oficial No. 49.953.',
  'Ministerio de Educación Nacional. (2014). <em>El sentido de la educación inicial</em> (Serie de orientaciones pedagógicas para la educación inicial en el marco de la atención integral, Documento No. 20). MEN.',
  'Ministerio de Educación Nacional. (2022). <em>Decreto 1411 de 2022, por el cual se subroga la Sección 2 del Capítulo 1, Título 3, Parte 3, Libro 2 del Decreto 1075 de 2015 y se reglamenta la prestación del servicio de educación inicial</em>. MEN.',
  'Peláez Córdoba, [Inicial]. (2023). <em>[Título del artículo]</em>. <em>[Nombre de la revista]</em>, <em>[volumen]</em>([número]), [páginas]. [DOI o URL]',
  'Peralta Espinosa, M. V. (2021). <em>[Título del artículo o libro]</em>. <em>[Revista o editorial]</em>. [DOI o URL]',
  'Restrepo-Restrepo, [Inicial]. (2022). <em>[Título del artículo]</em>. <em>[Nombre de la revista]</em>, <em>[volumen]</em>([número]), [páginas]. [DOI o URL]',
  'Sepúlveda-Kattan, [Inicial]. (2021). <em>[Título del artículo]</em>. <em>[Nombre de la revista]</em>, <em>[volumen]</em>([número]), [páginas]. [DOI o URL]',
];

