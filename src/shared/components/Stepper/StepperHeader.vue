<template>
  <b-container fluid class="px-0">
    <b-row>
      <b-col class="d-flex justify-center">
        <div class="stepper-header">
          <template v-for="(step, index) in steps">
            <div class="stepper" :key="'stepper' + step.id">
              <div
                v-bind:class="{
                  'step-selected': currentStep === step.id,
                  completed: step.id < currentStep,
                }"
              >
                <i class="fa fa-circle" aria-hidden="true"></i>
              </div>
              <span class="stepper-label">{{ step.stepLabel }}</span>
            </div>
            <span
              class="divider"
              :class="{ completed: step.id < currentStep }"
              v-if="index !== steps.length - 1"
              :key="'divider' + step.id"
            ></span>
          </template>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: 'HpStepperHeader',
  props: {
    steps: {
      type: Array,
      required: true,
    },
    currentStep: {
      type: Number,
      required: true,
      default: 0,
    },
  },

  computed: {},
  methods: {
    handleClickCard() {
      this.$emit('select-card', this.cardId)
    },
  },
}
</script>
<style lang="scss" scoped>
.stepper-header {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: calc(100% - 15px);
  min-height: 64px;
  .fa-min {
    font-size: 0.5em;
    line-height: 0.75em;
    vertical-align: -15%;
  }
  .stepper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 100px;
    div {
      display: flex;
      width: 40px;
      height: 40px;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0);
      border-radius: 50px;
      &.step-selected {
        background: #ceecfa;
        i {
          color: var(--primary);
        }
      }
      &.completed {
        i {
          color: var(--primary);
        }
      }
      i {
        color: white;
      }
    }
    .stepper-label {
      position: absolute;
      top: 40px;
      width: 200px;
      text-align: center;
    }
  }

  .divider {
    flex-grow: 1;
    border-top: 3px solid white;
    margin-top: 18px;
    &.completed {
      border-color: var(--primary);
    }
  }
}
</style>
