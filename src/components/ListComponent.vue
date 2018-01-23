<template>
    <div>
        <div>
            <span>New item: </span>

            <input type="text" name="newItem" class="form-control name-input" placeholder="Enter new item" v-model="name" />

            <a type="button" href="#" @click="addItem">Add</a>
        </div>

        <div v-if="anyItems">
            <h4>Items</h4>

            <div v-for="item in items" :key="item.id">
                <div v-if="itemToEdit && itemToEdit.id === item.id">
                    <input type="text" name="newItem" class="form-control item-name-input" placeholder="Enter item name"
                           v-model="itemToEdit.name" />

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

<script src="./ListComponent.vue.js">
</script>
