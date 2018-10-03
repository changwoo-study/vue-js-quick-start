<template>
    <div id="app">
        <search placeholder="두 글자 이상 입력 후 엔터!"></search>
        <contact-list></contact-list>
    </div>
</template>

<script>
    import ContactList from './components/ContactList';
    import Search from './components/Search';

    export default {
        name: 'app',
        components: {
            ContactList,
            Search
        }
    }
</script>
