<template>
    <div>
        <button class="region" v-for="region in regions"
                v-bind:key="region"
                v-bind:class="isSelected(region)"
                v-on:click="changeRegion({region: region})">
            {{ region }}
        </button>
    </div>
</template>

<script>
    import Constant from '../Constant';
    import {mapGetters, mapMutations} from 'vuex';

    export default {
        name: 'RegionButtons',
        computed: mapGetters(['regions', 'currentRegion']),
        methods: {
            isSelected(region) {
                return {selected: region === this.currentRegion}
            },
            ...mapMutations([Constant.CHANGE_REGION])
        }
    }
</script>

<style scoped>
    button.region {
        text-align: center;
        width: 80px;
        margin: 2px;
        border: solid 1px gray;
    }

    button.selected {
        background-color: purple;
        color: aqua;
    }
</style>