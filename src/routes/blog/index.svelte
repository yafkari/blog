<style>
  ul {
    margin: 0 0 1em 0;
    line-height: 1.5;
    padding-left: 30px;
  }

  li {
    margin: 0 0 1.2em 0;
    list-style: none;
  }

  @media (max-width: 640px) {
    ul {
      padding: 0;
    }
  }

  h1 {
    margin-bottom: 1.5em;
  }
</style>

<script context="module" lang="ts">
  /** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		const res = await fetch('https://dev.to/api/articles?username=yafkari');

		if (res.ok) {
			return {
				props: {
					posts: await res.json()
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load articles`)
		};
	}
</script>

<script>
	export let posts;
  import Post from "../../components/Post.svelte";
</script>

<h1>Recent posts</h1>
<ul>
  {#each posts as post}
    <li>
      <Post {post} />
    </li>
  {/each}
</ul>