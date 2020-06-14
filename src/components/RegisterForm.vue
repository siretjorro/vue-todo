<template>
    <div>
        <form @submit.prevent="submitForm">
            <input type="text" placeholder="Username" v-model="email"><br>
            <input type="password" placeholder="Password" v-model="password"><br>
            <button type="submit">Register</button>
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
      this.register(this.email, this.password)
    }

    async register (email: string, password: string) {
      let params = {
        'email': email,
        'password': password
      }
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      }
      Axios.post('https://taltech.akaver.com/api/account/register', params, config)
        .then(data => {
          console.log(data.data)
          this.$router.push('/')
        })
        .catch(error => {
          console.log(error.response)
        })
    }
}
</script>
