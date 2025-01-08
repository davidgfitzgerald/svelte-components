<script>
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<div class="flex justify-center">
    <div class="flex flex-col items-center w-full">
        <form class="flex flex-col items-center rounded-xl font-medium gap-4 min-w-64" method="post" action="?/login" use:enhance>
            <div class="relative w-full">
                <input
                    id="username"
                    class="rounded-md text-black w-full"
                    name="username"
                    placeholder=Username
                />
                <label for="username" class="focus:bg-sky-400"></label>
            </div>
            <div class="relative w-full">
                <input
                    id="password"
                    class="rounded-md text-black w-full"
                    type="password"
                    name="password"
                    placeholder=Password
                />
                <label for="password" class="focus:bg-sky-400"></label>
            </div>
            <button class="p-2 bg-sky-600 hover:bg-sky-400 text-white rounded-md w-full">Login</button>
            <button class="p-2 bg-sky-900 hover:bg-sky-400 text-white rounded-md w-full" formaction="?/register">Register</button>
        </form>
        <p class="p-8 flex justify-center text-red-500 font-medium text-xl">{form?.message ?? ''}</p>
    </div>
</div>