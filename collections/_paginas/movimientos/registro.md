---
title: Registro de nuevo movimiento político
breadcrumb_title: Registro
breadcrumbs: ["movimientos"]
---

<div class="rounded-md bg-green-50 p-4 mb-8 hidden" id="mensaje_ok">
  <div class="flex">
    <div class="flex-shrink-0">
      <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
      </svg>
    </div>
    <div class="ml-3">
      <h3 class="text-sm font-medium text-green-800 !m-0 !p-0" style="line-height: 1 !important;">
        Formulario enviado
      </h3>
      <div class="mt-2 text-sm text-green-700">
        <p class="!m-0 !p-0 !mt-3">
          Hemos recibido su registro con éxito. El Directorio del Partido Digital tiene hasta 30 días para revisar su registro. Dentro de ese plazo se contactará con usted a través del correo electrónico proporcionado. Muchas gracias.
        </p>
      </div>
    </div>
  </div>
</div>

Complete el formulario a continuación para comenzar con el registro del movimiento político. Los campos marcados con <b class="text-red-600 font-bold">*</b> son necesarios al momento del registro inicial. El resto deben completarse con la presentación de las firmas.

Mientras el movimiento político se encuentra en una etapa de pre-aprobado, se publicará el Nombre Completo de la persona que realiza el registro inicial y el email proporcionado en el formulario.

Si no ha visto la información y requisitos para los movimientos políticos, puede hacerlo en [esta página]({{site.url}}/movimientos).

## Proceso de registro y aprobación

1. Registro del movimiento político completando el formulario en esta página.
   - Si quieres comenzar un movimiento político y todavía no tienes las firmas necesarias, puedes completar el formulario igualmente. Si el Directorio evalúa positivamente tu postulación, el movimiento queda en estado de "Pre-aprobado", se publica en el sitio web del Partido Digital con este estado, a la espera de presentar las firmas para completar el registro. Hasta no ser aprobado, no recibirás lo detallado en esta página.
2. Evaluación de la postulación por parte del Directorio del Partido Digital.
3. Comunicación del resultado de la evaluación en un plazo no mayor a 30 días. En caso de ser aprobada, será agregada en el sitio web del Partido Digital como tal y se brindarán los recursos y herramientas para trabajar.

Por cualquier duda puedes escribir a [contacto@partidodigital.org.uy](mailto:contacto@partidodigital.org.uy)

