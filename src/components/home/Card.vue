
<script>
import items from "../data/item.js";

export default {
    setup(){

        return {
            items
        }
    }
}
</script>

<template>
  <div class="product-cards-container">

  </div>
</template>


<style scoped lang="scss">
    .product-cards-container{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>