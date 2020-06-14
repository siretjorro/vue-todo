<template>
  <div>
    <h1>Delete</h1>
    <div>
      <h4>TodoPriority</h4>
      <hr />
      <dl class="row">
        <dt class="col-sm-2">#</dt>
        <dd class="col-sm-10">{{this.priority.id}}</dd>
        <dt class="col-sm-2">Name</dt>
        <dd class="col-sm-10">{{this.priority.todoPriorityName}}</dd>
        <dt class="col-sm-2">Sort</dt>
        <dd class="col-sm-10">{{this.priority.todoPrioritySort}}</dd>
      </dl>
    </div>
    <div>
      <form @submit.prevent="submitForm">
      <router-link class="btn btn-secondary" to="/priorities">Back to list</router-link> <button type="submit" class="btn btn-danger">Delete</button>
      </form>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { IPriority } from '../../types/IPriority';
import { PriorityService } from '../../service/PriorityService';

@Component
export default class TodoPriorityDelete extends Vue {
  @Prop() private id!: number;
  private priority: IPriority = {
    id: 0,
    todoPriorityName: "",
    todoPrioritySort: 0
  };

  mounted(): void {
    PriorityService.getPriority(this.id).then(response => {
      this.priority = response.data!;
    });
  }

  async submitForm() {
    await PriorityService.deletePriority(this.id);
    this.$router.push("/priorities");
  }
}
</script>
