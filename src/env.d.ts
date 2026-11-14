/// <reference types="vite/client" />

declare const __RESUME_AVAILABLE__: boolean

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}
