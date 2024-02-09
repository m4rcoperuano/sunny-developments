<script setup lang="ts">
const startDate = new Date(2010, 0, 1);
</script>

<template>
  <div class="max-w-4xl px-6 mx-auto">
    <div class="flex flex-col py-10 gap-4">
      <div class="text-3xl font-bold tracking-tight text-zinc-800 sm:text-4xl dark:text-zinc-100">
        Building for the Web & Mobile
      </div>
      <div class="text-lg">
        Hello! I'm Marco and I love building software. I started about 14 years ago developing simple websites for
        friends and family.
        Overtime, I transitioned to building web and mobile applications for startups and enterprises. I've been
        fortunate to work with
        amazing people and companies, and I'm always looking for new opportunities to learn and grow.
      </div>
    </div>

    <div class="flex flex-col gap-4">
      <div class="text-2xl font-bold tracking-tight text-zinc-800 sm:text-3xl dark:text-zinc-100">
        Projects
      </div>
      <div>
        <div class="gap-8 flex flex-col pb-12">
          <div class="flex gap-4">
            <detail-card class="flex-1">
              <template v-slot:title>
                <div>
                  Leasecake
                </div>
              </template>
              <template v-slot:description>
                Leasecake is a lease management platform for commercial real estate. I was the first engineer on the team
                and
                helped build the initial product. I worked on the web application, mobile application, and backend
                services.
              </template>
            </detail-card>
            <detail-card  class="flex-1">
              <template v-slot:title>
                Bill Panda
              </template>
              <template v-slot:description>
                Bill Panda is a personal finance application that helps users track their expenses and income. I built
                the
                web application and backend services.
              </template>
            </detail-card>
          </div>
          <div class="flex gap-4">
            <detail-card>
              <template v-slot:title>
                Nerdy Creations
              </template>
              <template v-slot:description>
                Nerdy Creations is a web development agency that I started. I worked with clients to build web and mobile
                applications.
              </template>
            </detail-card>
            <detail-card>
              <template v-slot:title>
                Another!
              </template>
              <template v-slot:description>
                Nerdy Creations is a web development agency that I started. I worked with clients to build web and mobile
                applications.
              </template>
            </detail-card>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
