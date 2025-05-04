export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad: 'El juego vs la recreación',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo:
          'Objetivos y reglas de los diferentes tipos de juegos (Doc. 22 MEN)',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Reconocer el juego como un derecho fundamental de los niños y las niñas',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Orientar a los educadores sobre la importancia del juego en el desarrollo integral de la infancia',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Proponer estrategias pedagógicas para incorporar el juego en el currículo de la educación inicial',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Reglas de los diferentes tipos de juegos',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Características y tipos de juegos y recreación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Características del juego',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de juegos',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          'Características, clasificación y pasos que se deben tener en cuenta para elaborar un juego didáctico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Características y clasificación',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Pasos para elaborar un juego didáctico',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Los juguetes como juego didáctico',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Aruiz. (24 de enero, 2020,) Los juguetes educativos y su importancia para el desarrollo de los niños. Educación y Consejos - Web del maestro.',
      link:
        'https://webdelmaestro.com/educacion/los-juguetes-educativos-y-su-importancia-para-el-desarrollo-de-los-ninos/',
    },
    {
      referencia:
        'Ángel Valencia, D., Arango Arango, C. M., Arboleda Torres, M. A., Bedoya Arteaga, L. D., Buitrago Marín, L., Burgos Echeverry, G. S., ... & Yalí Giraldo, W. S. (2023). El juego y los juguetes como aproximación a la alfabetización en educación infantil.',
      link:
        'https://dspace.tdea.edu.co/bitstream/handle/tdea/4913/El%20juego%20y%20los%20juguetes%20como%20aproximaci%C3%B3n%20a%20la%20alfabetizaci%C3%B3n%20en%20educaci%C3%B3n%20infantil.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Bautista Vallejo. (2002) El juego didáctico como estrategia de atención a la diversidad. Revista Científica Universitaria Electrónica.',
      link:
        'https://www.researchgate.net/publication/28073772_El_juego_didactico_como_estrategia_de_atencion_a_la_diversidad',
    },
    {
      referencia:
        'Bálsamo Estévez, M. G. (2022). Teoría psicogenética de Jean Piaget: Aportes para comprender al niño de hoy que será el adulto del mañana.',
      link:
        'https://repositorio.uca.edu.ar/bitstream/123456789/13496/1/teor%C3%ADa-psicogen%C3%A9tica-jean-piaget.pdf',
    },
    {
      referencia:
        'Biggs, J. (2003) Enseñar para un aprendizaje de calidad en la universidad. Editorial: SRHE y Open University Press.',
      link:
        'https://www.researchgate.net/publication/215915395_Teaching_for_Quality_Learning_at_University',
    },
    {
      referencia:
        'Calderón, G. E. C. (2021). Las actividades lúdicas para el aprendizaje. Polo del Conocimiento: Revista científico-profesional, 6(4), 861-878.',
      link: 'https://dialnet.unirioja.es/descarga/articulo/7926973.pdf',
    },
    {
      referencia:
        'De La Cruz Ramirez De Ramirez, E., De La Rosa Soto, E. L., & Paniagua García, C. (2024). Estrategia lúdica para desarrollar la lectoescritura en estudiantes de 5 años en una institución educativa, San Juan de la Maguana.',
      link:
        'https://repositorio.usil.edu.pe/bitstreams/d9604906-347b-43d7-9a16-0af095c733a7/download',
    },
    {
      referencia:
        'Flores Atusparia, F. V., & Salazar Yaipen, K. D. (2024). Uso de material educativo concreto para mejorar la capacidad de resolución de problemas, en el área de matemáticas en los estudiantes del segundo grado de educación secundaria de la IE Agropecuario Yautan-2023.',
      link:
        'https://repositorio.uns.edu.pe/bitstream/handle/20.500.14278/4825/Tesis%20Flores%20-%20Salazar.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia: 'LaHistoria. (s.f.). Historia de los Juguetes.',
      link: 'https://lahistoria.info/historia-de-los-juguetes/',
    },
    {
      referencia:
        'García Fernández, P. (2016). Fundamentos teóricos del juego: ( ed.). Wanceulen Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/33693?page=14',
    },
    {
      referencia:
        'Ministerio de Educación Nacional de Colombia. (2014). El juego en la educación inicial.',
      link:
        'https://www.mineducacion.gov.co/1780/articles-341880_archivo_pdf_doc_22.pdf',
    },
    {
      referencia: 'Aisenstein, Á. (2002). El deporte: ( ed.). Miño y Dávila.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/36259?page=2',
    },
    {
      referencia:
        'Carbonero Celis, C. (2018). Educación física: temario resumido de oposiciones de educación física (LOMCE): ( ed.). Wanceulen Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/63483?page=17',
    },
    {
      referencia:
        'Ministerio de Educación Nacional de Colombia. (2010) Orientaciones Pedagógicas para la Educación Física, Recreación y Deporte',
      link:
        'https://mineducacion.gov.co/1621/articles-241887_archivo_pdf_evaluacion.pdf',
    },
    {
      referencia:
        'Aldana Gómez, P. J., & Cardona Cardona, M. A. (2016). La recreación como estrategia de enseñanza-aprendizaje para el fortalecimiento de las dimensiones del desarrollo humano.',
      link:
        'http://repository.pedagogica.edu.co/bitstream/handle/20.500.12209/2991/TE-19329.pdf?',
    },
    {
      referencia:
        'Sánchez, F., & Sicilia, A. (2015). La educación física en el siglo XXI: Retos y perspectivas. Revista de Educación, 368, 13-38.',
      link:
        'https://redglobalefyd.org/web/wp-content/uploads/2018/09/Descubre.pdf',
    },
    {
      referencia:
        'Losada Gómez, A. (2009). Características de los juegos y juguetes utilizados por terapia ocupacional en niños con discapacidad: ( ed.). Universidad Manuela Beltrán.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/24942?page=4',
    },
    {
      referencia:
        'Real Academia Española. (s. f.). Juguete. En Diccionario de la lengua española (23.ª ed.).',
      link: 'https://dle.rae.es/juguete',
    },
    {
      referencia:
        'Rios, K. P., & Ibarra, M. E. U. (2024). Vocación, Motivación y Buenas Prácticas Docentes con el uso de la tecnología en el aprendizaje para la modalidad escolarizada. Dilemas contemporáneos: Educación, Política y Valores.',
      link:
        'https://dilemascontemporaneoseducacionpoliticayvalores.com/index.php/dilemas/article/download/4137/4029/',
    },
    {
      referencia:
        'Serifer. (14 de agosto, 2020). Juego Didáctico o Educativo. EDUCOTECA - educación infantil, primaria, especial, juegos infantiles y mucho más.',
      link: 'https://educoteca.es/el-juego-didactico-o-educativo',
    },
    {
      referencia:
        'Aldana, G. C Cardona, M. (2016). La recreación como estrategia de enseñanza-aprendizaje para el Fortalecimiento de las dimensiones del desarrollo humano. Universidad Pedagógica Nacional.',
      link:
        'http://repository.pedagogica.edu.co/bitstream/handle/20.500.12209/2991/TE-19329.pdf',
    },
    {
      referencia:
        'Lema, A.R. Machado, C.L.A (2013). La recreación y el juego como intervención educativa. Instituto Universitario Asociación Cristiana De Jóvenes, Facultad de Educación Física. Capítulo IV.',
      link:
        'https://1library.co/es/docs/la-recreaci%C3%B3n-y-el-juego-como-intervenci%C3%B3n-educativa.12489132',
    },
    {
      referencia:
        'García Fernández, P. (2016). Fundamentos teóricos del juego: ( ed.). Wanceulen Editorial.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/33693?page=14',
    },
  ],
  glosario: [
    {
      termino: 'Didáctico',
      significado:
        'se aplica a aquello que tiene la finalidad de enseñar o instruir. En el contexto de los juegos, un juego didáctico busca transmitir conocimientos, habilidades o valores de manera entretenida.',
    },
    {
      termino: 'Expresión corporal',
      significado:
        'es la manifestación de emociones, ideas y sentimientos a través del cuerpo, mediante gestos, posturas, movimientos, etc. Es una forma de comunicación no verbal fundamental en la educación física y la recreación.',
    },
    {
      termino: 'Juego',
      significado:
        'actividad lúdica, libre y voluntaria, que se realiza por placer y que contribuye al desarrollo físico, social, emocional e intelectual de las personas. Los juegos pueden tener reglas o ser libres, y pueden ser de diversos tipos (de mesa, deportivos, simbólicos, etc.).',
    },
    {
      termino: 'Lúdica',
      significado:
        'dimensión del ser humano relacionada con el placer, la diversión y el entretenimiento. La lúdica se manifiesta a través del juego, la recreación y otras actividades que generan disfrute y bienestar.',
    },
    {
      termino: 'Motricidad',
      significado:
        'capacidad de movimiento y control del cuerpo. La motricidad se desarrolla a través de la actividad física y el juego, y es fundamental para la autonomía y el desarrollo integral de las personas.',
    },
    {
      termino: 'Recreación',
      significado:
        'actividad libre y voluntaria que se realiza en el tiempo libre con el fin de divertirse, relajarse y desarrollarse personal y socialmente. La recreación puede incluir juegos, deportes, actividades al aire libre, hobbies, etc.',
    },
    {
      termino: 'Reglas',
      significado:
        'normas que rigen un juego o actividad. Las reglas establecen los límites y las condiciones de participación, y garantizan la equidad y el orden en el desarrollo de la actividad.',
    },
    {
      termino: 'Sensorial',
      significado:
        'relacionado con los sentidos y la percepción. Los juegos sensoriales estimulan los sentidos y ayudan a desarrollar la capacidad de percepción y exploración del entorno.',
    },
    {
      termino: 'Socialización',
      significado:
        'proceso mediante el cual las personas aprenden y internalizan las normas, valores y comportamientos de una sociedad. El juego y la recreación son espacios importantes de socialización, ya que fomentan la interacción, la cooperación y el respeto entre las personas.',
    },
    {
      termino: 'Valores',
      significado:
        'principios que orientan el comportamiento y las decisiones de las personas. La educación física, la recreación y el deporte pueden contribuir a la transmisión y el desarrollo de valores como el respeto, la responsabilidad, la cooperación, la honestidad, etc.',
    },
  ],
}
