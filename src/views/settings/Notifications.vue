<template>
    <div>

         <div class="bg-gray-light p-3 text-gray-400">
            <div class="flex font-semibold ">
                <router-link to="/settings">
                     <svg viewBox="0 0 20 20" fill="currentColor" class="arrow-left w-6 h-6"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                </router-link>
                
                <span class="mx-5">Notifications</span> 
            </div>
        </div>

        <div class="p-5 pt-6">
            <div class="flex justify-between">
                <div>
                    <h1 class="text-gray-400">Conversation tones</h1>
                    <p class="text-gray-600 text-sm">play sounds for incoming and outgoinig messages.</p>
                </div>
                <span>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="photograph w-6 h-6 text-gray-600 my-3"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </span>
            </div>
        </div>

        <div class="border-t border-gray-light"></div>

        <div class="p-5">
            <h1 class="font-medium pb-3 text-teal-500">Messages</h1>

              <div class="pb-8">
                  <h1 class="text-gray-400">Notification tone</h1>
                  <p class="text-gray-600 text-sm">Default (None)</p>
              </div>

              <div class="pb-8">
                    <h1 class="text-gray-400">Vibrate</h1>
                    <p class="text-gray-600 text-sm">Default</p>
              </div>

              <div class="pb-8 text-gray-700">
                    <h1 class="">Popup notification</h1>
                    <p class=" text-sm">Not available</p>
              </div>

              <div class="pb-8">
                    <h1 class="text-gray-400">Light</h1>
                    <p class="text-gray-600 text-sm">White</p>
              </div>

              <div class="flex justify-between pb-8">
                <div>
                    <h1 class="text-gray-400">Use high priority notifications</h1>
                    <p class="text-gray-600 text-sm">Show previews of notifications at the top of the screen</p>
                </div>
                <span>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="photograph w-6 h-6 text-gray-600 my-3"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </span>
              </div>

            <h1 class="font-medium pb-3 text-teal-500">Groups</h1>

            <div class="pb-8">
                  <h1 class="text-gray-400">Notification tone</h1>
                  <p class="text-gray-600 text-sm">Default (None)</p>
              </div>

              <div class="pb-8">
                    <h1 class="text-gray-400">Vibrate</h1>
                    <p class="text-gray-600 text-sm">Default</p>
              </div>

              <div class="pb-8">
                    <h1 class="text-gray-400">Light</h1>
                    <p class="text-gray-600 text-sm">White</p>
              </div>

              <div class="flex justify-between pb-8">
                <div>
                    <h1 class="text-gray-400">Use high priority notifications</h1>
                    <p class="text-gray-600 text-sm">Show previews of notifications at the top of the screen</p>
                </div>
                <span>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="photograph w-6 h-6 text-gray-600 my-3"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </span>
            </div>

            <h1 class="font-medium pb-3 text-teal-500">Calls</h1>

            <div class="pb-8">
                  <h1 class="text-gray-400">Ringtone</h1>
                  <p class="text-gray-600 text-sm">Default (Nokia Tune)</p>
              </div>

              <div class="pb-8">
                    <h1 class="text-gray-400">Vibrate</h1>
                    <p class="text-gray-600 text-sm">Default</p>
              </div>

        </div>
    </div>
</template>
