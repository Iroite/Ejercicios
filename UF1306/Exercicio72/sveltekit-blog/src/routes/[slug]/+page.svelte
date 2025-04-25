<script>
	export let data;
	const { post } = data;
</script>

{#if post}
	<article>
		<h1>{post.title}</h1>
		<p>{post.date}</p>
		<svelte:component this={post.Content} />
	</article>
{:else}
	<p>Post no encontrado.</p>
{/if}
