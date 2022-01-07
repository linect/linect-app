<template>
  <div class="signin">
    <SigninHeader/>
    <div class="signin__wrap">
      <div class="signin__wrap__input">
        <section class="signin__wrap__input__box">
          <label class="signin__wrap__input__box__heading">E-mail</label><br>
          <input type="email" v-model="email"/>
        </section>
        <section class="signin__wrap__input__box"> 
          <label class="signin__wrap__input__box__heading">パスワード</label><br>
          <input type="password" v-model="password"/>
        </section>
      </div>
      <button @click="signIn" class="signin__wrap__btn">ログイン</button>
      <router-link to="#" class="signin__wrap__link">パスワードを忘れた場合</router-link>
      <div class="signin__wrap__signup">
        <p class="signin__wrap__signup__text">または</p>
        <router-link to="Signup" class="signin__wrap__signup__link">新しいアカウントを作成</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// import firebase from 'firebase/compat/app';
import SigninHeader from '@/components/Signin/SigninHeader'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
export default {
    data () {
        return {
        email: '',
        password: ''
        }
    },
    components:{
      SigninHeader,
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
.signin{
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
        }
      }
    }
    &__btn{
      width: 100%;
      height: 50px;
      background-color: $linkBtn;
      border-radius: 10px;
      color: $linkBtnText;
      margin-bottom: 17px;
    }
    &__link{
      display: inline-block;
      width: 100%;
      color: $inputHeading;
      font-size: 12px;
      text-decoration: none;
      text-align: center;
    }
    &__signup{
      margin-top: 85px;
      &__text{
        text-align: center;
        display: flex;
        align-items: center;
        color: $inputHeading;
        font-size: 12px;
        &::before{
          content: '';
          width: 120px;
          height: 0;
          border: solid 1px $MainTextColor;
          margin-right: 6px;
        }
        &::after{
          content: '';
          width: 120px;
          height: 0;
          border: solid 1px $MainTextColor;
          margin-left: 6px;
        }
      }
      &__link{
        display: inline-block;
        width: 100%;
        line-height: 30px;
        background-color: $singupLink;
        color: $btnTextColor;
        font-size: 12px;
        text-align: center;
        text-decoration: none;
        border-radius: 10px;
        margin-top: 8px;
      }
    }
  }
}
</style>