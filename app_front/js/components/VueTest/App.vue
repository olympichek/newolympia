<template>
    <div>
        <p class="example">
            Greetings: {{ greeting }}, World!
        </p>
        <ButtonCounter></ButtonCounter>
        <ButtonCounter></ButtonCounter>
        <ButtonCounter></ButtonCounter>
    </div>
</template>

<script>
    import ButtonCounter from "./ButtonCounter.vue";
    export default {
        data () {
            return {
                greeting: "Hello"
            }
        },
        components: {
            ButtonCounter
        }
    }
</script>

<style lang="scss">
    $base_color: red;
    .example {
        color: $base_color;
    }
</style>