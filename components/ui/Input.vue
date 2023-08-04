<template>
  <Field v-slot="{ field, errors }" :name="name" :label="label" :type="type">
    <o-field :class="rootClass" :variant="errors[0] ? 'danger' : ''" :message="errors[0] ? errors[0] : ''" :label="label">
      <o-input v-bind="field" :model-value="field.value" :type="type" :placeholder="placeholder" step="any" :variant="inputVariant" />
    </o-field>
  </Field>
</template>

<script setup lang="ts">
import { Field } from 'vee-validate'

type inputType = 'string' | 'number'

const { type, label, name, inputVariant, rootClass } = withDefaults(defineProps<{
  name: string
  label?: string
  type?: inputType
  inputVariant?: string
  placeholder?: string
  rootClass?: string

}>(), { type: 'string', inputVariant: 'primary' })
</script>
