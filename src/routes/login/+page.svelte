<script>
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<h1 class="py-16 flex justify-center text-6xl text-white">Login/Register</h1>
<form class="py-16 rounded-xl flex justify-center items-center gap-x-4 font-medium" method="post" action="?/login" use:enhance>
	<label class="p-2 focus:bg-sky-400 text-white">
		Username
		<input class="rounded-md text-black" name="username" />
	</label>
	<label class="p-2 focus:bg-sky-400 text-white">
		Password
		<input class="rounded-md text-black" type="password" name="password" />
	</label>
	<button class="p-2 hover:bg-slate-500 text-white rounded-md">Login</button>
	<button class="p-2 hover:bg-slate-500 text-white rounded-md" formaction="?/register">Register</button>
</form>
<p class="flex justify-center text-red-500 font-medium text-xl">{form?.message ?? ''}</p>