
<style>
  .top-post-image {
    max-width: 65%;
  }

  
  .top-post-image img {
    width: 90%;
  }

  .top-post-image a {
    display: flex;
    justify-content: center;
  }

	.taglist {
		list-style-type: none;
		padding-left: 0;
	}
	.blog-title {
		width: 100%;
		padding-bottom: 40px;
		border-bottom: 1px solid lightgrey;
	}

	.top-post {
		width: 100%;
		padding-top: 25px;
		display: flex;
	}

	.top-post > img {
		width: 65%;
	}

	.post-details {
		width: 100%;
	}

	.post-details > h3 {
		font-weight: 600;
		margin: 10px 0;
		font-size: 1.3rem;
	}

	.post-details > h6 {
		font-size: 0.9rem;
		font-weight: 600;
	}

	.top-post-details {
		width: 35%;
		/* margin-top: 30px; */
		margin-left: 5%;
	}

	.top-post-details > h3 {
		font-size: 1.6rem;
	}

	.other-posts {
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding-top: 35px;
	}

	.other-post {
		/* width: 30%; */
		height: 100%;
	}

	.other-post > img {
		width: 100%;
	}

	.bio {
		display: flex;
	}

	.bio > img {
		width: 40px;
		border-radius: 100%;
		margin-right: 10px;
	}

	.posts {
		padding-left: 0;
		list-style-type: none;
		padding-top: 4em;
	}

	.post-details h5 {
		padding-top: 0.5em;
	}

	.taglist {
		list-style-type: none;
		padding-left: 0;
		display: flex;
		flex-wrap: wrap;
	}
	.tag {
		margin-right: 0.5em;
		margin-bottom: 0.5em;
		border-radius: 100px;
		background-color: #eaeaea;
		padding: 2px 8px;
		display: inline-block;
	}

  @media (max-width: 768px) {
    .top-post {
      flex-direction: column;
      align-items: center;
    }

    .top-post-details {
      width: 90%;
      margin: 0;
    }

    .top-post-image {
      max-width: 100%;
      width: 100%;
    }

    .posts {
      padding-top: 2em;
    }
  }
</style>

<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').Load} */
	export async function load({ fetch }) {
		const res = await fetch('https://dev.to/api/articles?username=yoadev');

		if (res.ok) {
			let posts = await res.json();
			let firstPost = posts.shift();
			return {
				props: {
					posts,
					firstPost
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
	import Post from '../components/Post.svelte';
	export let posts;
	export let firstPost;
</script>

<svelte:head>
  <meta name="description" content="Younes Afkari Blog" />
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
		crossorigin="anonymous"
	/>
</svelte:head>


<!-- Inspired of https://codepen.io/Elijah731/pen/VwyqGeG -->
<h1>Recent posts</h1>
<div class="top-post">
	<div class="top-post-image">
    <a sveltekit:prefetch href="blog/{firstPost.slug}">
      <img src={firstPost.social_image} alt="post illustration" />
    </a>
  </div>
	<div class="post-details top-post-details">
		<a sveltekit:prefetch href="blog/{firstPost.slug}">
			<h2>{firstPost.title}</h2>
		</a>
		<h5>{firstPost.description}</h5>
		<div class="bio">
			<div>
				<p>
					{new Date(firstPost.published_at).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'short',
						day: 'numeric'
					})} - {firstPost.reading_time_minutes} Min Read
				</p>
				<ul class="taglist">
					{#each firstPost.tag_list as tag}
						<li class="tag">{tag}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
<ul class="posts row">
	{#each posts as post}
		<li class="col-sm-12 col-md-4 col-lg-4">
			<Post {post} />
		</li>
	{/each}
</ul>
