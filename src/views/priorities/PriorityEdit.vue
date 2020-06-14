<template>
  <div>
    <h1>Edit</h1>

    <h4>TodoPriority</h4>
    <hr />
    <div class="row">
      <div class="col-md-4">
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label class="control-label" for="Name">Name</label>
            <input
              class="form-control"
              type="text"
              id="name"
              maxlength="64"
              v-model="priority.todoPriorityName"
            />
          </div>
          <div class="form-group">
            <label class="control-label" for="Sort">Sort</label>
            <input
              class="form-control"
              type="number"
              id="sort"
              maxlength="64"
              v-model="priority.todoPrioritySort"
            />
          </div>
          <div class="form-group row mt-4">
            <div class="col-sm-10">
              <router-link class="btn btn-secondary" to="/priorities">Back to list</router-link> <button type="submit" class="btn btn-primary">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { IPriority } from '../../types/IPriority';
import { PriorityService } from '../../service/PriorityService';

@Component
export default class TodoPriorityEdit extends Vue {
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
    if (this.priority.todoPrioritySort != null) {
      this.priority.todoPrioritySort = Number(this.priority.todoPrioritySort);
    }

    await PriorityService.updatePriority(this.priority!);
    this.$router.push("/priorities");
  }
}
</script>
