<script lang="ts">
	export let echo: string;
	export let input: string = '';
</script>

<div class="container">
	<form method="post">
		<label for="input">Input</label>
		<textarea name="input" id="input" value={input} />
		<button>Submit</button>
	</form>

	{#if echo}
		<div>
			<label for="echo">Echo</label>
			<textarea id="echo" readonly>{echo}</textarea>
		</div>
	{/if}
</div>

<style lang="scss">
	.container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
			'Open Sans', 'Helvetica Neue', sans-serif;
	}

	form {
		padding-bottom: 2rem;
	}

	label {
		margin-top: 2rem;
	}

	textarea {
		display: block;
		height: 12em;
		width: 80vw;
		margin-bottom: 1rem;
	}
</style>
