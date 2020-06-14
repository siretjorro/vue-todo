<template>
  <div>
    <h1>Delete</h1>
    <div>
      <h4>TodoTask</h4>
      <hr />
      <dl class="row">
        <dt class="col-sm-2">Name</dt>
        <dd class="col-sm-10">{{task.todoTaskName}}</dd>
        <dt class="col-sm-2">Created</dt>
        <dd class="col-sm-10">{{task.createdDT}}</dd>
        <dt class="col-sm-2">Sort</dt>
        <dd class="col-sm-10">{{task.todoTaskSort}}</dd>
        <dt class="col-sm-2">Category</dt>
        <dd class="col-sm-10">{{category.todoCategoryName}}</dd>
        <dt class="col-sm-2">Priority</dt>
        <dd class="col-sm-10">{{priority.todoPriorityName}}</dd>
        <dt class="col-sm-2">Completed</dt>
        <dd class="col-sm-10">
          <input type="checkbox" id="completedInput" disabled v-model="task.isCompleted" />
        </dd>
        <dt class="col-sm-2">Archived</dt>
        <dd class="col-sm-10">
          <input type="checkbox" id="completedInput" disabled v-model="task.isArchived" />
        </dd>
      </dl>
    </div>
    <div>
      <form @submit.prevent="submitForm">
        <router-link class="btn btn-secondary" to="/todotasks">Back to list</router-link> <button type="submit" class="btn btn-danger">Delete</button>
      </form>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { IPriority } from "../../types/IPriority";
import { PriorityService } from "../../service/PriorityService";
import { TaskService } from "../../service/TaskService";
import { ITodo } from "../../types/ITodo";
import { ICategory } from "../../types/ICategory";
import { CategoryService } from "../../service/CategoryService";

@Component
export default class TodoTaskDelete extends Vue {
  @Prop() private id!: number;
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
  private category: ICategory = {
    id: 0,
    todoCategoryName: "",
    todoCategorySort: 0
  };
  private priority: IPriority = {
    id: 0,
    todoPriorityName: "",
    todoPrioritySort: 0
  };

  async mounted(): Promise<void> {
    await TaskService.getTask(this.id).then(response => {
      this.task = response.data!;
    });

    await CategoryService.getCategory(this.task.todoCategoryId).then(
      response => (this.category = response.data!)
    );
    await PriorityService.getPriority(this.task.todoPriorityId).then(
      response => (this.priority = response.data!)
    );
  }

  submitForm() {
    TaskService.deleteTask(this.id);
    this.$router.push("/todotasks");
  }
}
</script>
