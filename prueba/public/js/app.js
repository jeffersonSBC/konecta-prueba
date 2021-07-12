// /**
//  * First we will load all of this project's JavaScript dependencies which
//  * includes Vue and other libraries. It is a great starting point when
//  * building robust, powerful web applications using Vue and Laravel.
//  */

// require('./bootstrap');

// window.Vue = require('vue');

// /**
//  * The following block of code may be used to automatically register your
//  * Vue components. It will recursively scan this directory for the Vue
//  * components and automatically register them with their "basename".
//  *
//  * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
//  */

// // const files = require.context('./', true, /\.vue$/i)
// // files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

// Vue.component('example-component', require('./components/ExampleComponent.vue').default);

// /**
//  * Next, we will create a fresh Vue application instance and attach it to
//  * the page. Then, you may begin adding components to this application
//  * or customize the JavaScript scaffolding to fit your unique needs.
//  */

// const app = new Vue({
//     el: '#app',
// });

/**
 * Eventos que suceden al cargar la vista 
**/
window.onload = function(){

    /**
     * Se reinician los datos del modal para inactivar 
    **/    
    $("#form-inactivate").removeAttr("action");
    $("#id-inactivate").removeAttr("value");
    
    
    /**
     * Se crea el modal para inactivar un registro 
    **/
    $(".modal_inactivate").on('click',function(){
        action_form   = $(this).attr('data-action');
        id_inactivate = $(this).attr('data-identifier');
    
        if(typeof action_form != 'undefined' && typeof id_inactivate != 'undefined'){
            $("#form-inactivate").attr("action",action_form);
            $("#id-inactivate").attr("value",id_inactivate);
            $(".modal-inactivate").modal();
        }else{
            alert('No se puede Inactivar el registro, contacte al administrador del sistema');
        }
    });
    }