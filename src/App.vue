<script setup>
import {basic, highlightItems, members, organizations, screenshots, videos} from "@/data/homeData";

import NavigationBarView from "@/components/base/NavigationBarView.vue";
import FooterView from "@/components/base/FooterView.vue";
import HistorylineView from "@/components/home/HistorylineView.vue";

</script>

<template>
  <NavigationBarView />

  <div style="right: 0; position: absolute; height: 100vh; min-height: 290px; width: 50%; overflow: clip; z-index: -1">
    <div style="margin-left: 10%; margin-top: -290px; width: 1300px; height: 650px; position: relative; transform: rotate(-25deg)">
      <img class="top-screenshot" src="https://wofoo2.blob.core.windows.net/aipoets/public/home/img/screenshots/library.jpg" style="height: 80%; top: -50%; left: 5%; position: absolute;" alt="">
      <img class="top-screenshot" src="https://wofoo2.blob.core.windows.net/aipoets/public/home/img/screenshots/home.jpg" style="height: 80%; top: 35%; position: absolute;" alt="">
      <img class="top-screenshot" src="https://wofoo2.blob.core.windows.net/aipoets/public/home/img/screenshots/learning_path.jpg" style="height: 80%; top: 35%; left: 21%; position: absolute;" alt="">
    </div>
  </div>

  <section class="hero is-halfheight p-0">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <div class="columns">
          <div class="column is-6">
            <div>
              <img src="https://wofoo2.blob.core.windows.net/aipoets/public/home/img/ai_digital_poet_logo.png" style="height: 6rem; vertical-align: middle;"
                   alt="與AI古人聊古詩">

            <p class="title" style="font-size: 230%;" v-html="basic.name"></p>
            </div>
            <p class="subtitle pt-5" v-html="basic.description">

            </p>
            <p class="subtitle pt-1"  style="font-size: 1.1rem; line-height: 1.8rem">
              ＊誠邀香港中小學成為合作夥伴並參與試用<br>聯繫方式：陳黎教授，<span><span>lichen</span><span>@</span><span>comp.hkbu.edu.hk</span></span>
              <a href="https://wofoo2.blob.core.windows.net/aipoets/public/home/files/poster.pdf" target="_blank" style="color: #BF5A25; text-decoration: underline"><br><br>宣傳海報下載</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="hero is-halfheight p-0" style="background-color: #FAEED7">
    <div class="hero-body" style="overflow: hidden; position: relative">
      <img class="highlight-item-bg" src="https://wofoo2.blob.core.windows.net/aipoets/public/home/img/highlight_item_bg.png" style="position: absolute; right: 0; bottom: -10vh; height: 50vh;" alt="">
      <div class="container is-max-desktop">
        <div class="columns is-multiline is-mobile">
          <div class="column is-full" v-for="items in highlightItems">
            <div class="columns">
              <div class="column is-6" v-for="item in items">
                <div class="columns is-gapless is-vcentered is-multiline is-mobile">
                  <div class="column is-narrow mr-3">
                    <div class="highlightImageCanvas">
                      <img class="highlightImage" src="https://wofoo2.blob.core.windows.net/aipoets/public/home/img/item_word/item_word_bg.png"
                           alt="">

                      <img class="highlightImage" :src="item.img"
                           alt="">
                    </div>
                  </div>
                  <div class="column is-vcentered">
                    <p class="highlight-content-title" v-html="item.title"></p>
                    <p class="highlight-content" v-html="item.content"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="hero is-halfheight p-0">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <p class="pb-5 section-title" style="font-size: 2rem; font-weight: bold; color: #BF5A25">主要功能</p>
        <div class="columns is-hidden-mobile">
          <div class="column" v-for="item in screenshots">
            <img :src="item.img" alt="">
            <p v-html="item.description" style="text-align: center; font-size: 1.2rem;"></p>
          </div>
        </div>

        <div class="columns is-hidden-tablet is-mobile is-multiline">
          <div class="column is-6" v-for="item in screenshots">
            <img :src="item.img" alt="">
            <p v-html="item.description" style="text-align: center; font-size: 1.2rem;"></p>
          </div>
        </div>

        <p class="pb-5 section-title" style="font-size: 2rem; font-weight: bold; color: #BF5A25">概念演示</p>
