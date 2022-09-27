<template lang="">
    <div class="max-w-xs m-auto">
        <div class="form-control gap-2">
            <label for="">Email</label>
            <input type="email" v-model="login_user.email" class="input input-bordered">
            <label for="">Password</label>
            <input type="password" v-model="login_user.password" class="input input-bordered">
            <div class="w-full flex justify-end">
                <button class="btn btn-success" @click="get_login">Login</button>
            </div>
            <div class="w-full overflow-hidden">
                <label for="" class="break-words" v-if="login_user.pesan">Token : {{login_user.pesan}}</label>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                login_user: {
                    email: null,
                    password: null,
                    pesan: null,
                    status: false
                }
            }
        },
        methods: {
            get_login() {
                var email = this.login_user.email
                var password = this.login_user.password
                axios.post('https://portal.kobaps.com/api/user/login', {
                    email,
                    password
                }).then(response => {
                    console.log('success', response);
                    this.login_user.pesan = response.data.access_token
                }, error => {
                    console.log('error', error.response);
                })
            }
        },
    }
</script>
<style lang="">

</style>