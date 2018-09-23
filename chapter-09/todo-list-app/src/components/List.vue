<style>
* {
    box-sizing: border-box;
}
ul {
    margin: 0;
    padding: 0;
}

ul li {
    cursor: pointer;
    position: relative;
    padding: 8px 8px 8px 40px;
    background: #eee;
    font-size: 14px;
    transition: 0.2s;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

ul li:hover {
    background: #ddd;
}

ul li.checked {
    background: #bbb;
    color: #fff;
    text-decoration: line-through;
}

ul li.checked:before {
    content: '';
    position: absolute;
    border-color: #fff;
    border-style: solid;
    border-width: 0 1px 1px 0;
    top: 10px;
    left: 16px;
    transform: rotate(45deg);
    height: 8px;
    width: 8px;
}

.close {
    position: absolute;
    right: 0;
    top: 0;
    padding: 12px 16px 12px 16px;
}

.close:hover {
    background-color: #f44336;
    color: white;
}
</style>
<template id="list-template">
    <ul id="todolist">
        <li v-for="a in todoList" :key="a.id" :class="checked(a.done)" @click="doneToggle(a.id)">
            <span>{{ a.todo }}</span>
            <span v-if="a.done">(완료)</span>
            <span class="close" v-on:click.stop="deleteTodo(a.id)">&#x00D7;</span>
        </li>
    </ul>
</template>
<script>
import eventBus from '../EventBus';

export default {
    created: function () {
        eventBus.$on('add-todo', this.addTodo);
    },
    data: function () {
        return {
            todoList: [
                {
                    id: 1,
                    todo: '영화보기',
                    done: false
                },
                {
                    id: 2,
                    todo: '주말 산책',
                    done: true
                },
                {
                    id: 3,
                    todo: 'ES6 학습',
                    done: false
                },
                {
                    id: 4,
                    todo: '잠실 야구장',
                    done: false
                }
            ]
        }
    },
    methods: {
        checked: function (done) {
            return {
                checked: !!done
            }
        },
        addTodo: function (todo) {
            if (todo !== '') {
                this.todoList.push({
                    // id 넣는게 빠져 있음
                    id: new Date().getTime(),
                    todo: todo.trim(),
                    done: false
                });
            }
        },
        doneToggle: function (id) {
            var index = this.todoList.findIndex(function (item) {
                return item.id === id;
            });
            this.todoList[index].done = !this.todoList[index].done;
        },
        deleteTodo: function (id) {
            var index = this.todoList.findIndex(function (item) {
                return item.id === id;
            });
            this.todoList.splice(index, 1);
        }
    }
};
</script>