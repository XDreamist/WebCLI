var gH=D=>{throw TypeError(D)};var Dp2=(D,a)=>()=>(a||D((a={exports:{}}).exports,a),a.exports);var Ip2=(D,a,g)=>a.has(D)||gH("Cannot "+g);var j1=(D,a,g)=>a.has(D)?gH("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(D):a.set(D,g);var g0=(D,a,g)=>(Ip2(D,a,"access private method"),g);import{P as Pp2}from"./project-settings.js";var y32=Dp2((Tc,Ga)=>{(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))w(x);new MutationObserver(x=>{for(const E of x)if(E.type==="childList")for(const L of E.addedNodes)L.tagName==="LINK"&&L.rel==="modulepreload"&&w(L)}).observe(document,{childList:!0,subtree:!0});function g(x){const E={};return x.integrity&&(E.integrity=x.integrity),x.referrerPolicy&&(E.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?E.credentials="include":x.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function w(x){if(x.ep)return;x.ep=!0;const E=g(x);fetch(x.href,E)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wa="164",xs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Pl={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Lp2=0,yH=1,Fp2=2,xV=1,Op2=2,Ss=3,zo=0,er=1,No=2,A1=0,ou=1,kH=2,vH=3,wH=4,jp2=5,Z1=100,Np2=101,Up2=102,Gp2=103,Wp2=104,Hp2=200,zp2=201,Vp2=202,Qp2=203,wa=204,Ba=205,Yp2=206,Xp2=207,Zp2=208,qp2=209,Jp2=210,Kp2=211,$p2=212,t42=213,e42=214,n42=0,i42=1,r42=2,Ec=3,o42=4,s42=5,l42=6,u42=7,Vc=0,f42=1,p42=2,g1=0,c42=1,_42=2,a42=3,h42=4,m42=5,d42=6,A42=7,BH="attached",g42="detached",CV=300,cu=301,_u=302,Rc=303,Sa=304,Qc=306,y1=1e3,Go=1001,bc=1002,ji=1003,MV=1004,Pf=1005,yr=1006,Sc=1007,Cs=1008,k1=1009,y42=1010,k42=1011,TV=1012,EV=1013,au=1014,Wo=1015,Yc=1016,RV=1017,bV=1018,qf=1020,v42=35902,w42=1021,B42=1022,ho=1023,S42=1024,x42=1025,su=1026,Wf=1027,DV=1028,IV=1029,C42=1030,PV=1031,LV=1033,w6=33776,B6=33777,S6=33778,x6=33779,SH=35840,xH=35841,CH=35842,MH=35843,TH=36196,EH=37492,RH=37496,bH=37808,DH=37809,IH=37810,PH=37811,LH=37812,FH=37813,OH=37814,jH=37815,NH=37816,UH=37817,GH=37818,WH=37819,HH=37820,zH=37821,C6=36492,VH=36494,QH=36495,M42=36283,YH=36284,XH=36285,ZH=36286,xa=2200,FV=2201,T42=2202,Hf=2300,hu=2301,M6=2302,tu=2400,eu=2401,Dc=2402,Ha=2500,E42=2501,R42=0,OV=1,Ca=2,b42=3200,D42=3201,Xc=0,I42=1,m1="",T0="srgb",ii="srgb-linear",za="display-p3",Zc="display-p3-linear",Ic="linear",$n="srgb",Pc="rec709",Lc="p3",Ll=7680,qH=519,P42=512,L42=513,F42=514,jV=515,O42=516,j42=517,N42=518,U42=519,Ma=35044,JH="300 es",Ms=2e3,Fc=2001;class Rs{addEventListener(a,g){this._listeners===void 0&&(this._listeners={});const w=this._listeners;w[a]===void 0&&(w[a]=[]),w[a].indexOf(g)===-1&&w[a].push(g)}hasEventListener(a,g){if(this._listeners===void 0)return!1;const w=this._listeners;return w[a]!==void 0&&w[a].indexOf(g)!==-1}removeEventListener(a,g){if(this._listeners===void 0)return;const x=this._listeners[a];if(x!==void 0){const E=x.indexOf(g);E!==-1&&x.splice(E,1)}}dispatchEvent(a){if(this._listeners===void 0)return;const w=this._listeners[a.type];if(w!==void 0){a.target=this;const x=w.slice(0);for(let E=0,L=x.length;E<L;E++)x[E].call(this,a);a.target=null}}}const wi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let KH=1234567;const Ff=Math.PI/180,mu=180/Math.PI;function mo(){const D=Math.random()*4294967295|0,a=Math.random()*4294967295|0,g=Math.random()*4294967295|0,w=Math.random()*4294967295|0;return(wi[D&255]+wi[D>>8&255]+wi[D>>16&255]+wi[D>>24&255]+"-"+wi[a&255]+wi[a>>8&255]+"-"+wi[a>>16&15|64]+wi[a>>24&255]+"-"+wi[g&63|128]+wi[g>>8&255]+"-"+wi[g>>16&255]+wi[g>>24&255]+wi[w&255]+wi[w>>8&255]+wi[w>>16&255]+wi[w>>24&255]).toLowerCase()}function j0(D,a,g){return Math.max(a,Math.min(g,D))}function Va(D,a){return(D%a+a)%a}function G42(D,a,g,w,x){return w+(D-a)*(x-w)/(g-a)}function W42(D,a,g){return D!==a?(g-D)/(a-D):0}function Of(D,a,g){return(1-g)*D+g*a}function H42(D,a,g,w){return Of(D,a,1-Math.exp(-g*w))}function z42(D,a=1){return a-Math.abs(Va(D,a*2)-a)}function V42(D,a,g){return D<=a?0:D>=g?1:(D=(D-a)/(g-a),D*D*(3-2*D))}function Q42(D,a,g){return D<=a?0:D>=g?1:(D=(D-a)/(g-a),D*D*D*(D*(D*6-15)+10))}function Y42(D,a){return D+Math.floor(Math.random()*(a-D+1))}function X42(D,a){return D+Math.random()*(a-D)}function Z42(D){return D*(.5-Math.random())}function q42(D){D!==void 0&&(KH=D);let a=KH+=1831565813;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}function J42(D){return D*Ff}function K42(D){return D*mu}function $42(D){return(D&D-1)===0&&D!==0}function tc2(D){return Math.pow(2,Math.ceil(Math.log(D)/Math.LN2))}function ec2(D){return Math.pow(2,Math.floor(Math.log(D)/Math.LN2))}function nc2(D,a,g,w,x){const E=Math.cos,L=Math.sin,O=E(g/2),G=L(g/2),h=E((a+w)/2),X=L((a+w)/2),Z=E((a-w)/2),K=L((a-w)/2),e2=E((w-a)/2),l2=L((w-a)/2);switch(x){case"XYX":D.set(O*X,G*Z,G*K,O*h);break;case"YZY":D.set(G*K,O*X,G*Z,O*h);break;case"ZXZ":D.set(G*Z,G*K,O*X,O*h);break;case"XZX":D.set(O*X,G*l2,G*e2,O*h);break;case"YXY":D.set(G*e2,O*X,G*l2,O*h);break;case"ZYZ":D.set(G*l2,G*e2,O*X,O*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+x)}}function ao(D,a){switch(a.constructor){case Float32Array:return D;case Uint32Array:return D/4294967295;case Uint16Array:return D/65535;case Uint8Array:return D/255;case Int32Array:return Math.max(D/2147483647,-1);case Int16Array:return Math.max(D/32767,-1);case Int8Array:return Math.max(D/127,-1);default:throw new Error("Invalid component type.")}}function jn(D,a){switch(a.constructor){case Float32Array:return D;case Uint32Array:return Math.round(D*4294967295);case Uint16Array:return Math.round(D*65535);case Uint8Array:return Math.round(D*255);case Int32Array:return Math.round(D*2147483647);case Int16Array:return Math.round(D*32767);case Int8Array:return Math.round(D*127);default:throw new Error("Invalid component type.")}}const Z0={DEG2RAD:Ff,RAD2DEG:mu,generateUUID:mo,clamp:j0,euclideanModulo:Va,mapLinear:G42,inverseLerp:W42,lerp:Of,damp:H42,pingpong:z42,smoothstep:V42,smootherstep:Q42,randInt:Y42,randFloat:X42,randFloatSpread:Z42,seededRandom:q42,degToRad:J42,radToDeg:K42,isPowerOfTwo:$42,ceilPowerOfTwo:tc2,floorPowerOfTwo:ec2,setQuaternionFromProperEuler:nc2,normalize:jn,denormalize:ao};class Lt{constructor(a=0,g=0){Lt.prototype.isVector2=!0,this.x=a,this.y=g}get width(){return this.x}set width(a){this.x=a}get height(){return this.y}set height(a){this.y=a}set(a,g){return this.x=a,this.y=g,this}setScalar(a){return this.x=a,this.y=a,this}setX(a){return this.x=a,this}setY(a){return this.y=a,this}setComponent(a,g){switch(a){case 0:this.x=g;break;case 1:this.y=g;break;default:throw new Error("index is out of range: "+a)}return this}getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+a)}}clone(){return new this.constructor(this.x,this.y)}copy(a){return this.x=a.x,this.y=a.y,this}add(a){return this.x+=a.x,this.y+=a.y,this}addScalar(a){return this.x+=a,this.y+=a,this}addVectors(a,g){return this.x=a.x+g.x,this.y=a.y+g.y,this}addScaledVector(a,g){return this.x+=a.x*g,this.y+=a.y*g,this}sub(a){return this.x-=a.x,this.y-=a.y,this}subScalar(a){return this.x-=a,this.y-=a,this}subVectors(a,g){return this.x=a.x-g.x,this.y=a.y-g.y,this}multiply(a){return this.x*=a.x,this.y*=a.y,this}multiplyScalar(a){return this.x*=a,this.y*=a,this}divide(a){return this.x/=a.x,this.y/=a.y,this}divideScalar(a){return this.multiplyScalar(1/a)}applyMatrix3(a){const g=this.x,w=this.y,x=a.elements;return this.x=x[0]*g+x[3]*w+x[6],this.y=x[1]*g+x[4]*w+x[7],this}min(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this}max(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this}clamp(a,g){return this.x=Math.max(a.x,Math.min(g.x,this.x)),this.y=Math.max(a.y,Math.min(g.y,this.y)),this}clampScalar(a,g){return this.x=Math.max(a,Math.min(g,this.x)),this.y=Math.max(a,Math.min(g,this.y)),this}clampLength(a,g){const w=this.length();return this.divideScalar(w||1).multiplyScalar(Math.max(a,Math.min(g,w)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(a){return this.x*a.x+this.y*a.y}cross(a){return this.x*a.y-this.y*a.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(a){const g=Math.sqrt(this.lengthSq()*a.lengthSq());if(g===0)return Math.PI/2;const w=this.dot(a)/g;return Math.acos(j0(w,-1,1))}distanceTo(a){return Math.sqrt(this.distanceToSquared(a))}distanceToSquared(a){const g=this.x-a.x,w=this.y-a.y;return g*g+w*w}manhattanDistanceTo(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)}setLength(a){return this.normalize().multiplyScalar(a)}lerp(a,g){return this.x+=(a.x-this.x)*g,this.y+=(a.y-this.y)*g,this}lerpVectors(a,g,w){return this.x=a.x+(g.x-a.x)*w,this.y=a.y+(g.y-a.y)*w,this}equals(a){return a.x===this.x&&a.y===this.y}fromArray(a,g=0){return this.x=a[g],this.y=a[g+1],this}toArray(a=[],g=0){return a[g]=this.x,a[g+1]=this.y,a}fromBufferAttribute(a,g){return this.x=a.getX(g),this.y=a.getY(g),this}rotateAround(a,g){const w=Math.cos(g),x=Math.sin(g),E=this.x-a.x,L=this.y-a.y;return this.x=E*w-L*x+a.x,this.y=E*x+L*w+a.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(a,g,w,x,E,L,O,G,h){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],a!==void 0&&this.set(a,g,w,x,E,L,O,G,h)}set(a,g,w,x,E,L,O,G,h){const X=this.elements;return X[0]=a,X[1]=x,X[2]=O,X[3]=g,X[4]=E,X[5]=G,X[6]=w,X[7]=L,X[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(a){const g=this.elements,w=a.elements;return g[0]=w[0],g[1]=w[1],g[2]=w[2],g[3]=w[3],g[4]=w[4],g[5]=w[5],g[6]=w[6],g[7]=w[7],g[8]=w[8],this}extractBasis(a,g,w){return a.setFromMatrix3Column(this,0),g.setFromMatrix3Column(this,1),w.setFromMatrix3Column(this,2),this}setFromMatrix4(a){const g=a.elements;return this.set(g[0],g[4],g[8],g[1],g[5],g[9],g[2],g[6],g[10]),this}multiply(a){return this.multiplyMatrices(this,a)}premultiply(a){return this.multiplyMatrices(a,this)}multiplyMatrices(a,g){const w=a.elements,x=g.elements,E=this.elements,L=w[0],O=w[3],G=w[6],h=w[1],X=w[4],Z=w[7],K=w[2],e2=w[5],l2=w[8],p2=x[0],r2=x[3],o2=x[6],k2=x[1],h2=x[4],v2=x[7],j2=x[2],R2=x[5],D2=x[8];return E[0]=L*p2+O*k2+G*j2,E[3]=L*r2+O*h2+G*R2,E[6]=L*o2+O*v2+G*D2,E[1]=h*p2+X*k2+Z*j2,E[4]=h*r2+X*h2+Z*R2,E[7]=h*o2+X*v2+Z*D2,E[2]=K*p2+e2*k2+l2*j2,E[5]=K*r2+e2*h2+l2*R2,E[8]=K*o2+e2*v2+l2*D2,this}multiplyScalar(a){const g=this.elements;return g[0]*=a,g[3]*=a,g[6]*=a,g[1]*=a,g[4]*=a,g[7]*=a,g[2]*=a,g[5]*=a,g[8]*=a,this}determinant(){const a=this.elements,g=a[0],w=a[1],x=a[2],E=a[3],L=a[4],O=a[5],G=a[6],h=a[7],X=a[8];return g*L*X-g*O*h-w*E*X+w*O*G+x*E*h-x*L*G}invert(){const a=this.elements,g=a[0],w=a[1],x=a[2],E=a[3],L=a[4],O=a[5],G=a[6],h=a[7],X=a[8],Z=X*L-O*h,K=O*G-X*E,e2=h*E-L*G,l2=g*Z+w*K+x*e2;if(l2===0)return this.set(0,0,0,0,0,0,0,0,0);const p2=1/l2;return a[0]=Z*p2,a[1]=(x*h-X*w)*p2,a[2]=(O*w-x*L)*p2,a[3]=K*p2,a[4]=(X*g-x*G)*p2,a[5]=(x*E-O*g)*p2,a[6]=e2*p2,a[7]=(w*G-h*g)*p2,a[8]=(L*g-w*E)*p2,this}transpose(){let a;const g=this.elements;return a=g[1],g[1]=g[3],g[3]=a,a=g[2],g[2]=g[6],g[6]=a,a=g[5],g[5]=g[7],g[7]=a,this}getNormalMatrix(a){return this.setFromMatrix4(a).invert().transpose()}transposeIntoArray(a){const g=this.elements;return a[0]=g[0],a[1]=g[3],a[2]=g[6],a[3]=g[1],a[4]=g[4],a[5]=g[7],a[6]=g[2],a[7]=g[5],a[8]=g[8],this}setUvTransform(a,g,w,x,E,L,O){const G=Math.cos(E),h=Math.sin(E);return this.set(w*G,w*h,-w*(G*L+h*O)+L+a,-x*h,x*G,-x*(-h*L+G*O)+O+g,0,0,1),this}scale(a,g){return this.premultiply(T6.makeScale(a,g)),this}rotate(a){return this.premultiply(T6.makeRotation(-a)),this}translate(a,g){return this.premultiply(T6.makeTranslation(a,g)),this}makeTranslation(a,g){return a.isVector2?this.set(1,0,a.x,0,1,a.y,0,0,1):this.set(1,0,a,0,1,g,0,0,1),this}makeRotation(a){const g=Math.cos(a),w=Math.sin(a);return this.set(g,-w,0,w,g,0,0,0,1),this}makeScale(a,g){return this.set(a,0,0,0,g,0,0,0,1),this}equals(a){const g=this.elements,w=a.elements;for(let x=0;x<9;x++)if(g[x]!==w[x])return!1;return!0}fromArray(a,g=0){for(let w=0;w<9;w++)this.elements[w]=a[w+g];return this}toArray(a=[],g=0){const w=this.elements;return a[g]=w[0],a[g+1]=w[1],a[g+2]=w[2],a[g+3]=w[3],a[g+4]=w[4],a[g+5]=w[5],a[g+6]=w[6],a[g+7]=w[7],a[g+8]=w[8],a}clone(){return new this.constructor().fromArray(this.elements)}}const T6=new Je;function NV(D){for(let a=D.length-1;a>=0;--a)if(D[a]>=65535)return!0;return!1}function zf(D){return document.createElementNS("http://www.w3.org/1999/xhtml",D)}function ic2(){const D=zf("canvas");return D.style.display="block",D}const $H={};function UV(D){D in $H||($H[D]=!0,console.warn(D))}const tz=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ez=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),H4={[ii]:{transfer:Ic,primaries:Pc,toReference:D=>D,fromReference:D=>D},[T0]:{transfer:$n,primaries:Pc,toReference:D=>D.convertSRGBToLinear(),fromReference:D=>D.convertLinearToSRGB()},[Zc]:{transfer:Ic,primaries:Lc,toReference:D=>D.applyMatrix3(ez),fromReference:D=>D.applyMatrix3(tz)},[za]:{transfer:$n,primaries:Lc,toReference:D=>D.convertSRGBToLinear().applyMatrix3(ez),fromReference:D=>D.applyMatrix3(tz).convertLinearToSRGB()}},rc2=new Set([ii,Zc]),Pn={enabled:!0,_workingColorSpace:ii,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(D){if(!rc2.has(D))throw new Error(`Unsupported working color space, "${D}".`);this._workingColorSpace=D},convert:function(D,a,g){if(this.enabled===!1||a===g||!a||!g)return D;const w=H4[a].toReference,x=H4[g].fromReference;return x(w(D))},fromWorkingColorSpace:function(D,a){return this.convert(D,this._workingColorSpace,a)},toWorkingColorSpace:function(D,a){return this.convert(D,a,this._workingColorSpace)},getPrimaries:function(D){return H4[D].primaries},getTransfer:function(D){return D===m1?Ic:H4[D].transfer}};function lu(D){return D<.04045?D*.0773993808:Math.pow(D*.9478672986+.0521327014,2.4)}function E6(D){return D<.0031308?D*12.92:1.055*Math.pow(D,.41666)-.055}let Fl;class oc2{static getDataURL(a){if(/^data:/i.test(a.src)||typeof HTMLCanvasElement>"u")return a.src;let g;if(a instanceof HTMLCanvasElement)g=a;else{Fl===void 0&&(Fl=zf("canvas")),Fl.width=a.width,Fl.height=a.height;const w=Fl.getContext("2d");a instanceof ImageData?w.putImageData(a,0,0):w.drawImage(a,0,0,a.width,a.height),g=Fl}return g.width>2048||g.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",a),g.toDataURL("image/jpeg",.6)):g.toDataURL("image/png")}static sRGBToLinear(a){if(typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap){const g=zf("canvas");g.width=a.width,g.height=a.height;const w=g.getContext("2d");w.drawImage(a,0,0,a.width,a.height);const x=w.getImageData(0,0,a.width,a.height),E=x.data;for(let L=0;L<E.length;L++)E[L]=lu(E[L]/255)*255;return w.putImageData(x,0,0),g}else if(a.data){const g=a.data.slice(0);for(let w=0;w<g.length;w++)g instanceof Uint8Array||g instanceof Uint8ClampedArray?g[w]=Math.floor(lu(g[w]/255)*255):g[w]=lu(g[w]);return{data:g,width:a.width,height:a.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),a}}let sc2=0;class GV{constructor(a=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sc2++}),this.uuid=mo(),this.data=a,this.dataReady=!0,this.version=0}set needsUpdate(a){a===!0&&this.version++}toJSON(a){const g=a===void 0||typeof a=="string";if(!g&&a.images[this.uuid]!==void 0)return a.images[this.uuid];const w={uuid:this.uuid,url:""},x=this.data;if(x!==null){let E;if(Array.isArray(x)){E=[];for(let L=0,O=x.length;L<O;L++)x[L].isDataTexture?E.push(R6(x[L].image)):E.push(R6(x[L]))}else E=R6(x);w.url=E}return g||(a.images[this.uuid]=w),w}}function R6(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap?oc2.getDataURL(D):D.data?{data:Array.from(D.data),width:D.width,height:D.height,type:D.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lc2=0;class E0 extends Rs{constructor(a=E0.DEFAULT_IMAGE,g=E0.DEFAULT_MAPPING,w=Go,x=Go,E=yr,L=Cs,O=ho,G=k1,h=E0.DEFAULT_ANISOTROPY,X=m1){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lc2++}),this.uuid=mo(),this.name="",this.source=new GV(a),this.mipmaps=[],this.mapping=g,this.channel=0,this.wrapS=w,this.wrapT=x,this.magFilter=E,this.minFilter=L,this.anisotropy=h,this.format=O,this.internalFormat=null,this.type=G,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=X,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(a=null){this.source.data=a}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(a){return this.name=a.name,this.source=a.source,this.mipmaps=a.mipmaps.slice(0),this.mapping=a.mapping,this.channel=a.channel,this.wrapS=a.wrapS,this.wrapT=a.wrapT,this.magFilter=a.magFilter,this.minFilter=a.minFilter,this.anisotropy=a.anisotropy,this.format=a.format,this.internalFormat=a.internalFormat,this.type=a.type,this.offset.copy(a.offset),this.repeat.copy(a.repeat),this.center.copy(a.center),this.rotation=a.rotation,this.matrixAutoUpdate=a.matrixAutoUpdate,this.matrix.copy(a.matrix),this.generateMipmaps=a.generateMipmaps,this.premultiplyAlpha=a.premultiplyAlpha,this.flipY=a.flipY,this.unpackAlignment=a.unpackAlignment,this.colorSpace=a.colorSpace,this.userData=JSON.parse(JSON.stringify(a.userData)),this.needsUpdate=!0,this}toJSON(a){const g=a===void 0||typeof a=="string";if(!g&&a.textures[this.uuid]!==void 0)return a.textures[this.uuid];const w={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(a).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(w.userData=this.userData),g||(a.textures[this.uuid]=w),w}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(a){if(this.mapping!==CV)return a;if(a.applyMatrix3(this.matrix),a.x<0||a.x>1)switch(this.wrapS){case y1:a.x=a.x-Math.floor(a.x);break;case Go:a.x=a.x<0?0:1;break;case bc:Math.abs(Math.floor(a.x)%2)===1?a.x=Math.ceil(a.x)-a.x:a.x=a.x-Math.floor(a.x);break}if(a.y<0||a.y>1)switch(this.wrapT){case y1:a.y=a.y-Math.floor(a.y);break;case Go:a.y=a.y<0?0:1;break;case bc:Math.abs(Math.floor(a.y)%2)===1?a.y=Math.ceil(a.y)-a.y:a.y=a.y-Math.floor(a.y);break}return this.flipY&&(a.y=1-a.y),a}set needsUpdate(a){a===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(a){a===!0&&this.pmremVersion++}}E0.DEFAULT_IMAGE=null;E0.DEFAULT_MAPPING=CV;E0.DEFAULT_ANISOTROPY=1;class bn{constructor(a=0,g=0,w=0,x=1){bn.prototype.isVector4=!0,this.x=a,this.y=g,this.z=w,this.w=x}get width(){return this.z}set width(a){this.z=a}get height(){return this.w}set height(a){this.w=a}set(a,g,w,x){return this.x=a,this.y=g,this.z=w,this.w=x,this}setScalar(a){return this.x=a,this.y=a,this.z=a,this.w=a,this}setX(a){return this.x=a,this}setY(a){return this.y=a,this}setZ(a){return this.z=a,this}setW(a){return this.w=a,this}setComponent(a,g){switch(a){case 0:this.x=g;break;case 1:this.y=g;break;case 2:this.z=g;break;case 3:this.w=g;break;default:throw new Error("index is out of range: "+a)}return this}getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+a)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(a){return this.x=a.x,this.y=a.y,this.z=a.z,this.w=a.w!==void 0?a.w:1,this}add(a){return this.x+=a.x,this.y+=a.y,this.z+=a.z,this.w+=a.w,this}addScalar(a){return this.x+=a,this.y+=a,this.z+=a,this.w+=a,this}addVectors(a,g){return this.x=a.x+g.x,this.y=a.y+g.y,this.z=a.z+g.z,this.w=a.w+g.w,this}addScaledVector(a,g){return this.x+=a.x*g,this.y+=a.y*g,this.z+=a.z*g,this.w+=a.w*g,this}sub(a){return this.x-=a.x,this.y-=a.y,this.z-=a.z,this.w-=a.w,this}subScalar(a){return this.x-=a,this.y-=a,this.z-=a,this.w-=a,this}subVectors(a,g){return this.x=a.x-g.x,this.y=a.y-g.y,this.z=a.z-g.z,this.w=a.w-g.w,this}multiply(a){return this.x*=a.x,this.y*=a.y,this.z*=a.z,this.w*=a.w,this}multiplyScalar(a){return this.x*=a,this.y*=a,this.z*=a,this.w*=a,this}applyMatrix4(a){const g=this.x,w=this.y,x=this.z,E=this.w,L=a.elements;return this.x=L[0]*g+L[4]*w+L[8]*x+L[12]*E,this.y=L[1]*g+L[5]*w+L[9]*x+L[13]*E,this.z=L[2]*g+L[6]*w+L[10]*x+L[14]*E,this.w=L[3]*g+L[7]*w+L[11]*x+L[15]*E,this}divideScalar(a){return this.multiplyScalar(1/a)}setAxisAngleFromQuaternion(a){this.w=2*Math.acos(a.w);const g=Math.sqrt(1-a.w*a.w);return g<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=a.x/g,this.y=a.y/g,this.z=a.z/g),this}setAxisAngleFromRotationMatrix(a){let g,w,x,E;const G=a.elements,h=G[0],X=G[4],Z=G[8],K=G[1],e2=G[5],l2=G[9],p2=G[2],r2=G[6],o2=G[10];if(Math.abs(X-K)<.01&&Math.abs(Z-p2)<.01&&Math.abs(l2-r2)<.01){if(Math.abs(X+K)<.1&&Math.abs(Z+p2)<.1&&Math.abs(l2+r2)<.1&&Math.abs(h+e2+o2-3)<.1)return this.set(1,0,0,0),this;g=Math.PI;const h2=(h+1)/2,v2=(e2+1)/2,j2=(o2+1)/2,R2=(X+K)/4,D2=(Z+p2)/4,Q2=(l2+r2)/4;return h2>v2&&h2>j2?h2<.01?(w=0,x=.707106781,E=.707106781):(w=Math.sqrt(h2),x=R2/w,E=D2/w):v2>j2?v2<.01?(w=.707106781,x=0,E=.707106781):(x=Math.sqrt(v2),w=R2/x,E=Q2/x):j2<.01?(w=.707106781,x=.707106781,E=0):(E=Math.sqrt(j2),w=D2/E,x=Q2/E),this.set(w,x,E,g),this}let k2=Math.sqrt((r2-l2)*(r2-l2)+(Z-p2)*(Z-p2)+(K-X)*(K-X));return Math.abs(k2)<.001&&(k2=1),this.x=(r2-l2)/k2,this.y=(Z-p2)/k2,this.z=(K-X)/k2,this.w=Math.acos((h+e2+o2-1)/2),this}min(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this.z=Math.min(this.z,a.z),this.w=Math.min(this.w,a.w),this}max(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this.z=Math.max(this.z,a.z),this.w=Math.max(this.w,a.w),this}clamp(a,g){return this.x=Math.max(a.x,Math.min(g.x,this.x)),this.y=Math.max(a.y,Math.min(g.y,this.y)),this.z=Math.max(a.z,Math.min(g.z,this.z)),this.w=Math.max(a.w,Math.min(g.w,this.w)),this}clampScalar(a,g){return this.x=Math.max(a,Math.min(g,this.x)),this.y=Math.max(a,Math.min(g,this.y)),this.z=Math.max(a,Math.min(g,this.z)),this.w=Math.max(a,Math.min(g,this.w)),this}clampLength(a,g){const w=this.length();return this.divideScalar(w||1).multiplyScalar(Math.max(a,Math.min(g,w)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(a){return this.normalize().multiplyScalar(a)}lerp(a,g){return this.x+=(a.x-this.x)*g,this.y+=(a.y-this.y)*g,this.z+=(a.z-this.z)*g,this.w+=(a.w-this.w)*g,this}lerpVectors(a,g,w){return this.x=a.x+(g.x-a.x)*w,this.y=a.y+(g.y-a.y)*w,this.z=a.z+(g.z-a.z)*w,this.w=a.w+(g.w-a.w)*w,this}equals(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w}fromArray(a,g=0){return this.x=a[g],this.y=a[g+1],this.z=a[g+2],this.w=a[g+3],this}toArray(a=[],g=0){return a[g]=this.x,a[g+1]=this.y,a[g+2]=this.z,a[g+3]=this.w,a}fromBufferAttribute(a,g){return this.x=a.getX(g),this.y=a.getY(g),this.z=a.getZ(g),this.w=a.getW(g),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class uc2 extends Rs{constructor(a=1,g=1,w={}){super(),this.isRenderTarget=!0,this.width=a,this.height=g,this.depth=1,this.scissor=new bn(0,0,a,g),this.scissorTest=!1,this.viewport=new bn(0,0,a,g);const x={width:a,height:g,depth:1};w=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yr,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},w);const E=new E0(x,w.mapping,w.wrapS,w.wrapT,w.magFilter,w.minFilter,w.format,w.type,w.anisotropy,w.colorSpace);E.flipY=!1,E.generateMipmaps=w.generateMipmaps,E.internalFormat=w.internalFormat,this.textures=[];const L=w.count;for(let O=0;O<L;O++)this.textures[O]=E.clone(),this.textures[O].isRenderTargetTexture=!0;this.depthBuffer=w.depthBuffer,this.stencilBuffer=w.stencilBuffer,this.resolveDepthBuffer=w.resolveDepthBuffer,this.resolveStencilBuffer=w.resolveStencilBuffer,this.depthTexture=w.depthTexture,this.samples=w.samples}get texture(){return this.textures[0]}set texture(a){this.textures[0]=a}setSize(a,g,w=1){if(this.width!==a||this.height!==g||this.depth!==w){this.width=a,this.height=g,this.depth=w;for(let x=0,E=this.textures.length;x<E;x++)this.textures[x].image.width=a,this.textures[x].image.height=g,this.textures[x].image.depth=w;this.dispose()}this.viewport.set(0,0,a,g),this.scissor.set(0,0,a,g)}clone(){return new this.constructor().copy(this)}copy(a){this.width=a.width,this.height=a.height,this.depth=a.depth,this.scissor.copy(a.scissor),this.scissorTest=a.scissorTest,this.viewport.copy(a.viewport),this.textures.length=0;for(let w=0,x=a.textures.length;w<x;w++)this.textures[w]=a.textures[w].clone(),this.textures[w].isRenderTargetTexture=!0;const g=Object.assign({},a.texture.image);return this.texture.source=new GV(g),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,a.depthTexture!==null&&(this.depthTexture=a.depthTexture.clone()),this.samples=a.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class J1 extends uc2{constructor(a=1,g=1,w={}){super(a,g,w),this.isWebGLRenderTarget=!0}}class WV extends E0{constructor(a=null,g=1,w=1,x=1){super(null),this.isDataArrayTexture=!0,this.image={data:a,width:g,height:w,depth:x},this.magFilter=ji,this.minFilter=ji,this.wrapR=Go,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fc2 extends E0{constructor(a=null,g=1,w=1,x=1){super(null),this.isData3DTexture=!0,this.image={data:a,width:g,height:w,depth:x},this.magFilter=ji,this.minFilter=ji,this.wrapR=Go,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sn{constructor(a=0,g=0,w=0,x=1){this.isQuaternion=!0,this._x=a,this._y=g,this._z=w,this._w=x}static slerpFlat(a,g,w,x,E,L,O){let G=w[x+0],h=w[x+1],X=w[x+2],Z=w[x+3];const K=E[L+0],e2=E[L+1],l2=E[L+2],p2=E[L+3];if(O===0){a[g+0]=G,a[g+1]=h,a[g+2]=X,a[g+3]=Z;return}if(O===1){a[g+0]=K,a[g+1]=e2,a[g+2]=l2,a[g+3]=p2;return}if(Z!==p2||G!==K||h!==e2||X!==l2){let r2=1-O;const o2=G*K+h*e2+X*l2+Z*p2,k2=o2>=0?1:-1,h2=1-o2*o2;if(h2>Number.EPSILON){const j2=Math.sqrt(h2),R2=Math.atan2(j2,o2*k2);r2=Math.sin(r2*R2)/j2,O=Math.sin(O*R2)/j2}const v2=O*k2;if(G=G*r2+K*v2,h=h*r2+e2*v2,X=X*r2+l2*v2,Z=Z*r2+p2*v2,r2===1-O){const j2=1/Math.sqrt(G*G+h*h+X*X+Z*Z);G*=j2,h*=j2,X*=j2,Z*=j2}}a[g]=G,a[g+1]=h,a[g+2]=X,a[g+3]=Z}static multiplyQuaternionsFlat(a,g,w,x,E,L){const O=w[x],G=w[x+1],h=w[x+2],X=w[x+3],Z=E[L],K=E[L+1],e2=E[L+2],l2=E[L+3];return a[g]=O*l2+X*Z+G*e2-h*K,a[g+1]=G*l2+X*K+h*Z-O*e2,a[g+2]=h*l2+X*e2+O*K-G*Z,a[g+3]=X*l2-O*Z-G*K-h*e2,a}get x(){return this._x}set x(a){this._x=a,this._onChangeCallback()}get y(){return this._y}set y(a){this._y=a,this._onChangeCallback()}get z(){return this._z}set z(a){this._z=a,this._onChangeCallback()}get w(){return this._w}set w(a){this._w=a,this._onChangeCallback()}set(a,g,w,x){return this._x=a,this._y=g,this._z=w,this._w=x,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(a){return this._x=a.x,this._y=a.y,this._z=a.z,this._w=a.w,this._onChangeCallback(),this}setFromEuler(a,g=!0){const w=a._x,x=a._y,E=a._z,L=a._order,O=Math.cos,G=Math.sin,h=O(w/2),X=O(x/2),Z=O(E/2),K=G(w/2),e2=G(x/2),l2=G(E/2);switch(L){case"XYZ":this._x=K*X*Z+h*e2*l2,this._y=h*e2*Z-K*X*l2,this._z=h*X*l2+K*e2*Z,this._w=h*X*Z-K*e2*l2;break;case"YXZ":this._x=K*X*Z+h*e2*l2,this._y=h*e2*Z-K*X*l2,this._z=h*X*l2-K*e2*Z,this._w=h*X*Z+K*e2*l2;break;case"ZXY":this._x=K*X*Z-h*e2*l2,this._y=h*e2*Z+K*X*l2,this._z=h*X*l2+K*e2*Z,this._w=h*X*Z-K*e2*l2;break;case"ZYX":this._x=K*X*Z-h*e2*l2,this._y=h*e2*Z+K*X*l2,this._z=h*X*l2-K*e2*Z,this._w=h*X*Z+K*e2*l2;break;case"YZX":this._x=K*X*Z+h*e2*l2,this._y=h*e2*Z+K*X*l2,this._z=h*X*l2-K*e2*Z,this._w=h*X*Z-K*e2*l2;break;case"XZY":this._x=K*X*Z-h*e2*l2,this._y=h*e2*Z-K*X*l2,this._z=h*X*l2+K*e2*Z,this._w=h*X*Z+K*e2*l2;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+L)}return g===!0&&this._onChangeCallback(),this}setFromAxisAngle(a,g){const w=g/2,x=Math.sin(w);return this._x=a.x*x,this._y=a.y*x,this._z=a.z*x,this._w=Math.cos(w),this._onChangeCallback(),this}setFromRotationMatrix(a){const g=a.elements,w=g[0],x=g[4],E=g[8],L=g[1],O=g[5],G=g[9],h=g[2],X=g[6],Z=g[10],K=w+O+Z;if(K>0){const e2=.5/Math.sqrt(K+1);this._w=.25/e2,this._x=(X-G)*e2,this._y=(E-h)*e2,this._z=(L-x)*e2}else if(w>O&&w>Z){const e2=2*Math.sqrt(1+w-O-Z);this._w=(X-G)/e2,this._x=.25*e2,this._y=(x+L)/e2,this._z=(E+h)/e2}else if(O>Z){const e2=2*Math.sqrt(1+O-w-Z);this._w=(E-h)/e2,this._x=(x+L)/e2,this._y=.25*e2,this._z=(G+X)/e2}else{const e2=2*Math.sqrt(1+Z-w-O);this._w=(L-x)/e2,this._x=(E+h)/e2,this._y=(G+X)/e2,this._z=.25*e2}return this._onChangeCallback(),this}setFromUnitVectors(a,g){let w=a.dot(g)+1;return w<Number.EPSILON?(w=0,Math.abs(a.x)>Math.abs(a.z)?(this._x=-a.y,this._y=a.x,this._z=0,this._w=w):(this._x=0,this._y=-a.z,this._z=a.y,this._w=w)):(this._x=a.y*g.z-a.z*g.y,this._y=a.z*g.x-a.x*g.z,this._z=a.x*g.y-a.y*g.x,this._w=w),this.normalize()}angleTo(a){return 2*Math.acos(Math.abs(j0(this.dot(a),-1,1)))}rotateTowards(a,g){const w=this.angleTo(a);if(w===0)return this;const x=Math.min(1,g/w);return this.slerp(a,x),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let a=this.length();return a===0?(this._x=0,this._y=0,this._z=0,this._w=1):(a=1/a,this._x=this._x*a,this._y=this._y*a,this._z=this._z*a,this._w=this._w*a),this._onChangeCallback(),this}multiply(a){return this.multiplyQuaternions(this,a)}premultiply(a){return this.multiplyQuaternions(a,this)}multiplyQuaternions(a,g){const w=a._x,x=a._y,E=a._z,L=a._w,O=g._x,G=g._y,h=g._z,X=g._w;return this._x=w*X+L*O+x*h-E*G,this._y=x*X+L*G+E*O-w*h,this._z=E*X+L*h+w*G-x*O,this._w=L*X-w*O-x*G-E*h,this._onChangeCallback(),this}slerp(a,g){if(g===0)return this;if(g===1)return this.copy(a);const w=this._x,x=this._y,E=this._z,L=this._w;let O=L*a._w+w*a._x+x*a._y+E*a._z;if(O<0?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,O=-O):this.copy(a),O>=1)return this._w=L,this._x=w,this._y=x,this._z=E,this;const G=1-O*O;if(G<=Number.EPSILON){const e2=1-g;return this._w=e2*L+g*this._w,this._x=e2*w+g*this._x,this._y=e2*x+g*this._y,this._z=e2*E+g*this._z,this.normalize(),this}const h=Math.sqrt(G),X=Math.atan2(h,O),Z=Math.sin((1-g)*X)/h,K=Math.sin(g*X)/h;return this._w=L*Z+this._w*K,this._x=w*Z+this._x*K,this._y=x*Z+this._y*K,this._z=E*Z+this._z*K,this._onChangeCallback(),this}slerpQuaternions(a,g,w){return this.copy(a).slerp(g,w)}random(){const a=2*Math.PI*Math.random(),g=2*Math.PI*Math.random(),w=Math.random(),x=Math.sqrt(1-w),E=Math.sqrt(w);return this.set(x*Math.sin(a),x*Math.cos(a),E*Math.sin(g),E*Math.cos(g))}equals(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w}fromArray(a,g=0){return this._x=a[g],this._y=a[g+1],this._z=a[g+2],this._w=a[g+3],this._onChangeCallback(),this}toArray(a=[],g=0){return a[g]=this._x,a[g+1]=this._y,a[g+2]=this._z,a[g+3]=this._w,a}fromBufferAttribute(a,g){return this._x=a.getX(g),this._y=a.getY(g),this._z=a.getZ(g),this._w=a.getW(g),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(a){return this._onChangeCallback=a,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class S2{constructor(a=0,g=0,w=0){S2.prototype.isVector3=!0,this.x=a,this.y=g,this.z=w}set(a,g,w){return w===void 0&&(w=this.z),this.x=a,this.y=g,this.z=w,this}setScalar(a){return this.x=a,this.y=a,this.z=a,this}setX(a){return this.x=a,this}setY(a){return this.y=a,this}setZ(a){return this.z=a,this}setComponent(a,g){switch(a){case 0:this.x=g;break;case 1:this.y=g;break;case 2:this.z=g;break;default:throw new Error("index is out of range: "+a)}return this}getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+a)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(a){return this.x=a.x,this.y=a.y,this.z=a.z,this}add(a){return this.x+=a.x,this.y+=a.y,this.z+=a.z,this}addScalar(a){return this.x+=a,this.y+=a,this.z+=a,this}addVectors(a,g){return this.x=a.x+g.x,this.y=a.y+g.y,this.z=a.z+g.z,this}addScaledVector(a,g){return this.x+=a.x*g,this.y+=a.y*g,this.z+=a.z*g,this}sub(a){return this.x-=a.x,this.y-=a.y,this.z-=a.z,this}subScalar(a){return this.x-=a,this.y-=a,this.z-=a,this}subVectors(a,g){return this.x=a.x-g.x,this.y=a.y-g.y,this.z=a.z-g.z,this}multiply(a){return this.x*=a.x,this.y*=a.y,this.z*=a.z,this}multiplyScalar(a){return this.x*=a,this.y*=a,this.z*=a,this}multiplyVectors(a,g){return this.x=a.x*g.x,this.y=a.y*g.y,this.z=a.z*g.z,this}applyEuler(a){return this.applyQuaternion(nz.setFromEuler(a))}applyAxisAngle(a,g){return this.applyQuaternion(nz.setFromAxisAngle(a,g))}applyMatrix3(a){const g=this.x,w=this.y,x=this.z,E=a.elements;return this.x=E[0]*g+E[3]*w+E[6]*x,this.y=E[1]*g+E[4]*w+E[7]*x,this.z=E[2]*g+E[5]*w+E[8]*x,this}applyNormalMatrix(a){return this.applyMatrix3(a).normalize()}applyMatrix4(a){const g=this.x,w=this.y,x=this.z,E=a.elements,L=1/(E[3]*g+E[7]*w+E[11]*x+E[15]);return this.x=(E[0]*g+E[4]*w+E[8]*x+E[12])*L,this.y=(E[1]*g+E[5]*w+E[9]*x+E[13])*L,this.z=(E[2]*g+E[6]*w+E[10]*x+E[14])*L,this}applyQuaternion(a){const g=this.x,w=this.y,x=this.z,E=a.x,L=a.y,O=a.z,G=a.w,h=2*(L*x-O*w),X=2*(O*g-E*x),Z=2*(E*w-L*g);return this.x=g+G*h+L*Z-O*X,this.y=w+G*X+O*h-E*Z,this.z=x+G*Z+E*X-L*h,this}project(a){return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(a.projectionMatrix)}unproject(a){return this.applyMatrix4(a.projectionMatrixInverse).applyMatrix4(a.matrixWorld)}transformDirection(a){const g=this.x,w=this.y,x=this.z,E=a.elements;return this.x=E[0]*g+E[4]*w+E[8]*x,this.y=E[1]*g+E[5]*w+E[9]*x,this.z=E[2]*g+E[6]*w+E[10]*x,this.normalize()}divide(a){return this.x/=a.x,this.y/=a.y,this.z/=a.z,this}divideScalar(a){return this.multiplyScalar(1/a)}min(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this.z=Math.min(this.z,a.z),this}max(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this.z=Math.max(this.z,a.z),this}clamp(a,g){return this.x=Math.max(a.x,Math.min(g.x,this.x)),this.y=Math.max(a.y,Math.min(g.y,this.y)),this.z=Math.max(a.z,Math.min(g.z,this.z)),this}clampScalar(a,g){return this.x=Math.max(a,Math.min(g,this.x)),this.y=Math.max(a,Math.min(g,this.y)),this.z=Math.max(a,Math.min(g,this.z)),this}clampLength(a,g){const w=this.length();return this.divideScalar(w||1).multiplyScalar(Math.max(a,Math.min(g,w)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(a){return this.x*a.x+this.y*a.y+this.z*a.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(a){return this.normalize().multiplyScalar(a)}lerp(a,g){return this.x+=(a.x-this.x)*g,this.y+=(a.y-this.y)*g,this.z+=(a.z-this.z)*g,this}lerpVectors(a,g,w){return this.x=a.x+(g.x-a.x)*w,this.y=a.y+(g.y-a.y)*w,this.z=a.z+(g.z-a.z)*w,this}cross(a){return this.crossVectors(this,a)}crossVectors(a,g){const w=a.x,x=a.y,E=a.z,L=g.x,O=g.y,G=g.z;return this.x=x*G-E*O,this.y=E*L-w*G,this.z=w*O-x*L,this}projectOnVector(a){const g=a.lengthSq();if(g===0)return this.set(0,0,0);const w=a.dot(this)/g;return this.copy(a).multiplyScalar(w)}projectOnPlane(a){return b6.copy(this).projectOnVector(a),this.sub(b6)}reflect(a){return this.sub(b6.copy(a).multiplyScalar(2*this.dot(a)))}angleTo(a){const g=Math.sqrt(this.lengthSq()*a.lengthSq());if(g===0)return Math.PI/2;const w=this.dot(a)/g;return Math.acos(j0(w,-1,1))}distanceTo(a){return Math.sqrt(this.distanceToSquared(a))}distanceToSquared(a){const g=this.x-a.x,w=this.y-a.y,x=this.z-a.z;return g*g+w*w+x*x}manhattanDistanceTo(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z)}setFromSpherical(a){return this.setFromSphericalCoords(a.radius,a.phi,a.theta)}setFromSphericalCoords(a,g,w){const x=Math.sin(g)*a;return this.x=x*Math.sin(w),this.y=Math.cos(g)*a,this.z=x*Math.cos(w),this}setFromCylindrical(a){return this.setFromCylindricalCoords(a.radius,a.theta,a.y)}setFromCylindricalCoords(a,g,w){return this.x=a*Math.sin(g),this.y=w,this.z=a*Math.cos(g),this}setFromMatrixPosition(a){const g=a.elements;return this.x=g[12],this.y=g[13],this.z=g[14],this}setFromMatrixScale(a){const g=this.setFromMatrixColumn(a,0).length(),w=this.setFromMatrixColumn(a,1).length(),x=this.setFromMatrixColumn(a,2).length();return this.x=g,this.y=w,this.z=x,this}setFromMatrixColumn(a,g){return this.fromArray(a.elements,g*4)}setFromMatrix3Column(a,g){return this.fromArray(a.elements,g*3)}setFromEuler(a){return this.x=a._x,this.y=a._y,this.z=a._z,this}setFromColor(a){return this.x=a.r,this.y=a.g,this.z=a.b,this}equals(a){return a.x===this.x&&a.y===this.y&&a.z===this.z}fromArray(a,g=0){return this.x=a[g],this.y=a[g+1],this.z=a[g+2],this}toArray(a=[],g=0){return a[g]=this.x,a[g+1]=this.y,a[g+2]=this.z,a}fromBufferAttribute(a,g){return this.x=a.getX(g),this.y=a.getY(g),this.z=a.getZ(g),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const a=Math.random()*Math.PI*2,g=Math.random()*2-1,w=Math.sqrt(1-g*g);return this.x=w*Math.cos(a),this.y=g,this.z=w*Math.sin(a),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const b6=new S2,nz=new Sn;class Qo{constructor(a=new S2(1/0,1/0,1/0),g=new S2(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=a,this.max=g}set(a,g){return this.min.copy(a),this.max.copy(g),this}setFromArray(a){this.makeEmpty();for(let g=0,w=a.length;g<w;g+=3)this.expandByPoint(uo.fromArray(a,g));return this}setFromBufferAttribute(a){this.makeEmpty();for(let g=0,w=a.count;g<w;g++)this.expandByPoint(uo.fromBufferAttribute(a,g));return this}setFromPoints(a){this.makeEmpty();for(let g=0,w=a.length;g<w;g++)this.expandByPoint(a[g]);return this}setFromCenterAndSize(a,g){const w=uo.copy(g).multiplyScalar(.5);return this.min.copy(a).sub(w),this.max.copy(a).add(w),this}setFromObject(a,g=!1){return this.makeEmpty(),this.expandByObject(a,g)}clone(){return new this.constructor().copy(this)}copy(a){return this.min.copy(a.min),this.max.copy(a.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(a){return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(a){return this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min)}expandByPoint(a){return this.min.min(a),this.max.max(a),this}expandByVector(a){return this.min.sub(a),this.max.add(a),this}expandByScalar(a){return this.min.addScalar(-a),this.max.addScalar(a),this}expandByObject(a,g=!1){a.updateWorldMatrix(!1,!1);const w=a.geometry;if(w!==void 0){const E=w.getAttribute("position");if(g===!0&&E!==void 0&&a.isInstancedMesh!==!0)for(let L=0,O=E.count;L<O;L++)a.isMesh===!0?a.getVertexPosition(L,uo):uo.fromBufferAttribute(E,L),uo.applyMatrix4(a.matrixWorld),this.expandByPoint(uo);else a.boundingBox!==void 0?(a.boundingBox===null&&a.computeBoundingBox(),z4.copy(a.boundingBox)):(w.boundingBox===null&&w.computeBoundingBox(),z4.copy(w.boundingBox)),z4.applyMatrix4(a.matrixWorld),this.union(z4)}const x=a.children;for(let E=0,L=x.length;E<L;E++)this.expandByObject(x[E],g);return this}containsPoint(a){return!(a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z)}containsBox(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z}getParameter(a,g){return g.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(a){return!(a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z)}intersectsSphere(a){return this.clampPoint(a.center,uo),uo.distanceToSquared(a.center)<=a.radius*a.radius}intersectsPlane(a){let g,w;return a.normal.x>0?(g=a.normal.x*this.min.x,w=a.normal.x*this.max.x):(g=a.normal.x*this.max.x,w=a.normal.x*this.min.x),a.normal.y>0?(g+=a.normal.y*this.min.y,w+=a.normal.y*this.max.y):(g+=a.normal.y*this.max.y,w+=a.normal.y*this.min.y),a.normal.z>0?(g+=a.normal.z*this.min.z,w+=a.normal.z*this.max.z):(g+=a.normal.z*this.max.z,w+=a.normal.z*this.min.z),g<=-a.constant&&w>=-a.constant}intersectsTriangle(a){if(this.isEmpty())return!1;this.getCenter(xf),V4.subVectors(this.max,xf),Ol.subVectors(a.a,xf),jl.subVectors(a.b,xf),Nl.subVectors(a.c,xf),o1.subVectors(jl,Ol),s1.subVectors(Nl,jl),N1.subVectors(Ol,Nl);let g=[0,-o1.z,o1.y,0,-s1.z,s1.y,0,-N1.z,N1.y,o1.z,0,-o1.x,s1.z,0,-s1.x,N1.z,0,-N1.x,-o1.y,o1.x,0,-s1.y,s1.x,0,-N1.y,N1.x,0];return!D6(g,Ol,jl,Nl,V4)||(g=[1,0,0,0,1,0,0,0,1],!D6(g,Ol,jl,Nl,V4))?!1:(Q4.crossVectors(o1,s1),g=[Q4.x,Q4.y,Q4.z],D6(g,Ol,jl,Nl,V4))}clampPoint(a,g){return g.copy(a).clamp(this.min,this.max)}distanceToPoint(a){return this.clampPoint(a,uo).distanceTo(a)}getBoundingSphere(a){return this.isEmpty()?a.makeEmpty():(this.getCenter(a.center),a.radius=this.getSize(uo).length()*.5),a}intersect(a){return this.min.max(a.min),this.max.min(a.max),this.isEmpty()&&this.makeEmpty(),this}union(a){return this.min.min(a.min),this.max.max(a.max),this}applyMatrix4(a){return this.isEmpty()?this:(gs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(a),gs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(a),gs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(a),gs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(a),gs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(a),gs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(a),gs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(a),gs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(a),this.setFromPoints(gs),this)}translate(a){return this.min.add(a),this.max.add(a),this}equals(a){return a.min.equals(this.min)&&a.max.equals(this.max)}}const gs=[new S2,new S2,new S2,new S2,new S2,new S2,new S2,new S2],uo=new S2,z4=new Qo,Ol=new S2,jl=new S2,Nl=new S2,o1=new S2,s1=new S2,N1=new S2,xf=new S2,V4=new S2,Q4=new S2,U1=new S2;function D6(D,a,g,w,x){for(let E=0,L=D.length-3;E<=L;E+=3){U1.fromArray(D,E);const O=x.x*Math.abs(U1.x)+x.y*Math.abs(U1.y)+x.z*Math.abs(U1.z),G=a.dot(U1),h=g.dot(U1),X=w.dot(U1);if(Math.max(-Math.max(G,h,X),Math.min(G,h,X))>O)return!1}return!0}const pc2=new Qo,Cf=new S2,I6=new S2;class Yo{constructor(a=new S2,g=-1){this.isSphere=!0,this.center=a,this.radius=g}set(a,g){return this.center.copy(a),this.radius=g,this}setFromPoints(a,g){const w=this.center;g!==void 0?w.copy(g):pc2.setFromPoints(a).getCenter(w);let x=0;for(let E=0,L=a.length;E<L;E++)x=Math.max(x,w.distanceToSquared(a[E]));return this.radius=Math.sqrt(x),this}copy(a){return this.center.copy(a.center),this.radius=a.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(a){return a.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(a){return a.distanceTo(this.center)-this.radius}intersectsSphere(a){const g=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=g*g}intersectsBox(a){return a.intersectsSphere(this)}intersectsPlane(a){return Math.abs(a.distanceToPoint(this.center))<=this.radius}clampPoint(a,g){const w=this.center.distanceToSquared(a);return g.copy(a),w>this.radius*this.radius&&(g.sub(this.center).normalize(),g.multiplyScalar(this.radius).add(this.center)),g}getBoundingBox(a){return this.isEmpty()?(a.makeEmpty(),a):(a.set(this.center,this.center),a.expandByScalar(this.radius),a)}applyMatrix4(a){return this.center.applyMatrix4(a),this.radius=this.radius*a.getMaxScaleOnAxis(),this}translate(a){return this.center.add(a),this}expandByPoint(a){if(this.isEmpty())return this.center.copy(a),this.radius=0,this;Cf.subVectors(a,this.center);const g=Cf.lengthSq();if(g>this.radius*this.radius){const w=Math.sqrt(g),x=(w-this.radius)*.5;this.center.addScaledVector(Cf,x/w),this.radius+=x}return this}union(a){return a.isEmpty()?this:this.isEmpty()?(this.copy(a),this):(this.center.equals(a.center)===!0?this.radius=Math.max(this.radius,a.radius):(I6.subVectors(a.center,this.center).setLength(a.radius),this.expandByPoint(Cf.copy(a.center).add(I6)),this.expandByPoint(Cf.copy(a.center).sub(I6))),this)}equals(a){return a.center.equals(this.center)&&a.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ys=new S2,P6=new S2,Y4=new S2,l1=new S2,L6=new S2,X4=new S2,F6=new S2;class Jf{constructor(a=new S2,g=new S2(0,0,-1)){this.origin=a,this.direction=g}set(a,g){return this.origin.copy(a),this.direction.copy(g),this}copy(a){return this.origin.copy(a.origin),this.direction.copy(a.direction),this}at(a,g){return g.copy(this.origin).addScaledVector(this.direction,a)}lookAt(a){return this.direction.copy(a).sub(this.origin).normalize(),this}recast(a){return this.origin.copy(this.at(a,ys)),this}closestPointToPoint(a,g){g.subVectors(a,this.origin);const w=g.dot(this.direction);return w<0?g.copy(this.origin):g.copy(this.origin).addScaledVector(this.direction,w)}distanceToPoint(a){return Math.sqrt(this.distanceSqToPoint(a))}distanceSqToPoint(a){const g=ys.subVectors(a,this.origin).dot(this.direction);return g<0?this.origin.distanceToSquared(a):(ys.copy(this.origin).addScaledVector(this.direction,g),ys.distanceToSquared(a))}distanceSqToSegment(a,g,w,x){P6.copy(a).add(g).multiplyScalar(.5),Y4.copy(g).sub(a).normalize(),l1.copy(this.origin).sub(P6);const E=a.distanceTo(g)*.5,L=-this.direction.dot(Y4),O=l1.dot(this.direction),G=-l1.dot(Y4),h=l1.lengthSq(),X=Math.abs(1-L*L);let Z,K,e2,l2;if(X>0)if(Z=L*G-O,K=L*O-G,l2=E*X,Z>=0)if(K>=-l2)if(K<=l2){const p2=1/X;Z*=p2,K*=p2,e2=Z*(Z+L*K+2*O)+K*(L*Z+K+2*G)+h}else K=E,Z=Math.max(0,-(L*K+O)),e2=-Z*Z+K*(K+2*G)+h;else K=-E,Z=Math.max(0,-(L*K+O)),e2=-Z*Z+K*(K+2*G)+h;else K<=-l2?(Z=Math.max(0,-(-L*E+O)),K=Z>0?-E:Math.min(Math.max(-E,-G),E),e2=-Z*Z+K*(K+2*G)+h):K<=l2?(Z=0,K=Math.min(Math.max(-E,-G),E),e2=K*(K+2*G)+h):(Z=Math.max(0,-(L*E+O)),K=Z>0?E:Math.min(Math.max(-E,-G),E),e2=-Z*Z+K*(K+2*G)+h);else K=L>0?-E:E,Z=Math.max(0,-(L*K+O)),e2=-Z*Z+K*(K+2*G)+h;return w&&w.copy(this.origin).addScaledVector(this.direction,Z),x&&x.copy(P6).addScaledVector(Y4,K),e2}intersectSphere(a,g){ys.subVectors(a.center,this.origin);const w=ys.dot(this.direction),x=ys.dot(ys)-w*w,E=a.radius*a.radius;if(x>E)return null;const L=Math.sqrt(E-x),O=w-L,G=w+L;return G<0?null:O<0?this.at(G,g):this.at(O,g)}intersectsSphere(a){return this.distanceSqToPoint(a.center)<=a.radius*a.radius}distanceToPlane(a){const g=a.normal.dot(this.direction);if(g===0)return a.distanceToPoint(this.origin)===0?0:null;const w=-(this.origin.dot(a.normal)+a.constant)/g;return w>=0?w:null}intersectPlane(a,g){const w=this.distanceToPlane(a);return w===null?null:this.at(w,g)}intersectsPlane(a){const g=a.distanceToPoint(this.origin);return g===0||a.normal.dot(this.direction)*g<0}intersectBox(a,g){let w,x,E,L,O,G;const h=1/this.direction.x,X=1/this.direction.y,Z=1/this.direction.z,K=this.origin;return h>=0?(w=(a.min.x-K.x)*h,x=(a.max.x-K.x)*h):(w=(a.max.x-K.x)*h,x=(a.min.x-K.x)*h),X>=0?(E=(a.min.y-K.y)*X,L=(a.max.y-K.y)*X):(E=(a.max.y-K.y)*X,L=(a.min.y-K.y)*X),w>L||E>x||((E>w||isNaN(w))&&(w=E),(L<x||isNaN(x))&&(x=L),Z>=0?(O=(a.min.z-K.z)*Z,G=(a.max.z-K.z)*Z):(O=(a.max.z-K.z)*Z,G=(a.min.z-K.z)*Z),w>G||O>x)||((O>w||w!==w)&&(w=O),(G<x||x!==x)&&(x=G),x<0)?null:this.at(w>=0?w:x,g)}intersectsBox(a){return this.intersectBox(a,ys)!==null}intersectTriangle(a,g,w,x,E){L6.subVectors(g,a),X4.subVectors(w,a),F6.crossVectors(L6,X4);let L=this.direction.dot(F6),O;if(L>0){if(x)return null;O=1}else if(L<0)O=-1,L=-L;else return null;l1.subVectors(this.origin,a);const G=O*this.direction.dot(X4.crossVectors(l1,X4));if(G<0)return null;const h=O*this.direction.dot(L6.cross(l1));if(h<0||G+h>L)return null;const X=-O*l1.dot(F6);return X<0?null:this.at(X/L,E)}applyMatrix4(a){return this.origin.applyMatrix4(a),this.direction.transformDirection(a),this}equals(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(a,g,w,x,E,L,O,G,h,X,Z,K,e2,l2,p2,r2){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],a!==void 0&&this.set(a,g,w,x,E,L,O,G,h,X,Z,K,e2,l2,p2,r2)}set(a,g,w,x,E,L,O,G,h,X,Z,K,e2,l2,p2,r2){const o2=this.elements;return o2[0]=a,o2[4]=g,o2[8]=w,o2[12]=x,o2[1]=E,o2[5]=L,o2[9]=O,o2[13]=G,o2[2]=h,o2[6]=X,o2[10]=Z,o2[14]=K,o2[3]=e2,o2[7]=l2,o2[11]=p2,o2[15]=r2,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(a){const g=this.elements,w=a.elements;return g[0]=w[0],g[1]=w[1],g[2]=w[2],g[3]=w[3],g[4]=w[4],g[5]=w[5],g[6]=w[6],g[7]=w[7],g[8]=w[8],g[9]=w[9],g[10]=w[10],g[11]=w[11],g[12]=w[12],g[13]=w[13],g[14]=w[14],g[15]=w[15],this}copyPosition(a){const g=this.elements,w=a.elements;return g[12]=w[12],g[13]=w[13],g[14]=w[14],this}setFromMatrix3(a){const g=a.elements;return this.set(g[0],g[3],g[6],0,g[1],g[4],g[7],0,g[2],g[5],g[8],0,0,0,0,1),this}extractBasis(a,g,w){return a.setFromMatrixColumn(this,0),g.setFromMatrixColumn(this,1),w.setFromMatrixColumn(this,2),this}makeBasis(a,g,w){return this.set(a.x,g.x,w.x,0,a.y,g.y,w.y,0,a.z,g.z,w.z,0,0,0,0,1),this}extractRotation(a){const g=this.elements,w=a.elements,x=1/Ul.setFromMatrixColumn(a,0).length(),E=1/Ul.setFromMatrixColumn(a,1).length(),L=1/Ul.setFromMatrixColumn(a,2).length();return g[0]=w[0]*x,g[1]=w[1]*x,g[2]=w[2]*x,g[3]=0,g[4]=w[4]*E,g[5]=w[5]*E,g[6]=w[6]*E,g[7]=0,g[8]=w[8]*L,g[9]=w[9]*L,g[10]=w[10]*L,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,this}makeRotationFromEuler(a){const g=this.elements,w=a.x,x=a.y,E=a.z,L=Math.cos(w),O=Math.sin(w),G=Math.cos(x),h=Math.sin(x),X=Math.cos(E),Z=Math.sin(E);if(a.order==="XYZ"){const K=L*X,e2=L*Z,l2=O*X,p2=O*Z;g[0]=G*X,g[4]=-G*Z,g[8]=h,g[1]=e2+l2*h,g[5]=K-p2*h,g[9]=-O*G,g[2]=p2-K*h,g[6]=l2+e2*h,g[10]=L*G}else if(a.order==="YXZ"){const K=G*X,e2=G*Z,l2=h*X,p2=h*Z;g[0]=K+p2*O,g[4]=l2*O-e2,g[8]=L*h,g[1]=L*Z,g[5]=L*X,g[9]=-O,g[2]=e2*O-l2,g[6]=p2+K*O,g[10]=L*G}else if(a.order==="ZXY"){const K=G*X,e2=G*Z,l2=h*X,p2=h*Z;g[0]=K-p2*O,g[4]=-L*Z,g[8]=l2+e2*O,g[1]=e2+l2*O,g[5]=L*X,g[9]=p2-K*O,g[2]=-L*h,g[6]=O,g[10]=L*G}else if(a.order==="ZYX"){const K=L*X,e2=L*Z,l2=O*X,p2=O*Z;g[0]=G*X,g[4]=l2*h-e2,g[8]=K*h+p2,g[1]=G*Z,g[5]=p2*h+K,g[9]=e2*h-l2,g[2]=-h,g[6]=O*G,g[10]=L*G}else if(a.order==="YZX"){const K=L*G,e2=L*h,l2=O*G,p2=O*h;g[0]=G*X,g[4]=p2-K*Z,g[8]=l2*Z+e2,g[1]=Z,g[5]=L*X,g[9]=-O*X,g[2]=-h*X,g[6]=e2*Z+l2,g[10]=K-p2*Z}else if(a.order==="XZY"){const K=L*G,e2=L*h,l2=O*G,p2=O*h;g[0]=G*X,g[4]=-Z,g[8]=h*X,g[1]=K*Z+p2,g[5]=L*X,g[9]=e2*Z-l2,g[2]=l2*Z-e2,g[6]=O*X,g[10]=p2*Z+K}return g[3]=0,g[7]=0,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,this}makeRotationFromQuaternion(a){return this.compose(cc2,a,_c2)}lookAt(a,g,w){const x=this.elements;return Ar.subVectors(a,g),Ar.lengthSq()===0&&(Ar.z=1),Ar.normalize(),u1.crossVectors(w,Ar),u1.lengthSq()===0&&(Math.abs(w.z)===1?Ar.x+=1e-4:Ar.z+=1e-4,Ar.normalize(),u1.crossVectors(w,Ar)),u1.normalize(),Z4.crossVectors(Ar,u1),x[0]=u1.x,x[4]=Z4.x,x[8]=Ar.x,x[1]=u1.y,x[5]=Z4.y,x[9]=Ar.y,x[2]=u1.z,x[6]=Z4.z,x[10]=Ar.z,this}multiply(a){return this.multiplyMatrices(this,a)}premultiply(a){return this.multiplyMatrices(a,this)}multiplyMatrices(a,g){const w=a.elements,x=g.elements,E=this.elements,L=w[0],O=w[4],G=w[8],h=w[12],X=w[1],Z=w[5],K=w[9],e2=w[13],l2=w[2],p2=w[6],r2=w[10],o2=w[14],k2=w[3],h2=w[7],v2=w[11],j2=w[15],R2=x[0],D2=x[4],Q2=x[8],x2=x[12],g2=x[1],Y2=x[5],st=x[9],U2=x[13],lt=x[2],ht=x[6],mt=x[10],Dt=x[14],et=x[3],gt=x[7],xt=x[11],ie=x[15];return E[0]=L*R2+O*g2+G*lt+h*et,E[4]=L*D2+O*Y2+G*ht+h*gt,E[8]=L*Q2+O*st+G*mt+h*xt,E[12]=L*x2+O*U2+G*Dt+h*ie,E[1]=X*R2+Z*g2+K*lt+e2*et,E[5]=X*D2+Z*Y2+K*ht+e2*gt,E[9]=X*Q2+Z*st+K*mt+e2*xt,E[13]=X*x2+Z*U2+K*Dt+e2*ie,E[2]=l2*R2+p2*g2+r2*lt+o2*et,E[6]=l2*D2+p2*Y2+r2*ht+o2*gt,E[10]=l2*Q2+p2*st+r2*mt+o2*xt,E[14]=l2*x2+p2*U2+r2*Dt+o2*ie,E[3]=k2*R2+h2*g2+v2*lt+j2*et,E[7]=k2*D2+h2*Y2+v2*ht+j2*gt,E[11]=k2*Q2+h2*st+v2*mt+j2*xt,E[15]=k2*x2+h2*U2+v2*Dt+j2*ie,this}multiplyScalar(a){const g=this.elements;return g[0]*=a,g[4]*=a,g[8]*=a,g[12]*=a,g[1]*=a,g[5]*=a,g[9]*=a,g[13]*=a,g[2]*=a,g[6]*=a,g[10]*=a,g[14]*=a,g[3]*=a,g[7]*=a,g[11]*=a,g[15]*=a,this}determinant(){const a=this.elements,g=a[0],w=a[4],x=a[8],E=a[12],L=a[1],O=a[5],G=a[9],h=a[13],X=a[2],Z=a[6],K=a[10],e2=a[14],l2=a[3],p2=a[7],r2=a[11],o2=a[15];return l2*(+E*G*Z-x*h*Z-E*O*K+w*h*K+x*O*e2-w*G*e2)+p2*(+g*G*e2-g*h*K+E*L*K-x*L*e2+x*h*X-E*G*X)+r2*(+g*h*Z-g*O*e2-E*L*Z+w*L*e2+E*O*X-w*h*X)+o2*(-x*O*X-g*G*Z+g*O*K+x*L*Z-w*L*K+w*G*X)}transpose(){const a=this.elements;let g;return g=a[1],a[1]=a[4],a[4]=g,g=a[2],a[2]=a[8],a[8]=g,g=a[6],a[6]=a[9],a[9]=g,g=a[3],a[3]=a[12],a[12]=g,g=a[7],a[7]=a[13],a[13]=g,g=a[11],a[11]=a[14],a[14]=g,this}setPosition(a,g,w){const x=this.elements;return a.isVector3?(x[12]=a.x,x[13]=a.y,x[14]=a.z):(x[12]=a,x[13]=g,x[14]=w),this}invert(){const a=this.elements,g=a[0],w=a[1],x=a[2],E=a[3],L=a[4],O=a[5],G=a[6],h=a[7],X=a[8],Z=a[9],K=a[10],e2=a[11],l2=a[12],p2=a[13],r2=a[14],o2=a[15],k2=Z*r2*h-p2*K*h+p2*G*e2-O*r2*e2-Z*G*o2+O*K*o2,h2=l2*K*h-X*r2*h-l2*G*e2+L*r2*e2+X*G*o2-L*K*o2,v2=X*p2*h-l2*Z*h+l2*O*e2-L*p2*e2-X*O*o2+L*Z*o2,j2=l2*Z*G-X*p2*G-l2*O*K+L*p2*K+X*O*r2-L*Z*r2,R2=g*k2+w*h2+x*v2+E*j2;if(R2===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D2=1/R2;return a[0]=k2*D2,a[1]=(p2*K*E-Z*r2*E-p2*x*e2+w*r2*e2+Z*x*o2-w*K*o2)*D2,a[2]=(O*r2*E-p2*G*E+p2*x*h-w*r2*h-O*x*o2+w*G*o2)*D2,a[3]=(Z*G*E-O*K*E-Z*x*h+w*K*h+O*x*e2-w*G*e2)*D2,a[4]=h2*D2,a[5]=(X*r2*E-l2*K*E+l2*x*e2-g*r2*e2-X*x*o2+g*K*o2)*D2,a[6]=(l2*G*E-L*r2*E-l2*x*h+g*r2*h+L*x*o2-g*G*o2)*D2,a[7]=(L*K*E-X*G*E+X*x*h-g*K*h-L*x*e2+g*G*e2)*D2,a[8]=v2*D2,a[9]=(l2*Z*E-X*p2*E-l2*w*e2+g*p2*e2+X*w*o2-g*Z*o2)*D2,a[10]=(L*p2*E-l2*O*E+l2*w*h-g*p2*h-L*w*o2+g*O*o2)*D2,a[11]=(X*O*E-L*Z*E-X*w*h+g*Z*h+L*w*e2-g*O*e2)*D2,a[12]=j2*D2,a[13]=(X*p2*x-l2*Z*x+l2*w*K-g*p2*K-X*w*r2+g*Z*r2)*D2,a[14]=(l2*O*x-L*p2*x-l2*w*G+g*p2*G+L*w*r2-g*O*r2)*D2,a[15]=(L*Z*x-X*O*x+X*w*G-g*Z*G-L*w*K+g*O*K)*D2,this}scale(a){const g=this.elements,w=a.x,x=a.y,E=a.z;return g[0]*=w,g[4]*=x,g[8]*=E,g[1]*=w,g[5]*=x,g[9]*=E,g[2]*=w,g[6]*=x,g[10]*=E,g[3]*=w,g[7]*=x,g[11]*=E,this}getMaxScaleOnAxis(){const a=this.elements,g=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],w=a[4]*a[4]+a[5]*a[5]+a[6]*a[6],x=a[8]*a[8]+a[9]*a[9]+a[10]*a[10];return Math.sqrt(Math.max(g,w,x))}makeTranslation(a,g,w){return a.isVector3?this.set(1,0,0,a.x,0,1,0,a.y,0,0,1,a.z,0,0,0,1):this.set(1,0,0,a,0,1,0,g,0,0,1,w,0,0,0,1),this}makeRotationX(a){const g=Math.cos(a),w=Math.sin(a);return this.set(1,0,0,0,0,g,-w,0,0,w,g,0,0,0,0,1),this}makeRotationY(a){const g=Math.cos(a),w=Math.sin(a);return this.set(g,0,w,0,0,1,0,0,-w,0,g,0,0,0,0,1),this}makeRotationZ(a){const g=Math.cos(a),w=Math.sin(a);return this.set(g,-w,0,0,w,g,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(a,g){const w=Math.cos(g),x=Math.sin(g),E=1-w,L=a.x,O=a.y,G=a.z,h=E*L,X=E*O;return this.set(h*L+w,h*O-x*G,h*G+x*O,0,h*O+x*G,X*O+w,X*G-x*L,0,h*G-x*O,X*G+x*L,E*G*G+w,0,0,0,0,1),this}makeScale(a,g,w){return this.set(a,0,0,0,0,g,0,0,0,0,w,0,0,0,0,1),this}makeShear(a,g,w,x,E,L){return this.set(1,w,E,0,a,1,L,0,g,x,1,0,0,0,0,1),this}compose(a,g,w){const x=this.elements,E=g._x,L=g._y,O=g._z,G=g._w,h=E+E,X=L+L,Z=O+O,K=E*h,e2=E*X,l2=E*Z,p2=L*X,r2=L*Z,o2=O*Z,k2=G*h,h2=G*X,v2=G*Z,j2=w.x,R2=w.y,D2=w.z;return x[0]=(1-(p2+o2))*j2,x[1]=(e2+v2)*j2,x[2]=(l2-h2)*j2,x[3]=0,x[4]=(e2-v2)*R2,x[5]=(1-(K+o2))*R2,x[6]=(r2+k2)*R2,x[7]=0,x[8]=(l2+h2)*D2,x[9]=(r2-k2)*D2,x[10]=(1-(K+p2))*D2,x[11]=0,x[12]=a.x,x[13]=a.y,x[14]=a.z,x[15]=1,this}decompose(a,g,w){const x=this.elements;let E=Ul.set(x[0],x[1],x[2]).length();const L=Ul.set(x[4],x[5],x[6]).length(),O=Ul.set(x[8],x[9],x[10]).length();this.determinant()<0&&(E=-E),a.x=x[12],a.y=x[13],a.z=x[14],fo.copy(this);const h=1/E,X=1/L,Z=1/O;return fo.elements[0]*=h,fo.elements[1]*=h,fo.elements[2]*=h,fo.elements[4]*=X,fo.elements[5]*=X,fo.elements[6]*=X,fo.elements[8]*=Z,fo.elements[9]*=Z,fo.elements[10]*=Z,g.setFromRotationMatrix(fo),w.x=E,w.y=L,w.z=O,this}makePerspective(a,g,w,x,E,L,O=Ms){const G=this.elements,h=2*E/(g-a),X=2*E/(w-x),Z=(g+a)/(g-a),K=(w+x)/(w-x);let e2,l2;if(O===Ms)e2=-(L+E)/(L-E),l2=-2*L*E/(L-E);else if(O===Fc)e2=-L/(L-E),l2=-L*E/(L-E);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+O);return G[0]=h,G[4]=0,G[8]=Z,G[12]=0,G[1]=0,G[5]=X,G[9]=K,G[13]=0,G[2]=0,G[6]=0,G[10]=e2,G[14]=l2,G[3]=0,G[7]=0,G[11]=-1,G[15]=0,this}makeOrthographic(a,g,w,x,E,L,O=Ms){const G=this.elements,h=1/(g-a),X=1/(w-x),Z=1/(L-E),K=(g+a)*h,e2=(w+x)*X;let l2,p2;if(O===Ms)l2=(L+E)*Z,p2=-2*Z;else if(O===Fc)l2=E*Z,p2=-1*Z;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+O);return G[0]=2*h,G[4]=0,G[8]=0,G[12]=-K,G[1]=0,G[5]=2*X,G[9]=0,G[13]=-e2,G[2]=0,G[6]=0,G[10]=p2,G[14]=-l2,G[3]=0,G[7]=0,G[11]=0,G[15]=1,this}equals(a){const g=this.elements,w=a.elements;for(let x=0;x<16;x++)if(g[x]!==w[x])return!1;return!0}fromArray(a,g=0){for(let w=0;w<16;w++)this.elements[w]=a[w+g];return this}toArray(a=[],g=0){const w=this.elements;return a[g]=w[0],a[g+1]=w[1],a[g+2]=w[2],a[g+3]=w[3],a[g+4]=w[4],a[g+5]=w[5],a[g+6]=w[6],a[g+7]=w[7],a[g+8]=w[8],a[g+9]=w[9],a[g+10]=w[10],a[g+11]=w[11],a[g+12]=w[12],a[g+13]=w[13],a[g+14]=w[14],a[g+15]=w[15],a}}const Ul=new S2,fo=new _e,cc2=new S2(0,0,0),_c2=new S2(1,1,1),u1=new S2,Z4=new S2,Ar=new S2,iz=new _e,rz=new Sn;class xn{constructor(a=0,g=0,w=0,x=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=a,this._y=g,this._z=w,this._order=x}get x(){return this._x}set x(a){this._x=a,this._onChangeCallback()}get y(){return this._y}set y(a){this._y=a,this._onChangeCallback()}get z(){return this._z}set z(a){this._z=a,this._onChangeCallback()}get order(){return this._order}set order(a){this._order=a,this._onChangeCallback()}set(a,g,w,x=this._order){return this._x=a,this._y=g,this._z=w,this._order=x,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(a){return this._x=a._x,this._y=a._y,this._z=a._z,this._order=a._order,this._onChangeCallback(),this}setFromRotationMatrix(a,g=this._order,w=!0){const x=a.elements,E=x[0],L=x[4],O=x[8],G=x[1],h=x[5],X=x[9],Z=x[2],K=x[6],e2=x[10];switch(g){case"XYZ":this._y=Math.asin(j0(O,-1,1)),Math.abs(O)<.9999999?(this._x=Math.atan2(-X,e2),this._z=Math.atan2(-L,E)):(this._x=Math.atan2(K,h),this._z=0);break;case"YXZ":this._x=Math.asin(-j0(X,-1,1)),Math.abs(X)<.9999999?(this._y=Math.atan2(O,e2),this._z=Math.atan2(G,h)):(this._y=Math.atan2(-Z,E),this._z=0);break;case"ZXY":this._x=Math.asin(j0(K,-1,1)),Math.abs(K)<.9999999?(this._y=Math.atan2(-Z,e2),this._z=Math.atan2(-L,h)):(this._y=0,this._z=Math.atan2(G,E));break;case"ZYX":this._y=Math.asin(-j0(Z,-1,1)),Math.abs(Z)<.9999999?(this._x=Math.atan2(K,e2),this._z=Math.atan2(G,E)):(this._x=0,this._z=Math.atan2(-L,h));break;case"YZX":this._z=Math.asin(j0(G,-1,1)),Math.abs(G)<.9999999?(this._x=Math.atan2(-X,h),this._y=Math.atan2(-Z,E)):(this._x=0,this._y=Math.atan2(O,e2));break;case"XZY":this._z=Math.asin(-j0(L,-1,1)),Math.abs(L)<.9999999?(this._x=Math.atan2(K,h),this._y=Math.atan2(O,E)):(this._x=Math.atan2(-X,e2),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+g)}return this._order=g,w===!0&&this._onChangeCallback(),this}setFromQuaternion(a,g,w){return iz.makeRotationFromQuaternion(a),this.setFromRotationMatrix(iz,g,w)}setFromVector3(a,g=this._order){return this.set(a.x,a.y,a.z,g)}reorder(a){return rz.setFromEuler(this),this.setFromQuaternion(rz,a)}equals(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order}fromArray(a){return this._x=a[0],this._y=a[1],this._z=a[2],a[3]!==void 0&&(this._order=a[3]),this._onChangeCallback(),this}toArray(a=[],g=0){return a[g]=this._x,a[g+1]=this._y,a[g+2]=this._z,a[g+3]=this._order,a}_onChange(a){return this._onChangeCallback=a,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class HV{constructor(){this.mask=1}set(a){this.mask=(1<<a|0)>>>0}enable(a){this.mask|=1<<a|0}enableAll(){this.mask=-1}toggle(a){this.mask^=1<<a|0}disable(a){this.mask&=~(1<<a|0)}disableAll(){this.mask=0}test(a){return(this.mask&a.mask)!==0}isEnabled(a){return(this.mask&(1<<a|0))!==0}}let ac2=0;const oz=new S2,Gl=new Sn,ks=new _e,q4=new S2,Mf=new S2,hc2=new S2,mc2=new Sn,sz=new S2(1,0,0),lz=new S2(0,1,0),uz=new S2(0,0,1),fz={type:"added"},dc2={type:"removed"},Wl={type:"childadded",child:null},O6={type:"childremoved",child:null};class Nn extends Rs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ac2++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const a=new S2,g=new xn,w=new Sn,x=new S2(1,1,1);function E(){w.setFromEuler(g,!1)}function L(){g.setFromQuaternion(w,void 0,!1)}g._onChange(E),w._onChange(L),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:a},rotation:{configurable:!0,enumerable:!0,value:g},quaternion:{configurable:!0,enumerable:!0,value:w},scale:{configurable:!0,enumerable:!0,value:x},modelViewMatrix:{value:new _e},normalMatrix:{value:new Je}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new HV,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(a){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(a),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(a){return this.quaternion.premultiply(a),this}setRotationFromAxisAngle(a,g){this.quaternion.setFromAxisAngle(a,g)}setRotationFromEuler(a){this.quaternion.setFromEuler(a,!0)}setRotationFromMatrix(a){this.quaternion.setFromRotationMatrix(a)}setRotationFromQuaternion(a){this.quaternion.copy(a)}rotateOnAxis(a,g){return Gl.setFromAxisAngle(a,g),this.quaternion.multiply(Gl),this}rotateOnWorldAxis(a,g){return Gl.setFromAxisAngle(a,g),this.quaternion.premultiply(Gl),this}rotateX(a){return this.rotateOnAxis(sz,a)}rotateY(a){return this.rotateOnAxis(lz,a)}rotateZ(a){return this.rotateOnAxis(uz,a)}translateOnAxis(a,g){return oz.copy(a).applyQuaternion(this.quaternion),this.position.add(oz.multiplyScalar(g)),this}translateX(a){return this.translateOnAxis(sz,a)}translateY(a){return this.translateOnAxis(lz,a)}translateZ(a){return this.translateOnAxis(uz,a)}localToWorld(a){return this.updateWorldMatrix(!0,!1),a.applyMatrix4(this.matrixWorld)}worldToLocal(a){return this.updateWorldMatrix(!0,!1),a.applyMatrix4(ks.copy(this.matrixWorld).invert())}lookAt(a,g,w){a.isVector3?q4.copy(a):q4.set(a,g,w);const x=this.parent;this.updateWorldMatrix(!0,!1),Mf.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ks.lookAt(Mf,q4,this.up):ks.lookAt(q4,Mf,this.up),this.quaternion.setFromRotationMatrix(ks),x&&(ks.extractRotation(x.matrixWorld),Gl.setFromRotationMatrix(ks),this.quaternion.premultiply(Gl.invert()))}add(a){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.add(arguments[g]);return this}return a===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this):(a&&a.isObject3D?(a.removeFromParent(),a.parent=this,this.children.push(a),a.dispatchEvent(fz),Wl.child=a,this.dispatchEvent(Wl),Wl.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a),this)}remove(a){if(arguments.length>1){for(let w=0;w<arguments.length;w++)this.remove(arguments[w]);return this}const g=this.children.indexOf(a);return g!==-1&&(a.parent=null,this.children.splice(g,1),a.dispatchEvent(dc2),O6.child=a,this.dispatchEvent(O6),O6.child=null),this}removeFromParent(){const a=this.parent;return a!==null&&a.remove(this),this}clear(){return this.remove(...this.children)}attach(a){return this.updateWorldMatrix(!0,!1),ks.copy(this.matrixWorld).invert(),a.parent!==null&&(a.parent.updateWorldMatrix(!0,!1),ks.multiply(a.parent.matrixWorld)),a.applyMatrix4(ks),a.removeFromParent(),a.parent=this,this.children.push(a),a.updateWorldMatrix(!1,!0),a.dispatchEvent(fz),Wl.child=a,this.dispatchEvent(Wl),Wl.child=null,this}getObjectById(a){return this.getObjectByProperty("id",a)}getObjectByName(a){return this.getObjectByProperty("name",a)}getObjectByProperty(a,g){if(this[a]===g)return this;for(let w=0,x=this.children.length;w<x;w++){const L=this.children[w].getObjectByProperty(a,g);if(L!==void 0)return L}}getObjectsByProperty(a,g,w=[]){this[a]===g&&w.push(this);const x=this.children;for(let E=0,L=x.length;E<L;E++)x[E].getObjectsByProperty(a,g,w);return w}getWorldPosition(a){return this.updateWorldMatrix(!0,!1),a.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(a){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mf,a,hc2),a}getWorldScale(a){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Mf,mc2,a),a}getWorldDirection(a){this.updateWorldMatrix(!0,!1);const g=this.matrixWorld.elements;return a.set(g[8],g[9],g[10]).normalize()}raycast(){}traverse(a){a(this);const g=this.children;for(let w=0,x=g.length;w<x;w++)g[w].traverse(a)}traverseVisible(a){if(this.visible===!1)return;a(this);const g=this.children;for(let w=0,x=g.length;w<x;w++)g[w].traverseVisible(a)}traverseAncestors(a){const g=this.parent;g!==null&&(a(g),g.traverseAncestors(a))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(a){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0);const g=this.children;for(let w=0,x=g.length;w<x;w++){const E=g[w];(E.matrixWorldAutoUpdate===!0||a===!0)&&E.updateMatrixWorld(a)}}updateWorldMatrix(a,g){const w=this.parent;if(a===!0&&w!==null&&w.matrixWorldAutoUpdate===!0&&w.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),g===!0){const x=this.children;for(let E=0,L=x.length;E<L;E++){const O=x[E];O.matrixWorldAutoUpdate===!0&&O.updateWorldMatrix(!1,!0)}}}toJSON(a){const g=a===void 0||typeof a=="string",w={};g&&(a={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},w.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const x={};x.uuid=this.uuid,x.type=this.type,this.name!==""&&(x.name=this.name),this.castShadow===!0&&(x.castShadow=!0),this.receiveShadow===!0&&(x.receiveShadow=!0),this.visible===!1&&(x.visible=!1),this.frustumCulled===!1&&(x.frustumCulled=!1),this.renderOrder!==0&&(x.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(x.userData=this.userData),x.layers=this.layers.mask,x.matrix=this.matrix.toArray(),x.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(x.matrixAutoUpdate=!1),this.isInstancedMesh&&(x.type="InstancedMesh",x.count=this.count,x.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(x.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(x.type="BatchedMesh",x.perObjectFrustumCulled=this.perObjectFrustumCulled,x.sortObjects=this.sortObjects,x.drawRanges=this._drawRanges,x.reservedRanges=this._reservedRanges,x.visibility=this._visibility,x.active=this._active,x.bounds=this._bounds.map(O=>({boxInitialized:O.boxInitialized,boxMin:O.box.min.toArray(),boxMax:O.box.max.toArray(),sphereInitialized:O.sphereInitialized,sphereRadius:O.sphere.radius,sphereCenter:O.sphere.center.toArray()})),x.maxGeometryCount=this._maxGeometryCount,x.maxVertexCount=this._maxVertexCount,x.maxIndexCount=this._maxIndexCount,x.geometryInitialized=this._geometryInitialized,x.geometryCount=this._geometryCount,x.matricesTexture=this._matricesTexture.toJSON(a),this.boundingSphere!==null&&(x.boundingSphere={center:x.boundingSphere.center.toArray(),radius:x.boundingSphere.radius}),this.boundingBox!==null&&(x.boundingBox={min:x.boundingBox.min.toArray(),max:x.boundingBox.max.toArray()}));function E(O,G){return O[G.uuid]===void 0&&(O[G.uuid]=G.toJSON(a)),G.uuid}if(this.isScene)this.background&&(this.background.isColor?x.background=this.background.toJSON():this.background.isTexture&&(x.background=this.background.toJSON(a).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(x.environment=this.environment.toJSON(a).uuid);else if(this.isMesh||this.isLine||this.isPoints){x.geometry=E(a.geometries,this.geometry);const O=this.geometry.parameters;if(O!==void 0&&O.shapes!==void 0){const G=O.shapes;if(Array.isArray(G))for(let h=0,X=G.length;h<X;h++){const Z=G[h];E(a.shapes,Z)}else E(a.shapes,G)}}if(this.isSkinnedMesh&&(x.bindMode=this.bindMode,x.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(E(a.skeletons,this.skeleton),x.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const O=[];for(let G=0,h=this.material.length;G<h;G++)O.push(E(a.materials,this.material[G]));x.material=O}else x.material=E(a.materials,this.material);if(this.children.length>0){x.children=[];for(let O=0;O<this.children.length;O++)x.children.push(this.children[O].toJSON(a).object)}if(this.animations.length>0){x.animations=[];for(let O=0;O<this.animations.length;O++){const G=this.animations[O];x.animations.push(E(a.animations,G))}}if(g){const O=L(a.geometries),G=L(a.materials),h=L(a.textures),X=L(a.images),Z=L(a.shapes),K=L(a.skeletons),e2=L(a.animations),l2=L(a.nodes);O.length>0&&(w.geometries=O),G.length>0&&(w.materials=G),h.length>0&&(w.textures=h),X.length>0&&(w.images=X),Z.length>0&&(w.shapes=Z),K.length>0&&(w.skeletons=K),e2.length>0&&(w.animations=e2),l2.length>0&&(w.nodes=l2)}return w.object=x,w;function L(O){const G=[];for(const h in O){const X=O[h];delete X.metadata,G.push(X)}return G}}clone(a){return new this.constructor().copy(this,a)}copy(a,g=!0){if(this.name=a.name,this.up.copy(a.up),this.position.copy(a.position),this.rotation.order=a.rotation.order,this.quaternion.copy(a.quaternion),this.scale.copy(a.scale),this.matrix.copy(a.matrix),this.matrixWorld.copy(a.matrixWorld),this.matrixAutoUpdate=a.matrixAutoUpdate,this.matrixWorldAutoUpdate=a.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate,this.layers.mask=a.layers.mask,this.visible=a.visible,this.castShadow=a.castShadow,this.receiveShadow=a.receiveShadow,this.frustumCulled=a.frustumCulled,this.renderOrder=a.renderOrder,this.animations=a.animations.slice(),this.userData=JSON.parse(JSON.stringify(a.userData)),g===!0)for(let w=0;w<a.children.length;w++){const x=a.children[w];this.add(x.clone())}return this}}Nn.DEFAULT_UP=new S2(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const po=new S2,vs=new S2,j6=new S2,ws=new S2,Hl=new S2,zl=new S2,pz=new S2,N6=new S2,U6=new S2,G6=new S2;class Uo{constructor(a=new S2,g=new S2,w=new S2){this.a=a,this.b=g,this.c=w}static getNormal(a,g,w,x){x.subVectors(w,g),po.subVectors(a,g),x.cross(po);const E=x.lengthSq();return E>0?x.multiplyScalar(1/Math.sqrt(E)):x.set(0,0,0)}static getBarycoord(a,g,w,x,E){po.subVectors(x,g),vs.subVectors(w,g),j6.subVectors(a,g);const L=po.dot(po),O=po.dot(vs),G=po.dot(j6),h=vs.dot(vs),X=vs.dot(j6),Z=L*h-O*O;if(Z===0)return E.set(0,0,0),null;const K=1/Z,e2=(h*G-O*X)*K,l2=(L*X-O*G)*K;return E.set(1-e2-l2,l2,e2)}static containsPoint(a,g,w,x){return this.getBarycoord(a,g,w,x,ws)===null?!1:ws.x>=0&&ws.y>=0&&ws.x+ws.y<=1}static getInterpolation(a,g,w,x,E,L,O,G){return this.getBarycoord(a,g,w,x,ws)===null?(G.x=0,G.y=0,"z"in G&&(G.z=0),"w"in G&&(G.w=0),null):(G.setScalar(0),G.addScaledVector(E,ws.x),G.addScaledVector(L,ws.y),G.addScaledVector(O,ws.z),G)}static isFrontFacing(a,g,w,x){return po.subVectors(w,g),vs.subVectors(a,g),po.cross(vs).dot(x)<0}set(a,g,w){return this.a.copy(a),this.b.copy(g),this.c.copy(w),this}setFromPointsAndIndices(a,g,w,x){return this.a.copy(a[g]),this.b.copy(a[w]),this.c.copy(a[x]),this}setFromAttributeAndIndices(a,g,w,x){return this.a.fromBufferAttribute(a,g),this.b.fromBufferAttribute(a,w),this.c.fromBufferAttribute(a,x),this}clone(){return new this.constructor().copy(this)}copy(a){return this.a.copy(a.a),this.b.copy(a.b),this.c.copy(a.c),this}getArea(){return po.subVectors(this.c,this.b),vs.subVectors(this.a,this.b),po.cross(vs).length()*.5}getMidpoint(a){return a.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(a){return Uo.getNormal(this.a,this.b,this.c,a)}getPlane(a){return a.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(a,g){return Uo.getBarycoord(a,this.a,this.b,this.c,g)}getInterpolation(a,g,w,x,E){return Uo.getInterpolation(a,this.a,this.b,this.c,g,w,x,E)}containsPoint(a){return Uo.containsPoint(a,this.a,this.b,this.c)}isFrontFacing(a){return Uo.isFrontFacing(this.a,this.b,this.c,a)}intersectsBox(a){return a.intersectsTriangle(this)}closestPointToPoint(a,g){const w=this.a,x=this.b,E=this.c;let L,O;Hl.subVectors(x,w),zl.subVectors(E,w),N6.subVectors(a,w);const G=Hl.dot(N6),h=zl.dot(N6);if(G<=0&&h<=0)return g.copy(w);U6.subVectors(a,x);const X=Hl.dot(U6),Z=zl.dot(U6);if(X>=0&&Z<=X)return g.copy(x);const K=G*Z-X*h;if(K<=0&&G>=0&&X<=0)return L=G/(G-X),g.copy(w).addScaledVector(Hl,L);G6.subVectors(a,E);const e2=Hl.dot(G6),l2=zl.dot(G6);if(l2>=0&&e2<=l2)return g.copy(E);const p2=e2*h-G*l2;if(p2<=0&&h>=0&&l2<=0)return O=h/(h-l2),g.copy(w).addScaledVector(zl,O);const r2=X*l2-e2*Z;if(r2<=0&&Z-X>=0&&e2-l2>=0)return pz.subVectors(E,x),O=(Z-X)/(Z-X+(e2-l2)),g.copy(x).addScaledVector(pz,O);const o2=1/(r2+p2+K);return L=p2*o2,O=K*o2,g.copy(w).addScaledVector(Hl,L).addScaledVector(zl,O)}equals(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}}const zV={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},f1={h:0,s:0,l:0},J4={h:0,s:0,l:0};function W6(D,a,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?D+(a-D)*6*g:g<1/2?a:g<2/3?D+(a-D)*6*(2/3-g):D}class pe{constructor(a,g,w){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(a,g,w)}set(a,g,w){if(g===void 0&&w===void 0){const x=a;x&&x.isColor?this.copy(x):typeof x=="number"?this.setHex(x):typeof x=="string"&&this.setStyle(x)}else this.setRGB(a,g,w);return this}setScalar(a){return this.r=a,this.g=a,this.b=a,this}setHex(a,g=T0){return a=Math.floor(a),this.r=(a>>16&255)/255,this.g=(a>>8&255)/255,this.b=(a&255)/255,Pn.toWorkingColorSpace(this,g),this}setRGB(a,g,w,x=Pn.workingColorSpace){return this.r=a,this.g=g,this.b=w,Pn.toWorkingColorSpace(this,x),this}setHSL(a,g,w,x=Pn.workingColorSpace){if(a=Va(a,1),g=j0(g,0,1),w=j0(w,0,1),g===0)this.r=this.g=this.b=w;else{const E=w<=.5?w*(1+g):w+g-w*g,L=2*w-E;this.r=W6(L,E,a+1/3),this.g=W6(L,E,a),this.b=W6(L,E,a-1/3)}return Pn.toWorkingColorSpace(this,x),this}setStyle(a,g=T0){function w(E){E!==void 0&&parseFloat(E)<1&&console.warn("THREE.Color: Alpha component of "+a+" will be ignored.")}let x;if(x=/^(\w+)\(([^\)]*)\)/.exec(a)){let E;const L=x[1],O=x[2];switch(L){case"rgb":case"rgba":if(E=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(O))return w(E[4]),this.setRGB(Math.min(255,parseInt(E[1],10))/255,Math.min(255,parseInt(E[2],10))/255,Math.min(255,parseInt(E[3],10))/255,g);if(E=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(O))return w(E[4]),this.setRGB(Math.min(100,parseInt(E[1],10))/100,Math.min(100,parseInt(E[2],10))/100,Math.min(100,parseInt(E[3],10))/100,g);break;case"hsl":case"hsla":if(E=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(O))return w(E[4]),this.setHSL(parseFloat(E[1])/360,parseFloat(E[2])/100,parseFloat(E[3])/100,g);break;default:console.warn("THREE.Color: Unknown color model "+a)}}else if(x=/^\#([A-Fa-f\d]+)$/.exec(a)){const E=x[1],L=E.length;if(L===3)return this.setRGB(parseInt(E.charAt(0),16)/15,parseInt(E.charAt(1),16)/15,parseInt(E.charAt(2),16)/15,g);if(L===6)return this.setHex(parseInt(E,16),g);console.warn("THREE.Color: Invalid hex color "+a)}else if(a&&a.length>0)return this.setColorName(a,g);return this}setColorName(a,g=T0){const w=zV[a.toLowerCase()];return w!==void 0?this.setHex(w,g):console.warn("THREE.Color: Unknown color "+a),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(a){return this.r=a.r,this.g=a.g,this.b=a.b,this}copySRGBToLinear(a){return this.r=lu(a.r),this.g=lu(a.g),this.b=lu(a.b),this}copyLinearToSRGB(a){return this.r=E6(a.r),this.g=E6(a.g),this.b=E6(a.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(a=T0){return Pn.fromWorkingColorSpace(Bi.copy(this),a),Math.round(j0(Bi.r*255,0,255))*65536+Math.round(j0(Bi.g*255,0,255))*256+Math.round(j0(Bi.b*255,0,255))}getHexString(a=T0){return("000000"+this.getHex(a).toString(16)).slice(-6)}getHSL(a,g=Pn.workingColorSpace){Pn.fromWorkingColorSpace(Bi.copy(this),g);const w=Bi.r,x=Bi.g,E=Bi.b,L=Math.max(w,x,E),O=Math.min(w,x,E);let G,h;const X=(O+L)/2;if(O===L)G=0,h=0;else{const Z=L-O;switch(h=X<=.5?Z/(L+O):Z/(2-L-O),L){case w:G=(x-E)/Z+(x<E?6:0);break;case x:G=(E-w)/Z+2;break;case E:G=(w-x)/Z+4;break}G/=6}return a.h=G,a.s=h,a.l=X,a}getRGB(a,g=Pn.workingColorSpace){return Pn.fromWorkingColorSpace(Bi.copy(this),g),a.r=Bi.r,a.g=Bi.g,a.b=Bi.b,a}getStyle(a=T0){Pn.fromWorkingColorSpace(Bi.copy(this),a);const g=Bi.r,w=Bi.g,x=Bi.b;return a!==T0?`color(${a} ${g.toFixed(3)} ${w.toFixed(3)} ${x.toFixed(3)})`:`rgb(${Math.round(g*255)},${Math.round(w*255)},${Math.round(x*255)})`}offsetHSL(a,g,w){return this.getHSL(f1),this.setHSL(f1.h+a,f1.s+g,f1.l+w)}add(a){return this.r+=a.r,this.g+=a.g,this.b+=a.b,this}addColors(a,g){return this.r=a.r+g.r,this.g=a.g+g.g,this.b=a.b+g.b,this}addScalar(a){return this.r+=a,this.g+=a,this.b+=a,this}sub(a){return this.r=Math.max(0,this.r-a.r),this.g=Math.max(0,this.g-a.g),this.b=Math.max(0,this.b-a.b),this}multiply(a){return this.r*=a.r,this.g*=a.g,this.b*=a.b,this}multiplyScalar(a){return this.r*=a,this.g*=a,this.b*=a,this}lerp(a,g){return this.r+=(a.r-this.r)*g,this.g+=(a.g-this.g)*g,this.b+=(a.b-this.b)*g,this}lerpColors(a,g,w){return this.r=a.r+(g.r-a.r)*w,this.g=a.g+(g.g-a.g)*w,this.b=a.b+(g.b-a.b)*w,this}lerpHSL(a,g){this.getHSL(f1),a.getHSL(J4);const w=Of(f1.h,J4.h,g),x=Of(f1.s,J4.s,g),E=Of(f1.l,J4.l,g);return this.setHSL(w,x,E),this}setFromVector3(a){return this.r=a.x,this.g=a.y,this.b=a.z,this}applyMatrix3(a){const g=this.r,w=this.g,x=this.b,E=a.elements;return this.r=E[0]*g+E[3]*w+E[6]*x,this.g=E[1]*g+E[4]*w+E[7]*x,this.b=E[2]*g+E[5]*w+E[8]*x,this}equals(a){return a.r===this.r&&a.g===this.g&&a.b===this.b}fromArray(a,g=0){return this.r=a[g],this.g=a[g+1],this.b=a[g+2],this}toArray(a=[],g=0){return a[g]=this.r,a[g+1]=this.g,a[g+2]=this.b,a}fromBufferAttribute(a,g){return this.r=a.getX(g),this.g=a.getY(g),this.b=a.getZ(g),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bi=new pe;pe.NAMES=zV;let Ac2=0;class kr extends Rs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ac2++}),this.uuid=mo(),this.name="",this.type="Material",this.blending=ou,this.side=zo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wa,this.blendDst=Ba,this.blendEquation=Z1,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pe(0,0,0),this.blendAlpha=0,this.depthFunc=Ec,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=qH,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ll,this.stencilZFail=Ll,this.stencilZPass=Ll,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(a){this._alphaTest>0!=a>0&&this.version++,this._alphaTest=a}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(a){if(a!==void 0)for(const g in a){const w=a[g];if(w===void 0){console.warn(`THREE.Material: parameter '${g}' has value of undefined.`);continue}const x=this[g];if(x===void 0){console.warn(`THREE.Material: '${g}' is not a property of THREE.${this.type}.`);continue}x&&x.isColor?x.set(w):x&&x.isVector3&&w&&w.isVector3?x.copy(w):this[g]=w}}toJSON(a){const g=a===void 0||typeof a=="string";g&&(a={textures:{},images:{}});const w={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};w.uuid=this.uuid,w.type=this.type,this.name!==""&&(w.name=this.name),this.color&&this.color.isColor&&(w.color=this.color.getHex()),this.roughness!==void 0&&(w.roughness=this.roughness),this.metalness!==void 0&&(w.metalness=this.metalness),this.sheen!==void 0&&(w.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(w.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(w.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(w.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(w.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(w.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(w.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(w.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(w.shininess=this.shininess),this.clearcoat!==void 0&&(w.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(w.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(w.clearcoatMap=this.clearcoatMap.toJSON(a).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(w.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(a).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(w.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(a).uuid,w.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(w.dispersion=this.dispersion),this.iridescence!==void 0&&(w.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(w.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(w.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(w.iridescenceMap=this.iridescenceMap.toJSON(a).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(w.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(a).uuid),this.anisotropy!==void 0&&(w.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(w.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(w.anisotropyMap=this.anisotropyMap.toJSON(a).uuid),this.map&&this.map.isTexture&&(w.map=this.map.toJSON(a).uuid),this.matcap&&this.matcap.isTexture&&(w.matcap=this.matcap.toJSON(a).uuid),this.alphaMap&&this.alphaMap.isTexture&&(w.alphaMap=this.alphaMap.toJSON(a).uuid),this.lightMap&&this.lightMap.isTexture&&(w.lightMap=this.lightMap.toJSON(a).uuid,w.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(w.aoMap=this.aoMap.toJSON(a).uuid,w.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(w.bumpMap=this.bumpMap.toJSON(a).uuid,w.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(w.normalMap=this.normalMap.toJSON(a).uuid,w.normalMapType=this.normalMapType,w.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(w.displacementMap=this.displacementMap.toJSON(a).uuid,w.displacementScale=this.displacementScale,w.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(w.roughnessMap=this.roughnessMap.toJSON(a).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(w.metalnessMap=this.metalnessMap.toJSON(a).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(w.emissiveMap=this.emissiveMap.toJSON(a).uuid),this.specularMap&&this.specularMap.isTexture&&(w.specularMap=this.specularMap.toJSON(a).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(w.specularIntensityMap=this.specularIntensityMap.toJSON(a).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(w.specularColorMap=this.specularColorMap.toJSON(a).uuid),this.envMap&&this.envMap.isTexture&&(w.envMap=this.envMap.toJSON(a).uuid,this.combine!==void 0&&(w.combine=this.combine)),this.envMapRotation!==void 0&&(w.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(w.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(w.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(w.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(w.gradientMap=this.gradientMap.toJSON(a).uuid),this.transmission!==void 0&&(w.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(w.transmissionMap=this.transmissionMap.toJSON(a).uuid),this.thickness!==void 0&&(w.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(w.thicknessMap=this.thicknessMap.toJSON(a).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(w.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(w.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(w.size=this.size),this.shadowSide!==null&&(w.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(w.sizeAttenuation=this.sizeAttenuation),this.blending!==ou&&(w.blending=this.blending),this.side!==zo&&(w.side=this.side),this.vertexColors===!0&&(w.vertexColors=!0),this.opacity<1&&(w.opacity=this.opacity),this.transparent===!0&&(w.transparent=!0),this.blendSrc!==wa&&(w.blendSrc=this.blendSrc),this.blendDst!==Ba&&(w.blendDst=this.blendDst),this.blendEquation!==Z1&&(w.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(w.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(w.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(w.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(w.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(w.blendAlpha=this.blendAlpha),this.depthFunc!==Ec&&(w.depthFunc=this.depthFunc),this.depthTest===!1&&(w.depthTest=this.depthTest),this.depthWrite===!1&&(w.depthWrite=this.depthWrite),this.colorWrite===!1&&(w.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(w.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==qH&&(w.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(w.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(w.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ll&&(w.stencilFail=this.stencilFail),this.stencilZFail!==Ll&&(w.stencilZFail=this.stencilZFail),this.stencilZPass!==Ll&&(w.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(w.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(w.rotation=this.rotation),this.polygonOffset===!0&&(w.polygonOffset=!0),this.polygonOffsetFactor!==0&&(w.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(w.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(w.linewidth=this.linewidth),this.dashSize!==void 0&&(w.dashSize=this.dashSize),this.gapSize!==void 0&&(w.gapSize=this.gapSize),this.scale!==void 0&&(w.scale=this.scale),this.dithering===!0&&(w.dithering=!0),this.alphaTest>0&&(w.alphaTest=this.alphaTest),this.alphaHash===!0&&(w.alphaHash=!0),this.alphaToCoverage===!0&&(w.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(w.premultipliedAlpha=!0),this.forceSinglePass===!0&&(w.forceSinglePass=!0),this.wireframe===!0&&(w.wireframe=!0),this.wireframeLinewidth>1&&(w.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(w.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(w.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(w.flatShading=!0),this.visible===!1&&(w.visible=!1),this.toneMapped===!1&&(w.toneMapped=!1),this.fog===!1&&(w.fog=!1),Object.keys(this.userData).length>0&&(w.userData=this.userData);function x(E){const L=[];for(const O in E){const G=E[O];delete G.metadata,L.push(G)}return L}if(g){const E=x(a.textures),L=x(a.images);E.length>0&&(w.textures=E),L.length>0&&(w.images=L)}return w}clone(){return new this.constructor().copy(this)}copy(a){this.name=a.name,this.blending=a.blending,this.side=a.side,this.vertexColors=a.vertexColors,this.opacity=a.opacity,this.transparent=a.transparent,this.blendSrc=a.blendSrc,this.blendDst=a.blendDst,this.blendEquation=a.blendEquation,this.blendSrcAlpha=a.blendSrcAlpha,this.blendDstAlpha=a.blendDstAlpha,this.blendEquationAlpha=a.blendEquationAlpha,this.blendColor.copy(a.blendColor),this.blendAlpha=a.blendAlpha,this.depthFunc=a.depthFunc,this.depthTest=a.depthTest,this.depthWrite=a.depthWrite,this.stencilWriteMask=a.stencilWriteMask,this.stencilFunc=a.stencilFunc,this.stencilRef=a.stencilRef,this.stencilFuncMask=a.stencilFuncMask,this.stencilFail=a.stencilFail,this.stencilZFail=a.stencilZFail,this.stencilZPass=a.stencilZPass,this.stencilWrite=a.stencilWrite;const g=a.clippingPlanes;let w=null;if(g!==null){const x=g.length;w=new Array(x);for(let E=0;E!==x;++E)w[E]=g[E].clone()}return this.clippingPlanes=w,this.clipIntersection=a.clipIntersection,this.clipShadows=a.clipShadows,this.shadowSide=a.shadowSide,this.colorWrite=a.colorWrite,this.precision=a.precision,this.polygonOffset=a.polygonOffset,this.polygonOffsetFactor=a.polygonOffsetFactor,this.polygonOffsetUnits=a.polygonOffsetUnits,this.dithering=a.dithering,this.alphaTest=a.alphaTest,this.alphaHash=a.alphaHash,this.alphaToCoverage=a.alphaToCoverage,this.premultipliedAlpha=a.premultipliedAlpha,this.forceSinglePass=a.forceSinglePass,this.visible=a.visible,this.toneMapped=a.toneMapped,this.userData=JSON.parse(JSON.stringify(a.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(a){a===!0&&this.version++}}class Ho extends kr{constructor(a){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.specularMap=a.specularMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.envMapRotation.copy(a.envMapRotation),this.combine=a.combine,this.reflectivity=a.reflectivity,this.refractionRatio=a.refractionRatio,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.fog=a.fog,this}}const O0=new S2,K4=new Lt;class _i{constructor(a,g,w=!1){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=a,this.itemSize=g,this.count=a!==void 0?a.length/g:0,this.normalized=w,this.usage=Ma,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Wo,this.version=0}onUploadCallback(){}set needsUpdate(a){a===!0&&this.version++}get updateRange(){return UV("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(a){return this.usage=a,this}addUpdateRange(a,g){this.updateRanges.push({start:a,count:g})}clearUpdateRanges(){this.updateRanges.length=0}copy(a){return this.name=a.name,this.array=new a.array.constructor(a.array),this.itemSize=a.itemSize,this.count=a.count,this.normalized=a.normalized,this.usage=a.usage,this.gpuType=a.gpuType,this}copyAt(a,g,w){a*=this.itemSize,w*=g.itemSize;for(let x=0,E=this.itemSize;x<E;x++)this.array[a+x]=g.array[w+x];return this}copyArray(a){return this.array.set(a),this}applyMatrix3(a){if(this.itemSize===2)for(let g=0,w=this.count;g<w;g++)K4.fromBufferAttribute(this,g),K4.applyMatrix3(a),this.setXY(g,K4.x,K4.y);else if(this.itemSize===3)for(let g=0,w=this.count;g<w;g++)O0.fromBufferAttribute(this,g),O0.applyMatrix3(a),this.setXYZ(g,O0.x,O0.y,O0.z);return this}applyMatrix4(a){for(let g=0,w=this.count;g<w;g++)O0.fromBufferAttribute(this,g),O0.applyMatrix4(a),this.setXYZ(g,O0.x,O0.y,O0.z);return this}applyNormalMatrix(a){for(let g=0,w=this.count;g<w;g++)O0.fromBufferAttribute(this,g),O0.applyNormalMatrix(a),this.setXYZ(g,O0.x,O0.y,O0.z);return this}transformDirection(a){for(let g=0,w=this.count;g<w;g++)O0.fromBufferAttribute(this,g),O0.transformDirection(a),this.setXYZ(g,O0.x,O0.y,O0.z);return this}set(a,g=0){return this.array.set(a,g),this}getComponent(a,g){let w=this.array[a*this.itemSize+g];return this.normalized&&(w=ao(w,this.array)),w}setComponent(a,g,w){return this.normalized&&(w=jn(w,this.array)),this.array[a*this.itemSize+g]=w,this}getX(a){let g=this.array[a*this.itemSize];return this.normalized&&(g=ao(g,this.array)),g}setX(a,g){return this.normalized&&(g=jn(g,this.array)),this.array[a*this.itemSize]=g,this}getY(a){let g=this.array[a*this.itemSize+1];return this.normalized&&(g=ao(g,this.array)),g}setY(a,g){return this.normalized&&(g=jn(g,this.array)),this.array[a*this.itemSize+1]=g,this}getZ(a){let g=this.array[a*this.itemSize+2];return this.normalized&&(g=ao(g,this.array)),g}setZ(a,g){return this.normalized&&(g=jn(g,this.array)),this.array[a*this.itemSize+2]=g,this}getW(a){let g=this.array[a*this.itemSize+3];return this.normalized&&(g=ao(g,this.array)),g}setW(a,g){return this.normalized&&(g=jn(g,this.array)),this.array[a*this.itemSize+3]=g,this}setXY(a,g,w){return a*=this.itemSize,this.normalized&&(g=jn(g,this.array),w=jn(w,this.array)),this.array[a+0]=g,this.array[a+1]=w,this}setXYZ(a,g,w,x){return a*=this.itemSize,this.normalized&&(g=jn(g,this.array),w=jn(w,this.array),x=jn(x,this.array)),this.array[a+0]=g,this.array[a+1]=w,this.array[a+2]=x,this}setXYZW(a,g,w,x,E){return a*=this.itemSize,this.normalized&&(g=jn(g,this.array),w=jn(w,this.array),x=jn(x,this.array),E=jn(E,this.array)),this.array[a+0]=g,this.array[a+1]=w,this.array[a+2]=x,this.array[a+3]=E,this}onUpload(a){return this.onUploadCallback=a,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const a={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(a.name=this.name),this.usage!==Ma&&(a.usage=this.usage),a}}class Qa extends _i{constructor(a,g,w){super(new Uint16Array(a),g,w)}}class VV extends _i{constructor(a,g,w){super(new Uint32Array(a),g,w)}}class t0 extends _i{constructor(a,g,w){super(new Float32Array(a),g,w)}}let gc2=0;const Wr=new _e,H6=new Nn,Vl=new S2,gr=new Qo,Tf=new Qo,ni=new S2;class J0 extends Rs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:gc2++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(a){return Array.isArray(a)?this.index=new(NV(a)?VV:Qa)(a,1):this.index=a,this}getAttribute(a){return this.attributes[a]}setAttribute(a,g){return this.attributes[a]=g,this}deleteAttribute(a){return delete this.attributes[a],this}hasAttribute(a){return this.attributes[a]!==void 0}addGroup(a,g,w=0){this.groups.push({start:a,count:g,materialIndex:w})}clearGroups(){this.groups=[]}setDrawRange(a,g){this.drawRange.start=a,this.drawRange.count=g}applyMatrix4(a){const g=this.attributes.position;g!==void 0&&(g.applyMatrix4(a),g.needsUpdate=!0);const w=this.attributes.normal;if(w!==void 0){const E=new Je().getNormalMatrix(a);w.applyNormalMatrix(E),w.needsUpdate=!0}const x=this.attributes.tangent;return x!==void 0&&(x.transformDirection(a),x.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(a){return Wr.makeRotationFromQuaternion(a),this.applyMatrix4(Wr),this}rotateX(a){return Wr.makeRotationX(a),this.applyMatrix4(Wr),this}rotateY(a){return Wr.makeRotationY(a),this.applyMatrix4(Wr),this}rotateZ(a){return Wr.makeRotationZ(a),this.applyMatrix4(Wr),this}translate(a,g,w){return Wr.makeTranslation(a,g,w),this.applyMatrix4(Wr),this}scale(a,g,w){return Wr.makeScale(a,g,w),this.applyMatrix4(Wr),this}lookAt(a){return H6.lookAt(a),H6.updateMatrix(),this.applyMatrix4(H6.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vl).negate(),this.translate(Vl.x,Vl.y,Vl.z),this}setFromPoints(a){const g=[];for(let w=0,x=a.length;w<x;w++){const E=a[w];g.push(E.x,E.y,E.z||0)}return this.setAttribute("position",new t0(g,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qo);const a=this.attributes.position,g=this.morphAttributes.position;if(a&&a.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S2(-1/0,-1/0,-1/0),new S2(1/0,1/0,1/0));return}if(a!==void 0){if(this.boundingBox.setFromBufferAttribute(a),g)for(let w=0,x=g.length;w<x;w++){const E=g[w];gr.setFromBufferAttribute(E),this.morphTargetsRelative?(ni.addVectors(this.boundingBox.min,gr.min),this.boundingBox.expandByPoint(ni),ni.addVectors(this.boundingBox.max,gr.max),this.boundingBox.expandByPoint(ni)):(this.boundingBox.expandByPoint(gr.min),this.boundingBox.expandByPoint(gr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Yo);const a=this.attributes.position,g=this.morphAttributes.position;if(a&&a.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S2,1/0);return}if(a){const w=this.boundingSphere.center;if(gr.setFromBufferAttribute(a),g)for(let E=0,L=g.length;E<L;E++){const O=g[E];Tf.setFromBufferAttribute(O),this.morphTargetsRelative?(ni.addVectors(gr.min,Tf.min),gr.expandByPoint(ni),ni.addVectors(gr.max,Tf.max),gr.expandByPoint(ni)):(gr.expandByPoint(Tf.min),gr.expandByPoint(Tf.max))}gr.getCenter(w);let x=0;for(let E=0,L=a.count;E<L;E++)ni.fromBufferAttribute(a,E),x=Math.max(x,w.distanceToSquared(ni));if(g)for(let E=0,L=g.length;E<L;E++){const O=g[E],G=this.morphTargetsRelative;for(let h=0,X=O.count;h<X;h++)ni.fromBufferAttribute(O,h),G&&(Vl.fromBufferAttribute(a,h),ni.add(Vl)),x=Math.max(x,w.distanceToSquared(ni))}this.boundingSphere.radius=Math.sqrt(x),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const a=this.index,g=this.attributes;if(a===null||g.position===void 0||g.normal===void 0||g.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const w=g.position,x=g.normal,E=g.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*w.count),4));const L=this.getAttribute("tangent"),O=[],G=[];for(let Q2=0;Q2<w.count;Q2++)O[Q2]=new S2,G[Q2]=new S2;const h=new S2,X=new S2,Z=new S2,K=new Lt,e2=new Lt,l2=new Lt,p2=new S2,r2=new S2;function o2(Q2,x2,g2){h.fromBufferAttribute(w,Q2),X.fromBufferAttribute(w,x2),Z.fromBufferAttribute(w,g2),K.fromBufferAttribute(E,Q2),e2.fromBufferAttribute(E,x2),l2.fromBufferAttribute(E,g2),X.sub(h),Z.sub(h),e2.sub(K),l2.sub(K);const Y2=1/(e2.x*l2.y-l2.x*e2.y);isFinite(Y2)&&(p2.copy(X).multiplyScalar(l2.y).addScaledVector(Z,-e2.y).multiplyScalar(Y2),r2.copy(Z).multiplyScalar(e2.x).addScaledVector(X,-l2.x).multiplyScalar(Y2),O[Q2].add(p2),O[x2].add(p2),O[g2].add(p2),G[Q2].add(r2),G[x2].add(r2),G[g2].add(r2))}let k2=this.groups;k2.length===0&&(k2=[{start:0,count:a.count}]);for(let Q2=0,x2=k2.length;Q2<x2;++Q2){const g2=k2[Q2],Y2=g2.start,st=g2.count;for(let U2=Y2,lt=Y2+st;U2<lt;U2+=3)o2(a.getX(U2+0),a.getX(U2+1),a.getX(U2+2))}const h2=new S2,v2=new S2,j2=new S2,R2=new S2;function D2(Q2){j2.fromBufferAttribute(x,Q2),R2.copy(j2);const x2=O[Q2];h2.copy(x2),h2.sub(j2.multiplyScalar(j2.dot(x2))).normalize(),v2.crossVectors(R2,x2);const Y2=v2.dot(G[Q2])<0?-1:1;L.setXYZW(Q2,h2.x,h2.y,h2.z,Y2)}for(let Q2=0,x2=k2.length;Q2<x2;++Q2){const g2=k2[Q2],Y2=g2.start,st=g2.count;for(let U2=Y2,lt=Y2+st;U2<lt;U2+=3)D2(a.getX(U2+0)),D2(a.getX(U2+1)),D2(a.getX(U2+2))}}computeVertexNormals(){const a=this.index,g=this.getAttribute("position");if(g!==void 0){let w=this.getAttribute("normal");if(w===void 0)w=new _i(new Float32Array(g.count*3),3),this.setAttribute("normal",w);else for(let K=0,e2=w.count;K<e2;K++)w.setXYZ(K,0,0,0);const x=new S2,E=new S2,L=new S2,O=new S2,G=new S2,h=new S2,X=new S2,Z=new S2;if(a)for(let K=0,e2=a.count;K<e2;K+=3){const l2=a.getX(K+0),p2=a.getX(K+1),r2=a.getX(K+2);x.fromBufferAttribute(g,l2),E.fromBufferAttribute(g,p2),L.fromBufferAttribute(g,r2),X.subVectors(L,E),Z.subVectors(x,E),X.cross(Z),O.fromBufferAttribute(w,l2),G.fromBufferAttribute(w,p2),h.fromBufferAttribute(w,r2),O.add(X),G.add(X),h.add(X),w.setXYZ(l2,O.x,O.y,O.z),w.setXYZ(p2,G.x,G.y,G.z),w.setXYZ(r2,h.x,h.y,h.z)}else for(let K=0,e2=g.count;K<e2;K+=3)x.fromBufferAttribute(g,K+0),E.fromBufferAttribute(g,K+1),L.fromBufferAttribute(g,K+2),X.subVectors(L,E),Z.subVectors(x,E),X.cross(Z),w.setXYZ(K+0,X.x,X.y,X.z),w.setXYZ(K+1,X.x,X.y,X.z),w.setXYZ(K+2,X.x,X.y,X.z);this.normalizeNormals(),w.needsUpdate=!0}}normalizeNormals(){const a=this.attributes.normal;for(let g=0,w=a.count;g<w;g++)ni.fromBufferAttribute(a,g),ni.normalize(),a.setXYZ(g,ni.x,ni.y,ni.z)}toNonIndexed(){function a(O,G){const h=O.array,X=O.itemSize,Z=O.normalized,K=new h.constructor(G.length*X);let e2=0,l2=0;for(let p2=0,r2=G.length;p2<r2;p2++){O.isInterleavedBufferAttribute?e2=G[p2]*O.data.stride+O.offset:e2=G[p2]*X;for(let o2=0;o2<X;o2++)K[l2++]=h[e2++]}return new _i(K,X,Z)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const g=new J0,w=this.index.array,x=this.attributes;for(const O in x){const G=x[O],h=a(G,w);g.setAttribute(O,h)}const E=this.morphAttributes;for(const O in E){const G=[],h=E[O];for(let X=0,Z=h.length;X<Z;X++){const K=h[X],e2=a(K,w);G.push(e2)}g.morphAttributes[O]=G}g.morphTargetsRelative=this.morphTargetsRelative;const L=this.groups;for(let O=0,G=L.length;O<G;O++){const h=L[O];g.addGroup(h.start,h.count,h.materialIndex)}return g}toJSON(){const a={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),Object.keys(this.userData).length>0&&(a.userData=this.userData),this.parameters!==void 0){const G=this.parameters;for(const h in G)G[h]!==void 0&&(a[h]=G[h]);return a}a.data={attributes:{}};const g=this.index;g!==null&&(a.data.index={type:g.array.constructor.name,array:Array.prototype.slice.call(g.array)});const w=this.attributes;for(const G in w){const h=w[G];a.data.attributes[G]=h.toJSON(a.data)}const x={};let E=!1;for(const G in this.morphAttributes){const h=this.morphAttributes[G],X=[];for(let Z=0,K=h.length;Z<K;Z++){const e2=h[Z];X.push(e2.toJSON(a.data))}X.length>0&&(x[G]=X,E=!0)}E&&(a.data.morphAttributes=x,a.data.morphTargetsRelative=this.morphTargetsRelative);const L=this.groups;L.length>0&&(a.data.groups=JSON.parse(JSON.stringify(L)));const O=this.boundingSphere;return O!==null&&(a.data.boundingSphere={center:O.center.toArray(),radius:O.radius}),a}clone(){return new this.constructor().copy(this)}copy(a){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const g={};this.name=a.name;const w=a.index;w!==null&&this.setIndex(w.clone(g));const x=a.attributes;for(const h in x){const X=x[h];this.setAttribute(h,X.clone(g))}const E=a.morphAttributes;for(const h in E){const X=[],Z=E[h];for(let K=0,e2=Z.length;K<e2;K++)X.push(Z[K].clone(g));this.morphAttributes[h]=X}this.morphTargetsRelative=a.morphTargetsRelative;const L=a.groups;for(let h=0,X=L.length;h<X;h++){const Z=L[h];this.addGroup(Z.start,Z.count,Z.materialIndex)}const O=a.boundingBox;O!==null&&(this.boundingBox=O.clone());const G=a.boundingSphere;return G!==null&&(this.boundingSphere=G.clone()),this.drawRange.start=a.drawRange.start,this.drawRange.count=a.drawRange.count,this.userData=a.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const cz=new _e,G1=new Jf,$4=new Yo,_z=new S2,Ql=new S2,Yl=new S2,Xl=new S2,z6=new S2,tc=new S2,ec=new Lt,nc=new Lt,ic=new Lt,az=new S2,hz=new S2,mz=new S2,rc=new S2,oc=new S2;class q0 extends Nn{constructor(a=new J0,g=new Ho){super(),this.isMesh=!0,this.type="Mesh",this.geometry=a,this.material=g,this.updateMorphTargets()}copy(a,g){return super.copy(a,g),a.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=a.morphTargetInfluences.slice()),a.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},a.morphTargetDictionary)),this.material=Array.isArray(a.material)?a.material.slice():a.material,this.geometry=a.geometry,this}updateMorphTargets(){const g=this.geometry.morphAttributes,w=Object.keys(g);if(w.length>0){const x=g[w[0]];if(x!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let E=0,L=x.length;E<L;E++){const O=x[E].name||String(E);this.morphTargetInfluences.push(0),this.morphTargetDictionary[O]=E}}}}getVertexPosition(a,g){const w=this.geometry,x=w.attributes.position,E=w.morphAttributes.position,L=w.morphTargetsRelative;g.fromBufferAttribute(x,a);const O=this.morphTargetInfluences;if(E&&O){tc.set(0,0,0);for(let G=0,h=E.length;G<h;G++){const X=O[G],Z=E[G];X!==0&&(z6.fromBufferAttribute(Z,a),L?tc.addScaledVector(z6,X):tc.addScaledVector(z6.sub(g),X))}g.add(tc)}return g}raycast(a,g){const w=this.geometry,x=this.material,E=this.matrixWorld;x!==void 0&&(w.boundingSphere===null&&w.computeBoundingSphere(),$4.copy(w.boundingSphere),$4.applyMatrix4(E),G1.copy(a.ray).recast(a.near),!($4.containsPoint(G1.origin)===!1&&(G1.intersectSphere($4,_z)===null||G1.origin.distanceToSquared(_z)>(a.far-a.near)**2))&&(cz.copy(E).invert(),G1.copy(a.ray).applyMatrix4(cz),!(w.boundingBox!==null&&G1.intersectsBox(w.boundingBox)===!1)&&this._computeIntersections(a,g,G1)))}_computeIntersections(a,g,w){let x;const E=this.geometry,L=this.material,O=E.index,G=E.attributes.position,h=E.attributes.uv,X=E.attributes.uv1,Z=E.attributes.normal,K=E.groups,e2=E.drawRange;if(O!==null)if(Array.isArray(L))for(let l2=0,p2=K.length;l2<p2;l2++){const r2=K[l2],o2=L[r2.materialIndex],k2=Math.max(r2.start,e2.start),h2=Math.min(O.count,Math.min(r2.start+r2.count,e2.start+e2.count));for(let v2=k2,j2=h2;v2<j2;v2+=3){const R2=O.getX(v2),D2=O.getX(v2+1),Q2=O.getX(v2+2);x=sc(this,o2,a,w,h,X,Z,R2,D2,Q2),x&&(x.faceIndex=Math.floor(v2/3),x.face.materialIndex=r2.materialIndex,g.push(x))}}else{const l2=Math.max(0,e2.start),p2=Math.min(O.count,e2.start+e2.count);for(let r2=l2,o2=p2;r2<o2;r2+=3){const k2=O.getX(r2),h2=O.getX(r2+1),v2=O.getX(r2+2);x=sc(this,L,a,w,h,X,Z,k2,h2,v2),x&&(x.faceIndex=Math.floor(r2/3),g.push(x))}}else if(G!==void 0)if(Array.isArray(L))for(let l2=0,p2=K.length;l2<p2;l2++){const r2=K[l2],o2=L[r2.materialIndex],k2=Math.max(r2.start,e2.start),h2=Math.min(G.count,Math.min(r2.start+r2.count,e2.start+e2.count));for(let v2=k2,j2=h2;v2<j2;v2+=3){const R2=v2,D2=v2+1,Q2=v2+2;x=sc(this,o2,a,w,h,X,Z,R2,D2,Q2),x&&(x.faceIndex=Math.floor(v2/3),x.face.materialIndex=r2.materialIndex,g.push(x))}}else{const l2=Math.max(0,e2.start),p2=Math.min(G.count,e2.start+e2.count);for(let r2=l2,o2=p2;r2<o2;r2+=3){const k2=r2,h2=r2+1,v2=r2+2;x=sc(this,L,a,w,h,X,Z,k2,h2,v2),x&&(x.faceIndex=Math.floor(r2/3),g.push(x))}}}}function yc2(D,a,g,w,x,E,L,O){let G;if(a.side===er?G=w.intersectTriangle(L,E,x,!0,O):G=w.intersectTriangle(x,E,L,a.side===zo,O),G===null)return null;oc.copy(O),oc.applyMatrix4(D.matrixWorld);const h=g.ray.origin.distanceTo(oc);return h<g.near||h>g.far?null:{distance:h,point:oc.clone(),object:D}}function sc(D,a,g,w,x,E,L,O,G,h){D.getVertexPosition(O,Ql),D.getVertexPosition(G,Yl),D.getVertexPosition(h,Xl);const X=yc2(D,a,g,w,Ql,Yl,Xl,rc);if(X){x&&(ec.fromBufferAttribute(x,O),nc.fromBufferAttribute(x,G),ic.fromBufferAttribute(x,h),X.uv=Uo.getInterpolation(rc,Ql,Yl,Xl,ec,nc,ic,new Lt)),E&&(ec.fromBufferAttribute(E,O),nc.fromBufferAttribute(E,G),ic.fromBufferAttribute(E,h),X.uv1=Uo.getInterpolation(rc,Ql,Yl,Xl,ec,nc,ic,new Lt)),L&&(az.fromBufferAttribute(L,O),hz.fromBufferAttribute(L,G),mz.fromBufferAttribute(L,h),X.normal=Uo.getInterpolation(rc,Ql,Yl,Xl,az,hz,mz,new S2),X.normal.dot(w.direction)>0&&X.normal.multiplyScalar(-1));const Z={a:O,b:G,c:h,normal:new S2,materialIndex:0};Uo.getNormal(Ql,Yl,Xl,Z.normal),X.face=Z}return X}class gu extends J0{constructor(a=1,g=1,w=1,x=1,E=1,L=1){super(),this.type="BoxGeometry",this.parameters={width:a,height:g,depth:w,widthSegments:x,heightSegments:E,depthSegments:L};const O=this;x=Math.floor(x),E=Math.floor(E),L=Math.floor(L);const G=[],h=[],X=[],Z=[];let K=0,e2=0;l2("z","y","x",-1,-1,w,g,a,L,E,0),l2("z","y","x",1,-1,w,g,-a,L,E,1),l2("x","z","y",1,1,a,w,g,x,L,2),l2("x","z","y",1,-1,a,w,-g,x,L,3),l2("x","y","z",1,-1,a,g,w,x,E,4),l2("x","y","z",-1,-1,a,g,-w,x,E,5),this.setIndex(G),this.setAttribute("position",new t0(h,3)),this.setAttribute("normal",new t0(X,3)),this.setAttribute("uv",new t0(Z,2));function l2(p2,r2,o2,k2,h2,v2,j2,R2,D2,Q2,x2){const g2=v2/D2,Y2=j2/Q2,st=v2/2,U2=j2/2,lt=R2/2,ht=D2+1,mt=Q2+1;let Dt=0,et=0;const gt=new S2;for(let xt=0;xt<mt;xt++){const ie=xt*Y2-U2;for(let Se=0;Se<ht;Se++){const Re=Se*g2-st;gt[p2]=Re*k2,gt[r2]=ie*h2,gt[o2]=lt,h.push(gt.x,gt.y,gt.z),gt[p2]=0,gt[r2]=0,gt[o2]=R2>0?1:-1,X.push(gt.x,gt.y,gt.z),Z.push(Se/D2),Z.push(1-xt/Q2),Dt+=1}}for(let xt=0;xt<Q2;xt++)for(let ie=0;ie<D2;ie++){const Se=K+ie+ht*xt,Re=K+ie+ht*(xt+1),nt=K+(ie+1)+ht*(xt+1),yt=K+(ie+1)+ht*xt;G.push(Se,Re,yt),G.push(Re,nt,yt),et+=6}O.addGroup(e2,et,x2),e2+=et,K+=Dt}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new gu(a.width,a.height,a.depth,a.widthSegments,a.heightSegments,a.depthSegments)}}function du(D){const a={};for(const g in D){a[g]={};for(const w in D[g]){const x=D[g][w];x&&(x.isColor||x.isMatrix3||x.isMatrix4||x.isVector2||x.isVector3||x.isVector4||x.isTexture||x.isQuaternion)?x.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),a[g][w]=null):a[g][w]=x.clone():Array.isArray(x)?a[g][w]=x.slice():a[g][w]=x}}return a}function Fi(D){const a={};for(let g=0;g<D.length;g++){const w=du(D[g]);for(const x in w)a[x]=w[x]}return a}function kc2(D){const a=[];for(let g=0;g<D.length;g++)a.push(D[g].clone());return a}function QV(D){const a=D.getRenderTarget();return a===null?D.outputColorSpace:a.isXRRenderTarget===!0?a.texture.colorSpace:Pn.workingColorSpace}const vc2={clone:du,merge:Fi};var wc2=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bc2=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class v1 extends kr{constructor(a){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wc2,this.fragmentShader=Bc2,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,a!==void 0&&this.setValues(a)}copy(a){return super.copy(a),this.fragmentShader=a.fragmentShader,this.vertexShader=a.vertexShader,this.uniforms=du(a.uniforms),this.uniformsGroups=kc2(a.uniformsGroups),this.defines=Object.assign({},a.defines),this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.fog=a.fog,this.lights=a.lights,this.clipping=a.clipping,this.extensions=Object.assign({},a.extensions),this.glslVersion=a.glslVersion,this}toJSON(a){const g=super.toJSON(a);g.glslVersion=this.glslVersion,g.uniforms={};for(const x in this.uniforms){const L=this.uniforms[x].value;L&&L.isTexture?g.uniforms[x]={type:"t",value:L.toJSON(a).uuid}:L&&L.isColor?g.uniforms[x]={type:"c",value:L.getHex()}:L&&L.isVector2?g.uniforms[x]={type:"v2",value:L.toArray()}:L&&L.isVector3?g.uniforms[x]={type:"v3",value:L.toArray()}:L&&L.isVector4?g.uniforms[x]={type:"v4",value:L.toArray()}:L&&L.isMatrix3?g.uniforms[x]={type:"m3",value:L.toArray()}:L&&L.isMatrix4?g.uniforms[x]={type:"m4",value:L.toArray()}:g.uniforms[x]={value:L}}Object.keys(this.defines).length>0&&(g.defines=this.defines),g.vertexShader=this.vertexShader,g.fragmentShader=this.fragmentShader,g.lights=this.lights,g.clipping=this.clipping;const w={};for(const x in this.extensions)this.extensions[x]===!0&&(w[x]=!0);return Object.keys(w).length>0&&(g.extensions=w),g}}let Ya=class extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Ms}copy(a,g){return super.copy(a,g),this.matrixWorldInverse.copy(a.matrixWorldInverse),this.projectionMatrix.copy(a.projectionMatrix),this.projectionMatrixInverse.copy(a.projectionMatrixInverse),this.coordinateSystem=a.coordinateSystem,this}getWorldDirection(a){return super.getWorldDirection(a).negate()}updateMatrixWorld(a){super.updateMatrixWorld(a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(a,g){super.updateWorldMatrix(a,g),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}};const p1=new S2,dz=new Lt,Az=new Lt;class Si extends Ya{constructor(a=50,g=1,w=.1,x=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=a,this.zoom=1,this.near=w,this.far=x,this.focus=10,this.aspect=g,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(a,g){return super.copy(a,g),this.fov=a.fov,this.zoom=a.zoom,this.near=a.near,this.far=a.far,this.focus=a.focus,this.aspect=a.aspect,this.view=a.view===null?null:Object.assign({},a.view),this.filmGauge=a.filmGauge,this.filmOffset=a.filmOffset,this}setFocalLength(a){const g=.5*this.getFilmHeight()/a;this.fov=mu*2*Math.atan(g),this.updateProjectionMatrix()}getFocalLength(){const a=Math.tan(Ff*.5*this.fov);return .5*this.getFilmHeight()/a}getEffectiveFOV(){return mu*2*Math.atan(Math.tan(Ff*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(a,g,w){p1.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(p1.x,p1.y).multiplyScalar(-a/p1.z),p1.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),w.set(p1.x,p1.y).multiplyScalar(-a/p1.z)}getViewSize(a,g){return this.getViewBounds(a,dz,Az),g.subVectors(Az,dz)}setViewOffset(a,g,w,x,E,L){this.aspect=a/g,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=a,this.view.fullHeight=g,this.view.offsetX=w,this.view.offsetY=x,this.view.width=E,this.view.height=L,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const a=this.near;let g=a*Math.tan(Ff*.5*this.fov)/this.zoom,w=2*g,x=this.aspect*w,E=-.5*x;const L=this.view;if(this.view!==null&&this.view.enabled){const G=L.fullWidth,h=L.fullHeight;E+=L.offsetX*x/G,g-=L.offsetY*w/h,x*=L.width/G,w*=L.height/h}const O=this.filmOffset;O!==0&&(E+=a*O/this.getFilmWidth()),this.projectionMatrix.makePerspective(E,E+x,g,g-w,a,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(a){const g=super.toJSON(a);return g.object.fov=this.fov,g.object.zoom=this.zoom,g.object.near=this.near,g.object.far=this.far,g.object.focus=this.focus,g.object.aspect=this.aspect,this.view!==null&&(g.object.view=Object.assign({},this.view)),g.object.filmGauge=this.filmGauge,g.object.filmOffset=this.filmOffset,g}}const Zl=-90,ql=1;class Sc2 extends Nn{constructor(a,g,w){super(),this.type="CubeCamera",this.renderTarget=w,this.coordinateSystem=null,this.activeMipmapLevel=0;const x=new Si(Zl,ql,a,g);x.layers=this.layers,this.add(x);const E=new Si(Zl,ql,a,g);E.layers=this.layers,this.add(E);const L=new Si(Zl,ql,a,g);L.layers=this.layers,this.add(L);const O=new Si(Zl,ql,a,g);O.layers=this.layers,this.add(O);const G=new Si(Zl,ql,a,g);G.layers=this.layers,this.add(G);const h=new Si(Zl,ql,a,g);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const a=this.coordinateSystem,g=this.children.concat(),[w,x,E,L,O,G]=g;for(const h of g)this.remove(h);if(a===Ms)w.up.set(0,1,0),w.lookAt(1,0,0),x.up.set(0,1,0),x.lookAt(-1,0,0),E.up.set(0,0,-1),E.lookAt(0,1,0),L.up.set(0,0,1),L.lookAt(0,-1,0),O.up.set(0,1,0),O.lookAt(0,0,1),G.up.set(0,1,0),G.lookAt(0,0,-1);else if(a===Fc)w.up.set(0,-1,0),w.lookAt(-1,0,0),x.up.set(0,-1,0),x.lookAt(1,0,0),E.up.set(0,0,1),E.lookAt(0,1,0),L.up.set(0,0,-1),L.lookAt(0,-1,0),O.up.set(0,-1,0),O.lookAt(0,0,1),G.up.set(0,-1,0),G.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+a);for(const h of g)this.add(h),h.updateMatrixWorld()}update(a,g){this.parent===null&&this.updateMatrixWorld();const{renderTarget:w,activeMipmapLevel:x}=this;this.coordinateSystem!==a.coordinateSystem&&(this.coordinateSystem=a.coordinateSystem,this.updateCoordinateSystem());const[E,L,O,G,h,X]=this.children,Z=a.getRenderTarget(),K=a.getActiveCubeFace(),e2=a.getActiveMipmapLevel(),l2=a.xr.enabled;a.xr.enabled=!1;const p2=w.texture.generateMipmaps;w.texture.generateMipmaps=!1,a.setRenderTarget(w,0,x),a.render(g,E),a.setRenderTarget(w,1,x),a.render(g,L),a.setRenderTarget(w,2,x),a.render(g,O),a.setRenderTarget(w,3,x),a.render(g,G),a.setRenderTarget(w,4,x),a.render(g,h),w.texture.generateMipmaps=p2,a.setRenderTarget(w,5,x),a.render(g,X),a.setRenderTarget(Z,K,e2),a.xr.enabled=l2,w.texture.needsPMREMUpdate=!0}}class YV extends E0{constructor(a,g,w,x,E,L,O,G,h,X){a=a!==void 0?a:[],g=g!==void 0?g:cu,super(a,g,w,x,E,L,O,G,h,X),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(a){this.image=a}}class xc2 extends J1{constructor(a=1,g={}){super(a,a,g),this.isWebGLCubeRenderTarget=!0;const w={width:a,height:a,depth:1},x=[w,w,w,w,w,w];this.texture=new YV(x,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=g.generateMipmaps!==void 0?g.generateMipmaps:!1,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:yr}fromEquirectangularTexture(a,g){this.texture.type=g.type,this.texture.colorSpace=g.colorSpace,this.texture.generateMipmaps=g.generateMipmaps,this.texture.minFilter=g.minFilter,this.texture.magFilter=g.magFilter;const w={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},x=new gu(5,5,5),E=new v1({name:"CubemapFromEquirect",uniforms:du(w.uniforms),vertexShader:w.vertexShader,fragmentShader:w.fragmentShader,side:er,blending:A1});E.uniforms.tEquirect.value=g;const L=new q0(x,E),O=g.minFilter;return g.minFilter===Cs&&(g.minFilter=yr),new Sc2(1,10,this).update(a,L),g.minFilter=O,L.geometry.dispose(),L.material.dispose(),this}clear(a,g,w,x){const E=a.getRenderTarget();for(let L=0;L<6;L++)a.setRenderTarget(this,L),a.clear(g,w,x);a.setRenderTarget(E)}}const V6=new S2,Cc2=new S2,Mc2=new Je;class a1{constructor(a=new S2(1,0,0),g=0){this.isPlane=!0,this.normal=a,this.constant=g}set(a,g){return this.normal.copy(a),this.constant=g,this}setComponents(a,g,w,x){return this.normal.set(a,g,w),this.constant=x,this}setFromNormalAndCoplanarPoint(a,g){return this.normal.copy(a),this.constant=-g.dot(this.normal),this}setFromCoplanarPoints(a,g,w){const x=V6.subVectors(w,g).cross(Cc2.subVectors(a,g)).normalize();return this.setFromNormalAndCoplanarPoint(x,a),this}copy(a){return this.normal.copy(a.normal),this.constant=a.constant,this}normalize(){const a=1/this.normal.length();return this.normal.multiplyScalar(a),this.constant*=a,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(a){return this.normal.dot(a)+this.constant}distanceToSphere(a){return this.distanceToPoint(a.center)-a.radius}projectPoint(a,g){return g.copy(a).addScaledVector(this.normal,-this.distanceToPoint(a))}intersectLine(a,g){const w=a.delta(V6),x=this.normal.dot(w);if(x===0)return this.distanceToPoint(a.start)===0?g.copy(a.start):null;const E=-(a.start.dot(this.normal)+this.constant)/x;return E<0||E>1?null:g.copy(a.start).addScaledVector(w,E)}intersectsLine(a){const g=this.distanceToPoint(a.start),w=this.distanceToPoint(a.end);return g<0&&w>0||w<0&&g>0}intersectsBox(a){return a.intersectsPlane(this)}intersectsSphere(a){return a.intersectsPlane(this)}coplanarPoint(a){return a.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(a,g){const w=g||Mc2.getNormalMatrix(a),x=this.coplanarPoint(V6).applyMatrix4(a),E=this.normal.applyMatrix3(w).normalize();return this.constant=-x.dot(E),this}translate(a){return this.constant-=a.dot(this.normal),this}equals(a){return a.normal.equals(this.normal)&&a.constant===this.constant}clone(){return new this.constructor().copy(this)}}const W1=new Yo,lc=new S2;class Xa{constructor(a=new a1,g=new a1,w=new a1,x=new a1,E=new a1,L=new a1){this.planes=[a,g,w,x,E,L]}set(a,g,w,x,E,L){const O=this.planes;return O[0].copy(a),O[1].copy(g),O[2].copy(w),O[3].copy(x),O[4].copy(E),O[5].copy(L),this}copy(a){const g=this.planes;for(let w=0;w<6;w++)g[w].copy(a.planes[w]);return this}setFromProjectionMatrix(a,g=Ms){const w=this.planes,x=a.elements,E=x[0],L=x[1],O=x[2],G=x[3],h=x[4],X=x[5],Z=x[6],K=x[7],e2=x[8],l2=x[9],p2=x[10],r2=x[11],o2=x[12],k2=x[13],h2=x[14],v2=x[15];if(w[0].setComponents(G-E,K-h,r2-e2,v2-o2).normalize(),w[1].setComponents(G+E,K+h,r2+e2,v2+o2).normalize(),w[2].setComponents(G+L,K+X,r2+l2,v2+k2).normalize(),w[3].setComponents(G-L,K-X,r2-l2,v2-k2).normalize(),w[4].setComponents(G-O,K-Z,r2-p2,v2-h2).normalize(),g===Ms)w[5].setComponents(G+O,K+Z,r2+p2,v2+h2).normalize();else if(g===Fc)w[5].setComponents(O,Z,p2,h2).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+g);return this}intersectsObject(a){if(a.boundingSphere!==void 0)a.boundingSphere===null&&a.computeBoundingSphere(),W1.copy(a.boundingSphere).applyMatrix4(a.matrixWorld);else{const g=a.geometry;g.boundingSphere===null&&g.computeBoundingSphere(),W1.copy(g.boundingSphere).applyMatrix4(a.matrixWorld)}return this.intersectsSphere(W1)}intersectsSprite(a){return W1.center.set(0,0,0),W1.radius=.7071067811865476,W1.applyMatrix4(a.matrixWorld),this.intersectsSphere(W1)}intersectsSphere(a){const g=this.planes,w=a.center,x=-a.radius;for(let E=0;E<6;E++)if(g[E].distanceToPoint(w)<x)return!1;return!0}intersectsBox(a){const g=this.planes;for(let w=0;w<6;w++){const x=g[w];if(lc.x=x.normal.x>0?a.max.x:a.min.x,lc.y=x.normal.y>0?a.max.y:a.min.y,lc.z=x.normal.z>0?a.max.z:a.min.z,x.distanceToPoint(lc)<0)return!1}return!0}containsPoint(a){const g=this.planes;for(let w=0;w<6;w++)if(g[w].distanceToPoint(a)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function XV(){let D=null,a=!1,g=null,w=null;function x(E,L){g(E,L),w=D.requestAnimationFrame(x)}return{start:function(){a!==!0&&g!==null&&(w=D.requestAnimationFrame(x),a=!0)},stop:function(){D.cancelAnimationFrame(w),a=!1},setAnimationLoop:function(E){g=E},setContext:function(E){D=E}}}function Tc2(D){const a=new WeakMap;function g(O,G){const h=O.array,X=O.usage,Z=h.byteLength,K=D.createBuffer();D.bindBuffer(G,K),D.bufferData(G,h,X),O.onUploadCallback();let e2;if(h instanceof Float32Array)e2=D.FLOAT;else if(h instanceof Uint16Array)O.isFloat16BufferAttribute?e2=D.HALF_FLOAT:e2=D.UNSIGNED_SHORT;else if(h instanceof Int16Array)e2=D.SHORT;else if(h instanceof Uint32Array)e2=D.UNSIGNED_INT;else if(h instanceof Int32Array)e2=D.INT;else if(h instanceof Int8Array)e2=D.BYTE;else if(h instanceof Uint8Array)e2=D.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)e2=D.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:K,type:e2,bytesPerElement:h.BYTES_PER_ELEMENT,version:O.version,size:Z}}function w(O,G,h){const X=G.array,Z=G._updateRange,K=G.updateRanges;if(D.bindBuffer(h,O),Z.count===-1&&K.length===0&&D.bufferSubData(h,0,X),K.length!==0){for(let e2=0,l2=K.length;e2<l2;e2++){const p2=K[e2];D.bufferSubData(h,p2.start*X.BYTES_PER_ELEMENT,X,p2.start,p2.count)}G.clearUpdateRanges()}Z.count!==-1&&(D.bufferSubData(h,Z.offset*X.BYTES_PER_ELEMENT,X,Z.offset,Z.count),Z.count=-1),G.onUploadCallback()}function x(O){return O.isInterleavedBufferAttribute&&(O=O.data),a.get(O)}function E(O){O.isInterleavedBufferAttribute&&(O=O.data);const G=a.get(O);G&&(D.deleteBuffer(G.buffer),a.delete(O))}function L(O,G){if(O.isGLBufferAttribute){const X=a.get(O);(!X||X.version<O.version)&&a.set(O,{buffer:O.buffer,type:O.type,bytesPerElement:O.elementSize,version:O.version});return}O.isInterleavedBufferAttribute&&(O=O.data);const h=a.get(O);if(h===void 0)a.set(O,g(O,G));else if(h.version<O.version){if(h.size!==O.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");w(h.buffer,O,G),h.version=O.version}}return{get:x,remove:E,update:L}}class qc extends J0{constructor(a=1,g=1,w=1,x=1){super(),this.type="PlaneGeometry",this.parameters={width:a,height:g,widthSegments:w,heightSegments:x};const E=a/2,L=g/2,O=Math.floor(w),G=Math.floor(x),h=O+1,X=G+1,Z=a/O,K=g/G,e2=[],l2=[],p2=[],r2=[];for(let o2=0;o2<X;o2++){const k2=o2*K-L;for(let h2=0;h2<h;h2++){const v2=h2*Z-E;l2.push(v2,-k2,0),p2.push(0,0,1),r2.push(h2/O),r2.push(1-o2/G)}}for(let o2=0;o2<G;o2++)for(let k2=0;k2<O;k2++){const h2=k2+h*o2,v2=k2+h*(o2+1),j2=k2+1+h*(o2+1),R2=k2+1+h*o2;e2.push(h2,v2,R2),e2.push(v2,j2,R2)}this.setIndex(e2),this.setAttribute("position",new t0(l2,3)),this.setAttribute("normal",new t0(p2,3)),this.setAttribute("uv",new t0(r2,2))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new qc(a.width,a.height,a.widthSegments,a.heightSegments)}}var Ec2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rc2=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bc2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Dc2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ic2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Pc2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Lc2=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fc2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Oc2=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jc2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Nc2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Uc2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gc2=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Wc2=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Hc2=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,zc2=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Vc2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qc2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yc2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xc2=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zc2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qc2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jc2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Kc2=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$c2=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,t_2=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,e_2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n_2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i_2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r_2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,o_2="gl_FragColor = linearToOutputTexel( gl_FragColor );",s_2=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,l_2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,u_2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,f_2=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,p_2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,c_2=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,__2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,a_2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,h_2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m_2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,d_2=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,A_2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,g_2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y_2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,k_2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,v_2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,w_2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,B_2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,S_2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,x_2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,C_2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,M_2=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,T_2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,E_2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,R_2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,b_2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D_2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I_2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P_2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L_2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F_2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O_2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,j_2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,N_2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,U_2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G_2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W_2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,H_2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,z_2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,V_2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Q_2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Y_2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,X_2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z_2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,J_2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,K_2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$_2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t82=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e82=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,n82=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,i82=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,r82=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o82=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,s82=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,l82=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,u82=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f82=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p82=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,c82=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_82=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,a82=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,h82=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m82=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,d82=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,A82=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,g82=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,y82=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,k82=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,v82=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,w82=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,B82=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,S82=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x82=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,C82=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,M82=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const T82=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,E82=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,R82=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b82=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D82=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I82=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,P82=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,L82=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,F82=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,O82=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,j82=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,N82=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,U82=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,G82=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,W82=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,H82=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z82=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,V82=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Q82=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Y82=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,X82=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Z82=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,q82=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,J82=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,K82=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$82=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,t62=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,e62=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n62=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i62=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r62=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o62=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,s62=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l62=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tn={alphahash_fragment:Ec2,alphahash_pars_fragment:Rc2,alphamap_fragment:bc2,alphamap_pars_fragment:Dc2,alphatest_fragment:Ic2,alphatest_pars_fragment:Pc2,aomap_fragment:Lc2,aomap_pars_fragment:Fc2,batching_pars_vertex:Oc2,batching_vertex:jc2,begin_vertex:Nc2,beginnormal_vertex:Uc2,bsdfs:Gc2,iridescence_fragment:Wc2,bumpmap_pars_fragment:Hc2,clipping_planes_fragment:zc2,clipping_planes_pars_fragment:Vc2,clipping_planes_pars_vertex:Qc2,clipping_planes_vertex:Yc2,color_fragment:Xc2,color_pars_fragment:Zc2,color_pars_vertex:qc2,color_vertex:Jc2,common:Kc2,cube_uv_reflection_fragment:$c2,defaultnormal_vertex:t_2,displacementmap_pars_vertex:e_2,displacementmap_vertex:n_2,emissivemap_fragment:i_2,emissivemap_pars_fragment:r_2,colorspace_fragment:o_2,colorspace_pars_fragment:s_2,envmap_fragment:l_2,envmap_common_pars_fragment:u_2,envmap_pars_fragment:f_2,envmap_pars_vertex:p_2,envmap_physical_pars_fragment:v_2,envmap_vertex:c_2,fog_vertex:__2,fog_pars_vertex:a_2,fog_fragment:h_2,fog_pars_fragment:m_2,gradientmap_pars_fragment:d_2,lightmap_pars_fragment:A_2,lights_lambert_fragment:g_2,lights_lambert_pars_fragment:y_2,lights_pars_begin:k_2,lights_toon_fragment:w_2,lights_toon_pars_fragment:B_2,lights_phong_fragment:S_2,lights_phong_pars_fragment:x_2,lights_physical_fragment:C_2,lights_physical_pars_fragment:M_2,lights_fragment_begin:T_2,lights_fragment_maps:E_2,lights_fragment_end:R_2,logdepthbuf_fragment:b_2,logdepthbuf_pars_fragment:D_2,logdepthbuf_pars_vertex:I_2,logdepthbuf_vertex:P_2,map_fragment:L_2,map_pars_fragment:F_2,map_particle_fragment:O_2,map_particle_pars_fragment:j_2,metalnessmap_fragment:N_2,metalnessmap_pars_fragment:U_2,morphinstance_vertex:G_2,morphcolor_vertex:W_2,morphnormal_vertex:H_2,morphtarget_pars_vertex:z_2,morphtarget_vertex:V_2,normal_fragment_begin:Q_2,normal_fragment_maps:Y_2,normal_pars_fragment:X_2,normal_pars_vertex:Z_2,normal_vertex:q_2,normalmap_pars_fragment:J_2,clearcoat_normal_fragment_begin:K_2,clearcoat_normal_fragment_maps:$_2,clearcoat_pars_fragment:t82,iridescence_pars_fragment:e82,opaque_fragment:n82,packing:i82,premultiplied_alpha_fragment:r82,project_vertex:o82,dithering_fragment:s82,dithering_pars_fragment:l82,roughnessmap_fragment:u82,roughnessmap_pars_fragment:f82,shadowmap_pars_fragment:p82,shadowmap_pars_vertex:c82,shadowmap_vertex:_82,shadowmask_pars_fragment:a82,skinbase_vertex:h82,skinning_pars_vertex:m82,skinning_vertex:d82,skinnormal_vertex:A82,specularmap_fragment:g82,specularmap_pars_fragment:y82,tonemapping_fragment:k82,tonemapping_pars_fragment:v82,transmission_fragment:w82,transmission_pars_fragment:B82,uv_pars_fragment:S82,uv_pars_vertex:x82,uv_vertex:C82,worldpos_vertex:M82,background_vert:T82,background_frag:E82,backgroundCube_vert:R82,backgroundCube_frag:b82,cube_vert:D82,cube_frag:I82,depth_vert:P82,depth_frag:L82,distanceRGBA_vert:F82,distanceRGBA_frag:O82,equirect_vert:j82,equirect_frag:N82,linedashed_vert:U82,linedashed_frag:G82,meshbasic_vert:W82,meshbasic_frag:H82,meshlambert_vert:z82,meshlambert_frag:V82,meshmatcap_vert:Q82,meshmatcap_frag:Y82,meshnormal_vert:X82,meshnormal_frag:Z82,meshphong_vert:q82,meshphong_frag:J82,meshphysical_vert:K82,meshphysical_frag:$82,meshtoon_vert:t62,meshtoon_frag:e62,points_vert:n62,points_frag:i62,shadow_vert:r62,shadow_frag:o62,sprite_vert:s62,sprite_frag:l62},qt={common:{diffuse:{value:new pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new pe(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},jo={basic:{uniforms:Fi([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.fog]),vertexShader:tn.meshbasic_vert,fragmentShader:tn.meshbasic_frag},lambert:{uniforms:Fi([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new pe(0)}}]),vertexShader:tn.meshlambert_vert,fragmentShader:tn.meshlambert_frag},phong:{uniforms:Fi([qt.common,qt.specularmap,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,qt.lights,{emissive:{value:new pe(0)},specular:{value:new pe(1118481)},shininess:{value:30}}]),vertexShader:tn.meshphong_vert,fragmentShader:tn.meshphong_frag},standard:{uniforms:Fi([qt.common,qt.envmap,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.roughnessmap,qt.metalnessmap,qt.fog,qt.lights,{emissive:{value:new pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tn.meshphysical_vert,fragmentShader:tn.meshphysical_frag},toon:{uniforms:Fi([qt.common,qt.aomap,qt.lightmap,qt.emissivemap,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.gradientmap,qt.fog,qt.lights,{emissive:{value:new pe(0)}}]),vertexShader:tn.meshtoon_vert,fragmentShader:tn.meshtoon_frag},matcap:{uniforms:Fi([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,qt.fog,{matcap:{value:null}}]),vertexShader:tn.meshmatcap_vert,fragmentShader:tn.meshmatcap_frag},points:{uniforms:Fi([qt.points,qt.fog]),vertexShader:tn.points_vert,fragmentShader:tn.points_frag},dashed:{uniforms:Fi([qt.common,qt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tn.linedashed_vert,fragmentShader:tn.linedashed_frag},depth:{uniforms:Fi([qt.common,qt.displacementmap]),vertexShader:tn.depth_vert,fragmentShader:tn.depth_frag},normal:{uniforms:Fi([qt.common,qt.bumpmap,qt.normalmap,qt.displacementmap,{opacity:{value:1}}]),vertexShader:tn.meshnormal_vert,fragmentShader:tn.meshnormal_frag},sprite:{uniforms:Fi([qt.sprite,qt.fog]),vertexShader:tn.sprite_vert,fragmentShader:tn.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tn.background_vert,fragmentShader:tn.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:tn.backgroundCube_vert,fragmentShader:tn.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tn.cube_vert,fragmentShader:tn.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tn.equirect_vert,fragmentShader:tn.equirect_frag},distanceRGBA:{uniforms:Fi([qt.common,qt.displacementmap,{referencePosition:{value:new S2},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tn.distanceRGBA_vert,fragmentShader:tn.distanceRGBA_frag},shadow:{uniforms:Fi([qt.lights,qt.fog,{color:{value:new pe(0)},opacity:{value:1}}]),vertexShader:tn.shadow_vert,fragmentShader:tn.shadow_frag}};jo.physical={uniforms:Fi([jo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new pe(0)},specularColor:{value:new pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:tn.meshphysical_vert,fragmentShader:tn.meshphysical_frag};const uc={r:0,b:0,g:0},H1=new xn,u62=new _e;function f62(D,a,g,w,x,E,L){const O=new pe(0);let G=E===!0?0:1,h,X,Z=null,K=0,e2=null;function l2(k2){let h2=k2.isScene===!0?k2.background:null;return h2&&h2.isTexture&&(h2=(k2.backgroundBlurriness>0?g:a).get(h2)),h2}function p2(k2){let h2=!1;const v2=l2(k2);v2===null?o2(O,G):v2&&v2.isColor&&(o2(v2,1),h2=!0);const j2=D.xr.getEnvironmentBlendMode();j2==="additive"?w.buffers.color.setClear(0,0,0,1,L):j2==="alpha-blend"&&w.buffers.color.setClear(0,0,0,0,L),(D.autoClear||h2)&&D.clear(D.autoClearColor,D.autoClearDepth,D.autoClearStencil)}function r2(k2,h2){const v2=l2(h2);v2&&(v2.isCubeTexture||v2.mapping===Qc)?(X===void 0&&(X=new q0(new gu(1,1,1),new v1({name:"BackgroundCubeMaterial",uniforms:du(jo.backgroundCube.uniforms),vertexShader:jo.backgroundCube.vertexShader,fragmentShader:jo.backgroundCube.fragmentShader,side:er,depthTest:!1,depthWrite:!1,fog:!1})),X.geometry.deleteAttribute("normal"),X.geometry.deleteAttribute("uv"),X.onBeforeRender=function(j2,R2,D2){this.matrixWorld.copyPosition(D2.matrixWorld)},Object.defineProperty(X.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),x.update(X)),H1.copy(h2.backgroundRotation),H1.x*=-1,H1.y*=-1,H1.z*=-1,v2.isCubeTexture&&v2.isRenderTargetTexture===!1&&(H1.y*=-1,H1.z*=-1),X.material.uniforms.envMap.value=v2,X.material.uniforms.flipEnvMap.value=v2.isCubeTexture&&v2.isRenderTargetTexture===!1?-1:1,X.material.uniforms.backgroundBlurriness.value=h2.backgroundBlurriness,X.material.uniforms.backgroundIntensity.value=h2.backgroundIntensity,X.material.uniforms.backgroundRotation.value.setFromMatrix4(u62.makeRotationFromEuler(H1)),X.material.toneMapped=Pn.getTransfer(v2.colorSpace)!==$n,(Z!==v2||K!==v2.version||e2!==D.toneMapping)&&(X.material.needsUpdate=!0,Z=v2,K=v2.version,e2=D.toneMapping),X.layers.enableAll(),k2.unshift(X,X.geometry,X.material,0,0,null)):v2&&v2.isTexture&&(h===void 0&&(h=new q0(new qc(2,2),new v1({name:"BackgroundMaterial",uniforms:du(jo.background.uniforms),vertexShader:jo.background.vertexShader,fragmentShader:jo.background.fragmentShader,side:zo,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),x.update(h)),h.material.uniforms.t2D.value=v2,h.material.uniforms.backgroundIntensity.value=h2.backgroundIntensity,h.material.toneMapped=Pn.getTransfer(v2.colorSpace)!==$n,v2.matrixAutoUpdate===!0&&v2.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v2.matrix),(Z!==v2||K!==v2.version||e2!==D.toneMapping)&&(h.material.needsUpdate=!0,Z=v2,K=v2.version,e2=D.toneMapping),h.layers.enableAll(),k2.unshift(h,h.geometry,h.material,0,0,null))}function o2(k2,h2){k2.getRGB(uc,QV(D)),w.buffers.color.setClear(uc.r,uc.g,uc.b,h2,L)}return{getClearColor:function(){return O},setClearColor:function(k2,h2=1){O.set(k2),G=h2,o2(O,G)},getClearAlpha:function(){return G},setClearAlpha:function(k2){G=k2,o2(O,G)},render:p2,addToRenderList:r2}}function p62(D,a){const g=D.getParameter(D.MAX_VERTEX_ATTRIBS),w={},x=K(null);let E=x,L=!1;function O(g2,Y2,st,U2,lt){let ht=!1;const mt=Z(U2,st,Y2);E!==mt&&(E=mt,h(E.object)),ht=e2(g2,U2,st,lt),ht&&l2(g2,U2,st,lt),lt!==null&&a.update(lt,D.ELEMENT_ARRAY_BUFFER),(ht||L)&&(L=!1,v2(g2,Y2,st,U2),lt!==null&&D.bindBuffer(D.ELEMENT_ARRAY_BUFFER,a.get(lt).buffer))}function G(){return D.createVertexArray()}function h(g2){return D.bindVertexArray(g2)}function X(g2){return D.deleteVertexArray(g2)}function Z(g2,Y2,st){const U2=st.wireframe===!0;let lt=w[g2.id];lt===void 0&&(lt={},w[g2.id]=lt);let ht=lt[Y2.id];ht===void 0&&(ht={},lt[Y2.id]=ht);let mt=ht[U2];return mt===void 0&&(mt=K(G()),ht[U2]=mt),mt}function K(g2){const Y2=[],st=[],U2=[];for(let lt=0;lt<g;lt++)Y2[lt]=0,st[lt]=0,U2[lt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y2,enabledAttributes:st,attributeDivisors:U2,object:g2,attributes:{},index:null}}function e2(g2,Y2,st,U2){const lt=E.attributes,ht=Y2.attributes;let mt=0;const Dt=st.getAttributes();for(const et in Dt)if(Dt[et].location>=0){const xt=lt[et];let ie=ht[et];if(ie===void 0&&(et==="instanceMatrix"&&g2.instanceMatrix&&(ie=g2.instanceMatrix),et==="instanceColor"&&g2.instanceColor&&(ie=g2.instanceColor)),xt===void 0||xt.attribute!==ie||ie&&xt.data!==ie.data)return!0;mt++}return E.attributesNum!==mt||E.index!==U2}function l2(g2,Y2,st,U2){const lt={},ht=Y2.attributes;let mt=0;const Dt=st.getAttributes();for(const et in Dt)if(Dt[et].location>=0){let xt=ht[et];xt===void 0&&(et==="instanceMatrix"&&g2.instanceMatrix&&(xt=g2.instanceMatrix),et==="instanceColor"&&g2.instanceColor&&(xt=g2.instanceColor));const ie={};ie.attribute=xt,xt&&xt.data&&(ie.data=xt.data),lt[et]=ie,mt++}E.attributes=lt,E.attributesNum=mt,E.index=U2}function p2(){const g2=E.newAttributes;for(let Y2=0,st=g2.length;Y2<st;Y2++)g2[Y2]=0}function r2(g2){o2(g2,0)}function o2(g2,Y2){const st=E.newAttributes,U2=E.enabledAttributes,lt=E.attributeDivisors;st[g2]=1,U2[g2]===0&&(D.enableVertexAttribArray(g2),U2[g2]=1),lt[g2]!==Y2&&(D.vertexAttribDivisor(g2,Y2),lt[g2]=Y2)}function k2(){const g2=E.newAttributes,Y2=E.enabledAttributes;for(let st=0,U2=Y2.length;st<U2;st++)Y2[st]!==g2[st]&&(D.disableVertexAttribArray(st),Y2[st]=0)}function h2(g2,Y2,st,U2,lt,ht,mt){mt===!0?D.vertexAttribIPointer(g2,Y2,st,lt,ht):D.vertexAttribPointer(g2,Y2,st,U2,lt,ht)}function v2(g2,Y2,st,U2){p2();const lt=U2.attributes,ht=st.getAttributes(),mt=Y2.defaultAttributeValues;for(const Dt in ht){const et=ht[Dt];if(et.location>=0){let gt=lt[Dt];if(gt===void 0&&(Dt==="instanceMatrix"&&g2.instanceMatrix&&(gt=g2.instanceMatrix),Dt==="instanceColor"&&g2.instanceColor&&(gt=g2.instanceColor)),gt!==void 0){const xt=gt.normalized,ie=gt.itemSize,Se=a.get(gt);if(Se===void 0)continue;const Re=Se.buffer,nt=Se.type,yt=Se.bytesPerElement,Yt=nt===D.INT||nt===D.UNSIGNED_INT||gt.gpuType===EV;if(gt.isInterleavedBufferAttribute){const G2=gt.data,Et=G2.stride,ee=gt.offset;if(G2.isInstancedInterleavedBuffer){for(let W2=0;W2<et.locationSize;W2++)o2(et.location+W2,G2.meshPerAttribute);g2.isInstancedMesh!==!0&&U2._maxInstanceCount===void 0&&(U2._maxInstanceCount=G2.meshPerAttribute*G2.count)}else for(let W2=0;W2<et.locationSize;W2++)r2(et.location+W2);D.bindBuffer(D.ARRAY_BUFFER,Re);for(let W2=0;W2<et.locationSize;W2++)h2(et.location+W2,ie/et.locationSize,nt,xt,Et*yt,(ee+ie/et.locationSize*W2)*yt,Yt)}else{if(gt.isInstancedBufferAttribute){for(let G2=0;G2<et.locationSize;G2++)o2(et.location+G2,gt.meshPerAttribute);g2.isInstancedMesh!==!0&&U2._maxInstanceCount===void 0&&(U2._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let G2=0;G2<et.locationSize;G2++)r2(et.location+G2);D.bindBuffer(D.ARRAY_BUFFER,Re);for(let G2=0;G2<et.locationSize;G2++)h2(et.location+G2,ie/et.locationSize,nt,xt,ie*yt,ie/et.locationSize*G2*yt,Yt)}}else if(mt!==void 0){const xt=mt[Dt];if(xt!==void 0)switch(xt.length){case 2:D.vertexAttrib2fv(et.location,xt);break;case 3:D.vertexAttrib3fv(et.location,xt);break;case 4:D.vertexAttrib4fv(et.location,xt);break;default:D.vertexAttrib1fv(et.location,xt)}}}}k2()}function j2(){Q2();for(const g2 in w){const Y2=w[g2];for(const st in Y2){const U2=Y2[st];for(const lt in U2)X(U2[lt].object),delete U2[lt];delete Y2[st]}delete w[g2]}}function R2(g2){if(w[g2.id]===void 0)return;const Y2=w[g2.id];for(const st in Y2){const U2=Y2[st];for(const lt in U2)X(U2[lt].object),delete U2[lt];delete Y2[st]}delete w[g2.id]}function D2(g2){for(const Y2 in w){const st=w[Y2];if(st[g2.id]===void 0)continue;const U2=st[g2.id];for(const lt in U2)X(U2[lt].object),delete U2[lt];delete st[g2.id]}}function Q2(){x2(),L=!0,E!==x&&(E=x,h(E.object))}function x2(){x.geometry=null,x.program=null,x.wireframe=!1}return{setup:O,reset:Q2,resetDefaultState:x2,dispose:j2,releaseStatesOfGeometry:R2,releaseStatesOfProgram:D2,initAttributes:p2,enableAttribute:r2,disableUnusedAttributes:k2}}function c62(D,a,g){let w;function x(h){w=h}function E(h,X){D.drawArrays(w,h,X),g.update(X,w,1)}function L(h,X,Z){Z!==0&&(D.drawArraysInstanced(w,h,X,Z),g.update(X,w,Z))}function O(h,X,Z){if(Z===0)return;const K=a.get("WEBGL_multi_draw");if(K===null)for(let e2=0;e2<Z;e2++)this.render(h[e2],X[e2]);else{K.multiDrawArraysWEBGL(w,h,0,X,0,Z);let e2=0;for(let l2=0;l2<Z;l2++)e2+=X[l2];g.update(e2,w,1)}}function G(h,X,Z,K){if(Z===0)return;const e2=a.get("WEBGL_multi_draw");if(e2===null)for(let l2=0;l2<h.length;l2++)L(h[l2],X[l2],K[l2]);else{e2.multiDrawArraysInstancedWEBGL(w,h,0,X,0,K,0,Z);let l2=0;for(let p2=0;p2<Z;p2++)l2+=X[p2];for(let p2=0;p2<K.length;p2++)g.update(l2,w,K[p2])}}this.setMode=x,this.render=E,this.renderInstances=L,this.renderMultiDraw=O,this.renderMultiDrawInstances=G}function _62(D,a,g,w){let x;function E(){if(x!==void 0)return x;if(a.has("EXT_texture_filter_anisotropic")===!0){const R2=a.get("EXT_texture_filter_anisotropic");x=D.getParameter(R2.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else x=0;return x}function L(R2){return!(R2!==ho&&w.convert(R2)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT))}function O(R2){const D2=R2===Yc&&(a.has("EXT_color_buffer_half_float")||a.has("EXT_color_buffer_float"));return!(R2!==k1&&w.convert(R2)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&R2!==Wo&&!D2)}function G(R2){if(R2==="highp"){if(D.getShaderPrecisionFormat(D.VERTEX_SHADER,D.HIGH_FLOAT).precision>0&&D.getShaderPrecisionFormat(D.FRAGMENT_SHADER,D.HIGH_FLOAT).precision>0)return"highp";R2="mediump"}return R2==="mediump"&&D.getShaderPrecisionFormat(D.VERTEX_SHADER,D.MEDIUM_FLOAT).precision>0&&D.getShaderPrecisionFormat(D.FRAGMENT_SHADER,D.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=g.precision!==void 0?g.precision:"highp";const X=G(h);X!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",X,"instead."),h=X);const Z=g.logarithmicDepthBuffer===!0,K=D.getParameter(D.MAX_TEXTURE_IMAGE_UNITS),e2=D.getParameter(D.MAX_VERTEX_TEXTURE_IMAGE_UNITS),l2=D.getParameter(D.MAX_TEXTURE_SIZE),p2=D.getParameter(D.MAX_CUBE_MAP_TEXTURE_SIZE),r2=D.getParameter(D.MAX_VERTEX_ATTRIBS),o2=D.getParameter(D.MAX_VERTEX_UNIFORM_VECTORS),k2=D.getParameter(D.MAX_VARYING_VECTORS),h2=D.getParameter(D.MAX_FRAGMENT_UNIFORM_VECTORS),v2=e2>0,j2=D.getParameter(D.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:E,getMaxPrecision:G,textureFormatReadable:L,textureTypeReadable:O,precision:h,logarithmicDepthBuffer:Z,maxTextures:K,maxVertexTextures:e2,maxTextureSize:l2,maxCubemapSize:p2,maxAttributes:r2,maxVertexUniforms:o2,maxVaryings:k2,maxFragmentUniforms:h2,vertexTextures:v2,maxSamples:j2}}function a62(D){const a=this;let g=null,w=0,x=!1,E=!1;const L=new a1,O=new Je,G={value:null,needsUpdate:!1};this.uniform=G,this.numPlanes=0,this.numIntersection=0,this.init=function(Z,K){const e2=Z.length!==0||K||w!==0||x;return x=K,w=Z.length,e2},this.beginShadows=function(){E=!0,X(null)},this.endShadows=function(){E=!1},this.setGlobalState=function(Z,K){g=X(Z,K,0)},this.setState=function(Z,K,e2){const l2=Z.clippingPlanes,p2=Z.clipIntersection,r2=Z.clipShadows,o2=D.get(Z);if(!x||l2===null||l2.length===0||E&&!r2)E?X(null):h();else{const k2=E?0:w,h2=k2*4;let v2=o2.clippingState||null;G.value=v2,v2=X(l2,K,h2,e2);for(let j2=0;j2!==h2;++j2)v2[j2]=g[j2];o2.clippingState=v2,this.numIntersection=p2?this.numPlanes:0,this.numPlanes+=k2}};function h(){G.value!==g&&(G.value=g,G.needsUpdate=w>0),a.numPlanes=w,a.numIntersection=0}function X(Z,K,e2,l2){const p2=Z!==null?Z.length:0;let r2=null;if(p2!==0){if(r2=G.value,l2!==!0||r2===null){const o2=e2+p2*4,k2=K.matrixWorldInverse;O.getNormalMatrix(k2),(r2===null||r2.length<o2)&&(r2=new Float32Array(o2));for(let h2=0,v2=e2;h2!==p2;++h2,v2+=4)L.copy(Z[h2]).applyMatrix4(k2,O),L.normal.toArray(r2,v2),r2[v2+3]=L.constant}G.value=r2,G.needsUpdate=!0}return a.numPlanes=p2,a.numIntersection=0,r2}}function h62(D){let a=new WeakMap;function g(L,O){return O===Rc?L.mapping=cu:O===Sa&&(L.mapping=_u),L}function w(L){if(L&&L.isTexture){const O=L.mapping;if(O===Rc||O===Sa)if(a.has(L)){const G=a.get(L).texture;return g(G,L.mapping)}else{const G=L.image;if(G&&G.height>0){const h=new xc2(G.height);return h.fromEquirectangularTexture(D,L),a.set(L,h),L.addEventListener("dispose",x),g(h.texture,L.mapping)}else return null}}return L}function x(L){const O=L.target;O.removeEventListener("dispose",x);const G=a.get(O);G!==void 0&&(a.delete(O),G.dispose())}function E(){a=new WeakMap}return{get:w,dispose:E}}class Jc extends Ya{constructor(a=-1,g=1,w=1,x=-1,E=.1,L=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=a,this.right=g,this.top=w,this.bottom=x,this.near=E,this.far=L,this.updateProjectionMatrix()}copy(a,g){return super.copy(a,g),this.left=a.left,this.right=a.right,this.top=a.top,this.bottom=a.bottom,this.near=a.near,this.far=a.far,this.zoom=a.zoom,this.view=a.view===null?null:Object.assign({},a.view),this}setViewOffset(a,g,w,x,E,L){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=a,this.view.fullHeight=g,this.view.offsetX=w,this.view.offsetY=x,this.view.width=E,this.view.height=L,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const a=(this.right-this.left)/(2*this.zoom),g=(this.top-this.bottom)/(2*this.zoom),w=(this.right+this.left)/2,x=(this.top+this.bottom)/2;let E=w-a,L=w+a,O=x+g,G=x-g;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,X=(this.top-this.bottom)/this.view.fullHeight/this.zoom;E+=h*this.view.offsetX,L=E+h*this.view.width,O-=X*this.view.offsetY,G=O-X*this.view.height}this.projectionMatrix.makeOrthographic(E,L,O,G,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(a){const g=super.toJSON(a);return g.object.zoom=this.zoom,g.object.left=this.left,g.object.right=this.right,g.object.top=this.top,g.object.bottom=this.bottom,g.object.near=this.near,g.object.far=this.far,this.view!==null&&(g.object.view=Object.assign({},this.view)),g}}const nu=4,gz=[.125,.215,.35,.446,.526,.582],q1=20,Q6=new Jc,yz=new pe;let Y6=null,X6=0,Z6=0,q6=!1;const X1=(1+Math.sqrt(5))/2,Jl=1/X1,kz=[new S2(-X1,Jl,0),new S2(X1,Jl,0),new S2(-Jl,0,X1),new S2(Jl,0,X1),new S2(0,X1,-Jl),new S2(0,X1,Jl),new S2(-1,1,-1),new S2(1,1,-1),new S2(-1,1,1),new S2(1,1,1)];class vz{constructor(a){this._renderer=a,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(a,g=0,w=.1,x=100){Y6=this._renderer.getRenderTarget(),X6=this._renderer.getActiveCubeFace(),Z6=this._renderer.getActiveMipmapLevel(),q6=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const E=this._allocateTargets();return E.depthBuffer=!0,this._sceneToCubeUV(a,w,x,E),g>0&&this._blur(E,0,0,g),this._applyPMREM(E),this._cleanup(E),E}fromEquirectangular(a,g=null){return this._fromTexture(a,g)}fromCubemap(a,g=null){return this._fromTexture(a,g)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sz(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bz(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(a){this._lodMax=Math.floor(Math.log2(a)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let a=0;a<this._lodPlanes.length;a++)this._lodPlanes[a].dispose()}_cleanup(a){this._renderer.setRenderTarget(Y6,X6,Z6),this._renderer.xr.enabled=q6,a.scissorTest=!1,fc(a,0,0,a.width,a.height)}_fromTexture(a,g){a.mapping===cu||a.mapping===_u?this._setSize(a.image.length===0?16:a.image[0].width||a.image[0].image.width):this._setSize(a.image.width/4),Y6=this._renderer.getRenderTarget(),X6=this._renderer.getActiveCubeFace(),Z6=this._renderer.getActiveMipmapLevel(),q6=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const w=g||this._allocateTargets();return this._textureToCubeUV(a,w),this._applyPMREM(w),this._cleanup(w),w}_allocateTargets(){const a=3*Math.max(this._cubeSize,112),g=4*this._cubeSize,w={magFilter:yr,minFilter:yr,generateMipmaps:!1,type:Yc,format:ho,colorSpace:ii,depthBuffer:!1},x=wz(a,g,w);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==a||this._pingPongRenderTarget.height!==g){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wz(a,g,w);const{_lodMax:E}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m62(E)),this._blurMaterial=d62(E,a,g)}return x}_compileMaterial(a){const g=new q0(this._lodPlanes[0],a);this._renderer.compile(g,Q6)}_sceneToCubeUV(a,g,w,x){const O=new Si(90,1,g,w),G=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],X=this._renderer,Z=X.autoClear,K=X.toneMapping;X.getClearColor(yz),X.toneMapping=g1,X.autoClear=!1;const e2=new Ho({name:"PMREM.Background",side:er,depthWrite:!1,depthTest:!1}),l2=new q0(new gu,e2);let p2=!1;const r2=a.background;r2?r2.isColor&&(e2.color.copy(r2),a.background=null,p2=!0):(e2.color.copy(yz),p2=!0);for(let o2=0;o2<6;o2++){const k2=o2%3;k2===0?(O.up.set(0,G[o2],0),O.lookAt(h[o2],0,0)):k2===1?(O.up.set(0,0,G[o2]),O.lookAt(0,h[o2],0)):(O.up.set(0,G[o2],0),O.lookAt(0,0,h[o2]));const h2=this._cubeSize;fc(x,k2*h2,o2>2?h2:0,h2,h2),X.setRenderTarget(x),p2&&X.render(l2,O),X.render(a,O)}l2.geometry.dispose(),l2.material.dispose(),X.toneMapping=K,X.autoClear=Z,a.background=r2}_textureToCubeUV(a,g){const w=this._renderer,x=a.mapping===cu||a.mapping===_u;x?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sz()),this._cubemapMaterial.uniforms.flipEnvMap.value=a.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bz());const E=x?this._cubemapMaterial:this._equirectMaterial,L=new q0(this._lodPlanes[0],E),O=E.uniforms;O.envMap.value=a;const G=this._cubeSize;fc(g,0,0,3*G,2*G),w.setRenderTarget(g),w.render(L,Q6)}_applyPMREM(a){const g=this._renderer,w=g.autoClear;g.autoClear=!1;const x=this._lodPlanes.length;for(let E=1;E<x;E++){const L=Math.sqrt(this._sigmas[E]*this._sigmas[E]-this._sigmas[E-1]*this._sigmas[E-1]),O=kz[(x-E-1)%kz.length];this._blur(a,E-1,E,L,O)}g.autoClear=w}_blur(a,g,w,x,E){const L=this._pingPongRenderTarget;this._halfBlur(a,L,g,w,x,"latitudinal",E),this._halfBlur(L,a,w,w,x,"longitudinal",E)}_halfBlur(a,g,w,x,E,L,O){const G=this._renderer,h=this._blurMaterial;L!=="latitudinal"&&L!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const X=3,Z=new q0(this._lodPlanes[x],h),K=h.uniforms,e2=this._sizeLods[w]-1,l2=isFinite(E)?Math.PI/(2*e2):2*Math.PI/(2*q1-1),p2=E/l2,r2=isFinite(E)?1+Math.floor(X*p2):q1;r2>q1&&console.warn(`sigmaRadians, ${E}, is too large and will clip, as it requested ${r2} samples when the maximum is set to ${q1}`);const o2=[];let k2=0;for(let D2=0;D2<q1;++D2){const Q2=D2/p2,x2=Math.exp(-Q2*Q2/2);o2.push(x2),D2===0?k2+=x2:D2<r2&&(k2+=2*x2)}for(let D2=0;D2<o2.length;D2++)o2[D2]=o2[D2]/k2;K.envMap.value=a.texture,K.samples.value=r2,K.weights.value=o2,K.latitudinal.value=L==="latitudinal",O&&(K.poleAxis.value=O);const{_lodMax:h2}=this;K.dTheta.value=l2,K.mipInt.value=h2-w;const v2=this._sizeLods[x],j2=3*v2*(x>h2-nu?x-h2+nu:0),R2=4*(this._cubeSize-v2);fc(g,j2,R2,3*v2,2*v2),G.setRenderTarget(g),G.render(Z,Q6)}}function m62(D){const a=[],g=[],w=[];let x=D;const E=D-nu+1+gz.length;for(let L=0;L<E;L++){const O=Math.pow(2,x);g.push(O);let G=1/O;L>D-nu?G=gz[L-D+nu-1]:L===0&&(G=0),w.push(G);const h=1/(O-2),X=-h,Z=1+h,K=[X,X,Z,X,Z,Z,X,X,Z,Z,X,Z],e2=6,l2=6,p2=3,r2=2,o2=1,k2=new Float32Array(p2*l2*e2),h2=new Float32Array(r2*l2*e2),v2=new Float32Array(o2*l2*e2);for(let R2=0;R2<e2;R2++){const D2=R2%3*2/3-1,Q2=R2>2?0:-1,x2=[D2,Q2,0,D2+2/3,Q2,0,D2+2/3,Q2+1,0,D2,Q2,0,D2+2/3,Q2+1,0,D2,Q2+1,0];k2.set(x2,p2*l2*R2),h2.set(K,r2*l2*R2);const g2=[R2,R2,R2,R2,R2,R2];v2.set(g2,o2*l2*R2)}const j2=new J0;j2.setAttribute("position",new _i(k2,p2)),j2.setAttribute("uv",new _i(h2,r2)),j2.setAttribute("faceIndex",new _i(v2,o2)),a.push(j2),x>nu&&x--}return{lodPlanes:a,sizeLods:g,sigmas:w}}function wz(D,a,g){const w=new J1(D,a,g);return w.texture.mapping=Qc,w.texture.name="PMREM.cubeUv",w.scissorTest=!0,w}function fc(D,a,g,w,x){D.viewport.set(a,g,w,x),D.scissor.set(a,g,w,x)}function d62(D,a,g){const w=new Float32Array(q1),x=new S2(0,1,0);return new v1({name:"SphericalGaussianBlur",defines:{n:q1,CUBEUV_TEXEL_WIDTH:1/a,CUBEUV_TEXEL_HEIGHT:1/g,CUBEUV_MAX_MIP:`${D}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:w},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:x}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:A1,depthTest:!1,depthWrite:!1})}function Bz(){return new v1({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:A1,depthTest:!1,depthWrite:!1})}function Sz(){return new v1({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Za(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:A1,depthTest:!1,depthWrite:!1})}function Za(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function A62(D){let a=new WeakMap,g=null;function w(O){if(O&&O.isTexture){const G=O.mapping,h=G===Rc||G===Sa,X=G===cu||G===_u;if(h||X){let Z=a.get(O);const K=Z!==void 0?Z.texture.pmremVersion:0;if(O.isRenderTargetTexture&&O.pmremVersion!==K)return g===null&&(g=new vz(D)),Z=h?g.fromEquirectangular(O,Z):g.fromCubemap(O,Z),Z.texture.pmremVersion=O.pmremVersion,a.set(O,Z),Z.texture;if(Z!==void 0)return Z.texture;{const e2=O.image;return h&&e2&&e2.height>0||X&&e2&&x(e2)?(g===null&&(g=new vz(D)),Z=h?g.fromEquirectangular(O):g.fromCubemap(O),Z.texture.pmremVersion=O.pmremVersion,a.set(O,Z),O.addEventListener("dispose",E),Z.texture):null}}}return O}function x(O){let G=0;const h=6;for(let X=0;X<h;X++)O[X]!==void 0&&G++;return G===h}function E(O){const G=O.target;G.removeEventListener("dispose",E);const h=a.get(G);h!==void 0&&(a.delete(G),h.dispose())}function L(){a=new WeakMap,g!==null&&(g.dispose(),g=null)}return{get:w,dispose:L}}function g62(D){const a={};function g(w){if(a[w]!==void 0)return a[w];let x;switch(w){case"WEBGL_depth_texture":x=D.getExtension("WEBGL_depth_texture")||D.getExtension("MOZ_WEBGL_depth_texture")||D.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":x=D.getExtension("EXT_texture_filter_anisotropic")||D.getExtension("MOZ_EXT_texture_filter_anisotropic")||D.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":x=D.getExtension("WEBGL_compressed_texture_s3tc")||D.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||D.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":x=D.getExtension("WEBGL_compressed_texture_pvrtc")||D.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:x=D.getExtension(w)}return a[w]=x,x}return{has:function(w){return g(w)!==null},init:function(){g("EXT_color_buffer_float"),g("WEBGL_clip_cull_distance"),g("OES_texture_float_linear"),g("EXT_color_buffer_half_float"),g("WEBGL_multisampled_render_to_texture"),g("WEBGL_render_shared_exponent")},get:function(w){const x=g(w);return x===null&&console.warn("THREE.WebGLRenderer: "+w+" extension not supported."),x}}}function y62(D,a,g,w){const x={},E=new WeakMap;function L(Z){const K=Z.target;K.index!==null&&a.remove(K.index);for(const l2 in K.attributes)a.remove(K.attributes[l2]);for(const l2 in K.morphAttributes){const p2=K.morphAttributes[l2];for(let r2=0,o2=p2.length;r2<o2;r2++)a.remove(p2[r2])}K.removeEventListener("dispose",L),delete x[K.id];const e2=E.get(K);e2&&(a.remove(e2),E.delete(K)),w.releaseStatesOfGeometry(K),K.isInstancedBufferGeometry===!0&&delete K._maxInstanceCount,g.memory.geometries--}function O(Z,K){return x[K.id]===!0||(K.addEventListener("dispose",L),x[K.id]=!0,g.memory.geometries++),K}function G(Z){const K=Z.attributes;for(const l2 in K)a.update(K[l2],D.ARRAY_BUFFER);const e2=Z.morphAttributes;for(const l2 in e2){const p2=e2[l2];for(let r2=0,o2=p2.length;r2<o2;r2++)a.update(p2[r2],D.ARRAY_BUFFER)}}function h(Z){const K=[],e2=Z.index,l2=Z.attributes.position;let p2=0;if(e2!==null){const k2=e2.array;p2=e2.version;for(let h2=0,v2=k2.length;h2<v2;h2+=3){const j2=k2[h2+0],R2=k2[h2+1],D2=k2[h2+2];K.push(j2,R2,R2,D2,D2,j2)}}else if(l2!==void 0){const k2=l2.array;p2=l2.version;for(let h2=0,v2=k2.length/3-1;h2<v2;h2+=3){const j2=h2+0,R2=h2+1,D2=h2+2;K.push(j2,R2,R2,D2,D2,j2)}}else return;const r2=new(NV(K)?VV:Qa)(K,1);r2.version=p2;const o2=E.get(Z);o2&&a.remove(o2),E.set(Z,r2)}function X(Z){const K=E.get(Z);if(K){const e2=Z.index;e2!==null&&K.version<e2.version&&h(Z)}else h(Z);return E.get(Z)}return{get:O,update:G,getWireframeAttribute:X}}function k62(D,a,g){let w;function x(K){w=K}let E,L;function O(K){E=K.type,L=K.bytesPerElement}function G(K,e2){D.drawElements(w,e2,E,K*L),g.update(e2,w,1)}function h(K,e2,l2){l2!==0&&(D.drawElementsInstanced(w,e2,E,K*L,l2),g.update(e2,w,l2))}function X(K,e2,l2){if(l2===0)return;const p2=a.get("WEBGL_multi_draw");if(p2===null)for(let r2=0;r2<l2;r2++)this.render(K[r2]/L,e2[r2]);else{p2.multiDrawElementsWEBGL(w,e2,0,E,K,0,l2);let r2=0;for(let o2=0;o2<l2;o2++)r2+=e2[o2];g.update(r2,w,1)}}function Z(K,e2,l2,p2){if(l2===0)return;const r2=a.get("WEBGL_multi_draw");if(r2===null)for(let o2=0;o2<K.length;o2++)h(K[o2]/L,e2[o2],p2[o2]);else{r2.multiDrawElementsInstancedWEBGL(w,e2,0,E,K,0,p2,0,l2);let o2=0;for(let k2=0;k2<l2;k2++)o2+=e2[k2];for(let k2=0;k2<p2.length;k2++)g.update(o2,w,p2[k2])}}this.setMode=x,this.setIndex=O,this.render=G,this.renderInstances=h,this.renderMultiDraw=X,this.renderMultiDrawInstances=Z}function v62(D){const a={geometries:0,textures:0},g={frame:0,calls:0,triangles:0,points:0,lines:0};function w(E,L,O){switch(g.calls++,L){case D.TRIANGLES:g.triangles+=O*(E/3);break;case D.LINES:g.lines+=O*(E/2);break;case D.LINE_STRIP:g.lines+=O*(E-1);break;case D.LINE_LOOP:g.lines+=O*E;break;case D.POINTS:g.points+=O*E;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",L);break}}function x(){g.calls=0,g.triangles=0,g.points=0,g.lines=0}return{memory:a,render:g,programs:null,autoReset:!0,reset:x,update:w}}function w62(D,a,g){const w=new WeakMap,x=new bn;function E(L,O,G){const h=L.morphTargetInfluences,X=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Z=X!==void 0?X.length:0;let K=w.get(O);if(K===void 0||K.count!==Z){let x2=function(){D2.dispose(),w.delete(O),O.removeEventListener("dispose",x2)};K!==void 0&&K.texture.dispose();const e2=O.morphAttributes.position!==void 0,l2=O.morphAttributes.normal!==void 0,p2=O.morphAttributes.color!==void 0,r2=O.morphAttributes.position||[],o2=O.morphAttributes.normal||[],k2=O.morphAttributes.color||[];let h2=0;e2===!0&&(h2=1),l2===!0&&(h2=2),p2===!0&&(h2=3);let v2=O.attributes.position.count*h2,j2=1;v2>a.maxTextureSize&&(j2=Math.ceil(v2/a.maxTextureSize),v2=a.maxTextureSize);const R2=new Float32Array(v2*j2*4*Z),D2=new WV(R2,v2,j2,Z);D2.type=Wo,D2.needsUpdate=!0;const Q2=h2*4;for(let g2=0;g2<Z;g2++){const Y2=r2[g2],st=o2[g2],U2=k2[g2],lt=v2*j2*4*g2;for(let ht=0;ht<Y2.count;ht++){const mt=ht*Q2;e2===!0&&(x.fromBufferAttribute(Y2,ht),R2[lt+mt+0]=x.x,R2[lt+mt+1]=x.y,R2[lt+mt+2]=x.z,R2[lt+mt+3]=0),l2===!0&&(x.fromBufferAttribute(st,ht),R2[lt+mt+4]=x.x,R2[lt+mt+5]=x.y,R2[lt+mt+6]=x.z,R2[lt+mt+7]=0),p2===!0&&(x.fromBufferAttribute(U2,ht),R2[lt+mt+8]=x.x,R2[lt+mt+9]=x.y,R2[lt+mt+10]=x.z,R2[lt+mt+11]=U2.itemSize===4?x.w:1)}}K={count:Z,texture:D2,size:new Lt(v2,j2)},w.set(O,K),O.addEventListener("dispose",x2)}if(L.isInstancedMesh===!0&&L.morphTexture!==null)G.getUniforms().setValue(D,"morphTexture",L.morphTexture,g);else{let e2=0;for(let p2=0;p2<h.length;p2++)e2+=h[p2];const l2=O.morphTargetsRelative?1:1-e2;G.getUniforms().setValue(D,"morphTargetBaseInfluence",l2),G.getUniforms().setValue(D,"morphTargetInfluences",h)}G.getUniforms().setValue(D,"morphTargetsTexture",K.texture,g),G.getUniforms().setValue(D,"morphTargetsTextureSize",K.size)}return{update:E}}function B62(D,a,g,w){let x=new WeakMap;function E(G){const h=w.render.frame,X=G.geometry,Z=a.get(G,X);if(x.get(Z)!==h&&(a.update(Z),x.set(Z,h)),G.isInstancedMesh&&(G.hasEventListener("dispose",O)===!1&&G.addEventListener("dispose",O),x.get(G)!==h&&(g.update(G.instanceMatrix,D.ARRAY_BUFFER),G.instanceColor!==null&&g.update(G.instanceColor,D.ARRAY_BUFFER),x.set(G,h))),G.isSkinnedMesh){const K=G.skeleton;x.get(K)!==h&&(K.update(),x.set(K,h))}return Z}function L(){x=new WeakMap}function O(G){const h=G.target;h.removeEventListener("dispose",O),g.remove(h.instanceMatrix),h.instanceColor!==null&&g.remove(h.instanceColor)}return{update:E,dispose:L}}class ZV extends E0{constructor(a,g,w,x,E,L,O,G,h,X){if(X=X!==void 0?X:su,X!==su&&X!==Wf)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");w===void 0&&X===su&&(w=au),w===void 0&&X===Wf&&(w=qf),super(null,x,E,L,O,G,X,w,h),this.isDepthTexture=!0,this.image={width:a,height:g},this.magFilter=O!==void 0?O:ji,this.minFilter=G!==void 0?G:ji,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(a){return super.copy(a),this.compareFunction=a.compareFunction,this}toJSON(a){const g=super.toJSON(a);return this.compareFunction!==null&&(g.compareFunction=this.compareFunction),g}}const qV=new E0,JV=new ZV(1,1);JV.compareFunction=jV;const KV=new WV,$V=new fc2,tQ=new YV,xz=[],Cz=[],Mz=new Float32Array(16),Tz=new Float32Array(9),Ez=new Float32Array(4);function yu(D,a,g){const w=D[0];if(w<=0||w>0)return D;const x=a*g;let E=xz[x];if(E===void 0&&(E=new Float32Array(x),xz[x]=E),a!==0){w.toArray(E,0);for(let L=1,O=0;L!==a;++L)O+=g,D[L].toArray(E,O)}return E}function K0(D,a){if(D.length!==a.length)return!1;for(let g=0,w=D.length;g<w;g++)if(D[g]!==a[g])return!1;return!0}function $0(D,a){for(let g=0,w=a.length;g<w;g++)D[g]=a[g]}function Kc(D,a){let g=Cz[a];g===void 0&&(g=new Int32Array(a),Cz[a]=g);for(let w=0;w!==a;++w)g[w]=D.allocateTextureUnit();return g}function S62(D,a){const g=this.cache;g[0]!==a&&(D.uniform1f(this.addr,a),g[0]=a)}function x62(D,a){const g=this.cache;if(a.x!==void 0)(g[0]!==a.x||g[1]!==a.y)&&(D.uniform2f(this.addr,a.x,a.y),g[0]=a.x,g[1]=a.y);else{if(K0(g,a))return;D.uniform2fv(this.addr,a),$0(g,a)}}function C62(D,a){const g=this.cache;if(a.x!==void 0)(g[0]!==a.x||g[1]!==a.y||g[2]!==a.z)&&(D.uniform3f(this.addr,a.x,a.y,a.z),g[0]=a.x,g[1]=a.y,g[2]=a.z);else if(a.r!==void 0)(g[0]!==a.r||g[1]!==a.g||g[2]!==a.b)&&(D.uniform3f(this.addr,a.r,a.g,a.b),g[0]=a.r,g[1]=a.g,g[2]=a.b);else{if(K0(g,a))return;D.uniform3fv(this.addr,a),$0(g,a)}}function M62(D,a){const g=this.cache;if(a.x!==void 0)(g[0]!==a.x||g[1]!==a.y||g[2]!==a.z||g[3]!==a.w)&&(D.uniform4f(this.addr,a.x,a.y,a.z,a.w),g[0]=a.x,g[1]=a.y,g[2]=a.z,g[3]=a.w);else{if(K0(g,a))return;D.uniform4fv(this.addr,a),$0(g,a)}}function T62(D,a){const g=this.cache,w=a.elements;if(w===void 0){if(K0(g,a))return;D.uniformMatrix2fv(this.addr,!1,a),$0(g,a)}else{if(K0(g,w))return;Ez.set(w),D.uniformMatrix2fv(this.addr,!1,Ez),$0(g,w)}}function E62(D,a){const g=this.cache,w=a.elements;if(w===void 0){if(K0(g,a))return;D.uniformMatrix3fv(this.addr,!1,a),$0(g,a)}else{if(K0(g,w))return;Tz.set(w),D.uniformMatrix3fv(this.addr,!1,Tz),$0(g,w)}}function R62(D,a){const g=this.cache,w=a.elements;if(w===void 0){if(K0(g,a))return;D.uniformMatrix4fv(this.addr,!1,a),$0(g,a)}else{if(K0(g,w))return;Mz.set(w),D.uniformMatrix4fv(this.addr,!1,Mz),$0(g,w)}}function b62(D,a){const g=this.cache;g[0]!==a&&(D.uniform1i(this.addr,a),g[0]=a)}function D62(D,a){const g=this.cache;if(a.x!==void 0)(g[0]!==a.x||g[1]!==a.y)&&(D.uniform2i(this.addr,a.x,a.y),g[0]=a.x,g[1]=a.y);else{if(K0(g,a))return;D.uniform2iv(this.addr,a),$0(g,a)}}function I62(D,a){const g=this.cache;if(a.x!==void 0)(g[0]!==a.x||g[1]!==a.y||g[2]!==a.z)&&(D.uniform3i(this.addr,a.x,a.y,a.z),g[0]=a.x,g[1]=a.y,g[2]=a.z);else{if(K0(g,a))return;D.uniform3iv(this.addr,a),$0(g,a)}}function P62(D,a){const g=this.cache;if(a.x!==void 0)(g[0]!==a.x||g[1]!==a.y||g[2]!==a.z||g[3]!==a.w)&&(D.uniform4i(this.addr,a.x,a.y,a.z,a.w),g[0]=a.x,g[1]=a.y,g[2]=a.z,g[3]=a.w);else{if(K0(g,a))return;D.uniform4iv(this.addr,a),$0(g,a)}}function L62(D,a){const g=this.cache;g[0]!==a&&(D.uniform1ui(this.addr,a),g[0]=a)}function F62(D,a){const g=this.cache;if(a.x!==void 0)(g[0]!==a.x||g[1]!==a.y)&&(D.uniform2ui(this.addr,a.x,a.y),g[0]=a.x,g[1]=a.y);else{if(K0(g,a))return;D.uniform2uiv(this.addr,a),$0(g,a)}}function O62(D,a){const g=this.cache;if(a.x!==void 0)(g[0]!==a.x||g[1]!==a.y||g[2]!==a.z)&&(D.uniform3ui(this.addr,a.x,a.y,a.z),g[0]=a.x,g[1]=a.y,g[2]=a.z);else{if(K0(g,a))return;D.uniform3uiv(this.addr,a),$0(g,a)}}function j62(D,a){const g=this.cache;if(a.x!==void 0)(g[0]!==a.x||g[1]!==a.y||g[2]!==a.z||g[3]!==a.w)&&(D.uniform4ui(this.addr,a.x,a.y,a.z,a.w),g[0]=a.x,g[1]=a.y,g[2]=a.z,g[3]=a.w);else{if(K0(g,a))return;D.uniform4uiv(this.addr,a),$0(g,a)}}function N62(D,a,g){const w=this.cache,x=g.allocateTextureUnit();w[0]!==x&&(D.uniform1i(this.addr,x),w[0]=x);const E=this.type===D.SAMPLER_2D_SHADOW?JV:qV;g.setTexture2D(a||E,x)}function U62(D,a,g){const w=this.cache,x=g.allocateTextureUnit();w[0]!==x&&(D.uniform1i(this.addr,x),w[0]=x),g.setTexture3D(a||$V,x)}function G62(D,a,g){const w=this.cache,x=g.allocateTextureUnit();w[0]!==x&&(D.uniform1i(this.addr,x),w[0]=x),g.setTextureCube(a||tQ,x)}function W62(D,a,g){const w=this.cache,x=g.allocateTextureUnit();w[0]!==x&&(D.uniform1i(this.addr,x),w[0]=x),g.setTexture2DArray(a||KV,x)}function H62(D){switch(D){case 5126:return S62;case 35664:return x62;case 35665:return C62;case 35666:return M62;case 35674:return T62;case 35675:return E62;case 35676:return R62;case 5124:case 35670:return b62;case 35667:case 35671:return D62;case 35668:case 35672:return I62;case 35669:case 35673:return P62;case 5125:return L62;case 36294:return F62;case 36295:return O62;case 36296:return j62;case 35678:case 36198:case 36298:case 36306:case 35682:return N62;case 35679:case 36299:case 36307:return U62;case 35680:case 36300:case 36308:case 36293:return G62;case 36289:case 36303:case 36311:case 36292:return W62}}function z62(D,a){D.uniform1fv(this.addr,a)}function V62(D,a){const g=yu(a,this.size,2);D.uniform2fv(this.addr,g)}function Q62(D,a){const g=yu(a,this.size,3);D.uniform3fv(this.addr,g)}function Y62(D,a){const g=yu(a,this.size,4);D.uniform4fv(this.addr,g)}function X62(D,a){const g=yu(a,this.size,4);D.uniformMatrix2fv(this.addr,!1,g)}function Z62(D,a){const g=yu(a,this.size,9);D.uniformMatrix3fv(this.addr,!1,g)}function q62(D,a){const g=yu(a,this.size,16);D.uniformMatrix4fv(this.addr,!1,g)}function J62(D,a){D.uniform1iv(this.addr,a)}function K62(D,a){D.uniform2iv(this.addr,a)}function $62(D,a){D.uniform3iv(this.addr,a)}function ta2(D,a){D.uniform4iv(this.addr,a)}function ea2(D,a){D.uniform1uiv(this.addr,a)}function na2(D,a){D.uniform2uiv(this.addr,a)}function ia2(D,a){D.uniform3uiv(this.addr,a)}function ra2(D,a){D.uniform4uiv(this.addr,a)}function oa2(D,a,g){const w=this.cache,x=a.length,E=Kc(g,x);K0(w,E)||(D.uniform1iv(this.addr,E),$0(w,E));for(let L=0;L!==x;++L)g.setTexture2D(a[L]||qV,E[L])}function sa2(D,a,g){const w=this.cache,x=a.length,E=Kc(g,x);K0(w,E)||(D.uniform1iv(this.addr,E),$0(w,E));for(let L=0;L!==x;++L)g.setTexture3D(a[L]||$V,E[L])}function la2(D,a,g){const w=this.cache,x=a.length,E=Kc(g,x);K0(w,E)||(D.uniform1iv(this.addr,E),$0(w,E));for(let L=0;L!==x;++L)g.setTextureCube(a[L]||tQ,E[L])}function ua2(D,a,g){const w=this.cache,x=a.length,E=Kc(g,x);K0(w,E)||(D.uniform1iv(this.addr,E),$0(w,E));for(let L=0;L!==x;++L)g.setTexture2DArray(a[L]||KV,E[L])}function fa2(D){switch(D){case 5126:return z62;case 35664:return V62;case 35665:return Q62;case 35666:return Y62;case 35674:return X62;case 35675:return Z62;case 35676:return q62;case 5124:case 35670:return J62;case 35667:case 35671:return K62;case 35668:case 35672:return $62;case 35669:case 35673:return ta2;case 5125:return ea2;case 36294:return na2;case 36295:return ia2;case 36296:return ra2;case 35678:case 36198:case 36298:case 36306:case 35682:return oa2;case 35679:case 36299:case 36307:return sa2;case 35680:case 36300:case 36308:case 36293:return la2;case 36289:case 36303:case 36311:case 36292:return ua2}}class pa2{constructor(a,g,w){this.id=a,this.addr=w,this.cache=[],this.type=g.type,this.setValue=H62(g.type)}}class ca2{constructor(a,g,w){this.id=a,this.addr=w,this.cache=[],this.type=g.type,this.size=g.size,this.setValue=fa2(g.type)}}class _a2{constructor(a){this.id=a,this.seq=[],this.map={}}setValue(a,g,w){const x=this.seq;for(let E=0,L=x.length;E!==L;++E){const O=x[E];O.setValue(a,g[O.id],w)}}}const J6=/(\w+)(\])?(\[|\.)?/g;function Rz(D,a){D.seq.push(a),D.map[a.id]=a}function aa2(D,a,g){const w=D.name,x=w.length;for(J6.lastIndex=0;;){const E=J6.exec(w),L=J6.lastIndex;let O=E[1];const G=E[2]==="]",h=E[3];if(G&&(O=O|0),h===void 0||h==="["&&L+2===x){Rz(g,h===void 0?new pa2(O,D,a):new ca2(O,D,a));break}else{let Z=g.map[O];Z===void 0&&(Z=new _a2(O),Rz(g,Z)),g=Z}}}class xc{constructor(a,g){this.seq=[],this.map={};const w=a.getProgramParameter(g,a.ACTIVE_UNIFORMS);for(let x=0;x<w;++x){const E=a.getActiveUniform(g,x),L=a.getUniformLocation(g,E.name);aa2(E,L,this)}}setValue(a,g,w,x){const E=this.map[g];E!==void 0&&E.setValue(a,w,x)}setOptional(a,g,w){const x=g[w];x!==void 0&&this.setValue(a,w,x)}static upload(a,g,w,x){for(let E=0,L=g.length;E!==L;++E){const O=g[E],G=w[O.id];G.needsUpdate!==!1&&O.setValue(a,G.value,x)}}static seqWithValue(a,g){const w=[];for(let x=0,E=a.length;x!==E;++x){const L=a[x];L.id in g&&w.push(L)}return w}}function bz(D,a,g){const w=D.createShader(a);return D.shaderSource(w,g),D.compileShader(w),w}const ha2=37297;let ma2=0;function da2(D,a){const g=D.split(`
`),w=[],x=Math.max(a-6,0),E=Math.min(a+6,g.length);for(let L=x;L<E;L++){const O=L+1;w.push(`${O===a?">":" "} ${O}: ${g[L]}`)}return w.join(`
`)}function Aa2(D){const a=Pn.getPrimaries(Pn.workingColorSpace),g=Pn.getPrimaries(D);let w;switch(a===g?w="":a===Lc&&g===Pc?w="LinearDisplayP3ToLinearSRGB":a===Pc&&g===Lc&&(w="LinearSRGBToLinearDisplayP3"),D){case ii:case Zc:return[w,"LinearTransferOETF"];case T0:case za:return[w,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",D),[w,"LinearTransferOETF"]}}function Dz(D,a,g){const w=D.getShaderParameter(a,D.COMPILE_STATUS),x=D.getShaderInfoLog(a).trim();if(w&&x==="")return"";const E=/ERROR: 0:(\d+)/.exec(x);if(E){const L=parseInt(E[1]);return g.toUpperCase()+`

`+x+`

`+da2(D.getShaderSource(a),L)}else return x}function ga2(D,a){const g=Aa2(a);return`vec4 ${D}( vec4 value ) { return ${g[0]}( ${g[1]}( value ) ); }`}function ya2(D,a){let g;switch(a){case c42:g="Linear";break;case _42:g="Reinhard";break;case a42:g="OptimizedCineon";break;case h42:g="ACESFilmic";break;case d42:g="AgX";break;case A42:g="Neutral";break;case m42:g="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",a),g="Linear"}return"vec3 "+D+"( vec3 color ) { return "+g+"ToneMapping( color ); }"}function ka2(D){return[D.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",D.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lf).join(`
`)}function va2(D){const a=[];for(const g in D){const w=D[g];w!==!1&&a.push("#define "+g+" "+w)}return a.join(`
`)}function wa2(D,a){const g={},w=D.getProgramParameter(a,D.ACTIVE_ATTRIBUTES);for(let x=0;x<w;x++){const E=D.getActiveAttrib(a,x),L=E.name;let O=1;E.type===D.FLOAT_MAT2&&(O=2),E.type===D.FLOAT_MAT3&&(O=3),E.type===D.FLOAT_MAT4&&(O=4),g[L]={type:E.type,location:D.getAttribLocation(a,L),locationSize:O}}return g}function Lf(D){return D!==""}function Iz(D,a){const g=a.numSpotLightShadows+a.numSpotLightMaps-a.numSpotLightShadowsWithMaps;return D.replace(/NUM_DIR_LIGHTS/g,a.numDirLights).replace(/NUM_SPOT_LIGHTS/g,a.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,a.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,g).replace(/NUM_RECT_AREA_LIGHTS/g,a.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,a.numPointLights).replace(/NUM_HEMI_LIGHTS/g,a.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,a.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,a.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,a.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,a.numPointLightShadows)}function Pz(D,a){return D.replace(/NUM_CLIPPING_PLANES/g,a.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,a.numClippingPlanes-a.numClipIntersection)}const Ba2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(D){return D.replace(Ba2,xa2)}const Sa2=new Map;function xa2(D,a){let g=tn[a];if(g===void 0){const w=Sa2.get(a);if(w!==void 0)g=tn[w],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',a,w);else throw new Error("Can not resolve #include <"+a+">")}return Ta(g)}const Ca2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lz(D){return D.replace(Ca2,Ma2)}function Ma2(D,a,g,w){let x="";for(let E=parseInt(a);E<parseInt(g);E++)x+=w.replace(/\[\s*i\s*\]/g,"[ "+E+" ]").replace(/UNROLLED_LOOP_INDEX/g,E);return x}function Fz(D){let a=`precision ${D.precision} float;
	precision ${D.precision} int;
	precision ${D.precision} sampler2D;
	precision ${D.precision} samplerCube;
	precision ${D.precision} sampler3D;
	precision ${D.precision} sampler2DArray;
	precision ${D.precision} sampler2DShadow;
	precision ${D.precision} samplerCubeShadow;
	precision ${D.precision} sampler2DArrayShadow;
	precision ${D.precision} isampler2D;
	precision ${D.precision} isampler3D;
	precision ${D.precision} isamplerCube;
	precision ${D.precision} isampler2DArray;
	precision ${D.precision} usampler2D;
	precision ${D.precision} usampler3D;
	precision ${D.precision} usamplerCube;
	precision ${D.precision} usampler2DArray;
	`;return D.precision==="highp"?a+=`
#define HIGH_PRECISION`:D.precision==="mediump"?a+=`
#define MEDIUM_PRECISION`:D.precision==="lowp"&&(a+=`
#define LOW_PRECISION`),a}function Ta2(D){let a="SHADOWMAP_TYPE_BASIC";return D.shadowMapType===xV?a="SHADOWMAP_TYPE_PCF":D.shadowMapType===Op2?a="SHADOWMAP_TYPE_PCF_SOFT":D.shadowMapType===Ss&&(a="SHADOWMAP_TYPE_VSM"),a}function Ea2(D){let a="ENVMAP_TYPE_CUBE";if(D.envMap)switch(D.envMapMode){case cu:case _u:a="ENVMAP_TYPE_CUBE";break;case Qc:a="ENVMAP_TYPE_CUBE_UV";break}return a}function Ra2(D){let a="ENVMAP_MODE_REFLECTION";if(D.envMap)switch(D.envMapMode){case _u:a="ENVMAP_MODE_REFRACTION";break}return a}function ba2(D){let a="ENVMAP_BLENDING_NONE";if(D.envMap)switch(D.combine){case Vc:a="ENVMAP_BLENDING_MULTIPLY";break;case f42:a="ENVMAP_BLENDING_MIX";break;case p42:a="ENVMAP_BLENDING_ADD";break}return a}function Da2(D){const a=D.envMapCubeUVHeight;if(a===null)return null;const g=Math.log2(a)-2,w=1/a;return{texelWidth:1/(3*Math.max(Math.pow(2,g),7*16)),texelHeight:w,maxMip:g}}function Ia2(D,a,g,w){const x=D.getContext(),E=g.defines;let L=g.vertexShader,O=g.fragmentShader;const G=Ta2(g),h=Ea2(g),X=Ra2(g),Z=ba2(g),K=Da2(g),e2=ka2(g),l2=va2(E),p2=x.createProgram();let r2,o2,k2=g.glslVersion?"#version "+g.glslVersion+`
`:"";g.isRawShaderMaterial?(r2=["#define SHADER_TYPE "+g.shaderType,"#define SHADER_NAME "+g.shaderName,l2].filter(Lf).join(`
`),r2.length>0&&(r2+=`
`),o2=["#define SHADER_TYPE "+g.shaderType,"#define SHADER_NAME "+g.shaderName,l2].filter(Lf).join(`
`),o2.length>0&&(o2+=`
`)):(r2=[Fz(g),"#define SHADER_TYPE "+g.shaderType,"#define SHADER_NAME "+g.shaderName,l2,g.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",g.batching?"#define USE_BATCHING":"",g.instancing?"#define USE_INSTANCING":"",g.instancingColor?"#define USE_INSTANCING_COLOR":"",g.instancingMorph?"#define USE_INSTANCING_MORPH":"",g.useFog&&g.fog?"#define USE_FOG":"",g.useFog&&g.fogExp2?"#define FOG_EXP2":"",g.map?"#define USE_MAP":"",g.envMap?"#define USE_ENVMAP":"",g.envMap?"#define "+X:"",g.lightMap?"#define USE_LIGHTMAP":"",g.aoMap?"#define USE_AOMAP":"",g.bumpMap?"#define USE_BUMPMAP":"",g.normalMap?"#define USE_NORMALMAP":"",g.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",g.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",g.displacementMap?"#define USE_DISPLACEMENTMAP":"",g.emissiveMap?"#define USE_EMISSIVEMAP":"",g.anisotropy?"#define USE_ANISOTROPY":"",g.anisotropyMap?"#define USE_ANISOTROPYMAP":"",g.clearcoatMap?"#define USE_CLEARCOATMAP":"",g.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",g.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",g.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",g.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",g.specularMap?"#define USE_SPECULARMAP":"",g.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",g.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",g.roughnessMap?"#define USE_ROUGHNESSMAP":"",g.metalnessMap?"#define USE_METALNESSMAP":"",g.alphaMap?"#define USE_ALPHAMAP":"",g.alphaHash?"#define USE_ALPHAHASH":"",g.transmission?"#define USE_TRANSMISSION":"",g.transmissionMap?"#define USE_TRANSMISSIONMAP":"",g.thicknessMap?"#define USE_THICKNESSMAP":"",g.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",g.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",g.mapUv?"#define MAP_UV "+g.mapUv:"",g.alphaMapUv?"#define ALPHAMAP_UV "+g.alphaMapUv:"",g.lightMapUv?"#define LIGHTMAP_UV "+g.lightMapUv:"",g.aoMapUv?"#define AOMAP_UV "+g.aoMapUv:"",g.emissiveMapUv?"#define EMISSIVEMAP_UV "+g.emissiveMapUv:"",g.bumpMapUv?"#define BUMPMAP_UV "+g.bumpMapUv:"",g.normalMapUv?"#define NORMALMAP_UV "+g.normalMapUv:"",g.displacementMapUv?"#define DISPLACEMENTMAP_UV "+g.displacementMapUv:"",g.metalnessMapUv?"#define METALNESSMAP_UV "+g.metalnessMapUv:"",g.roughnessMapUv?"#define ROUGHNESSMAP_UV "+g.roughnessMapUv:"",g.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+g.anisotropyMapUv:"",g.clearcoatMapUv?"#define CLEARCOATMAP_UV "+g.clearcoatMapUv:"",g.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+g.clearcoatNormalMapUv:"",g.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+g.clearcoatRoughnessMapUv:"",g.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+g.iridescenceMapUv:"",g.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+g.iridescenceThicknessMapUv:"",g.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+g.sheenColorMapUv:"",g.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+g.sheenRoughnessMapUv:"",g.specularMapUv?"#define SPECULARMAP_UV "+g.specularMapUv:"",g.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+g.specularColorMapUv:"",g.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+g.specularIntensityMapUv:"",g.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+g.transmissionMapUv:"",g.thicknessMapUv?"#define THICKNESSMAP_UV "+g.thicknessMapUv:"",g.vertexTangents&&g.flatShading===!1?"#define USE_TANGENT":"",g.vertexColors?"#define USE_COLOR":"",g.vertexAlphas?"#define USE_COLOR_ALPHA":"",g.vertexUv1s?"#define USE_UV1":"",g.vertexUv2s?"#define USE_UV2":"",g.vertexUv3s?"#define USE_UV3":"",g.pointsUvs?"#define USE_POINTS_UV":"",g.flatShading?"#define FLAT_SHADED":"",g.skinning?"#define USE_SKINNING":"",g.morphTargets?"#define USE_MORPHTARGETS":"",g.morphNormals&&g.flatShading===!1?"#define USE_MORPHNORMALS":"",g.morphColors?"#define USE_MORPHCOLORS":"",g.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",g.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+g.morphTextureStride:"",g.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+g.morphTargetsCount:"",g.doubleSided?"#define DOUBLE_SIDED":"",g.flipSided?"#define FLIP_SIDED":"",g.shadowMapEnabled?"#define USE_SHADOWMAP":"",g.shadowMapEnabled?"#define "+G:"",g.sizeAttenuation?"#define USE_SIZEATTENUATION":"",g.numLightProbes>0?"#define USE_LIGHT_PROBES":"",g.useLegacyLights?"#define LEGACY_LIGHTS":"",g.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lf).join(`
`),o2=[Fz(g),"#define SHADER_TYPE "+g.shaderType,"#define SHADER_NAME "+g.shaderName,l2,g.useFog&&g.fog?"#define USE_FOG":"",g.useFog&&g.fogExp2?"#define FOG_EXP2":"",g.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",g.map?"#define USE_MAP":"",g.matcap?"#define USE_MATCAP":"",g.envMap?"#define USE_ENVMAP":"",g.envMap?"#define "+h:"",g.envMap?"#define "+X:"",g.envMap?"#define "+Z:"",K?"#define CUBEUV_TEXEL_WIDTH "+K.texelWidth:"",K?"#define CUBEUV_TEXEL_HEIGHT "+K.texelHeight:"",K?"#define CUBEUV_MAX_MIP "+K.maxMip+".0":"",g.lightMap?"#define USE_LIGHTMAP":"",g.aoMap?"#define USE_AOMAP":"",g.bumpMap?"#define USE_BUMPMAP":"",g.normalMap?"#define USE_NORMALMAP":"",g.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",g.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",g.emissiveMap?"#define USE_EMISSIVEMAP":"",g.anisotropy?"#define USE_ANISOTROPY":"",g.anisotropyMap?"#define USE_ANISOTROPYMAP":"",g.clearcoat?"#define USE_CLEARCOAT":"",g.clearcoatMap?"#define USE_CLEARCOATMAP":"",g.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",g.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",g.dispersion?"#define USE_DISPERSION":"",g.iridescence?"#define USE_IRIDESCENCE":"",g.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",g.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",g.specularMap?"#define USE_SPECULARMAP":"",g.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",g.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",g.roughnessMap?"#define USE_ROUGHNESSMAP":"",g.metalnessMap?"#define USE_METALNESSMAP":"",g.alphaMap?"#define USE_ALPHAMAP":"",g.alphaTest?"#define USE_ALPHATEST":"",g.alphaHash?"#define USE_ALPHAHASH":"",g.sheen?"#define USE_SHEEN":"",g.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",g.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",g.transmission?"#define USE_TRANSMISSION":"",g.transmissionMap?"#define USE_TRANSMISSIONMAP":"",g.thicknessMap?"#define USE_THICKNESSMAP":"",g.vertexTangents&&g.flatShading===!1?"#define USE_TANGENT":"",g.vertexColors||g.instancingColor?"#define USE_COLOR":"",g.vertexAlphas?"#define USE_COLOR_ALPHA":"",g.vertexUv1s?"#define USE_UV1":"",g.vertexUv2s?"#define USE_UV2":"",g.vertexUv3s?"#define USE_UV3":"",g.pointsUvs?"#define USE_POINTS_UV":"",g.gradientMap?"#define USE_GRADIENTMAP":"",g.flatShading?"#define FLAT_SHADED":"",g.doubleSided?"#define DOUBLE_SIDED":"",g.flipSided?"#define FLIP_SIDED":"",g.shadowMapEnabled?"#define USE_SHADOWMAP":"",g.shadowMapEnabled?"#define "+G:"",g.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",g.numLightProbes>0?"#define USE_LIGHT_PROBES":"",g.useLegacyLights?"#define LEGACY_LIGHTS":"",g.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",g.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",g.toneMapping!==g1?"#define TONE_MAPPING":"",g.toneMapping!==g1?tn.tonemapping_pars_fragment:"",g.toneMapping!==g1?ya2("toneMapping",g.toneMapping):"",g.dithering?"#define DITHERING":"",g.opaque?"#define OPAQUE":"",tn.colorspace_pars_fragment,ga2("linearToOutputTexel",g.outputColorSpace),g.useDepthPacking?"#define DEPTH_PACKING "+g.depthPacking:"",`
`].filter(Lf).join(`
`)),L=Ta(L),L=Iz(L,g),L=Pz(L,g),O=Ta(O),O=Iz(O,g),O=Pz(O,g),L=Lz(L),O=Lz(O),g.isRawShaderMaterial!==!0&&(k2=`#version 300 es
`,r2=[e2,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+r2,o2=["#define varying in",g.glslVersion===JH?"":"layout(location = 0) out highp vec4 pc_fragColor;",g.glslVersion===JH?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+o2);const h2=k2+r2+L,v2=k2+o2+O,j2=bz(x,x.VERTEX_SHADER,h2),R2=bz(x,x.FRAGMENT_SHADER,v2);x.attachShader(p2,j2),x.attachShader(p2,R2),g.index0AttributeName!==void 0?x.bindAttribLocation(p2,0,g.index0AttributeName):g.morphTargets===!0&&x.bindAttribLocation(p2,0,"position"),x.linkProgram(p2);function D2(Y2){if(D.debug.checkShaderErrors){const st=x.getProgramInfoLog(p2).trim(),U2=x.getShaderInfoLog(j2).trim(),lt=x.getShaderInfoLog(R2).trim();let ht=!0,mt=!0;if(x.getProgramParameter(p2,x.LINK_STATUS)===!1)if(ht=!1,typeof D.debug.onShaderError=="function")D.debug.onShaderError(x,p2,j2,R2);else{const Dt=Dz(x,j2,"vertex"),et=Dz(x,R2,"fragment");console.error("THREE.WebGLProgram: Shader Error "+x.getError()+" - VALIDATE_STATUS "+x.getProgramParameter(p2,x.VALIDATE_STATUS)+`

Material Name: `+Y2.name+`
Material Type: `+Y2.type+`

Program Info Log: `+st+`
`+Dt+`
`+et)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(U2===""||lt==="")&&(mt=!1);mt&&(Y2.diagnostics={runnable:ht,programLog:st,vertexShader:{log:U2,prefix:r2},fragmentShader:{log:lt,prefix:o2}})}x.deleteShader(j2),x.deleteShader(R2),Q2=new xc(x,p2),x2=wa2(x,p2)}let Q2;this.getUniforms=function(){return Q2===void 0&&D2(this),Q2};let x2;this.getAttributes=function(){return x2===void 0&&D2(this),x2};let g2=g.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g2===!1&&(g2=x.getProgramParameter(p2,ha2)),g2},this.destroy=function(){w.releaseStatesOfProgram(this),x.deleteProgram(p2),this.program=void 0},this.type=g.shaderType,this.name=g.shaderName,this.id=ma2++,this.cacheKey=a,this.usedTimes=1,this.program=p2,this.vertexShader=j2,this.fragmentShader=R2,this}let Pa2=0;class La2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(a){const g=a.vertexShader,w=a.fragmentShader,x=this._getShaderStage(g),E=this._getShaderStage(w),L=this._getShaderCacheForMaterial(a);return L.has(x)===!1&&(L.add(x),x.usedTimes++),L.has(E)===!1&&(L.add(E),E.usedTimes++),this}remove(a){const g=this.materialCache.get(a);for(const w of g)w.usedTimes--,w.usedTimes===0&&this.shaderCache.delete(w.code);return this.materialCache.delete(a),this}getVertexShaderID(a){return this._getShaderStage(a.vertexShader).id}getFragmentShaderID(a){return this._getShaderStage(a.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(a){const g=this.materialCache;let w=g.get(a);return w===void 0&&(w=new Set,g.set(a,w)),w}_getShaderStage(a){const g=this.shaderCache;let w=g.get(a);return w===void 0&&(w=new Fa2(a),g.set(a,w)),w}}class Fa2{constructor(a){this.id=Pa2++,this.code=a,this.usedTimes=0}}function Oa2(D,a,g,w,x,E,L){const O=new HV,G=new La2,h=new Set,X=[],Z=x.logarithmicDepthBuffer,K=x.vertexTextures;let e2=x.precision;const l2={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p2(x2){return h.add(x2),x2===0?"uv":`uv${x2}`}function r2(x2,g2,Y2,st,U2){const lt=st.fog,ht=U2.geometry,mt=x2.isMeshStandardMaterial?st.environment:null,Dt=(x2.isMeshStandardMaterial?g:a).get(x2.envMap||mt),et=Dt&&Dt.mapping===Qc?Dt.image.height:null,gt=l2[x2.type];x2.precision!==null&&(e2=x.getMaxPrecision(x2.precision),e2!==x2.precision&&console.warn("THREE.WebGLProgram.getParameters:",x2.precision,"not supported, using",e2,"instead."));const xt=ht.morphAttributes.position||ht.morphAttributes.normal||ht.morphAttributes.color,ie=xt!==void 0?xt.length:0;let Se=0;ht.morphAttributes.position!==void 0&&(Se=1),ht.morphAttributes.normal!==void 0&&(Se=2),ht.morphAttributes.color!==void 0&&(Se=3);let Re,nt,yt,Yt;if(gt){const an=jo[gt];Re=an.vertexShader,nt=an.fragmentShader}else Re=x2.vertexShader,nt=x2.fragmentShader,G.update(x2),yt=G.getVertexShaderID(x2),Yt=G.getFragmentShaderID(x2);const G2=D.getRenderTarget(),Et=U2.isInstancedMesh===!0,ee=U2.isBatchedMesh===!0,W2=!!x2.map,Oe=!!x2.matcap,ne=!!Dt,on=!!x2.aoMap,fe=!!x2.lightMap,Ve=!!x2.bumpMap,be=!!x2.normalMap,en=!!x2.displacementMap,Hn=!!x2.emissiveMap,F2=!!x2.metalnessMap,w2=!!x2.roughnessMap,rt=x2.anisotropy>0,dt=x2.clearcoat>0,Ct=x2.dispersion>0,Mt=x2.iridescence>0,ye=x2.sheen>0,Vt=x2.transmission>0,zt=rt&&!!x2.anisotropyMap,De=dt&&!!x2.clearcoatMap,Gt=dt&&!!x2.clearcoatNormalMap,ae=dt&&!!x2.clearcoatRoughnessMap,sn=Mt&&!!x2.iridescenceMap,we=Mt&&!!x2.iridescenceThicknessMap,re=ye&&!!x2.sheenColorMap,je=ye&&!!x2.sheenRoughnessMap,Xe=!!x2.specularMap,Cn=!!x2.specularColorMap,We=!!x2.specularIntensityMap,d2=Vt&&!!x2.transmissionMap,X2=Vt&&!!x2.thicknessMap,K2=!!x2.gradientMap,Bt=!!x2.alphaMap,Ot=x2.alphaTest>0,Ne=!!x2.alphaHash,Ze=!!x2.extensions;let Yn=g1;x2.toneMapped&&(G2===null||G2.isXRRenderTarget===!0)&&(Yn=D.toneMapping);const k0={shaderID:gt,shaderType:x2.type,shaderName:x2.name,vertexShader:Re,fragmentShader:nt,defines:x2.defines,customVertexShaderID:yt,customFragmentShaderID:Yt,isRawShaderMaterial:x2.isRawShaderMaterial===!0,glslVersion:x2.glslVersion,precision:e2,batching:ee,instancing:Et,instancingColor:Et&&U2.instanceColor!==null,instancingMorph:Et&&U2.morphTexture!==null,supportsVertexTextures:K,outputColorSpace:G2===null?D.outputColorSpace:G2.isXRRenderTarget===!0?G2.texture.colorSpace:ii,alphaToCoverage:!!x2.alphaToCoverage,map:W2,matcap:Oe,envMap:ne,envMapMode:ne&&Dt.mapping,envMapCubeUVHeight:et,aoMap:on,lightMap:fe,bumpMap:Ve,normalMap:be,displacementMap:K&&en,emissiveMap:Hn,normalMapObjectSpace:be&&x2.normalMapType===I42,normalMapTangentSpace:be&&x2.normalMapType===Xc,metalnessMap:F2,roughnessMap:w2,anisotropy:rt,anisotropyMap:zt,clearcoat:dt,clearcoatMap:De,clearcoatNormalMap:Gt,clearcoatRoughnessMap:ae,dispersion:Ct,iridescence:Mt,iridescenceMap:sn,iridescenceThicknessMap:we,sheen:ye,sheenColorMap:re,sheenRoughnessMap:je,specularMap:Xe,specularColorMap:Cn,specularIntensityMap:We,transmission:Vt,transmissionMap:d2,thicknessMap:X2,gradientMap:K2,opaque:x2.transparent===!1&&x2.blending===ou&&x2.alphaToCoverage===!1,alphaMap:Bt,alphaTest:Ot,alphaHash:Ne,combine:x2.combine,mapUv:W2&&p2(x2.map.channel),aoMapUv:on&&p2(x2.aoMap.channel),lightMapUv:fe&&p2(x2.lightMap.channel),bumpMapUv:Ve&&p2(x2.bumpMap.channel),normalMapUv:be&&p2(x2.normalMap.channel),displacementMapUv:en&&p2(x2.displacementMap.channel),emissiveMapUv:Hn&&p2(x2.emissiveMap.channel),metalnessMapUv:F2&&p2(x2.metalnessMap.channel),roughnessMapUv:w2&&p2(x2.roughnessMap.channel),anisotropyMapUv:zt&&p2(x2.anisotropyMap.channel),clearcoatMapUv:De&&p2(x2.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&p2(x2.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&p2(x2.clearcoatRoughnessMap.channel),iridescenceMapUv:sn&&p2(x2.iridescenceMap.channel),iridescenceThicknessMapUv:we&&p2(x2.iridescenceThicknessMap.channel),sheenColorMapUv:re&&p2(x2.sheenColorMap.channel),sheenRoughnessMapUv:je&&p2(x2.sheenRoughnessMap.channel),specularMapUv:Xe&&p2(x2.specularMap.channel),specularColorMapUv:Cn&&p2(x2.specularColorMap.channel),specularIntensityMapUv:We&&p2(x2.specularIntensityMap.channel),transmissionMapUv:d2&&p2(x2.transmissionMap.channel),thicknessMapUv:X2&&p2(x2.thicknessMap.channel),alphaMapUv:Bt&&p2(x2.alphaMap.channel),vertexTangents:!!ht.attributes.tangent&&(be||rt),vertexColors:x2.vertexColors,vertexAlphas:x2.vertexColors===!0&&!!ht.attributes.color&&ht.attributes.color.itemSize===4,pointsUvs:U2.isPoints===!0&&!!ht.attributes.uv&&(W2||Bt),fog:!!lt,useFog:x2.fog===!0,fogExp2:!!lt&&lt.isFogExp2,flatShading:x2.flatShading===!0,sizeAttenuation:x2.sizeAttenuation===!0,logarithmicDepthBuffer:Z,skinning:U2.isSkinnedMesh===!0,morphTargets:ht.morphAttributes.position!==void 0,morphNormals:ht.morphAttributes.normal!==void 0,morphColors:ht.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:Se,numDirLights:g2.directional.length,numPointLights:g2.point.length,numSpotLights:g2.spot.length,numSpotLightMaps:g2.spotLightMap.length,numRectAreaLights:g2.rectArea.length,numHemiLights:g2.hemi.length,numDirLightShadows:g2.directionalShadowMap.length,numPointLightShadows:g2.pointShadowMap.length,numSpotLightShadows:g2.spotShadowMap.length,numSpotLightShadowsWithMaps:g2.numSpotLightShadowsWithMaps,numLightProbes:g2.numLightProbes,numClippingPlanes:L.numPlanes,numClipIntersection:L.numIntersection,dithering:x2.dithering,shadowMapEnabled:D.shadowMap.enabled&&Y2.length>0,shadowMapType:D.shadowMap.type,toneMapping:Yn,useLegacyLights:D._useLegacyLights,decodeVideoTexture:W2&&x2.map.isVideoTexture===!0&&Pn.getTransfer(x2.map.colorSpace)===$n,premultipliedAlpha:x2.premultipliedAlpha,doubleSided:x2.side===No,flipSided:x2.side===er,useDepthPacking:x2.depthPacking>=0,depthPacking:x2.depthPacking||0,index0AttributeName:x2.index0AttributeName,extensionClipCullDistance:Ze&&x2.extensions.clipCullDistance===!0&&w.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ze&&x2.extensions.multiDraw===!0&&w.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:w.has("KHR_parallel_shader_compile"),customProgramCacheKey:x2.customProgramCacheKey()};return k0.vertexUv1s=h.has(1),k0.vertexUv2s=h.has(2),k0.vertexUv3s=h.has(3),h.clear(),k0}function o2(x2){const g2=[];if(x2.shaderID?g2.push(x2.shaderID):(g2.push(x2.customVertexShaderID),g2.push(x2.customFragmentShaderID)),x2.defines!==void 0)for(const Y2 in x2.defines)g2.push(Y2),g2.push(x2.defines[Y2]);return x2.isRawShaderMaterial===!1&&(k2(g2,x2),h2(g2,x2),g2.push(D.outputColorSpace)),g2.push(x2.customProgramCacheKey),g2.join()}function k2(x2,g2){x2.push(g2.precision),x2.push(g2.outputColorSpace),x2.push(g2.envMapMode),x2.push(g2.envMapCubeUVHeight),x2.push(g2.mapUv),x2.push(g2.alphaMapUv),x2.push(g2.lightMapUv),x2.push(g2.aoMapUv),x2.push(g2.bumpMapUv),x2.push(g2.normalMapUv),x2.push(g2.displacementMapUv),x2.push(g2.emissiveMapUv),x2.push(g2.metalnessMapUv),x2.push(g2.roughnessMapUv),x2.push(g2.anisotropyMapUv),x2.push(g2.clearcoatMapUv),x2.push(g2.clearcoatNormalMapUv),x2.push(g2.clearcoatRoughnessMapUv),x2.push(g2.iridescenceMapUv),x2.push(g2.iridescenceThicknessMapUv),x2.push(g2.sheenColorMapUv),x2.push(g2.sheenRoughnessMapUv),x2.push(g2.specularMapUv),x2.push(g2.specularColorMapUv),x2.push(g2.specularIntensityMapUv),x2.push(g2.transmissionMapUv),x2.push(g2.thicknessMapUv),x2.push(g2.combine),x2.push(g2.fogExp2),x2.push(g2.sizeAttenuation),x2.push(g2.morphTargetsCount),x2.push(g2.morphAttributeCount),x2.push(g2.numDirLights),x2.push(g2.numPointLights),x2.push(g2.numSpotLights),x2.push(g2.numSpotLightMaps),x2.push(g2.numHemiLights),x2.push(g2.numRectAreaLights),x2.push(g2.numDirLightShadows),x2.push(g2.numPointLightShadows),x2.push(g2.numSpotLightShadows),x2.push(g2.numSpotLightShadowsWithMaps),x2.push(g2.numLightProbes),x2.push(g2.shadowMapType),x2.push(g2.toneMapping),x2.push(g2.numClippingPlanes),x2.push(g2.numClipIntersection),x2.push(g2.depthPacking)}function h2(x2,g2){O.disableAll(),g2.supportsVertexTextures&&O.enable(0),g2.instancing&&O.enable(1),g2.instancingColor&&O.enable(2),g2.instancingMorph&&O.enable(3),g2.matcap&&O.enable(4),g2.envMap&&O.enable(5),g2.normalMapObjectSpace&&O.enable(6),g2.normalMapTangentSpace&&O.enable(7),g2.clearcoat&&O.enable(8),g2.iridescence&&O.enable(9),g2.alphaTest&&O.enable(10),g2.vertexColors&&O.enable(11),g2.vertexAlphas&&O.enable(12),g2.vertexUv1s&&O.enable(13),g2.vertexUv2s&&O.enable(14),g2.vertexUv3s&&O.enable(15),g2.vertexTangents&&O.enable(16),g2.anisotropy&&O.enable(17),g2.alphaHash&&O.enable(18),g2.batching&&O.enable(19),g2.dispersion&&O.enable(20),x2.push(O.mask),O.disableAll(),g2.fog&&O.enable(0),g2.useFog&&O.enable(1),g2.flatShading&&O.enable(2),g2.logarithmicDepthBuffer&&O.enable(3),g2.skinning&&O.enable(4),g2.morphTargets&&O.enable(5),g2.morphNormals&&O.enable(6),g2.morphColors&&O.enable(7),g2.premultipliedAlpha&&O.enable(8),g2.shadowMapEnabled&&O.enable(9),g2.useLegacyLights&&O.enable(10),g2.doubleSided&&O.enable(11),g2.flipSided&&O.enable(12),g2.useDepthPacking&&O.enable(13),g2.dithering&&O.enable(14),g2.transmission&&O.enable(15),g2.sheen&&O.enable(16),g2.opaque&&O.enable(17),g2.pointsUvs&&O.enable(18),g2.decodeVideoTexture&&O.enable(19),g2.alphaToCoverage&&O.enable(20),x2.push(O.mask)}function v2(x2){const g2=l2[x2.type];let Y2;if(g2){const st=jo[g2];Y2=vc2.clone(st.uniforms)}else Y2=x2.uniforms;return Y2}function j2(x2,g2){let Y2;for(let st=0,U2=X.length;st<U2;st++){const lt=X[st];if(lt.cacheKey===g2){Y2=lt,++Y2.usedTimes;break}}return Y2===void 0&&(Y2=new Ia2(D,g2,x2,E),X.push(Y2)),Y2}function R2(x2){if(--x2.usedTimes===0){const g2=X.indexOf(x2);X[g2]=X[X.length-1],X.pop(),x2.destroy()}}function D2(x2){G.remove(x2)}function Q2(){G.dispose()}return{getParameters:r2,getProgramCacheKey:o2,getUniforms:v2,acquireProgram:j2,releaseProgram:R2,releaseShaderCache:D2,programs:X,dispose:Q2}}function ja2(){let D=new WeakMap;function a(E){let L=D.get(E);return L===void 0&&(L={},D.set(E,L)),L}function g(E){D.delete(E)}function w(E,L,O){D.get(E)[L]=O}function x(){D=new WeakMap}return{get:a,remove:g,update:w,dispose:x}}function Na2(D,a){return D.groupOrder!==a.groupOrder?D.groupOrder-a.groupOrder:D.renderOrder!==a.renderOrder?D.renderOrder-a.renderOrder:D.material.id!==a.material.id?D.material.id-a.material.id:D.z!==a.z?D.z-a.z:D.id-a.id}function Oz(D,a){return D.groupOrder!==a.groupOrder?D.groupOrder-a.groupOrder:D.renderOrder!==a.renderOrder?D.renderOrder-a.renderOrder:D.z!==a.z?a.z-D.z:D.id-a.id}function jz(){const D=[];let a=0;const g=[],w=[],x=[];function E(){a=0,g.length=0,w.length=0,x.length=0}function L(Z,K,e2,l2,p2,r2){let o2=D[a];return o2===void 0?(o2={id:Z.id,object:Z,geometry:K,material:e2,groupOrder:l2,renderOrder:Z.renderOrder,z:p2,group:r2},D[a]=o2):(o2.id=Z.id,o2.object=Z,o2.geometry=K,o2.material=e2,o2.groupOrder=l2,o2.renderOrder=Z.renderOrder,o2.z=p2,o2.group=r2),a++,o2}function O(Z,K,e2,l2,p2,r2){const o2=L(Z,K,e2,l2,p2,r2);e2.transmission>0?w.push(o2):e2.transparent===!0?x.push(o2):g.push(o2)}function G(Z,K,e2,l2,p2,r2){const o2=L(Z,K,e2,l2,p2,r2);e2.transmission>0?w.unshift(o2):e2.transparent===!0?x.unshift(o2):g.unshift(o2)}function h(Z,K){g.length>1&&g.sort(Z||Na2),w.length>1&&w.sort(K||Oz),x.length>1&&x.sort(K||Oz)}function X(){for(let Z=a,K=D.length;Z<K;Z++){const e2=D[Z];if(e2.id===null)break;e2.id=null,e2.object=null,e2.geometry=null,e2.material=null,e2.group=null}}return{opaque:g,transmissive:w,transparent:x,init:E,push:O,unshift:G,finish:X,sort:h}}function Ua2(){let D=new WeakMap;function a(w,x){const E=D.get(w);let L;return E===void 0?(L=new jz,D.set(w,[L])):x>=E.length?(L=new jz,E.push(L)):L=E[x],L}function g(){D=new WeakMap}return{get:a,dispose:g}}function Ga2(){const D={};return{get:function(a){if(D[a.id]!==void 0)return D[a.id];let g;switch(a.type){case"DirectionalLight":g={direction:new S2,color:new pe};break;case"SpotLight":g={position:new S2,direction:new S2,color:new pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":g={position:new S2,color:new pe,distance:0,decay:0};break;case"HemisphereLight":g={direction:new S2,skyColor:new pe,groundColor:new pe};break;case"RectAreaLight":g={color:new pe,position:new S2,halfWidth:new S2,halfHeight:new S2};break}return D[a.id]=g,g}}}function Wa2(){const D={};return{get:function(a){if(D[a.id]!==void 0)return D[a.id];let g;switch(a.type){case"DirectionalLight":g={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":g={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":g={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return D[a.id]=g,g}}}let Ha2=0;function za2(D,a){return(a.castShadow?2:0)-(D.castShadow?2:0)+(a.map?1:0)-(D.map?1:0)}function Va2(D){const a=new Ga2,g=Wa2(),w={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)w.probe.push(new S2);const x=new S2,E=new _e,L=new _e;function O(h,X){let Z=0,K=0,e2=0;for(let Y2=0;Y2<9;Y2++)w.probe[Y2].set(0,0,0);let l2=0,p2=0,r2=0,o2=0,k2=0,h2=0,v2=0,j2=0,R2=0,D2=0,Q2=0;h.sort(za2);const x2=X===!0?Math.PI:1;for(let Y2=0,st=h.length;Y2<st;Y2++){const U2=h[Y2],lt=U2.color,ht=U2.intensity,mt=U2.distance,Dt=U2.shadow&&U2.shadow.map?U2.shadow.map.texture:null;if(U2.isAmbientLight)Z+=lt.r*ht*x2,K+=lt.g*ht*x2,e2+=lt.b*ht*x2;else if(U2.isLightProbe){for(let et=0;et<9;et++)w.probe[et].addScaledVector(U2.sh.coefficients[et],ht);Q2++}else if(U2.isDirectionalLight){const et=a.get(U2);if(et.color.copy(U2.color).multiplyScalar(U2.intensity*x2),U2.castShadow){const gt=U2.shadow,xt=g.get(U2);xt.shadowBias=gt.bias,xt.shadowNormalBias=gt.normalBias,xt.shadowRadius=gt.radius,xt.shadowMapSize=gt.mapSize,w.directionalShadow[l2]=xt,w.directionalShadowMap[l2]=Dt,w.directionalShadowMatrix[l2]=U2.shadow.matrix,h2++}w.directional[l2]=et,l2++}else if(U2.isSpotLight){const et=a.get(U2);et.position.setFromMatrixPosition(U2.matrixWorld),et.color.copy(lt).multiplyScalar(ht*x2),et.distance=mt,et.coneCos=Math.cos(U2.angle),et.penumbraCos=Math.cos(U2.angle*(1-U2.penumbra)),et.decay=U2.decay,w.spot[r2]=et;const gt=U2.shadow;if(U2.map&&(w.spotLightMap[R2]=U2.map,R2++,gt.updateMatrices(U2),U2.castShadow&&D2++),w.spotLightMatrix[r2]=gt.matrix,U2.castShadow){const xt=g.get(U2);xt.shadowBias=gt.bias,xt.shadowNormalBias=gt.normalBias,xt.shadowRadius=gt.radius,xt.shadowMapSize=gt.mapSize,w.spotShadow[r2]=xt,w.spotShadowMap[r2]=Dt,j2++}r2++}else if(U2.isRectAreaLight){const et=a.get(U2);et.color.copy(lt).multiplyScalar(ht),et.halfWidth.set(U2.width*.5,0,0),et.halfHeight.set(0,U2.height*.5,0),w.rectArea[o2]=et,o2++}else if(U2.isPointLight){const et=a.get(U2);if(et.color.copy(U2.color).multiplyScalar(U2.intensity*x2),et.distance=U2.distance,et.decay=U2.decay,U2.castShadow){const gt=U2.shadow,xt=g.get(U2);xt.shadowBias=gt.bias,xt.shadowNormalBias=gt.normalBias,xt.shadowRadius=gt.radius,xt.shadowMapSize=gt.mapSize,xt.shadowCameraNear=gt.camera.near,xt.shadowCameraFar=gt.camera.far,w.pointShadow[p2]=xt,w.pointShadowMap[p2]=Dt,w.pointShadowMatrix[p2]=U2.shadow.matrix,v2++}w.point[p2]=et,p2++}else if(U2.isHemisphereLight){const et=a.get(U2);et.skyColor.copy(U2.color).multiplyScalar(ht*x2),et.groundColor.copy(U2.groundColor).multiplyScalar(ht*x2),w.hemi[k2]=et,k2++}}o2>0&&(D.has("OES_texture_float_linear")===!0?(w.rectAreaLTC1=qt.LTC_FLOAT_1,w.rectAreaLTC2=qt.LTC_FLOAT_2):(w.rectAreaLTC1=qt.LTC_HALF_1,w.rectAreaLTC2=qt.LTC_HALF_2)),w.ambient[0]=Z,w.ambient[1]=K,w.ambient[2]=e2;const g2=w.hash;(g2.directionalLength!==l2||g2.pointLength!==p2||g2.spotLength!==r2||g2.rectAreaLength!==o2||g2.hemiLength!==k2||g2.numDirectionalShadows!==h2||g2.numPointShadows!==v2||g2.numSpotShadows!==j2||g2.numSpotMaps!==R2||g2.numLightProbes!==Q2)&&(w.directional.length=l2,w.spot.length=r2,w.rectArea.length=o2,w.point.length=p2,w.hemi.length=k2,w.directionalShadow.length=h2,w.directionalShadowMap.length=h2,w.pointShadow.length=v2,w.pointShadowMap.length=v2,w.spotShadow.length=j2,w.spotShadowMap.length=j2,w.directionalShadowMatrix.length=h2,w.pointShadowMatrix.length=v2,w.spotLightMatrix.length=j2+R2-D2,w.spotLightMap.length=R2,w.numSpotLightShadowsWithMaps=D2,w.numLightProbes=Q2,g2.directionalLength=l2,g2.pointLength=p2,g2.spotLength=r2,g2.rectAreaLength=o2,g2.hemiLength=k2,g2.numDirectionalShadows=h2,g2.numPointShadows=v2,g2.numSpotShadows=j2,g2.numSpotMaps=R2,g2.numLightProbes=Q2,w.version=Ha2++)}function G(h,X){let Z=0,K=0,e2=0,l2=0,p2=0;const r2=X.matrixWorldInverse;for(let o2=0,k2=h.length;o2<k2;o2++){const h2=h[o2];if(h2.isDirectionalLight){const v2=w.directional[Z];v2.direction.setFromMatrixPosition(h2.matrixWorld),x.setFromMatrixPosition(h2.target.matrixWorld),v2.direction.sub(x),v2.direction.transformDirection(r2),Z++}else if(h2.isSpotLight){const v2=w.spot[e2];v2.position.setFromMatrixPosition(h2.matrixWorld),v2.position.applyMatrix4(r2),v2.direction.setFromMatrixPosition(h2.matrixWorld),x.setFromMatrixPosition(h2.target.matrixWorld),v2.direction.sub(x),v2.direction.transformDirection(r2),e2++}else if(h2.isRectAreaLight){const v2=w.rectArea[l2];v2.position.setFromMatrixPosition(h2.matrixWorld),v2.position.applyMatrix4(r2),L.identity(),E.copy(h2.matrixWorld),E.premultiply(r2),L.extractRotation(E),v2.halfWidth.set(h2.width*.5,0,0),v2.halfHeight.set(0,h2.height*.5,0),v2.halfWidth.applyMatrix4(L),v2.halfHeight.applyMatrix4(L),l2++}else if(h2.isPointLight){const v2=w.point[K];v2.position.setFromMatrixPosition(h2.matrixWorld),v2.position.applyMatrix4(r2),K++}else if(h2.isHemisphereLight){const v2=w.hemi[p2];v2.direction.setFromMatrixPosition(h2.matrixWorld),v2.direction.transformDirection(r2),p2++}}}return{setup:O,setupView:G,state:w}}function Nz(D){const a=new Va2(D),g=[],w=[];function x(X){h.camera=X,g.length=0,w.length=0}function E(X){g.push(X)}function L(X){w.push(X)}function O(X){a.setup(g,X)}function G(X){a.setupView(g,X)}const h={lightsArray:g,shadowsArray:w,camera:null,lights:a,transmissionRenderTarget:{}};return{init:x,state:h,setupLights:O,setupLightsView:G,pushLight:E,pushShadow:L}}function Qa2(D){let a=new WeakMap;function g(x,E=0){const L=a.get(x);let O;return L===void 0?(O=new Nz(D),a.set(x,[O])):E>=L.length?(O=new Nz(D),L.push(O)):O=L[E],O}function w(){a=new WeakMap}return{get:g,dispose:w}}class Ya2 extends kr{constructor(a){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b42,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(a)}copy(a){return super.copy(a),this.depthPacking=a.depthPacking,this.map=a.map,this.alphaMap=a.alphaMap,this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this}}class Xa2 extends kr{constructor(a){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(a)}copy(a){return super.copy(a),this.map=a.map,this.alphaMap=a.alphaMap,this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this}}const Za2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qa2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ja2(D,a,g){let w=new Xa;const x=new Lt,E=new Lt,L=new bn,O=new Ya2({depthPacking:D42}),G=new Xa2,h={},X=g.maxTextureSize,Z={[zo]:er,[er]:zo,[No]:No},K=new v1({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:Za2,fragmentShader:qa2}),e2=K.clone();e2.defines.HORIZONTAL_PASS=1;const l2=new J0;l2.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p2=new q0(l2,K),r2=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xV;let o2=this.type;this.render=function(R2,D2,Q2){if(r2.enabled===!1||r2.autoUpdate===!1&&r2.needsUpdate===!1||R2.length===0)return;const x2=D.getRenderTarget(),g2=D.getActiveCubeFace(),Y2=D.getActiveMipmapLevel(),st=D.state;st.setBlending(A1),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const U2=o2!==Ss&&this.type===Ss,lt=o2===Ss&&this.type!==Ss;for(let ht=0,mt=R2.length;ht<mt;ht++){const Dt=R2[ht],et=Dt.shadow;if(et===void 0){console.warn("THREE.WebGLShadowMap:",Dt,"has no shadow.");continue}if(et.autoUpdate===!1&&et.needsUpdate===!1)continue;x.copy(et.mapSize);const gt=et.getFrameExtents();if(x.multiply(gt),E.copy(et.mapSize),(x.x>X||x.y>X)&&(x.x>X&&(E.x=Math.floor(X/gt.x),x.x=E.x*gt.x,et.mapSize.x=E.x),x.y>X&&(E.y=Math.floor(X/gt.y),x.y=E.y*gt.y,et.mapSize.y=E.y)),et.map===null||U2===!0||lt===!0){const ie=this.type!==Ss?{minFilter:ji,magFilter:ji}:{};et.map!==null&&et.map.dispose(),et.map=new J1(x.x,x.y,ie),et.map.texture.name=Dt.name+".shadowMap",et.camera.updateProjectionMatrix()}D.setRenderTarget(et.map),D.clear();const xt=et.getViewportCount();for(let ie=0;ie<xt;ie++){const Se=et.getViewport(ie);L.set(E.x*Se.x,E.y*Se.y,E.x*Se.z,E.y*Se.w),st.viewport(L),et.updateMatrices(Dt,ie),w=et.getFrustum(),v2(D2,Q2,et.camera,Dt,this.type)}et.isPointLightShadow!==!0&&this.type===Ss&&k2(et,Q2),et.needsUpdate=!1}o2=this.type,r2.needsUpdate=!1,D.setRenderTarget(x2,g2,Y2)};function k2(R2,D2){const Q2=a.update(p2);K.defines.VSM_SAMPLES!==R2.blurSamples&&(K.defines.VSM_SAMPLES=R2.blurSamples,e2.defines.VSM_SAMPLES=R2.blurSamples,K.needsUpdate=!0,e2.needsUpdate=!0),R2.mapPass===null&&(R2.mapPass=new J1(x.x,x.y)),K.uniforms.shadow_pass.value=R2.map.texture,K.uniforms.resolution.value=R2.mapSize,K.uniforms.radius.value=R2.radius,D.setRenderTarget(R2.mapPass),D.clear(),D.renderBufferDirect(D2,null,Q2,K,p2,null),e2.uniforms.shadow_pass.value=R2.mapPass.texture,e2.uniforms.resolution.value=R2.mapSize,e2.uniforms.radius.value=R2.radius,D.setRenderTarget(R2.map),D.clear(),D.renderBufferDirect(D2,null,Q2,e2,p2,null)}function h2(R2,D2,Q2,x2){let g2=null;const Y2=Q2.isPointLight===!0?R2.customDistanceMaterial:R2.customDepthMaterial;if(Y2!==void 0)g2=Y2;else if(g2=Q2.isPointLight===!0?G:O,D.localClippingEnabled&&D2.clipShadows===!0&&Array.isArray(D2.clippingPlanes)&&D2.clippingPlanes.length!==0||D2.displacementMap&&D2.displacementScale!==0||D2.alphaMap&&D2.alphaTest>0||D2.map&&D2.alphaTest>0){const st=g2.uuid,U2=D2.uuid;let lt=h[st];lt===void 0&&(lt={},h[st]=lt);let ht=lt[U2];ht===void 0&&(ht=g2.clone(),lt[U2]=ht,D2.addEventListener("dispose",j2)),g2=ht}if(g2.visible=D2.visible,g2.wireframe=D2.wireframe,x2===Ss?g2.side=D2.shadowSide!==null?D2.shadowSide:D2.side:g2.side=D2.shadowSide!==null?D2.shadowSide:Z[D2.side],g2.alphaMap=D2.alphaMap,g2.alphaTest=D2.alphaTest,g2.map=D2.map,g2.clipShadows=D2.clipShadows,g2.clippingPlanes=D2.clippingPlanes,g2.clipIntersection=D2.clipIntersection,g2.displacementMap=D2.displacementMap,g2.displacementScale=D2.displacementScale,g2.displacementBias=D2.displacementBias,g2.wireframeLinewidth=D2.wireframeLinewidth,g2.linewidth=D2.linewidth,Q2.isPointLight===!0&&g2.isMeshDistanceMaterial===!0){const st=D.properties.get(g2);st.light=Q2}return g2}function v2(R2,D2,Q2,x2,g2){if(R2.visible===!1)return;if(R2.layers.test(D2.layers)&&(R2.isMesh||R2.isLine||R2.isPoints)&&(R2.castShadow||R2.receiveShadow&&g2===Ss)&&(!R2.frustumCulled||w.intersectsObject(R2))){R2.modelViewMatrix.multiplyMatrices(Q2.matrixWorldInverse,R2.matrixWorld);const U2=a.update(R2),lt=R2.material;if(Array.isArray(lt)){const ht=U2.groups;for(let mt=0,Dt=ht.length;mt<Dt;mt++){const et=ht[mt],gt=lt[et.materialIndex];if(gt&&gt.visible){const xt=h2(R2,gt,x2,g2);R2.onBeforeShadow(D,R2,D2,Q2,U2,xt,et),D.renderBufferDirect(Q2,null,U2,xt,R2,et),R2.onAfterShadow(D,R2,D2,Q2,U2,xt,et)}}}else if(lt.visible){const ht=h2(R2,lt,x2,g2);R2.onBeforeShadow(D,R2,D2,Q2,U2,ht,null),D.renderBufferDirect(Q2,null,U2,ht,R2,null),R2.onAfterShadow(D,R2,D2,Q2,U2,ht,null)}}const st=R2.children;for(let U2=0,lt=st.length;U2<lt;U2++)v2(st[U2],D2,Q2,x2,g2)}function j2(R2){R2.target.removeEventListener("dispose",j2);for(const Q2 in h){const x2=h[Q2],g2=R2.target.uuid;g2 in x2&&(x2[g2].dispose(),delete x2[g2])}}}function Ka2(D){function a(){let d2=!1;const X2=new bn;let K2=null;const Bt=new bn(0,0,0,0);return{setMask:function(Ot){K2!==Ot&&!d2&&(D.colorMask(Ot,Ot,Ot,Ot),K2=Ot)},setLocked:function(Ot){d2=Ot},setClear:function(Ot,Ne,Ze,Yn,k0){k0===!0&&(Ot*=Yn,Ne*=Yn,Ze*=Yn),X2.set(Ot,Ne,Ze,Yn),Bt.equals(X2)===!1&&(D.clearColor(Ot,Ne,Ze,Yn),Bt.copy(X2))},reset:function(){d2=!1,K2=null,Bt.set(-1,0,0,0)}}}function g(){let d2=!1,X2=null,K2=null,Bt=null;return{setTest:function(Ot){Ot?Yt(D.DEPTH_TEST):G2(D.DEPTH_TEST)},setMask:function(Ot){X2!==Ot&&!d2&&(D.depthMask(Ot),X2=Ot)},setFunc:function(Ot){if(K2!==Ot){switch(Ot){case n42:D.depthFunc(D.NEVER);break;case i42:D.depthFunc(D.ALWAYS);break;case r42:D.depthFunc(D.LESS);break;case Ec:D.depthFunc(D.LEQUAL);break;case o42:D.depthFunc(D.EQUAL);break;case s42:D.depthFunc(D.GEQUAL);break;case l42:D.depthFunc(D.GREATER);break;case u42:D.depthFunc(D.NOTEQUAL);break;default:D.depthFunc(D.LEQUAL)}K2=Ot}},setLocked:function(Ot){d2=Ot},setClear:function(Ot){Bt!==Ot&&(D.clearDepth(Ot),Bt=Ot)},reset:function(){d2=!1,X2=null,K2=null,Bt=null}}}function w(){let d2=!1,X2=null,K2=null,Bt=null,Ot=null,Ne=null,Ze=null,Yn=null,k0=null;return{setTest:function(an){d2||(an?Yt(D.STENCIL_TEST):G2(D.STENCIL_TEST))},setMask:function(an){X2!==an&&!d2&&(D.stencilMask(an),X2=an)},setFunc:function(an,i0,Un){(K2!==an||Bt!==i0||Ot!==Un)&&(D.stencilFunc(an,i0,Un),K2=an,Bt=i0,Ot=Un)},setOp:function(an,i0,Un){(Ne!==an||Ze!==i0||Yn!==Un)&&(D.stencilOp(an,i0,Un),Ne=an,Ze=i0,Yn=Un)},setLocked:function(an){d2=an},setClear:function(an){k0!==an&&(D.clearStencil(an),k0=an)},reset:function(){d2=!1,X2=null,K2=null,Bt=null,Ot=null,Ne=null,Ze=null,Yn=null,k0=null}}}const x=new a,E=new g,L=new w,O=new WeakMap,G=new WeakMap;let h={},X={},Z=new WeakMap,K=[],e2=null,l2=!1,p2=null,r2=null,o2=null,k2=null,h2=null,v2=null,j2=null,R2=new pe(0,0,0),D2=0,Q2=!1,x2=null,g2=null,Y2=null,st=null,U2=null;const lt=D.getParameter(D.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ht=!1,mt=0;const Dt=D.getParameter(D.VERSION);Dt.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(Dt)[1]),ht=mt>=1):Dt.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(Dt)[1]),ht=mt>=2);let et=null,gt={};const xt=D.getParameter(D.SCISSOR_BOX),ie=D.getParameter(D.VIEWPORT),Se=new bn().fromArray(xt),Re=new bn().fromArray(ie);function nt(d2,X2,K2,Bt){const Ot=new Uint8Array(4),Ne=D.createTexture();D.bindTexture(d2,Ne),D.texParameteri(d2,D.TEXTURE_MIN_FILTER,D.NEAREST),D.texParameteri(d2,D.TEXTURE_MAG_FILTER,D.NEAREST);for(let Ze=0;Ze<K2;Ze++)d2===D.TEXTURE_3D||d2===D.TEXTURE_2D_ARRAY?D.texImage3D(X2,0,D.RGBA,1,1,Bt,0,D.RGBA,D.UNSIGNED_BYTE,Ot):D.texImage2D(X2+Ze,0,D.RGBA,1,1,0,D.RGBA,D.UNSIGNED_BYTE,Ot);return Ne}const yt={};yt[D.TEXTURE_2D]=nt(D.TEXTURE_2D,D.TEXTURE_2D,1),yt[D.TEXTURE_CUBE_MAP]=nt(D.TEXTURE_CUBE_MAP,D.TEXTURE_CUBE_MAP_POSITIVE_X,6),yt[D.TEXTURE_2D_ARRAY]=nt(D.TEXTURE_2D_ARRAY,D.TEXTURE_2D_ARRAY,1,1),yt[D.TEXTURE_3D]=nt(D.TEXTURE_3D,D.TEXTURE_3D,1,1),x.setClear(0,0,0,1),E.setClear(1),L.setClear(0),Yt(D.DEPTH_TEST),E.setFunc(Ec),Ve(!1),be(yH),Yt(D.CULL_FACE),on(A1);function Yt(d2){h[d2]!==!0&&(D.enable(d2),h[d2]=!0)}function G2(d2){h[d2]!==!1&&(D.disable(d2),h[d2]=!1)}function Et(d2,X2){return X[d2]!==X2?(D.bindFramebuffer(d2,X2),X[d2]=X2,d2===D.DRAW_FRAMEBUFFER&&(X[D.FRAMEBUFFER]=X2),d2===D.FRAMEBUFFER&&(X[D.DRAW_FRAMEBUFFER]=X2),!0):!1}function ee(d2,X2){let K2=K,Bt=!1;if(d2){K2=Z.get(X2),K2===void 0&&(K2=[],Z.set(X2,K2));const Ot=d2.textures;if(K2.length!==Ot.length||K2[0]!==D.COLOR_ATTACHMENT0){for(let Ne=0,Ze=Ot.length;Ne<Ze;Ne++)K2[Ne]=D.COLOR_ATTACHMENT0+Ne;K2.length=Ot.length,Bt=!0}}else K2[0]!==D.BACK&&(K2[0]=D.BACK,Bt=!0);Bt&&D.drawBuffers(K2)}function W2(d2){return e2!==d2?(D.useProgram(d2),e2=d2,!0):!1}const Oe={[Z1]:D.FUNC_ADD,[Np2]:D.FUNC_SUBTRACT,[Up2]:D.FUNC_REVERSE_SUBTRACT};Oe[Gp2]=D.MIN,Oe[Wp2]=D.MAX;const ne={[Hp2]:D.ZERO,[zp2]:D.ONE,[Vp2]:D.SRC_COLOR,[wa]:D.SRC_ALPHA,[Jp2]:D.SRC_ALPHA_SATURATE,[Zp2]:D.DST_COLOR,[Yp2]:D.DST_ALPHA,[Qp2]:D.ONE_MINUS_SRC_COLOR,[Ba]:D.ONE_MINUS_SRC_ALPHA,[qp2]:D.ONE_MINUS_DST_COLOR,[Xp2]:D.ONE_MINUS_DST_ALPHA,[Kp2]:D.CONSTANT_COLOR,[$p2]:D.ONE_MINUS_CONSTANT_COLOR,[t42]:D.CONSTANT_ALPHA,[e42]:D.ONE_MINUS_CONSTANT_ALPHA};function on(d2,X2,K2,Bt,Ot,Ne,Ze,Yn,k0,an){if(d2===A1){l2===!0&&(G2(D.BLEND),l2=!1);return}if(l2===!1&&(Yt(D.BLEND),l2=!0),d2!==jp2){if(d2!==p2||an!==Q2){if((r2!==Z1||h2!==Z1)&&(D.blendEquation(D.FUNC_ADD),r2=Z1,h2=Z1),an)switch(d2){case ou:D.blendFuncSeparate(D.ONE,D.ONE_MINUS_SRC_ALPHA,D.ONE,D.ONE_MINUS_SRC_ALPHA);break;case kH:D.blendFunc(D.ONE,D.ONE);break;case vH:D.blendFuncSeparate(D.ZERO,D.ONE_MINUS_SRC_COLOR,D.ZERO,D.ONE);break;case wH:D.blendFuncSeparate(D.ZERO,D.SRC_COLOR,D.ZERO,D.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",d2);break}else switch(d2){case ou:D.blendFuncSeparate(D.SRC_ALPHA,D.ONE_MINUS_SRC_ALPHA,D.ONE,D.ONE_MINUS_SRC_ALPHA);break;case kH:D.blendFunc(D.SRC_ALPHA,D.ONE);break;case vH:D.blendFuncSeparate(D.ZERO,D.ONE_MINUS_SRC_COLOR,D.ZERO,D.ONE);break;case wH:D.blendFunc(D.ZERO,D.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",d2);break}o2=null,k2=null,v2=null,j2=null,R2.set(0,0,0),D2=0,p2=d2,Q2=an}return}Ot=Ot||X2,Ne=Ne||K2,Ze=Ze||Bt,(X2!==r2||Ot!==h2)&&(D.blendEquationSeparate(Oe[X2],Oe[Ot]),r2=X2,h2=Ot),(K2!==o2||Bt!==k2||Ne!==v2||Ze!==j2)&&(D.blendFuncSeparate(ne[K2],ne[Bt],ne[Ne],ne[Ze]),o2=K2,k2=Bt,v2=Ne,j2=Ze),(Yn.equals(R2)===!1||k0!==D2)&&(D.blendColor(Yn.r,Yn.g,Yn.b,k0),R2.copy(Yn),D2=k0),p2=d2,Q2=!1}function fe(d2,X2){d2.side===No?G2(D.CULL_FACE):Yt(D.CULL_FACE);let K2=d2.side===er;X2&&(K2=!K2),Ve(K2),d2.blending===ou&&d2.transparent===!1?on(A1):on(d2.blending,d2.blendEquation,d2.blendSrc,d2.blendDst,d2.blendEquationAlpha,d2.blendSrcAlpha,d2.blendDstAlpha,d2.blendColor,d2.blendAlpha,d2.premultipliedAlpha),E.setFunc(d2.depthFunc),E.setTest(d2.depthTest),E.setMask(d2.depthWrite),x.setMask(d2.colorWrite);const Bt=d2.stencilWrite;L.setTest(Bt),Bt&&(L.setMask(d2.stencilWriteMask),L.setFunc(d2.stencilFunc,d2.stencilRef,d2.stencilFuncMask),L.setOp(d2.stencilFail,d2.stencilZFail,d2.stencilZPass)),Hn(d2.polygonOffset,d2.polygonOffsetFactor,d2.polygonOffsetUnits),d2.alphaToCoverage===!0?Yt(D.SAMPLE_ALPHA_TO_COVERAGE):G2(D.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(d2){x2!==d2&&(d2?D.frontFace(D.CW):D.frontFace(D.CCW),x2=d2)}function be(d2){d2!==Lp2?(Yt(D.CULL_FACE),d2!==g2&&(d2===yH?D.cullFace(D.BACK):d2===Fp2?D.cullFace(D.FRONT):D.cullFace(D.FRONT_AND_BACK))):G2(D.CULL_FACE),g2=d2}function en(d2){d2!==Y2&&(ht&&D.lineWidth(d2),Y2=d2)}function Hn(d2,X2,K2){d2?(Yt(D.POLYGON_OFFSET_FILL),(st!==X2||U2!==K2)&&(D.polygonOffset(X2,K2),st=X2,U2=K2)):G2(D.POLYGON_OFFSET_FILL)}function F2(d2){d2?Yt(D.SCISSOR_TEST):G2(D.SCISSOR_TEST)}function w2(d2){d2===void 0&&(d2=D.TEXTURE0+lt-1),et!==d2&&(D.activeTexture(d2),et=d2)}function rt(d2,X2,K2){K2===void 0&&(et===null?K2=D.TEXTURE0+lt-1:K2=et);let Bt=gt[K2];Bt===void 0&&(Bt={type:void 0,texture:void 0},gt[K2]=Bt),(Bt.type!==d2||Bt.texture!==X2)&&(et!==K2&&(D.activeTexture(K2),et=K2),D.bindTexture(d2,X2||yt[d2]),Bt.type=d2,Bt.texture=X2)}function dt(){const d2=gt[et];d2!==void 0&&d2.type!==void 0&&(D.bindTexture(d2.type,null),d2.type=void 0,d2.texture=void 0)}function Ct(){try{D.compressedTexImage2D.apply(D,arguments)}catch(d2){console.error("THREE.WebGLState:",d2)}}function Mt(){try{D.compressedTexImage3D.apply(D,arguments)}catch(d2){console.error("THREE.WebGLState:",d2)}}function ye(){try{D.texSubImage2D.apply(D,arguments)}catch(d2){console.error("THREE.WebGLState:",d2)}}function Vt(){try{D.texSubImage3D.apply(D,arguments)}catch(d2){console.error("THREE.WebGLState:",d2)}}function zt(){try{D.compressedTexSubImage2D.apply(D,arguments)}catch(d2){console.error("THREE.WebGLState:",d2)}}function De(){try{D.compressedTexSubImage3D.apply(D,arguments)}catch(d2){console.error("THREE.WebGLState:",d2)}}function Gt(){try{D.texStorage2D.apply(D,arguments)}catch(d2){console.error("THREE.WebGLState:",d2)}}function ae(){try{D.texStorage3D.apply(D,arguments)}catch(d2){console.error("THREE.WebGLState:",d2)}}function sn(){try{D.texImage2D.apply(D,arguments)}catch(d2){console.error("THREE.WebGLState:",d2)}}function we(){try{D.texImage3D.apply(D,arguments)}catch(d2){console.error("THREE.WebGLState:",d2)}}function re(d2){Se.equals(d2)===!1&&(D.scissor(d2.x,d2.y,d2.z,d2.w),Se.copy(d2))}function je(d2){Re.equals(d2)===!1&&(D.viewport(d2.x,d2.y,d2.z,d2.w),Re.copy(d2))}function Xe(d2,X2){let K2=G.get(X2);K2===void 0&&(K2=new WeakMap,G.set(X2,K2));let Bt=K2.get(d2);Bt===void 0&&(Bt=D.getUniformBlockIndex(X2,d2.name),K2.set(d2,Bt))}function Cn(d2,X2){const Bt=G.get(X2).get(d2);O.get(X2)!==Bt&&(D.uniformBlockBinding(X2,Bt,d2.__bindingPointIndex),O.set(X2,Bt))}function We(){D.disable(D.BLEND),D.disable(D.CULL_FACE),D.disable(D.DEPTH_TEST),D.disable(D.POLYGON_OFFSET_FILL),D.disable(D.SCISSOR_TEST),D.disable(D.STENCIL_TEST),D.disable(D.SAMPLE_ALPHA_TO_COVERAGE),D.blendEquation(D.FUNC_ADD),D.blendFunc(D.ONE,D.ZERO),D.blendFuncSeparate(D.ONE,D.ZERO,D.ONE,D.ZERO),D.blendColor(0,0,0,0),D.colorMask(!0,!0,!0,!0),D.clearColor(0,0,0,0),D.depthMask(!0),D.depthFunc(D.LESS),D.clearDepth(1),D.stencilMask(4294967295),D.stencilFunc(D.ALWAYS,0,4294967295),D.stencilOp(D.KEEP,D.KEEP,D.KEEP),D.clearStencil(0),D.cullFace(D.BACK),D.frontFace(D.CCW),D.polygonOffset(0,0),D.activeTexture(D.TEXTURE0),D.bindFramebuffer(D.FRAMEBUFFER,null),D.bindFramebuffer(D.DRAW_FRAMEBUFFER,null),D.bindFramebuffer(D.READ_FRAMEBUFFER,null),D.useProgram(null),D.lineWidth(1),D.scissor(0,0,D.canvas.width,D.canvas.height),D.viewport(0,0,D.canvas.width,D.canvas.height),h={},et=null,gt={},X={},Z=new WeakMap,K=[],e2=null,l2=!1,p2=null,r2=null,o2=null,k2=null,h2=null,v2=null,j2=null,R2=new pe(0,0,0),D2=0,Q2=!1,x2=null,g2=null,Y2=null,st=null,U2=null,Se.set(0,0,D.canvas.width,D.canvas.height),Re.set(0,0,D.canvas.width,D.canvas.height),x.reset(),E.reset(),L.reset()}return{buffers:{color:x,depth:E,stencil:L},enable:Yt,disable:G2,bindFramebuffer:Et,drawBuffers:ee,useProgram:W2,setBlending:on,setMaterial:fe,setFlipSided:Ve,setCullFace:be,setLineWidth:en,setPolygonOffset:Hn,setScissorTest:F2,activeTexture:w2,bindTexture:rt,unbindTexture:dt,compressedTexImage2D:Ct,compressedTexImage3D:Mt,texImage2D:sn,texImage3D:we,updateUBOMapping:Xe,uniformBlockBinding:Cn,texStorage2D:Gt,texStorage3D:ae,texSubImage2D:ye,texSubImage3D:Vt,compressedTexSubImage2D:zt,compressedTexSubImage3D:De,scissor:re,viewport:je,reset:We}}function $a2(D,a,g,w,x,E,L){const O=a.has("WEBGL_multisampled_render_to_texture")?a.get("WEBGL_multisampled_render_to_texture"):null,G=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Lt,X=new WeakMap;let Z;const K=new WeakMap;let e2=!1;try{e2=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function l2(F2,w2){return e2?new OffscreenCanvas(F2,w2):zf("canvas")}function p2(F2,w2,rt){let dt=1;const Ct=Hn(F2);if((Ct.width>rt||Ct.height>rt)&&(dt=rt/Math.max(Ct.width,Ct.height)),dt<1)if(typeof HTMLImageElement<"u"&&F2 instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F2 instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F2 instanceof ImageBitmap||typeof VideoFrame<"u"&&F2 instanceof VideoFrame){const Mt=Math.floor(dt*Ct.width),ye=Math.floor(dt*Ct.height);Z===void 0&&(Z=l2(Mt,ye));const Vt=w2?l2(Mt,ye):Z;return Vt.width=Mt,Vt.height=ye,Vt.getContext("2d").drawImage(F2,0,0,Mt,ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ct.width+"x"+Ct.height+") to ("+Mt+"x"+ye+")."),Vt}else return"data"in F2&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ct.width+"x"+Ct.height+")."),F2;return F2}function r2(F2){return F2.generateMipmaps&&F2.minFilter!==ji&&F2.minFilter!==yr}function o2(F2){D.generateMipmap(F2)}function k2(F2,w2,rt,dt,Ct=!1){if(F2!==null){if(D[F2]!==void 0)return D[F2];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F2+"'")}let Mt=w2;if(w2===D.RED&&(rt===D.FLOAT&&(Mt=D.R32F),rt===D.HALF_FLOAT&&(Mt=D.R16F),rt===D.UNSIGNED_BYTE&&(Mt=D.R8)),w2===D.RED_INTEGER&&(rt===D.UNSIGNED_BYTE&&(Mt=D.R8UI),rt===D.UNSIGNED_SHORT&&(Mt=D.R16UI),rt===D.UNSIGNED_INT&&(Mt=D.R32UI),rt===D.BYTE&&(Mt=D.R8I),rt===D.SHORT&&(Mt=D.R16I),rt===D.INT&&(Mt=D.R32I)),w2===D.RG&&(rt===D.FLOAT&&(Mt=D.RG32F),rt===D.HALF_FLOAT&&(Mt=D.RG16F),rt===D.UNSIGNED_BYTE&&(Mt=D.RG8)),w2===D.RG_INTEGER&&(rt===D.UNSIGNED_BYTE&&(Mt=D.RG8UI),rt===D.UNSIGNED_SHORT&&(Mt=D.RG16UI),rt===D.UNSIGNED_INT&&(Mt=D.RG32UI),rt===D.BYTE&&(Mt=D.RG8I),rt===D.SHORT&&(Mt=D.RG16I),rt===D.INT&&(Mt=D.RG32I)),w2===D.RGB&&rt===D.UNSIGNED_INT_5_9_9_9_REV&&(Mt=D.RGB9_E5),w2===D.RGBA){const ye=Ct?Ic:Pn.getTransfer(dt);rt===D.FLOAT&&(Mt=D.RGBA32F),rt===D.HALF_FLOAT&&(Mt=D.RGBA16F),rt===D.UNSIGNED_BYTE&&(Mt=ye===$n?D.SRGB8_ALPHA8:D.RGBA8),rt===D.UNSIGNED_SHORT_4_4_4_4&&(Mt=D.RGBA4),rt===D.UNSIGNED_SHORT_5_5_5_1&&(Mt=D.RGB5_A1)}return(Mt===D.R16F||Mt===D.R32F||Mt===D.RG16F||Mt===D.RG32F||Mt===D.RGBA16F||Mt===D.RGBA32F)&&a.get("EXT_color_buffer_float"),Mt}function h2(F2,w2){return r2(F2)===!0||F2.isFramebufferTexture&&F2.minFilter!==ji&&F2.minFilter!==yr?Math.log2(Math.max(w2.width,w2.height))+1:F2.mipmaps!==void 0&&F2.mipmaps.length>0?F2.mipmaps.length:F2.isCompressedTexture&&Array.isArray(F2.image)?w2.mipmaps.length:1}function v2(F2){const w2=F2.target;w2.removeEventListener("dispose",v2),R2(w2),w2.isVideoTexture&&X.delete(w2)}function j2(F2){const w2=F2.target;w2.removeEventListener("dispose",j2),Q2(w2)}function R2(F2){const w2=w.get(F2);if(w2.__webglInit===void 0)return;const rt=F2.source,dt=K.get(rt);if(dt){const Ct=dt[w2.__cacheKey];Ct.usedTimes--,Ct.usedTimes===0&&D2(F2),Object.keys(dt).length===0&&K.delete(rt)}w.remove(F2)}function D2(F2){const w2=w.get(F2);D.deleteTexture(w2.__webglTexture);const rt=F2.source,dt=K.get(rt);delete dt[w2.__cacheKey],L.memory.textures--}function Q2(F2){const w2=w.get(F2);if(F2.depthTexture&&F2.depthTexture.dispose(),F2.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(w2.__webglFramebuffer[dt]))for(let Ct=0;Ct<w2.__webglFramebuffer[dt].length;Ct++)D.deleteFramebuffer(w2.__webglFramebuffer[dt][Ct]);else D.deleteFramebuffer(w2.__webglFramebuffer[dt]);w2.__webglDepthbuffer&&D.deleteRenderbuffer(w2.__webglDepthbuffer[dt])}else{if(Array.isArray(w2.__webglFramebuffer))for(let dt=0;dt<w2.__webglFramebuffer.length;dt++)D.deleteFramebuffer(w2.__webglFramebuffer[dt]);else D.deleteFramebuffer(w2.__webglFramebuffer);if(w2.__webglDepthbuffer&&D.deleteRenderbuffer(w2.__webglDepthbuffer),w2.__webglMultisampledFramebuffer&&D.deleteFramebuffer(w2.__webglMultisampledFramebuffer),w2.__webglColorRenderbuffer)for(let dt=0;dt<w2.__webglColorRenderbuffer.length;dt++)w2.__webglColorRenderbuffer[dt]&&D.deleteRenderbuffer(w2.__webglColorRenderbuffer[dt]);w2.__webglDepthRenderbuffer&&D.deleteRenderbuffer(w2.__webglDepthRenderbuffer)}const rt=F2.textures;for(let dt=0,Ct=rt.length;dt<Ct;dt++){const Mt=w.get(rt[dt]);Mt.__webglTexture&&(D.deleteTexture(Mt.__webglTexture),L.memory.textures--),w.remove(rt[dt])}w.remove(F2)}let x2=0;function g2(){x2=0}function Y2(){const F2=x2;return F2>=x.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F2+" texture units while this GPU supports only "+x.maxTextures),x2+=1,F2}function st(F2){const w2=[];return w2.push(F2.wrapS),w2.push(F2.wrapT),w2.push(F2.wrapR||0),w2.push(F2.magFilter),w2.push(F2.minFilter),w2.push(F2.anisotropy),w2.push(F2.internalFormat),w2.push(F2.format),w2.push(F2.type),w2.push(F2.generateMipmaps),w2.push(F2.premultiplyAlpha),w2.push(F2.flipY),w2.push(F2.unpackAlignment),w2.push(F2.colorSpace),w2.join()}function U2(F2,w2){const rt=w.get(F2);if(F2.isVideoTexture&&be(F2),F2.isRenderTargetTexture===!1&&F2.version>0&&rt.__version!==F2.version){const dt=F2.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Se(rt,F2,w2);return}}g.bindTexture(D.TEXTURE_2D,rt.__webglTexture,D.TEXTURE0+w2)}function lt(F2,w2){const rt=w.get(F2);if(F2.version>0&&rt.__version!==F2.version){Se(rt,F2,w2);return}g.bindTexture(D.TEXTURE_2D_ARRAY,rt.__webglTexture,D.TEXTURE0+w2)}function ht(F2,w2){const rt=w.get(F2);if(F2.version>0&&rt.__version!==F2.version){Se(rt,F2,w2);return}g.bindTexture(D.TEXTURE_3D,rt.__webglTexture,D.TEXTURE0+w2)}function mt(F2,w2){const rt=w.get(F2);if(F2.version>0&&rt.__version!==F2.version){Re(rt,F2,w2);return}g.bindTexture(D.TEXTURE_CUBE_MAP,rt.__webglTexture,D.TEXTURE0+w2)}const Dt={[y1]:D.REPEAT,[Go]:D.CLAMP_TO_EDGE,[bc]:D.MIRRORED_REPEAT},et={[ji]:D.NEAREST,[MV]:D.NEAREST_MIPMAP_NEAREST,[Pf]:D.NEAREST_MIPMAP_LINEAR,[yr]:D.LINEAR,[Sc]:D.LINEAR_MIPMAP_NEAREST,[Cs]:D.LINEAR_MIPMAP_LINEAR},gt={[P42]:D.NEVER,[U42]:D.ALWAYS,[L42]:D.LESS,[jV]:D.LEQUAL,[F42]:D.EQUAL,[N42]:D.GEQUAL,[O42]:D.GREATER,[j42]:D.NOTEQUAL};function xt(F2,w2){if(w2.type===Wo&&a.has("OES_texture_float_linear")===!1&&(w2.magFilter===yr||w2.magFilter===Sc||w2.magFilter===Pf||w2.magFilter===Cs||w2.minFilter===yr||w2.minFilter===Sc||w2.minFilter===Pf||w2.minFilter===Cs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),D.texParameteri(F2,D.TEXTURE_WRAP_S,Dt[w2.wrapS]),D.texParameteri(F2,D.TEXTURE_WRAP_T,Dt[w2.wrapT]),(F2===D.TEXTURE_3D||F2===D.TEXTURE_2D_ARRAY)&&D.texParameteri(F2,D.TEXTURE_WRAP_R,Dt[w2.wrapR]),D.texParameteri(F2,D.TEXTURE_MAG_FILTER,et[w2.magFilter]),D.texParameteri(F2,D.TEXTURE_MIN_FILTER,et[w2.minFilter]),w2.compareFunction&&(D.texParameteri(F2,D.TEXTURE_COMPARE_MODE,D.COMPARE_REF_TO_TEXTURE),D.texParameteri(F2,D.TEXTURE_COMPARE_FUNC,gt[w2.compareFunction])),a.has("EXT_texture_filter_anisotropic")===!0){if(w2.magFilter===ji||w2.minFilter!==Pf&&w2.minFilter!==Cs||w2.type===Wo&&a.has("OES_texture_float_linear")===!1)return;if(w2.anisotropy>1||w.get(w2).__currentAnisotropy){const rt=a.get("EXT_texture_filter_anisotropic");D.texParameterf(F2,rt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w2.anisotropy,x.getMaxAnisotropy())),w.get(w2).__currentAnisotropy=w2.anisotropy}}}function ie(F2,w2){let rt=!1;F2.__webglInit===void 0&&(F2.__webglInit=!0,w2.addEventListener("dispose",v2));const dt=w2.source;let Ct=K.get(dt);Ct===void 0&&(Ct={},K.set(dt,Ct));const Mt=st(w2);if(Mt!==F2.__cacheKey){Ct[Mt]===void 0&&(Ct[Mt]={texture:D.createTexture(),usedTimes:0},L.memory.textures++,rt=!0),Ct[Mt].usedTimes++;const ye=Ct[F2.__cacheKey];ye!==void 0&&(Ct[F2.__cacheKey].usedTimes--,ye.usedTimes===0&&D2(w2)),F2.__cacheKey=Mt,F2.__webglTexture=Ct[Mt].texture}return rt}function Se(F2,w2,rt){let dt=D.TEXTURE_2D;(w2.isDataArrayTexture||w2.isCompressedArrayTexture)&&(dt=D.TEXTURE_2D_ARRAY),w2.isData3DTexture&&(dt=D.TEXTURE_3D);const Ct=ie(F2,w2),Mt=w2.source;g.bindTexture(dt,F2.__webglTexture,D.TEXTURE0+rt);const ye=w.get(Mt);if(Mt.version!==ye.__version||Ct===!0){g.activeTexture(D.TEXTURE0+rt);const Vt=Pn.getPrimaries(Pn.workingColorSpace),zt=w2.colorSpace===m1?null:Pn.getPrimaries(w2.colorSpace),De=w2.colorSpace===m1||Vt===zt?D.NONE:D.BROWSER_DEFAULT_WEBGL;D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,w2.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w2.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,w2.unpackAlignment),D.pixelStorei(D.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let Gt=p2(w2.image,!1,x.maxTextureSize);Gt=en(w2,Gt);const ae=E.convert(w2.format,w2.colorSpace),sn=E.convert(w2.type);let we=k2(w2.internalFormat,ae,sn,w2.colorSpace,w2.isVideoTexture);xt(dt,w2);let re;const je=w2.mipmaps,Xe=w2.isVideoTexture!==!0,Cn=ye.__version===void 0||Ct===!0,We=Mt.dataReady,d2=h2(w2,Gt);if(w2.isDepthTexture)we=D.DEPTH_COMPONENT16,w2.type===Wo?we=D.DEPTH_COMPONENT32F:w2.type===au?we=D.DEPTH_COMPONENT24:w2.type===qf&&(we=D.DEPTH24_STENCIL8),Cn&&(Xe?g.texStorage2D(D.TEXTURE_2D,1,we,Gt.width,Gt.height):g.texImage2D(D.TEXTURE_2D,0,we,Gt.width,Gt.height,0,ae,sn,null));else if(w2.isDataTexture)if(je.length>0){Xe&&Cn&&g.texStorage2D(D.TEXTURE_2D,d2,we,je[0].width,je[0].height);for(let X2=0,K2=je.length;X2<K2;X2++)re=je[X2],Xe?We&&g.texSubImage2D(D.TEXTURE_2D,X2,0,0,re.width,re.height,ae,sn,re.data):g.texImage2D(D.TEXTURE_2D,X2,we,re.width,re.height,0,ae,sn,re.data);w2.generateMipmaps=!1}else Xe?(Cn&&g.texStorage2D(D.TEXTURE_2D,d2,we,Gt.width,Gt.height),We&&g.texSubImage2D(D.TEXTURE_2D,0,0,0,Gt.width,Gt.height,ae,sn,Gt.data)):g.texImage2D(D.TEXTURE_2D,0,we,Gt.width,Gt.height,0,ae,sn,Gt.data);else if(w2.isCompressedTexture)if(w2.isCompressedArrayTexture){Xe&&Cn&&g.texStorage3D(D.TEXTURE_2D_ARRAY,d2,we,je[0].width,je[0].height,Gt.depth);for(let X2=0,K2=je.length;X2<K2;X2++)re=je[X2],w2.format!==ho?ae!==null?Xe?We&&g.compressedTexSubImage3D(D.TEXTURE_2D_ARRAY,X2,0,0,0,re.width,re.height,Gt.depth,ae,re.data,0,0):g.compressedTexImage3D(D.TEXTURE_2D_ARRAY,X2,we,re.width,re.height,Gt.depth,0,re.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?We&&g.texSubImage3D(D.TEXTURE_2D_ARRAY,X2,0,0,0,re.width,re.height,Gt.depth,ae,sn,re.data):g.texImage3D(D.TEXTURE_2D_ARRAY,X2,we,re.width,re.height,Gt.depth,0,ae,sn,re.data)}else{Xe&&Cn&&g.texStorage2D(D.TEXTURE_2D,d2,we,je[0].width,je[0].height);for(let X2=0,K2=je.length;X2<K2;X2++)re=je[X2],w2.format!==ho?ae!==null?Xe?We&&g.compressedTexSubImage2D(D.TEXTURE_2D,X2,0,0,re.width,re.height,ae,re.data):g.compressedTexImage2D(D.TEXTURE_2D,X2,we,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?We&&g.texSubImage2D(D.TEXTURE_2D,X2,0,0,re.width,re.height,ae,sn,re.data):g.texImage2D(D.TEXTURE_2D,X2,we,re.width,re.height,0,ae,sn,re.data)}else if(w2.isDataArrayTexture)Xe?(Cn&&g.texStorage3D(D.TEXTURE_2D_ARRAY,d2,we,Gt.width,Gt.height,Gt.depth),We&&g.texSubImage3D(D.TEXTURE_2D_ARRAY,0,0,0,0,Gt.width,Gt.height,Gt.depth,ae,sn,Gt.data)):g.texImage3D(D.TEXTURE_2D_ARRAY,0,we,Gt.width,Gt.height,Gt.depth,0,ae,sn,Gt.data);else if(w2.isData3DTexture)Xe?(Cn&&g.texStorage3D(D.TEXTURE_3D,d2,we,Gt.width,Gt.height,Gt.depth),We&&g.texSubImage3D(D.TEXTURE_3D,0,0,0,0,Gt.width,Gt.height,Gt.depth,ae,sn,Gt.data)):g.texImage3D(D.TEXTURE_3D,0,we,Gt.width,Gt.height,Gt.depth,0,ae,sn,Gt.data);else if(w2.isFramebufferTexture){if(Cn)if(Xe)g.texStorage2D(D.TEXTURE_2D,d2,we,Gt.width,Gt.height);else{let X2=Gt.width,K2=Gt.height;for(let Bt=0;Bt<d2;Bt++)g.texImage2D(D.TEXTURE_2D,Bt,we,X2,K2,0,ae,sn,null),X2>>=1,K2>>=1}}else if(je.length>0){if(Xe&&Cn){const X2=Hn(je[0]);g.texStorage2D(D.TEXTURE_2D,d2,we,X2.width,X2.height)}for(let X2=0,K2=je.length;X2<K2;X2++)re=je[X2],Xe?We&&g.texSubImage2D(D.TEXTURE_2D,X2,0,0,ae,sn,re):g.texImage2D(D.TEXTURE_2D,X2,we,ae,sn,re);w2.generateMipmaps=!1}else if(Xe){if(Cn){const X2=Hn(Gt);g.texStorage2D(D.TEXTURE_2D,d2,we,X2.width,X2.height)}We&&g.texSubImage2D(D.TEXTURE_2D,0,0,0,ae,sn,Gt)}else g.texImage2D(D.TEXTURE_2D,0,we,ae,sn,Gt);r2(w2)&&o2(dt),ye.__version=Mt.version,w2.onUpdate&&w2.onUpdate(w2)}F2.__version=w2.version}function Re(F2,w2,rt){if(w2.image.length!==6)return;const dt=ie(F2,w2),Ct=w2.source;g.bindTexture(D.TEXTURE_CUBE_MAP,F2.__webglTexture,D.TEXTURE0+rt);const Mt=w.get(Ct);if(Ct.version!==Mt.__version||dt===!0){g.activeTexture(D.TEXTURE0+rt);const ye=Pn.getPrimaries(Pn.workingColorSpace),Vt=w2.colorSpace===m1?null:Pn.getPrimaries(w2.colorSpace),zt=w2.colorSpace===m1||ye===Vt?D.NONE:D.BROWSER_DEFAULT_WEBGL;D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,w2.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w2.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,w2.unpackAlignment),D.pixelStorei(D.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const De=w2.isCompressedTexture||w2.image[0].isCompressedTexture,Gt=w2.image[0]&&w2.image[0].isDataTexture,ae=[];for(let K2=0;K2<6;K2++)!De&&!Gt?ae[K2]=p2(w2.image[K2],!0,x.maxCubemapSize):ae[K2]=Gt?w2.image[K2].image:w2.image[K2],ae[K2]=en(w2,ae[K2]);const sn=ae[0],we=E.convert(w2.format,w2.colorSpace),re=E.convert(w2.type),je=k2(w2.internalFormat,we,re,w2.colorSpace),Xe=w2.isVideoTexture!==!0,Cn=Mt.__version===void 0||dt===!0,We=Ct.dataReady;let d2=h2(w2,sn);xt(D.TEXTURE_CUBE_MAP,w2);let X2;if(De){Xe&&Cn&&g.texStorage2D(D.TEXTURE_CUBE_MAP,d2,je,sn.width,sn.height);for(let K2=0;K2<6;K2++){X2=ae[K2].mipmaps;for(let Bt=0;Bt<X2.length;Bt++){const Ot=X2[Bt];w2.format!==ho?we!==null?Xe?We&&g.compressedTexSubImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+K2,Bt,0,0,Ot.width,Ot.height,we,Ot.data):g.compressedTexImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+K2,Bt,je,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?We&&g.texSubImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+K2,Bt,0,0,Ot.width,Ot.height,we,re,Ot.data):g.texImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+K2,Bt,je,Ot.width,Ot.height,0,we,re,Ot.data)}}}else{if(X2=w2.mipmaps,Xe&&Cn){X2.length>0&&d2++;const K2=Hn(ae[0]);g.texStorage2D(D.TEXTURE_CUBE_MAP,d2,je,K2.width,K2.height)}for(let K2=0;K2<6;K2++)if(Gt){Xe?We&&g.texSubImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+K2,0,0,0,ae[K2].width,ae[K2].height,we,re,ae[K2].data):g.texImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+K2,0,je,ae[K2].width,ae[K2].height,0,we,re,ae[K2].data);for(let Bt=0;Bt<X2.length;Bt++){const Ne=X2[Bt].image[K2].image;Xe?We&&g.texSubImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+K2,Bt+1,0,0,Ne.width,Ne.height,we,re,Ne.data):g.texImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+K2,Bt+1,je,Ne.width,Ne.height,0,we,re,Ne.data)}}else{Xe?We&&g.texSubImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+K2,0,0,0,we,re,ae[K2]):g.texImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+K2,0,je,we,re,ae[K2]);for(let Bt=0;Bt<X2.length;Bt++){const Ot=X2[Bt];Xe?We&&g.texSubImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+K2,Bt+1,0,0,we,re,Ot.image[K2]):g.texImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+K2,Bt+1,je,we,re,Ot.image[K2])}}}r2(w2)&&o2(D.TEXTURE_CUBE_MAP),Mt.__version=Ct.version,w2.onUpdate&&w2.onUpdate(w2)}F2.__version=w2.version}function nt(F2,w2,rt,dt,Ct,Mt){const ye=E.convert(rt.format,rt.colorSpace),Vt=E.convert(rt.type),zt=k2(rt.internalFormat,ye,Vt,rt.colorSpace);if(!w.get(w2).__hasExternalTextures){const Gt=Math.max(1,w2.width>>Mt),ae=Math.max(1,w2.height>>Mt);Ct===D.TEXTURE_3D||Ct===D.TEXTURE_2D_ARRAY?g.texImage3D(Ct,Mt,zt,Gt,ae,w2.depth,0,ye,Vt,null):g.texImage2D(Ct,Mt,zt,Gt,ae,0,ye,Vt,null)}g.bindFramebuffer(D.FRAMEBUFFER,F2),Ve(w2)?O.framebufferTexture2DMultisampleEXT(D.FRAMEBUFFER,dt,Ct,w.get(rt).__webglTexture,0,fe(w2)):(Ct===D.TEXTURE_2D||Ct>=D.TEXTURE_CUBE_MAP_POSITIVE_X&&Ct<=D.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&D.framebufferTexture2D(D.FRAMEBUFFER,dt,Ct,w.get(rt).__webglTexture,Mt),g.bindFramebuffer(D.FRAMEBUFFER,null)}function yt(F2,w2,rt){if(D.bindRenderbuffer(D.RENDERBUFFER,F2),w2.depthBuffer&&!w2.stencilBuffer){let dt=D.DEPTH_COMPONENT24;if(rt||Ve(w2)){const Ct=w2.depthTexture;Ct&&Ct.isDepthTexture&&(Ct.type===Wo?dt=D.DEPTH_COMPONENT32F:Ct.type===au&&(dt=D.DEPTH_COMPONENT24));const Mt=fe(w2);Ve(w2)?O.renderbufferStorageMultisampleEXT(D.RENDERBUFFER,Mt,dt,w2.width,w2.height):D.renderbufferStorageMultisample(D.RENDERBUFFER,Mt,dt,w2.width,w2.height)}else D.renderbufferStorage(D.RENDERBUFFER,dt,w2.width,w2.height);D.framebufferRenderbuffer(D.FRAMEBUFFER,D.DEPTH_ATTACHMENT,D.RENDERBUFFER,F2)}else if(w2.depthBuffer&&w2.stencilBuffer){const dt=fe(w2);rt&&Ve(w2)===!1?D.renderbufferStorageMultisample(D.RENDERBUFFER,dt,D.DEPTH24_STENCIL8,w2.width,w2.height):Ve(w2)?O.renderbufferStorageMultisampleEXT(D.RENDERBUFFER,dt,D.DEPTH24_STENCIL8,w2.width,w2.height):D.renderbufferStorage(D.RENDERBUFFER,D.DEPTH_STENCIL,w2.width,w2.height),D.framebufferRenderbuffer(D.FRAMEBUFFER,D.DEPTH_STENCIL_ATTACHMENT,D.RENDERBUFFER,F2)}else{const dt=w2.textures;for(let Ct=0;Ct<dt.length;Ct++){const Mt=dt[Ct],ye=E.convert(Mt.format,Mt.colorSpace),Vt=E.convert(Mt.type),zt=k2(Mt.internalFormat,ye,Vt,Mt.colorSpace),De=fe(w2);rt&&Ve(w2)===!1?D.renderbufferStorageMultisample(D.RENDERBUFFER,De,zt,w2.width,w2.height):Ve(w2)?O.renderbufferStorageMultisampleEXT(D.RENDERBUFFER,De,zt,w2.width,w2.height):D.renderbufferStorage(D.RENDERBUFFER,zt,w2.width,w2.height)}}D.bindRenderbuffer(D.RENDERBUFFER,null)}function Yt(F2,w2){if(w2&&w2.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(g.bindFramebuffer(D.FRAMEBUFFER,F2),!(w2.depthTexture&&w2.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!w.get(w2.depthTexture).__webglTexture||w2.depthTexture.image.width!==w2.width||w2.depthTexture.image.height!==w2.height)&&(w2.depthTexture.image.width=w2.width,w2.depthTexture.image.height=w2.height,w2.depthTexture.needsUpdate=!0),U2(w2.depthTexture,0);const dt=w.get(w2.depthTexture).__webglTexture,Ct=fe(w2);if(w2.depthTexture.format===su)Ve(w2)?O.framebufferTexture2DMultisampleEXT(D.FRAMEBUFFER,D.DEPTH_ATTACHMENT,D.TEXTURE_2D,dt,0,Ct):D.framebufferTexture2D(D.FRAMEBUFFER,D.DEPTH_ATTACHMENT,D.TEXTURE_2D,dt,0);else if(w2.depthTexture.format===Wf)Ve(w2)?O.framebufferTexture2DMultisampleEXT(D.FRAMEBUFFER,D.DEPTH_STENCIL_ATTACHMENT,D.TEXTURE_2D,dt,0,Ct):D.framebufferTexture2D(D.FRAMEBUFFER,D.DEPTH_STENCIL_ATTACHMENT,D.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function G2(F2){const w2=w.get(F2),rt=F2.isWebGLCubeRenderTarget===!0;if(F2.depthTexture&&!w2.__autoAllocateDepthBuffer){if(rt)throw new Error("target.depthTexture not supported in Cube render targets");Yt(w2.__webglFramebuffer,F2)}else if(rt){w2.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)g.bindFramebuffer(D.FRAMEBUFFER,w2.__webglFramebuffer[dt]),w2.__webglDepthbuffer[dt]=D.createRenderbuffer(),yt(w2.__webglDepthbuffer[dt],F2,!1)}else g.bindFramebuffer(D.FRAMEBUFFER,w2.__webglFramebuffer),w2.__webglDepthbuffer=D.createRenderbuffer(),yt(w2.__webglDepthbuffer,F2,!1);g.bindFramebuffer(D.FRAMEBUFFER,null)}function Et(F2,w2,rt){const dt=w.get(F2);w2!==void 0&&nt(dt.__webglFramebuffer,F2,F2.texture,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,0),rt!==void 0&&G2(F2)}function ee(F2){const w2=F2.texture,rt=w.get(F2),dt=w.get(w2);F2.addEventListener("dispose",j2);const Ct=F2.textures,Mt=F2.isWebGLCubeRenderTarget===!0,ye=Ct.length>1;if(ye||(dt.__webglTexture===void 0&&(dt.__webglTexture=D.createTexture()),dt.__version=w2.version,L.memory.textures++),Mt){rt.__webglFramebuffer=[];for(let Vt=0;Vt<6;Vt++)if(w2.mipmaps&&w2.mipmaps.length>0){rt.__webglFramebuffer[Vt]=[];for(let zt=0;zt<w2.mipmaps.length;zt++)rt.__webglFramebuffer[Vt][zt]=D.createFramebuffer()}else rt.__webglFramebuffer[Vt]=D.createFramebuffer()}else{if(w2.mipmaps&&w2.mipmaps.length>0){rt.__webglFramebuffer=[];for(let Vt=0;Vt<w2.mipmaps.length;Vt++)rt.__webglFramebuffer[Vt]=D.createFramebuffer()}else rt.__webglFramebuffer=D.createFramebuffer();if(ye)for(let Vt=0,zt=Ct.length;Vt<zt;Vt++){const De=w.get(Ct[Vt]);De.__webglTexture===void 0&&(De.__webglTexture=D.createTexture(),L.memory.textures++)}if(F2.samples>0&&Ve(F2)===!1){rt.__webglMultisampledFramebuffer=D.createFramebuffer(),rt.__webglColorRenderbuffer=[],g.bindFramebuffer(D.FRAMEBUFFER,rt.__webglMultisampledFramebuffer);for(let Vt=0;Vt<Ct.length;Vt++){const zt=Ct[Vt];rt.__webglColorRenderbuffer[Vt]=D.createRenderbuffer(),D.bindRenderbuffer(D.RENDERBUFFER,rt.__webglColorRenderbuffer[Vt]);const De=E.convert(zt.format,zt.colorSpace),Gt=E.convert(zt.type),ae=k2(zt.internalFormat,De,Gt,zt.colorSpace,F2.isXRRenderTarget===!0),sn=fe(F2);D.renderbufferStorageMultisample(D.RENDERBUFFER,sn,ae,F2.width,F2.height),D.framebufferRenderbuffer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Vt,D.RENDERBUFFER,rt.__webglColorRenderbuffer[Vt])}D.bindRenderbuffer(D.RENDERBUFFER,null),F2.depthBuffer&&(rt.__webglDepthRenderbuffer=D.createRenderbuffer(),yt(rt.__webglDepthRenderbuffer,F2,!0)),g.bindFramebuffer(D.FRAMEBUFFER,null)}}if(Mt){g.bindTexture(D.TEXTURE_CUBE_MAP,dt.__webglTexture),xt(D.TEXTURE_CUBE_MAP,w2);for(let Vt=0;Vt<6;Vt++)if(w2.mipmaps&&w2.mipmaps.length>0)for(let zt=0;zt<w2.mipmaps.length;zt++)nt(rt.__webglFramebuffer[Vt][zt],F2,w2,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,zt);else nt(rt.__webglFramebuffer[Vt],F2,w2,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+Vt,0);r2(w2)&&o2(D.TEXTURE_CUBE_MAP),g.unbindTexture()}else if(ye){for(let Vt=0,zt=Ct.length;Vt<zt;Vt++){const De=Ct[Vt],Gt=w.get(De);g.bindTexture(D.TEXTURE_2D,Gt.__webglTexture),xt(D.TEXTURE_2D,De),nt(rt.__webglFramebuffer,F2,De,D.COLOR_ATTACHMENT0+Vt,D.TEXTURE_2D,0),r2(De)&&o2(D.TEXTURE_2D)}g.unbindTexture()}else{let Vt=D.TEXTURE_2D;if((F2.isWebGL3DRenderTarget||F2.isWebGLArrayRenderTarget)&&(Vt=F2.isWebGL3DRenderTarget?D.TEXTURE_3D:D.TEXTURE_2D_ARRAY),g.bindTexture(Vt,dt.__webglTexture),xt(Vt,w2),w2.mipmaps&&w2.mipmaps.length>0)for(let zt=0;zt<w2.mipmaps.length;zt++)nt(rt.__webglFramebuffer[zt],F2,w2,D.COLOR_ATTACHMENT0,Vt,zt);else nt(rt.__webglFramebuffer,F2,w2,D.COLOR_ATTACHMENT0,Vt,0);r2(w2)&&o2(Vt),g.unbindTexture()}F2.depthBuffer&&G2(F2)}function W2(F2){const w2=F2.textures;for(let rt=0,dt=w2.length;rt<dt;rt++){const Ct=w2[rt];if(r2(Ct)){const Mt=F2.isWebGLCubeRenderTarget?D.TEXTURE_CUBE_MAP:D.TEXTURE_2D,ye=w.get(Ct).__webglTexture;g.bindTexture(Mt,ye),o2(Mt),g.unbindTexture()}}}const Oe=[],ne=[];function on(F2){if(F2.samples>0){if(Ve(F2)===!1){const w2=F2.textures,rt=F2.width,dt=F2.height;let Ct=D.COLOR_BUFFER_BIT;const Mt=F2.stencilBuffer?D.DEPTH_STENCIL_ATTACHMENT:D.DEPTH_ATTACHMENT,ye=w.get(F2),Vt=w2.length>1;if(Vt)for(let zt=0;zt<w2.length;zt++)g.bindFramebuffer(D.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),D.framebufferRenderbuffer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+zt,D.RENDERBUFFER,null),g.bindFramebuffer(D.FRAMEBUFFER,ye.__webglFramebuffer),D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0+zt,D.TEXTURE_2D,null,0);g.bindFramebuffer(D.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let zt=0;zt<w2.length;zt++){if(F2.resolveDepthBuffer&&(F2.depthBuffer&&(Ct|=D.DEPTH_BUFFER_BIT),F2.stencilBuffer&&F2.resolveStencilBuffer&&(Ct|=D.STENCIL_BUFFER_BIT)),Vt){D.framebufferRenderbuffer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.RENDERBUFFER,ye.__webglColorRenderbuffer[zt]);const De=w.get(w2[zt]).__webglTexture;D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,De,0)}D.blitFramebuffer(0,0,rt,dt,0,0,rt,dt,Ct,D.NEAREST),G===!0&&(Oe.length=0,ne.length=0,Oe.push(D.COLOR_ATTACHMENT0+zt),F2.depthBuffer&&F2.resolveDepthBuffer===!1&&(Oe.push(Mt),ne.push(Mt),D.invalidateFramebuffer(D.DRAW_FRAMEBUFFER,ne)),D.invalidateFramebuffer(D.READ_FRAMEBUFFER,Oe))}if(g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null),Vt)for(let zt=0;zt<w2.length;zt++){g.bindFramebuffer(D.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),D.framebufferRenderbuffer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+zt,D.RENDERBUFFER,ye.__webglColorRenderbuffer[zt]);const De=w.get(w2[zt]).__webglTexture;g.bindFramebuffer(D.FRAMEBUFFER,ye.__webglFramebuffer),D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0+zt,D.TEXTURE_2D,De,0)}g.bindFramebuffer(D.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(F2.depthBuffer&&F2.resolveDepthBuffer===!1&&G){const w2=F2.stencilBuffer?D.DEPTH_STENCIL_ATTACHMENT:D.DEPTH_ATTACHMENT;D.invalidateFramebuffer(D.DRAW_FRAMEBUFFER,[w2])}}}function fe(F2){return Math.min(x.maxSamples,F2.samples)}function Ve(F2){const w2=w.get(F2);return F2.samples>0&&a.has("WEBGL_multisampled_render_to_texture")===!0&&w2.__useRenderToTexture!==!1}function be(F2){const w2=L.render.frame;X.get(F2)!==w2&&(X.set(F2,w2),F2.update())}function en(F2,w2){const rt=F2.colorSpace,dt=F2.format,Ct=F2.type;return F2.isCompressedTexture===!0||F2.isVideoTexture===!0||rt!==ii&&rt!==m1&&(Pn.getTransfer(rt)===$n?(dt!==ho||Ct!==k1)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",rt)),w2}function Hn(F2){return typeof HTMLImageElement<"u"&&F2 instanceof HTMLImageElement?(h.width=F2.naturalWidth||F2.width,h.height=F2.naturalHeight||F2.height):typeof VideoFrame<"u"&&F2 instanceof VideoFrame?(h.width=F2.displayWidth,h.height=F2.displayHeight):(h.width=F2.width,h.height=F2.height),h}this.allocateTextureUnit=Y2,this.resetTextureUnits=g2,this.setTexture2D=U2,this.setTexture2DArray=lt,this.setTexture3D=ht,this.setTextureCube=mt,this.rebindTextures=Et,this.setupRenderTarget=ee,this.updateRenderTargetMipmap=W2,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=G2,this.setupFrameBufferTexture=nt,this.useMultisampledRTT=Ve}function th2(D,a){function g(w,x=m1){let E;const L=Pn.getTransfer(x);if(w===k1)return D.UNSIGNED_BYTE;if(w===RV)return D.UNSIGNED_SHORT_4_4_4_4;if(w===bV)return D.UNSIGNED_SHORT_5_5_5_1;if(w===v42)return D.UNSIGNED_INT_5_9_9_9_REV;if(w===y42)return D.BYTE;if(w===k42)return D.SHORT;if(w===TV)return D.UNSIGNED_SHORT;if(w===EV)return D.INT;if(w===au)return D.UNSIGNED_INT;if(w===Wo)return D.FLOAT;if(w===Yc)return D.HALF_FLOAT;if(w===w42)return D.ALPHA;if(w===B42)return D.RGB;if(w===ho)return D.RGBA;if(w===S42)return D.LUMINANCE;if(w===x42)return D.LUMINANCE_ALPHA;if(w===su)return D.DEPTH_COMPONENT;if(w===Wf)return D.DEPTH_STENCIL;if(w===DV)return D.RED;if(w===IV)return D.RED_INTEGER;if(w===C42)return D.RG;if(w===PV)return D.RG_INTEGER;if(w===LV)return D.RGBA_INTEGER;if(w===w6||w===B6||w===S6||w===x6)if(L===$n)if(E=a.get("WEBGL_compressed_texture_s3tc_srgb"),E!==null){if(w===w6)return E.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(w===B6)return E.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(w===S6)return E.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(w===x6)return E.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(E=a.get("WEBGL_compressed_texture_s3tc"),E!==null){if(w===w6)return E.COMPRESSED_RGB_S3TC_DXT1_EXT;if(w===B6)return E.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(w===S6)return E.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(w===x6)return E.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(w===SH||w===xH||w===CH||w===MH)if(E=a.get("WEBGL_compressed_texture_pvrtc"),E!==null){if(w===SH)return E.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(w===xH)return E.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(w===CH)return E.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(w===MH)return E.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(w===TH||w===EH||w===RH)if(E=a.get("WEBGL_compressed_texture_etc"),E!==null){if(w===TH||w===EH)return L===$n?E.COMPRESSED_SRGB8_ETC2:E.COMPRESSED_RGB8_ETC2;if(w===RH)return L===$n?E.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:E.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(w===bH||w===DH||w===IH||w===PH||w===LH||w===FH||w===OH||w===jH||w===NH||w===UH||w===GH||w===WH||w===HH||w===zH)if(E=a.get("WEBGL_compressed_texture_astc"),E!==null){if(w===bH)return L===$n?E.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:E.COMPRESSED_RGBA_ASTC_4x4_KHR;if(w===DH)return L===$n?E.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:E.COMPRESSED_RGBA_ASTC_5x4_KHR;if(w===IH)return L===$n?E.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:E.COMPRESSED_RGBA_ASTC_5x5_KHR;if(w===PH)return L===$n?E.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:E.COMPRESSED_RGBA_ASTC_6x5_KHR;if(w===LH)return L===$n?E.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:E.COMPRESSED_RGBA_ASTC_6x6_KHR;if(w===FH)return L===$n?E.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:E.COMPRESSED_RGBA_ASTC_8x5_KHR;if(w===OH)return L===$n?E.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:E.COMPRESSED_RGBA_ASTC_8x6_KHR;if(w===jH)return L===$n?E.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:E.COMPRESSED_RGBA_ASTC_8x8_KHR;if(w===NH)return L===$n?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:E.COMPRESSED_RGBA_ASTC_10x5_KHR;if(w===UH)return L===$n?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:E.COMPRESSED_RGBA_ASTC_10x6_KHR;if(w===GH)return L===$n?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:E.COMPRESSED_RGBA_ASTC_10x8_KHR;if(w===WH)return L===$n?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:E.COMPRESSED_RGBA_ASTC_10x10_KHR;if(w===HH)return L===$n?E.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:E.COMPRESSED_RGBA_ASTC_12x10_KHR;if(w===zH)return L===$n?E.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:E.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(w===C6||w===VH||w===QH)if(E=a.get("EXT_texture_compression_bptc"),E!==null){if(w===C6)return L===$n?E.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:E.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(w===VH)return E.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(w===QH)return E.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(w===M42||w===YH||w===XH||w===ZH)if(E=a.get("EXT_texture_compression_rgtc"),E!==null){if(w===C6)return E.COMPRESSED_RED_RGTC1_EXT;if(w===YH)return E.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(w===XH)return E.COMPRESSED_RED_GREEN_RGTC2_EXT;if(w===ZH)return E.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return w===qf?D.UNSIGNED_INT_24_8:D[w]!==void 0?D[w]:null}return{convert:g}}class eh2 extends Si{constructor(a=[]){super(),this.isArrayCamera=!0,this.cameras=a}}class Ts extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nh2={type:"move"};class K6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S2,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S2),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S2,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S2),this._grip}dispatchEvent(a){return this._targetRay!==null&&this._targetRay.dispatchEvent(a),this._grip!==null&&this._grip.dispatchEvent(a),this._hand!==null&&this._hand.dispatchEvent(a),this}connect(a){if(a&&a.hand){const g=this._hand;if(g)for(const w of a.hand.values())this._getHandJoint(g,w)}return this.dispatchEvent({type:"connected",data:a}),this}disconnect(a){return this.dispatchEvent({type:"disconnected",data:a}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(a,g,w){let x=null,E=null,L=null;const O=this._targetRay,G=this._grip,h=this._hand;if(a&&g.session.visibilityState!=="visible-blurred"){if(h&&a.hand){L=!0;for(const p2 of a.hand.values()){const r2=g.getJointPose(p2,w),o2=this._getHandJoint(h,p2);r2!==null&&(o2.matrix.fromArray(r2.transform.matrix),o2.matrix.decompose(o2.position,o2.rotation,o2.scale),o2.matrixWorldNeedsUpdate=!0,o2.jointRadius=r2.radius),o2.visible=r2!==null}const X=h.joints["index-finger-tip"],Z=h.joints["thumb-tip"],K=X.position.distanceTo(Z.position),e2=.02,l2=.005;h.inputState.pinching&&K>e2+l2?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:a.handedness,target:this})):!h.inputState.pinching&&K<=e2-l2&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:a.handedness,target:this}))}else G!==null&&a.gripSpace&&(E=g.getPose(a.gripSpace,w),E!==null&&(G.matrix.fromArray(E.transform.matrix),G.matrix.decompose(G.position,G.rotation,G.scale),G.matrixWorldNeedsUpdate=!0,E.linearVelocity?(G.hasLinearVelocity=!0,G.linearVelocity.copy(E.linearVelocity)):G.hasLinearVelocity=!1,E.angularVelocity?(G.hasAngularVelocity=!0,G.angularVelocity.copy(E.angularVelocity)):G.hasAngularVelocity=!1));O!==null&&(x=g.getPose(a.targetRaySpace,w),x===null&&E!==null&&(x=E),x!==null&&(O.matrix.fromArray(x.transform.matrix),O.matrix.decompose(O.position,O.rotation,O.scale),O.matrixWorldNeedsUpdate=!0,x.linearVelocity?(O.hasLinearVelocity=!0,O.linearVelocity.copy(x.linearVelocity)):O.hasLinearVelocity=!1,x.angularVelocity?(O.hasAngularVelocity=!0,O.angularVelocity.copy(x.angularVelocity)):O.hasAngularVelocity=!1,this.dispatchEvent(nh2)))}return O!==null&&(O.visible=x!==null),G!==null&&(G.visible=E!==null),h!==null&&(h.visible=L!==null),this}_getHandJoint(a,g){if(a.joints[g.jointName]===void 0){const w=new Ts;w.matrixAutoUpdate=!1,w.visible=!1,a.joints[g.jointName]=w,a.add(w)}return a.joints[g.jointName]}}const ih2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rh2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class oh2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(a,g,w){if(this.texture===null){const x=new E0,E=a.properties.get(x);E.__webglTexture=g.texture,(g.depthNear!=w.depthNear||g.depthFar!=w.depthFar)&&(this.depthNear=g.depthNear,this.depthFar=g.depthFar),this.texture=x}}render(a,g){if(this.texture!==null){if(this.mesh===null){const w=g.cameras[0].viewport,x=new v1({vertexShader:ih2,fragmentShader:rh2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:w.z},depthHeight:{value:w.w}}});this.mesh=new q0(new qc(20,20),x)}a.render(this.mesh,g)}}reset(){this.texture=null,this.mesh=null}}class sh2 extends Rs{constructor(a,g){super();const w=this;let x=null,E=1,L=null,O="local-floor",G=1,h=null,X=null,Z=null,K=null,e2=null,l2=null;const p2=new oh2,r2=g.getContextAttributes();let o2=null,k2=null;const h2=[],v2=[],j2=new Lt;let R2=null;const D2=new Si;D2.layers.enable(1),D2.viewport=new bn;const Q2=new Si;Q2.layers.enable(2),Q2.viewport=new bn;const x2=[D2,Q2],g2=new eh2;g2.layers.enable(1),g2.layers.enable(2);let Y2=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(nt){let yt=h2[nt];return yt===void 0&&(yt=new K6,h2[nt]=yt),yt.getTargetRaySpace()},this.getControllerGrip=function(nt){let yt=h2[nt];return yt===void 0&&(yt=new K6,h2[nt]=yt),yt.getGripSpace()},this.getHand=function(nt){let yt=h2[nt];return yt===void 0&&(yt=new K6,h2[nt]=yt),yt.getHandSpace()};function U2(nt){const yt=v2.indexOf(nt.inputSource);if(yt===-1)return;const Yt=h2[yt];Yt!==void 0&&(Yt.update(nt.inputSource,nt.frame,h||L),Yt.dispatchEvent({type:nt.type,data:nt.inputSource}))}function lt(){x.removeEventListener("select",U2),x.removeEventListener("selectstart",U2),x.removeEventListener("selectend",U2),x.removeEventListener("squeeze",U2),x.removeEventListener("squeezestart",U2),x.removeEventListener("squeezeend",U2),x.removeEventListener("end",lt),x.removeEventListener("inputsourceschange",ht);for(let nt=0;nt<h2.length;nt++){const yt=v2[nt];yt!==null&&(v2[nt]=null,h2[nt].disconnect(yt))}Y2=null,st=null,p2.reset(),a.setRenderTarget(o2),e2=null,K=null,Z=null,x=null,k2=null,Re.stop(),w.isPresenting=!1,a.setPixelRatio(R2),a.setSize(j2.width,j2.height,!1),w.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(nt){E=nt,w.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(nt){O=nt,w.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||L},this.setReferenceSpace=function(nt){h=nt},this.getBaseLayer=function(){return K!==null?K:e2},this.getBinding=function(){return Z},this.getFrame=function(){return l2},this.getSession=function(){return x},this.setSession=async function(nt){if(x=nt,x!==null){if(o2=a.getRenderTarget(),x.addEventListener("select",U2),x.addEventListener("selectstart",U2),x.addEventListener("selectend",U2),x.addEventListener("squeeze",U2),x.addEventListener("squeezestart",U2),x.addEventListener("squeezeend",U2),x.addEventListener("end",lt),x.addEventListener("inputsourceschange",ht),r2.xrCompatible!==!0&&await g.makeXRCompatible(),R2=a.getPixelRatio(),a.getSize(j2),x.renderState.layers===void 0){const yt={antialias:r2.antialias,alpha:!0,depth:r2.depth,stencil:r2.stencil,framebufferScaleFactor:E};e2=new XRWebGLLayer(x,g,yt),x.updateRenderState({baseLayer:e2}),a.setPixelRatio(1),a.setSize(e2.framebufferWidth,e2.framebufferHeight,!1),k2=new J1(e2.framebufferWidth,e2.framebufferHeight,{format:ho,type:k1,colorSpace:a.outputColorSpace,stencilBuffer:r2.stencil})}else{let yt=null,Yt=null,G2=null;r2.depth&&(G2=r2.stencil?g.DEPTH24_STENCIL8:g.DEPTH_COMPONENT24,yt=r2.stencil?Wf:su,Yt=r2.stencil?qf:au);const Et={colorFormat:g.RGBA8,depthFormat:G2,scaleFactor:E};Z=new XRWebGLBinding(x,g),K=Z.createProjectionLayer(Et),x.updateRenderState({layers:[K]}),a.setPixelRatio(1),a.setSize(K.textureWidth,K.textureHeight,!1),k2=new J1(K.textureWidth,K.textureHeight,{format:ho,type:k1,depthTexture:new ZV(K.textureWidth,K.textureHeight,Yt,void 0,void 0,void 0,void 0,void 0,void 0,yt),stencilBuffer:r2.stencil,colorSpace:a.outputColorSpace,samples:r2.antialias?4:0,resolveDepthBuffer:K.ignoreDepthValues===!1})}k2.isXRRenderTarget=!0,this.setFoveation(G),h=null,L=await x.requestReferenceSpace(O),Re.setContext(x),Re.start(),w.isPresenting=!0,w.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(x!==null)return x.environmentBlendMode};function ht(nt){for(let yt=0;yt<nt.removed.length;yt++){const Yt=nt.removed[yt],G2=v2.indexOf(Yt);G2>=0&&(v2[G2]=null,h2[G2].disconnect(Yt))}for(let yt=0;yt<nt.added.length;yt++){const Yt=nt.added[yt];let G2=v2.indexOf(Yt);if(G2===-1){for(let ee=0;ee<h2.length;ee++)if(ee>=v2.length){v2.push(Yt),G2=ee;break}else if(v2[ee]===null){v2[ee]=Yt,G2=ee;break}if(G2===-1)break}const Et=h2[G2];Et&&Et.connect(Yt)}}const mt=new S2,Dt=new S2;function et(nt,yt,Yt){mt.setFromMatrixPosition(yt.matrixWorld),Dt.setFromMatrixPosition(Yt.matrixWorld);const G2=mt.distanceTo(Dt),Et=yt.projectionMatrix.elements,ee=Yt.projectionMatrix.elements,W2=Et[14]/(Et[10]-1),Oe=Et[14]/(Et[10]+1),ne=(Et[9]+1)/Et[5],on=(Et[9]-1)/Et[5],fe=(Et[8]-1)/Et[0],Ve=(ee[8]+1)/ee[0],be=W2*fe,en=W2*Ve,Hn=G2/(-fe+Ve),F2=Hn*-fe;yt.matrixWorld.decompose(nt.position,nt.quaternion,nt.scale),nt.translateX(F2),nt.translateZ(Hn),nt.matrixWorld.compose(nt.position,nt.quaternion,nt.scale),nt.matrixWorldInverse.copy(nt.matrixWorld).invert();const w2=W2+Hn,rt=Oe+Hn,dt=be-F2,Ct=en+(G2-F2),Mt=ne*Oe/rt*w2,ye=on*Oe/rt*w2;nt.projectionMatrix.makePerspective(dt,Ct,Mt,ye,w2,rt),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert()}function gt(nt,yt){yt===null?nt.matrixWorld.copy(nt.matrix):nt.matrixWorld.multiplyMatrices(yt.matrixWorld,nt.matrix),nt.matrixWorldInverse.copy(nt.matrixWorld).invert()}this.updateCamera=function(nt){if(x===null)return;p2.texture!==null&&(nt.near=p2.depthNear,nt.far=p2.depthFar),g2.near=Q2.near=D2.near=nt.near,g2.far=Q2.far=D2.far=nt.far,(Y2!==g2.near||st!==g2.far)&&(x.updateRenderState({depthNear:g2.near,depthFar:g2.far}),Y2=g2.near,st=g2.far,D2.near=Y2,D2.far=st,Q2.near=Y2,Q2.far=st,D2.updateProjectionMatrix(),Q2.updateProjectionMatrix(),nt.updateProjectionMatrix());const yt=nt.parent,Yt=g2.cameras;gt(g2,yt);for(let G2=0;G2<Yt.length;G2++)gt(Yt[G2],yt);Yt.length===2?et(g2,D2,Q2):g2.projectionMatrix.copy(D2.projectionMatrix),xt(nt,g2,yt)};function xt(nt,yt,Yt){Yt===null?nt.matrix.copy(yt.matrixWorld):(nt.matrix.copy(Yt.matrixWorld),nt.matrix.invert(),nt.matrix.multiply(yt.matrixWorld)),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.updateMatrixWorld(!0),nt.projectionMatrix.copy(yt.projectionMatrix),nt.projectionMatrixInverse.copy(yt.projectionMatrixInverse),nt.isPerspectiveCamera&&(nt.fov=mu*2*Math.atan(1/nt.projectionMatrix.elements[5]),nt.zoom=1)}this.getCamera=function(){return g2},this.getFoveation=function(){if(!(K===null&&e2===null))return G},this.setFoveation=function(nt){G=nt,K!==null&&(K.fixedFoveation=nt),e2!==null&&e2.fixedFoveation!==void 0&&(e2.fixedFoveation=nt)},this.hasDepthSensing=function(){return p2.texture!==null};let ie=null;function Se(nt,yt){if(X=yt.getViewerPose(h||L),l2=yt,X!==null){const Yt=X.views;e2!==null&&(a.setRenderTargetFramebuffer(k2,e2.framebuffer),a.setRenderTarget(k2));let G2=!1;Yt.length!==g2.cameras.length&&(g2.cameras.length=0,G2=!0);for(let ee=0;ee<Yt.length;ee++){const W2=Yt[ee];let Oe=null;if(e2!==null)Oe=e2.getViewport(W2);else{const on=Z.getViewSubImage(K,W2);Oe=on.viewport,ee===0&&(a.setRenderTargetTextures(k2,on.colorTexture,K.ignoreDepthValues?void 0:on.depthStencilTexture),a.setRenderTarget(k2))}let ne=x2[ee];ne===void 0&&(ne=new Si,ne.layers.enable(ee),ne.viewport=new bn,x2[ee]=ne),ne.matrix.fromArray(W2.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(W2.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),ee===0&&(g2.matrix.copy(ne.matrix),g2.matrix.decompose(g2.position,g2.quaternion,g2.scale)),G2===!0&&g2.cameras.push(ne)}const Et=x.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const ee=Z.getDepthInformation(Yt[0]);ee&&ee.isValid&&ee.texture&&p2.init(a,ee,x.renderState)}}for(let Yt=0;Yt<h2.length;Yt++){const G2=v2[Yt],Et=h2[Yt];G2!==null&&Et!==void 0&&Et.update(G2,yt,h||L)}p2.render(a,g2),ie&&ie(nt,yt),yt.detectedPlanes&&w.dispatchEvent({type:"planesdetected",data:yt}),l2=null}const Re=new XV;Re.setAnimationLoop(Se),this.setAnimationLoop=function(nt){ie=nt},this.dispose=function(){}}}const z1=new xn,lh2=new _e;function uh2(D,a){function g(r2,o2){r2.matrixAutoUpdate===!0&&r2.updateMatrix(),o2.value.copy(r2.matrix)}function w(r2,o2){o2.color.getRGB(r2.fogColor.value,QV(D)),o2.isFog?(r2.fogNear.value=o2.near,r2.fogFar.value=o2.far):o2.isFogExp2&&(r2.fogDensity.value=o2.density)}function x(r2,o2,k2,h2,v2){o2.isMeshBasicMaterial||o2.isMeshLambertMaterial?E(r2,o2):o2.isMeshToonMaterial?(E(r2,o2),Z(r2,o2)):o2.isMeshPhongMaterial?(E(r2,o2),X(r2,o2)):o2.isMeshStandardMaterial?(E(r2,o2),K(r2,o2),o2.isMeshPhysicalMaterial&&e2(r2,o2,v2)):o2.isMeshMatcapMaterial?(E(r2,o2),l2(r2,o2)):o2.isMeshDepthMaterial?E(r2,o2):o2.isMeshDistanceMaterial?(E(r2,o2),p2(r2,o2)):o2.isMeshNormalMaterial?E(r2,o2):o2.isLineBasicMaterial?(L(r2,o2),o2.isLineDashedMaterial&&O(r2,o2)):o2.isPointsMaterial?G(r2,o2,k2,h2):o2.isSpriteMaterial?h(r2,o2):o2.isShadowMaterial?(r2.color.value.copy(o2.color),r2.opacity.value=o2.opacity):o2.isShaderMaterial&&(o2.uniformsNeedUpdate=!1)}function E(r2,o2){r2.opacity.value=o2.opacity,o2.color&&r2.diffuse.value.copy(o2.color),o2.emissive&&r2.emissive.value.copy(o2.emissive).multiplyScalar(o2.emissiveIntensity),o2.map&&(r2.map.value=o2.map,g(o2.map,r2.mapTransform)),o2.alphaMap&&(r2.alphaMap.value=o2.alphaMap,g(o2.alphaMap,r2.alphaMapTransform)),o2.bumpMap&&(r2.bumpMap.value=o2.bumpMap,g(o2.bumpMap,r2.bumpMapTransform),r2.bumpScale.value=o2.bumpScale,o2.side===er&&(r2.bumpScale.value*=-1)),o2.normalMap&&(r2.normalMap.value=o2.normalMap,g(o2.normalMap,r2.normalMapTransform),r2.normalScale.value.copy(o2.normalScale),o2.side===er&&r2.normalScale.value.negate()),o2.displacementMap&&(r2.displacementMap.value=o2.displacementMap,g(o2.displacementMap,r2.displacementMapTransform),r2.displacementScale.value=o2.displacementScale,r2.displacementBias.value=o2.displacementBias),o2.emissiveMap&&(r2.emissiveMap.value=o2.emissiveMap,g(o2.emissiveMap,r2.emissiveMapTransform)),o2.specularMap&&(r2.specularMap.value=o2.specularMap,g(o2.specularMap,r2.specularMapTransform)),o2.alphaTest>0&&(r2.alphaTest.value=o2.alphaTest);const k2=a.get(o2),h2=k2.envMap,v2=k2.envMapRotation;if(h2&&(r2.envMap.value=h2,z1.copy(v2),z1.x*=-1,z1.y*=-1,z1.z*=-1,h2.isCubeTexture&&h2.isRenderTargetTexture===!1&&(z1.y*=-1,z1.z*=-1),r2.envMapRotation.value.setFromMatrix4(lh2.makeRotationFromEuler(z1)),r2.flipEnvMap.value=h2.isCubeTexture&&h2.isRenderTargetTexture===!1?-1:1,r2.reflectivity.value=o2.reflectivity,r2.ior.value=o2.ior,r2.refractionRatio.value=o2.refractionRatio),o2.lightMap){r2.lightMap.value=o2.lightMap;const j2=D._useLegacyLights===!0?Math.PI:1;r2.lightMapIntensity.value=o2.lightMapIntensity*j2,g(o2.lightMap,r2.lightMapTransform)}o2.aoMap&&(r2.aoMap.value=o2.aoMap,r2.aoMapIntensity.value=o2.aoMapIntensity,g(o2.aoMap,r2.aoMapTransform))}function L(r2,o2){r2.diffuse.value.copy(o2.color),r2.opacity.value=o2.opacity,o2.map&&(r2.map.value=o2.map,g(o2.map,r2.mapTransform))}function O(r2,o2){r2.dashSize.value=o2.dashSize,r2.totalSize.value=o2.dashSize+o2.gapSize,r2.scale.value=o2.scale}function G(r2,o2,k2,h2){r2.diffuse.value.copy(o2.color),r2.opacity.value=o2.opacity,r2.size.value=o2.size*k2,r2.scale.value=h2*.5,o2.map&&(r2.map.value=o2.map,g(o2.map,r2.uvTransform)),o2.alphaMap&&(r2.alphaMap.value=o2.alphaMap,g(o2.alphaMap,r2.alphaMapTransform)),o2.alphaTest>0&&(r2.alphaTest.value=o2.alphaTest)}function h(r2,o2){r2.diffuse.value.copy(o2.color),r2.opacity.value=o2.opacity,r2.rotation.value=o2.rotation,o2.map&&(r2.map.value=o2.map,g(o2.map,r2.mapTransform)),o2.alphaMap&&(r2.alphaMap.value=o2.alphaMap,g(o2.alphaMap,r2.alphaMapTransform)),o2.alphaTest>0&&(r2.alphaTest.value=o2.alphaTest)}function X(r2,o2){r2.specular.value.copy(o2.specular),r2.shininess.value=Math.max(o2.shininess,1e-4)}function Z(r2,o2){o2.gradientMap&&(r2.gradientMap.value=o2.gradientMap)}function K(r2,o2){r2.metalness.value=o2.metalness,o2.metalnessMap&&(r2.metalnessMap.value=o2.metalnessMap,g(o2.metalnessMap,r2.metalnessMapTransform)),r2.roughness.value=o2.roughness,o2.roughnessMap&&(r2.roughnessMap.value=o2.roughnessMap,g(o2.roughnessMap,r2.roughnessMapTransform)),o2.envMap&&(r2.envMapIntensity.value=o2.envMapIntensity)}function e2(r2,o2,k2){r2.ior.value=o2.ior,o2.sheen>0&&(r2.sheenColor.value.copy(o2.sheenColor).multiplyScalar(o2.sheen),r2.sheenRoughness.value=o2.sheenRoughness,o2.sheenColorMap&&(r2.sheenColorMap.value=o2.sheenColorMap,g(o2.sheenColorMap,r2.sheenColorMapTransform)),o2.sheenRoughnessMap&&(r2.sheenRoughnessMap.value=o2.sheenRoughnessMap,g(o2.sheenRoughnessMap,r2.sheenRoughnessMapTransform))),o2.clearcoat>0&&(r2.clearcoat.value=o2.clearcoat,r2.clearcoatRoughness.value=o2.clearcoatRoughness,o2.clearcoatMap&&(r2.clearcoatMap.value=o2.clearcoatMap,g(o2.clearcoatMap,r2.clearcoatMapTransform)),o2.clearcoatRoughnessMap&&(r2.clearcoatRoughnessMap.value=o2.clearcoatRoughnessMap,g(o2.clearcoatRoughnessMap,r2.clearcoatRoughnessMapTransform)),o2.clearcoatNormalMap&&(r2.clearcoatNormalMap.value=o2.clearcoatNormalMap,g(o2.clearcoatNormalMap,r2.clearcoatNormalMapTransform),r2.clearcoatNormalScale.value.copy(o2.clearcoatNormalScale),o2.side===er&&r2.clearcoatNormalScale.value.negate())),o2.dispersion>0&&(r2.dispersion.value=o2.dispersion),o2.iridescence>0&&(r2.iridescence.value=o2.iridescence,r2.iridescenceIOR.value=o2.iridescenceIOR,r2.iridescenceThicknessMinimum.value=o2.iridescenceThicknessRange[0],r2.iridescenceThicknessMaximum.value=o2.iridescenceThicknessRange[1],o2.iridescenceMap&&(r2.iridescenceMap.value=o2.iridescenceMap,g(o2.iridescenceMap,r2.iridescenceMapTransform)),o2.iridescenceThicknessMap&&(r2.iridescenceThicknessMap.value=o2.iridescenceThicknessMap,g(o2.iridescenceThicknessMap,r2.iridescenceThicknessMapTransform))),o2.transmission>0&&(r2.transmission.value=o2.transmission,r2.transmissionSamplerMap.value=k2.texture,r2.transmissionSamplerSize.value.set(k2.width,k2.height),o2.transmissionMap&&(r2.transmissionMap.value=o2.transmissionMap,g(o2.transmissionMap,r2.transmissionMapTransform)),r2.thickness.value=o2.thickness,o2.thicknessMap&&(r2.thicknessMap.value=o2.thicknessMap,g(o2.thicknessMap,r2.thicknessMapTransform)),r2.attenuationDistance.value=o2.attenuationDistance,r2.attenuationColor.value.copy(o2.attenuationColor)),o2.anisotropy>0&&(r2.anisotropyVector.value.set(o2.anisotropy*Math.cos(o2.anisotropyRotation),o2.anisotropy*Math.sin(o2.anisotropyRotation)),o2.anisotropyMap&&(r2.anisotropyMap.value=o2.anisotropyMap,g(o2.anisotropyMap,r2.anisotropyMapTransform))),r2.specularIntensity.value=o2.specularIntensity,r2.specularColor.value.copy(o2.specularColor),o2.specularColorMap&&(r2.specularColorMap.value=o2.specularColorMap,g(o2.specularColorMap,r2.specularColorMapTransform)),o2.specularIntensityMap&&(r2.specularIntensityMap.value=o2.specularIntensityMap,g(o2.specularIntensityMap,r2.specularIntensityMapTransform))}function l2(r2,o2){o2.matcap&&(r2.matcap.value=o2.matcap)}function p2(r2,o2){const k2=a.get(o2).light;r2.referencePosition.value.setFromMatrixPosition(k2.matrixWorld),r2.nearDistance.value=k2.shadow.camera.near,r2.farDistance.value=k2.shadow.camera.far}return{refreshFogUniforms:w,refreshMaterialUniforms:x}}function fh2(D,a,g,w){let x={},E={},L=[];const O=D.getParameter(D.MAX_UNIFORM_BUFFER_BINDINGS);function G(k2,h2){const v2=h2.program;w.uniformBlockBinding(k2,v2)}function h(k2,h2){let v2=x[k2.id];v2===void 0&&(l2(k2),v2=X(k2),x[k2.id]=v2,k2.addEventListener("dispose",r2));const j2=h2.program;w.updateUBOMapping(k2,j2);const R2=a.render.frame;E[k2.id]!==R2&&(K(k2),E[k2.id]=R2)}function X(k2){const h2=Z();k2.__bindingPointIndex=h2;const v2=D.createBuffer(),j2=k2.__size,R2=k2.usage;return D.bindBuffer(D.UNIFORM_BUFFER,v2),D.bufferData(D.UNIFORM_BUFFER,j2,R2),D.bindBuffer(D.UNIFORM_BUFFER,null),D.bindBufferBase(D.UNIFORM_BUFFER,h2,v2),v2}function Z(){for(let k2=0;k2<O;k2++)if(L.indexOf(k2)===-1)return L.push(k2),k2;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function K(k2){const h2=x[k2.id],v2=k2.uniforms,j2=k2.__cache;D.bindBuffer(D.UNIFORM_BUFFER,h2);for(let R2=0,D2=v2.length;R2<D2;R2++){const Q2=Array.isArray(v2[R2])?v2[R2]:[v2[R2]];for(let x2=0,g2=Q2.length;x2<g2;x2++){const Y2=Q2[x2];if(e2(Y2,R2,x2,j2)===!0){const st=Y2.__offset,U2=Array.isArray(Y2.value)?Y2.value:[Y2.value];let lt=0;for(let ht=0;ht<U2.length;ht++){const mt=U2[ht],Dt=p2(mt);typeof mt=="number"||typeof mt=="boolean"?(Y2.__data[0]=mt,D.bufferSubData(D.UNIFORM_BUFFER,st+lt,Y2.__data)):mt.isMatrix3?(Y2.__data[0]=mt.elements[0],Y2.__data[1]=mt.elements[1],Y2.__data[2]=mt.elements[2],Y2.__data[3]=0,Y2.__data[4]=mt.elements[3],Y2.__data[5]=mt.elements[4],Y2.__data[6]=mt.elements[5],Y2.__data[7]=0,Y2.__data[8]=mt.elements[6],Y2.__data[9]=mt.elements[7],Y2.__data[10]=mt.elements[8],Y2.__data[11]=0):(mt.toArray(Y2.__data,lt),lt+=Dt.storage/Float32Array.BYTES_PER_ELEMENT)}D.bufferSubData(D.UNIFORM_BUFFER,st,Y2.__data)}}}D.bindBuffer(D.UNIFORM_BUFFER,null)}function e2(k2,h2,v2,j2){const R2=k2.value,D2=h2+"_"+v2;if(j2[D2]===void 0)return typeof R2=="number"||typeof R2=="boolean"?j2[D2]=R2:j2[D2]=R2.clone(),!0;{const Q2=j2[D2];if(typeof R2=="number"||typeof R2=="boolean"){if(Q2!==R2)return j2[D2]=R2,!0}else if(Q2.equals(R2)===!1)return Q2.copy(R2),!0}return!1}function l2(k2){const h2=k2.uniforms;let v2=0;const j2=16;for(let D2=0,Q2=h2.length;D2<Q2;D2++){const x2=Array.isArray(h2[D2])?h2[D2]:[h2[D2]];for(let g2=0,Y2=x2.length;g2<Y2;g2++){const st=x2[g2],U2=Array.isArray(st.value)?st.value:[st.value];for(let lt=0,ht=U2.length;lt<ht;lt++){const mt=U2[lt],Dt=p2(mt),et=v2%j2;et!==0&&j2-et<Dt.boundary&&(v2+=j2-et),st.__data=new Float32Array(Dt.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=v2,v2+=Dt.storage}}}const R2=v2%j2;return R2>0&&(v2+=j2-R2),k2.__size=v2,k2.__cache={},this}function p2(k2){const h2={boundary:0,storage:0};return typeof k2=="number"||typeof k2=="boolean"?(h2.boundary=4,h2.storage=4):k2.isVector2?(h2.boundary=8,h2.storage=8):k2.isVector3||k2.isColor?(h2.boundary=16,h2.storage=12):k2.isVector4?(h2.boundary=16,h2.storage=16):k2.isMatrix3?(h2.boundary=48,h2.storage=48):k2.isMatrix4?(h2.boundary=64,h2.storage=64):k2.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",k2),h2}function r2(k2){const h2=k2.target;h2.removeEventListener("dispose",r2);const v2=L.indexOf(h2.__bindingPointIndex);L.splice(v2,1),D.deleteBuffer(x[h2.id]),delete x[h2.id],delete E[h2.id]}function o2(){for(const k2 in x)D.deleteBuffer(x[k2]);L=[],x={},E={}}return{bind:G,update:h,dispose:o2}}class ph2{constructor(a={}){const{canvas:g=ic2(),context:w=null,depth:x=!0,stencil:E=!1,alpha:L=!1,antialias:O=!1,premultipliedAlpha:G=!0,preserveDrawingBuffer:h=!1,powerPreference:X="default",failIfMajorPerformanceCaveat:Z=!1}=a;this.isWebGLRenderer=!0;let K;if(w!==null){if(typeof WebGLRenderingContext<"u"&&w instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");K=w.getContextAttributes().alpha}else K=L;const e2=new Uint32Array(4),l2=new Int32Array(4);let p2=null,r2=null;const o2=[],k2=[];this.domElement=g,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=T0,this._useLegacyLights=!1,this.toneMapping=g1,this.toneMappingExposure=1;const h2=this;let v2=!1,j2=0,R2=0,D2=null,Q2=-1,x2=null;const g2=new bn,Y2=new bn;let st=null;const U2=new pe(0);let lt=0,ht=g.width,mt=g.height,Dt=1,et=null,gt=null;const xt=new bn(0,0,ht,mt),ie=new bn(0,0,ht,mt);let Se=!1;const Re=new Xa;let nt=!1,yt=!1;const Yt=new _e,G2=new S2,Et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ee(){return D2===null?Dt:1}let W2=w;function Oe(M2,Z2){return g.getContext(M2,Z2)}try{const M2={alpha:!0,depth:x,stencil:E,antialias:O,premultipliedAlpha:G,preserveDrawingBuffer:h,powerPreference:X,failIfMajorPerformanceCaveat:Z};if("setAttribute"in g&&g.setAttribute("data-engine",`three.js r${Wa}`),g.addEventListener("webglcontextlost",d2,!1),g.addEventListener("webglcontextrestored",X2,!1),g.addEventListener("webglcontextcreationerror",K2,!1),W2===null){const Z2="webgl2";if(W2=Oe(Z2,M2),W2===null)throw Oe(Z2)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M2){throw console.error("THREE.WebGLRenderer: "+M2.message),M2}let ne,on,fe,Ve,be,en,Hn,F2,w2,rt,dt,Ct,Mt,ye,Vt,zt,De,Gt,ae,sn,we,re,je,Xe;function Cn(){ne=new g62(W2),ne.init(),re=new th2(W2,ne),on=new _62(W2,ne,a,re),fe=new Ka2(W2),Ve=new v62(W2),be=new ja2,en=new $a2(W2,ne,fe,be,on,re,Ve),Hn=new h62(h2),F2=new A62(h2),w2=new Tc2(W2),je=new p62(W2,w2),rt=new y62(W2,w2,Ve,je),dt=new B62(W2,rt,w2,Ve),ae=new w62(W2,on,en),zt=new a62(be),Ct=new Oa2(h2,Hn,F2,ne,on,je,zt),Mt=new uh2(h2,be),ye=new Ua2,Vt=new Qa2(ne),Gt=new f62(h2,Hn,F2,fe,dt,K,G),De=new Ja2(h2,dt,on),Xe=new fh2(W2,Ve,on,fe),sn=new c62(W2,ne,Ve),we=new k62(W2,ne,Ve),Ve.programs=Ct.programs,h2.capabilities=on,h2.extensions=ne,h2.properties=be,h2.renderLists=ye,h2.shadowMap=De,h2.state=fe,h2.info=Ve}Cn();const We=new sh2(h2,W2);this.xr=We,this.getContext=function(){return W2},this.getContextAttributes=function(){return W2.getContextAttributes()},this.forceContextLoss=function(){const M2=ne.get("WEBGL_lose_context");M2&&M2.loseContext()},this.forceContextRestore=function(){const M2=ne.get("WEBGL_lose_context");M2&&M2.restoreContext()},this.getPixelRatio=function(){return Dt},this.setPixelRatio=function(M2){M2!==void 0&&(Dt=M2,this.setSize(ht,mt,!1))},this.getSize=function(M2){return M2.set(ht,mt)},this.setSize=function(M2,Z2,it=!0){if(We.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ht=M2,mt=Z2,g.width=Math.floor(M2*Dt),g.height=Math.floor(Z2*Dt),it===!0&&(g.style.width=M2+"px",g.style.height=Z2+"px"),this.setViewport(0,0,M2,Z2)},this.getDrawingBufferSize=function(M2){return M2.set(ht*Dt,mt*Dt).floor()},this.setDrawingBufferSize=function(M2,Z2,it){ht=M2,mt=Z2,Dt=it,g.width=Math.floor(M2*it),g.height=Math.floor(Z2*it),this.setViewport(0,0,M2,Z2)},this.getCurrentViewport=function(M2){return M2.copy(g2)},this.getViewport=function(M2){return M2.copy(xt)},this.setViewport=function(M2,Z2,it,$2){M2.isVector4?xt.set(M2.x,M2.y,M2.z,M2.w):xt.set(M2,Z2,it,$2),fe.viewport(g2.copy(xt).multiplyScalar(Dt).round())},this.getScissor=function(M2){return M2.copy(ie)},this.setScissor=function(M2,Z2,it,$2){M2.isVector4?ie.set(M2.x,M2.y,M2.z,M2.w):ie.set(M2,Z2,it,$2),fe.scissor(Y2.copy(ie).multiplyScalar(Dt).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(M2){fe.setScissorTest(Se=M2)},this.setOpaqueSort=function(M2){et=M2},this.setTransparentSort=function(M2){gt=M2},this.getClearColor=function(M2){return M2.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(M2=!0,Z2=!0,it=!0){let $2=0;if(M2){let tt=!1;if(D2!==null){const Xt=D2.texture.format;tt=Xt===LV||Xt===PV||Xt===IV}if(tt){const Xt=D2.texture.type,he=Xt===k1||Xt===au||Xt===TV||Xt===qf||Xt===RV||Xt===bV,de=Gt.getClearColor(),xe=Gt.getClearAlpha(),Pe=de.r,He=de.g,qe=de.b;he?(e2[0]=Pe,e2[1]=He,e2[2]=qe,e2[3]=xe,W2.clearBufferuiv(W2.COLOR,0,e2)):(l2[0]=Pe,l2[1]=He,l2[2]=qe,l2[3]=xe,W2.clearBufferiv(W2.COLOR,0,l2))}else $2|=W2.COLOR_BUFFER_BIT}Z2&&($2|=W2.DEPTH_BUFFER_BIT),it&&($2|=W2.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W2.clear($2)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){g.removeEventListener("webglcontextlost",d2,!1),g.removeEventListener("webglcontextrestored",X2,!1),g.removeEventListener("webglcontextcreationerror",K2,!1),ye.dispose(),Vt.dispose(),be.dispose(),Hn.dispose(),F2.dispose(),dt.dispose(),je.dispose(),Xe.dispose(),Ct.dispose(),We.dispose(),We.removeEventListener("sessionstart",an),We.removeEventListener("sessionend",i0),Un.stop()};function d2(M2){M2.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v2=!0}function X2(){console.log("THREE.WebGLRenderer: Context Restored."),v2=!1;const M2=Ve.autoReset,Z2=De.enabled,it=De.autoUpdate,$2=De.needsUpdate,tt=De.type;Cn(),Ve.autoReset=M2,De.enabled=Z2,De.autoUpdate=it,De.needsUpdate=$2,De.type=tt}function K2(M2){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M2.statusMessage)}function Bt(M2){const Z2=M2.target;Z2.removeEventListener("dispose",Bt),Ot(Z2)}function Ot(M2){Ne(M2),be.remove(M2)}function Ne(M2){const Z2=be.get(M2).programs;Z2!==void 0&&(Z2.forEach(function(it){Ct.releaseProgram(it)}),M2.isShaderMaterial&&Ct.releaseShaderCache(M2))}this.renderBufferDirect=function(M2,Z2,it,$2,tt,Xt){Z2===null&&(Z2=Et);const he=tt.isMesh&&tt.matrixWorld.determinant()<0,de=ep(M2,Z2,it,$2,tt);fe.setMaterial($2,he);let xe=it.index,Pe=1;if($2.wireframe===!0){if(xe=rt.getWireframeAttribute(it),xe===void 0)return;Pe=2}const He=it.drawRange,qe=it.attributes.position;let r0=He.start*Pe,N0=(He.start+He.count)*Pe;Xt!==null&&(r0=Math.max(r0,Xt.start*Pe),N0=Math.min(N0,(Xt.start+Xt.count)*Pe)),xe!==null?(r0=Math.max(r0,0),N0=Math.min(N0,xe.count)):qe!=null&&(r0=Math.max(r0,0),N0=Math.min(N0,qe.count));const ai=N0-r0;if(ai<0||ai===1/0)return;je.setup(tt,$2,de,it,xe);let Br,gn=sn;if(xe!==null&&(Br=w2.get(xe),gn=we,gn.setIndex(Br)),tt.isMesh)$2.wireframe===!0?(fe.setLineWidth($2.wireframeLinewidth*ee()),gn.setMode(W2.LINES)):gn.setMode(W2.TRIANGLES);else if(tt.isLine){let Le=$2.linewidth;Le===void 0&&(Le=1),fe.setLineWidth(Le*ee()),tt.isLineSegments?gn.setMode(W2.LINES):tt.isLineLoop?gn.setMode(W2.LINE_LOOP):gn.setMode(W2.LINE_STRIP)}else tt.isPoints?gn.setMode(W2.POINTS):tt.isSprite&&gn.setMode(W2.TRIANGLES);if(tt.isBatchedMesh)tt._multiDrawInstances!==null?gn.renderMultiDrawInstances(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount,tt._multiDrawInstances):gn.renderMultiDraw(tt._multiDrawStarts,tt._multiDrawCounts,tt._multiDrawCount);else if(tt.isInstancedMesh)gn.renderInstances(r0,ai,tt.count);else if(it.isInstancedBufferGeometry){const Le=it._maxInstanceCount!==void 0?it._maxInstanceCount:1/0,Ds=Math.min(it.instanceCount,Le);gn.renderInstances(r0,ai,Ds)}else gn.render(r0,ai)};function Ze(M2,Z2,it){M2.transparent===!0&&M2.side===No&&M2.forceSinglePass===!1?(M2.side=er,M2.needsUpdate=!0,B1(M2,Z2,it),M2.side=zo,M2.needsUpdate=!0,B1(M2,Z2,it),M2.side=No):B1(M2,Z2,it)}this.compile=function(M2,Z2,it=null){it===null&&(it=M2),r2=Vt.get(it),r2.init(Z2),k2.push(r2),it.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Z2.layers)&&(r2.pushLight(tt),tt.castShadow&&r2.pushShadow(tt))}),M2!==it&&M2.traverseVisible(function(tt){tt.isLight&&tt.layers.test(Z2.layers)&&(r2.pushLight(tt),tt.castShadow&&r2.pushShadow(tt))}),r2.setupLights(h2._useLegacyLights);const $2=new Set;return M2.traverse(function(tt){const Xt=tt.material;if(Xt)if(Array.isArray(Xt))for(let he=0;he<Xt.length;he++){const de=Xt[he];Ze(de,it,tt),$2.add(de)}else Ze(Xt,it,tt),$2.add(Xt)}),k2.pop(),r2=null,$2},this.compileAsync=function(M2,Z2,it=null){const $2=this.compile(M2,Z2,it);return new Promise(tt=>{function Xt(){if($2.forEach(function(he){be.get(he).currentProgram.isReady()&&$2.delete(he)}),$2.size===0){tt(M2);return}setTimeout(Xt,10)}ne.get("KHR_parallel_shader_compile")!==null?Xt():setTimeout(Xt,10)})};let Yn=null;function k0(M2){Yn&&Yn(M2)}function an(){Un.stop()}function i0(){Un.start()}const Un=new XV;Un.setAnimationLoop(k0),typeof self<"u"&&Un.setContext(self),this.setAnimationLoop=function(M2){Yn=M2,We.setAnimationLoop(M2),M2===null?Un.stop():Un.start()},We.addEventListener("sessionstart",an),We.addEventListener("sessionend",i0),this.render=function(M2,Z2){if(Z2!==void 0&&Z2.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v2===!0)return;M2.matrixWorldAutoUpdate===!0&&M2.updateMatrixWorld(),Z2.parent===null&&Z2.matrixWorldAutoUpdate===!0&&Z2.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(Z2),Z2=We.getCamera()),M2.isScene===!0&&M2.onBeforeRender(h2,M2,Z2,D2),r2=Vt.get(M2,k2.length),r2.init(Z2),k2.push(r2),Yt.multiplyMatrices(Z2.projectionMatrix,Z2.matrixWorldInverse),Re.setFromProjectionMatrix(Yt),yt=this.localClippingEnabled,nt=zt.init(this.clippingPlanes,yt),p2=ye.get(M2,o2.length),p2.init(),o2.push(p2),Qr(M2,Z2,0,h2.sortObjects),p2.finish(),h2.sortObjects===!0&&p2.sort(et,gt);const it=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1;it&&Gt.addToRenderList(p2,M2),this.info.render.frame++,nt===!0&&zt.beginShadows();const $2=r2.state.shadowsArray;De.render($2,M2,Z2),nt===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset();const tt=p2.opaque,Xt=p2.transmissive;if(r2.setupLights(h2._useLegacyLights),Z2.isArrayCamera){const he=Z2.cameras;if(Xt.length>0)for(let de=0,xe=he.length;de<xe;de++){const Pe=he[de];Yr(tt,Xt,M2,Pe)}it&&Gt.render(M2);for(let de=0,xe=he.length;de<xe;de++){const Pe=he[de];xi(p2,M2,Pe,Pe.viewport)}}else Xt.length>0&&Yr(tt,Xt,M2,Z2),it&&Gt.render(M2),xi(p2,M2,Z2);D2!==null&&(en.updateMultisampleRenderTarget(D2),en.updateRenderTargetMipmap(D2)),M2.isScene===!0&&M2.onAfterRender(h2,M2,Z2),je.resetDefaultState(),Q2=-1,x2=null,k2.pop(),k2.length>0?(r2=k2[k2.length-1],nt===!0&&zt.setGlobalState(h2.clippingPlanes,r2.state.camera)):r2=null,o2.pop(),o2.length>0?p2=o2[o2.length-1]:p2=null};function Qr(M2,Z2,it,$2){if(M2.visible===!1)return;if(M2.layers.test(Z2.layers)){if(M2.isGroup)it=M2.renderOrder;else if(M2.isLOD)M2.autoUpdate===!0&&M2.update(Z2);else if(M2.isLight)r2.pushLight(M2),M2.castShadow&&r2.pushShadow(M2);else if(M2.isSprite){if(!M2.frustumCulled||Re.intersectsSprite(M2)){$2&&G2.setFromMatrixPosition(M2.matrixWorld).applyMatrix4(Yt);const he=dt.update(M2),de=M2.material;de.visible&&p2.push(M2,he,de,it,G2.z,null)}}else if((M2.isMesh||M2.isLine||M2.isPoints)&&(!M2.frustumCulled||Re.intersectsObject(M2))){const he=dt.update(M2),de=M2.material;if($2&&(M2.boundingSphere!==void 0?(M2.boundingSphere===null&&M2.computeBoundingSphere(),G2.copy(M2.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),G2.copy(he.boundingSphere.center)),G2.applyMatrix4(M2.matrixWorld).applyMatrix4(Yt)),Array.isArray(de)){const xe=he.groups;for(let Pe=0,He=xe.length;Pe<He;Pe++){const qe=xe[Pe],r0=de[qe.materialIndex];r0&&r0.visible&&p2.push(M2,he,r0,it,G2.z,qe)}}else de.visible&&p2.push(M2,he,de,it,G2.z,null)}}const Xt=M2.children;for(let he=0,de=Xt.length;he<de;he++)Qr(Xt[he],Z2,it,$2)}function xi(M2,Z2,it,$2){const tt=M2.opaque,Xt=M2.transmissive,he=M2.transparent;r2.setupLightsView(it),nt===!0&&zt.setGlobalState(h2.clippingPlanes,it),$2&&fe.viewport(g2.copy($2)),tt.length>0&&wr(tt,Z2,it),Xt.length>0&&wr(Xt,Z2,it),he.length>0&&wr(he,Z2,it),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Yr(M2,Z2,it,$2){if((it.isScene===!0?it.overrideMaterial:null)!==null)return;r2.state.transmissionRenderTarget[$2.id]===void 0&&(r2.state.transmissionRenderTarget[$2.id]=new J1(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Yc:k1,minFilter:Cs,samples:4,stencilBuffer:E,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Xt=r2.state.transmissionRenderTarget[$2.id],he=$2.viewport||g2;Xt.setSize(he.z,he.w);const de=h2.getRenderTarget();h2.setRenderTarget(Xt),h2.getClearColor(U2),lt=h2.getClearAlpha(),lt<1&&h2.setClearColor(16777215,.5),h2.clear();const xe=h2.toneMapping;h2.toneMapping=g1;const Pe=$2.viewport;if($2.viewport!==void 0&&($2.viewport=void 0),r2.setupLightsView($2),nt===!0&&zt.setGlobalState(h2.clippingPlanes,$2),wr(M2,it,$2),en.updateMultisampleRenderTarget(Xt),en.updateRenderTargetMipmap(Xt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let qe=0,r0=Z2.length;qe<r0;qe++){const N0=Z2[qe],ai=N0.object,Br=N0.geometry,gn=N0.material,Le=N0.group;if(gn.side===No&&ai.layers.test($2.layers)){const Ds=gn.side;gn.side=er,gn.needsUpdate=!0,bs(ai,it,$2,Br,gn,Le),gn.side=Ds,gn.needsUpdate=!0,He=!0}}He===!0&&(en.updateMultisampleRenderTarget(Xt),en.updateRenderTargetMipmap(Xt))}h2.setRenderTarget(de),h2.setClearColor(U2,lt),Pe!==void 0&&($2.viewport=Pe),h2.toneMapping=xe}function wr(M2,Z2,it){const $2=Z2.isScene===!0?Z2.overrideMaterial:null;for(let tt=0,Xt=M2.length;tt<Xt;tt++){const he=M2[tt],de=he.object,xe=he.geometry,Pe=$2===null?he.material:$2,He=he.group;de.layers.test(it.layers)&&bs(de,Z2,it,xe,Pe,He)}}function bs(M2,Z2,it,$2,tt,Xt){M2.onBeforeRender(h2,Z2,it,$2,tt,Xt),M2.modelViewMatrix.multiplyMatrices(it.matrixWorldInverse,M2.matrixWorld),M2.normalMatrix.getNormalMatrix(M2.modelViewMatrix),tt.onBeforeRender(h2,Z2,it,$2,M2,Xt),tt.transparent===!0&&tt.side===No&&tt.forceSinglePass===!1?(tt.side=er,tt.needsUpdate=!0,h2.renderBufferDirect(it,Z2,$2,tt,M2,Xt),tt.side=zo,tt.needsUpdate=!0,h2.renderBufferDirect(it,Z2,$2,tt,M2,Xt),tt.side=No):h2.renderBufferDirect(it,Z2,$2,tt,M2,Xt),M2.onAfterRender(h2,Z2,it,$2,tt,Xt)}function B1(M2,Z2,it){Z2.isScene!==!0&&(Z2=Et);const $2=be.get(M2),tt=r2.state.lights,Xt=r2.state.shadowsArray,he=tt.state.version,de=Ct.getParameters(M2,tt.state,Xt,Z2,it),xe=Ct.getProgramCacheKey(de);let Pe=$2.programs;$2.environment=M2.isMeshStandardMaterial?Z2.environment:null,$2.fog=Z2.fog,$2.envMap=(M2.isMeshStandardMaterial?F2:Hn).get(M2.envMap||$2.environment),$2.envMapRotation=$2.environment!==null&&M2.envMap===null?Z2.environmentRotation:M2.envMapRotation,Pe===void 0&&(M2.addEventListener("dispose",Bt),Pe=new Map,$2.programs=Pe);let He=Pe.get(xe);if(He!==void 0){if($2.currentProgram===He&&$2.lightsStateVersion===he)return Bu(M2,de),He}else de.uniforms=Ct.getUniforms(M2),M2.onBuild(it,de,h2),M2.onBeforeCompile(de,h2),He=Ct.acquireProgram(de,xe),Pe.set(xe,He),$2.uniforms=de.uniforms;const qe=$2.uniforms;return(!M2.isShaderMaterial&&!M2.isRawShaderMaterial||M2.clipping===!0)&&(qe.clippingPlanes=zt.uniform),Bu(M2,de),$2.needsLights=ip(M2),$2.lightsStateVersion=he,$2.needsLights&&(qe.ambientLightColor.value=tt.state.ambient,qe.lightProbe.value=tt.state.probe,qe.directionalLights.value=tt.state.directional,qe.directionalLightShadows.value=tt.state.directionalShadow,qe.spotLights.value=tt.state.spot,qe.spotLightShadows.value=tt.state.spotShadow,qe.rectAreaLights.value=tt.state.rectArea,qe.ltc_1.value=tt.state.rectAreaLTC1,qe.ltc_2.value=tt.state.rectAreaLTC2,qe.pointLights.value=tt.state.point,qe.pointLightShadows.value=tt.state.pointShadow,qe.hemisphereLights.value=tt.state.hemi,qe.directionalShadowMap.value=tt.state.directionalShadowMap,qe.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,qe.spotShadowMap.value=tt.state.spotShadowMap,qe.spotLightMatrix.value=tt.state.spotLightMatrix,qe.spotLightMap.value=tt.state.spotLightMap,qe.pointShadowMap.value=tt.state.pointShadowMap,qe.pointShadowMatrix.value=tt.state.pointShadowMatrix),$2.currentProgram=He,$2.uniformsList=null,He}function wu(M2){if(M2.uniformsList===null){const Z2=M2.currentProgram.getUniforms();M2.uniformsList=xc.seqWithValue(Z2.seq,M2.uniforms)}return M2.uniformsList}function Bu(M2,Z2){const it=be.get(M2);it.outputColorSpace=Z2.outputColorSpace,it.batching=Z2.batching,it.instancing=Z2.instancing,it.instancingColor=Z2.instancingColor,it.instancingMorph=Z2.instancingMorph,it.skinning=Z2.skinning,it.morphTargets=Z2.morphTargets,it.morphNormals=Z2.morphNormals,it.morphColors=Z2.morphColors,it.morphTargetsCount=Z2.morphTargetsCount,it.numClippingPlanes=Z2.numClippingPlanes,it.numIntersection=Z2.numClipIntersection,it.vertexAlphas=Z2.vertexAlphas,it.vertexTangents=Z2.vertexTangents,it.toneMapping=Z2.toneMapping}function ep(M2,Z2,it,$2,tt){Z2.isScene!==!0&&(Z2=Et),en.resetTextureUnits();const Xt=Z2.fog,he=$2.isMeshStandardMaterial?Z2.environment:null,de=D2===null?h2.outputColorSpace:D2.isXRRenderTarget===!0?D2.texture.colorSpace:ii,xe=($2.isMeshStandardMaterial?F2:Hn).get($2.envMap||he),Pe=$2.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,He=!!it.attributes.tangent&&(!!$2.normalMap||$2.anisotropy>0),qe=!!it.morphAttributes.position,r0=!!it.morphAttributes.normal,N0=!!it.morphAttributes.color;let ai=g1;$2.toneMapped&&(D2===null||D2.isXRRenderTarget===!0)&&(ai=h2.toneMapping);const Br=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,gn=Br!==void 0?Br.length:0,Le=be.get($2),Ds=r2.state.lights;if(nt===!0&&(yt===!0||M2!==x2)){const Ci=M2===x2&&$2.id===Q2;zt.setState($2,M2,Ci)}let zn=!1;$2.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Ds.state.version||Le.outputColorSpace!==de||tt.isBatchedMesh&&Le.batching===!1||!tt.isBatchedMesh&&Le.batching===!0||tt.isInstancedMesh&&Le.instancing===!1||!tt.isInstancedMesh&&Le.instancing===!0||tt.isSkinnedMesh&&Le.skinning===!1||!tt.isSkinnedMesh&&Le.skinning===!0||tt.isInstancedMesh&&Le.instancingColor===!0&&tt.instanceColor===null||tt.isInstancedMesh&&Le.instancingColor===!1&&tt.instanceColor!==null||tt.isInstancedMesh&&Le.instancingMorph===!0&&tt.morphTexture===null||tt.isInstancedMesh&&Le.instancingMorph===!1&&tt.morphTexture!==null||Le.envMap!==xe||$2.fog===!0&&Le.fog!==Xt||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==zt.numPlanes||Le.numIntersection!==zt.numIntersection)||Le.vertexAlphas!==Pe||Le.vertexTangents!==He||Le.morphTargets!==qe||Le.morphNormals!==r0||Le.morphColors!==N0||Le.toneMapping!==ai||Le.morphTargetsCount!==gn)&&(zn=!0):(zn=!0,Le.__version=$2.version);let go=Le.currentProgram;zn===!0&&(go=B1($2,Z2,tt));let Su=!1,Is=!1,el=!1;const U0=go.getUniforms(),Xr=Le.uniforms;if(fe.useProgram(go.program)&&(Su=!0,Is=!0,el=!0),$2.id!==Q2&&(Q2=$2.id,Is=!0),Su||x2!==M2){U0.setValue(W2,"projectionMatrix",M2.projectionMatrix),U0.setValue(W2,"viewMatrix",M2.matrixWorldInverse);const Ci=U0.map.cameraPosition;Ci!==void 0&&Ci.setValue(W2,G2.setFromMatrixPosition(M2.matrixWorld)),on.logarithmicDepthBuffer&&U0.setValue(W2,"logDepthBufFC",2/(Math.log(M2.far+1)/Math.LN2)),($2.isMeshPhongMaterial||$2.isMeshToonMaterial||$2.isMeshLambertMaterial||$2.isMeshBasicMaterial||$2.isMeshStandardMaterial||$2.isShaderMaterial)&&U0.setValue(W2,"isOrthographic",M2.isOrthographicCamera===!0),x2!==M2&&(x2=M2,Is=!0,el=!0)}if(tt.isSkinnedMesh){U0.setOptional(W2,tt,"bindMatrix"),U0.setOptional(W2,tt,"bindMatrixInverse");const Ci=tt.skeleton;Ci&&(Ci.boneTexture===null&&Ci.computeBoneTexture(),U0.setValue(W2,"boneTexture",Ci.boneTexture,en))}tt.isBatchedMesh&&(U0.setOptional(W2,tt,"batchingTexture"),U0.setValue(W2,"batchingTexture",tt._matricesTexture,en));const nl=it.morphAttributes;if((nl.position!==void 0||nl.normal!==void 0||nl.color!==void 0)&&ae.update(tt,it,go),(Is||Le.receiveShadow!==tt.receiveShadow)&&(Le.receiveShadow=tt.receiveShadow,U0.setValue(W2,"receiveShadow",tt.receiveShadow)),$2.isMeshGouraudMaterial&&$2.envMap!==null&&(Xr.envMap.value=xe,Xr.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),$2.isMeshStandardMaterial&&$2.envMap===null&&Z2.environment!==null&&(Xr.envMapIntensity.value=Z2.environmentIntensity),Is&&(U0.setValue(W2,"toneMappingExposure",h2.toneMappingExposure),Le.needsLights&&np(Xr,el),Xt&&$2.fog===!0&&Mt.refreshFogUniforms(Xr,Xt),Mt.refreshMaterialUniforms(Xr,$2,Dt,mt,r2.state.transmissionRenderTarget[M2.id]),xc.upload(W2,wu(Le),Xr,en)),$2.isShaderMaterial&&$2.uniformsNeedUpdate===!0&&(xc.upload(W2,wu(Le),Xr,en),$2.uniformsNeedUpdate=!1),$2.isSpriteMaterial&&U0.setValue(W2,"center",tt.center),U0.setValue(W2,"modelViewMatrix",tt.modelViewMatrix),U0.setValue(W2,"normalMatrix",tt.normalMatrix),U0.setValue(W2,"modelMatrix",tt.matrixWorld),$2.isShaderMaterial||$2.isRawShaderMaterial){const Ci=$2.uniformsGroups;for(let il=0,rp=Ci.length;il<rp;il++){const xu=Ci[il];Xe.update(xu,go),Xe.bind(xu,go)}}return go}function np(M2,Z2){M2.ambientLightColor.needsUpdate=Z2,M2.lightProbe.needsUpdate=Z2,M2.directionalLights.needsUpdate=Z2,M2.directionalLightShadows.needsUpdate=Z2,M2.pointLights.needsUpdate=Z2,M2.pointLightShadows.needsUpdate=Z2,M2.spotLights.needsUpdate=Z2,M2.spotLightShadows.needsUpdate=Z2,M2.rectAreaLights.needsUpdate=Z2,M2.hemisphereLights.needsUpdate=Z2}function ip(M2){return M2.isMeshLambertMaterial||M2.isMeshToonMaterial||M2.isMeshPhongMaterial||M2.isMeshStandardMaterial||M2.isShadowMaterial||M2.isShaderMaterial&&M2.lights===!0}this.getActiveCubeFace=function(){return j2},this.getActiveMipmapLevel=function(){return R2},this.getRenderTarget=function(){return D2},this.setRenderTargetTextures=function(M2,Z2,it){be.get(M2.texture).__webglTexture=Z2,be.get(M2.depthTexture).__webglTexture=it;const $2=be.get(M2);$2.__hasExternalTextures=!0,$2.__autoAllocateDepthBuffer=it===void 0,$2.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$2.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M2,Z2){const it=be.get(M2);it.__webglFramebuffer=Z2,it.__useDefaultFramebuffer=Z2===void 0},this.setRenderTarget=function(M2,Z2=0,it=0){D2=M2,j2=Z2,R2=it;let $2=!0,tt=null,Xt=!1,he=!1;if(M2){const xe=be.get(M2);xe.__useDefaultFramebuffer!==void 0?(fe.bindFramebuffer(W2.FRAMEBUFFER,null),$2=!1):xe.__webglFramebuffer===void 0?en.setupRenderTarget(M2):xe.__hasExternalTextures&&en.rebindTextures(M2,be.get(M2.texture).__webglTexture,be.get(M2.depthTexture).__webglTexture);const Pe=M2.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(he=!0);const He=be.get(M2).__webglFramebuffer;M2.isWebGLCubeRenderTarget?(Array.isArray(He[Z2])?tt=He[Z2][it]:tt=He[Z2],Xt=!0):M2.samples>0&&en.useMultisampledRTT(M2)===!1?tt=be.get(M2).__webglMultisampledFramebuffer:Array.isArray(He)?tt=He[it]:tt=He,g2.copy(M2.viewport),Y2.copy(M2.scissor),st=M2.scissorTest}else g2.copy(xt).multiplyScalar(Dt).floor(),Y2.copy(ie).multiplyScalar(Dt).floor(),st=Se;if(fe.bindFramebuffer(W2.FRAMEBUFFER,tt)&&$2&&fe.drawBuffers(M2,tt),fe.viewport(g2),fe.scissor(Y2),fe.setScissorTest(st),Xt){const xe=be.get(M2.texture);W2.framebufferTexture2D(W2.FRAMEBUFFER,W2.COLOR_ATTACHMENT0,W2.TEXTURE_CUBE_MAP_POSITIVE_X+Z2,xe.__webglTexture,it)}else if(he){const xe=be.get(M2.texture),Pe=Z2||0;W2.framebufferTextureLayer(W2.FRAMEBUFFER,W2.COLOR_ATTACHMENT0,xe.__webglTexture,it||0,Pe)}Q2=-1},this.readRenderTargetPixels=function(M2,Z2,it,$2,tt,Xt,he){if(!(M2&&M2.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=be.get(M2).__webglFramebuffer;if(M2.isWebGLCubeRenderTarget&&he!==void 0&&(de=de[he]),de){fe.bindFramebuffer(W2.FRAMEBUFFER,de);try{const xe=M2.texture,Pe=xe.format,He=xe.type;if(!on.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!on.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z2>=0&&Z2<=M2.width-$2&&it>=0&&it<=M2.height-tt&&W2.readPixels(Z2,it,$2,tt,re.convert(Pe),re.convert(He),Xt)}finally{const xe=D2!==null?be.get(D2).__webglFramebuffer:null;fe.bindFramebuffer(W2.FRAMEBUFFER,xe)}}},this.copyFramebufferToTexture=function(M2,Z2,it=0){const $2=Math.pow(2,-it),tt=Math.floor(Z2.image.width*$2),Xt=Math.floor(Z2.image.height*$2);en.setTexture2D(Z2,0),W2.copyTexSubImage2D(W2.TEXTURE_2D,it,0,0,M2.x,M2.y,tt,Xt),fe.unbindTexture()},this.copyTextureToTexture=function(M2,Z2,it,$2=0){const tt=Z2.image.width,Xt=Z2.image.height,he=re.convert(it.format),de=re.convert(it.type);en.setTexture2D(it,0),W2.pixelStorei(W2.UNPACK_FLIP_Y_WEBGL,it.flipY),W2.pixelStorei(W2.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),W2.pixelStorei(W2.UNPACK_ALIGNMENT,it.unpackAlignment),Z2.isDataTexture?W2.texSubImage2D(W2.TEXTURE_2D,$2,M2.x,M2.y,tt,Xt,he,de,Z2.image.data):Z2.isCompressedTexture?W2.compressedTexSubImage2D(W2.TEXTURE_2D,$2,M2.x,M2.y,Z2.mipmaps[0].width,Z2.mipmaps[0].height,he,Z2.mipmaps[0].data):W2.texSubImage2D(W2.TEXTURE_2D,$2,M2.x,M2.y,he,de,Z2.image),$2===0&&it.generateMipmaps&&W2.generateMipmap(W2.TEXTURE_2D),fe.unbindTexture()},this.copyTextureToTexture3D=function(M2,Z2,it,$2,tt=0){const Xt=M2.max.x-M2.min.x,he=M2.max.y-M2.min.y,de=M2.max.z-M2.min.z,xe=re.convert($2.format),Pe=re.convert($2.type);let He;if($2.isData3DTexture)en.setTexture3D($2,0),He=W2.TEXTURE_3D;else if($2.isDataArrayTexture||$2.isCompressedArrayTexture)en.setTexture2DArray($2,0),He=W2.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}W2.pixelStorei(W2.UNPACK_FLIP_Y_WEBGL,$2.flipY),W2.pixelStorei(W2.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$2.premultiplyAlpha),W2.pixelStorei(W2.UNPACK_ALIGNMENT,$2.unpackAlignment);const qe=W2.getParameter(W2.UNPACK_ROW_LENGTH),r0=W2.getParameter(W2.UNPACK_IMAGE_HEIGHT),N0=W2.getParameter(W2.UNPACK_SKIP_PIXELS),ai=W2.getParameter(W2.UNPACK_SKIP_ROWS),Br=W2.getParameter(W2.UNPACK_SKIP_IMAGES),gn=it.isCompressedTexture?it.mipmaps[tt]:it.image;W2.pixelStorei(W2.UNPACK_ROW_LENGTH,gn.width),W2.pixelStorei(W2.UNPACK_IMAGE_HEIGHT,gn.height),W2.pixelStorei(W2.UNPACK_SKIP_PIXELS,M2.min.x),W2.pixelStorei(W2.UNPACK_SKIP_ROWS,M2.min.y),W2.pixelStorei(W2.UNPACK_SKIP_IMAGES,M2.min.z),it.isDataTexture||it.isData3DTexture?W2.texSubImage3D(He,tt,Z2.x,Z2.y,Z2.z,Xt,he,de,xe,Pe,gn.data):$2.isCompressedArrayTexture?W2.compressedTexSubImage3D(He,tt,Z2.x,Z2.y,Z2.z,Xt,he,de,xe,gn.data):W2.texSubImage3D(He,tt,Z2.x,Z2.y,Z2.z,Xt,he,de,xe,Pe,gn),W2.pixelStorei(W2.UNPACK_ROW_LENGTH,qe),W2.pixelStorei(W2.UNPACK_IMAGE_HEIGHT,r0),W2.pixelStorei(W2.UNPACK_SKIP_PIXELS,N0),W2.pixelStorei(W2.UNPACK_SKIP_ROWS,ai),W2.pixelStorei(W2.UNPACK_SKIP_IMAGES,Br),tt===0&&$2.generateMipmaps&&W2.generateMipmap(He),fe.unbindTexture()},this.initTexture=function(M2){M2.isCubeTexture?en.setTextureCube(M2,0):M2.isData3DTexture?en.setTexture3D(M2,0):M2.isDataArrayTexture||M2.isCompressedArrayTexture?en.setTexture2DArray(M2,0):en.setTexture2D(M2,0),fe.unbindTexture()},this.resetState=function(){j2=0,R2=0,D2=null,fe.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ms}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(a){this._outputColorSpace=a;const g=this.getContext();g.drawingBufferColorSpace=a===za?"display-p3":"srgb",g.unpackColorSpace=Pn.workingColorSpace===Zc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(a){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=a}}class ch2 extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(a,g){return super.copy(a,g),a.background!==null&&(this.background=a.background.clone()),a.environment!==null&&(this.environment=a.environment.clone()),a.fog!==null&&(this.fog=a.fog.clone()),this.backgroundBlurriness=a.backgroundBlurriness,this.backgroundIntensity=a.backgroundIntensity,this.backgroundRotation.copy(a.backgroundRotation),this.environmentIntensity=a.environmentIntensity,this.environmentRotation.copy(a.environmentRotation),a.overrideMaterial!==null&&(this.overrideMaterial=a.overrideMaterial.clone()),this.matrixAutoUpdate=a.matrixAutoUpdate,this}toJSON(a){const g=super.toJSON(a);return this.fog!==null&&(g.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(g.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(g.object.backgroundIntensity=this.backgroundIntensity),g.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(g.object.environmentIntensity=this.environmentIntensity),g.object.environmentRotation=this.environmentRotation.toArray(),g}}class _h2{constructor(a,g){this.isInterleavedBuffer=!0,this.array=a,this.stride=g,this.count=a!==void 0?a.length/g:0,this.usage=Ma,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=mo()}onUploadCallback(){}set needsUpdate(a){a===!0&&this.version++}get updateRange(){return UV("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(a){return this.usage=a,this}addUpdateRange(a,g){this.updateRanges.push({start:a,count:g})}clearUpdateRanges(){this.updateRanges.length=0}copy(a){return this.array=new a.array.constructor(a.array),this.count=a.count,this.stride=a.stride,this.usage=a.usage,this}copyAt(a,g,w){a*=this.stride,w*=g.stride;for(let x=0,E=this.stride;x<E;x++)this.array[a+x]=g.array[w+x];return this}set(a,g=0){return this.array.set(a,g),this}clone(a){a.arrayBuffers===void 0&&(a.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mo()),a.arrayBuffers[this.array.buffer._uuid]===void 0&&(a.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const g=new this.array.constructor(a.arrayBuffers[this.array.buffer._uuid]),w=new this.constructor(g,this.stride);return w.setUsage(this.usage),w}onUpload(a){return this.onUploadCallback=a,this}toJSON(a){return a.arrayBuffers===void 0&&(a.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=mo()),a.arrayBuffers[this.array.buffer._uuid]===void 0&&(a.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Li=new S2;class qa{constructor(a,g,w,x=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=a,this.itemSize=g,this.offset=w,this.normalized=x}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(a){this.data.needsUpdate=a}applyMatrix4(a){for(let g=0,w=this.data.count;g<w;g++)Li.fromBufferAttribute(this,g),Li.applyMatrix4(a),this.setXYZ(g,Li.x,Li.y,Li.z);return this}applyNormalMatrix(a){for(let g=0,w=this.count;g<w;g++)Li.fromBufferAttribute(this,g),Li.applyNormalMatrix(a),this.setXYZ(g,Li.x,Li.y,Li.z);return this}transformDirection(a){for(let g=0,w=this.count;g<w;g++)Li.fromBufferAttribute(this,g),Li.transformDirection(a),this.setXYZ(g,Li.x,Li.y,Li.z);return this}getComponent(a,g){let w=this.array[a*this.data.stride+this.offset+g];return this.normalized&&(w=ao(w,this.array)),w}setComponent(a,g,w){return this.normalized&&(w=jn(w,this.array)),this.data.array[a*this.data.stride+this.offset+g]=w,this}setX(a,g){return this.normalized&&(g=jn(g,this.array)),this.data.array[a*this.data.stride+this.offset]=g,this}setY(a,g){return this.normalized&&(g=jn(g,this.array)),this.data.array[a*this.data.stride+this.offset+1]=g,this}setZ(a,g){return this.normalized&&(g=jn(g,this.array)),this.data.array[a*this.data.stride+this.offset+2]=g,this}setW(a,g){return this.normalized&&(g=jn(g,this.array)),this.data.array[a*this.data.stride+this.offset+3]=g,this}getX(a){let g=this.data.array[a*this.data.stride+this.offset];return this.normalized&&(g=ao(g,this.array)),g}getY(a){let g=this.data.array[a*this.data.stride+this.offset+1];return this.normalized&&(g=ao(g,this.array)),g}getZ(a){let g=this.data.array[a*this.data.stride+this.offset+2];return this.normalized&&(g=ao(g,this.array)),g}getW(a){let g=this.data.array[a*this.data.stride+this.offset+3];return this.normalized&&(g=ao(g,this.array)),g}setXY(a,g,w){return a=a*this.data.stride+this.offset,this.normalized&&(g=jn(g,this.array),w=jn(w,this.array)),this.data.array[a+0]=g,this.data.array[a+1]=w,this}setXYZ(a,g,w,x){return a=a*this.data.stride+this.offset,this.normalized&&(g=jn(g,this.array),w=jn(w,this.array),x=jn(x,this.array)),this.data.array[a+0]=g,this.data.array[a+1]=w,this.data.array[a+2]=x,this}setXYZW(a,g,w,x,E){return a=a*this.data.stride+this.offset,this.normalized&&(g=jn(g,this.array),w=jn(w,this.array),x=jn(x,this.array),E=jn(E,this.array)),this.data.array[a+0]=g,this.data.array[a+1]=w,this.data.array[a+2]=x,this.data.array[a+3]=E,this}clone(a){if(a===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const g=[];for(let w=0;w<this.count;w++){const x=w*this.data.stride+this.offset;for(let E=0;E<this.itemSize;E++)g.push(this.data.array[x+E])}return new _i(new this.array.constructor(g),this.itemSize,this.normalized)}else return a.interleavedBuffers===void 0&&(a.interleavedBuffers={}),a.interleavedBuffers[this.data.uuid]===void 0&&(a.interleavedBuffers[this.data.uuid]=this.data.clone(a)),new qa(a.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(a){if(a===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const g=[];for(let w=0;w<this.count;w++){const x=w*this.data.stride+this.offset;for(let E=0;E<this.itemSize;E++)g.push(this.data.array[x+E])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:g,normalized:this.normalized}}else return a.interleavedBuffers===void 0&&(a.interleavedBuffers={}),a.interleavedBuffers[this.data.uuid]===void 0&&(a.interleavedBuffers[this.data.uuid]=this.data.toJSON(a)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Uz=new S2,Gz=new bn,Wz=new bn,ah2=new S2,Hz=new _e,pc=new S2,$6=new Yo,zz=new _e,ta=new Jf;class eQ extends q0{constructor(a,g){super(a,g),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=BH,this.bindMatrix=new _e,this.bindMatrixInverse=new _e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const a=this.geometry;this.boundingBox===null&&(this.boundingBox=new Qo),this.boundingBox.makeEmpty();const g=a.getAttribute("position");for(let w=0;w<g.count;w++)this.getVertexPosition(w,pc),this.boundingBox.expandByPoint(pc)}computeBoundingSphere(){const a=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Yo),this.boundingSphere.makeEmpty();const g=a.getAttribute("position");for(let w=0;w<g.count;w++)this.getVertexPosition(w,pc),this.boundingSphere.expandByPoint(pc)}copy(a,g){return super.copy(a,g),this.bindMode=a.bindMode,this.bindMatrix.copy(a.bindMatrix),this.bindMatrixInverse.copy(a.bindMatrixInverse),this.skeleton=a.skeleton,a.boundingBox!==null&&(this.boundingBox=a.boundingBox.clone()),a.boundingSphere!==null&&(this.boundingSphere=a.boundingSphere.clone()),this}raycast(a,g){const w=this.material,x=this.matrixWorld;w!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$6.copy(this.boundingSphere),$6.applyMatrix4(x),a.ray.intersectsSphere($6)!==!1&&(zz.copy(x).invert(),ta.copy(a.ray).applyMatrix4(zz),!(this.boundingBox!==null&&ta.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(a,g,ta)))}getVertexPosition(a,g){return super.getVertexPosition(a,g),this.applyBoneTransform(a,g),g}bind(a,g){this.skeleton=a,g===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),g=this.matrixWorld),this.bindMatrix.copy(g),this.bindMatrixInverse.copy(g).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const a=new bn,g=this.geometry.attributes.skinWeight;for(let w=0,x=g.count;w<x;w++){a.fromBufferAttribute(g,w);const E=1/a.manhattanLength();E!==1/0?a.multiplyScalar(E):a.set(1,0,0,0),g.setXYZW(w,a.x,a.y,a.z,a.w)}}updateMatrixWorld(a){super.updateMatrixWorld(a),this.bindMode===BH?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===g42?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(a,g){const w=this.skeleton,x=this.geometry;Gz.fromBufferAttribute(x.attributes.skinIndex,a),Wz.fromBufferAttribute(x.attributes.skinWeight,a),Uz.copy(g).applyMatrix4(this.bindMatrix),g.set(0,0,0);for(let E=0;E<4;E++){const L=Wz.getComponent(E);if(L!==0){const O=Gz.getComponent(E);Hz.multiplyMatrices(w.bones[O].matrixWorld,w.boneInverses[O]),g.addScaledVector(ah2.copy(Uz).applyMatrix4(Hz),L)}}return g.applyMatrix4(this.bindMatrixInverse)}}class Oc extends Nn{constructor(){super(),this.isBone=!0,this.type="Bone"}}class nQ extends E0{constructor(a=null,g=1,w=1,x,E,L,O,G,h=ji,X=ji,Z,K){super(null,L,O,G,h,X,x,E,Z,K),this.isDataTexture=!0,this.image={data:a,width:g,height:w},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Vz=new _e,hh2=new _e;class $c{constructor(a=[],g=[]){this.uuid=mo(),this.bones=a.slice(0),this.boneInverses=g,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const a=this.bones,g=this.boneInverses;if(this.boneMatrices=new Float32Array(a.length*16),g.length===0)this.calculateInverses();else if(a.length!==g.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let w=0,x=this.bones.length;w<x;w++)this.boneInverses.push(new _e)}}calculateInverses(){this.boneInverses.length=0;for(let a=0,g=this.bones.length;a<g;a++){const w=new _e;this.bones[a]&&w.copy(this.bones[a].matrixWorld).invert(),this.boneInverses.push(w)}}pose(){for(let a=0,g=this.bones.length;a<g;a++){const w=this.bones[a];w&&w.matrixWorld.copy(this.boneInverses[a]).invert()}for(let a=0,g=this.bones.length;a<g;a++){const w=this.bones[a];w&&(w.parent&&w.parent.isBone?(w.matrix.copy(w.parent.matrixWorld).invert(),w.matrix.multiply(w.matrixWorld)):w.matrix.copy(w.matrixWorld),w.matrix.decompose(w.position,w.quaternion,w.scale))}}update(){const a=this.bones,g=this.boneInverses,w=this.boneMatrices,x=this.boneTexture;for(let E=0,L=a.length;E<L;E++){const O=a[E]?a[E].matrixWorld:hh2;Vz.multiplyMatrices(O,g[E]),Vz.toArray(w,E*16)}x!==null&&(x.needsUpdate=!0)}clone(){return new $c(this.bones,this.boneInverses)}computeBoneTexture(){let a=Math.sqrt(this.bones.length*4);a=Math.ceil(a/4)*4,a=Math.max(a,4);const g=new Float32Array(a*a*4);g.set(this.boneMatrices);const w=new nQ(g,a,a,ho,Wo);return w.needsUpdate=!0,this.boneMatrices=g,this.boneTexture=w,this}getBoneByName(a){for(let g=0,w=this.bones.length;g<w;g++){const x=this.bones[g];if(x.name===a)return x}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(a,g){this.uuid=a.uuid;for(let w=0,x=a.bones.length;w<x;w++){const E=a.bones[w];let L=g[E];L===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",E),L=new Oc),this.bones.push(L),this.boneInverses.push(new _e().fromArray(a.boneInverses[w]))}return this.init(),this}toJSON(){const a={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};a.uuid=this.uuid;const g=this.bones,w=this.boneInverses;for(let x=0,E=g.length;x<E;x++){const L=g[x];a.bones.push(L.uuid);const O=w[x];a.boneInverses.push(O.toArray())}return a}}class Ea extends _i{constructor(a,g,w,x=1){super(a,g,w),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=x}copy(a){return super.copy(a),this.meshPerAttribute=a.meshPerAttribute,this}toJSON(){const a=super.toJSON();return a.meshPerAttribute=this.meshPerAttribute,a.isInstancedBufferAttribute=!0,a}}const Kl=new _e,Qz=new _e,cc=[],Yz=new Qo,mh2=new _e,Ef=new q0,Rf=new Yo;class dh2 extends q0{constructor(a,g,w){super(a,g),this.isInstancedMesh=!0,this.instanceMatrix=new Ea(new Float32Array(w*16),16),this.instanceColor=null,this.morphTexture=null,this.count=w,this.boundingBox=null,this.boundingSphere=null;for(let x=0;x<w;x++)this.setMatrixAt(x,mh2)}computeBoundingBox(){const a=this.geometry,g=this.count;this.boundingBox===null&&(this.boundingBox=new Qo),a.boundingBox===null&&a.computeBoundingBox(),this.boundingBox.makeEmpty();for(let w=0;w<g;w++)this.getMatrixAt(w,Kl),Yz.copy(a.boundingBox).applyMatrix4(Kl),this.boundingBox.union(Yz)}computeBoundingSphere(){const a=this.geometry,g=this.count;this.boundingSphere===null&&(this.boundingSphere=new Yo),a.boundingSphere===null&&a.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let w=0;w<g;w++)this.getMatrixAt(w,Kl),Rf.copy(a.boundingSphere).applyMatrix4(Kl),this.boundingSphere.union(Rf)}copy(a,g){return super.copy(a,g),this.instanceMatrix.copy(a.instanceMatrix),a.morphTexture!==null&&(this.morphTexture=a.morphTexture.clone()),a.instanceColor!==null&&(this.instanceColor=a.instanceColor.clone()),this.count=a.count,a.boundingBox!==null&&(this.boundingBox=a.boundingBox.clone()),a.boundingSphere!==null&&(this.boundingSphere=a.boundingSphere.clone()),this}getColorAt(a,g){g.fromArray(this.instanceColor.array,a*3)}getMatrixAt(a,g){g.fromArray(this.instanceMatrix.array,a*16)}getMorphAt(a,g){const w=g.morphTargetInfluences,x=this.morphTexture.source.data.data,E=w.length+1,L=a*E+1;for(let O=0;O<w.length;O++)w[O]=x[L+O]}raycast(a,g){const w=this.matrixWorld,x=this.count;if(Ef.geometry=this.geometry,Ef.material=this.material,Ef.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rf.copy(this.boundingSphere),Rf.applyMatrix4(w),a.ray.intersectsSphere(Rf)!==!1))for(let E=0;E<x;E++){this.getMatrixAt(E,Kl),Qz.multiplyMatrices(w,Kl),Ef.matrixWorld=Qz,Ef.raycast(a,cc);for(let L=0,O=cc.length;L<O;L++){const G=cc[L];G.instanceId=E,G.object=this,g.push(G)}cc.length=0}}setColorAt(a,g){this.instanceColor===null&&(this.instanceColor=new Ea(new Float32Array(this.instanceMatrix.count*3),3)),g.toArray(this.instanceColor.array,a*3)}setMatrixAt(a,g){g.toArray(this.instanceMatrix.array,a*16)}setMorphAt(a,g){const w=g.morphTargetInfluences,x=w.length+1;this.morphTexture===null&&(this.morphTexture=new nQ(new Float32Array(x*this.count),x,this.count,DV,Wo));const E=this.morphTexture.source.data.data;let L=0;for(let h=0;h<w.length;h++)L+=w[h];const O=this.geometry.morphTargetsRelative?1:1-L,G=x*a;E[G]=O,E.set(w,G+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Kf extends kr{constructor(a){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.map=a.map,this.linewidth=a.linewidth,this.linecap=a.linecap,this.linejoin=a.linejoin,this.fog=a.fog,this}}const jc=new S2,Nc=new S2,Xz=new _e,bf=new Jf,_c=new Yo,ea=new S2,Zz=new S2;class Au extends Nn{constructor(a=new J0,g=new Kf){super(),this.isLine=!0,this.type="Line",this.geometry=a,this.material=g,this.updateMorphTargets()}copy(a,g){return super.copy(a,g),this.material=Array.isArray(a.material)?a.material.slice():a.material,this.geometry=a.geometry,this}computeLineDistances(){const a=this.geometry;if(a.index===null){const g=a.attributes.position,w=[0];for(let x=1,E=g.count;x<E;x++)jc.fromBufferAttribute(g,x-1),Nc.fromBufferAttribute(g,x),w[x]=w[x-1],w[x]+=jc.distanceTo(Nc);a.setAttribute("lineDistance",new t0(w,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(a,g){const w=this.geometry,x=this.matrixWorld,E=a.params.Line.threshold,L=w.drawRange;if(w.boundingSphere===null&&w.computeBoundingSphere(),_c.copy(w.boundingSphere),_c.applyMatrix4(x),_c.radius+=E,a.ray.intersectsSphere(_c)===!1)return;Xz.copy(x).invert(),bf.copy(a.ray).applyMatrix4(Xz);const O=E/((this.scale.x+this.scale.y+this.scale.z)/3),G=O*O,h=this.isLineSegments?2:1,X=w.index,K=w.attributes.position;if(X!==null){const e2=Math.max(0,L.start),l2=Math.min(X.count,L.start+L.count);for(let p2=e2,r2=l2-1;p2<r2;p2+=h){const o2=X.getX(p2),k2=X.getX(p2+1),h2=ac(this,a,bf,G,o2,k2);h2&&g.push(h2)}if(this.isLineLoop){const p2=X.getX(l2-1),r2=X.getX(e2),o2=ac(this,a,bf,G,p2,r2);o2&&g.push(o2)}}else{const e2=Math.max(0,L.start),l2=Math.min(K.count,L.start+L.count);for(let p2=e2,r2=l2-1;p2<r2;p2+=h){const o2=ac(this,a,bf,G,p2,p2+1);o2&&g.push(o2)}if(this.isLineLoop){const p2=ac(this,a,bf,G,l2-1,e2);p2&&g.push(p2)}}}updateMorphTargets(){const g=this.geometry.morphAttributes,w=Object.keys(g);if(w.length>0){const x=g[w[0]];if(x!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let E=0,L=x.length;E<L;E++){const O=x[E].name||String(E);this.morphTargetInfluences.push(0),this.morphTargetDictionary[O]=E}}}}}function ac(D,a,g,w,x,E){const L=D.geometry.attributes.position;if(jc.fromBufferAttribute(L,x),Nc.fromBufferAttribute(L,E),g.distanceSqToSegment(jc,Nc,ea,Zz)>w)return;ea.applyMatrix4(D.matrixWorld);const G=a.ray.origin.distanceTo(ea);if(!(G<a.near||G>a.far))return{distance:G,point:Zz.clone().applyMatrix4(D.matrixWorld),index:x,face:null,faceIndex:null,object:D}}const qz=new S2,Jz=new S2;class iQ extends Au{constructor(a,g){super(a,g),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const a=this.geometry;if(a.index===null){const g=a.attributes.position,w=[];for(let x=0,E=g.count;x<E;x+=2)qz.fromBufferAttribute(g,x),Jz.fromBufferAttribute(g,x+1),w[x]=x===0?0:w[x-1],w[x+1]=w[x]+qz.distanceTo(Jz);a.setAttribute("lineDistance",new t0(w,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ah2 extends Au{constructor(a,g){super(a,g),this.isLineLoop=!0,this.type="LineLoop"}}class rQ extends kr{constructor(a){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.map=a.map,this.alphaMap=a.alphaMap,this.size=a.size,this.sizeAttenuation=a.sizeAttenuation,this.fog=a.fog,this}}const Kz=new _e,Ra=new Jf,hc=new Yo,mc=new S2;class gh2 extends Nn{constructor(a=new J0,g=new rQ){super(),this.isPoints=!0,this.type="Points",this.geometry=a,this.material=g,this.updateMorphTargets()}copy(a,g){return super.copy(a,g),this.material=Array.isArray(a.material)?a.material.slice():a.material,this.geometry=a.geometry,this}raycast(a,g){const w=this.geometry,x=this.matrixWorld,E=a.params.Points.threshold,L=w.drawRange;if(w.boundingSphere===null&&w.computeBoundingSphere(),hc.copy(w.boundingSphere),hc.applyMatrix4(x),hc.radius+=E,a.ray.intersectsSphere(hc)===!1)return;Kz.copy(x).invert(),Ra.copy(a.ray).applyMatrix4(Kz);const O=E/((this.scale.x+this.scale.y+this.scale.z)/3),G=O*O,h=w.index,Z=w.attributes.position;if(h!==null){const K=Math.max(0,L.start),e2=Math.min(h.count,L.start+L.count);for(let l2=K,p2=e2;l2<p2;l2++){const r2=h.getX(l2);mc.fromBufferAttribute(Z,r2),$z(mc,r2,G,x,a,g,this)}}else{const K=Math.max(0,L.start),e2=Math.min(Z.count,L.start+L.count);for(let l2=K,p2=e2;l2<p2;l2++)mc.fromBufferAttribute(Z,l2),$z(mc,l2,G,x,a,g,this)}}updateMorphTargets(){const g=this.geometry.morphAttributes,w=Object.keys(g);if(w.length>0){const x=g[w[0]];if(x!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let E=0,L=x.length;E<L;E++){const O=x[E].name||String(E);this.morphTargetInfluences.push(0),this.morphTargetDictionary[O]=E}}}}}function $z(D,a,g,w,x,E,L){const O=Ra.distanceSqToPoint(D);if(O<g){const G=new S2;Ra.closestPointToPoint(D,G),G.applyMatrix4(w);const h=x.ray.origin.distanceTo(G);if(h<x.near||h>x.far)return;E.push({distance:h,distanceToRay:Math.sqrt(O),point:G,index:a,face:null,object:L})}}class Ao{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(a,g){const w=this.getUtoTmapping(a);return this.getPoint(w,g)}getPoints(a=5){const g=[];for(let w=0;w<=a;w++)g.push(this.getPoint(w/a));return g}getSpacedPoints(a=5){const g=[];for(let w=0;w<=a;w++)g.push(this.getPointAt(w/a));return g}getLength(){const a=this.getLengths();return a[a.length-1]}getLengths(a=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const g=[];let w,x=this.getPoint(0),E=0;g.push(0);for(let L=1;L<=a;L++)w=this.getPoint(L/a),E+=w.distanceTo(x),g.push(E),x=w;return this.cacheArcLengths=g,g}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(a,g){const w=this.getLengths();let x=0;const E=w.length;let L;g?L=g:L=a*w[E-1];let O=0,G=E-1,h;for(;O<=G;)if(x=Math.floor(O+(G-O)/2),h=w[x]-L,h<0)O=x+1;else if(h>0)G=x-1;else{G=x;break}if(x=G,w[x]===L)return x/(E-1);const X=w[x],K=w[x+1]-X,e2=(L-X)/K;return(x+e2)/(E-1)}getTangent(a,g){let x=a-1e-4,E=a+1e-4;x<0&&(x=0),E>1&&(E=1);const L=this.getPoint(x),O=this.getPoint(E),G=g||(L.isVector2?new Lt:new S2);return G.copy(O).sub(L).normalize(),G}getTangentAt(a,g){const w=this.getUtoTmapping(a);return this.getTangent(w,g)}computeFrenetFrames(a,g){const w=new S2,x=[],E=[],L=[],O=new S2,G=new _e;for(let e2=0;e2<=a;e2++){const l2=e2/a;x[e2]=this.getTangentAt(l2,new S2)}E[0]=new S2,L[0]=new S2;let h=Number.MAX_VALUE;const X=Math.abs(x[0].x),Z=Math.abs(x[0].y),K=Math.abs(x[0].z);X<=h&&(h=X,w.set(1,0,0)),Z<=h&&(h=Z,w.set(0,1,0)),K<=h&&w.set(0,0,1),O.crossVectors(x[0],w).normalize(),E[0].crossVectors(x[0],O),L[0].crossVectors(x[0],E[0]);for(let e2=1;e2<=a;e2++){if(E[e2]=E[e2-1].clone(),L[e2]=L[e2-1].clone(),O.crossVectors(x[e2-1],x[e2]),O.length()>Number.EPSILON){O.normalize();const l2=Math.acos(j0(x[e2-1].dot(x[e2]),-1,1));E[e2].applyMatrix4(G.makeRotationAxis(O,l2))}L[e2].crossVectors(x[e2],E[e2])}if(g===!0){let e2=Math.acos(j0(E[0].dot(E[a]),-1,1));e2/=a,x[0].dot(O.crossVectors(E[0],E[a]))>0&&(e2=-e2);for(let l2=1;l2<=a;l2++)E[l2].applyMatrix4(G.makeRotationAxis(x[l2],e2*l2)),L[l2].crossVectors(x[l2],E[l2])}return{tangents:x,normals:E,binormals:L}}clone(){return new this.constructor().copy(this)}copy(a){return this.arcLengthDivisions=a.arcLengthDivisions,this}toJSON(){const a={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return a.arcLengthDivisions=this.arcLengthDivisions,a.type=this.type,a}fromJSON(a){return this.arcLengthDivisions=a.arcLengthDivisions,this}}class Ja extends Ao{constructor(a=0,g=0,w=1,x=1,E=0,L=Math.PI*2,O=!1,G=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=a,this.aY=g,this.xRadius=w,this.yRadius=x,this.aStartAngle=E,this.aEndAngle=L,this.aClockwise=O,this.aRotation=G}getPoint(a,g=new Lt){const w=g,x=Math.PI*2;let E=this.aEndAngle-this.aStartAngle;const L=Math.abs(E)<Number.EPSILON;for(;E<0;)E+=x;for(;E>x;)E-=x;E<Number.EPSILON&&(L?E=0:E=x),this.aClockwise===!0&&!L&&(E===x?E=-x:E=E-x);const O=this.aStartAngle+a*E;let G=this.aX+this.xRadius*Math.cos(O),h=this.aY+this.yRadius*Math.sin(O);if(this.aRotation!==0){const X=Math.cos(this.aRotation),Z=Math.sin(this.aRotation),K=G-this.aX,e2=h-this.aY;G=K*X-e2*Z+this.aX,h=K*Z+e2*X+this.aY}return w.set(G,h)}copy(a){return super.copy(a),this.aX=a.aX,this.aY=a.aY,this.xRadius=a.xRadius,this.yRadius=a.yRadius,this.aStartAngle=a.aStartAngle,this.aEndAngle=a.aEndAngle,this.aClockwise=a.aClockwise,this.aRotation=a.aRotation,this}toJSON(){const a=super.toJSON();return a.aX=this.aX,a.aY=this.aY,a.xRadius=this.xRadius,a.yRadius=this.yRadius,a.aStartAngle=this.aStartAngle,a.aEndAngle=this.aEndAngle,a.aClockwise=this.aClockwise,a.aRotation=this.aRotation,a}fromJSON(a){return super.fromJSON(a),this.aX=a.aX,this.aY=a.aY,this.xRadius=a.xRadius,this.yRadius=a.yRadius,this.aStartAngle=a.aStartAngle,this.aEndAngle=a.aEndAngle,this.aClockwise=a.aClockwise,this.aRotation=a.aRotation,this}}class yh2 extends Ja{constructor(a,g,w,x,E,L){super(a,g,w,w,x,E,L),this.isArcCurve=!0,this.type="ArcCurve"}}function Ka(){let D=0,a=0,g=0,w=0;function x(E,L,O,G){D=E,a=O,g=-3*E+3*L-2*O-G,w=2*E-2*L+O+G}return{initCatmullRom:function(E,L,O,G,h){x(L,O,h*(O-E),h*(G-L))},initNonuniformCatmullRom:function(E,L,O,G,h,X,Z){let K=(L-E)/h-(O-E)/(h+X)+(O-L)/X,e2=(O-L)/X-(G-L)/(X+Z)+(G-O)/Z;K*=X,e2*=X,x(L,O,K,e2)},calc:function(E){const L=E*E,O=L*E;return D+a*E+g*L+w*O}}}const dc=new S2,na=new Ka,ia=new Ka,ra=new Ka;class kh2 extends Ao{constructor(a=[],g=!1,w="centripetal",x=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=a,this.closed=g,this.curveType=w,this.tension=x}getPoint(a,g=new S2){const w=g,x=this.points,E=x.length,L=(E-(this.closed?0:1))*a;let O=Math.floor(L),G=L-O;this.closed?O+=O>0?0:(Math.floor(Math.abs(O)/E)+1)*E:G===0&&O===E-1&&(O=E-2,G=1);let h,X;this.closed||O>0?h=x[(O-1)%E]:(dc.subVectors(x[0],x[1]).add(x[0]),h=dc);const Z=x[O%E],K=x[(O+1)%E];if(this.closed||O+2<E?X=x[(O+2)%E]:(dc.subVectors(x[E-1],x[E-2]).add(x[E-1]),X=dc),this.curveType==="centripetal"||this.curveType==="chordal"){const e2=this.curveType==="chordal"?.5:.25;let l2=Math.pow(h.distanceToSquared(Z),e2),p2=Math.pow(Z.distanceToSquared(K),e2),r2=Math.pow(K.distanceToSquared(X),e2);p2<1e-4&&(p2=1),l2<1e-4&&(l2=p2),r2<1e-4&&(r2=p2),na.initNonuniformCatmullRom(h.x,Z.x,K.x,X.x,l2,p2,r2),ia.initNonuniformCatmullRom(h.y,Z.y,K.y,X.y,l2,p2,r2),ra.initNonuniformCatmullRom(h.z,Z.z,K.z,X.z,l2,p2,r2)}else this.curveType==="catmullrom"&&(na.initCatmullRom(h.x,Z.x,K.x,X.x,this.tension),ia.initCatmullRom(h.y,Z.y,K.y,X.y,this.tension),ra.initCatmullRom(h.z,Z.z,K.z,X.z,this.tension));return w.set(na.calc(G),ia.calc(G),ra.calc(G)),w}copy(a){super.copy(a),this.points=[];for(let g=0,w=a.points.length;g<w;g++){const x=a.points[g];this.points.push(x.clone())}return this.closed=a.closed,this.curveType=a.curveType,this.tension=a.tension,this}toJSON(){const a=super.toJSON();a.points=[];for(let g=0,w=this.points.length;g<w;g++){const x=this.points[g];a.points.push(x.toArray())}return a.closed=this.closed,a.curveType=this.curveType,a.tension=this.tension,a}fromJSON(a){super.fromJSON(a),this.points=[];for(let g=0,w=a.points.length;g<w;g++){const x=a.points[g];this.points.push(new S2().fromArray(x))}return this.closed=a.closed,this.curveType=a.curveType,this.tension=a.tension,this}}function tV(D,a,g,w,x){const E=(w-a)*.5,L=(x-g)*.5,O=D*D,G=D*O;return(2*g-2*w+E+L)*G+(-3*g+3*w-2*E-L)*O+E*D+g}function vh2(D,a){const g=1-D;return g*g*a}function wh2(D,a){return 2*(1-D)*D*a}function Bh2(D,a){return D*D*a}function jf(D,a,g,w){return vh2(D,a)+wh2(D,g)+Bh2(D,w)}function Sh2(D,a){const g=1-D;return g*g*g*a}function xh2(D,a){const g=1-D;return 3*g*g*D*a}function Ch2(D,a){return 3*(1-D)*D*D*a}function Mh2(D,a){return D*D*D*a}function Nf(D,a,g,w,x){return Sh2(D,a)+xh2(D,g)+Ch2(D,w)+Mh2(D,x)}class oQ extends Ao{constructor(a=new Lt,g=new Lt,w=new Lt,x=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=a,this.v1=g,this.v2=w,this.v3=x}getPoint(a,g=new Lt){const w=g,x=this.v0,E=this.v1,L=this.v2,O=this.v3;return w.set(Nf(a,x.x,E.x,L.x,O.x),Nf(a,x.y,E.y,L.y,O.y)),w}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this.v3.copy(a.v3),this}toJSON(){const a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a.v3=this.v3.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this.v3.fromArray(a.v3),this}}class Th2 extends Ao{constructor(a=new S2,g=new S2,w=new S2,x=new S2){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=a,this.v1=g,this.v2=w,this.v3=x}getPoint(a,g=new S2){const w=g,x=this.v0,E=this.v1,L=this.v2,O=this.v3;return w.set(Nf(a,x.x,E.x,L.x,O.x),Nf(a,x.y,E.y,L.y,O.y),Nf(a,x.z,E.z,L.z,O.z)),w}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this.v3.copy(a.v3),this}toJSON(){const a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a.v3=this.v3.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this.v3.fromArray(a.v3),this}}class sQ extends Ao{constructor(a=new Lt,g=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=a,this.v2=g}getPoint(a,g=new Lt){const w=g;return a===1?w.copy(this.v2):(w.copy(this.v2).sub(this.v1),w.multiplyScalar(a).add(this.v1)),w}getPointAt(a,g){return this.getPoint(a,g)}getTangent(a,g=new Lt){return g.subVectors(this.v2,this.v1).normalize()}getTangentAt(a,g){return this.getTangent(a,g)}copy(a){return super.copy(a),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){const a=super.toJSON();return a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class Eh2 extends Ao{constructor(a=new S2,g=new S2){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=a,this.v2=g}getPoint(a,g=new S2){const w=g;return a===1?w.copy(this.v2):(w.copy(this.v2).sub(this.v1),w.multiplyScalar(a).add(this.v1)),w}getPointAt(a,g){return this.getPoint(a,g)}getTangent(a,g=new S2){return g.subVectors(this.v2,this.v1).normalize()}getTangentAt(a,g){return this.getTangent(a,g)}copy(a){return super.copy(a),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){const a=super.toJSON();return a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class lQ extends Ao{constructor(a=new Lt,g=new Lt,w=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=a,this.v1=g,this.v2=w}getPoint(a,g=new Lt){const w=g,x=this.v0,E=this.v1,L=this.v2;return w.set(jf(a,x.x,E.x,L.x),jf(a,x.y,E.y,L.y)),w}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){const a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class Rh2 extends Ao{constructor(a=new S2,g=new S2,w=new S2){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=a,this.v1=g,this.v2=w}getPoint(a,g=new S2){const w=g,x=this.v0,E=this.v1,L=this.v2;return w.set(jf(a,x.x,E.x,L.x),jf(a,x.y,E.y,L.y),jf(a,x.z,E.z,L.z)),w}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){const a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class uQ extends Ao{constructor(a=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=a}getPoint(a,g=new Lt){const w=g,x=this.points,E=(x.length-1)*a,L=Math.floor(E),O=E-L,G=x[L===0?L:L-1],h=x[L],X=x[L>x.length-2?x.length-1:L+1],Z=x[L>x.length-3?x.length-1:L+2];return w.set(tV(O,G.x,h.x,X.x,Z.x),tV(O,G.y,h.y,X.y,Z.y)),w}copy(a){super.copy(a),this.points=[];for(let g=0,w=a.points.length;g<w;g++){const x=a.points[g];this.points.push(x.clone())}return this}toJSON(){const a=super.toJSON();a.points=[];for(let g=0,w=this.points.length;g<w;g++){const x=this.points[g];a.points.push(x.toArray())}return a}fromJSON(a){super.fromJSON(a),this.points=[];for(let g=0,w=a.points.length;g<w;g++){const x=a.points[g];this.points.push(new Lt().fromArray(x))}return this}}var eV=Object.freeze({__proto__:null,ArcCurve:yh2,CatmullRomCurve3:kh2,CubicBezierCurve:oQ,CubicBezierCurve3:Th2,EllipseCurve:Ja,LineCurve:sQ,LineCurve3:Eh2,QuadraticBezierCurve:lQ,QuadraticBezierCurve3:Rh2,SplineCurve:uQ});class bh2 extends Ao{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(a){this.curves.push(a)}closePath(){const a=this.curves[0].getPoint(0),g=this.curves[this.curves.length-1].getPoint(1);if(!a.equals(g)){const w=a.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new eV[w](g,a))}return this}getPoint(a,g){const w=a*this.getLength(),x=this.getCurveLengths();let E=0;for(;E<x.length;){if(x[E]>=w){const L=x[E]-w,O=this.curves[E],G=O.getLength(),h=G===0?0:1-L/G;return O.getPointAt(h,g)}E++}return null}getLength(){const a=this.getCurveLengths();return a[a.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const a=[];let g=0;for(let w=0,x=this.curves.length;w<x;w++)g+=this.curves[w].getLength(),a.push(g);return this.cacheLengths=a,a}getSpacedPoints(a=40){const g=[];for(let w=0;w<=a;w++)g.push(this.getPoint(w/a));return this.autoClose&&g.push(g[0]),g}getPoints(a=12){const g=[];let w;for(let x=0,E=this.curves;x<E.length;x++){const L=E[x],O=L.isEllipseCurve?a*2:L.isLineCurve||L.isLineCurve3?1:L.isSplineCurve?a*L.points.length:a,G=L.getPoints(O);for(let h=0;h<G.length;h++){const X=G[h];w&&w.equals(X)||(g.push(X),w=X)}}return this.autoClose&&g.length>1&&!g[g.length-1].equals(g[0])&&g.push(g[0]),g}copy(a){super.copy(a),this.curves=[];for(let g=0,w=a.curves.length;g<w;g++){const x=a.curves[g];this.curves.push(x.clone())}return this.autoClose=a.autoClose,this}toJSON(){const a=super.toJSON();a.autoClose=this.autoClose,a.curves=[];for(let g=0,w=this.curves.length;g<w;g++){const x=this.curves[g];a.curves.push(x.toJSON())}return a}fromJSON(a){super.fromJSON(a),this.autoClose=a.autoClose,this.curves=[];for(let g=0,w=a.curves.length;g<w;g++){const x=a.curves[g];this.curves.push(new eV[x.type]().fromJSON(x))}return this}}class Dh2 extends bh2{constructor(a){super(),this.type="Path",this.currentPoint=new Lt,a&&this.setFromPoints(a)}setFromPoints(a){this.moveTo(a[0].x,a[0].y);for(let g=1,w=a.length;g<w;g++)this.lineTo(a[g].x,a[g].y);return this}moveTo(a,g){return this.currentPoint.set(a,g),this}lineTo(a,g){const w=new sQ(this.currentPoint.clone(),new Lt(a,g));return this.curves.push(w),this.currentPoint.set(a,g),this}quadraticCurveTo(a,g,w,x){const E=new lQ(this.currentPoint.clone(),new Lt(a,g),new Lt(w,x));return this.curves.push(E),this.currentPoint.set(w,x),this}bezierCurveTo(a,g,w,x,E,L){const O=new oQ(this.currentPoint.clone(),new Lt(a,g),new Lt(w,x),new Lt(E,L));return this.curves.push(O),this.currentPoint.set(E,L),this}splineThru(a){const g=[this.currentPoint.clone()].concat(a),w=new uQ(g);return this.curves.push(w),this.currentPoint.copy(a[a.length-1]),this}arc(a,g,w,x,E,L){const O=this.currentPoint.x,G=this.currentPoint.y;return this.absarc(a+O,g+G,w,x,E,L),this}absarc(a,g,w,x,E,L){return this.absellipse(a,g,w,w,x,E,L),this}ellipse(a,g,w,x,E,L,O,G){const h=this.currentPoint.x,X=this.currentPoint.y;return this.absellipse(a+h,g+X,w,x,E,L,O,G),this}absellipse(a,g,w,x,E,L,O,G){const h=new Ja(a,g,w,x,E,L,O,G);if(this.curves.length>0){const Z=h.getPoint(0);Z.equals(this.currentPoint)||this.lineTo(Z.x,Z.y)}this.curves.push(h);const X=h.getPoint(1);return this.currentPoint.copy(X),this}copy(a){return super.copy(a),this.currentPoint.copy(a.currentPoint),this}toJSON(){const a=super.toJSON();return a.currentPoint=this.currentPoint.toArray(),a}fromJSON(a){return super.fromJSON(a),this.currentPoint.fromArray(a.currentPoint),this}}class $a extends J0{constructor(a=[new Lt(0,-.5),new Lt(.5,0),new Lt(0,.5)],g=12,w=0,x=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:a,segments:g,phiStart:w,phiLength:x},g=Math.floor(g),x=j0(x,0,Math.PI*2);const E=[],L=[],O=[],G=[],h=[],X=1/g,Z=new S2,K=new Lt,e2=new S2,l2=new S2,p2=new S2;let r2=0,o2=0;for(let k2=0;k2<=a.length-1;k2++)switch(k2){case 0:r2=a[k2+1].x-a[k2].x,o2=a[k2+1].y-a[k2].y,e2.x=o2*1,e2.y=-r2,e2.z=o2*0,p2.copy(e2),e2.normalize(),G.push(e2.x,e2.y,e2.z);break;case a.length-1:G.push(p2.x,p2.y,p2.z);break;default:r2=a[k2+1].x-a[k2].x,o2=a[k2+1].y-a[k2].y,e2.x=o2*1,e2.y=-r2,e2.z=o2*0,l2.copy(e2),e2.x+=p2.x,e2.y+=p2.y,e2.z+=p2.z,e2.normalize(),G.push(e2.x,e2.y,e2.z),p2.copy(l2)}for(let k2=0;k2<=g;k2++){const h2=w+k2*X*x,v2=Math.sin(h2),j2=Math.cos(h2);for(let R2=0;R2<=a.length-1;R2++){Z.x=a[R2].x*v2,Z.y=a[R2].y,Z.z=a[R2].x*j2,L.push(Z.x,Z.y,Z.z),K.x=k2/g,K.y=R2/(a.length-1),O.push(K.x,K.y);const D2=G[3*R2+0]*v2,Q2=G[3*R2+1],x2=G[3*R2+0]*j2;h.push(D2,Q2,x2)}}for(let k2=0;k2<g;k2++)for(let h2=0;h2<a.length-1;h2++){const v2=h2+k2*a.length,j2=v2,R2=v2+a.length,D2=v2+a.length+1,Q2=v2+1;E.push(j2,R2,Q2),E.push(D2,Q2,R2)}this.setIndex(E),this.setAttribute("position",new t0(L,3)),this.setAttribute("uv",new t0(O,2)),this.setAttribute("normal",new t0(h,3))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new $a(a.points,a.segments,a.phiStart,a.phiLength)}}class Uc extends $a{constructor(a=1,g=1,w=4,x=8){const E=new Dh2;E.absarc(0,-g/2,a,Math.PI*1.5,0),E.absarc(0,g/2,a,0,Math.PI*.5),super(E.getPoints(w),x),this.type="CapsuleGeometry",this.parameters={radius:a,length:g,capSegments:w,radialSegments:x}}static fromJSON(a){return new Uc(a.radius,a.length,a.capSegments,a.radialSegments)}}const Ih2={triangulate:function(D,a,g=2){const w=a&&a.length,x=w?a[0]*g:D.length;let E=fQ(D,0,x,g,!0);const L=[];if(!E||E.next===E.prev)return L;let O,G,h,X,Z,K,e2;if(w&&(E=jh2(D,a,E,g)),D.length>80*g){O=h=D[0],G=X=D[1];for(let l2=g;l2<x;l2+=g)Z=D[l2],K=D[l2+1],Z<O&&(O=Z),K<G&&(G=K),Z>h&&(h=Z),K>X&&(X=K);e2=Math.max(h-O,X-G),e2=e2!==0?32767/e2:0}return Vf(E,L,g,O,G,e2,0),L}};function fQ(D,a,g,w,x){let E,L;if(x===Zh2(D,a,g,w)>0)for(E=a;E<g;E+=w)L=nV(E,D[E],D[E+1],L);else for(E=g-w;E>=a;E-=w)L=nV(E,D[E],D[E+1],L);return L&&t_(L,L.next)&&(Yf(L),L=L.next),L}function K1(D,a){if(!D)return D;a||(a=D);let g=D,w;do if(w=!1,!g.steiner&&(t_(g,g.next)||h0(g.prev,g,g.next)===0)){if(Yf(g),g=a=g.prev,g===g.next)break;w=!0}else g=g.next;while(w||g!==a);return a}function Vf(D,a,g,w,x,E,L){if(!D)return;!L&&E&&Hh2(D,w,x,E);let O=D,G,h;for(;D.prev!==D.next;){if(G=D.prev,h=D.next,E?Lh2(D,w,x,E):Ph2(D)){a.push(G.i/g|0),a.push(D.i/g|0),a.push(h.i/g|0),Yf(D),D=h.next,O=h.next;continue}if(D=h,D===O){L?L===1?(D=Fh2(K1(D),a,g),Vf(D,a,g,w,x,E,2)):L===2&&Oh2(D,a,g,w,x,E):Vf(K1(D),a,g,w,x,E,1);break}}}function Ph2(D){const a=D.prev,g=D,w=D.next;if(h0(a,g,w)>=0)return!1;const x=a.x,E=g.x,L=w.x,O=a.y,G=g.y,h=w.y,X=x<E?x<L?x:L:E<L?E:L,Z=O<G?O<h?O:h:G<h?G:h,K=x>E?x>L?x:L:E>L?E:L,e2=O>G?O>h?O:h:G>h?G:h;let l2=w.next;for(;l2!==a;){if(l2.x>=X&&l2.x<=K&&l2.y>=Z&&l2.y<=e2&&iu(x,O,E,G,L,h,l2.x,l2.y)&&h0(l2.prev,l2,l2.next)>=0)return!1;l2=l2.next}return!0}function Lh2(D,a,g,w){const x=D.prev,E=D,L=D.next;if(h0(x,E,L)>=0)return!1;const O=x.x,G=E.x,h=L.x,X=x.y,Z=E.y,K=L.y,e2=O<G?O<h?O:h:G<h?G:h,l2=X<Z?X<K?X:K:Z<K?Z:K,p2=O>G?O>h?O:h:G>h?G:h,r2=X>Z?X>K?X:K:Z>K?Z:K,o2=ba(e2,l2,a,g,w),k2=ba(p2,r2,a,g,w);let h2=D.prevZ,v2=D.nextZ;for(;h2&&h2.z>=o2&&v2&&v2.z<=k2;){if(h2.x>=e2&&h2.x<=p2&&h2.y>=l2&&h2.y<=r2&&h2!==x&&h2!==L&&iu(O,X,G,Z,h,K,h2.x,h2.y)&&h0(h2.prev,h2,h2.next)>=0||(h2=h2.prevZ,v2.x>=e2&&v2.x<=p2&&v2.y>=l2&&v2.y<=r2&&v2!==x&&v2!==L&&iu(O,X,G,Z,h,K,v2.x,v2.y)&&h0(v2.prev,v2,v2.next)>=0))return!1;v2=v2.nextZ}for(;h2&&h2.z>=o2;){if(h2.x>=e2&&h2.x<=p2&&h2.y>=l2&&h2.y<=r2&&h2!==x&&h2!==L&&iu(O,X,G,Z,h,K,h2.x,h2.y)&&h0(h2.prev,h2,h2.next)>=0)return!1;h2=h2.prevZ}for(;v2&&v2.z<=k2;){if(v2.x>=e2&&v2.x<=p2&&v2.y>=l2&&v2.y<=r2&&v2!==x&&v2!==L&&iu(O,X,G,Z,h,K,v2.x,v2.y)&&h0(v2.prev,v2,v2.next)>=0)return!1;v2=v2.nextZ}return!0}function Fh2(D,a,g){let w=D;do{const x=w.prev,E=w.next.next;!t_(x,E)&&pQ(x,w,w.next,E)&&Qf(x,E)&&Qf(E,x)&&(a.push(x.i/g|0),a.push(w.i/g|0),a.push(E.i/g|0),Yf(w),Yf(w.next),w=D=E),w=w.next}while(w!==D);return K1(w)}function Oh2(D,a,g,w,x,E){let L=D;do{let O=L.next.next;for(;O!==L.prev;){if(L.i!==O.i&&Qh2(L,O)){let G=cQ(L,O);L=K1(L,L.next),G=K1(G,G.next),Vf(L,a,g,w,x,E,0),Vf(G,a,g,w,x,E,0);return}O=O.next}L=L.next}while(L!==D)}function jh2(D,a,g,w){const x=[];let E,L,O,G,h;for(E=0,L=a.length;E<L;E++)O=a[E]*w,G=E<L-1?a[E+1]*w:D.length,h=fQ(D,O,G,w,!1),h===h.next&&(h.steiner=!0),x.push(Vh2(h));for(x.sort(Nh2),E=0;E<x.length;E++)g=Uh2(x[E],g);return g}function Nh2(D,a){return D.x-a.x}function Uh2(D,a){const g=Gh2(D,a);if(!g)return a;const w=cQ(g,D);return K1(w,w.next),K1(g,g.next)}function Gh2(D,a){let g=a,w=-1/0,x;const E=D.x,L=D.y;do{if(L<=g.y&&L>=g.next.y&&g.next.y!==g.y){const K=g.x+(L-g.y)*(g.next.x-g.x)/(g.next.y-g.y);if(K<=E&&K>w&&(w=K,x=g.x<g.next.x?g:g.next,K===E))return x}g=g.next}while(g!==a);if(!x)return null;const O=x,G=x.x,h=x.y;let X=1/0,Z;g=x;do E>=g.x&&g.x>=G&&E!==g.x&&iu(L<h?E:w,L,G,h,L<h?w:E,L,g.x,g.y)&&(Z=Math.abs(L-g.y)/(E-g.x),Qf(g,D)&&(Z<X||Z===X&&(g.x>x.x||g.x===x.x&&Wh2(x,g)))&&(x=g,X=Z)),g=g.next;while(g!==O);return x}function Wh2(D,a){return h0(D.prev,D,a.prev)<0&&h0(a.next,D,D.next)<0}function Hh2(D,a,g,w){let x=D;do x.z===0&&(x.z=ba(x.x,x.y,a,g,w)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next;while(x!==D);x.prevZ.nextZ=null,x.prevZ=null,zh2(x)}function zh2(D){let a,g,w,x,E,L,O,G,h=1;do{for(g=D,D=null,E=null,L=0;g;){for(L++,w=g,O=0,a=0;a<h&&(O++,w=w.nextZ,!!w);a++);for(G=h;O>0||G>0&&w;)O!==0&&(G===0||!w||g.z<=w.z)?(x=g,g=g.nextZ,O--):(x=w,w=w.nextZ,G--),E?E.nextZ=x:D=x,x.prevZ=E,E=x;g=w}E.nextZ=null,h*=2}while(L>1);return D}function ba(D,a,g,w,x){return D=(D-g)*x|0,a=(a-w)*x|0,D=(D|D<<8)&16711935,D=(D|D<<4)&252645135,D=(D|D<<2)&858993459,D=(D|D<<1)&1431655765,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,D|a<<1}function Vh2(D){let a=D,g=D;do(a.x<g.x||a.x===g.x&&a.y<g.y)&&(g=a),a=a.next;while(a!==D);return g}function iu(D,a,g,w,x,E,L,O){return(x-L)*(a-O)>=(D-L)*(E-O)&&(D-L)*(w-O)>=(g-L)*(a-O)&&(g-L)*(E-O)>=(x-L)*(w-O)}function Qh2(D,a){return D.next.i!==a.i&&D.prev.i!==a.i&&!Yh2(D,a)&&(Qf(D,a)&&Qf(a,D)&&Xh2(D,a)&&(h0(D.prev,D,a.prev)||h0(D,a.prev,a))||t_(D,a)&&h0(D.prev,D,D.next)>0&&h0(a.prev,a,a.next)>0)}function h0(D,a,g){return(a.y-D.y)*(g.x-a.x)-(a.x-D.x)*(g.y-a.y)}function t_(D,a){return D.x===a.x&&D.y===a.y}function pQ(D,a,g,w){const x=gc(h0(D,a,g)),E=gc(h0(D,a,w)),L=gc(h0(g,w,D)),O=gc(h0(g,w,a));return!!(x!==E&&L!==O||x===0&&Ac(D,g,a)||E===0&&Ac(D,w,a)||L===0&&Ac(g,D,w)||O===0&&Ac(g,a,w))}function Ac(D,a,g){return a.x<=Math.max(D.x,g.x)&&a.x>=Math.min(D.x,g.x)&&a.y<=Math.max(D.y,g.y)&&a.y>=Math.min(D.y,g.y)}function gc(D){return D>0?1:D<0?-1:0}function Yh2(D,a){let g=D;do{if(g.i!==D.i&&g.next.i!==D.i&&g.i!==a.i&&g.next.i!==a.i&&pQ(g,g.next,D,a))return!0;g=g.next}while(g!==D);return!1}function Qf(D,a){return h0(D.prev,D,D.next)<0?h0(D,a,D.next)>=0&&h0(D,D.prev,a)>=0:h0(D,a,D.prev)<0||h0(D,D.next,a)<0}function Xh2(D,a){let g=D,w=!1;const x=(D.x+a.x)/2,E=(D.y+a.y)/2;do g.y>E!=g.next.y>E&&g.next.y!==g.y&&x<(g.next.x-g.x)*(E-g.y)/(g.next.y-g.y)+g.x&&(w=!w),g=g.next;while(g!==D);return w}function cQ(D,a){const g=new Da(D.i,D.x,D.y),w=new Da(a.i,a.x,a.y),x=D.next,E=a.prev;return D.next=a,a.prev=D,g.next=x,x.prev=g,w.next=g,g.prev=w,E.next=w,w.prev=E,w}function nV(D,a,g,w){const x=new Da(D,a,g);return w?(x.next=w.next,x.prev=w,w.next.prev=x,w.next=x):(x.prev=x,x.next=x),x}function Yf(D){D.next.prev=D.prev,D.prev.next=D.next,D.prevZ&&(D.prevZ.nextZ=D.nextZ),D.nextZ&&(D.nextZ.prevZ=D.prevZ)}function Da(D,a,g){this.i=D,this.x=a,this.y=g,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Zh2(D,a,g,w){let x=0;for(let E=a,L=g-w;E<g;E+=w)x+=(D[L]-D[E])*(D[E+1]+D[L+1]),L=E;return x}class th{static area(a){const g=a.length;let w=0;for(let x=g-1,E=0;E<g;x=E++)w+=a[x].x*a[E].y-a[E].x*a[x].y;return w*.5}static isClockWise(a){return th.area(a)<0}static triangulateShape(a,g){const w=[],x=[],E=[];iV(a),rV(w,a);let L=a.length;g.forEach(iV);for(let G=0;G<g.length;G++)x.push(L),L+=g[G].length,rV(w,g[G]);const O=Ih2.triangulate(w,x);for(let G=0;G<O.length;G+=3)E.push(O.slice(G,G+3));return E}}function iV(D){const a=D.length;a>2&&D[a-1].equals(D[0])&&D.pop()}function rV(D,a){for(let g=0;g<a.length;g++)D.push(a[g].x),D.push(a[g].y)}class eh extends J0{constructor(a=1,g=32,w=16,x=0,E=Math.PI*2,L=0,O=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:a,widthSegments:g,heightSegments:w,phiStart:x,phiLength:E,thetaStart:L,thetaLength:O},g=Math.max(3,Math.floor(g)),w=Math.max(2,Math.floor(w));const G=Math.min(L+O,Math.PI);let h=0;const X=[],Z=new S2,K=new S2,e2=[],l2=[],p2=[],r2=[];for(let o2=0;o2<=w;o2++){const k2=[],h2=o2/w;let v2=0;o2===0&&L===0?v2=.5/g:o2===w&&G===Math.PI&&(v2=-.5/g);for(let j2=0;j2<=g;j2++){const R2=j2/g;Z.x=-a*Math.cos(x+R2*E)*Math.sin(L+h2*O),Z.y=a*Math.cos(L+h2*O),Z.z=a*Math.sin(x+R2*E)*Math.sin(L+h2*O),l2.push(Z.x,Z.y,Z.z),K.copy(Z).normalize(),p2.push(K.x,K.y,K.z),r2.push(R2+v2,1-h2),k2.push(h++)}X.push(k2)}for(let o2=0;o2<w;o2++)for(let k2=0;k2<g;k2++){const h2=X[o2][k2+1],v2=X[o2][k2],j2=X[o2+1][k2],R2=X[o2+1][k2+1];(o2!==0||L>0)&&e2.push(h2,v2,R2),(o2!==w-1||G<Math.PI)&&e2.push(v2,j2,R2)}this.setIndex(e2),this.setAttribute("position",new t0(l2,3)),this.setAttribute("normal",new t0(p2,3)),this.setAttribute("uv",new t0(r2,2))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new eh(a.radius,a.widthSegments,a.heightSegments,a.phiStart,a.phiLength,a.thetaStart,a.thetaLength)}}class Xf extends kr{constructor(a){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.defines={STANDARD:""},this.color.copy(a.color),this.roughness=a.roughness,this.metalness=a.metalness,this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.emissive.copy(a.emissive),this.emissiveMap=a.emissiveMap,this.emissiveIntensity=a.emissiveIntensity,this.bumpMap=a.bumpMap,this.bumpScale=a.bumpScale,this.normalMap=a.normalMap,this.normalMapType=a.normalMapType,this.normalScale.copy(a.normalScale),this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.roughnessMap=a.roughnessMap,this.metalnessMap=a.metalnessMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.envMapRotation.copy(a.envMapRotation),this.envMapIntensity=a.envMapIntensity,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.flatShading=a.flatShading,this.fog=a.fog,this}}class Xo extends Xf{constructor(a){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return j0(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(g){this.ior=(1+.4*g)/(1-.4*g)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(a)}get anisotropy(){return this._anisotropy}set anisotropy(a){this._anisotropy>0!=a>0&&this.version++,this._anisotropy=a}get clearcoat(){return this._clearcoat}set clearcoat(a){this._clearcoat>0!=a>0&&this.version++,this._clearcoat=a}get iridescence(){return this._iridescence}set iridescence(a){this._iridescence>0!=a>0&&this.version++,this._iridescence=a}get dispersion(){return this._dispersion}set dispersion(a){this._dispersion>0!=a>0&&this.version++,this._dispersion=a}get sheen(){return this._sheen}set sheen(a){this._sheen>0!=a>0&&this.version++,this._sheen=a}get transmission(){return this._transmission}set transmission(a){this._transmission>0!=a>0&&this.version++,this._transmission=a}copy(a){return super.copy(a),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=a.anisotropy,this.anisotropyRotation=a.anisotropyRotation,this.anisotropyMap=a.anisotropyMap,this.clearcoat=a.clearcoat,this.clearcoatMap=a.clearcoatMap,this.clearcoatRoughness=a.clearcoatRoughness,this.clearcoatRoughnessMap=a.clearcoatRoughnessMap,this.clearcoatNormalMap=a.clearcoatNormalMap,this.clearcoatNormalScale.copy(a.clearcoatNormalScale),this.dispersion=a.dispersion,this.ior=a.ior,this.iridescence=a.iridescence,this.iridescenceMap=a.iridescenceMap,this.iridescenceIOR=a.iridescenceIOR,this.iridescenceThicknessRange=[...a.iridescenceThicknessRange],this.iridescenceThicknessMap=a.iridescenceThicknessMap,this.sheen=a.sheen,this.sheenColor.copy(a.sheenColor),this.sheenColorMap=a.sheenColorMap,this.sheenRoughness=a.sheenRoughness,this.sheenRoughnessMap=a.sheenRoughnessMap,this.transmission=a.transmission,this.transmissionMap=a.transmissionMap,this.thickness=a.thickness,this.thicknessMap=a.thicknessMap,this.attenuationDistance=a.attenuationDistance,this.attenuationColor.copy(a.attenuationColor),this.specularIntensity=a.specularIntensity,this.specularIntensityMap=a.specularIntensityMap,this.specularColor.copy(a.specularColor),this.specularColorMap=a.specularColorMap,this}}class oa extends kr{constructor(a){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new pe(16777215),this.specular=new pe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.specular.copy(a.specular),this.shininess=a.shininess,this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.emissive.copy(a.emissive),this.emissiveMap=a.emissiveMap,this.emissiveIntensity=a.emissiveIntensity,this.bumpMap=a.bumpMap,this.bumpScale=a.bumpScale,this.normalMap=a.normalMap,this.normalMapType=a.normalMapType,this.normalScale.copy(a.normalScale),this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.specularMap=a.specularMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.envMapRotation.copy(a.envMapRotation),this.combine=a.combine,this.reflectivity=a.reflectivity,this.refractionRatio=a.refractionRatio,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.flatShading=a.flatShading,this.fog=a.fog,this}}class qh2 extends kr{constructor(a){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.emissive.copy(a.emissive),this.emissiveMap=a.emissiveMap,this.emissiveIntensity=a.emissiveIntensity,this.bumpMap=a.bumpMap,this.bumpScale=a.bumpScale,this.normalMap=a.normalMap,this.normalMapType=a.normalMapType,this.normalScale.copy(a.normalScale),this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.specularMap=a.specularMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.envMapRotation.copy(a.envMapRotation),this.combine=a.combine,this.reflectivity=a.reflectivity,this.refractionRatio=a.refractionRatio,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.flatShading=a.flatShading,this.fog=a.fog,this}}function yc(D,a,g){return!D||!g&&D.constructor===a?D:typeof a.BYTES_PER_ELEMENT=="number"?new a(D):Array.prototype.slice.call(D)}function Jh2(D){return ArrayBuffer.isView(D)&&!(D instanceof DataView)}function Kh2(D){function a(x,E){return D[x]-D[E]}const g=D.length,w=new Array(g);for(let x=0;x!==g;++x)w[x]=x;return w.sort(a),w}function oV(D,a,g){const w=D.length,x=new D.constructor(w);for(let E=0,L=0;L!==w;++E){const O=g[E]*a;for(let G=0;G!==a;++G)x[L++]=D[O+G]}return x}function _Q(D,a,g,w){let x=1,E=D[0];for(;E!==void 0&&E[w]===void 0;)E=D[x++];if(E===void 0)return;let L=E[w];if(L!==void 0)if(Array.isArray(L))do L=E[w],L!==void 0&&(a.push(E.time),g.push.apply(g,L)),E=D[x++];while(E!==void 0);else if(L.toArray!==void 0)do L=E[w],L!==void 0&&(a.push(E.time),L.toArray(g,g.length)),E=D[x++];while(E!==void 0);else do L=E[w],L!==void 0&&(a.push(E.time),g.push(L)),E=D[x++];while(E!==void 0)}class $f{constructor(a,g,w,x){this.parameterPositions=a,this._cachedIndex=0,this.resultBuffer=x!==void 0?x:new g.constructor(w),this.sampleValues=g,this.valueSize=w,this.settings=null,this.DefaultSettings_={}}evaluate(a){const g=this.parameterPositions;let w=this._cachedIndex,x=g[w],E=g[w-1];t:{e:{let L;n:{i:if(!(a<x)){for(let O=w+2;;){if(x===void 0){if(a<E)break i;return w=g.length,this._cachedIndex=w,this.copySampleValue_(w-1)}if(w===O)break;if(E=x,x=g[++w],a<x)break e}L=g.length;break n}if(!(a>=E)){const O=g[1];a<O&&(w=2,E=O);for(let G=w-2;;){if(E===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(w===G)break;if(x=E,E=g[--w-1],a>=E)break e}L=w,w=0;break n}break t}for(;w<L;){const O=w+L>>>1;a<g[O]?L=O:w=O+1}if(x=g[w],E=g[w-1],E===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(x===void 0)return w=g.length,this._cachedIndex=w,this.copySampleValue_(w-1)}this._cachedIndex=w,this.intervalChanged_(w,E,x)}return this.interpolate_(w,E,a,x)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(a){const g=this.resultBuffer,w=this.sampleValues,x=this.valueSize,E=a*x;for(let L=0;L!==x;++L)g[L]=w[E+L];return g}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class $h2 extends $f{constructor(a,g,w,x){super(a,g,w,x),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tu,endingEnd:tu}}intervalChanged_(a,g,w){const x=this.parameterPositions;let E=a-2,L=a+1,O=x[E],G=x[L];if(O===void 0)switch(this.getSettings_().endingStart){case eu:E=a,O=2*g-w;break;case Dc:E=x.length-2,O=g+x[E]-x[E+1];break;default:E=a,O=w}if(G===void 0)switch(this.getSettings_().endingEnd){case eu:L=a,G=2*w-g;break;case Dc:L=1,G=w+x[1]-x[0];break;default:L=a-1,G=g}const h=(w-g)*.5,X=this.valueSize;this._weightPrev=h/(g-O),this._weightNext=h/(G-w),this._offsetPrev=E*X,this._offsetNext=L*X}interpolate_(a,g,w,x){const E=this.resultBuffer,L=this.sampleValues,O=this.valueSize,G=a*O,h=G-O,X=this._offsetPrev,Z=this._offsetNext,K=this._weightPrev,e2=this._weightNext,l2=(w-g)/(x-g),p2=l2*l2,r2=p2*l2,o2=-K*r2+2*K*p2-K*l2,k2=(1+K)*r2+(-1.5-2*K)*p2+(-.5+K)*l2+1,h2=(-1-e2)*r2+(1.5+e2)*p2+.5*l2,v2=e2*r2-e2*p2;for(let j2=0;j2!==O;++j2)E[j2]=o2*L[X+j2]+k2*L[h+j2]+h2*L[G+j2]+v2*L[Z+j2];return E}}class aQ extends $f{constructor(a,g,w,x){super(a,g,w,x)}interpolate_(a,g,w,x){const E=this.resultBuffer,L=this.sampleValues,O=this.valueSize,G=a*O,h=G-O,X=(w-g)/(x-g),Z=1-X;for(let K=0;K!==O;++K)E[K]=L[h+K]*Z+L[G+K]*X;return E}}class tm2 extends $f{constructor(a,g,w,x){super(a,g,w,x)}interpolate_(a){return this.copySampleValue_(a-1)}}class Zo{constructor(a,g,w,x){if(a===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(g===void 0||g.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+a);this.name=a,this.times=yc(g,this.TimeBufferType),this.values=yc(w,this.ValueBufferType),this.setInterpolation(x||this.DefaultInterpolation)}static toJSON(a){const g=a.constructor;let w;if(g.toJSON!==this.toJSON)w=g.toJSON(a);else{w={name:a.name,times:yc(a.times,Array),values:yc(a.values,Array)};const x=a.getInterpolation();x!==a.DefaultInterpolation&&(w.interpolation=x)}return w.type=a.ValueTypeName,w}InterpolantFactoryMethodDiscrete(a){return new tm2(this.times,this.values,this.getValueSize(),a)}InterpolantFactoryMethodLinear(a){return new aQ(this.times,this.values,this.getValueSize(),a)}InterpolantFactoryMethodSmooth(a){return new $h2(this.times,this.values,this.getValueSize(),a)}setInterpolation(a){let g;switch(a){case Hf:g=this.InterpolantFactoryMethodDiscrete;break;case hu:g=this.InterpolantFactoryMethodLinear;break;case M6:g=this.InterpolantFactoryMethodSmooth;break}if(g===void 0){const w="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(w);return console.warn("THREE.KeyframeTrack:",w),this}return this.createInterpolant=g,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Hf;case this.InterpolantFactoryMethodLinear:return hu;case this.InterpolantFactoryMethodSmooth:return M6}}getValueSize(){return this.values.length/this.times.length}shift(a){if(a!==0){const g=this.times;for(let w=0,x=g.length;w!==x;++w)g[w]+=a}return this}scale(a){if(a!==1){const g=this.times;for(let w=0,x=g.length;w!==x;++w)g[w]*=a}return this}trim(a,g){const w=this.times,x=w.length;let E=0,L=x-1;for(;E!==x&&w[E]<a;)++E;for(;L!==-1&&w[L]>g;)--L;if(++L,E!==0||L!==x){E>=L&&(L=Math.max(L,1),E=L-1);const O=this.getValueSize();this.times=w.slice(E,L),this.values=this.values.slice(E*O,L*O)}return this}validate(){let a=!0;const g=this.getValueSize();g-Math.floor(g)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),a=!1);const w=this.times,x=this.values,E=w.length;E===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),a=!1);let L=null;for(let O=0;O!==E;O++){const G=w[O];if(typeof G=="number"&&isNaN(G)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,O,G),a=!1;break}if(L!==null&&L>G){console.error("THREE.KeyframeTrack: Out of order keys.",this,O,G,L),a=!1;break}L=G}if(x!==void 0&&Jh2(x))for(let O=0,G=x.length;O!==G;++O){const h=x[O];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,O,h),a=!1;break}}return a}optimize(){const a=this.times.slice(),g=this.values.slice(),w=this.getValueSize(),x=this.getInterpolation()===M6,E=a.length-1;let L=1;for(let O=1;O<E;++O){let G=!1;const h=a[O],X=a[O+1];if(h!==X&&(O!==1||h!==a[0]))if(x)G=!0;else{const Z=O*w,K=Z-w,e2=Z+w;for(let l2=0;l2!==w;++l2){const p2=g[Z+l2];if(p2!==g[K+l2]||p2!==g[e2+l2]){G=!0;break}}}if(G){if(O!==L){a[L]=a[O];const Z=O*w,K=L*w;for(let e2=0;e2!==w;++e2)g[K+e2]=g[Z+e2]}++L}}if(E>0){a[L]=a[E];for(let O=E*w,G=L*w,h=0;h!==w;++h)g[G+h]=g[O+h];++L}return L!==a.length?(this.times=a.slice(0,L),this.values=g.slice(0,L*w)):(this.times=a,this.values=g),this}clone(){const a=this.times.slice(),g=this.values.slice(),w=this.constructor,x=new w(this.name,a,g);return x.createInterpolant=this.createInterpolant,x}}Zo.prototype.TimeBufferType=Float32Array;Zo.prototype.ValueBufferType=Float32Array;Zo.prototype.DefaultInterpolation=hu;class ku extends Zo{}ku.prototype.ValueTypeName="bool";ku.prototype.ValueBufferType=Array;ku.prototype.DefaultInterpolation=Hf;ku.prototype.InterpolantFactoryMethodLinear=void 0;ku.prototype.InterpolantFactoryMethodSmooth=void 0;class hQ extends Zo{}hQ.prototype.ValueTypeName="color";class $1 extends Zo{}$1.prototype.ValueTypeName="number";class em2 extends $f{constructor(a,g,w,x){super(a,g,w,x)}interpolate_(a,g,w,x){const E=this.resultBuffer,L=this.sampleValues,O=this.valueSize,G=(w-g)/(x-g);let h=a*O;for(let X=h+O;h!==X;h+=4)Sn.slerpFlat(E,0,L,h-O,L,h,G);return E}}class Es extends Zo{InterpolantFactoryMethodLinear(a){return new em2(this.times,this.values,this.getValueSize(),a)}}Es.prototype.ValueTypeName="quaternion";Es.prototype.DefaultInterpolation=hu;Es.prototype.InterpolantFactoryMethodSmooth=void 0;class vu extends Zo{}vu.prototype.ValueTypeName="string";vu.prototype.ValueBufferType=Array;vu.prototype.DefaultInterpolation=Hf;vu.prototype.InterpolantFactoryMethodLinear=void 0;vu.prototype.InterpolantFactoryMethodSmooth=void 0;class tl extends Zo{}tl.prototype.ValueTypeName="vector";class Gc{constructor(a="",g=-1,w=[],x=Ha){this.name=a,this.tracks=w,this.duration=g,this.blendMode=x,this.uuid=mo(),this.duration<0&&this.resetDuration()}static parse(a){const g=[],w=a.tracks,x=1/(a.fps||1);for(let L=0,O=w.length;L!==O;++L)g.push(im2(w[L]).scale(x));const E=new this(a.name,a.duration,g,a.blendMode);return E.uuid=a.uuid,E}static toJSON(a){const g=[],w=a.tracks,x={name:a.name,duration:a.duration,tracks:g,uuid:a.uuid,blendMode:a.blendMode};for(let E=0,L=w.length;E!==L;++E)g.push(Zo.toJSON(w[E]));return x}static CreateFromMorphTargetSequence(a,g,w,x){const E=g.length,L=[];for(let O=0;O<E;O++){let G=[],h=[];G.push((O+E-1)%E,O,(O+1)%E),h.push(0,1,0);const X=Kh2(G);G=oV(G,1,X),h=oV(h,1,X),!x&&G[0]===0&&(G.push(E),h.push(h[0])),L.push(new $1(".morphTargetInfluences["+g[O].name+"]",G,h).scale(1/w))}return new this(a,-1,L)}static findByName(a,g){let w=a;if(!Array.isArray(a)){const x=a;w=x.geometry&&x.geometry.animations||x.animations}for(let x=0;x<w.length;x++)if(w[x].name===g)return w[x];return null}static CreateClipsFromMorphTargetSequences(a,g,w){const x={},E=/^([\w-]*?)([\d]+)$/;for(let O=0,G=a.length;O<G;O++){const h=a[O],X=h.name.match(E);if(X&&X.length>1){const Z=X[1];let K=x[Z];K||(x[Z]=K=[]),K.push(h)}}const L=[];for(const O in x)L.push(this.CreateFromMorphTargetSequence(O,x[O],g,w));return L}static parseAnimation(a,g){if(!a)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const w=function(Z,K,e2,l2,p2){if(e2.length!==0){const r2=[],o2=[];_Q(e2,r2,o2,l2),r2.length!==0&&p2.push(new Z(K,r2,o2))}},x=[],E=a.name||"default",L=a.fps||30,O=a.blendMode;let G=a.length||-1;const h=a.hierarchy||[];for(let Z=0;Z<h.length;Z++){const K=h[Z].keys;if(!(!K||K.length===0))if(K[0].morphTargets){const e2={};let l2;for(l2=0;l2<K.length;l2++)if(K[l2].morphTargets)for(let p2=0;p2<K[l2].morphTargets.length;p2++)e2[K[l2].morphTargets[p2]]=-1;for(const p2 in e2){const r2=[],o2=[];for(let k2=0;k2!==K[l2].morphTargets.length;++k2){const h2=K[l2];r2.push(h2.time),o2.push(h2.morphTarget===p2?1:0)}x.push(new $1(".morphTargetInfluence["+p2+"]",r2,o2))}G=e2.length*L}else{const e2=".bones["+g[Z].name+"]";w(tl,e2+".position",K,"pos",x),w(Es,e2+".quaternion",K,"rot",x),w(tl,e2+".scale",K,"scl",x)}}return x.length===0?null:new this(E,G,x,O)}resetDuration(){const a=this.tracks;let g=0;for(let w=0,x=a.length;w!==x;++w){const E=this.tracks[w];g=Math.max(g,E.times[E.times.length-1])}return this.duration=g,this}trim(){for(let a=0;a<this.tracks.length;a++)this.tracks[a].trim(0,this.duration);return this}validate(){let a=!0;for(let g=0;g<this.tracks.length;g++)a=a&&this.tracks[g].validate();return a}optimize(){for(let a=0;a<this.tracks.length;a++)this.tracks[a].optimize();return this}clone(){const a=[];for(let g=0;g<this.tracks.length;g++)a.push(this.tracks[g].clone());return new this.constructor(this.name,this.duration,a,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function nm2(D){switch(D.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return $1;case"vector":case"vector2":case"vector3":case"vector4":return tl;case"color":return hQ;case"quaternion":return Es;case"bool":case"boolean":return ku;case"string":return vu}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+D)}function im2(D){if(D.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const a=nm2(D.type);if(D.times===void 0){const g=[],w=[];_Q(D.keys,g,w,"value"),D.times=g,D.values=w}return a.parse!==void 0?a.parse(D):new a(D.name,D.times,D.values,D.interpolation)}const d1={enabled:!1,files:{},add:function(D,a){this.enabled!==!1&&(this.files[D]=a)},get:function(D){if(this.enabled!==!1)return this.files[D]},remove:function(D){delete this.files[D]},clear:function(){this.files={}}};class mQ{constructor(a,g,w){const x=this;let E=!1,L=0,O=0,G;const h=[];this.onStart=void 0,this.onLoad=a,this.onProgress=g,this.onError=w,this.itemStart=function(X){O++,E===!1&&x.onStart!==void 0&&x.onStart(X,L,O),E=!0},this.itemEnd=function(X){L++,x.onProgress!==void 0&&x.onProgress(X,L,O),L===O&&(E=!1,x.onLoad!==void 0&&x.onLoad())},this.itemError=function(X){x.onError!==void 0&&x.onError(X)},this.resolveURL=function(X){return G?G(X):X},this.setURLModifier=function(X){return G=X,this},this.addHandler=function(X,Z){return h.push(X,Z),this},this.removeHandler=function(X){const Z=h.indexOf(X);return Z!==-1&&h.splice(Z,2),this},this.getHandler=function(X){for(let Z=0,K=h.length;Z<K;Z+=2){const e2=h[Z],l2=h[Z+1];if(e2.global&&(e2.lastIndex=0),e2.test(X))return l2}return null}}}const rm2=new mQ;class Vo{constructor(a){this.manager=a!==void 0?a:rm2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(a,g){const w=this;return new Promise(function(x,E){w.load(a,x,g,E)})}parse(){}setCrossOrigin(a){return this.crossOrigin=a,this}setWithCredentials(a){return this.withCredentials=a,this}setPath(a){return this.path=a,this}setResourcePath(a){return this.resourcePath=a,this}setRequestHeader(a){return this.requestHeader=a,this}}Vo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Bs={};class om2 extends Error{constructor(a,g){super(a),this.response=g}}class Zf extends Vo{constructor(a){super(a)}load(a,g,w,x){a===void 0&&(a=""),this.path!==void 0&&(a=this.path+a),a=this.manager.resolveURL(a);const E=d1.get(a);if(E!==void 0)return this.manager.itemStart(a),setTimeout(()=>{g&&g(E),this.manager.itemEnd(a)},0),E;if(Bs[a]!==void 0){Bs[a].push({onLoad:g,onProgress:w,onError:x});return}Bs[a]=[],Bs[a].push({onLoad:g,onProgress:w,onError:x});const L=new Request(a,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),O=this.mimeType,G=this.responseType;fetch(L).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const X=Bs[a],Z=h.body.getReader(),K=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),e2=K?parseInt(K):0,l2=e2!==0;let p2=0;const r2=new ReadableStream({start(o2){k2();function k2(){Z.read().then(({done:h2,value:v2})=>{if(h2)o2.close();else{p2+=v2.byteLength;const j2=new ProgressEvent("progress",{lengthComputable:l2,loaded:p2,total:e2});for(let R2=0,D2=X.length;R2<D2;R2++){const Q2=X[R2];Q2.onProgress&&Q2.onProgress(j2)}o2.enqueue(v2),k2()}})}}});return new Response(r2)}else throw new om2(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(G){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(X=>new DOMParser().parseFromString(X,O));case"json":return h.json();default:if(O===void 0)return h.text();{const Z=/charset="?([^;"\s]*)"?/i.exec(O),K=Z&&Z[1]?Z[1].toLowerCase():void 0,e2=new TextDecoder(K);return h.arrayBuffer().then(l2=>e2.decode(l2))}}}).then(h=>{d1.add(a,h);const X=Bs[a];delete Bs[a];for(let Z=0,K=X.length;Z<K;Z++){const e2=X[Z];e2.onLoad&&e2.onLoad(h)}}).catch(h=>{const X=Bs[a];if(X===void 0)throw this.manager.itemError(a),h;delete Bs[a];for(let Z=0,K=X.length;Z<K;Z++){const e2=X[Z];e2.onError&&e2.onError(h)}this.manager.itemError(a)}).finally(()=>{this.manager.itemEnd(a)}),this.manager.itemStart(a)}setResponseType(a){return this.responseType=a,this}setMimeType(a){return this.mimeType=a,this}}class sm2 extends Vo{constructor(a){super(a)}load(a,g,w,x){this.path!==void 0&&(a=this.path+a),a=this.manager.resolveURL(a);const E=this,L=d1.get(a);if(L!==void 0)return E.manager.itemStart(a),setTimeout(function(){g&&g(L),E.manager.itemEnd(a)},0),L;const O=zf("img");function G(){X(),d1.add(a,this),g&&g(this),E.manager.itemEnd(a)}function h(Z){X(),x&&x(Z),E.manager.itemError(a),E.manager.itemEnd(a)}function X(){O.removeEventListener("load",G,!1),O.removeEventListener("error",h,!1)}return O.addEventListener("load",G,!1),O.addEventListener("error",h,!1),a.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(O.crossOrigin=this.crossOrigin),E.manager.itemStart(a),O.src=a,O}}class nh extends Vo{constructor(a){super(a)}load(a,g,w,x){const E=new E0,L=new sm2(this.manager);return L.setCrossOrigin(this.crossOrigin),L.setPath(this.path),L.load(a,function(O){E.image=O,E.needsUpdate=!0,g!==void 0&&g(E)},w,x),E}}class e_ extends Nn{constructor(a,g=1){super(),this.isLight=!0,this.type="Light",this.color=new pe(a),this.intensity=g}dispose(){}copy(a,g){return super.copy(a,g),this.color.copy(a.color),this.intensity=a.intensity,this}toJSON(a){const g=super.toJSON(a);return g.object.color=this.color.getHex(),g.object.intensity=this.intensity,this.groundColor!==void 0&&(g.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(g.object.distance=this.distance),this.angle!==void 0&&(g.object.angle=this.angle),this.decay!==void 0&&(g.object.decay=this.decay),this.penumbra!==void 0&&(g.object.penumbra=this.penumbra),this.shadow!==void 0&&(g.object.shadow=this.shadow.toJSON()),g}}const sa=new _e,sV=new S2,lV=new S2;class ih{constructor(a){this.camera=a,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xa,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new bn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(a){const g=this.camera,w=this.matrix;sV.setFromMatrixPosition(a.matrixWorld),g.position.copy(sV),lV.setFromMatrixPosition(a.target.matrixWorld),g.lookAt(lV),g.updateMatrixWorld(),sa.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sa),w.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),w.multiply(sa)}getViewport(a){return this._viewports[a]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(a){return this.camera=a.camera.clone(),this.bias=a.bias,this.radius=a.radius,this.mapSize.copy(a.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const a={};return this.bias!==0&&(a.bias=this.bias),this.normalBias!==0&&(a.normalBias=this.normalBias),this.radius!==1&&(a.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(a.mapSize=this.mapSize.toArray()),a.camera=this.camera.toJSON(!1).object,delete a.camera.matrix,a}}class lm2 extends ih{constructor(){super(new Si(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(a){const g=this.camera,w=mu*2*a.angle*this.focus,x=this.mapSize.width/this.mapSize.height,E=a.distance||g.far;(w!==g.fov||x!==g.aspect||E!==g.far)&&(g.fov=w,g.aspect=x,g.far=E,g.updateProjectionMatrix()),super.updateMatrices(a)}copy(a){return super.copy(a),this.focus=a.focus,this}}class dQ extends e_{constructor(a,g,w=0,x=Math.PI/3,E=0,L=2){super(a,g),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.distance=w,this.angle=x,this.penumbra=E,this.decay=L,this.map=null,this.shadow=new lm2}get power(){return this.intensity*Math.PI}set power(a){this.intensity=a/Math.PI}dispose(){this.shadow.dispose()}copy(a,g){return super.copy(a,g),this.distance=a.distance,this.angle=a.angle,this.penumbra=a.penumbra,this.decay=a.decay,this.target=a.target.clone(),this.shadow=a.shadow.clone(),this}}const uV=new _e,Df=new S2,la=new S2;class um2 extends ih{constructor(){super(new Si(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Lt(4,2),this._viewportCount=6,this._viewports=[new bn(2,1,1,1),new bn(0,1,1,1),new bn(3,1,1,1),new bn(1,1,1,1),new bn(3,0,1,1),new bn(1,0,1,1)],this._cubeDirections=[new S2(1,0,0),new S2(-1,0,0),new S2(0,0,1),new S2(0,0,-1),new S2(0,1,0),new S2(0,-1,0)],this._cubeUps=[new S2(0,1,0),new S2(0,1,0),new S2(0,1,0),new S2(0,1,0),new S2(0,0,1),new S2(0,0,-1)]}updateMatrices(a,g=0){const w=this.camera,x=this.matrix,E=a.distance||w.far;E!==w.far&&(w.far=E,w.updateProjectionMatrix()),Df.setFromMatrixPosition(a.matrixWorld),w.position.copy(Df),la.copy(w.position),la.add(this._cubeDirections[g]),w.up.copy(this._cubeUps[g]),w.lookAt(la),w.updateMatrixWorld(),x.makeTranslation(-Df.x,-Df.y,-Df.z),uV.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uV)}}class Wc extends e_{constructor(a,g,w=0,x=2){super(a,g),this.isPointLight=!0,this.type="PointLight",this.distance=w,this.decay=x,this.shadow=new um2}get power(){return this.intensity*4*Math.PI}set power(a){this.intensity=a/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(a,g){return super.copy(a,g),this.distance=a.distance,this.decay=a.decay,this.shadow=a.shadow.clone(),this}}class fm2 extends ih{constructor(){super(new Jc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class rh extends e_{constructor(a,g){super(a,g),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nn.DEFAULT_UP),this.updateMatrix(),this.target=new Nn,this.shadow=new fm2}dispose(){this.shadow.dispose()}copy(a){return super.copy(a),this.target=a.target.clone(),this.shadow=a.shadow.clone(),this}}class AQ extends e_{constructor(a,g){super(a,g),this.isAmbientLight=!0,this.type="AmbientLight"}}class uu{static decodeText(a){if(typeof TextDecoder<"u")return new TextDecoder().decode(a);let g="";for(let w=0,x=a.length;w<x;w++)g+=String.fromCharCode(a[w]);try{return decodeURIComponent(escape(g))}catch{return g}}static extractUrlBase(a){const g=a.lastIndexOf("/");return g===-1?"./":a.slice(0,g+1)}static resolveURL(a,g){return typeof a!="string"||a===""?"":(/^https?:\/\//i.test(g)&&/^\//.test(a)&&(g=g.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(a)||/^data:.*,.*$/i.test(a)||/^blob:.*$/i.test(a)?a:g+a)}}class pm2 extends Vo{constructor(a){super(a),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(a){return this.options=a,this}load(a,g,w,x){a===void 0&&(a=""),this.path!==void 0&&(a=this.path+a),a=this.manager.resolveURL(a);const E=this,L=d1.get(a);if(L!==void 0){if(E.manager.itemStart(a),L.then){L.then(h=>{g&&g(h),E.manager.itemEnd(a)}).catch(h=>{x&&x(h)});return}return setTimeout(function(){g&&g(L),E.manager.itemEnd(a)},0),L}const O={};O.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",O.headers=this.requestHeader;const G=fetch(a,O).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(E.options,{colorSpaceConversion:"none"}))}).then(function(h){return d1.add(a,h),g&&g(h),E.manager.itemEnd(a),h}).catch(function(h){x&&x(h),d1.remove(a),E.manager.itemError(a),E.manager.itemEnd(a)});d1.add(a,G),E.manager.itemStart(a)}}class cm2{constructor(a=!0){this.autoStart=a,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fV(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let a=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const g=fV();a=(g-this.oldTime)/1e3,this.oldTime=g,this.elapsedTime+=a}return a}}function fV(){return(typeof performance>"u"?Date:performance).now()}class _m2{constructor(a,g,w){this.binding=a,this.valueSize=w;let x,E,L;switch(g){case"quaternion":x=this._slerp,E=this._slerpAdditive,L=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(w*6),this._workIndex=5;break;case"string":case"bool":x=this._select,E=this._select,L=this._setAdditiveIdentityOther,this.buffer=new Array(w*5);break;default:x=this._lerp,E=this._lerpAdditive,L=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(w*5)}this._mixBufferRegion=x,this._mixBufferRegionAdditive=E,this._setIdentity=L,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(a,g){const w=this.buffer,x=this.valueSize,E=a*x+x;let L=this.cumulativeWeight;if(L===0){for(let O=0;O!==x;++O)w[E+O]=w[O];L=g}else{L+=g;const O=g/L;this._mixBufferRegion(w,E,0,O,x)}this.cumulativeWeight=L}accumulateAdditive(a){const g=this.buffer,w=this.valueSize,x=w*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(g,x,0,a,w),this.cumulativeWeightAdditive+=a}apply(a){const g=this.valueSize,w=this.buffer,x=a*g+g,E=this.cumulativeWeight,L=this.cumulativeWeightAdditive,O=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,E<1){const G=g*this._origIndex;this._mixBufferRegion(w,x,G,1-E,g)}L>0&&this._mixBufferRegionAdditive(w,x,this._addIndex*g,1,g);for(let G=g,h=g+g;G!==h;++G)if(w[G]!==w[G+g]){O.setValue(w,x);break}}saveOriginalState(){const a=this.binding,g=this.buffer,w=this.valueSize,x=w*this._origIndex;a.getValue(g,x);for(let E=w,L=x;E!==L;++E)g[E]=g[x+E%w];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const a=this.valueSize*3;this.binding.setValue(this.buffer,a)}_setAdditiveIdentityNumeric(){const a=this._addIndex*this.valueSize,g=a+this.valueSize;for(let w=a;w<g;w++)this.buffer[w]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const a=this._origIndex*this.valueSize,g=this._addIndex*this.valueSize;for(let w=0;w<this.valueSize;w++)this.buffer[g+w]=this.buffer[a+w]}_select(a,g,w,x,E){if(x>=.5)for(let L=0;L!==E;++L)a[g+L]=a[w+L]}_slerp(a,g,w,x){Sn.slerpFlat(a,g,a,g,a,w,x)}_slerpAdditive(a,g,w,x,E){const L=this._workIndex*E;Sn.multiplyQuaternionsFlat(a,L,a,g,a,w),Sn.slerpFlat(a,g,a,g,a,L,x)}_lerp(a,g,w,x,E){const L=1-x;for(let O=0;O!==E;++O){const G=g+O;a[G]=a[G]*L+a[w+O]*x}}_lerpAdditive(a,g,w,x,E){for(let L=0;L!==E;++L){const O=g+L;a[O]=a[O]+a[w+L]*x}}}const oh="\\[\\]\\.:\\/",am2=new RegExp("["+oh+"]","g"),sh="[^"+oh+"]",hm2="[^"+oh.replace("\\.","")+"]",mm2=/((?:WC+[\/:])*)/.source.replace("WC",sh),dm2=/(WCOD+)?/.source.replace("WCOD",hm2),Am2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sh),gm2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sh),ym2=new RegExp("^"+mm2+dm2+Am2+gm2+"$"),km2=["material","materials","bones","map"];class vm2{constructor(a,g,w){const x=w||An.parseTrackName(g);this._targetGroup=a,this._bindings=a.subscribe_(g,x)}getValue(a,g){this.bind();const w=this._targetGroup.nCachedObjects_,x=this._bindings[w];x!==void 0&&x.getValue(a,g)}setValue(a,g){const w=this._bindings;for(let x=this._targetGroup.nCachedObjects_,E=w.length;x!==E;++x)w[x].setValue(a,g)}bind(){const a=this._bindings;for(let g=this._targetGroup.nCachedObjects_,w=a.length;g!==w;++g)a[g].bind()}unbind(){const a=this._bindings;for(let g=this._targetGroup.nCachedObjects_,w=a.length;g!==w;++g)a[g].unbind()}}class An{constructor(a,g,w){this.path=g,this.parsedPath=w||An.parseTrackName(g),this.node=An.findNode(a,this.parsedPath.nodeName),this.rootNode=a,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(a,g,w){return a&&a.isAnimationObjectGroup?new An.Composite(a,g,w):new An(a,g,w)}static sanitizeNodeName(a){return a.replace(/\s/g,"_").replace(am2,"")}static parseTrackName(a){const g=ym2.exec(a);if(g===null)throw new Error("PropertyBinding: Cannot parse trackName: "+a);const w={nodeName:g[2],objectName:g[3],objectIndex:g[4],propertyName:g[5],propertyIndex:g[6]},x=w.nodeName&&w.nodeName.lastIndexOf(".");if(x!==void 0&&x!==-1){const E=w.nodeName.substring(x+1);km2.indexOf(E)!==-1&&(w.nodeName=w.nodeName.substring(0,x),w.objectName=E)}if(w.propertyName===null||w.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+a);return w}static findNode(a,g){if(g===void 0||g===""||g==="."||g===-1||g===a.name||g===a.uuid)return a;if(a.skeleton){const w=a.skeleton.getBoneByName(g);if(w!==void 0)return w}if(a.children){const w=function(E){for(let L=0;L<E.length;L++){const O=E[L];if(O.name===g||O.uuid===g)return O;const G=w(O.children);if(G)return G}return null},x=w(a.children);if(x)return x}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(a,g){a[g]=this.targetObject[this.propertyName]}_getValue_array(a,g){const w=this.resolvedProperty;for(let x=0,E=w.length;x!==E;++x)a[g++]=w[x]}_getValue_arrayElement(a,g){a[g]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(a,g){this.resolvedProperty.toArray(a,g)}_setValue_direct(a,g){this.targetObject[this.propertyName]=a[g]}_setValue_direct_setNeedsUpdate(a,g){this.targetObject[this.propertyName]=a[g],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(a,g){this.targetObject[this.propertyName]=a[g],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(a,g){const w=this.resolvedProperty;for(let x=0,E=w.length;x!==E;++x)w[x]=a[g++]}_setValue_array_setNeedsUpdate(a,g){const w=this.resolvedProperty;for(let x=0,E=w.length;x!==E;++x)w[x]=a[g++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(a,g){const w=this.resolvedProperty;for(let x=0,E=w.length;x!==E;++x)w[x]=a[g++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(a,g){this.resolvedProperty[this.propertyIndex]=a[g]}_setValue_arrayElement_setNeedsUpdate(a,g){this.resolvedProperty[this.propertyIndex]=a[g],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(a,g){this.resolvedProperty[this.propertyIndex]=a[g],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(a,g){this.resolvedProperty.fromArray(a,g)}_setValue_fromArray_setNeedsUpdate(a,g){this.resolvedProperty.fromArray(a,g),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(a,g){this.resolvedProperty.fromArray(a,g),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(a,g){this.bind(),this.getValue(a,g)}_setValue_unbound(a,g){this.bind(),this.setValue(a,g)}bind(){let a=this.node;const g=this.parsedPath,w=g.objectName,x=g.propertyName;let E=g.propertyIndex;if(a||(a=An.findNode(this.rootNode,g.nodeName),this.node=a),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!a){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(w){let h=g.objectIndex;switch(w){case"materials":if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}a=a.material.materials;break;case"bones":if(!a.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}a=a.skeleton.bones;for(let X=0;X<a.length;X++)if(a[X].name===h){h=X;break}break;case"map":if("map"in a){a=a.map;break}if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}a=a.material.map;break;default:if(a[w]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}a=a[w]}if(h!==void 0){if(a[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,a);return}a=a[h]}}const L=a[x];if(L===void 0){const h=g.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+x+" but it wasn't found.",a);return}let O=this.Versioning.None;this.targetObject=a,a.needsUpdate!==void 0?O=this.Versioning.NeedsUpdate:a.matrixWorldNeedsUpdate!==void 0&&(O=this.Versioning.MatrixWorldNeedsUpdate);let G=this.BindingType.Direct;if(E!==void 0){if(x==="morphTargetInfluences"){if(!a.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!a.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}a.morphTargetDictionary[E]!==void 0&&(E=a.morphTargetDictionary[E])}G=this.BindingType.ArrayElement,this.resolvedProperty=L,this.propertyIndex=E}else L.fromArray!==void 0&&L.toArray!==void 0?(G=this.BindingType.HasFromToArray,this.resolvedProperty=L):Array.isArray(L)?(G=this.BindingType.EntireArray,this.resolvedProperty=L):this.propertyName=x;this.getValue=this.GetterByBindingType[G],this.setValue=this.SetterByBindingTypeAndVersioning[G][O]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}An.Composite=vm2;An.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};An.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};An.prototype.GetterByBindingType=[An.prototype._getValue_direct,An.prototype._getValue_array,An.prototype._getValue_arrayElement,An.prototype._getValue_toArray];An.prototype.SetterByBindingTypeAndVersioning=[[An.prototype._setValue_direct,An.prototype._setValue_direct_setNeedsUpdate,An.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[An.prototype._setValue_array,An.prototype._setValue_array_setNeedsUpdate,An.prototype._setValue_array_setMatrixWorldNeedsUpdate],[An.prototype._setValue_arrayElement,An.prototype._setValue_arrayElement_setNeedsUpdate,An.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[An.prototype._setValue_fromArray,An.prototype._setValue_fromArray_setNeedsUpdate,An.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class wm2{constructor(a,g,w=null,x=g.blendMode){this._mixer=a,this._clip=g,this._localRoot=w,this.blendMode=x;const E=g.tracks,L=E.length,O=new Array(L),G={endingStart:tu,endingEnd:tu};for(let h=0;h!==L;++h){const X=E[h].createInterpolant(null);O[h]=X,X.settings=G}this._interpolantSettings=G,this._interpolants=O,this._propertyBindings=new Array(L),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=FV,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(a){return this._startTime=a,this}setLoop(a,g){return this.loop=a,this.repetitions=g,this}setEffectiveWeight(a){return this.weight=a,this._effectiveWeight=this.enabled?a:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(a){return this._scheduleFading(a,0,1)}fadeOut(a){return this._scheduleFading(a,1,0)}crossFadeFrom(a,g,w){if(a.fadeOut(g),this.fadeIn(g),w){const x=this._clip.duration,E=a._clip.duration,L=E/x,O=x/E;a.warp(1,L,g),this.warp(O,1,g)}return this}crossFadeTo(a,g,w){return a.crossFadeFrom(this,g,w)}stopFading(){const a=this._weightInterpolant;return a!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(a)),this}setEffectiveTimeScale(a){return this.timeScale=a,this._effectiveTimeScale=this.paused?0:a,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(a){return this.timeScale=this._clip.duration/a,this.stopWarping()}syncWith(a){return this.time=a.time,this.timeScale=a.timeScale,this.stopWarping()}halt(a){return this.warp(this._effectiveTimeScale,0,a)}warp(a,g,w){const x=this._mixer,E=x.time,L=this.timeScale;let O=this._timeScaleInterpolant;O===null&&(O=x._lendControlInterpolant(),this._timeScaleInterpolant=O);const G=O.parameterPositions,h=O.sampleValues;return G[0]=E,G[1]=E+w,h[0]=a/L,h[1]=g/L,this}stopWarping(){const a=this._timeScaleInterpolant;return a!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(a)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(a,g,w,x){if(!this.enabled){this._updateWeight(a);return}const E=this._startTime;if(E!==null){const G=(a-E)*w;G<0||w===0?g=0:(this._startTime=null,g=w*G)}g*=this._updateTimeScale(a);const L=this._updateTime(g),O=this._updateWeight(a);if(O>0){const G=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case E42:for(let X=0,Z=G.length;X!==Z;++X)G[X].evaluate(L),h[X].accumulateAdditive(O);break;case Ha:default:for(let X=0,Z=G.length;X!==Z;++X)G[X].evaluate(L),h[X].accumulate(x,O)}}}_updateWeight(a){let g=0;if(this.enabled){g=this.weight;const w=this._weightInterpolant;if(w!==null){const x=w.evaluate(a)[0];g*=x,a>w.parameterPositions[1]&&(this.stopFading(),x===0&&(this.enabled=!1))}}return this._effectiveWeight=g,g}_updateTimeScale(a){let g=0;if(!this.paused){g=this.timeScale;const w=this._timeScaleInterpolant;if(w!==null){const x=w.evaluate(a)[0];g*=x,a>w.parameterPositions[1]&&(this.stopWarping(),g===0?this.paused=!0:this.timeScale=g)}}return this._effectiveTimeScale=g,g}_updateTime(a){const g=this._clip.duration,w=this.loop;let x=this.time+a,E=this._loopCount;const L=w===T42;if(a===0)return E===-1?x:L&&(E&1)===1?g-x:x;if(w===xa){E===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(x>=g)x=g;else if(x<0)x=0;else{this.time=x;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=x,this._mixer.dispatchEvent({type:"finished",action:this,direction:a<0?-1:1})}}else{if(E===-1&&(a>=0?(E=0,this._setEndings(!0,this.repetitions===0,L)):this._setEndings(this.repetitions===0,!0,L)),x>=g||x<0){const O=Math.floor(x/g);x-=g*O,E+=Math.abs(O);const G=this.repetitions-E;if(G<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,x=a>0?g:0,this.time=x,this._mixer.dispatchEvent({type:"finished",action:this,direction:a>0?1:-1});else{if(G===1){const h=a<0;this._setEndings(h,!h,L)}else this._setEndings(!1,!1,L);this._loopCount=E,this.time=x,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:O})}}else this.time=x;if(L&&(E&1)===1)return g-x}return x}_setEndings(a,g,w){const x=this._interpolantSettings;w?(x.endingStart=eu,x.endingEnd=eu):(a?x.endingStart=this.zeroSlopeAtStart?eu:tu:x.endingStart=Dc,g?x.endingEnd=this.zeroSlopeAtEnd?eu:tu:x.endingEnd=Dc)}_scheduleFading(a,g,w){const x=this._mixer,E=x.time;let L=this._weightInterpolant;L===null&&(L=x._lendControlInterpolant(),this._weightInterpolant=L);const O=L.parameterPositions,G=L.sampleValues;return O[0]=E,G[0]=g,O[1]=E+a,G[1]=w,this}}const Bm2=new Float32Array(1);class Sm2 extends Rs{constructor(a){super(),this._root=a,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(a,g){const w=a._localRoot||this._root,x=a._clip.tracks,E=x.length,L=a._propertyBindings,O=a._interpolants,G=w.uuid,h=this._bindingsByRootAndName;let X=h[G];X===void 0&&(X={},h[G]=X);for(let Z=0;Z!==E;++Z){const K=x[Z],e2=K.name;let l2=X[e2];if(l2!==void 0)++l2.referenceCount,L[Z]=l2;else{if(l2=L[Z],l2!==void 0){l2._cacheIndex===null&&(++l2.referenceCount,this._addInactiveBinding(l2,G,e2));continue}const p2=g&&g._propertyBindings[Z].binding.parsedPath;l2=new _m2(An.create(w,e2,p2),K.ValueTypeName,K.getValueSize()),++l2.referenceCount,this._addInactiveBinding(l2,G,e2),L[Z]=l2}O[Z].resultBuffer=l2.buffer}}_activateAction(a){if(!this._isActiveAction(a)){if(a._cacheIndex===null){const w=(a._localRoot||this._root).uuid,x=a._clip.uuid,E=this._actionsByClip[x];this._bindAction(a,E&&E.knownActions[0]),this._addInactiveAction(a,x,w)}const g=a._propertyBindings;for(let w=0,x=g.length;w!==x;++w){const E=g[w];E.useCount++===0&&(this._lendBinding(E),E.saveOriginalState())}this._lendAction(a)}}_deactivateAction(a){if(this._isActiveAction(a)){const g=a._propertyBindings;for(let w=0,x=g.length;w!==x;++w){const E=g[w];--E.useCount===0&&(E.restoreOriginalState(),this._takeBackBinding(E))}this._takeBackAction(a)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const a=this;this.stats={actions:{get total(){return a._actions.length},get inUse(){return a._nActiveActions}},bindings:{get total(){return a._bindings.length},get inUse(){return a._nActiveBindings}},controlInterpolants:{get total(){return a._controlInterpolants.length},get inUse(){return a._nActiveControlInterpolants}}}}_isActiveAction(a){const g=a._cacheIndex;return g!==null&&g<this._nActiveActions}_addInactiveAction(a,g,w){const x=this._actions,E=this._actionsByClip;let L=E[g];if(L===void 0)L={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,E[g]=L;else{const O=L.knownActions;a._byClipCacheIndex=O.length,O.push(a)}a._cacheIndex=x.length,x.push(a),L.actionByRoot[w]=a}_removeInactiveAction(a){const g=this._actions,w=g[g.length-1],x=a._cacheIndex;w._cacheIndex=x,g[x]=w,g.pop(),a._cacheIndex=null;const E=a._clip.uuid,L=this._actionsByClip,O=L[E],G=O.knownActions,h=G[G.length-1],X=a._byClipCacheIndex;h._byClipCacheIndex=X,G[X]=h,G.pop(),a._byClipCacheIndex=null;const Z=O.actionByRoot,K=(a._localRoot||this._root).uuid;delete Z[K],G.length===0&&delete L[E],this._removeInactiveBindingsForAction(a)}_removeInactiveBindingsForAction(a){const g=a._propertyBindings;for(let w=0,x=g.length;w!==x;++w){const E=g[w];--E.referenceCount===0&&this._removeInactiveBinding(E)}}_lendAction(a){const g=this._actions,w=a._cacheIndex,x=this._nActiveActions++,E=g[x];a._cacheIndex=x,g[x]=a,E._cacheIndex=w,g[w]=E}_takeBackAction(a){const g=this._actions,w=a._cacheIndex,x=--this._nActiveActions,E=g[x];a._cacheIndex=x,g[x]=a,E._cacheIndex=w,g[w]=E}_addInactiveBinding(a,g,w){const x=this._bindingsByRootAndName,E=this._bindings;let L=x[g];L===void 0&&(L={},x[g]=L),L[w]=a,a._cacheIndex=E.length,E.push(a)}_removeInactiveBinding(a){const g=this._bindings,w=a.binding,x=w.rootNode.uuid,E=w.path,L=this._bindingsByRootAndName,O=L[x],G=g[g.length-1],h=a._cacheIndex;G._cacheIndex=h,g[h]=G,g.pop(),delete O[E],Object.keys(O).length===0&&delete L[x]}_lendBinding(a){const g=this._bindings,w=a._cacheIndex,x=this._nActiveBindings++,E=g[x];a._cacheIndex=x,g[x]=a,E._cacheIndex=w,g[w]=E}_takeBackBinding(a){const g=this._bindings,w=a._cacheIndex,x=--this._nActiveBindings,E=g[x];a._cacheIndex=x,g[x]=a,E._cacheIndex=w,g[w]=E}_lendControlInterpolant(){const a=this._controlInterpolants,g=this._nActiveControlInterpolants++;let w=a[g];return w===void 0&&(w=new aQ(new Float32Array(2),new Float32Array(2),1,Bm2),w.__cacheIndex=g,a[g]=w),w}_takeBackControlInterpolant(a){const g=this._controlInterpolants,w=a.__cacheIndex,x=--this._nActiveControlInterpolants,E=g[x];a.__cacheIndex=x,g[x]=a,E.__cacheIndex=w,g[w]=E}clipAction(a,g,w){const x=g||this._root,E=x.uuid;let L=typeof a=="string"?Gc.findByName(x,a):a;const O=L!==null?L.uuid:a,G=this._actionsByClip[O];let h=null;if(w===void 0&&(L!==null?w=L.blendMode:w=Ha),G!==void 0){const Z=G.actionByRoot[E];if(Z!==void 0&&Z.blendMode===w)return Z;h=G.knownActions[0],L===null&&(L=h._clip)}if(L===null)return null;const X=new wm2(this,L,g,w);return this._bindAction(X,h),this._addInactiveAction(X,O,E),X}existingAction(a,g){const w=g||this._root,x=w.uuid,E=typeof a=="string"?Gc.findByName(w,a):a,L=E?E.uuid:a,O=this._actionsByClip[L];return O!==void 0&&O.actionByRoot[x]||null}stopAllAction(){const a=this._actions,g=this._nActiveActions;for(let w=g-1;w>=0;--w)a[w].stop();return this}update(a){a*=this.timeScale;const g=this._actions,w=this._nActiveActions,x=this.time+=a,E=Math.sign(a),L=this._accuIndex^=1;for(let h=0;h!==w;++h)g[h]._update(x,a,E,L);const O=this._bindings,G=this._nActiveBindings;for(let h=0;h!==G;++h)O[h].apply(L);return this}setTime(a){this.time=0;for(let g=0;g<this._actions.length;g++)this._actions[g].time=0;return this.update(a)}getRoot(){return this._root}uncacheClip(a){const g=this._actions,w=a.uuid,x=this._actionsByClip,E=x[w];if(E!==void 0){const L=E.knownActions;for(let O=0,G=L.length;O!==G;++O){const h=L[O];this._deactivateAction(h);const X=h._cacheIndex,Z=g[g.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,Z._cacheIndex=X,g[X]=Z,g.pop(),this._removeInactiveBindingsForAction(h)}delete x[w]}}uncacheRoot(a){const g=a.uuid,w=this._actionsByClip;for(const L in w){const O=w[L].actionByRoot,G=O[g];G!==void 0&&(this._deactivateAction(G),this._removeInactiveAction(G))}const x=this._bindingsByRootAndName,E=x[g];if(E!==void 0)for(const L in E){const O=E[L];O.restoreOriginalState(),this._removeInactiveBinding(O)}}uncacheAction(a,g){const w=this.existingAction(a,g);w!==null&&(this._deactivateAction(w),this._removeInactiveAction(w))}}class pV{constructor(a=1,g=0,w=0){return this.radius=a,this.phi=g,this.theta=w,this}set(a,g,w){return this.radius=a,this.phi=g,this.theta=w,this}copy(a){return this.radius=a.radius,this.phi=a.phi,this.theta=a.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(a){return this.setFromCartesianCoords(a.x,a.y,a.z)}setFromCartesianCoords(a,g,w){return this.radius=Math.sqrt(a*a+g*g+w*w),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(a,w),this.phi=Math.acos(j0(g/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xm2 extends q0{constructor(a,g,w){const x=new eh(g,4,2),E=new Ho({wireframe:!0,fog:!1,toneMapped:!1});super(x,E),this.light=a,this.color=w,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const cV=new S2,kc=new S2,_V=new S2;class Cm2 extends Nn{constructor(a,g,w){super(),this.light=a,this.matrix=a.matrixWorld,this.matrixAutoUpdate=!1,this.color=w,this.type="DirectionalLightHelper",g===void 0&&(g=1);let x=new J0;x.setAttribute("position",new t0([-g,g,0,g,g,0,g,-g,0,-g,-g,0,-g,g,0],3));const E=new Kf({fog:!1,toneMapped:!1});this.lightPlane=new Au(x,E),this.add(this.lightPlane),x=new J0,x.setAttribute("position",new t0([0,0,0,0,0,1],3)),this.targetLine=new Au(x,E),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),cV.setFromMatrixPosition(this.light.matrixWorld),kc.setFromMatrixPosition(this.light.target.matrixWorld),_V.subVectors(kc,cV),this.lightPlane.lookAt(kc),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(kc),this.targetLine.scale.z=_V.length()}}const vc=new S2,y0=new Ya;class Mm2 extends iQ{constructor(a){const g=new J0,w=new Kf({color:16777215,vertexColors:!0,toneMapped:!1}),x=[],E=[],L={};O("n1","n2"),O("n2","n4"),O("n4","n3"),O("n3","n1"),O("f1","f2"),O("f2","f4"),O("f4","f3"),O("f3","f1"),O("n1","f1"),O("n2","f2"),O("n3","f3"),O("n4","f4"),O("p","n1"),O("p","n2"),O("p","n3"),O("p","n4"),O("u1","u2"),O("u2","u3"),O("u3","u1"),O("c","t"),O("p","c"),O("cn1","cn2"),O("cn3","cn4"),O("cf1","cf2"),O("cf3","cf4");function O(l2,p2){G(l2),G(p2)}function G(l2){x.push(0,0,0),E.push(0,0,0),L[l2]===void 0&&(L[l2]=[]),L[l2].push(x.length/3-1)}g.setAttribute("position",new t0(x,3)),g.setAttribute("color",new t0(E,3)),super(g,w),this.type="CameraHelper",this.camera=a,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=a.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=L,this.update();const h=new pe(16755200),X=new pe(16711680),Z=new pe(43775),K=new pe(16777215),e2=new pe(3355443);this.setColors(h,X,Z,K,e2)}setColors(a,g,w,x,E){const O=this.geometry.getAttribute("color");O.setXYZ(0,a.r,a.g,a.b),O.setXYZ(1,a.r,a.g,a.b),O.setXYZ(2,a.r,a.g,a.b),O.setXYZ(3,a.r,a.g,a.b),O.setXYZ(4,a.r,a.g,a.b),O.setXYZ(5,a.r,a.g,a.b),O.setXYZ(6,a.r,a.g,a.b),O.setXYZ(7,a.r,a.g,a.b),O.setXYZ(8,a.r,a.g,a.b),O.setXYZ(9,a.r,a.g,a.b),O.setXYZ(10,a.r,a.g,a.b),O.setXYZ(11,a.r,a.g,a.b),O.setXYZ(12,a.r,a.g,a.b),O.setXYZ(13,a.r,a.g,a.b),O.setXYZ(14,a.r,a.g,a.b),O.setXYZ(15,a.r,a.g,a.b),O.setXYZ(16,a.r,a.g,a.b),O.setXYZ(17,a.r,a.g,a.b),O.setXYZ(18,a.r,a.g,a.b),O.setXYZ(19,a.r,a.g,a.b),O.setXYZ(20,a.r,a.g,a.b),O.setXYZ(21,a.r,a.g,a.b),O.setXYZ(22,a.r,a.g,a.b),O.setXYZ(23,a.r,a.g,a.b),O.setXYZ(24,g.r,g.g,g.b),O.setXYZ(25,g.r,g.g,g.b),O.setXYZ(26,g.r,g.g,g.b),O.setXYZ(27,g.r,g.g,g.b),O.setXYZ(28,g.r,g.g,g.b),O.setXYZ(29,g.r,g.g,g.b),O.setXYZ(30,g.r,g.g,g.b),O.setXYZ(31,g.r,g.g,g.b),O.setXYZ(32,w.r,w.g,w.b),O.setXYZ(33,w.r,w.g,w.b),O.setXYZ(34,w.r,w.g,w.b),O.setXYZ(35,w.r,w.g,w.b),O.setXYZ(36,w.r,w.g,w.b),O.setXYZ(37,w.r,w.g,w.b),O.setXYZ(38,x.r,x.g,x.b),O.setXYZ(39,x.r,x.g,x.b),O.setXYZ(40,E.r,E.g,E.b),O.setXYZ(41,E.r,E.g,E.b),O.setXYZ(42,E.r,E.g,E.b),O.setXYZ(43,E.r,E.g,E.b),O.setXYZ(44,E.r,E.g,E.b),O.setXYZ(45,E.r,E.g,E.b),O.setXYZ(46,E.r,E.g,E.b),O.setXYZ(47,E.r,E.g,E.b),O.setXYZ(48,E.r,E.g,E.b),O.setXYZ(49,E.r,E.g,E.b),O.needsUpdate=!0}update(){const a=this.geometry,g=this.pointMap,w=1,x=1;y0.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),C0("c",g,a,y0,0,0,-1),C0("t",g,a,y0,0,0,1),C0("n1",g,a,y0,-w,-x,-1),C0("n2",g,a,y0,w,-x,-1),C0("n3",g,a,y0,-w,x,-1),C0("n4",g,a,y0,w,x,-1),C0("f1",g,a,y0,-w,-x,1),C0("f2",g,a,y0,w,-x,1),C0("f3",g,a,y0,-w,x,1),C0("f4",g,a,y0,w,x,1),C0("u1",g,a,y0,w*.7,x*1.1,-1),C0("u2",g,a,y0,-w*.7,x*1.1,-1),C0("u3",g,a,y0,0,x*2,-1),C0("cf1",g,a,y0,-w,0,1),C0("cf2",g,a,y0,w,0,1),C0("cf3",g,a,y0,0,-x,1),C0("cf4",g,a,y0,0,x,1),C0("cn1",g,a,y0,-w,0,-1),C0("cn2",g,a,y0,w,0,-1),C0("cn3",g,a,y0,0,-x,-1),C0("cn4",g,a,y0,0,x,-1),a.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function C0(D,a,g,w,x,E,L){vc.set(x,E,L).unproject(w);const O=a[D];if(O!==void 0){const G=g.getAttribute("position");for(let h=0,X=O.length;h<X;h++)G.setXYZ(O[h],vc.x,vc.y,vc.z)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var zr=Uint8Array,ru=Uint16Array,Tm2=Int32Array,gQ=new zr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),yQ=new zr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Em2=new zr([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),kQ=function(D,a){for(var g=new ru(31),w=0;w<31;++w)g[w]=a+=1<<D[w-1];for(var x=new Tm2(g[30]),w=1;w<30;++w)for(var E=g[w];E<g[w+1];++E)x[E]=E-g[w]<<5|w;return{b:g,r:x}},vQ=kQ(gQ,2),wQ=vQ.b,Rm2=vQ.r;wQ[28]=258,Rm2[258]=28;var bm2=kQ(yQ,0),Dm2=bm2.b,Ia=new ru(32768);for(var e0=0;e0<32768;++e0){var c1=(e0&43690)>>1|(e0&21845)<<1;c1=(c1&52428)>>2|(c1&13107)<<2,c1=(c1&61680)>>4|(c1&3855)<<4,Ia[e0]=((c1&65280)>>8|(c1&255)<<8)>>1}var Uf=function(D,a,g){for(var w=D.length,x=0,E=new ru(a);x<w;++x)D[x]&&++E[D[x]-1];var L=new ru(a);for(x=1;x<a;++x)L[x]=L[x-1]+E[x-1]<<1;var O;if(g){O=new ru(1<<a);var G=15-a;for(x=0;x<w;++x)if(D[x])for(var h=x<<4|D[x],X=a-D[x],Z=L[D[x]-1]++<<X,K=Z|(1<<X)-1;Z<=K;++Z)O[Ia[Z]>>G]=h}else for(O=new ru(w),x=0;x<w;++x)D[x]&&(O[x]=Ia[L[D[x]-1]++]>>15-D[x]);return O},tp=new zr(288);for(var e0=0;e0<144;++e0)tp[e0]=8;for(var e0=144;e0<256;++e0)tp[e0]=9;for(var e0=256;e0<280;++e0)tp[e0]=7;for(var e0=280;e0<288;++e0)tp[e0]=8;var BQ=new zr(32);for(var e0=0;e0<32;++e0)BQ[e0]=5;var Im2=Uf(tp,9,1),Pm2=Uf(BQ,5,1),ua=function(D){for(var a=D[0],g=1;g<D.length;++g)D[g]>a&&(a=D[g]);return a},co=function(D,a,g){var w=a/8|0;return(D[w]|D[w+1]<<8)>>(a&7)&g},fa=function(D,a){var g=a/8|0;return(D[g]|D[g+1]<<8|D[g+2]<<16)>>(a&7)},Lm2=function(D){return(D+7)/8|0},Fm2=function(D,a,g){return(g==null||g>D.length)&&(g=D.length),new zr(D.subarray(a,g))},Om2=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],_o=function(D,a,g){var w=new Error(a||Om2[D]);if(w.code=D,Error.captureStackTrace&&Error.captureStackTrace(w,_o),!g)throw w;return w},jm2=function(D,a,g,w){var x=D.length,E=0;if(!x||a.f&&!a.l)return g||new zr(0);var L=!g,O=L||a.i!=2,G=a.i;L&&(g=new zr(x*3));var h=function(Oe){var ne=g.length;if(Oe>ne){var on=new zr(Math.max(ne*2,Oe));on.set(g),g=on}},X=a.f||0,Z=a.p||0,K=a.b||0,e2=a.l,l2=a.d,p2=a.m,r2=a.n,o2=x*8;do{if(!e2){X=co(D,Z,1);var k2=co(D,Z+1,3);if(Z+=3,k2)if(k2==1)e2=Im2,l2=Pm2,p2=9,r2=5;else if(k2==2){var R2=co(D,Z,31)+257,D2=co(D,Z+10,15)+4,Q2=R2+co(D,Z+5,31)+1;Z+=14;for(var x2=new zr(Q2),g2=new zr(19),Y2=0;Y2<D2;++Y2)g2[Em2[Y2]]=co(D,Z+Y2*3,7);Z+=D2*3;for(var st=ua(g2),U2=(1<<st)-1,lt=Uf(g2,st,1),Y2=0;Y2<Q2;){var ht=lt[co(D,Z,U2)];Z+=ht&15;var h2=ht>>4;if(h2<16)x2[Y2++]=h2;else{var mt=0,Dt=0;for(h2==16?(Dt=3+co(D,Z,3),Z+=2,mt=x2[Y2-1]):h2==17?(Dt=3+co(D,Z,7),Z+=3):h2==18&&(Dt=11+co(D,Z,127),Z+=7);Dt--;)x2[Y2++]=mt}}var et=x2.subarray(0,R2),gt=x2.subarray(R2);p2=ua(et),r2=ua(gt),e2=Uf(et,p2,1),l2=Uf(gt,r2,1)}else _o(1);else{var h2=Lm2(Z)+4,v2=D[h2-4]|D[h2-3]<<8,j2=h2+v2;if(j2>x){G&&_o(0);break}O&&h(K+v2),g.set(D.subarray(h2,j2),K),a.b=K+=v2,a.p=Z=j2*8,a.f=X;continue}if(Z>o2){G&&_o(0);break}}O&&h(K+131072);for(var xt=(1<<p2)-1,ie=(1<<r2)-1,Se=Z;;Se=Z){var mt=e2[fa(D,Z)&xt],Re=mt>>4;if(Z+=mt&15,Z>o2){G&&_o(0);break}if(mt||_o(2),Re<256)g[K++]=Re;else if(Re==256){Se=Z,e2=null;break}else{var nt=Re-254;if(Re>264){var Y2=Re-257,yt=gQ[Y2];nt=co(D,Z,(1<<yt)-1)+wQ[Y2],Z+=yt}var Yt=l2[fa(D,Z)&ie],G2=Yt>>4;Yt||_o(3),Z+=Yt&15;var gt=Dm2[G2];if(G2>3){var yt=yQ[G2];gt+=fa(D,Z)&(1<<yt)-1,Z+=yt}if(Z>o2){G&&_o(0);break}O&&h(K+131072);var Et=K+nt;if(K<gt){var ee=E-gt,W2=Math.min(gt,Et);for(ee+K<0&&_o(3);K<W2;++K)g[K]=w[ee+K]}for(;K<Et;++K)g[K]=g[K-gt]}}a.l=e2,a.p=Se,a.b=K,a.f=X,e2&&(X=1,a.m=p2,a.d=l2,a.n=r2)}while(!X);return K!=g.length&&L?Fm2(g,0,K):g.subarray(0,K)},Nm2=new zr(0),Um2=function(D,a){return((D[0]&15)!=8||D[0]>>4>7||(D[0]<<8|D[1])%31)&&_o(6,"invalid zlib data"),(D[1]>>5&1)==+!a&&_o(6,"invalid zlib data: "+(D[1]&32?"need":"unexpected")+" dictionary"),(D[1]>>3&4)+2};function Gm2(D,a){return jm2(D.subarray(Um2(D,a),-4),{i:2},a,a)}var Wm2=typeof TextDecoder<"u"&&new TextDecoder,Hm2=0;try{Wm2.decode(Nm2,{stream:!0}),Hm2=1}catch{}function SQ(D,a,g){const w=g.length-D-1;if(a>=g[w])return w-1;if(a<=g[D])return D;let x=D,E=w,L=Math.floor((x+E)/2);for(;a<g[L]||a>=g[L+1];)a<g[L]?E=L:x=L,L=Math.floor((x+E)/2);return L}function zm2(D,a,g,w){const x=[],E=[],L=[];x[0]=1;for(let O=1;O<=g;++O){E[O]=a-w[D+1-O],L[O]=w[D+O]-a;let G=0;for(let h=0;h<O;++h){const X=L[h+1],Z=E[O-h],K=x[h]/(X+Z);x[h]=G+X*K,G=Z*K}x[O]=G}return x}function Vm2(D,a,g,w){const x=SQ(D,w,a),E=zm2(x,w,D,a),L=new bn(0,0,0,0);for(let O=0;O<=D;++O){const G=g[x-D+O],h=E[O],X=G.w*h;L.x+=G.x*X,L.y+=G.y*X,L.z+=G.z*X,L.w+=G.w*h}return L}function Qm2(D,a,g,w,x){const E=[];for(let Z=0;Z<=g;++Z)E[Z]=0;const L=[];for(let Z=0;Z<=w;++Z)L[Z]=E.slice(0);const O=[];for(let Z=0;Z<=g;++Z)O[Z]=E.slice(0);O[0][0]=1;const G=E.slice(0),h=E.slice(0);for(let Z=1;Z<=g;++Z){G[Z]=a-x[D+1-Z],h[Z]=x[D+Z]-a;let K=0;for(let e2=0;e2<Z;++e2){const l2=h[e2+1],p2=G[Z-e2];O[Z][e2]=l2+p2;const r2=O[e2][Z-1]/O[Z][e2];O[e2][Z]=K+l2*r2,K=p2*r2}O[Z][Z]=K}for(let Z=0;Z<=g;++Z)L[0][Z]=O[Z][g];for(let Z=0;Z<=g;++Z){let K=0,e2=1;const l2=[];for(let p2=0;p2<=g;++p2)l2[p2]=E.slice(0);l2[0][0]=1;for(let p2=1;p2<=w;++p2){let r2=0;const o2=Z-p2,k2=g-p2;Z>=p2&&(l2[e2][0]=l2[K][0]/O[k2+1][o2],r2=l2[e2][0]*O[o2][k2]);const h2=o2>=-1?1:-o2,v2=Z-1<=k2?p2-1:g-Z;for(let R2=h2;R2<=v2;++R2)l2[e2][R2]=(l2[K][R2]-l2[K][R2-1])/O[k2+1][o2+R2],r2+=l2[e2][R2]*O[o2+R2][k2];Z<=k2&&(l2[e2][p2]=-l2[K][p2-1]/O[k2+1][Z],r2+=l2[e2][p2]*O[Z][k2]),L[p2][Z]=r2;const j2=K;K=e2,e2=j2}}let X=g;for(let Z=1;Z<=w;++Z){for(let K=0;K<=g;++K)L[Z][K]*=X;X*=g-Z}return L}function Ym2(D,a,g,w,x){const E=x<D?x:D,L=[],O=SQ(D,w,a),G=Qm2(O,w,D,E,a),h=[];for(let X=0;X<g.length;++X){const Z=g[X].clone(),K=Z.w;Z.x*=K,Z.y*=K,Z.z*=K,h[X]=Z}for(let X=0;X<=E;++X){const Z=h[O-D].clone().multiplyScalar(G[X][0]);for(let K=1;K<=D;++K)Z.add(h[O-D+K].clone().multiplyScalar(G[X][K]));L[X]=Z}for(let X=E+1;X<=x+1;++X)L[X]=new bn(0,0,0);return L}function Xm2(D,a){let g=1;for(let x=2;x<=D;++x)g*=x;let w=1;for(let x=2;x<=a;++x)w*=x;for(let x=2;x<=D-a;++x)w*=x;return g/w}function Zm2(D){const a=D.length,g=[],w=[];for(let E=0;E<a;++E){const L=D[E];g[E]=new S2(L.x,L.y,L.z),w[E]=L.w}const x=[];for(let E=0;E<a;++E){const L=g[E].clone();for(let O=1;O<=E;++O)L.sub(x[E-O].clone().multiplyScalar(Xm2(E,O)*w[O]));x[E]=L.divideScalar(w[0])}return x}function qm2(D,a,g,w,x){const E=Ym2(D,a,g,w,x);return Zm2(E)}class Jm2 extends Ao{constructor(a,g,w,x,E){super(),this.degree=a,this.knots=g,this.controlPoints=[],this.startKnot=x||0,this.endKnot=E||this.knots.length-1;for(let L=0;L<w.length;++L){const O=w[L];this.controlPoints[L]=new bn(O.x,O.y,O.z,O.w)}}getPoint(a,g=new S2){const w=g,x=this.knots[this.startKnot]+a*(this.knots[this.endKnot]-this.knots[this.startKnot]),E=Vm2(this.degree,this.knots,this.controlPoints,x);return E.w!==1&&E.divideScalar(E.w),w.set(E.x,E.y,E.z)}getTangent(a,g=new S2){const w=g,x=this.knots[0]+a*(this.knots[this.knots.length-1]-this.knots[0]),E=qm2(this.degree,this.knots,this.controlPoints,x,1);return w.copy(E[1]).normalize(),w}}let rn,M0,Oi;class Km2 extends Vo{constructor(a){super(a)}load(a,g,w,x){const E=this,L=E.path===""?uu.extractUrlBase(a):E.path,O=new Zf(this.manager);O.setPath(E.path),O.setResponseType("arraybuffer"),O.setRequestHeader(E.requestHeader),O.setWithCredentials(E.withCredentials),O.load(a,function(G){try{g(E.parse(G,L))}catch(h){x?x(h):console.error(h),E.manager.itemError(a)}},w,x)}parse(a,g){if(rd2(a))rn=new id2().parse(a);else{const x=TQ(a);if(!od2(x))throw new Error("THREE.FBXLoader: Unknown format.");if(hV(x)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+hV(x));rn=new nd2().parse(x)}const w=new nh(this.manager).setPath(this.resourcePath||g).setCrossOrigin(this.crossOrigin);return new $m2(w,this.manager).parse(rn)}}class $m2{constructor(a,g){this.textureLoader=a,this.manager=g}parse(){M0=this.parseConnections();const a=this.parseImages(),g=this.parseTextures(a),w=this.parseMaterials(g),x=this.parseDeformers(),E=new td2().parse(x);return this.parseScene(x,E,w),Oi}parseConnections(){const a=new Map;return"Connections"in rn&&rn.Connections.connections.forEach(function(w){const x=w[0],E=w[1],L=w[2];a.has(x)||a.set(x,{parents:[],children:[]});const O={ID:E,relationship:L};a.get(x).parents.push(O),a.has(E)||a.set(E,{parents:[],children:[]});const G={ID:x,relationship:L};a.get(E).children.push(G)}),a}parseImages(){const a={},g={};if("Video"in rn.Objects){const w=rn.Objects.Video;for(const x in w){const E=w[x],L=parseInt(x);if(a[L]=E.RelativeFilename||E.Filename,"Content"in E){const O=E.Content instanceof ArrayBuffer&&E.Content.byteLength>0,G=typeof E.Content=="string"&&E.Content!=="";if(O||G){const h=this.parseImage(w[x]);g[E.RelativeFilename||E.Filename]=h}}}}for(const w in a){const x=a[w];g[x]!==void 0?a[w]=g[x]:a[w]=a[w].split("\\").pop()}return a}parseImage(a){const g=a.Content,w=a.RelativeFilename||a.Filename,x=w.slice(w.lastIndexOf(".")+1).toLowerCase();let E;switch(x){case"bmp":E="image/bmp";break;case"jpg":case"jpeg":E="image/jpeg";break;case"png":E="image/png";break;case"tif":E="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",w),E="image/tga";break;default:console.warn('FBXLoader: Image type "'+x+'" is not supported.');return}if(typeof g=="string")return"data:"+E+";base64,"+g;{const L=new Uint8Array(g);return window.URL.createObjectURL(new Blob([L],{type:E}))}}parseTextures(a){const g=new Map;if("Texture"in rn.Objects){const w=rn.Objects.Texture;for(const x in w){const E=this.parseTexture(w[x],a);g.set(parseInt(x),E)}}return g}parseTexture(a,g){const w=this.loadTexture(a,g);w.ID=a.id,w.name=a.attrName;const x=a.WrapModeU,E=a.WrapModeV,L=x!==void 0?x.value:0,O=E!==void 0?E.value:0;if(w.wrapS=L===0?y1:Go,w.wrapT=O===0?y1:Go,"Scaling"in a){const G=a.Scaling.value;w.repeat.x=G[0],w.repeat.y=G[1]}if("Translation"in a){const G=a.Translation.value;w.offset.x=G[0],w.offset.y=G[1]}return w}loadTexture(a,g){let w;const x=this.textureLoader.path,E=M0.get(a.id).children;E!==void 0&&E.length>0&&g[E[0].ID]!==void 0&&(w=g[E[0].ID],(w.indexOf("blob:")===0||w.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let L;const O=a.FileName.slice(-3).toLowerCase();if(O==="tga"){const G=this.manager.getHandler(".tga");G===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",a.RelativeFilename),L=new E0):(G.setPath(this.textureLoader.path),L=G.load(w))}else if(O==="dds"){const G=this.manager.getHandler(".dds");G===null?(console.warn("FBXLoader: DDS loader not found, creating placeholder texture for",a.RelativeFilename),L=new E0):(G.setPath(this.textureLoader.path),L=G.load(w))}else O==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",a.RelativeFilename),L=new E0):L=this.textureLoader.load(w);return this.textureLoader.setPath(x),L}parseMaterials(a){const g=new Map;if("Material"in rn.Objects){const w=rn.Objects.Material;for(const x in w){const E=this.parseMaterial(w[x],a);E!==null&&g.set(parseInt(x),E)}}return g}parseMaterial(a,g){const w=a.id,x=a.attrName;let E=a.ShadingModel;if(typeof E=="object"&&(E=E.value),!M0.has(w))return null;const L=this.parseParameters(a,g,w);let O;switch(E.toLowerCase()){case"phong":O=new oa;break;case"lambert":O=new qh2;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',E),O=new oa;break}return O.setValues(L),O.name=x,O}parseParameters(a,g,w){const x={};a.BumpFactor&&(x.bumpScale=a.BumpFactor.value),a.Diffuse?x.color=new pe().fromArray(a.Diffuse.value).convertSRGBToLinear():a.DiffuseColor&&(a.DiffuseColor.type==="Color"||a.DiffuseColor.type==="ColorRGB")&&(x.color=new pe().fromArray(a.DiffuseColor.value).convertSRGBToLinear()),a.DisplacementFactor&&(x.displacementScale=a.DisplacementFactor.value),a.Emissive?x.emissive=new pe().fromArray(a.Emissive.value).convertSRGBToLinear():a.EmissiveColor&&(a.EmissiveColor.type==="Color"||a.EmissiveColor.type==="ColorRGB")&&(x.emissive=new pe().fromArray(a.EmissiveColor.value).convertSRGBToLinear()),a.EmissiveFactor&&(x.emissiveIntensity=parseFloat(a.EmissiveFactor.value)),a.Opacity&&(x.opacity=parseFloat(a.Opacity.value)),x.opacity<1&&(x.transparent=!0),a.ReflectionFactor&&(x.reflectivity=a.ReflectionFactor.value),a.Shininess&&(x.shininess=a.Shininess.value),a.Specular?x.specular=new pe().fromArray(a.Specular.value).convertSRGBToLinear():a.SpecularColor&&a.SpecularColor.type==="Color"&&(x.specular=new pe().fromArray(a.SpecularColor.value).convertSRGBToLinear());const E=this;return M0.get(w).children.forEach(function(L){const O=L.relationship;switch(O){case"Bump":x.bumpMap=E.getTexture(g,L.ID);break;case"Maya|TEX_ao_map":x.aoMap=E.getTexture(g,L.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":x.map=E.getTexture(g,L.ID),x.map!==void 0&&(x.map.colorSpace=T0);break;case"DisplacementColor":x.displacementMap=E.getTexture(g,L.ID);break;case"EmissiveColor":x.emissiveMap=E.getTexture(g,L.ID),x.emissiveMap!==void 0&&(x.emissiveMap.colorSpace=T0);break;case"NormalMap":case"Maya|TEX_normal_map":x.normalMap=E.getTexture(g,L.ID);break;case"ReflectionColor":x.envMap=E.getTexture(g,L.ID),x.envMap!==void 0&&(x.envMap.mapping=Rc,x.envMap.colorSpace=T0);break;case"SpecularColor":x.specularMap=E.getTexture(g,L.ID),x.specularMap!==void 0&&(x.specularMap.colorSpace=T0);break;case"TransparentColor":case"TransparencyFactor":x.alphaMap=E.getTexture(g,L.ID),x.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",O);break}}),x}getTexture(a,g){return"LayeredTexture"in rn.Objects&&g in rn.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),g=M0.get(g).children[0].ID),a.get(g)}parseDeformers(){const a={},g={};if("Deformer"in rn.Objects){const w=rn.Objects.Deformer;for(const x in w){const E=w[x],L=M0.get(parseInt(x));if(E.attrType==="Skin"){const O=this.parseSkeleton(L,w);O.ID=x,L.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),O.geometryID=L.parents[0].ID,a[x]=O}else if(E.attrType==="BlendShape"){const O={id:x};O.rawTargets=this.parseMorphTargets(L,w),O.id=x,L.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),g[x]=O}}}return{skeletons:a,morphTargets:g}}parseSkeleton(a,g){const w=[];return a.children.forEach(function(x){const E=g[x.ID];if(E.attrType!=="Cluster")return;const L={ID:x.ID,indices:[],weights:[],transformLink:new _e().fromArray(E.TransformLink.a)};"Indexes"in E&&(L.indices=E.Indexes.a,L.weights=E.Weights.a),w.push(L)}),{rawBones:w,bones:[]}}parseMorphTargets(a,g){const w=[];for(let x=0;x<a.children.length;x++){const E=a.children[x],L=g[E.ID],O={name:L.attrName,initialWeight:L.DeformPercent,id:L.id,fullWeights:L.FullWeights.a};if(L.attrType!=="BlendShapeChannel")return;O.geoID=M0.get(parseInt(E.ID)).children.filter(function(G){return G.relationship===void 0})[0].ID,w.push(O)}return w}parseScene(a,g,w){Oi=new Ts;const x=this.parseModels(a.skeletons,g,w),E=rn.Objects.Model,L=this;x.forEach(function(G){const h=E[G.ID];L.setLookAtProperties(G,h),M0.get(G.ID).parents.forEach(function(Z){const K=x.get(Z.ID);K!==void 0&&K.add(G)}),G.parent===null&&Oi.add(G)}),this.bindSkeleton(a.skeletons,g,x),this.addGlobalSceneSettings(),Oi.traverse(function(G){if(G.userData.transformData){G.parent&&(G.userData.transformData.parentMatrix=G.parent.matrix,G.userData.transformData.parentMatrixWorld=G.parent.matrixWorld);const h=CQ(G.userData.transformData);G.applyMatrix4(h),G.updateWorldMatrix()}});const O=new ed2().parse();Oi.children.length===1&&Oi.children[0].isGroup&&(Oi.children[0].animations=O,Oi=Oi.children[0]),Oi.animations=O}parseModels(a,g,w){const x=new Map,E=rn.Objects.Model;for(const L in E){const O=parseInt(L),G=E[L],h=M0.get(O);let X=this.buildSkeleton(h,a,O,G.attrName);if(!X){switch(G.attrType){case"Camera":X=this.createCamera(h);break;case"Light":X=this.createLight(h);break;case"Mesh":X=this.createMesh(h,g,w);break;case"NurbsCurve":X=this.createCurve(h,g);break;case"LimbNode":case"Root":X=new Oc;break;case"Null":default:X=new Ts;break}X.name=G.attrName?An.sanitizeNodeName(G.attrName):"",X.userData.originalName=G.attrName,X.ID=O}this.getTransformData(X,G),x.set(O,X)}return x}buildSkeleton(a,g,w,x){let E=null;return a.parents.forEach(function(L){for(const O in g){const G=g[O];G.rawBones.forEach(function(h,X){if(h.ID===L.ID){const Z=E;E=new Oc,E.matrixWorld.copy(h.transformLink),E.name=x?An.sanitizeNodeName(x):"",E.userData.originalName=x,E.ID=w,G.bones[X]=E,Z!==null&&E.add(Z)}})}}),E}createCamera(a){let g,w;if(a.children.forEach(function(x){const E=rn.Objects.NodeAttribute[x.ID];E!==void 0&&(w=E)}),w===void 0)g=new Nn;else{let x=0;w.CameraProjectionType!==void 0&&w.CameraProjectionType.value===1&&(x=1);let E=1;w.NearPlane!==void 0&&(E=w.NearPlane.value/1e3);let L=1e3;w.FarPlane!==void 0&&(L=w.FarPlane.value/1e3);let O=window.innerWidth,G=window.innerHeight;w.AspectWidth!==void 0&&w.AspectHeight!==void 0&&(O=w.AspectWidth.value,G=w.AspectHeight.value);const h=O/G;let X=45;w.FieldOfView!==void 0&&(X=w.FieldOfView.value);const Z=w.FocalLength?w.FocalLength.value:null;switch(x){case 0:g=new Si(X,h,E,L),Z!==null&&g.setFocalLength(Z);break;case 1:g=new Jc(-O/2,O/2,G/2,-G/2,E,L);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+x+"."),g=new Nn;break}}return g}createLight(a){let g,w;if(a.children.forEach(function(x){const E=rn.Objects.NodeAttribute[x.ID];E!==void 0&&(w=E)}),w===void 0)g=new Nn;else{let x;w.LightType===void 0?x=0:x=w.LightType.value;let E=16777215;w.Color!==void 0&&(E=new pe().fromArray(w.Color.value).convertSRGBToLinear());let L=w.Intensity===void 0?1:w.Intensity.value/100;w.CastLightOnObject!==void 0&&w.CastLightOnObject.value===0&&(L=0);let O=0;w.FarAttenuationEnd!==void 0&&(w.EnableFarAttenuation!==void 0&&w.EnableFarAttenuation.value===0?O=0:O=w.FarAttenuationEnd.value);const G=1;switch(x){case 0:g=new Wc(E,L,O,G);break;case 1:g=new rh(E,L);break;case 2:let h=Math.PI/3;w.InnerAngle!==void 0&&(h=Z0.degToRad(w.InnerAngle.value));let X=0;w.OuterAngle!==void 0&&(X=Z0.degToRad(w.OuterAngle.value),X=Math.max(X,1)),g=new dQ(E,L,O,h,X,G);break;default:console.warn("THREE.FBXLoader: Unknown light type "+w.LightType.value+", defaulting to a PointLight."),g=new Wc(E,L);break}w.CastShadows!==void 0&&w.CastShadows.value===1&&(g.castShadow=!0)}return g}createMesh(a,g,w){let x,E=null,L=null;const O=[];return a.children.forEach(function(G){g.has(G.ID)&&(E=g.get(G.ID)),w.has(G.ID)&&O.push(w.get(G.ID))}),O.length>1?L=O:O.length>0?L=O[0]:(L=new oa({name:Vo.DEFAULT_MATERIAL_NAME,color:13421772}),O.push(L)),"color"in E.attributes&&O.forEach(function(G){G.vertexColors=!0}),E.FBX_Deformer?(x=new eQ(E,L),x.normalizeSkinWeights()):x=new q0(E,L),x}createCurve(a,g){const w=a.children.reduce(function(E,L){return g.has(L.ID)&&(E=g.get(L.ID)),E},null),x=new Kf({name:Vo.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new Au(w,x)}getTransformData(a,g){const w={};"InheritType"in g&&(w.inheritType=parseInt(g.InheritType.value)),"RotationOrder"in g?w.eulerOrder=MQ(g.RotationOrder.value):w.eulerOrder="ZYX","Lcl_Translation"in g&&(w.translation=g.Lcl_Translation.value),"PreRotation"in g&&(w.preRotation=g.PreRotation.value),"Lcl_Rotation"in g&&(w.rotation=g.Lcl_Rotation.value),"PostRotation"in g&&(w.postRotation=g.PostRotation.value),"Lcl_Scaling"in g&&(w.scale=g.Lcl_Scaling.value),"ScalingOffset"in g&&(w.scalingOffset=g.ScalingOffset.value),"ScalingPivot"in g&&(w.scalingPivot=g.ScalingPivot.value),"RotationOffset"in g&&(w.rotationOffset=g.RotationOffset.value),"RotationPivot"in g&&(w.rotationPivot=g.RotationPivot.value),a.userData.transformData=w}setLookAtProperties(a,g){"LookAtProperty"in g&&M0.get(a.ID).children.forEach(function(x){if(x.relationship==="LookAtProperty"){const E=rn.Objects.Model[x.ID];if("Lcl_Translation"in E){const L=E.Lcl_Translation.value;a.target!==void 0?(a.target.position.fromArray(L),Oi.add(a.target)):a.lookAt(new S2().fromArray(L))}}})}bindSkeleton(a,g,w){const x=this.parsePoseNodes();for(const E in a){const L=a[E];M0.get(parseInt(L.ID)).parents.forEach(function(G){if(g.has(G.ID)){const h=G.ID;M0.get(h).parents.forEach(function(Z){w.has(Z.ID)&&w.get(Z.ID).bind(new $c(L.bones),x[Z.ID])})}})}}parsePoseNodes(){const a={};if("Pose"in rn.Objects){const g=rn.Objects.Pose;for(const w in g)if(g[w].attrType==="BindPose"&&g[w].NbPoseNodes>0){const x=g[w].PoseNode;Array.isArray(x)?x.forEach(function(E){a[E.Node]=new _e().fromArray(E.Matrix.a)}):a[x.Node]=new _e().fromArray(x.Matrix.a)}}return a}addGlobalSceneSettings(){if("GlobalSettings"in rn){if("AmbientColor"in rn.GlobalSettings){const a=rn.GlobalSettings.AmbientColor.value,g=a[0],w=a[1],x=a[2];if(g!==0||w!==0||x!==0){const E=new pe(g,w,x).convertSRGBToLinear();Oi.add(new AQ(E,1))}}"UnitScaleFactor"in rn.GlobalSettings&&(Oi.userData.unitScaleFactor=rn.GlobalSettings.UnitScaleFactor.value)}}}class td2{constructor(){this.negativeMaterialIndices=!1}parse(a){const g=new Map;if("Geometry"in rn.Objects){const w=rn.Objects.Geometry;for(const x in w){const E=M0.get(parseInt(x)),L=this.parseGeometry(E,w[x],a);g.set(parseInt(x),L)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),g}parseGeometry(a,g,w){switch(g.attrType){case"Mesh":return this.parseMeshGeometry(a,g,w);case"NurbsCurve":return this.parseNurbsGeometry(g)}}parseMeshGeometry(a,g,w){const x=w.skeletons,E=[],L=a.parents.map(function(Z){return rn.Objects.Model[Z.ID]});if(L.length===0)return;const O=a.children.reduce(function(Z,K){return x[K.ID]!==void 0&&(Z=x[K.ID]),Z},null);a.children.forEach(function(Z){w.morphTargets[Z.ID]!==void 0&&E.push(w.morphTargets[Z.ID])});const G=L[0],h={};"RotationOrder"in G&&(h.eulerOrder=MQ(G.RotationOrder.value)),"InheritType"in G&&(h.inheritType=parseInt(G.InheritType.value)),"GeometricTranslation"in G&&(h.translation=G.GeometricTranslation.value),"GeometricRotation"in G&&(h.rotation=G.GeometricRotation.value),"GeometricScaling"in G&&(h.scale=G.GeometricScaling.value);const X=CQ(h);return this.genGeometry(g,O,E,X)}genGeometry(a,g,w,x){const E=new J0;a.attrName&&(E.name=a.attrName);const L=this.parseGeoNode(a,g),O=this.genBuffers(L),G=new t0(O.vertex,3);if(G.applyMatrix4(x),E.setAttribute("position",G),O.colors.length>0&&E.setAttribute("color",new t0(O.colors,3)),g&&(E.setAttribute("skinIndex",new Qa(O.weightsIndices,4)),E.setAttribute("skinWeight",new t0(O.vertexWeights,4)),E.FBX_Deformer=g),O.normal.length>0){const h=new Je().getNormalMatrix(x),X=new t0(O.normal,3);X.applyNormalMatrix(h),E.setAttribute("normal",X)}if(O.uvs.forEach(function(h,X){const Z=X===0?"uv":`uv${X}`;E.setAttribute(Z,new t0(O.uvs[X],2))}),L.material&&L.material.mappingType!=="AllSame"){let h=O.materialIndex[0],X=0;if(O.materialIndex.forEach(function(Z,K){Z!==h&&(E.addGroup(X,K-X,h),h=Z,X=K)}),E.groups.length>0){const Z=E.groups[E.groups.length-1],K=Z.start+Z.count;K!==O.materialIndex.length&&E.addGroup(K,O.materialIndex.length-K,h)}E.groups.length===0&&E.addGroup(0,O.materialIndex.length,O.materialIndex[0])}return this.addMorphTargets(E,a,w,x),E}parseGeoNode(a,g){const w={};if(w.vertexPositions=a.Vertices!==void 0?a.Vertices.a:[],w.vertexIndices=a.PolygonVertexIndex!==void 0?a.PolygonVertexIndex.a:[],a.LayerElementColor&&(w.color=this.parseVertexColors(a.LayerElementColor[0])),a.LayerElementMaterial&&(w.material=this.parseMaterialIndices(a.LayerElementMaterial[0])),a.LayerElementNormal&&(w.normal=this.parseNormals(a.LayerElementNormal[0])),a.LayerElementUV){w.uv=[];let x=0;for(;a.LayerElementUV[x];)a.LayerElementUV[x].UV&&w.uv.push(this.parseUVs(a.LayerElementUV[x])),x++}return w.weightTable={},g!==null&&(w.skeleton=g,g.rawBones.forEach(function(x,E){x.indices.forEach(function(L,O){w.weightTable[L]===void 0&&(w.weightTable[L]=[]),w.weightTable[L].push({id:E,weight:x.weights[O]})})})),w}genBuffers(a){const g={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let w=0,x=0,E=!1,L=[],O=[],G=[],h=[],X=[],Z=[];const K=this;return a.vertexIndices.forEach(function(e2,l2){let p2,r2=!1;e2<0&&(e2=e2^-1,r2=!0);let o2=[],k2=[];if(L.push(e2*3,e2*3+1,e2*3+2),a.color){const h2=wc(l2,w,e2,a.color);G.push(h2[0],h2[1],h2[2])}if(a.skeleton){if(a.weightTable[e2]!==void 0&&a.weightTable[e2].forEach(function(h2){k2.push(h2.weight),o2.push(h2.id)}),k2.length>4){E||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),E=!0);const h2=[0,0,0,0],v2=[0,0,0,0];k2.forEach(function(j2,R2){let D2=j2,Q2=o2[R2];v2.forEach(function(x2,g2,Y2){if(D2>x2){Y2[g2]=D2,D2=x2;const st=h2[g2];h2[g2]=Q2,Q2=st}})}),o2=h2,k2=v2}for(;k2.length<4;)k2.push(0),o2.push(0);for(let h2=0;h2<4;++h2)X.push(k2[h2]),Z.push(o2[h2])}if(a.normal){const h2=wc(l2,w,e2,a.normal);O.push(h2[0],h2[1],h2[2])}a.material&&a.material.mappingType!=="AllSame"&&(p2=wc(l2,w,e2,a.material)[0],p2<0&&(K.negativeMaterialIndices=!0,p2=0)),a.uv&&a.uv.forEach(function(h2,v2){const j2=wc(l2,w,e2,h2);h[v2]===void 0&&(h[v2]=[]),h[v2].push(j2[0]),h[v2].push(j2[1])}),x++,r2&&(K.genFace(g,a,L,p2,O,G,h,X,Z,x),w++,x=0,L=[],O=[],G=[],h=[],X=[],Z=[])}),g}getNormalNewell(a){const g=new S2(0,0,0);for(let w=0;w<a.length;w++){const x=a[w],E=a[(w+1)%a.length];g.x+=(x.y-E.y)*(x.z+E.z),g.y+=(x.z-E.z)*(x.x+E.x),g.z+=(x.x-E.x)*(x.y+E.y)}return g.normalize(),g}getNormalTangentAndBitangent(a){const g=this.getNormalNewell(a),x=(Math.abs(g.z)>.5?new S2(0,1,0):new S2(0,0,1)).cross(g).normalize(),E=g.clone().cross(x).normalize();return{normal:g,tangent:x,bitangent:E}}flattenVertex(a,g,w){return new Lt(a.dot(g),a.dot(w))}genFace(a,g,w,x,E,L,O,G,h,X){let Z;if(X>3){const K=[];for(let r2=0;r2<w.length;r2+=3)K.push(new S2(g.vertexPositions[w[r2]],g.vertexPositions[w[r2+1]],g.vertexPositions[w[r2+2]]));const{tangent:e2,bitangent:l2}=this.getNormalTangentAndBitangent(K),p2=[];for(const r2 of K)p2.push(this.flattenVertex(r2,e2,l2));Z=th.triangulateShape(p2,[])}else Z=[[0,1,2]];for(const[K,e2,l2]of Z)a.vertex.push(g.vertexPositions[w[K*3]]),a.vertex.push(g.vertexPositions[w[K*3+1]]),a.vertex.push(g.vertexPositions[w[K*3+2]]),a.vertex.push(g.vertexPositions[w[e2*3]]),a.vertex.push(g.vertexPositions[w[e2*3+1]]),a.vertex.push(g.vertexPositions[w[e2*3+2]]),a.vertex.push(g.vertexPositions[w[l2*3]]),a.vertex.push(g.vertexPositions[w[l2*3+1]]),a.vertex.push(g.vertexPositions[w[l2*3+2]]),g.skeleton&&(a.vertexWeights.push(G[K*4]),a.vertexWeights.push(G[K*4+1]),a.vertexWeights.push(G[K*4+2]),a.vertexWeights.push(G[K*4+3]),a.vertexWeights.push(G[e2*4]),a.vertexWeights.push(G[e2*4+1]),a.vertexWeights.push(G[e2*4+2]),a.vertexWeights.push(G[e2*4+3]),a.vertexWeights.push(G[l2*4]),a.vertexWeights.push(G[l2*4+1]),a.vertexWeights.push(G[l2*4+2]),a.vertexWeights.push(G[l2*4+3]),a.weightsIndices.push(h[K*4]),a.weightsIndices.push(h[K*4+1]),a.weightsIndices.push(h[K*4+2]),a.weightsIndices.push(h[K*4+3]),a.weightsIndices.push(h[e2*4]),a.weightsIndices.push(h[e2*4+1]),a.weightsIndices.push(h[e2*4+2]),a.weightsIndices.push(h[e2*4+3]),a.weightsIndices.push(h[l2*4]),a.weightsIndices.push(h[l2*4+1]),a.weightsIndices.push(h[l2*4+2]),a.weightsIndices.push(h[l2*4+3])),g.color&&(a.colors.push(L[K*3]),a.colors.push(L[K*3+1]),a.colors.push(L[K*3+2]),a.colors.push(L[e2*3]),a.colors.push(L[e2*3+1]),a.colors.push(L[e2*3+2]),a.colors.push(L[l2*3]),a.colors.push(L[l2*3+1]),a.colors.push(L[l2*3+2])),g.material&&g.material.mappingType!=="AllSame"&&(a.materialIndex.push(x),a.materialIndex.push(x),a.materialIndex.push(x)),g.normal&&(a.normal.push(E[K*3]),a.normal.push(E[K*3+1]),a.normal.push(E[K*3+2]),a.normal.push(E[e2*3]),a.normal.push(E[e2*3+1]),a.normal.push(E[e2*3+2]),a.normal.push(E[l2*3]),a.normal.push(E[l2*3+1]),a.normal.push(E[l2*3+2])),g.uv&&g.uv.forEach(function(p2,r2){a.uvs[r2]===void 0&&(a.uvs[r2]=[]),a.uvs[r2].push(O[r2][K*2]),a.uvs[r2].push(O[r2][K*2+1]),a.uvs[r2].push(O[r2][e2*2]),a.uvs[r2].push(O[r2][e2*2+1]),a.uvs[r2].push(O[r2][l2*2]),a.uvs[r2].push(O[r2][l2*2+1])})}addMorphTargets(a,g,w,x){if(w.length===0)return;a.morphTargetsRelative=!0,a.morphAttributes.position=[];const E=this;w.forEach(function(L){L.rawTargets.forEach(function(O){const G=rn.Objects.Geometry[O.geoID];G!==void 0&&E.genMorphGeometry(a,g,G,x,O.name)})})}genMorphGeometry(a,g,w,x,E){const L=g.PolygonVertexIndex!==void 0?g.PolygonVertexIndex.a:[],O=w.Vertices!==void 0?w.Vertices.a:[],G=w.Indexes!==void 0?w.Indexes.a:[],h=a.attributes.position.count*3,X=new Float32Array(h);for(let l2=0;l2<G.length;l2++){const p2=G[l2]*3;X[p2]=O[l2*3],X[p2+1]=O[l2*3+1],X[p2+2]=O[l2*3+2]}const Z={vertexIndices:L,vertexPositions:X},K=this.genBuffers(Z),e2=new t0(K.vertex,3);e2.name=E||w.attrName,e2.applyMatrix4(x),a.morphAttributes.position.push(e2)}parseNormals(a){const g=a.MappingInformationType,w=a.ReferenceInformationType,x=a.Normals.a;let E=[];return w==="IndexToDirect"&&("NormalIndex"in a?E=a.NormalIndex.a:"NormalsIndex"in a&&(E=a.NormalsIndex.a)),{dataSize:3,buffer:x,indices:E,mappingType:g,referenceType:w}}parseUVs(a){const g=a.MappingInformationType,w=a.ReferenceInformationType,x=a.UV.a;let E=[];return w==="IndexToDirect"&&(E=a.UVIndex.a),{dataSize:2,buffer:x,indices:E,mappingType:g,referenceType:w}}parseVertexColors(a){const g=a.MappingInformationType,w=a.ReferenceInformationType,x=a.Colors.a;let E=[];w==="IndexToDirect"&&(E=a.ColorIndex.a);for(let L=0,O=new pe;L<x.length;L+=4)O.fromArray(x,L).convertSRGBToLinear().toArray(x,L);return{dataSize:4,buffer:x,indices:E,mappingType:g,referenceType:w}}parseMaterialIndices(a){const g=a.MappingInformationType,w=a.ReferenceInformationType;if(g==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:w};const x=a.Materials.a,E=[];for(let L=0;L<x.length;++L)E.push(L);return{dataSize:1,buffer:x,indices:E,mappingType:g,referenceType:w}}parseNurbsGeometry(a){const g=parseInt(a.Order);if(isNaN(g))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",a.Order,a.id),new J0;const w=g-1,x=a.KnotVector.a,E=[],L=a.Points.a;for(let Z=0,K=L.length;Z<K;Z+=4)E.push(new bn().fromArray(L,Z));let O,G;if(a.Form==="Closed")E.push(E[0]);else if(a.Form==="Periodic"){O=w,G=x.length-1-O;for(let Z=0;Z<w;++Z)E.push(E[Z])}const X=new Jm2(w,x,E,O,G).getPoints(E.length*12);return new J0().setFromPoints(X)}}class ed2{parse(){const a=[],g=this.parseClips();if(g!==void 0)for(const w in g){const x=g[w],E=this.addClip(x);a.push(E)}return a}parseClips(){if(rn.Objects.AnimationCurve===void 0)return;const a=this.parseAnimationCurveNodes();this.parseAnimationCurves(a);const g=this.parseAnimationLayers(a);return this.parseAnimStacks(g)}parseAnimationCurveNodes(){const a=rn.Objects.AnimationCurveNode,g=new Map;for(const w in a){const x=a[w];if(x.attrName.match(/S|R|T|DeformPercent/)!==null){const E={id:x.id,attr:x.attrName,curves:{}};g.set(E.id,E)}}return g}parseAnimationCurves(a){const g=rn.Objects.AnimationCurve;for(const w in g){const x={id:g[w].id,times:g[w].KeyTime.a.map(sd2),values:g[w].KeyValueFloat.a},E=M0.get(x.id);if(E!==void 0){const L=E.parents[0].ID,O=E.parents[0].relationship;O.match(/X/)?a.get(L).curves.x=x:O.match(/Y/)?a.get(L).curves.y=x:O.match(/Z/)?a.get(L).curves.z=x:O.match(/DeformPercent/)&&a.has(L)&&(a.get(L).curves.morph=x)}}}parseAnimationLayers(a){const g=rn.Objects.AnimationLayer,w=new Map;for(const x in g){const E=[],L=M0.get(parseInt(x));L!==void 0&&(L.children.forEach(function(G,h){if(a.has(G.ID)){const X=a.get(G.ID);if(X.curves.x!==void 0||X.curves.y!==void 0||X.curves.z!==void 0){if(E[h]===void 0){const Z=M0.get(G.ID).parents.filter(function(K){return K.relationship!==void 0})[0].ID;if(Z!==void 0){const K=rn.Objects.Model[Z.toString()];if(K===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",G);return}const e2={modelName:K.attrName?An.sanitizeNodeName(K.attrName):"",ID:K.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};Oi.traverse(function(l2){l2.ID===K.id&&(e2.transform=l2.matrix,l2.userData.transformData&&(e2.eulerOrder=l2.userData.transformData.eulerOrder))}),e2.transform||(e2.transform=new _e),"PreRotation"in K&&(e2.preRotation=K.PreRotation.value),"PostRotation"in K&&(e2.postRotation=K.PostRotation.value),E[h]=e2}}E[h]&&(E[h][X.attr]=X)}else if(X.curves.morph!==void 0){if(E[h]===void 0){const Z=M0.get(G.ID).parents.filter(function(o2){return o2.relationship!==void 0})[0].ID,K=M0.get(Z).parents[0].ID,e2=M0.get(K).parents[0].ID,l2=M0.get(e2).parents[0].ID,p2=rn.Objects.Model[l2],r2={modelName:p2.attrName?An.sanitizeNodeName(p2.attrName):"",morphName:rn.Objects.Deformer[Z].attrName};E[h]=r2}E[h][X.attr]=X}}}),w.set(parseInt(x),E))}return w}parseAnimStacks(a){const g=rn.Objects.AnimationStack,w={};for(const x in g){const E=M0.get(parseInt(x)).children;E.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const L=a.get(E[0].ID);w[x]={name:g[x].attrName,layer:L}}return w}addClip(a){let g=[];const w=this;return a.layer.forEach(function(x){g=g.concat(w.generateTracks(x))}),new Gc(a.name,-1,g)}generateTracks(a){const g=[];let w=new S2,x=new S2;if(a.transform&&a.transform.decompose(w,new Sn,x),w=w.toArray(),x=x.toArray(),a.T!==void 0&&Object.keys(a.T.curves).length>0){const E=this.generateVectorTrack(a.modelName,a.T.curves,w,"position");E!==void 0&&g.push(E)}if(a.R!==void 0&&Object.keys(a.R.curves).length>0){const E=this.generateRotationTrack(a.modelName,a.R.curves,a.preRotation,a.postRotation,a.eulerOrder);E!==void 0&&g.push(E)}if(a.S!==void 0&&Object.keys(a.S.curves).length>0){const E=this.generateVectorTrack(a.modelName,a.S.curves,x,"scale");E!==void 0&&g.push(E)}if(a.DeformPercent!==void 0){const E=this.generateMorphTrack(a);E!==void 0&&g.push(E)}return g}generateVectorTrack(a,g,w,x){const E=this.getTimesForAllAxes(g),L=this.getKeyframeTrackValues(E,g,w);return new tl(a+"."+x,E,L)}generateRotationTrack(a,g,w,x,E){let L,O;if(g.x!==void 0&&g.y!==void 0&&g.z!==void 0){const Z=this.interpolateRotations(g.x,g.y,g.z,E);L=Z[0],O=Z[1]}w!==void 0&&(w=w.map(Z0.degToRad),w.push(E),w=new xn().fromArray(w),w=new Sn().setFromEuler(w)),x!==void 0&&(x=x.map(Z0.degToRad),x.push(E),x=new xn().fromArray(x),x=new Sn().setFromEuler(x).invert());const G=new Sn,h=new xn,X=[];if(!O||!L)return new Es(a+".quaternion",[0],[0]);for(let Z=0;Z<O.length;Z+=3)h.set(O[Z],O[Z+1],O[Z+2],E),G.setFromEuler(h),w!==void 0&&G.premultiply(w),x!==void 0&&G.multiply(x),Z>2&&new Sn().fromArray(X,(Z-3)/3*4).dot(G)<0&&G.set(-G.x,-G.y,-G.z,-G.w),G.toArray(X,Z/3*4);return new Es(a+".quaternion",L,X)}generateMorphTrack(a){const g=a.DeformPercent.curves.morph,w=g.values.map(function(E){return E/100}),x=Oi.getObjectByName(a.modelName).morphTargetDictionary[a.morphName];return new $1(a.modelName+".morphTargetInfluences["+x+"]",g.times,w)}getTimesForAllAxes(a){let g=[];if(a.x!==void 0&&(g=g.concat(a.x.times)),a.y!==void 0&&(g=g.concat(a.y.times)),a.z!==void 0&&(g=g.concat(a.z.times)),g=g.sort(function(w,x){return w-x}),g.length>1){let w=1,x=g[0];for(let E=1;E<g.length;E++){const L=g[E];L!==x&&(g[w]=L,x=L,w++)}g=g.slice(0,w)}return g}getKeyframeTrackValues(a,g,w){const x=w,E=[];let L=-1,O=-1,G=-1;return a.forEach(function(h){if(g.x&&(L=g.x.times.indexOf(h)),g.y&&(O=g.y.times.indexOf(h)),g.z&&(G=g.z.times.indexOf(h)),L!==-1){const X=g.x.values[L];E.push(X),x[0]=X}else E.push(x[0]);if(O!==-1){const X=g.y.values[O];E.push(X),x[1]=X}else E.push(x[1]);if(G!==-1){const X=g.z.values[G];E.push(X),x[2]=X}else E.push(x[2])}),E}interpolateRotations(a,g,w,x){const E=[],L=[];E.push(a.times[0]),L.push(Z0.degToRad(a.values[0])),L.push(Z0.degToRad(g.values[0])),L.push(Z0.degToRad(w.values[0]));for(let O=1;O<a.values.length;O++){const G=[a.values[O-1],g.values[O-1],w.values[O-1]];if(isNaN(G[0])||isNaN(G[1])||isNaN(G[2]))continue;const h=G.map(Z0.degToRad),X=[a.values[O],g.values[O],w.values[O]];if(isNaN(X[0])||isNaN(X[1])||isNaN(X[2]))continue;const Z=X.map(Z0.degToRad),K=[X[0]-G[0],X[1]-G[1],X[2]-G[2]],e2=[Math.abs(K[0]),Math.abs(K[1]),Math.abs(K[2])];if(e2[0]>=180||e2[1]>=180||e2[2]>=180){const p2=Math.max(...e2)/180,r2=new xn(...h,x),o2=new xn(...Z,x),k2=new Sn().setFromEuler(r2),h2=new Sn().setFromEuler(o2);k2.dot(h2)&&h2.set(-h2.x,-h2.y,-h2.z,-h2.w);const v2=a.times[O-1],j2=a.times[O]-v2,R2=new Sn,D2=new xn;for(let Q2=0;Q2<1;Q2+=1/p2)R2.copy(k2.clone().slerp(h2.clone(),Q2)),E.push(v2+Q2*j2),D2.setFromQuaternion(R2,x),L.push(D2.x),L.push(D2.y),L.push(D2.z)}else E.push(a.times[O]),L.push(Z0.degToRad(a.values[O])),L.push(Z0.degToRad(g.values[O])),L.push(Z0.degToRad(w.values[O]))}return[E,L]}}class nd2{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(a){this.nodeStack.push(a),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(a,g){this.currentProp=a,this.currentPropName=g}parse(a){this.currentIndent=0,this.allNodes=new xQ,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const g=this,w=a.split(/[\r\n]+/);return w.forEach(function(x,E){const L=x.match(/^[\s\t]*;/),O=x.match(/^[\s\t]*$/);if(L||O)return;const G=x.match("^\\t{"+g.currentIndent+"}(\\w+):(.*){",""),h=x.match("^\\t{"+g.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),X=x.match("^\\t{"+(g.currentIndent-1)+"}}");G?g.parseNodeBegin(x,G):h?g.parseNodeProperty(x,h,w[++E]):X?g.popStack():x.match(/^[^\s\t}]/)&&g.parseNodePropertyContinued(x)}),this.allNodes}parseNodeBegin(a,g){const w=g[1].trim().replace(/^"/,"").replace(/"$/,""),x=g[2].split(",").map(function(G){return G.trim().replace(/^"/,"").replace(/"$/,"")}),E={name:w},L=this.parseNodeAttr(x),O=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(w,E):w in O?(w==="PoseNode"?O.PoseNode.push(E):O[w].id!==void 0&&(O[w]={},O[w][O[w].id]=O[w]),L.id!==""&&(O[w][L.id]=E)):typeof L.id=="number"?(O[w]={},O[w][L.id]=E):w!=="Properties70"&&(w==="PoseNode"?O[w]=[E]:O[w]=E),typeof L.id=="number"&&(E.id=L.id),L.name!==""&&(E.attrName=L.name),L.type!==""&&(E.attrType=L.type),this.pushStack(E)}parseNodeAttr(a){let g=a[0];a[0]!==""&&(g=parseInt(a[0]),isNaN(g)&&(g=a[0]));let w="",x="";return a.length>1&&(w=a[1].replace(/^(\w+)::/,""),x=a[2]),{id:g,name:w,type:x}}parseNodeProperty(a,g,w){let x=g[1].replace(/^"/,"").replace(/"$/,"").trim(),E=g[2].replace(/^"/,"").replace(/"$/,"").trim();x==="Content"&&E===","&&(E=w.replace(/"/g,"").replace(/,$/,"").trim());const L=this.getCurrentNode();if(L.name==="Properties70"){this.parseNodeSpecialProperty(a,x,E);return}if(x==="C"){const G=E.split(",").slice(1),h=parseInt(G[0]),X=parseInt(G[1]);let Z=E.split(",").slice(3);Z=Z.map(function(K){return K.trim().replace(/^"/,"")}),x="connections",E=[h,X],ud2(E,Z),L[x]===void 0&&(L[x]=[])}x==="Node"&&(L.id=E),x in L&&Array.isArray(L[x])?L[x].push(E):x!=="a"?L[x]=E:L.a=E,this.setCurrentProp(L,x),x==="a"&&E.slice(-1)!==","&&(L.a=ca(E))}parseNodePropertyContinued(a){const g=this.getCurrentNode();g.a+=a,a.slice(-1)!==","&&(g.a=ca(g.a))}parseNodeSpecialProperty(a,g,w){const x=w.split('",').map(function(X){return X.trim().replace(/^\"/,"").replace(/\s/,"_")}),E=x[0],L=x[1],O=x[2],G=x[3];let h=x[4];switch(L){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":h=parseFloat(h);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":h=ca(h);break}this.getPrevNode()[E]={type:L,type2:O,flag:G,value:h},this.setCurrentProp(this.getPrevNode(),E)}}class id2{parse(a){const g=new aV(a);g.skip(23);const w=g.getUint32();if(w<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+w);const x=new xQ;for(;!this.endOfContent(g);){const E=this.parseNode(g,w);E!==null&&x.add(E.name,E)}return x}endOfContent(a){return a.size()%16===0?(a.getOffset()+160+16&-16)>=a.size():a.getOffset()+160+16>=a.size()}parseNode(a,g){const w={},x=g>=7500?a.getUint64():a.getUint32(),E=g>=7500?a.getUint64():a.getUint32();g>=7500?a.getUint64():a.getUint32();const L=a.getUint8(),O=a.getString(L);if(x===0)return null;const G=[];for(let K=0;K<E;K++)G.push(this.parseProperty(a));const h=G.length>0?G[0]:"",X=G.length>1?G[1]:"",Z=G.length>2?G[2]:"";for(w.singleProperty=E===1&&a.getOffset()===x;x>a.getOffset();){const K=this.parseNode(a,g);K!==null&&this.parseSubNode(O,w,K)}return w.propertyList=G,typeof h=="number"&&(w.id=h),X!==""&&(w.attrName=X),Z!==""&&(w.attrType=Z),O!==""&&(w.name=O),w}parseSubNode(a,g,w){if(w.singleProperty===!0){const x=w.propertyList[0];Array.isArray(x)?(g[w.name]=w,w.a=x):g[w.name]=x}else if(a==="Connections"&&w.name==="C"){const x=[];w.propertyList.forEach(function(E,L){L!==0&&x.push(E)}),g.connections===void 0&&(g.connections=[]),g.connections.push(x)}else if(w.name==="Properties70")Object.keys(w).forEach(function(E){g[E]=w[E]});else if(a==="Properties70"&&w.name==="P"){let x=w.propertyList[0],E=w.propertyList[1];const L=w.propertyList[2],O=w.propertyList[3];let G;x.indexOf("Lcl ")===0&&(x=x.replace("Lcl ","Lcl_")),E.indexOf("Lcl ")===0&&(E=E.replace("Lcl ","Lcl_")),E==="Color"||E==="ColorRGB"||E==="Vector"||E==="Vector3D"||E.indexOf("Lcl_")===0?G=[w.propertyList[4],w.propertyList[5],w.propertyList[6]]:G=w.propertyList[4],g[x]={type:E,type2:L,flag:O,value:G}}else g[w.name]===void 0?typeof w.id=="number"?(g[w.name]={},g[w.name][w.id]=w):g[w.name]=w:w.name==="PoseNode"?(Array.isArray(g[w.name])||(g[w.name]=[g[w.name]]),g[w.name].push(w)):g[w.name][w.id]===void 0&&(g[w.name][w.id]=w)}parseProperty(a){const g=a.getString(1);let w;switch(g){case"C":return a.getBoolean();case"D":return a.getFloat64();case"F":return a.getFloat32();case"I":return a.getInt32();case"L":return a.getInt64();case"R":return w=a.getUint32(),a.getArrayBuffer(w);case"S":return w=a.getUint32(),a.getString(w);case"Y":return a.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const x=a.getUint32(),E=a.getUint32(),L=a.getUint32();if(E===0)switch(g){case"b":case"c":return a.getBooleanArray(x);case"d":return a.getFloat64Array(x);case"f":return a.getFloat32Array(x);case"i":return a.getInt32Array(x);case"l":return a.getInt64Array(x)}const O=Gm2(new Uint8Array(a.getArrayBuffer(L))),G=new aV(O.buffer);switch(g){case"b":case"c":return G.getBooleanArray(x);case"d":return G.getFloat64Array(x);case"f":return G.getFloat32Array(x);case"i":return G.getInt32Array(x);case"l":return G.getInt64Array(x)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+g)}}}class aV{constructor(a,g){this.dv=new DataView(a),this.offset=0,this.littleEndian=g!==void 0?g:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(a){this.offset+=a}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(a){const g=[];for(let w=0;w<a;w++)g.push(this.getBoolean());return g}getUint8(){const a=this.dv.getUint8(this.offset);return this.offset+=1,a}getInt16(){const a=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,a}getInt32(){const a=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,a}getInt32Array(a){const g=[];for(let w=0;w<a;w++)g.push(this.getInt32());return g}getUint32(){const a=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,a}getInt64(){let a,g;return this.littleEndian?(a=this.getUint32(),g=this.getUint32()):(g=this.getUint32(),a=this.getUint32()),g&2147483648?(g=~g&4294967295,a=~a&4294967295,a===4294967295&&(g=g+1&4294967295),a=a+1&4294967295,-(g*4294967296+a)):g*4294967296+a}getInt64Array(a){const g=[];for(let w=0;w<a;w++)g.push(this.getInt64());return g}getUint64(){let a,g;return this.littleEndian?(a=this.getUint32(),g=this.getUint32()):(g=this.getUint32(),a=this.getUint32()),g*4294967296+a}getFloat32(){const a=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,a}getFloat32Array(a){const g=[];for(let w=0;w<a;w++)g.push(this.getFloat32());return g}getFloat64(){const a=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,a}getFloat64Array(a){const g=[];for(let w=0;w<a;w++)g.push(this.getFloat64());return g}getArrayBuffer(a){const g=this.dv.buffer.slice(this.offset,this.offset+a);return this.offset+=a,g}getString(a){const g=this.offset;let w=new Uint8Array(this.dv.buffer,g,a);this.skip(a);const x=w.indexOf(0);return x>=0&&(w=new Uint8Array(this.dv.buffer,g,x)),this._textDecoder.decode(w)}}class xQ{add(a,g){this[a]=g}}function rd2(D){const a="Kaydara FBX Binary  \0";return D.byteLength>=a.length&&a===TQ(D,0,a.length)}function od2(D){const a=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let g=0;function w(x){const E=D[x-1];return D=D.slice(g+x),g++,E}for(let x=0;x<a.length;++x)if(w(1)===a[x])return!1;return!0}function hV(D){const a=/FBXVersion: (\d+)/,g=D.match(a);if(g)return parseInt(g[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function sd2(D){return D/46186158e3}const ld2=[];function wc(D,a,g,w){let x;switch(w.mappingType){case"ByPolygonVertex":x=D;break;case"ByPolygon":x=a;break;case"ByVertice":x=g;break;case"AllSame":x=w.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+w.mappingType)}w.referenceType==="IndexToDirect"&&(x=w.indices[x]);const E=x*w.dataSize,L=E+w.dataSize;return fd2(ld2,w.buffer,E,L)}const pa=new xn,$l=new S2;function CQ(D){const a=new _e,g=new _e,w=new _e,x=new _e,E=new _e,L=new _e,O=new _e,G=new _e,h=new _e,X=new _e,Z=new _e,K=new _e,e2=D.inheritType?D.inheritType:0;if(D.translation&&a.setPosition($l.fromArray(D.translation)),D.preRotation){const g2=D.preRotation.map(Z0.degToRad);g2.push(D.eulerOrder||xn.DEFAULT_ORDER),g.makeRotationFromEuler(pa.fromArray(g2))}if(D.rotation){const g2=D.rotation.map(Z0.degToRad);g2.push(D.eulerOrder||xn.DEFAULT_ORDER),w.makeRotationFromEuler(pa.fromArray(g2))}if(D.postRotation){const g2=D.postRotation.map(Z0.degToRad);g2.push(D.eulerOrder||xn.DEFAULT_ORDER),x.makeRotationFromEuler(pa.fromArray(g2)),x.invert()}D.scale&&E.scale($l.fromArray(D.scale)),D.scalingOffset&&O.setPosition($l.fromArray(D.scalingOffset)),D.scalingPivot&&L.setPosition($l.fromArray(D.scalingPivot)),D.rotationOffset&&G.setPosition($l.fromArray(D.rotationOffset)),D.rotationPivot&&h.setPosition($l.fromArray(D.rotationPivot)),D.parentMatrixWorld&&(Z.copy(D.parentMatrix),X.copy(D.parentMatrixWorld));const l2=g.clone().multiply(w).multiply(x),p2=new _e;p2.extractRotation(X);const r2=new _e;r2.copyPosition(X);const o2=r2.clone().invert().multiply(X),k2=p2.clone().invert().multiply(o2),h2=E,v2=new _e;if(e2===0)v2.copy(p2).multiply(l2).multiply(k2).multiply(h2);else if(e2===1)v2.copy(p2).multiply(k2).multiply(l2).multiply(h2);else{const Y2=new _e().scale(new S2().setFromMatrixScale(Z)).clone().invert(),st=k2.clone().multiply(Y2);v2.copy(p2).multiply(l2).multiply(st).multiply(h2)}const j2=h.clone().invert(),R2=L.clone().invert();let D2=a.clone().multiply(G).multiply(h).multiply(g).multiply(w).multiply(x).multiply(j2).multiply(O).multiply(L).multiply(E).multiply(R2);const Q2=new _e().copyPosition(D2),x2=X.clone().multiply(Q2);return K.copyPosition(x2),D2=K.clone().multiply(v2),D2.premultiply(X.invert()),D2}function MQ(D){D=D||0;const a=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return D===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),a[0]):a[D]}function ca(D){return D.split(",").map(function(g){return parseFloat(g)})}function TQ(D,a,g){return a===void 0&&(a=0),g===void 0&&(g=D.byteLength),new TextDecoder().decode(new Uint8Array(D,a,g))}function ud2(D,a){for(let g=0,w=D.length,x=a.length;g<x;g++,w++)D[w]=a[g]}function fd2(D,a,g,w){for(let x=g,E=0;x<w;x++,E++)D[E]=a[x];return D}function mV(D,a){if(a===R42)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),D;if(a===Ca||a===OV){let g=D.getIndex();if(g===null){const L=[],O=D.getAttribute("position");if(O!==void 0){for(let G=0;G<O.count;G++)L.push(G);D.setIndex(L),g=D.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),D}const w=g.count-2,x=[];if(a===Ca)for(let L=1;L<=w;L++)x.push(g.getX(0)),x.push(g.getX(L)),x.push(g.getX(L+1));else for(let L=0;L<w;L++)L%2===0?(x.push(g.getX(L)),x.push(g.getX(L+1)),x.push(g.getX(L+2))):(x.push(g.getX(L+2)),x.push(g.getX(L+1)),x.push(g.getX(L)));x.length/3!==w&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const E=D.clone();return E.setIndex(x),E.clearGroups(),E}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",a),D}class pd2 extends Vo{constructor(a){super(a),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(g){return new md2(g)}),this.register(function(g){return new dd2(g)}),this.register(function(g){return new xd2(g)}),this.register(function(g){return new Cd2(g)}),this.register(function(g){return new Md2(g)}),this.register(function(g){return new gd2(g)}),this.register(function(g){return new yd2(g)}),this.register(function(g){return new kd2(g)}),this.register(function(g){return new vd2(g)}),this.register(function(g){return new hd2(g)}),this.register(function(g){return new wd2(g)}),this.register(function(g){return new Ad2(g)}),this.register(function(g){return new Sd2(g)}),this.register(function(g){return new Bd2(g)}),this.register(function(g){return new _d2(g)}),this.register(function(g){return new Td2(g)}),this.register(function(g){return new Ed2(g)})}load(a,g,w,x){const E=this;let L;if(this.resourcePath!=="")L=this.resourcePath;else if(this.path!==""){const h=uu.extractUrlBase(a);L=uu.resolveURL(h,this.path)}else L=uu.extractUrlBase(a);this.manager.itemStart(a);const O=function(h){x?x(h):console.error(h),E.manager.itemError(a),E.manager.itemEnd(a)},G=new Zf(this.manager);G.setPath(this.path),G.setResponseType("arraybuffer"),G.setRequestHeader(this.requestHeader),G.setWithCredentials(this.withCredentials),G.load(a,function(h){try{E.parse(h,L,function(X){g(X),E.manager.itemEnd(a)},O)}catch(X){O(X)}},w,O)}setDRACOLoader(a){return this.dracoLoader=a,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(a){return this.ktx2Loader=a,this}setMeshoptDecoder(a){return this.meshoptDecoder=a,this}register(a){return this.pluginCallbacks.indexOf(a)===-1&&this.pluginCallbacks.push(a),this}unregister(a){return this.pluginCallbacks.indexOf(a)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(a),1),this}parse(a,g,w,x){let E;const L={},O={},G=new TextDecoder;if(typeof a=="string")E=JSON.parse(a);else if(a instanceof ArrayBuffer)if(G.decode(new Uint8Array(a,0,4))===EQ){try{L[pn.KHR_BINARY_GLTF]=new Rd2(a)}catch(Z){x&&x(Z);return}E=JSON.parse(L[pn.KHR_BINARY_GLTF].content)}else E=JSON.parse(G.decode(a));else E=a;if(E.asset===void 0||E.asset.version[0]<2){x&&x(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new Hd2(E,{path:g||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let X=0;X<this.pluginCallbacks.length;X++){const Z=this.pluginCallbacks[X](h);Z.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),O[Z.name]=Z,L[Z.name]=!0}if(E.extensionsUsed)for(let X=0;X<E.extensionsUsed.length;++X){const Z=E.extensionsUsed[X],K=E.extensionsRequired||[];switch(Z){case pn.KHR_MATERIALS_UNLIT:L[Z]=new ad2;break;case pn.KHR_DRACO_MESH_COMPRESSION:L[Z]=new bd2(E,this.dracoLoader);break;case pn.KHR_TEXTURE_TRANSFORM:L[Z]=new Dd2;break;case pn.KHR_MESH_QUANTIZATION:L[Z]=new Id2;break;default:K.indexOf(Z)>=0&&O[Z]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+Z+'".')}}h.setExtensions(L),h.setPlugins(O),h.parse(w,x)}parseAsync(a,g){const w=this;return new Promise(function(x,E){w.parse(a,g,x,E)})}}function cd2(){let D={};return{get:function(a){return D[a]},add:function(a,g){D[a]=g},remove:function(a){delete D[a]},removeAll:function(){D={}}}}const pn={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class _d2{constructor(a){this.parser=a,this.name=pn.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const a=this.parser,g=this.parser.json.nodes||[];for(let w=0,x=g.length;w<x;w++){const E=g[w];E.extensions&&E.extensions[this.name]&&E.extensions[this.name].light!==void 0&&a._addNodeRef(this.cache,E.extensions[this.name].light)}}_loadLight(a){const g=this.parser,w="light:"+a;let x=g.cache.get(w);if(x)return x;const E=g.json,G=((E.extensions&&E.extensions[this.name]||{}).lights||[])[a];let h;const X=new pe(16777215);G.color!==void 0&&X.setRGB(G.color[0],G.color[1],G.color[2],ii);const Z=G.range!==void 0?G.range:0;switch(G.type){case"directional":h=new rh(X),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new Wc(X),h.distance=Z;break;case"spot":h=new dQ(X),h.distance=Z,G.spot=G.spot||{},G.spot.innerConeAngle=G.spot.innerConeAngle!==void 0?G.spot.innerConeAngle:0,G.spot.outerConeAngle=G.spot.outerConeAngle!==void 0?G.spot.outerConeAngle:Math.PI/4,h.angle=G.spot.outerConeAngle,h.penumbra=1-G.spot.innerConeAngle/G.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+G.type)}return h.position.set(0,0,0),h.decay=2,h1(h,G),G.intensity!==void 0&&(h.intensity=G.intensity),h.name=g.createUniqueName(G.name||"light_"+a),x=Promise.resolve(h),g.cache.add(w,x),x}getDependency(a,g){if(a==="light")return this._loadLight(g)}createNodeAttachment(a){const g=this,w=this.parser,E=w.json.nodes[a],O=(E.extensions&&E.extensions[this.name]||{}).light;return O===void 0?null:this._loadLight(O).then(function(G){return w._getNodeRef(g.cache,O,G)})}}class ad2{constructor(){this.name=pn.KHR_MATERIALS_UNLIT}getMaterialType(){return Ho}extendParams(a,g,w){const x=[];a.color=new pe(1,1,1),a.opacity=1;const E=g.pbrMetallicRoughness;if(E){if(Array.isArray(E.baseColorFactor)){const L=E.baseColorFactor;a.color.setRGB(L[0],L[1],L[2],ii),a.opacity=L[3]}E.baseColorTexture!==void 0&&x.push(w.assignTexture(a,"map",E.baseColorTexture,T0))}return Promise.all(x)}}class hd2{constructor(a){this.parser=a,this.name=pn.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(a,g){const x=this.parser.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=x.extensions[this.name].emissiveStrength;return E!==void 0&&(g.emissiveIntensity=E),Promise.resolve()}}class md2{constructor(a){this.parser=a,this.name=pn.KHR_MATERIALS_CLEARCOAT}getMaterialType(a){const w=this.parser.json.materials[a];return!w.extensions||!w.extensions[this.name]?null:Xo}extendMaterialParams(a,g){const w=this.parser,x=w.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=[],L=x.extensions[this.name];if(L.clearcoatFactor!==void 0&&(g.clearcoat=L.clearcoatFactor),L.clearcoatTexture!==void 0&&E.push(w.assignTexture(g,"clearcoatMap",L.clearcoatTexture)),L.clearcoatRoughnessFactor!==void 0&&(g.clearcoatRoughness=L.clearcoatRoughnessFactor),L.clearcoatRoughnessTexture!==void 0&&E.push(w.assignTexture(g,"clearcoatRoughnessMap",L.clearcoatRoughnessTexture)),L.clearcoatNormalTexture!==void 0&&(E.push(w.assignTexture(g,"clearcoatNormalMap",L.clearcoatNormalTexture)),L.clearcoatNormalTexture.scale!==void 0)){const O=L.clearcoatNormalTexture.scale;g.clearcoatNormalScale=new Lt(O,O)}return Promise.all(E)}}class dd2{constructor(a){this.parser=a,this.name=pn.KHR_MATERIALS_DISPERSION}getMaterialType(a){const w=this.parser.json.materials[a];return!w.extensions||!w.extensions[this.name]?null:Xo}extendMaterialParams(a,g){const x=this.parser.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=x.extensions[this.name];return g.dispersion=E.dispersion!==void 0?E.dispersion:0,Promise.resolve()}}class Ad2{constructor(a){this.parser=a,this.name=pn.KHR_MATERIALS_IRIDESCENCE}getMaterialType(a){const w=this.parser.json.materials[a];return!w.extensions||!w.extensions[this.name]?null:Xo}extendMaterialParams(a,g){const w=this.parser,x=w.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=[],L=x.extensions[this.name];return L.iridescenceFactor!==void 0&&(g.iridescence=L.iridescenceFactor),L.iridescenceTexture!==void 0&&E.push(w.assignTexture(g,"iridescenceMap",L.iridescenceTexture)),L.iridescenceIor!==void 0&&(g.iridescenceIOR=L.iridescenceIor),g.iridescenceThicknessRange===void 0&&(g.iridescenceThicknessRange=[100,400]),L.iridescenceThicknessMinimum!==void 0&&(g.iridescenceThicknessRange[0]=L.iridescenceThicknessMinimum),L.iridescenceThicknessMaximum!==void 0&&(g.iridescenceThicknessRange[1]=L.iridescenceThicknessMaximum),L.iridescenceThicknessTexture!==void 0&&E.push(w.assignTexture(g,"iridescenceThicknessMap",L.iridescenceThicknessTexture)),Promise.all(E)}}class gd2{constructor(a){this.parser=a,this.name=pn.KHR_MATERIALS_SHEEN}getMaterialType(a){const w=this.parser.json.materials[a];return!w.extensions||!w.extensions[this.name]?null:Xo}extendMaterialParams(a,g){const w=this.parser,x=w.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=[];g.sheenColor=new pe(0,0,0),g.sheenRoughness=0,g.sheen=1;const L=x.extensions[this.name];if(L.sheenColorFactor!==void 0){const O=L.sheenColorFactor;g.sheenColor.setRGB(O[0],O[1],O[2],ii)}return L.sheenRoughnessFactor!==void 0&&(g.sheenRoughness=L.sheenRoughnessFactor),L.sheenColorTexture!==void 0&&E.push(w.assignTexture(g,"sheenColorMap",L.sheenColorTexture,T0)),L.sheenRoughnessTexture!==void 0&&E.push(w.assignTexture(g,"sheenRoughnessMap",L.sheenRoughnessTexture)),Promise.all(E)}}class yd2{constructor(a){this.parser=a,this.name=pn.KHR_MATERIALS_TRANSMISSION}getMaterialType(a){const w=this.parser.json.materials[a];return!w.extensions||!w.extensions[this.name]?null:Xo}extendMaterialParams(a,g){const w=this.parser,x=w.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=[],L=x.extensions[this.name];return L.transmissionFactor!==void 0&&(g.transmission=L.transmissionFactor),L.transmissionTexture!==void 0&&E.push(w.assignTexture(g,"transmissionMap",L.transmissionTexture)),Promise.all(E)}}class kd2{constructor(a){this.parser=a,this.name=pn.KHR_MATERIALS_VOLUME}getMaterialType(a){const w=this.parser.json.materials[a];return!w.extensions||!w.extensions[this.name]?null:Xo}extendMaterialParams(a,g){const w=this.parser,x=w.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=[],L=x.extensions[this.name];g.thickness=L.thicknessFactor!==void 0?L.thicknessFactor:0,L.thicknessTexture!==void 0&&E.push(w.assignTexture(g,"thicknessMap",L.thicknessTexture)),g.attenuationDistance=L.attenuationDistance||1/0;const O=L.attenuationColor||[1,1,1];return g.attenuationColor=new pe().setRGB(O[0],O[1],O[2],ii),Promise.all(E)}}class vd2{constructor(a){this.parser=a,this.name=pn.KHR_MATERIALS_IOR}getMaterialType(a){const w=this.parser.json.materials[a];return!w.extensions||!w.extensions[this.name]?null:Xo}extendMaterialParams(a,g){const x=this.parser.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=x.extensions[this.name];return g.ior=E.ior!==void 0?E.ior:1.5,Promise.resolve()}}class wd2{constructor(a){this.parser=a,this.name=pn.KHR_MATERIALS_SPECULAR}getMaterialType(a){const w=this.parser.json.materials[a];return!w.extensions||!w.extensions[this.name]?null:Xo}extendMaterialParams(a,g){const w=this.parser,x=w.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=[],L=x.extensions[this.name];g.specularIntensity=L.specularFactor!==void 0?L.specularFactor:1,L.specularTexture!==void 0&&E.push(w.assignTexture(g,"specularIntensityMap",L.specularTexture));const O=L.specularColorFactor||[1,1,1];return g.specularColor=new pe().setRGB(O[0],O[1],O[2],ii),L.specularColorTexture!==void 0&&E.push(w.assignTexture(g,"specularColorMap",L.specularColorTexture,T0)),Promise.all(E)}}class Bd2{constructor(a){this.parser=a,this.name=pn.EXT_MATERIALS_BUMP}getMaterialType(a){const w=this.parser.json.materials[a];return!w.extensions||!w.extensions[this.name]?null:Xo}extendMaterialParams(a,g){const w=this.parser,x=w.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=[],L=x.extensions[this.name];return g.bumpScale=L.bumpFactor!==void 0?L.bumpFactor:1,L.bumpTexture!==void 0&&E.push(w.assignTexture(g,"bumpMap",L.bumpTexture)),Promise.all(E)}}class Sd2{constructor(a){this.parser=a,this.name=pn.KHR_MATERIALS_ANISOTROPY}getMaterialType(a){const w=this.parser.json.materials[a];return!w.extensions||!w.extensions[this.name]?null:Xo}extendMaterialParams(a,g){const w=this.parser,x=w.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=[],L=x.extensions[this.name];return L.anisotropyStrength!==void 0&&(g.anisotropy=L.anisotropyStrength),L.anisotropyRotation!==void 0&&(g.anisotropyRotation=L.anisotropyRotation),L.anisotropyTexture!==void 0&&E.push(w.assignTexture(g,"anisotropyMap",L.anisotropyTexture)),Promise.all(E)}}class xd2{constructor(a){this.parser=a,this.name=pn.KHR_TEXTURE_BASISU}loadTexture(a){const g=this.parser,w=g.json,x=w.textures[a];if(!x.extensions||!x.extensions[this.name])return null;const E=x.extensions[this.name],L=g.options.ktx2Loader;if(!L){if(w.extensionsRequired&&w.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return g.loadTextureImage(a,E.source,L)}}class Cd2{constructor(a){this.parser=a,this.name=pn.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(a){const g=this.name,w=this.parser,x=w.json,E=x.textures[a];if(!E.extensions||!E.extensions[g])return null;const L=E.extensions[g],O=x.images[L.source];let G=w.textureLoader;if(O.uri){const h=w.options.manager.getHandler(O.uri);h!==null&&(G=h)}return this.detectSupport().then(function(h){if(h)return w.loadTextureImage(a,L.source,G);if(x.extensionsRequired&&x.extensionsRequired.indexOf(g)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return w.loadTexture(a)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(a){const g=new Image;g.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",g.onload=g.onerror=function(){a(g.height===1)}})),this.isSupported}}class Md2{constructor(a){this.parser=a,this.name=pn.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(a){const g=this.name,w=this.parser,x=w.json,E=x.textures[a];if(!E.extensions||!E.extensions[g])return null;const L=E.extensions[g],O=x.images[L.source];let G=w.textureLoader;if(O.uri){const h=w.options.manager.getHandler(O.uri);h!==null&&(G=h)}return this.detectSupport().then(function(h){if(h)return w.loadTextureImage(a,L.source,G);if(x.extensionsRequired&&x.extensionsRequired.indexOf(g)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return w.loadTexture(a)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(a){const g=new Image;g.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",g.onload=g.onerror=function(){a(g.height===1)}})),this.isSupported}}class Td2{constructor(a){this.name=pn.EXT_MESHOPT_COMPRESSION,this.parser=a}loadBufferView(a){const g=this.parser.json,w=g.bufferViews[a];if(w.extensions&&w.extensions[this.name]){const x=w.extensions[this.name],E=this.parser.getDependency("buffer",x.buffer),L=this.parser.options.meshoptDecoder;if(!L||!L.supported){if(g.extensionsRequired&&g.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return E.then(function(O){const G=x.byteOffset||0,h=x.byteLength||0,X=x.count,Z=x.byteStride,K=new Uint8Array(O,G,h);return L.decodeGltfBufferAsync?L.decodeGltfBufferAsync(X,Z,K,x.mode,x.filter).then(function(e2){return e2.buffer}):L.ready.then(function(){const e2=new ArrayBuffer(X*Z);return L.decodeGltfBuffer(new Uint8Array(e2),X,Z,K,x.mode,x.filter),e2})})}else return null}}class Ed2{constructor(a){this.name=pn.EXT_MESH_GPU_INSTANCING,this.parser=a}createNodeMesh(a){const g=this.parser.json,w=g.nodes[a];if(!w.extensions||!w.extensions[this.name]||w.mesh===void 0)return null;const x=g.meshes[w.mesh];for(const h of x.primitives)if(h.mode!==Hr.TRIANGLES&&h.mode!==Hr.TRIANGLE_STRIP&&h.mode!==Hr.TRIANGLE_FAN&&h.mode!==void 0)return null;const L=w.extensions[this.name].attributes,O=[],G={};for(const h in L)O.push(this.parser.getDependency("accessor",L[h]).then(X=>(G[h]=X,G[h])));return O.length<1?null:(O.push(this.parser.createNodeMesh(a)),Promise.all(O).then(h=>{const X=h.pop(),Z=X.isGroup?X.children:[X],K=h[0].count,e2=[];for(const l2 of Z){const p2=new _e,r2=new S2,o2=new Sn,k2=new S2(1,1,1),h2=new dh2(l2.geometry,l2.material,K);for(let v2=0;v2<K;v2++)G.TRANSLATION&&r2.fromBufferAttribute(G.TRANSLATION,v2),G.ROTATION&&o2.fromBufferAttribute(G.ROTATION,v2),G.SCALE&&k2.fromBufferAttribute(G.SCALE,v2),h2.setMatrixAt(v2,p2.compose(r2,o2,k2));for(const v2 in G)if(v2==="_COLOR_0"){const j2=G[v2];h2.instanceColor=new Ea(j2.array,j2.itemSize,j2.normalized)}else v2!=="TRANSLATION"&&v2!=="ROTATION"&&v2!=="SCALE"&&l2.geometry.setAttribute(v2,G[v2]);Nn.prototype.copy.call(h2,l2),this.parser.assignFinalMaterial(h2),e2.push(h2)}return X.isGroup?(X.clear(),X.add(...e2),X):e2[0]}))}}const EQ="glTF",If=12,dV={JSON:1313821514,BIN:5130562};class Rd2{constructor(a){this.name=pn.KHR_BINARY_GLTF,this.content=null,this.body=null;const g=new DataView(a,0,If),w=new TextDecoder;if(this.header={magic:w.decode(new Uint8Array(a.slice(0,4))),version:g.getUint32(4,!0),length:g.getUint32(8,!0)},this.header.magic!==EQ)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const x=this.header.length-If,E=new DataView(a,If);let L=0;for(;L<x;){const O=E.getUint32(L,!0);L+=4;const G=E.getUint32(L,!0);if(L+=4,G===dV.JSON){const h=new Uint8Array(a,If+L,O);this.content=w.decode(h)}else if(G===dV.BIN){const h=If+L;this.body=a.slice(h,h+O)}L+=O}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class bd2{constructor(a,g){if(!g)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pn.KHR_DRACO_MESH_COMPRESSION,this.json=a,this.dracoLoader=g,this.dracoLoader.preload()}decodePrimitive(a,g){const w=this.json,x=this.dracoLoader,E=a.extensions[this.name].bufferView,L=a.extensions[this.name].attributes,O={},G={},h={};for(const X in L){const Z=Pa[X]||X.toLowerCase();O[Z]=L[X]}for(const X in a.attributes){const Z=Pa[X]||X.toLowerCase();if(L[X]!==void 0){const K=w.accessors[a.attributes[X]],e2=fu[K.componentType];h[Z]=e2.name,G[Z]=K.normalized===!0}}return g.getDependency("bufferView",E).then(function(X){return new Promise(function(Z,K){x.decodeDracoFile(X,function(e2){for(const l2 in e2.attributes){const p2=e2.attributes[l2],r2=G[l2];r2!==void 0&&(p2.normalized=r2)}Z(e2)},O,h,ii,K)})})}}class Dd2{constructor(){this.name=pn.KHR_TEXTURE_TRANSFORM}extendTexture(a,g){return(g.texCoord===void 0||g.texCoord===a.channel)&&g.offset===void 0&&g.rotation===void 0&&g.scale===void 0||(a=a.clone(),g.texCoord!==void 0&&(a.channel=g.texCoord),g.offset!==void 0&&a.offset.fromArray(g.offset),g.rotation!==void 0&&(a.rotation=g.rotation),g.scale!==void 0&&a.repeat.fromArray(g.scale),a.needsUpdate=!0),a}}class Id2{constructor(){this.name=pn.KHR_MESH_QUANTIZATION}}class RQ extends $f{constructor(a,g,w,x){super(a,g,w,x)}copySampleValue_(a){const g=this.resultBuffer,w=this.sampleValues,x=this.valueSize,E=a*x*3+x;for(let L=0;L!==x;L++)g[L]=w[E+L];return g}interpolate_(a,g,w,x){const E=this.resultBuffer,L=this.sampleValues,O=this.valueSize,G=O*2,h=O*3,X=x-g,Z=(w-g)/X,K=Z*Z,e2=K*Z,l2=a*h,p2=l2-h,r2=-2*e2+3*K,o2=e2-K,k2=1-r2,h2=o2-K+Z;for(let v2=0;v2!==O;v2++){const j2=L[p2+v2+O],R2=L[p2+v2+G]*X,D2=L[l2+v2+O],Q2=L[l2+v2]*X;E[v2]=k2*j2+h2*R2+r2*D2+o2*Q2}return E}}const Pd2=new Sn;class Ld2 extends RQ{interpolate_(a,g,w,x){const E=super.interpolate_(a,g,w,x);return Pd2.fromArray(E).normalize().toArray(E),E}}const Hr={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fu={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},AV={9728:ji,9729:yr,9984:MV,9985:Sc,9986:Pf,9987:Cs},gV={33071:Go,33648:bc,10497:y1},_a={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pa={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},_1={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Fd2={CUBICSPLINE:void 0,LINEAR:hu,STEP:Hf},aa={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Od2(D){return D.DefaultMaterial===void 0&&(D.DefaultMaterial=new Xf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:zo})),D.DefaultMaterial}function V1(D,a,g){for(const w in g.extensions)D[w]===void 0&&(a.userData.gltfExtensions=a.userData.gltfExtensions||{},a.userData.gltfExtensions[w]=g.extensions[w])}function h1(D,a){a.extras!==void 0&&(typeof a.extras=="object"?Object.assign(D.userData,a.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+a.extras))}function jd2(D,a,g){let w=!1,x=!1,E=!1;for(let h=0,X=a.length;h<X;h++){const Z=a[h];if(Z.POSITION!==void 0&&(w=!0),Z.NORMAL!==void 0&&(x=!0),Z.COLOR_0!==void 0&&(E=!0),w&&x&&E)break}if(!w&&!x&&!E)return Promise.resolve(D);const L=[],O=[],G=[];for(let h=0,X=a.length;h<X;h++){const Z=a[h];if(w){const K=Z.POSITION!==void 0?g.getDependency("accessor",Z.POSITION):D.attributes.position;L.push(K)}if(x){const K=Z.NORMAL!==void 0?g.getDependency("accessor",Z.NORMAL):D.attributes.normal;O.push(K)}if(E){const K=Z.COLOR_0!==void 0?g.getDependency("accessor",Z.COLOR_0):D.attributes.color;G.push(K)}}return Promise.all([Promise.all(L),Promise.all(O),Promise.all(G)]).then(function(h){const X=h[0],Z=h[1],K=h[2];return w&&(D.morphAttributes.position=X),x&&(D.morphAttributes.normal=Z),E&&(D.morphAttributes.color=K),D.morphTargetsRelative=!0,D})}function Nd2(D,a){if(D.updateMorphTargets(),a.weights!==void 0)for(let g=0,w=a.weights.length;g<w;g++)D.morphTargetInfluences[g]=a.weights[g];if(a.extras&&Array.isArray(a.extras.targetNames)){const g=a.extras.targetNames;if(D.morphTargetInfluences.length===g.length){D.morphTargetDictionary={};for(let w=0,x=g.length;w<x;w++)D.morphTargetDictionary[g[w]]=w}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ud2(D){let a;const g=D.extensions&&D.extensions[pn.KHR_DRACO_MESH_COMPRESSION];if(g?a="draco:"+g.bufferView+":"+g.indices+":"+ha(g.attributes):a=D.indices+":"+ha(D.attributes)+":"+D.mode,D.targets!==void 0)for(let w=0,x=D.targets.length;w<x;w++)a+=":"+ha(D.targets[w]);return a}function ha(D){let a="";const g=Object.keys(D).sort();for(let w=0,x=g.length;w<x;w++)a+=g[w]+":"+D[g[w]]+";";return a}function La(D){switch(D){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Gd2(D){return D.search(/\.jpe?g($|\?)/i)>0||D.search(/^data\:image\/jpeg/)===0?"image/jpeg":D.search(/\.webp($|\?)/i)>0||D.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Wd2=new _e;class Hd2{constructor(a={},g={}){this.json=a,this.extensions={},this.plugins={},this.options=g,this.cache=new cd2,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let w=!1,x=!1,E=-1;typeof navigator<"u"&&(w=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,x=navigator.userAgent.indexOf("Firefox")>-1,E=x?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||w||x&&E<98?this.textureLoader=new nh(this.options.manager):this.textureLoader=new pm2(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Zf(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(a){this.extensions=a}setPlugins(a){this.plugins=a}parse(a,g){const w=this,x=this.json,E=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(L){return L._markDefs&&L._markDefs()}),Promise.all(this._invokeAll(function(L){return L.beforeRoot&&L.beforeRoot()})).then(function(){return Promise.all([w.getDependencies("scene"),w.getDependencies("animation"),w.getDependencies("camera")])}).then(function(L){const O={scene:L[0][x.scene||0],scenes:L[0],animations:L[1],cameras:L[2],asset:x.asset,parser:w,userData:{}};return V1(E,O,x),h1(O,x),Promise.all(w._invokeAll(function(G){return G.afterRoot&&G.afterRoot(O)})).then(function(){for(const G of O.scenes)G.updateMatrixWorld();a(O)})}).catch(g)}_markDefs(){const a=this.json.nodes||[],g=this.json.skins||[],w=this.json.meshes||[];for(let x=0,E=g.length;x<E;x++){const L=g[x].joints;for(let O=0,G=L.length;O<G;O++)a[L[O]].isBone=!0}for(let x=0,E=a.length;x<E;x++){const L=a[x];L.mesh!==void 0&&(this._addNodeRef(this.meshCache,L.mesh),L.skin!==void 0&&(w[L.mesh].isSkinnedMesh=!0)),L.camera!==void 0&&this._addNodeRef(this.cameraCache,L.camera)}}_addNodeRef(a,g){g!==void 0&&(a.refs[g]===void 0&&(a.refs[g]=a.uses[g]=0),a.refs[g]++)}_getNodeRef(a,g,w){if(a.refs[g]<=1)return w;const x=w.clone(),E=(L,O)=>{const G=this.associations.get(L);G!=null&&this.associations.set(O,G);for(const[h,X]of L.children.entries())E(X,O.children[h])};return E(w,x),x.name+="_instance_"+a.uses[g]++,x}_invokeOne(a){const g=Object.values(this.plugins);g.push(this);for(let w=0;w<g.length;w++){const x=a(g[w]);if(x)return x}return null}_invokeAll(a){const g=Object.values(this.plugins);g.unshift(this);const w=[];for(let x=0;x<g.length;x++){const E=a(g[x]);E&&w.push(E)}return w}getDependency(a,g){const w=a+":"+g;let x=this.cache.get(w);if(!x){switch(a){case"scene":x=this.loadScene(g);break;case"node":x=this._invokeOne(function(E){return E.loadNode&&E.loadNode(g)});break;case"mesh":x=this._invokeOne(function(E){return E.loadMesh&&E.loadMesh(g)});break;case"accessor":x=this.loadAccessor(g);break;case"bufferView":x=this._invokeOne(function(E){return E.loadBufferView&&E.loadBufferView(g)});break;case"buffer":x=this.loadBuffer(g);break;case"material":x=this._invokeOne(function(E){return E.loadMaterial&&E.loadMaterial(g)});break;case"texture":x=this._invokeOne(function(E){return E.loadTexture&&E.loadTexture(g)});break;case"skin":x=this.loadSkin(g);break;case"animation":x=this._invokeOne(function(E){return E.loadAnimation&&E.loadAnimation(g)});break;case"camera":x=this.loadCamera(g);break;default:if(x=this._invokeOne(function(E){return E!=this&&E.getDependency&&E.getDependency(a,g)}),!x)throw new Error("Unknown type: "+a);break}this.cache.add(w,x)}return x}getDependencies(a){let g=this.cache.get(a);if(!g){const w=this,x=this.json[a+(a==="mesh"?"es":"s")]||[];g=Promise.all(x.map(function(E,L){return w.getDependency(a,L)})),this.cache.add(a,g)}return g}loadBuffer(a){const g=this.json.buffers[a],w=this.fileLoader;if(g.type&&g.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+g.type+" buffer type is not supported.");if(g.uri===void 0&&a===0)return Promise.resolve(this.extensions[pn.KHR_BINARY_GLTF].body);const x=this.options;return new Promise(function(E,L){w.load(uu.resolveURL(g.uri,x.path),E,void 0,function(){L(new Error('THREE.GLTFLoader: Failed to load buffer "'+g.uri+'".'))})})}loadBufferView(a){const g=this.json.bufferViews[a];return this.getDependency("buffer",g.buffer).then(function(w){const x=g.byteLength||0,E=g.byteOffset||0;return w.slice(E,E+x)})}loadAccessor(a){const g=this,w=this.json,x=this.json.accessors[a];if(x.bufferView===void 0&&x.sparse===void 0){const L=_a[x.type],O=fu[x.componentType],G=x.normalized===!0,h=new O(x.count*L);return Promise.resolve(new _i(h,L,G))}const E=[];return x.bufferView!==void 0?E.push(this.getDependency("bufferView",x.bufferView)):E.push(null),x.sparse!==void 0&&(E.push(this.getDependency("bufferView",x.sparse.indices.bufferView)),E.push(this.getDependency("bufferView",x.sparse.values.bufferView))),Promise.all(E).then(function(L){const O=L[0],G=_a[x.type],h=fu[x.componentType],X=h.BYTES_PER_ELEMENT,Z=X*G,K=x.byteOffset||0,e2=x.bufferView!==void 0?w.bufferViews[x.bufferView].byteStride:void 0,l2=x.normalized===!0;let p2,r2;if(e2&&e2!==Z){const o2=Math.floor(K/e2),k2="InterleavedBuffer:"+x.bufferView+":"+x.componentType+":"+o2+":"+x.count;let h2=g.cache.get(k2);h2||(p2=new h(O,o2*e2,x.count*e2/X),h2=new _h2(p2,e2/X),g.cache.add(k2,h2)),r2=new qa(h2,G,K%e2/X,l2)}else O===null?p2=new h(x.count*G):p2=new h(O,K,x.count*G),r2=new _i(p2,G,l2);if(x.sparse!==void 0){const o2=_a.SCALAR,k2=fu[x.sparse.indices.componentType],h2=x.sparse.indices.byteOffset||0,v2=x.sparse.values.byteOffset||0,j2=new k2(L[1],h2,x.sparse.count*o2),R2=new h(L[2],v2,x.sparse.count*G);O!==null&&(r2=new _i(r2.array.slice(),r2.itemSize,r2.normalized));for(let D2=0,Q2=j2.length;D2<Q2;D2++){const x2=j2[D2];if(r2.setX(x2,R2[D2*G]),G>=2&&r2.setY(x2,R2[D2*G+1]),G>=3&&r2.setZ(x2,R2[D2*G+2]),G>=4&&r2.setW(x2,R2[D2*G+3]),G>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return r2})}loadTexture(a){const g=this.json,w=this.options,E=g.textures[a].source,L=g.images[E];let O=this.textureLoader;if(L.uri){const G=w.manager.getHandler(L.uri);G!==null&&(O=G)}return this.loadTextureImage(a,E,O)}loadTextureImage(a,g,w){const x=this,E=this.json,L=E.textures[a],O=E.images[g],G=(O.uri||O.bufferView)+":"+L.sampler;if(this.textureCache[G])return this.textureCache[G];const h=this.loadImageSource(g,w).then(function(X){X.flipY=!1,X.name=L.name||O.name||"",X.name===""&&typeof O.uri=="string"&&O.uri.startsWith("data:image/")===!1&&(X.name=O.uri);const K=(E.samplers||{})[L.sampler]||{};return X.magFilter=AV[K.magFilter]||yr,X.minFilter=AV[K.minFilter]||Cs,X.wrapS=gV[K.wrapS]||y1,X.wrapT=gV[K.wrapT]||y1,x.associations.set(X,{textures:a}),X}).catch(function(){return null});return this.textureCache[G]=h,h}loadImageSource(a,g){const w=this,x=this.json,E=this.options;if(this.sourceCache[a]!==void 0)return this.sourceCache[a].then(Z=>Z.clone());const L=x.images[a],O=self.URL||self.webkitURL;let G=L.uri||"",h=!1;if(L.bufferView!==void 0)G=w.getDependency("bufferView",L.bufferView).then(function(Z){h=!0;const K=new Blob([Z],{type:L.mimeType});return G=O.createObjectURL(K),G});else if(L.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+a+" is missing URI and bufferView");const X=Promise.resolve(G).then(function(Z){return new Promise(function(K,e2){let l2=K;g.isImageBitmapLoader===!0&&(l2=function(p2){const r2=new E0(p2);r2.needsUpdate=!0,K(r2)}),g.load(uu.resolveURL(Z,E.path),l2,void 0,e2)})}).then(function(Z){return h===!0&&O.revokeObjectURL(G),Z.userData.mimeType=L.mimeType||Gd2(L.uri),Z}).catch(function(Z){throw console.error("THREE.GLTFLoader: Couldn't load texture",G),Z});return this.sourceCache[a]=X,X}assignTexture(a,g,w,x){const E=this;return this.getDependency("texture",w.index).then(function(L){if(!L)return null;if(w.texCoord!==void 0&&w.texCoord>0&&(L=L.clone(),L.channel=w.texCoord),E.extensions[pn.KHR_TEXTURE_TRANSFORM]){const O=w.extensions!==void 0?w.extensions[pn.KHR_TEXTURE_TRANSFORM]:void 0;if(O){const G=E.associations.get(L);L=E.extensions[pn.KHR_TEXTURE_TRANSFORM].extendTexture(L,O),E.associations.set(L,G)}}return x!==void 0&&(L.colorSpace=x),a[g]=L,L})}assignFinalMaterial(a){const g=a.geometry;let w=a.material;const x=g.attributes.tangent===void 0,E=g.attributes.color!==void 0,L=g.attributes.normal===void 0;if(a.isPoints){const O="PointsMaterial:"+w.uuid;let G=this.cache.get(O);G||(G=new rQ,kr.prototype.copy.call(G,w),G.color.copy(w.color),G.map=w.map,G.sizeAttenuation=!1,this.cache.add(O,G)),w=G}else if(a.isLine){const O="LineBasicMaterial:"+w.uuid;let G=this.cache.get(O);G||(G=new Kf,kr.prototype.copy.call(G,w),G.color.copy(w.color),G.map=w.map,this.cache.add(O,G)),w=G}if(x||E||L){let O="ClonedMaterial:"+w.uuid+":";x&&(O+="derivative-tangents:"),E&&(O+="vertex-colors:"),L&&(O+="flat-shading:");let G=this.cache.get(O);G||(G=w.clone(),E&&(G.vertexColors=!0),L&&(G.flatShading=!0),x&&(G.normalScale&&(G.normalScale.y*=-1),G.clearcoatNormalScale&&(G.clearcoatNormalScale.y*=-1)),this.cache.add(O,G),this.associations.set(G,this.associations.get(w))),w=G}a.material=w}getMaterialType(){return Xf}loadMaterial(a){const g=this,w=this.json,x=this.extensions,E=w.materials[a];let L;const O={},G=E.extensions||{},h=[];if(G[pn.KHR_MATERIALS_UNLIT]){const Z=x[pn.KHR_MATERIALS_UNLIT];L=Z.getMaterialType(),h.push(Z.extendParams(O,E,g))}else{const Z=E.pbrMetallicRoughness||{};if(O.color=new pe(1,1,1),O.opacity=1,Array.isArray(Z.baseColorFactor)){const K=Z.baseColorFactor;O.color.setRGB(K[0],K[1],K[2],ii),O.opacity=K[3]}Z.baseColorTexture!==void 0&&h.push(g.assignTexture(O,"map",Z.baseColorTexture,T0)),O.metalness=Z.metallicFactor!==void 0?Z.metallicFactor:1,O.roughness=Z.roughnessFactor!==void 0?Z.roughnessFactor:1,Z.metallicRoughnessTexture!==void 0&&(h.push(g.assignTexture(O,"metalnessMap",Z.metallicRoughnessTexture)),h.push(g.assignTexture(O,"roughnessMap",Z.metallicRoughnessTexture))),L=this._invokeOne(function(K){return K.getMaterialType&&K.getMaterialType(a)}),h.push(Promise.all(this._invokeAll(function(K){return K.extendMaterialParams&&K.extendMaterialParams(a,O)})))}E.doubleSided===!0&&(O.side=No);const X=E.alphaMode||aa.OPAQUE;if(X===aa.BLEND?(O.transparent=!0,O.depthWrite=!1):(O.transparent=!1,X===aa.MASK&&(O.alphaTest=E.alphaCutoff!==void 0?E.alphaCutoff:.5)),E.normalTexture!==void 0&&L!==Ho&&(h.push(g.assignTexture(O,"normalMap",E.normalTexture)),O.normalScale=new Lt(1,1),E.normalTexture.scale!==void 0)){const Z=E.normalTexture.scale;O.normalScale.set(Z,Z)}if(E.occlusionTexture!==void 0&&L!==Ho&&(h.push(g.assignTexture(O,"aoMap",E.occlusionTexture)),E.occlusionTexture.strength!==void 0&&(O.aoMapIntensity=E.occlusionTexture.strength)),E.emissiveFactor!==void 0&&L!==Ho){const Z=E.emissiveFactor;O.emissive=new pe().setRGB(Z[0],Z[1],Z[2],ii)}return E.emissiveTexture!==void 0&&L!==Ho&&h.push(g.assignTexture(O,"emissiveMap",E.emissiveTexture,T0)),Promise.all(h).then(function(){const Z=new L(O);return E.name&&(Z.name=E.name),h1(Z,E),g.associations.set(Z,{materials:a}),E.extensions&&V1(x,Z,E),Z})}createUniqueName(a){const g=An.sanitizeNodeName(a||"");return g in this.nodeNamesUsed?g+"_"+ ++this.nodeNamesUsed[g]:(this.nodeNamesUsed[g]=0,g)}loadGeometries(a){const g=this,w=this.extensions,x=this.primitiveCache;function E(O){return w[pn.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(O,g).then(function(G){return yV(G,O,g)})}const L=[];for(let O=0,G=a.length;O<G;O++){const h=a[O],X=Ud2(h),Z=x[X];if(Z)L.push(Z.promise);else{let K;h.extensions&&h.extensions[pn.KHR_DRACO_MESH_COMPRESSION]?K=E(h):K=yV(new J0,h,g),x[X]={primitive:h,promise:K},L.push(K)}}return Promise.all(L)}loadMesh(a){const g=this,w=this.json,x=this.extensions,E=w.meshes[a],L=E.primitives,O=[];for(let G=0,h=L.length;G<h;G++){const X=L[G].material===void 0?Od2(this.cache):this.getDependency("material",L[G].material);O.push(X)}return O.push(g.loadGeometries(L)),Promise.all(O).then(function(G){const h=G.slice(0,G.length-1),X=G[G.length-1],Z=[];for(let e2=0,l2=X.length;e2<l2;e2++){const p2=X[e2],r2=L[e2];let o2;const k2=h[e2];if(r2.mode===Hr.TRIANGLES||r2.mode===Hr.TRIANGLE_STRIP||r2.mode===Hr.TRIANGLE_FAN||r2.mode===void 0)o2=E.isSkinnedMesh===!0?new eQ(p2,k2):new q0(p2,k2),o2.isSkinnedMesh===!0&&o2.normalizeSkinWeights(),r2.mode===Hr.TRIANGLE_STRIP?o2.geometry=mV(o2.geometry,OV):r2.mode===Hr.TRIANGLE_FAN&&(o2.geometry=mV(o2.geometry,Ca));else if(r2.mode===Hr.LINES)o2=new iQ(p2,k2);else if(r2.mode===Hr.LINE_STRIP)o2=new Au(p2,k2);else if(r2.mode===Hr.LINE_LOOP)o2=new Ah2(p2,k2);else if(r2.mode===Hr.POINTS)o2=new gh2(p2,k2);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+r2.mode);Object.keys(o2.geometry.morphAttributes).length>0&&Nd2(o2,E),o2.name=g.createUniqueName(E.name||"mesh_"+a),h1(o2,E),r2.extensions&&V1(x,o2,r2),g.assignFinalMaterial(o2),Z.push(o2)}for(let e2=0,l2=Z.length;e2<l2;e2++)g.associations.set(Z[e2],{meshes:a,primitives:e2});if(Z.length===1)return E.extensions&&V1(x,Z[0],E),Z[0];const K=new Ts;E.extensions&&V1(x,K,E),g.associations.set(K,{meshes:a});for(let e2=0,l2=Z.length;e2<l2;e2++)K.add(Z[e2]);return K})}loadCamera(a){let g;const w=this.json.cameras[a],x=w[w.type];if(!x){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return w.type==="perspective"?g=new Si(Z0.radToDeg(x.yfov),x.aspectRatio||1,x.znear||1,x.zfar||2e6):w.type==="orthographic"&&(g=new Jc(-x.xmag,x.xmag,x.ymag,-x.ymag,x.znear,x.zfar)),w.name&&(g.name=this.createUniqueName(w.name)),h1(g,w),Promise.resolve(g)}loadSkin(a){const g=this.json.skins[a],w=[];for(let x=0,E=g.joints.length;x<E;x++)w.push(this._loadNodeShallow(g.joints[x]));return g.inverseBindMatrices!==void 0?w.push(this.getDependency("accessor",g.inverseBindMatrices)):w.push(null),Promise.all(w).then(function(x){const E=x.pop(),L=x,O=[],G=[];for(let h=0,X=L.length;h<X;h++){const Z=L[h];if(Z){O.push(Z);const K=new _e;E!==null&&K.fromArray(E.array,h*16),G.push(K)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',g.joints[h])}return new $c(O,G)})}loadAnimation(a){const g=this.json,w=this,x=g.animations[a],E=x.name?x.name:"animation_"+a,L=[],O=[],G=[],h=[],X=[];for(let Z=0,K=x.channels.length;Z<K;Z++){const e2=x.channels[Z],l2=x.samplers[e2.sampler],p2=e2.target,r2=p2.node,o2=x.parameters!==void 0?x.parameters[l2.input]:l2.input,k2=x.parameters!==void 0?x.parameters[l2.output]:l2.output;p2.node!==void 0&&(L.push(this.getDependency("node",r2)),O.push(this.getDependency("accessor",o2)),G.push(this.getDependency("accessor",k2)),h.push(l2),X.push(p2))}return Promise.all([Promise.all(L),Promise.all(O),Promise.all(G),Promise.all(h),Promise.all(X)]).then(function(Z){const K=Z[0],e2=Z[1],l2=Z[2],p2=Z[3],r2=Z[4],o2=[];for(let k2=0,h2=K.length;k2<h2;k2++){const v2=K[k2],j2=e2[k2],R2=l2[k2],D2=p2[k2],Q2=r2[k2];if(v2===void 0)continue;v2.updateMatrix&&v2.updateMatrix();const x2=w._createAnimationTracks(v2,j2,R2,D2,Q2);if(x2)for(let g2=0;g2<x2.length;g2++)o2.push(x2[g2])}return new Gc(E,void 0,o2)})}createNodeMesh(a){const g=this.json,w=this,x=g.nodes[a];return x.mesh===void 0?null:w.getDependency("mesh",x.mesh).then(function(E){const L=w._getNodeRef(w.meshCache,x.mesh,E);return x.weights!==void 0&&L.traverse(function(O){if(O.isMesh)for(let G=0,h=x.weights.length;G<h;G++)O.morphTargetInfluences[G]=x.weights[G]}),L})}loadNode(a){const g=this.json,w=this,x=g.nodes[a],E=w._loadNodeShallow(a),L=[],O=x.children||[];for(let h=0,X=O.length;h<X;h++)L.push(w.getDependency("node",O[h]));const G=x.skin===void 0?Promise.resolve(null):w.getDependency("skin",x.skin);return Promise.all([E,Promise.all(L),G]).then(function(h){const X=h[0],Z=h[1],K=h[2];K!==null&&X.traverse(function(e2){e2.isSkinnedMesh&&e2.bind(K,Wd2)});for(let e2=0,l2=Z.length;e2<l2;e2++)X.add(Z[e2]);return X})}_loadNodeShallow(a){const g=this.json,w=this.extensions,x=this;if(this.nodeCache[a]!==void 0)return this.nodeCache[a];const E=g.nodes[a],L=E.name?x.createUniqueName(E.name):"",O=[],G=x._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(a)});return G&&O.push(G),E.camera!==void 0&&O.push(x.getDependency("camera",E.camera).then(function(h){return x._getNodeRef(x.cameraCache,E.camera,h)})),x._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(a)}).forEach(function(h){O.push(h)}),this.nodeCache[a]=Promise.all(O).then(function(h){let X;if(E.isBone===!0?X=new Oc:h.length>1?X=new Ts:h.length===1?X=h[0]:X=new Nn,X!==h[0])for(let Z=0,K=h.length;Z<K;Z++)X.add(h[Z]);if(E.name&&(X.userData.name=E.name,X.name=L),h1(X,E),E.extensions&&V1(w,X,E),E.matrix!==void 0){const Z=new _e;Z.fromArray(E.matrix),X.applyMatrix4(Z)}else E.translation!==void 0&&X.position.fromArray(E.translation),E.rotation!==void 0&&X.quaternion.fromArray(E.rotation),E.scale!==void 0&&X.scale.fromArray(E.scale);return x.associations.has(X)||x.associations.set(X,{}),x.associations.get(X).nodes=a,X}),this.nodeCache[a]}loadScene(a){const g=this.extensions,w=this.json.scenes[a],x=this,E=new Ts;w.name&&(E.name=x.createUniqueName(w.name)),h1(E,w),w.extensions&&V1(g,E,w);const L=w.nodes||[],O=[];for(let G=0,h=L.length;G<h;G++)O.push(x.getDependency("node",L[G]));return Promise.all(O).then(function(G){for(let X=0,Z=G.length;X<Z;X++)E.add(G[X]);const h=X=>{const Z=new Map;for(const[K,e2]of x.associations)(K instanceof kr||K instanceof E0)&&Z.set(K,e2);return X.traverse(K=>{const e2=x.associations.get(K);e2!=null&&Z.set(K,e2)}),Z};return x.associations=h(E),E})}_createAnimationTracks(a,g,w,x,E){const L=[],O=a.name?a.name:a.uuid,G=[];_1[E.path]===_1.weights?a.traverse(function(K){K.morphTargetInfluences&&G.push(K.name?K.name:K.uuid)}):G.push(O);let h;switch(_1[E.path]){case _1.weights:h=$1;break;case _1.rotation:h=Es;break;case _1.position:case _1.scale:h=tl;break;default:switch(w.itemSize){case 1:h=$1;break;case 2:case 3:default:h=tl;break}break}const X=x.interpolation!==void 0?Fd2[x.interpolation]:hu,Z=this._getArrayFromAccessor(w);for(let K=0,e2=G.length;K<e2;K++){const l2=new h(G[K]+"."+_1[E.path],g.array,Z,X);x.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(l2),L.push(l2)}return L}_getArrayFromAccessor(a){let g=a.array;if(a.normalized){const w=La(g.constructor),x=new Float32Array(g.length);for(let E=0,L=g.length;E<L;E++)x[E]=g[E]*w;g=x}return g}_createCubicSplineTrackInterpolant(a){a.createInterpolant=function(w){const x=this instanceof Es?Ld2:RQ;return new x(this.times,this.values,this.getValueSize()/3,w)},a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function zd2(D,a,g){const w=a.attributes,x=new Qo;if(w.POSITION!==void 0){const O=g.json.accessors[w.POSITION],G=O.min,h=O.max;if(G!==void 0&&h!==void 0){if(x.set(new S2(G[0],G[1],G[2]),new S2(h[0],h[1],h[2])),O.normalized){const X=La(fu[O.componentType]);x.min.multiplyScalar(X),x.max.multiplyScalar(X)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const E=a.targets;if(E!==void 0){const O=new S2,G=new S2;for(let h=0,X=E.length;h<X;h++){const Z=E[h];if(Z.POSITION!==void 0){const K=g.json.accessors[Z.POSITION],e2=K.min,l2=K.max;if(e2!==void 0&&l2!==void 0){if(G.setX(Math.max(Math.abs(e2[0]),Math.abs(l2[0]))),G.setY(Math.max(Math.abs(e2[1]),Math.abs(l2[1]))),G.setZ(Math.max(Math.abs(e2[2]),Math.abs(l2[2]))),K.normalized){const p2=La(fu[K.componentType]);G.multiplyScalar(p2)}O.max(G)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}x.expandByVector(O)}D.boundingBox=x;const L=new Yo;x.getCenter(L.center),L.radius=x.min.distanceTo(x.max)/2,D.boundingSphere=L}function yV(D,a,g){const w=a.attributes,x=[];function E(L,O){return g.getDependency("accessor",L).then(function(G){D.setAttribute(O,G)})}for(const L in w){const O=Pa[L]||L.toLowerCase();O in D.attributes||x.push(E(w[L],O))}if(a.indices!==void 0&&!D.index){const L=g.getDependency("accessor",a.indices).then(function(O){D.setIndex(O)});x.push(L)}return Pn.workingColorSpace!==ii&&"COLOR_0"in w&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Pn.workingColorSpace}" not supported.`),h1(D,a),zd2(D,a,g),Promise.all(x).then(function(){return a.targets!==void 0?jd2(D,a.targets,g):D})}const ma=new WeakMap;class Vd2 extends Vo{constructor(a){super(a),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(a){return this.decoderPath=a,this}setDecoderConfig(a){return this.decoderConfig=a,this}setWorkerLimit(a){return this.workerLimit=a,this}load(a,g,w,x){const E=new Zf(this.manager);E.setPath(this.path),E.setResponseType("arraybuffer"),E.setRequestHeader(this.requestHeader),E.setWithCredentials(this.withCredentials),E.load(a,L=>{this.parse(L,g,x)},w,x)}parse(a,g,w=()=>{}){this.decodeDracoFile(a,g,null,null,T0).catch(w)}decodeDracoFile(a,g,w,x,E=ii,L=()=>{}){const O={attributeIDs:w||this.defaultAttributeIDs,attributeTypes:x||this.defaultAttributeTypes,useUniqueIDs:!!w,vertexColorSpace:E};return this.decodeGeometry(a,O).then(g).catch(L)}decodeGeometry(a,g){const w=JSON.stringify(g);if(ma.has(a)){const G=ma.get(a);if(G.key===w)return G.promise;if(a.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let x;const E=this.workerNextTaskID++,L=a.byteLength,O=this._getWorker(E,L).then(G=>(x=G,new Promise((h,X)=>{x._callbacks[E]={resolve:h,reject:X},x.postMessage({type:"decode",id:E,taskConfig:g,buffer:a},[a])}))).then(G=>this._createGeometry(G.geometry));return O.catch(()=>!0).then(()=>{x&&E&&this._releaseTask(x,E)}),ma.set(a,{key:w,promise:O}),O}_createGeometry(a){const g=new J0;a.index&&g.setIndex(new _i(a.index.array,1));for(let w=0;w<a.attributes.length;w++){const x=a.attributes[w],E=x.name,L=x.array,O=x.itemSize,G=new _i(L,O);E==="color"&&(this._assignVertexColorSpace(G,x.vertexColorSpace),G.normalized=!(L instanceof Float32Array)),g.setAttribute(E,G)}return g}_assignVertexColorSpace(a,g){if(g!==T0)return;const w=new pe;for(let x=0,E=a.count;x<E;x++)w.fromBufferAttribute(a,x).convertSRGBToLinear(),a.setXYZ(x,w.r,w.g,w.b)}_loadLibrary(a,g){const w=new Zf(this.manager);return w.setPath(this.decoderPath),w.setResponseType(g),w.setWithCredentials(this.withCredentials),new Promise((x,E)=>{w.load(a,x,void 0,E)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const a=typeof WebAssembly!="object"||this.decoderConfig.type==="js",g=[];return a?g.push(this._loadLibrary("draco_decoder.js","text")):(g.push(this._loadLibrary("draco_wasm_wrapper.js","text")),g.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(g).then(w=>{const x=w[0];a||(this.decoderConfig.wasmBinary=w[1]);const E=Qd2.toString(),L=["/* draco decoder */",x,"","/* worker */",E.substring(E.indexOf("{")+1,E.lastIndexOf("}"))].join(`
                varying vec3 vNormal;
                varying vec3 vPosition;
                varying vec2 vUv;
                
                ${g.vertexShader}
                `.replace("#include <begin_vertex>",`#include <begin_vertex>
                vNormal = normalize(normalMatrix * normal);
                vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
                vUv = uv;`),g.fragmentShader=`
                varying vec3 vPosition;
                varying vec2 vUv;
                
                uniform vec3 lightPosition;
                uniform float shadowSpread;
                uniform float shadowIntensity;
                
                ${g.fragmentShader}
                `.replace("#include <dithering_fragment>",`#include <dithering_fragment>
                        
                // Custom shader logic
                vec3 lightDir = normalize(lightPosition - vPosition);
                float dotNL = dot(normalize(vNormal), lightDir);
                        
                // Apply a threshold to create hard shadows
                float shadowFactor = step(0.5, dotNL);
                shadowFactor *= 0.5;

                // Mix with a dark gray color instead of pure black
                vec3 shadowColor = vec3(0.0);  // Adjust this value to control the shadow darkness
                        
                // Apply the shadow to the base color
                gl_FragColor.rgb = mix(gl_FragColor.rgb, shadowColor, 0.5 - shadowFactor);`),g.uniforms.lightPosition={value:new S2(5,5,5)},g.uniforms.shadowSpread=.5,g.uniforms.shadowDarkness=.5,g.uniforms.shadowIntensity=.5},a}}class r32{constructor(a){this.orbControls=new Xd2(a.camera,a.renderer.domElement),this.orbControls.enableDamping=!0,this.orbControls.dampingFactor=.12,this.orbControls.enableZoom=!1,this.orbControls.update(),this.trackballControls=new Zd2(a.camera,a.renderer.domElement),this.trackballControls.noRotate=!0,this.trackballControls.noPan=!0,this.trackballControls.noZoom=!1,this.trackballControls.zoomSpeed=1.5,a.camera.position.y=5}eventTick(a){const g=this.orbControls.target;this.orbControls.update(),this.trackballControls.target.set(g.x,g.y,g.z),this.trackballControls.update()}}class o32{constructor(a){this.core=a}enableViewControls(){this.viewPortController=new r32(this.core)}showFPS(){this.stats=new Gf,this.stats.showPanel(0),document.body.appendChild(this.stats.dom)}begin(){this.stats&&this.stats.begin()}end(){this.stats&&this.stats.end()}eventTick(a){this.viewPortController&&this.viewPortController.eventTick(a)}}var Vr,IQ,ja,Na,PQ;class s32{constructor(){j1(this,Vr);this.projectSettings=Pp2,this.inputManager=new $d2(this.projectSettings.input),this.scene=new ch2,this.world=new t32(this),this.camera=new Si(45,window.innerWidth/window.innerHeight,.1,1e5),this.renderer=new ph2({alpha:this.projectSettings.rendering.useAlpha,antialias:this.projectSettings.rendering.useAntiAliasing}),this.renderer.xr.enabled=this.projectSettings.rendering.enableXR,this.renderRes=this.projectSettings.rendering.resolution,this.renderScale=this.projectSettings.rendering.renderScale,window.addEventListener("resize",()=>g0(this,Vr,ja).call(this),!1),this.devMode=new o32(this),this.loader=new n32,this.shaderLibrary=new i32(this),this.clock=new cm2,this.deltaTime=0,this.lastFrameTime=0,this.objects=new Set,this.fps=this.projectSettings.rendering.frameRate,this.frameInterval=1e3/this.fps,g0(this,Vr,IQ).call(this)}addObject(a){this.objects.add(a),a.mesh&&this.scene.add(a.mesh)}removeObject(a){this.objects.has(a)&&(this.objects.delete(a),a.mesh&&(this.scene.remove(a.mesh),a.mesh.geometry&&a.mesh.geometry.dispose(),a.mesh.material&&(Array.isArray(a.mesh.material)?a.mesh.material.forEach(g=>g.dispose()):a.mesh.material.dispose())))}}Vr=new WeakSet,IQ=function(){switch(document.title=this.projectSettings.project.about.projectName,this.renderer.shadowMap.enabled=!0,this.renderer.setSize(this.renderRes.width*this.renderScale,this.renderRes.height*this.renderScale),this.projectSettings.rendering.screenAspect){case"none":break;case"fill":{this.renderer.domElement.style.width="100%",this.renderer.domElement.style.height="100%";break}case"fill-width":{this.renderer.domElement.style.width="100%";break}default:{console.warn("Invalid screenAspect in project-settings. Please refer documentation for supported values.");break}}const a=document.getElementById(this.projectSettings.rendering.gameRendererElement);a.style.width="100%",a.style.height="100%",a.style.display="flex",a.style.justifyContent="center",a.style.alignItems="center",a.appendChild(this.renderer.domElement),g0(this,Vr,Na).call(this),g0(this,Vr,ja).call(this)},ja=function(){this.camera.aspect=this.projectSettings.rendering.cameraAspect,this.camera.updateProjectionMatrix()},Na=function(){this.renderer.setAnimationLoop(()=>{const a=performance.now(),g=a-this.lastFrameTime;g>this.frameInterval&&(this.devMode.begin(),this.lastFrameTime=a-g%this.frameInterval,this.deltaSeconds=this.clock.getDelta(),g0(this,Vr,PQ).call(this,this.deltaSeconds),this.devMode.eventTick(this.deltaSeconds),this.world.eventTick(this.deltaSeconds),this.renderer.render(this.scene,this.camera),this.devMode.end()),g0(this,Vr,Na).call(this)})},PQ=function(a){var g;for(const w of this.objects)if(w.enableTick&&w.eventTick&&w.eventTick(a),(g=w.animManager)!=null&&g.updateAnimation&&w.animManager.updateAnimation(a),w.components)for(const x of w.components)x.enableTick&&x.eventTick&&x.eventTick(a)};var pu,Mc;class Oo extends Nn{constructor(g,w,x,E){super();j1(this,pu);this.core=g,this.enableTick=!0,x&&(this._initPosition=x),E&&(this._initRotation=E),this.mesh=null,this.setMesh(w),this.init()}init(){}onMeshInit(){}eventTick(g){}get initPosition(){return this._initPosition}get initRotation(){return this._initRotation}setMesh(g){typeof g=="string"?this.core.loader.loadModel(g,w=>{this.mesh=BV(w),this.mesh.model=w.model,g0(this,pu,Mc).call(this)}):g instanceof q0?(this.mesh=g,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,g0(this,pu,Mc).call(this)):g&&typeof g=="object"&&g.model?(this.mesh=BV(g),this.mesh.model=g.model,g0(this,pu,Mc).call(this)):console.error(`Invalid mesh source: ${this.mesh}`)}destroy(){this.core.removeObject(this),this.mesh=null,this.core=null,this.enableTick=!1}}pu=new WeakSet,Mc=function(){this.initPosition&&this.mesh.position.copy(this.initPosition),this.initRotation&&this.mesh.rotation.set(this.initRotation.x,this.initRotation.y,this.initRotation.z),this.core.addObject(this),this.onMeshInit()};class l32{constructor(a){this.player=a,this.manager=a.core.inputManager,this.keyMaps=this.manager.inputSettings.keyboard,this.mpMaps=Object.entries(this.manager.inputSettings.mediapipe).map(([g,w])=>new u32(g,w.boneName,w.axisName,w.noOfFrames,w.threshold)),this.update()}update(){switch(this.manager.inputType){case"keyboard":{const g=this.manager.activeInputs.values().next().value;g&&this.triggerAction(this.keyMaps[g]);break}case"mediapipe":{this.mpMaps.forEach(a=>{const g=a.detectMovement(this.manager.poseDetectorLandmarks);g&&g!==""&&(this.triggerAction(g),this.mpMaps.forEach(w=>{w.storedLandmarks=[]}))});break}case"KbMp":{const g=this.manager.activeInputs.values().next().value;g&&this.triggerAction(this.keyMaps[g]),this.mpMaps.forEach(w=>{const x=w.detectMovement(this.manager.poseDetectorLandmarks);x&&x!==""&&(this.triggerAction(x),this.mpMaps.forEach(E=>{E.clear()}))});break}}requestAnimationFrame(()=>this.update())}triggerAction(a){a&&typeof this.player[a]=="function"&&(this.player[a](),this.player.currentAction=a)}}class u32{constructor(a,g,w,x,E){this.action=a,this.boneValue=this.getBoneValue(g),this.axisValue=w,this.storedLandmarks=[],this.noOfFrames=x,this.kConstant=2.2,this.threshold=E,this.extraDelay=0}clear(){this.storedLandmarks=[],(this.action==="jump"||this.action==="slide")&&(this.extraDelay=this.noOfFrames)}detectMovement(a){if(!(--this.extraDelay>0)&&a&&(this.storedLandmarks.push(a),this.storedLandmarks.length>this.noOfFrames&&this.storedLandmarks.shift(),this.storedLandmarks.length===this.noOfFrames)){let g,w;switch(this.axisValue){case"x":{g=this.storedLandmarks[0][this.boneValue].x,w=this.storedLandmarks[this.storedLandmarks.length-1][this.boneValue].x;break}case"y":{g=this.storedLandmarks[0][this.boneValue].y,w=this.storedLandmarks[this.storedLandmarks.length-1][this.boneValue].y;break}case"z":{g=this.storedLandmarks[0][this.boneValue].z,w=this.storedLandmarks[this.storedLandmarks.length-1][this.boneValue].z;break}default:console.error("Wrong axis")}const x=w-g,E=this.threshold/(a[this.boneValue].z+this.kConstant);if(this.threshold<0?x<E:x>E)return this.action}}getBoneValue(a){switch(a){case"nose":return 0;case"left_eye_inner":return 1;case"left_eye":return 2;case"left_eye_outer":return 3;case"right_eye_inner":return 4;case"right_eye":return 5;case"right_eye_outer":return 6;case"left_ear":return 7;case"right_ear":return 8;case"mouth_left":return 9;case"mouth_right":return 10;case"left_shoulder":return 11;case"right_shoulder":return 12;case"left_elbow":return 13;case"right_elbow":return 14;case"left_wrist":return 15;case"right_wrist":return 16;case"left_pinky":return 17;case"right_pinky":return 18;case"left_index":return 19;case"right_index":return 20;case"left_thumb":return 21;case"right_thumb":return 22;case"left_hip":return 23;case"right_hip":return 24;case"left_knee":return 25;case"right_knee":return 26;case"left_ankle":return 27;case"right_ankle":return 28;case"left_heel":return 29;case"right_heel":return 30;case"left_foot_index":return 31;case"right_foot_index":return 32;default:return-1}}}var zc,FQ;class LQ{constructor(){j1(this,zc);this.enableTick=!0,this.owner=null,g0(this,zc,FQ).call(this)}onComponentAdd(){}eventTick(){}destroy(){if(this.enableTick=!1,this.owner){const a=this.owner.components.indexOf(this);a>-1&&this.owner.components.splice(a,1),this.owner=null}this.onComponentAdd=null,this.eventTick=null}}zc=new WeakSet,FQ=function(){};class f32 extends rh{constructor(a,g,w){super(g,w),this.core=a,this.castShadow=!0,this.targetObject=new Nn,a.scene.add(this),a.scene.add(this.targetObject),this.target=this.targetObject,this.setTargetPosition(0,0,0)}setPosition(a,g,w){const x=this.position.clone(),E=this.targetObject.position.clone();typeof a=="object"&&a.x!==void 0&&a.y!==void 0&&a.z!==void 0?(this.position.set(a.x+x.x,a.y+x.y,a.z+x.z),this.setTargetPosition(a.x+E.x,a.y+E.y,a.z+E.z)):a!==void 0&&g!==void 0&&w!==void 0&&(this.position.set(a+x.x,g+x.y,w+x.z),this.setTargetPosition(a+E.x,g+E.y,w+E.z))}setTargetPosition(a,g,w){typeof a=="object"&&a.x!==void 0&&a.y!==void 0&&a.z!==void 0?this.targetObject.position.copy(a):a!==void 0&&g!==void 0&&w!==void 0&&this.targetObject.position.set(a,g,w),this.updateMatrix()}setShadowCamera(a,g,w,x,E,L){a&&(this.shadow.camera.top=a),g&&(this.shadow.camera.bottom=g),w&&(this.shadow.camera.right=w),x&&(this.shadow.camera.left=x),E&&(this.shadow.camera.near=E),L&&(this.shadow.camera.far=L)}setShadowMapSize(a,g){this.shadow.mapSize.width=a,this.shadow.mapSize.height=g}showHelper(a,g){this.helper=new Cm2(this,a,g),this.core.scene.add(this.helper)}showShadowHelper(){this.shadowHelper=new Mm2(this.shadow.camera),this.core.scene.add(this.shadowHelper)}}class p32 extends AQ{constructor(a,g,w){super(g,w),this.core=a,a.scene.add(this)}}class c32 extends Wc{constructor(a,g,w,x,E){super(g,w,x,E),this.core=a,this.castShadow=!0,this.core.scene.add(this)}showHelper(a,g){this.helper=new xm2(this,a,g),this.core.scene.add(this.helper)}}class _32 extends LQ{constructor(a){super(),this.directionalLight=new f32(a,16766906,3),this.directionalLight.position.set(-160,150,160),this.directionalLight.setTargetPosition(0,30,0),this.directionalLight.setShadowCamera(200,-100,400,-100),this.directionalLight.setShadowMapSize(1024,1024),this.directionalLight.setPosition(-150,0,50),this.directionalLight.showHelper(5),this.directionalLight.showShadowHelper(),new p32(a,4210752,5),this.pointLight=new c32(a,16777215,3,25,.4)}eventTick(a){if(super.eventTick(a),!this.owner)return;const g=this.owner.getActorLocation();g&&this.pointLight.position.set(-10,g.y+3,this.owner.walkDirection>=0?g.z+4:g.z-4)}}class lh extends Oo{constructor(a,g,w,x){super(a,g,w,x),this.mass=20,this.components=new Set}setActorLocation(a,g,w){if(this.mesh){let x;a instanceof S2?x=a:x=new S2(a,g,w),this.collision?this.collision.setPosition(x.x,x.y,x.z):this.mesh.position.copy(x)}}getActorLocation(){if(this.collision&&this.mesh){const a=this.collision.position;return new S2(a.x,a.y,a.z)}return this.mesh?this.mesh.position.clone():null}setActorRotation(a,g,w){if(this.mesh){let x;a instanceof Sn||a instanceof xn?x=a:x=new S2(a,g,w),this.mesh.rotation.set(x.x,x.y,x.z)}}getActorRotation(){return this.mesh?this.mesh.rotation.clone():null}setActorScale(a){this.mesh&&this.mesh.scale.copy(a)}getActorScale(){return this.mesh?this.mesh.scale.clone():null}addComponent(a){a.owner=this,a.onComponentAdd(),this.components.add(a)}destroy(){for(const a of this.components)a.destroy&&a.destroy();this.components.clear(),super.destroy()}}class Q1 extends lh{constructor(a,g,w,x,E,L){super(a,g,w,x),this.collisionDimension=E,this.meshPos=L}async onMeshInit(){this.collision=await this.core.world.createCube(this.mesh,this.collisionDimension),this.meshPos&&this.mesh.position.set(this.meshPos.x,this.meshPos.y,this.meshPos.z)}}class a32{constructor(a,g){var x;this.clips=a.animations,this.currentClip=null,this.targetClip=null,this.blendTime=.4,this.defaultSpeed=2,this.animMixer=new Sm2(g),this.animationsMap=new Map,this.onCompleteCallbacks=new Map,this.clips.filter(E=>E.name!=="TPose").forEach(E=>{const L=this.animMixer.clipAction(E);L.clampWhenFinished=!0,L.loop=xa,L.enabled=!0,L.setEffectiveTimeScale(this.defaultSpeed),this.animationsMap.set(E.name,L)}),this.animMixer.addEventListener("finished",E=>{const L=E.action.getClip().name,O=this.onCompleteCallbacks.get(L);O&&O()});const w=(x=this.clips[0])==null?void 0:x.name;w&&this.playAnimation(w)}updateAnimation(a){this.animMixer.update(a),this.currentClip!==this.targetClip&&(this.currentClip&&this.currentClip.fadeOut(this.blendTime),this.targetClip&&this.targetClip.reset().fadeIn(this.blendTime).play(),this.currentClip=this.targetClip)}playAnimation(a,g){const w=this.animationsMap.get(a);w&&w!==this.currentClip&&(this.targetClip=w,g&&this.onCompleteCallbacks.set(a,g))}stopCurrentAnimation(){this.currentClip&&(this.currentClip.stop(),this.currentClip=null)}setAnimationTime(a,g){const w=this.animationsMap.get(a);w&&(w.time=g)}setAnimationPlayRate(a,g){const w=this.animationsMap.get(a);w&&w.setEffectiveTimeScale(g)}setAnimationLooping(a,g){const w=this.animationsMap.get(a);w&&(w.loop=g?FV:xa,w.clampWhenFinished=!g)}}class h32 extends lh{constructor(a,g,w,x){super(a,g,w,x),this.walkSpeed=.1,this.velocity=5,this.gravity=9.8*3,this.jumpDirection=new S2(0,1,0),this.jumpVelocity=10,this.moveDirection=new S2,this.rotateAngle=new S2(0,1,0),this.rotateQuaternion=new Sn,this.cameraTarget=new S2}async onMeshInit(){this.collision=await this.core.world.createCapsule(this.mesh,this.mass),this.collision.setJumpSpeed(this.jumpVelocity),this.collision.setGravity(this.gravity),this.mesh.model&&this.mesh.model.animations.length>0?(this.animManager=new a32(this.mesh.model,this.mesh),this.onAnimInit()):console.warn("No animations found in the provided model.")}onAnimInit(){}jump(){this.mesh&&this.collision&&this.collision.jump(this.jumpDirection)}}class m32 extends h32{constructor(a,g,w,x){super(a,g,w,x),this.walkSpeed=.1,this.jumpValue=new S2(0,1,0),this.jumpVelocity=15,this.walking=!1,this.walkDirection=0,this.started=!1,this.dead=!1,this.lives=5,this.lifeContainer=document.getElementById("life-icons"),this.updateUI(),this.jumpCount=-1}eventTick(a){if(this.animManager&&this.collision){const g=this.getActorLocation().y;g<=20&&g!=0&&this.die()}}onMeshInit(){super.onMeshInit(),this.mesh.traverse(a=>{a.isMesh&&this.core.shaderLibrary.stylizeMaterial(a.material)},void 0,a=>{console.error(a)})}onAnimInit(){super.onAnimInit(),this.animManager.setAnimationLooping("Idle",!0),this.animManager.setAnimationLooping("Duck",!0),this.animManager.setAnimationLooping("run",!0),this.animManager.setAnimationLooping("run on bottle",!0),this.animManager.setAnimationPlayRate("Jump",.9),this.animManager.playAnimation("Idle"),document.getElementById("loading-screen").remove()}moveRight(){this.mesh&&this.collision&&(this.setActorRotation(new xn(0,0,0)),this.animManager.playAnimation("run"),this.collision.startWalk(0,0,this.walkSpeed),this.walking=!0,this.walkDirection=1)}moveLeft(){this.mesh&&this.collision&&(this.setActorRotation(new xn(0,Math.PI,0)),this.animManager.playAnimation("run"),this.collision.startWalk(0,0,-this.walkSpeed),this.walking=!0,this.walkDirection=-1)}moveUp(){if(this.collision.onGround())if(this.started)this.jumpCount++,this.animManager.playAnimation("Jump",()=>{this.walking?this.animManager.playAnimation("run"):this.animManager.playAnimation("Idle")}),this.jump();else{this.started=!0;const a=document.getElementById("start-instructions"),g=document.getElementById("game-renderer");g.style.animation="fadeBlur 2s",a.innerHTML="GO!!",a.style.animation="moveDown 2s",setTimeout(()=>{this.moveRight(),g.style.filter="none",a.remove()},1700)}}die(){this.dead||(this.lives--,this.updateUI(),this.collision.stopWalk(),this.walking=!1,this.animManager.playAnimation("Idle"),this.lives>0?(this.setActorLocation(this._initPosition),this.setActorRotation(new xn(0,0,0)),this.walkDirection=1):this.dead=!0)}updateUI(){this.lifeContainer.innerHTML="";for(let a=0;a<this.lives;a++){const g=document.createElement("img");g.src="./assets/UI/CharIcon.svg",g.alt="",this.lifeContainer.appendChild(g)}}}function Y1(D,a,g){return(1-g)*D+g*a}var vr,Ua,OQ,jQ,NQ,UQ;class d32 extends LQ{constructor(){super();j1(this,vr);this.camera=null,this.origin=null,this.target=null,this.relativeOffset=new S2(0,1,-6),this.position=new S2,this.positionInterp=.1,this.lookAtOffset=new S2(0,.5,10),this.lookAt=new S2,this.lookAtInterp=.1,this.currentFOV=50,this.targetFOV=35,this.fovInterp=.1,this.shakes=[],this.createNoise3D=Jd2()}onComponentAdd(){this.camera=this.owner.core.camera}eventTick(g){const w=this.owner.getActorLocation(),x=g0(this,vr,Ua).call(this,this.origin,w),E=g0(this,vr,Ua).call(this,this.target,w);x&&E&&g0(this,vr,OQ).call(this,x,E),g0(this,vr,jQ).call(this,g)}addCamShake({amplitude:g,frequency:w,duration:x,loop:E=!1,minPosition:L=new S2(-1,-1,-1),maxPosition:O=new S2(1,1,1),minRotation:G=new xn(-Math.PI/8,-Math.PI/8,-Math.PI/8),maxRotation:h=new xn(Math.PI/8,Math.PI/8,Math.PI/8)}){this.shakes.push({amplitude:g,frequency:w,duration:x,loop:E,minPosition:L,maxPosition:O,minRotation:G,maxRotation:h,elapsed:0})}}vr=new WeakSet,Ua=function(g,w){return g instanceof S2?g:g instanceof lh?g.getActorLocation():w},OQ=function(g,w){const x=new S2().copy(g).add(this.relativeOffset),E=new S2().copy(w).add(this.lookAtOffset);this.position.lerp(x,this.positionInterp),this.lookAt.lerp(E,this.lookAtInterp),this.currentFOV=Y1(this.currentFOV,this.targetFOV,this.fovInterp),this.camera.position.copy(this.position),this.camera.lookAt(this.lookAt),this.camera.fov=this.currentFOV,this.camera.updateProjectionMatrix()},jQ=function(g){const w=new S2,x=new xn,E=new Sn;this.shakes=this.shakes.filter(L=>{L.elapsed+=g;const O=L.elapsed/L.duration,G=L.loop?L.amplitude:L.amplitude*(1-O),h=g0(this,vr,NQ).call(this,L,L.elapsed),X=g0(this,vr,UQ).call(this,L,L.elapsed);return w.add(h.multiplyScalar(G)),x.set(X.x*G,X.y*G,X.z*G),E.setFromEuler(x),this.camera.quaternion.multiply(E),L.loop||L.elapsed<L.duration}),this.camera.position.add(w)},NQ=function(g,w){const x=this.createNoise3D(w*g.frequency,0,0),E=this.createNoise3D(0,w*g.frequency,0),L=this.createNoise3D(0,0,w*g.frequency*.5);return new S2(Y1(g.minPosition.x,g.maxPosition.x,(x+1)/2),Y1(g.minPosition.y,g.maxPosition.y,(E+1)/2),Y1(g.minPosition.z,g.maxPosition.z,(L+1)/2))},UQ=function(g,w){const x=this.createNoise3D(w*g.frequency,0,0),E=this.createNoise3D(0,w*g.frequency,0),L=this.createNoise3D(0,0,w*g.frequency*.5);return new xn(Y1(g.minRotation.x,g.maxRotation.x,(E+1)/2),Y1(g.minRotation.y,g.maxRotation.y,(x+1)/2),Y1(g.minRotation.z,g.maxRotation.z,(L+1)/2))};class A32 extends d32{constructor(){super(),this.targetFOV=35}eventTick(a){super.eventTick(a),this.owner&&(this.relativeOffset.set(-25,5,this.owner.walkDirection>=0?8:-8),this.lookAtOffset.set(0,3,this.owner.walkDirection>=0?8:-8))}}const a0=new s32;a0.devMode.showFPS();a0.world.createGround(new S2(5,5,0),new S2(0,41.7,10));a0.world.createGround(new S2(5,0,48),new S2(0,41.7,48));a0.world.createGround(new S2(5,0,48),new S2(0,41.7,148));a0.world.createGround(new S2(5,0,500),new S2(0,1.5,450));g32();const uh=new m32(a0,"./assets/Level 1/Character/Character.glb",new S2(0,60,20));uh.addComponent(new _32(a0));new l32(uh);const GQ=new A32;GQ.addCamShake({amplitude:.1,frequency:.5,duration:10,loop:!0,minPosition:new S2(-.1,-.1,-.1),maxPosition:new S2(.1,.1,.1),minRotation:new xn(-Math.PI/180*2,-Math.PI/180*2,-Math.PI/180*2),maxRotation:new xn(Math.PI/180*2,Math.PI/180*2,Math.PI/180*2)});uh.addComponent(GQ);function g32(){new Oo(a0,"./assets/Level 1/Objects/Table.glb",new S2(0,0,3.5)),new Q1(a0,"./assets/Level 1/Objects/Pencil.glb",new S2(0,42,30),new Sn(0,0,0),new S2(7,.2,.3),new S2(0,-.1,0)),new Q1(a0,"./assets/Level 1/Objects/sharpener.glb",new S2(0,42,35),new Sn(0,0,0),new S2(2.1,1.2,2.4),new S2(0,-.6,-1.2)),new Q1(a0,"./assets/Level 1/Objects/pin.glb",new S2(0,41.7,39),new Sn(0,0,0),new S2(.3,.7,.3),new S2(0,-.35,-.15)),new Q1(a0,"./assets/Level 1/Objects/Phone.glb",new S2(0,41.7,42),new Sn(0,0,0),new S2(6.5,.26,2.6),new S2(0,-.13,-1.3)),new Q1(a0,"./assets/Level 1/Objects/laptop.glb",new S2(0,41.7,55),new Sn(0,0,0),new S2(6,.8,16.2),new S2(0,-.4,-8.1)),new Q1(a0,"./assets/Level 1/Objects/Scale with eraser.glb",new S2(0,41.7,80),new Sn(0,0,0),new S2(6,1.2,2.65),new S2(0,-.6,-1.325)),new Q1(a0,"./assets/Level 1/Objects/Book 2.glb",new S2(0,41.7,90),new Sn(0,0,0),new S2(6,2.8,9.4),new S2(0,-1.4,-4.7)),new Oo(a0,"./assets/Level 1/Objects/Table.glb",new S2(0,0,103.5)),new Oo(a0,"./assets/Level 1/Objects/Wall/Small wall.glb",new S2(0,0,0)),new Oo(a0,"./assets/Level 1/Objects/Wall/wall.glb",new S2(110,0,0)),new Oo(a0,"./assets/Level 1/Objects/Wall/wall with window.glb",new S2(-110,0,0)),new Oo(a0,"./assets/Level 1/Objects/Floor.glb",new S2(0,0,0)),new Oo(a0,"./assets/Level 1/Objects/Floor.glb",new S2(0,190,0)),new Oo(a0,"./assets/Level 1/Objects/Cuboard.glb",new S2(90,0,15)),new Oo(a0,"./assets/Level 1/Objects/door.glb",new S2(105,0,130))}});export default y32();