<template>
    <div id="container">
        <div class="page-header">
            <h1 class="text-center">연락처 관리 애플리케이션</h1>
            <p>(Dynamic Component + EventBus + Axios)</p>
        </div>
        <component :is="currentView" :contact="contact"></component>
        <contact-list :contact-list="contactList"></contact-list>
    </div>
</template>

<script>
    import ContactList from './components/ContactList';
    import AddContact from './components/AddContact';
    import UpdateContact from './components/UpdateContact';
    import UpdatePhoto from './components/UpdatePhoto';
    import CONF from './Config';
    import eventBus from './EventBus';

    export default {
        name: 'app',
        components: {
            ContactList,
            AddContact,
            UpdateContact,
            UpdatePhoto
        },
        data() {
            return {
                currentView: null,
                contact: {
                    no: 0,
                    name: '',
                    tel: '',
                    address: '',
                    photo: '',
                },
                contactList: {
                    pageno: 1,
                    pagesize: CONF.PAGE_SIZE,
                    totalcount: 0,
                    contacts: []
                }
            }
        },
        mounted() {
            this.fetchContacts();
            eventBus.$on('cancel', () => {
                this.currentView = null;
            });
            eventBus.$on('addSubmit', (contact) => {
                this.currentView = null;
                this.addContact(contact);
            });
            eventBus.$on('updateSubmit', (contact) => {
                this.currentView = null;
                this.updateContact(contact);
            });
            eventBus.$on('addContactForm', () => {
                this.currentView = 'addContact';
            });
            eventBus.$on('editContactForm', (no) => {
                this.fetchContactOne(no);
                this.currentView = 'updateContact';
            });
            eventBus.$on('deleteContact', (no) => {
                this.deleteContact(no);
            });
            eventBus.$on('editPhoto', (no) => {
                this.fetchContactOne(no);
                this.currentView = 'updatePhoto';
            });
            eventBus.$on('updatePhoto', (no, file) => {
                if (typeof file !== 'undefined') {
                    this.updatePhoto(no, file);
                }
                this.currentView = null;
            });
            eventBus.$on('pageChanged', (page) => {
                this.pageChanged(page)
            });
        },
        methods: {
            pageChanged(page) {
                this.contactList.pageno = page;
                this.fetchContacts();
            },
            fetchContacts() {
                this.$axios.get(CONF.FETCH, {
                    params: {
                        pageno: this.contactList.pageno,
                        pagesize: this.contactList.pagesize
                    }
                }).then((response) => {
                    this.contactList = response.data;
                }).catch((exception) => {
                    console.log('fetchContacts failed', exception);
                    this.contactList.contacts = [];
                });
            },
            addContact(contact) {
                this.$axios.post(CONF.ADD, contact).then((response) => {
                    if (response.data.status === 'success') {
                        this.contactList.pageno = 1;
                        this.fetchContacts();
                    } else {
                        console.log('연락처 추가 실패: ' + response.data.message);
                    }
                }).catch((exception) => {
                    console.log('addContact failed', exception);
                });
            },
            updateContact(contact) {
                this.$axios.put(CONF.UPDATE.replace('${no}', contact.no), contact).then((response) => {
                    if (response.data.status === 'success') {
                        this.fetchContacts();
                    } else {
                        console.log('연락처 변경 실패: ' + response.data.message);
                    }
                }).catch((exception) => {
                    console.log('updateContact failed', exception);
                });
            },
            fetchContactOne(no) {
                this.$axios.get(CONF.FETCH_ONE.replace('${no}', no)).then((response) => {
                    this.contact = response.data;
                }).catch((exception) => {
                    console.log('fetchContactOne failed', exception);
                });
            },
            deleteContact(no) {
                this.$axios.delete(CONF.DELETE.replace('${no}', no)).then((response) => {
                    if (response.data.status === 'success') {
                        this.fetchContacts();
                    } else {
                        console.log('연락처 삭제 실패: ' + response.data.message);
                    }
                }).catch((exception) => {
                    console.log('deleteContact failed', exception);
                });
            },
            updatePhoto(no, file) {
                let data = new FormData();

                data.append('photo', file);
                this.$axios.post(CONF.UPDATE_PHOTO.replace('${no}', no), data).then((response) => {
                    if (response.data.status === 'success') {
                        this.fetchContacts();
                    } else {
                        console.log('연락처 사진 변경 실패: ' + response.data.message);
                    }
                }).catch((exception) => {
                    console.log('updatePhoto failed', exception);
                });
            }
        }
    }
</script>

<style scoped>
    #container {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>