<template>
  <div class="signup">
    <h1>ログイン</h1>
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
<<<<<<< HEAD
  },
};
</script>
=======
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
.signup{
  background-color: tomato;
}
</style>
>>>>>>> 2373f96a1b77035cdd93e555ff477008b51f7d7f
