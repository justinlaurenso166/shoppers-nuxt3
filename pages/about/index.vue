<script setup>
    const router = useRouter()
    const page = router.currentRoute;
</script>

<template>
    <Head>
        <Title>Shoppers - About</Title>
    </Head>
    <div>
        {{page.name}}
    </div>
</template>