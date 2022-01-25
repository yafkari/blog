<script>
	import { fromNow } from '../utils/Utils';
	export let comments;
</script>

<svelte:head>
	<link
		href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
		rel="stylesheet"
		integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
		crossorigin="anonymous"
	/>
</svelte:head>

<div class="comments d-flex align-items-center justify-content-center">
	<div>
		<div class="justify-content-center mb-4">
			<div class="col-lg-12">
        {#if comments.length > 0}
          <h5>{comments.length} Comment{comments.length>1 ? 's' : ''}</h5>
        {/if}
			</div>
		</div>
    {#if comments.length > 0}
		<div class="justify-content-center mb-4">
			<div class="col-lg-12">
				<ul class="comments">
					{#each comments as comment}
						<li class="comment d-flex mb-4">
							<div class="flex-shrink-0">
								<div class="avatar avatar-sm rounded-circle">
									<img class="avatar-img" src={comment.user.profile_image} alt="" />
								</div>
							</div>
							<div class="flex-grow-1 ms-2 ms-sm-3">
								<div class="comment-meta d-flex align-items-baseline">
									<h6 class="me-2">{comment.user.name}</h6>
									<span class="text-muted">{fromNow(comment.created_at)}</span>
								</div>
								<div class="comment-body">
									{@html comment.body_html}
								</div>

								{#if comment.children.length > 0}
									<div class="comment-replies p-3 mt-3 rounded">
										<h6 class="comment-replies-title mb-4 text-muted text-uppercase">
											{comment.children.length} {comment.children.length > 1 ? 'Replies' : 'Reply'} 
										</h6>
										{#each comment.children as reply}
											<div class={`reply d-flex ${comment.children.length > 1 ? 'mb-4' : ''}`}>
												<div class="flex-shrink-0">
													<div class="avatar avatar-sm rounded-circle">
														<img class="avatar-img" src={reply.user.profile_image} alt="" />
													</div>
												</div>
												<div class="flex-grow-1 ms-2 ms-sm-3">
													<div class="reply-meta d-flex align-items-baseline">
														<h6 class="mb-0 me-2">{reply.user.name}</h6>
														<span class="text-muted">{fromNow(reply.created_at)}</span>
													</div>
													<div class="reply-body">
														{@html reply.body_html}
													</div>
												</div>
											</div>
										{/each}
									</div>
								{/if}
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
    {:else}
      <p>No comments yet.</p>
    {/if}
	</div>
</div>

<style>
	.comments .avatar {
		position: relative;
		display: inline-block;
		width: 3rem;
		height: 3rem;
		font-size: 1.25rem;
	}

	.avatar-img,
	.avatar-initials,
	.avatar-placeholder {
		width: 100%;
		height: 100%;
		border-radius: inherit;
	}

	.avatar-img {
		display: block;
		-o-object-fit: cover;
		object-fit: cover;
	}

	.avatar-initials {
		position: absolute;
		top: 0;
		left: 0;
		display: -ms-flexbox;
		display: flex;
		-ms-flex-align: center;
		align-items: center;
		-ms-flex-pack: center;
		justify-content: center;
		color: #fff;
		line-height: 0;
		background-color: #a0aec0;
	}

	.avatar-placeholder {
		position: absolute;
		top: 0;
		left: 0;
		background: #a0aec0
			url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='%23fff' d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'/%3e%3c/svg%3e")
			no-repeat center/1.75rem;
	}

	.avatar-indicator {
		position: absolute;
		right: 0;
		bottom: 0;
		width: 20%;
		height: 20%;
		display: block;
		background-color: #a0aec0;
		border-radius: 50%;
	}

	.avatar-group {
		display: -ms-inline-flexbox;
		display: inline-flex;
	}

	.avatar-group .avatar:hover {
		z-index: 1;
	}

	.avatar-sm {
		width: 2.125rem;
		height: 2.125rem;
		font-size: 1rem;
	}

	.avatar-lg {
		width: 4rem;
		height: 4rem;
		font-size: 1.5rem;
	}

  .comment-replies {
    background-color: #eee;
  }
</style>
