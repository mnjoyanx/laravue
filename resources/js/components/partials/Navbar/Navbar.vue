<template>
    <nav class="uk-navbar-container uk-margin" uk-navbar="mode: click">
        <div class="uk-navbar-left">

            <ul class="uk-navbar-nav">
                <li v-for="(link, key) in links" :key="key">
                    <router-link :to="link.url">{{link.title}}</router-link>
                </li>
            </ul>

        </div>
    </nav>
</template>

<script>
    export default {
        name: 'Navbar',
        data() {
            return {
                links: [
                    {title: 'Home', url: '/'},
                    {title: 'Posts', url: '/posts'}
                ]
            }
        }
    };
</script>