<!--        <iframe src="https://drive.google.com/file/d/18c_eW2sDn0XPVZGDn-2ve4N28-PH0ELx/preview" allow="autoplay" style="height: 50vh"></iframe>-->

        <div class="columns is-mobile is-multiline">
          <div class="column is-3 is-hidden-mobile" v-for="item in videos">
<!--            <video width="100%" :src="item.video" style="width: 100%" preload="none" :poster="item.poster" controls></video>-->
            <iframe  width="100%" height="400" :src="item.youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p v-html="item.description" style="text-align: center; font-size: 1.2rem;"></p>
          </div>

          <div class="column is-6 is-hidden-tablet" v-for="item in videos">
<!--            <video width="100%" :src="item.video" style="width: 100%" preload="none" :poster="item.poster" controls></video>-->
            <iframe  width="100%" height="400" :src="item.youtube" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <p v-html="item.description" style="text-align: center; font-size: 1.2rem;"></p>
          </div>

        </div>
      </div>
    </div>
  </section>

  <section class="hero is-halfheight p-0" style="background-color: #FAEED7">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <p class="pb-5 section-title" style="font-size: 2rem; font-weight: bold; color: #BF5A25">主要成員</p>
        <div class="columns is-multiline">
          <div class="column is-3" v-for="item in members">
            <div class="columns is-multiline is-mobile">
              <div class="column is-full" style="position: relative; height: 100px;">
                <div
                    style="width: 100px; height: 100px; box-shadow: 0 0 5px rgb(128,128,128); border-radius: 50px; overflow: clip; position: absolute; left: 50%; margin-left: -50px">
                  <img :src="item.avatar" alt="" style="width: 100%; height: 100%; object-fit: cover">
                </div>
              </div>
              <div class="column pt-5">
                <a :href="item.website" target="_blank" style="color: #BF5A25"><p v-html="item.name"
                              style="text-align: center; font-size: 1.2rem; font-weight: bold; font-family: SimSun,sans-serif"></p></a>
                <p class="py-2" v-html="item.title" style="font-size: 14px"></p>
                <p v-html="item.domains" style="font-size: 14px"></p>
              </div>
            </div>
          </div>
        </div>
        <template v-if="organizations.length > 0">
          <p class="pb-5 section-title" style="font-size: 2rem; font-weight: bold; color: #BF5A25">合作機構</p>
          <div class="columns is-multiline pb-6">
            <div class="column is-6" v-for="item in organizations">
              <div class="columns is-multiline is-mobile">
                <div class="column is-full">
                  <div  style="width: 100%; height: 150px;box-shadow: 0 0 5px rgb(128,128,128); border-radius: 15px; overflow: clip; background-color: white">
                    <a :href="item.website" target="_blank">
                      <img :src="item.avatar" alt="" style="width: 100%; height: 100%; object-fit: contain">
                    </a>
                  </div>
                </div>
<!--                <div class="column pt-5">-->
<!--                  <a :href="item.website" target="_blank" style="color: #BF5A25"><p v-html="item.name" style="text-align: center; font-size: 1.2rem; font-family: SimSun,sans-serif"></p></a>-->
<!--                </div>-->
              </div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>

  <HistorylineView />

  <FooterView />
</template>

<style scoped>
* {
  font-family: SimSun,sans-serif;
}

.top-screenshot {
  border-radius: 40px;
  box-shadow: 0 5px 30px rgba(191, 90, 37, 0.65);
}

.highlight-content-title {
  font-size: 1.3rem;
  color: #BF5A25;
}

.highlight-content {
  font-size: 1.2rem;
}

.highlightImageCanvas {
  height: 100%;
  min-height: 80px;
  width: 80px;
  position: relative
}

.highlightImage {
  height: 80px;
  width: 80px;
  left: 50%;
  top: 50%;
  margin-top: -40px;
  margin-left: -40px;
  position: absolute
}

@media (max-width: 900px) {
  .top-screenshot {
    opacity: 0.3;
  }

  .highlight-content-title {
    font-size: 1.1rem;
    color: #BF5A25;
  }

  .highlight-content {
    font-size: 1rem;
  }

  .highlightImageCanvas {
    height: 100%;
    min-height: 70px;
    width: 60px;
    position: relative
  }

  .highlightImage {
    height: 60px;
    width: 60px;
    left: 50%;
    top: 50%;
    margin-top: -30px;
    margin-left: -30px;
    position: absolute
  }
}

@media (max-width: 1600px) {
  .highlight-item-bg {
    opacity: 0.3;
  }
}

</style>
