<template>
    <div class="full-item">
        <div class="main-item-with-sub">
            <MainItem v-bind:mainItem="fullItem[0]" v-bind:pages="pages"></MainItem>
            <SubItem
                v-for="(subItem, index) in fullItem"
                v-if="index !== 0"
                v-bind:key="subItem['id']"
                v-bind:subItem="subItem"
                v-bind:pages="pages"
            ></SubItem>
        </div>
        <ItemControls v-bind:fullItem="fullItem"></ItemControls>
        <hr>
    </div>
</template>

<script>
    import MainItem from "Components/LeftMenu/MainItem.vue";
    import SubItem from "Components/LeftMenu/SubItem.vue";
    import ItemControls from "Components/LeftMenu/ItemControls.vue";

    export default {
        name: "FullItem",
        props: ["fullItem", "pages"],
        components: {
            MainItem, SubItem, ItemControls
        }
    }
</script>