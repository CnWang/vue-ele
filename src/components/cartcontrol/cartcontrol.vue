 <template>
  <div class="cartcontrol">
    <transition name="move">
      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="removeCart">
        <span class="inner icon-remove_circle_outline"></span>
      </div>
    </transition>
    <div class="cart-count" v-show="food.count>0">{{ food.count }}</div>
    <div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>
<script>
  import Vue from 'vue'

  export default{
    props: {
      food: {
        type: Object
      }
    },
    created() {
    },
    methods: {
      addCart(event) {
        if (!event._constructed) {
          return
        }
        if (!this.food.count) {
          Vue.set(this.food,'count',1)
          this.food.count = 1
        } else {
          this.food.count ++
        }
        this.$root.$emit('cart.add',event.target)
      },
      removeCart(event) {
        if (!event._constructed) {
          return
        }
        this.food.count --
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .cartcontrol
    font-size 0
    .cart-decrease
      display inline-block
      padding 6px
      transition all 0.4s linear
      &.move-enter-active, &.move-leave-active
        opacity 1
        transform translate3d(0,0,0)
        .inner
          transform rotate(0)
      &.move-enter, &.move-leave-active
        opacity: 0
        transform translate3d(24px,0,0)
        .inner
          transform rotate(180deg)
      .inner
        display inline-block
        font-size 24px
        line-height 24px
        color rgb(0,160,220)
        transition all 0.4s linear
    .cart-count
      display inline-block
      vertical-align top
      text-align center
      font-size 10px
      line-height 24px
      padding-top 6px
      width 12px
      color rgb(147,153,159)
    .cart-add
      display inline-block
      padding 6px
      font-size 24px
      line-height 24px
      color rgb(0,160,220)
</style>
