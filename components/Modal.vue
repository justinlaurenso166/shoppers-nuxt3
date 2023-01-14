<script setup>
const emit = defineEmits(["close"]);
function close() {
    emit("close");
}
</script>

<template>
    <transition name="modal-fade">
        <div class="modal-backdrop fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center bg-black bg-opacity-50">
            <div class="modal bg-white rounded-md shadow-md shadow-slate-600 overflow-x-auto flex flex-col max-w-lg" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
                <header class="modal-header relative border-b border-b-[#eeeeee] text-black justify-between p-4 flex items-center text-xl font-semibold" id="modalTitle">
                    <slot name="header"> This is the default tile! </slot>
                </header>

                <section class="modal-body relative py-10 px-10" id="modalDescription">
                    <slot name="body"> This is the default body! </slot>
                </section>

                <footer class="modal-footer p-4 flex border-t border-t-[#eeeeee] flex-col">
                    <slot name="footer"> This is the default footer! </slot>
                    <!-- <button
                        type="button"
                        class="btn-green text-white bg-[#4aae9b] border border-[#4aae9b] rounded-sm"
                        @click="close"
                        aria-label="Close modal">
                        Close me!
                    </button> -->
                </footer>
            </div>
        </div>
    </transition>
</template>

<style scoped>
.modal-fade-enter,
.modal-fade-leave-to {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity 0.5s ease;
}
</style>
