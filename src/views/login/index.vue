<template>
  <div
    class="container"
    ref="container"
  >
    <div class="forms-container">
      <div class="signin-signup">
        <el-form
          ref="loginFormRef"
          :rules="rules"
          :model="loginForm"
          class="login-form"
        >
          <h2 class="title">Sign in</h2>
          <div class="input-field">
            <!-- <i class="fas fa-user"></i> -->
            <el-form-item prop="username">
              <el-input
                size="large"
                v-model="loginForm.username"
                type="text"
                autocomplete="off"
                autofocus="true"
                placeholder="用户名：admin / editor"
                :prefix-icon="User"
              />
            </el-form-item>
          </div>
          <div class="input-field">
            <!-- <i class="fas fa-lock"></i> -->
            <el-form-item prop="password">
              <el-input
                size="large"
                v-model="loginForm.password"
                placeholder="密码：123456"
                type="password"
                autocomplete="off"
                @keyup.enter="submitForm"
                :prefix-icon="Lock"
              />
            </el-form-item>
          </div>
          <input
            class="btn solid"
            type="submit"
            value="Login"
            @click.prevent="submitForm"
          />
          <!-- <el-button type="primary" :loading="btnLoading" @click="submitForm">登录</el-button> -->
          <!-- <div class="user-password">
            <p>用户名：admin 密码：123</p>
            <p>用户名：editor 密码：456</p>
          </div> -->
          <p class="social-text">Or Sign in with social platforms</p>
          <div class="social-media">
            <a
              href="#"
              class="social-icon"
            >
              <i class="fab fa-weixin"></i>
            </a>
            <a
              href="#"
              class="social-icon"
            >
              <i class="fab fa-qq"></i>
            </a>
            <a
              href="#"
              class="social-icon"
            >
              <i class="fab fa-alipay"></i>
            </a>
            <a
              href="#"
              class="social-icon"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </div>
        </el-form>
      </div>
    </div>
    <div class="panels-container">
      <div class="panel left-panel">
        <div class="content">
          <h3>New here ?</h3>
          <p>
            Online tutor Finder provides students the best way to reach out the best tutor for them. Know more about us
            <a href="file:///G:/AGILE%20workshop/Website/Home%20Page/index.html">here</a>.
          </p>
        </div>
        <img
          src="@/assets/log.svg"
          class="image"
          alt=""
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import '@/assets/font-text.js'
import { useRouter } from 'vue-router'
import store from '@/store'
import { ElMessage } from 'element-plus'
import type { FormInstance } from 'element-plus'
import { User, Lock } from '@element-plus/icons-vue'

const loginFormRef = ref<FormInstance>()
const router = useRouter()
const btnLoading = ref<boolean>(false)
const loginForm = reactive({
  username: '',
  password: ''
})

const rules = reactive({
  username: [{ required: true, message: 'Please input the username', trigger: 'blur' }],
  password: [{ required: true, message: 'Please input the password', trigger: 'blur' }]
})

const submitForm = async () => {
  loginFormRef.value?.validate((valid) => {
    console.log(valid)
    if (valid) {
      btnLoading.value = true
      store
        .dispatch('user/login', loginForm)
        .then(() => {
          router.push('/')
        })
        .finally(() => {
          btnLoading.value = false
        })
    } else {
      ElMessage.error('请输入用户名和密码')
    }
  })
}
</script>

<style lang="less" scoped>
.user-password {
  font-size: 10px;
  display: flex;
  justify-content: space-around;
  width: 50%;
  color: #20dbc2;
  opacity: 0.5;
}

.container {
  position: relative;
  width: 100%;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
}