<form class="space-y-8 divide-y divide-gray-200 dark:divide-gray-700 border border-transparent lg:border-gray-300 lg:dark:border-gray-700 px-4 pb-4 rounded-lg" role="form" method="post" action="https://info.partidodigital.org.uy/form/submit?formId=9" id="mauticform_movimientospoliticos" enctype="multipart/form-data">
    <div class="space-y-8 divide-y divide-gray-200 dark:divide-gray-700">
        <div>
            <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100 mt-0">
                    Datos personales
                </h3>
                <p class="mb-0 mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Tus datos estan protegidos bajo nuestra 
                    <a class="text-orange-500" href="{{site.url}}/documentos/politica-de-privacidad">Política de Privacidad</a>. Los campos marcados con un asterisco <b class="text-red-600 font-bold">*</b> son obligatorios.
                </p>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-3">
                    <label for="nombre" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Nombre <b class="text-red-600 font-bold">*</b>
                    </label>
                    <div class="mt-1">
                        <input type="text" required="" name="mauticform[nombre]" id="nombre" autocomplete="given-name" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200">
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="apellido" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Apellido <b class="text-red-600 font-bold">*</b>
                    </label>
                    <div class="mt-1">
                        <input type="text" required="" name="mauticform[apellido]" id="apellido" autocomplete="family-name" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200">
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Correo electrónico <b class="text-red-600 font-bold">*</b>
                    </label>
                    <div class="mt-1">
                        <input id="email" required="" name="mauticform[email]" type="email" autocomplete="email" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200">
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Teléfono <b class="text-red-600 font-bold">*</b>
                    </label>
                    <div class="mt-1">
                        <input id="telefono" required="" name="mauticform[telefono]" type="tel" autocomplete="tel-national" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200">
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <h3 class="text-lg leading-6 font-medium text-gray-900 dark:text-gray-100">
                    Datos del nuevo movimiento político
                </h3>
                <p class="mb-0 mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Parte de la evaluación de esta postulación implica que no haya nombres repetidos.
                </p>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-3">
                    <label for="nombre-movimiento" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Nombre del movimiento político <b class="text-red-600 font-bold">*</b>
                    </label>
                    <div class="mt-1">
                        <input type="text" required="" name="mauticform[nombre_del_movimiento]" id="nombre-movimiento" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200">
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="email-movimiento" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Correo electrónico del movimiento político <b class="text-red-600 font-bold">*</b>
                    </label>
                    <div class="mt-1">
                        <input id="email-movimiento" required="" name="mauticform[correo_electronico_del_mo]" type="email" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200">
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="presidente" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Nombre completo del Presidente
                    </label>
                    <div class="mt-1">
                        <input type="text" name="mauticform[presidente_del_movimiento]" id="presidente" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200">
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="vicepresidente" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Nombre completo del Vicepresidente
                    </label>
                    <div class="mt-1">
                        <input id="vicepresidente" name="mauticform[vicepresidente_del_movimi]" type="text" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200">
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="secretario" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Nombre completo del Secretario
                    </label>
                    <div class="mt-1">
                        <input id="secretario" name="mauticform[secretario]" type="text" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200">
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                <div class="sm:col-span-3">
                    <label for="logo" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Logo del movimiento político
                    </label>
                    <div class="mt-1">
                        <div class="overflow-hidden relative w-full">
                            <input class="peer cursor-pointer absolute block px-4 h-full w-full opacity-0 right-0 top-0" type="file" name="mauticform[logo_del_movimiento]" accept="image/*" id="logo"/>
                            <button class="bg-orange-500 text-white font-bold h-[38px] py-1 px-4 w-full inline-flex items-center rounded-lg justify-center peer-hover:bg-orange-700 peer-hover:border-orange-700" id="logo_button">
                                <svg class="flex-none fill-current text-white w-5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
                                </svg>
                                <span class="ml-2 overflow-hidden truncate w-auto" id="logo_text">Subir imagen</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="sm:col-span-3">
                    <label for="firmas" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Firmas (<a href="{{site.url}}/assets/docs/Registro_de_nuevo_movimiento_político_Partido_Digital.pdf" download="Firmas Nuevo Movimiento Partido Digital">Descargar formulario en PDF</a>)
                    </label>
                    <div class="mt-1">
                        <div class="overflow-hidden relative w-full">
                            <input class="peer cursor-pointer absolute block px-4 h-full w-full opacity-0 right-0 top-0" type="file" name="mauticform[firmas_de_aprobacion]" accept="image/*" id="firmas"/>
                            <button class="bg-orange-500 text-white font-bold h-[38px] py-1 px-4 w-full inline-flex items-center rounded-lg justify-center peer-hover:bg-orange-700 peer-hover:border-orange-700" id="firmas_button">
                                <svg class="flex-none fill-current text-white w-5" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
                                </svg>
                                <span class="ml-2 overflow-hidden truncate w-auto" id="firmas_text">Subir imagen</span>
                            </button>
                        </div>
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
                        <textarea name="mauticform[ideas_movimiento]" rows="5" id="ideas" minlength="500" maxlength="3000" class="shadow-sm focus:ring-orange-500 focus:border-orange-500 block w-full sm:text-sm border-gray-300 rounded-md dark:bg-black dark:text-gray-200" pattern=".{500,3000}"></textarea>
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
        <div class="flex justify-end items-center">
            <p class="mb-0 text-red-700 leading-0 !m-0 !p-0 dark:text-gray-400" id="mensaje"></p>
            <button type="submit" id="registro_movimiento" class="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50 disabled:cursor-wait" value="" name="mauticform[submit]">
                Registrar movimiento
            </button>
            <input type="hidden" name="mauticform[formId]" id="mauticform_movimientospoliticos_id" value="9">
            <input type="hidden" name="mauticform[return]" id="mauticform_movimientospoliticos_return" value="">
            <input type="hidden" name="mauticform[formName]" id="mauticform_movimientospoliticos_name" value="movimientospoliticos">
        </div>
    </div>
</form>

<script type='text/javascript' src='{{site.url}}/assets/scripts/movimiento.js'></script>
