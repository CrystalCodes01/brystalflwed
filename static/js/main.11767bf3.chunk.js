(this.webpackJsonpbrystalwed=this.webpackJsonpbrystalwed||[]).push([[0],{124:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(44),c=t.n(r),s=(t(69),t(70),t(2)),o=t(8),m=t(21),i=t(22),u=t(24),d=t(23),h=t(25),p=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={days:0,hours:0,minutes:0,seconds:0},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.getTimeDifference(this.props.eventDate),setInterval((function(){return e.getTimeDifference(e.props.eventDate)}),1e3)}},{key:"leadingZero",value:function(e){return e<10&&e>0?"0"+e:e}},{key:"getTimeDifference",value:function(e){var a=Date.parse(e)-Date.parse(new Date),t=Math.floor(a/864e5),n=Math.floor(a/36e5%24),l=Math.floor(a/1e3/60%60),r=Math.floor(a/1e3%60);this.setState({days:t,hours:n,minutes:l,seconds:r})}},{key:"render",value:function(){return l.a.createElement("div",{id:"countDown",className:"timer-wrapper"},l.a.createElement("div",{className:"timer-title"},l.a.createElement("b",null,this.props.eventName)),l.a.createElement("div",{className:"clock"},this.leadingZero(this.state.days)," ",1===this.state.days?"day":"days"),l.a.createElement("div",{className:"clock"},this.leadingZero(this.state.hours)," ",1===this.state.hours?"hour":"hours"),l.a.createElement("div",{className:"clock"},this.leadingZero(this.state.minutes)," ",1===this.state.minutes?"minute":"minutes"),l.a.createElement("div",{className:"clock"},this.leadingZero(this.state.seconds)," ",1===this.state.seconds?"second":"seconds"))}}]),a}(l.a.Component),E=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(u.a)(this,Object(d.a)(a).call(this,e))).state={events:[{name:"See you in",date:"June 20, 2020"}]},t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this.state.events.map((function(e){return l.a.createElement(p,{key:e.date,eventName:e.name,eventDate:e.date})}));return l.a.createElement("div",{className:"App"},e)}}]),a}(n.Component);var b=function(){return l.a.createElement("div",{className:"app wrapper"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("div",{class:"alert alert-info",role:"alert"},l.a.createElement("h3",null,"Updates:"),"Due to COVID-19 all information is being updated. PLease note the change in date - the wedding will be held on ",l.a.createElement("b",null,"Saturday")," June 20th, 2020."),l.a.createElement("div",{className:"jumbotron jumbotron-fluid"},l.a.createElement("div",{className:"container"},l.a.createElement("h1",{className:"display-4 text-center"},"Bryan and Crystal"),l.a.createElement("p",{className:"lead text-center subtext-with-animation"},l.a.createElement("span",null,"June 20th,")," ",l.a.createElement("span",null," 2020")))),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("section",{className:"container-fluid col-12 col-md-8 pl-md-3 col-lg-8"},l.a.createElement("p",{className:"mb-4 larger-2x text-center"},"We are excited to share our wedding day with you on"," ",l.a.createElement("b",null,"June 20th, 2020"),l.a.createElement("br",null),"in Jupiter Florida."),l.a.createElement("p",{className:"larger-1x"},"We've created this website as a convenient way to share all the information and details with you leading up to the wedding. We are so excited to spend the best day of our lives with the best people in the world.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"We have cleared all previous RSVP's so if you can still make it please \xa0",l.a.createElement(s.b,{to:"/rsvp"},"RSVP")," again!"),l.a.createElement("br",null),l.a.createElement("br",null),"We hope you can join us for our lovely and laid back event, but please know that during this time we understand completely if you cannot.",l.a.createElement("br",null),l.a.createElement("br",null),"We will be setting up a virtual attendance and surprise for the guests that plan to attend virtually."),l.a.createElement(E,null))))))};var f=function(){return l.a.createElement("div",{className:"app wrapper"},l.a.createElement("h1",{className:"text-dark mb-0 text-center"},"About Us"),l.a.createElement("p",{className:"icon-header text-center"},"-"," ",l.a.createElement("span",{className:"fa-fw"},l.a.createElement("i",{className:"far fa fa-female"})," ",l.a.createElement("i",{className:"far fa fa-male"}))," ","-"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("section",{className:"container-fluid col-12 col-md-8 pl-md-3 col-lg-8"},l.a.createElement("h3",{className:"fancy-font text-center bottom-2x larger-3x"},"This particular love story began in South Florida, it was the year 2018...."),l.a.createElement("p",{className:"larger-1x"},"Bryan, an exotic Canadian freshly landed in the USA was trying to make new friends and work on his tan.",l.a.createElement("br",null)," ",l.a.createElement("br",null),"Crystal was a software developer living in Fort Lauderdale, focusing mostly on her career and not working on her tan.",l.a.createElement("br",null),l.a.createElement("br",null),"Bryan and Crystal met one evening in Boca Raton over dinner. They hit it off immediately and never looked back. On date three they were already in the ocean diving to see coral, sharks and turtles. Over the next two years they grew as a couple and had many more experiences large and small.",l.a.createElement("br",null),l.a.createElement("br",null),"Crystal finally got a passport and they traveled to South America. Bryan finally got to try fried catfish, and so it went. A few months ago, Bryan took Crystal back to the spot they went diving on their third date. He asked her to marry him along the shoreline that they dove many times before. She said yes, after figuring out that no one was actually drowning in the ocean. He only told her that to get her to look away so he could get on one knee.",l.a.createElement("br",null),l.a.createElement("br",null),"It was all very romantic."),l.a.createElement("hr",null),l.a.createElement("h3",{className:"bottom-2x top-2x text-center"},"An Oscar nominated film about all of this."),l.a.createElement("div",{className:"embed-responsive embed-responsive-16by9 bottom-2x"},l.a.createElement("iframe",{className:"embed-responsive-item",title:"One Summer In Florida",src:"https://www.youtube.com/embed/GVmiV_LGGtY",frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0}))))};var v=function(){return l.a.createElement("div",{className:"app wrapper"},l.a.createElement("h1",{className:"text-dark mb-0 text-center"},"Hotel & Travel"),l.a.createElement("p",{className:"icon-header text-center"},"-"," ",l.a.createElement("span",{className:"fa-fw"},l.a.createElement("i",{className:"far fa-paper-plane"}))," ","-"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("section",{className:"container-fluid col-12 col-md-8 pl-md-3 col-lg-8 text-left"},l.a.createElement("img",{src:"https://raw.githubusercontent.com/CrystalCodes01/brystalflwed/master/brystalwed/public/resort2.jpg",alt:"Jupiter Resort and Spa",className:"img-fluid rounded mb-4"}),l.a.createElement("h2",{className:"skinny text-uppercase sienna text-center"},l.a.createElement("a",{href:"https://www.jupiterbeachresort.com/"},"Jupiter Resort and Spa")),l.a.createElement("p",{className:"bottom-out"},"We are having our wedding at the Jupiter Resort and Spa in Jupiter Florida.",l.a.createElement("br",null),"The resort has everything you need in one spot.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("ul",null,l.a.createElement("li",null,"Free Parking for hotel guests",l.a.createElement("em",null," (*optional valet if desired)")),l.a.createElement("li",null,"2 Restaurants"),l.a.createElement("li",null,"Pool & Poolside Bar with Live Music"),l.a.createElement("li",null,"Private beach access for your entire stay"),l.a.createElement("li",null,"Spa")),l.a.createElement("br",null)),l.a.createElement("h5",null,"Click the address below for directions to the venue:"),l.a.createElement("a",{className:"larger-1x",href:"https://goo.gl/maps/Hvfbp1ERFG6NLtAeA"},l.a.createElement("p",{className:"location pb-0 mb-0"},"Jupiter Resort and Spa"),l.a.createElement("p",null,"5 N Hwy A1A",l.a.createElement("br",null),"Jupiter, FL. 33477",l.a.createElement("br",null))),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("img",{src:"https://raw.githubusercontent.com/CrystalCodes01/brystalflwed/master/brystalwed/public/room.jpg",alt:"Jupiter Resort Rooms",className:"img-fluid rounded mb-1"})))};var y=function(){return l.a.createElement("div",{className:"app wrapper"},l.a.createElement("h1",{className:"text-dark mb-0 text-center"},"Itinerary"),l.a.createElement("p",{className:"icon-header text-center"},"-"," ",l.a.createElement("span",{className:"fa-fw"},l.a.createElement("i",{className:"far fa fa-hourglass-half"}))," ","-"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("section",{className:"container-fluid col-12 col-md-10 pl-md-3 col-lg-8 text-left bottom-2x"},l.a.createElement("table",{className:"table table-bordered table-responsive-sm table-itinerary"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"col",className:"medium-expand"},"Date"),l.a.createElement("th",{scope:"col"},"Event"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Thursday June 18th"),l.a.createElement("td",null,"Bride and Groom arrive at resort")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Friday June 19th"),l.a.createElement("td",null,l.a.createElement("b",null,"Wedding Day! (all events at Jupiter Resort and Spa)"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"6:30pm")," - Ceremony starts. Located on the veranda. Please come 30 minutes early to get seated.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"7pm")," - Cocktail & hors d'oeuvres hour. Located on the veranda.",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"8pm-12am")," - Wedding Reception. Located in the Marlin room and outside Terrace. Includes dinner, drinks and dancing.")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Saturday June 20th"),l.a.createElement("td",null,l.a.createElement("b",null,"11am-12:30pm")," - Casual Brunch @ Jupiter Resort and Spa (show up whenever you like!)",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"12:30pm-7pm")," - Hang with us on the beach, have cocktails at the pool, hit the spa, or go exploring on your own! We will be around all day to spend time with everyone. Have fun!",l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("b",null,"7:30pm")," Dinner - courtesy of the bride and groom - off site - more info on location to come.")),l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},"Sunday June 21st"),l.a.createElement("td",null,"Goodbyes & Departure of Bride and Groom"))))),l.a.createElement("section",{className:"container-fluid col-12 col-md-8 pl-md-3 col-lg-8 text-left bottom-2x"},l.a.createElement("h4",null,"FAQ's"),l.a.createElement("hr",null),l.a.createElement("h5",null,"Wedding Dinner:"),l.a.createElement("p",null,"When you RSVP you will pick your dinner option.",l.a.createElement("br",null),"Menu Options:",l.a.createElement("ul",null,l.a.createElement("li",null,"Miso Glazed Salmon, Ginger Orange Hollandaise"),l.a.createElement("li",null,"Rosemary Pan Seared Chicken, White Wine Peppercorn Sauce"),l.a.createElement("li",null,"New York Strip Sirloin of Beef, Red Wine Demi-Glace"),l.a.createElement("li",null,"Vegetarian Dish"),l.a.createElement("li",null,"All Entrees are Served with Garlic Whipped Potato & Seasonal Vegetable"))),l.a.createElement("h5",{className:"top-2x"},"Wedding Drinks:"),l.a.createElement("p",null,"Cocktail hour and reception will be open bar."),l.a.createElement("h5",{className:"top-2x"},"Veranda and Marlin room:"),l.a.createElement("p",null,"Don't worry, we will make sure we send everyone details on these areas of the resort. The hotel concierge and front desk are always available to point you in the right direction as well.")))},g=t(63),w=t.n(g),N=function(e){function a(){return Object(m.a)(this,a),Object(u.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(h.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"app wrapper"},l.a.createElement("h1",{className:"text-dark mb-0 text-center"},"RSVP"),l.a.createElement("p",{className:"icon-header text-center"},"-"," ",l.a.createElement("span",{className:"fa-fw"},l.a.createElement("i",{className:"far fa fa-envelope-open-o"}))," ","-"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("section",{className:"container-fluid col-12 col-md-12 pl-md-3 col-lg-10 text-left negate"},l.a.createElement("h4",{className:"text-center bottom-0x"},l.a.createElement("b",null,"We have cleared all previous RSVP's so if you can still make it please \xa0",l.a.createElement(s.b,{to:"/rsvp"},"RSVP")," again!")),l.a.createElement(w.a,{iframeResizerOptions:{autoResize:!0,checkOrigin:!1,heightCalculationMethod:"max",enablePublicMethods:!0},src:"https://brystalweddingrsvp.app.rsvpify.com/?embed=1&js=1"}),l.a.createElement("p",{className:"text-center top-1x"},"We need to recieve your RSVP by May 10th, 2020. to ensure everything goes smoothly.",l.a.createElement("br",null),l.a.createElement("br",null),"Having trouble with the form above? ",l.a.createElement("br",null),"Try refreshing this site, or",l.a.createElement("a",{href:"http://brystalweddingrsvp.rsvpify.com"}," click this link to RSVP"),".",l.a.createElement("br",null),l.a.createElement("br",null),"If you have any issues with the RSVP process, please ",l.a.createElement("a",{href:"mailto:brystalwedding@gmail.com?Subject=Wedding Help",target:"_top"},"email us"),"!")))}}]),a}(n.Component);var x=function(){return l.a.createElement("div",{className:"app wrapper"},l.a.createElement("h1",{className:"text-dark mb-0 text-center"},"Virtual Wedding"),l.a.createElement("p",{className:"icon-header text-center"},"-"," ",l.a.createElement("span",{className:"fa-fw"},l.a.createElement("i",{className:"far fa fa-desktop"}))," ","-"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("section",{className:"container-fluid col-12 col-md-8 pl-md-3 col-lg-8"},l.a.createElement("h3",{className:"text-center bottom-2x larger-2x"},"~ More details Coming Soon ~"),l.a.createElement("p",{className:"larger-1x text-center"},"The virtual wedding will be hosted on Zoom, a free application you can download and/or use on your computer.",l.a.createElement("br",null),l.a.createElement("br",null),"Find out how to do that ",l.a.createElement("a",{href:"https://zoom.us/"},"here."),l.a.createElement("br",null)," ",l.a.createElement("br",null),"This page will be updated with schedule, invite code, fun virtual wedding stuff and more soon :-)")))};var k=function(){return l.a.createElement(s.a,{basename:"/"},l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-light"},l.a.createElement(s.b,{to:"/",className:"navbar-brand"},"B & C - 6.19.20"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbar5"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"navbar-collapse collapse justify-content-stretch",id:"navbar5"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement(s.b,{className:"nav-link",to:"/"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link",to:"/rsvp"},"RSVP")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link",to:"/about"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link",to:"/itinerary"},"Itinerary")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link",to:"/hotel"},"Hotel")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.b,{className:"nav-link",to:"/virtualwedding"},"Virtual Wedding"))))),l.a.createElement("main",null,l.a.createElement(o.c,null,l.a.createElement(o.a,{exact:!0,path:"/",component:b}),l.a.createElement(o.a,{exact:!0,path:"/brystalflwed",component:b}),l.a.createElement(o.a,{path:"/about",component:f}),l.a.createElement(o.a,{path:"/rsvp",component:N}),l.a.createElement(o.a,{path:"/hotel",component:v}),l.a.createElement(o.a,{path:"/itinerary",component:y}),l.a.createElement(o.a,{path:"/virtualwedding",component:x}))),l.a.createElement("footer",null,l.a.createElement("div",{className:"container text-center"},l.a.createElement("hr",null),l.a.createElement("h5",{className:"text-uppercase"},"B & C"),l.a.createElement("p",null,l.a.createElement("span",{class:"fa-stack fa-lg"},l.a.createElement("i",{class:"fa fa-heart fa-stack-1x"}),l.a.createElement("i",{class:"fa fa-heart fa-stack-1x fa-inverse"})),"+",l.a.createElement("span",{class:"fa-stack fa-lg"},l.a.createElement("i",{class:"fa fa-heart fa-stack-1x"}),l.a.createElement("i",{class:"fa fa-heart fa-stack-1x fa-inverse"})))),l.a.createElement("div",{className:"container text-center"},l.a.createElement("div",{className:"nav justify-content-center text-dark"},l.a.createElement("p",null,"Questions? Shoot us an"," ",l.a.createElement("a",{href:"mailto:brystalwedding@gmail.com?Subject=Wedding Help",target:"_top"},"email\xa0"),"or reach out via ",l.a.createElement("a",{href:"facebook.com"}," social media"))),l.a.createElement("section",{id:"copyright",class:"container text-center mb-3"},"\xa9 2020 C.Maria")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},64:function(e,a,t){e.exports=t(124)},69:function(e,a,t){},70:function(e,a,t){}},[[64,1,2]]]);
//# sourceMappingURL=main.11767bf3.chunk.js.map