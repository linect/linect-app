<template>
  <div class="signup">
    <h1>ログイン</h1>
<<<<<<< HEAD:src/components/Signin.vue
    <table>
      <tr>
        <th>メールアドレス：</th>
      </tr>
      <tr>
        <td><input type="email" v-model="email" /></td>
      </tr>
      <tr>
        <th>パスワード：</th>
      </tr>
      <tr>
        <td><input type="password" v-model="password" /></td>
      </tr>
    </table>
    <button @click="signIn">ログイン</button><br />
=======
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
>>>>>>> 52df0bf32b8e06bae557bae262b9df6465065b87:src/views/Signin.vue
    <router-link to="Signup">会員登録</router-link>
  </div>
</template>

<script>
// import firebase from 'firebase/compat/app';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    signIn: function () {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          alert("ログインに成功しました");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          alert("メールアドレスかパスワードが間違っています");
        });
    },
  },
};
</script>
<<<<<<< HEAD:src/components/Signin.vue
=======

<style lang="scss" scoped>
</style>
>>>>>>> 52df0bf32b8e06bae557bae262b9df6465065b87:src/views/Signin.vue
