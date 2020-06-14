
<template>
  <div>
    <h1>New category</h1>
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
              v-model="category.todoCategoryName"
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
              v-model="category.todoCategorySort"
            />
          </div>
        </div>
        <div class="form-group row mt-4">
          <div class="col-sm-10">
            <router-link class="btn btn-secondary" to="/categories">Back to list</router-link> <button type="submit" class="btn btn-primary">Add</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { ICategory } from "../../types/ICategory";
import { CategoryService } from "@/service/CategoryService";

@Component
export default class CategoryCreate extends Vue {
  private category: ICategory = {
    id: 0,
    todoCategoryName: "",
    todoCategorySort: 0
  };

  async submitForm() {
    if (this.category.todoCategorySort != null) {
      this.category.todoCategorySort = Number(this.category.todoCategorySort);
    }

    await CategoryService.createCategory(this.category);
    this.$router.push("/categories");
  }
}
</script>
