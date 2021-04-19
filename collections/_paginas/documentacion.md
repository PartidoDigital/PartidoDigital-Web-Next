---
title: Documentación
subtitulo1: En esta sección se presenta toda la documentación asociada al Partido Digital.
---

<ul class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4 list-none">
    {% assign sorted = site.documentos | sort: 'date' | reverse %}
    {% for documento in sorted %}
    <li class="col-span-1 bg-white shadow-2xl rounded-lg dark:bg-black border border-transparent dark:border-gray-800 divide-y divide-gray-200 dark:divide-gray-800">
        <div class="w-full flex items-center justify-between p-6 space-x-6">
            <div class="flex-1 truncate text-center">
                <h3 class="text-gray-900 dark:text-gray-100 text-lg font-medium truncate">{{ documento.title }}</h3>
                <p class="mt-1 text-gray-500 dark:text-gray-400 text-sm truncate">Actualizado el {{ documento.date | date: "%d/%m/%Y" }}</p>
            </div>
        </div>
        <div>
            <div class="-mt-px flex divide-x divide-gray-200 dark:divide-gray-800 bg-gray-50 dark:bg-gray-900">
                <div class="w-0 flex-1 flex">
                    <a href="{{documento.url | replace: '.html', ''}}" class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-orange-500 hover:text-orange-700 font-medium border border-transparent rounded-bl-lg">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                        <span class="ml-2">Ver documento</span>
                    </a>
                </div>
                <div class="-ml-px w-0 flex-1 flex">
                    <a href="{{site.github_url}}/PartidoDigital-Web-Next/blob/master/collections/{{documento.path}}" class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-orange-500 hover:text-orange-700 font-medium border border-transparent rounded-br-lg">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        <span class="ml-2">Ver código fuente</span>
                    </a>
                </div>
            </div>
        </div>
    </li>
    {% endfor %}
  </ul>