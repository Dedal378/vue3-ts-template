<script lang="ts" setup>
import { reactive } from 'vue'

const todos = reactive([
  { id: 0, title: 'Create a new video', done: false },
  { id: 1, title: 'Finish work', done: false },
  { id: 2, title: 'Watch youtube', done: false }
])
const toggleTodo = (id: Number) => {
  const todo = todos.find((todo: { id: Number }) => todo.id === id)
  if (todo) {
    todo.done = !todo.done
  }
}
const addTodo = (evt: { target: HTMLFormElement | undefined; }) => {
  const data = new FormData(evt.target)

  evt.target.reset()

  todos.push({
    id: todos.length,
    title: data.get('title'),
    done: false,
  })
}
</script>

<template>
  <slot
    :addTodo="addTodo"
    :todos="todos"
    :toggleTodo="toggleTodo"
  />
</template>
