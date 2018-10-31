webpackJsonp([37162140274120],{432:function(n,a){n.exports={data:{markdownRemark:{html:'<p><img src="https://i.imgur.com/iY2csRm.png" alt="Image to be displayed"></p>\n<p><code>ReactiveList</code> creates a data-driven result list UI component. This list can reactively update itself based on changes in other components or changes in the database itself.</p>\n<p>Example uses:</p>\n<ul>\n<li>showing a feed of results based on the applied search criteria.</li>\n<li>streaming realtime feed updates based on applied criteria like in a newsfeed.</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<h3 id="basic-usage"><a href="#basic-usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Basic Usage</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>reactive-list</span>\n        <span class="token attr-name">:react</span><span class="token attr-value"><span class="token punctuation">=</span>`{</span>\n            <span class="token attr-name"><span class="token namespace">"and":</span></span> <span class="token attr-name">["CitySensor",</span> <span class="token attr-name">"SearchSensor"]</span>\n        <span class="token attr-name">}`</span>\n    <span class="token punctuation">></span></span>\n         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>onData<span class="token punctuation">"</span></span> <span class="token attr-name">scoped-slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>{ item }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            {{ item.title }}\n         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>reactive-list</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<h3 id="usage-with-all-props"><a href="#usage-with-all-props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage With All Props</h3>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>reactive-list</span>\n  <span class="token attr-name">componentId</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>SearchResult<span class="token punctuation">"</span></span>\n  <span class="token attr-name">dataField</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ratings<span class="token punctuation">"</span></span>\n  <span class="token attr-name">paginationAt</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bottom<span class="token punctuation">"</span></span>\n  <span class="token attr-name">loader</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Loading Results..<span class="token punctuation">"</span></span>\n  <span class="token attr-name">sortBy</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>desc<span class="token punctuation">"</span></span>\n  <span class="token attr-name">:stream</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>\n  <span class="token attr-name">:pagination</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>false<span class="token punctuation">"</span></span>\n  <span class="token attr-name">:pages</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>5<span class="token punctuation">"</span></span>\n  <span class="token attr-name">:size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>10<span class="token punctuation">"</span></span>\n  <span class="token attr-name">:showResultStats</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span>\n  <span class="token attr-name">:react</span><span class="token attr-value"><span class="token punctuation">=</span>`{</span>\n    <span class="token attr-name"><span class="token namespace">and:</span></span> <span class="token attr-name">["CitySensor",</span> <span class="token attr-name">"SearchSensor"]</span>\n  <span class="token attr-name">}`</span>\n<span class="token punctuation">/></span></span>\n</code></pre>\n      </div>\n<h2 id="props"><a href="#props" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Props</h2>\n<ul>\n<li>\n<p><strong>componentId</strong> <code>String</code><br>\nunique identifier of the component, can be referenced in other components’ <code>react</code> prop.</p>\n</li>\n<li>\n<p><strong>dataField</strong> <code>String</code><br>\ndata field to be connected to the component’s UI view. It is useful for providing a sorting context.</p>\n</li>\n<li>\n<p><strong>excludeFields</strong> <code>String Array</code> [optional]<br>\nfields to be excluded in search results.</p>\n</li>\n<li>\n<p><strong>includeFields</strong> <code>String Array</code> [optional]<br>\nfields to be included in search results.</p>\n</li>\n<li>\n<p><strong>stream</strong> <code>Boolean</code> [optional]<br>\nwhether to stream new result updates in the UI. Defaults to <code>false</code>. <code>stream: true</code> is appended to the streaming hit objects, which can be used to selectively react to streaming changes (eg. showing fade in animation on new streaming hits, Twitter/Facebook like streams, showing the count of new feed items available like <em>2 New Tweets</em>)</p>\n</li>\n<li>\n<p><strong>pagination</strong> <code>Boolean</code> [optional]<br>\npagination &#x3C;> infinite scroll switcher. Defaults to <code>false</code>, i.e. an infinite scroll based view. When set to <code>true</code>, a pagination based list view with page numbers will appear.</p>\n</li>\n<li>\n<p><strong>paginationAt</strong> <code>String</code> [optional]<br>\nDetermines the position where to show the pagination, only applicable when <strong>pagination</strong> prop is set to <code>true</code>. Accepts one of <code>top</code>, <code>bottom</code> or <code>both</code> as valid values. Defaults to <code>bottom</code>.</p>\n</li>\n<li>\n<p><strong>pages</strong> <code>Number</code> [optional]<br>\nnumber of user selectable pages to be displayed when pagination is enabled. Defaults to 5.</p>\n</li>\n<li>\n<p><strong>sortBy</strong> <code>String</code> [optional]<br>\nsort the results by either <code>asc</code> or <code>desc</code> order. It is an alternative to <code>sortOptions</code>, both can’t be used together.</p>\n</li>\n<li>\n<p><strong>sortOptions</strong> <code>Object Array</code> [optional]<br>\nan alternative to the <code>sortBy</code> prop, <code>sortOptions</code> creates a sorting view in the ReactiveList component’s UI. Each array element is an object that takes three keys:</p>\n<ul>\n<li><code>label</code> - label to be displayed in the UI.</li>\n<li><code>dataField</code> - data field to use for applying the sorting criteria on.</li>\n<li><code>sortBy</code> - specified as either <code>asc</code> or <code>desc</code>.</li>\n</ul>\n</li>\n<li>\n<p><strong>size</strong> <code>Number</code> [optional]<br>\nnumber of results to show per view. Defaults to 10.</p>\n</li>\n<li>\n<p><strong>loader</strong> <code>String|scoped-slot</code> [optional]<br>\ndisplay to show the user while the data is loading, accepts <code>String</code> or <code>JSX</code> markup.</p>\n</li>\n<li>\n<p><strong>showResultStats</strong> <code>Boolean</code> [optional]<br>\nwhether to show result stats in the form of results found and time taken. Defaults to <code>true</code>.</p>\n</li>\n<li>\n<p><strong>onResultStats</strong> <code>Function|scoped-slot</code> [optional]<br>\nrenders custom result stats using a function or slot that takes an object with two properties for <code>total(results)</code> and <code>time(time taken to execute query)</code> and expects it to return a string or JSX.</p>\n</li>\n<li>\n<p><strong>react</strong> <code>Object</code> [optional]<br>\na dependency object defining how this component should react based on the state changes in the sensor components.</p>\n</li>\n<li>\n<p><strong>URLParams</strong> <code>Boolean</code> [optional]<br>\nwhen set adds the current page number to the url. Only works when <code>pagination</code> is enabled.</p>\n</li>\n<li>\n<p><strong>onData</strong> <code>Function|scoped-slot</code> [optional]<br>\nreturns a list element object to be rendered based on the <code>res</code> data object. This callback function prop or slot is called for each data item rendered in the <strong>ReactiveList</strong> component’s view. For example,</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>onData<span class="token punctuation">"</span></span> <span class="token attr-name">scoped-slot</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>{ item }<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span>\n        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>full_row single-record single_record_for_clone<span class="token punctuation">"</span></span>\n        <span class="token attr-name">key</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>item._id<span class="token punctuation">"</span></span>\n    <span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-container full_row<span class="token punctuation">"</span></span> <span class="token attr-name">:</span><span class="token style-attr language-css"><span class="token attr-name"><span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token punctuation">{</span> <span class="token property">paddingLeft</span><span class="token punctuation">:</span> <span class="token string">\'10px\'</span> <span class="token punctuation">}</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-head text-overflow full_row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-head-info text-overflow<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                    {{ item.name ? item.name : "" }} - {{ item.brand ? item.brand : "" }}\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-head-city<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>{{ item.brand ? item.brand : "" }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-description text-overflow full_row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>highlight_tags<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                    {{ item.price ? `Priced at $${{ item.price }}` : "Free Test Drive" }}\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n</li>\n<li>\n<p><strong>onAllData</strong> <code>Function|scoped-slot</code> [optional]<br>\nworks like <strong>onData</strong> but all the data objects are passed to the callback function or slot.</p>\n</li>\n<li>\n<p><strong>defaultQuery</strong> <code>Function</code> [optional]<br>\napplies a default query to the result component. This query will be run when no other components are being watched (via React prop), as well as in conjunction with the query generated from the React prop. The function should return a query.</p>\n</li>\n<li>\n<p><strong>onNoResults</strong> <code>String</code> [optional]<br>\nshow custom message or component when no results founds.</p>\n</li>\n</ul>\n<h2 id="demo"><a href="#demo" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Demo</h2>\n<br />\n<iframe src="https://codesandbox.io/embed/mx111xx0x" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>\n<h2 id="styles"><a href="#styles" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Styles</h2>\n<p><code>ReactiveList</code> component supports <code>innerClass</code> prop with the following keys:    </p>\n<ul>\n<li><code>resultsInfo</code></li>\n<li><code>sortOptions</code></li>\n<li><code>resultStats</code></li>\n<li><code>noResults</code></li>\n<li><code>button</code></li>\n<li><code>pagination</code></li>\n<li><code>active</code></li>\n<li><code>list</code></li>\n<li><code>poweredBy</code></li>\n</ul>\n<p>Read more about it <a href="/reactive-manual/vue/theming/class.html">here</a>.</p>\n<h2 id="extending"><a href="#extending" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Extending</h2>\n<p><code>ReactiveList</code> component can be extended to</p>\n<ol>\n<li>customize the look and feel with <code>className</code>,</li>\n<li>render individual result data items using <code>onData</code>,</li>\n<li>render the entire result data using <code>onAllData</code>.</li>\n<li>connect with external interfaces using <code>queryChange</code>.</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code><span class="token operator">&lt;</span>ReactiveList\n  <span class="token operator">...</span>\n  className<span class="token operator">=</span><span class="token string">"custom-class"</span>\n  <span class="token punctuation">:</span>onData<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function({ item }) {\n      return(\n        &lt;div>\n          { item.data }\n        &lt;/div>\n      )\n    }\n  `</span></span>\n  @queryChange<span class="token operator">=</span><span class="token template-string"><span class="token string">`\n    function(prevQuery, nextQuery) {\n      // use the query with other js code\n      console.log(\'prevQuery\', prevQuery);\n      console.log(\'nextQuery\', nextQuery);\n    }\n  `</span></span>\n<span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<ul>\n<li><strong>className</strong> <code>String</code><br>\nCSS class to be injected on the component container.</li>\n<li><strong>onData</strong> <code>Function|scoped-slot</code> [optional]<br>\na callback function or scoped-slot where user can define how to render the view based on the data changes.</li>\n<li>\n<p><strong>onAllData</strong> <code>Function|scoped-slot</code> [optional]<br>\nan alternative callback function or scoped-slot to <code>onData</code>, where user can define how to render the view based on all the data changes.<br>\n<br/>\nIt accepts an object with following properties: <code>results</code>, <code>streamResults</code> and <code>loadMore</code>, <code>base</code>, <code>triggerClickAnalytics</code>.</p>\n<ul>\n<li><strong><code>results</code></strong>: An array of results obtained from the applied query.</li>\n<li><strong><code>streamResults</code></strong>: An array of results streamed since the applied query, aka realtime data. Here, a meta property <code>_updated</code> or <code>_deleted</code> is also present within a result object to denote if an existing object has been updated or deleted.</li>\n<li><strong><code>loadMore</code></strong>: A callback function to be called to load the next page of results into the view. The callback function is only applicable in the case of infinite loading view (i.e. <code>pagination</code> prop set to <code>false</code>).</li>\n</ul>\n</li>\n</ul>\n<blockquote>\n<p>Note</p>\n<p>The <code>streamResults</code> parameter will be <code>[]</code> unless <code>stream</code> prop is set to <code>true</code>. Check the <a href="/reactive-manual/vue/advanced/guides.html#handling-stream-updates">handling streaming</a> guide for more info.</p>\n</blockquote>\n<h2 id="events"><a href="#events" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Events</h2>\n<ul>\n<li>\n<p><strong>queryChange</strong><br>\nis an event which accepts component’s <strong>prevQuery</strong> and <strong>nextQuery</strong> as parameters. It is called everytime the component’s query changes. This event is handy in cases where you want to generate a side-effect whenever the component’s query would change.</p>\n</li>\n<li>\n<p><strong>pageChange</strong><br>\ncalled when the current page is changed. If not defined, <code>window</code> will be scrolled to the top of the page.</p>\n</li>\n<li>\n<p><strong>pageClick</strong>\naccepts a function which is invoked with the updated page value when a pagination button is clicked. For example if ‘Next’ is clicked with the current page number as ‘1’, you would receive the value ‘2’ as the function parameter.</p>\n</li>\n</ul>\n<blockquote>\n<p>Note:</p>\n<p>The fundamental difference between <code>pageChange</code> and <code>pageClick</code> is that <code>pageClick</code> is only called on a manual interaction with the pagination buttons, whereas, <code>pageChange</code> would also be invoked if some other side effects caused the results to update which includes updating filters, queries or changing pages. The behaviour of these two may change in the future versions as we come up with a better API.</p>\n</blockquote>\n<ul>\n<li><strong>error</strong>\ninvoked when query listener throws any error</li>\n</ul>\n<h2 id="examples"><a href="#examples" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Examples</h2>\n<p><a href="https://reactivesearch-vue-playground.netlify.com/?selectedKind=Result%20Components%2FReactive%20List&selectedStory=Basic&full=0&addons=1&stories=1&panelRight=0" target="_blank">ReactiveList with default props</a>\n</p>',frontmatter:{title:"ReactiveList",next:null,prev:null,nextTitle:null,prevTitle:null},fields:{path:"docs/result-components/ReactiveList.md",slug:"result-components/reactivelist.html"}}},pathContext:{slug:"result-components/reactivelist.html"}}}});
//# sourceMappingURL=path---result-components-reactivelist-html-c94c4c602058a8ceeb96.js.map