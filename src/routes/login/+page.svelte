<script lang="ts">
    import Profile from "$lib/profile.svelte"; 
</script>

<h1 class="text-center text-7xl">Autown</h1>

<body>
    <div class="h-80 w-full flex flex-col items-center justify-center">
        <div class = "pb-2 w-full flex flex-col items-center justify-center">
            <Profile/>
        </div>
        <button class= "bg-gray-300 hover:bg-gray-400 items-center p-2 w-[6rem] text-black font-bold py-2 px-6">
            Log In
        </button>
        <button class= "bg-gray-300 hover:bg-gray-400 items-center p-2 w-[6rem] mt-2 text-black font-bold py-2 px-5">
            Sign Up
        </button>
    </div>
</body>


