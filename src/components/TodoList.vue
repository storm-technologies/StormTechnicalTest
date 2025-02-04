<script setup>
import { ref, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '@/stores/todo.store'

const todoStore = useTodoStore()
const { todos, displayedTodos } = storeToRefs(todoStore)

const newTodo = ref('')
const errorMessage = ref('')

const addNewTodo = () => {
  if (newTodo.value.trim()) {
    todoStore.addTodo(newTodo.value)
  } else {
    errorMessage.value = 'Todo cannot be empty. Please enter a todo before adding.'
  }
  newTodo.value = ''
}

watch(
  () => newTodo.value,
  (val) => {
    if (val) {
      errorMessage.value = ''
    }
  },
)
</script>

<template>
  <div class="max-w-96 w-full mx-auto">
    <div class="mb-8">
      <div class="flex flex-col tablet:flex-row items-center gap-2">
        <input
          v-model="newTodo"
          @keyup.enter="addNewTodo"
          placeholder="Enter a new todo..."
          class="w-full p-2 border rounded placeholder:text-sm"
        />
        <button
          type="submit"
          class="bg-primary p-2 text-white rounded whitespace-nowrap w-full tablet:w-max"
          @click="addNewTodo"
        >
          Add new todo
        </button>
      </div>
      <p v-if="errorMessage" class="text-danger mt-2 text-center">
        {{ errorMessage }}
      </p>
    </div>

    <ul v-if="displayedTodos.length" class="space-y-2">
      <li v-for="todo in todos" :key="todo.id" class="p-2 border rounded-md break-words">
        {{ todo.task }}
      </li>
    </ul>
    <p v-else class="text-center">No todo has been added yet.</p>
  </div>
</template>
