<script setup>
    const props = defineProps(['message'])
    const message = props.message
</script>

<template>
    <div class="">
        <p class="text-white mt-1">
            {{props.message}}
        </p>
    </div>
</template>