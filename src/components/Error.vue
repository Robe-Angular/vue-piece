<template>
    <div>
        <section id="content">
        <h1 class="subheader">404 Página no encontrada</h1>
        <h2>{{subtitulo}}</h2>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'Error',
        data(){
            return{
                subtitulo: 'La página que buscas no existe, inténtalo más tarde'
            }
        }
    }
</script>
