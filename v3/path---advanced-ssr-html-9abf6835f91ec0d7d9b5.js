webpackJsonp([0x82c75d73fc41],{456:function(n,s){n.exports={data:{markdownRemark:{html:'<p>Server Side Rendering enables us to pre-render the results on the server enabling better SEO for the app, and faster delivery of relevant results on an initial render to the users.</p>\n<p>Reactivesearch internally runs on a redux store. With Server Side Rendering, you can handle the intial render when a user (or search engine crawler) first requests your app. To achieve the relevant results on an initial render, we need to pre-populate the redux store of ReactiveSearch. </p>\n<p>ReactiveSearch offers SSR via <code class="gatsby-code-text">initReactivesearch()</code> method which takes three params:</p>\n<ul>\n<li>an array of all components (with their set of props) we wish to render at the server side</li>\n<li>url params</li>\n<li>base component (reactivebase) props</li>\n</ul>\n<h2 id="usage"><a href="#usage" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Usage</h2>\n<p>This is a three-steps process:</p>\n<p>First, import <code class="gatsby-code-text">initReactivesearch</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> initReactivesearch <span class="token keyword">from</span> <span class="token string">\'@appbaseio/reactivesearch/lib/server\'</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Then, evaluate the initial state:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> initialState <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">initReactivesearch</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>and finally, pass the computed initial state to <code class="gatsby-code-text">ReactiveBase</code> component.</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveBase</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">props</span><span class="token punctuation">}</span></span> <span class="token attr-name">initialState</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>initialState<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n    <span class="token operator">...</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ReactiveBase</span><span class="token punctuation">></span></span></code></pre>\n      </div>\n<h2 id="example"><a href="#example" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example</h2>\n<p>We will build a simple booksearch app with <code class="gatsby-code-text">next.js</code> as an example to get started with:</p>\n<blockquote>\n<p>Note that you can also use <code class="gatsby-code-text">react-dom/server</code> to implement SSR. We are using <code class="gatsby-code-text">next.js</code> here for simplicity.</p>\n</blockquote>\n<h3 id="pre-requisites"><a href="#pre-requisites" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Pre-requisites</h3>\n<p>Set up <code class="gatsby-code-text">next.js</code> - <a href="https://github.com/zeit/next.js">Refer docs here</a></p>\n<h3 id="installation"><a href="#installation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Installation</h3>\n<p>Use the package manager of your choice to install <code class="gatsby-code-text">reactivesearch</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">yarn add @appbaseio/reactivesearch</code></pre>\n      </div>\n<p>Since reactivesearch internally uses <code class="gatsby-code-text">emotion-js</code> for styling, we will also need to install <code class="gatsby-code-text">emotion-server</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">yarn add emotion-server</code></pre>\n      </div>\n<p>We will also utilise <code class="gatsby-code-text">babel-plugin-direct-import</code> and <code class="gatsby-code-text">babel-plugin-emotion</code> primarily to generate an optimised build for our app. So make sure that you install:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-text"><code class="gatsby-code-text">yarn add -D babel-cli babel-core babel-loader babel-plugin-direct-import babel-plugin-emotion babel-plugin-transform-class-properties babel-plugin-transform-object-rest-spread babel-preset-env babel-preset-next babel-preset-react</code></pre>\n      </div>\n<h3 id="setup"><a href="#setup" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Setup</h3>\n<p>Create <code class="gatsby-code-text">.babelrc</code> with the following configuration to generate an optimised build for your react app:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token punctuation">{</span>\n\t<span class="token string">"presets"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">"next/babel"</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t<span class="token string">"plugins"</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>\n\t\t<span class="token string">"emotion"</span><span class="token punctuation">,</span>\n\t\t<span class="token string">"transform-class-properties"</span><span class="token punctuation">,</span>\n\t\t<span class="token string">"transform-object-rest-spread"</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">[</span>\n\t\t\t<span class="token string">"direct-import"</span><span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">[</span>\n\t\t\t  <span class="token string">"@appbaseio/reactivesearch"</span><span class="token punctuation">,</span>\n\t\t\t  <span class="token punctuation">{</span>\n\t\t\t\t<span class="token string">"name"</span><span class="token punctuation">:</span> <span class="token string">"@appbaseio/reactivesearch"</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token string">"indexFile"</span><span class="token punctuation">:</span> <span class="token string">"@appbaseio/reactivesearch/lib/index.es.js"</span>\n\t\t\t  <span class="token punctuation">}</span>\n\t\t\t<span class="token punctuation">]</span>\n\t\t<span class="token punctuation">]</span>\n\t<span class="token punctuation">]</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Create an <code class="gatsby-code-text">index.js</code> file in the <code class="gatsby-code-text">pages</code> directory:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> initReactivesearch <span class="token keyword">from</span> <span class="token string">\'@appbaseio/reactivesearch/lib/server\'</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>and we will also import the other relevant component from the reactivesearch library:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span>\n\tReactiveBase<span class="token punctuation">,</span>\n\tDataSearch<span class="token punctuation">,</span>\n\tSelectedFilters<span class="token punctuation">,</span>\n\tReactiveList<span class="token punctuation">,</span>\n<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@appbaseio/reactivesearch\'</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Set the props for all the components we are going to use:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> settings <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tapp<span class="token punctuation">:</span> <span class="token string">\'good-books-ds\'</span><span class="token punctuation">,</span>\n\tcredentials<span class="token punctuation">:</span> <span class="token string">\'nY6NNTZZ6:27b76b9f-18ea-456c-bc5e-3a5263ebc63d\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> dataSearchProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tdataField<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'original_title\'</span><span class="token punctuation">,</span> <span class="token string">\'original_title.search\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\tcategoryField<span class="token punctuation">:</span> <span class="token string">\'authors.raw\'</span><span class="token punctuation">,</span>\n\tcomponentId<span class="token punctuation">:</span> <span class="token string">\'BookSensor\'</span><span class="token punctuation">,</span>\n\tdefaultSelected<span class="token punctuation">:</span> <span class="token string">\'Harry\'</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> reactiveListProps <span class="token operator">=</span> <span class="token punctuation">{</span>\n\tcomponentId<span class="token punctuation">:</span> <span class="token string">\'SearchResult\'</span><span class="token punctuation">,</span>\n\tdataField<span class="token punctuation">:</span> <span class="token string">\'original_title.raw\'</span><span class="token punctuation">,</span>\n\tclassName<span class="token punctuation">:</span> <span class="token string">\'result-list-container\'</span><span class="token punctuation">,</span>\n\t<span class="token keyword">from</span><span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n\tsize<span class="token punctuation">:</span> <span class="token number">5</span><span class="token punctuation">,</span>\n\trenderData<span class="token punctuation">:</span> data <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BookCard</span> <span class="token attr-name">key</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">.</span>_id<span class="token punctuation">}</span></span> <span class="token attr-name">data</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\treact<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n\t\tand<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">\'BookSensor\'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>Next step is to evaluate the initial state in the <code class="gatsby-code-text">getInitialProps</code> lifecycle method:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">Main</span> <span class="token keyword">extends</span> <span class="token class-name">Component</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">static</span> <span class="token keyword">async</span> <span class="token function">getInitialProps</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token punctuation">{</span>\n\t\t\tstore<span class="token punctuation">:</span> <span class="token keyword">await</span> <span class="token function">initReactivesearch</span><span class="token punctuation">(</span>\n\t\t\t\t<span class="token punctuation">[</span>\n\t\t\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t\t\t<span class="token operator">...</span>dataSearchProps<span class="token punctuation">,</span>\n\t\t\t\t\t\tsource<span class="token punctuation">:</span> DataSearch<span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token punctuation">{</span>\n\t\t\t\t\t\t<span class="token operator">...</span>reactiveListProps<span class="token punctuation">,</span>\n\t\t\t\t\t\tsource<span class="token punctuation">:</span> ReactiveList<span class="token punctuation">,</span>\n\t\t\t\t\t<span class="token punctuation">}</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token punctuation">]</span><span class="token punctuation">,</span>\n\t\t\t\t<span class="token keyword">null</span><span class="token punctuation">,</span>\n\t\t\t\tsettings<span class="token punctuation">,</span>\n\t\t\t<span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t\t<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token punctuation">(</span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveBase</span> <span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">settings</span><span class="token punctuation">}</span></span> <span class="token attr-name">initialState</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>store<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>row<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>DataSearch</span>\n\t\t\t\t\t\t\t<span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">dataSearchProps</span><span class="token punctuation">}</span></span>\n\t\t\t\t\t\t<span class="token punctuation">/></span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>col<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>SelectedFilters</span> <span class="token punctuation">/></span></span>\n\t\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ReactiveList</span>\n\t\t\t\t\t\t\t<span class="token spread"><span class="token punctuation">{</span><span class="token punctuation">...</span><span class="token attr-value">reactiveListProps</span><span class="token punctuation">}</span></span>\n\t\t\t\t\t\t<span class="token punctuation">/></span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ReactiveBase</span><span class="token punctuation">></span></span>\n\t\t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Since ReactiveSearch runs on emotion-js internally, we will need to extract and inject styles properly by creating a <code class="gatsby-code-text">_document.js</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">import</span> React <span class="token keyword">from</span> <span class="token string">\'react\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Document<span class="token punctuation">,</span> <span class="token punctuation">{</span> Head<span class="token punctuation">,</span> Main<span class="token punctuation">,</span> NextScript <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'next/document\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> extractCritical <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'emotion-server\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">class</span> <span class="token class-name">MyDocument</span> <span class="token keyword">extends</span> <span class="token class-name">Document</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">static</span> <span class="token function">getInitialProps</span><span class="token punctuation">(</span><span class="token punctuation">{</span> renderPage <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token comment">// for emotion-js</span>\n\t\t<span class="token keyword">const</span> page <span class="token operator">=</span> <span class="token function">renderPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">const</span> styles <span class="token operator">=</span> <span class="token function">extractCritical</span><span class="token punctuation">(</span>page<span class="token punctuation">.</span>html<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">return</span> <span class="token punctuation">{</span> <span class="token operator">...</span>page<span class="token punctuation">,</span> <span class="token operator">...</span>styles <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token comment">// for emotion-js</span>\n\t\t<span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">const</span> <span class="token punctuation">{</span> __NEXT_DATA__<span class="token punctuation">,</span> ids <span class="token punctuation">}</span> <span class="token operator">=</span> props<span class="token punctuation">;</span>\n\t\t<span class="token keyword">if</span> <span class="token punctuation">(</span>ids<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\t__NEXT_DATA__<span class="token punctuation">.</span>ids <span class="token operator">=</span> ids<span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t<span class="token punctuation">}</span>\n\n\t<span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">return</span> <span class="token punctuation">(</span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Head</span><span class="token punctuation">></span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stylesheet<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/_next/static/style.css<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charSet</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>initial-scale=1.0, width=device-width<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n\t\t\t\t\t<span class="token punctuation">{</span><span class="token comment">/* for emotion-js */</span><span class="token punctuation">}</span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">dangerouslySetInnerHTML</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> __html<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">.</span>css <span class="token punctuation">}</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Head</span><span class="token punctuation">></span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Main</span> <span class="token punctuation">/></span></span>\n\t\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>NextScript</span> <span class="token punctuation">/></span></span>\n\t\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>\n\t\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>\n\t\t<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span></code></pre>\n      </div>\n<p>Finally, you can now run the dev server and catch the SSR in action.</p>\n<h2 id="using-with-react-dom"><a href="#using-with-react-dom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Using with react-dom</h2>\n<p>You can also use ReactiveSearch with <a href="https://reactjs.org/docs/react-dom-server.html">react-dom/server</a>. Check out the <a href="https://github.com/appbaseio/reactivesearch/tree/dev/packages/web/examples/ssr-with-react-dom">example app</a> for a detailed setup.</p>\n<p>The concept remains the same, after gettting a request, we’ll use <code class="gatsby-code-text">initReactiveSearch</code> to compute the results and populate ReactiveSearch’s redux store. We’ll use <a href="https://reactjs.org/docs/react-dom-server.html#rendertostring">renderToString</a> from <code class="gatsby-code-text">react-dom/server</code> and <a href="https://emotion.sh/docs/ssr#renderstylestostring">renderStylesToString</a> from <code class="gatsby-code-text">emotion-server</code> to generate a html paint for our app. For example:</p>\n<div class="gatsby-highlight">\n      <pre class="gatsby-code-jsx"><code class="gatsby-code-jsx"><span class="token keyword">const</span> html <span class="token operator">=</span> <span class="token function">renderStylesToString</span><span class="token punctuation">(</span><span class="token function">renderToString</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span>\n\t<span class="token attr-name">store</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>\n\t\tstore\n\t<span class="token punctuation">}</span></span>\n\t<span class="token attr-name">settings</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>\n\t\tsettings\n\t<span class="token punctuation">}</span></span>\n\t<span class="token attr-name">singleRangeProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>\n\t\tsingleRangeProps\n\t<span class="token punctuation">}</span></span>\n\t<span class="token attr-name">reactiveListProps</span><span class="token script language-javascript"><span class="token script-punctuation punctuation">=</span><span class="token punctuation">{</span>\n\t\treactiveListProps\n\t<span class="token punctuation">}</span></span>\n<span class="token punctuation">/></span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code></pre>\n      </div>\n<p>We’ll send this markup along with the computed <code class="gatsby-code-text">store</code> object so that it can be pre-loaded in client side while hydrating the app.</p>\n<h2 id="example-apps"><a href="#example-apps" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Example apps</h2>\n<p>We’ve covered all the existing components as an example app here:</p>\n<ul>\n<li><a href="https://github.com/appbaseio/reactivesearch/tree/dev/packages/web/examples/ssr">Components SSR demo with Next.js</a></li>\n<li><a href="https://github.com/appbaseio/reactivesearch/tree/dev/packages/web/examples/ssr-with-react-dom">SSR demo with react-dom</a></li>\n</ul>',
frontmatter:{title:"Server Side Rendering",next:"advanced/typescript.html",prev:"advanced/guides.html",nextTitle:"TypeScript Support",prevTitle:"Advanced Guides"},fields:{path:"docs/advanced/SSR",slug:"advanced/ssr.html"}}},pathContext:{slug:"advanced/ssr.html"}}}});
//# sourceMappingURL=path---advanced-ssr-html-9abf6835f91ec0d7d9b5.js.map