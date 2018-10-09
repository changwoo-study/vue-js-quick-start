<template>
    <div>
        <hr class="divider">
        <h1>연락처 상세</h1>
        <div>
            <table class="detail table table-bordered">
                <tbody>
                <tr class="active">
                    <td>일련번호</td>
                    <td>{{contact.no}}</td>
                </tr>
                <tr class="active">
                    <td>이름</td>
                    <td>{{contact.name}}</td>
                </tr>
                <tr class="active">
                    <td>전화</td>
                    <td>{{contact.tel}}</td>
                </tr>
                <tr class="active">
                    <td>주소</td>
                    <td>{{contact.address}}</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import Constant from '~/constant'

    export default {
        name: "contactbyno",
        computed: mapGetters({contact: 'getContactOne'}),
        created() {
            let no = this.$route.params.no;
            this.$store.commit(Constant.CHANGE_NO, {no: no});
        },
        beforeRouteUpdate(to, from, next) {
            this.$store.commit(Constant.CHANGE_NO, {no: to.params.no});
            next();
        }
    }
</script>

<style scoped>
    table.detail {
        width: 400px;
    }

    .divider {
        height: 3px;
        margin-left: auto;
        margin-right: auto;
        background-color: #ff0066;
        color: #ff0066;
        border: 0 none;
    }
</style>