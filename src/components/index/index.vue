<template>
  <div>
    <div class="picter">
      <swiper loop auto :list="demo06_list" :index="demo06_index" @on-index-change="demo06_onIndexChange"></swiper>
    </div>
    <div class="middle">
      <div class="tab">
        <tab bar-position="top" v-model="index02">
          <tab-item :selected="demo02 === item" v-for="(item, index02) in list2" @click="demo02 = item" :key="index02">
            {{item}}
          </tab-item>
        </tab>
        <!--<swiper v-model="index02" :show-dots="false">-->
          <!--<swiper-item :key="0">-->
            <!--<div>-->
              <!--<grid>-->
                <!--<grid-item>-->
                  <!--<card>-->
                    <!--<img slot="header" src="http://placeholder.qiniudn.com/640x300" style="width:100%;display:block;">-->
                    <!--<div slot="content" class="card-padding">-->
                      <!--<p style="color:#999;font-size:12px;">Posted on January 21, 2015</p>-->
                      <!--<p style="font-size:14px;line-height:1.2;">Quisque eget vestibulum nulla. Quisque quis dui quis ex-->
                        <!--ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit..</p>-->
                    <!--</div>-->
                  <!--</card>-->
                <!--</grid-item>-->
                <!--<grid-item>-->
                  <!--<card>-->
                    <!--<img slot="header" src="http://placeholder.qiniudn.com/640x300" style="width:100%;display:block;">-->
                    <!--<div slot="content" class="card-padding">-->
                      <!--<p style="color:#999;font-size:12px;">Posted on January 21, 2015</p>-->
                      <!--<p style="font-size:14px;line-height:1.2;">Quisque eget vestibulum nulla. Quisque quis dui quis ex-->
                        <!--ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit..</p>-->
                    <!--</div>-->
                  <!--</card>-->
                <!--</grid-item>-->
              <!--</grid>-->

            <!--</div>-->
          <!--</swiper-item>-->
          <!--<swiper-item :key="1">-->
            <!--<div>2222</div>-->
          <!--</swiper-item>-->
        <!--</swiper>-->

        <div v-show="index02 == 0">
          <grid :cols="2">
            <grid-item>
              <card>
                <img slot="header" src="../../../static/img/bg1.jpg" style="width:100%;display:block;">
                <div slot="content" class="card-padding">
                  <p style="color:#999;font-size:12px;">Posted on January 21, 2015</p>
                  <p style="font-size:14px;line-height:1.2;">Quisque eget vestibulum nulla. </p>
                </div>
              </card>
            </grid-item>
            <grid-item>
              <card>
                <img slot="header" src="../../../static/img/bg1.jpg" style="width:100%;display:block;">
                <div slot="content" class="card-padding">
                  <p style="color:#999;font-size:12px;">Posted on January 21, 2015</p>
                  <p style="font-size:14px;line-height:1.2;">Quisque eget vestibulum nulla.</p>
                </div>
              </card>
            </grid-item>
            <grid-item>
              <card>
                <img slot="header" src="../../../static/img/bg1.jpg" style="width:100%;display:block;">
                <div slot="content" class="card-padding">
                  <p style="color:#999;font-size:12px;">Posted on January 21, 2015</p>
                  <p style="font-size:14px;line-height:1.2;">Quisque eget vestibulum nulla.</p>
                </div>
              </card>
            </grid-item>
            <grid-item>
              <card>
                <img slot="header" src="../../../static/img/bg1.jpg" style="width:100%;display:block;">
                <div slot="content" class="card-padding">
                  <p style="color:#999;font-size:12px;">Posted on January 21, 2015</p>
                  <p style="font-size:14px;line-height:1.2;">Quisque eget vestibulum nulla. </p>
                </div>
              </card>
            </grid-item>
          </grid>
        </div>
        <div v-show="index02 == 1">
          <grid :cols="2">
            <grid-item>
              <card>
                <img slot="header" src="../../../static/img/bg0.jpg" style="width:100%;display:block;">
                <div slot="content" class="card-padding">
                  <p style="color:#999;font-size:12px;">Posted on January 21, 2015</p>
                  <p style="font-size:14px;line-height:1.2;">Quisque eget vestibulum nulla. </p>
                </div>
              </card>
            </grid-item>
            <grid-item>
              <card>
                <img slot="header" src="../../../static/img/bg0.jpg" style="width:100%;display:block;">
                <div slot="content" class="card-padding">
                  <p style="color:#999;font-size:12px;">Posted on January 21, 2015</p>
                  <p style="font-size:14px;line-height:1.2;">Quisque eget vestibulum nulla.</p>
                </div>
              </card>
            </grid-item>
            <grid-item>
              <card>
                <img slot="header" src="../../../static/img/bg0.jpg" style="width:100%;display:block;">
                <div slot="content" class="card-padding">
                  <p style="color:#999;font-size:12px;">Posted on January 21, 2015</p>
                  <p style="font-size:14px;line-height:1.2;">Quisque eget vestibulum nulla.</p>
                </div>
              </card>
            </grid-item>
            <grid-item>
              <card>
                <img slot="header" src="../../../static/img/bg0.jpg" style="width:100%;display:block;">
                <div slot="content" class="card-padding">
                  <p style="color:#999;font-size:12px;">Posted on January 21, 2015</p>
                  <p style="font-size:14px;line-height:1.2;">Quisque eget vestibulum nulla. </p>
                </div>
              </card>
            </grid-item>
          </grid>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  import {
    Swiper,
    ButtonTab,
    ButtonTabItem,
    Swipeout,
    SwipeoutItem,
    SwipeoutButton,
    Tab,
    TabItem,
    SwiperItem,
    Card,
    Grid,
    GridItem
  } from 'vux'

  const baseList = [{
    url: 'javascript:',
    img: '../../static/img/bg0.jpg',
    title: '1'
  }, {
    url: 'javascript:',
    img: '../../static/img/bg1.jpg',
    title: '2'
  }, {
    url: 'javascript:',
    img: '../../static/img/bg2.jpg',
    title: '3'
  }, {
    url: 'javascript:',
    img: '../../static/img/bg3.jpg', // 404
    title: '4'
  }]

  const list = () => ['最新乐手信息', '最新商演信息']

  export default {
    name: "index",
    components: {
      Swiper,
      ButtonTab,
      ButtonTabItem,
      Swipeout,
      SwipeoutItem,
      SwipeoutButton,
      Tab,
      TabItem,
      SwiperItem,
      Card,
      Grid,
      GridItem
    },
    methods: {
      demo06_onIndexChange(index) {
        this.demo06_index = index
      },
      consoleIndex() {
        console.log('click demo01', this.demo01)
      },
      onButtonClick(type) {
        alert('on button click ' + type)
      },
      handleEvents(type) {
        console.log('event: ', type)
      }
    },
    data() {
      return {
        demo06_list: baseList,
        demo06_index: 0,
        swiperItemIndex: 1,
        demo01: 0,
        index02: 0,
        list2: list(),
        demo02: '最新乐手信息'

      }
    }
  }
</script>

<style scoped>
  .card-padding {
    padding: 15px;
  }
  .middle{
    margin-bottom: 50px;
  }

</style>
