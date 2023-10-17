<script setup lang="ts">
const startDate = new Date(2010, 0, 1);
</script>

<template>
  <div class="max-w-4xl px-6 mx-auto">
    <div class="flex flex-col py-10 gap-4">
      <div class="text-6xl">
        Hello. 👋
      </div>
      <div class="text-4xl font-thin">
        My name is <strong>Marco</strong> and here are all the things that describe who I am, and what I love to do.
      </div>
    </div>

    <div class="gap-8 flex flex-col pb-12">
      <detail-card>
        <template v-slot:title>
          <div>
            Family First
          </div>
          <div>
            👩🏻‍💼👨🏽‍💼😻😸😼🏡
          </div>
        </template>
        <template v-slot:description>
          Always thankful for the fortune of having a great supporting family :). From my fiancé Angela (<a
          href="https://nerdy-creations.com" target="_blank">amazing creator by the way</a>),
          to my cat children Sunny, Milo, and Pawpaya. Making sure they're happy comes above all else ❤️.
        </template>
      </detail-card>

      <detail-card>
        <template v-slot:title>
          <span>
            The Craft
          </span>
          <div>
            👨🏽‍💻
          </div>
        </template>
        <template v-slot:description>
          I started about {{ (new Date()).getFullYear() - startDate.getFullYear() }} years ago coding my way from
          simple HTML, CSS, and Javascript, to C#, PHP, and Native App Development.
          Today, my coding life is consumed with Laravel, Vue, React Native, and general curiosity about Web3.
        </template>
      </detail-card>

      <detail-card>
        <template v-slot:title>
          <span>
            Health & Travel
          </span>
          <div>
            🧗🏽 ‍🛬 🇨🇴 🇵🇪 🇮🇪 🇺🇸 🇨🇷 🇬🇧 🏴󠁧󠁢󠁳󠁣󠁴󠁿
          </div>
        </template>
        <template v-slot:description>
          My fiancé and I both love rock climbing and traveling. We would probably do it more often if we weren't
          always worried
          about our kitties back home 😬. I also love to work from new places - whether that's coffee shops,
          coworking spaces, outdoors,
          or anywhere in our house.
        </template>
      </detail-card>
    </div>
  </div>
</template>