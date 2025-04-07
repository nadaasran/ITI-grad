<template>
<div>
    <div>
        <h2>Billing details</h2>
    </div>
    <div class="flex gap-5 mt-5">
        <div>
            <label for="">First Name*</label>
            <br>
            <input class="w-30 rounded-full border-1 text-xs mr-20"></input>
        </div>
        <div>
            <label for="">Last Name*</label>
            <br>
            <input class="w-30 rounded-full border-1 text-xs mr-20"></input>
        </div>
    </div>
    <div>
        <label for="">Phone*</label>
        <br>
        <input class="w-85 rounded-full border-1 text-xs"></input>
    </div>
    <div>
        <label for="">Email*</label>
        <br>
        <input class="w-85 rounded-full border-1 text-xs"></input>
    </div>
    <div class="flex gap-5 ">
        <div>
            <select name="" id="">Country</select>

        </div>
        <div>
            <select name="City" id="City" class="ml-70">City</select>
        </div>
    </div>
    <div>
        <label for="">Adress*</label>
        <br>
        <input class="w-85 rounded-full border-1 text-xs"></input>
    </div>
    <div>
        <input type="checkbox" name="" id="" class="ml-25"> Remember me</input>
    </div>
    <div class="flex gap-5">
        <p>Total</p>
        <p class=" ml-62">$4.88</p>
    </div>
    <div>
        <button class="w-30 rounded-full border-2 text-xs bg-orange-950 text-white">Continue</button>
    </div>
    <div class="flex gap-5 mt-5">
        <i class="fa-solid fa-arrow-left"></i>
        <p>Back</p>
    </div>
</div>
</template>