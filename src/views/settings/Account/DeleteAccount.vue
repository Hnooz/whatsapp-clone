<template>
    <div>
         <div class="bg-gray-light p-3 text-gray-400">
            <div class="flex font-semibold ">
                <router-link to="/account">
                     <svg viewBox="0 0 20 20" fill="currentColor" class="arrow-left w-6 h-6"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                </router-link>
                
                <span class="mx-8">Delete my account</span> 
            </div>
        </div>

        <div class="mx-5">
            <div class="flex mt-5">
                <svg viewBox="0 0 20 20" fill="currentColor" class="exclamation text-red-500 w-6 h-6"><path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                <div class="mx-6">
                    <h1 class="text-red-500 pb-2">Deleting your account will:</h1>
                    <ul class="leading-loose list-disc ml-4 text-gray-600 text-sm">
                        <li>Delete your account from whatsApp</li>
                        <li>Erase your message history</li>
                        <li>Delete you from all of your WhatsApp groups</li>
                    </ul>
                </div>
            </div>

            <div class="flex my-8">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="device-mobile text-red-500 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                <div class="mx-6">
                    <h1 class="text-gray-400">Change number instead?</h1>
                    <button type="button" class="bg-teal-500 mt-4 mx-3 px-4 py-2 rounded text-sm focus:outline-none">CHANGE NUMBER</button>
                </div>
            </div>

            <div class="ml-12">
                <p class="text-gray-400 text-xs">To delete your account, confirm your country code and enter your phone number.</p>
               
                <h1 class="text-gray-600 text-xs mt-4">Country</h1>
               
                <div class="border-b-2 border-gray-600 flex items-center justify-between ml-1 mx-1 py-1">
                    <h1 class="text-gray-400">Sudan</h1>
                    <svg viewBox="0 0 20 20" fill="currentColor" class="chevron-down text-gray-500 w-4 h-4"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </div>

                <h1 class="text-gray-600 text-xs mt-4">Phone</h1>

                <div class="flex">
                    <div class="border-b-2 border-gray-600 flex mx-1 pr-4">
                        <span class="text-gray-600">+</span>
                        <h1 class="text-gray-400">249</h1>
                    </div>
                    <div class="border-b-2 border-gray-600 ml-4 mr-1 w-full">
                        <input class="bg-transparent text-gray-400 placeholder-gray-700 w-full focus:outline-none " type="text" placeholder="phone number">
                    </div>
                </div>

                <button class="bg-red-500 rounded mt-8 px-3 py-2 text-sm focus:outline-none" type="button">DELETE MY ACCOUNT</button>

            </div>
        </div>
    </div>
</template>