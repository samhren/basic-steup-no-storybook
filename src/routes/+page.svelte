<script lang="ts">
	import { signIn, signOut } from '@auth/sveltekit/client'
	import { page } from '$app/stores'
</script>

{#if $page.data.session}
	Logged In
	<button on:click={() => signOut()} />
{:else}
	Logged Out
	<button
		on:click={() => {
			signIn('google')
		}}
	/>
{/if}
