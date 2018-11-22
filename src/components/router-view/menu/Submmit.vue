<template>
  <div id="submit" class=" ">

    <h1 class="label-view">Submit Form</h1>
    <div class="@grid-menu">

      <div class="$plataform">

        <p class="paragraph">The Form belove will allow you to send a new request to the server.</p>

        <form @submit.prevent="sendForm">

          <div class="form-group-1">
            <label for="name">Name</label>
            <input autocomplete="off" type="text" placeholder="Add a name" name="name" v-model="name">
          </div>

          <div class="form-group-1">
            <label for="email">Email</label>
            <input autocomplete="off" type="text" placeholder="Add an email address" name="email" v-model="email">
          </div>

          <div class="form-group-1">
            <label for="comment">Comment ( Optional )</label>
            <input autocomplete="off" type="text" placeholder="Add a comment" name="comment" v-model="comment">
          </div>

          <hr class="dvr2">

          <div class="form-group-1">
            <label for="category">Category</label>
            <select v-model="category">
              <option v-for="category in categories" :key="category">{{ category }}</option>
            </select>
          </div>

          <div class="form-group-1">
            <label>Upload image ( Optional )</label>
            <UploadFile />
          </div>

          <div class="form-group-1">
            <label for="title">Title</label>
            <input autocomplete="off" type="text" placeholder="Add a title" name="title" v-model="title">
          </div>

          <div class="form-group-1">
            <label for="description">Description</label>
            <textarea rows="3" placeholder="Add a description" v-model="description"></textarea>
          </div>

          <div class="form-group-1">
            <p class="agreed">
              <label class="TB_label">
                <input class="TB_input" type='checkbox' value="Agreed" v-model="terms">
                <span class="TB_span"></span>
                I agree to terms
              </label>
            </p>
            <router-link class="disclaimer-link" :to="{ name: 'Disclaimer' }">Terms & Conditions </router-link>
          </div>

          <span v-if="feedback" class="feedback-warning">{{feedback}}</span>
          <br>
          <br>
          <button name="submit" type="input" class="button-submmit">
            <a class="bttn"> Submit</a>
          </button>

        </form>

      </div>
    </div>
  </div>
</template>


<script>
import db from '@/firebase/init'
import "firebase/storage"
import UploadFile from './UploadFile.vue'

export default {
  name: 'Submit',
  components: {
    UploadFile
  },
  data() {
    return {
      categories: ['Choose a category', 'News', 'Exchanges', 'Tracker', 'Communities', 'People', 'ICO'],
      category: 'Choose a category',
      email: null,
      name: null,
      comment: null,
      title: null,
      description: null,
      terms: null,
      feedback: null,
    }
  },
  methods: {
    sendForm() {
      if (this.terms, this.name, this.email, this.category, this.title, this.description) {

        db.collection('formSumitted').add({
          name: this.name,
          email: this.email,
          category: this.category,
          title: this.title,
          description: this.description,
          terms: this.terms

        }).catch(err => {
          colsole.log(err)
        })

        this.name = null
        this.email = null
        this.comment = null
        this.category = 'Choose a category',
          this.title = null
        this.description = null
        this.terms = null
        this.feedback = null

      } else {
        this.feedback = "One or more fields must be fill in order to summit the form"
      }
    }
  }
}
</script>


<style scoped>
.TB_label {
  cursor: pointer;
  min-width: 180px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  color: aquamarine;
}

.TB_label:hover {
  color: rgba(127, 255, 212, 0.61);
}

.TB_label .TB_input {
  display: none;
}

.TB_label .TB_span {
  overflow: hidden;
  height: 16px;
  width: 16px;
  border: 3px double aquamarine;
  border-radius: 32px;
  display: inline-block;
  position: relative;
}

[type=checkbox]:checked+span:before {
  content: ' .';
  background: aquamarine;
  position: absolute;
  font-size: 32px;
  color: aquamarine !important;
}

.disclaimer-link {
  display: inline-flex;
  align-self: flex-start;
  font-weight: 600;
}

</style>
