<template>
    <div>
        <!-- title -->
        <div class="bg-gray-light p-3 text-gray-400">
            <div class="flex font-semibold ">
                <router-link to="/settings">
                     <svg viewBox="0 0 20 20" fill="currentColor" class="arrow-left w-6 h-6"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                </router-link>
                
                <span class="mx-5">Help</span> 
            </div>
        </div>

        <div class="flex items-center text-gray-400 p-4" v-for="(acc, index) in account" :key="index">
            <p v-html="acc.svg"></p>
            <h1 class="pl-6">{{acc.name}}</h1>
        </div>


        
    </div>
</template>

<script>
export default {
    data() {
        return {
            account:[
                {
                    svg:'<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="question-mark-circle w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
                    name:'FAQ'   
                },
                {
                    svg:'<svg viewBox="0 0 20 20" fill="currentColor" class="users w-6 h-6"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>',
                    name:'Contact us'
                },
                {
                    svg:'<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 18H17V16H7V18Z" fill="currentColor" /><path d="M17 14H7V12H17V14Z" fill="currentColor" /><path d="M7 10H11V8H7V10Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z" fill="currentColor" /></svg>',
                    name:'Terms and Privacy Policy'
                },
                {
                    svg:'<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" class="exclamation-circle w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
                    name:'App info'
                },
            ]
        }
    },
}
</script>