<template>
    <div class="full-item">
        <div class="main-item-with-sub">
            <MainItem
                v-bind:mainItem="fullItem[0]"
                v-bind:pages="pages"
                v-on:deleteMain="deleteMain"
            ></MainItem>
            <SubItem
                v-for="(subItem, index) in fullItem"
                v-if="index !== 0"
                v-bind:key="subItem['id']"
                v-bind:subItem="subItem"
                v-bind:pages="pages"
                v-on:deleteSub="deleteSub"
            ></SubItem>
        </div>
        <ItemControls v-bind:fullItem="fullItem" v-on:addSub="addSub"></ItemControls>
        <hr>
    </div>
</template>

<script>
    import MainItem from "Components/LeftMenu/MainItem.vue";
    import SubItem from "Components/LeftMenu/SubItem.vue";
    import ItemControls from "Components/LeftMenu/ItemControls.vue";
    import {Cookie} from "Services/Cookie";
    import {LeftMenu} from "Modules/LeftMenu";

    export default {
        name: "FullItem",
        props: ["fullItem", "pages"],
        components: {
            MainItem, SubItem, ItemControls
        },
        methods: {
            deleteMain(id) {
                this.$emit("deleteMain", id);
            },
            async addSub(after_id) {
                const url = "/admin/left_menu/add/sub";
                const data = {
                    after_id: after_id,
                    parent_id: this.fullItem[0]['id'],
                    token: Cookie.getByName("temp_hash").value
                };
                const response = await fetch(url, {
                    method: "POST",
                    credentials: "same-origin",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(data)
                });
                this.fullItem = await response.json();
                const menu = new LeftMenu;
                menu.reload();
            },
            async deleteSub(id) {
                for(let i = 1; i < this.fullItem.length; i++) {
                    let subItem = this.fullItem[i];
                    if(subItem['id'] === id) {
                        this.fullItem.splice(i, 1);
                        break;
                    }
                }
                const url = "/admin/left_menu/delete/sub";
                const data = {
                    id: id,
                    token: Cookie.getByName("temp_hash").value
                };
                await fetch(url, {
                    method: "POST",
                    credentials: "same-origin",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify(data)
                });
                this.$refs.ItemControls.selectedReset();
                const menu = new LeftMenu;
                menu.reload();
            }
        }
    }
</script>