(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[14],{456:function(t,e,n){"use strict";function a(t,e){if(null==t)return{};var n,a,c=function(t,e){if(null==t)return{};var n,a,c={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(c[n]=t[n]);return c}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(c[n]=t[n])}return c}n.d(e,"a",(function(){return a}))},457:function(t,e,n){"use strict";var a=n(2),c=n(456),r=n(0),i=n(44),s=function(){return Object(r.g)("section",{id:"footer"},Object(r.g)("div",{class:"content-section"},Object(r.g)("footer",null,Object(r.g)("hr",null),"Developed with ",Object(r.g)("i",{class:"fas fa-heart"})," and"," ",Object(r.g)("i",{class:"fas fa-coffee"})," using"," ",Object(r.g)("a",{href:"https://getbootstrap.com/"},"Bootstrap"),","," ",Object(r.g)("a",{href:"https://reactjs.org/"},"React")," and"," ",Object(r.g)("a",{href:"https://fontawesome.com/"},"Font Awesome"),Object(r.g)("a",{href:"".concat(Object(i.d)(),"/atom.xml"),class:"float-right"},Object(r.g)("i",{class:"fas fa-rss"})," Subscribe via RSS"))))},l=["children","fullWidth"];e.a=function(t){var e=t.children,n=t.fullWidth,i=Object(c.a)(t,l);return i.class=i.class?"container "+i.class:"container",i.style=Object(a.a)(Object(a.a)({},i.style||{}),{},{maxWidth:n?"100%":""}),Object(r.g)("div",Object.assign({},i,{id:"layout"}),e,Object(r.g)(s,null))}},458:function(t,e,n){"use strict";var a=n(95),c=n(96),r=n(99),i=n(98),s=n(0),l=function(){return Object(s.g)("div",{style:{display:"table",width:"100%",height:"100%"}},Object(s.g)("div",{style:{display:"table-cell",verticalAlign:"middle"}},Object(s.g)("div",{style:{marginLeft:"auto",marginRight:"auto",textAlign:"center",fontWeight:700,color:"white"}},Object(s.g)("div",{class:"fa-4x"},Object(s.g)("i",{class:"fas fa-spinner fa-spin"})))))};e.a=function(t){return function(e){return function(n){Object(r.a)(u,n);var o=Object(i.a)(u);function u(){var t;return Object(a.a)(this,u),(t=o.call(this)).state={loading:!0},t}return Object(c.a)(u,[{key:"componentDidMount",value:function(){var e=this,n=t(this.props);n instanceof Promise?n.then((function(){return e.setState({loading:!1})})):this.setState({loading:!1})}},{key:"render",value:function(t){return this.state.loading?Object(s.g)(l,null):Object(s.g)(e,t)}}]),u}(s.a)}}},607:function(t,e,n){"use strict";var a=n(0);e.a=function(t){var e=t.tagName,n=t.html;return Object(a.g)(e,{dangerouslySetInnerHTML:{__html:n}})}},754:function(t,e,n){"use strict";n.r(e);var a=n(4),c=n.n(a),r=n(9),i=n(2),s=n(0),l=n(97),o=n(45),u=n(458),g=n(457),b=n(35),f=n.n(b),d=n(158),O=n(20),h=n(165),j=n(100),p=n(44),m=n(607),v=n(159),y=function(){var t=Object(r.a)(c.a.mark((function t(e){var n,a,r,i,s,l;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.fetchBootstrap,a=e.fetchConfig,r=e.fetchExternalPlugins,i=e.fetchExternalPluginInfo,s=e.fetchPluginHubStats,l=e.internalName,t.next=3,n();case 3:return t.next=5,a();case 5:return t.next=7,r();case 7:return t.next=9,s();case 9:return t.next=11,i(l);case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();e.default=Object(l.b)((function(t,e){return Object(i.a)(Object(i.a)({},e),{},{externalPlugin:Object(h.e)(t).find((function(t){return t.internalName===e.internalName}))})}),(function(t){return Object(o.b)({fetchBootstrap:O.b,fetchConfig:j.c,fetchExternalPlugins:h.c,fetchExternalPluginInfo:h.b,fetchPluginHubStats:h.d},t)}))(Object(u.a)(y)((function(t){var e=t.externalPlugin;return e?Object(s.g)(g.a,null,Object(s.g)(d.a,{title:"".concat(e.displayName," - Plugin Hub - ").concat(f.a.title),description:e.description}),Object(s.g)("section",{id:"externalPlugins"},Object(s.g)("div",{class:"content-section dark-card"},Object(s.g)("div",{class:"card"},Object(s.g)("div",{class:"card-header"},Object(s.g)("img",{width:"36",alt:"",src:e.imageUrl?e.imageUrl:"/img/plugin-hub/missingicon.png"})," ",e.support?Object(s.g)("a",{href:e.support,alt:"Support link",rel:"noopener noreferrer nofollow",target:"_blank"},e.displayName):e.displayName," ","by"," ",Object(s.g)("a",{href:"/plugin-hub/".concat(e.author)},e.author),Object(s.g)("div",{class:"float-right"},e.count>0&&Object(s.g)("span",{class:"badge badge-primary"},Object(p.f)(e.count)," ",e.count>1?"active installs":"active install")," ",e.installed&&Object(s.g)("span",{class:"badge badge-success"},"installed"))),Object(s.g)("div",{class:"card-footer text-muted"},e.description),Object(s.g)("div",{class:"card-body markdown-body"},e.github&&Object(s.g)(m.a,{tagName:"div",html:e.github.readme})))))):Object(s.g)(v.a,null)})))}}]);
//# sourceMappingURL=14.4a1cc18f.chunk.js.map