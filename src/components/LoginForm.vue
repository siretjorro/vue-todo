<template>
    <div>
        <form @submit.prevent="submitForm">
            <input type="text" placeholder="Username" v-model="email"><br>
            <input type="password" placeholder="Password" v-model="password"><br>
            <button type="submit">Log in</button>
        </form>
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Axios from 'axios'

@Component
export default class ToDoForm extends Vue {
    public email: string = ''
    public password: string = ''

    public submitForm (): void {
      this.login(this.email, this.password)
    }

    login (email: string, password: string) {
      let params = {
        'email': this.email,
        'password': this.password
      }
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      Axios.post('https://taltech.akaver.com/api/account/login', params, config)
        .then(data => {
          console.log(data.data.token)
          this.$store.commit('updateToken', data.data.token)
          this.$router.push('/todos')
        })
        .catch(error => {
          console.log(error.response)
          this.$store.commit('updateToken', '')
        })
    }
}
</script>
