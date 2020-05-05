import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme:      {
        primary: '#3f51b5',
        secondary: '#2196f3',
        accent: '#03a9f4',
        error: '#f44336',
        warning: '#9c27b0',
        info: '#ffc107',
        success: '#8bc34a'
    },
    icons: {
        iconfont: 'mdiSvg', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
    },


});
