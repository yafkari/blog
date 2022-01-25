<style>
  h2 {
    font-weight: bold;
  }

  a {
    text-decoration: underline;
    text-underline-position: under;
  }

  a:hover {
    color: #6b6b6b;
  }

  a:visited {
    color: #683696;
  }

  .card {
    padding: 1em;
    margin-bottom: 10px;
    border: 2px solid #bababa;
    box-shadow: 3px 3px 0px #bababa;
  }
  .tags {
    margin: 10px 0;
  }
  .tag {
    border-radius: 100px;
    background-color: #eaeaea;
    padding: 2px 8px;
    margin-right: 10px;
    margin-top: 5px;
    display: inline-block;
  }

  @media (max-width: 640px) {
    .tag {
      margin-right: 5px;
      font-size: 0.8rem;
    }
  }
</style>

<script>
  export let post;
</script>

<div class="card">
  {new Date(post.published_at).toDateString()}
  <a sveltekit:prefetch href="blog/{post.slug}">
    <h2>{post.title}</h2>
  </a>

  <div class="tags">
    {#each post.tag_list as tag}
      <span class="tag">{tag}</span>
    {/each}
  </div>

  <p>{post.description}</p>
</div>
