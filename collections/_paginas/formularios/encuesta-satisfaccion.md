---
title: Encuesta de Satisfacción
breadcrumbs: ["sobre-participacion"]
subtitulo1: "El ejercicio de una verdadera democracia participativa empieza por casa, por eso nosotros, los que somos parte del Partido Digital, nos auditamos regularmente para hacer los ajustes necesarios y que el partido crezca fuerte y sano respondiendo a las siguientes preguntas."
sitemap: false
---

<form class="space-y-8 divide-y divide-gray-200 dark:divide-gray-700 border border-transparent lg:border-gray-300 lg:dark:border-gray-700 p-4 rounded-lg">
    <div class="space-y-8 divide-y divide-gray-200 dark:divide-gray-700">
        <div>
            <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100 mt-0">
                    Datos personales
                </h3>
                <p class="mb-0 mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Tus datos estan protegidos bajo nuestra 
                    <a class="text-orange-500" href="{{site.url}}/documentos/politica-de-privacidad">Política de Privacidad</a>. Todos estos datos son obligatorios.
                </p>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-3">
                    <label for="nombre" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Primer nombre
                    </label>
                    <div class="mt-1">
                        <input type="text" name="nombre" id="nombre" autocomplete="given-name" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200">
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="apellido" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Primer apellido
                    </label>
                    <div class="mt-1">
                        <input type="text" name="apellido" id="apellido" autocomplete="family-name" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200">
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Correo electrónico
                    </label>
                    <div class="mt-1">
                        <input id="email" name="email" type="email" autocomplete="email" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200">
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="pt-8">
                <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    Hacenos saber tu opinión.
                </h3>
                <p class="mb-0 mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Conociendo tu parecer podemos hacer que Partido Digital pueda mejorar. Ninguna pregunta es obligatoria.
                </p>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-4">
                    <label for="que_estamos_haciendo_bien" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        ¿Qué estamos haciendo bien y debemos seguir haciendo?
                    </label>
                    <div class="mt-1">
                        <textarea name="que_estamos_haciendo_bien" rows="3" id="que_estamos_haciendo_bien" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200"></textarea>
                    </div>
                </div>
                <div class="sm:col-span-4">
                    <label for="que_estamos_haciendo_mal" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        ¿Qué estamos haciendo mal y cómo podemos remediarlo?
                    </label>
                    <div class="mt-1">
                        <textarea name="que_estamos_haciendo_mal" rows="3" id="que_estamos_haciendo_mal" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200"></textarea>
                    </div>
                </div>
                <div class="sm:col-span-4">
                    <label for="que_no_estamos_haciendo_y" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        ¿Qué no estamos haciendo y deberíamos hacer?
                    </label>
                    <div class="mt-1">
                        <textarea name="que_no_estamos_haciendo_y" rows="3" id="que_no_estamos_haciendo_y" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200"></textarea>
                    </div>
                </div>
                <div class="sm:col-span-4">
                    <label for="algun_comentario_que_quie" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        ¿Algún comentario que quieras agregar?
                    </label>
                    <div class="mt-1">
                        <textarea name="algun_comentario_que_quie" rows="3" id="algun_comentario_que_quie" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200"></textarea>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="pt-5">
        <div class="flex justify-end">
            <p class="mb-0 text-gray-600 leading-9 dark:text-gray-400" id="mensaje"></p>
            <button type="button" id="enviar" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                Enviar datos
            </button>
        </div>
    </div>
</form>

<script type="text/javascript" src="{{site.url}}/assets/scripts/jquery.ajaxchimp.js"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-ajaxchimp/1.3.0/jquery.ajaxchimp.langs.js"></script>
<script type='text/javascript' src='{{site.url}}/assets/scripts/encuesta.js'></script>

            