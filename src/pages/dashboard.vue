<template lang="">
    <div class="">
        <Navbar>
            <template v-slot:content>
                <div class="flex flex-col p-3">
                    <div class="w-full bg-base-100 h-max mt-3 p-2 border rounded-lg leading-none shadow-md">
                        <article class="prose capitalize prose-sm">
                            <p>
                                <b>Selamat Datang</b>
                                <br />
                                silahkan pilih menu anda
                            </p>
                        </article>
                    </div>
                    <div class="flex justify-center mt-6">
                        <div class="grid grid-cols-3 w-max gap-6">
                            <div class="w-28 h-max p-2 flex flex-col justify-center gap-2 transition ease-in-out hover:scale-105"
                                v-for="item in list_menu.title">
                                <img class="rounded-2xl border shadow-md" src="https://placeimg.com/160/160/arch" />
                                <div class="w-full">
                                    <article class="prose text-center prose-sm text-xs drop-shadow-md">
                                        <h4>{{ item }}</h4>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </Navbar>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                list_menu: {
                    title: [
                        'menu spesial',
                        'nasi goreng',
                        'menu paket',
                        'mie',
                        'kwetiau',
                        'bihun',
                        'express bowl',
                        'lo mie & i fu mie',
                        'menu porsi',
                    ]
                }
            }
        },
    };
</script>
<style lang=""></style>