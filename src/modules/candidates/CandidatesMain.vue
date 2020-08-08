<template>
  <div class="candidates-container">
    <CandidatesHeader image="user.svg" />
    <CandidatesBody />
  </div>
</template>
<script>
import CandidatesHeader from './CandidatesHeader'
import CandidatesBody from './CandidatesBody'

export default {
  components: {
    CandidatesHeader,
    CandidatesBody,
  },
}
</script>
<style lang="scss" scoped>
.candidates-container {
  margin: 0 60px 60px;
  background: #ffffff;
  width: calc(100% - 80px);
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}
</style>
