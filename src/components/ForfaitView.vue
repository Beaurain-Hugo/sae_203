<template>
  <div class="w-2/3 rounded-md border-2 border-red-300 hover:shadow-2xl sm:w-1/4">
    <div>
      <p class="text-center font-radio-canada text-xl sm:text-3xl">{{ text }}</p>
    </div>
    <hr class="m-auto w-1/2 border-red-500" />
    <div>
      <p class="text-center font-radio-canada text-4xl text-red-500 sm:text-6xl">{{ prix }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    prix: String,
  },
};
</script>