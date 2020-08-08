<template>
  <div>
    <div class="card-landing">
      <template v-if="type == 'left'">
        <div class="card-landing-left">
          <div>
            <div class="card-title">
              <h6
                class="title font-weight-bold mb-4"
                v-bind:style="{ fontSize: titleFontSize + 'px' }"
                v-html="title"
              >
              </h6>
              <p v-if="subtitle">{{ subtitle }}</p>

              <div class="card-description">
                <h6 class="description" v-html="description">
                </h6>
              </div>
            </div>
            <div class="card-footer" v-if="button_first">
              <a :href="url_button_first">
                <button type="button" class="btn btn-tertiary">
                  {{ button_first }}
                </button>
              </a>
              <button
                type="button"
                class="btn btn-outline-grey"
                v-if="button_next"
              >
                {{ button_next }}
              </button>
            </div>
          </div>
        </div>
        <div class="card-landing-right">
          <div
            v-bind:style="{
              width: (imageWidth ? imageWidth : '100') + '%',
              float: 'right',
            }"
          >
            <div class="hp-card-img" v-if="img">
              <img :src="img" :alt="title" class="img1" />
            </div>
          </div>
        </div>
      </template>

      <template v-if="type == 'right'">
        <div class="card-landing-left">
          <div v-bind:style="{ width: imageWidth + '%' }">
            <div class="hp-card-img" v-if="img">
              <img :src="img" :alt="title" class="img1" />
            </div>
          </div>
        </div>
        <div class="card-landing-right">
          <div>
            <div class="card-title">
              <h6
                class="title font-weight-bold mb-4"
                v-bind:style="{ fontSize: titleFontSize + 'px' }"
                v-html="title"
              >
              </h6>
              <p v-if="subtitle">{{ subtitle }}</p>

              <div class="card-description">
                <h6 class="description" v-html="description">
                </h6>
              </div>
            </div>
            <div class="card-footer" v-if="button_first">
              <a :href="url_button_first">
                <button type="button" class="btn btn-tertiary">
                  {{ button_first }}
                </button>
              </a>
              <button
                type="button"
                class="btn btn-outline-grey"
                v-if="button_next"
              >
                {{ button_next }}
              </button>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: '',
      },
    }
  },
  props: [
    'title',
    'image',
    'url',
    'url_button_first',
    'url_button_next',
    'button_first',
    'button_next',
    'description',
    'type',
    'titleFontSize',
    'descriptionFontSize',
    'subtitle',
    'imageWidth',
  ],
  mounted() {
    this.$store.dispatch('jobs/getJobsData')
  },
  computed: {
    img() {
      if (this.image == '') {
        return null
      } else {
        return require('../../assets/images/' + this.image)
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.card-landing {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
  padding: 0;
  height: 555px;
  //border-radius: 5px;
  //box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  .card-title {
    width: 100%;
    //width: 550px;
  }
  .title {
    font-weight: 550;
    font-size: 50px;
    line-height: 60px;
    color: #404040;
  }
  .description {
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #313131;
  }
  h6.bold {
    font-size: 16px;
    font-weight: bold;
    color: #555555;
    margin-bottom: 0;
  }
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #655dc6;
  }
  h5 {
    font-size: 18px;
  }
  span {
    color: #4d4f5c;
  }
  .card-landing-title {
    width: 100%;
  }
  .card-landing-left {
    width: 50%;
    margin: 0 auto;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .card-landing-right {
    width: 50%;
    margin: 0 auto;
    padding: 0px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
  .card-landing-footer {
    width: 100%;
    display: flex;
    align-items: center;
  }
  span.number,
  span.number > span {
    font-weight: bold;
    font-size: 75px;
    color: #42c2e0;
  }
  .number-large {
    text-align: center;
  }
  .number-description {
    text-align: center;
  }
  .card-landing-footer {
    text-align: center;
    justify-content: center;
  }
  .card-landing-footer {
    margin-top: 75px;
  }
  .img1 {
    width: 100%;
    max-height: 500px;
  }
  .card-footer {
    padding: 0.75rem 0;
    background-color: transparent;
    border-top: 0;
    button {
      margin-right: 50px;
    }
  }
  .btn {
    color: #fff;
    width: 140px;
  }
}
@media screen and (max-width: 1024px) {
  .card-landing {
    height: auto;
    h5 {
      text-align: center;
    }
    .card-landing-left {
      width: 100%;
    }
    .card-landing-right {
      width: 100%;
    }
    .card-landing-footer {
      margin-top: 0;
    }
  }
}
</style>
