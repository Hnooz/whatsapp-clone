<template>
    <div>
        <!-- title -->
         <div class="bg-gray-light p-3 text-gray-400 sticky top-0">
            <TitleNav title="Settings" url="/"></TitleNav>
        </div>

        <!-- image and name -->
        <div class="flex items-center py-3">
            <div class="bg-no-repeat bg-center bg-cover flex h-12 items-center justify-center mx-4 photo px-5 rounded-full w-12"></div>
            <div class="flex justify-between items-center w-full">
                <div class="text-gray-400">
                    <h1 class="">Hnooz</h1>
                    <p class="text-xs">what if ?</p>
                </div>
                <div>
                    <span class="mx-10 text-gray-400">
                        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="qrcode w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"></path></svg>
                    </span>
                </div>
                
            </div>
        </div>

        <div class="border-gray-light border-t"></div>

        <!-- seeting info -->
        <div class="flex items-center pl-6 py-4" v-for="(setting, index) in settings" :key="index">
            <div class="text-gray-400">
                <svg v-show="setting.type == 'Account'" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="key  w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"></path></svg>
                <svg v-show="setting.type == 'Chats'" viewBox="0 0 20 20" fill="currentColor" class="chat-alt  w-5 h-5"><path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path></svg>
                <svg v-show="setting.type == 'Notifications'" viewBox="0 0 20 20" fill="currentColor" class="bell  w-5 h-5"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
                <svg v-show="setting.type == 'Data and storage usage'" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.6818 15.7529L18.8116 17.8827C20.1752 16.3052 21 14.249 21 12.0001C21 9.78747 20.2016 7.76133 18.8771 6.19409L16.7444 8.32671C17.5315 9.34177 18 10.6162 18 12.0001C18 13.4203 17.5066 14.7253 16.6818 15.7529Z" fill="currentColor" fill-opacity="0.5" /><path d="M15.6734 16.7445C14.6583 17.5315 13.3839 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C13.4202 6 14.7252 6.49344 15.7528 7.31823L17.8826 5.18843C16.3051 3.82482 14.2489 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21C14.2126 21 16.2387 20.2016 17.806 18.8771L15.6734 16.7445Z" fill="currentColor" /></svg>
                <svg v-show="setting.type == 'Help'" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="question-mark-circle  w-5 h-5"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>

            <div class="leading-tight px-6">
                <router-link :to="setting.url" class="block text-gray-400 text-sm">{{setting.type}}</router-link>
                <span class="pr-2 text-gray-600 text-xs" v-for="(detail, index) in setting.details" :key="index">{{detail}}</span>
            </div>
            
        </div>
        
        <div class="border-gray-light border-t"></div>

        <div class="flex items-center text-gray-400 pl-6 py-3">
            <svg viewBox="0 0 20 20" fill="currentColor" class="users w-5 h-5"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>
            <h1 class="pl-6">Invite a friend</h1>
        </div>
        
        <div class="text-center text-gray-400 text-sm py-4">
            <h1 >from</h1>
            <h1 class="font-semibold uppercase tracking-widest">Facebook</h1>
        </div>
    </div>
</template>

<script>
import TitleNav from '../../components/TitleNav'
export default {
    components:{
        TitleNav
    },
    data() {
        return {
            settings:[
                {type:'Account', details:['Privacy,', 'security,', 'change number'], url:'/account'},
                {type:'Chats', details:['Themes,', 'wallpapers,', 'chat history'], url:'/chat'},
                {type:'Notifications', details:['Message,', 'group & call tones'], url:'/notifications'},
                {type:'Data and storage usage', details:['Network usage,', 'auto-download'], url:'/data'},
                {type:'Help', details:['FAQ,', 'contact us,', 'privacy policy'], url:'/help'},
                
            ]
        }
    },
}
</script>

<style scoped>
.photo{
  background-image: url('../../assets/img/profile.jpg');
  background-repeat: no-repeat;
}
</style>