<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import API from './api/API'
import DialogMixin from '@/shared/mixins/ModalHandler'

export default {
  mixins: [DialogMixin],
  created() {
    let store = this.$store
    let vm = this
    API.interceptors.response.use(undefined, function(err) {
      return new Promise(async function() {
        if (err.response.status === 401) {
          if (
            (await vm.$store.getters['auth/isLoggedIn']) &&
            sessionStorage.getItem('refresh_success') == '1'
          ) {
            sessionStorage.setItem('refresh_success', 0)
            await vm.showConfirmModalTwo(
              vm.$t('session-is-to-expire'),
              vm.$t('logout-now'),
              'Ok'
            )
            if (vm.confirmTwoResult === true) {
              await store.dispatch('auth/logout')
            } else if (vm.confirmTwoResult === false) {
              await store.dispatch(
                'auth/token_refresh',
                sessionStorage.getItem('token_refresh')
              )
              location.reload()
            }
          }
        } else {
          throw err
        }
      })
    })
    if (sessionStorage.getItem('token') !== null)
      API.defaults.headers.Authorization =
        'Bearer ' + sessionStorage.getItem('token')
  },
  computed: {
    isAuth() {
      return this.$store.getters['auth/isLoggedIn']
    },
  },
  mounted() {
    sessionStorage.setItem('refresh_success', 1)
  },
  watch: {
    isAuth(value) {
      if (value !== true) {
        this.$router.push('/auth/login')
      }
    },
  },
  methods: {},
}
</script>

<style lang="scss">
select:not([multiple]) {
  -webkit-appearance: none;
  -moz-appearance: none;
  background-position: right 50%;
  background-repeat: no-repeat;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBNYWNpbnRvc2giIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDZFNDEwNjlGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDZFNDEwNkFGNzFEMTFFMkJEQ0VDRTM1N0RCMzMyMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0NkU0MTA2N0Y3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0NkU0MTA2OEY3MUQxMUUyQkRDRUNFMzU3REIzMzIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGsgwQAAAA5SURBVHjaYvz//z8DOYCJgUxAf42MQIzTk0D/M+KzkRGPoQSdykiKJrBGpOhgJFYTWNEIiEeAAAMAzNENEOH+do8AAAAASUVORK5CYII=);
  padding: 0.5em;
  padding-right: 1.5em;
}
.cursor {
  cursor: pointer;
}
.btn-tertiary {
  color: #fff !important;
  width: 140px;
}
#app {
  font-family: 'Acumin Pro', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

.btn-outline-grey {
  color: #717171 !important;
  border-color: #717171 !important;
}

html,
body {
  min-width: 100%;
  min-height: 100%;
  height: 100%;
  color: var(--dark-grey-200) !important;
}

.display-2 {
  font-size: 3rem !important;
}

.h3 {
  @media (max-width: 1200px) {
    font-size: 23px !important;
  }
  @media (max-width: 960px) {
    font-size: 20px !important;
  }
}

.text-light-grey {
  color: #565656;
}

.text-grey {
  color: #4a4a4a;
}

.border-2 {
  border-width: 2px !important;
}

.mat-form-control {
  background: #f4f4fc !important;
  border-radius: 4px;
  border-bottom: none;
  border-style: unset;
  height: 56px !important;
  &.custom-select {
    background: #f4f4fc
      url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='%23343a40' d='M1.646 4.646a.5.5 0 01.708 0L8 10.293l5.646-5.647a.5.5 0 01.708.708l-6 6a.5.5 0 01-.708 0l-6-6a.5.5 0 010-.708z'/%3e%3c/svg%3e")
      no-repeat right 0.75rem center/16px 20px !important;
    &.is-placeholder {
      color: #6c757d;
    }
  }
  &.b-form-datepicker {
    &.date-picker-button {
      padding-right: 2px;
      border-right: 1px solid #ced4da;
      border-top: 1px solid #ced4da;
      border-bottom: 1px solid #ced4da;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    .date-popup {
      margin-left: 10px;
    }
    &.is-valid {
      padding-right: 4px !important;
    }
    &.is-invalid {
      padding-right: 4px !important;
    }
  }

  &.auto-complete-control {
    &::after {
      display: none;
    }
    &::before {
      display: none;
    }
  }
  &.textarea {
    height: 80px !important;
  }
}

