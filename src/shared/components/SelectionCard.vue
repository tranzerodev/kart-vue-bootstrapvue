<template>
  <b-card
    body-class="d-flex align-items-center justify-content-between"
    class="select-card"
    @click.prevent="handleClickCard"
    :bg-variant="isCardActive ? 'info' : ''"
    :style="height ? `height: ${height}` : ''"
  >
    <b-card-body class="d-flex align-items-center justify-content-between">
      <div class="custom-control custom-checkbox checkbox-lg form-control-lg">
        <input
          type="checkbox"
          class="custom-control-input"
          v-model="isCardActive"
          id="customCheck"
        />
        <label
          class="custom-control-label pl-4 pt-1 h4"
          :class="{ 'text-primary': isCardActive }"
          for="customCheck"
          >{{ labelValue }}</label
        >
      </div>
      <div class="hp-card-img">
        <img :src="imageUrl" :alt="labelValue" />
      </div>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  name: 'SelectionCard',
  props: {
    cardId: {
      type: Number,
      required: true,
      default: 0,
    },
    labelValue: {
      type: String,
      default: '',
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    imageUrl: {
      type: String,
    },
    height: {
      type: String,
    },
  },

  computed: {
    isCardActive: function() {
      return this.isActive
    },
  },
  methods: {
    handleClickCard() {
      this.$emit('select-card', this.cardId)
    },
  },
}
</script>
<style lang="scss" scoped>
.select-card {
  cursor: pointer;
  .custom-checkbox {
    label {
      cursor: pointer !important;
    }
  }
}
</style>
