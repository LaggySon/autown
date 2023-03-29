<script>
	import '../app.css';
	import Header from './Header.svelte';
	import Auth from '$lib/components/auth.svelte';
	import authStore from '../stores/authStore';
</script>

<head>
	<title>Autown</title>
</head>

<body class="min-h-screen flex flex-col dark:bg-slate-800 dark:text-white font-Titillium">
	<Header />

	<main class="flex-1"><slot /></main>

	<footer class="flex justify-center">
		<p>Michael Richards, Danny Dang, and Gabriel Baffo</p>
	</footer>
</body>
<Auth />
