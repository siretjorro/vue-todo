<template>
  <div>
    <h1>Log in</h1>
    <div class="row">
      <div class="col-md-6">
        <section>
          <form id="account" method="post" @submit.prevent="submitForm">
            <h4>Use a local account to log in.</h4>
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
              <button type="submit" class="btn btn-primary">Log in</button>
            </div>
            <div class="form-group">
              <p>
                <a
                  id="forgot-password"
                  href="/Identity/Account/ForgotPassword"
                >Forgot your password?</a>
              </p>
              <p>
                <a href="/Identity/Account/Register?returnUrl=%2F">Register as a new user</a>
              </p>
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
export default class Login extends Vue {
  public email: string = "";
  public password: string = "";

  public submitForm(): void {
    AccountService.login({
      email: this.email,
      password: this.password
    }).then(data => this.$store.commit("updateToken", data));
    this.$router.push("/");
  }
}
</script>
