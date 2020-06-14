<template>
  <div>
    <h1>Details</h1>
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
      <router-link class="btn btn-secondary" to="/priorities">Back to list</router-link> <router-link
        class="btn btn-primary"
        :to="{ name: 'TodoPriorities Edit', params: { id: this.id }}"
      >Edit</router-link>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { IPriority } from '../../types/IPriority';
import { PriorityService } from '../../service/PriorityService';

@Component
export default class TodoPriorityDetails extends Vue {
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
}
</script>
