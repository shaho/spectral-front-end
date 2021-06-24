<template>
  <div>
    <svg
      v-if="expanded && childLength > 0"
      class="inline-block w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>

    <svg
      v-if="!expanded && childLength > 0"
      class="inline-block w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M9 5l7 7-7 7"
      ></path>
    </svg>
  </div>
</template>

<script>
export default {
  props: ["expanded", "childLength"],
};
</script>
