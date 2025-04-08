<template>
    <div class="login-container">
      <div class="login-box">
        <div class="login-form">
          <h2>Your Password Has Been Successfully Changed!</h2>
          <NuxtLink to="/login">
            <button class="login-btn">Log In</button>
          </NuxtLink>
        </div>
  
        <div class="illustration">
          <img src="/images/done.png" alt="Done Illustration" />
        </div>
      </div>
    </div>
  </template>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #4e342e;
    color: #2e1e1e;
    font-family: "Arial", sans-serif;
  }
  
  .login-box {
    margin-top: -50px;
    background: #fdf6e3;
    display: flex;
    padding: 40px;
    border-radius: 20px;
    width: 60%;
    min-height: 50%;
    text-align: center;
  }
  
  .login-form {
    flex: 1;
    padding-right: 20px;
    margin: auto;
  }
  
  h2 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #3e2723;
  }
  
  .login-btn {
    background: #3e2723;
    color: #fad4a2;
    font-family: links;
    padding: 12px;
    width: 100%;
    border: none;
    border-radius: 40px;
    cursor: pointer;
    font-weight: bold;
    font-size: 14px;
    margin-top: 10px;
  }
  
  .login-btn:hover {
    background-color: #fad4a2;
    color: #4e3629;
  }
  
  .illustration {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .illustration img {
    width: 45%;
    height: 180px;
  }
  </style>
  