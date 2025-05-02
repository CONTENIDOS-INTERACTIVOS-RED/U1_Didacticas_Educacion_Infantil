<template lang="pug">
.curso-main-container.introduccion
  BannerInterno(subTitulo="Introducción")
  .container.tarjeta.tarjeta--blanca.px-4.px-md-5.pt-4.pt-md-5

    .row.mb-5
      .col-lg-7
        .bg-color-1.px-4.py-5(data-aos="fade-left").mb-4
          p.mb-0 El juego es una herramienta fundamental en el desarrollo infantil, permitiendo a los niños explorar, aprender y fortalecer habilidades esenciales. Su integración en el currículo educativo no solo fomenta el aprendizaje, sino que también contribuye al desarrollo social y emocional de los estudiantes.
        
        p(data-aos="fade-left") Existen diferentes tipos de juegos con características y reglas específicas que se adaptan a las necesidades de los niños. Comprender su estructura permite a los educadores diseñar experiencias lúdicas que potencien el aprendizaje y la creatividad.
      .col-lg-5.d-none.d-sm-block
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in").mb-4.mb-lg-0


    .bg-full-width.image-out-bg
      .px-4.px-md-5
        .row.align-items-center
          .col-lg-auto
            img(src="@/assets/curso/intro/2.svg", style="max-width: 295px").mx-auto
          .col-lg
            .pt-4
              p.mb-3.text-white Más allá del entretenimiento, la recreación en el ámbito escolar favorece la convivencia, el pensamiento crítico y la formación integral. Su implementación requiere planificación, participación comunitaria y evaluación para generar un impacto positivo en los estudiantes.
    

    

</template>
<style lang="sass">
.image-out-bg
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
