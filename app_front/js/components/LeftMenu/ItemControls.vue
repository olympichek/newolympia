<template>
    <div class="add-sub-item">
        <button class="add-sub-button" v-on:click="addSub">Добавить подпункт</button>
        <span> после </span>
        <select v-model="selected" class="sub-items-list menu-select">
            <option value="0">
                {{ fullItem[0]["name_russian"] }}
            </option>
            <option
                v-for="(subItem, index) in fullItem"
                v-if="index !== 0"
                v-bind:value="subItem['order_id']"
            >
                {{ subItem["name_russian"] }}
            </option>
        </select>
    </div>
</template>

<script>
    import {Cookie} from "Services/Cookie";
    import {LeftMenu} from "Modules/LeftMenu";
    export default {
        name: "ItemControls",
        props: ["fullItem"],
        data() {
            return {
                selected: 0
            }
        },
        created() {
            this.selectedReset();
        },
        methods: {
            async addSub() {
                this.$emit("addSub", this.selected);
            },
            selectedReset() {
                if(this.fullItem.length > 1) {
                    this.selected = +this.fullItem[this.fullItem.length - 1]['order_id'];
                }
            }
        }
    }
</script>

<style scoped>

</style>