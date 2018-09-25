<template>
    <div id="app">
        <p>I am the entry file!</p>
        <router-link to='/'>Home</router-link>
        <router-link to='/about'>about</router-link>
        <router-link to='/center'>center</router-link>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    
}
</script>
<style>
    p{
        background-color: red;
    }
</style>
