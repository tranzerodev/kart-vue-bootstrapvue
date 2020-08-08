<template>
  <footer>
    <div class="footer-bottom">
      <div>
        <span class="copyright-text"
          >Copyright {{ COPYRIGHT_YEAR }} &copy; All Rights Reserved</span
        >
      </div>
      <div>
        <a href="#" class="link-hover"><i class="fa fa-instagram"></i></a>
        <a href="#" class="link-hover"><i class="fa fa-twitter"></i></a>
        <a href="#" class="link-hover"><i class="fa fa-facebook"></i></a>
      </div>
    </div>
  </footer>
</template>
<script></script>
<style lang="scss" scoped>
.link-hover {
  margin-left: 30px;
}
.copyright-text {
  font-weight: normal;
  line-height: 13px;
  color: #5d5d5d;
  opacity: 0.74;
}
footer {
  background: #ffffff;
  padding-top: 20px;
  padding-bottom: 20px;
  .footer-bottom {
    color: #5d5d5d;
    text-align: center;
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0 auto;
    max-width: 86vw;
  }
  li {
    list-style: none;
    a,
    span {
      color: #5d5d5d;
      font-size: 10px;
      &.title {
        font-weight: bold;
      }
    }
  }
  .fa {
    color: #453087;
    font-size: 16px;
    width: 16px;
    height: 16px;
  }
  .social-footer {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    li {
      width: 100%;
    }
  }
}
@media screen {
  footer {
    margin: 0;
  }
}
</style>
