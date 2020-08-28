<template>
    <div>

        <div class="bg-gray-light p-3 text-gray-400">
            <TitleNav title="Account" url="/settings"></TitleNav>
        </div>

        <div class="flex items-center text-gray-400 p-4" v-for="(acc, index) in account" :key="index">
            <p v-html="acc.svg"></p>
            <router-link :to="'/'+acc.url" class="pl-6">{{acc.name}}</router-link>
        </div>


        
    </div>
</template>

<script>
import TitleNav from '../../../components/TitleNav'
export default {
    components:{
        TitleNav
    },
    data() {
        return {
            
            account:[
                {
                    svg:'<svg viewBox="0 0 20 20" fill="currentColor" class="lock-closed w-6 h-6"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>',
                    name:'Privacy' ,
                    url:'privacy'  
                },
                {
                    svg:'<svg viewBox="0 0 20 20" fill="currentColor" class="shield-check w-6 h-6"><path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path></svg>',
                    name:'Security',
                    url:'security'
                },
                {
                    svg:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 12C6 12.5523 5.55228 13 5 13C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11C5.55228 11 6 11.4477 6 12Z" fill="currentColor" /><path d="M9 13C9.55228 13 10 12.5523 10 12C10 11.4477 9.55228 11 9 11C8.44771 11 8 11.4477 8 12C8 12.5523 8.44771 13 9 13Z" fill="currentColor" /><path d="M14 12C14 12.5523 13.5523 13 13 13C12.4477 13 12 12.5523 12 12C12 11.4477 12.4477 11 13 11C13.5523 11 14 11.4477 14 12Z" fill="currentColor" /><path d="M20 11H16V13H20V11Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M2 6C0.895431 6 0 6.89543 0 8V16C0 17.1046 0.89543 18 2 18H22C23.1046 18 24 17.1046 24 16V8C24 6.89543 23.1046 6 22 6H2ZM22 8H2L2 16H22V8Z" fill="currentColor" /></svg>',
                    name:'Two-step verification',
                    url:'verification'
                },
                {
                    svg:'<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="device-mobile w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>',
                    name:'Change number',
                    url:'changenumber'
                },
                {
                    svg:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 18H17V16H7V18Z" fill="currentColor" /><path d="M17 14H7V12H17V14Z" fill="currentColor" /><path d="M7 10H11V8H7V10Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z" fill="currentColor" /></svg>',
                    name:'Request account info',
                    url:'requestinfo'
                },
                {
                    svg:'<svg viewBox="0 0 20 20" fill="currentColor" class="trash w-6 h-6"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>',
                    name:'Delete account',
                    url:'deleteaccount'
                },
            ]
        }
    },
}
</script>