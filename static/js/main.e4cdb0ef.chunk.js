(this.webpackJsonpapp_1=this.webpackJsonpapp_1||[]).push([[0],{20:function(e,t,a){e.exports=a(38)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),l=a.n(c),i=(a(25),a(3)),o=a(4),s=a(6),m=a(5),u=(a(26),a(18)),E=a(1),d=(a(27),a(28),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"header-nav"},r.a.createElement("div",{className:"container"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement("li",null," ",r.a.createElement("a",{href:"/exchange-rate"},"\u0413\u043b\u0430\u0432\u043d\u0430\u044f")," "),r.a.createElement("li",null,r.a.createElement("a",{href:"/exchange-rate/about"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"))))))}}]),a}(r.a.Component)),h=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"top-bar animate-dropdown"}),r.a.createElement("div",{className:"main-header"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"site-title"},"React.exchange rate"))),r.a.createElement(d,null))}}]),a}(r.a.Component),f=(a(29),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"footer-bottom"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",{className:"flex-item"},r.a.createElement("h1",{className:"footer-title"}," ",r.a.createElement("a",{href:"/exchange-rate"},"2020 \xa9 React.exchange rate ")," "),r.a.createElement("p",null,"All Right Reserved")),r.a.createElement("div",{className:"flex-item"},r.a.createElement("div",{className:"module-body"},r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",{className:"disabled"},r.a.createElement("a",{href:"/exchange-rate",tooltip:"\u041a\u0430\u0440\u0442\u0430 \u0441\u0430\u0439\u0442\u0430"},"\u041a\u0430\u0440\u0442\u0430 \u0441\u0430\u0439\u0442\u0430")),r.a.createElement("li",{className:"disabled pointer"},r.a.createElement("a",{href:"/exchange-rate",target:"_blank",tooltip:"Google Sitemap"},"Google sitemap"))))),r.a.createElement("div",{className:"flex-item"},r.a.createElement("div",{className:"module-body"},r.a.createElement("ul",{className:"list-unstyled"},r.a.createElement("li",null,r.a.createElement("a",{href:"/exchange-rate/about",tooltip:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b")),r.a.createElement("li",{className:"disabled pointer"},r.a.createElement("a",{href:"/exchange-rate"},"\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u0438")),r.a.createElement("li",{className:"disabled pointer"},r.a.createElement("a",{href:"/exchange-rate"},"\u041e \u0441\u0435\u0440\u0432\u0438\u0441\u0435")),r.a.createElement("li",{className:"disabled pointer"},r.a.createElement("a",{href:"/exchange-rate"},"\u0423\u0441\u043b\u043e\u0432\u0438\u044f \u0432\u043e\u0437\u0432\u0440\u0430\u0442\u0430")),r.a.createElement("li",{className:"disabled pointer"},r.a.createElement("a",{href:"/exchange-rate"},"\u0421\u043e\u0433\u043b\u0430\u0448\u0435\u043d\u0438\u044f \u043e \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0438 \u0441\u0435\u0440\u0432\u0438\u0441\u0430")))))))))}}]),a}(r.a.Component)),v=(a(30),a(31),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).calcRare=function(e){e.preventDefault();var t=e.target.elements,a=t["count-currency"].value,r=t["type-currency"].value;n.setState({result:a/n.state.rate[r]})},n.state={result:0},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"calculator"},r.a.createElement("h3",null,"\u041a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u043e\u0431\u043c\u0435\u043d\u0430"),r.a.createElement("div",{className:"block"},r.a.createElement("div",null,"\u042f \u0445\u043e\u0447\u0443:"),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.calcRare},r.a.createElement("input",{type:"number",defaultValue:"10",name:"count-currency"}),r.a.createElement("select",{name:"type-currency",id:""},Object.keys(this.props.rate).map((function(e,t){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("input",{className:"submit\u0421ounting",type:"submit",value:"\u041f\u043e\u0434\u0441\u0447\u0438\u0442\u0430\u0442\u044c"})),r.a.createElement("div",null,r.a.createElement("h4",null,"\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442:"),r.a.createElement("ul",{className:"calc-res"},r.a.createElement("li",null,this.state.result.toFixed(2)," RUB "))))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{rate:e.rate}}}]),a}(r.a.Component)),p=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).getRate=function(){fetch("https://api.exchangeratesapi.io/latest?base=RUB").then((function(e){return e.json()})).then((function(e){n.setState({date:e.date});for(var t={},a=0;a<n.currency.length;a++)t[n.currency[a]]=e.rates[n.currency[a]];n.setState({currencyRate:t})}))},n.state={date:"",currencyRate:{}},n.currency=["USD","EUR","PHP","PLN"],n.getRate(),n}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"rate"},r.a.createElement("h3",null,"\u041a\u0443\u0440\u0441 \u0432\u0430\u043b\u044e\u0442 \u043d\u0430 ",this.state.date),r.a.createElement("div",{className:"flex-container"},Object.keys(this.state.currencyRate).map((function(t,a){return r.a.createElement("div",{className:"block flex-item",key:t},r.a.createElement("div",{className:"currency-name"},t),r.a.createElement("div",{className:"currency-in"},(1/e.state.currencyRate[t]).toFixed(2)," RUB*"),r.a.createElement("p",{style:{fontSize:"12px"}},"* \u0426\u0435\u043d\u0430 \u0437\u0430  1 ",t))}))),r.a.createElement(v,{rate:this.state.currencyRate}))}}]),a}(r.a.Component),b=(a(32),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e={Country:"Russia",City:"Moscow",Street:"....",House:"....",Tel:"899999999",Index:"00000"};return r.a.createElement("div",{className:"aboutCss"},r.a.createElement("h1",null,"Contacts:"),r.a.createElement("div",{style:{marginLeft:"5%"}},Object.keys(e).map((function(t){return r.a.createElement("h3",{key:t},t," : ",e[t])}))))}}]),a}(r.a.Component)),y=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).closedCoolie=function(){document.querySelector(".well").innerHTML="",localStorage.setItem("coolie","true")},n.state={},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"siteContainer"},r.a.createElement(h,null),r.a.createElement("div",{className:"container"},r.a.createElement("main",null,r.a.createElement(u.a,null,r.a.createElement(E.c,null,r.a.createElement(E.a,{exact:!0,path:"/exchange-rate",component:p}),r.a.createElement(E.a,{exact:!0,path:"/exchange-rate/about",component:b}))))),"true"===localStorage.getItem("coolie")?"":r.a.createElement("div",{className:"well"},"\u041d\u0430 \u043d\u0430\u0448\u0435\u043c \u0441\u0430\u0439\u0442\u0435 \u043c\u044b \u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u043c cookie \u0434\u043b\u044f \u0441\u0431\u043e\u0440\u0430 \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u043e\u0433\u043e \u0445\u0430\u0440\u0430\u043a\u0442\u0435\u0440\u0430.",r.a.createElement("br",null),"\u0412 \u0447\u0430\u0441\u0442\u043d\u043e\u0441\u0442\u0438,\u0434\u043b\u044f \u043f\u0435\u0440\u0441\u043e\u043d\u0438\u0444\u0438\u0446\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e\u0439 \u0440\u0430\u0431\u043e\u0442\u044b \u0441\u0430\u0439\u0442\u0430 \u043c\u044b \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u043c Ip-\u0430\u0434\u0440\u0435\u0441 \u0440\u0435\u0433\u0438\u043e\u043d\u0430 \u0432\u0430\u0448\u0435\u0433\u043e \u043c\u0435\u0441\u0442\u043e\u043f\u043e\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \xa0",r.a.createElement("button",{onClick:this.closedCoolie,className:"btn btn-primary btn-sm"},"Ok")),r.a.createElement(f,null))}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[20,1,2]]]);
//# sourceMappingURL=main.e4cdb0ef.chunk.js.map