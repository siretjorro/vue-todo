<template>
  <div>
    <h1>Edit</h1>

    <h4>TodoCategory</h4>
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
              v-model="category.todoCategoryName"
            />
          </div>
          <div class="form-group">
            <label class="control-label" for="Sort">Sort</label>
            <input
              class="form-control"
              type="number"
              id="sort"
              maxlength="64"
              v-model="category.todoCategorySort"
            />
          </div>
          <div class="form-group row mt-4">
            <div class="col-sm-10">
              <router-link class="btn btn-secondary" to="/categories">Back to list</router-link> <button type="submit" class="btn btn-primary">Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
import { ICategory } from "../../types/ICategory";
import { CategoryService } from "@/service/CategoryService";

@Component
export default class TodoCategoryEdit extends Vue {
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
    if (this.category.todoCategorySort != null) {
      this.category.todoCategorySort = Number(this.category.todoCategorySort);
    }

    await CategoryService.updateCategory(this.category!);
    this.$router.push("/categories");
  }
}
</script>
