<template>
    <div class="container">
        <navbar />
<router-view />
    </div>
</template>

<script>
    import Navbar from "./partials/Navbar/Navbar";
    export default {
        components: {Navbar},
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
