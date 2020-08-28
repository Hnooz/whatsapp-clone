<template>
    <div>
        <div class="bg-gray-light p-3 text-gray-400 sticky top-0">
            <TitleNav title="Security" url="/account"></TitleNav>
        </div>

        <div class="bg-teal-100 flex h-24 items-center justify-center mx-auto rounded-full w-24 my-6">
            <svg viewBox="0 0 20 20" fill="currentColor" class="h-10 w-10 lock-closed text-teal-500 "><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>
        </div>

        <p class="mx-6 text-gray-400 text-sm">
            WhatsApp secures your conversations with end-to-end encryption. This means your messages, calls and status updates stay between you and the people you choose. Not even WhatsApp can read or hear them.
            <a href="#" class="text-blue-400">Learn more.</a>
        </p>

        <div class="mx-6 pt-6">
            <div class="flex items-baseline justify-between">
                <div>
                    <h1 class="text-gray-400 leading-10">Show security notifications</h1>
                    <p class="text-gray-600 text-xs">Turn on this setting to receive notifications when one of your contact's security code changes.
                        Conversations will remain end-to-end encrypted, even if this code changes. <a href="#" class="text-blue-400">Learn more</a>
                    </p>
                </div>
                <!-- <span>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="photograph w-6 h-6 text-gray-600 my-3"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </span> -->
                <Toggle :isCheck="false"></Toggle>
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