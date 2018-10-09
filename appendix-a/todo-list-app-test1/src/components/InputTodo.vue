<style>
* {
    box-sizing: border-box;
}

.input {
    border: none;
    width: 75%;
    height: 35px;
    padding: 10px;
    float: left;
    font-size: 16px;
}

.addButton {
    padding: 10px;
    width: 25%;
    height: 35px;
    background: #d9d9d9;
    color: #555;
    float: left;
    text-align: center;
    font-size: 13px;
    cursor: pointer;
    transition: 0.3s;
}

.addButton:hover {
    background-color: #bbb;
}
</style>

<template>
    <div>
        <input class="input" type="text" id="task" v-model.trim="todo" placeholder="입력 후 엔터" v-on:keyup.enter="addTodo">
        <span class="addButton" v-on:click="addTodo">추가</span>
    </div>
</template>

<script>
import Constants from '../Constants';

export default {
    name: 'input-todo',
    data: function() {
        return {
            todo: ''
        };
    },
    methods: {
        addTodo: function() {
            this.$store.dispatch(Constants.ADD_TODO, {todo: this.todo});
            this.todo = '';
        }
    }
}
</script>