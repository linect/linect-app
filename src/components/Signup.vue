<template>
  <div class="signup">
    <h1>会員登録</h1>
    <table>
        <tr>
          <th>メールアドレス：</th>
        </tr>
        <tr>
          <td><input type="email" v-model="email"/></td>
        </tr>
        <tr>
          <th>パスワード：</th>
        </tr>
        <tr>
          <td><input type="password" v-model="password"/></td>
        </tr>
    </table>
    <button @click="signUp">登録</button>
  </div>
</template>

<script>
// import firebase from 'firebase/compat/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default {
    data () {
        return {
        email: '',
        password: ''
        }
    },
    methods: {
        signUp: function () {
          const auth = getAuth();
          createUserWithEmailAndPassword(auth, this.email, this.password)
            .then((userCredential)=>{
              const user = userCredential.user;
              console.log(user, "成功")
            })
            .catch((error)=>{
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage, "失敗")
            })
        }
    }
}
</script>