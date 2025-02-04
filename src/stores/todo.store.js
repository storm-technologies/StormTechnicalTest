import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref([])
  const addTodo = (todo) => {
    todos.value.push({
      task: todo,
      id: (Date.now() + Math.random()).toString(36),
      createdAt: Date.now(),
    })
  }
  const displayedTodos = computed(() => todos.value.sort((a, b) => b.createdAt - a.createdAt))

  return { todos, addTodo, displayedTodos }
})
