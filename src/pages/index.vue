<template>
  <MainContant :title="t('pages-title.home')" layout="home">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
      <DemoCard
        v-for="demo in demos"
        :key="demo.path"
        :demo="demo"
      />
    </div>
  </MainContant>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'
import { useI18n } from 'vue-i18n'
import HumanPoseImg from '/~/assets/images/human-pose-estimation.webp'
import HandWritingImg from '/~/assets/images/handwriting-ocr.webp'
import DrawColorsImg from '/~/assets/images/draw-colors.webp'
import type { Demo } from '/~/types'
import { generateHeadMeta } from '/~/logics/meta'

const { t } = useI18n()

const siteData = reactive({
  title: 'OVaaS - OpenVINO as a service',
  description: 'No setup! No command! No code! Easy to use OpenVINO™ demo website.',
})

useHead(generateHeadMeta(siteData))

const demos = computed<Demo[]>(() => ([
  {
    title: t('demos.human-pose.title'),
    image: HumanPoseImg,
    content: t('demos.human-pose.content'),
    path: '/demo/human-pose-estimation',
  },
  {
    title: t('demos.handwritten-ocr.title'),
    image: HandWritingImg,
    content: t('demos.handwritten-ocr.content'),
    path: '/demo/handwritten-ocr',
  },
  {
    title: t('demos.draw-colors.title'),
    image: DrawColorsImg,
    content: t('demos.draw-colors.content'),
    path: '/demo/draw-colors',
  },
]))
</script>

<style>
</style>
