<script>
	import { enhance } from '$app/forms';

	let { form } = $props();
</script>

<div class="flex h-full">
    <div class="flex flex-col items-center w-full h-full">
        <form class="flex flex-col items-center rounded-xl font-medium gap-4 min-w-64" method="post" action="?/login" use:enhance>
            <div class="relative w-full">
                <input
                    id="username"
                    class="peer rounded-md text-black w-full mt-6 placeholder-transparent"
                    name="username"
                    placeholder=Username
                />
                <label
                    for="username"
                    class="
                        absolute
                        left-0
                        top-0
                        transition-all
                        after:content-['*']
                        after:ml-0.5
                        after:text-red-500
                        after:hidden
                        peer-placeholder-shown:text-black
                        peer-placeholder-shown:top-8
                        peer-placeholder-shown:left-3
                        focus:bg-sky-400
                        peer-placeholder-shown:after:inline
                    "
                >Username</label>
            </div>
            <div class="relative w-full">
                <input
                    id="password"
                    class="peer rounded-md text-black w-full mt-6 placeholder-transparent"
                    type="password"
                    name="password"
                    placeholder=Password
                />
                <label
                    for="password"
                    class="
                        absolute
                        left-0
                        top-0
                        transition-all
                        after:content-['*']
                        after:ml-0.5
                        after:text-red-500
                        after:hidden
                        peer-placeholder-shown:text-black
                        peer-placeholder-shown:top-8
                        peer-placeholder-shown:left-3
                        focus:bg-sky-400
                        peer-placeholder-shown:after:inline
                    "
                >Password</label>
            </div>
            <div class="flex gap-4 w-full">
                <button class="p-2 bg-sky-600 hover:bg-sky-400 text-white rounded-md w-full">Login</button>
                <button class="p-2 bg-sky-900 hover:bg-sky-400 text-white rounded-md w-full" formaction="?/register">Register</button>
            </div>
        </form>
        <p class="p-8 flex justify-center text-red-500 font-medium text-xl">{form?.message ?? ''}</p>
    </div>
</div>