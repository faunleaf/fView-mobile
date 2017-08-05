<template>
  <div>
    <i-group>
      <i-cell v-for="type in types" :title="type" :key="type">
        <i-spinner :type="type" slot="value"></i-spinner>
      </i-cell>
    </i-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      types: ['android', 'ios', 'ios-small', 'bubbles', 'circles', 'crescent', 'dots', 'lines', 'ripple', 'spiral']
    }
  }
}
</script>
