<template>
    <div class="w-full">
        <div class="flex justify-center mt-12 mb-4">
            <toggle-button></toggle-button>
        </div>
        <div>
            <slot name="ltr" v-if="!checked"></slot>
            <slot name="rtl" v-if="checked"></slot>
        </div>
    </div>
</template>

<script>
    import { ToggleButton } from 'vue-js-toggle-button'
    export default {
        components: { ToggleButton },
        data() {
            return {
                checked: false
            }
        }
    }
</script>