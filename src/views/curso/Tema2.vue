<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Características y tipos de juegos y recreación'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in")
        .col-lg-8

          p(data-aos="fade-left").mb-4 Para iniciar este apartado, les invitamos a escuchar la siguiente conferencia sobre los elementos del juego en la educación infantil:



          .bg-color-white.shadow-soft.py-4.px-lg-5.mb-4
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/bg-icono-video.svg", style="width: 90px;")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Jugar y enseñar a jugar
                    p Para profundizar en el tema de jugar y enseñar a jugar, se recomienda ver el siguiente video:
                  .col-sm-auto
                    a.boton.color-secundario(href="https://www.youtube.com/watch?v=uuBw6oQIVQU" target="_blank")
                      span Ver video
                      i.fas.fa-arrow-right
          
      
          .bg-color-1.p-4(data-aos="fade-left")
            p.mb-0 El juego es una actividad motriz y natural en niños y jóvenes. A través de él, se realizan movimientos instintivos y se emplea la energía de forma espontánea, lo que contribuye al desarrollo integral de la persona (García Fernández, 2016). Se considera la ocupación normal del niño, comparable al trabajo en el adulto. Para la infancia, es una actividad seria; para el joven, una distracción placentera; y para el adulto, una forma de desconexión.
      

      p(data-aos="fade-left").mb-4 Desde una perspectiva educativa, el juego favorece el desarrollo cognitivo, motriz y afectivo, facilita la socialización y la interacción con el entorno, estimula la creatividad y la imaginación, y predice patrones de comportamiento futuro a partir de la manera en que los niños juegan.

      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Características del juego

          
          
      p(data-aos="fade-left").mb-4 Según García Fernández (2016), el juego presenta las siguientes características:


      .bg-full-width-2.bg-fondo-4
        .px-4.px-md-5


          .row.align-items-center.mb-5
            .col-lg-8.order-2.order-lg-1

          
              LineaTiempoD.color-primario.large(data-aos="fade-right")
                div(numero="1" titulo="Actividad libre y voluntaria")
                  p Nadie está obligado a jugar, surge del deseo del participante.

                  p #[strong Ejemplo:] Un niño decide si jugar al fútbol en el recreo o leer un libro.

                div(numero="2" titulo="Limitaciones espaciales y temporales")
                  p Los juegos suelen tener un espacio y un tiempo delimitados.

                  p #[strong Ejemplo:] Un partido de fútbol tiene un campo específico y un tiempo establecido.

                div(numero="3" titulo="Carácter incierto y creativo")
                  p Su resultado es impredecible, lo que lo hace emocionante y espontáneo.

                  p #[strong Ejemplo:] En un juego de cartas, no se sabe qué cartas tocarán a cada jugador.

                div(numero="4" titulo="Puro y gratuito")
                  p Se juega por el placer de jugar, sin un objetivo externo.

                  p #[strong Ejemplo:] Un niño inventa historias con sus muñecos sin esperar recompensa.

                div(numero="5" titulo="Ficticio")
                  p Crea un mundo imaginario diferente a la vida cotidiana.

                  p #[strong Ejemplo:] Un grupo de niños juega a ser piratas con un barco imaginario.

                div(numero="6" titulo="Convencional")
                  p En juegos colectivos, se establecen reglas de común acuerdo.

                  p #[strong Ejemplo:] Un grupo de amigos decide las reglas de un partido de baloncesto.
              
            .col-lg-4.order-1.order-lg-2
              figure
                img(src="@/assets/curso/tema2/2.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      

          .row.align-items-center.justify-content-around.mb-5
            .col-lg-9

              .bg-color-white.shadow-soft.py-4.px-lg-5
                .row.justify-content-around.align-items-center
                  .col-md-auto
                    img(src="@/assets/template/bg-icono-link.svg", style="width: 90px;")
                  .col
                    .row.justify-content-between.align-items-center
                      .col.mb-3.mb-sm-0
                        h3.mb-1 El juego como estrategia didáctica para fortalecer el pensamiento lógico-matemático
                        p Para profundizar en el uso del juego como estrategia didáctica, se recomienda consultar el siguiente artículo: 
                      .col-sm-auto
                        a.boton.color-acento-botones.texto-blanco(href="https://ojs.unipamplona.edu.co/index.php/cie/article/download/1503/6888" target="_blank")
                          span Ir al sitio
                          i.fas.fa-arrow-right
              

      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Tipos de juegos
      
      p(data-aos="fade-left").mb-4 Existen diversas clasificaciones del juego. García Fernández (2016) plantea las siguientes:


      .bg-full-width.bg-fondo-2
        .px-4.px-md-5.pb-md-3
          .row.justify-content-center.mb-5
            .col-lg-4
              figure
                img(src='@/assets/curso/tema2/3.png', alt='')
      

            .col-lg-8

      
              SlyderF(columnas="col-12 col-lg-6")
                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema2/4.svg' alt='Juego libre' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Juego libre
                  p.text-center No sigue reglas fijas, los niños deciden cómo jugar.
                  p.text-center #[strong Ejemplo:] Construcción de un castillo de arena sin instrucciones.

                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema2/5.svg' alt='Juego de reglas' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Juego de reglas
                  p.text-center Posee normas establecidas para organizar la actividad.
                  p.text-center #[strong Ejemplo:] Un partido de fútbol con reglas oficiales.

                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema2/6.svg' alt='Juego espontáneo' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Juego espontáneo
                  p.text-center Surge de los propios intereses de los participantes.
                  p.text-center #[strong Ejemplo:] Un niño encuentra una caja y la usa como coche imaginario.

                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema2/7.svg' alt='Juego dirigido' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Juego dirigido
                  p.text-center Tiene un mediador que establece reglas y objetivos.
                  p.text-center #[strong Ejemplo:] Un profesor organiza una sesión de juegos cooperativos.

                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema2/8.svg' alt='Juego simbólico' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Juego simbólico
                  p.text-center Los participantes representan situaciones reales o ficticias.
                  p.text-center #[strong Ejemplo:] Niños jugando a la casita asumiendo roles familiares.

                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema2/9.svg' alt='Juego creativo' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Juego creativo
                  p.text-center Estimula la capacidad de inventar y diseñar algo nuevo.
                  p.text-center #[strong Ejemplo:] Un niño construye una maqueta con materiales reciclados.

                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema2/10.svg' alt='Juego imaginativo' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Juego imaginativo
                  p.text-center Se basa en la fantasía y la representación de imágenes mentales.
                  p.text-center #[strong Ejemplo:] Un niño juega a ser un superhéroe que salva el mundo.

                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema2/11.svg' alt='Juego sensomotor' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Juego sensomotor
                  p.text-center Estimula los sentidos mediante la exploración y el movimiento.
                  p.text-center #[strong Ejemplo:] Un bebé toca diferentes texturas y explora objetos.

                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema2/12.svg' alt='Juego psicomotor' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Juego psicomotor
                  p.text-center Requiere coordinación entre movimiento y pensamiento.
                  p.text-center #[strong Ejemplo:] Un niño construye torres de bloques equilibrándolos.

                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema2/13.svg' alt='Juego de ritmo' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Juego de ritmo
                  p.text-center Sigue patrones de sonidos y movimientos.
                  p.text-center #[strong Ejemplo:] Niñas jugando a las palmadas con una secuencia rítmica.

                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema2/14.svg' alt='Juego con música' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Juego con música
                  p.text-center Se acompaña de sonidos o canciones.
                  p.text-center #[strong Ejemplo:] Niños jugando al limbo con música de fondo.

                .bg-color-white.p-4.h-100.shadow-app.bordes
                  img(src='@/assets/curso/tema2/15.svg' alt='Juego de construcción' style="max-width: 90px").mx-auto.mb-3
                  h4.text-center.mb-4 Juego de construcción
                  p.text-center Implica manipular objetos para crear estructuras.
                  p.text-center #[strong Ejemplo:] Construcción de casas con bloques de madera.

      P El juego varía según la etapa de vida en la que se encuentre el individuo. Se pueden identificar diferentes enfoques según la edad y los intereses de los participantes.


      .bg-full-width.bg-color-info.mb-5
        .p-4.p-md-5
          .row.justify-content-center.align-items-center.mb-5
            .col-lg-10
              ImagenInfografica.color-secundario
                template(v-slot:imagen)
                  figure
                    img(src='@/assets/curso/tema2/info1.png', alt='', style="max-width: 642px;").mx-auto
      
                .bg-color-white.box-shadow.p-3(x="42%" y="9%" numero="1")
                  h5 Juego infantil (0-12 años)
                  p Predomina la imaginación y la fantasía. Ejemplo: Un niño juega con muñecos asumiendo distintos roles.
      
                .bg-color-white.box-shadow.p-3(x="71%" y="38%" numero="2")
                  h5 Juego de jóvenes (12-18 años)
                  p Se orienta a la competencia y la demostración de habilidades. Ejemplo: Un partido de baloncesto entre adolescentes.
      
                .bg-color-white.box-shadow.p-3(x="59%" y="80%" numero="3")
                  h5 Juego de adultos (18-60 años)
                  p Puede incluir competencia, pero su fin es el ocio y la relajación. Ejemplo: Un grupo de amigos juega cartas.
      
                .bg-color-white.box-shadow.p-3(x="29%" y="55%" numero="4")
                  h5 Juego en la senectud (+60 años)
                  p Se prioriza la interacción social sobre la actividad física. Ejemplo: Un grupo de adultos mayores juega al dominó.
      


      .row.justify-content-center.align-items-center.mb-5
        .col-lg-9
          .bg-color-white.shadow-soft.py-4.px-lg-5
            .row.justify-content-around.align-items-center
              .col-md-auto
                img(src="@/assets/template/bg-icono-link.svg", style="width: 90px;")
              .col
                .row.justify-content-between.align-items-center
                  .col.mb-3.mb-sm-0
                    h3.mb-1 Tipos de juego
                    p A continuación, se recomienda consultar el siguiente sitio web para profundizar en otros tipos de juego:

                  .col-sm-auto
                    a.boton.color-acento-botones.texto-blanco(href="https://nuevaescuelamexicana.org/tipos-de-juego/" target="_blank")
                      span Ir al sitio
                      i.fas.fa-arrow-right



      .bg-full-width.bg-color-3
        .p-4.p-md-5
          p.mb-0 El juego no es solo una actividad recreativa, sino una herramienta fundamental en el desarrollo infantil. Su práctica fomenta el aprendizaje, la creatividad y la socialización, además de contribuir al bienestar físico y emocional. Su influencia se extiende a lo largo de la vida, proporcionando beneficios en cada etapa del desarrollo.
      
      

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
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
