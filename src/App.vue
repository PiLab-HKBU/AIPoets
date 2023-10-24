<script setup>
import {ref} from "vue";
import NavigationBarView from "@/components/base/NavigationBarView.vue";
import FooterView from "@/components/base/FooterView.vue";

import HistorylineView from "@/components/home/HistorylineView.vue";

const basic = ref( {
  name: "與<span style=\"color: #01969C\">A</span><span style=\"color: #EE8020\">I</span>古人聊古詩",
  description: "通過與古詩人AI對話來幫助學生在課堂之外沈浸式學習古詩，提高他們學習中國古詩的興趣，並增強普通話交流能力。"
})

const highlightItems = ref(
    [
      [
        {
          title: "AI古詩人",
          content: "AI再現古詩人聲音面貌；<br>仿真普通話視頻互動；<br>提升古詩朗讀及普通話聽說能力",
          img: "/AIPoets/home/img/item_word/item_word_1.png",
        },
        {
          title: "個性化詩歌推薦",
          content: "智能分析學生能力和興趣；<br>個性定制學習路徑；<br>激發參與度",
          img: "/AIPoets/home/img/item_word/item_word_2.png",
        },
      ],
      [
        {
          title: "AI智能問答",
          content: "在對話中解疑答惑；<br>AI插圖輔助詩歌理解；<br>讓學習過程簡單又有趣",
          img: "/AIPoets/home/img/item_word/item_word_3.png",
        },
        {
          title: "AI共創詩歌",
          content: "與古詩人AI共創詩歌；<br>幫助學生深入瞭解詩歌結構；<br>激發詩歌寫作創造力",
          img: "/AIPoets/home/img/item_word/item_word_4.png",
        }
      ]
    ]
);

const members = ref(
    [
      {
        avatar: "/AIPoets/home/img/members/li_chen.jpg",
        name: "陳黎教授",
        title: "教授及副系主任（研究）<br>計算機科學系<br>香港浸會大學",
        domains: "研究方向：人工智能、數據驅動的交互、網絡個性化、智能用戶界面",
        website: "https://www.comp.hkbu.edu.hk/~lichen",
      },
      {
        avatar: "/AIPoets/home/img/members/yucheng_jin.jpg",
        name: "金昱成博士",
        title: "研究助理教授<br>計算機科學系<br>香港浸會大學",
        domains: "研究方向：用戶與人工智能係統交互，人工智能實現人類創造力研究",
        website: "https://www.comp.hkbu.edu.hk/~yuchengjin/",
      },
      {
        avatar: "/AIPoets/home/img/members/wenfang_liang.jpg",
        name: "梁文芳博士",
        title: "普通話組主任<br>及高級講師<br>語文中心<br>香港浸會大學",
        domains: "研究方向：語言評估、漢語作為第二語言教學",
        website: "https://artsbu.hkbu.edu.hk/tc/about-us/our-community-of-teachers-and-researchers/dr-leung-man-fong",
      },
      {
        avatar: "/AIPoets/home/img/members/jing_jin.jpg",
        name: "金晶博士",
        title: "語言教育中心主任<br>中國語言學系副教授<br>香港教育大學",
        domains: "研究方向：漢語語言學、 語法語義接口、語法語用接口、語言習得方法",
        website: "https://repository.eduhk.hk/en/persons/jing金晶-jin",
      },
      {
        avatar: "/AIPoets/home/img/members/yizhe_zhang.jpg",
        name: "張藝哲先生",
        title: "高級研究助理<br>計算機科學系<br>香港浸會大學",
        domains: "研究方向：推薦系統、人機交互、軟件工程",
        website: "https://elecoxy.com/",
      },
      {
        avatar: "/AIPoets/home/img/members/sinan_yu.jpg",
        name: "余思南女士",
        title: "在讀博士生<br>計算機科學系<br>香港浸會大學",
        domains: "研究方向：人機交互、個性化界面設計",
        website: "https://github.com/Yusi-sinanyu",
      }
    ]
)


const organizations = ref(
    [
      {
        avatar: "/AIPoets/home/img/organizations/lenovo.jpg",
        name: "聯想研究院",
        website: "https://research.lenovo.com",
      }
    ]
)

const screenshots = ref(
    [
      {
        img: "/AIPoets/home/img/screenshots/1.JPEG",
        description: "朗讀評分卡",
      },
      {
        img: "/AIPoets/home/img/screenshots/2.JPEG",
        description: "詩歌智能問答",
      },
      {
        img: "/AIPoets/home/img/screenshots/3.JPEG",
        description: "詩館",
      },
      {
        img: "/AIPoets/home/img/screenshots/4.JPEG",
        description: "個性化學習路徑",
      },
      {
        img: "/AIPoets/home/img/screenshots/5.JPEG",
        description: "個人主頁",
      }
    ]
)

const videos = ref(
    [
      {
        video: "/AIPoets/home/files/1.mp4",
        description: "詩歌講解",
      },
      {
        video: "/AIPoets/home/files/2.mp4",
        description: "朗讀評分",
      },
      {
        video: "/AIPoets/home/files/3.mp4",
        description: "智能問答",
      },
      {
        video: "/AIPoets/home/files/4.mp4",
        description: "共創詩歌",
      }
    ]
)


</script>

