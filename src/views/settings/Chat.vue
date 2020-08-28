<template>
    <div>

        <div class="bg-gray-light p-3 text-gray-400 sticky top-0">
            <TitleNav title="Chat" url="/settings"></TitleNav>
        </div>
        <!-- display -->
        <div class="p-5">
            <h1 class="text-teal-500 font-medium">Display</h1>
            <div class="flex items-center py-4">
                <span>
                    <svg class="text-gray-600" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8V16Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM12 4V8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16V20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z" fill="currentColor" /></svg>
                </span>
                <div class="px-8">
                    <h1 class="text-gray-400">Themes</h1>
                    <h1 class="text-gray-600">Dark</h1>
                </div>
            </div>

            <div class="flex pt-4">
                <span>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="photograph w-6 h-6 text-gray-600"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                </span>
                <div class="px-8">
                    <h1 class="text-gray-400">Wallpaper</h1>
                </div>
            </div>

        </div>

        

        <div class="border-t border-gray-light"></div>

        <!-- chat settings -->

        <div class="p-5">
            <h1 class="font-medium pb-3 text-teal-500">Chat settings</h1>
            
            <div class="flex justify-between ml-12 pl-2">
                <div>
                    <h1 class="text-gray-400">Enter is send</h1>
                    <p class="text-gray-600 text-sm">Enter key will send your message</p>
                </div>
                <Toggle :isCheck="false"></Toggle>
            </div>

            <div class="flex justify-between ml-12 pl-2 py-6">
                <div>
                    <h1 class="text-gray-400">Media visibility</h1>
                    <p class="text-gray-600 text-sm">Show newly downloaded media in your phone's gallery</p>
                </div>
                <Toggle :isCheck="false"></Toggle>
            </div>

            <div class="ml-12 pl-2">
                <div>
                    <h1 class="text-gray-400">Font size</h1>
                    <p class="text-gray-600 text-sm">Meduim</p>
                </div>
            </div>
        </div>

        <div class="border-t border-gray-light"></div>        

        <div class="p-5">
            <div class="flex">
                <span>
                    <svg viewBox="0 0 20 20" fill="currentColor" class="cloud-upload w-6 h-6 text-gray-600"><path d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"></path><path d="M9 13h2v5a1 1 0 11-2 0v-5z"></path></svg>
                </span>
                <div class="px-8">
                    <h1 class="text-gray-400">Chat backup</h1>
                </div>
            </div>

            <div class="flex pt-8">
                <span>
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="clock w-6 h-6 text-gray-600"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </span>
                
                <div class="px-8">
                    <h1 class="text-gray-400">Chat history</h1>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import Toggle from '../../components/Toggle'
import TitleNav from '../../components/TitleNav'
export default {
    components:{
        Toggle,
        TitleNav
    }
}
</script>