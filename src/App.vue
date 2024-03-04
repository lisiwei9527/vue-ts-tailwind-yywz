<script setup lang="ts">
import { Button as VantButton } from 'vant'
</script>

<template>
  <div>
    <VantButton type="primary">按钮</VantButton>
    <VantButton class="main">按钮</VantButton>
    <VantButton class="footer">按钮</VantButton>
  </div>
</template>

<style scoped lang="scss">
.main {
  color: var(--cp-primary);
}
</style>
