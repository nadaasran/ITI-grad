<template>
    <div>
        <Card />
        <cartCard />
        <div>
            <h2>Card details</h2>
        </div>
        <div>
            <label for="">Enter Credit Card Namber*</label>
            <br>
            <input class="w-85 rounded-full border-1 text-xs"></input>
        </div>
        <div>
            <label for="">Card Header Name*</label>
            <br>
            <input class="w-85 rounded-full border-1 text-xs"></input>
        </div>
        <div class="flex gap-5 mt-5">
            <div>
                <label for="">Expiry*</label>
                <br>
                <input class="w-30 rounded-full border-1 text-xs mr-20"></input>
            </div>
            <div>
                <label for="">CVV*</label>
                <br>
                <input class="w-30 rounded-full border-1 text-xs mr-20"></input>
            </div>
        </div>
        <div class="flex gap-5">
            <p>Total</p>
            <p class=" ml-62">$4.88</p>
        </div>
        <div>
            <button class="w-30 rounded-full border-2 text-xs bg-orange-950 text-white">Confirm</button>
        </div>
        <div class="flex gap-5 mt-5">
            <i class="fa-solid fa-arrow-left"></i>
            <p>Back</p>
        </div>
    </div>
</template>
<script setup>
  import Card from '~/components/Card.vue';
  import cartCard from '~/components/cartCard.vue';
</script>