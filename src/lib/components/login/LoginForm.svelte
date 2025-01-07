<script>
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<div class="flex justify-center gap-4">
    <form class="flex flex-col rounded-xl font-medium gap-8" method="post" action="?/login" use:enhance>
        <div class="relative">
            <input
                id="username"
                class="rounded-md text-black"
                name="username"
                placeholder=Username
            />
            <label for="username" class="p-2 focus:bg-sky-400"></label>
        </div>
        <div class="relative">
            <input
                id="password"
                class="rounded-md text-black"
                type="password"
                name="password"
                placeholder=Password
            />
            <label for="password" class="p-2 focus:bg-sky-400"></label>
        </div>
        <button class="p-2 hover:bg-slate-500 text-white rounded-md">Login</button>
        <button class="p-2 hover:bg-slate-500 text-white rounded-md" formaction="?/register">Register</button>
    </form>
</div>

<p class="flex justify-center text-red-500 font-medium text-xl">{form?.message ?? ''}</p>