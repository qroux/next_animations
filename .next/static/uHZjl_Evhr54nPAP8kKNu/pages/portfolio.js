(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{AGzW:function(t,i,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/portfolio",function(){return o("eAkX")}])},eAkX:function(t,i,o){"use strict";o.r(i);var a=o("q1tI"),e=o.n(a),n=o("ZMKu"),r=(o("YFqc"),e.a.createElement),l=[{title:"Cursed Twitch",lang:"React | Redux",logo:"/images/logo/react-redux.png",link:"https://react-stream-client.herokuapp.com/",src:"/images/portfolio/js/cursed-twitch.png"},{title:"Kickstarter",lang:"React | Web3",logo:"/images/logo/eth-logo.png",link:"https://kickstarter-copy.herokuapp.com/",src:"/images/portfolio/js/kickstarter.png"},{title:"Cabinet",lang:"Vue | Nuxt",logo:"/images/logo/vue-logo.png",link:"https://dr-roux-gilbert.chirurgiens-dentistes.fr/",src:"/images/portfolio/js/nuxt-cabinet.png"}],s=[{title:"Notice-droit.fr",lang:"Ruby",logo:"/images/portfolio/ruby/ruby-logo.png",link:"https://notice-droit.fr/",src:"/images/portfolio/ruby/notice.png"},{title:"OpenData Paris",lang:"Ruby",logo:"/images/portfolio/ruby/ruby-logo.png",link:"https://trustpair-test.herokuapp.com/",src:"/images/portfolio/ruby/trust.png"},{title:"Cabinet",lang:"Sinatra",logo:"/images/portfolio/ruby/sinatra-logo.png",link:"https://skello-sinatra.herokuapp.com/",src:"/images/portfolio/ruby/skello.png"}],c=[.6,-.05,.01,.99],p={initial:{y:60,opacity:0,transition:{duration:.6,ease:c}},animate:{y:0,opacity:1,transition:{duration:.6,ease:c}}},g={animate:{transition:{staggerChildren:.1}}},u=function(t){return r(n.b.div,{variants:g,className:"project-container"},t.map((function(t){return r(n.b.div,{variants:p,whileHover:{scale:1.05},whileTap:{scale:.95},className:"card project flex-md-column"},r(n.b.img,{initial:{opacity:0},animate:{opacity:1},transition:{delay:.2},key:t.title,src:t.src,width:"100%"}),r("div",{className:"project-info text-center border-top py-2"},r("img",{src:t.logo}),r("h4",{className:"text-dark font-weight-bold"},t.lang)))})))};i.default=function(){return r(n.b.div,{initial:"initial",animate:"animate",exit:{opacity:0}},r("div",{className:"container px-0"},r(n.b.div,{animate:{opacity:1},initial:{opacity:0},className:"title"},r("h1",null,"PORTFOLIO")),r("h2",null,"Javascript"),u(l),r("h2",null,"Ruby"),u(s)))}}},[["AGzW",0,1,3,2,4]]]);