<template>
  <div class="signup">
    <SigninHeader/>
    <div class="signup__wrap">
      <div class="signup__wrap__input">
        <section class="signup__wrap__input__box">
          <label class="signup__wrap__input__box__heading">E-mail</label><br>
          <input type="email" v-model="email"/>
        </section>
        <section class="signup__wrap__input__box">
          <label class="signup__wrap__input__box__heading">パスワード</label><br>
          <input type="password" v-model="password"/>
        </section>
        <section class="signup__wrap__input__box">
          <label class="signup__wrap__input__box__heading">パスワード確認用</label><br>
          <input type="password" v-model="repassword"/>
        </section>
        <section class="signup__wrap__input__box">
          <label class="signup__wrap__input__box__heading">ユーザー名</label><br>
          <input type="text" v-model="username"/>
        </section>
      </div>
      <button @click="signUp" class="signup__wrap__btn">アカウントを作成</button>
      <router-link to="/" class="signup__wrap__link">戻る</router-link>
    </div>
  </div>
</template>

<script>
import SigninHeader from '@/components/Signin/SigninHeader'
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
  components: {
    SigninHeader,
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
            this.$router.push('/QuestionTtl')
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

<style lang="scss" scoped>
.signup{
  &__wrap{
    width: 300px;
    margin: 0 auto;
    &__input{
      &__box{
        &__heading{
          color: $inputHeading;
          font-size: 12px;
        }
        input{
          width: 100%;
          height: 35px;
          border: solid 1px $linkBtn;
          border-radius: 10px;
          margin-bottom: 18px;
          padding-left: 10px;
        }
      }
    }
    &__btn{
      width: 100%;
      line-height: 30px;
      background-color: $singupLink;
      color: $btnTextColor;
      font-size: 12px;
      text-align: center;
      text-decoration: none;
      border-radius: 10px;
      margin: 12px 0 18px;
    }
    &__link{
      display: inline-block;
      width: 100%;
      color: $inputHeading;
      font-size: 12px;
      text-decoration: none;
      text-align: center;
    }
  }
}
</style>