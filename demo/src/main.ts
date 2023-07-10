import { Plugin, createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Snippet from './components/Snippet.vue';
import Title from './components/typography/Title.vue'
import Text from './components/typography/Text.vue'

// 加载yike-design-ui组件资源
import YikeDesignUI from '../../packages/yike-design-ui/src/index'

// 加载项目全局样式
import '@/style/main.less'


//highlight 的样式，依赖包，组件
import 'highlight.js/styles/atom-one-dark.css'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import hljsVuePlugin from '@highlightjs/vue-plugin'

hljs.registerLanguage('javascript', javascript)

const app = createApp(App)
app.component('Snippet', Snippet).component('yk-title', Title).component('yk-text', Text);
app.use(YikeDesignUI).use(router as Plugin).use(hljsVuePlugin as Plugin).mount('#app')