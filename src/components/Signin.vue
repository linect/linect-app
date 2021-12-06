<template>
  <div class="signup">
    <h1>ログイン</h1>
    <div class="signin__input">
      <section>
        <label>E-mail</label><br>
        <input type="email" v-model="email"/>
      </section>
      <section>
        <label>パスワード</label><br>
        <input type="password" v-model="password"/>
      </section>
    </div>
    <button @click="signIn">ログイン</button><br>
    <router-link to="Signup">会員登録</router-link>
  </div>
</template>

<script>
// import firebase from 'firebase/compat/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
    data () {
        return {
        email: '',
        password: ''
        }
    },
    methods: {
        signIn: function () {
          const auth = getAuth();
          signInWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential)=>{
              const user = userCredential.user;
              console.log(user)
              alert("ログインに成功しました")
            })
            .catch((error)=>{
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage)
              alert("メールアドレスかパスワードが間違っています")
            })
        }
    }
}
</script>

<style lang="scss" scoped>
</style>