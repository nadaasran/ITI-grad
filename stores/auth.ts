// stores/auth.ts
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => ({
      name: '',
      email: '',
      password: '',
      agree: false,
      token: '',
      errorMessage: '',
    }),
  
    actions: {
      setName(value: string) {
        this.name = value
      },
      setEmail(value: string) {
        this.email = value
      },
      setPassword(value: string) {
        this.password = value
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
        this.name = '';
        this.token = '';
        localStorage.removeItem('token');
        localStorage.removeItem('username');
      },
      reset() {
        this.name = ''
        this.email = ''
        this.password = ''
        this.agree = false
        this.token = ''
        this.errorMessage = ''
        localStorage.removeItem('token')
      },
    },
  })
  
