(function(t){function e(e){for(var c,i,o=e[0],l=e[1],u=e[2],b=0,d=[];b<o.length;b++)i=o[b],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(t[c]=l[c]);s&&s(e);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],c=!0,o=1;o<n.length;o++){var l=n[o];0!==a[l]&&(c=!1)}c&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var c={},a={app:0},r=[];function i(e){if(c[e])return c[e].exports;var n=c[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=c,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var c in t)i.d(n,c,function(e){return t[e]}.bind(null,c));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var s=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},1125:function(t,e,n){t.exports=n.p+"img/call_white.b747ebfc.svg"},"17ea":function(t,e,n){},"1e7d":function(t,e,n){t.exports=n.p+"img/download-button.f2d6b961.svg"},"22eb":function(t,e,n){"use strict";n("53bd")},"2ec6":function(t,e,n){},"395b":function(t,e,n){},"4c33":function(t,e,n){t.exports=n.p+"img/link_white.13c86625.svg"},"53bd":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23");function a(t,e,n,a,r,i){var o=Object(c["l"])("Nav"),l=Object(c["l"])("Aside"),u=Object(c["l"])("Main"),s=Object(c["l"])("Footer"),b=Object(c["l"])("Layout");return Object(c["g"])(),Object(c["c"])(b,null,{nav:Object(c["o"])((function(){return[Object(c["f"])(o)]})),aside:Object(c["o"])((function(){return[Object(c["f"])(l)]})),main:Object(c["o"])((function(){return[Object(c["f"])(u)]})),footer:Object(c["o"])((function(){return[Object(c["f"])(s)]})),_:1})}var r=Object(c["q"])("data-v-5bbec6c0");Object(c["i"])("data-v-5bbec6c0");var i={class:"layout"},o={class:"nav"},l={class:"aside"},u={class:"main"},s={class:"footer"};Object(c["h"])();var b=r((function(t,e,n,a,r,b){return Object(c["g"])(),Object(c["c"])("div",i,[Object(c["f"])("nav",o,[Object(c["k"])(t.$slots,"nav",{},void 0,!0)]),Object(c["f"])("aside",l,[Object(c["k"])(t.$slots,"aside",{},void 0,!0)]),Object(c["f"])("main",u,[Object(c["k"])(t.$slots,"main",{},void 0,!0),Object(c["f"])("footer",s,[Object(c["k"])(t.$slots,"footer",{},void 0,!0)])])])})),d={name:"Layout"};n("9d30");d.render=b,d.__scopeId="data-v-5bbec6c0";var f=d;n("b0c0");function h(t,e,n,a,r,i){var o=Object(c["l"])("Avatar"),l=Object(c["l"])("TitleSection"),u=Object(c["l"])("PartingLine"),s=Object(c["l"])("Contact"),b=Object(c["l"])("AbilityLevel");return Object(c["g"])(),Object(c["c"])(c["a"],null,[Object(c["f"])("section",null,[r.contact?(Object(c["g"])(),Object(c["c"])(o,{key:0,contact:i.contactData},null,8,["contact"])):Object(c["d"])("",!0),Object(c["f"])(l,{text:"CONTACTO",color:r.colorText,mt:r.titleMarginTop,weight:700,tag:"h4"},null,8,["color","mt"]),Object(c["f"])(u,{weight:.15},null,8,["weight"]),Object(c["f"])(s)]),(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(i.dataContent,(function(t,e){return Object(c["g"])(),Object(c["c"])("section",{key:e},[Object(c["f"])(l,{text:t.name,color:r.colorText,mt:r.titleMarginTop,weight:700,tag:"h4"},null,8,["text","color","mt"]),Object(c["f"])(u,{weight:.15},null,8,["weight"]),Object(c["f"])(b,{skills:t.skills},null,8,["skills"])])})),128))],64)}var m=n("1da1");n("96cf");function j(t,e,n,a,r,i){return Object(c["g"])(),Object(c["c"])("hr",{style:i.styleObject},null,4)}n("a9e3"),n("99af");var O={name:"PartingLine",props:{weight:{type:Number,default:.1},width:{type:Number,default:40},bg:{type:String,default:"#a0aec0"},mt:{type:Number,default:.5},mb:{type:Number,default:.5},ml:{type:Number,default:0},mr:{type:Number,default:null}},computed:{styleObject:function(){return{border:"none",borderTop:"".concat(this.weight,"rem solid ").concat(this.bg),width:"".concat(this.width,"%"),marginTop:"".concat(this.mt,"rem"),marginBottom:"".concat(this.mb,"rem"),marginLeft:null!==this.ml?"".concat(this.ml,"rem"):"auto",marginRight:null!==this.ml?"".concat(this.mr,"rem"):"auto"}}}};O.render=j;var g=O;function p(t,e,n,a,r,i){return Object(c["g"])(),Object(c["c"])("div",{innerHTML:i.myhtml},null,8,["innerHTML"])}var v={name:"TitleSection",props:{tag:{type:String,default:"h1"},text:{type:String,default:"Necesita pasar la prop ( text )"},size:{type:Number,default:1.2},weight:{type:Number,default:600},color:{type:String,default:"#4a5568"},mt:{type:Number,default:0},mb:{type:Number,default:0}},computed:{myhtml:function(){return"\n  <".concat(this.tag,'\n  style="\n    font-size: ').concat(this.size,"rem;\n    font-weight: ").concat(this.weight,";\n    color: ").concat(this.color,";\n    margin-top: ").concat(this.mt,"rem;\n    margin-bottom: ").concat(this.mb,'rem;\n  ">\n    ').concat(this.text,"\n  </").concat(this.tag,">")}}};v.render=p;var w=v,y=n("e852");function x(t){var e=t.query,n=t.variables,c=t.preview,a=c?"https://graphql.datocms.com/preview":"https://graphql.datocms.com/",r=new y["GraphQLClient"](a,{headers:{authorization:"Bearer ".concat("e1ccc855048fe2368342f045b7eb0a")}});return r.request(e,n)}var k=Object(c["q"])("data-v-43cf473e");Object(c["i"])("data-v-43cf473e");var _={class:"skills__name"},S={key:0};Object(c["h"])();var D=k((function(t,e,n,a,r,i){return Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(n.skills,(function(t,e){return Object(c["g"])(),Object(c["c"])("div",{key:e,class:"skills"},[Object(c["f"])("p",_,Object(c["m"])(t.name),1),t.points>0?(Object(c["g"])(),Object(c["c"])("div",S,[(Object(c["g"])(),Object(c["c"])(c["a"],null,Object(c["j"])(5,(function(e){return Object(c["f"])("span",{key:e,class:["skills__trak",e>t.points?"skills__trak--fault":""]},null,2)})),64))])):Object(c["d"])("",!0)])})),128)})),M={name:"AbilityLevel",props:{skills:{type:Array,required:!0}}};n("9039");M.render=D,M.__scopeId="data-v-43cf473e";var E=M,T=Object(c["q"])("data-v-ffa9a4f0");Object(c["i"])("data-v-ffa9a4f0");var C={class:"wrapper__image"};Object(c["h"])();var q=T((function(t,e,n,a,r,i){return Object(c["g"])(),Object(c["c"])("div",C,[Object(c["f"])("img",{class:"image__avatar",src:i.imgCMS?i.imgCMS:r.localImg,alt:n.contact.photo.alt,width:"200",height:"200"},null,8,["src","alt"])])})),I=n("ab26"),L=n.n(I),A={name:"Avatar",props:{contact:{type:Object,required:!0}},data:function(){return{localImg:L.a}},computed:{imgCMS:function(){return this.contact.photo.url}}};n("5b86");A.render=q,A.__scopeId="data-v-ffa9a4f0";var R=A,P=Object(c["q"])("data-v-c33e0f0c");Object(c["i"])("data-v-c33e0f0c");var B={key:0,class:"list"},N={class:"list__item"},z={class:"list__item"},H={class:"list__item"};Object(c["h"])();var G=P((function(t,e,n,a,r,i){return i.contactData?(Object(c["g"])(),Object(c["c"])("ul",B,[Object(c["f"])("li",N,[Object(c["f"])("a",{href:"tel:+".concat(i.contactData.call.phone)},[Object(c["f"])("img",{src:r.CallIcon,alt:"call icon svg",width:"20",height:"20"},null,8,["src"]),Object(c["e"])(" "+Object(c["m"])(i.contactData.call.title),1)],8,["href"])]),Object(c["f"])("li",z,[Object(c["f"])("a",{href:"mailto:".concat(i.contactData.mail.email)},[Object(c["f"])("img",{src:r.EmailIcon,alt:"email icon svg",width:"20",height:"20"},null,8,["src"]),Object(c["e"])(" "+Object(c["m"])(i.contactData.mail.title),1)],8,["href"])]),Object(c["f"])("li",H,[Object(c["f"])("a",{href:i.contactData.linkedin.url,target:"_blanck",rel:"noreferrer"},[Object(c["f"])("img",{src:r.LinkIcon,alt:"link icon svg",width:"20",height:"20"},null,8,["src"]),Object(c["e"])(" "+Object(c["m"])(i.contactData.linkedin.title),1)],8,["href"])])])):Object(c["d"])("",!0)})),W=n("1125"),F=n.n(W),$=n("9648"),J=n.n($),Q=n("4c33"),U=n.n(Q),Y="\nquery {\n  contacto {\n    call\n    mail\n    linkedin\n  }\n}\n",K={name:"Contact",data:function(){return{CallIcon:F.a,EmailIcon:J.a,LinkIcon:U.a,contact:null}},computed:{contactData:function(){return this.contact}},mounted:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getContact();case 2:case"end":return e.stop()}}),e)})))()},methods:{getContact:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x({query:Y});case 3:n=e.sent,c=n.contacto,t.contact=c,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.error=e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}};n("d0f7");K.render=G,K.__scopeId="data-v-c33e0f0c";var V=K,X="\nquery {\n\tallAbilities(orderBy: orderId_ASC) {\n\t\tname\n    points\n\t}\n  allAbilitieTeches(orderBy: orderId_ASC) {\n    name\n    points\n  }\n  allLanguages {\n    name\n    points\n  }\n  contacto{\n    photo {\n      url\n      alt\n    }\n  }\n}\n",Z={name:"Aside",components:{Avatar:R,TitleSection:w,Contact:V,PartingLine:g,AbilityLevel:E},data:function(){return{colorText:"#a0aec0",titleMarginTop:1.8,abilitiesData:[],abilitiesTechData:[],languageData:[],contact:null}},computed:{dataContent:function(){return[{name:"HABILIDADES",skills:this.abilitiesData},{name:"TECNOLOGÍAS",skills:this.abilitiesTechData},{name:"LENGUAJES",skills:this.languageData}]},contactData:function(){return this.contact}},mounted:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getAbilities();case 2:t.loading=!1;case 3:case"end":return e.stop()}}),e)})))()},methods:{getAbilities:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n,c,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x({query:X});case 3:n=e.sent,c=n.allAbilities,a=n.allAbilitieTeches,r=n.allLanguages,i=n.contacto,t.abilitiesData=c,t.abilitiesTechData=a,t.languageData=r,t.contact=i,e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),t.error=e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))()}}};Z.render=h;var tt=Z,et=(n("a4d3"),n("e01a"),Object(c["q"])("data-v-350bb51e"));Object(c["i"])("data-v-350bb51e");var nt={class:"footer"},ct={class:"footer__leftSection"},at={key:0},rt={key:0,class:"footer__rightSection"},it={class:"footer__rightSection__description"};Object(c["h"])();var ot=et((function(t,e,n,a,r,i){return Object(c["g"])(),Object(c["c"])("footer",nt,[Object(c["f"])("div",ct,[Object(c["f"])("span",null," © "+Object(c["m"])(i.leftSection.year)+", ",1),i.leftSection&&i.leftSection.name?(Object(c["g"])(),Object(c["c"])("span",at,Object(c["m"])(i.leftSection.name),1)):Object(c["d"])("",!0)]),i.rightSection&&i.rightSection.tecnologies?(Object(c["g"])(),Object(c["c"])("div",rt,[Object(c["f"])("span",it,Object(c["m"])(i.rightSection.description),1),(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(i.rightSection.tecnologies,(function(t,e){return Object(c["g"])(),Object(c["c"])("a",{key:e,class:"footer__rightSection__link",href:t.url,target:"_blanck",rel:"noreferrer"},[Object(c["f"])("img",{src:t.brand.url,alt:t.brand.alt,width:"16",height:"16"},null,8,["src","alt"])],8,["href"])})),128))])):Object(c["d"])("",!0)])})),lt="\nquery {\n  contacto{\n    name\n  }\n  allTecnologies {\n    class\n    url\n    brand {\n      alt\n      url\n    }\n  }\n}\n",ut={name:"Footer",data:function(){return{contact:null,tecnologies:[]}},computed:{leftSection:function(){return{name:this.contact?this.contact.name:"",year:(new Date).getFullYear()}},rightSection:function(){return{description:"Creado utilizando, ",tecnologies:this.tecnologies}}},mounted:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getContentData();case 2:case"end":return e.stop()}}),e)})))()},methods:{getContentData:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n,c,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x({query:lt});case 3:n=e.sent,c=n.contacto,a=n.allTecnologies,t.contact=c,t.tecnologies=a,e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),t.error=e.t0;case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}}};n("22eb");ut.render=ot,ut.__scopeId="data-v-350bb51e";var st=ut;function bt(t,e,n,a,r,i){var o=Object(c["l"])("HeaderContent"),l=Object(c["l"])("PartingLine"),u=Object(c["l"])("WorkExperience"),s=Object(c["l"])("Education"),b=Object(c["l"])("Courses");return Object(c["g"])(),Object(c["c"])(c["a"],null,[i.contactData?(Object(c["g"])(),Object(c["c"])(o,{key:0,data:i.contactData},null,8,["data"])):Object(c["d"])("",!0),Object(c["f"])(l,{weight:.01,width:100,mt:1,bt:1},null,8,["weight"]),r.workExperience?(Object(c["g"])(),Object(c["c"])(u,{key:1,data:r.workExperience},null,8,["data"])):Object(c["d"])("",!0),Object(c["f"])(l,{weight:.01,width:100,mt:1,bt:1},null,8,["weight"]),i.educationData?(Object(c["g"])(),Object(c["c"])(s,{key:2,data:i.educationData},null,8,["data"])):Object(c["d"])("",!0),Object(c["f"])(l,{weight:.01,width:100,mt:1,bt:1},null,8,["weight"]),i.coursesData?(Object(c["g"])(),Object(c["c"])(b,{key:3,data:i.coursesData},null,8,["data"])):Object(c["d"])("",!0),Object(c["f"])(l,{weight:.01,width:100,mt:1,bt:1},null,8,["weight"])],64)}var dt={data:function(){return{mqMobile:window.matchMedia("(max-width : 576px)"),mqMobileExt:window.matchMedia("(max-width : 767px)"),mobile:!1,mobileExt:!1}},created:function(){this.matchMediaMobile(this.mqMobile),this.mqMobile.addListener(this.matchMediaMobile),this.matchMediaMobileExt(this.mqMobileExt),this.mqMobileExt.addListener(this.matchMediaMobileExt)},methods:{matchMediaMobile:function(t){this.mobile=!!t.matches},matchMediaMobileExt:function(t){this.mobileExt=!!t.matches}}};function ft(t,e,n,a,r,i){var o=Object(c["l"])("TitleSection"),l=Object(c["l"])("PartingLine"),u=Object(c["l"])("SectionInformation");return Object(c["g"])(),Object(c["c"])("section",null,[Object(c["f"])("header",null,[Object(c["f"])(o,{tag:"h3",text:r.nameSection,size:t.mobileExt?1.6:2,weight:800,mt:1.5},null,8,["text","size","mt"])]),Object(c["f"])(l,{weight:.15,width:20,bg:"rgb(49, 130, 206)"},null,8,["weight"]),Object(c["f"])("div",null,[Object(c["f"])(u,{data:i.courses,"width-button":i.showButton},null,8,["data","width-button"])])])}var ht=Object(c["q"])("data-v-2c8d66ea");Object(c["i"])("data-v-2c8d66ea");var mt={class:"section__left"},jt={class:"section__left__title"},Ot={key:1},gt={class:"section__left__subtitle"},pt={class:"section__right"};Object(c["h"])();var vt=ht((function(t,e,n,a,r,i){var o=Object(c["l"])("ModalStadyTitle");return Object(c["g"])(),Object(c["c"])(c["a"],null,[(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(n.data,(function(t,e){return Object(c["g"])(),Object(c["c"])("div",{key:e},[Object(c["f"])("div",{class:["section",!r.showAll&&e>=3?"no-display":""]},[Object(c["f"])("div",mt,[Object(c["f"])("h4",jt,[t.url?(Object(c["g"])(),Object(c["c"])("a",{key:0,href:t.url,target:"_blanck",rel:"noreferrer"},Object(c["m"])(t.title),9,["href"])):Object(c["d"])("",!0),t.url?Object(c["d"])("",!0):(Object(c["g"])(),Object(c["c"])("span",Ot,Object(c["m"])(t.title),1)),t.image?(Object(c["g"])(),Object(c["c"])(o,{key:2,url:t.image.url,alt:t.image.alt},null,8,["url","alt"])):Object(c["d"])("",!0)]),Object(c["f"])("p",gt,Object(c["m"])(t.subtitle),1)]),Object(c["f"])("div",pt,Object(c["m"])(t.year),1)],2)])})),128)),n.widthButton?(Object(c["g"])(),Object(c["c"])("div",{key:0,class:"section__button",onClick:e[1]||(e[1]=function(){return i.showMore&&i.showMore.apply(i,arguments)})},Object(c["m"])(r.showAll?"Mostrar menos":"Mostrar mas"),1)):Object(c["d"])("",!0)],64)})),wt=Object(c["q"])("data-v-5adcf9d4");Object(c["i"])("data-v-5adcf9d4");var yt={class:"modal"};Object(c["h"])();var xt=wt((function(t,e,n,a,r,i){return Object(c["g"])(),Object(c["c"])("div",yt,[Object(c["f"])("div",{class:"modal__button",onClick:e[1]||(e[1]=function(){return i.handleImage&&i.handleImage.apply(i,arguments)})},Object(c["m"])(r.showImage?"Ocultar":"Mostrar"),1),Object(c["p"])(Object(c["f"])("img",{src:n.url,alt:n.alt},null,8,["src","alt"]),[[c["n"],r.showImage]])])})),kt={name:"ModalStadyTitle",props:{url:{type:String,required:!0},alt:{type:String,required:!0}},data:function(){return{showImage:!1}},methods:{handleImage:function(){this.showImage=!this.showImage}}};n("dacc");kt.render=xt,kt.__scopeId="data-v-5adcf9d4";var _t=kt,St={name:"SectionInformation",components:{ModalStadyTitle:_t},props:{data:{type:Array,required:!0},widthButton:{type:Boolean,default:!1}},data:function(){return{showAll:!1}},methods:{showMore:function(){this.showAll=!this.showAll}}};n("c364");St.render=vt,St.__scopeId="data-v-2c8d66ea";var Dt=St,Mt={name:"Courses",components:{TitleSection:w,PartingLine:g,SectionInformation:Dt},mixins:[dt],props:{data:{type:Object,required:!0}},data:function(){return{nameSection:"Cursos"}},computed:{courses:function(){return this.data},showButton:function(){return this.courses.length>3}}};Mt.render=ft;var Et=Mt;function Tt(t,e,n,a,r,i){var o=Object(c["l"])("TitleSection"),l=Object(c["l"])("PartingLine"),u=Object(c["l"])("SectionInformation");return Object(c["g"])(),Object(c["c"])("section",null,[Object(c["f"])("header",null,[Object(c["f"])(o,{tag:"h3",text:r.nameSection,size:t.mobileExt?1.6:2,weight:800,mt:1.5},null,8,["text","size","mt"])]),Object(c["f"])(l,{weight:.15,width:20,bg:"rgb(49, 130, 206)"},null,8,["weight"]),Object(c["f"])("div",null,[Object(c["f"])(u,{data:i.education},null,8,["data"])])])}var Ct={name:"Education",components:{TitleSection:w,PartingLine:g,SectionInformation:Dt},mixins:[dt],props:{data:{type:Object,required:!0}},data:function(){return{nameSection:"Educación"}},computed:{education:function(){return this.data}}};Ct.render=Tt;var qt=Ct,It={class:"header"};function Lt(t,e,n,a,r,i){var o=Object(c["l"])("TitleSection"),l=Object(c["l"])("PartingLine");return Object(c["g"])(),Object(c["c"])("header",It,[Object(c["f"])(o,{size:t.mobileExt?2.2:3.2,weight:900,text:i.dataHeader.name},null,8,["size","text"]),Object(c["f"])(l,{weight:.15,width:20,bg:"rgb(49, 130, 206)"},null,8,["weight"]),Object(c["f"])(o,{tag:"h2",text:i.dataHeader.profession,weight:700,mt:1},null,8,["text"]),(Object(c["g"])(!0),Object(c["c"])(c["a"],null,Object(c["j"])(i.dataHeader.about,(function(t,e){return Object(c["g"])(),Object(c["c"])("p",{key:e},Object(c["m"])(t),1)})),128))])}n("d81d");var At={name:"HeaderContent",components:{TitleSection:w,PartingLine:g},mixins:[dt],props:{data:{type:Object,required:!0}},computed:{dataHeader:function(){var t=this.data,e=t.name,n=t.profession,c=t.about,a=c.value.document.children.map((function(t){return t.children[0].value}));return{name:e,profession:n,about:a}}}};At.render=Lt;var Rt=At;function Pt(t,e,n,a,r,i){var o=Object(c["l"])("TitleSection"),l=Object(c["l"])("PartingLine"),u=Object(c["l"])("SectionInformation");return Object(c["g"])(),Object(c["c"])("section",null,[Object(c["f"])("header",null,[Object(c["f"])(o,{tag:"h3",text:r.nameSection,size:t.mobileExt?1.6:2,weight:800,mt:1.5},null,8,["text","size","mt"])]),Object(c["f"])(l,{weight:.15,width:20,bg:"rgb(49, 130, 206)"},null,8,["weight"]),Object(c["f"])("div",null,[Object(c["f"])(u,{data:i.workExperience,"width-button":i.showButton},null,8,["data","width-button"])])])}var Bt={name:"WorkExperience",components:{TitleSection:w,PartingLine:g,SectionInformation:Dt},mixins:[dt],props:{data:{type:Object,required:!0}},data:function(){return{nameSection:"Experiencia Laboral"}},computed:{workExperience:function(){return this.data},showButton:function(){return this.workExperience.length>3}}};Bt.render=Pt;var Nt=Bt,zt="\nquery {\n  contacto{\n    name\n    profession\n    about {\n      value\n    }\n  }\n  allWorkExperiences(orderBy: year_DESC) {\n    title\n    subtitle\n    url\n    year\n  }\n  allEducations(orderBy: year_DESC) {\n    title\n    subtitle\n    year\n    image {\n      alt\n      url\n    }\n  }\n  allCourses(orderBy: year_DESC) {\n    title\n    subtitle\n    year\n  }\n}\n",Ht={name:"Main",components:{HeaderContent:Rt,WorkExperience:Nt,Education:qt,Courses:Et,PartingLine:g},mixins:[dt],data:function(){return{contact:null,workExperience:[],education:[],courses:[]}},computed:{contactData:function(){return this.contact},workExperienceData:function(){return this.workExperience},educationData:function(){return this.education},coursesData:function(){return this.courses}},mounted:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getContentData();case 2:t.loading=!1;case 3:case"end":return e.stop()}}),e)})))()},methods:{getContentData:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n,c,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x({query:zt});case 3:n=e.sent,c=n.contacto,a=n.allWorkExperiences,r=n.allEducations,i=n.allCourses,t.contact=c,t.workExperience=a,t.education=r,t.courses=i,e.next=17;break;case 14:e.prev=14,e.t0=e["catch"](0),t.error=e.t0;case 17:case"end":return e.stop()}}),e,null,[[0,14]])})))()}}};Ht.render=bt;var Gt=Ht,Wt={class:"actions"},Ft={href:"https://github.com/ALLC84/cv-vuejs",target:"_blanck",rel:"noreferrer"};function $t(t,e,n,a,r,i){return Object(c["g"])(),Object(c["c"])("section",Wt,[Object(c["f"])("a",Ft,[Object(c["f"])("img",{class:"img",src:r.GithubIcon,alt:"icon github.svg",width:"20",height:"20"},null,8,["src"])]),r.pdfToDownload?(Object(c["g"])(),Object(c["c"])("a",{key:0,href:r.pdfToDownload.url,target:"_blanck",rel:"noreferrer",download:""},[Object(c["f"])("img",{class:"img",src:r.DownloadButton,alt:"icon download",width:"20",height:"20"},null,8,["src"])],8,["href"])):Object(c["d"])("",!0)])}var Jt=n("1e7d"),Qt=n.n(Jt),Ut=n("917e"),Yt=n.n(Ut),Kt='\nquery {\n  upload(filter: {id: {eq: "38903115"}}) {\n    url\n  }\n}\n',Vt={name:"Nav",data:function(){return{DownloadButton:Qt.a,GithubIcon:Yt.a,pdfToDownload:null}},mutation:{pdfDownload:function(){return this.pdfToDownload}},mounted:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getContentData();case 2:case"end":return e.stop()}}),e)})))()},methods:{getContentData:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){var n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x({query:Kt});case 3:n=e.sent,c=n.upload,t.pdfToDownload=c,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),t.error=e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}};n("a89f");Vt.render=$t;var Xt=Vt,Zt={name:"App",components:{Layout:f,Nav:Xt,Aside:tt,Main:Gt,Footer:st}};n("7325");Zt.render=a;var te=Zt;Object(c["b"])(te).mount("#app")},"5b86":function(t,e,n){"use strict";n("9c89")},7325:function(t,e,n){"use strict";n("17ea")},"78f4":function(t,e,n){},9039:function(t,e,n){"use strict";n("f634")},"917e":function(t,e,n){t.exports=n.p+"img/github.c3fbf5e4.svg"},9648:function(t,e,n){t.exports=n.p+"img/email_white.b0174e88.svg"},"9c89":function(t,e,n){},"9d30":function(t,e,n){"use strict";n("d104")},"9eba":function(t,e,n){},a89f:function(t,e,n){"use strict";n("395b")},ab26:function(t,e,n){t.exports=n.p+"img/imgabout.379684a1.jpg"},c364:function(t,e,n){"use strict";n("9eba")},d0f7:function(t,e,n){"use strict";n("78f4")},d104:function(t,e,n){},dacc:function(t,e,n){"use strict";n("2ec6")},f634:function(t,e,n){}});
//# sourceMappingURL=app.70b4f52e.js.map