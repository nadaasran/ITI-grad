<template>
    <div class="login-container">
      <div class="login-box">
        <div class="login-form">
          <h2>Reset your password</h2>
          <p class="description">
            A 4 digit code has been sent to your email
          </p>
  
          <form @submit.prevent="sendCode">
            <label>Verification Code*</label>
            <input v-model="auth.email" type="email" required />
            <p v-if="emailError" class="error-message">{{ emailError }}</p>
            <p v-if="auth.errorMessage" class="error-message">{{ auth.errorMessage }}</p>
  
            <button type="submit" class="login-btn">Verify Code</button>
          </form>
  
          <NuxtLink to="/login" class="forgot-password-link">Resend code</NuxtLink>
        </div>
  
        <div class="illustration">
          <img src="/images/key.png" alt="key Illustration" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useAuth } from '~/stores/useAuth'
  
  const router = useRouter()
  const authStore = useAuth()
  
  const auth = ref({
    email: '',
    errorMessage: '',
  })
  
  const emailError = ref('')
  
  const sendCode = async () => {
    emailError.value = ''
    auth.value.errorMessage = ''
  
    if (!auth.value.email) {
      emailError.value = 'Email is required'
      return
    }
  
    try {
      const res = await fetch('http://localhost:5000/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: auth.value.email }),
      })
  
      const data = await res.json()
  
      if (!res.ok) {
        auth.value.errorMessage = data.message || 'Something went wrong'
        return
      }
  
      authStore.setEmail(auth.value.email)
      router.push('/reset-password')
    } catch (error) {
      auth.value.errorMessage = 'Server error, try again later'
    }
  }
  </script>
  
  <style scoped>
  .error-message {
    color: red;
    font-size: 14px;
    margin-top: 4px;
  }
  
  .error-message:empty {
    opacity: 0;
    max-height: 0;
  }
  
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
    background: #fdf6e3;
    display: flex;
    padding: 50px;
    border-radius: 20px;
    width: 60%;
    min-height: 50%;
    margin-top: -50px;
    text-align: center;
  }
  
  .login-form {
    flex: 1;
    /* padding: 10px; */
    margin: auto;
    margin-left: 40px;
  }
  
  h2 {
    font-size: 22px;
    font-weight: bold;
    margin-bottom:20px;
    color: #3e2723;
  }
  
  label {
    display: block;
    text-align: left;
    font-size: 14px;
    margin-top: 10px;
    font-weight: bold;
  }
  
  input {
    width: 40%;
    float: left;
    padding: 10px;
    border: 1px solid #b29583;
    border-radius: 40px;
    margin-top: 5px;
    background: none;
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
    margin-top: 20px;
  }
  
  .login-btn:hover {
    background-color: #fad4a2;
    color: #4e3629;
  }
  .description {
    font-size: 12px;
    color: #5d4037;
    margin-bottom: 10px;
    text-align: left;
  }
  
  .forgot-password-link {
    font-size: 13px;
    text-decoration: underline;
    display: flex;
    justify-content: center;
    margin-top: 8px;
    color: #5d4037;
    font-weight: bold;
  }
  
  .illustration {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .illustration img {
    width:40%;
    height: 150px;
  }
  </style>
  