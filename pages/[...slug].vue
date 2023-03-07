<template>
  <main class="prose">
    <ContentDoc>
      <template #not-found>
        <div class="flex flex-col items-center justify-center text-red-600">
          <div class="text-4xl font-bold">404</div>
          <div class="text-2xl font-bold">{{ $t('pageNotFound') }}</div>
        </div>
      </template>
    </ContentDoc>
  </main>
</template>
