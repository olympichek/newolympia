<template>
    <div class="main-item">
        <input type="text" v-bind:value="mainItem['name_russian']" class="main-name-input menu-input" readonly>
        <select v-model="selected" v-on:change="changeMainSelect" v-bind:disabled="!changing" class="main-pages-list menu-select">
            <option v-for="page in pages" v-bind:value="page['id']">
                {{ page["name_russian"] }}
            </option>
        </select>
        <button v-on:click="changeMain" v-show="!changing" class="change-main-button menu-button">Изменить</button>
        <button v-on:click="saveMain" v-show="changing" class="save-main-button menu-button">Сохранить</button>
        <button v-on:click="deleteMain" class="delete-main-button menu-button">Удалить</button>
    </div>
</template>

<script>
    import {Cookie} from "Services/Cookie";
    import {LeftMenu} from "Modules/LeftMenu";
    export default {
        name: "MainItem",
        props: ["mainItem", "pages"],
        data() {
            return {
                selected: this.mainItem['page_id'],
                changing: false
            }
        },
        methods: {
            changeMain() {
                this.changing = true;
            },
            async saveMain() {
                this.changing = false;
                const url = "/admin/left_menu/save/main";
                const data = {
                    id: this.mainItem['id'],
                    page_id: this.mainItem['page_id'],
                    token: Cookie.getByName("temp_hash").value
                };
                await fetch(url, {
                    method: "POST",
                    credentials: "same-origin",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(data)
                });

                const menu = new LeftMenu;
                menu.reload();
            },
            deleteMain() {
                this.$emit("deleteMain", this.mainItem['id']);
            },
            changeMainSelect(event) {
                const selectList = event.target;
                const nameRus = selectList.options[selectList.selectedIndex].text;
                this.mainItem['page_id'] = selectList.value;
                this.mainItem['name_russian'] = nameRus;
            }
        }
    }
</script>

<style scoped>
    .main-name-input {
        background-color: #00FF99;
    }
</style>