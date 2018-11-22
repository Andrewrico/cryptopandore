<!-- -HMTL Chat
============================================================= -->
<template>
  <div id="consola-chat">

    <div class="chat">

      <div class="chat-message">
        <ul class="messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <div class="msg-avatar">
              <img class="message-img" v-bind:src="imageUrl" v-bind:alt="imageAlt">
            </div>
            <div class="msg-body">
              <span class="message-time">{{message.timestamp}}</span>
              <span class="message-userName">{{message.name}}</span>
              <span class="message-content">{{message.content}}</span>
            </div>
          </li>
        </ul>
      </div>

      <div class="chat-input">
        <div class="inputsCount">
          <p>{{inputs}} <span>Inputs</span> </p> 
        </div>
        <div class="lightBar">
          <span></span>
        </div>
        <Message />
      </div>

    </div>

  </div>
</template>


<!-- JS Chat
============================================================= -->
<script>



import db from '@/firebase/init'
import Message from './Message'
import moment from 'moment'

export default {

  name: 'ConsoleChat',
  components: {
    Message
  },
  data() {
    return {
      imageUrl: require(`@/assets/images/user.png`),
      imageAlt: 'an image',
      messages: [],
      inputs: 0,
    }
  },
  created() {
    let ref = db.collection('messages').orderBy('timestamp')
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type == 'added') {
          let doc = change.doc
          this.messages.push({
            id: doc.id,
            name: doc.data().name,
            content: doc.data().content,
            timestamp: moment(doc.data().timestamp).format('LL')
          })
           this.inputs = this.messages.length;
        }
      })
    })
  }
}
</script>


<!-- CSS Chat
============================================================= -->
<style >


</style>
