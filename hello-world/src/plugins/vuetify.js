import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#E0E0E0', // #E53935
    secondary:'#80CBC4', // #FFCDD2
    info: '#ffaa2c',
    error: '#f83e70' // #3F51B5
}})
