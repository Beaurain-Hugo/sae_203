<template>
  <div class="rounded-md border-4 border-red-200">
    <div class="flex flex-col-reverse text-center">
      <h3 class="font-tapestry text-red-500">{{ name }}</h3>
      <img class="h-auto max-w-xs" :src="image" alt="Portrait de l'artiste" />
    </div>
    <hr class="m-auto w-1/2 border-red-500 text-center" />
    <div>
      <h3 class="text-center font-radio-canada text-red-500">{{ rewards }}</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    rewards: String,
    name: String,
    image: String,
  },
};
</script>