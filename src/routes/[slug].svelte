<script context="module" lang="ts">
	/** @type {import('@sveltejs/kit').Load} **/
	export async function load({ params, fetch }) {
		const url = `https://dev.to/api/articles/yafkari/${params.slug}`;
		const res = await fetch(url);
		

		if (res.ok) {
			let post = await res.json();
			const commentsData = await fetch(`https://dev.to/api/comments?a_id=${post.id}`);
			let comments = await commentsData.json();

			return {
				props: {
					post: reformatArticle(post),
					comments
				}
			};
		}

		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script>

<script>
	import { marked } from 'marked';
	import hljs from 'highlight.js';
  import { reformatArticle } from '../utils/Utils';

	import SocialBar from '../components/SocialBar.svelte';
	import Comments from '../components/Comments.svelte';

	const renderer = new marked.Renderer();
	renderer.heading = (text, level) => {
    return `<h${level}>${text}</h${level}>`;
	};

	marked.setOptions({
		renderer,
		highlight: code => hljs.highlightAuto(code).value,
		xhtml: true
	});

	export let post;
	export let comments;
</script>

<svelte:head>
	<title>{post.title} - Younes Afkari Blog</title>
	<meta name="description" lang="en" content={post.description} />
	<link rel="canonical" href="https://blog.yafkari.dev/blog/{post.slug}" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:url" content="https://blog.yafkari.dev/blog/{post.slug}" />
	<meta name="twitter:title" content={post.title} />
	<meta name="twitter:description" content={post.description} />
	<meta name="twitter:image" content={post.cover_image} />
	<meta property="og:url" content="https://blog.yafkari.dev/blog/{post.slug}" />
	<meta property="og:title" content={post.title} />
	<meta name="og:description" content={post.description} />
	<meta property="og:type" content="article" />
	<meta property="og:image" content={post.cover_image} />
	<meta property="article:published_time" content={post.published_at} />
	<meta property="article:modified_time" content={post.edited_at} />
	<meta property="og:locale" content="en_US" />
	{#each post.tag_list.split(",") as tag}
		<meta property="article:tag" content={tag.trim()} />
	{/each}
</svelte:head>

<h1>{post.title}</h1>
<img class="image" src={post.cover_image} alt="Coer illustration" />

<div class="content">
	{@html marked(post.body_markdown)}
</div>

<SocialBar {post} />
<Comments {comments} />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
	.content {
		background-color: white;
		padding: 1.5em;
		padding-top: 1em;
		word-wrap: break-word;
		font-size: 1.2em;
		font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Ubuntu, Cantarell,
			'Open Sans';
	}

	:global(main) :global(img) {
		width: 100%;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}

	.content :global(a) {
		color: rgb(59, 73, 223);
		text-decoration: none;
	}

	.content :global(h1) {
		font-size: 2em;
		line-height: 1.14em;
		font-weight: 400;
		margin: 0.3em auto;
	}

	.content :global(h2) {
		font-size: 1.75em;
	}

	.content :global(h3) {
		font-size: 1.5em;
		font-weight: bold;
	}

	.content :global(h4) {
		line-height: 26px;
		font-size: 1.4em;
	}

	.content :global(p) {
		margin: 0.95em 0 1.1em;
		padding: 0.1em;
	}

	.content :global(iframe) {
		width: 100%;
		height: -webkit-fill-available;
		margin: auto;
	}

	.image {
		background-color: #dddddd;
		display: block;
		position: relative;
		margin: auto;
		max-width: 1024px;
		z-index: 2;
		top: 1.5em;
		margin-bottom: 3em;
	}

	@media (max-width: 430px) {
		.content {
			font-size: 17.5px;
			line-height: 26px;
			width: 94%;
		}

		.content :global(h1) {
			font-size: 1.6em;
		}

		.content :global(h3) {
			font-size: 1.32em;
		}
	}
</style>
