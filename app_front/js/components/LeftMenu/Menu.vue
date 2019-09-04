<template>
    <div id="menu-app">
        <div id="items-list">
            <FullItem
                v-for="fullItem in items"
                v-bind:key="fullItem[0]['id']"
                v-bind:fullItem="fullItem"
                v-bind:pages="pages"
            ></FullItem>
        </div>
        <div id="menu-controls">
            <button class="add-main-button">Добавить пункт</button>
            <label>
                <span> после </span>
                <select v-model="selected" class="main-items-list menu-select">
                    <option
                        v-for="item in items"
                        v-bind:key="item[0]['id']"
                        v-bind:value="item[0]['id']"
                    >
                        {{ item[0]["name_russian"] }}
                    </option>
                </select>
            </label>
        </div>
    </div>
</template>

<script>
    import FullItem from "Components/LeftMenu/FullItem.vue";
    export default {
        name: "Menu",
        data() {
            return {
                items: [],
                pages: [],
                selected: 1,
            }
        },
        async created() {
            let url = "/admin/left_menu/load/items";
            let response = await fetch(url);
            this.items = await response.json();
            this.selected = +this.items[this.items.length - 1][0]['id'];

            url = "/admin/left_menu/load/pages";
            response = await fetch(url);
            this.pages = await response.json();
        },
        components: {
            FullItem
        }
    }
</script>