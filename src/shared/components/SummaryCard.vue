<template>
  <b-card
    body-class="d-flex align-items-center justify-content-between py-1"
    class="select-card"
    @click.prevent="handleClickCard"
    :bg-variant="isCardActive ? 'info' : ''"
    :style="height ? `height: ${height}` : ''"
  >
    <b-card-body>
      <div class="header full-width">
        <div
          class="title-row d-flex justify-content-between align-items-center"
        >
          <div class="title">
            <p
              class="h1 font-weight-bold"
              :class="theme ? `text-${theme}` : 'text-dark'"
            >
              {{ title }}
            </p>
          </div>
          <div class="right-title">
            <span class="h3 font-weight-bold text-dark">{{ rightTitle }}</span>
          </div>
        </div>
        <div class="note-row">
          <span class="note">{{ note }}</span>
        </div>
        <hr class="mt-3" />
      </div>
      <div class="content full-width">
        <b-row>
          <b-col cols="12" sm="6" md="7">
            <div class="description">
              <b-list-group>
                <b-list-group-item
                  class="border-0 pl-1"
                  v-for="(descriptionItem, index) in description"
                  :key="index"
                >
                  <i
                    class="fa fa-check mr-3"
                    :class="theme ? `text-${theme}` : 'text-dark'"
                  />
                  {{ descriptionItem }}
                </b-list-group-item>
              </b-list-group>
            </div>
            <div class="card-action mt-4">
              <b-button
                :variant="theme ? `outline-${theme}` : 'outline-dark'"
                class="border-2 px-5 py-2"
                @click="handleClickAction"
                >{{ actionText }}</b-button
              >
            </div>
          </b-col>
          <b-col cols="12" sm="6" md="5">
            <div>
              <b-img :src="imageUrl" :alt="labelValue" fluid />
            </div>
          </b-col>
        </b-row>
      </div>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  name: 'SummaryCard',
  props: {
    title: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: 'primary',
    },
    rightTitle: {
      type: String,
      default: '',
    },
    note: {
      type: String,
      default: '',
    },
    description: {
      type: Array,
      default: function() {
        return []
      },
    },
    imageUrl: {
      type: String,
      default: '',
    },
    labelValue: {
      type: String,
      default: 'Image',
    },
    actionText: {
      type: String,
      default: '',
    },

    height: {
      type: String,
    },
  },
  data() {
    return {}
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
    handleClickAction() {
      this.$emit('action-click')
    },
  },
}
</script>
<style lang="scss" scoped>
.select-card {
  border-radius: 9px;
  box-shadow: 0px 2px 6px rgba(82, 82, 82, 0.25);
  .note {
    font-size: 18px;
  }
}
</style>
