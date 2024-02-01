<script setup lang="ts">

useHead({
  title: 'Home'
})

</script>

<template>
  <div>
    <div class="pt-4">
      <header class="px-8 xl:px-0 max-w-screen-xl mx-auto flex">
        <div class="flex-grow">
          <h3 class="text-4xl dark:text-white py-2 flex">
            <div class="flex-grow">
              Introducing <strong class="block sm:inline">Bill Panda</strong>
            </div>
            <Brand class="fill-gray-500 block sm:hidden" style="width:80px;"/>
          </h3>
          <p class="text-xl text-gray-700 dark:text-gray-400 py-1 pb-2">
            Effortlessly manage your recurring bills on iOS and (coming soon) MacOS!
          </p>
          <div class="flex pt-2 mb-3">
            <a href="javascript:;"
               rel="noopener noreferrer"
               class="mr-2">
              <img src="/img/appstore-download-image.png" alt="download bill panda" class="appstore-image"/>
            </a>
          </div>
        </div>
        <Brand class="fill-gray-500 hidden sm:block" style="width:80px;"/>
      </header>
      <div class="overflow-x-scroll snap-x max-w-screen-xl mx-auto">
        <div class="screenshot-container">
          <PhoneFrame class="phone-frame dark:hidden">
            <img src="/img/app_screenshots/upcoming_bills.png"
                 alt="Upcoming Bills"
                 class="rounded-md"
            />
          </PhoneFrame>

          <PhoneFrame class="phone-frame hidden dark:block">
            <img src="/img/app_screenshots/upcoming_bills_dark.png"
                 alt="Upcoming Bills"
                 class="rounded-md"
            />
          </PhoneFrame>

          <PhoneFrame class="phone-frame dark:hidden">
            <img src="/img/app_screenshots/new_bill.png"
                 alt="New Bill"
                 class="rounded-md"
            />
          </PhoneFrame>

          <PhoneFrame class="phone-frame hidden dark:block">
            <img src="/img/app_screenshots/new_bill_dark.png"
                 alt="New Bill"
                 class="rounded-md"
            />
          </PhoneFrame>

          <PhoneFrame class="phone-frame dark:hidden">
            <img src="/img/app_screenshots/mark_as_paid.png"
                 alt="Mark As Paid"
                 class="rounded-md"
            />
          </PhoneFrame>

          <PhoneFrame class="phone-frame hidden dark:block">
            <img src="/img/app_screenshots/mark_as_paid_dark.png"
                 alt="Mark As Paid"
                 class="rounded-md"
            />
          </PhoneFrame>

          <PhoneFrame class="phone-frame dark:hidden">
            <img src="/img/app_screenshots/edit_bill.png"
                 alt="Edit Bill"
                 class="rounded-md"
            />
          </PhoneFrame>

          <PhoneFrame class="phone-frame hidden dark:block">
            <img src="/img/app_screenshots/edit_bill_dark.png"
                 alt="Edit Bill"
                 class="rounded-md"
            />
          </PhoneFrame>
        </div>
      </div>
      <div class="py-4 flex flex-col gap-6 mt-4 max-w-screen-xl mx-auto px-8">
        <MarketingSection class="flex-1">
          <template #title>
            Manage Recurring Bills
          </template>
          <template #content>
            Bill Panda makes it easy to manage your recurring bills. Add a bill, set the amount and frequency, and
            Bill Panda will remind you when it's due.
          </template>
        </MarketingSection>
        <MarketingSection class="flex-1">
          <template #title>
            No Account Required
          </template>
          <template #content>
            All data entered on your device will be synced across your iOS devices.
          </template>
        </MarketingSection>
        <MarketingSection class="flex-1">
          <template #title>
            Free to use
          </template>
          <template #content>
            Bill Panda is free to use with no ads. If you find the app useful, please consider leaving a review on the App Store.
          </template>
        </MarketingSection>
      </div>
      <div class="py-4 flex flex-col gap-6 mt-4 max-w-screen-xl mx-auto px-8 border-t border-gray-200 dark:border-gray-500 pt-6">
        <MarketingSection class="flex-1">
          <template #title>
            <span class="text-teal-600 dark:text-teal-500 text-3xl mb-3 block">Note From The Developer</span>
          </template>
          <template #content>
            <p class="mb-3">
              Hello! I'm <a href="/" class="link dark:text-teal-300 text-teal-600">Marco</a> from Sunny Orlando Devs. I built Bill Panda to help keep track of my recurring bills and to learn about Apple's developer ecosystem. It's been both a passion project and a learning opportunity and now its finally at 1.0 🎉. Why not just use another bill tracker already in the app store? Well, two reasons:
              <div class="pt-2 flex gap-3 flex-col pl-4">
                <div class="mr-3">
                  First, I was tired of connecting my bank accounts to some third party service that may or may not sell my information. I just needed something simpler, and other solutions I found were built decades ago with user-interfaces from another era.
                </div>
                <div>
                  Second, coding for iOS is fun, like <span class="italic">really</span> fun, and this was a great way to explore more of the ins-and-outs of Apple's Developer ecosystem.
                </div>
              </div>
            </p>
            <p class="mb-3">
              <strong>Whats next?</strong> There's plenty of features I have in mind for the future. The hardest part, interestingly enough, was just getting the website, app store listing, and other business details out of the way 😅. Now that its done, I hope whoever uses the app can find it useful 😊. If not, that's okay too. Any questions, please reach out to <a href="mailto:support@billpanda.app">support@billpanda.app</a>, I'll get back to you as soon as possible.
            </p>
          </template>
        </MarketingSection>
      </div>
      <div class="pt-4 mb-4">
        <Footer/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.screenshot-container {
  @apply pt-4 flex gap-4 pl-8;
  min-width: 1475px;
  scroll-snap-type: x mandatory;
}

.phone-frame {
  width: 300px;
  @apply snap-center;
}

.appstore-image {
  max-width: 160px;
  @apply rounded-lg overflow-hidden;
}
</style>