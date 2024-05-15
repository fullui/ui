---
head:
  title: Maak kennis met fitness bij sportschool The Gym in Haren
  description: >-
    Wil jij nu eindelijk écht (weer) fit worden? Start met fitness met een
    Gratis Proefles bij The Gym Haren, de sportschool voor echt resultaat in
    Haren e.o..

body.main:
  hero_section:
    _: $sections/main-hero
    image.src: /assets/thegymharen-hero.jpg
    content_stack.heading.html: Maak kennis met <br> <span>The Gym</span> in Haren
    content_stack.paragraph.html: Dé sportschool voor en met echte persoonlijke begeleiding!
    button_stack.buttons:
      - html: Gratis proefles
        href: /contact/gratis-proefles/
      - _color: secondary
        html: Lidmaatschapstest
        href: /contact/lidmaatschapstest/

  beloftes_section:
    stack.heading.html: Onze 4 beloftes
    stack.button:
      html: Bekijk alle beloftes
      href: /beloftes/
    deck.cards:
      - icon.name: coffee
        heading.html: Een club waar je ook kunt sporten
        paragraph.html: >-
          We zijn een club waar persoonlijk contact en plezier net zo belangrijk
          zijn als de oefeningen zelf.
      - icon.name: eye-bolt
        heading.html: Goed dat je er bent!
        paragraph.html: >-
          Onze trainers kennen je naam en helpen jou je welkom te voelen. Of je
          nou 1 keer per week of 1 keer per dag komt sporten, of je sporten leuk
          vindt of niet: wij zijn er voor je.
      - icon.name: mood-heart
        heading.html: We maken er wat van
        paragraph.html: >-
          Niks is perfect, wij ook niet. Met ons enthousiasme en onze passie om
          jou te helpen, proberen we uit iedere situatie het beste te halen.
      - icon.name: ease-in-control-point
        heading.html: Iedere dag 1% beter
        paragraph.html: >-
          Bij ons geloven we in elke dag een beetje beter worden. Niet alleen
          voor jou, maar voor ons allemaal.
    _: $sections/features

  aanbod_section:
    heading.html: Ons aanbod
    deck.cards:
      - _: $aanbod/bootcamp-in-de-wijken.card
      - _: $aanbod/clinics.card
      - _: $aanbod/fysiotherapie.card
      - _: $aanbod/groepslessen.card
      - _: $aanbod/medical-training.card
      - _: $aanbod/onbeperkt-sporten.card
      - _: $aanbod/personal-training.card
      - _: $aanbod/the-gym-kids.card
      - _: $aanbod/voeding-en-dietetiek.card
    _: $sections/aanbod

  reviews_section:
    stack.heading.html: Wat onze sporters zeggen
    deck.cards:
      - _: $reviews/anne-marie
      - _: $reviews/anouk-veen
      - _: $reviews/berend-bruining
      - _: $reviews/bert
      - _: $reviews/ellen
      - _: $reviews/geeske
      - _: $reviews/guus
      - _: $reviews/hedzer
      - _: $reviews/inge
      - _: $reviews/lydia
      - _: $reviews/ruurd-van-den-berg
      - _: $reviews/shane
      - _: $reviews/shanna
      - _: $reviews/timke
    _: $sections/reviews

  content_section:
    stack.heading.html: Over The Gym Haren
    stack.paragraph.html: >-
      The Gym Haren helpt jou weer fitter, gezonder, sterker en/of slanker te
      worden. En te blijven. Onze trainers staan garant voor 100% persoonlijke
      begeleiding. Of het nou gaat over weer fit worden, afvallen of meer in
      balans leven. Interesse? Start dan nu met een Gratis Proefles. Of wil je
      eerst ontdekken wat bij je past? Doe dan de lidmaatschapstest. Stel in
      ieder geval niet langer uit, want heel eerlijk, je bent al best een tijd
      bezig met uitstellen… Toch? Daarom, vandaag start jouw gezondere
      leefstijl! The Gym in Haren is de plek waar we je helpen je doelen te
      behalen.
    image.src: /assets/schermafbeelding-2024-04-01-om-19-47-52.png
    _: $sections/content
---

import { Section } from '@fullui/ui'
import { getEntry } from 'astro:content'

import Around from './around.mdx'

{console.log(Around)}

<Around test="hoi1234">
  hoi1234
  <Section />
</Around>
after