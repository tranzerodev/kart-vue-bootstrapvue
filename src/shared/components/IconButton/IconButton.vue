<template>
  <div>
    <span class="pr-3" v-if="rightIcon">{{ title }}</span>
    <button
      type="button"
      class="btn btn-mat btn-circle"
      :class="{ 'btn-small': isSmall }"
      @click="handleButtonClick"
    >
      <span :class="'text-' + iconColor"><i :class="iconClass"></i></span>
    </button>
    <span class="pl-3" v-if="!rightIcon && title">{{ title }}</span>
  </div>
</template>
<script>
export default {
  name: 'IconButton',
  props: {
    title: {
      type: String,
      required: true,
    },
    iconClass: {
      type: String,
      required: true,
    },
    isSmall: {
      type: Boolean,
      default: false,
    },
    iconColor: {
      type: String,
      default: 'primary',
    },
    rightIcon: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {}
  },
  methods: {
    handleButtonClick() {
      this.$emit('click-icon-button')
    },
  },
}
</script>
