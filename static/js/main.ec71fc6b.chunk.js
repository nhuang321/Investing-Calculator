(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/money.60f75dfd.png"},,,,,,function(e,t,a){},,,,,,function(e,t,a){e.exports=a.p+"static/media/chipotle.a43bcc25.jpg"},function(e,t,a){e.exports=a.p+"static/media/airpods.082140cf.jpg"},function(e,t,a){e.exports=a.p+"static/media/vacation.6110f0de.jpg"},function(e,t,a){e.exports=a.p+"static/media/tesla.5ef4ca70.jpg"},function(e,t,a){e.exports=a.p+"static/media/college.c55a7ba9.jpg"},function(e,t,a){e.exports=a.p+"static/media/nyapartment.52fe924e.jpg"},function(e,t,a){e.exports=a.p+"static/media/hamilton.5b9f44ab.jpg"},function(e,t,a){e.exports=a.p+"static/media/roadTrip.a78fc3c7.jpg"},function(e,t,a){e.exports=a.p+"static/media/yacht.8240634b.jpg"},function(e,t,a){e.exports=a(46)},,,,,function(e,t,a){},,,,,function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(23),i=a.n(o),c=(a(21),a(24)),s=a(6),l=a(7),d=a(10),u=a(9),m=a(8),h=a(11),p=(a(41),a(5)),b=a(15),g=a.n(b),f=function(e){function t(){return Object(s.a)(this,t),Object(d.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"submitForm",value:function(e){""===this.props.state.materialisticDesire?alert("Please enter the item you desire"):""===this.props.state.cost?alert("Please enter in the cost of "+this.props.state.materialisticDesire):(e.preventDefault(),this.props.history.push("/future-money"))}},{key:"render",value:function(){return n.a.createElement("div",{className:"content-container"},n.a.createElement("div",{id:"logo"},n.a.createElement("img",{src:g.a,alt:""}),n.a.createElement("h3",null,"Investing Calculator")),n.a.createElement("img",{src:g.a,alt:""}),n.a.createElement("h1",null,"What do you want to waste money on today?"),n.a.createElement("form",{onSubmit:this.submitForm.bind(this)},n.a.createElement("input",{name:"materialisticDesire",id:"desiredItem",value:this.props.state.materialisticDesire,onChange:this.props.handleChange,placeholder:"Enter your materialistic desire here"}),n.a.createElement("h2",null,"How much does it cost? \xa0$"),n.a.createElement("input",{name:"cost",id:"price",value:this.props.state.cost,onChange:this.props.handleChange}),n.a.createElement("button",{type:"submit"},"Calculate Future Wealth")))}}]),t}(r.Component),C=Object(p.e)(f),v=a(27),y=a.n(v),E=a(28),k=a.n(E),w=a(29),j=a.n(w),N=a(30),O=a.n(N),x=a(31),Y=a.n(x),D=a(32),S=a.n(D),I=a(33),M=a.n(I),P=a(34),W=a.n(P),$=a(35),F=a.n($),B=a(14),H=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).state={cardNumber:0,cardLength:0},a.handleClick=a.handleClick.bind(Object(m.a)(a)),a.unfilteredCards=[{name:"You could chow down a chipotle burrito\u2014 with guac!",cost:10,img:y.a,bgColor:"#67b27e",cardColor:"#96d88c"},{name:"You could walk around listening to spotify rocking a pair of airpods",cost:160,img:k.a,bgColor:"#f4bf42",cardColor:"#f9e5b3"},{name:"You can get front row tickets to see Hamilton, the musical",cost:850,img:M.a,bgColor:"#e89933",cardColor:"#f7d0a0"},{name:"You could take a vacation to Cabo for two weeks and chill by the beach",cost:5e3,img:j.a,bgColor:"#76bca0",cardColor:"#baf2db"},{name:"You could drive around in a sweet Tesla Model 3 \u2014or have the car drive you",cost:35e3,img:O.a,bgColor:"#5a69bc",cardColor:"#a0aeff"},{name:"You could take a year-long road trip around the world",cost:24e3,img:W.a,bgColor:"#a885e5",cardColor:"#dcc7ea"},{name:"You could skip the student loans and afford to go to an in-state college or grad school",cost:12e4,img:Y.a,bgColor:"#cc84ab",cardColor:"#fcd6eb"},{name:"You could live in luxury at a high end New York City Apartment",cost:1e6,img:S.a,bgColor:"#d15e53",cardColor:"#d88c88"},{name:"You could sail around in your own private yacht",cost:1e7,img:F.a,bgColor:"#82b5e5",cardColor:"#c4dbf2"}],a.cards=a.unfilteredCards.filter(function(e){return e.cost>a.props.state.cost}),a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleClick",value:function(e){var t=e.target.name;"Next"===t?this.state.cardNumber===this.cards.length-1?this.setState({cardNumber:0}):this.setState(function(e){return{cardNumber:e.cardNumber+1}}):"Previous"===t&&(0===this.state.cardNumber?this.setState({cardNumber:this.cards.length-1}):this.setState(function(e){return{cardNumber:e.cardNumber-1}}))}},{key:"render",value:function(){return n.a.createElement("div",{id:"card-container",style:{backgroundColor:this.cards[this.state.cardNumber].bgColor}},n.a.createElement("div",{id:"logo"},n.a.createElement("img",{src:g.a,alt:""}),n.a.createElement("h3",null,"Investing Calculator")),n.a.createElement("div",{id:"header"},n.a.createElement("h1",null,"If instead of buying a ",this.props.state.materialisticDesire," for $",this.props.state.cost,","),n.a.createElement("h1",null,"you invested $",this.props.state.cost," and waited \xa0",Math.floor(Math.log(this.cards[this.state.cardNumber].cost/this.props.state.cost)/Math.log(1.1))," years ")),n.a.createElement("button",{type:"button",id:"previous",name:"Previous",onClick:this.handleClick,style:{backgroundColor:this.cards[this.state.cardNumber].cardColor}}," \u2039 "),n.a.createElement("div",{className:"card",style:{backgroundColor:this.cards[this.state.cardNumber].cardColor}},n.a.createElement("img",{src:this.cards[this.state.cardNumber].img,alt:""}),n.a.createElement("h1",{id:"text-container"},this.cards[this.state.cardNumber].name)),n.a.createElement("button",{type:"button",id:"next",name:"Next",onClick:this.handleClick,style:{backgroundColor:this.cards[this.state.cardNumber].cardColor}}," \u203a "),n.a.createElement("a",{id:"investing-link",href:"https://www.nerdwallet.com/article/investing/investing-101"},"Learn more about investing"),n.a.createElement(B.b,{to:"/",style:{textDecoration:"none"}},n.a.createElement("button",{type:"button",name:"Restart",id:"restart",style:{backgroundColor:this.cards[this.state.cardNumber].cardColor}},"Restart ")))}}]),t}(r.Component),J=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(d.a)(this,Object(u.a)(t).call(this))).state={materialisticDesire:"",cost:""},e.handleChange=e.handleChange.bind(Object(m.a)(e)),e}return Object(h.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,r=t.value;this.setState(Object(c.a)({},a,r))}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(B.a,null,n.a.createElement("div",null,n.a.createElement(p.a,{path:"/",exact:!0,render:function(t){return n.a.createElement(C,Object.assign({},t,{state:e.state,handleChange:e.handleChange}))}}),n.a.createElement(p.a,{path:"/future-money",exact:!0,render:function(t){return n.a.createElement(H,Object.assign({},t,{state:e.state}))}}))))}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[36,1,2]]]);
//# sourceMappingURL=main.ec71fc6b.chunk.js.map