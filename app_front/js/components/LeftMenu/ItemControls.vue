<template>
    <div class="add-sub-item">
        <button class="add-sub-button">Добавить подпункт</button>
        <span> после </span>
        <select v-model="selected" class="sub-items-list menu-select">
            <option value="0">
                {{ fullItem[0]["name_russian"] }}
            </option>
            <option
                v-for="(subItem, index) in fullItem"
                v-if="index !== 0"
                v-bind:value="subItem['id']"
            >
                {{ subItem["name_russian"] }}
            </option>
        </select>
    </div>
</template>

<script>
    export default {
        name: "ItemControls",
        props: ["fullItem"],
        data() {
            return {
                selected: 0
            }
        },
        mounted() {
            if(this.fullItem.length > 1) {
                this.selected =  +this.fullItem[this.fullItem.length - 1]['id'];
            }
        }
    }
</script>

<style scoped>

</style>