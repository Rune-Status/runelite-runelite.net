(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[13],{456:function(e,t,a){"use strict";function c(e,t){if(null==e)return{};var a,c,n=function(e,t){if(null==e)return{};var a,c,n={},r=Object.keys(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)a=r[c],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}a.d(t,"a",(function(){return c}))},457:function(e,t,a){"use strict";var c=a(2),n=a(456),r=a(0),l=a(44),i=function(){return Object(r.g)("section",{id:"footer"},Object(r.g)("div",{class:"content-section"},Object(r.g)("footer",null,Object(r.g)("hr",null),"Developed with ",Object(r.g)("i",{class:"fas fa-heart"})," and"," ",Object(r.g)("i",{class:"fas fa-coffee"})," using"," ",Object(r.g)("a",{href:"https://getbootstrap.com/"},"Bootstrap"),","," ",Object(r.g)("a",{href:"https://reactjs.org/"},"React")," and"," ",Object(r.g)("a",{href:"https://fontawesome.com/"},"Font Awesome"),Object(r.g)("a",{href:"".concat(Object(l.d)(),"/atom.xml"),class:"float-right"},Object(r.g)("i",{class:"fas fa-rss"})," Subscribe via RSS"))))},s=["children","fullWidth"];t.a=function(e){var t=e.children,a=e.fullWidth,l=Object(n.a)(e,s);return l.class=l.class?"container "+l.class:"container",l.style=Object(c.a)(Object(c.a)({},l.style||{}),{},{maxWidth:a?"100%":""}),Object(r.g)("div",Object.assign({},l,{id:"layout"}),t,Object(r.g)(i,null))}},458:function(e,t,a){"use strict";var c=a(95),n=a(96),r=a(99),l=a(98),i=a(0),s=function(){return Object(i.g)("div",{style:{display:"table",width:"100%",height:"100%"}},Object(i.g)("div",{style:{display:"table-cell",verticalAlign:"middle"}},Object(i.g)("div",{style:{marginLeft:"auto",marginRight:"auto",textAlign:"center",fontWeight:700,color:"white"}},Object(i.g)("div",{class:"fa-4x"},Object(i.g)("i",{class:"fas fa-spinner fa-spin"})))))};t.a=function(e){return function(t){return function(a){Object(r.a)(o,a);var d=Object(l.a)(o);function o(){var e;return Object(c.a)(this,o),(e=d.call(this)).state={loading:!0},e}return Object(n.a)(o,[{key:"componentDidMount",value:function(){var t=this,a=e(this.props);a instanceof Promise?a.then((function(){return t.setState({loading:!1})})):this.setState({loading:!1})}},{key:"render",value:function(e){return this.state.loading?Object(i.g)(s,null):Object(i.g)(t,e)}}]),o}(i.a)}}},749:function(e,t,a){},770:function(e,t,a){"use strict";a.r(t);var c=a(4),n=a.n(c),r=a(9),l=a(95),i=a(96),s=a(161),d=a(99),o=a(98),b=(a(749),a(457)),u=a(35),f=a.n(u),g=["020004743a7e0bf6d257ef0833b9ed229204a0112e80a05adfed36d73d7c3d5e","07c658c06b48637409a27fa299dbb447ea2a047db46fa726ea208fda5b8e4cef","2cea36b447a507c793367111a6d891de6fa028440daba22aa24a504034816fbd","36da47090fa642a4ae9bdc28f7ba00fda16dbf363064c96a5132a3f00fe4685d","3e4d8ba370c6369962279d88de7371f9a285a5c1eeced2f3f0507acd8265850a","49ab6cb2e916b1dd62db1f52f1223bc47226a226abd7f1e3d0c9a34351eb23d0","7b6a27fcae09b79db920a402be8d8f69249257b2cc491fb1372b2852aaf67341","8715ddf633d4e4fe9f928cec84b20df1eedb630ef6e3b5d826039f3cbd9268a2","8865dd1b9c902e89a1906159ed097242a49786652dc5a0407d8316e4ef56369b","8edf21633c91a2a360cb3433f9322d3e3cd1fc2f198dc95f64d2e7ea8ff147e9","9041dcc4ebeb326e02744e10391e90fe96d7fb56c9824fa283ec55321cf22455","96bd4957980d4cebee1c5978ce301e5950a50a6dfb40f191d91bc61a6777cd20","a202dea75936f16e11507ec6a666fc86c8d4ac9dec971be5930c470cd090bf23","b590edee17e2a4236b5a179d35f5934ddf9c9075fb09e93a7408f63242394a5f","bf7d1894f90d849619aab940c8d639340c2e745c1411e55d7735ac31398bc384"],O=a(0),h=a(97),j=a(45),p=a(160),v=a(458),m=a(44),y=a(158),k=Object.freeze({NONE:Symbol("NONE"),LAUNCHER:Symbol("LAUNCHER"),SHORTCUT:Symbol("SHORTCUT"),INVALID:Symbol("INVALID"),VALID:Symbol("VALID")}),w=function(e){e.preventDefault(),e.stopPropagation()},S=function(e){Object(d.a)(a,e);var t=Object(o.a)(a);function a(e){var c;return Object(l.a)(this,a),(c=t.call(this,e)).state={dragging:!1,fileName:null,fileState:k.NONE},c.reset=c.reset.bind(Object(s.a)(c)),c.inputHandler=c.inputHandler.bind(Object(s.a)(c)),c.dropHandler=c.dropHandler.bind(Object(s.a)(c)),c.dragOver=c.dragOver.bind(Object(s.a)(c)),c.dragLeave=c.dragLeave.bind(Object(s.a)(c)),c.checkFile=c.checkFile.bind(Object(s.a)(c)),c.fileHandler=c.fileHandler.bind(Object(s.a)(c)),c}return Object(i.a)(a,[{key:"checkFile",value:function(e){var t=this.state.fileName,a=k.INVALID;null==t?a=k.NONE:t.match(/.*runelite.*\.lnk/i)?a=k.SHORTCUT:g.includes(e)?a=k.LAUNCHER:this.props.hashes[e]&&(a=k.VALID),this.setState({fileState:a})}},{key:"reset",value:function(){this.setState({dragging:!1,fileName:null,fileState:k.NONE})}},{key:"fileHandler",value:function(e){var t=this;if(e&&0!==e.length){var a=e[0];this.setState({fileName:a.name});var c=new FileReader;c.onload=function(e){return Object(m.a)(e.target.result,t.checkFile)},c.readAsArrayBuffer(a),window.scrollTo(0,0)}else this.reset()}},{key:"inputHandler",value:function(e){w(e),this.fileHandler(e.target.files)}},{key:"dropHandler",value:function(e){this.dragLeave(e),this.fileHandler(e.dataTransfer.files)}},{key:"dragOver",value:function(e){w(e),this.setState({dragging:!0})}},{key:"dragLeave",value:function(e){w(e),this.setState({dragging:!1})}},{key:"createInput",value:function(){return Object(O.g)(O.b,null,Object(O.g)("div",{class:"card-body"},Object(O.g)("div",{class:"drag-drop-zone ".concat(this.state.dragging?"dragging":""),onDrop:this.dropHandler,onDragOver:this.dragOver,onDragEnter:this.dragOver,onDragLeave:this.dragLeave,onDragEnd:this.dragLeave},Object(O.g)("p",null,"Drag and drop your RuneLite setup file here or manually select file below"))),Object(O.g)("div",{class:"card-footer"},Object(O.g)("div",{class:"input-group mb-1"},Object(O.g)("div",{class:"custom-file"},Object(O.g)("input",{type:"file",class:"custom-file-input",id:"inputGroupFile",onChange:this.inputHandler,onClick:function(e){return e.target.value=""},accept:".dmg,.jar,.exe,.AppImage"}),Object(O.g)("label",{class:"custom-file-label",for:"inputGroupFile"},"Choose file")))))}},{key:"createMsg",value:function(e,t){return t===k.NONE?null:t===k.VALID?Object(O.g)(O.b,null,Object(O.g)("div",{class:"card-header bg-primary"},Object(O.g)("button",{class:"btn btn-dark float-right",onClick:this.reset},Object(O.g)("i",{class:"fa fa-fw fa-times"}))),Object(O.g)("div",{class:"card-body"},Object(O.g)("p",{class:"text-center mt-5 mb-5"},Object(O.g)("h3",null,Object(O.g)("i",{class:"fa fa-fw fa-check-circle text-success"})," ",Object(O.g)("b",null,e)," is from"," ",Object(O.g)("a",{href:"https://runelite.net"},"https://runelite.net"))))):t===k.SHORTCUT?Object(O.g)(O.b,null,Object(O.g)("div",{class:"card-header bg-warning"},Object(O.g)("button",{class:"btn btn-dark float-right",onClick:this.reset},Object(O.g)("i",{class:"fa fa-fw fa-times"}))),Object(O.g)("div",{class:"card-body text-center"},Object(O.g)("p",null,Object(O.g)("b",null,e)," is the desktop shortcut for RuneLite."),Object(O.g)("p",null,"Please drag and drop the setup file that you downloaded."))):t===k.LAUNCHER?Object(O.g)(O.b,null,Object(O.g)("div",{class:"card-header bg-warning"},Object(O.g)("button",{class:"btn btn-dark float-right",onClick:this.reset},Object(O.g)("i",{class:"fa fa-fw fa-times"}))),Object(O.g)("div",{class:"card-body text-center"},Object(O.g)("p",null,Object(O.g)("b",null,e)," is the launcher for RuneLite."),Object(O.g)("p",null,"Please drag and drop the setup file that you downloaded."))):Object(O.g)(O.b,null,Object(O.g)("div",{class:"card-header bg-danger"},Object(O.g)("button",{class:"btn btn-dark float-right",onClick:this.reset},Object(O.g)("i",{class:"fa fa-fw fa-times"}))),Object(O.g)("div",{class:"card-body"},Object(O.g)("p",{class:"text-center mt-5 mb-5"},Object(O.g)("h3",null,Object(O.g)("i",{class:"fa fa-fw fa-times-circle text-danger"})," ",Object(O.g)("b",null,e)," ","is not from"," ",Object(O.g)("a",{href:"https://runelite.net"},"https://runelite.net"))),e.match(/.*runelite.*(dmg|jar|exe|appimage)/i)&&Object(O.g)(O.b,null,Object(O.g)("h5",null,"You've downloaded a fake client, and your account has been compromised. Remove the fake as soon as possible to minimise further damage."),Object(O.g)("p",null,"The following actions should be performed from a secure computer or secure mobile device:"),Object(O.g)("ul",null,Object(O.g)("li",null,"Change your RuneScape password"),Object(O.g)("li",null,"Remove and re-add Authenticator to RuneScape"),Object(O.g)("li",null,"Change your RuneScape bank PIN"),Object(O.g)("li",null,"Change your email's password"),Object(O.g)("li",null,"Add 2FA to your email if you haven't got it enabled"),Object(O.g)("li",null,"Check for any linked accounts by accessing the"," ",Object(O.g)("a",{href:"https://www.runescape.com/account_settings"},"account settings page"))),Object(O.g)("p",null,"Some fake clients also install malware, only a fresh install of your operating system can guarantee the total removal of any unwanted software."),Object(O.g)("p",null,"You might also want to change any email password if you reused the same as your RuneScape account password."),Object(O.g)("p",null,"Once your computer is secure, you should download RuneLite from"," ",Object(O.g)("a",{href:"https://runelite.net"},"https://runelite.net"),"."))))}},{key:"render",value:function(){return Object(O.g)(b.a,null,Object(O.g)(y.a,{title:"Verify RuneLite setup - ".concat(f.a.title),description:"Verify your RuneLite setup files here"}),Object(O.g)("section",{id:"verify",class:"dark-card"},Object(O.g)("div",{class:"content-section"},Object(O.g)("div",{class:"card mb-3"},this.createMsg(this.state.fileName,this.state.fileState)),Object(O.g)("div",{class:"card"},this.createInput()))))}}]),a}(O.a),N=function(){var e=Object(r.a)(n.a.mark((function e(t){var a;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.fetchHashes,e.next=3,a();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.default=Object(h.b)((function(e){return{hashes:Object(p.k)(e),fileNames:Object(p.j)(e)}}),(function(e){return Object(j.b)({fetchHashes:p.c},e)}))(Object(v.a)(N)(S))}}]);
//# sourceMappingURL=13.973e2455.chunk.js.map