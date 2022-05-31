"use strict";(self.webpackChunkngWallet=self.webpackChunkngWallet||[]).push([[52],{8052:(ct,y,c)=>{c.r(y),c.d(y,{CardModule:()=>ot});var u=c(9808),_=c(7423),f=c(7228),d=c(9525),x=c(5107),t=c(5e3),b=c(520),P=c(4482),T=c(5403),A=c(4671),N=c(5963),I=c(8421);const C=["Cash","Loyalty","Access","Identity","Transport","Other"],k=[{id:"2",title:"Another Card",cardNumber:"9012345678",category:"Loyalty",fav:!1,picture:null,name:"",dueDate:"",notes:"some data",issuer:""},{id:"3",title:"Some Card",cardNumber:"0123456789",category:"Loyalty",fav:!0,picture:null,name:"John Doe",dueDate:"24/04/2022",notes:"",issuer:""},{id:"1",title:"The Other Card",cardNumber:"1234567890",category:"Other",fav:!1,picture:null,name:"",dueDate:"",notes:"",issuer:""}];let v=(()=>{class i{constructor(e){this.http=e,this.urlAPI="https://625e7a57873d6798e2a821ec.mockapi.io",this.cards=k,this.currentId="",this.httpOptions={responseType:"json",headers:new b.WM({"Content-Type":"application/json"})}}addId(){return this.currentId=(new Date).getTime().toString()}addCard(e){return this.addId(),this.http.post(this.urlAPI+"/cards",e,this.httpOptions).pipe(function U(i=1/0){let r;r=i&&"object"==typeof i?i:{count:i};const{count:e=1/0,delay:n,resetOnSuccess:a=!1}=r;return e<=0?A.y:(0,P.e)((s,l)=>{let p,g=0;const m=()=>{let M=!1;p=s.subscribe((0,T.x)(l,h=>{a&&(g=0),l.next(h)},void 0,h=>{if(g++<e){const O=()=>{p?(p.unsubscribe(),p=null,m()):M=!0};if(null!=n){const at="number"==typeof n?(0,N.H)(n):(0,I.Xf)(n(h,g)),w=(0,T.x)(l,()=>{w.unsubscribe(),O()},()=>{l.complete()});at.subscribe(w)}else O()}else l.error(h)})),M&&(p.unsubscribe(),p=null,m())};m()})}(3))}getAllCards(){return this.http.get(this.urlAPI+"/cards")}getCardById(e){return this.http.get(this.urlAPI+"/cards/"+e)}deleteById(e){return this.http.delete(this.urlAPI+"/cards/"+e,{params:{id:e}})}updateCard(e){return this.http.put(this.urlAPI+"/cards/"+e.id,e,this.httpOptions)}}return i.\u0275fac=function(e){return new(e||i)(t.LFG(b.eN))},i.\u0275prov=t.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();function S(i,r){if(1&i&&t._UZ(0,"img",13),2&i){const e=t.oxw(2);t.s9C("src",e.card.picture||"#",t.LSH)}}function J(i,r){if(1&i&&(t.TgZ(0,"div",14)(1,"div",10),t._uU(2),t.ALo(3,"titlecase"),t.qZA(),t.TgZ(4,"div",10),t._uU(5),t.qZA(),t.TgZ(6,"div",10),t._uU(7),t.qZA()()),2&i){const e=t.oxw(2);t.xp6(2),t.hij("Name: ",t.lcZ(3,3,e.card.name),""),t.xp6(3),t.hij("Issuer: ",e.card.issuer,""),t.xp6(2),t.hij("Notes: ",e.card.notes,"")}}function j(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"div",6)(1,"div",7),t.YNc(2,S,1,1,"img",8),t.qZA(),t.TgZ(3,"div",9)(4,"h4",10),t._uU(5),t.ALo(6,"uppercase"),t.qZA(),t.TgZ(7,"div",10),t._uU(8),t.qZA(),t.TgZ(9,"div",10),t._uU(10),t.qZA(),t.TgZ(11,"div",10),t._uU(12),t.qZA(),t.TgZ(13,"button",11),t.NdJ("click",function(){return t.CHM(e),t.oxw().toggle()}),t._uU(14," More... "),t.qZA(),t.YNc(15,J,8,5,"div",12),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.card.picture),t.xp6(3),t.hij("Title: ",t.lcZ(6,6,e.card.title),""),t.xp6(3),t.hij("Number: ",e.card.cardNumber,""),t.xp6(2),t.hij("Category: ",e.card.category,""),t.xp6(2),t.Oqu(e.card.fav?"Favourite":null),t.xp6(3),t.Q6J("ngIf",e.showMore)}}const q=function(i){return["/cards",i,"edit"]};let Z=(()=>{class i{constructor(e,n,a){this.cardService=e,this.route=n,this.router=a,this.deleteEvent=new t.vpe,this.id="",this.showMore=!1}ngOnInit(){this.id=Number(this.route.snapshot.paramMap.get("id")),this.card||this.getCard()}getCard(){this.cardService.getCardById(this.id).subscribe(e=>this.card=e)}toggle(){this.showMore=!this.showMore}delete(e){this.deleteEvent.emit(e),confirm("Delete this card?")&&(this.cardService.deleteById(e).subscribe(),setTimeout(()=>{this.router.navigate(["cards"])},200))}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(v),t.Y36(d.gz),t.Y36(d.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-card-detail"]],inputs:{card:"card"},outputs:{deleteEvent:"deleteEvent"},decls:9,vars:5,consts:[[1,"card__container"],["class","card__info",4,"ngIf"],[1,"card__actions"],[1,"card__line","card__date"],["mat-stroked-button","",1,"primary",3,"routerLink"],["mat-flat-button","","color","warn",1,"primary",3,"click"],[1,"card__info"],[1,"img__container"],["alt","pic",3,"src",4,"ngIf"],[1,"card__details"],[1,"card__line"],["mat-stroked-button","",1,"card__more_info",3,"click"],["class","card__isOpened",4,"ngIf"],["alt","pic",3,"src"],[1,"card__isOpened"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,j,16,8,"div",1),t.TgZ(2,"div",2)(3,"div",3),t._uU(4),t.qZA(),t.TgZ(5,"a",4),t._uU(6," Edit "),t.qZA(),t.TgZ(7,"button",5),t.NdJ("click",function(){return n.delete(n.card.id)}),t._uU(8," Delete "),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("ngIf",n.card),t.xp6(3),t.hij(" ",null!=n.card&&n.card.dueDate?"Expires on "+n.card.dueDate.slice(0,10):"Valid"," "),t.xp6(1),t.Q6J("routerLink",t.VKq(3,q,n.id||n.card.id)))},directives:[u.O5,_.lW,_.zs,d.yS],pipes:[u.gd,u.rS],styles:[".card__list[_ngcontent-%COMP%]{border:1px solid #aaa;margin:0 30px}.form__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;align-items:stretch;justify-content:space-evenly}.form__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;gap:20px}.card__container[_ngcontent-%COMP%]{max-width:650px;display:flex;justify-content:space-between;padding:25px 50px}.img__container[_ngcontent-%COMP%]{width:100%;height:50px}.img__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px}.card__actions[_ngcontent-%COMP%]{text-align:end}.list-viewport[_ngcontent-%COMP%]{min-height:65vh;width:100%}.list-item[_ngcontent-%COMP%]{height:200px}[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;overflow-y:scroll;background:#eee;box-shadow:inset 0 0 1px #aaa}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#aaa;border-radius:10px}button.add[_ngcontent-%COMP%]{position:relative;right:0;margin:1rem 1rem 1rem auto}[_nghost-%COMP%]{display:flex;flex-direction:column}"]}),i})();var o=c(2382);function L(i,r){1&i&&(t.TgZ(0,"h1"),t._uU(1,"Add"),t.qZA())}function Y(i,r){1&i&&(t.TgZ(0,"h1"),t._uU(1,"Edit"),t.qZA())}function D(i,r){if(1&i&&(t.TgZ(0,"option",35),t._uU(1),t.qZA()),2&i){const e=r.$implicit;t.Q6J("ngValue",e),t.xp6(1),t.hij(" ",e," ")}}function E(i,r){1&i&&t._UZ(0,"input",36)}function Q(i,r){1&i&&t._UZ(0,"input",37)}let F=(()=>{class i{constructor(e,n,a){this.cardService=e,this.router=n,this.route=a,this.isAddMode=!1,this.id="",this.cards=[],this.categories=C,this.pictureType=!0}ngOnInit(){this.route.snapshot.params.id?(this.id=this.route.snapshot.params.id,this.newCard=this.editCard(),this.getCard()):(this.isAddMode=!this.id,this.id=(new Date).getTime().toString(),this.newCard=this.editCard())}onSubmit({value:e,valid:n}){this.isAddMode?this.newCard&&n&&(this.cardService.addCard(Object.assign(Object.assign({},e),{id:this.id})).subscribe(a=>this.cards.push(a)),this.getAllCards(),setTimeout(()=>{this.router.navigate(["cards"])},200)):this.newCard&&n&&(this.cardService.updateCard(Object.assign(Object.assign({},e),{id:this.id})).subscribe(a=>a),this.getAllCards(),setTimeout(()=>{this.router.navigate(["cards"])},200))}getCard(){this.cardService.getCardById(this.id).subscribe(e=>{this.card=e,this.newCard=this.editCard()})}editCard(){var e,n,a,s,l,g,p,m;return new o.cw({title:new o.NI((null===(e=this.card)||void 0===e?void 0:e.title)||"",[o.kI.required,o.kI.minLength(2)]),cardNumber:new o.NI((null===(n=this.card)||void 0===n?void 0:n.cardNumber)||"",[o.kI.required,o.kI.minLength(3)]),name:new o.NI((null===(a=this.card)||void 0===a?void 0:a.name)||""),dueDate:new o.NI(this.getDate()||""),category:new o.NI(null===(s=this.card)||void 0===s?void 0:s.category),fav:new o.NI((null===(l=this.card)||void 0===l?void 0:l.fav)||!1),picture:new o.NI((null===(g=this.card)||void 0===g?void 0:g.picture)||""),notes:new o.NI((null===(p=this.card)||void 0===p?void 0:p.notes)||""),issuer:new o.NI((null===(m=this.card)||void 0===m?void 0:m.issuer)||"")})}getAllCards(){this.cardService.getAllCards().subscribe(e=>this.cards=e)}getDate(){var e;return(null===(e=this.card)||void 0===e?void 0:e.dueDate)?(0,u.p6)(this.card.dueDate,"yyyy-MM-dd","en-US"):""}choosePictureType(){this.pictureType=!this.pictureType}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(v),t.Y36(d.F0),t.Y36(d.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-card-edit"]],decls:48,vars:8,consts:[[4,"ngIf"],[1,"form__container"],["novalidate","",3,"formGroup","ngSubmit"],[1,"form-group"],["for","title"],["type","text","id","title","formControlName","title",1,"form-control"],["for","cardNumber"],["type","text","id","cardNumber","formControlName","cardNumber",1,"form-control"],["for","category"],["name","category","id","category","formControlName","category",1,"form-control"],["disabled","",3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],["for","notes"],["name","notes","id","notes","cols","30","rows","10","formControlName","notes",1,"form-control"],[1,"details__edit","form-group"],[1,"img__container"],["for","image__url"],["value","Url","type","radio","name","image","id","image__url",3,"checked","change"],["image__url",""],["for","image__file"],["value","File","type","radio","name","image","id","image__file",3,"change"],["image__File",""],["type","text","formControlName","picture","class","form-control","id","image__url_input",4,"ngIf"],["type","file","id","image__file_input","formControlName","picture","class","form-control",4,"ngIf"],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","dueDate"],["type","date","id","dueDate","formControlName","dueDate",1,"form-control"],["for","issuer"],["type","text","id","issuer","formControlName","issuer",1,"form-control"],["for","fav"],["type","checkbox","id","fav","formControlName","fav"],[1,"edit__actions"],["mat-stroked-button","","color","primary","type","submit"],["mat-stroked-button","","routerLink","/cards"],[3,"ngValue"],["type","text","formControlName","picture","id","image__url_input",1,"form-control"],["type","file","id","image__file_input","formControlName","picture",1,"form-control"]],template:function(e,n){1&e&&(t.YNc(0,L,2,0,"h1",0),t.YNc(1,Y,2,0,"h1",0),t.TgZ(2,"div",1)(3,"form",2),t.NdJ("ngSubmit",function(){return n.onSubmit(n.newCard)}),t.TgZ(4,"div",3)(5,"label",4),t._uU(6,"Title "),t._UZ(7,"input",5),t.qZA(),t.TgZ(8,"label",6),t._uU(9,"Card Number "),t._UZ(10,"input",7),t.qZA(),t.TgZ(11,"label",8),t._uU(12,"Category "),t.TgZ(13,"select",9)(14,"option",10),t._uU(15,"Select Category"),t.qZA(),t.YNc(16,D,2,2,"option",11),t.qZA()(),t.TgZ(17,"label",12),t._UZ(18,"textarea",13),t.qZA()(),t.TgZ(19,"div",14)(20,"div",15)(21,"label",16),t._uU(22,"Url "),t.TgZ(23,"input",17,18),t.NdJ("change",function(){return n.choosePictureType()}),t.qZA()(),t.TgZ(25,"label",19),t._uU(26,"File "),t.TgZ(27,"input",20,21),t.NdJ("change",function(){return n.choosePictureType()}),t.qZA()(),t.YNc(29,E,1,0,"input",22),t.YNc(30,Q,1,0,"input",23),t.qZA(),t.TgZ(31,"label",24),t._uU(32,"Name "),t._UZ(33,"input",25),t.qZA(),t.TgZ(34,"label",26),t._uU(35,"Due Date "),t._UZ(36,"input",27),t.qZA(),t.TgZ(37,"label",28),t._uU(38,"Issuer "),t._UZ(39,"input",29),t.qZA(),t.TgZ(40,"label",30),t._uU(41,"Add to Favourites "),t._UZ(42,"input",31),t.qZA(),t.TgZ(43,"div",32)(44,"button",33),t._uU(45,"Save"),t.qZA(),t.TgZ(46,"button",34),t._uU(47,"Cancel"),t.qZA()()()()()),2&e&&(t.Q6J("ngIf",n.isAddMode),t.xp6(1),t.Q6J("ngIf",!n.isAddMode),t.xp6(2),t.Q6J("formGroup",n.newCard),t.xp6(11),t.Q6J("ngValue",null),t.xp6(2),t.Q6J("ngForOf",n.categories),t.xp6(7),t.Q6J("checked",!0),t.xp6(6),t.Q6J("ngIf",n.pictureType),t.xp6(1),t.Q6J("ngIf",!n.pictureType))},directives:[u.O5,o._Y,o.JL,o.sg,o.Fj,o.JJ,o.u,o.EJ,o.YN,o.Kr,u.sg,o.Wl,_.lW,d.rH],styles:[".card__list[_ngcontent-%COMP%]{border:1px solid #aaa;margin:0 30px}.form__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;align-items:stretch;justify-content:space-evenly}.form__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;gap:20px}.card__container[_ngcontent-%COMP%]{max-width:650px;display:flex;justify-content:space-between;padding:25px 50px}.img__container[_ngcontent-%COMP%]{width:100%;height:50px}.img__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px}.card__actions[_ngcontent-%COMP%]{text-align:end}.list-viewport[_ngcontent-%COMP%]{min-height:65vh;width:100%}.list-item[_ngcontent-%COMP%]{height:200px}[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;overflow-y:scroll;background:#eee;box-shadow:inset 0 0 1px #aaa}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#aaa;border-radius:10px}button.add[_ngcontent-%COMP%]{position:relative;right:0;margin:1rem 1rem 1rem auto}[_nghost-%COMP%]{display:flex;flex-direction:column}"]}),i})();function B(i,r){if(1&i&&(t.TgZ(0,"option"),t._uU(1),t.qZA()),2&i){const e=r.$implicit;t.xp6(1),t.hij(" ",e," ")}}let V=(()=>{class i{constructor(e){this.route=e,this.cardFilterTitle=new t.vpe,this.cardFilterCategory=new t.vpe,this.cardFilterFav=new t.vpe,this.selectedCategory="",this.categories=C}ngOnInit(){}filterByTitle(e){this.cardFilterTitle.emit(e)}filterByCategory(e){this.cardFilterCategory.emit(e.target.value)}filterByFav(e){this.cardFilterFav.emit(e.currentTarget.checked)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(d.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-filter"]],outputs:{cardFilterTitle:"cardFilterTitle",cardFilterCategory:"cardFilterCategory",cardFilterFav:"cardFilterFav"},decls:14,vars:1,consts:[[1,"filter"],["name","category","id","filter__select",3,"change"],["categorySelect",""],["selected",""],[4,"ngFor","ngForOf"],[1,"filter__text"],["type","text","placeholder","Card title first letter..."],["cardInput",""],[3,"click"],["for","favourites"],["id","favourites","type","checkbox",3,"change"]],template:function(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"form",0)(1,"select",1,2),t.NdJ("change",function(l){return n.filterByCategory(l)}),t.TgZ(3,"option",3),t._uU(4,"Select Category"),t.qZA(),t.YNc(5,B,2,1,"option",4),t.qZA(),t.TgZ(6,"div",5),t._UZ(7,"input",6,7),t.TgZ(9,"button",8),t.NdJ("click",function(){t.CHM(a);const l=t.MAs(8);return n.filterByTitle(l.value)}),t._uU(10,"Filter"),t.qZA()(),t.TgZ(11,"label",9),t._uU(12," Favourites "),t.TgZ(13,"input",10),t.NdJ("change",function(l){return n.filterByFav(l)}),t.qZA()()()}2&e&&(t.xp6(5),t.Q6J("ngForOf",n.categories))},directives:[o._Y,o.JL,o.F,o.YN,o.Kr,u.sg],styles:[".filter[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:10px 30px;border:1px solid #fff}"]}),i})(),z=(()=>{class i{transform(e,n){return n&&e?e.filter(a=>a.fav):e}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275pipe=t.Yjl({name:"filterFav",type:i,pure:!0}),i})(),W=(()=>{class i{constructor(){this.categories=C}transform(e,n=""){return"Select Category"===n?e:n&&e?e.filter(a=>a.category===n):e}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275pipe=t.Yjl({name:"filterCategory",type:i,pure:!0}),i})(),X=(()=>{class i{transform(e,n="p"){return n&&e?e.filter(a=>a.title[0].toUpperCase()===n.toUpperCase()):e}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275pipe=t.Yjl({name:"filter",type:i,pure:!0}),i})();function H(i,r){1&i&&(t.TgZ(0,"div",4),t._uU(1," No Cards Yet.\n"),t.qZA())}function K(i,r){if(1&i&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.lnq(" Search for ",e.filterTitle," ",e.filterCat," ",e.favCheck?"Favourites":""," ")}}const R=function(i){return[i]};function G(i,r){if(1&i&&(t.TgZ(0,"li",8)(1,"a",9),t._UZ(2,"app-card-detail",10),t.qZA()()),2&i){const e=r.$implicit;t.xp6(1),t.Q6J("routerLink",t.VKq(2,R,"/cards/"+e.id)),t.xp6(1),t.Q6J("card",e)}}function $(i,r){if(1&i&&(t.YNc(0,K,2,3,"p",5),t.TgZ(1,"cdk-virtual-scroll-viewport",6)(2,"ul"),t.YNc(3,G,3,4,"li",7),t.ALo(4,"filterFav"),t.ALo(5,"filterCategory"),t.ALo(6,"filter"),t.qZA()()),2&i){const e=t.oxw();t.Q6J("ngIf",e.filterCat&&"Select Category"!==e.filterCat||e.filterTitle||e.favCheck),t.xp6(3),t.Q6J("cdkVirtualForOf",t.xi3(4,2,t.xi3(5,5,t.xi3(6,8,e.cards,e.filterTitle),e.filterCat),e.favCheck))}}let tt=(()=>{class i{constructor(e,n){this.cardService=e,this.router=n,this.cards=[],this.filterTitle="",this.filterCat="",this.favCheck=!1}ngOnInit(){this.getAllCards()}getAllCards(){this.cardService.getAllCards().subscribe(e=>this.cards=e)}recieveFilterTitle(e){this.filterTitle=e}recieveFilterCategory(e){this.filterCat=e}recieveFilterFav(e){this.favCheck=e}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(v),t.Y36(d.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-card-list"]],decls:4,vars:2,consts:[[3,"cardFilterTitle","cardFilterCategory","cardFilterFav"],["class","card__list",4,"ngIf","ngIfElse"],["class","card__list_showing"],["showCards",""],[1,"card__list"],[4,"ngIf"],["itemSize","200",1,"list-viewport"],["class","list-item",4,"cdkVirtualFor","cdkVirtualForOf"],[1,"list-item"],[3,"routerLink"],[3,"card"]],template:function(e,n){if(1&e&&(t.TgZ(0,"app-filter",0),t.NdJ("cardFilterTitle",function(s){return n.recieveFilterTitle(s)})("cardFilterCategory",function(s){return n.recieveFilterCategory(s)})("cardFilterFav",function(s){return n.recieveFilterFav(s)}),t.qZA(),t.YNc(1,H,2,0,"div",1),t.YNc(2,$,7,11,"ng-template",2,3,t.W1O)),2&e){const a=t.MAs(3);t.xp6(1),t.Q6J("ngIf",!n.cards.length)("ngIfElse",a)}},directives:[V,u.O5,f.N7,f.xd,f.x0,d.yS,Z],pipes:[z,W,X],styles:[".card__list[_ngcontent-%COMP%]{border:1px solid #aaa;margin:0 30px}.form__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;align-items:stretch;justify-content:space-evenly}.form__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;gap:20px}.card__container[_ngcontent-%COMP%]{max-width:650px;display:flex;justify-content:space-between;padding:25px 50px}.img__container[_ngcontent-%COMP%]{width:100%;height:50px}.img__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px}.card__actions[_ngcontent-%COMP%]{text-align:end}.list-viewport[_ngcontent-%COMP%]{min-height:65vh;width:100%}.list-item[_ngcontent-%COMP%]{height:200px}[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;overflow-y:scroll;background:#eee;box-shadow:inset 0 0 1px #aaa}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#aaa;border-radius:10px}button.add[_ngcontent-%COMP%]{position:relative;right:0;margin:1rem 1rem 1rem auto}[_nghost-%COMP%]{display:flex;flex-direction:column}"]}),i})();const it=[{path:"",canActivate:[x.a],component:(()=>{class i{constructor(){}ngOnInit(){}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-card"]],decls:3,vars:0,consts:[["mat-raised-button","","color","primary","routerLink","add",1,"add"]],template:function(e,n){1&e&&(t.TgZ(0,"button",0),t._uU(1," Add Card\n"),t.qZA(),t._UZ(2,"router-outlet"))},directives:[_.lW,d.rH,d.lC],styles:[".card__list[_ngcontent-%COMP%]{border:1px solid #aaa;margin:0 30px}.form__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;align-items:stretch;justify-content:space-evenly}.form__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;gap:20px}.card__container[_ngcontent-%COMP%]{max-width:650px;display:flex;justify-content:space-between;padding:25px 50px}.img__container[_ngcontent-%COMP%]{width:100%;height:50px}.img__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px}.card__actions[_ngcontent-%COMP%]{text-align:end}.list-viewport[_ngcontent-%COMP%]{min-height:65vh;width:100%}.list-item[_ngcontent-%COMP%]{height:200px}[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px;overflow-y:scroll;background:#eee;box-shadow:inset 0 0 1px #aaa}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:#aaa;border-radius:10px}button.add[_ngcontent-%COMP%]{position:relative;right:0;margin:1rem 1rem 1rem auto}[_nghost-%COMP%]{display:flex;flex-direction:column}"]}),i})(),children:[{path:"",component:tt,data:{title:"Cards"}},{path:"add",component:F,data:{title:"Add"}},{path:":id/edit",component:F,data:{title:"Edit"},pathMatch:"full"},{path:":id",component:Z,data:{title:"Detail"},pathMatch:"full"}]}];let nt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[d.Bz.forChild(it)],d.Bz]}),i})();var rt=c(7556);let ot=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({providers:[rt.e8,x.a],imports:[[u.ez,nt,o.UX,o.u5,_.ot,f.Cl]]}),i})()}}]);