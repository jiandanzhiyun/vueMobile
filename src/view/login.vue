<template>
    <div class="login flex-container flex-jus-c flex-align-c flex-wrap-w">
       <div class="input-box">
           <input type="tel" placeholder="请输入手机号" v-model="tel" class="input-class" maxlength="11"/>
           <div class="flex-container flex-jus-sp flex-align-c input-class">
               <input type="tel" placeholder="请输入验证码" v-model="sms"/>
               <button class="input-btn" @click="sendCode()" :disabled='canClick'>{{canClick ? totalTime+'s后重新获取':'发送验证码'}}</button>
           </div>
           <button class="input-btn login-btn" @click="login()">登录</button>
       </div>

    </div>
</template>
<script>

    export default {
        name: 'login',
        data(){
            return{
                tel:'',
                sms:'',
                canClick:false,
                totalTime:60,
            }
        },
        methods:{
           sendCode(){
               this.canClick = true;
               let clock = window.setInterval(() => {
                   this.totalTime--;
                   if (this.totalTime < 0) {
                       window.clearInterval(clock);
                       this.totalTime = 60;
                       this.canClick = false; //这里重新开启
                   }
               }, 1000);
           },
            login(){
              if(!this.tel){
                return  Notify({ type: 'danger', message: '请输入手机号', color: 'rgba(255,255,255,1)',duration: 500,
                    background: 'rgba(0,0,0,.5)' });
              }if(!(/^1[3|4|5|7|8|9][0-9]\d{4,8}$/.test(this.tel))){
                    return  Notify({ type: 'danger', message: '手机号格式不正确', color: 'rgba(255,255,255,1)',duration: 500,
                        background: 'rgba(0,0,0,.5)' });
                }if(!this.sms){
                    return  Notify({ type: 'danger', message: '请输入验证码' , color: 'rgba(255,255,255,1)',duration: 500,
                        background: 'rgba(0,0,0,.5)'});
              }
              this.$router.push('/one')
            }
        }
    };
</script>
<style scoped>
    .login{
        padding: .75rem;
        background:linear-gradient(to top, #4481eb 0%, #04befe 100%);
        height: 100vh;
    }

    input::-webkit-input-placeholder {
        color: rgba(255, 255, 255, 0.8);
    }
.input-box{
    width: 100%;
    padding: 0 .75rem;
    box-sizing: border-box;
}
.input-class{
    border: 0;
    background: rgba(255,255,255,.2);
    width: 100%;
    height: 2rem;
    border-radius: 20px;
    color: #fff;
    text-indent: 2rem;
    margin-bottom: 1rem;
}
.input-class input{
  border: 0;
  height: 2rem;
  background: none;
  text-indent: 2rem;
  width: 69%;
}
  .input-btn{
      background: rgba(255,255,255,.6);
      height: 1.8rem;
      border: 0;
      color: #04befe;
      border-radius: 20px;
      margin-right: .25rem;
      font-size: .6rem;
  }
    .login-btn{
        width: 100%;
        font-size: .8rem;
    }
</style>
