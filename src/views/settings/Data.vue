<template>
    <div>

        <div class="bg-gray-light p-3 text-gray-400 sticky top-0">
            <TitleNav title="Data and storage usage" url="/settings"></TitleNav>
        </div>

        <div class="p-5">
            <h1 class="font-medium pb-3 text-teal-500">Usage</h1>

              <div class="pb-6">
                  <h1 class="text-gray-400">Network usage</h1>
                  <p class="text-gray-600 text-sm">36.6 MB sent~615.0 MB received</p>
              </div>

              <div class="">
                    <h1 class="text-gray-400">Storage usage</h1>
                    <p class="text-gray-600 text-sm">249.1 MB</p>
              </div>


        </div>

        <div class="border-t border-gray-light"></div>

        <div class="p-5">
            <h1 class="font-medium pb-3 text-teal-500">Media auto-download</h1>

              <div class="pb-6">
                  <p class="text-gray-600 text-sm">Voice message are alwayes auto-downloaded for the best communication experience</p>
              </div>

              <div class="pb-6">
                    <h1 class="text-gray-400">When using mobile data</h1>
                    <p class="text-gray-600 text-sm">Documents</p>
              </div>

              <div class="pb-6 text-gray-700">
                    <h1 class="">When connected on Wi-Fi</h1>
                    <p class=" text-sm">No media</p>
              </div>

              <div class="pb-6">
                    <h1 class="text-gray-400">When roaming</h1>
                    <p class="text-gray-600 text-sm">No media</p>
              </div>

            <h1 class="font-medium pb-3 text-teal-500">Call settings</h1>

              <div class="flex justify-between pb-6">
                <div>
                    <h1 class="text-gray-400">Low data usage</h1>
                    <p class="text-gray-600 text-sm">Reduce the data used in a call</p>
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
import Toggle from '../../components/Toggle'
import TitleNav from '../../components/TitleNav'
export default {
    components:{
        Toggle,
        TitleNav
    }
}
</script>