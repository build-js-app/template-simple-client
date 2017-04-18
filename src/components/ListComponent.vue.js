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