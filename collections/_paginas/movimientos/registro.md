---
title: Registro de nuevo movimiento político
breadcrumb_title: Registro
breadcrumbs: ["movimientos"]
---

Complete el formulario a continuación para comenzar con el registro del movimiento político. Los campos marcados con \* son necesarios al momento del registro inicial. El resto deben completarse con la presentación de las firmas.

Mientras el movimiento político se encuentra en una etapa de pre-aprobado, se publicará el Nombre Completo de la persona que realiza el registro inicial y el email proporcionado en el formulario.

Si no ha visto la información y requisitos para los movimientos políticos, puede hacerlo en [esta página]({{site.url}}/movimientos).

## Proceso de registro y aprobación

1. Registro del movimiento político completando el formulario en esta página.
   - Si quieres comenzar un movimiento político y todavía no tienes las firmas necesarias, puedes completar el formulario igualmente. Si el Directorio evalúa positivamente tu postulación, el movimiento queda en estado de "Pre-aprobado", se publica en el sitio web del Partido Digital con este estado, a la espera de presentar las firmas para completar el registro. Hasta no ser aprobado, no recibirás lo detallado en esta página.
2. Evaluación de la postulación por parte del Directorio del Partido Digital.
3. Comunicación del resultado de la evaluación en un plazo no mayor a 30 días. En caso de ser aprobada, será agregada en el sitio web del Partido Digital como tal y se brindarán los recursos y herramientas para trabajar.

Por cualquier duda puedes escribir a [contacto@partidodigital.org.uy](mailto:contacto@partidodigital.org.uy)

<form class="space-y-8 divide-y divide-gray-200 dark:divide-gray-700 border border-transparent lg:border-gray-300 lg:dark:border-gray-700 px-4 pb-4 rounded-lg">
    <div class="space-y-8 divide-y divide-gray-200 dark:divide-gray-700">
        <div>
            <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100 mt-0">
                    Datos personales
                </h3>
                <p class="mb-0 mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Tus datos estan protegidos bajo nuestra 
                    <a class="text-orange-500" href="{{site.url}}/documentos/politica-de-privacidad">Política de Privacidad</a>. Los campos marcados con un asterisco <b class="text-red-600 font-bold">*</b> son obligatorias.
                </p>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-3">
                    <label for="nombre" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Nombre <b class="text-red-600 font-bold">*</b>
                    </label>
                    <div class="mt-1">
                        <input type="text" name="nombre" id="nombre" autocomplete="given-name" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200">
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="apellido" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Apellido <b class="text-red-600 font-bold">*</b>
                    </label>
                    <div class="mt-1">
                        <input type="text" name="apellido" id="apellido" autocomplete="family-name" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200">
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Correo electrónico <b class="text-red-600 font-bold">*</b>
                    </label>
                    <div class="mt-1">
                        <input id="email" name="email" type="email" autocomplete="email" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200">
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Teléfono <b class="text-red-600 font-bold">*</b>
                    </label>
                    <div class="mt-1">
                        <input id="telefono" name="telefono" type="tel" autocomplete="tel-national" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200">
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    Datos identificatorios del nuevo movimiento político
                </h3>
                <p class="mb-0 mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Parte de la evaluación de esta postulación implica que no hayan nombres repetidos.
                </p>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-3">
                    <label for="nombre-movimiento" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Nombre del movimiento político <b class="text-red-600 font-bold">*</b>
                    </label>
                    <div class="mt-1">
                        <input type="text" name="nombre-movimiento" id="nombre-movimiento" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200">
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="logo" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Logo
                    </label>
                    <div class="mt-1">
                        <input id="logo" name="logo" type="file" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200">
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="secretario" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Secretario
                    </label>
                    <div class="mt-1">
                        <input id="secretario" name="secretario" type="text" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200">
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="presidente" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Presidente
                    </label>
                    <div class="mt-1">
                        <input type="text" name="presidente" id="presidente" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200">
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="vicepresidente" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Vicepresidente
                    </label>
                    <div class="mt-1">
                        <input id="vicepresidente" name="vicepresidente" type="text" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200">
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    Fundamentos del nuevo movimiento político
                </h3>
                <ul class="mb-0 mt-1 text-sm text-gray-500 dark:text-gray-400">
                    <li>Se pide que se explique al menos una idea que fundamente la creación del nuevo movimiento político.</li>
                    <li>Idealmente cuantas más ideas se describa, mejor entendimiento de los objetivos del mismo.</li>
                    <li>Este texto tiene un mínimo de 500 caracteres y un máximo de 3000. Este es un dato obligatorio.</li>
                </ul>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-6">
                    <label for="ideas" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Ideas
                    </label>
                    <div class="mt-1">
                        <textarea name="ideas" rows="3" id="ideas" minlength="500" maxlength="3000" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200"></textarea>
                        <div id="contador" class="text-right text-gray-400 text-sm pt-2">
                            <span id="actual" class="text-red-700">0</span>
                            <span id="maximo">/ 3000</span>
                        </div>
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
<script type='text/javascript' src='{{site.url}}/assets/scripts/movimiento.js'></script>