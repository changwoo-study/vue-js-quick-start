<template>
    <div id="container">
        <div class="page-header">
            <h1 class="text-center">연락처 관리 애플리케이션</h1>
            <p>(Dynamic Component + EventBus + Axios)</p>
        </div>
        <component :is="currentView"></component>
        <contact-list></contact-list>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    import ContactForm from './components/ContactForm';
    import ContactList from './components/ContactList';
    import UpdatePhoto from './components/UpdatePhoto';

    export default {
        name: 'app',
        components: {
            ContactForm,
            ContactList,
            UpdatePhoto
        },
        computed: mapState(['currentView'])
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