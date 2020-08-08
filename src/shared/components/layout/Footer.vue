<template>
  <footer>
    <div class="footer-main">
      <div>
        <div class="footer-container">
          <div class="footer-links-section-short">
            <a href="#" class="footer-logo">
              <img src="../../../assets/emblem.png" alt />
            </a>
          </div>
          <div class="footer-links-section-short" v-show="!isLoggedIn">
            <ul>
              <li>
                <a class="title footer-link-bold" href="/auth/login"
                  >Login In</a
                >
              </li>
              <li><a class="title" href="/auth/register">Sign In</a></li>
            </ul>
          </div>
          <div class="footer-links-section=short" v-show="isLoggedIn">
            <ul>
              <li>
                <a class="title footer-link-bold logout" @click="logout()"
                  >Sign Out</a
                >
              </li>
            </ul>
          </div>
          <div class="footer-links-section">
            <ul>
              <li><a class="title" href="#">Jobs</a></li>
            </ul>
          </div>
          <div class="footer-links-section">
            <ul>
              <li>
                <a href="#" class="title link-hover">Why Workspace</a>
              </li>
            </ul>
          </div>
          <div class="footer-links-section">
            <ul>
              <li>
                <span class="title link-hover">Who are we</span>
              </li>
              <li>
                <a href="#" class="link-hover">Product Info</a>
              </li>
              <li>
                <a href="#" class="link-hover">Request Demo</a>
              </li>
              <li>
                <a href="#" class="link-hover">Our Team</a>
              </li>
            </ul>
          </div>
          <div class="footer-links-section">
            <ul>
              <li>
                <span class="title">Library</span>
              </li>
              <li>
                <a href="#" class="link-hover">HR Articles</a>
              </li>
              <li>
                <a href="#" class="link-hover">News</a>
              </li>
            </ul>
          </div>
          <div class="footer-links-section">
            <ul>
              <li>
                <a href="#" class="title link-hover">Pricing</a>
              </li>
            </ul>
          </div>
          <div class="footer-links-section">
            <ul>
              <li>
                <span class="title">
                  Information
                </span>
              </li>
              <li><a href="#">Carrers</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Our Team</a></li>
            </ul>
          </div>
          <div class="footer-links-section">
            <ul>
              <li>
                <span class="title">Customer Service</span>
              </li>
              <li>
                <a href="#" class="link-hover">Privacy Policy</a>
              </li>
              <li>
                <a href="#" class="link-hover">Terms &amp; Conditions</a>
              </li>
              <li>
                <a href="#" class="link-hover">FAQ</a>
              </li>
            </ul>
          </div>
          <div class="footer-links-section">
            <ul class="social-footer">
              <li>
                <a href="#" class="link-hover"
                  ><i class="fa fa-instagram"></i
                ></a>
              </li>
              <li>
                <a href="#" class="link-hover"><i class="fa fa-twitter"></i></a>
              </li>
              <li>
                <a href="#" class="link-hover"
                  ><i class="fa fa-facebook"></i
                ></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <div>
        <span class="copyright-text"
          >Copyright {{ COPYRIGHT_YEAR }} &copy; All Rights Reserved</span
        >
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters['auth/isLoggedIn']
    },
  },
  methods: {
    logout: function() {
      this.$store.dispatch('auth/logout')
      this.$router.push('/auth/login')
    },
  },
}
</script>
<style lang="scss" scoped>
footer {
  background: #ffffff;
  padding-top: 20px;
  padding-bottom: 20px;
  .footer-container {
    margin-top: 50px;
    margin-left: 0;
    margin-right: 0;
    display: flex;
    justify-content: center;
    .div {
      margin-left: 10px;
    }
  }
  .footer-bottom {
    color: #5d5d5d;
    text-align: center;
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
  .row.footer-container {
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
.logout {
  cursor: pointer;
}
@media screen {
  footer {
    margin: 0;
  }
}
</style>
