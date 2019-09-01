<template>
    <div class="sub-item">
        <input type="text" v-bind:value="subItem['name_russian']" class="sub-name-input menu-input" readonly>
        <select v-model="selected" disabled class="sub-pages-list menu-select">
            <option v-for="page in pages" v-bind:value="page['id']">
                {{ page["name_russian"] }}
            </option>
        </select>
        <button class="change-sub-button menu-button">Изменить</button>
        <button class="save-sub-button menu-button">Сохранить</button>
        <button class="delete-sub-button menu-button">Удалить</button>
    </div>
</template>

<script>
    export default {
        name: "SubItem",
        props: ["subItem", "pages"],
        data() {
            return {
                selected: this.subItem['page_id']
            }
        }
    }
</script>

<style scoped>
    .save-sub-button {
        display: none;
    }
    .sub-name-input {
        background-color: #FFFFCC;
    }
</style>