<template>
  <NavigationBarView />

  <div style="right: 0; position: absolute; height: 50vh; min-height: 290px; width: 50%; overflow: clip;">
    <div style="margin-left: 10%; margin-top: -290px; width: 1300px; height: 650px; position: relative; transform: rotate(-25deg)">
      <img class="top-screenshot" src="/home/img/screenshots/library.PNG" style="height: 80%; top: -50%; left: 5%; position: absolute;">
      <img class="top-screenshot" src="/home/img/screenshots/home.PNG" style="height: 80%; top: 35%; position: absolute;">
      <img class="top-screenshot" src="/home/img/screenshots/learningPath.PNG" style="height: 80%; top: 35%; left: 21%; position: absolute;">
    </div>
  </div>

  <section class="hero is-halfheight p-0">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <div class="columns">
          <div class="column is-6">
            <div>
              <img src="/home/img/ai_digital_poet_logo.png" style="height: 6rem; vertical-align: middle;"
                   alt="與AI古人聊古詩">

            <p class="title" style="font-size: 230%;" v-html="basic.name"></p>
            </div>
            <p class="subtitle pt-5" v-html="basic.description">

            </p>
            <p class="subtitle pt-1">
              <a href="/home/files/poster.pdf" target="_blank" style="color: #BF5A25; text-decoration: underline">宣傳海報下載</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="hero is-halfheight p-0" style="background-color: #FAEED7">
    <div class="hero-body" style="overflow: hidden; position: relative">
      <img class="highlight-item-bg" src="/home/img/highlight_item_bg.png" style="position: absolute; right: 0; bottom: -10vh; height: 50vh;" alt="">
      <div class="container is-max-desktop">
        <div class="columns is-multiline is-mobile">
          <div class="column is-full" v-for="items in highlightItems">
            <div class="columns">
              <div class="column is-6" v-for="item in items">
                <div class="columns is-gapless is-vcentered is-multiline is-mobile">
                  <div class="column is-narrow mr-3">
                    <div class="highlightImageCanvas">
                      <img class="highlightImage" src="/home/img/item_word/item_word_bg.png"
                           alt="">

                      <img class="highlightImage" :src="item.img"
                           alt="">
                    </div>
                  </div>
                  <div class="column is-vcentered">
                    <p class="highlightContent" style="font-weight: bold" v-html="item.title"></p>
                    <p class="highlightContent" v-html="item.content"></p>
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
        <p class="pb-5" style="font-size: 2rem; font-weight: bold; color: #BF5A25">主要功能</p>
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

        <p class="pb-5" style="font-size: 2rem; font-weight: bold; color: #BF5A25">原型演示</p>
<!--        <iframe src="https://drive.google.com/file/d/18c_eW2sDn0XPVZGDn-2ve4N28-PH0ELx/preview" allow="autoplay" style="height: 50vh"></iframe>-->

        <div class="columns is-mobile is-multiline">
          <div class="column is-3 is-hidden-mobile" v-for="item in videos">
            <video width="100%" :src="item.video" style="width: 100%" controls></video>
            <p v-html="item.description" style="text-align: center; font-size: 1.2rem;"></p>
          </div>

          <div class="column is-6 is-hidden-tablet" v-for="item in videos">
            <video width="100%" :src="item.video" style="width: 100%" controls></video>
            <p v-html="item.description" style="text-align: center; font-size: 1.2rem;"></p>
          </div>

        </div>
      </div>
    </div>
  </section>

  <section class="hero is-halfheight p-0" style="background-color: #FAEED7">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <p class="pb-5" style="font-size: 2rem; font-weight: bold; color: #BF5A25">項目主要成員</p>
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
                <p class="py-2" v-html="item.title"></p>
                <p v-html="item.domains"></p>
              </div>
            </div>
          </div>
        </div>
        <p class="pb-5" style="font-size: 2rem; font-weight: bold; color: #BF5A25">行業合作者</p>
        <div class="columns is-multiline">
          <div class="column is-3" v-for="item in organizations">
            <div class="columns is-multiline is-mobile">
              <div class="column is-full" style="position: relative; height: 100px;">
                <div
                    style="width: 200px; height: 100px; box-shadow: 0 0 5px rgb(128,128,128); border-radius: 15px; overflow: clip; position: absolute; left: 50%; margin-left: -100px">
                  <img :src="item.avatar" alt="" style="width: 100%; height: 100%; object-fit: cover">
                </div>
              </div>
              <div class="column pt-5">
                <a :href="item.website" target="_blank" style="color: #BF5A25"><p v-html="item.name" style="text-align: center; font-size: 1.2rem; font-family: SimSun,sans-serif"></p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <HistorylineView />

  <section class="hero p-0" style="background-color: #FAEED7">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <p style="font-size: 1.2rem">
          聯繫方式：陳黎教授，<span
            style="font-weight: bold"><span>lichen</span><span>@</span><span>comp.hkbu.edu.hk</span></span>
        </p>
      </div>
    </div>
  </section>

  <FooterView />
</template>

<style scoped>
* {
  font-family: 'Free HK', sans-serif; /* 使用 @font-face 自定义的字体 */
}

.top-screenshot {
  border-radius: 40px;
  box-shadow: 0px 5px 30px rgba(191, 90, 37, 0.65);
}

.highlightContent {
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

  .highlightContent {
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
