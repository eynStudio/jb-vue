import Vue from "vue";
import { Component, Model, Prop, Watch } from "vue-property-decorator";
import "./Modal.scss";

const tpl = require("./Modal.htm");

@Component({ template: tpl, components: {} })
export class JbModal extends Vue {}
