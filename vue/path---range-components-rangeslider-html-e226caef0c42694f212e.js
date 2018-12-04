webpackJsonp([0x7473fa68da45],{440:function(n,e){n.exports={data:{markdownRemark:{html:'<p><img src="https://i.imgur.com/Q39TgCB.png" alt="Image to be displayed"></p>\n<p><code>RangeSlider</code> creates a numeric range slider UI component. It is used for granular filtering of numeric data.</p>\n<p>Example uses:</p>\n<ul>\n<li>filtering products from a price range in an e-commerce shopping experience.</li>\n<li>filtering flights from a range of departure and arrival times.</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>range-slider</span>  \n      <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ratings_count<span class="token punctuation">"</span></span>\n      <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>BookSensor<span class="token punctuation">"</span></span>\n      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>RangeSlider: Ratings<span class="token punctuation">"</span></span>\n      <span class="token attr-name">:range</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>{\n        start: 3000,\n        end: 50000\n      }<span class="token punctuation">\'</span></span>\n    <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>While <code>RangeSlider</code> only requires the above props to be used, it comes with many additional props for pre-setting default range values, setting the step value of the range slider, specifying labels for the range endpoints, whether to display histogram etc.</p>\n<h3 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage With All Props</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>range-slider</span> \n      <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ratings_count<span class="token punctuation">"</span></span>\n      <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>BookSensor<span class="token punctuation">"</span></span>\n      <span class="token attr-name">title</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>RangeSlider: Ratings<span class="token punctuation">"</span></span>\n      <span class="token attr-name">:range</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>{\n        start: 3000,\n        end: 50000\n      }<span class="token punctuation">\'</span></span>\n      <span class="token attr-name">:defaultSelected</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">\'</span>{\n        start: 1,\n        end: 5\n      }<span class="token punctuation">\'</span></span>\n      <span class="token attr-name">:showFilter</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>\n      <span class="token attr-name">:URLParams</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<ul>\n<li>\n<p><strong>componentId</strong> <code>String</code><br>\nunique identifier of the component, can be referenced in other components’ <code>react</code> prop.</p>\n</li>\n<li>\n<p><strong>dataField</strong> <code>String</code><br>\nDB data field to be mapped with the component’s UI view. The selected range creates a database query on this field.</p>\n</li>\n<li>\n<p><strong>range</strong> <code>Object</code>\nan object with <code>start</code> and <code>end</code> keys and corresponding numeric values denoting the minimum and maximum possible slider values.</p>\n</li>\n<li>\n<p><strong>title</strong> <code>String or JSX</code> [optional]<br>\ntitle of the component to be shown in the UI.</p>\n</li>\n<li>\n<p><strong>defaultSelected</strong> <code>Object</code> [optional]<br>\nan object with <code>start</code> and <code>end</code> keys and corresponding numeric values denoting the pre-selected range values.</p>\n</li>\n<li>\n<p><strong>showFilter</strong> <code>Boolean</code> [optional]<br>\nshow the selected item as a filter in the selected filters view. Defaults to <code>true</code>.</p>\n</li>\n<li>\n<p><strong>URLParams</strong> <code>Boolean</code> [optional]<br>\nenable creating a URL query string parameter based on the selected value of the list. This is useful for sharing URLs with the component state. Defaults to <code>false</code>.</p>\n</li>\n</ul>\n<h2 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h2>\n<p><code>RangeSlider</code> component supports <code>innerClass</code> prop with the following keys:    </p>\n<ul>\n<li><code>title</code></li>\n</ul>\n<p>Read more about it <a href="/reactive-manual/vue/theming/class.html">here</a>.</p>\n<h2 id="extending"><a href="#extending" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending</h2>\n<p><code>RangeSlider</code> component can be extended to</p>\n<ol>\n<li>customize the look and feel with <code>className</code>, <code>style</code>,</li>\n<li>update the underlying DB query with <code>customQuery</code>,</li>\n<li>connect with external interfaces using <code>beforeValueChange</code>, <code>valueChange</code> and <code>queryChange</code>.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>range<span class="token operator">-</span>slider\n  <span class="token operator">...</span>\n  className<span class="token operator">=</span><span class="token string">"custom-class"</span>\n  <span class="token punctuation">:</span>customQuery<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function(value, props) {\n      return {\n        match: {\n          data_field: "this is a test"\n        }\n      }\n    }\n  `</span></span>\n  <span class="token punctuation">:</span>beforeValueChange<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function(value) {\n      // called before the value is set\n      // returns a promise\n      return new Promise((resolve, reject) => {\n        // update state or component props\n        resolve()\n        // or reject()\n      })\n    }`</span></span>\n  @valueChange<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function(value) {\n      console.log("current value: ", value)\n      // set the state\n      // use the value with other js code\n    }`</span></span>\n  @queryChange<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function(prevQuery, nextQuery) {\n      // use the query with other js code\n      console.log(\'prevQuery\', prevQuery);\n      console.log(\'nextQuery\', nextQuery);\n    }`</span></span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<ul>\n<li><strong>className</strong> <code>String</code><br>\nCSS class to be injected on the component container.</li>\n<li><strong>customQuery</strong> <code>Function</code>\ntakes <strong>value</strong> and <strong>props</strong> as parameters and <strong>returns</strong> the data query to be applied to the component, as defined in Elasticsearch Query DSL.\n<code>Note:</code> customQuery is called on value changes in the <strong>RangeSlider</strong> component as long as the component is a part of <code>react</code> dependency of at least one other component.</li>\n<li><strong>beforeValueChange</strong> <code>Function</code><br>\nis a callback function which accepts component’s future <strong>value</strong> as a parameter and <strong>returns</strong> a promise. It is called everytime before a component’s value changes. The promise, if and when resolved, triggers the execution of the component’s query and if rejected, kills the query execution. This method can act as a gatekeeper for query execution, since it only executes the query after the provided promise has been resolved.</li>\n</ul>\n<h2 id="events"><a href="#events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Events</h2>\n<ul>\n<li>\n<p><strong>queryChange</strong><br>\nis an event which accepts component’s <strong>prevQuery</strong> and <strong>nextQuery</strong> as parameters. It is called everytime the component’s query changes. This event is handy in cases where you want to generate a side-effect whenever the component’s query would change.</p>\n</li>\n<li>\n<p><strong>valueChange</strong><br>\nis an event which accepts component’s current <strong>value</strong> as a parameter. It is called everytime the component’s value changes. This event is handy in cases where you want to generate a side-effect on value selection.For example: You want to show a pop-up modal with the valid discount coupon code when some range is selected in a “Discounted Price” RangeSlider.</p>\n</li>\n</ul>',frontmatter:{title:"RangeSlider",next:null,prev:null,nextTitle:null,prevTitle:null},fields:{path:"docs/range-components/RangeSlider.md",slug:"range-components/rangeslider.html"}}},pathContext:{slug:"range-components/rangeslider.html"}}}});
//# sourceMappingURL=path---range-components-rangeslider-html-e226caef0c42694f212e.js.map