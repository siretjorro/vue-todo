<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>TodoCategories</h1>
      </div>
      <div class="col">
        <div class="float-right">
          <router-link class="btn btn-secondary" to="/categories/create">Add new</router-link>
        </div>
      </div>
    </div>
    <div class="row mt-4">
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Sort</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in this.categories" v-bind:key="category.id">
            <th scope="row">{{category.id}}</th>
            <td>{{category.todoCategoryName}}</td>
            <td>{{category.todoCategorySort}}</td>
            <td>
              <router-link :to="{ name: 'TodoCategories Edit', params: { id: category.id }}">Edit</router-link> |
              <router-link :to="{ name: 'TodoCategories Details', params: { id: category.id }}">Details</router-link> |
              <router-link :to="{ name: 'TodoCategories Delete', params: { id: category.id }}">Delete</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import Axios from "axios";
import { IPriority } from "@/types/IPriority";
import { ITodo } from "@/types/ITodo";
import { ICategory } from "../../types/ICategory";
import { CategoryService } from "@/service/CategoryService";

@Component
export default class Categories extends Vue {
  public categories: ICategory[] = [];

  async mounted() {
    CategoryService.getCategories().then(response => {
      this.categories = response.data!;
    });
  }
}
</script>
