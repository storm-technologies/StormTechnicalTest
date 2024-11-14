<script setup>

import { ref } from 'vue';
import TodoItem from './TodoItem.vue'; 

const todos = ref([
    "Test list item"
]);

const newTodo = ref('');

function addTodo() {

    if(newTodo.value === '') {
        return;
    }

    todos.value.push(newTodo.value);

    newTodo.value = '';
}

function deleteTodo(index) {
    
}


</script>

<template>
    
    <div class="">

        <div class="flex justify-center mt-3">Component: ToDoList</div>
        <div class="flex justify-center mt-3">
            <input type="text" placeholder="Add a new todo" v-model="newTodo" />
            <button @click="addTodo">Add</button>
        </div>
        <div class="flex flex-col items-center justify-center mt-3">
            <TodoItem v-for="(todo,index) in todos" v-bind:key="index" :text="todo" :on-delete="deleteTodo(index)" />
        </div>

    </div>

</template>
    
