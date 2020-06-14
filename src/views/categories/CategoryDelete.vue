<template>
  <div>
    <h1>Delete</h1>
    <div>
      <h4>TodoCategory</h4>
      <hr />
      <dl class="row">
        <dt class="col-sm-2">#</dt>
        <dd class="col-sm-10">{{this.category.id}}</dd>
        <dt class="col-sm-2">Name</dt>
        <dd class="col-sm-10">{{this.category.todoCategoryName}}</dd>
        <dt class="col-sm-2">Sort</dt>
        <dd class="col-sm-10">{{this.category.todoCategorySort}}</dd>
      </dl>
    </div>
    <div>
      <form @submit.prevent="submitForm">
      <router-link class="btn btn-secondary" to="/categories">Back to list</router-link> <button type="submit" class="btn btn-danger">Delete</button>
      </form>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { ICategory } from "../../types/ICategory";
import { CategoryService } from "@/service/CategoryService";

@Component
export default class TodoCategoryDelete extends Vue {
  @Prop() private id!: number;
  private category: ICategory = {
    id: 0,
    todoCategoryName: "",
    todoCategorySort: 0
  };

  mounted(): void {
    CategoryService.getCategory(this.id).then(response => {
      this.category = response.data!;
    });
  }

  async submitForm() {
    await CategoryService.deleteCategory(this.id);
    this.$router.push("/categories");
  }
}
</script>
