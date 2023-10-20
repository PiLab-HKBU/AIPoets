<script setup>
import {ref} from "vue";
import NavigationBarView from "@/components/base/NavigationBarView.vue";
import FooterView from "@/components/base/FooterView.vue";

const highlightItems = ref(
    [
      [
        {
          content: "AI 再現古詩人聲音面貌；<br>仿真普通話視頻互動；<br>提升古詩朗讀及國語聽說能力",
          img: "/home/img/item_word/item_word_1.png",
        },
        {
          content: "智能分析學生能力和興趣；<br>個性定制學習路徑；<br>激發參與度",
          img: "/home/img/item_word/item_word_2.png",
        },
      ],
      [
        {
          content: "AI插圖輔助詩歌理解；<br>讓學習過程簡單又有趣",
          img: "/home/img/item_word/item_word_3.png",
        },
        {
          content: "與古詩人AI共創詩歌；<br>幫助學生深入瞭解詩歌結構；<br>激發詩歌寫作創造力",
          img: "/home/img/item_word/item_word_4.png",
        }
      ]
    ]
);

const members = ref(
    [
      {
        avatar: "/home/img/members/li_chen.jpg",
        name: "陳黎教授",
        title: "教授及副系主任（研究）<br>計算機科學系<br>香港浸會大學",
        domains: "研究方向：人工智能、數據驅動的交互、網絡個性化、智能用戶界面"
      },
      {
        avatar: "/home/img/members/yucheng_jin.jpg",
        name: "金昱成博士",
        title: "研究助理教授<br>計算機科學系<br>香港浸會大學",
        domains: "研究方向：用戶與人工智能係統交互，人工智能實現人類創造力研究"
      },
      {
        avatar: "/home/img/members/wenfang_liang.jpg",
        name: "梁文芳博士",
        title: "普通話組主任<br>及高級講師<br>語文中心<br>香港浸會大學",
        domains: "研究方向：語言評估、漢語作為第二語言教學"
      },
      {
        avatar: "/home/img/members/jing_jin.jpg",
        name: "金晶博士",
        title: "語言教育中心主任<br>中國語言學系副教授<br>香港教育大學",
        domains: "研究方向：漢語語言學、 語法語義接口、語法語用接口、語言習得方法"
      },
      {
        avatar: "/home/img/members/yizhe_zhang.jpg",
        name: "張藝哲先生",
        title: "高級研究助理<br>計算機科學系<br>香港浸會大學",
        domains: "研究方向：推薦系統、人機交互、軟件工程"
      },
      {
        avatar: "/home/img/members/sinan_yu.jpg",
        name: "余思南女士",
        title: "在讀博士生<br>計算機科學系<br>香港浸會大學",
        domains: "研究方向：人機交互、個性化界面設計"
      }
    ]
)

const screenshots = ref(
    [
      "/home/img/screenshots/1.png",
      "/home/img/screenshots/2.png",
      "/home/img/screenshots/3.png",
      "/home/img/screenshots/4.png"
    ]
)

const organizations = ref(
    [
      {
        avatar: "/home/img/organizations/lenovo.jpg",
        name: "聯想研究院",
      }
    ]
)

</script>

<template>
  <NavigationBarView />

  <img class="is-hidden-mobile" src="/home/img/top_bg.jpg" alt="背景"
       style="right: 0; position: absolute; height: 50vh; min-height: 290px">

  <img class="is-hidden-tablet" src="/home/img/top_bg.jpg" alt="背景"
       style="right: 0; position: absolute; height: 50vh; min-height: 290px; opacity: 0.3">

  <section class="hero is-halfheight p-0">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <div class="columns">
          <div class="column is-6">
            <div>
            <span class="title" style="font-size: 3rem;">
              與<span style="color: #01969C">A</span><span style="color: #EE8020">I</span>古人聊古詩
            </span>
              <img src="/home/img/ai_digital_poet_logo.png" style="height: 6rem; vertical-align: middle;"
                   alt="與AI古人聊古詩">
            </div>
            <p class="subtitle pt-5">
              通過開發一款與古詩人AI對話的應用程序來幫助學生在課堂之外學習古詩，提高他們學習中國古詩的興趣，並增強普通話交流能力。
            </p>
            <p>
              聯繫方式：陳黎教授，<span
                style="font-weight: bold"><span>lichen</span><span>@</span><span>comp.hkbu.edu.hk</span></span>
            </p>
            <p class="mt-2" style="font-size: 0.8rem">
              *此項目擬申請香港創新科技署之創科生活基金
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="hero is-halfheight p-0" style="background-color: #FAEED7">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <div class="columns is-multiline is-mobile">
          <div class="column is-full" v-for="items in highlightItems">
            <div class="columns">
              <div class="column is-6" v-for="item in items">
                <div class="columns is-gapless is-vcentered is-multiline is-mobile">
                  <div class="column is-narrow mr-3">
                    <div style="height: 100%; min-height: 70px;  width: 60px; position: relative">
                      <img src="/home/img/item_word/item_word_bg.png"
                           style="height: 60px; width: 60px; left: 50%; top: 50%; margin-top: -30px; margin-left: -30px; position: absolute"
                           alt="">

                      <img :src="item.img"
                           style="height: 60px; width: 60px; left: 50%; top: 50%; margin-top: -30px; margin-left: -30px; position: absolute"
                           alt="">
                    </div>
                  </div>
                  <div class="column is-vcentered">
                    <p v-html="item.content"></p>
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
                <p v-html="item.name"
                   style="text-align: center; font-size: 1.2rem; font-weight: bold; font-family: SimSun,sans-serif"></p>
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
                <p v-html="item.name" style="text-align: center; font-size: 1.2rem; font-weight: bold"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="hero is-halfheight p-0" style="background-color: #FAEED7">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <p class="pb-5" style="font-size: 2rem; font-weight: bold; color: #BF5A25">系統介面</p>
        <div class="columns is-hidden-mobile">
          <div class="column" v-for="item in screenshots">
            <img :src="item" alt="">
          </div>
        </div>

        <div class="columns is-hidden-tablet is-mobile is-multiline">
          <div class="column is-6" v-for="item in screenshots">
            <img :src="item" alt="">
          </div>
        </div>

        <p class="pb-5" style="font-size: 2rem; font-weight: bold; color: #BF5A25">原型演示</p>
        <iframe src="https://drive.google.com/file/d/18c_eW2sDn0XPVZGDn-2ve4N28-PH0ELx/preview" width="270" height="584" allow="autoplay" style="height: 50vh"></iframe>
      </div>
    </div>
  </section>

  <FooterView />
</template>

<style scoped>
* {
  font-family: 'Free HK', sans-serif; /* 使用 @font-face 自定义的字体 */
}

</style>
