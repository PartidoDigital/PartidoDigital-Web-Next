---
title: Sobre nosotros
subtitulo1: Al Partido Digital lo hacemos personas que creemos que es necesaria una actualización en la forma en la que participamos políticamente, que logre empoderar a más personas para que su voz sea escuchada y tenga impacto.
subtitulo2: Todos quienes aportamos nuestros tiempo y ganas para este emprendimiento político tenemos distintas ideas y orígenes ideológicos, algunos con experiencia político partidaria y otros debutando ahora, pero a todos nos une el respeto por las ideas del otro y las ganas de luchar porque cada idea tenga su lugar en un debate público transparente y moderno.
---
<p class="text-2xl text-center my-5"><b>¡Hay nuevas autoridades!</b> Luego de las elecciones internas celebradas del 13 al 17 de Marzo, nuevas personas confirman las autoridades del Partido Digital. Próximamente toda su información aquí.</p>
<div class="list-none mx-auto space-y-16 sm:grid sm:grid-cols-2 sm:gap-16 sm:space-y-0 lg:grid-cols-3 lg:max-w-5xl text-center mt-15" style="display: none;">
    {% for persona in site.data.equipo %}
    <div>
    <div class="space-y-6">
        {% if persona.img != nil %}
        <img class="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56" src="{{site.url}}/assets/img/equipo/{{ persona.img }}" alt="">
        {% else %}
        {% if persona.icon != nil %}
            {{persona.icon}}
        {% endif %}
        {% endif %}
        <div class="space-y-2">
        <div class="text-lg leading-6 font-medium space-y-1">
            <h4>{{ persona.nombre }}</h4>
            <p class="text-orange-500 dark:text-orange-300">{{ persona.posicion | newline_to_br }}</p>
        </div>
        <div class="flex justify-center space-x-5">
            {% if persona.social.twitter %}
            <div>
                <a href="https://twitter.con/{{ persona.social.twitter }}" class="text-gray-400 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 transition ease-in-out duration-150">
                    <span class="sr-only">Twitter</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                </a>
            </div>
            {% endif %}
            {% if persona.social.linkedin %}
            <div>
                <a href="https://linkedin.con/in/{{ persona.social.linkedin }}" class="text-gray-400 hover:text-gray-500 dark:text-gray-200 dark:hover:text-gray-400 transition ease-in-out duration-150">
                    <span class="sr-only">LinkedIn</span>
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                    </svg>
                </a>
            </div>
            {% endif %}
        </div>
        </div>
    </div>
    </div>
    {% endfor %}
    <div>
        <div class="space-y-6">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" class="fill-current text-black dark:text-gray-200 mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 my-8 border-4 border-black dark:border-white">
            <path class="heroicon-ui" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z"/>
            </svg>
            <div class="space-y-2">
            <div class="text-lg leading-6 font-medium space-y-1">
                <h4>Vos</h4>
                <p class="text-orange-500 dark:text-orange-300">
                Contactate con nosotros para ser parte del Partido Digital
                </p>
            </div>
            </div>
        </div>
    </div>
</div>
