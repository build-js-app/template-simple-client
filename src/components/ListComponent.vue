<template>
    <div>
        <div>
            <span>New item: </span>

            <input type="text" name="newItem" class="form-control name-input" placeholder="Enter new item" :value="name"
                   v-model="name" />

            <a type="button" href="#" @click="addItem">Add</a>
        </div>

        <div v-if="anyItems">
            <h4>Items</h4>

            <div v-for="item in items">
                <div v-if="itemToEdit && itemToEdit.id === item.id">
                    <input type="text" name="newItem" class="form-control item-name-input" placeholder="Enter item name"
                           :value="itemToEdit.name" v-model="itemToEdit.name" />

                    <a type="button" href="#" class="item-btn" @click="saveItem()">Save</a>

                    <a type="button" href="#" class="item-btn" @click="cancelClick()">Cancel</a>
                </div>

                <div v-else>
                    <span class="item-name">{{item.name}}</span>

                    <a type="button" href="#" class="item-btn" @click="editItem(item)">Edit</a>

                    <a type="button" href="#" class="item-btn" @click="deleteItem(item.id)">Delete</a>
                </div>
            </div>
        </div>

        <h4 v-else>No items.</h4>
    </div>
</template>

<script>
    import toastr from 'toastr';
    import dataService from '../services/dataService';

    export default {
        name: 'listComponent',
        data () {
            return {
                items: [],
                name: '',
                itemToEdit: {
                    name: ''
                }
            }
        },
        created () {
            this.getItemsList();
        },
        computed: {
            anyItems() {
                return this.items && this.items.length;
            }
        },
        methods: {
            async getItemsList() {
                let items = await dataService.getItemsList();

                this.items = items;
            },
            async addItem() {
                let name = this.name.trim();

                if (!name) {
                    toastr.warning('Item name is required.');
                    return;
                }

                await dataService.addItem(name);

                toastr.success('Item was added.');

                this.name = '';
                this.itemToEdit = Object.assign({}, {name: ''});

                this.getItemsList();
            },
            async deleteItem(id) {
                let isDeleteConfirm = confirm('Are you sure?');

                if (isDeleteConfirm) {
                    await dataService.deleteItem(id);

                    toastr.success('Item was removed.');

                    await this.getItemsList();
                }
            },
            editItem(item) {
                this.itemToEdit = Object.assign({}, item);
            },
            cancelClick() {
                this.itemToEdit = Object.assign({}, { name: ''});
            },
            async saveItem() {
                let item = this.itemToEdit;

                if (!item && !item.name.trim()) {
                    toastr.warning('Item name is required.');
                    return;
                }

                let isSaveConfirm = confirm('Are you sure?');

                if (isSaveConfirm) {
                    await dataService.editItem(item);

                    toastr.success('Item was updated.');

                    this.itemToEdit = Object.assign({}, { name: ''});

                    this.getItemsList();
                }
            }
        }
    }
</script>

<style>
    .name-input {
        font-size: 16px;
        width: 250px;
        margin: 0 20px;
    }

    .item-name {
        width: 380px;
        display: inline-block;
    }

    .item-btn {
        margin-right: 25px;
    }

    .item-name-input {
        font-size: 16px;
        width: 354px;
        margin-right: 20px;
    }
</style>