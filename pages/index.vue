<script setup lang="ts">
import { useIdentity, IIdentityState } from '~~/stores/identity'
const identity: IIdentityState = useIdentity()
</script>

<template>
  <div>
    <div
      class="hover:bg-green-200 hover:cursor-pointer bg-gray-100 p-7 rounded-5 border-solid border-1 border-gray-500 text-lg text-center font-bold flex items-center justify-center"
    >
      <div class="text-2xl font-700 text-cyan-800 font-sans">
        {{ $t('welcome') }} {{ identity.firstName }} {{ identity.lastName }}
      </div>
      <div class="i-carbon-chat inline-block text-2xl ml-3 text-green-500" />
    </div>
  </div>
</template>
