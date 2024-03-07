import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('cp-user', () => {
  //1.用户信息初始化
  const user = ref()

  //2.保存用户信息
  const setUser = (u: User) => {
    user.value = u
  }

  //3.删除用户信息
  const delUser = () => {
    user.value = undefined
  }
  return { user, setUser, delUser }
})
