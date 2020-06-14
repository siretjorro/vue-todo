<template>
  <div>
    <h1>Details</h1>
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
      <router-link class="btn btn-secondary" to="/categories">Back to list</router-link> <router-link
        class="btn btn-primary"
        :to="{ name: 'TodoCategories Edit', params: { id: this.id }}"
      >Edit</router-link>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { ICategory } from "../../types/ICategory";
import { CategoryService } from "@/service/CategoryService";

@Component
export default class TodoCategoryDetails extends Vue {
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
}
</script>
