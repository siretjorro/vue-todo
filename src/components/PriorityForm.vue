<template>
    <div>
        <form @submit.prevent="submitForm">
            <input type="text" placeholder="Priority" v-model="priority"><br>
            <button type="submit">Add priority</button>
        </form>
    </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import Axios from 'axios'

@Component
export default class ToDoForm extends Vue {
    public priority: string = ''

    public submitForm (): void {
      this.postPriority(this.priority)
    }

    async postPriority (priority: string) {
      const config = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer ' + this.$store.state.token
        }
      }
      let params = {
        'ToDoPriorityName': priority,
        'ToDoPrioritySort': 1
      }
      Axios.post('https://taltech.akaver.com/api/todopriorities', params, config)
        .then(data => {
          console.log(data.data)
        })
        .catch(error => {
          console.log(error.response)
        })
    }
}
</script>
