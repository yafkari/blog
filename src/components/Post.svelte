<style>
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
    padding-top: .5em;
    padding-bottom: 3em;
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
		margin-top: 30px;
		margin-left: 45px;
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
	.taglist {
		list-style-type: none;
		padding-left: 0;
    display: flex;
    flex-wrap: wrap;
	}
  .tag {
    margin-right: .5em;
    margin-bottom: .5em;
    border-radius: 100px;
    background-color: #eaeaea;
    padding: 2px 8px;
    display: inline-block;
  }
  .post-details > h5 {
    padding-top: 0.5em;
  }

  .other-post a img {
    max-width: -webkit-fill-available;
  }
</style>

<script>
	export let post;
</script>

<div class="other-post">
	<a sveltekit:prefetch href="blog/{post.slug}"><img src={post.social_image} alt="illustration" /></a>
	<div class="post-details">
		<a sveltekit:prefetch href="blog/{post.slug}">
			<h3>{post.title}</h3>
		</a>
		<h5>{post.description}</h5>
		<div class="bio">
			<div>
				<p>{new Date(post.published_at).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })} - {post.reading_time_minutes} Min Read</p>
				<ul class="taglist">
					{#each post.tag_list as tag}
						<li class="tag">{tag}</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>
