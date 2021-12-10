<template>
  <div class="signup">
    <h1>会員登録</h1>
    <div class="signup__input">
      <section>
        <label>E-mail</label><br>
        <input type="email" v-model="email"/>
      </section>
      <section>
        <label>パスワード</label><br>
        <input type="password" v-model="password"/>
      </section>
      <section>
        <label>パスワード確認用</label><br>
        <input type="password" v-model="repassword"/>
      </section>
      <section>
        <label>ユーザー名</label><br>
        <input type="text" v-model="username"/>
      </section>
    </div>
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
      username: '',
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
              user: this.username,
            });
            console.log("Document written with ID: ", docRef.id, user, "成功しました");
            // window.location.href = '';
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