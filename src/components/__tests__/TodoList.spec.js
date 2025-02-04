import { describe, it, expect, beforeEach, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { setActivePinia, createPinia } from 'pinia'
import TodoList from '@/components/TodoList.vue'
import { useTodoStore } from '@/stores/todo.store'

describe('TodoList.vue', () => {
  let wrapper
  let todoStore

  beforeEach(() => {
    setActivePinia(createPinia())

    wrapper = mount(TodoList, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn, stubActions: false })],
      },
    })
    todoStore = useTodoStore()
  })

  it('displays the initial empty state when no todo has been added', () => {
    expect(wrapper.find('p.text-center').text()).toBe('No todo has been added yet.')
  })

  it('adds a new todo when the inputted todo is valid', async () => {
    const input = wrapper.find('input')
    const button = wrapper.find('button')

    await input.setValue('New todo')
    await button.trigger('click')

    await wrapper.vm.$nextTick()

    expect(todoStore.todos.length).toBe(1)
    expect(todoStore.todos[0].task).toBe('New todo')
    expect(wrapper.findAll('li')).toHaveLength(1)
    expect(wrapper.find('li').text()).toBe('New todo')
  })

  it('displays an error message when adding an empty todo', async () => {
    const button = wrapper.find('button')

    await button.trigger('click')

    expect(wrapper.find('p.text-danger').exists()).toBe(true)
    expect(wrapper.find('p.text-danger').text()).toBe(
      'Todo cannot be empty. Please enter a todo before adding.',
    )
  })

  it('removes the error message when typing new todo', async () => {
    const input = wrapper.find('input')
    const button = wrapper.find('button')

    await button.trigger('click')
    expect(wrapper.find('p.text-danger').exists()).toBe(true)

    await input.setValue('Valid todo entry')
    expect(wrapper.find('p.text-danger').exists()).toBe(false)
  })

  it('displays the latest added todo at the top of todos list', async () => {
    todoStore.addTodo('First todo')
    await new Promise((r) => setTimeout(r, 1))
    todoStore.addTodo('Latest todo')

    await wrapper.vm.$nextTick()

    const todos = wrapper.findAll('li')
    expect(todos).toHaveLength(2)
    expect(todos[0].text()).toBe('Latest todo')
    expect(todos[1].text()).toBe('First todo')
  })
})
