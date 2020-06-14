<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>TodoTasks</h1>
      </div>
      <div class="col">
        <div class="float-right">
          <router-link class="btn btn-secondary" to="/todotasks/create">Add new</router-link>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Task</th>
            <th scope="col">Completed</th>
            <th scope="col">Added</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in this.tasks" v-bind:key="task.id">
            <th scope="row">{{task.id}}</th>
            <td>{{task.todoTaskName}}</td>
            <td>
              <input type="checkbox" id="completedInput" disabled v-model="task.isCompleted" />
            </td>
            <!-- <td>${task.isCompleted}</td> -->
            <td>{{task.createdDT}}</td>
            <td>
              <router-link :to="{ name: 'TodoTasks Edit', params: { id: task.id }}">Edit</router-link> |
              <router-link
                :to="{ name: 'TodoTasks Details', params: { id: task.id }}"
              >Details</router-link> |
              <router-link
                :to="{ name: 'TodoTasks Delete', params: { id: task.id }}"
              >Delete</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import Axios from "axios";
import { ITodo } from '@/types/ITodo';
import { TaskService } from '../../service/TaskService';

@Component
export default class TodoTasks extends Vue {
  public tasks: ITodo[] = [];

  async mounted() {
    TaskService.getTasks().then(response => {
      this.tasks = response.data!;
    });
  }
}
</script>
