<template>
  <div class="w-2/3 rounded-md border-4 border-red-200 font-radio-canada sm:w-1/4">
    <div class="flex flex-col-reverse text-center">
      <h3 class="font-tapestry text-red-500">{{ name }}</h3>
      <img class="h-auto max-w-xs" :src="image" alt="Portrait de l'artiste" />
    </div>
    <hr class="m-auto w-1/2 border-red-500" />
    <div>
      <h3 class="text-center text-red-500">{{ schedule }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    schedule: String,
    name: String,
    image: String,
  },
};
</script>