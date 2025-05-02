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


          .row.justify-content-center.align-items-stretch.mb-4
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


      .row.justify-content-center.align-items-center.mb-5
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
                    a.boton.color-acento-botones.texto-blanco(href="https://www.youtube.com/watch?v=BqGj_XyKE_g" target="_blank")
                      span Ver video
                      i.fas.fa-arrow-right


      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Pasos para elaborar un juego didáctico

      
      p(data-aos="fade-left").mb-4 Elaborar un juego didáctico requiere planificación para garantizar su efectividad. Según Bautista Vallejo (2002), el diseño de un juego educativo debe seguir estos pasos:

      .row.align-items-center.mb-5
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
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
                span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.
  
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
              '¿Cuál de las siguientes es una característica fundamental de los derechos humanos?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Son temporales y cambiantes',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Son universales y aplican a todas las personas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Son exclusivos de ciertos grupos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Son opcionales',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones sobre la diversidad cultural es correcta?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Fomenta la homogeneización cultural',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Promueve el respeto y la aceptación de las diferencias',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Debilita la identidad cultural de los pueblos',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Limita las oportunidades de interacción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La mediación en un conflicto tiene como objetivo principal:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Imponer una solución rápida',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Facilitar el diálogo entre las partes',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Determinar la culpabilidad',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar las preocupaciones de una parte',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto: 'En un foro comunitario, es importante:',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Escuchar solo a las autoridades',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Fomentar la participación de todos los miembros',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Decidir por votación sin consultar a los demás',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Excluir las opiniones de los más jóvenes',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              '¿Qué busca la justicia restaurativa en el contexto de un conflicto?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aplicar una sanción severa',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Reparar el daño y restablecer las relaciones',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Castigar a las partes involucradas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Ignorar el contexto del conflicto',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
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
</style>
