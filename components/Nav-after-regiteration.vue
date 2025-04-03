<template>
    <div class="container mx-auto">
        <nav class="flex justify-between items-center py-4">
            <div>
                <a href="/" class="logo text-2xl font-bold">Qera'a</a>
            </div>
            <div class="links flex items-center">
                <NuxtLink href="/" class="px-3 py-5" active-class="active">Home</NuxtLink>
                <NuxtLink href="/books" class="px-5 py-2" active-class="active">Books</NuxtLink>
                <NuxtLink href="/plans" class="px-5 py-2" active-class="active">Plans</NuxtLink>
                <NuxtLink href="/contact" class="px-5 py-2" active-class="active">Contact Us</NuxtLink>
                <NuxtLink href="/cart" class="px-5 py-2" active-class="active"><FontAwesomeIcon :icon="['fas', 'cart-shopping']" class="cart-icon"/></NuxtLink>
            </div>
            <div class="search-input">
                <FontAwesomeIcon :icon="['fas', 'magnifying-glass']" class="search-icon" />
                <input type="text" placeholder="Search..." class="flex px-4 py-2">
            </div>
            <div class="profile flex items-center">
                <NuxtLink href="/profile" class="name py-2">Austien Bieber</NuxtLink>
                <NuxtLink href="/profile" class="image py-2"><img src="/images/Ellipse 1.png"></NuxtLink>
            </div>
        </nav>
    </div>
</template>


<style>
.container {
    background-color: #4E3629;
}

nav{
    width: 90%;
    height: 70px;
    margin: auto;

}

.logo{
    font-family: logo;
    font-size: 40px;
    font-weight: lighter;
    color: #FED8B1;
}

.links {
    color: #FFEAD6;
    font-family: links;
}
.active {
  color: #FED8B1;
  font-weight: bold;
}

.links a:hover{
    color: #FED8B1;
}

.search-input input{
    border: 1px solid #FFEAD6;
    border-radius: 20px;
    padding: 5px 40px;
}
.search-input input::placeholder{
    color: #FFEAD6;
}
.cart-icon{
    font-size: 22px;
    display: flex;
    align-self: center;
}

.search-icon {
  position: absolute;
  left: 730px; 
  top: 27px;
  color: #FFEAD6;
  font-size: 16px;
}
input:focus{
    outline: none;
}

.profile{
    font-family: links;
    color: #FFEAD6;
}

.profile img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
</style>