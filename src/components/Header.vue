<template>
  <div class="header">
    <img
      src="../assets/kartmon-logo.png"
      with="164px"
      height="48px"
      class="app-logo"
    />

    <span v-if="step == 1">
      <button class="signin-div"><a href="/auth/login">SIGN IN</a></button>
      <select class="custom-select lang-select">
        <option>EN</option>
        <option>ES</option>
      </select>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    step: {
      type: Number,
      default: 1,
    },
  },
}
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 15%;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #ffffff;
  padding-bottom: 2%;
}
.signin-btn {
  left: 79.1%;
  right: 13.68%;
  top: 32.14%;
  bottom: 32.14%;
  border: 2px solid #3cb1e5;
  box-sizing: border-box;
  border-radius: 4px;
}
.signin-div {
  width: 9%;
  height: 40px;
  border: 2px solid #3cb1e5;
  box-sizing: border-box;
  border-radius: 4px;
  color: #3cb1e5;
  margin-left: 53%;
  vertical-align: bottom;
}
.signin-div a {
  color: #3cb1e5;
  text-decoration: none;
}
.lang-select {
  margin-left: 86%;
  background-position: right 8px top;
  font-family: Acumin Pro;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  color: #3cb1e5;
  height: max-content;
  width: 5%;
  vertical-align: bottom;
  margin-top: -2.8%;
  border: 0px;
  outline: 0px;
}
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url("data:image/svg+xml;utf8,<svg fill='black' height='24' viewBox='0 0 24 24' width='24' xmlns='http://www.w3.org/2000/svg'><path d='M7 10l5 5 5-5z'/><path d='M0 0h24v24H0z' fill='none'/></svg>");
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-position-y: 5px;
  border: 1px solid #dfdfdf;
  border-radius: 2px;
  margin-right: 2rem;
}

.app-logo {
  margin-left: 10%;
  margin-top: 2%;
}

.custom-select select {
  display: none; /*hide original SELECT element: */
  float: left;
}

.select-selected {
  background-color: DodgerBlue;
}

/* Style the arrow inside the select element: */
.select-selected:after {
  content: '';
  top: 14px;
  right: 10px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
  border-color: #fff transparent transparent transparent;
}

/* Point the arrow upwards when the select box is open (active): */
.select-selected.select-arrow-active:after {
  border-color: transparent transparent #fff transparent;
  top: 7px;
}

/* style the items (options), including the selected item: */
.select-items div,
.select-selected {
  color: #ffffff;
  padding: 8px 16px;
  border: 1px solid transparent;
  border-color: transparent transparent rgba(0, 0, 0, 0.1) transparent;
  cursor: pointer;
}

/* Style items (options): */
.select-items {
  background-color: DodgerBlue;
  top: 100%;
  left: 0;
  right: 0;
  z-index: 99;
}

/* Hide the items when the select box is closed: */
.select-hide {
  display: none;
}

.select-items div:hover,
.same-as-selected {
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
