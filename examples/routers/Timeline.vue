<template>
	<div class="timeline-demo">
		<i-timeline>
			<i-timeline-item>
				<h4 class="recent">【广东】 广州市 已发出</h4>
				<p class="recent">2016-04-17 12:00:00</p>
			</i-timeline-item>
			<i-timeline-item>
				<h4> 申通快递员 广东广州 收件员 xxx 已揽件</h4>
				<p>2016-04-16 10:23:00</p>
			</i-timeline-item>
			<i-timeline-item>
				<h4> 商家正在通知快递公司揽件</h4>
				<p>2016-04-15 9:00:00</p>
			</i-timeline-item>
		</i-timeline>
		<i-timeline>
			<i-timeline-item v-for="(i, index) in count" :key="index">
				<h4 :class="[i === 0 ? 'recent' : '']">Timeline Node {{i + 1}}</h4>
				<p :class="[i === 0 ? 'recent' : '']">index {{i + 1}}</p>
			</i-timeline-item>
		</i-timeline>
    <i-button type="primary" @click.native="count = 6"> Set to 6 nodes</i-button>
    <i-button type="primary" @click.native="count = 3"> Set to 3 nodes</i-button>
	</div>
</template>

<script>
export default {
  data () {
    return {
      count: 3
    }
  }
}
</script>

<style lang="less">
.timeline-demo {
	p {
		color: #888;
		font-size: 0.8rem;
	}
	h4 {
		color: #666;
		font-weight: normal;
	}
	.recent {
		color: rgb(4, 190, 2)
	}
}
</style>
