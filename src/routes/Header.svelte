<script lang="ts">
	import Autown from '$lib/autown.png';
</script>

<nav>
	<ul class="flex justify-center gap-2">
		<li><div class="h-10 w-10"><img src={Autown} alt="" /></div></li>
		<li class="p-2 border hover:text-yellow-500 hover:border-yellow-500">
			<a href="/">Home</a>
		</li>
		<li class="p-2 border hover:text-yellow-500 hover:border-yellow-500">
			<a href="/trips">Trip Editor</a>
		</li>
		<li class="p-2 border hover:text-yellow-500 hover:border-yellow-500">
			<a href="/tripmanager">Trip Manager</a>
		</li>
	</ul>
</nav>
