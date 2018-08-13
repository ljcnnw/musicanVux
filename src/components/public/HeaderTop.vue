<template>
	<div>
		<x-header>
			<span>Hellow Musican</span>
			<x-icon slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
		</x-header>
	</div>
</template>
<script>
	import { XHeader } from 'vux'
	export default{
		name:'HeaderTop',
		components:{
			XHeader
		}
	}
</script>
