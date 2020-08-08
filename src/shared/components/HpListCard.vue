<template>
  <div class="card-table">
    <div class="card-table-title">
      <h5>{{ title }}</h5>
    </div>
    <div class="card-table-body">
      <b-list-group>
        <b-list-group-item class="list-element">
          <div class="list-img">
            <span>M</span>
          </div>
          <div class="list-desc">
            <span class="list-title">
              Melissa Abbott
            </span>
            <small>Marketing Manager</small>
          </div>
          <div class="list-date">
            <span>02/02/2020</span>
          </div>
        </b-list-group-item>
        <b-list-group-item class="list-element">
          <div class="list-img">
            <span>M</span>
          </div>
          <div class="list-desc">
            <span class="list-title">
              Melissa Abbott
            </span>
            <small>Marketing Manager</small>
          </div>
          <div class="list-date">
            <span>02/02/2020</span>
          </div>
        </b-list-group-item>
        <b-list-group-item class="list-element">
          <div class="list-img">
            <span>M</span>
          </div>
          <div class="list-desc">
            <span class="list-title">
              Melissa Abbott
            </span>
            <small>Marketing Manager</small>
          </div>
          <div class="list-date">
            <span>02/02/2020</span>
          </div>
        </b-list-group-item>
        <b-list-group-item class="list-element">
          <div class="list-img">
            <span>M</span>
          </div>
          <div class="list-desc">
            <span class="list-title">
              Melissa Abbott
            </span>
            <small>Marketing Manager</small>
          </div>
          <div class="list-date">
            <span>02/02/2020</span>
          </div>
        </b-list-group-item>
        <b-list-group-item class="list-element">
          <div class="list-img">
            <span>M</span>
          </div>
          <div class="list-desc">
            <span class="list-title">
              Melissa Abbott
            </span>
            <small>Marketing Manager</small>
          </div>
          <div class="list-date">
            <span>02/02/2020</span>
          </div>
        </b-list-group-item>
        <b-list-group-item class="list-element">
          <div class="list-img">
            <span>M</span>
          </div>
          <div class="list-desc">
            <span class="list-title">
              Melissa Abbott
            </span>
            <small>Marketing Manager</small>
          </div>
          <div class="list-date">
            <span>02/02/2020</span>
          </div>
        </b-list-group-item>
        <b-list-group-item class="list-element">
          <div class="list-img">
            <span>M</span>
          </div>
          <div class="list-desc">
            <span class="list-title">
              Melissa Abbott
            </span>
            <small>Marketing Manager</small>
          </div>
          <div class="list-date">
            <span>02/02/2020</span>
          </div>
        </b-list-group-item>
        <b-list-group-item class="list-element">
          <div class="list-img">
            <span>M</span>
          </div>
          <div class="list-desc">
            <span class="list-title">
              Melissa Abbott
            </span>
            <small>Marketing Manager</small>
          </div>
          <div class="list-date">
            <span>02/02/2020</span>
          </div>
        </b-list-group-item>
        <b-list-group-item class="list-element">
          <div class="list-img">
            <span>M</span>
          </div>
          <div class="list-desc">
            <span class="list-title">
              Melissa Abbott
            </span>
            <small>Marketing Manager</small>
          </div>
          <div class="list-date">
            <span>02/02/2020</span>
          </div>
        </b-list-group-item>
        <b-list-group-item class="list-element">
          <div class="list-img">
            <span>M</span>
          </div>
          <div class="list-desc">
            <span class="list-title">
              Melissa Abbott
            </span>
            <small>Marketing Manager</small>
          </div>
          <div class="list-date">
            <span>02/02/2020</span>
          </div>
        </b-list-group-item>
        <b-list-group-item class="list-element">
          <div class="list-img">
            <span>M</span>
          </div>
          <div class="list-desc">
            <span class="list-title">
              Melissa Abbott
            </span>
            <small>Marketing Manager</small>
          </div>
          <div class="list-date">
            <span>02/02/2020</span>
          </div>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>
<script>
export default {
  props: ['title'],
}
</script>
<style lang="scss" scoped>
.card-table {
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;
  padding: 40px;
  .list-group-item {
    border: none;
  }
  .card-table-title {
    width: 100%;
  }
  .card-table-body {
    width: 100%;
  }
  .list-element {
    display: flex;
    justify-content: space-between;
    .list-img {
      width: 40px;
      min-width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #3cb1e5;
      border-radius: 50px;
      color: #ffffff;
      font-weight: bold;
    }
    .list-desc {
      display: flex;
      flex-wrap: wrap;
      .list-title,
      small {
        width: 100%;
      }
    }
  }
}
@media screen and (max-width: 1024px) {
  .card-table {
    padding: 40px 15px;
  }
}
</style>
