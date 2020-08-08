<template>
  <b-container>
    <b-row>
      <b-input-group class="mb-2 item-chip">
        <b-form-input
          :placeholder="title"
          v-model="currentItem"
          class="mat-form-control auto-complete-control"
          list="item-list-id"
        ></b-form-input>
        <b-input-group-append is-text class="plus-icon">
          <IconButton
            title
            icon-class="fa fa-plus"
            @click-icon-button="addItem"
          />
        </b-input-group-append>
        <b-form-datalist
          id="item-list-id"
          :options="itemOptions"
        ></b-form-datalist>
      </b-input-group>
    </b-row>
  </b-container>
</template>
<script>
import IconButton from '@/shared/components/IconButton/IconButton'
export default {
  name: 'AddItemChipAuto',
  components: {
    IconButton,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    items: {
      type: Array,
      required: true,
    },
    itemOptions: {
      type: Array,
    },
  },
  data() {
    return {
      itemList: [],
      currentItem: '',
    }
  },
  watch: {
    items: function(newVal) {
      this.itemList = newVal
    },
  },
  methods: {
    addItem() {
      if (this.currentItem) {
        if (this.itemList.findIndex(item => item === this.currentItem) < 0) {
          this.$emit('add-chip', this.currentItem)
          this.currentItem = ''
        }
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.plus-icon {
  border-left: 2px solid #ced4da;
}
</style>
