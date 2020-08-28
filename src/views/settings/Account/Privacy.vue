<template>
    <div>
        <div class="bg-gray-light p-3 text-gray-400 sticky top-0">
            <TitleNav title="Privacy" url="/account"></TitleNav>
        </div>
        <div class="p-5">
            <h1 class="font-medium pb-3 text-teal-500">Who can see my personal info</h1>
            <p class="text-gray-600 text-sm pb-8">if you don't share your last Seen, you won't be able to see other pepole Last Seen</p>
              
              <div class="pb-8">
                  <h1 class="text-gray-400">Last seen</h1>
                  <p class="text-gray-600 text-sm">Nobody</p>
              </div>

              <div class="pb-8">
                    <h1 class="text-gray-400">Profile photo</h1>
                    <p class="text-gray-600 text-sm">My contacts</p>
              </div>

              <div class="pb-8">
                    <h1 class="text-gray-400">About</h1>
                    <p class="text-gray-600 text-sm">Everyone</p>
              </div>

              <div class="pb-8">
                    <h1 class="text-gray-400">Status</h1>
                    <p class="text-gray-600 text-sm">My contacts</p>
              </div>

              <div class="flex justify-between pb-8">
                <div>
                    <h1 class="text-gray-400">Read receipts</h1>
                    <p class="text-gray-600 text-sm">if turned oof, you won't send or receive Read receipts, Read receipts are always sent for group chats.</p>
                </div>
                <!-- <span>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="photograph w-6 h-6 text-gray-600 my-3"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </span> -->
                <Toggle :isCheck="false"></Toggle>
              </div>

            <div class="pb-8">
                  <h1 class="text-gray-400">Groups</h1>
                  <p class="text-gray-600 text-sm">My contacts</p>
              </div>

              <div class="pb-8">
                    <h1 class="text-gray-400">Live location</h1>
                    <p class="text-gray-600 text-sm">None</p>
              </div>

              <div class="pb-8">
                    <h1 class="text-gray-400">Blocked contacts</h1>
                    <p class="text-gray-600 text-sm">None</p>
              </div>>

              <div>
                    <h1 class="text-gray-400">Fingerprint lock</h1>
                    <p class="text-gray-600 text-sm">Enabled after 1 minuts</p>
              </div>

        </div>
    </div>
</template>

<script>
import Toggle from '../../../components/Toggle'
import TitleNav from '../../../components/TitleNav'
export default {
    components:{
        Toggle,
        TitleNav
    }
}
</script>