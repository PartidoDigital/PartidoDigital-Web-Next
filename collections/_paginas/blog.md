---
title: Blog
subtitulo1: Últimas noticias sobre acontencimientos del Partido Digital
---

<div class="px-4 sm:px-6 lg:px-8">
    <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
        {% for post in site.posts %}
        {% assign months = "Ene|Feb|Mar|Abr|May|Jun|Jul|Ago|Sep|Oct|Nov|Dic" | split: "|" %}
        {% assign m = post.date | date: "%-m" | minus: 1 %}
        {% assign day = post.date | date: "%-d" %}
        {% assign month = months[m] %}
        {% assign year = post.date | date: "%Y" %}
        <div class="grid gap-10 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            <div class="border border-orange-200 rounded-lg p-4">
                <div>
                    <a href="#" class="inline-block">
                        <span class="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-orange-100 text-orange-800 uppercase">
                            {{ post.categories }}
                        </span>
                    </a>
                </div>
                <a href="{{ post.url }}" class="block mt-4">
                    <p class="text-xl font-semibold text-gray-900 dark:text-gray-200">
                        {{ post.title }}
                    </p>
                    <p class="mt-3 text-base text-gray-500 dark:text-gray-100">
                        {{ post.excerpt | markdownify | strip_html }}
                    </p>
                </a>
                <div class="mt-6 flex items-center">
                    <div class="flex-shrink-0">
                        {% assign author = site.equipo | where_exp:"miembro","miembro.nombre == post.author" %}
                        <span class="sr-only">{{ author | default: 'Partido Digital' }}</span>
                        <img class="h-10 w-10 rounded-full" src="{{author.img | default: 'https://recursos.partidodigital.org.uy/assets/img/logo_at_naranja.png'}}" alt="">
                    </div>
                    <div class="ml-3">
                        <p class="text-sm font-medium text-gray-900 dark:text-gray-200">
                            {{ post.author | default: 'Partido Digital' }}
                        </p>
                        <div class="flex space-x-1 text-sm text-gray-500">
                        <time datetime="{{ year }}-{{ m | prepend: '00' | slice: -2, 2 }}-{{ day }}">
                           {{ day }} {{ month }}, {{ year }}
                        </time>
                        <span aria-hidden="true">
                            &middot;
                        </span>
                        {% include utils/read_time.html content=page.content %}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {% endfor %}
    </div>  
</div>