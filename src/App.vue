<template>
  <div>
    <header>
      <nav
        class="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3"
      >
        <div class="container">
          <router-link class="navbar-brand" to="/">Todo Vue</router-link>

          <!-- <a class="navbar-brand" href="/home">Todo</a> -->
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target=".navbar-collapse"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse">
            <ul v-if="this.$store.state.token === ''" class="navbar-nav">
              <li class="nav-item">
                <router-link class="nav-link text-dark" to="/register">Register</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link text-dark" to="/login">Login</router-link>
              </li>
            </ul>

            <ul v-if="this.$store.state.token != ''" class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link text-dark" href="#" @click="logoutOnClick()">Logout</a>
              </li>
            </ul>

            <ul v-if="this.$store.state.token != ''" class="navbar-nav flex-grow-1">
              <li>
                <router-link class="nav-link text-dark" to="/todotasks">TodoTasks</router-link>
              </li>
              <li>
                <router-link class="nav-link text-dark" to="/categories">TodoCategories</router-link>
              </li>
              <li>
                <router-link class="nav-link text-dark" to="/priorities">TodoPriorities</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    <div class="container">
      <main role="main">
        <router-view />
      </main>
    </div>

    <footer class="border-top footer text-muted">
      <div class="container">&copy; 2020 - Siret Jorro</div>
    </footer>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  logoutOnClick() {
    this.$store.commit("updateToken", "");
    this.$router.push("/");
  }
}
</script>
