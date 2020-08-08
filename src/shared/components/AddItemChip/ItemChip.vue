<template>
  <div class="d-flex align-items-center pl-3 mb-1">
    <span :class="{ 'mr-1': !haveBookmark }">{{ title }}</span>
    <IconBookmark :title="level" v-if="haveBookmark" />
    <IconButton
      title
      icon-class="fa fa-minus"
      @click-icon-button="removeItem"
      :is-small="true"
      iconColor="danger"
    />
  </div>
</template>
<script>
import IconButton from '@/shared/components/IconButton/IconButton'
import IconBookmark from './IconBookmark'
export default {
  name: 'ItemChip',
  components: {
    IconButton,
    IconBookmark,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    level: {
      type: String,
    },
    haveBookmark: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      items: [],
      currentItem: '',
    }
  },
  methods: {
    removeItem() {
      this.$emit('remove-item', this.title)
    },
  },
}
</script>
