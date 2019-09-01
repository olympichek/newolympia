<template>
    <div class="main-item">
        <input type="text" v-bind:value="mainItem['name_russian']" class="main-name-input menu-input" readonly>
        <select v-model="selected" disabled class="main-pages-list menu-select">
            <option v-for="page in pages" v-bind:value="page['id']">
                {{ page["name_russian"] }}
            </option>
        </select>
        <button class="change-main-button menu-button">Изменить</button>
        <button class="save-main-button menu-button">Сохранить</button>
        <button class="delete-main-button menu-button">Удалить</button>
    </div>
</template>

<script>
    export default {
        name: "MainItem",
        props: ["mainItem", "pages"],
        data() {
            return {
                selected: this.mainItem['page_id']
            }
        }
    }
</script>

<style scoped>
    .save-main-button {
        display: none;
    }
    .main-name-input {
        background-color: #00FF99;
    }
</style>