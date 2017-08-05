<template>
  <div>
    <i-group title="custom star, some symbols like ♥ ❤ are not proper.">
      <i-cell title="loving">
        <i-rater v-model="data4" slot="value" star="♡" active-color="red" :margin="15"></i-rater>
      </i-cell>
      <i-cell title="Sunshine">
        <i-rater v-model="data5" slot="value" star="☼" active-color="#FF9900" :margin="4"></i-rater>
      </i-cell>
      <i-cell title="Smilies">
        <i-rater v-model="data5" slot="value" star="☻" active-color="#FF9900" :margin="4"></i-rater>
      </i-cell>
      <i-cell title="Different stars">
        <i-rater v-model="data5" slot="value" star="✩" active-color="#FF9900" :margin="4"></i-rater>
      </i-cell>
      <i-cell title="How embarrass">
        <i-rater v-model="data5" slot="value" star="囧" active-color="#FF9900" :margin="4"></i-rater>
      </i-cell>
    </i-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data1: 0,
      data2: 5,
      data3: 5,
      data4: 3,
      data41: 3.7,
      data42: 3.5,
      data5: 3,
      data6: 3
    }
  }
}
</script>
