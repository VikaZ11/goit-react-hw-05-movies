"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{687:function(t,r,e){e.d(r,{Df:function(){return o},M1:function(){return p},Pg:function(){return f},V0:function(){return i},jP:function(){return l},yA:function(){return s}});var n=e(861),a=e(757),u=e.n(a),c=e(263),s="https://image.tmdb.org/t/p/w200";c.Z.defaults.baseURL="https://api.themoviedb.org/3/",c.Z.defaults.params={api_key:"f39ff6961706954b4bce0deacf0d5670",language:"en-US"};var o=function(){var t=(0,n.Z)(u().mark((function t(){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,c.Z.get("trending/movie/day");case 3:return r=t.sent,t.abrupt("return",r.data.results);case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0.message);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}(),i=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("search/movie?query=".concat(r));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"/credits"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(u().mark((function t(r){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("movie/".concat(r,"/reviews"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()},597:function(t,r,e){e.r(r);var n=e(439),a=e(689),u=e(791),c=e(687),s=e(184);r.default=function(){var t=(0,a.UO)().movieId,r=(0,u.useState)(null),e=(0,n.Z)(r,2),o=e[0],i=e[1];return(0,u.useEffect)((function(){(0,c.M1)(t).then(i)}),[t]),o?(0,s.jsx)("ul",{children:o.map((function(t){return(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{src:"".concat(c.yA).concat(t.profile_path),alt:"".concat(t.name)}),(0,s.jsx)("p",{children:t.name}),(0,s.jsxs)("p",{children:["Character: ",t.character]})]},t.id)}))}):null}}}]);
//# sourceMappingURL=597.bb1e536a.chunk.js.map