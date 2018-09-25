<template>
    <div id="home">
        <div class="wrap">home</div>
        <div class="content">store:{{value}}</div>
        <button @click='getValue'>getValue</button>
    </div>
</template>
<script>
export default {
    serverRequest(store) {
        return store.dispatch('getValue')
    },
    computed: {
        value(){
            return this.$store.state.value
        }
    },
    methods: {
        getValue(){
            this.$store.dispatch("getValue")
        }
    }
}
</script>

<style>

</style>
