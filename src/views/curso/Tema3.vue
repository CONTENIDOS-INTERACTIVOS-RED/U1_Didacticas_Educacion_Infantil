<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Características, clasificación y pasos que se deben tener en cuenta para elaborar un juego didáctico'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/1.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-3.p-4(data-aos="fade-left").mb-4
            p.mb-0 El juego es fundamental en la educación infantil, ya que facilita la transición del hogar a la escuela y forma parte del proceso de aprendizaje. A través del juego, los niños exploran, prueban y descubren el mundo, lo que les permite adaptarse a diversas situaciones. Además, satisface necesidades básicas como el ejercicio físico y la expresión emocional, contribuyendo al desarrollo de la inteligencia emocional y a la formación de habilidades sociales (Andrío, 2017).
      
          p(data-aos="fade-left").mb-4 A medida que los niños crecen, es un error pensar que deben abandonar el juego en favor de tareas más intelectuales. Muchas empresas han incorporado elementos lúdicos en sus metodologías de trabajo, demostrando que el juego sigue siendo valioso en la adultez. La capacidad de jugar permite a las personas crear un espacio de diversión y reconstruir su identidad, alejándose de las normas cotidianas que pueden limitar su libertad (Andrío, 2017).


      .bg-full-width.image-out-bg-4.mb-5
        .px-4.px-md-5
          .row.align-items-center

            .col-lg
              .pt-4
                p.mb-3 Ahora bien, ¿qué es un juego didáctico? Para Serifer (2020), los juegos didácticos potencian habilidades cognitivas, motrices, intelectuales y sociales. Se basan en conocimientos adquiridos en el proceso educativo y contribuyen al desarrollo de habilidades como la motricidad fina y gruesa, la atención, la memoria y la coordinación.

                p.mb-0 Los juegos educativos fomentan la motivación y convierten cualquier contenido en una experiencia atractiva. Un juego didáctico se define como una actividad estructurada con reglas claras y objetivos pedagógicos, diseñada para facilitar el aprendizaje mediante la diversión y la interacción.

            .col-lg-auto
              img(src="@/assets/curso/tema3/2.svg", style="max-width: 400px").mx-auto      


      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Características y clasificación

      
      p(data-aos="fade-left").mb-4 Los juegos didácticos pueden clasificarse en función del material y el espacio donde se desarrollan:

      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slide-1.png")
              .col-lg-7
                h4 Juegos educativos en línea
                p Se realizan a través de dispositivos electrónicos como computadoras, tabletas o teléfonos móviles. Pueden encontrarse en plataformas en línea o aplicaciones educativas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slide-2.png")
              .col-lg-7
                h4 Juegos educativos manipulativos
                p Involucran materiales físicos, como cartas, tableros y fichas, facilitando el aprendizaje práctico y participativo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slide-3.png")
              .col-lg-7
                h4 Juegos educativos motrices
                p Requieren el uso del cuerpo e incluyen actividades como correr, saltar y agacharse, contribuyendo al desarrollo físico.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slide-4.png")
              .col-lg-7
                h4 Juegos para la memoria
                p Diseñados para fortalecer la retención de información de forma lúdica y sin presión.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5
                figure
                  img(src="@/assets/curso/tema3/slide-5.png")
              .col-lg-7
                h4 Juegos para la atención
                p Enfocados en mejorar la concentración y la capacidad de enfoque en tareas específicas.

      .bg-full-width.bg-fondo-5.mb-5
        .p-4.p-md-5
          p(data-aos="fade-left").mb-4 Además, los juegos didácticos presentan ciertas características que los diferencian de otros tipos de juegos:


          .row.justify-content-center.align-items-stretch.mb-4
            .col-lg-4
              .bg-color-3.p-4(data-aos="fade-left").h-100
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5.mb-2 Finalidad educativa
                    p.mb-0 Están diseñados para enseñar conceptos o desarrollar habilidades.
          
            .col-lg-4
              .bg-color-3.p-4(data-aos="fade-left").h-100
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5.mb-2 Interactividad
                    p.mb-0 Requieren la participación activa de los jugadores.
          
            .col-lg-4
              .bg-color-3.p-4(data-aos="fade-left").h-100
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5.mb-2 Reglas claras
                    p.mb-0 Establecen normas que guían el desarrollo del juego.


          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-4
              .bg-color-3.p-4(data-aos="fade-left").h-100
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5.mb-2 Diversión y motivación
                    p.mb-0 Incorporan elementos lúdicos que mantienen el interés del estudiante.
          
            .col-lg-8
              .bg-color-3.p-4(data-aos="fade-left").h-100
                .row.align-items-center
                  .col-lg-auto
                    img(src="@/assets/curso/tema3/3.svg", style="max-width: 90px").mx-auto
                  .col-lg
                    h5.mb-2 Evaluación implícita
                    p.mb-0 Permiten medir el aprendizaje de manera natural y sin presión.


      .row.justify-content-center.align-items-center.mb-5(style="margin-top: -100px;")
        .col-lg-9
          .bg-color-white.shadow-soft.py-4.px-lg-5
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/bg-icono-video.svg", style="width: 90px;")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Gamificación en la educación
                    p Para profundizar en el uso del juego en educación, se recomienda ver el siguiente video:
                  .col-sm-auto
                    a.boton.color-secundario(href="https://www.youtube.com/watch?v=BqGj_XyKE_g" target="_blank")
                      span Ver video
                      i.fas.fa-arrow-right


      .bg-full-width.bg-fondo-5.mb-5
        .p-4.p-md-5
          #t_3_2.titulo-segundo(data-aos="flip-up")
            h2 #[span 3.2] Pasos para elaborar un juego didáctico

          
          p(data-aos="fade-left").mb-4 Elaborar un juego didáctico requiere planificación para garantizar su efectividad. Según Bautista Vallejo (2002), el diseño de un juego educativo debe seguir estos pasos:

          .row.align-items-start.mb-5
            .col-lg-8.order-2.order-lg-1

              AcordionA(tipo="b")
                .div(titulo="Definir el objetivo de aprendizaje")
                  p Identificar qué conocimientos o habilidades se reforzarán a través del juego. #[strong Ejemplo:] Un juego sobre ortografía puede centrarse en la correcta escritura de palabras difíciles.
              
                .div(titulo="Seleccionar el tipo de juego")
                  p Elegir el formato adecuado según la edad, recursos y complejidad del contenido. 
                  p #[strong Ejemplo:] 
                  ul.lista-ul.mb-3
                    li.mb-1
                      i.lista-ul__vineta
                      | Juego digital: "Kahoot" sobre matemáticas. 
                    li.mb-1
                      i.lista-ul__vineta
                      | Juego de mesa: cartas con eventos históricos. 
                    li.mb-1
                      i.lista-ul__vineta
                      | Juego físico: carrera de palabras. 
                    li.mb-1
                      i.lista-ul__vineta
                      | Juego de rol: simulación de un mercado.
              
                .div(titulo="Diseñar las reglas del juego")
                  p Definir normas claras y equitativas. #[strong Ejemplo:] En un juego de geografía, los jugadores avanzan en un mapa al responder preguntas correctamente.
              
                .div(titulo="Desarrollar los materiales del juego")
                  p Crear elementos físicos o digitales necesarios para la dinámica del juego. 
                  p #[strong Ejemplo:] En un juego de trivia científica:
                  ul.lista-ul.mb-3
                    li.mb-1
                      i.lista-ul__vineta
                      | Tarjetas con preguntas.
                    li.mb-1
                      i.lista-ul__vineta
                      | Tablero con casillas temáticas.
                    li.mb-1
                      i.lista-ul__vineta
                      | Fichas o fichas de colores.
                    li.mb-1
                      i.lista-ul__vineta
                      | Reloj de arena para medir el tiempo.

                .div(titulo="Realizar pruebas piloto")
                  p Aplicar el juego con un grupo reducido antes de su implementación total. #[strong Ejemplo:] En una prueba piloto de un juego de cálculo mental, se ajustó la dificultad de las preguntas.

              
            .col-lg-4.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema3/4.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
          
      
      .row.justify-content-center.align-items-center.mb-5(style="margin-top: -100px;")
        .col-lg-9
          .bg-color-white.shadow-soft.py-4.px-lg-5
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/bg-icono-link.svg", style="width: 90px;")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 El juego-trabajo como estrategia de enseñanza-aprendizaje en Educación Inicial
                    p Para profundizar en este tema, se recomienda consultar el siguiente artículo:
                  .col-sm-auto
                    a.boton.color-secundario(href="https://journal.espe.edu.ec/ojs/index.php/vinculos/article/download/1811/1820" target="_blank")
                      span Ir al sitio
                      i.fas.fa-arrow-right


      #t_3_3.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.3] Los juguetes como juego didáctico

      
      p.mb-4 Los juguetes pueden ser herramientas didácticas en el aula, ayudando a alcanzar objetivos educativos y a ambientar la introducción de nuevos contenidos.


      .bg-color-3.mb-5(data-aos="fade-up")
        .row.justify-content-center.align-items-center
          .col-lg-auto
            figure
              img(src='@/assets/curso/tema3/5.png', alt='')
          .col-lg
            .p-4
              p.mb-0(data-aos="fade-up") Según la RAE, un juguete es un objeto que los niños usan para jugar y desarrollar capacidades. Losada Gómez (2009) amplía esta definición, señalando que un juguete puede ser cualquier objeto, acontecimiento o experiencia que influya en el desarrollo infantil.
      
      
      p Existen distintos tipos de juguetes, que pueden clasificarse en tres niveles según Borja (1994):

      .bg-full-width.bg-fondo-6
        .p-4.p-md-5
          div.row.justify-content-center.align-items-stretch.mb-4
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/6.svg"
                  alt=""
                  style="width: 95px"
                )
                h4.text-center Juguete creado
                p.mb-0.text-center Hecho por los niños a partir de materiales simples, fomentando la creatividad.
          
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/6.svg"
                  alt=""
                  style="width: 95px"
                )
                h4.text-center Juguete instrumento
                p.mb-0.text-center Sirve como medio para facilitar la actividad lúdica y el aprendizaje.
          
            div.col-lg-4.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/6.svg"
                  alt=""
                  style="width: 95px"
                )
                h4.text-center Juguete producto industrial
                p.mb-0.text-center Diseñado y fabricado con un propósito educativo y recreativo.
          

          p.mb-4 Los juguetes educativos ofrecen múltiples beneficios:

          .row.align-items-stretch
            .col-lg-3
              .bg-color-1.p-4.h-100
                h4 01
                p.mb-0 Estimulan la creatividad y la imaginación.

            .col-lg-3
              .bg-color-1.p-4.h-100
                h4 02
                p.mb-0 Desarrollan habilidades motoras, cognitivas y emocionales.

            .col-lg-3
              .bg-color-1.p-4.h-100
                h4 03
                p.mb-0 Fomentan la autonomía y la autoconfianza.

            .col-lg-3
              .bg-color-1.p-4.h-100
                h4 04
                p.mb-0 Promueven el respeto y la sana competencia en juegos grupales.


      .bg-full-width.image-out-bg-5.mb-5
        .px-4.px-md-5
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/7.svg", style="max-width: 295px").mx-auto
            .col-lg
              .pt-4
                p.mb-3.text-white Aruiz (2020) sostiene que los juguetes educativos deben elegirse cuidadosamente para potenciar el aprendizaje. Dependiendo de la edad, es recomendable proporcionar juguetes que estimulen habilidades sensoriales, cognitivas y sociales.
      

      .bg-full-width.bg-fondo-6
        .p-4.p-md-5

          .row.justify-content-center.align-items-stretch.mb-5
            .col-lg-4.mb-4(data-aos="zoom-in-up")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/8.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center 1-3 años
                  p.mb-0.text-center Juguetes para desarrollar la capacidad sensorial y la coordinación viso-manual.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/9.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center 3-6 años
                  p.mb-0.text-center Juguetes que refuercen habilidades previas y fomenten la resolución de problemas.
            .col-lg-4.mb-4(data-aos="zoom-in-down")
              .custom-image-card-2.h-100
                img.custom-image-card__image(src="@/assets/curso/tema3/10.png" alt="")
                .custom-image-card__text.p-4
                  h5.mb-2.text-center 6+
                  p.mb-0.text-center Juguetes que incorporen conceptos de lectoescritura, matemáticas y cultura general.
          

      p En un mundo donde la educación evoluciona constantemente, integrar los juegos y juguetes en el aula es una estrategia efectiva para fomentar el desarrollo integral de los niños. La formación de los educadores en este aspecto es clave para aprovechar al máximo estos recursos y diseñar experiencias de aprendizaje más efectivas y motivadoras.

      .bg-full-width.bg-color-2
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-5
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema3/11.png', alt='')
      
            .col-lg-7
              h2.mb-4(data-aos="flip-up") Creación y diseño de una estructura de recreación
              p.mb-4(data-aos="fade-right") Los invitamos a leer Creación y diseño de una estructura de recreación, un enfoque innovador para transformar la convivencia escolar a través de la recreación. Este material explora la importancia de diseñar espacios recreativos que fomenten el aprendizaje, la interacción social y el bienestar estudiantil. 
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_2.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Creación y diseño de una estructura de recreación.
      

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://ojs.unipamplona.edu.co/index.php/cie/article/download/1503/6888" target="_blank" rel="noopener noreferrer") Peña, T. L. A., & Durán, N. Y. C. (2022). El juego como estrategia didáctica para fortalecer el pensamiento lógico matemático en escolares de básica primaria. Conocimiento, Investigación y Educación CIE, 2(15). 
  

  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=uuBw6oQIVQU" target="_blank" rel="noopener noreferrer") Uba, F. [@FFyL]. (18 de agosto, 2020). Jugar y enseñar a jugar.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál de los siguientes NO es un objetivo fundamental del juego según el documento 22 del MEN?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomentar la competencia desmedida entre los niños.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Promover el desarrollo integral de los niños.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Estimular la creatividad y la imaginación.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Favorecer la socialización y la cooperación.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Fomentar la competencia desmedida no es un objetivo fundamental del juego.',
            mensaje_incorrecto:
              'Incorrecto. Revisa los objetivos fundamentales del juego según el MEN.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes NO es una competencia que se busca desarrollar a través de la educación física, la recreación y el deporte según el documento 15 del MEN?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              { id: 'a', texto: 'Competencia motriz.', esCorrecta: false },
              { id: 'b', texto: 'Competencia lingüística.', esCorrecta: true },
              {
                id: 'c',
                texto: 'Competencia expresiva corporal.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Competencia axiológica corporal.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La competencia lingüística no es el foco principal en este contexto.',
            mensaje_incorrecto:
              'Incorrecto. Revisa las competencias que se desarrollan en educación física, recreación y deporte.',
          },
          {
            id: 3,
            texto:
              '¿Cuál de las siguientes NO es una característica esencial del juego?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Reglas (implícitas o explícitas).',
                esCorrecta: false,
              },
              { id: 'b', texto: 'Libertad.', esCorrecta: false },
              { id: 'c', texto: 'Intrínseca motivación.', esCorrecta: false },
              { id: 'd', texto: 'Obligatoriedad.', esCorrecta: true },
            ],
            mensaje_correcto:
              '¡Correcto! La obligatoriedad no es una característica esencial del juego.',
            mensaje_incorrecto:
              'Incorrecto. Revisa las características esenciales del juego.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de los siguientes es un paso fundamental en la elaboración de un juego didáctico?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Utilizar materiales complejos y difíciles de conseguir.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Diseñar el juego sin tener en cuenta el público objetivo.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Definir el tema y los objetivos de aprendizaje.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'No evaluar la efectividad del juego.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Definir el tema y los objetivos de aprendizaje es fundamental.',
            mensaje_incorrecto:
              'Incorrecto. Revisa los pasos fundamentales para elaborar un juego didáctico.',
          },
          {
            id: 5,
            texto:
              '¿Cuál de los siguientes elementos NO es esencial en el diseño de una estructura de recreación?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Definir los objetivos de la recreación.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Identificar los recursos disponibles.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Ignorar las necesidades e intereses de los participantes.',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Establecer un cronograma y un presupuesto.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Ignorar las necesidades e intereses de los participantes no es esencial.',
            mensaje_incorrecto:
              'Incorrecto. Revisa los elementos esenciales en el diseño de una estructura de recreación.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5

.image-out-bg-4
  position: relative
  &::after
    content: ''
    position: absolute
    bottom: 0%
    left: 0
    width: 100%
    height: 90%
    transform: translateY(-0%)
    background-color: #DCE8FA
    z-index: 0
  .col-lg-auto, .col-lg, .row
    z-index: 1


  @media screen and (max-width: bp-max-md)
    padding: 1rem

    &::after
      height: 100%


.image-out-bg-5
  position: relative
  &::after
    content: ''
    position: absolute
    bottom: 0%
    left: 0
    width: 100%
    height: 85%
    transform: translateY(-0%)
    background-color: #453179
    z-index: 0
  .col-lg-auto, .col-lg, .row
    z-index: 1


  @media screen and (max-width: bp-max-md)
    padding: 1rem

    &::after
      height: 100%
</style>
