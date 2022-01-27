<template>
    <h2>Redirigiendo</h2>
</template>
<script>
export default {
    name: "Redirect",
    setup() {
        
    },
    mounted(){
        this.$router.push('/buscador/' + this.$route.params.searchString)
    }
}
</script>