<template>
    <div>
        <div class="bg-gray-light p-3 text-gray-400">
            <TitleNav title="Request account info" url="/account"></TitleNav>
        </div>

        <div class="bg-teal-100 flex h-24 items-center justify-center mx-auto rounded-full w-24 my-6">
            <svg class="h-16 w-16 text-teal-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 18H17V16H7V18Z" fill="currentColor" /><path d="M17 14H7V12H17V14Z" fill="currentColor" /><path d="M7 10H11V8H7V10Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z" fill="currentColor" /></svg>
        </div>

            <p class="mx-6 mr-10 text-gray-400">
                Create a report of your whatsapp account information and settings, which you can access or port to another app. This report does not include your message. 
                <a href="#" class="text-blue-400">Learn more</a>
            </p>
        
        <div class="my-5 border-t border-b border-gray-light">
            <div class="m-5 flex text-gray-500">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 18H17V16H7V18Z" fill="currentColor" /><path d="M17 14H7V12H17V14Z" fill="currentColor" /><path d="M7 10H11V8H7V10Z" fill="currentColor" /><path fill-rule="evenodd" clip-rule="evenodd" d="M6 2C4.34315 2 3 3.34315 3 5V19C3 20.6569 4.34315 22 6 22H18C19.6569 22 21 20.6569 21 19V9C21 5.13401 17.866 2 14 2H6ZM6 4H13V9H19V19C19 19.5523 18.5523 20 18 20H6C5.44772 20 5 19.5523 5 19V5C5 4.44772 5.44772 4 6 4ZM15 4.10002C16.6113 4.4271 17.9413 5.52906 18.584 7H15V4.10002Z" fill="currentColor" /></svg>
                <h1 class="mx-6">Request report</h1>
            </div>
        </div>

        <div class="m-5 text-gray-400">
            <p class="pb-8">
                Your report will be ready in about 3 days. you'll have a few weeks to download your report after it's available.
            </p>

            <p>
                Your request will be canceled if you make changes to your account such as changing your number or deleting your account.
            </p>
        </div>

    </div>
</template>

<script>
import TitleNav from '../../../components/TitleNav'
export default {
    components:{
        TitleNav
    }
}
</script>