<template>
  <div>
    <h2>Create Post</h2>

    <form method="post" @submit.prevent="createPost">
      <div class="uk-margin">
        <input class="uk-input" type="text" placeholder="Post Title" v-model="title" />
      </div>
      <div class="uk-margin">
        <input class="uk-input" type="text" placeholder="Post Body" v-model="body" />
      </div>
        <button class="uk-button uk-button-primary" type="submit">Create</button>
    </form>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: "create-post",
  data() {
      return {
          title: '',
          body: ''
      }
  },
  methods: {
      createPost() {
          axios.post('/api/posts', {title: this.title, body: this.body})
          .then(res => {
              console.log(res);
          })
          .catch(err =>{
              console.log(err, 'err');
          })
      }
  }
};
</script>
