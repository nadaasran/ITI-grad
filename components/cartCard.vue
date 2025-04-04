<!-- <script setup>
</script>
<template>
    <div class="text-[#FED8B1] bg-orange-950 w- flex gap-5 p-2 rounded-tl-3xl m-2 ">
        <div class="bg-red-100 rounded-tl-3xl w-20 flex justify-center items-center">
            <img class="w-15"
                src="https://images.pexels.com/photos/8820928/pexels-photo-8820928.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="">
        </div>
        <div class="flex flex-col gap-5 mr-10">
            <div class="flex flex-col gap-2">
                <h4 class="font-bold">Feel The Nature</h4>
                <p class="font-light">Addie Renee</p>
            </div>
            <p>$3.88</p>
        </div>
        <div class="flex flex-col gap-15">
            <div class="ml-11">
                <i class="fa-solid fa-trash"></i>
            </div>
            <div>
                <div class="flex gap-2">
                    <div
                        class="bg-orange-950 border-2 w-5 h-5 rounded-full flex justify-center items-center text-[#FED8B1] text-xs">
                        <i class="fa-solid fa-plus"></i>
                    </div>
                    <p class="text-l">1</p>
                    <div
                        class="bg-orange-950 border-2 w-5 h-5 rounded-full flex justify-center items-center text-[#FED8B1] text-xs ">
                        <i class="fa-solid fa-minus"></i>
                    </div>

                </div>

            </div>
        </div>
    </div>    
</template> -->

<template>
    <div class="flex bg-[#4E3629] text-[#FED8B1] p-4 rounded-tl-3xl items-center m-2">
        <img :src="item.image" class="w-20 h-20 rounded-tl-3xl mr-4">
        <div class="flex-1">
            <h3 class="font-bold">{{ item.title }}</h3>
            <!-- <p>{{ item.author }}</p> -->
            <p>${{ item.price.toFixed(2) }}</p>
        </div>
        <div class="flex flex-col justify-between items-center gap-8">
            <div>
                <button @click="$emit('remove')" class="ml-4"><i class="fa-solid fa-trash"></i></button>
            </div>
            <div class="flex items-center gap-2">
                <button @click="updateQuantity(item.quantity - 1)">                    <div
                            class="bg-[#4E3629] border-2 w-5 h-5 rounded-full flex justify-center items-center text-[#FED8B1] text-xs ">
                            <i class="fa-solid fa-minus"></i>
                        </div></button>
                <span class="px-2">{{ item.quantity }}</span>
                <button @click="updateQuantity(item.quantity + 1)">                    <div
                            class="bg-[#4E3629] border-2 w-5 h-5 rounded-full flex justify-center items-center text-[#FED8B1] text-xs">
                            <i class="fa-solid fa-plus"></i>
                        </div></button>
            </div>
        </div>
    </div>
</template>

<script setup>
defineProps(["item"]);
const emit = defineEmits(["remove", "updateQuantity"]);

const updateQuantity = (newQuantity) => {
    emit("updateQuantity", newQuantity);
};
</script>
