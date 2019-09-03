<template>
    <div class="sub-item">
        <input type="text" v-bind:value="subItem['name_russian']" class="sub-name-input menu-input" readonly>
        <select v-model="selected" v-on:change="changeSubSelect" v-bind:disabled="!changing" class="sub-pages-list menu-select">
            <option v-for="page in pages" v-bind:value="page['id']">
                {{ page["name_russian"] }}
            </option>
        </select>
        <button v-on:click="changeSub" v-show="!changing" class="change-sub-button menu-button">Изменить</button>
        <button v-on:click="saveSub" v-show="changing" class="save-sub-button menu-button">Сохранить</button>
        <button v-on:click="deleteSub" class="delete-sub-button menu-button">Удалить</button>
    </div>
</template>

<script>
    import {Cookie} from "Services/Cookie";
    import {LeftMenu} from "Modules/LeftMenu";
    export default {
        name: "SubItem",
        props: ["subItem", "pages"],
        data() {
            return {
                selected: this.subItem['page_id'],
                changing: false
            }
        },
        methods: {
            changeSub() {
                this.changing = true;
            },
            async saveSub() {
                this.changing = false;
                const url = "/admin/left_menu/save/sub";
                const data = {
                    id: this.subItem['id'],
                    page_id: this.subItem['page_id'],
                    token: Cookie.getCookieByName("temp_hash").value
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
            deleteSub() {

            },
            changeSubSelect(event) {
                const selectList = event.target;
                const nameRus = selectList.options[selectList.selectedIndex].text;
                this.subItem['page_id'] = selectList.value;
                this.subItem['name_russian'] = nameRus;
            }
        }
    }
</script>

<style scoped>
    .sub-name-input {
        background-color: #FFFFCC;
    }
</style>