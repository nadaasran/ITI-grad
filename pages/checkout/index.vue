<template>
<div class=" relative bg-Colors-Main-body-bg overflow-hidden flex flex-col items-center gap-1  text-Colors-main-body-text font-['Montserrat'] p-5 justify-center ">   
    <div>
        <h2 class="self-stretch text-center justify-center text-Colors-main-body-text text-5xl font-semibold font-['Playfair_Display']">Billing details</h2>
    </div>
    <div class="flex gap-30 mt-5 ">
        <!-- <div class="w-80 inline-flex flex-col justify-start items-start gap-2">
    <div class="self-stretch flex flex-col justify-start items-start gap-4">
        <div class="self-stretch justify-center text-Colors-main-body-text text-2xl font-normal font-['Montserrat'] capitalize">First Name*</div>
    </div>
    <div class="self-stretch h-10 px-4 py-2.5 rounded-3xl outline outline-1 outline-offset-[-1px] outline-[#A67B5B] inline-flex justify-start items-center gap-2.5">
        <div class="text-center justify-center"></div>
    </div>
</div> -->
        <div>
            <label class="self-stretch justify-center text-Colors-main-body-text text-2xl font-normal font-['Montserrat'] capitalize" for="">First Name*</label>
            <br>
            <input class="self-stretch h-10 px-4 py-2.5 rounded-3xl outline-1 outline-offset-[-1px] outline-[#A67B5B] inline-flex justify-start items-center gap-2.5"></input>
        </div>
        <div>
            <label class="self-stretch justify-center text-Colors-main-body-text text-2xl font-normal font-['Montserrat'] capitalize" for="">Last Name*</label>
            <br>
            <input class="self-stretch h-10 px-4 py-2.5 rounded-3xl outline-1 outline-offset-[-1px] outline-[#A67B5B] inline-flex justify-start items-center gap-2.5"></input>
        </div>
    </div>
    <div>
        <label  class="self-stretch justify-center text-Colors-main-body-text text-2xl font-normal font-['Montserrat'] capitalize" for="">Phone*</label>
        <br>
        <input class="self-stretch h-10 px-48 py-2.5 rounded-3xl outline-1 outline-offset-[-1px] outline-[#A67B5B] inline-flex justify-start items-center gap-2.5"></input>
    </div>
    <div>
        <label  class="self-stretch justify-center text-Colors-main-body-text text-2xl font-normal font-['Montserrat'] capitalize" for="">Email*</label>
        <br>
        <input class="self-stretch h-10 px-48 py-2.5 rounded-3xl outline-1 outline-offset-[-1px] outline-[#A67B5B] inline-flex justify-start items-center gap-2.5"></input>
    </div>
    <div class="flex gap-45 mt-2 justify-between">
        <div  class="h-10 px-4 cursor-pointer py-2.5 rounded-[40px] outline-1 outline-offset-[-1px] outline-[#A67B5B] flex justify-between items-center gap-15">
            <div>

                <label class=" text-[#4E3629] text-xl font-semibold font-['Montserrat']" for="country">Country</label>
            </div>
            <div>

                <select class="text-[#A67B5B] self-stretch h-10 px-4 py-2.5 cursor-pointer " name="country" id="country">Country</select>
            </div>
        </div>
        <div  class="h-10 cursor-pointer px-4 py-2.5 rounded-[40px] outline-1 outline-offset-[-1px] outline-[#A67B5B] flex justify-between items-center gap-15">
            <div>

                <label class=" text-[#4E3629] text-xl font-semibold font-['Montserrat']" for="City">City</label>
            </div>
            <div>

                <select class="text-[#A67B5B] self-stretch h-10 px-4 py-2.5 cursor-pointer " name="City" id="City">City</select>
            </div>
        </div>
    </div>
    <div>
        <label  class="self-stretch justify-center text-Colors-main-body-text text-2xl font-normal font-['Montserrat'] capitalize" for="">Address*</label>
        <br>
        <input class="self-stretch h-10 px-48 py-2.5 rounded-3xl outline-1 outline-offset-[-1px] outline-[#A67B5B] inline-flex justify-start items-center gap-2.5"></input>
    </div>
    <div class="flex gap-2 mt-2 text-2xl ">
        <input type="checkbox" name="" id="" class="self-stretch text-[#16100B] font-semibold font-['Playfair_Display'] cursor-pointer"> Remember me</input>
    </div>
    <div class="self-stretch inline-flex gap-105 justify-center mb-2">
        <p class="justify-center text-black text-3xl font-normal font-['Montserrat']">Total</p>
        <p class=" justify-center text-black text-3xl font-normal font-['Montserrat']">$4.88</p>
    </div>
    <div  class="w-[400px] h-12 p-2.5 bg-[#4E3629] rounded-[40px] outline-1 outline-offset-[-1px] outline-[#A67B5B] inline-flex justify-center items-center gap-2.5">
        <button class="text-center justify-center text-[#FED8B1] text-xl font-semibold font-['Montserrat'] cursor-pointer">Continue</button>
    </div>
    <div class="inline-flex justify-start items-center gap-4 cursor-pointer">
        <i class="fa-solid fa-arrow-left cursor-pointer "></i>
        <p class="text-center justify-center text-black text-2xl font-normal font-['Montserrat'] capitalize cursor-pointer">Back</p>
    </div>
</div>
</template>


<script setup>
</script>