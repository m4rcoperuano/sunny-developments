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
      <div class="bg-white p-4 shadow-lg rounded-xl">
        <div class="text-2xl font-semibold flex items-center gap-2">
          <span>
            Family First
          </span>
          <div>
            👩🏻‍💼👨🏽‍💼😻😸😼🏡
          </div>
        </div>
        <div>
          Always thankful for the fortune of having a great supporting family :). From my fiancé Angela (<a href="https://nerdy-creations.com" target="_blank">amazing creator by the way</a>),
          to my cat children Sunny, Milo, and Papaya. Making sure they're happy comes above all else ❤️.
        </div>
      </div>

      <div class="bg-white p-4 shadow-lg rounded-xl">
        <div class="text-2xl font-semibold flex items-center gap-2">
          <span>
            The Craft
          </span>
          <div>
            👨🏽‍💻
          </div>
        </div>
        <div>
          <p>
            I started about {{ (new Date()).getFullYear() - startDate.getFullYear() }} years ago coding my way from simple HTML, CSS, and Javascript, to C#, PHP, and Native App Development.
            Today, my coding life is consumed with Laravel, Vue, React Native, and general curiosity about Web3.
          </p>
        </div>
      </div>

      <div class="bg-white p-4 shadow-lg rounded-xl">
        <div class="text-2xl font-semibold flex items-center gap-2">
          <span>
            Health & Travel
          </span>
          <div>
            🧗🏽‍♂️ 🛬 🇨🇴 🇵🇪 🇮🇪 🇺🇸 🇨🇷 🇬🇧 🏴󠁧󠁢󠁳󠁣󠁴󠁿
          </div>
        </div>
        <div>
          My fiancé and I both love rock climbing and traveling. We would probably do it more often if we weren't always worried
          about our kitties back home 😬. I also love to work from new places - whether that's coffee shops, coworking spaces, outdoors,
          or anywhere in our house.
        </div>
      </div>

      <div class="flex flex-col gap-3">
        <div class="text-center text-sm">
          If you want to know more about my career experience, see my
          <a href="https://www.linkedin.com/in/marcoledesma/" class="no-underline whitespace-nowrap">
            linked
            <font-awesome-icon :icon="['fab', 'linkedin']"/>
          </a>
        </div>

        <div class="text-center text-sm">
          You can also find me on
          <a href="https://github.com/m4rcoperuano" class="no-underline whitespace-nowrap">
            <font-awesome-icon :icon="['fab', 'github']"/>
            github
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default {
  layout: 'default',
  computed: {
    startDate() {
      return new Date(2010, 0, 1)
    }
  }
}
</script>
