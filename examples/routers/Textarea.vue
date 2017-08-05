<template>
  <div>
    <i-group>
      <i-textarea :max="20" placeholder="placeholder" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></i-textarea>
    </i-group>
    <i-group title="used with input">
      <i-input placeholder="title"></i-input>
      <i-textarea :max="200" name="description" placeholder="placeholder"></i-textarea>
    </i-group>
    <i-group title="hide counter">
      <i-textarea :max="200" name="detail" placeholder="placeholder" :show-counter="false"></i-textarea>
    </i-group>
    <i-group title="autosize">
      <i-textarea placeholder="Type something" :show-counter="false" :rows="1" autosize></i-textarea>
      <i-textarea title="title" placeholder="Type something" :show-counter="false" :rows="1" autosize></i-textarea>
    </i-group>
    <i-group title="set height=200">
      <i-textarea title="title" :max="200" placeholder="placeholder" :show-counter="false" :height="200" :rows="8" :cols="30"></i-textarea>
    </i-group>
  </div>
</template>

<script>
export default {
  methods: {
    onEvent (event) {
      console.log('on', event)
    }
  }
}
</script>
