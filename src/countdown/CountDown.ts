import Vue from 'vue'
import { Component, Model, Prop, Watch } from 'vue-property-decorator'
import './CountDown.scss'
import moment, { Moment } from 'moment'

const tpl = require('./CountDown.htm')

@Component({ template: tpl, components: {} })
export class JbCountDown extends Vue {
  timer = null
  stopTime: Moment = null

  vm = {
    content: ''
  }

  @Prop() text: string
  @Prop() format: Function
  @Prop() target: Number

  @Watch('target')
  onTarget(n) {
    if (!n) return this.stop()
    this.start(n)
  }

  start(n: number) {
    this.stop()
    let stop = moment().add(n, 's')
    if (stop.valueOf() - moment().valueOf() < 999) return

    this.stopTime = stop
    this.timer = setInterval(() => {
      let val = this.stopTime.valueOf() - moment().valueOf()
      if (val < 999) {
        this.$emit('done')
        this.stop()
      } else {
        if (this.format) this.vm.content = this.format(val)
        this.vm.content = `${Math.floor(val / 1000)} 秒`
      }
    }, 1000)
  }

  stop() {
    this.vm.content = ''
    this.stopTime = null
    if (this.timer) {
      clearInterval(this.timer)
      this.timer = null
    }
  }

  onClick() {
    if (!this.timer) this.$emit('click')
  }
}
