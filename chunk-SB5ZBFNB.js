import{a as ie}from"./chunk-OVD5W6EE.js";import{C as qe,a as je,b as z,d as ne,e as oe,g as V,h as ae,i as Ne,j as ze,k as P,l as H,m as G,n as Ve,o as He,p as Ge,q as W,r as We,s as Ue,t as Qe,u as $e,v as re}from"./chunk-YLYBDD6A.js";import{$a as B,Cb as we,Da as ve,Db as Pe,E as A,Eb as Ee,Fa as X,Jb as ke,La as R,Lb as m,Na as d,Nb as y,Oa as ye,Ob as Ie,Pa as be,Qb as ee,Ra as Ce,Sb as te,U as S,Xa as h,Zb as Se,_a as L,_b as Fe,a as p,b as he,ba as T,cc as Me,ea as v,f as _,ga as r,gb as j,h as K,lb as De,lc as Re,ma as ue,mb as Ae,mc as Le,na as pe,nb as J,ob as C,pb as D,qa as f,qc as Be,ra as fe,rb as c,sb as g,tb as w,ua as F,ub as Te,va as _e,vb as x,w as I,wb as N,xb as xe,y as ge,yb as Oe,z as O,za as M}from"./chunk-AAN35VTV.js";var U=class n{http=r(Be);getTrending(o,e){return this.http.get(`${ie.apiUrl}/trending/all/${o}`,{headers:{Authorization:`Bearer ${ie.apiBearerToken}`},params:{page:e}})}static \u0275fac=function(e){return new(e||n)};static \u0275prov=T({token:n,factory:n.\u0275fac,providedIn:"root"})};var Q=class n{movieOrProgram=Fe.required();infoClick=Se();getPosterUrl(o){return o?`https://image.tmdb.org/t/p/w500${o}`:"assets/no-image.jpg"}openMovieDetails(){this.infoClick.emit(this.movieOrProgram())}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["movie-card"]],inputs:{movieOrProgram:[1,"movieOrProgram"]},outputs:{infoClick:"infoClick"},decls:17,vars:13,consts:[[1,"flex","gap-4","p-4","rounded-xl","shadow-md","border","border-gray-200"],[1,"w-24","h-36","rounded-lg","object-cover",3,"src","alt"],[1,"flex","flex-1","justify-between"],[1,"flex","flex-col","justify-between"],[1,"font-bold","text-xl"],[1,"text-sm","text-gray-500"],[1,"flex","items-center","text-sm","font-medium"],["type","button",1,"flex","items-center","justify-center","w-10","h-10","rounded-full","hover:bg-gray-100","transition-colors",3,"click"],[1,"fa-solid","fa-circle-info","text-xl"]],template:function(e,t){e&1&&(c(0,"div",0),w(1,"img",1),c(2,"div",2)(3,"div",3)(4,"div")(5,"h2",4),m(6),g(),c(7,"p",5),m(8),g(),c(9,"span"),m(10),ee(11,"date"),g()(),c(12,"div",6),m(13),ee(14,"number"),g()(),c(15,"button",7),xe("click",function(){return t.openMovieDetails()}),w(16,"i",8),g()()()),e&2&&(d(),x("src",t.getPosterUrl(t.movieOrProgram().poster_path),R)("alt",t.movieOrProgram().title||t.movieOrProgram().name),d(5),y(" ",t.movieOrProgram().title||t.movieOrProgram().name," "),d(2),y(" ",t.movieOrProgram().media_type==="movie"?"\u{1F3AC} Movie":"\u{1F4FA} TV Show"," "),d(2),y(" ",te(11,7,t.movieOrProgram().release_date||t.movieOrProgram().first_air_date,"yyyy")," \xB7 "),d(3),Ie(" \u2B50 ",te(14,10,t.movieOrProgram().vote_average,"1.1-1")," (",t.movieOrProgram().vote_count,") "))},dependencies:[Le,Re],encapsulation:2,changeDetection:0})};function lt(n,o){}var b=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext};var le=(()=>{class n extends ze{_elementRef=r(X);_focusTrapFactory=r($e);_config;_interactivityChecker=r(Qe);_ngZone=r(_e);_focusMonitor=r(Ue);_renderer=r(Ce);_changeDetectorRef=r(Me);_injector=r(f);_platform=r(je);_document=r(fe);_portalOutlet;_focusTrapped=new _;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=r(b,{optional:!0})||new b,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let i=()=>{a(),l(),e.removeAttribute("tabindex")},a=this._renderer.listen(e,"blur",i),l=this._renderer.listen(e,"mousedown",i)})),e.focus(t)}_focusByCssSelector(e,t){let i=this._elementRef.nativeElement.querySelector(e);i&&this._forceFocus(i,t)}_trapFocus(e){this._isDestroyed||ye(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case"dialog":this._containsFocus()||t.focus(e);break;case!0:case"first-tabbable":this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case"first-heading":this._focusByCssSelector('h1, h2, h3, h4, h5, h6, [role="heading"]',e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e=="string"?t=this._document.querySelector(e):typeof e=="boolean"?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus=="function"){let i=z(),a=this._elementRef.nativeElement;(!i||i===this._document.body||i===a||a.contains(i))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=z();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=z()))}static \u0275fac=function(t){return new(t||n)};static \u0275cmp=h({type:n,selectors:[["cdk-dialog-container"]],viewQuery:function(t,i){if(t&1&&we(P,7),t&2){let a;Pe(a=Ee())&&(i._portalOutlet=a.first)}},hostAttrs:["tabindex","-1",1,"cdk-dialog-container"],hostVars:6,hostBindings:function(t,i){t&2&&j("id",i._config.id||null)("role",i._config.role)("aria-modal",i._config.ariaModal)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null)},features:[L],decls:1,vars:0,consts:[["cdkPortalOutlet",""]],template:function(t,i){t&1&&B(0,lt,0,0,"ng-template",0)},dependencies:[P],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2})}return n})(),k=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new _;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(o,e){this.overlayRef=o,this.config=e,this.disableClose=e.disableClose,this.backdropClick=o.backdropClick(),this.keydownEvents=o.keydownEvents(),this.outsidePointerEvents=o.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!H(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:"keyboard"}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:"mouse"}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=o.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(o,e){if(this._canClose(o)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||"program",this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(o),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(o="",e=""){return this.overlayRef.updateSize({width:o,height:e}),this}addPanelClass(o){return this.overlayRef.addPanelClass(o),this}removePanelClass(o){return this.overlayRef.removePanelClass(o),this}_canClose(o){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(o,e,this.componentInstance))}},dt=new v("DialogScrollStrategy",{providedIn:"root",factory:()=>{let n=r(f);return()=>G(n)}}),ct=new v("DialogData"),mt=new v("DefaultDialogConfig");function ht(n){let o=M(n),e=new F;return{valueSignal:o,get value(){return o()},change:e,ngOnDestroy(){e.complete()}}}var Ke=(()=>{class n{_injector=r(f);_defaultOptions=r(mt,{optional:!0});_parentDialog=r(n,{optional:!0,skipSelf:!0});_overlayContainer=r(He);_idGenerator=r(V);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new _;_afterOpenedAtThisLevel=new _;_ariaHiddenElements=new Map;_scrollStrategy=r(dt);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=I(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(S(void 0)));constructor(){}open(e,t){let i=this._defaultOptions||new b;t=p(p({},i),t),t.id=t.id||this._idGenerator.getId("cdk-dialog-"),t.id&&this.getDialogById(t.id);let a=this._getOverlayConfig(t),l=We(this._injector,a),s=new k(l,t),u=this._attachContainer(l,s,t);if(s.containerInstance=u,!this.openDialogs.length){let Z=this._overlayContainer.getContainerElement();u._focusTrapped?u._focusTrapped.pipe(A(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(Z)}):this._hideNonDialogContentFromAssistiveTechnology(Z)}return this._attachDialogContent(e,s,u,t),this.openDialogs.push(s),s.closed.subscribe(()=>this._removeOpenDialog(s,!0)),this.afterOpened.next(s),s}closeAll(){se(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){se(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),se(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new Ve({positionStrategy:e.positionStrategy||W().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,i){let a=i.injector||i.viewContainerRef?.injector,l=[{provide:b,useValue:i},{provide:k,useValue:t},{provide:Ge,useValue:e}],s;i.container?typeof i.container=="function"?s=i.container:(s=i.container.type,l.push(...i.container.providers(i))):s=le;let u=new ae(s,i.viewContainerRef,f.create({parent:a||this._injector,providers:l}));return e.attach(u).instance}_attachDialogContent(e,t,i,a){if(e instanceof be){let l=this._createInjector(a,t,i,void 0),s={$implicit:a.data,dialogRef:t};a.templateContext&&(s=p(p({},s),typeof a.templateContext=="function"?a.templateContext():a.templateContext)),i.attachTemplatePortal(new Ne(e,null,s,l))}else{let l=this._createInjector(a,t,i,this._injector),s=i.attachComponentPortal(new ae(e,a.viewContainerRef,l));t.componentRef=s,t.componentInstance=s.instance}}_createInjector(e,t,i,a){let l=e.injector||e.viewContainerRef?.injector,s=[{provide:ct,useValue:e.data},{provide:k,useValue:t}];return e.providers&&(typeof e.providers=="function"?s.push(...e.providers(t,e,i)):s.push(...e.providers)),e.direction&&(!l||!l.get(oe,null,{optional:!0}))&&s.push({provide:oe,useValue:ht(e.direction)}),f.create({parent:l||a,providers:s})}_removeOpenDialog(e,t){let i=this.openDialogs.indexOf(e);i>-1&&(this.openDialogs.splice(i,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,l)=>{a?l.setAttribute("aria-hidden",a):l.removeAttribute("aria-hidden")}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let i=t.length-1;i>-1;i--){let a=t[i];a!==e&&a.nodeName!=="SCRIPT"&&a.nodeName!=="STYLE"&&!a.hasAttribute("aria-live")&&!a.hasAttribute("popover")&&(this._ariaHiddenElements.set(a,a.getAttribute("aria-hidden")),a.setAttribute("aria-hidden","true"))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static \u0275fac=function(t){return new(t||n)};static \u0275prov=T({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();function se(n,o){let e=n.length;for(;e--;)o(n[e])}function gt(n,o){}var q=class{viewContainerRef;injector;id;role="dialog";panelClass="";hasBackdrop=!0;backdropClass="";disableClose=!1;closePredicate;width="";height="";minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus="first-tabbable";restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration},de="mdc-dialog--open",Xe="mdc-dialog--opening",Je="mdc-dialog--closing",ut=150,pt=75,ft=(()=>{class n extends le{_animationStateChanged=new F;_animationsEnabled=!re();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?tt(this._config.enterAnimationDuration)??ut:0;_exitAnimationDuration=this._animationsEnabled?tt(this._config.exitAnimationDuration)??pt:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:"opening",totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(et,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Xe,de)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(de),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:"closing",totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(de),this._animationsEnabled?(this._hostElement.style.setProperty(et,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(Je)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:"closed",totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(Xe,Je)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame=="function"?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:"opened",totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add("mat-mdc-dialog-component-host"),t}static \u0275fac=(()=>{let e;return function(i){return(e||(e=ve(n)))(i||n)}})();static \u0275cmp=h({type:n,selectors:[["mat-dialog-container"]],hostAttrs:["tabindex","-1",1,"mat-mdc-dialog-container","mdc-dialog"],hostVars:10,hostBindings:function(t,i){t&2&&(x("id",i._config.id),j("aria-modal",i._config.ariaModal)("role",i._config.role)("aria-labelledby",i._config.ariaLabel?null:i._ariaLabelledByQueue[0])("aria-label",i._config.ariaLabel)("aria-describedby",i._config.ariaDescribedBy||null),ke("_mat-animation-noopable",!i._animationsEnabled)("mat-mdc-dialog-container-with-actions",i._actionSectionCount>0))},features:[L],decls:3,vars:0,consts:[[1,"mat-mdc-dialog-inner-container","mdc-dialog__container"],[1,"mat-mdc-dialog-surface","mdc-dialog__surface"],["cdkPortalOutlet",""]],template:function(t,i){t&1&&(C(0,"div",0)(1,"div",1),B(2,gt,0,0,"ng-template",2),D()())},dependencies:[P],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--mat-dialog-container-max-width, 560px);
  min-width: var(--mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--mat-dialog-container-elevation-shadow, none);
  border-radius: var(--mat-dialog-container-shape, var(--mat-sys-corner-extra-large, 4px));
  background-color: var(--mat-dialog-container-color, var(--mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--mat-dialog-subhead-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--mat-dialog-subhead-font, var(--mat-sys-headline-small-font, inherit));
  line-height: var(--mat-dialog-subhead-line-height, var(--mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--mat-dialog-subhead-size, var(--mat-sys-headline-small-size, 1rem));
  font-weight: var(--mat-dialog-subhead-weight, var(--mat-sys-headline-small-weight, 400));
  letter-spacing: var(--mat-dialog-subhead-tracking, var(--mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--mat-dialog-supporting-text-color, var(--mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--mat-dialog-supporting-text-font, var(--mat-sys-body-medium-font, inherit));
  line-height: var(--mat-dialog-supporting-text-line-height, var(--mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--mat-dialog-supporting-text-size, var(--mat-sys-body-medium-size, 1rem));
  font-weight: var(--mat-dialog-supporting-text-weight, var(--mat-sys-body-medium-weight, 400));
  letter-spacing: var(--mat-dialog-supporting-text-tracking, var(--mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2})}return n})(),et="--mat-dialog-transition-duration";function tt(n){return n==null?null:typeof n=="number"?n:n.endsWith("ms")?ne(n.substring(0,n.length-2)):n.endsWith("s")?ne(n.substring(0,n.length-1))*1e3:n==="0"?0:null}var $=(function(n){return n[n.OPEN=0]="OPEN",n[n.CLOSING=1]="CLOSING",n[n.CLOSED=2]="CLOSED",n})($||{}),ce=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new K(1);_beforeClosed=new K(1);_result;_closeFallbackTimeout;_state=$.OPEN;_closeInteractionType;constructor(o,e,t){this._ref=o,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=o.id,o.addPanelClass("mat-mdc-dialog-panel"),t._animationStateChanged.pipe(O(i=>i.state==="opened"),A(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(O(i=>i.state==="closed"),A(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),o.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),ge(this.backdropClick(),this.keydownEvents().pipe(O(i=>i.keyCode===27&&!this.disableClose&&!H(i)))).subscribe(i=>{this.disableClose||(i.preventDefault(),_t(this,i.type==="keydown"?"keyboard":"mouse"))})}close(o){let e=this._config.closePredicate;e&&!e(o,this._config,this.componentInstance)||(this._result=o,this._containerInstance._animationStateChanged.pipe(O(t=>t.state==="closing"),A(1)).subscribe(t=>{this._beforeClosed.next(o),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=$.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(o){let e=this._ref.config.positionStrategy;return o&&(o.left||o.right)?o.left?e.left(o.left):e.right(o.right):e.centerHorizontally(),o&&(o.top||o.bottom)?o.top?e.top(o.top):e.bottom(o.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(o="",e=""){return this._ref.updateSize(o,e),this}addPanelClass(o){return this._ref.addPanelClass(o),this}removePanelClass(o){return this._ref.removePanelClass(o),this}getState(){return this._state}_finishDialogClose(){this._state=$.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function _t(n,o,e){return n._closeInteractionType=o,n.close(e)}var me=new v("MatMdcDialogData"),vt=new v("mat-mdc-dialog-default-options"),yt=new v("mat-mdc-dialog-scroll-strategy",{providedIn:"root",factory:()=>{let n=r(f);return()=>G(n)}}),it=(()=>{class n{_defaultOptions=r(vt,{optional:!0});_scrollStrategy=r(yt);_parentDialog=r(n,{optional:!0,skipSelf:!0});_idGenerator=r(V);_injector=r(f);_dialog=r(Ke);_animationsDisabled=re();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new _;_afterOpenedAtThisLevel=new _;dialogConfigClass=q;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=I(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(S(void 0)));constructor(){this._dialogRefConstructor=ce,this._dialogContainerType=ft,this._dialogDataToken=me}open(e,t){let i;t=p(p({},this._defaultOptions||new q),t),t.id=t.id||this._idGenerator.getId("mat-mdc-dialog-"),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(e,he(p({},t),{positionStrategy:W(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()==="0"||t.exitAnimationDuration?.toString()==="0",container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:b,useValue:t}]},templateContext:()=>({dialogRef:i}),providers:(l,s,u)=>(i=new this._dialogRefConstructor(l,t,u),i.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:u},{provide:this._dialogDataToken,useValue:s.data},{provide:this._dialogRefConstructor,useValue:i}])}));return i.componentRef=a.componentRef,i.componentInstance=a.componentInstance,this.openDialogs.push(i),this.afterOpened.next(i),i.afterClosed().subscribe(()=>{let l=this.openDialogs.indexOf(i);l>-1&&(this.openDialogs.splice(l,1),this.openDialogs.length||this._getAfterAllClosed().next())}),i}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static \u0275fac=function(t){return new(t||n)};static \u0275prov=T({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();var Y=class n{movieOrProgram=r(me);getPosterUrl(o){return o?`https://image.tmdb.org/t/p/w500${o}`:"assets/no-image.jpg"}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["trending-modal"]],decls:9,vars:4,consts:[[1,"flex","gap-6","p-10","rounded-2xl","shadow-lg"],[1,"w-40","rounded-xl","object-cover",3,"src"],[1,"text-3xl","font-bold"],[1,"mt-2","text-gray-500"],[1,"mt-4","text-gray-700"]],template:function(e,t){e&1&&(c(0,"div",0),w(1,"img",1),c(2,"div")(3,"h2",2),m(4),g(),c(5,"div",3),m(6),g(),c(7,"div",4),m(8),g()()()),e&2&&(d(),x("src",t.getPosterUrl(t.movieOrProgram.poster_path),R),d(3),y(" ",t.movieOrProgram.title||t.movieOrProgram.name," "),d(2),y(" ",t.movieOrProgram.release_date||t.movieOrProgram.first_air_date," "),d(2),y(" ",t.movieOrProgram.overview," "))},encapsulation:2})};var bt=(n,o)=>o.id;function Ct(n,o){if(n&1){let e=Te();C(0,"movie-card",5),N("infoClick",function(i){ue(e);let a=Oe();return pe(a.openMovieDetails(i))}),D()}if(n&2){let e=o.$implicit;J("movieOrProgram",e)}}var nt=class n{trendingService=r(U);currentPage=1;totalResults=0;trendingMovies=M([]);dialog=r(it);constructor(){this.getTrending(this.currentPage)}getTrending(o){this.trendingService.getTrending("day",o).subscribe(e=>{this.trendingMovies.set(e.results),this.currentPage=e.page,this.totalResults=e.total_results})}onPageChange(o){let e=o.pageIndex+1;this.getTrending(e),window.scrollTo({top:0,behavior:"smooth"})}openMovieDetails(o){this.dialog.open(Y,{data:o,width:"1000px",maxWidth:"90vw"})}static \u0275fac=function(e){return new(e||n)};static \u0275cmp=h({type:n,selectors:[["trending-page"]],decls:7,vars:4,consts:[[1,"container","mx-auto","p-4"],[1,"text-3xl","font-bold","mb-6"],[1,"flex","flex-col","gap-4"],[3,"movieOrProgram"],["showFirstLastButtons","",1,"mt-6",3,"page","length","pageIndex","pageSize","hidePageSize"],[3,"infoClick","movieOrProgram"]],template:function(e,t){e&1&&(C(0,"div",0)(1,"h1",1),m(2,"Trending"),D(),C(3,"div",2),De(4,Ct,1,1,"movie-card",3,bt),D(),C(6,"mat-paginator",4),N("page",function(a){return t.onPageChange(a)}),D()()),e&2&&(d(4),Ae(t.trendingMovies()),d(2),J("length",t.totalResults)("pageIndex",t.currentPage-1)("pageSize",20)("hidePageSize",!0))},dependencies:[Q,qe],encapsulation:2,changeDetection:0})};export{nt as TrendingPage};
