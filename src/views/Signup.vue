<template>
<a-form 
:model="formState" 
:rules="rules" 
:label-col="{ span: 2 }"
autocomplete="off"
:wrapper-col="{ span: 2 }"
>
	<a-form-item
        label="手机号" name="phone" prop="phone"
        :wrapper-col="{ offset: 4, span: 4 }"
      >
      <a-input v-model:value="formState.phone"/>
    </a-form-item>
    <a-form-item
        label="邮箱" name="email" prop="email"
        :wrapper-col="{ offset: 4, span: 4 }"
      >
      <a-input v-model:value="formState.email"/>
    </a-form-item>
    <a-form-item :wrapper-col="{ offset: 4, span: 4 }">
      <a-button type="primary" html-type="submit">提交</a-button>
    </a-form-item>
</a-form>
</template>
<script lang="ts">
import { defineComponent,reactive,toRefs } from "vue";
import { Form } from 'ant-design-vue';
import type { Rule } from 'ant-design-vue/es/form';

const emailReg = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(.[a-zA-Z0-9_-]+)+$/;
const reg_tel = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;

interface FormState {
  phone: string;
  email: string;
}

export default defineComponent({
    name: "ValidateInput",
    setup(props,context) {
        const formItemContext = Form.useInjectFormItemContext();
        const handlePhone = (rule: Rule, value: string) => {
            console.log("value",value)
            if(!value){
               return Promise.reject("手机号不能为空")
            }
            else if (!reg_tel.test(value)) {
                return Promise.reject("请正确填写您的手机号码！")
            } else {
                return Promise.resolve();
            }
        }
        const handleEmail = (rule: Rule, value: string) => {
            console.log("value",value)
            if(!value){
               return Promise.reject("邮箱不能为空")
            }
            else if (!emailReg.test(value)) {
                return Promise.reject("请填写正确的邮箱地址")
            } else {
                return Promise.resolve();
            }
        }
        const data = reactive({
            formState:{ 
                phone: '',
                email: '',
            },
            rules:{
                phone:[
                    { validator: handlePhone,trigger:'blur' }
                ],
                email:[
                    {validator: handleEmail,trigger:'blur' }
                ]
            }
            
        });
        
        
        return {
            ...toRefs(data)
        }
    },
   

});

</script>