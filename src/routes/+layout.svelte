<script>
	import '../app.css';
	let { children } = $props();
</script>

<div class="bg-slate-800 h-screen">
	{@render children()}
</div>
