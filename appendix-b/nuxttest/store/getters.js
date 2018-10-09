export default {
    getContactOne(state) {
        let no = parseInt(state.no);
        let arr = state.contacts.filter(function (item) {
            return item.no === no;
        });

        if (arr.length === 1) {
            return arr[0];
        }

        return [];
    },
    getContacts(state) {
        return state.contacts;
    }
}
