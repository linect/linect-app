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
        <tr>
          <th>パスワード確認：</th>
        </tr>
        <tr>
          <td><input type="password" v-model="repassword"/></td>
        </tr>
        <tr>
          <th>パスワード確認：</th>
        </tr>
        <tr>
          <td><input type="password" v-model="repassword"/></td>
        </tr>
        <tr>
          <th>メールアドレス：</th>
        </tr>
        <tr>
          <td><input type="email" v-model="email"/></td>
        </tr>
    </table>
    <button @click="signUp">登録</button>
  </div>
</template>

<script>
// import firebase from 'firebase/compat/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "@/main.js";
export default {
  data () {
      return {
      email: '',
      password: '',
      repassword: '',
      }
  },
  methods: {
    signUp: function () {
      const auth = getAuth();
      if(this.password === this.repassword){
        createUserWithEmailAndPassword(auth, this.email, this.password, this.repassword)
          .then((userCredential)=>{
            const user = userCredential.user;
            const docRef = addDoc(collection(firestore, "users"), {
              first: "",
              last: "",
            });
            console.log(user, "成功");
             console.log("Document written with ID: ", docRef.id);
          })
        .catch((error)=>{
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage, "失敗");
        })
      }else{
        alert("パスワード不一致");
      }
    },
  }
}
</script>