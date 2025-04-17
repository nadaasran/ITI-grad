// stores/auth.ts
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    id: null,
    username: '',
    fullName: '',
    email: '',
    password: '',
    agree: false,
    token: '',
    errorMessage: '',
    profileImage: '',
    mobile: '',
    location: '',
    postalCode: '',
  }),

  getters: {
    isLoggedIn: (state) => !!state.token
  },

  actions: {
    setProfileImage(value: string) {
      this.profileImage = value
      localStorage.setItem('userImage', value)
    },
    setName(value: string) {
      this.username = value
      localStorage.setItem('username', value)
    },
    setFullName(value: string) {
      this.fullName = value
    },
    setMobile(value: string) {
      this.mobile = value
      localStorage.setItem('mobile', value)
    },
    setEmail(value: string) {
      this.email = value
    },
    setPassword(value: string) {
      this.password = value
    },
    setLocation(value: string) {
      this.location = value
    },
    setPostalCode(value: string) {
      this.postalCode = value
    },
    setAgree(value: boolean) {
      this.agree = value
    },
    setToken(value: string) {
      this.token = value
      localStorage.setItem('token', value)
    },
    setError(message: string) {
      this.errorMessage = message
    },
    logout() {
      this.token = ''
      localStorage.removeItem('token')
    },
    reset() {
      this.username = ''
      this.fullName = ''
      this.email = ''
      this.password = ''
      this.agree = false
      this.token = ''
      this.errorMessage = ''
      this.profileImage = '/images/user.jpg'
      this.mobile = ''
      this.location = ''
      this.postalCode = ''
      localStorage.removeItem('token')
    },
  },
})

