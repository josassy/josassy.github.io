(this["webpackJsonpcom-josiahlansford"]=this["webpackJsonpcom-josiahlansford"]||[]).push([[0],{17:function(e,t,a){e.exports=a.p+"static/media/jl-logo-white-noborders.0142d865.svg"},21:function(e){e.exports=JSON.parse('[{"title":"React Cache Simulator","description":"Simple 2-way associative cache simulator built using React. Created for Computer Architecture class at Cedarville University.","date":"April 2020","url":"https://josassy.github.io/cache-simulator","image-url":"/images/cache-simulator-150.png"}]')},24:function(e,t,a){e.exports=a(35)},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(14),i=a.n(r),c=a(15),o=a(16),s=a(23),m=a(22),u=a(17),h=a.n(u),d=a(18),p=a.n(d),E=a(8),f=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleWindowSizeChange=function(){e.setState({width:window.innerWidth})},e.state={isOpen:!1,width:window.innerWidth},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"handleClick",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"render",value:function(){var e=this.state.width<=600;return l.a.createElement("header",null,l.a.createElement("nav",{className:e?"":"desktop"},l.a.createElement("a",{href:"/"},l.a.createElement("img",{src:h.a,alt:"",id:"header-logo"})),l.a.createElement(p.a,{isOpen:this.state.isOpen,menuClicked:this.handleClick.bind(this),color:"#ffffff"}),l.a.createElement("ul",{className:this.state.isOpen?"active":""},l.a.createElement("li",null,l.a.createElement(E.b,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(E.b,{to:"/projects"},"Projects")))))}}]),a}(l.a.Component),v=(a(34),function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Hey there!"),l.a.createElement("p",null,"This page is still under development. In the meantime, feel free to take a look at my ",l.a.createElement("a",{href:"http://linkedin.com/in/josiahlansford"},"LinkedIn"),"!"))}),g=a(21),w=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Projects"),g.map((function(e){return l.a.createElement("a",{key:e.url,href:e.url,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("div",{className:"card"},l.a.createElement("img",{src:e["image-url"],alt:"Screenshot of ".concat(e.title)}),l.a.createElement("div",null,l.a.createElement("h2",null,e.title),l.a.createElement("p",null,e.description),l.a.createElement("p",{className:"caption"},e.date))))})))},k=a(5),b=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(E.a,null,l.a.createElement(f,null),l.a.createElement("div",{className:"page-content"},l.a.createElement(k.a,{exact:!0,path:"/"},l.a.createElement(v,null)),l.a.createElement(k.a,{path:"/projects"},l.a.createElement(w,null)))))};i.a.render(l.a.createElement(b,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.07e48753.chunk.js.map