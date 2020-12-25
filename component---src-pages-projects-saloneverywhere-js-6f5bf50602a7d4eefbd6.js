(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"9eU2":function(A,e,t){"use strict";t.r(e);var a=t("q1tI"),o=t.n(a),n=t("xt/t");e.default=function(){var A=Object(a.useRef)("https://upload.wikimedia.org/wikipedia/commons/b/b2/Hair_Salon_Stations.jpg");return o.a.createElement(n.a,{bannerImage:A,title:"Data Science Challenge",text:[["The Challenge","To take a public dataset and extract desired fields from it about a specific person. I.E. using an instrgram handle scan through the provided account and post data to determine things like location and salon services that they may provide."],["My Approch","The dataset that I was provided with was large, in surplus of a gigabyte. Thus for storage and quick lookup, I decided on using a database. I pulled all the useful data columns, re-created the tables, and linked them via user_ids. I wrote a python script to read the dataset line by line and push it up to the database. With the populated database, I wrote an additional python script that queried the database and derived the required information."],["Database","The reason why I choose to use a database is primarily due to the size of the dataset but also because of its format. It was a massive CSV file that had columns like user.pk which tipped me off that this was a database dump. I opted for MySQL as it is free-ware with more than sufficient power for what I need. I created 3 tables; location, user, and post. Most of the information was in the user table, a bit was in the location table, and the post table was a table that linked a user and location to the post content. I then created a few views because I can to the realization that the vast majority of the post data was not usable(there was no reference user)."],["Data Analysis","Given an Instagram handle, I would find information such as if it is a personal or business account, name of business or person, email, phone number, website, city, country, postal code, and a list of services that the person or business offered (hair styling, nails, spa, haircut, colouring). Some of the fields could be directly found it but others like the location data and services list had to be derivated. For the location data, I used geopy which is a geographical library that has the ability to provided city, postal, and country information of a latitude-longitude point. For the services, I used a word filter off fields like their name, bio, category ... etc."],["Next Steps","There are many areas that I could still have improved this project. From a data cleaning perspective, there are many symbols that people use that look visually similar to the alphabet but wildly different ASCII codes(emojis and such). Currently, I am discarding any character which lies outside of the alphabet but in the future, I would like to convert these 'latex like' symbols to their approach alphabet representation. From a data parsing/analysis perspective, I would like to have a weighting for confidence and use more complex natural language parsing techniques like using the python tool kit NLTK in conjunction with a neural network."]],git:"https://github.com/1mozolacal/DataScienceChallengeSaloneverywhere"})}},JaMG:function(A,e){A.exports="data:image/png;base64,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"},Xbho:function(A,e,t){"use strict";t.d(e,"b",(function(){return s})),t.d(e,"a",(function(){return h}));var a=t("dI71"),o=t("q1tI"),n=t.n(o),i=t("JaMG"),r=t.n(i),l=t("ydZc"),c=t.n(l),s=function(A){function e(e){var t;return(t=A.call(this,e)||this).link=e.link,e.icon?t.icon=e.icon:t.icon=r.a,t.styling=e.className,t}return Object(a.a)(e,A),e.prototype.render=function(){return n.a.createElement("a",{href:this.link},n.a.createElement("img",{alt:"Github Logo",className:this.styling,style:{maxHeight:"100%"},src:this.icon}))},e}(n.a.Component),h=function(A){function e(e){var t;return(t=A.call(this,e)||this).link=e.link,e.icon?t.icon=e.icon:t.icon=c.a,t.styling=e.className,t}return Object(a.a)(e,A),e.prototype.render=function(){return n.a.createElement("a",{href:this.link},n.a.createElement("img",{alt:"Gallery icon",className:this.styling,style:{maxHeight:"100%"},src:this.icon}))},e}(n.a.Component)},"aR/V":function(A,e,t){A.exports={bannerContainer:"projectPage-module--banner-container--1kTHU",bannerImage:"projectPage-module--banner-image--3QAsv",bannerTextWrapper:"projectPage-module--banner-text-wrapper--1tQsj",bannerText:"projectPage-module--banner-text--2xPeF",textContainer:"projectPage-module--text-container--1f_kH",textText:"projectPage-module--text-text--3xaVE",gitButton:"projectPage-module--git-button--Zc5sq",buttonHolder:"projectPage-module--button-holder--Kcg_d",galleryHolder:"projectPage-module--gallery-holder--2p_4r",gallery:"projectPage-module--gallery--1rPVY",galleryImage:"projectPage-module--gallery-image--6fUSl",liquidButton:"projectPage-module--liquid-button--1rgTc"}},"xt/t":function(A,e,t){"use strict";var a=t("q1tI"),o=t.n(a),n=t("aR/V"),i=t.n(n),r=t("Xbho"),l=function(A){return o.a.createElement("div",null,A.data.map((function(A){return o.a.createElement("div",{id:A[0],className:i.a.textContainer},o.a.createElement("h2",{className:i.a.gallery},A[0]),o.a.createElement("div",{className:i.a.textText},A[1]))})))},c=function(A){return o.a.createElement("div",{className:i.a.buttonHolder},A.git&&o.a.createElement(r.b,{className:i.a.gitButton,link:A.git}),A.data&&A.data.map((function(A){return o.a.createElement("a",{href:"#"+A[0],className:i.a.liquidButton},A[0])})),A.gallery&&o.a.createElement(r.a,{className:i.a.gitButton,link:"#Gallery"}))},s=function(A){return o.a.createElement("ul",{className:i.a.gallery},A.data.map((function(A){return o.a.createElement("li",{className:i.a.gallery,key:A.current},o.a.createElement("img",{alt:"Gallery display",className:i.a.galleryImage,src:A.current}))})))};e.a=function(A){Object(a.useRef)("test");return o.a.createElement("div",null,o.a.createElement("div",{className:i.a.bannerContainer},o.a.createElement("img",{alt:"Banner",className:i.a.bannerImage,src:A.bannerImage.current}),o.a.createElement("div",{className:i.a.bannerTextWrapper},o.a.createElement("h1",{className:i.a.bannerText},A.title))),o.a.createElement(c,{data:A.text,git:A.git,gallery:A.gallery}),o.a.createElement("div",null,A.customTop&&A.customTop.current),o.a.createElement("div",null,A.otherContributors),o.a.createElement(l,{data:A.text}),o.a.createElement("div",null,A.customBottom&&A.customBottom.current),A.gallery&&o.a.createElement("div",{id:"Gallery",className:(i.a.textContainer,i.a.galleryHolder)},o.a.createElement(s,{data:A.gallery})))}},ydZc:function(A,e){A.exports="data:image/png;base64,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"}}]);
//# sourceMappingURL=component---src-pages-projects-saloneverywhere-js-6f5bf50602a7d4eefbd6.js.map