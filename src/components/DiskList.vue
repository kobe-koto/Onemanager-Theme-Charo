<template>
    <div class="List">
        <h3>Choose a Disk to Access</h3>
        <div
            class="ListItem"
            v-for="item in navigation" 
                    :key="item.name">
            {{ item.name }}
        </div>
    </div>
</template>

<style scoped>
    div.List {
        background-color: #19686a;
        width: 65%;
        border-radius: 20px;
        padding: 15px;
        min-width: 100px;
    
    }
    div.List h3 {
        padding-left: 5px;
    }
    div.ListItem {
        padding: 13px 12px 13px 12px;
        border-radius: 25px;
        transition: background-color .2s ease-in-out;
    }
    div.ListItem:hover {
        background-color: rgba(255,255,255, 0.35);
    }
    div.ListItem:not(:first-child) {
        margin-top: 6px;
    }
</style>

<script setup>
    const navigation = [
        { name: 'Disk 1'},
        { name: 'Disk 2'},
        { name: 'Disk 3'}
    ]
</script>