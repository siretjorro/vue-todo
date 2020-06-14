<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h1>TodoPriorities</h1>
      </div>
      <div class="col">
        <div class="float-right">
          <router-link class="btn btn-secondary" to="/priorities/create">Add new</router-link>
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
          <tr v-for="priority in this.priorities" v-bind:key="priority.id">
            <th scope="row">{{priority.id}}</th>
            <td>{{priority.todoPriorityName}}</td>
            <td>{{priority.todoPrioritySort}}</td>
            <td>
              <router-link :to="{ name: 'TodoPriorities Edit', params: { id: priority.id }}">Edit</router-link> |
              <router-link :to="{ name: 'TodoPriorities Details', params: { id: priority.id }}">Details</router-link> |
              <router-link :to="{ name: 'TodoPriorities Delete', params: { id: priority.id }}">Delete</router-link>
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
import { PriorityService } from "@/service/PriorityService";

@Component
export default class Priorities extends Vue {
  public priorities: IPriority[] = [];

  async mounted() {
    PriorityService.getPriorities().then(response => {
      this.priorities = response.data!;
    });
  }
}
</script>
