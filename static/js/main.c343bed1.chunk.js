(this["webpackJsonpweather-react"]=this["webpackJsonpweather-react"]||[]).push([[0],{11:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),s=c(4),i=c.n(s),r=(c(9),c(3)),d=c(0),l="0e128f999e1fb1174d7af1d207406c01",o="https://api.openweathermap.org/data/2.5/";var h=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)({}),i=Object(r.a)(s,2),h=i[0],j=i[1];return Object(d.jsxs)("div",{className:"undefined"!=typeof h.main?h.main.temp>20?"app warm":"app cold":"app",children:[Object(d.jsxs)("main",{children:[Object(d.jsx)("div",{className:"search-box",children:Object(d.jsx)("input",{type:"text",className:"search-bar search-focus",placeholder:"Type a city ...",onChange:function(e){return n(e.target.value)},value:c,onKeyPress:function(e){"Enter"===e.key&&fetch("".concat(o,"weather?q=").concat(c,"&units=metric&APPID=").concat(l)).then((function(e){return e.json()})).then((function(e){j(e),n(""),"404"===e.cod&&(document.getElementById("myModal").style.display="block")}))}})}),"undefined"!=typeof h.main?Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{className:"location-box",children:[Object(d.jsxs)("div",{className:"location",children:[h.name,", ",h.sys.country]}),Object(d.jsx)("div",{className:"date",children:function(e){var t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()],c=e.getDate(),a=["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()],n=[e.getFullYear()];return"".concat(t," ").concat(c," ").concat(a," ").concat(n)}(new Date)})]}),Object(d.jsxs)("div",{className:"weather-box",children:[Object(d.jsxs)("div",{className:"temp",children:[Math.round(h.main.temp),"\xbaC"]}),Object(d.jsx)("div",{className:"weather",children:h.weather[0].description})]})]}):"",Object(d.jsx)("div",{className:"visit-me",children:Object(d.jsx)("a",{href:"https://www.alexiglesias.in/#work",target:"__blank",className:"visit-me-link",children:"Go back"})})]}),Object(d.jsx)("div",{id:"myModal",class:"modal",children:Object(d.jsxs)("div",{class:"modal-content",children:[Object(d.jsxs)("div",{class:"modal-header",children:[Object(d.jsx)("span",{class:"close",onClick:function(){document.getElementById("myModal").style.display="none"},children:"\xd7"}),Object(d.jsx)("h2",{children:"Ouups!!"})]}),Object(d.jsx)("div",{class:"modal-body",children:Object(d.jsx)("p",{children:"It looks like the city you entered doesn't exist. did you spell them right? \ud83e\udd14"})})]})})]})},j=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,12)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),a(e),n(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(h,{})}),document.getElementById("root")),j()},9:function(e,t,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.c343bed1.chunk.js.map