(this["webpackJsonptic-tac-toe"]=this["webpackJsonptic-tac-toe"]||[]).push([[0],{11:function(e,n,t){},13:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),a=t(4),s=t.n(a),i=(t(11),t(2)),l=t(0);var u=function(e){return Object(l.jsx)("div",{onClick:function(n){n.preventDefault(),null===e.winner?e.OnChange(e.id):alert("Game Over, ".concat(e.winner," wins"))},className:"w-1/3 border flex items-center justify-center border-white text-2xl text-white font-bold",children:e.square||"-"})},o=t(5),j=t(6),b=function(){function e(){Object(o.a)(this,e)}return Object(j.a)(e,null,[{key:"restartGame",value:function(){return{squares:Array(9).fill(""),nextPlayer:"X",winner:null}}},{key:"getNextPlayer",value:function(e){return"X"===e?"O":"X"}},{key:"move",value:function(n,t,r){return t[n]||t.splice(n,1,r),{squares:t,nextPlayer:e.getNextPlayer(r),winner:e.calculateWinner(t)}}},{key:"calculateWinner",value:function(e){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<n.length;t++){var r=Object(i.a)(n[t],3),c=r[0],a=r[1],s=r[2];if(e[c]&&e[c]===e[a]&&e[c]===e[s])return console.log(e[c]),e[c]}return null}}]),e}();b.initialeState={squares:Array(9).fill(""),nextPlayer:"X",winner:null};var d=b;var x=function(){var e=Object(r.useState)(d.initialeState),n=Object(i.a)(e,2),t=n[0],c=n[1],a=Object(r.useState)(0),s=Object(i.a)(a,2),o=s[0],j=s[1];function b(e){c(d.move(e,t.squares,t.nextPlayer)),j(o+1)}function x(){c(d.restartGame),j(0)}return Object(l.jsxs)("div",{className:"w-5/12 h-4/5 mt-16 flex flex-col items-center justify-center border bg-white shadow-md rounded-lg",children:[Object(l.jsxs)("div",{children:[t.winner&&Object(l.jsxs)("p",{className:"my-3",children:["The winner is :",Object(l.jsx)("span",{className:"text-green-700 pl-2",children:t.winner})]}),null===t.winner&&9===o&&Object(l.jsxs)("p",{className:"my-3",children:["No winner between",Object(l.jsx)("span",{className:"text-green-700 pl-2 pr-2",children:" X"})," and ",Object(l.jsx)("span",{className:"text-green-700 pl-2",children:" O"})]}),null===t.winner&&o<9&&Object(l.jsxs)("p",{className:"my-3",children:["The Game is",Object(l.jsx)("span",{className:"text-green-700",children:" in progress"})]})]}),Object(l.jsx)("div",{className:"bg-green-700 h-3/4 w-3/4 flex flex-wrap",children:t.squares.map((function(e,n){return Object(l.jsx)(u,{OnChange:b,square:e,id:n,winner:t.winner},n)}))}),t.winner&&Object(l.jsx)("button",{onClick:x,className:"w-1/4 mt-4 p-4 bg-green-500",children:"Restart"}),null===t.winner&&9===o&&Object(l.jsx)("button",{onClick:x,className:"w-1/4 mt-4 p-4 bg-green-500",children:"Restart"})]})};var f=function(){return Object(l.jsx)("div",{className:"h-screen w-screen overflow-hidden bg-gray-50 flex justify-center",children:Object(l.jsx)(x,{})})},h=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,14)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,s=n.getTTFB;t(e),r(e),c(e),a(e),s(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root")),h()}},[[13,1,2]]]);
//# sourceMappingURL=main.7b88748d.chunk.js.map