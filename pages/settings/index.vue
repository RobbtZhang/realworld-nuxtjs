<template>
  <div class="settings-page">
  <div class="container page">
    <div class="row">

      <div class="col-md-6 offset-md-3 col-xs-12">
        <h1 class="text-xs-center">Your Settings</h1>

        <form @submit.prevent="onSubmit">
          <fieldset>
              <fieldset class="form-group">
                <input v-model="nuser.image" class="form-control" type="text" placeholder="URL of profile picture">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="nuser.username" class="form-control form-control-lg" type="text" placeholder="Your Name">
              </fieldset>
              <fieldset class="form-group">
                <textarea v-model="nuser.bio" class="form-control form-control-lg" rows="8" placeholder="Short bio about you"></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input v-model="nuser.email" class="form-control form-control-lg" type="text" placeholder="Email">
              </fieldset>
              <fieldset class="form-group">
                <input v-model="nuser.password" class="form-control form-control-lg" type="password" placeholder="Password">
              </fieldset>
              <button class="btn btn-lg btn-primary pull-xs-right">
                Update Settings
              </button>
          </fieldset>
        </form>
      </div>

    </div>
  </div>
</div>
</template>

<script>
  import { mapState } from 'vuex'
  import { updateUser } from '@/api/user.js'
  const Cookie = process.client ? require('js-cookie') : undefined
  export default {
    computed: {
      ...mapState(['user'])
    },
    middleware: ['auth'],
    data () {
      return {
        nuser: {
          email: '',
          username: '',
          password: '',
          image: '',
          bio: ''
        }
      }
    },
    methods: {
      async onSubmit () {
        try {
          const { data } = await updateUser({
            user: {
              username: 'zyshahahahaaha',
              image: ''
            }
          })
          this.$store.commit('setUser', data.user)
          Cookie.set('user', data.user)
          console.log(data)
          // this.$router.push({name:'profile',pramas:{username:}})
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>

<style lang="sass" scoped>

</style>