.container::before {
  content: '';
  position: absolute;
  height: 2000px;
  width: 2000px;
  top: -10%;
  right: 48%;
  transform: translateY(-50%);
  background-image: linear-gradient(-45deg, #20dbc2 0%, #00bfa6 100%);
  transition: 1.8s ease-in-out;
  border-radius: 50%;
  z-index: 6;
}

.forms-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

form {
  display: flex;
  /*Distributes Flex-items along the Cross Axis */
  align-items: center;
  /*Distributes Flex-items along the Main Axis */
  justify-content: center;
  flex-direction: column;
  padding: 0 5rem;
  /*overflow: hidden;*/
  padding: 0rem 5rem;
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  transition: 0.2s 0.7s ease-in-out;
}

form.sign-in-form {
  z-index: 2;
}

form.sign-up-form {
  z-index: 1;
  opacity: 0;
}

.title {
  font-size: 2.2rem;
  color: #444;
  margin-bottom: 10px;
}

.input-field {
  // max-width: 380px;
  // width: 100%;

  // height: 55px;
  // background-color: #f0f0f0;
  // margin: 10px 0;
  // border-radius: 55px;
  // display: grid;
  // grid-template-columns: 15% 85%;
  // padding: 0 0.4rem;
  // position: relative;
  max-width: 380px;
  width: 100%;
  height: 55px;
  margin: 10px 0;
  position: relative;
}

.input-field i {
  text-align: center;
  line-height: 55px;
  color: #acacac;
  font-size: 1.1rem;
}

.input-field input {
  background: none;
  outline: none;
  border: none;
  line-height: 1;
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;
}

.input-field input::placeholder {
  color: #aaa;
  font-weight: 500;
}

.btn {
  width: 150px;
  height: 49px;
  border: none;
  outline: none;
  border-radius: 48px;
  cursor: pointer;
  background-color: #20dbc2;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 0;
  transition: all 0.5s;
}

.btn:hover {
  background-color: #00bfa6;
}

.social-text {
  padding: 0.7rem 0;
}

.social-media {
  display: flex;
  justify-content: center;
}

.social-icon {
  height: 46px;
  width: 46px;
  border: 1px solid #333;
  margin: 0 0.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: #333;
  font-size: 1.3rem;
  border-radius: 50%;
  transition: all 0.5s;
}

.social-icon:hover {
  color: #20dbc2;
  border-color: #00bfa6;
}

.signin-signup {
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  left: 75%;
  width: 50%;
  display: grid;
  grid-template-columns: 1fr;
  z-index: 5;
  transition: 1s 0.7s ease-in-out;
}

.panels-container {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
}

.panel {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
  text-align: center;
  z-index: 7;
}

.left-panel {
  pointer-events: all;
  padding: 3rem 17% 2rem 12%;
}

.right-panel {
  pointer-events: none;
  padding: 3rem 12% 2rem 17%;
}

.panel .content {
  color: #fff;
  transition: 0.9s 0.6s ease-in-out;
}

.panel h3 {
  font-weight: 600;
  line-height: 1;
  font-size: 1.5rem;
}

.panel p {
  font-size: 0.95rem;
  padding: 0.7rem 0;
}

.btn.transparent {
  margin: 0;
  background: none;
  border: 2px solid #fff;
  width: 130px;
  height: 41px;
  font-weight: 600;
  font-size: 0.8rem;
}

.image {
  transition: 1.1s 0.4s ease-in-out;
  width: 100%;
}

.right-panel .content,
.right-panel .image {
  transform: translateX(800px);
}

/* ANIMATION */

.container.sign-up-mode::before {
  transform: translate(100%, -50%);
  right: 52%;
}

.container.sign-up-mode .left-panel .image,
.container.sign-up-mode .left-panel .content {
  transform: translateX(-800px);
}

.container.sign-up-mode .left-panel {
  pointer-events: none;
}

.container.sign-up-mode .right-panel {
  pointer-events: all;
}

.container.sign-up-mode .right-panel .image,
.container.sign-up-mode .right-panel .content {
  transform: translateX(0%);
}

.container.sign-up-mode .signin-signup {
  left: 25%;
}

.container.sign-up-mode form.sign-in-form {
  z-index: 1;
  opacity: 0;
}

.container.sign-up-mode form.sign-up-form {
  z-index: 2;
  opacity: 1;
}
</style>
