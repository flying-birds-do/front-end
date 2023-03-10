import{_ as s,c as n,o as a,a as e}from"./app.80810813.js";const p="/front-end/assets/create.fdfd4d0c.png",l="/front-end/assets/main.e9a43e6f.png",h=JSON.parse('{"title":"4.1 如何初始化一个vue3 项目","description":"","frontmatter":{},"headers":[{"level":4,"title":"pnpm","slug":"pnpm","link":"#pnpm","children":[]},{"level":3,"title":"初始化 项目 npm/pnpm init vue@latest","slug":"初始化-项目-npm-pnpm-init-vue-latest","link":"#初始化-项目-npm-pnpm-init-vue-latest","children":[]},{"level":3,"title":"项目启动","slug":"项目启动","link":"#项目启动","children":[]},{"level":3,"title":"vscode配置","slug":"vscode配置","link":"#vscode配置","children":[]},{"level":3,"title":"安装配置","slug":"安装配置","link":"#安装配置","children":[]},{"level":3,"title":"进行router配置","slug":"进行router配置","link":"#进行router配置","children":[]},{"level":3,"title":"按需导入","slug":"按需导入","link":"#按需导入","children":[]},{"level":3,"title":"Volar 支持","slug":"volar-支持","link":"#volar-支持","children":[]}],"relativePath":"4/4.1.md"}'),t={name:"4/4.1.md"},o=e(`<h1 id="_4-1-如何初始化一个vue3-项目" tabindex="-1">4.1 如何初始化一个vue3 项目 <a class="header-anchor" href="#_4-1-如何初始化一个vue3-项目" aria-hidden="true">#</a></h1><p>开始之前,我们先来了解一下vite,Vite本身与框架无关，是一套基于插件的项目工程架构，是新的一套对开发者比较友好的一套构建和开发的工具.</p><p>它的特点就是快，它不会随着项目的规模的变大而让你的开发过程变得卡顿。总的来说就是：Vite是一个开发构建工具，开发过程中它利用浏览器的native ES Module特性按需导入源码，预打包依赖。是为了开发者量身定做的一套开发工具。特点：启动快，更新快。</p><p>我们观察Vite工程项目的结构发现在根目录出现了一个index.html文件，这个文件有点相当于我们之前的webpack工程项目里html模版入口文件。其中最大的变化就是script标签引用是用ES6的原生模块化type=&quot;module&quot;进行引用，即是esmodule。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> &lt;script type=&quot;module&quot; src=&quot;/src/main.ts&quot;&gt;&lt;/script&gt; </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>初始化 ,node 需要安装最新稳定版.目前版本v18.14.1.node版本管理 mac可以使用n,windows使用nvm进行版本切换.</p><h4 id="pnpm" tabindex="-1">pnpm <a class="header-anchor" href="#pnpm" aria-hidden="true">#</a></h4><p>performant npm ，意味“高性能的 npm”。pnpm由npm/yarn衍生而来，解决了npm/yarn内部潜在的bug，极大的优化了性能，扩展了使用场景。被誉为“最先进的包管理工具” 二、特点：</p><p>速度快、节约磁盘空间、支持monorepo、安全性高</p><p>pnpm 相比较于 yarn/npm 这两个常用的包管理工具在性能上也有了极大的提升，根据目前官方提供的 benchmark 数据可以看出在一些综合场景下比 npm/yarn 快了大概两倍。</p><p>三、存储管理：</p><p>按内容寻址、采用symlink</p><p>四、依赖管理：</p><p>npm1、npm2采用递归管理，npm3、npm3+、yarn依赖扁平化管理消除依赖提升。</p><p>pnpm依赖策略：消除依赖提升、规范拓扑结构</p><p>五、安全 之前在使用 npm/yarn 的时候，由于 node_module 的扁平结构，如果 A 依赖 B， B 依赖 C，那么 A 当中是可以直接使用 C 的，但问题是 A 当中并没有声明 C 这个依赖。因此会出现这种非法访问的情况。 但 pnpm 自创了一套依赖管理方式，很好地解决了这个问题，保证了安全性。</p><p>六、安装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">npm i pnpm -g</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>六、安装：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">npm i pnpm -g</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>七、查看版本信息：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">pnpm -v</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>八、升级版本</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">pnpm add -g pnpm to update </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>九、设置源：</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">pnpm config get registry //查看源</span></span>
<span class="line"><span style="color:#A6ACCD;">pnpm config set registry https://registry.npmmirror.com //切换淘宝源 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>十 安装项目依赖</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">pnpm install</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>十一 运行项目</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">pnpm run dev </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="初始化-项目-npm-pnpm-init-vue-latest" tabindex="-1">初始化 项目 npm/pnpm init vue@latest <a class="header-anchor" href="#初始化-项目-npm-pnpm-init-vue-latest" aria-hidden="true">#</a></h3><p><img src="`+p+`" alt="create"></p><p>Project name 输入项目名称,如直接回车 会默认值,Add TypeScript 是否添加ts,Add JSX Support 是否添加jsx的支持,Add Vue Router for Single Page Application development? 是否添加单页应用路由.Add Pinia for state management? 是否添加状态管理插件,相当于vue2 里的vuex.Add Vitest for Unit Testing? 是否添加vitest测试,是vitest是官方提供的.Add an End-to-End Testing Solution? 是否添加端到端测试解决方案.Add ESLint for code quality? 是否添加eslint.Add Prettier for code formatting? 是否添加Prettier 用作代码格式化.</p><h3 id="项目启动" tabindex="-1">项目启动 <a class="header-anchor" href="#项目启动" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> cd &lt;your-project-name&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"> pnpm install</span></span>
<span class="line"><span style="color:#A6ACCD;"> pnpm run dev</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="vscode配置" tabindex="-1">vscode配置 <a class="header-anchor" href="#vscode配置" aria-hidden="true">#</a></h3><p>vscode 需要重新配置插件,还需要去掉之前常用的格式化插件, 使用 <a href="https://marketplace.visualstudio.com/items?itemName=Vue.volar" target="_blank" rel="noreferrer">Volar 扩展</a></p><h3 id="安装配置" tabindex="-1">安装配置 <a class="header-anchor" href="#安装配置" aria-hidden="true">#</a></h3><p>安装 vue-router、element-plus、scss</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> pnpm install vue-router</span></span>
<span class="line"><span style="color:#A6ACCD;"> pnpm install element-plus</span></span>
<span class="line"><span style="color:#A6ACCD;"> pnpm install sass</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>修改main.ts 文件</p><p><img src="`+l+`" alt="create"></p><h3 id="进行router配置" tabindex="-1">进行router配置 <a class="header-anchor" href="#进行router配置" aria-hidden="true">#</a></h3><p>在src目录下,新建router文件夹,下面新建index.ts文件, 在main.ts里蹈入路由文件,并绑定在app上.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">import { createRouter, createWebHistory } from &quot;vue-router&quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">const router = createRouter({</span></span>
<span class="line"><span style="color:#A6ACCD;"> history: createWebHistory(),</span></span>
<span class="line"><span style="color:#A6ACCD;"> routes: [</span></span>
<span class="line"><span style="color:#A6ACCD;">   { name: &#39;home&#39;, path: &#39;/&#39;, component: () =&gt; import(&#39;../views/HomePage.vue&#39;) },</span></span>
<span class="line"><span style="color:#A6ACCD;">   { name: &#39;test&#39;, path: &#39;/test&#39;, component: () =&gt; import(&#39;../views/TestPage.vue&#39;) },</span></span>
<span class="line"><span style="color:#A6ACCD;"> ]</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;">export default router</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>引入<a href="https://element-plus.gitee.io/zh-CN/guide/design.html" target="_blank" rel="noreferrer">elemet-plus</a> ,如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// main.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">import { createApp } from &#39;vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import ElementPlus from &#39;element-plus&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import &#39;element-plus/dist/index.css&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import App from &#39;./App.vue&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const app = createApp(App)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">app.use(ElementPlus)</span></span>
<span class="line"><span style="color:#A6ACCD;">app.mount(&#39;#app&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="按需导入" tabindex="-1">按需导入 <a class="header-anchor" href="#按需导入" aria-hidden="true">#</a></h3><p>需要使用额外的插件来导入要使用的组件。</p><p>首先你需要安装unplugin-vue-components 和 unplugin-auto-import这两款插件</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">npm install -D unplugin-vue-components unplugin-auto-import</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="volar-支持" tabindex="-1">Volar 支持 <a class="header-anchor" href="#volar-支持" aria-hidden="true">#</a></h3><p>如果您使用 Volar，请在 tsconfig.json 中通过 compilerOptions.type 指定全局组件类型。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// tsconfig.json</span></span>
<span class="line"><span style="color:#A6ACCD;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  &quot;compilerOptions&quot;: {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    &quot;types&quot;: [&quot;element-plus/global&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>然后把下列代码插入到你的 Vite 的配置文件中</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">// vite.config.ts</span></span>
<span class="line"><span style="color:#A6ACCD;">import { defineConfig } from &#39;vite&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import AutoImport from &#39;unplugin-auto-import/vite&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import Components from &#39;unplugin-vue-components/vite&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">import { ElementPlusResolver } from &#39;unplugin-vue-components/resolvers&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">export default defineConfig({</span></span>
<span class="line"><span style="color:#A6ACCD;">  // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">  plugins: [</span></span>
<span class="line"><span style="color:#A6ACCD;">    // ...</span></span>
<span class="line"><span style="color:#A6ACCD;">    AutoImport({</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolvers: [ElementPlusResolver()],</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">    Components({</span></span>
<span class="line"><span style="color:#A6ACCD;">      resolvers: [ElementPlusResolver()],</span></span>
<span class="line"><span style="color:#A6ACCD;">    }),</span></span>
<span class="line"><span style="color:#A6ACCD;">  ],</span></span>
<span class="line"><span style="color:#A6ACCD;">})</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,56),i=[o];function c(r,d,C,A,m,u){return a(),n("div",null,i)}const g=s(t,[["render",c]]);export{h as __pageData,g as default};
