export interface IIdentityState {
  firstName: string
  lastName: string
}

export const useIdentity = defineStore('identity', {
  state: (): IIdentityState => ({
    firstName: 'Andrey',
    lastName: 'vuNemesis'
  }),
  actions: {
    setFirstName(firstName: string) {
      this.firstName = firstName
    },
    setLastName(lastName: string) {
      this.lastName = lastName
    },
    reset() {
      this.firstName = 'Andrey'
      this.lastName = 'vuNemesis'
    }
  },
  getters: {
    fullName(): string {
      return `${this.firstName} ${this.lastName}`
    }
  }
})
