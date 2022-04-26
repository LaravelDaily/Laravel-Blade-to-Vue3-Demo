require('./bootstrap');

import { createApp } from "vue";
import ProductsGrid from './components/ProductsGrid'

const app = createApp({})
app.component('products-grid', ProductsGrid);
app.mount('#app')
