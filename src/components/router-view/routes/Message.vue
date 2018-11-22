<!-- -HMTL- NewMessage
============================================================= -->
<template>
  <div class="new-message">
    <form @submit.prevent="addMessage">
      <label for="userName">Name</label>
      <input autocomplete="off" type="text" placeholder="Nakamoto" name="userName" v-model="userName">
    
      <label for="newMessage">Comment</label>
      <input autocomplete="off"  type="text" placeholder="Add a public comment..." name="newMessage" v-model="newMessage">

      <div class="feedback-warning">
        <p v-if="feedback">{{feedback}}</p>
      </div>

    <button name="messege-input" type="input" class="button-chat">
       <a class="bttn"> Input</a>
    </button>

    </form>
  </div>
</template>


<!-- JS NewMessage
============================================================= -->
<script>
import db from '@/firebase/init'

export default {
  name: 'Message',
  data() {
    return {
      newMessage: null,
      userName: 'Nakamoto',
      feedback: null
    }
  },
  methods: {
    addMessage() {
      if (this.newMessage) {
        db.collection('messages').add({
          content: this.newMessage,
          name: this.userName,
          timestamp: Date.now()
        }).catch(err => {
          colsole.log(err)
        })
        this.newMessage = null
        this.userName = 'Nakamoto'
        this.feedback = null
      } else {
        this.feedback = "You must enter a comment"
      }
    }
  }
}

</script>

<!-- CSS NewMessage
============================================================= -->
<style>

</style>