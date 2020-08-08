<template>
  <div class="banner-search">
    <div class="form-row">
      <div class="form-group col-md-5">
        <div class="input-group">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <img src="../../assets/search-icon.svg" alt="icon" />
            </div>
          </div>
          <input
            type="text"
            placeholder="Search For Jobs"
            class="form-control form-control-lg"
          />
        </div>
      </div>
      <div class="form-group col-md-4">
        <div class="input-group mb-2">
          <div class="input-group-prepend">
            <div class="input-group-text">
              <img src="../../assets/streetsign.svg" alt="icon" height="90%" />
            </div>
          </div>
          <input
            type="text"
            class="form-control form-control-lg"
            :placeholder="$t('location')"
            v-model="location"
          />
        </div>
      </div>
      <div class="input-group col-md-3">
        <div class="button-group col-12">
          <button type="button" class="btn btn-lg btn-tertiary col-12">
            Find Jobs
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
/* import GoogleMapsApiLoader from 'google-maps-api-loader'
import { GOOGLE_KEY } from '../../utils/constants' */

export default {
  data() {
    return {
      location: this.$t('location'),
      google: null,
      /* apiKey: GOOGLE_KEY, */
    }
  },
  mounted() {
    /*     GoogleMapsApiLoader({
      apiKey: this.apiKey,
    }).then(googleMapApi => {
      this.google = googleMapApi
      navigator.geolocation.getCurrentPosition(position => {
        const {
          coords: { latitude, longitude },
        } = position
        const latlng = { lat: latitude, lng: longitude }
        var geocoder = new this.google.maps.Geocoder()
        geocoder.geocode({ location: latlng }, (results, status) => {
          if (status === 'OK') {
            if (results[0]) {
              this.location = results[0].formatted_address
            }
          }
        })
      })
    }) */
  },
}
</script>
<style lang="scss" scoped>
.banner-search {
  .button-group {
    padding: 0;
  }
  // justify-content: center;
  width: 100%;
  display: grid;
  align-items: center;
  justify-content: flex-end;
  .form-row {
    justify-content: center;
    width: 700px;
    max-width: 51vw;
    margin: 0;
  }
  .form-group {
    margin-bottom: 0px;
    height: 48px;
  }
  .input-group-text {
    background: #ffffff;
    border: solid1px #ffffff;
  }
  input.form-control {
    border-left: none;
    color: #4d4f5c;

    &:focus {
      border-color: #ced4da;
      color: #495057;
      outline: 0;
      box-shadow: none;
    }
  }
  .fa-search {
    color: #5d5d5d;
  }
}
</style>
