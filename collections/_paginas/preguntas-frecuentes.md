---
title: Preguntas frecuentes
---

<div class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none">
{% for video in site.data.videos %}
<div class="flex flex-col rounded-lg shadow-xl overflow-hidden">
    <div class="flex-shrink-0">
        <picture>
        <source type="image/webp" srcset="https://i.ytimg.com/vi_webp/{{video.id}}/sddefault.webp" data-toggle="modal" data-vid="{{video.id}}" data-target="#myModal">
        <img src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src="https://img.youtube.com/vi/{{video.id}}/sddefault.jpg" data-toggle="modal" data-vid="{{video.id}}" data-target="#myModal" class="h-48 w-full object-cover" alt="">
        </picture>
    </div>
    <div class="flex-1 bg-white p-6 flex flex-col justify-between dark:bg-gray-900">
        <div class="flex-1">
        <h3 class="mt-2 text-xl leading-7 font-semibold text-gray-900 cursor-pointer dark:text-gray-200" x-on:click="modalOpen = '{{video.id}}'">
            {{video.titulo}}
        </h3>
        </div>
    </div>
</div>
{% endfor %}
</div>

<div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
    <div class="mt-6 pb-6 border-t border-b border-gray-200 dark:border-gray-800">
        <dl class="space-y-8 divide-y divide-gray-200 dark:divide-gray-800">
            {% for pregunta in site.data.preguntas %}
            <div class="pt-6 md:grid md:grid-cols-12 md:gap-8">
                <dt class="text-base font-medium text-gray-900 dark:text-gray-100 md:col-span-5 text-left">
                    {{ pregunta.pregunta }}
                </dt>
                <dd class="mt-2 md:mt-0 md:col-span-7">
                    <p class="text-base text-gray-500 dark:text-gray-300 text-left">
                        {{ pregunta.respuesta }}
                        {% if pregunta.link != nil %}
                        <a href="{{ pregunta.link }}" class="transition ease-in-out text-orange-500 duration-150 hover:underline">
                            Más información
                        </a>
                        {% endif %}
                    </p>
                </dd>
            </div>
            {% endfor %}
        </dl>
    </div>
</div>

<div class="panel panel-default {% if forloop.last == false %} mb-3 {% endif %}">
    <div class="panel-heading" role="tab" id="pregunta-{{ pregunta.identificador }}">
        <h3 data-toggle="collapse" href="" data-target="#respuesta-{{ pregunta.identificador }}" aria-expanded="true" aria-controls="{{ pregunta.identificador }}">
        </h3>
    </div>
    <div id="respuesta-{{ pregunta.identificador }}" class="{% if forloop.last == false %} mb-3 {% endif %}" role="tabpanel" aria-labelledby="pregunta-{{ pregunta-identificador }}">
        {{ pregunta.respuesta }}
        {% if pregunta.link != nil %}
        <br/><br/>
        <a href="{{ pregunta.link }}" style="font-size: 15px;" class="btn">Más información</a>
        {% endif %}
    </div>
</div>

{% include layouts/default/_modal.html %}