<template>
    <button v-on:click="count++">Счётчик кликов — {{ count }}</button>
</template>

<script>
    export default {
        data() {
            return {
                count: 0
            }
        }
    }
</script>

<style>
    .example {
        color: red;
    }
</style>