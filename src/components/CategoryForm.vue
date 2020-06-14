<template>
    <div>
        <form @submit.prevent="submitForm">
            <input type="text" placeholder="Category" v-model="category"><br>
            <button type="submit">Add category</button>
        </form>
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Axios from 'axios'

@Component
export default class ToDoForm extends Vue {
    public category: string = ''

    public submitForm (): void {
      this.postCategory(this.category)
    }

    async postCategory (category: string) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + this.$store.state.token
        }
      }
      let params = {
        'ToDoCategoryName': category,
        'ToDoCategorySort': 1
      }
      Axios.post('https://taltech.akaver.com/api/todocategories', params, config)
        .then(data => {
          console.log(data.data)
        })
        .catch(error => {
          console.log(error.response)
        })
    }
}
</script>
