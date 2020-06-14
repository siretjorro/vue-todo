<template>
  <div>
    <h1>Register</h1>
    <div class="row">
      <div class="col-md-6">
        <section>
          <form id="account" method="post" @submit.prevent="submitForm">
            <h4>Register a new account</h4>
            <!-- <h4 if.bind="_errorMessage != null" style="color:red;">${_errorMessage}</h4> -->
            <hr />
            <div class="form-group">
              <label for="Input_Email">Email</label>
              <input class="form-control" type="email" v-model="email" />
            </div>
            <div class="form-group">
              <label for="Input_Password">Password</label>
              <input class="form-control" type="password" v-model="password" />
            </div>
            <div class="form-group">
              <label for="Input_First_Name">First name</label>
              <input class="form-control" type="text" v-model="firstName" />
            </div>
            <div class="form-group">
              <label for="Input_Last_Name">Last name</label>
              <input class="form-control" type="text" v-model="lastName" />
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-primary">Register</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
import { AccountService } from "@/service/AccountService";
import Axios from "axios";

@Component
export default class Register extends Vue {
  public email: string = "";
  public password: string = "";
  public firstName: string = "";
  public lastName: string = "";

  public submitForm(): void {
    AccountService.register({
      email: this.email,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName
    }).then(data => this.$store.commit("updateToken", data));
    this.$router.push("/");
  }
}
</script>
