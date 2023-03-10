import{_ as s,c as n,o as a,d as l}from"./app.293c0c58.js";const e="/front-end/assets/deep.73eb8103.png",p="/front-end/assets/deepresult.144155f0.png",h=JSON.parse('{"title":"1.1 数组","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.1.1 什么是数组","slug":"_1-1-1-什么是数组","link":"#_1-1-1-什么是数组","children":[]},{"level":2,"title":"1.1.2 创建数组","slug":"_1-1-2-创建数组","link":"#_1-1-2-创建数组","children":[]},{"level":2,"title":"1.1.3 读写数组","slug":"_1-1-3-读写数组","link":"#_1-1-3-读写数组","children":[]},{"level":2,"title":"1.1.4 由字符串生成数组","slug":"_1-1-4-由字符串生成数组","link":"#_1-1-4-由字符串生成数组","children":[]},{"level":2,"title":"1.1.5 对数组的整体性操作","slug":"_1-1-5-对数组的整体性操作","link":"#_1-1-5-对数组的整体性操作","children":[]},{"level":2,"title":"1.1.5 存取函数","slug":"_1-1-5-存取函数","link":"#_1-1-5-存取函数","children":[{"level":3,"title":"1.1.5.1 查找元素","slug":"_1-1-5-1-查找元素","link":"#_1-1-5-1-查找元素","children":[]},{"level":3,"title":"1.1.5.2 数组的字符串表示","slug":"_1-1-5-2-数组的字符串表示","link":"#_1-1-5-2-数组的字符串表示","children":[]},{"level":3,"title":"1.1.5.3 由已有数组创建新数组","slug":"_1-1-5-3-由已有数组创建新数组","link":"#_1-1-5-3-由已有数组创建新数组","children":[]}]},{"level":2,"title":"1.1.6 可变函数","slug":"_1-1-6-可变函数","link":"#_1-1-6-可变函数","children":[{"level":3,"title":"1.1.6.1 为数组添加元素","slug":"_1-1-6-1-为数组添加元素","link":"#_1-1-6-1-为数组添加元素","children":[]},{"level":3,"title":"1.1.6.2 从数组删除元素","slug":"_1-1-6-2-从数组删除元素","link":"#_1-1-6-2-从数组删除元素","children":[]},{"level":3,"title":"1.1.6.7 为数组排序","slug":"_1-1-6-7-为数组排序","link":"#_1-1-6-7-为数组排序","children":[]},{"level":3,"title":"1.1.6 迭代器方法","slug":"_1-1-6-迭代器方法","link":"#_1-1-6-迭代器方法","children":[{"level":4,"title":"1.1.6.1 不生成新数组的迭代器方法","slug":"_1-1-6-1-不生成新数组的迭代器方法","link":"#_1-1-6-1-不生成新数组的迭代器方法","children":[]},{"level":4,"title":"1.1.6.2 生成新数组的迭代器方法","slug":"_1-1-6-2-生成新数组的迭代器方法","link":"#_1-1-6-2-生成新数组的迭代器方法","children":[]}]},{"level":3,"title":"1.1.7 二维和多维数组","slug":"_1-1-7-二维和多维数组","link":"#_1-1-7-二维和多维数组","children":[{"level":4,"title":"1.1.7.1 创建二维数组","slug":"_1-1-7-1-创建二维数组","link":"#_1-1-7-1-创建二维数组","children":[]},{"level":4,"title":"1.1.7.2 处理二维数组","slug":"_1-1-7-2-处理二维数组","link":"#_1-1-7-2-处理二维数组","children":[]},{"level":4,"title":"1.1.7.2 参差不齐的数组","slug":"_1-1-7-2-参差不齐的数组","link":"#_1-1-7-2-参差不齐的数组","children":[]}]},{"level":3,"title":"1.1.8 对象数组","slug":"_1-1-8-对象数组","link":"#_1-1-8-对象数组","children":[]},{"level":3,"title":"1.1.9 对象中的数组","slug":"_1-1-9-对象中的数组","link":"#_1-1-9-对象中的数组","children":[]}]}],"relativePath":"1/1.1.md"}'),o={name:"1/1.1.md"},t=l(`<h1 id="_1-1-数组" tabindex="-1">1.1 数组 <a class="header-anchor" href="#_1-1-数组" aria-hidden="true">#</a></h1><h2 id="_1-1-1-什么是数组" tabindex="-1">1.1.1 什么是数组 <a class="header-anchor" href="#_1-1-1-什么是数组" aria-hidden="true">#</a></h2><p>数组的标准定义是: 一个存储元素的线性集合(collection),元素可以通过索引来任意存取,索引通常是数字,用来计算元素之间存储位置的偏移量.几乎所有的编程语言都有类似的数据结构.然后javascript的数组却略有不同.</p><p>javascript是一种特殊的对象,用来表示偏移量的索引是该对象的属性,索引可能是证书.这些数字索引在内部被转化为字符串类型,这是因为javascript对象的属性名必须是字符串.数组在javascript中只是一种特殊的对象,所以效率不如其他语音的数组高.</p><p>javascript中的数组非常灵活.单是创建数组和存取元素的方法就好几种,也可以通过不同方式对数组进行查找和排序.</p><h2 id="_1-1-2-创建数组" tabindex="-1">1.1.2 创建数组 <a class="header-anchor" href="#_1-1-2-创建数组" aria-hidden="true">#</a></h2><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let  numbers1 = []</span></span>
<span class="line"><span style="color:#A6ACCD;">我们这样声明了一个长度为0的空数组.可以通过调用内建的length属性来验证这一点.</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(numbers1.length)  // 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let numbers2 = [1,2,3,4,5]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(numbers2.length)  // 5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let numbers3 = new Array();</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(numbers3.length)  // 0</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let numbers4 = new Array(1,2,3,4,5);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(numbers4.length)  // 5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let numbers5 = new Array(10);</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(numbers5.length)  // 10</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(numbers5) </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">javascript undefined 表示空属性,而不是null ,在代码中初始化定义undefined 为参数,</span></span>
<span class="line"><span style="color:#A6ACCD;">可以让参数在没有重新赋值的时候,不传递.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">像这样只传入一个参数,用来制定数组的长度.javascript是一种脚本语言,数组中的元素不必是同一种数据类型,</span></span>
<span class="line"><span style="color:#A6ACCD;">这一点和很多编程语言不同.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let objects = [1,‘Joe&#39;,true,null];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">我们可以使用Arrary.isArray()来判断一个对象是否是数组.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">一般我们认为使用字面量的方式创建数组 效率更高 ([])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_1-1-3-读写数组" tabindex="-1">1.1.3 读写数组 <a class="header-anchor" href="#_1-1-3-读写数组" aria-hidden="true">#</a></h2><p>1.循环赋值.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> let nums = []</span></span>
<span class="line"><span style="color:#A6ACCD;"> for(let i =0;i&lt;100;++i) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   nums[i] = i+1;</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><ol start="2"><li>使用[]操作符读取数组中的元素</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let numbers = [1,2,3,4,5]</span></span>
<span class="line"><span style="color:#A6ACCD;">var sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4] </span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(sum) // 15 </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">当数量过多的时候,一个个取数据就会很复杂,此时我们应该使用for循环来进行,求和.</span></span>
<span class="line"><span style="color:#A6ACCD;">function sums (numbers) {</span></span>
<span class="line"><span style="color:#A6ACCD;"> let sum = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;"> for(let i=0;i&lt;numbers.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   sum += numbers[i]</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"> return sum;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">javascript 的数组长度是可以任意增长的,</span></span>
<span class="line"><span style="color:#A6ACCD;">并不需要单独扩容.超出其创建时的指定长度,会自动根据实际情况进行改变.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_1-1-4-由字符串生成数组" tabindex="-1">1.1.4 由字符串生成数组 <a class="header-anchor" href="#_1-1-4-由字符串生成数组" aria-hidden="true">#</a></h2><p>调用字符串对象的split()方法也可以生成数组,也就是我们通常说的字符串转数组.该方法通过一些常见的分隔符,比如分割单词的空格,将一个字符串分成几部分,并将每部分作为一个元素保存于一个新建的数组中.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  let sentence = &quot;my name is xiaoyu.bi &quot;;</span></span>
<span class="line"><span style="color:#A6ACCD;">  let wordsArray = sentence.split(&#39; &#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(wordsArray) // [&#39;my&#39;, &#39;name&#39;, &#39;is&#39;, &#39;xiaoyu.bi&#39;, &#39;&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">  要注意我们是以空字符来作为字符串分割数据的依据的.</span></span>
<span class="line"><span style="color:#A6ACCD;">  所以变量sentence末尾的空格会单独的成为一个数组元素.</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_1-1-5-对数组的整体性操作" tabindex="-1">1.1.5 对数组的整体性操作 <a class="header-anchor" href="#_1-1-5-对数组的整体性操作" aria-hidden="true">#</a></h2><ol><li>整体赋值</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> let nums = [];</span></span>
<span class="line"><span style="color:#A6ACCD;"> for(let i =0;i&lt;10;++i) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  nums[i] = i+1;</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"> let sameNums = nums</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>数组在javascript 里是引用类型,整体赋值,引用并不会改变,当我们修改新的数组的时候,旧的数组值也会跟着改变,这很多时候并不符合我们的实际需求.所以这里我们涉及到一个新的问题,那就是数组的深拷贝和浅拷贝.</p><p>在讲深拷贝和浅拷贝之前,我们首先来看一下javascript 的数据类型.</p><p>基本数据类型: number，string，boolean，null，undefined，symbol,据说ES10 里还新增了BigInt(任意精度整数) 引用类型: Object</p><p><strong>浅拷贝</strong></p><p>基本数据类型是存储在栈里面的,当我们进行赋值的时候,会重新开辟空间,例如:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let a = 5;</span></span>
<span class="line"><span style="color:#A6ACCD;">let b = a;</span></span>
<span class="line"><span style="color:#A6ACCD;">b = 3;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(b) // 3</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(a) // 5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>栈内存</strong> |name|val| |:---|:---😐---😐 |a|5| |b|3|</p><p><strong>深拷贝</strong> 只有引用类型才能有深拷贝,Object (Array ,object)</p><p>引用类型是把地址存在栈里,而把值存在堆里的.当我门进行赋值的时候,浅拷贝只拷贝了地址,开辟了栈里面的空间,而堆的空间并没有重新开劈,所以我们直接赋值,会影响原来的值,大多数情况下,我们进行数据拷贝,是为了保留原来的值的.所以,我们下面来看一下,到底如何进行深拷贝.</p><ol><li>递归</li></ol><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a:1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  b:[1,2,3],</span></span>
<span class="line"><span style="color:#A6ACCD;">  c:null,</span></span>
<span class="line"><span style="color:#A6ACCD;">  d:function deepa() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(111)</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  e:&#39;122&#39;,</span></span>
<span class="line"><span style="color:#A6ACCD;">  f:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    a:1</span></span>
<span class="line"><span style="color:#A6ACCD;">  },</span></span>
<span class="line"><span style="color:#A6ACCD;">  t: undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">function deepClone (obj) {</span></span>
<span class="line"><span style="color:#A6ACCD;"> let deepObj = Array.isArray(obj) ? []:{} // 判断传入的值是对象还是数组 声明对应类型的变量 用于存储</span></span>
<span class="line"><span style="color:#A6ACCD;"> if(obj &amp;&amp; typeof obj === &quot;object&quot;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 说明是对象 我们用for in进行循环</span></span>
<span class="line"><span style="color:#A6ACCD;">  for(let key in obj) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // hasOwnProperty(propertyName)方法 是用来检测属性是否为对象的自有属性，如果是，返回true，否者false; 参数propertyName指要检测的属性名；</span></span>
<span class="line"><span style="color:#A6ACCD;">    console.log(key +&#39;----&#39; +obj.hasOwnProperty(key))</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(obj.hasOwnProperty(key)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      // 判断obj的每一项是不是对象,如果是就递归进行拷贝</span></span>
<span class="line"><span style="color:#A6ACCD;">      if(obj[key]&amp;&amp; typeof obj[key] ===&#39;object&#39;) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        console.log(obj[&#39;c&#39;] +&#39;----&#39; +obj[&#39;c&#39;]&amp;&amp; typeof obj[&#39;c&#39;] ===&#39;object&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">        debugger</span></span>
<span class="line"><span style="color:#A6ACCD;">        deepObj[key] = deepClone(obj[key])</span></span>
<span class="line"><span style="color:#A6ACCD;">      } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">        deepObj[key] = obj[key]</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    } </span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">return deepObj;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>typeof</strong> typeof 用来做类型判断</p><p>1、typeof(表达式) ：对表达式做运算</p><p>2、typeof 变量名：对变量做运算。</p><p>type 的返回值有以下几种</p><table><thead><tr><th style="text-align:left;">原始类型</th><th style="text-align:left;">判断结果类型</th><th style="text-align:center;">表示的含义</th></tr></thead><tbody><tr><td style="text-align:left;">undefined</td><td style="text-align:left;">undefined</td><td style="text-align:center;">--未定义的变量或值</td></tr><tr><td style="text-align:left;">ture、false</td><td style="text-align:left;">boolean</td><td style="text-align:center;">--布尔类型的变量或值</td></tr><tr><td style="text-align:left;">&#39;&#39;,&#39;111&#39;</td><td style="text-align:left;">string</td><td style="text-align:center;">--字符串类型的变量或值</td></tr><tr><td style="text-align:left;">111,NaN</td><td style="text-align:left;">number</td><td style="text-align:center;">--数字类型的变量或值</td></tr><tr><td style="text-align:left;">null,{},[]</td><td style="text-align:left;">object</td><td style="text-align:center;">--对象类型的变量或值，或者null</td></tr><tr><td style="text-align:left;">var fn = function(){}</td><td style="text-align:left;">function</td><td style="text-align:center;">--函数类型的变量或值</td></tr></tbody></table><p>这样我们再回到上面的深拷贝代码,我们会发现还有两种情况,一种是null 还有function 的情况下,我们没有做判断.</p><p>打印结果：<img src="" alt=""><img src="`+e+'" alt="图片文本(可忽略)"></p><p>根据我们定义的拷贝对象,图中的c 是表示null的, 验证了null 的类型是object obj[key] &amp;&amp; typeof obj[key] ===&#39;object&#39; 并的表达式 是会转化为一个布尔值的,而null的布尔转化,是false 所以null是会直接拷贝的. 而函数 的类型是function 也是直接拷贝的.</p><p>拷贝结果：<img src="" alt=""><img src="'+p+`" alt="图片文本(可忽略)"></p><p><strong>Es6 扩展运算符</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">这种方式只能用于单层json对象，也就是对象中的每个value都是基本类型，没有嵌套。</span></span>
<span class="line"><span style="color:#A6ACCD;">let obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a:1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  c:&#39;111&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>Es6 Object.assign({},original)</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">这种方式只能用于单层json对象，也就是对象中的每个value都是基本类型，没有嵌套。</span></span>
<span class="line"><span style="color:#A6ACCD;">let obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a:1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  c:&#39;111&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>JSON.parse()</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let obj = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  a:1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  b:[1,3,4],</span></span>
<span class="line"><span style="color:#A6ACCD;">  c:{</span></span>
<span class="line"><span style="color:#A6ACCD;">    a:1</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">JSON.parse(JSON.stringify(obj))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p><strong>使用第三方库</strong></p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">lodash.clonedeep</span></span>
<span class="line"><span style="color:#A6ACCD;">angular.copy</span></span>
<span class="line"><span style="color:#A6ACCD;">jQuery.extend()</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_1-1-5-存取函数" tabindex="-1">1.1.5 存取函数 <a class="header-anchor" href="#_1-1-5-存取函数" aria-hidden="true">#</a></h2><p>Javascript 提供了一组迎来访问数组元素的函数,叫做存取函数,这些函数返回目标数组的某种变体.</p><h3 id="_1-1-5-1-查找元素" tabindex="-1">1.1.5.1 查找元素 <a class="header-anchor" href="#_1-1-5-1-查找元素" aria-hidden="true">#</a></h3><p>indexOf() 用来查找穿进来的参数在目标数组中是否存在,如果存在就返回该元素在数组中的索引,如果不包含,就返回-1.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">lastIndexOf() 该函数返回相同元素中最后一个元素的索引.如果不包含,就返回-1.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_1-1-5-2-数组的字符串表示" tabindex="-1">1.1.5.2 数组的字符串表示 <a class="header-anchor" href="#_1-1-5-2-数组的字符串表示" aria-hidden="true">#</a></h3><p>有两个方法可以讲数组转化为字符串,jion() 和toString() .这两个方法都返回一个包含数组所有元素的字符串,各元素之间用逗号分隔开.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let names = [&#39;D&#39;,&#39;fd&#39;,&#39;123&#39;,&#39;3443434&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">let namesStr = names.join();  // D,fd,123,3443434</span></span>
<span class="line"><span style="color:#A6ACCD;">join 默认是用逗号进行分割的. </span></span>
<span class="line"><span style="color:#A6ACCD;">如果不用逗号 用其他的进行分割 比如 names.join(&#39;&#39;) //Dfd1233443434</span></span>
<span class="line"><span style="color:#A6ACCD;">names.toString() // D,fd,123,3443434 toSting() 不能传递分割方式.</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_1-1-5-3-由已有数组创建新数组" tabindex="-1">1.1.5.3 由已有数组创建新数组 <a class="header-anchor" href="#_1-1-5-3-由已有数组创建新数组" aria-hidden="true">#</a></h3><p>concat() 和 splice()方法允许通过已由数组创建新数组.concat 方法可以合并多个数组. splice()截取数组创建一个新数组.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">let a = [1,2,3]</span></span>
<span class="line"><span style="color:#A6ACCD;">let b = [4,5,6]</span></span>
<span class="line"><span style="color:#A6ACCD;">let c = a.concat(b) //[1,2,3,4,5,6]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">array.splice(index,howmany,item1,.....,itemX)</span></span>
<span class="line"><span style="color:#A6ACCD;">index 必需。规定从何处添加/删除元素。</span></span>
<span class="line"><span style="color:#A6ACCD;">该参数是开始插入和（或）删除的数组元素的下标，必须是数字。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">howmany 可选。规定应该删除多少元素。必须是数字，但可以是 &quot;0&quot;。</span></span>
<span class="line"><span style="color:#A6ACCD;">如果未规定此参数，则删除从 index 开始到原数组结尾的所有元素。</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">返回值是一个数组 如果从 arrayObject 中删除了元素，则返回的是含有被删除的元素的数组。</span></span>
<span class="line"><span style="color:#A6ACCD;">let a = [1,&#39;w&#39;,3,&#39;e&#39;,&#39;d&#39;,&#39;we&#39;];</span></span>
<span class="line"><span style="color:#A6ACCD;">let b  = a.splice(2,3)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(b)</span></span>
<span class="line"><span style="color:#A6ACCD;">var c = [1,2,3,4]</span></span>
<span class="line"><span style="color:#A6ACCD;">let d = c.splice(2,0,11,22,33,2222)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(c) // [1, 2, 11, 22, 33, 2222, 3, 4]</span></span>
<span class="line"><span style="color:#A6ACCD;">从上面的例子我们可以看出来,splice第一个参数是开始的索引,第二个参数是0的时候,就表示截取0个,表示插入,在索引为2的地方插入后面的值.</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(d) // [3,4]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_1-1-6-可变函数" tabindex="-1">1.1.6 可变函数 <a class="header-anchor" href="#_1-1-6-可变函数" aria-hidden="true">#</a></h2><p>javascript拥有一组可变的函数,使用它们,可以不必引用数组中的某个元素,就能改变数组的内容.</p><h3 id="_1-1-6-1-为数组添加元素" tabindex="-1">1.1.6.1 为数组添加元素 <a class="header-anchor" href="#_1-1-6-1-为数组添加元素" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">1.push() 在数组末尾添加元素</span></span>
<span class="line"><span style="color:#A6ACCD;">var nums = [1,2,3,4]</span></span>
<span class="line"><span style="color:#A6ACCD;">nums.push(5)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(nums) //[1,2,3,4,5]</span></span>
<span class="line"><span style="color:#A6ACCD;">length方式添加</span></span>
<span class="line"><span style="color:#A6ACCD;">var nums = [1,2,3,4];</span></span>
<span class="line"><span style="color:#A6ACCD;">nums[nums.length] = 6;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(nums) // [1,2,3,4,6]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>2.unshift()</p><p>下面我手动往数组的第一位插入一个值.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  var nums = [1,2,3,4,5]</span></span>
<span class="line"><span style="color:#A6ACCD;">  var newnum = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">  var len = nums.length;</span></span>
<span class="line"><span style="color:#A6ACCD;">  for(var i = len;i &gt;= 0;--i) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  nums[i] = nums[i-1];</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(nums);</span></span>
<span class="line"><span style="color:#A6ACCD;">  nums[0] = newnum;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#A6ACCD;">  nums.unshift(newnum,3)</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(nums)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_1-1-6-2-从数组删除元素" tabindex="-1">1.1.6.2 从数组删除元素 <a class="header-anchor" href="#_1-1-6-2-从数组删除元素" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">var nums = [1,2,3,4,5];</span></span>
<span class="line"><span style="color:#A6ACCD;">nums.pop(); // 从后面删除一个元素</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(nums) // 1,2,3,4</span></span>
<span class="line"><span style="color:#A6ACCD;">nums.shift() // 从前面删除一个元素</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(nums) // 2,3,4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_1-1-6-7-为数组排序" tabindex="-1">1.1.6.7 为数组排序 <a class="header-anchor" href="#_1-1-6-7-为数组排序" aria-hidden="true">#</a></h3><p>reverse() 该方法将数组中元素的顺序进行翻转.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">var nums = [1,2,3,4,5];</span></span>
<span class="line"><span style="color:#A6ACCD;">nums.reverse()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(nums) // [5,4,3,2,1]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">对字符串进行排序,可以用sort()</span></span>
<span class="line"><span style="color:#A6ACCD;">var nums = [&#39;David&#39;,&#39;mike&#39;,&#39;cynthia&#39;,&#39;clauton&#39;,4,5];</span></span>
<span class="line"><span style="color:#A6ACCD;">nums.sort()</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(nums) // [4, 5, &#39;David&#39;, &#39;clauton&#39;, &#39;cynthia&#39;, &#39;mike&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>sort() 方法是按照字典顺序对元素进行排序的,因此它家定元素都是字符串类型,在上一个例子中,即使元素是数字类型,也被任务是字符串类型,为了让sort()方法也能排序比较大小,从而决定整个数组的顺序. 对于数组类型,该函数可以是一个简单的相减操作,从一个数字减去另一个数字.如果结果为负,那么被减数小于减数;如果结果为0,那么被减数与减数相等.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  function compare(num2,num2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return num1 - num2</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  var nums = [3,1,2,100,4,200];</span></span>
<span class="line"><span style="color:#A6ACCD;">  nums.sort(compare)</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(nums) // 1 2 3 4 100 200</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_1-1-6-迭代器方法" tabindex="-1">1.1.6 迭代器方法 <a class="header-anchor" href="#_1-1-6-迭代器方法" aria-hidden="true">#</a></h3><p>这些方法对数组中的每一个元素应用一个函数,可以返回一个值,一组值或者一个新数组.</p><h4 id="_1-1-6-1-不生成新数组的迭代器方法" tabindex="-1">1.1.6.1 不生成新数组的迭代器方法 <a class="header-anchor" href="#_1-1-6-1-不生成新数组的迭代器方法" aria-hidden="true">#</a></h4><p>1.forEach</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">function square (num) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(num,num * num)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var nums = [1,2,3,4,5,6,7,8,9,10]</span></span>
<span class="line"><span style="color:#A6ACCD;">nums.forEach(square)</span></span>
<span class="line"><span style="color:#A6ACCD;">1 1</span></span>
<span class="line"><span style="color:#A6ACCD;">VM217:2 2 4</span></span>
<span class="line"><span style="color:#A6ACCD;">VM217:2 3 9</span></span>
<span class="line"><span style="color:#A6ACCD;">VM217:2 4 16</span></span>
<span class="line"><span style="color:#A6ACCD;">VM217:2 5 25</span></span>
<span class="line"><span style="color:#A6ACCD;">VM217:2 6 36</span></span>
<span class="line"><span style="color:#A6ACCD;">VM217:2 7 49</span></span>
<span class="line"><span style="color:#A6ACCD;">VM217:2 8 64</span></span>
<span class="line"><span style="color:#A6ACCD;">VM217:2 9 81</span></span>
<span class="line"><span style="color:#A6ACCD;">VM217:2 10 100</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>2.every() 该方法接受一个返回值为布尔类型的函数,对数组中的每一个元素使用该函数.如果对于所有元素,该函数均返回true,则该方法返回true.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">function isEven (num) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return num % 2 === 0</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var nums = [2,3,4,6,7,8]</span></span>
<span class="line"><span style="color:#A6ACCD;">var even = nums.every(isEven)</span></span>
<span class="line"><span style="color:#A6ACCD;">if(even) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;偶数&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;奇数&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>3.some() 该方法也接受一个返回值为布尔值的函数,只要有一个元素使得该函数返回true 该方法就返回ture.一真为真.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">function isEven (num) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return num % 2 === 0</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var nums = [2,3,4,6,7,8]</span></span>
<span class="line"><span style="color:#A6ACCD;">var someEven = nums.some(isEven)</span></span>
<span class="line"><span style="color:#A6ACCD;">if(even) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;偶数&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">} else {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;奇数&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>4.reduce() 该方法也接受一个函数,返回一个值.该方法会从一个累加值开始,不断对累加增和数组中的后续调用该函数,知道数组中的最后一个元素,最后返回得到的累加值.下面这个例子展示了如何使用reduce() 方法为数组中的元素求和.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  function add (runningTotal,currentValue) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return runningTotal + currentValue</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  var nums = [2,3,4,6,7,8]</span></span>
<span class="line"><span style="color:#A6ACCD;">  var sum = nums.reduce(add)</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(sum)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>将数组中的元素连接成一个长的字符串.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  function concat (accumulaateding,item) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return accumulaateding + item;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  var words = [&#39;the &#39;,&#39;quick &#39;,&#39;brown &#39;,&#39;fox &#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">  var sum = words.reduce(concat)</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(sum)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="_1-1-6-2-生成新数组的迭代器方法" tabindex="-1">1.1.6.2 生成新数组的迭代器方法 <a class="header-anchor" href="#_1-1-6-2-生成新数组的迭代器方法" aria-hidden="true">#</a></h4><p>有两个迭代器方法可以生成新数组:map() 和filter() .map()和forEach()有点像,对数组中的每个元素使用某个函数.两者的区别是map()返回的一个新的数组,该数组的元素是对原油元素应用某和函数得到的结果.如下</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  function curve (grade) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return grade += 5;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  var grades = [77,65,81,92,83]</span></span>
<span class="line"><span style="color:#A6ACCD;">  var newgrades = grades.map(curve)</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(newgrades) //  [82, 70, 86, 97, 88]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  function first (word) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return word[0];</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  var words = [&#39;for&#39;,&#39;your&#39;,&#39;information&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">  var acronym = words.map(first)</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(acronym.join()) // f,y,i join默认参数是以逗号作为分割的.有toString() 效果相同.</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(acronym.join(&quot;&quot;)) // fyi</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>filter() 和every()类似,传入一个返回值作为布尔类型的函数.和every()方法不同的是,当对数组中的所有元素应用该函数,结果均为true时该方法并不返回true,而是返回一个新数组,该数组包含该函数结果为true的元素.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  function isEven (num) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return num % 2 == 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  function isOdd (num) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return num % 2 !=0;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">  var evens = nums.filter(isEven)</span></span>
<span class="line"><span style="color:#A6ACCD;">  var odds = nums.filter(isOdd)</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;even numbers&#39; +evens)</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(&#39;odds numbers&#39; +odds)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_1-1-7-二维和多维数组" tabindex="-1">1.1.7 二维和多维数组 <a class="header-anchor" href="#_1-1-7-二维和多维数组" aria-hidden="true">#</a></h3><h4 id="_1-1-7-1-创建二维数组" tabindex="-1">1.1.7.1 创建二维数组 <a class="header-anchor" href="#_1-1-7-1-创建二维数组" aria-hidden="true">#</a></h4><p>二维数组类似一种由行和列构成的数据表格.也就是说数组里套数组.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">Array.matrix = function (numrows,numcols,initial) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  var arr = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">  for(var i =0;i&lt;numrows;++i) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    var columns = [];</span></span>
<span class="line"><span style="color:#A6ACCD;">    for(var j =0;j&lt;numcols;++j) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      columns[j] = initial;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    arr[i] = columns;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return arr;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">var nums = Array.matrix(5,5,0)</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(nums)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h4 id="_1-1-7-2-处理二维数组" tabindex="-1">1.1.7.2 处理二维数组 <a class="header-anchor" href="#_1-1-7-2-处理二维数组" aria-hidden="true">#</a></h4><p>处理二维数组有两种最基本的方式,按列访问和按行访问.我门将使用前面创建的数组 grades为例.</p><h4 id="_1-1-7-2-参差不齐的数组" tabindex="-1">1.1.7.2 参差不齐的数组 <a class="header-anchor" href="#_1-1-7-2-参差不齐的数组" aria-hidden="true">#</a></h4><h3 id="_1-1-8-对象数组" tabindex="-1">1.1.8 对象数组 <a class="header-anchor" href="#_1-1-8-对象数组" aria-hidden="true">#</a></h3><h3 id="_1-1-9-对象中的数组" tabindex="-1">1.1.9 对象中的数组 <a class="header-anchor" href="#_1-1-9-对象中的数组" aria-hidden="true">#</a></h3>`,101),c=[t];function i(r,C,A,y,d,u){return a(),n("div",null,c)}const g=s(o,[["render",i]]);export{h as __pageData,g as default};
