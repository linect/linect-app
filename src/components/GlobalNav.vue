<template>
    <div class="nav">
        <ul class="nav__wrap">
            <li class="nav__wrap__content">
                <!-- home -->
                <router-link 
                    to="Home" 
                    class="nav__wrap__content__link" 
                    v-on:click.native="send"
                    exact
                >
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25" viewBox="0 0 25 25">
                        <path id="Icon_awesome-home" data-name="Icon awesome-home" d="M11.187,6.891,3.83,12.95v6.54a.638.638,0,0,0,.638.638l4.472-.012a.638.638,0,0,0,.635-.638V15.659a.638.638,0,0,1,.638-.638h2.554a.638.638,0,0,1,.638.638v3.816a.638.638,0,0,0,.638.64l4.47.012a.638.638,0,0,0,.638-.638V12.946L11.8,6.891A.486.486,0,0,0,11.187,6.891Zm11.621,4.118-3.336-2.75V2.732a.479.479,0,0,0-.479-.479H16.759a.479.479,0,0,0-.479.479v2.9L12.708,2.69a1.915,1.915,0,0,0-2.434,0L.173,11.009a.479.479,0,0,0-.064.674l1.018,1.237a.479.479,0,0,0,.675.065l9.386-7.731a.486.486,0,0,1,.611,0l9.386,7.731a.479.479,0,0,0,.674-.064l1.018-1.237a.479.479,0,0,0-.068-.676Z" transform="translate(0.696 1.119)"  stroke-width="1"/>
                    </svg>
                </router-link>
            </li>
            <li class="nav__wrap__content">
                <!-- search -->
                <router-link to="Search" class="nav__wrap__content__link" exact>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25" viewBox="0 0 25 25">
                        <path id="Icon_awesome-search" data-name="Icon awesome-search" d="M22.945,20.114l-4.53-4.53a1.09,1.09,0,0,0-.772-.318H16.9A9.446,9.446,0,1,0,15.266,16.9v.741a1.09,1.09,0,0,0,.318.772l4.53,4.53a1.086,1.086,0,0,0,1.54,0l1.286-1.286a1.1,1.1,0,0,0,0-1.545ZM9.45,15.266A5.816,5.816,0,1,1,15.266,9.45,5.812,5.812,0,0,1,9.45,15.266Z" transform="translate(1.042 0.247)"  stroke-width="1"/>
                    </svg>
                </router-link>
            </li>
            <li class="nav__wrap__content">
                <!-- ranking -->
                <router-link to="Ranking" class="nav__wrap__content__link" exact>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25" viewBox="0 0 25 25">
                        <path id="パス_1397" data-name="パス 1397" d="M56.092,21.708l-1.415-.072-.5-1.5a.273.273,0,0,0-.53,0l-.5,1.5-1.415.072a.291.291,0,0,0-.256.221.345.345,0,0,0,.093.349l1.106,1L52.3,24.817a.343.343,0,0,0,.106.344.256.256,0,0,0,.322.008l1.182-.88,1.182.88a.257.257,0,0,0,.322-.008.343.343,0,0,0,.106-.344l-.376-1.542,1.107-1a.346.346,0,0,0,.093-.349.291.291,0,0,0-.257-.221" transform="translate(-41.415 -15.535)"/>
                        <path id="パス_1398" data-name="パス 1398" d="M20.606,1.595V0H4.528v1.6H0V7.376a5.644,5.644,0,0,0,.585,2.4h0a7.939,7.939,0,0,0,2.8,3.152l.02.013-.019-.013a9.519,9.519,0,0,0,4.741,1.514l1.7,2.325h0a2.852,2.852,0,0,1,.543,1.683V19.93L6.473,21.4V25H18.661V21.4L14.77,19.93V18.454a2.852,2.852,0,0,1,.543-1.683l1.705-2.338A9.178,9.178,0,0,0,22.791,12h0A7.634,7.634,0,0,0,24.414,9.78h0A5.641,5.641,0,0,0,25,7.376V1.595ZM3.221,10.645A5.921,5.921,0,0,1,1.964,8.94a3.719,3.719,0,0,1-.4-1.564V3.365H4.753V6.628a8.483,8.483,0,0,0,1.6,4.991l.67.918a7.455,7.455,0,0,1-3.8-1.892m10.987,5.1a4.611,4.611,0,0,0-.87,2.712v2.641l3.89,1.468v.818H7.905v-.818l3.89-1.468V18.454a4.6,4.6,0,0,0-.87-2.711l-3.64-4.991A7,7,0,0,1,5.96,6.628V1.616H19.174V6.628a7,7,0,0,1-1.325,4.123Zm9.226-8.366a3.716,3.716,0,0,1-.4,1.564A6.255,6.255,0,0,1,20.825,11.4a7.7,7.7,0,0,1-2.692,1.1l.648-.888a8.479,8.479,0,0,0,1.6-4.991V3.365h3.053Z" transform="translate(0 0.001)"/>
                    </svg>
                </router-link>
            </li>
            <li class="nav__wrap__content">
                <!-- user -->
                <router-link to="User" class="nav__wrap__content__link" exact>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="25" viewBox="0 0 25 25">
                        <path id="Icon_awesome-user-alt" data-name="Icon awesome-user-alt" d="M11.632,13.087A6.543,6.543,0,1,0,5.089,6.543,6.545,6.545,0,0,0,11.632,13.087Zm5.816,1.454h-2.5a7.91,7.91,0,0,1-6.625,0h-2.5A5.816,5.816,0,0,0,0,20.357v.727a2.182,2.182,0,0,0,2.181,2.181h18.9a2.182,2.182,0,0,0,2.181-2.181v-.727A5.816,5.816,0,0,0,17.449,14.541Z" transform="translate(1.042 0.942)"  stroke-width="1"/>
                    </svg>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  methods: {
    send() {
      this.$emit("my-click", this.child_num);
    }
  }
}
</script>

<style lang="scss" scoped>
.nav{
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 9999;
    &__wrap{
        width: 100vw;
        height: 70px;
        list-style: none;
        display: flex;
        justify-content: space-around;
        align-items: center;
        &__content{
            width: 25px;
            height: 25px;
            &__link{
                fill: none;
                stroke: #000;
            }
        }
    }
}
.router-link-active{
    fill: tomato;
    stroke: tomato;
}
</style>