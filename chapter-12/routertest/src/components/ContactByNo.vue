<template>
    <div>
        <hr class="divider">
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
    import contactlist from '../ContactList'

    export default {
        name: "ContactByNo",
        data: function () {
            return {
                no: 0,
                contacts: contactlist.contacts
            }
        },
        created: function () {
            this.no = this.$route.params.no;
        },
        // watch: {
        //     '$route': function (to, from) {
        //         this.no = to.params.no;
        //     }
        // },
        beforeRouteUpdate(to, from, next) {
            console.log('** beforeRouteUpdate');
            this.no = to.params.no;
            next();
        },
        computed: {
            contact: function () {
                let no = parseInt(this.no),
                    arr = this.contacts.filter(item => item.no === no);
                if (arr.length === 1) {
                    return arr[0];
                } else {
                    return {};
                }
            }
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