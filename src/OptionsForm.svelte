<!-- OptionsForm.svelte -->
<script>
    let seed = "";
    let apiUrl = "";
    let vaultUrl = "";

    function saveOptions() {
        const options = {
            seed,
            apiUrl,
            vaultUrl,
        };

        // Emit an event to send the options data to the parent component
        dispatch("saveOptions", options);
    }
</script>

<div class="bg-white p-4 rounded-lg shadow-md">
    <h2 class="text-lg font-semibold mb-4">Configure Options</h2>

    <div class="mb-4">
        <label for="seed" class="block text-gray-600">Seed:</label>
        <input
            type="text"
            id="seed"
            bind:value={seed}
            class="w-full border rounded-md p-2"
        />
    </div>

    <div class="mb-4">
        <label for="apiUrl" class="block text-gray-600">API URL:</label>
        <input
            type="text"
            id="apiUrl"
            bind:value={apiUrl}
            class="w-full border rounded-md p-2"
        />
    </div>

    <div class="mb-4">
        <label for="vaultUrl" class="block text-gray-600">Vault URL:</label>
        <input
            type="text"
            id="vaultUrl"
            bind:value={vaultUrl}
            class="w-full border rounded-md p-2"
        />
    </div>

    <button
        class="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        on:click={saveOptions}>Save</button
    >
</div>
