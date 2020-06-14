<template>
  <div>
    <h1>New priority</h1>
    <hr/>
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
              v-model="priority.todoPriorityName"
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
              v-model="priority.todoPrioritySort"
            />
          </div>
        </div>
        <div class="form-group row mt-4">
          <div class="col-sm-10">
            <router-link class="btn btn-secondary" to="/priorities">Back to list</router-link> <button type="submit" class="btn btn-primary">Add</button>
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

@Component
export default class CategoryCreate extends Vue {
  private priority: IPriority = {
    id: 0,
    todoPriorityName: "",
    todoPrioritySort: 0
  };

  async submitForm() {
    if (this.priority.todoPrioritySort != null) {
      this.priority.todoPrioritySort = Number(this.priority.todoPrioritySort);
    }

    await PriorityService.createPriority(this.priority);
    this.$router.push("/priorities");
  }
}
</script>
