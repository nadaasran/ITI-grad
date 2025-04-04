<!-- <template>
    <div class="flex gap-2 w-full">
        <div class="w-1/2">
        <cartCard />
        <cartCard />
        <cartCard />
        <cartCard />
    </div>
<div class="w-1/2">
        <div>
            <h2>Cart totals</h2>
            <hr class="border-1 border-[#4E3629] ">
        </div>
        <div class="flex">
            <div class="flex flex-col gap-1">
                <p>Subtotals</p>
                <p>Shipping</p>
            </div>
            <div class="flex flex-col gap-1">
                <p>$3.88</p>
                <p>$1</p>
            </div>
        </div>
        <div>
            <hr class="border-1 border-[#4E3629]">

        </div>
        <div class="flex gap-5">
            <p>Total</p>
            <p class=" ml-52">$4.88</p>
        </div>
        <div>
            <input class=" rounded-full border-2 text-xs mr-20" placeholder="Coupon Code"></input>
            <button class="bg-[#4E3629] w-30 rounded-full text-white text-xs">Apply Coupon</button>
        </div>

        <div>
            <button class="w-30 rounded-full border-2 text-xs bg-[#4E3629] text-white">Checkout now</button>
        </div>
        <div class="flex gap-5 mt-5">
            <i class="fa-solid fa-arrow-left"></i>
            <p>Continue shopping</p>

        </div>
    </div>
    </div>
</template>
<script setup>
  import cartCard from '~/components/cartCard.vue';


</script> -->

<template>
    <div class="flex gap-2 w-full my-18 mx-5">
        <!-- Left side: Cart items -->
        <div class="w-1/2">
            <cartCard 
                v-for="(item, index) in cartItems" 
                :key="index"
                :item="item" 
                @remove="removeItem(index)"
                @updateQuantity="updateQuantity(index, $event)"
            />
        </div>

        <!-- Right side: Cart totals -->
        <div class="w-1/2 me-10 pr-10 pl-5">
            <div>
                <h2 class="mb-5 font-bold text-2xl text-center">Cart totals</h2>
                <hr class="border-1 border-[#4E3629] mb-5">
            </div>
            <div class="flex justify-between">
                <div class="flex flex-col gap-1">
                    <p class="mb-3">Subtotals</p>
                    <p>Shipping</p>
                </div>
                <div class="flex flex-col gap-1 mb-5 justify-between">
                    <p>${{ subtotal.toFixed(2) }}</p>
                    <p>${{ shipping }}</p>
                </div>
            </div>
            <div>
                <hr class="border-1 border-[#4E3629] mb-5">
            </div>
            <div class="flex gap-5 mb-5 justify-between">
                <p>Total</p>
                <p class="ml-52">${{ total.toFixed(2) }}</p>
            </div>
            <div class="mb-5 flex justify-between"> 
                <input 
                    v-model="couponCode"
                    class="rounded-full border-2 text-xs mr-20 p-1 border-[#A67B5B] text-[#A67B5B]"  
                    placeholder="Coupon Code"
                />
                <button @click="applyCoupon" class="bg-[#A67B5B] w-30 rounded-full text-[#4E3629]  text-xs p-2 cursor-pointer">
                    Apply Coupon
                </button>
            </div>

            <div class="flex justify-center">  
                <button class="w-40 rounded-full border-2 text-xs bg-[#4E3629] text-[#FED8B1] p-4 cursor-pointer">
                    Checkout now
                </button>
            </div>
            <div class="flex gap-5 mt-5 justify-center">
                <i class="fa-solid fa-arrow-left cursor-pointer"></i>
                <p>Continue shopping</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import cartCard from '~/components/cartCard.vue';

// 🛒 Sample cart items (Replace with Vuex, Pinia, or API call)
const cartItems = ref([
    { id: 1, title: "Feel The Nature", author: "Addie Renee", price: 3.88, quantity: 1, image: '/path-to-image.jpg' },
    { id: 2, title: "Feel The Nature", author: "Addie Renee", price: 3.88, quantity: 1, image: '/path-to-image.jpg' },
    { id: 3, title: "Feel The Nature", author: "Addie Renee", price: 3.88, quantity: 1, image: '/path-to-image.jpg' }
]);

const shipping = 1;

const subtotal = computed(() => {
    return cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0);
});

const total = computed(() => subtotal.value + shipping);

const couponCode = ref("");
const applyCoupon = () => {
    if (couponCode.value === "DISCOUNT10") {
        alert("Coupon applied! 10% off");
        cartItems.value = cartItems.value.map(item => ({
            ...item,
            price: item.price * 0.9 
        }));
    } else {
        alert("Invalid coupon");
    }
};
const removeItem = (index) => {
    cartItems.value.splice(index, 1);
};
const updateQuantity = (index, newQuantity) => {
    if (newQuantity > 0) {
        cartItems.value[index].quantity = newQuantity;
    }
};
</script>
