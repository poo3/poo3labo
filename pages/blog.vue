<template>
  <div class="blog-container">
    <h1>Blogページ</h1>
    <h1 id="title">{{ title }}</h1>
    <p id="body">{{ body }}</p>
  </div>
</template>

<script>
import axiosMicro from "../plugins/axios-microcms";
export default {
  data() {
    return {
      title: "",
      body: "",
    };
  },
  created() {
    axiosMicro
      .get("blog/gve7tmucp", {
        headers: {
          "X-API-KEY": process.env.NUXT_ENV_MICRO_CMS_API_KEY,
        },
      })
      .then((response) => {
        console.log(response);
        this.title = response.data.title;
        this.body = response.data.body;
      });
  },
};
</script>