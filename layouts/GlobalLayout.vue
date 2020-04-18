<template>
  <div id="vuperess-theme-blog__global-layout">
    <Header />
    <div
      class="container"
      @click="isMobileHeaderOpen = false"
    >
      <DefaultGlobalLayout />
    </div>
    <Footer />
  </div>
</template>

<script>
import GlobalLayout from '@app/components/GlobalLayout.vue'
import Header from '@theme/components/Header.vue'
import Footer from '../components/Footer.vue'

export default {
  components: {
    DefaultGlobalLayout: GlobalLayout,
    Header,
    Footer
  },

  data () {
    return {
      isMobileHeaderOpen: false
    }
  },

  mounted () {
    this.$router.afterEach(() => {
      this.isMobileHeaderOpen = false
    })
  }
}
</script>
