"use strict";(self.webpackChunkngWallet=self.webpackChunkngWallet||[]).push([[999],{5999:(Q,h,d)=>{d.r(h),d.d(h,{CardModule:()=>E});var p=d(9808),_=d(7423),c=d(3593),t=d(4893),u=d(5704);let x=(()=>{class n{constructor(e,i,o){this.cardService=e,this.route=i,this.router=o,this.cards=[]}ngOnInit(){this.delete()}delete(){let e=Number(this.route.snapshot.paramMap.get("id"));confirm("Delete this card?")&&(console.log("Delete card id: ",e),this.cardService.deleteById(e).subscribe(),this.getAllCards(),setTimeout(()=>{this.router.navigate(["cards"])},200))}getAllCards(){this.cardService.getAllCards().subscribe(e=>this.cards=e)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.J),t.Y36(c.gz),t.Y36(c.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-card-delete"]],decls:2,vars:0,template:function(e,i){1&e&&(t.TgZ(0,"p"),t._uU(1,"Deleting card"),t.qZA())},styles:[".card__list[_ngcontent-%COMP%]{border:1px solid #aaa;margin:0 30px}.form__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;align-items:stretch;justify-content:space-evenly}.form__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;gap:20px}.card__container[_ngcontent-%COMP%]{max-width:650px;display:flex;justify-content:space-between;padding:25px 50px}.img__container[_ngcontent-%COMP%]{width:100%;height:50px}.img__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px}.card__actions[_ngcontent-%COMP%]{text-align:end}"]}),n})();function Z(n,r){if(1&n&&t._UZ(0,"img",13),2&n){const e=t.oxw(2);t.s9C("src",(null==e.card?null:e.card.picture)||"#",t.LSH)}}function F(n,r){if(1&n&&(t.TgZ(0,"div",14)(1,"div",10),t._uU(2),t.qZA(),t.TgZ(3,"div",10),t._uU(4),t.qZA(),t.TgZ(5,"div",10),t._uU(6),t.qZA()()),2&n){const e=t.oxw(2);t.xp6(2),t.hij("Name: ",null==e.card?null:e.card.name,""),t.xp6(2),t.hij("Issuer: ",e.card.issuer,""),t.xp6(2),t.hij("Notes: ",e.card.notes,"")}}function T(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"div",6)(1,"div",7),t.YNc(2,Z,1,1,"img",8),t.qZA(),t.TgZ(3,"div",9)(4,"h4",10),t._uU(5),t.qZA(),t.TgZ(6,"div",10),t._uU(7),t.qZA(),t.TgZ(8,"div",10),t._uU(9),t.qZA(),t.TgZ(10,"div",10),t._uU(11),t.qZA(),t.TgZ(12,"button",11),t.NdJ("click",function(){return t.CHM(e),t.oxw().toggle()}),t._uU(13," More... "),t.qZA(),t.YNc(14,F,7,3,"div",12),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",null==e.card?null:e.card.picture),t.xp6(3),t.hij("Title: ",null==e.card?null:e.card.title,""),t.xp6(2),t.hij("Number: ",null==e.card?null:e.card.cardNumber,""),t.xp6(2),t.hij("Category: ",null==e.card?null:e.card.category,""),t.xp6(2),t.Oqu(e.card.fav?"Favourite":null),t.xp6(3),t.Q6J("ngIf",e.showMore)}}const M=function(n){return["/cards",n,"edit"]},O=function(n){return["/cards",n,"delete"]};let v=(()=>{class n{constructor(e,i,o){this.cardService=e,this.route=i,this.router=o,this.id="",this.showMore=!1}ngOnInit(){this.id=Number(this.route.snapshot.paramMap.get("id")),this.card||this.getCard()}getCard(){this.cardService.getCardById(this.id).subscribe(e=>this.card=e)}toggle(){this.showMore=!this.showMore}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.J),t.Y36(c.gz),t.Y36(c.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-card-detail"]],inputs:{card:"card"},decls:9,vars:8,consts:[[1,"card__container"],["class","card__info",4,"ngIf"],[1,"card__actions"],[1,"card__line","card__date"],["mat-stroked-button","",1,"primary",3,"routerLink"],["mat-flat-button","","color","warn",3,"routerLink"],[1,"card__info"],[1,"img__container"],["alt","pic",3,"src",4,"ngIf"],[1,"card__details"],[1,"card__line"],["mat-stroked-button","",1,"card__more_info",3,"click"],["class","card__isOpened",4,"ngIf"],["alt","pic",3,"src"],[1,"card__isOpened"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t.YNc(1,T,15,6,"div",1),t.TgZ(2,"div",2)(3,"div",3),t._uU(4),t.qZA(),t.TgZ(5,"a",4),t._uU(6," Edit "),t.qZA(),t.TgZ(7,"a",5),t._uU(8,"Delete"),t.qZA()()()),2&e&&(t.xp6(1),t.Q6J("ngIf",i.card),t.xp6(3),t.hij(" ",null!=i.card&&i.card.dueDate?"Expires on "+i.card.dueDate.slice(0,10):"Valid"," "),t.xp6(1),t.Q6J("routerLink",t.VKq(4,M,i.id||(null==i.card?null:i.card.id))),t.xp6(2),t.Q6J("routerLink",t.VKq(6,O,i.id||(null==i.card?null:i.card.id))))},directives:[p.O5,_.lW,_.zs,c.yS],styles:[".card__list[_ngcontent-%COMP%]{border:1px solid #aaa;margin:0 30px}.form__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;align-items:stretch;justify-content:space-evenly}.form__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;gap:20px}.card__container[_ngcontent-%COMP%]{max-width:650px;display:flex;justify-content:space-between;padding:25px 50px}.img__container[_ngcontent-%COMP%]{width:100%;height:50px}.img__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px}.card__actions[_ngcontent-%COMP%]{text-align:end}"]}),n})();var g=d(6960),a=d(2382);function b(n,r){1&n&&(t.TgZ(0,"h1"),t._uU(1,"Add"),t.qZA())}function w(n,r){1&n&&(t.TgZ(0,"h1"),t._uU(1,"Edit"),t.qZA())}function A(n,r){if(1&n&&(t.TgZ(0,"option",35),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.Q6J("ngValue",e),t.xp6(1),t.hij(" ",e," ")}}function P(n,r){1&n&&t._UZ(0,"input",36)}function N(n,r){1&n&&t._UZ(0,"input",37)}let y=(()=>{class n{constructor(e,i,o){this.cardService=e,this.router=i,this.route=o,this.isAddMode=!1,this.id="",this.cards=[],this.categories=g.R}ngOnInit(){this.route.snapshot.params.id?(this.id=this.route.snapshot.params.id,this.newCard=this.editCard(),this.getCard()):(this.isAddMode=!this.id,this.id=(new Date).getTime().toString(),this.newCard=this.editCard())}onSubmit({value:e,valid:i}){this.isAddMode?this.newCard&&i&&(this.cardService.addCard(Object.assign(Object.assign({},e),{id:this.id})).subscribe(o=>this.cards.push(o)),this.getAllCards(),setTimeout(()=>{this.router.navigate(["cards"])},200)):this.newCard&&i&&(this.cardService.updateCard(Object.assign(Object.assign({},e),{id:this.id})).subscribe(o=>o),this.getAllCards(),setTimeout(()=>{this.router.navigate(["cards"])},200))}getCard(){this.cardService.getCardById(this.id).subscribe(e=>{this.card=e,this.newCard=this.editCard()})}editCard(){var e,i,o,l,s,f,m,C;return new a.cw({title:new a.NI((null===(e=this.card)||void 0===e?void 0:e.title)||"",[a.kI.required,a.kI.minLength(2)]),cardNumber:new a.NI((null===(i=this.card)||void 0===i?void 0:i.cardNumber)||"",[a.kI.required,a.kI.minLength(3)]),name:new a.NI((null===(o=this.card)||void 0===o?void 0:o.name)||""),dueDate:new a.NI(this.getDate()||""),category:new a.NI(null===(l=this.card)||void 0===l?void 0:l.category),fav:new a.NI((null===(s=this.card)||void 0===s?void 0:s.fav)||!1),picture:new a.NI((null===(f=this.card)||void 0===f?void 0:f.picture)||""),notes:new a.NI((null===(m=this.card)||void 0===m?void 0:m.notes)||""),issuer:new a.NI((null===(C=this.card)||void 0===C?void 0:C.issuer)||"")})}getAllCards(){this.cardService.getAllCards().subscribe(e=>this.cards=e)}getDate(){var e;return(null===(e=this.card)||void 0===e?void 0:e.dueDate)?(0,p.p6)(this.card.dueDate,"yyyy-MM-dd","en-US"):""}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.J),t.Y36(c.F0),t.Y36(c.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-card-edit"]],decls:49,vars:7,consts:[[4,"ngIf"],[1,"form__container"],["novalidate","",3,"formGroup","ngSubmit"],[1,"form-group"],["for","title"],["type","text","id","title","formControlName","title",1,"form-control"],["for","cardNumber"],["type","text","id","cardNumber","formControlName","cardNumber",1,"form-control"],["for","category"],["name","category","id","category","formControlName","category",1,"form-control"],["disabled","",3,"ngValue"],[3,"ngValue",4,"ngFor","ngForOf"],["for","notes"],["name","notes","id","notes","cols","30","rows","10","formControlName","notes",1,"form-control"],[1,"details__edit","form-group"],[1,"img__container"],["for","image__url"],["value","Url","type","radio","name","image","id","image__url",3,"checked"],["image__url",""],["for","image__file"],["value","File","type","radio","name","image","id","image__file"],["image__File",""],["type","text","formControlName","picture","class","form-control","id","image__url_input",4,"ngIfElseFile","ngIf"],["elseFile",""],["for","name"],["type","text","id","name","formControlName","name",1,"form-control"],["for","dueDate"],["type","date","id","dueDate","formControlName","dueDate",1,"form-control"],["for","issuer"],["type","text","id","issuer","formControlName","issuer",1,"form-control"],["for","fav"],["type","checkbox","id","fav","formControlName","fav"],[1,"edit__actions"],["mat-stroked-button","","color","primary","type","submit"],["mat-stroked-button","","routerLink","/cards"],[3,"ngValue"],["type","text","formControlName","picture","id","image__url_input",1,"form-control"],["type","file","id","image__file_input","formControlName","picture",1,"form-control"]],template:function(e,i){if(1&e&&(t.YNc(0,b,2,0,"h1",0),t.YNc(1,w,2,0,"h1",0),t.TgZ(2,"div",1)(3,"form",2),t.NdJ("ngSubmit",function(){return i.onSubmit(i.newCard)}),t.TgZ(4,"div",3)(5,"label",4),t._uU(6,"Title "),t._UZ(7,"input",5),t.qZA(),t.TgZ(8,"label",6),t._uU(9,"Card Number "),t._UZ(10,"input",7),t.qZA(),t.TgZ(11,"label",8),t._uU(12,"Category "),t.TgZ(13,"select",9)(14,"option",10),t._uU(15,"Select Category"),t.qZA(),t.YNc(16,A,2,2,"option",11),t.qZA()(),t.TgZ(17,"label",12),t._UZ(18,"textarea",13),t.qZA()(),t.TgZ(19,"div",14)(20,"div",15)(21,"label",16),t._uU(22,"Url "),t._UZ(23,"input",17,18),t.qZA(),t.TgZ(25,"label",19),t._uU(26,"File "),t._UZ(27,"input",20,21),t.qZA(),t.YNc(29,P,1,0,"input",22),t.YNc(30,N,1,0,"ng-template",null,23,t.W1O),t.qZA(),t.TgZ(32,"label",24),t._uU(33,"Name "),t._UZ(34,"input",25),t.qZA(),t.TgZ(35,"label",26),t._uU(36,"Due Date "),t._UZ(37,"input",27),t.qZA(),t.TgZ(38,"label",28),t._uU(39,"Issuer "),t._UZ(40,"input",29),t.qZA(),t.TgZ(41,"label",30),t._uU(42,"Add to Favourites "),t._UZ(43,"input",31),t.qZA(),t.TgZ(44,"div",32)(45,"button",33),t._uU(46,"Save"),t.qZA(),t.TgZ(47,"button",34),t._uU(48,"Cancel"),t.qZA()()()()()),2&e){const o=t.MAs(24);t.Q6J("ngIf",i.isAddMode),t.xp6(1),t.Q6J("ngIf",!i.isAddMode),t.xp6(2),t.Q6J("formGroup",i.newCard),t.xp6(11),t.Q6J("ngValue",null),t.xp6(2),t.Q6J("ngForOf",i.categories),t.xp6(7),t.Q6J("checked",!0),t.xp6(6),t.Q6J("ngIf",o.checked)}},directives:[p.O5,a._Y,a.JL,a.sg,a.Fj,a.JJ,a.u,a.EJ,a.YN,a.Kr,p.sg,a.Wl,_.lW,c.rH],styles:[".card__list[_ngcontent-%COMP%]{border:1px solid #aaa;margin:0 30px}.form__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;align-items:stretch;justify-content:space-evenly}.form__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;gap:20px}.card__container[_ngcontent-%COMP%]{max-width:650px;display:flex;justify-content:space-between;padding:25px 50px}.img__container[_ngcontent-%COMP%]{width:100%;height:50px}.img__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px}.card__actions[_ngcontent-%COMP%]{text-align:end}"]}),n})();function U(n,r){if(1&n&&(t.TgZ(0,"option"),t._uU(1),t.qZA()),2&n){const e=r.$implicit;t.xp6(1),t.hij(" ",e," ")}}let I=(()=>{class n{constructor(e){this.route=e,this.cardFilterTitle=new t.vpe,this.cardFilterCategory=new t.vpe,this.cardFilterFav=new t.vpe,this.selectedCategory="",this.categories=g.R}ngOnInit(){}filterByTitle(e){this.cardFilterTitle.emit(e)}filterByCategory(e){this.cardFilterCategory.emit(e.target.value)}filterByFav(e){this.cardFilterFav.emit(e.currentTarget.checked)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(c.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-filter"]],outputs:{cardFilterTitle:"cardFilterTitle",cardFilterCategory:"cardFilterCategory",cardFilterFav:"cardFilterFav"},decls:14,vars:1,consts:[[1,"filter"],["name","category","id","filter__select",3,"change"],["categorySelect",""],["selected",""],[4,"ngFor","ngForOf"],[1,"filter__text"],["type","text","placeholder","Card title first letter..."],["cardInput",""],[3,"click"],["for","favourites"],["id","favourites","type","checkbox",3,"change"]],template:function(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"form",0)(1,"select",1,2),t.NdJ("change",function(s){return i.filterByCategory(s)}),t.TgZ(3,"option",3),t._uU(4,"Select Category"),t.qZA(),t.YNc(5,U,2,1,"option",4),t.qZA(),t.TgZ(6,"div",5),t._UZ(7,"input",6,7),t.TgZ(9,"button",8),t.NdJ("click",function(){t.CHM(o);const s=t.MAs(8);return i.filterByTitle(s.value)}),t._uU(10,"Filter"),t.qZA()(),t.TgZ(11,"label",9),t._uU(12," Favourites "),t.TgZ(13,"input",10),t.NdJ("change",function(s){return i.filterByFav(s)}),t.qZA()()()}2&e&&(t.xp6(5),t.Q6J("ngForOf",i.categories))},directives:[a._Y,a.JL,a.F,a.YN,a.Kr,p.sg],styles:[".filter[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:10px 30px;border:1px solid #fff}"]}),n})(),q=(()=>{class n{transform(e,i){return i&&e?e.filter(o=>o.fav):e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"filterFav",type:n,pure:!0}),n})(),j=(()=>{class n{constructor(){this.categories=g.R}transform(e,i=""){return"Select Category"===i?e:i&&e?e.filter(o=>o.category===i):e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"filterCategory",type:n,pure:!0}),n})(),J=(()=>{class n{transform(e,i="p"){return i&&e?e.filter(o=>o.title[0].toUpperCase()===i.toUpperCase()):e}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275pipe=t.Yjl({name:"filter",type:n,pure:!0}),n})();function S(n,r){1&n&&(t.TgZ(0,"div",6),t._uU(1,"No Cards Yet."),t.qZA())}function D(n,r){if(1&n&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.lnq(" Search for ",e.filterTitle," ",e.filterCat," ",e.favCheck?"Favourites":""," ")}}function Y(n,r){if(1&n&&(t.TgZ(0,"ul",6)(1,"li")(2,"a",7),t._UZ(3,"app-card-detail",8),t.qZA()()()),2&n){const e=r.$implicit;t.xp6(2),t.s9C("routerLink",e.id),t.xp6(1),t.Q6J("card",e)}}const k=[{path:"",component:(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-card"]],decls:1,vars:0,template:function(e,i){1&e&&t._UZ(0,"router-outlet")},directives:[c.lC],styles:[".card__list[_ngcontent-%COMP%]{border:1px solid #aaa;margin:0 30px}.form__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;align-items:stretch;justify-content:space-evenly}.form__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;gap:20px}.card__container[_ngcontent-%COMP%]{max-width:650px;display:flex;justify-content:space-between;padding:25px 50px}.img__container[_ngcontent-%COMP%]{width:100%;height:50px}.img__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px}.card__actions[_ngcontent-%COMP%]{text-align:end}"]}),n})(),children:[{path:"",component:(()=>{class n{constructor(e){this.cardService=e,this.cards=[],this.filterTitle="",this.filterCat="",this.favCheck=!1}ngOnInit(){this.getAllCards()}getAllCards(){this.cardService.getAllCards().subscribe(e=>this.cards=e)}recieveFilterTitle(e){this.filterTitle=e}recieveFilterCategory(e){this.filterCat=e}recieveFilterFav(e){this.favCheck=e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.J))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-card-list"]],decls:9,vars:12,consts:[[3,"cardFilterTitle","cardFilterCategory","cardFilterFav"],["class","card__list",4,"ngIfShowCards","ngIf"],[1,"card__list_showing"],["showCards",""],[4,"ngIf"],["class","card__list",4,"ngFor","ngForOf"],[1,"card__list"],[3,"routerLink"],[3,"card"]],template:function(e,i){1&e&&(t.TgZ(0,"app-filter",0),t.NdJ("cardFilterTitle",function(l){return i.recieveFilterTitle(l)})("cardFilterCategory",function(l){return i.recieveFilterCategory(l)})("cardFilterFav",function(l){return i.recieveFilterFav(l)}),t.qZA(),t.YNc(1,S,2,0,"div",1),t.TgZ(2,"div",2,3),t.YNc(4,D,2,3,"p",4),t.YNc(5,Y,4,2,"ul",5),t.ALo(6,"filterFav"),t.ALo(7,"filterCategory"),t.ALo(8,"filter"),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",!i.cards.length),t.xp6(3),t.Q6J("ngIf",i.filterCat&&"Select Category"!==i.filterCat||i.filterTitle||i.favCheck),t.xp6(1),t.Q6J("ngForOf",t.xi3(6,3,t.xi3(7,6,t.xi3(8,9,i.cards,i.filterTitle),i.filterCat),i.favCheck)))},directives:[I,p.O5,p.sg,c.yS,v],pipes:[q,j,J],styles:[".card__list[_ngcontent-%COMP%]{border:1px solid #aaa;margin:0 30px}.form__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{display:flex;align-items:stretch;justify-content:space-evenly}.form__container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:flex-end;justify-content:space-between;gap:20px}.card__container[_ngcontent-%COMP%]{max-width:650px;display:flex;justify-content:space-between;padding:25px 50px}.img__container[_ngcontent-%COMP%]{width:100%;height:50px}.img__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px}.card__actions[_ngcontent-%COMP%]{text-align:end}"]}),n})(),data:{title:"Cards"}},{path:"add",component:y,data:{title:"Add"}},{path:":id/edit",component:y,data:{title:"Edit"},pathMatch:"full"},{path:":id/delete",component:x,data:{title:"Delete"},pathMatch:"full"},{path:":id",component:v,data:{title:"Detail"},pathMatch:"full"}]}];let L=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[c.Bz.forChild(k)],c.Bz]}),n})(),E=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.ez,L,a.UX,a.u5,_.ot]]}),n})()}}]);