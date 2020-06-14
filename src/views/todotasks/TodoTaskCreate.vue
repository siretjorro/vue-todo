<template>
  <div>
    <h1>New todo</h1>
    <hr />
    <div class="mt-4">
      <form @submit.prevent="submitForm">
        <div class="form-group row">
          <label for="nameInput" class="col-sm-2 col-form-label">Name (required)</label>
          <div class="col-sm-5">
            <input
              type="text"
              class="form-control"
              id="nameInput"
              placeholder="Name"
              v-model="task.todoTaskName"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="sortInput" class="col-sm-2 col-form-label">Sort</label>
          <div class="col-sm-5">
            <input
              type="number"
              class="form-control"
              id="sortInput"
              placeholder="Sort"
              v-model="task.todoTaskSort"
            />
          </div>
        </div>
        <div class="form-group row">
          <label for="categorySelect" class="col-sm-2 col-form-label">Category</label>
          <div class="col-sm-5">
            <select class="form-control" id="categorySelect" v-model="task.todoCategoryId">
              <option
                v-for="category in this.categories"
                v-bind:value="category.id"
                v-bind:key="category.id"
              >{{category.todoCategoryName}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="prioritySelect" class="col-sm-2 col-form-label">Priority</label>
          <div class="col-sm-5">
            <select class="form-control" id="prioritySelect" v-model="task.todoPriorityId">
              <option
                v-for="priority in this.priorities"
                v-bind:key="priority.id"
                v-bind:value="priority.id"
              >{{priority.todoPriorityName}}</option>
            </select>
          </div>
        </div>
        <div class="form-group row">
          <label for="completedInput" class="col-sm-2 col-form-label">Completed</label>
          <div class="col-sm-5">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="completedInput"
                v-model="task.isCompleted"
              />
            </div>
          </div>
        </div>
        <div class="form-group row">
          <label for="archivedInput" class="col-sm-2 col-form-label">Archived</label>
          <div class="col-sm-5">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                id="archivedInput"
                v-model="task.isArchived"
              />
            </div>
          </div>
        </div>
        <div class="form-group row mt-4">
          <div class="col-sm-10">
            <router-link class="btn btn-secondary" to="/todotasks">Back to list</router-link> <button type="submit" class="btn btn-primary">Add</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IPriority } from '../../types/IPriority';
import { PriorityService } from '../../service/PriorityService';
import { ITodo } from '@/types/ITodo';
import { ICategory } from '@/types/ICategory';
import { CategoryService } from '@/service/CategoryService';
import { TaskService } from '../../service/TaskService';

@Component
export default class TodoTaskCreate extends Vue {
  private task: ITodo = {
    id: 0,
    todoTaskName: "",
    todoTaskSort: 0,
    todoCategoryId: 0,
    todoPriorityId: 0,
    createdDT: "",
    isCompleted: false,
    isArchived: false
  };
  private categories: ICategory[] = [];
  private priorities: IPriority[] = [];

  mounted(): void {
    CategoryService.getCategories().then(response => {
      this.categories = response.data!;
    });

    PriorityService.getPriorities().then(response => {
      this.priorities = response.data!;
    });
  }

  async submitForm() {
    if (this.task.todoTaskSort != null) {
      this.task.todoTaskSort = Number(this.task.todoTaskSort);
    }

    await TaskService.createTask(this.task);
    this.$router.push("/todotasks");
  }
}
</script>