.mat-date-picker {
  .input-group-append {
    margin-left: 0px;
  }
}

.item-chip {
  input {
    border-right: none;
  }
  .input-group-append {
    background-color: var(--mat) !important;
    .input-group-text {
      background-color: var(--mat) !important;
      div {
        text-align: right;
      }
    }
    .btn-mat {
      background-color: white !important;
    }
  }
}

.btn-circle {
  width: 40px;
  height: 40px;
  padding: 10px 0px !important;
  border-radius: 50% !important;
  text-align: center !important;
  font-size: 16px !important;
  line-height: 1.42857 !important;
  &.btn-small {
    width: 30px;
    height: 30px;
    padding: 6px 4px !important;
    font-size: 18px;
    line-height: 1.33;
  }
}

#fileInput.dragdrop .custom-file,
#fileInput.dragdrop .custom-file-input {
  height: 40px;
  width: 40px;
  cursor: pointer;
}

#fileInput.dragdrop .custom-file-label {
  border: 0;
  border-radius: 50%;
  background-color: var(--mat);
  height: 40px;
  width: 40px;
  line-height: 90px;
  text-align: center;
  color: transparent;
  padding: 0;
  &:hover {
    cursor: pointer;
  }
}

#fileInput.dragdrop .custom-file:hover .custom-file-label {
  background: #ccccf1;
  border-color: #c2c2ee;
  color: transparent;
  cursor: pointer;
}

#fileInput.dragdrop .custom-file-label::after {
  display: none;
}

#fileInput.dragdrop .custom-file-label::before {
  font-family: FontAwesome;
  content: '\f019';
  position: absolute;
  top: -24px;
  left: 14px;
  color: var(--primary);
}

.modal-dialog {
  .mat-confirm-modal-body {
    font-family: Acumin Pro;
    font-size: 18px;
    // line-height: 30px;
  }

  .mat-confirm-modal-footer {
    width: calc(100% + 0.5px);
    .btn {
      width: 105%;
      margin: 0;
      padding-top: 16px;
      padding-bottom: 16px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  &.modal-sm {
    @media (min-width: 576px) {
      max-width: 360px !important;
    }
  }
  &.auto-complete-control {
    &::after {
      display: none;
    }
    &::before {
      display: none;
    }
  }
}

.full-width {
  width: 100%;
}

.modal-dialog {
  .mat-confirm-modal-body {
    font-family: Acumin Pro;
    font-size: 18px;
  }

  .mat-confirm-modal-footer {
    width: calc(100% + 0.5px);
    .btn {
      width: 105%;
      margin: 0;
      padding-top: 16px;
      padding-bottom: 16px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
  .mat-02-confirm-modal-footer {
    width: calc(100% + 0.5px);
    .btn {
      width: 50%;
      margin: 0;
      padding-top: 16px;
      padding-bottom: 16px;
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  &.modal-sm {
    @media (min-width: 576px) {
      max-width: 360px !important;
    }
  }
}

.checkbox-lg {
  .custom-control-label::after {
    top: 0.2rem;
    width: 1.5rem;
    height: 1.5rem;
  }
  .custom-control-label::before {
    top: 0.2rem;
    width: 1.5rem;
    height: 1.5rem;
  }
}

.panel-info {
  margin-bottom: 40px;
  .panel-info-title {
    h6 {
      padding-left: 25px;
      color: #3cb1e5;
      font-weight: bold;
    }
  }
  .panel-info-body {
    background: #f5f5f5;
    padding: 25px;
    display: flex;
    p {
      width: 93%;
      text-align: justify;
    }
    .panel-experience-body {
      width: 93%;
      .experience-item {
        display: flex;
        .experience-image {
          width: 20%;
        }
        .experience-detail {
          width: 80%;
          h6 {
            font-weight: bold;
          }
        }
      }
    }
    .panel-experience-full-body {
      width: 100%;
      .experience-item {
        display: flex;
        .experience-image {
          width: 20%;
        }
        .experience-detail {
          width: 80%;
          h6 {
            font-weight: bold;
          }
        }
      }
    }
    .info-actions {
      text-align: end;
      width: 7%;
    }
  }
}
</style>
