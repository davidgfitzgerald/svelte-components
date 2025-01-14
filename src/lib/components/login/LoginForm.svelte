<script>
	import { enhance } from '$app/forms';
	import FloatingLabelInput from '../reusable/FloatingLabelInput.svelte';

	let { form } = $props();
    let username = $state("")
    let password = $state("")
</script>

<div class="flex h-full">
    <div class="flex flex-col items-center w-full h-full">
        <form class="flex flex-col items-center rounded-xl font-medium gap-4 min-w-64" method="post" action="?/login" use:enhance>
            <div class="relative w-full">
                <FloatingLabelInput name="username" bind:this={username}></FloatingLabelInput>
            </div>
            <div class="relative w-full">
                <FloatingLabelInput name="password" type="password" bind:this={password}></FloatingLabelInput>
            </div>
            <div class="flex gap-4 w-full">
                <button class="p-2 bg-sky-600 hover:bg-sky-400 text-white rounded-md w-full">Login</button>
                <button class="p-2 bg-sky-900 hover:bg-sky-400 text-white rounded-md w-full" formaction="?/register">Register</button>
            </div>
        </form>
        <p class="p-8 flex justify-center text-red-500 font-medium text-xl">{form?.message ?? ''}</p>
    </div>
</div>