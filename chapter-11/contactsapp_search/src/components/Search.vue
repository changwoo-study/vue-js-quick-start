<template>
    <p>
        이름: <input type="text"
                   placeholder="두 글자 이상 입력 후 엔터!"
                   v-model.trim="name"
                   v-on:keyup.enter="keyUpEvent">
    </p>
</template>

<script>
    import Constant from '../Constant';

    export default {
        name: "Search",
        data: function () {
            return {
                name: ''
            };
        },
        methods: {
            keyUpEvent: function () {
                if (this.name.length >= 2) {
                    this.$store.dispatch(Constant.SEARCH_CONTACT, {name: this.name});
                    this.name = '';
                } else {
                    this.$store.dispatch(Constant.SEARCH_CONTACT, {name: ''});
                }
            }
        }
    }
</script>

<style scoped>

</style>