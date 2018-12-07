import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import './Toast.scss'

const tpl = require('./Toast.htm')

@Component({ template: tpl, components: {} })
class Toast extends Vue {}

const show = (msg: String, duration: number = 1000) => {
  let node = new Toast({ data: () => ({ msg, duration }) })
  node.$mount()
  document.body.appendChild(node.$el)

  setTimeout(() => {
    node.$el.parentNode && node.$el.parentNode.removeChild(node.$el)
  }, duration)
}

export const JbToast = {
  show
}
