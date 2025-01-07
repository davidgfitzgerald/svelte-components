<script>
	import LoginForm from '$lib/components/login/LoginForm.svelte';

	let { form } = $props();
</script>

<h1 class="py-16 flex justify-center text-6xl">Login/Register</h1>

<LoginForm {form}></LoginForm>