<template>
  <div class="max-w-2xl px-4 py-10 m-auto bg-white sm:px-8 sm:shadow dark:bg-primary-800 ring-1 ring-gray-200 dark:ring-gray-700 sm:rounded-lg">
    <main class="max-w-none">
      <slot />
    </main>
    <div class="w-full h-[30px] fixed left-0 right-0 bottom-0 text-center">
      <div class="text-sm op50 text-center w-full">
      <a
        target="_blank"
        href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
        style="color: inherit"
      >
        豫ICP备20014715号-1
      </a>
      2020-2024 © cola
    </div>
    </div>
  </div>
</template>
