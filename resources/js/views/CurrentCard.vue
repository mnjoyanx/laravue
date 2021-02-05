<template>
  <div>
    <div v-if="isLoading">
      <spinner />
    </div>
<div v-else-if="notFound">
    <h2>Post Not Found</h2>
    </div>
    <div class="uk-child-width-1-2@m" uk-grid v-else>
      <div>
        <div class="uk-card uk-card-default">
          <div class="uk-card-body">
            <h3 class="uk-card-title">{{ card.title }}</h3>
            <p>{{ card.body }}</p>
          </div>
          <div class="uk-card-media-bottom">
            <p>{{ card.created_at }}</p>
            <img src="https://getuikit.com/docs/images/light.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import axios from "axios";
import Spinner from "../components/Spinner/Spinner.vue";

export default {
  components: { Spinner },
  name: "currentCard",
  data() {
    return {
      card: {
        title: "",
        body: "",
        created_at: "",
      },

      notFound: false,
      isLoading: false,
    };
  },
  methods: {
    getCurrentPost(id) {
        let {title, body, created_at} = this.card
        this.isLoading = true
      axios
        .get("/api/posts/" + id)
        .then((res) => {
            console.log(res, 'res');
          title = res.data.title;
          body = res.data.body;
          created_at = res.data.created_at;
          this.isLoading = false;
        })
        .catch((err) => {
            console.log(err, 'err');
            this.isLoading = false
          this.notFound = true;
        });
    },
  },
  mounted() {
    this.getCurrentPost(this.$route.params.id);
  },
};
</script>
