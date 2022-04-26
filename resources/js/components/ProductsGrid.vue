<template>
    <div v-for="product in products" class="p-6">
        <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="/images/squareCard.svg" alt="blog">
        <div class="inline-flex justify-between w-full">
            <h1 class="mb-8 text-xl font-semibold leading-none tracking-tighter text-neutral-600">
                {{ product.name }}
            </h1>
            <span>EUR {{ product.price }}</span>
        </div>
        <p class="mx-auto text-base font-medium leading-relaxed text-gray-500">
            {{ product.description }}
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            products: []
        }
    },
    methods: {
        getProducts() {
            axios.get('/api/products')
                .then((response) => {
                    this.products = response.data.data
                })
        }
    },
    mounted() {
        this.getProducts()
    }
}
</script>
