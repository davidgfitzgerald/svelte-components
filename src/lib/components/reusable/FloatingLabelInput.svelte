<script>
    import { capitalize as capitalise } from 'inflection'
	/** 
	 * @type {{ 
	 * 	name: string,
	 * 	type: string,
	 * 	value: string,
	 * }} */
	let { name, type = 'text', value=$bindable() } = $props();
</script>

<input
	id={name}
	class="peer mt-6 w-full rounded-md text-black placeholder-transparent"
	{name}
	placeholder={capitalise(name)}
	{type}
    bind:value={value}
/>
<label
	for={name}
	class="
    absolute
    left-0
    top-0
    transition-all
    after:ml-0.5
    after:hidden
    after:text-red-500
    after:content-['*']
    focus:bg-sky-400
    peer-placeholder-shown:left-3
    peer-placeholder-shown:top-8
    peer-placeholder-shown:text-black
    peer-placeholder-shown:after:inline
">{capitalise(name)}</label
>
