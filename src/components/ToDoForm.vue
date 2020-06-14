<template>
    <div>
        <form @submit.prevent="submitForm">
            <input type="text" placeholder="Enter task..." v-model="task"><br>
            Select category
            <select name="category" v-model="category">
                <option v-for="category in this.categories" v-bind:key="category.id" :value="category.id">{{ category.todoCategoryName }}</option>
            </select><br>
            Select priority
            <select name="priority" v-model="priority">
                <option v-for="priority in this.priorities" v-bind:key="priority.id" :value="priority.id">{{ priority.todoPriorityName }}</option>
            </select><br>
            <button type="submit">Add Task</button>
        </form>
        <!-- <ul> -->
        <div class="list">
            <div v-for="task in this.todos" v-bind:key="task.id">
              {{task.todoTaskName}}
                <input type="checkbox" :checked="task.isCompleted"> {{ task.toDoTaskName }}
            </div>
        </div>
        <!-- </ul> -->
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Axios from 'axios'
import { IPriority } from '@/types/IPriority'
import { ITodo } from '@/types/ITodo'
import { ICategory } from '../types/ICategory'

@Component
export default class ToDoForm extends Vue {
    public task: string = ''
    public category: number = 0
    public priority: number = 0
    public priorities: IPriority[] = []
    public categories: ICategory[] = []
    public todos: ITodo[] = []

    async mounted () {
      await this.getTodos()
      await this.getPriorities()
      await this.getCategories()
    }

    async getPriorities () {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + this.$store.state.token
        }
      }
      Axios.get('https://taltech.akaver.com/api/todopriorities', config)
        .then(data => {
          console.log(data.data)
          this.priorities = data.data
        })
        .catch(error => {
          console.log(error.response)
        })
    }

    async getTodos () {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + this.$store.state.token
        }
      }
      Axios.get('https://taltech.akaver.com/api/todotasks', config)
        .then(data => {
          console.log(data.data)
          this.todos = data.data
        })
        .catch(error => {
          console.log(error.response)
        })
    }

    async getCategories () {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + this.$store.state.token
        }
      }
      Axios.get('https://taltech.akaver.com/api/todocategories', config)
        .then(data => {
          console.log(data.data)
          this.categories = data.data
        })
        .catch(error => {
          console.log(error.response)
        })
    }

    async postTodo (todo: ITodo) {
      let params = {
        'toDoTaskName': todo.todoTaskName,
        'toDoTaskSort': todo.todoTaskSort,
        'createdDT': todo.createdDT,
        'isCompleted': todo.isCompleted,
        'isArchived': todo.isArchived,
        'toDoCategoryId': todo.todoCategoryId,
        'toDoPriorityId': todo.todoPriorityId
      }
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + this.$store.state.token
        }
      }
      Axios.post('https://taltech.akaver.com/api/todotasks', params, config)
        .then(data => {
          console.log(data.data)
          this.getTodos()
        })
        .catch(error => {
          console.log(error.response)
        })
    }

    public submitForm (): void {
      this.postTodo({ todoTaskName: this.task, todoTaskSort: 1, createdDT: new Date().toISOString(), isCompleted: false, isArchived: false, todoCategoryId: this.category, todoPriorityId: this.priority } as ITodo)
    }
}
</script>

<style>
    .list {
        margin: 3%
    }
</style>
