<template>
    <div id="app">
        <img src="./assets/logo.png">
        <router-view></router-view>
        <hello></hello>
    </div>
</template>
<script>
    import Hello from './component/Hello';
    export default {
        name: 'app',
        components: {
            Hello
        }
    }
</script>
<style type="text/css">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>