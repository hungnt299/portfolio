<template>
  <div class="min-h-screen">
    <iframe
      :src="`/Ngo-Thanh-Hung-CV.pdf`"
      class="w-full h-full min-h-screen"
      title="Ngo Thanh Hung CV"
    />
  </div>
</template>

<script setup>
// Set page title and meta
useHead({
  title: "Ngo Thanh Hung - CV",
  meta: [
    {
      name: "description",
      content: "Download Ngo Thanh Hung's CV and professional experience",
    },
  ],
});
</script>
