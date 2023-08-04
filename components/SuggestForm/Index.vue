<template>
  <section class="form">
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="flex space-x-4 items-center pb-10">
        <h3 class="uppercase">
          Suggest Your own Integration
        </h3>
        <span class="bg-gray bg-gradient rounded-lg py-2 px-3 uppercase hover:opacity-80">close</span>
      </div>
      <ui-input
        root-class="pb-8"
        name="name"
        label="Integration name"
        placeholder="Type Web Service name here.."
      />
      <ui-input
        root-class="pb-14"
        name="triggers"
        label="Triggers that you wanna have:"
        placeholder="Type here triggers that you wanna use..."
      />
      <div class="flex justify-center">
        <o-button rounded root-class="!h-[16rem] w-[16rem]" native-type="submit">
          <h2>SUBMIT</h2>
        </o-button>
      </div>
    </Form>
  </section>
</template>

<script setup>
import { Form } from 'vee-validate'
import * as yup from 'yup'
import { serviceStore } from '@/store'
const schema = yup.object().shape({
  name: yup.string().required(),
  triggers: yup.string().required(),
})

const { suggest } = serviceStore()

async function onSubmit(values, actions) {
  try {
    await suggest(values)
    notifySuccess('Your suggest has been sent.')
  } catch (error) {
    if (error?.response?.status === 400) {
      actions.setErrors(error.data)
    }
    notifyError(error)
  }
}
</script>
