<template>
    <div>
        <div class="bg-gray-light p-3 text-gray-400">
            <div class="flex font-semibold ">
                <router-link to="/account">
                     <svg viewBox="0 0 20 20" fill="currentColor" class="arrow-left w-6 h-6"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                </router-link>
                
                <span class="mx-5">Two-step verification</span> 
            </div>
        </div>

        <div class="bg-teal-100 flex h-24 items-center justify-center mx-auto rounded-full w-24 my-6">
            <svg class="h-10 w-10 text-teal-500 " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12Z" fill="currentColor" /><path d="M9 13C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11C8.44771 11 8 11.4477 8 12C8 12.5523 8.44771 13 9 13Z" fill="currentColor" /><path d="M14 12C14 12.5523 13.5523 13 13 13C12.4477 13 12 12.5523 12 12C12 11.4477 12.4477 11 13 11C13.5523 11 14 11.4477 14 12Z" fill="currentColor" /><path d="M20 11H16V13H20V11Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C0.895431 6 0 6.89543 0 8V16C0 17.1046 0.89543 18 2 18H22C23.1046 18 24 17.1046 24 16V8C24 6.89543 23.1046 6 22 6H2ZM22 8H2L2 16H22V8Z" fill="currentColor" /></svg>
        </div>

        <!-- <div> -->
            <p class="mx-6 text-center text-gray-400 text-sm">
                For added security, enable teo-step verification, which will require a PIN when
                registering your phone number with WhatsApp again.
            </p>

        
        <!-- </div> -->

        <div class="flex justify-center">
            <button type="button" class="absolute bg-teal-500 bottom-0 font-medium my-4 px-5 py-2 rounded text-gray-900 text-sm">ENABLE</button>
        </div>
    </div>
</template>