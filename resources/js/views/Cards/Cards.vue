<template>
  <div>
    <spiner v-if="isLoading" />
    <div v-else>
      <div class="uk-child-width-1-2@m" uk-grid>
    <div v-for="(post, key) in posts" :key="key">
        <div class="uk-card uk-card-default">
            <div class="uk-card-body">
                <h3 class="uk-card-title">{{post.title}}</h3>
                <p>{{post.body}}</p>
            </div>
            <div class="uk-card-media-bottom">
                <img src="https://getuikit.com/docs/images/light.jpg" alt="" >
            </div>
        </div>
    </div>
</div></div>
  </div>
</template>

<script>
import Spiner from "../../components/Spinner/Spinner";
import axios from "axios";
export default {
  name: "Card",
  components: {
    Spiner,
  },
  data() {
    return {
      posts: [],
      isLoading: true,
    };
  },
  methods: {
    getAllPosts() {
      axios.get("http://localhost:8000/api/posts").then((res) => {
        this.posts = res.data;
        this.isLoading = false;
      });
    },
  },
  mounted() {
    this.getAllPosts();
  },
};
</script>
