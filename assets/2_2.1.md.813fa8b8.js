import{_ as s,c as n,o as a,a as l}from"./app.80810813.js";const y=JSON.parse('{"title":"数组","description":"","frontmatter":{},"headers":[{"level":2,"title":"2.1 数组去重","slug":"_2-1-数组去重","link":"#_2-1-数组去重","children":[{"level":3,"title":"2.1.1 new Set()","slug":"_2-1-1-new-set","link":"#_2-1-1-new-set","children":[]},{"level":3,"title":"2.1.2 some()+循环去重","slug":"_2-1-2-some-循环去重","link":"#_2-1-2-some-循环去重","children":[]},{"level":3,"title":"2.1.3 双重for循环去重","slug":"_2-1-3-双重for循环去重","link":"#_2-1-3-双重for循环去重","children":[]},{"level":3,"title":"2.1.4 hasOwnProperty()方法去重","slug":"_2-1-4-hasownproperty-方法去重","link":"#_2-1-4-hasownproperty-方法去重","children":[]},{"level":3,"title":"2.1.5 利用filter()+indexOf()","slug":"_2-1-5-利用filter-indexof","link":"#_2-1-5-利用filter-indexof","children":[]}]},{"level":2,"title":"2.2 删除排序数组中的重复项","slug":"_2-2-删除排序数组中的重复项","link":"#_2-2-删除排序数组中的重复项","children":[{"level":3,"title":"2.2.1 双指针法","slug":"_2-2-1-双指针法","link":"#_2-2-1-双指针法","children":[]},{"level":3,"title":"2.2.2 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。","slug":"_2-2-2-给你一个整数数组-nums-。如果任一值在数组中出现-至少两次-返回-true-如果数组中每个元素互不相同-返回-false-。","link":"#_2-2-2-给你一个整数数组-nums-。如果任一值在数组中出现-至少两次-返回-true-如果数组中每个元素互不相同-返回-false-。","children":[]},{"level":3,"title":"2.2.2 只出现一次的数字","slug":"_2-2-2-只出现一次的数字","link":"#_2-2-2-只出现一次的数字","children":[]},{"level":3,"title":"2.2.3 两个数组的交集 II","slug":"_2-2-3-两个数组的交集-ii","link":"#_2-2-3-两个数组的交集-ii","children":[]},{"level":3,"title":"2.2.4 加一","slug":"_2-2-4-加一","link":"#_2-2-4-加一","children":[]},{"level":3,"title":"2.2.5 移动零","slug":"_2-2-5-移动零","link":"#_2-2-5-移动零","children":[]},{"level":3,"title":"2.2.6 两数之和","slug":"_2-2-6-两数之和","link":"#_2-2-6-两数之和","children":[]}]}],"relativePath":"2/2.1.md"}'),e={name:"2/2.1.md"},p=l(`<h1 id="数组" tabindex="-1">数组 <a class="header-anchor" href="#数组" aria-hidden="true">#</a></h1><h2 id="_2-1-数组去重" tabindex="-1">2.1 数组去重 <a class="header-anchor" href="#_2-1-数组去重" aria-hidden="true">#</a></h2><h3 id="_2-1-1-new-set" tabindex="-1">2.1.1 new Set() <a class="header-anchor" href="#_2-1-1-new-set" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> let arr = [1,2,2,1,3,4,3,null,null,false,false]</span></span>
<span class="line"><span style="color:#A6ACCD;"> let arr1 = [...new Set(arr)]</span></span>
<span class="line"><span style="color:#A6ACCD;"> let arr2 = Array.from(new Set(arr))</span></span>
<span class="line"><span style="color:#A6ACCD;"> console.log(arr1) // [1, 2, 3, 4, null, false]</span></span>
<span class="line"><span style="color:#A6ACCD;"> console.log(arr2) // [1, 2, 3, 4, null, false]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-1-2-some-循环去重" tabindex="-1">2.1.2 some()+循环去重 <a class="header-anchor" href="#_2-1-2-some-循环去重" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">function distinct(list) {</span></span>
<span class="line"><span style="color:#A6ACCD;"> let result = [list[0]];// 用于承接没有重复的数据，初始时将原始数组的第一个值赋给它。</span></span>
<span class="line"><span style="color:#A6ACCD;"> for (let i = 1; i &lt; list.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">   // 判断结果数组中是否存在一样的值，若果没有的话则将数据存入结果数组中。</span></span>
<span class="line"><span style="color:#A6ACCD;">   if (!(result.some(val =&gt; list[i] === val))) {</span></span>
<span class="line"><span style="color:#A6ACCD;">     result.push(list[i]);</span></span>
<span class="line"><span style="color:#A6ACCD;">   }</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"> return result;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">let arr = [1, 1, &#39;a&#39;, &#39;a&#39;, true, true, false, false, null, &#39;&#39;, null, &#39;&#39;, undefined, undefined];</span></span>
<span class="line"><span style="color:#A6ACCD;">distinct(arr); // [ 1, &quot;a&quot;, true, false, null, &quot;&quot;, undefined ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-1-3-双重for循环去重" tabindex="-1">2.1.3 双重for循环去重 <a class="header-anchor" href="#_2-1-3-双重for循环去重" aria-hidden="true">#</a></h3><p>双重for循环，第一层循环确保数组中的每一项都能被比较，第二层循环确保被比较项后的每一项都能跟被比较项比较。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  function distinct2(list) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    for (let i = 0; i &lt; list.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      for (let j = i + 1; j &lt; list.length; j++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        // 后面数据的若跟前一项数据相同，则重复，需要去除。</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (list[i] === list[j]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">          list.splice(j, 1); // 去除后面的相同项</span></span>
<span class="line"><span style="color:#A6ACCD;">          j--;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return list;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  let arr = [1, 1, &#39;a&#39;, &#39;a&#39;, true, true, false, false, null, &#39;&#39;, null, &#39;&#39;, undefined, undefined];</span></span>
<span class="line"><span style="color:#A6ACCD;">  distinct2(arr); // [ 1, &quot;a&quot;, true, false, null, &quot;&quot;, undefined ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-1-4-hasownproperty-方法去重" tabindex="-1">2.1.4 hasOwnProperty()方法去重 <a class="header-anchor" href="#_2-1-4-hasownproperty-方法去重" aria-hidden="true">#</a></h3><p>hasOwnProperty() 方法用来检测一个属性是否是对象的自有属性，而不是从原型链继承的。如果该属性是自有属性，那么返回 true，否则返回 false。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  function unique(arr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  var obj = {}; // 用来记录数组中的数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  return arr.filter(function(item, index, arr){</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 如果记录对象中存在某个数据，则返回false过滤掉；否则obj进行记录并筛选出来</span></span>
<span class="line"><span style="color:#A6ACCD;">    return obj.hasOwnProperty(typeof item + item) ? false : (obj[typeof item + item] = true)</span></span>
<span class="line"><span style="color:#A6ACCD;">  })</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  let arr = [1,1,&#39;true&#39;,&#39;true&#39;,true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,&#39;NaN&#39;, 0, 0, &#39;a&#39;, &#39;a&#39;,{},{}];</span></span>
<span class="line"><span style="color:#A6ACCD;">  unique(arr) // [ 1, &quot;true&quot;, true, 15, false, undefined, null, NaN, &quot;NaN&quot;, 0, &#39;a&#39;, {}]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-1-5-利用filter-indexof" tabindex="-1">2.1.5 利用filter()+indexOf() <a class="header-anchor" href="#_2-1-5-利用filter-indexof" aria-hidden="true">#</a></h3><p>indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">  function unique(arr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return arr.filter(function(item, index, arr) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 从数组0位开始查，如果当前元素在原始数组中的第一个索引==当前索引值，说明它是第一次出现。</span></span>
<span class="line"><span style="color:#A6ACCD;">    return arr.indexOf(item, 0) === index;</span></span>
<span class="line"><span style="color:#A6ACCD;">  });</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  let list = [1, 1, &#39;a&#39;, &#39;a&#39;, true, true, false, false, null, &#39;&#39;, null, &#39;&#39;, undefined, undefined];</span></span>
<span class="line"><span style="color:#A6ACCD;">  unique(list); // [ 1, &quot;a&quot;, true, false, null, &quot;&quot;, undefined ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="_2-2-删除排序数组中的重复项" tabindex="-1">2.2 删除排序数组中的重复项 <a class="header-anchor" href="#_2-2-删除排序数组中的重复项" aria-hidden="true">#</a></h2><p>给你一个 升序排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。</p><p>由于在某些语言中不能改变数组的长度，所以必须将结果放在数组nums的第一部分。更规范地说，如果在删除重复项之后有 k 个元素，那么 nums 的前 k 个元素应该保存最终结果。</p><p>将最终结果插入 nums 的前 k 个位置后返回 k 。</p><p>不要使用额外的空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。</p><h3 id="_2-2-1-双指针法" tabindex="-1">2.2.1 双指针法 <a class="header-anchor" href="#_2-2-1-双指针法" aria-hidden="true">#</a></h3><p>分析: 题目要求,对给定的有序数组nums删除元素,在删除重复元素之后,每个元素只出现一次,并返回新的长度,上述操作必须通过原地修改数组的方法,使用O(1)的空见复杂度完成. 也就是题目要求我们不产生新数组,不使用暴力双重循环的前提下,在原数组的基础上去重.</p><p>由于给定的数组是有序的,因此对于任意i &lt; j,如果nums[ℹ] = nums[j] ,则任意k大于等于i,小于等于j,必有nums[i] = nums[k] = nums[j],即相等的元素在数组中的下标一定是联系的.利用数组有序的特点,可以通过双指针的方法删除重复元素.</p><p>步骤一 : 如果数组nums的长度为0,则数组不包含任何元素,因此返回0.</p><p>当数组nums的长度大于0时,数组中至少包含一个元素,在删除重复元素之后也至少剩下一个元素,因此nums[0]保持原状即可,从下标1开始删除重复元素.</p><p>定于两个指针fast和slow分别为快指针和慢指针,快指针表示便利数组到达的下标位置,慢指针表示下一个不同元素要填入的下标位置,初始时两个指针都指向下标1.</p><p>加入数组nums的长度为n.将快指针fast一次遍历从1到n-1的每个位置,对于每个位置,如果nums[fast] != nums[fast - 1]的每一个元素都不同且包含原数组中的每个不同的元素,因此新的长度即为slow,返回slow即可.</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">var removeDuplicates = function (nums) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let n = nums.length;</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(n ==0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return 0</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 当数组nums的长度大于0时,数组中至少包含一个元素,在删除重复元素之后也至少剩下一个元素,因此nums[0]保持原状即可,从下标1开始删除重复元素.</span></span>
<span class="line"><span style="color:#A6ACCD;">  let fast = 1;let slow = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 开始进行循环,以fast 小于n 作为循环条件</span></span>
<span class="line"><span style="color:#A6ACCD;">  while (fast &lt; n) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 快指针往前移动,慢指针作为数据存储的标志,当快指针与它前面的值进行对比 不相等的时候,此时的值是需要被保留的.所以对慢指针进行赋值.如果不需要保留,则只移动快指针.</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(nums[fast] !== nums[fast -1]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">       nums[slow] = nums[fast];</span></span>
<span class="line"><span style="color:#A6ACCD;">       slow++;</span></span>
<span class="line"><span style="color:#A6ACCD;">    } </span></span>
<span class="line"><span style="color:#A6ACCD;">      fast++;</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return slow; </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">var removeDuplicates = function (nums) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  let n = nums.length;</span></span>
<span class="line"><span style="color:#A6ACCD;">  let j =1;// 用j来缓存数据</span></span>
<span class="line"><span style="color:#A6ACCD;">  if(n ==0) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return 0</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // 开始进行循环,以fast 小于n 作为循环条件</span></span>
<span class="line"><span style="color:#A6ACCD;">  for(let i =0;i&lt;n;i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    // 把数组分成两部分0 - j j —— n</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(nums[i] !== nums[i - 1]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">       nums[j] = nums[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">       j++;</span></span>
<span class="line"><span style="color:#A6ACCD;">    } </span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  return j; </span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-2-2-给你一个整数数组-nums-。如果任一值在数组中出现-至少两次-返回-true-如果数组中每个元素互不相同-返回-false-。" tabindex="-1">2.2.2 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。 <a class="header-anchor" href="#_2-2-2-给你一个整数数组-nums-。如果任一值在数组中出现-至少两次-返回-true-如果数组中每个元素互不相同-返回-false-。" aria-hidden="true">#</a></h3><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {number[]} nums</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @return {boolean}</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">var containsDuplicate = function(nums) {</span></span>
<span class="line"><span style="color:#A6ACCD;"> let obj = {}</span></span>
<span class="line"><span style="color:#A6ACCD;"> for(let i=0;i&lt;nums.length;i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">     if(obj[nums[i]]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">         return true;</span></span>
<span class="line"><span style="color:#A6ACCD;">     } else {</span></span>
<span class="line"><span style="color:#A6ACCD;">         obj[nums[i]] = 1</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"> return false</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-2-2-只出现一次的数字" tabindex="-1">2.2.2 只出现一次的数字 <a class="header-anchor" href="#_2-2-2-只出现一次的数字" aria-hidden="true">#</a></h3><p>给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。</p><p>你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {number[]} nums</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @return {number}</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">var singleNumber = function(nums) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    for(let i=0;i&lt;nums.length;i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return nums[i]</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-2-3-两个数组的交集-ii" tabindex="-1">2.2.3 两个数组的交集 II <a class="header-anchor" href="#_2-2-3-两个数组的交集-ii" aria-hidden="true">#</a></h3><p>给你两个整数数组 nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {number[]} nums1</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {number[]} nums2</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @return {number[]}</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">var intersect = function(nums1, nums2) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let arr = []</span></span>
<span class="line"><span style="color:#A6ACCD;"> for(let i=0;i&lt;nums1.length;i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">     if(nums2.includes(nums1[i])) {</span></span>
<span class="line"><span style="color:#A6ACCD;">         arr.push(nums1[i])</span></span>
<span class="line"><span style="color:#A6ACCD;">         nums2.splice(nums2.indexOf(nums1[i]),1)</span></span>
<span class="line"><span style="color:#A6ACCD;">     }</span></span>
<span class="line"><span style="color:#A6ACCD;"> }</span></span>
<span class="line"><span style="color:#A6ACCD;"> return arr;</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-2-4-加一" tabindex="-1">2.2.4 加一 <a class="header-anchor" href="#_2-2-4-加一" aria-hidden="true">#</a></h3><p>给定一个由 整数 组成的 非空 数组所表示的非负整数，在该数的基础上加一。</p><p>最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。</p><p>你可以假设除了整数 0 之外，这个整数不会以零开头。</p><p>方法一：找出最长的后缀 999 思路</p><p>当我们对数组 digits\\textit{digits}digits 加一时，我们只需要关注 digits\\textit{digits}digits 的末尾出现了多少个 999 即可。我们可以考虑如下的三种情况：</p><p>如果 digits\\textit{digits}digits 的末尾没有 999，例如 [1,2,3][1, 2, 3][1,2,3]，那么我们直接将末尾的数加一，得到 [1,2,4][1, 2, 4][1,2,4] 并返回；</p><p>如果 digits\\textit{digits}digits 的末尾有若干个 999，例如 [1,2,3,9,9][1, 2, 3, 9, 9][1,2,3,9,9]，那么我们只需要找出从末尾开始的第一个不为 999 的元素，即 333，将该元素加一，得到 [1,2,4,9,9][1, 2, 4, 9, 9][1,2,4,9,9]。随后将末尾的 999 全部置零，得到 [1,2,4,0,0][1, 2, 4, 0, 0][1,2,4,0,0] 并返回。</p><p>如果 digits\\textit{digits}digits 的所有元素都是 999，例如 [9,9,9,9,9][9, 9, 9, 9, 9][9,9,9,9,9]，那么答案为 [1,0,0,0,0,0][1, 0, 0, 0, 0, 0][1,0,0,0,0,0]。我们只需要构造一个长度比 digits\\textit{digits}digits 多 111 的新数组，将首元素置为 111，其余元素置为 000 即可。</p><p>算法</p><p>们只需要对数组 digits\\textit{digits}digits 进行一次逆序遍历，找出第一个不为 999 的元素，将其加一并将后续所有元素置零即可。如果 digits\\textit{digits}digits 中所有的元素均为 999，那么对应着「思路」部分的第三种情况，我们需要返回一个新的数组。 。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">var plusOne = function (digits) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  const n = digits.length;</span></span>
<span class="line"><span style="color:#A6ACCD;">  for(let i = n - 1;i&gt;=0;--i) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if(digits[i] !==9) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      ++digits[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">      for(let j = i+1;j&lt;n;++j) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        digits[j] = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">      }</span></span>
<span class="line"><span style="color:#A6ACCD;">      return digits;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  // digits 中所有的元素均为 9</span></span>
<span class="line"><span style="color:#A6ACCD;">  const ans = new Array(n + 1).fill(0);</span></span>
<span class="line"><span style="color:#A6ACCD;">  ans[0] = 1;</span></span>
<span class="line"><span style="color:#A6ACCD;">  return ans;</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-2-5-移动零" tabindex="-1">2.2.5 移动零 <a class="header-anchor" href="#_2-2-5-移动零" aria-hidden="true">#</a></h3><p>给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。</p><p>请注意 ，必须在不复制数组的情况下原地对数组进行操作。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {number[]} nums</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @return {void} Do not return anything, modify nums in-place instead.</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">var moveZeroes = function(nums) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    let n = nums.length</span></span>
<span class="line"><span style="color:#A6ACCD;">    for(let i=0;i&lt;n;i++){</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(nums[i]===0){</span></span>
<span class="line"><span style="color:#A6ACCD;">            nums.splice(i,1)</span></span>
<span class="line"><span style="color:#A6ACCD;">            console.log(nums)</span></span>
<span class="line"><span style="color:#A6ACCD;">            nums.push(0) </span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    return nums</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"> var moveZeroes = function(nums) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if (nums == null || nums.length == 0)</span></span>
<span class="line"><span style="color:#A6ACCD;">            return;</span></span>
<span class="line"><span style="color:#A6ACCD;">        let index = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">        //一次遍历，把非零的都往前挪</span></span>
<span class="line"><span style="color:#A6ACCD;">        for (let i = 0; i &lt; nums.length; i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            if (nums[i] != 0){</span></span>
<span class="line"><span style="color:#A6ACCD;">                nums[index++] = nums[i];</span></span>
<span class="line"><span style="color:#A6ACCD;">            }</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">        //后面的都是0,</span></span>
<span class="line"><span style="color:#A6ACCD;">        while (index &lt; nums.length) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            nums[index++] = 0;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="_2-2-6-两数之和" tabindex="-1">2.2.6 两数之和 <a class="header-anchor" href="#_2-2-6-两数之和" aria-hidden="true">#</a></h3><p>给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。</p><p>你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。</p><p>你可以按任意顺序返回答案。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">/**</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {number[]} nums</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @param {number} target</span></span>
<span class="line"><span style="color:#A6ACCD;"> * @return {number[]}</span></span>
<span class="line"><span style="color:#A6ACCD;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;">var twoSum = function(nums, target) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    for(let i=0;i&lt;nums.length;i++) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        if(nums.includes(target - nums[i]) &amp;&amp; nums.indexOf(target - nums[i]) !==i) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            return [i,nums.indexOf(target - nums[i])]</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,60),t=[p];function i(o,c,r,C,A,u){return a(),n("div",null,t)}const D=s(e,[["render",i]]);export{y as __pageData,D as default};
