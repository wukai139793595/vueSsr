<template>
    <div id="center">
        <div class="wrap">center</div>
        <input type="text" name="write" id="write" v-model='msg'><br>
        <p class="write">{{msg}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            msg:''
        }
    }
}
</script>

<style>

</style>
