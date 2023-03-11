<template>
	<div class="ContentsContainer">
		<slot></slot>
	</div>

</template>


<style scoped>
	div.ContentsContainer {
		min-height: 50px;
		width: 85%;

		background-color: rgba(25, 104, 106, 0.75);
		backdrop-filter: blur(15px);
		border-radius: 15px;
		padding: 15px 30px;

		margin: 0 auto 25px;
	}
</style>