import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme:      {
        themes: {
        light: {
        primary: '#1976D2',
        secondary: '#2196F3',
        accent: '#03a9f4',
        error: '#FF7202',
        warning: '#9c27b0',
        info: '#ffc107',
        success: '#8bc34a'
        },
        },
    },
    icons: {
        iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },


});
