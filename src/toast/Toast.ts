import Vue from 'vue'
import { Component } from 'vue-property-decorator'
import './Toast.scss'

const tpl = require('./Toast.htm')

@Component({ template: tpl, components: {} })
class Toast extends Vue {}

const show = (opt: { msg: String; duration?: number }) => {
  let node = new Toast({ data: opt })
  node.$mount()
  document.body.appendChild(node.$el)

  setTimeout(() => {
    node.$el.parentNode && node.$el.parentNode.removeChild(node.$el)
  }, opt.duration || 1000)
}

export const JbToast = {
  show
}
