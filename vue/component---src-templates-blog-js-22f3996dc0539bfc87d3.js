webpackJsonp([36733297554888],{78:function(e,t,n){!function(t,n,r){e.exports=r(),e.exports.default=r()}("slugify",this,function(){function e(e,n){return n="string"==typeof n?{replacement:n}:n||{},e=e.split("").reduce(function(e,r){return t[r]&&(r=t[r]),r=r.replace(n.remove||/[^\w\s$*_+~.()'"!\-:@]/g,""),e+=r},"").replace(/^\s+|\s+$/g,"").replace(/[-\s]+/g,n.replacement||"-").replace("#{replacement}$",""),n.lower?e.toLowerCase():e}var t=JSON.parse('{"$":"dollar","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","џ":"dz","Ґ":"G","ґ":"g","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₹":"indian rupee","₽":"russian ruble","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}');return e.extend=function(e){for(var n in e)t[n]=e[n]},e})},54:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(8),l=o(i),s=n(1),c=(o(s),n(3)),u=function(e){var t,n=e.title;return r.createElement(l.default,{type:"header",halign:"space-between",valign:"baseline"},r.createElement("h1",{css:a({color:c.colors.blueDark,marginBottom:0,marginTop:40},c.fonts.header,(t={},t[c.media.size("medium")]={marginTop:60},t[c.media.greaterThan("large")]={marginTop:80},t))},n))};t.default=u,e.exports=t.default}).call(t,n(2))},55:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(54),a=r(o);t.default=a.default,e.exports=t.default},56:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(7),i=o(a),l=n(8),s=o(l),c=n(55),u=o(c),d=n(62),f=o(d),m=n(1),p=(o(m),n(59)),h=o(p),v=n(37),g=o(v),b=n(67),y=o(b),E=n(82),_=o(E),x=n(3),w=n(81),k=o(w),T=function(e){var t=e.authors,n=void 0===t?[]:t,o=e.createLink,a=e.date,l=e.enableScrollSync,c=e.ogDescription,d=e.location,m=e.markdownRemark,p=e.sectionList,v=e.titlePostfix,b=void 0===v?"":v,E=n.length>0,w=m.frontmatter.title||"";return r.createElement(s.default,{direction:"column",grow:"1",shrink:"0",halign:"stretch",css:{width:"100%",flex:"1 0 auto",position:"relative",zIndex:0}},r.createElement(g.default,{ogDescription:c,ogUrl:(0,k.default)(m.fields.slug),title:""+w+b}),r.createElement("div",{css:{flex:"1 0 auto"}},r.createElement(i.default,null,r.createElement("div",{css:x.sharedStyles.articleLayout.container},r.createElement(s.default,{type:"article",direction:"column",grow:"1",halign:"stretch"},r.createElement(u.default,{title:w}),(a||E)&&r.createElement("div",{css:{marginTop:15}},a," ",E&&r.createElement("span",null,"by"," ",(0,_.default)(n,function(e){return r.createElement("a",{css:x.sharedStyles.link,href:e.frontmatter.url,key:e.frontmatter.name},e.frontmatter.name)}))),r.createElement("div",{css:x.sharedStyles.articleLayout.content},r.createElement("div",{css:[x.sharedStyles.markdown],dangerouslySetInnerHTML:{__html:m.html}}),m.fields.path&&r.createElement("div",{css:{marginTop:80}},r.createElement("a",{css:x.sharedStyles.articleLayout.editLink,href:"https://github.com/appbaseio/reactive-manual/tree/v1-vue/content/"+m.fields.path},"Edit this page")))),r.createElement("div",{css:x.sharedStyles.articleLayout.sidebar},r.createElement(h.default,{enableScrollSync:l,createLink:o,defaultActiveSection:(0,y.default)(d.pathname,p),location:d,sectionList:p}))))),(m.frontmatter.next||m.frontmatter.prev)&&r.createElement(f.default,{location:d,next:m.frontmatter.next,nextTitle:m.frontmatter.nextTitle,prev:m.frontmatter.prev,prevTitle:m.frontmatter.prevTitle}))};t.default=T,e.exports=t.default}).call(t,n(2))},57:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(56),a=r(o);t.default=a.default,e.exports=t.default},58:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=n(7),u=o(c),d=n(1),f=n(65),m=o(f),p=n(3),h=n(17),v=o(h),g=function(e){function t(n,r){a(this,t);var o=i(this,e.call(this,n,r));return o.state={open:!1},o._openNavMenu=o._openNavMenu.bind(o),o._closeNavMenu=o._closeNavMenu.bind(o),o}return l(t,e),t.prototype._openNavMenu=function(){this.setState({open:!this.state.open})},t.prototype._closeNavMenu=function(){this.setState({open:!1})},t.prototype.render=function(){var e,t,n,o,a=this.state.open,i={top:0,left:0,bottom:0,right:0,position:"fixed",backgroundColor:p.colors.white,zIndex:2,height:"100vh",overflowY:"auto",WebkitOverflowScrolling:"touch",pointerEvents:a?"auto":"none"},l={display:"inline-block"},c=a?8:-4,d=a?1:0,f=a?0:40;return r.createElement("div",null,r.createElement("div",{style:{opacity:d,transition:"opacity 0.5s ease"},css:(e={},e[p.media.lessThan("small")]=i,e[p.media.greaterThan("medium")]={marginRight:-999,paddingRight:999,backgroundColor:"#f7f7f7"},e[p.media.between("medium","sidebarFixed",!0)]={position:"fixed",zIndex:2,height:"100%"},e[p.media.greaterThan("small")]={position:"fixed",zIndex:2,height:"calc(100vh - 60px)",overflowY:"auto",WebkitOverflowScrolling:"touch",marginRight:-999,paddingRight:999,backgroundColor:"#f7f7f7",opacity:"1 !important"},e[p.media.size("small")]={height:"calc(100vh - 40px)"},e[p.media.between("medium","large")]={height:"calc(100vh - 50px)"},e[p.media.greaterThan("sidebarFixed")]={borderLeft:"1px solid #ececec"},e)},r.createElement("div",{style:{transform:"translate(0px, "+f+"px)",transition:"transform 0.5s ease"},css:(t={marginTop:60,marginBottom:60},t[p.media.size("xsmall")]={marginTop:40,marginBottom:40},t[p.media.between("small","medium")]={marginTop:0,marginBottom:0},t[p.media.between("medium","large")]={marginTop:50,marginBottom:50},t[p.media.greaterThan("small")]={transform:"none !important"},t)},r.createElement(m.default,s({closeParentMenu:this._closeNavMenu},this.props)))),r.createElement("div",{css:(n={backgroundColor:p.colors.darker,bottom:44,color:p.colors.brand,display:"none",cursor:"pointer",position:"fixed",right:20,zIndex:3,borderRadius:"50%",border:"1px solid rgba(255, 255, 255, 0.1)",boxShadow:"0 0 20px rgba(0, 0, 0, 0.3)"},n[p.media.lessThan("small")]=l,n),onClick:this._openNavMenu,role:"button",tabIndex:0},r.createElement(u.default,null,r.createElement("div",{css:(o={display:"flex",flexDirection:"row",alignItems:"center",height:60},o[p.media.between("medium","large")]={height:50},o[p.media.lessThan("small")]={height:60,overflow:"hidden",alignItems:"flex-start"},o)},r.createElement("div",{css:{width:20,height:20,alignSelf:"center",display:"flex",flexDirection:"column",color:p.colors.brand}},r.createElement(v.default,{size:15,cssProps:{transform:"translate(2px, "+c+"px) rotate(180deg)",transition:"transform 0.2s ease"}}),r.createElement(v.default,{size:15,cssProps:{transform:"translate(2px, "+(0-c)+"px)",transition:"transform 0.2s ease"}}))))))},t}(d.Component);t.default=g,e.exports=t.default}).call(t,n(2))},59:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(58),a=r(o);t.default=a.default,e.exports=t.default},236:function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.pageQuery=void 0;var o=n(5),a=r(o),i=n(1),l=(r(i),n(57)),s=r(l),c=n(66),u=function(e){return[{title:"Recent Posts",items:e.edges.map(function(e){var t=e.node;return{id:t.fields.slug,title:t.frontmatter.title}}).concat({id:"/blog/all.html",title:"All posts ..."})}]},d=function(t){var n=t.data,r=t.location;return e.createElement(s.default,{authors:n.markdownRemark.frontmatter.author,createLink:c.createLinkBlog,date:n.markdownRemark.fields.date,location:r,ogDescription:n.markdownRemark.excerpt,markdownRemark:n.markdownRemark,sectionList:u(n.allMarkdownRemark),titlePostfix:" - React Blog"})};d.propTypes={data:a.default.object.isRequired};t.pageQuery="** extracted graphql fragment **";t.default=d}).call(t,n(2))},17:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),i=(o(a),function(e){var t=e.size,n=void 0===t?10:t,o=e.cssProps,a=void 0===o?{}:o;return r.createElement("svg",{css:a,viewBox:"0 0 926.23699 573.74994",version:"1.1",x:"0px",y:"0px",width:n,height:n},r.createElement("g",{transform:"translate(904.92214,-879.1482)"},r.createElement("path",{d:"\n          m -673.67664,1221.6502 -231.2455,-231.24803 55.6165,\n          -55.627 c 30.5891,-30.59485 56.1806,-55.627 56.8701,-55.627 0.6894,\n          0 79.8637,78.60862 175.9427,174.68583 l 174.6892,174.6858 174.6892,\n          -174.6858 c 96.079,-96.07721 175.253196,-174.68583 175.942696,\n          -174.68583 0.6895,0 26.281,25.03215 56.8701,\n          55.627 l 55.6165,55.627 -231.245496,231.24803 c -127.185,127.1864\n          -231.5279,231.248 -231.873,231.248 -0.3451,0 -104.688,\n          -104.0616 -231.873,-231.248 z\n        ",fill:"currentColor"})))});t.default=i,e.exports=t.default}).call(t,n(2))},22:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),i=(o(a),function(e){var t=e.cssProps,n=void 0===t?{}:t;return r.createElement("svg",{x:"0px",y:"0px",viewBox:"0 0 100 100",width:15,height:15,css:n},r.createElement("path",{fill:"currentColor",d:"\n      M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,\n      0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z\n    "}),r.createElement("polygon",{fill:"currentColor",points:"\n      45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,\n      14.9 62.8,22.9 71.5,22.9\n      "}))});t.default=i,e.exports=t.default}).call(t,n(2))},61:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(7),l=o(i),s=n(8),c=o(s),u=n(10),d=o(u),f=n(5),m=o(f),p=n(1),h=(o(p),n(3)),v=function(e){var t,n=e.next,o=e.prev,a=e.location,i=e.nextTitle,s=e.prevTitle;return r.createElement("div",{css:{background:h.colors.dark,color:h.colors.white,paddingTop:50,paddingBottom:50}},r.createElement(l.default,null,r.createElement(c.default,{type:"ul",halign:"space-between",css:(t={},t[h.media.between("small","medium")]={paddingRight:240},t[h.media.between("large","largerSidebar")]={paddingRight:280},t[h.media.between("largerSidebar","sidebarFixed",!0)]={paddingRight:380},t)},r.createElement(c.default,{basis:"50%",type:"li"},o&&r.createElement("div",null,r.createElement(b,null,"Previous article"),r.createElement("div",{css:{paddingTop:10}},r.createElement(g,{location:a,to:o},s)))),n&&r.createElement(c.default,{halign:"flex-end",basis:"50%",type:"li",css:{textAlign:"right"}},r.createElement("div",null,r.createElement(b,null,"Next article"),r.createElement("div",{css:{paddingTop:10}},r.createElement(g,{location:a,to:n},i)))))))};v.propTypes={next:m.default.string,prev:m.default.string,nextTitle:m.default.string,prevTitle:m.default.string},t.default=v;var g=function(e){var t,n=e.children,o=e.to,a=e.location,i=o;return a.pathname.match(/^\/reactive-manual/)&&(i="/"+o),r.createElement(d.default,{css:(t={display:"inline",textTransform:"capitalize",borderColor:h.colors.subtle,transition:"border-color 0.2s ease",fontSize:30,borderBottomWidth:1,borderBottomStyle:"solid"},t[h.media.lessThan("large")]={fontSize:24},t[h.media.size("xsmall")]={fontSize:16},t[":hover"]={borderColor:h.colors.white},t),to:i},n)},b=function(e){var t=e.children;return r.createElement("div",{css:a({color:h.colors.brand},h.fonts.small)},t)};e.exports=t.default}).call(t,n(2))},62:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(61),a=r(o);t.default=a.default,e.exports=t.default},63:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=n(1),u=(o(c),n(18)),d=o(u),f=function(e){function t(n,r){a(this,t);var o=i(this,e.call(this,n,r));return o.state={activeItemId:"",itemTopOffsets:[]},o.calculateItemTopOffsets=o.calculateItemTopOffsets.bind(o),o.handleResize=o.handleResize.bind(o),o.handleScroll=o.handleScroll.bind(o),o}return l(t,e),t.prototype.componentDidMount=function(){this.calculateItemTopOffsets(),window.addEventListener("resize",this.handleResize),window.addEventListener("scroll",this.handleScroll)},t.prototype.componentWillUnmount=function(){window.removeEventListener("resize",this.handleResize),window.removeEventListener("scroll",this.handleScroll)},t.prototype.calculateItemTopOffsets=function(){var e=this.props.section,t=m(e.items);this.setState({itemTopOffsets:p(t)})},t.prototype.handleResize=function(){this.calculateItemTopOffsets(),this.handleScroll()},t.prototype.handleScroll=function(){var e=this.state.itemTopOffsets,t=e.find(function(t,n){var r=e[n+1];return r?window.scrollY>=t.offsetTop&&window.scrollY<r.offsetTop:window.scrollY>=t.offsetTop});this.setState({activeItemId:t?t.id:""})},t.prototype.render=function(){var e=this.state.activeItemId;return r.createElement(d.default,s({isScrollSync:!0,activeItemId:e},this.props))},t}(c.Component),m=function(e){return e.map(function(e){var t=[];return e.subitems&&(t=e.subitems.map(function(e){return e.id})),[e.id].concat(t)}).reduce(function(e,t){return e.concat(t)})},p=function(e){return e.map(function(e){var t=document.getElementById(e);return t?{id:e,offsetTop:t.offsetTop}:null}).filter(function(e){return e})};t.default=f,e.exports=t.default}).call(t,n(2))},18:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(1),i=(o(a),n(3)),l=n(68),s=o(l),c=n(60),u=o(c),d=n(17),f=o(d),m=function(e){var t,n,o,a=e.activeItemId,l=e.createLink,c=e.isActive,d=e.isScrollSync,m=e.location,p=e.onLinkClick,h=e.onSectionTitleClick,v=e.section;return r.createElement("div",null,r.createElement("button",{css:{cursor:"pointer",backgroundColor:"transparent",border:0,marginTop:10},onClick:h},r.createElement(u.default,{cssProps:(t={},t[i.media.greaterThan("small")]={color:c?i.colors.text:i.colors.subtle,":hover":{color:i.colors.text}},t)},v.title,r.createElement(f.default,{cssProps:(n={marginLeft:7,transform:c?"rotateX(180deg)":"rotateX(0deg)",transition:"transform 0.2s ease"},n[i.media.lessThan("small")]={display:"none"},n)}))),r.createElement("ul",{css:(o={marginBottom:10},o[i.media.greaterThan("small")]={display:c?"block":"none"},o)},v.items.map(function(e){return r.createElement("li",{key:e.id,css:{marginTop:8}},l({isActive:d?(0,s.default)(m,e)&&""===a:(0,s.default)(m,e),item:e,location:m,onLinkClick:p,section:v}),e.subitems&&(0,s.default)(m,e)&&r.createElement("ul",{css:{marginLeft:20}},e.subitems.map(function(t){return r.createElement("li",{key:t.id},l({isActive:d?a===t.id&&(0,s.default)(m,e):(0,s.default)(m,t),item:t,location:m,onLinkClick:p,section:v}))})))})))};t.default=m,e.exports=t.default}).call(t,n(2))},64:function(e,t,n){(function(r){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(1),c=(o(s),n(8)),u=o(c),d=n(18),f=o(d),m=n(63),p=o(m),h=n(3),v=function(e){function t(n,r){a(this,t);var o=i(this,e.call(this,n,r));return o.state={activeSection:n.defaultActiveSection},o}return l(t,e),t.prototype.render=function(){var e,t=this,n=this.props,o=n.closeParentMenu,a=n.createLink,i=n.enableScrollSync,l=n.location,s=n.sectionList,c=this.state.activeSection,d=i?p.default:f.default;return r.createElement(u.default,{type:"nav",direction:"column",halign:"stretch",css:(e={width:"100%",paddingLeft:20,position:"relative"},e[h.media.greaterThan("largerSidebar")]={paddingLeft:40},e[h.media.lessThan("small")]={paddingBottom:100},e)},s.map(function(e,n){return r.createElement(d,{createLink:a,isActive:c===e||1===s.length,key:n,location:l,onLinkClick:o,onSectionTitleClick:function(){return t._toggleSection(e)},section:e})}))},t.prototype._toggleSection=function(e){this.setState(function(t){return{activeSection:t.activeSection===e?null:e}})},t}(s.Component);t.default=v,e.exports=t.default}).call(t,n(2))},65:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(64),a=r(o);t.default=a.default,e.exports=t.default},66:function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.createLinkTutorial=t.createLinkDocs=t.createLinkCommunity=t.createLinkBlog=void 0;var o,a=n(10),i=r(a),l=n(1),s=(r(l),n(22)),c=r(s),u=n(3),d=function(t){var n=t.isActive,r=t.item;t.section;return e.createElement(i.default,{css:[g,n&&h],to:r.id},n&&e.createElement("span",{css:v}),r.title)},f=function(t){var n=t.isActive,r=t.item,o=t.section;return r.href?e.createElement("a",{css:[g],href:r.href,target:"_blank",rel:"noopener"},r.title,e.createElement(c.default,{cssProps:{verticalAlign:-2,display:"inline-block",marginLeft:5,color:u.colors.subtle}})):m({isActive:n,item:r,section:o})},m=function(t){var n=t.isActive,r=t.item,o=t.onLinkClick;t.section;return e.createElement(i.default,{css:[g,n&&h],onClick:o,to:r.href},n&&e.createElement("span",{css:v}),r.title)},p=function(t){var n=t.isActive,r=t.item,o=t.onLinkClick;t.section;return e.createElement(i.default,{css:[g,n&&h],onClick:o,to:r.href},n&&e.createElement("span",{css:v}),r.title)},h={fontWeight:700},v=(o={width:4,height:25,borderLeft:"4px solid "+u.colors.brand,paddingLeft:16,position:"absolute",left:0,marginTop:-3},o[u.media.greaterThan("largerSidebar")]={left:15},o),g={color:u.colors.text,display:"inline-block",borderBottom:"1px solid transparent",transition:"border 0.2s ease",marginTop:5,"&:hover":{color:u.colors.subtle}};t.createLinkBlog=d,t.createLinkCommunity=f,t.createLinkDocs=m,t.createLinkTutorial=p}).call(t,n(2))},67:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(19),a=r(o),i=function(e,t){var n=void 0,r=e.split("/").slice(-1)[0];return t.forEach(function(e){var t=e.items.some(function(e){return r===(0,a.default)(e.id)||e.subitems&&e.subitems.some(function(e){return r===(0,a.default)(e.id)})});t&&(n=e)}),n};t.default=i,e.exports=t.default},68:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(19),a=r(o),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.indexOf("#");return t>=0?e.substr(t):""},l=function(e,t){if(e.hash){if(t.subitems&&t.subitems.length&&e.pathname.includes(t.href))return t.subitems.some(function(t){return e.hash===i(t.href)});if(t.href)return e.hash===i(t.href)}else if(t.id.includes("html"))return e.pathname.includes(t.id);var n=e.pathname.split("/").slice(-1)[0];return n===(0,a.default)(t.id)};t.default=l,e.exports=t.default},19:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(78),a=r(o);t.default=function(e,t){var n=(0,a.default)(e)+".html";return t?"/"+t+"/"+n:n},e.exports=t.default}});
//# sourceMappingURL=component---src-templates-blog-js-22f3996dc0539bfc87d3.js.map