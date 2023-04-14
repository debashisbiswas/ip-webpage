<script lang="ts">
	export let data;
</script>

<div class="centered-parent">
	<div class="text-center">
		<p id="subtext">This server is at</p>
		<h1>
			{data.host}
		</h1>

		<p id="subtext">You are connecting from</p>
		<h1>
			{data.ip}
		</h1>
	</div>
</div>

<style>
	h1 {
		font-size: 2.5rem;
		font-weight: bold;
		margin-bottom: 2rem;
	}

	#subtext {
		font-size: 1.5rem;
		color: #778da9;
		margin-bottom: 0.5rem;
	}

	.text-center {
		text-align: center;
	}

	.centered-parent {
		display: grid;
		place-items: center;
		width: 100vw;
		height: 100vh;
	}
</style>
