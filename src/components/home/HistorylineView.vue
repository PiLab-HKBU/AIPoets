<script setup>
import { historyLine } from "@/data/homeData";

</script>

<template>
  <section class="hero is-halfheight p-0">
    <div class="hero-body">
      <div class="container is-max-desktop">
        <p class="pb-5 section-title" style="font-size: 2rem; font-weight: bold; color: #BF5A25">項目時間線</p>
        <div class="columns is-gapless is-mobile is-multiline">
          <div style="background-color: #BF5A25; width: 16px; height: 16px; border-radius: 8px"> </div>
          <div class="column is-full" style="position: relative;" v-for="item in historyLine">
            <div style="position:absolute; height: 100%; width: 2px; left: 7px; top: 0; background-color: #BF5A25"></div>
            <div style="position:absolute; height: 2px; width: 10px; left: 7px; top: 35px; margin-top: -0.5px; background-color: #BF5A25"></div>
            <p style="padding-left: 30px; font-size: 1.5rem; padding-top: 20px">{{item.title}}</p>
            <p style="padding-left: 30px; font-size: 1rem;">{{item.date}}</p>
            <p style="padding-left: 30px; font-size: 1.2rem">{{item.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>