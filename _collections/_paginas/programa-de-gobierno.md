---
title: Programa de Gobierno 2019
---

El Programa de Gobierno del Partido Digital se creó de forma colaborativa y participativa haciendo un llamado a todos los ciudadanos, sin discriminar por partido político, a que publicaran sus ideas en la Plataforma MiVoz, plataforma que el Partido Digital mantiene a disposición de todos los uruguayos, habilitados para votar, para una fluida interacción.

## Metodología para la creación del Programa de Gobierno

Se elaboró una lista explicativa con los contenidos que una propuesta debe tener para estar completa: Diagnóstico, la Propuesta en sí, Institucionalidad, Cómo se va a Financiar y Métricas para evaluar su éxito. Se formó un Equipo de Facilitadores, para ayudar a las personas a interactuar con la plataforma y un Equipo de Moderadores para guiar a los usuarios a completar las propuestas y coordinar entre ideas complementarias. 

También se lanzó la campaña “Cazador de Ideas”, para que cuando un ciudadano viera algún proyecto de otro partido o en prensa que le interesara llevar al parlamento pudiéramos presentarlo en la plataforma para el debate. Con esta metodología se llega a propuestas de tres tipos según su elaboración: Autor original sube una idea que es complementada por otros usuarios y por los moderadores con datos y opiniones. El autor original completa su propuesta incorporando los aportes recibidos y la pasa a validación (Equipo Jurídico) Autor original sube una idea que es complementada por los moderadores con datos y sugerencias. El autor original completa su propuesta incorporando los aportes recibidos y la pasa a validación (Equipo Jurídico) Autor original sube una propuesta completa y la pasa a validación. No hay interacción con otros usuarios ni con los moderadores. A su vez, se realizaron propuestas que se elaboraron mediante actividades presenciales con ciudadanos, las cuales a su vez fueron complementadas con aportes de los debates temáticos organizados por el Partido Digital, con representantes de técnicos de muchos partidos políticos y referentes del sector privado y sociedad civil.

<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mt-7">
{% for propuestas in site.data.propuestas %}
  <li class="col-span-1 flex flex-col text-center bg-white dark:bg-black rounded-lg shadow divide-y divide-gray-200 border border-transparent dark:border-gray-800">
    <div class="flex-1 flex flex-col p-8">
      <img class="w-32 h-32 flex-shrink-0 mx-auto bg-black" src="/assets/img/programa_sociedad.png" alt="">
      <h3 class="mt-6 text-gray-900 dark:text-gray-100 text-sm font-medium">{{propuestas[0] | capitalize | replace: "-", " "}}</h3>
      <dl class="mt-1 flex-grow flex flex-col justify-between">
        <dd class="text-gray-500 dark:text-gray-400 text-sm">{{propuestas[1].size}} subcategorias</dd>
        {% assign numero_propuestas = 0 %}
        {% for categoria in propuestas[1] %}
            {% assign numero_propuestas = numero_propuestas | plus:categoria.posts.size %}
        {% endfor %}
        <dd class="text-gray-500 dark:text-gray-400 text-sm">{{numero_propuestas}} propuestas</dd>
      </dl>
    </div>
    <div>
      <div class="-mt-px flex divide-x divide-gray-200 dark:bg-gray-900">
        <div class="w-0 flex-1 flex">
          <a href="/programa-de-gobierno/{{propuestas[0]}}" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-orange-500 hover:text-orange-700 font-medium border border-transparent rounded-bl-lg">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
            <span class="ml-3">Ver propuestas</span>
          </a>
        </div>
      </div>
    </div>
  </li>
{% endfor %}
</ul>

<div class="mt-8 md:mt-10 sm:flex sm:justify-center">
    <div>
        <a href="/assets/docs/ProgramaEntreTodos.pdf" class="block w-full text-center rounded-lg border border-orange-500 bg-white dark:bg-black px-6 py-3 text-base leading-6 font-medium text-orange-500 hover:bg-orange-100 focus:outline-none focus:shadow-outline transition ease-in-out duration-150 mb-2" aria-describedby="tier-scale">
            Descargar Programa Entre Todos
        </a>
        <small class="text-gray-500 text-center block">(Haz click derecho y elige "Descargar como...")</small>
    </div>
</div>
