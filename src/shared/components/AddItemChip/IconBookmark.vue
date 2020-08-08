<template>
  <div class="d-flex bookmarker">
    <span class="title text-white">{{ title }}</span>
    <b-icon
      icon="bookmark-fill"
      font-scale="2.5"
      :variant="bookmarkColor"
    ></b-icon>
  </div>
</template>
<script>
export default {
  name: 'IconBookmark',
  components: {},
  props: {
    title: {
      type: String,
    },
  },
  computed: {
    bookmarkColor: function() {
      const colorList = [
        {
          level: 'FT',
          color: 'primary',
        },
        {
          level: 'AD',
          color: 'success',
        },
        {
          level: 'IM',
          color: 'brown',
        },
        {
          level: 'BG',
          color: 'warning',
        },
      ]
      let currentColor = colorList.find(
        colorItem => colorItem.level === this.title
      )
      if (currentColor) {
        return currentColor.color
      } else return 'warning'
    },
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
.bookmarker {
  margin-top: 12px;
  .title {
    position: absolute;
    margin-left: 9px;
    margin-top: 3px;
  }
}
</style>
