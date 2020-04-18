<template>
  <footer class="footer">
    <div class="footer-right-wrap">
      <ul class="copyright" v-if="copyright">
        <li class="copyright-item" v-for="(item, index) in copyright" v-bind:key="index">
          <NavLink :link="item.link">{{ item.text }}</NavLink>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>

export default {
  
  computed: {
    copyright() {
      return (
        this.$themeConfig.footer && this.$themeConfig.footer.copyright || []
      )
    },
  },
}
</script>

<style lang="stylus" scoped>
  ol, ul
    list-style none
    margin 0
    padding 0

  .footer
    height 60px
    box-sizing border-box
    background-color #FFF
    color #000
    display flex
    padding 15px 32px

    .footer-left-wrap
      line-height 30px
      flex 1
      display flex

      .contact
        display flex

        .contact-item
          flex 1
          margin-right 10px

          a
            font-size 12px
            color rgba(0, 0, 0, 0.45)
            text-decoration none
            transition color .3s

            &:hover
              color #FFF

    .footer-right-wrap
      flex 1
      display flex
      align-items center
      justify-content center

      @media(min-width: $MQNarrow)
        justify-content flex-end

      .copyright
        display flex
        justify-content flex-end

        .copyright-item
          flex 0 0 auto
          padding 0 10px
          position relative
          line-height 12px
          border-right 1px solid rgba(0, 0, 0, 0.6)

          &:last-child
            border-right none

          a
            font-size 12px
            color rgba(0, 0, 0, 0.6)
            text-decoration none
            transition color .3s

            &:hover
              color rgba(0, 0, 0, 0.9)

  @media (max-width: $MQMobile)
    .footer
      height 100px
      flex-direction column

      .footer-left-wrap
        align-items center
        justify-content center
</style>
