var BH=D=>{throw TypeError(D)};var Lp2=(D,a)=>()=>(a||D((a={exports:{}}).exports,a),a.exports);var Fp2=(D,a,g)=>a.has(D)||BH("Cannot "+g);var Dl=(D,a,g)=>a.has(D)?BH("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(D):a.set(D,g);var c0=(D,a,g)=>(Fp2(D,a,"access private method"),g);import{P as Op2}from"./project-settings.js";var E32=Lp2((L4,Q6)=>{(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const x of document.querySelectorAll('link[rel="modulepreload"]'))w(x);new MutationObserver(x=>{for(const E of x)if(E.type==="childList")for(const P of E.addedNodes)P.tagName==="LINK"&&P.rel==="modulepreload"&&w(P)}).observe(document,{childList:!0,subtree:!0});function g(x){const E={};return x.integrity&&(E.integrity=x.integrity),x.referrerPolicy&&(E.referrerPolicy=x.referrerPolicy),x.crossOrigin==="use-credentials"?E.credentials="include":x.crossOrigin==="anonymous"?E.credentials="omit":E.credentials="same-origin",E}function w(x){if(x.ep)return;x.ep=!0;const E=g(x);fetch(x.href,E)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Y6="164",ws={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Il={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jp2=0,SH=1,Np2=2,X6=1,Up2=2,vs=3,Wo=0,nr=1,No=2,d1=0,ru=1,xH=2,CH=3,MH=4,Gp2=5,Q1=100,Wp2=101,Hp2=102,Vp2=103,zp2=104,Qp2=200,Yp2=201,Xp2=202,Zp2=203,C6=204,M6=205,qp2=206,Jp2=207,Kp2=208,$p2=209,tc2=210,ec2=211,nc2=212,ic2=213,rc2=214,oc2=0,sc2=1,lc2=2,F4=3,uc2=4,fc2=5,pc2=6,cc2=7,Z4=0,_c2=1,ac2=2,A1=0,hc2=1,mc2=2,dc2=3,Rz=4,Ac2=5,gc2=6,yc2=7,TH="attached",kc2="detached",bz=300,pu=301,cu=302,Hf=303,T6=304,q4=306,y1=1e3,Vr=1001,O4=1002,j0=1003,Dz=1004,Lf=1005,t0=1006,b4=1007,Go=1008,k1=1009,vc2=1010,wc2=1011,Iz=1012,Pz=1013,_u=1014,kr=1015,h1=1016,Lz=1017,Fz=1018,$f=1020,Bc2=35902,Sc2=1021,xc2=1022,mo=1023,Cc2=1024,Mc2=1025,ou=1026,Vf=1027,Oz=1028,jz=1029,Tc2=1030,Nz=1031,Uz=1033,Ca=33776,Ma=33777,Ta=33778,Ea=33779,EH=35840,RH=35841,bH=35842,DH=35843,IH=36196,PH=37492,LH=37496,FH=37808,OH=37809,jH=37810,NH=37811,UH=37812,GH=37813,WH=37814,HH=37815,VH=37816,zH=37817,QH=37818,YH=37819,XH=37820,ZH=37821,Ra=36492,qH=36494,JH=36495,Ec2=36283,KH=36284,$H=36285,tV=36286,E6=2200,Gz=2201,Rc2=2202,zf=2300,au=2301,ba=2302,$l=2400,tu=2401,j4=2402,Z6=2500,bc2=2501,Dc2=0,Wz=1,R6=2,Ic2=3200,Pc2=3201,J4=0,Lc2=1,a1="",di="srgb",Xi="srgb-linear",q6="display-p3",K4="display-p3-linear",N4="linear",Kn="srgb",U4="rec709",G4="p3",Pl=7680,eV=519,Fc2=512,Oc2=513,jc2=514,Hz=515,Nc2=516,Uc2=517,Gc2=518,Wc2=519,b6=35044,tp=35048,nV="300 es",Ss=2e3,W4=2001;class Ts{addEventListener(a,g){this._listeners===void 0&&(this._listeners={});const w=this._listeners;w[a]===void 0&&(w[a]=[]),w[a].indexOf(g)===-1&&w[a].push(g)}hasEventListener(a,g){if(this._listeners===void 0)return!1;const w=this._listeners;return w[a]!==void 0&&w[a].indexOf(g)!==-1}removeEventListener(a,g){if(this._listeners===void 0)return;const x=this._listeners[a];if(x!==void 0){const E=x.indexOf(g);E!==-1&&x.splice(E,1)}}dispatchEvent(a){if(this._listeners===void 0)return;const w=this._listeners[a.type];if(w!==void 0){a.target=this;const x=w.slice(0);for(let E=0,P=x.length;E<P;E++)x[E].call(this,a);a.target=null}}}const w0=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let iV=1234567;const Of=Math.PI/180,hu=180/Math.PI;function Ao(){const D=Math.random()*4294967295|0,a=Math.random()*4294967295|0,g=Math.random()*4294967295|0,w=Math.random()*4294967295|0;return(w0[D&255]+w0[D>>8&255]+w0[D>>16&255]+w0[D>>24&255]+"-"+w0[a&255]+w0[a>>8&255]+"-"+w0[a>>16&15|64]+w0[a>>24&255]+"-"+w0[g&63|128]+w0[g>>8&255]+"-"+w0[g>>16&255]+w0[g>>24&255]+w0[w&255]+w0[w>>8&255]+w0[w>>16&255]+w0[w>>24&255]).toLowerCase()}function Mi(D,a,g){return Math.max(a,Math.min(g,D))}function J6(D,a){return(D%a+a)%a}function Hc2(D,a,g,w,x){return w+(D-a)*(x-w)/(g-a)}function Vc2(D,a,g){return D!==a?(g-D)/(a-D):0}function jf(D,a,g){return(1-g)*D+g*a}function zc2(D,a,g,w){return jf(D,a,1-Math.exp(-g*w))}function Qc2(D,a=1){return a-Math.abs(J6(D,a*2)-a)}function Yc2(D,a,g){return D<=a?0:D>=g?1:(D=(D-a)/(g-a),D*D*(3-2*D))}function Xc2(D,a,g){return D<=a?0:D>=g?1:(D=(D-a)/(g-a),D*D*D*(D*(D*6-15)+10))}function Zc2(D,a){return D+Math.floor(Math.random()*(a-D+1))}function qc2(D,a){return D+Math.random()*(a-D)}function Jc2(D){return D*(.5-Math.random())}function Kc2(D){D!==void 0&&(iV=D);let a=iV+=1831565813;return a=Math.imul(a^a>>>15,a|1),a^=a+Math.imul(a^a>>>7,a|61),((a^a>>>14)>>>0)/4294967296}function $c2(D){return D*Of}function t42(D){return D*hu}function e42(D){return(D&D-1)===0&&D!==0}function n42(D){return Math.pow(2,Math.ceil(Math.log(D)/Math.LN2))}function i42(D){return Math.pow(2,Math.floor(Math.log(D)/Math.LN2))}function r42(D,a,g,w,x){const E=Math.cos,P=Math.sin,O=E(g/2),G=P(g/2),h=E((a+w)/2),X=P((a+w)/2),Z=E((a-w)/2),K=P((a-w)/2),e2=E((w-a)/2),l2=P((w-a)/2);switch(x){case"XYX":D.set(O*X,G*Z,G*K,O*h);break;case"YZY":D.set(G*K,O*X,G*Z,O*h);break;case"ZXZ":D.set(G*Z,G*K,O*X,O*h);break;case"XZX":D.set(O*X,G*l2,G*e2,O*h);break;case"YXY":D.set(G*e2,O*X,G*l2,O*h);break;case"ZYZ":D.set(G*l2,G*e2,O*X,O*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+x)}}function ho(D,a){switch(a.constructor){case Float32Array:return D;case Uint32Array:return D/4294967295;case Uint16Array:return D/65535;case Uint8Array:return D/255;case Int32Array:return Math.max(D/2147483647,-1);case Int16Array:return Math.max(D/32767,-1);case Int8Array:return Math.max(D/127,-1);default:throw new Error("Invalid component type.")}}function Fn(D,a){switch(a.constructor){case Float32Array:return D;case Uint32Array:return Math.round(D*4294967295);case Uint16Array:return Math.round(D*65535);case Uint8Array:return Math.round(D*255);case Int32Array:return Math.round(D*2147483647);case Int16Array:return Math.round(D*32767);case Int8Array:return Math.round(D*127);default:throw new Error("Invalid component type.")}}const Yi={DEG2RAD:Of,RAD2DEG:hu,generateUUID:Ao,clamp:Mi,euclideanModulo:J6,mapLinear:Hc2,inverseLerp:Vc2,lerp:jf,damp:zc2,pingpong:Qc2,smoothstep:Yc2,smootherstep:Xc2,randInt:Zc2,randFloat:qc2,randFloatSpread:Jc2,seededRandom:Kc2,degToRad:$c2,radToDeg:t42,isPowerOfTwo:e42,ceilPowerOfTwo:n42,floorPowerOfTwo:i42,setQuaternionFromProperEuler:r42,normalize:Fn,denormalize:ho};class Lt{constructor(a=0,g=0){Lt.prototype.isVector2=!0,this.x=a,this.y=g}get width(){return this.x}set width(a){this.x=a}get height(){return this.y}set height(a){this.y=a}set(a,g){return this.x=a,this.y=g,this}setScalar(a){return this.x=a,this.y=a,this}setX(a){return this.x=a,this}setY(a){return this.y=a,this}setComponent(a,g){switch(a){case 0:this.x=g;break;case 1:this.y=g;break;default:throw new Error("index is out of range: "+a)}return this}getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+a)}}clone(){return new this.constructor(this.x,this.y)}copy(a){return this.x=a.x,this.y=a.y,this}add(a){return this.x+=a.x,this.y+=a.y,this}addScalar(a){return this.x+=a,this.y+=a,this}addVectors(a,g){return this.x=a.x+g.x,this.y=a.y+g.y,this}addScaledVector(a,g){return this.x+=a.x*g,this.y+=a.y*g,this}sub(a){return this.x-=a.x,this.y-=a.y,this}subScalar(a){return this.x-=a,this.y-=a,this}subVectors(a,g){return this.x=a.x-g.x,this.y=a.y-g.y,this}multiply(a){return this.x*=a.x,this.y*=a.y,this}multiplyScalar(a){return this.x*=a,this.y*=a,this}divide(a){return this.x/=a.x,this.y/=a.y,this}divideScalar(a){return this.multiplyScalar(1/a)}applyMatrix3(a){const g=this.x,w=this.y,x=a.elements;return this.x=x[0]*g+x[3]*w+x[6],this.y=x[1]*g+x[4]*w+x[7],this}min(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this}max(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this}clamp(a,g){return this.x=Math.max(a.x,Math.min(g.x,this.x)),this.y=Math.max(a.y,Math.min(g.y,this.y)),this}clampScalar(a,g){return this.x=Math.max(a,Math.min(g,this.x)),this.y=Math.max(a,Math.min(g,this.y)),this}clampLength(a,g){const w=this.length();return this.divideScalar(w||1).multiplyScalar(Math.max(a,Math.min(g,w)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(a){return this.x*a.x+this.y*a.y}cross(a){return this.x*a.y-this.y*a.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(a){const g=Math.sqrt(this.lengthSq()*a.lengthSq());if(g===0)return Math.PI/2;const w=this.dot(a)/g;return Math.acos(Mi(w,-1,1))}distanceTo(a){return Math.sqrt(this.distanceToSquared(a))}distanceToSquared(a){const g=this.x-a.x,w=this.y-a.y;return g*g+w*w}manhattanDistanceTo(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)}setLength(a){return this.normalize().multiplyScalar(a)}lerp(a,g){return this.x+=(a.x-this.x)*g,this.y+=(a.y-this.y)*g,this}lerpVectors(a,g,w){return this.x=a.x+(g.x-a.x)*w,this.y=a.y+(g.y-a.y)*w,this}equals(a){return a.x===this.x&&a.y===this.y}fromArray(a,g=0){return this.x=a[g],this.y=a[g+1],this}toArray(a=[],g=0){return a[g]=this.x,a[g+1]=this.y,a}fromBufferAttribute(a,g){return this.x=a.getX(g),this.y=a.getY(g),this}rotateAround(a,g){const w=Math.cos(g),x=Math.sin(g),E=this.x-a.x,P=this.y-a.y;return this.x=E*w-P*x+a.x,this.y=E*x+P*w+a.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(a,g,w,x,E,P,O,G,h){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],a!==void 0&&this.set(a,g,w,x,E,P,O,G,h)}set(a,g,w,x,E,P,O,G,h){const X=this.elements;return X[0]=a,X[1]=x,X[2]=O,X[3]=g,X[4]=E,X[5]=G,X[6]=w,X[7]=P,X[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(a){const g=this.elements,w=a.elements;return g[0]=w[0],g[1]=w[1],g[2]=w[2],g[3]=w[3],g[4]=w[4],g[5]=w[5],g[6]=w[6],g[7]=w[7],g[8]=w[8],this}extractBasis(a,g,w){return a.setFromMatrix3Column(this,0),g.setFromMatrix3Column(this,1),w.setFromMatrix3Column(this,2),this}setFromMatrix4(a){const g=a.elements;return this.set(g[0],g[4],g[8],g[1],g[5],g[9],g[2],g[6],g[10]),this}multiply(a){return this.multiplyMatrices(this,a)}premultiply(a){return this.multiplyMatrices(a,this)}multiplyMatrices(a,g){const w=a.elements,x=g.elements,E=this.elements,P=w[0],O=w[3],G=w[6],h=w[1],X=w[4],Z=w[7],K=w[2],e2=w[5],l2=w[8],p2=x[0],r2=x[3],o2=x[6],v2=x[1],m2=x[4],k2=x[7],j2=x[2],b2=x[5],D2=x[8];return E[0]=P*p2+O*v2+G*j2,E[3]=P*r2+O*m2+G*b2,E[6]=P*o2+O*k2+G*D2,E[1]=h*p2+X*v2+Z*j2,E[4]=h*r2+X*m2+Z*b2,E[7]=h*o2+X*k2+Z*D2,E[2]=K*p2+e2*v2+l2*j2,E[5]=K*r2+e2*m2+l2*b2,E[8]=K*o2+e2*k2+l2*D2,this}multiplyScalar(a){const g=this.elements;return g[0]*=a,g[3]*=a,g[6]*=a,g[1]*=a,g[4]*=a,g[7]*=a,g[2]*=a,g[5]*=a,g[8]*=a,this}determinant(){const a=this.elements,g=a[0],w=a[1],x=a[2],E=a[3],P=a[4],O=a[5],G=a[6],h=a[7],X=a[8];return g*P*X-g*O*h-w*E*X+w*O*G+x*E*h-x*P*G}invert(){const a=this.elements,g=a[0],w=a[1],x=a[2],E=a[3],P=a[4],O=a[5],G=a[6],h=a[7],X=a[8],Z=X*P-O*h,K=O*G-X*E,e2=h*E-P*G,l2=g*Z+w*K+x*e2;if(l2===0)return this.set(0,0,0,0,0,0,0,0,0);const p2=1/l2;return a[0]=Z*p2,a[1]=(x*h-X*w)*p2,a[2]=(O*w-x*P)*p2,a[3]=K*p2,a[4]=(X*g-x*G)*p2,a[5]=(x*E-O*g)*p2,a[6]=e2*p2,a[7]=(w*G-h*g)*p2,a[8]=(P*g-w*E)*p2,this}transpose(){let a;const g=this.elements;return a=g[1],g[1]=g[3],g[3]=a,a=g[2],g[2]=g[6],g[6]=a,a=g[5],g[5]=g[7],g[7]=a,this}getNormalMatrix(a){return this.setFromMatrix4(a).invert().transpose()}transposeIntoArray(a){const g=this.elements;return a[0]=g[0],a[1]=g[3],a[2]=g[6],a[3]=g[1],a[4]=g[4],a[5]=g[7],a[6]=g[2],a[7]=g[5],a[8]=g[8],this}setUvTransform(a,g,w,x,E,P,O){const G=Math.cos(E),h=Math.sin(E);return this.set(w*G,w*h,-w*(G*P+h*O)+P+a,-x*h,x*G,-x*(-h*P+G*O)+O+g,0,0,1),this}scale(a,g){return this.premultiply(Da.makeScale(a,g)),this}rotate(a){return this.premultiply(Da.makeRotation(-a)),this}translate(a,g){return this.premultiply(Da.makeTranslation(a,g)),this}makeTranslation(a,g){return a.isVector2?this.set(1,0,a.x,0,1,a.y,0,0,1):this.set(1,0,a,0,1,g,0,0,1),this}makeRotation(a){const g=Math.cos(a),w=Math.sin(a);return this.set(g,-w,0,w,g,0,0,0,1),this}makeScale(a,g){return this.set(a,0,0,0,g,0,0,0,1),this}equals(a){const g=this.elements,w=a.elements;for(let x=0;x<9;x++)if(g[x]!==w[x])return!1;return!0}fromArray(a,g=0){for(let w=0;w<9;w++)this.elements[w]=a[w+g];return this}toArray(a=[],g=0){const w=this.elements;return a[g]=w[0],a[g+1]=w[1],a[g+2]=w[2],a[g+3]=w[3],a[g+4]=w[4],a[g+5]=w[5],a[g+6]=w[6],a[g+7]=w[7],a[g+8]=w[8],a}clone(){return new this.constructor().fromArray(this.elements)}}const Da=new Je;function Vz(D){for(let a=D.length-1;a>=0;--a)if(D[a]>=65535)return!0;return!1}function Qf(D){return document.createElementNS("http://www.w3.org/1999/xhtml",D)}function o42(){const D=Qf("canvas");return D.style.display="block",D}const rV={};function zz(D){D in rV||(rV[D]=!0,console.warn(D))}const oV=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),sV=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zc={[Xi]:{transfer:N4,primaries:U4,toReference:D=>D,fromReference:D=>D},[di]:{transfer:Kn,primaries:U4,toReference:D=>D.convertSRGBToLinear(),fromReference:D=>D.convertLinearToSRGB()},[K4]:{transfer:N4,primaries:G4,toReference:D=>D.applyMatrix3(sV),fromReference:D=>D.applyMatrix3(oV)},[q6]:{transfer:Kn,primaries:G4,toReference:D=>D.convertSRGBToLinear().applyMatrix3(sV),fromReference:D=>D.applyMatrix3(oV).convertLinearToSRGB()}},s42=new Set([Xi,K4]),Dn={enabled:!0,_workingColorSpace:Xi,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(D){if(!s42.has(D))throw new Error(`Unsupported working color space, "${D}".`);this._workingColorSpace=D},convert:function(D,a,g){if(this.enabled===!1||a===g||!a||!g)return D;const w=Zc[a].toReference,x=Zc[g].fromReference;return x(w(D))},fromWorkingColorSpace:function(D,a){return this.convert(D,this._workingColorSpace,a)},toWorkingColorSpace:function(D,a){return this.convert(D,a,this._workingColorSpace)},getPrimaries:function(D){return Zc[D].primaries},getTransfer:function(D){return D===a1?N4:Zc[D].transfer}};function su(D){return D<.04045?D*.0773993808:Math.pow(D*.9478672986+.0521327014,2.4)}function Ia(D){return D<.0031308?D*12.92:1.055*Math.pow(D,.41666)-.055}let Ll;class l42{static getDataURL(a){if(/^data:/i.test(a.src)||typeof HTMLCanvasElement>"u")return a.src;let g;if(a instanceof HTMLCanvasElement)g=a;else{Ll===void 0&&(Ll=Qf("canvas")),Ll.width=a.width,Ll.height=a.height;const w=Ll.getContext("2d");a instanceof ImageData?w.putImageData(a,0,0):w.drawImage(a,0,0,a.width,a.height),g=Ll}return g.width>2048||g.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",a),g.toDataURL("image/jpeg",.6)):g.toDataURL("image/png")}static sRGBToLinear(a){if(typeof HTMLImageElement<"u"&&a instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&a instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&a instanceof ImageBitmap){const g=Qf("canvas");g.width=a.width,g.height=a.height;const w=g.getContext("2d");w.drawImage(a,0,0,a.width,a.height);const x=w.getImageData(0,0,a.width,a.height),E=x.data;for(let P=0;P<E.length;P++)E[P]=su(E[P]/255)*255;return w.putImageData(x,0,0),g}else if(a.data){const g=a.data.slice(0);for(let w=0;w<g.length;w++)g instanceof Uint8Array||g instanceof Uint8ClampedArray?g[w]=Math.floor(su(g[w]/255)*255):g[w]=su(g[w]);return{data:g,width:a.width,height:a.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),a}}let u42=0;class Qz{constructor(a=null){this.isSource=!0,Object.defineProperty(this,"id",{value:u42++}),this.uuid=Ao(),this.data=a,this.dataReady=!0,this.version=0}set needsUpdate(a){a===!0&&this.version++}toJSON(a){const g=a===void 0||typeof a=="string";if(!g&&a.images[this.uuid]!==void 0)return a.images[this.uuid];const w={uuid:this.uuid,url:""},x=this.data;if(x!==null){let E;if(Array.isArray(x)){E=[];for(let P=0,O=x.length;P<O;P++)x[P].isDataTexture?E.push(Pa(x[P].image)):E.push(Pa(x[P]))}else E=Pa(x);w.url=E}return g||(a.images[this.uuid]=w),w}}function Pa(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap?l42.getDataURL(D):D.data?{data:Array.from(D.data),width:D.width,height:D.height,type:D.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let f42=0;class Ti extends Ts{constructor(a=Ti.DEFAULT_IMAGE,g=Ti.DEFAULT_MAPPING,w=Vr,x=Vr,E=t0,P=Go,O=mo,G=k1,h=Ti.DEFAULT_ANISOTROPY,X=a1){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:f42++}),this.uuid=Ao(),this.name="",this.source=new Qz(a),this.mipmaps=[],this.mapping=g,this.channel=0,this.wrapS=w,this.wrapT=x,this.magFilter=E,this.minFilter=P,this.anisotropy=h,this.format=O,this.internalFormat=null,this.type=G,this.offset=new Lt(0,0),this.repeat=new Lt(1,1),this.center=new Lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=X,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(a=null){this.source.data=a}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(a){return this.name=a.name,this.source=a.source,this.mipmaps=a.mipmaps.slice(0),this.mapping=a.mapping,this.channel=a.channel,this.wrapS=a.wrapS,this.wrapT=a.wrapT,this.magFilter=a.magFilter,this.minFilter=a.minFilter,this.anisotropy=a.anisotropy,this.format=a.format,this.internalFormat=a.internalFormat,this.type=a.type,this.offset.copy(a.offset),this.repeat.copy(a.repeat),this.center.copy(a.center),this.rotation=a.rotation,this.matrixAutoUpdate=a.matrixAutoUpdate,this.matrix.copy(a.matrix),this.generateMipmaps=a.generateMipmaps,this.premultiplyAlpha=a.premultiplyAlpha,this.flipY=a.flipY,this.unpackAlignment=a.unpackAlignment,this.colorSpace=a.colorSpace,this.userData=JSON.parse(JSON.stringify(a.userData)),this.needsUpdate=!0,this}toJSON(a){const g=a===void 0||typeof a=="string";if(!g&&a.textures[this.uuid]!==void 0)return a.textures[this.uuid];const w={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(a).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(w.userData=this.userData),g||(a.textures[this.uuid]=w),w}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(a){if(this.mapping!==bz)return a;if(a.applyMatrix3(this.matrix),a.x<0||a.x>1)switch(this.wrapS){case y1:a.x=a.x-Math.floor(a.x);break;case Vr:a.x=a.x<0?0:1;break;case O4:Math.abs(Math.floor(a.x)%2)===1?a.x=Math.ceil(a.x)-a.x:a.x=a.x-Math.floor(a.x);break}if(a.y<0||a.y>1)switch(this.wrapT){case y1:a.y=a.y-Math.floor(a.y);break;case Vr:a.y=a.y<0?0:1;break;case O4:Math.abs(Math.floor(a.y)%2)===1?a.y=Math.ceil(a.y)-a.y:a.y=a.y-Math.floor(a.y);break}return this.flipY&&(a.y=1-a.y),a}set needsUpdate(a){a===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(a){a===!0&&this.pmremVersion++}}Ti.DEFAULT_IMAGE=null;Ti.DEFAULT_MAPPING=bz;Ti.DEFAULT_ANISOTROPY=1;class En{constructor(a=0,g=0,w=0,x=1){En.prototype.isVector4=!0,this.x=a,this.y=g,this.z=w,this.w=x}get width(){return this.z}set width(a){this.z=a}get height(){return this.w}set height(a){this.w=a}set(a,g,w,x){return this.x=a,this.y=g,this.z=w,this.w=x,this}setScalar(a){return this.x=a,this.y=a,this.z=a,this.w=a,this}setX(a){return this.x=a,this}setY(a){return this.y=a,this}setZ(a){return this.z=a,this}setW(a){return this.w=a,this}setComponent(a,g){switch(a){case 0:this.x=g;break;case 1:this.y=g;break;case 2:this.z=g;break;case 3:this.w=g;break;default:throw new Error("index is out of range: "+a)}return this}getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+a)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(a){return this.x=a.x,this.y=a.y,this.z=a.z,this.w=a.w!==void 0?a.w:1,this}add(a){return this.x+=a.x,this.y+=a.y,this.z+=a.z,this.w+=a.w,this}addScalar(a){return this.x+=a,this.y+=a,this.z+=a,this.w+=a,this}addVectors(a,g){return this.x=a.x+g.x,this.y=a.y+g.y,this.z=a.z+g.z,this.w=a.w+g.w,this}addScaledVector(a,g){return this.x+=a.x*g,this.y+=a.y*g,this.z+=a.z*g,this.w+=a.w*g,this}sub(a){return this.x-=a.x,this.y-=a.y,this.z-=a.z,this.w-=a.w,this}subScalar(a){return this.x-=a,this.y-=a,this.z-=a,this.w-=a,this}subVectors(a,g){return this.x=a.x-g.x,this.y=a.y-g.y,this.z=a.z-g.z,this.w=a.w-g.w,this}multiply(a){return this.x*=a.x,this.y*=a.y,this.z*=a.z,this.w*=a.w,this}multiplyScalar(a){return this.x*=a,this.y*=a,this.z*=a,this.w*=a,this}applyMatrix4(a){const g=this.x,w=this.y,x=this.z,E=this.w,P=a.elements;return this.x=P[0]*g+P[4]*w+P[8]*x+P[12]*E,this.y=P[1]*g+P[5]*w+P[9]*x+P[13]*E,this.z=P[2]*g+P[6]*w+P[10]*x+P[14]*E,this.w=P[3]*g+P[7]*w+P[11]*x+P[15]*E,this}divideScalar(a){return this.multiplyScalar(1/a)}setAxisAngleFromQuaternion(a){this.w=2*Math.acos(a.w);const g=Math.sqrt(1-a.w*a.w);return g<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=a.x/g,this.y=a.y/g,this.z=a.z/g),this}setAxisAngleFromRotationMatrix(a){let g,w,x,E;const G=a.elements,h=G[0],X=G[4],Z=G[8],K=G[1],e2=G[5],l2=G[9],p2=G[2],r2=G[6],o2=G[10];if(Math.abs(X-K)<.01&&Math.abs(Z-p2)<.01&&Math.abs(l2-r2)<.01){if(Math.abs(X+K)<.1&&Math.abs(Z+p2)<.1&&Math.abs(l2+r2)<.1&&Math.abs(h+e2+o2-3)<.1)return this.set(1,0,0,0),this;g=Math.PI;const m2=(h+1)/2,k2=(e2+1)/2,j2=(o2+1)/2,b2=(X+K)/4,D2=(Z+p2)/4,N2=(l2+r2)/4;return m2>k2&&m2>j2?m2<.01?(w=0,x=.707106781,E=.707106781):(w=Math.sqrt(m2),x=b2/w,E=D2/w):k2>j2?k2<.01?(w=.707106781,x=0,E=.707106781):(x=Math.sqrt(k2),w=b2/x,E=N2/x):j2<.01?(w=.707106781,x=.707106781,E=0):(E=Math.sqrt(j2),w=D2/E,x=N2/E),this.set(w,x,E,g),this}let v2=Math.sqrt((r2-l2)*(r2-l2)+(Z-p2)*(Z-p2)+(K-X)*(K-X));return Math.abs(v2)<.001&&(v2=1),this.x=(r2-l2)/v2,this.y=(Z-p2)/v2,this.z=(K-X)/v2,this.w=Math.acos((h+e2+o2-1)/2),this}min(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this.z=Math.min(this.z,a.z),this.w=Math.min(this.w,a.w),this}max(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this.z=Math.max(this.z,a.z),this.w=Math.max(this.w,a.w),this}clamp(a,g){return this.x=Math.max(a.x,Math.min(g.x,this.x)),this.y=Math.max(a.y,Math.min(g.y,this.y)),this.z=Math.max(a.z,Math.min(g.z,this.z)),this.w=Math.max(a.w,Math.min(g.w,this.w)),this}clampScalar(a,g){return this.x=Math.max(a,Math.min(g,this.x)),this.y=Math.max(a,Math.min(g,this.y)),this.z=Math.max(a,Math.min(g,this.z)),this.w=Math.max(a,Math.min(g,this.w)),this}clampLength(a,g){const w=this.length();return this.divideScalar(w||1).multiplyScalar(Math.max(a,Math.min(g,w)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(a){return this.normalize().multiplyScalar(a)}lerp(a,g){return this.x+=(a.x-this.x)*g,this.y+=(a.y-this.y)*g,this.z+=(a.z-this.z)*g,this.w+=(a.w-this.w)*g,this}lerpVectors(a,g,w){return this.x=a.x+(g.x-a.x)*w,this.y=a.y+(g.y-a.y)*w,this.z=a.z+(g.z-a.z)*w,this.w=a.w+(g.w-a.w)*w,this}equals(a){return a.x===this.x&&a.y===this.y&&a.z===this.z&&a.w===this.w}fromArray(a,g=0){return this.x=a[g],this.y=a[g+1],this.z=a[g+2],this.w=a[g+3],this}toArray(a=[],g=0){return a[g]=this.x,a[g+1]=this.y,a[g+2]=this.z,a[g+3]=this.w,a}fromBufferAttribute(a,g){return this.x=a.getX(g),this.y=a.getY(g),this.z=a.getZ(g),this.w=a.getW(g),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class p42 extends Ts{constructor(a=1,g=1,w={}){super(),this.isRenderTarget=!0,this.width=a,this.height=g,this.depth=1,this.scissor=new En(0,0,a,g),this.scissorTest=!1,this.viewport=new En(0,0,a,g);const x={width:a,height:g,depth:1};w=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:t0,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},w);const E=new Ti(x,w.mapping,w.wrapS,w.wrapT,w.magFilter,w.minFilter,w.format,w.type,w.anisotropy,w.colorSpace);E.flipY=!1,E.generateMipmaps=w.generateMipmaps,E.internalFormat=w.internalFormat,this.textures=[];const P=w.count;for(let O=0;O<P;O++)this.textures[O]=E.clone(),this.textures[O].isRenderTargetTexture=!0;this.depthBuffer=w.depthBuffer,this.stencilBuffer=w.stencilBuffer,this.resolveDepthBuffer=w.resolveDepthBuffer,this.resolveStencilBuffer=w.resolveStencilBuffer,this.depthTexture=w.depthTexture,this.samples=w.samples}get texture(){return this.textures[0]}set texture(a){this.textures[0]=a}setSize(a,g,w=1){if(this.width!==a||this.height!==g||this.depth!==w){this.width=a,this.height=g,this.depth=w;for(let x=0,E=this.textures.length;x<E;x++)this.textures[x].image.width=a,this.textures[x].image.height=g,this.textures[x].image.depth=w;this.dispose()}this.viewport.set(0,0,a,g),this.scissor.set(0,0,a,g)}clone(){return new this.constructor().copy(this)}copy(a){this.width=a.width,this.height=a.height,this.depth=a.depth,this.scissor.copy(a.scissor),this.scissorTest=a.scissorTest,this.viewport.copy(a.viewport),this.textures.length=0;for(let w=0,x=a.textures.length;w<x;w++)this.textures[w]=a.textures[w].clone(),this.textures[w].isRenderTargetTexture=!0;const g=Object.assign({},a.texture.image);return this.texture.source=new Qz(g),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,a.depthTexture!==null&&(this.depthTexture=a.depthTexture.clone()),this.samples=a.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class X1 extends p42{constructor(a=1,g=1,w={}){super(a,g,w),this.isWebGLRenderTarget=!0}}class Yz extends Ti{constructor(a=null,g=1,w=1,x=1){super(null),this.isDataArrayTexture=!0,this.image={data:a,width:g,height:w,depth:x},this.magFilter=j0,this.minFilter=j0,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class c42 extends Ti{constructor(a=null,g=1,w=1,x=1){super(null),this.isData3DTexture=!0,this.image={data:a,width:g,height:w,depth:x},this.magFilter=j0,this.minFilter=j0,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Xn{constructor(a=0,g=0,w=0,x=1){this.isQuaternion=!0,this._x=a,this._y=g,this._z=w,this._w=x}static slerpFlat(a,g,w,x,E,P,O){let G=w[x+0],h=w[x+1],X=w[x+2],Z=w[x+3];const K=E[P+0],e2=E[P+1],l2=E[P+2],p2=E[P+3];if(O===0){a[g+0]=G,a[g+1]=h,a[g+2]=X,a[g+3]=Z;return}if(O===1){a[g+0]=K,a[g+1]=e2,a[g+2]=l2,a[g+3]=p2;return}if(Z!==p2||G!==K||h!==e2||X!==l2){let r2=1-O;const o2=G*K+h*e2+X*l2+Z*p2,v2=o2>=0?1:-1,m2=1-o2*o2;if(m2>Number.EPSILON){const j2=Math.sqrt(m2),b2=Math.atan2(j2,o2*v2);r2=Math.sin(r2*b2)/j2,O=Math.sin(O*b2)/j2}const k2=O*v2;if(G=G*r2+K*k2,h=h*r2+e2*k2,X=X*r2+l2*k2,Z=Z*r2+p2*k2,r2===1-O){const j2=1/Math.sqrt(G*G+h*h+X*X+Z*Z);G*=j2,h*=j2,X*=j2,Z*=j2}}a[g]=G,a[g+1]=h,a[g+2]=X,a[g+3]=Z}static multiplyQuaternionsFlat(a,g,w,x,E,P){const O=w[x],G=w[x+1],h=w[x+2],X=w[x+3],Z=E[P],K=E[P+1],e2=E[P+2],l2=E[P+3];return a[g]=O*l2+X*Z+G*e2-h*K,a[g+1]=G*l2+X*K+h*Z-O*e2,a[g+2]=h*l2+X*e2+O*K-G*Z,a[g+3]=X*l2-O*Z-G*K-h*e2,a}get x(){return this._x}set x(a){this._x=a,this._onChangeCallback()}get y(){return this._y}set y(a){this._y=a,this._onChangeCallback()}get z(){return this._z}set z(a){this._z=a,this._onChangeCallback()}get w(){return this._w}set w(a){this._w=a,this._onChangeCallback()}set(a,g,w,x){return this._x=a,this._y=g,this._z=w,this._w=x,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(a){return this._x=a.x,this._y=a.y,this._z=a.z,this._w=a.w,this._onChangeCallback(),this}setFromEuler(a,g=!0){const w=a._x,x=a._y,E=a._z,P=a._order,O=Math.cos,G=Math.sin,h=O(w/2),X=O(x/2),Z=O(E/2),K=G(w/2),e2=G(x/2),l2=G(E/2);switch(P){case"XYZ":this._x=K*X*Z+h*e2*l2,this._y=h*e2*Z-K*X*l2,this._z=h*X*l2+K*e2*Z,this._w=h*X*Z-K*e2*l2;break;case"YXZ":this._x=K*X*Z+h*e2*l2,this._y=h*e2*Z-K*X*l2,this._z=h*X*l2-K*e2*Z,this._w=h*X*Z+K*e2*l2;break;case"ZXY":this._x=K*X*Z-h*e2*l2,this._y=h*e2*Z+K*X*l2,this._z=h*X*l2+K*e2*Z,this._w=h*X*Z-K*e2*l2;break;case"ZYX":this._x=K*X*Z-h*e2*l2,this._y=h*e2*Z+K*X*l2,this._z=h*X*l2-K*e2*Z,this._w=h*X*Z+K*e2*l2;break;case"YZX":this._x=K*X*Z+h*e2*l2,this._y=h*e2*Z+K*X*l2,this._z=h*X*l2-K*e2*Z,this._w=h*X*Z-K*e2*l2;break;case"XZY":this._x=K*X*Z-h*e2*l2,this._y=h*e2*Z-K*X*l2,this._z=h*X*l2+K*e2*Z,this._w=h*X*Z+K*e2*l2;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+P)}return g===!0&&this._onChangeCallback(),this}setFromAxisAngle(a,g){const w=g/2,x=Math.sin(w);return this._x=a.x*x,this._y=a.y*x,this._z=a.z*x,this._w=Math.cos(w),this._onChangeCallback(),this}setFromRotationMatrix(a){const g=a.elements,w=g[0],x=g[4],E=g[8],P=g[1],O=g[5],G=g[9],h=g[2],X=g[6],Z=g[10],K=w+O+Z;if(K>0){const e2=.5/Math.sqrt(K+1);this._w=.25/e2,this._x=(X-G)*e2,this._y=(E-h)*e2,this._z=(P-x)*e2}else if(w>O&&w>Z){const e2=2*Math.sqrt(1+w-O-Z);this._w=(X-G)/e2,this._x=.25*e2,this._y=(x+P)/e2,this._z=(E+h)/e2}else if(O>Z){const e2=2*Math.sqrt(1+O-w-Z);this._w=(E-h)/e2,this._x=(x+P)/e2,this._y=.25*e2,this._z=(G+X)/e2}else{const e2=2*Math.sqrt(1+Z-w-O);this._w=(P-x)/e2,this._x=(E+h)/e2,this._y=(G+X)/e2,this._z=.25*e2}return this._onChangeCallback(),this}setFromUnitVectors(a,g){let w=a.dot(g)+1;return w<Number.EPSILON?(w=0,Math.abs(a.x)>Math.abs(a.z)?(this._x=-a.y,this._y=a.x,this._z=0,this._w=w):(this._x=0,this._y=-a.z,this._z=a.y,this._w=w)):(this._x=a.y*g.z-a.z*g.y,this._y=a.z*g.x-a.x*g.z,this._z=a.x*g.y-a.y*g.x,this._w=w),this.normalize()}angleTo(a){return 2*Math.acos(Math.abs(Mi(this.dot(a),-1,1)))}rotateTowards(a,g){const w=this.angleTo(a);if(w===0)return this;const x=Math.min(1,g/w);return this.slerp(a,x),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(a){return this._x*a._x+this._y*a._y+this._z*a._z+this._w*a._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let a=this.length();return a===0?(this._x=0,this._y=0,this._z=0,this._w=1):(a=1/a,this._x=this._x*a,this._y=this._y*a,this._z=this._z*a,this._w=this._w*a),this._onChangeCallback(),this}multiply(a){return this.multiplyQuaternions(this,a)}premultiply(a){return this.multiplyQuaternions(a,this)}multiplyQuaternions(a,g){const w=a._x,x=a._y,E=a._z,P=a._w,O=g._x,G=g._y,h=g._z,X=g._w;return this._x=w*X+P*O+x*h-E*G,this._y=x*X+P*G+E*O-w*h,this._z=E*X+P*h+w*G-x*O,this._w=P*X-w*O-x*G-E*h,this._onChangeCallback(),this}slerp(a,g){if(g===0)return this;if(g===1)return this.copy(a);const w=this._x,x=this._y,E=this._z,P=this._w;let O=P*a._w+w*a._x+x*a._y+E*a._z;if(O<0?(this._w=-a._w,this._x=-a._x,this._y=-a._y,this._z=-a._z,O=-O):this.copy(a),O>=1)return this._w=P,this._x=w,this._y=x,this._z=E,this;const G=1-O*O;if(G<=Number.EPSILON){const e2=1-g;return this._w=e2*P+g*this._w,this._x=e2*w+g*this._x,this._y=e2*x+g*this._y,this._z=e2*E+g*this._z,this.normalize(),this}const h=Math.sqrt(G),X=Math.atan2(h,O),Z=Math.sin((1-g)*X)/h,K=Math.sin(g*X)/h;return this._w=P*Z+this._w*K,this._x=w*Z+this._x*K,this._y=x*Z+this._y*K,this._z=E*Z+this._z*K,this._onChangeCallback(),this}slerpQuaternions(a,g,w){return this.copy(a).slerp(g,w)}random(){const a=2*Math.PI*Math.random(),g=2*Math.PI*Math.random(),w=Math.random(),x=Math.sqrt(1-w),E=Math.sqrt(w);return this.set(x*Math.sin(a),x*Math.cos(a),E*Math.sin(g),E*Math.cos(g))}equals(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._w===this._w}fromArray(a,g=0){return this._x=a[g],this._y=a[g+1],this._z=a[g+2],this._w=a[g+3],this._onChangeCallback(),this}toArray(a=[],g=0){return a[g]=this._x,a[g+1]=this._y,a[g+2]=this._z,a[g+3]=this._w,a}fromBufferAttribute(a,g){return this._x=a.getX(g),this._y=a.getY(g),this._z=a.getZ(g),this._w=a.getW(g),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(a){return this._onChangeCallback=a,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E2{constructor(a=0,g=0,w=0){E2.prototype.isVector3=!0,this.x=a,this.y=g,this.z=w}set(a,g,w){return w===void 0&&(w=this.z),this.x=a,this.y=g,this.z=w,this}setScalar(a){return this.x=a,this.y=a,this.z=a,this}setX(a){return this.x=a,this}setY(a){return this.y=a,this}setZ(a){return this.z=a,this}setComponent(a,g){switch(a){case 0:this.x=g;break;case 1:this.y=g;break;case 2:this.z=g;break;default:throw new Error("index is out of range: "+a)}return this}getComponent(a){switch(a){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+a)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(a){return this.x=a.x,this.y=a.y,this.z=a.z,this}add(a){return this.x+=a.x,this.y+=a.y,this.z+=a.z,this}addScalar(a){return this.x+=a,this.y+=a,this.z+=a,this}addVectors(a,g){return this.x=a.x+g.x,this.y=a.y+g.y,this.z=a.z+g.z,this}addScaledVector(a,g){return this.x+=a.x*g,this.y+=a.y*g,this.z+=a.z*g,this}sub(a){return this.x-=a.x,this.y-=a.y,this.z-=a.z,this}subScalar(a){return this.x-=a,this.y-=a,this.z-=a,this}subVectors(a,g){return this.x=a.x-g.x,this.y=a.y-g.y,this.z=a.z-g.z,this}multiply(a){return this.x*=a.x,this.y*=a.y,this.z*=a.z,this}multiplyScalar(a){return this.x*=a,this.y*=a,this.z*=a,this}multiplyVectors(a,g){return this.x=a.x*g.x,this.y=a.y*g.y,this.z=a.z*g.z,this}applyEuler(a){return this.applyQuaternion(lV.setFromEuler(a))}applyAxisAngle(a,g){return this.applyQuaternion(lV.setFromAxisAngle(a,g))}applyMatrix3(a){const g=this.x,w=this.y,x=this.z,E=a.elements;return this.x=E[0]*g+E[3]*w+E[6]*x,this.y=E[1]*g+E[4]*w+E[7]*x,this.z=E[2]*g+E[5]*w+E[8]*x,this}applyNormalMatrix(a){return this.applyMatrix3(a).normalize()}applyMatrix4(a){const g=this.x,w=this.y,x=this.z,E=a.elements,P=1/(E[3]*g+E[7]*w+E[11]*x+E[15]);return this.x=(E[0]*g+E[4]*w+E[8]*x+E[12])*P,this.y=(E[1]*g+E[5]*w+E[9]*x+E[13])*P,this.z=(E[2]*g+E[6]*w+E[10]*x+E[14])*P,this}applyQuaternion(a){const g=this.x,w=this.y,x=this.z,E=a.x,P=a.y,O=a.z,G=a.w,h=2*(P*x-O*w),X=2*(O*g-E*x),Z=2*(E*w-P*g);return this.x=g+G*h+P*Z-O*X,this.y=w+G*X+O*h-E*Z,this.z=x+G*Z+E*X-P*h,this}project(a){return this.applyMatrix4(a.matrixWorldInverse).applyMatrix4(a.projectionMatrix)}unproject(a){return this.applyMatrix4(a.projectionMatrixInverse).applyMatrix4(a.matrixWorld)}transformDirection(a){const g=this.x,w=this.y,x=this.z,E=a.elements;return this.x=E[0]*g+E[4]*w+E[8]*x,this.y=E[1]*g+E[5]*w+E[9]*x,this.z=E[2]*g+E[6]*w+E[10]*x,this.normalize()}divide(a){return this.x/=a.x,this.y/=a.y,this.z/=a.z,this}divideScalar(a){return this.multiplyScalar(1/a)}min(a){return this.x=Math.min(this.x,a.x),this.y=Math.min(this.y,a.y),this.z=Math.min(this.z,a.z),this}max(a){return this.x=Math.max(this.x,a.x),this.y=Math.max(this.y,a.y),this.z=Math.max(this.z,a.z),this}clamp(a,g){return this.x=Math.max(a.x,Math.min(g.x,this.x)),this.y=Math.max(a.y,Math.min(g.y,this.y)),this.z=Math.max(a.z,Math.min(g.z,this.z)),this}clampScalar(a,g){return this.x=Math.max(a,Math.min(g,this.x)),this.y=Math.max(a,Math.min(g,this.y)),this.z=Math.max(a,Math.min(g,this.z)),this}clampLength(a,g){const w=this.length();return this.divideScalar(w||1).multiplyScalar(Math.max(a,Math.min(g,w)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(a){return this.x*a.x+this.y*a.y+this.z*a.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(a){return this.normalize().multiplyScalar(a)}lerp(a,g){return this.x+=(a.x-this.x)*g,this.y+=(a.y-this.y)*g,this.z+=(a.z-this.z)*g,this}lerpVectors(a,g,w){return this.x=a.x+(g.x-a.x)*w,this.y=a.y+(g.y-a.y)*w,this.z=a.z+(g.z-a.z)*w,this}cross(a){return this.crossVectors(this,a)}crossVectors(a,g){const w=a.x,x=a.y,E=a.z,P=g.x,O=g.y,G=g.z;return this.x=x*G-E*O,this.y=E*P-w*G,this.z=w*O-x*P,this}projectOnVector(a){const g=a.lengthSq();if(g===0)return this.set(0,0,0);const w=a.dot(this)/g;return this.copy(a).multiplyScalar(w)}projectOnPlane(a){return La.copy(this).projectOnVector(a),this.sub(La)}reflect(a){return this.sub(La.copy(a).multiplyScalar(2*this.dot(a)))}angleTo(a){const g=Math.sqrt(this.lengthSq()*a.lengthSq());if(g===0)return Math.PI/2;const w=this.dot(a)/g;return Math.acos(Mi(w,-1,1))}distanceTo(a){return Math.sqrt(this.distanceToSquared(a))}distanceToSquared(a){const g=this.x-a.x,w=this.y-a.y,x=this.z-a.z;return g*g+w*w+x*x}manhattanDistanceTo(a){return Math.abs(this.x-a.x)+Math.abs(this.y-a.y)+Math.abs(this.z-a.z)}setFromSpherical(a){return this.setFromSphericalCoords(a.radius,a.phi,a.theta)}setFromSphericalCoords(a,g,w){const x=Math.sin(g)*a;return this.x=x*Math.sin(w),this.y=Math.cos(g)*a,this.z=x*Math.cos(w),this}setFromCylindrical(a){return this.setFromCylindricalCoords(a.radius,a.theta,a.y)}setFromCylindricalCoords(a,g,w){return this.x=a*Math.sin(g),this.y=w,this.z=a*Math.cos(g),this}setFromMatrixPosition(a){const g=a.elements;return this.x=g[12],this.y=g[13],this.z=g[14],this}setFromMatrixScale(a){const g=this.setFromMatrixColumn(a,0).length(),w=this.setFromMatrixColumn(a,1).length(),x=this.setFromMatrixColumn(a,2).length();return this.x=g,this.y=w,this.z=x,this}setFromMatrixColumn(a,g){return this.fromArray(a.elements,g*4)}setFromMatrix3Column(a,g){return this.fromArray(a.elements,g*3)}setFromEuler(a){return this.x=a._x,this.y=a._y,this.z=a._z,this}setFromColor(a){return this.x=a.r,this.y=a.g,this.z=a.b,this}equals(a){return a.x===this.x&&a.y===this.y&&a.z===this.z}fromArray(a,g=0){return this.x=a[g],this.y=a[g+1],this.z=a[g+2],this}toArray(a=[],g=0){return a[g]=this.x,a[g+1]=this.y,a[g+2]=this.z,a}fromBufferAttribute(a,g){return this.x=a.getX(g),this.y=a.getY(g),this.z=a.getZ(g),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const a=Math.random()*Math.PI*2,g=Math.random()*2-1,w=Math.sqrt(1-g*g);return this.x=w*Math.cos(a),this.y=g,this.z=w*Math.sin(a),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const La=new E2,lV=new Xn;class Ho{constructor(a=new E2(1/0,1/0,1/0),g=new E2(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=a,this.max=g}set(a,g){return this.min.copy(a),this.max.copy(g),this}setFromArray(a){this.makeEmpty();for(let g=0,w=a.length;g<w;g+=3)this.expandByPoint(fo.fromArray(a,g));return this}setFromBufferAttribute(a){this.makeEmpty();for(let g=0,w=a.count;g<w;g++)this.expandByPoint(fo.fromBufferAttribute(a,g));return this}setFromPoints(a){this.makeEmpty();for(let g=0,w=a.length;g<w;g++)this.expandByPoint(a[g]);return this}setFromCenterAndSize(a,g){const w=fo.copy(g).multiplyScalar(.5);return this.min.copy(a).sub(w),this.max.copy(a).add(w),this}setFromObject(a,g=!1){return this.makeEmpty(),this.expandByObject(a,g)}clone(){return new this.constructor().copy(this)}copy(a){return this.min.copy(a.min),this.max.copy(a.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(a){return this.isEmpty()?a.set(0,0,0):a.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(a){return this.isEmpty()?a.set(0,0,0):a.subVectors(this.max,this.min)}expandByPoint(a){return this.min.min(a),this.max.max(a),this}expandByVector(a){return this.min.sub(a),this.max.add(a),this}expandByScalar(a){return this.min.addScalar(-a),this.max.addScalar(a),this}expandByObject(a,g=!1){a.updateWorldMatrix(!1,!1);const w=a.geometry;if(w!==void 0){const E=w.getAttribute("position");if(g===!0&&E!==void 0&&a.isInstancedMesh!==!0)for(let P=0,O=E.count;P<O;P++)a.isMesh===!0?a.getVertexPosition(P,fo):fo.fromBufferAttribute(E,P),fo.applyMatrix4(a.matrixWorld),this.expandByPoint(fo);else a.boundingBox!==void 0?(a.boundingBox===null&&a.computeBoundingBox(),qc.copy(a.boundingBox)):(w.boundingBox===null&&w.computeBoundingBox(),qc.copy(w.boundingBox)),qc.applyMatrix4(a.matrixWorld),this.union(qc)}const x=a.children;for(let E=0,P=x.length;E<P;E++)this.expandByObject(x[E],g);return this}containsPoint(a){return!(a.x<this.min.x||a.x>this.max.x||a.y<this.min.y||a.y>this.max.y||a.z<this.min.z||a.z>this.max.z)}containsBox(a){return this.min.x<=a.min.x&&a.max.x<=this.max.x&&this.min.y<=a.min.y&&a.max.y<=this.max.y&&this.min.z<=a.min.z&&a.max.z<=this.max.z}getParameter(a,g){return g.set((a.x-this.min.x)/(this.max.x-this.min.x),(a.y-this.min.y)/(this.max.y-this.min.y),(a.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(a){return!(a.max.x<this.min.x||a.min.x>this.max.x||a.max.y<this.min.y||a.min.y>this.max.y||a.max.z<this.min.z||a.min.z>this.max.z)}intersectsSphere(a){return this.clampPoint(a.center,fo),fo.distanceToSquared(a.center)<=a.radius*a.radius}intersectsPlane(a){let g,w;return a.normal.x>0?(g=a.normal.x*this.min.x,w=a.normal.x*this.max.x):(g=a.normal.x*this.max.x,w=a.normal.x*this.min.x),a.normal.y>0?(g+=a.normal.y*this.min.y,w+=a.normal.y*this.max.y):(g+=a.normal.y*this.max.y,w+=a.normal.y*this.min.y),a.normal.z>0?(g+=a.normal.z*this.min.z,w+=a.normal.z*this.max.z):(g+=a.normal.z*this.max.z,w+=a.normal.z*this.min.z),g<=-a.constant&&w>=-a.constant}intersectsTriangle(a){if(this.isEmpty())return!1;this.getCenter(Cf),Jc.subVectors(this.max,Cf),Fl.subVectors(a.a,Cf),Ol.subVectors(a.b,Cf),jl.subVectors(a.c,Cf),i1.subVectors(Ol,Fl),r1.subVectors(jl,Ol),j1.subVectors(Fl,jl);let g=[0,-i1.z,i1.y,0,-r1.z,r1.y,0,-j1.z,j1.y,i1.z,0,-i1.x,r1.z,0,-r1.x,j1.z,0,-j1.x,-i1.y,i1.x,0,-r1.y,r1.x,0,-j1.y,j1.x,0];return!Fa(g,Fl,Ol,jl,Jc)||(g=[1,0,0,0,1,0,0,0,1],!Fa(g,Fl,Ol,jl,Jc))?!1:(Kc.crossVectors(i1,r1),g=[Kc.x,Kc.y,Kc.z],Fa(g,Fl,Ol,jl,Jc))}clampPoint(a,g){return g.copy(a).clamp(this.min,this.max)}distanceToPoint(a){return this.clampPoint(a,fo).distanceTo(a)}getBoundingSphere(a){return this.isEmpty()?a.makeEmpty():(this.getCenter(a.center),a.radius=this.getSize(fo).length()*.5),a}intersect(a){return this.min.max(a.min),this.max.min(a.max),this.isEmpty()&&this.makeEmpty(),this}union(a){return this.min.min(a.min),this.max.max(a.max),this}applyMatrix4(a){return this.isEmpty()?this:(ms[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(a),ms[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(a),ms[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(a),ms[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(a),ms[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(a),ms[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(a),ms[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(a),ms[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(a),this.setFromPoints(ms),this)}translate(a){return this.min.add(a),this.max.add(a),this}equals(a){return a.min.equals(this.min)&&a.max.equals(this.max)}}const ms=[new E2,new E2,new E2,new E2,new E2,new E2,new E2,new E2],fo=new E2,qc=new Ho,Fl=new E2,Ol=new E2,jl=new E2,i1=new E2,r1=new E2,j1=new E2,Cf=new E2,Jc=new E2,Kc=new E2,N1=new E2;function Fa(D,a,g,w,x){for(let E=0,P=D.length-3;E<=P;E+=3){N1.fromArray(D,E);const O=x.x*Math.abs(N1.x)+x.y*Math.abs(N1.y)+x.z*Math.abs(N1.z),G=a.dot(N1),h=g.dot(N1),X=w.dot(N1);if(Math.max(-Math.max(G,h,X),Math.min(G,h,X))>O)return!1}return!0}const _42=new Ho,Mf=new E2,Oa=new E2;class Vo{constructor(a=new E2,g=-1){this.isSphere=!0,this.center=a,this.radius=g}set(a,g){return this.center.copy(a),this.radius=g,this}setFromPoints(a,g){const w=this.center;g!==void 0?w.copy(g):_42.setFromPoints(a).getCenter(w);let x=0;for(let E=0,P=a.length;E<P;E++)x=Math.max(x,w.distanceToSquared(a[E]));return this.radius=Math.sqrt(x),this}copy(a){return this.center.copy(a.center),this.radius=a.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(a){return a.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(a){return a.distanceTo(this.center)-this.radius}intersectsSphere(a){const g=this.radius+a.radius;return a.center.distanceToSquared(this.center)<=g*g}intersectsBox(a){return a.intersectsSphere(this)}intersectsPlane(a){return Math.abs(a.distanceToPoint(this.center))<=this.radius}clampPoint(a,g){const w=this.center.distanceToSquared(a);return g.copy(a),w>this.radius*this.radius&&(g.sub(this.center).normalize(),g.multiplyScalar(this.radius).add(this.center)),g}getBoundingBox(a){return this.isEmpty()?(a.makeEmpty(),a):(a.set(this.center,this.center),a.expandByScalar(this.radius),a)}applyMatrix4(a){return this.center.applyMatrix4(a),this.radius=this.radius*a.getMaxScaleOnAxis(),this}translate(a){return this.center.add(a),this}expandByPoint(a){if(this.isEmpty())return this.center.copy(a),this.radius=0,this;Mf.subVectors(a,this.center);const g=Mf.lengthSq();if(g>this.radius*this.radius){const w=Math.sqrt(g),x=(w-this.radius)*.5;this.center.addScaledVector(Mf,x/w),this.radius+=x}return this}union(a){return a.isEmpty()?this:this.isEmpty()?(this.copy(a),this):(this.center.equals(a.center)===!0?this.radius=Math.max(this.radius,a.radius):(Oa.subVectors(a.center,this.center).setLength(a.radius),this.expandByPoint(Mf.copy(a.center).add(Oa)),this.expandByPoint(Mf.copy(a.center).sub(Oa))),this)}equals(a){return a.center.equals(this.center)&&a.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ds=new E2,ja=new E2,$c=new E2,o1=new E2,Na=new E2,t4=new E2,Ua=new E2;class ep{constructor(a=new E2,g=new E2(0,0,-1)){this.origin=a,this.direction=g}set(a,g){return this.origin.copy(a),this.direction.copy(g),this}copy(a){return this.origin.copy(a.origin),this.direction.copy(a.direction),this}at(a,g){return g.copy(this.origin).addScaledVector(this.direction,a)}lookAt(a){return this.direction.copy(a).sub(this.origin).normalize(),this}recast(a){return this.origin.copy(this.at(a,ds)),this}closestPointToPoint(a,g){g.subVectors(a,this.origin);const w=g.dot(this.direction);return w<0?g.copy(this.origin):g.copy(this.origin).addScaledVector(this.direction,w)}distanceToPoint(a){return Math.sqrt(this.distanceSqToPoint(a))}distanceSqToPoint(a){const g=ds.subVectors(a,this.origin).dot(this.direction);return g<0?this.origin.distanceToSquared(a):(ds.copy(this.origin).addScaledVector(this.direction,g),ds.distanceToSquared(a))}distanceSqToSegment(a,g,w,x){ja.copy(a).add(g).multiplyScalar(.5),$c.copy(g).sub(a).normalize(),o1.copy(this.origin).sub(ja);const E=a.distanceTo(g)*.5,P=-this.direction.dot($c),O=o1.dot(this.direction),G=-o1.dot($c),h=o1.lengthSq(),X=Math.abs(1-P*P);let Z,K,e2,l2;if(X>0)if(Z=P*G-O,K=P*O-G,l2=E*X,Z>=0)if(K>=-l2)if(K<=l2){const p2=1/X;Z*=p2,K*=p2,e2=Z*(Z+P*K+2*O)+K*(P*Z+K+2*G)+h}else K=E,Z=Math.max(0,-(P*K+O)),e2=-Z*Z+K*(K+2*G)+h;else K=-E,Z=Math.max(0,-(P*K+O)),e2=-Z*Z+K*(K+2*G)+h;else K<=-l2?(Z=Math.max(0,-(-P*E+O)),K=Z>0?-E:Math.min(Math.max(-E,-G),E),e2=-Z*Z+K*(K+2*G)+h):K<=l2?(Z=0,K=Math.min(Math.max(-E,-G),E),e2=K*(K+2*G)+h):(Z=Math.max(0,-(P*E+O)),K=Z>0?E:Math.min(Math.max(-E,-G),E),e2=-Z*Z+K*(K+2*G)+h);else K=P>0?-E:E,Z=Math.max(0,-(P*K+O)),e2=-Z*Z+K*(K+2*G)+h;return w&&w.copy(this.origin).addScaledVector(this.direction,Z),x&&x.copy(ja).addScaledVector($c,K),e2}intersectSphere(a,g){ds.subVectors(a.center,this.origin);const w=ds.dot(this.direction),x=ds.dot(ds)-w*w,E=a.radius*a.radius;if(x>E)return null;const P=Math.sqrt(E-x),O=w-P,G=w+P;return G<0?null:O<0?this.at(G,g):this.at(O,g)}intersectsSphere(a){return this.distanceSqToPoint(a.center)<=a.radius*a.radius}distanceToPlane(a){const g=a.normal.dot(this.direction);if(g===0)return a.distanceToPoint(this.origin)===0?0:null;const w=-(this.origin.dot(a.normal)+a.constant)/g;return w>=0?w:null}intersectPlane(a,g){const w=this.distanceToPlane(a);return w===null?null:this.at(w,g)}intersectsPlane(a){const g=a.distanceToPoint(this.origin);return g===0||a.normal.dot(this.direction)*g<0}intersectBox(a,g){let w,x,E,P,O,G;const h=1/this.direction.x,X=1/this.direction.y,Z=1/this.direction.z,K=this.origin;return h>=0?(w=(a.min.x-K.x)*h,x=(a.max.x-K.x)*h):(w=(a.max.x-K.x)*h,x=(a.min.x-K.x)*h),X>=0?(E=(a.min.y-K.y)*X,P=(a.max.y-K.y)*X):(E=(a.max.y-K.y)*X,P=(a.min.y-K.y)*X),w>P||E>x||((E>w||isNaN(w))&&(w=E),(P<x||isNaN(x))&&(x=P),Z>=0?(O=(a.min.z-K.z)*Z,G=(a.max.z-K.z)*Z):(O=(a.max.z-K.z)*Z,G=(a.min.z-K.z)*Z),w>G||O>x)||((O>w||w!==w)&&(w=O),(G<x||x!==x)&&(x=G),x<0)?null:this.at(w>=0?w:x,g)}intersectsBox(a){return this.intersectBox(a,ds)!==null}intersectTriangle(a,g,w,x,E){Na.subVectors(g,a),t4.subVectors(w,a),Ua.crossVectors(Na,t4);let P=this.direction.dot(Ua),O;if(P>0){if(x)return null;O=1}else if(P<0)O=-1,P=-P;else return null;o1.subVectors(this.origin,a);const G=O*this.direction.dot(t4.crossVectors(o1,t4));if(G<0)return null;const h=O*this.direction.dot(Na.cross(o1));if(h<0||G+h>P)return null;const X=-O*o1.dot(Ua);return X<0?null:this.at(X/P,E)}applyMatrix4(a){return this.origin.applyMatrix4(a),this.direction.transformDirection(a),this}equals(a){return a.origin.equals(this.origin)&&a.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class te{constructor(a,g,w,x,E,P,O,G,h,X,Z,K,e2,l2,p2,r2){te.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],a!==void 0&&this.set(a,g,w,x,E,P,O,G,h,X,Z,K,e2,l2,p2,r2)}set(a,g,w,x,E,P,O,G,h,X,Z,K,e2,l2,p2,r2){const o2=this.elements;return o2[0]=a,o2[4]=g,o2[8]=w,o2[12]=x,o2[1]=E,o2[5]=P,o2[9]=O,o2[13]=G,o2[2]=h,o2[6]=X,o2[10]=Z,o2[14]=K,o2[3]=e2,o2[7]=l2,o2[11]=p2,o2[15]=r2,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new te().fromArray(this.elements)}copy(a){const g=this.elements,w=a.elements;return g[0]=w[0],g[1]=w[1],g[2]=w[2],g[3]=w[3],g[4]=w[4],g[5]=w[5],g[6]=w[6],g[7]=w[7],g[8]=w[8],g[9]=w[9],g[10]=w[10],g[11]=w[11],g[12]=w[12],g[13]=w[13],g[14]=w[14],g[15]=w[15],this}copyPosition(a){const g=this.elements,w=a.elements;return g[12]=w[12],g[13]=w[13],g[14]=w[14],this}setFromMatrix3(a){const g=a.elements;return this.set(g[0],g[3],g[6],0,g[1],g[4],g[7],0,g[2],g[5],g[8],0,0,0,0,1),this}extractBasis(a,g,w){return a.setFromMatrixColumn(this,0),g.setFromMatrixColumn(this,1),w.setFromMatrixColumn(this,2),this}makeBasis(a,g,w){return this.set(a.x,g.x,w.x,0,a.y,g.y,w.y,0,a.z,g.z,w.z,0,0,0,0,1),this}extractRotation(a){const g=this.elements,w=a.elements,x=1/Nl.setFromMatrixColumn(a,0).length(),E=1/Nl.setFromMatrixColumn(a,1).length(),P=1/Nl.setFromMatrixColumn(a,2).length();return g[0]=w[0]*x,g[1]=w[1]*x,g[2]=w[2]*x,g[3]=0,g[4]=w[4]*E,g[5]=w[5]*E,g[6]=w[6]*E,g[7]=0,g[8]=w[8]*P,g[9]=w[9]*P,g[10]=w[10]*P,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,this}makeRotationFromEuler(a){const g=this.elements,w=a.x,x=a.y,E=a.z,P=Math.cos(w),O=Math.sin(w),G=Math.cos(x),h=Math.sin(x),X=Math.cos(E),Z=Math.sin(E);if(a.order==="XYZ"){const K=P*X,e2=P*Z,l2=O*X,p2=O*Z;g[0]=G*X,g[4]=-G*Z,g[8]=h,g[1]=e2+l2*h,g[5]=K-p2*h,g[9]=-O*G,g[2]=p2-K*h,g[6]=l2+e2*h,g[10]=P*G}else if(a.order==="YXZ"){const K=G*X,e2=G*Z,l2=h*X,p2=h*Z;g[0]=K+p2*O,g[4]=l2*O-e2,g[8]=P*h,g[1]=P*Z,g[5]=P*X,g[9]=-O,g[2]=e2*O-l2,g[6]=p2+K*O,g[10]=P*G}else if(a.order==="ZXY"){const K=G*X,e2=G*Z,l2=h*X,p2=h*Z;g[0]=K-p2*O,g[4]=-P*Z,g[8]=l2+e2*O,g[1]=e2+l2*O,g[5]=P*X,g[9]=p2-K*O,g[2]=-P*h,g[6]=O,g[10]=P*G}else if(a.order==="ZYX"){const K=P*X,e2=P*Z,l2=O*X,p2=O*Z;g[0]=G*X,g[4]=l2*h-e2,g[8]=K*h+p2,g[1]=G*Z,g[5]=p2*h+K,g[9]=e2*h-l2,g[2]=-h,g[6]=O*G,g[10]=P*G}else if(a.order==="YZX"){const K=P*G,e2=P*h,l2=O*G,p2=O*h;g[0]=G*X,g[4]=p2-K*Z,g[8]=l2*Z+e2,g[1]=Z,g[5]=P*X,g[9]=-O*X,g[2]=-h*X,g[6]=e2*Z+l2,g[10]=K-p2*Z}else if(a.order==="XZY"){const K=P*G,e2=P*h,l2=O*G,p2=O*h;g[0]=G*X,g[4]=-Z,g[8]=h*X,g[1]=K*Z+p2,g[5]=P*X,g[9]=e2*Z-l2,g[2]=l2*Z-e2,g[6]=O*X,g[10]=p2*Z+K}return g[3]=0,g[7]=0,g[11]=0,g[12]=0,g[13]=0,g[14]=0,g[15]=1,this}makeRotationFromQuaternion(a){return this.compose(a42,a,h42)}lookAt(a,g,w){const x=this.elements;return gr.subVectors(a,g),gr.lengthSq()===0&&(gr.z=1),gr.normalize(),s1.crossVectors(w,gr),s1.lengthSq()===0&&(Math.abs(w.z)===1?gr.x+=1e-4:gr.z+=1e-4,gr.normalize(),s1.crossVectors(w,gr)),s1.normalize(),e4.crossVectors(gr,s1),x[0]=s1.x,x[4]=e4.x,x[8]=gr.x,x[1]=s1.y,x[5]=e4.y,x[9]=gr.y,x[2]=s1.z,x[6]=e4.z,x[10]=gr.z,this}multiply(a){return this.multiplyMatrices(this,a)}premultiply(a){return this.multiplyMatrices(a,this)}multiplyMatrices(a,g){const w=a.elements,x=g.elements,E=this.elements,P=w[0],O=w[4],G=w[8],h=w[12],X=w[1],Z=w[5],K=w[9],e2=w[13],l2=w[2],p2=w[6],r2=w[10],o2=w[14],v2=w[3],m2=w[7],k2=w[11],j2=w[15],b2=x[0],D2=x[4],N2=x[8],B2=x[12],g2=x[1],W2=x[5],nt=x[9],U2=x[13],q2=x[2],ft=x[6],ut=x[10],Et=x[14],it=x[3],At=x[7],yt=x[11],re=x[15];return E[0]=P*b2+O*g2+G*q2+h*it,E[4]=P*D2+O*W2+G*ft+h*At,E[8]=P*N2+O*nt+G*ut+h*yt,E[12]=P*B2+O*U2+G*Et+h*re,E[1]=X*b2+Z*g2+K*q2+e2*it,E[5]=X*D2+Z*W2+K*ft+e2*At,E[9]=X*N2+Z*nt+K*ut+e2*yt,E[13]=X*B2+Z*U2+K*Et+e2*re,E[2]=l2*b2+p2*g2+r2*q2+o2*it,E[6]=l2*D2+p2*W2+r2*ft+o2*At,E[10]=l2*N2+p2*nt+r2*ut+o2*yt,E[14]=l2*B2+p2*U2+r2*Et+o2*re,E[3]=v2*b2+m2*g2+k2*q2+j2*it,E[7]=v2*D2+m2*W2+k2*ft+j2*At,E[11]=v2*N2+m2*nt+k2*ut+j2*yt,E[15]=v2*B2+m2*U2+k2*Et+j2*re,this}multiplyScalar(a){const g=this.elements;return g[0]*=a,g[4]*=a,g[8]*=a,g[12]*=a,g[1]*=a,g[5]*=a,g[9]*=a,g[13]*=a,g[2]*=a,g[6]*=a,g[10]*=a,g[14]*=a,g[3]*=a,g[7]*=a,g[11]*=a,g[15]*=a,this}determinant(){const a=this.elements,g=a[0],w=a[4],x=a[8],E=a[12],P=a[1],O=a[5],G=a[9],h=a[13],X=a[2],Z=a[6],K=a[10],e2=a[14],l2=a[3],p2=a[7],r2=a[11],o2=a[15];return l2*(+E*G*Z-x*h*Z-E*O*K+w*h*K+x*O*e2-w*G*e2)+p2*(+g*G*e2-g*h*K+E*P*K-x*P*e2+x*h*X-E*G*X)+r2*(+g*h*Z-g*O*e2-E*P*Z+w*P*e2+E*O*X-w*h*X)+o2*(-x*O*X-g*G*Z+g*O*K+x*P*Z-w*P*K+w*G*X)}transpose(){const a=this.elements;let g;return g=a[1],a[1]=a[4],a[4]=g,g=a[2],a[2]=a[8],a[8]=g,g=a[6],a[6]=a[9],a[9]=g,g=a[3],a[3]=a[12],a[12]=g,g=a[7],a[7]=a[13],a[13]=g,g=a[11],a[11]=a[14],a[14]=g,this}setPosition(a,g,w){const x=this.elements;return a.isVector3?(x[12]=a.x,x[13]=a.y,x[14]=a.z):(x[12]=a,x[13]=g,x[14]=w),this}invert(){const a=this.elements,g=a[0],w=a[1],x=a[2],E=a[3],P=a[4],O=a[5],G=a[6],h=a[7],X=a[8],Z=a[9],K=a[10],e2=a[11],l2=a[12],p2=a[13],r2=a[14],o2=a[15],v2=Z*r2*h-p2*K*h+p2*G*e2-O*r2*e2-Z*G*o2+O*K*o2,m2=l2*K*h-X*r2*h-l2*G*e2+P*r2*e2+X*G*o2-P*K*o2,k2=X*p2*h-l2*Z*h+l2*O*e2-P*p2*e2-X*O*o2+P*Z*o2,j2=l2*Z*G-X*p2*G-l2*O*K+P*p2*K+X*O*r2-P*Z*r2,b2=g*v2+w*m2+x*k2+E*j2;if(b2===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const D2=1/b2;return a[0]=v2*D2,a[1]=(p2*K*E-Z*r2*E-p2*x*e2+w*r2*e2+Z*x*o2-w*K*o2)*D2,a[2]=(O*r2*E-p2*G*E+p2*x*h-w*r2*h-O*x*o2+w*G*o2)*D2,a[3]=(Z*G*E-O*K*E-Z*x*h+w*K*h+O*x*e2-w*G*e2)*D2,a[4]=m2*D2,a[5]=(X*r2*E-l2*K*E+l2*x*e2-g*r2*e2-X*x*o2+g*K*o2)*D2,a[6]=(l2*G*E-P*r2*E-l2*x*h+g*r2*h+P*x*o2-g*G*o2)*D2,a[7]=(P*K*E-X*G*E+X*x*h-g*K*h-P*x*e2+g*G*e2)*D2,a[8]=k2*D2,a[9]=(l2*Z*E-X*p2*E-l2*w*e2+g*p2*e2+X*w*o2-g*Z*o2)*D2,a[10]=(P*p2*E-l2*O*E+l2*w*h-g*p2*h-P*w*o2+g*O*o2)*D2,a[11]=(X*O*E-P*Z*E-X*w*h+g*Z*h+P*w*e2-g*O*e2)*D2,a[12]=j2*D2,a[13]=(X*p2*x-l2*Z*x+l2*w*K-g*p2*K-X*w*r2+g*Z*r2)*D2,a[14]=(l2*O*x-P*p2*x-l2*w*G+g*p2*G+P*w*r2-g*O*r2)*D2,a[15]=(P*Z*x-X*O*x+X*w*G-g*Z*G-P*w*K+g*O*K)*D2,this}scale(a){const g=this.elements,w=a.x,x=a.y,E=a.z;return g[0]*=w,g[4]*=x,g[8]*=E,g[1]*=w,g[5]*=x,g[9]*=E,g[2]*=w,g[6]*=x,g[10]*=E,g[3]*=w,g[7]*=x,g[11]*=E,this}getMaxScaleOnAxis(){const a=this.elements,g=a[0]*a[0]+a[1]*a[1]+a[2]*a[2],w=a[4]*a[4]+a[5]*a[5]+a[6]*a[6],x=a[8]*a[8]+a[9]*a[9]+a[10]*a[10];return Math.sqrt(Math.max(g,w,x))}makeTranslation(a,g,w){return a.isVector3?this.set(1,0,0,a.x,0,1,0,a.y,0,0,1,a.z,0,0,0,1):this.set(1,0,0,a,0,1,0,g,0,0,1,w,0,0,0,1),this}makeRotationX(a){const g=Math.cos(a),w=Math.sin(a);return this.set(1,0,0,0,0,g,-w,0,0,w,g,0,0,0,0,1),this}makeRotationY(a){const g=Math.cos(a),w=Math.sin(a);return this.set(g,0,w,0,0,1,0,0,-w,0,g,0,0,0,0,1),this}makeRotationZ(a){const g=Math.cos(a),w=Math.sin(a);return this.set(g,-w,0,0,w,g,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(a,g){const w=Math.cos(g),x=Math.sin(g),E=1-w,P=a.x,O=a.y,G=a.z,h=E*P,X=E*O;return this.set(h*P+w,h*O-x*G,h*G+x*O,0,h*O+x*G,X*O+w,X*G-x*P,0,h*G-x*O,X*G+x*P,E*G*G+w,0,0,0,0,1),this}makeScale(a,g,w){return this.set(a,0,0,0,0,g,0,0,0,0,w,0,0,0,0,1),this}makeShear(a,g,w,x,E,P){return this.set(1,w,E,0,a,1,P,0,g,x,1,0,0,0,0,1),this}compose(a,g,w){const x=this.elements,E=g._x,P=g._y,O=g._z,G=g._w,h=E+E,X=P+P,Z=O+O,K=E*h,e2=E*X,l2=E*Z,p2=P*X,r2=P*Z,o2=O*Z,v2=G*h,m2=G*X,k2=G*Z,j2=w.x,b2=w.y,D2=w.z;return x[0]=(1-(p2+o2))*j2,x[1]=(e2+k2)*j2,x[2]=(l2-m2)*j2,x[3]=0,x[4]=(e2-k2)*b2,x[5]=(1-(K+o2))*b2,x[6]=(r2+v2)*b2,x[7]=0,x[8]=(l2+m2)*D2,x[9]=(r2-v2)*D2,x[10]=(1-(K+p2))*D2,x[11]=0,x[12]=a.x,x[13]=a.y,x[14]=a.z,x[15]=1,this}decompose(a,g,w){const x=this.elements;let E=Nl.set(x[0],x[1],x[2]).length();const P=Nl.set(x[4],x[5],x[6]).length(),O=Nl.set(x[8],x[9],x[10]).length();this.determinant()<0&&(E=-E),a.x=x[12],a.y=x[13],a.z=x[14],po.copy(this);const h=1/E,X=1/P,Z=1/O;return po.elements[0]*=h,po.elements[1]*=h,po.elements[2]*=h,po.elements[4]*=X,po.elements[5]*=X,po.elements[6]*=X,po.elements[8]*=Z,po.elements[9]*=Z,po.elements[10]*=Z,g.setFromRotationMatrix(po),w.x=E,w.y=P,w.z=O,this}makePerspective(a,g,w,x,E,P,O=Ss){const G=this.elements,h=2*E/(g-a),X=2*E/(w-x),Z=(g+a)/(g-a),K=(w+x)/(w-x);let e2,l2;if(O===Ss)e2=-(P+E)/(P-E),l2=-2*P*E/(P-E);else if(O===W4)e2=-P/(P-E),l2=-P*E/(P-E);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+O);return G[0]=h,G[4]=0,G[8]=Z,G[12]=0,G[1]=0,G[5]=X,G[9]=K,G[13]=0,G[2]=0,G[6]=0,G[10]=e2,G[14]=l2,G[3]=0,G[7]=0,G[11]=-1,G[15]=0,this}makeOrthographic(a,g,w,x,E,P,O=Ss){const G=this.elements,h=1/(g-a),X=1/(w-x),Z=1/(P-E),K=(g+a)*h,e2=(w+x)*X;let l2,p2;if(O===Ss)l2=(P+E)*Z,p2=-2*Z;else if(O===W4)l2=E*Z,p2=-1*Z;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+O);return G[0]=2*h,G[4]=0,G[8]=0,G[12]=-K,G[1]=0,G[5]=2*X,G[9]=0,G[13]=-e2,G[2]=0,G[6]=0,G[10]=p2,G[14]=-l2,G[3]=0,G[7]=0,G[11]=0,G[15]=1,this}equals(a){const g=this.elements,w=a.elements;for(let x=0;x<16;x++)if(g[x]!==w[x])return!1;return!0}fromArray(a,g=0){for(let w=0;w<16;w++)this.elements[w]=a[w+g];return this}toArray(a=[],g=0){const w=this.elements;return a[g]=w[0],a[g+1]=w[1],a[g+2]=w[2],a[g+3]=w[3],a[g+4]=w[4],a[g+5]=w[5],a[g+6]=w[6],a[g+7]=w[7],a[g+8]=w[8],a[g+9]=w[9],a[g+10]=w[10],a[g+11]=w[11],a[g+12]=w[12],a[g+13]=w[13],a[g+14]=w[14],a[g+15]=w[15],a}}const Nl=new E2,po=new te,a42=new E2(0,0,0),h42=new E2(1,1,1),s1=new E2,e4=new E2,gr=new E2,uV=new te,fV=new Xn;class Ai{constructor(a=0,g=0,w=0,x=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=a,this._y=g,this._z=w,this._order=x}get x(){return this._x}set x(a){this._x=a,this._onChangeCallback()}get y(){return this._y}set y(a){this._y=a,this._onChangeCallback()}get z(){return this._z}set z(a){this._z=a,this._onChangeCallback()}get order(){return this._order}set order(a){this._order=a,this._onChangeCallback()}set(a,g,w,x=this._order){return this._x=a,this._y=g,this._z=w,this._order=x,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(a){return this._x=a._x,this._y=a._y,this._z=a._z,this._order=a._order,this._onChangeCallback(),this}setFromRotationMatrix(a,g=this._order,w=!0){const x=a.elements,E=x[0],P=x[4],O=x[8],G=x[1],h=x[5],X=x[9],Z=x[2],K=x[6],e2=x[10];switch(g){case"XYZ":this._y=Math.asin(Mi(O,-1,1)),Math.abs(O)<.9999999?(this._x=Math.atan2(-X,e2),this._z=Math.atan2(-P,E)):(this._x=Math.atan2(K,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Mi(X,-1,1)),Math.abs(X)<.9999999?(this._y=Math.atan2(O,e2),this._z=Math.atan2(G,h)):(this._y=Math.atan2(-Z,E),this._z=0);break;case"ZXY":this._x=Math.asin(Mi(K,-1,1)),Math.abs(K)<.9999999?(this._y=Math.atan2(-Z,e2),this._z=Math.atan2(-P,h)):(this._y=0,this._z=Math.atan2(G,E));break;case"ZYX":this._y=Math.asin(-Mi(Z,-1,1)),Math.abs(Z)<.9999999?(this._x=Math.atan2(K,e2),this._z=Math.atan2(G,E)):(this._x=0,this._z=Math.atan2(-P,h));break;case"YZX":this._z=Math.asin(Mi(G,-1,1)),Math.abs(G)<.9999999?(this._x=Math.atan2(-X,h),this._y=Math.atan2(-Z,E)):(this._x=0,this._y=Math.atan2(O,e2));break;case"XZY":this._z=Math.asin(-Mi(P,-1,1)),Math.abs(P)<.9999999?(this._x=Math.atan2(K,h),this._y=Math.atan2(O,E)):(this._x=Math.atan2(-X,e2),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+g)}return this._order=g,w===!0&&this._onChangeCallback(),this}setFromQuaternion(a,g,w){return uV.makeRotationFromQuaternion(a),this.setFromRotationMatrix(uV,g,w)}setFromVector3(a,g=this._order){return this.set(a.x,a.y,a.z,g)}reorder(a){return fV.setFromEuler(this),this.setFromQuaternion(fV,a)}equals(a){return a._x===this._x&&a._y===this._y&&a._z===this._z&&a._order===this._order}fromArray(a){return this._x=a[0],this._y=a[1],this._z=a[2],a[3]!==void 0&&(this._order=a[3]),this._onChangeCallback(),this}toArray(a=[],g=0){return a[g]=this._x,a[g+1]=this._y,a[g+2]=this._z,a[g+3]=this._order,a}_onChange(a){return this._onChangeCallback=a,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class Xz{constructor(){this.mask=1}set(a){this.mask=(1<<a|0)>>>0}enable(a){this.mask|=1<<a|0}enableAll(){this.mask=-1}toggle(a){this.mask^=1<<a|0}disable(a){this.mask&=~(1<<a|0)}disableAll(){this.mask=0}test(a){return(this.mask&a.mask)!==0}isEnabled(a){return(this.mask&(1<<a|0))!==0}}let m42=0;const pV=new E2,Ul=new Xn,As=new te,n4=new E2,Tf=new E2,d42=new E2,A42=new Xn,cV=new E2(1,0,0),_V=new E2(0,1,0),aV=new E2(0,0,1),hV={type:"added"},g42={type:"removed"},Gl={type:"childadded",child:null},Ga={type:"childremoved",child:null};class Un extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:m42++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Un.DEFAULT_UP.clone();const a=new E2,g=new Ai,w=new Xn,x=new E2(1,1,1);function E(){w.setFromEuler(g,!1)}function P(){g.setFromQuaternion(w,void 0,!1)}g._onChange(E),w._onChange(P),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:a},rotation:{configurable:!0,enumerable:!0,value:g},quaternion:{configurable:!0,enumerable:!0,value:w},scale:{configurable:!0,enumerable:!0,value:x},modelViewMatrix:{value:new te},normalMatrix:{value:new Je}}),this.matrix=new te,this.matrixWorld=new te,this.matrixAutoUpdate=Un.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Xz,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(a){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(a),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(a){return this.quaternion.premultiply(a),this}setRotationFromAxisAngle(a,g){this.quaternion.setFromAxisAngle(a,g)}setRotationFromEuler(a){this.quaternion.setFromEuler(a,!0)}setRotationFromMatrix(a){this.quaternion.setFromRotationMatrix(a)}setRotationFromQuaternion(a){this.quaternion.copy(a)}rotateOnAxis(a,g){return Ul.setFromAxisAngle(a,g),this.quaternion.multiply(Ul),this}rotateOnWorldAxis(a,g){return Ul.setFromAxisAngle(a,g),this.quaternion.premultiply(Ul),this}rotateX(a){return this.rotateOnAxis(cV,a)}rotateY(a){return this.rotateOnAxis(_V,a)}rotateZ(a){return this.rotateOnAxis(aV,a)}translateOnAxis(a,g){return pV.copy(a).applyQuaternion(this.quaternion),this.position.add(pV.multiplyScalar(g)),this}translateX(a){return this.translateOnAxis(cV,a)}translateY(a){return this.translateOnAxis(_V,a)}translateZ(a){return this.translateOnAxis(aV,a)}localToWorld(a){return this.updateWorldMatrix(!0,!1),a.applyMatrix4(this.matrixWorld)}worldToLocal(a){return this.updateWorldMatrix(!0,!1),a.applyMatrix4(As.copy(this.matrixWorld).invert())}lookAt(a,g,w){a.isVector3?n4.copy(a):n4.set(a,g,w);const x=this.parent;this.updateWorldMatrix(!0,!1),Tf.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?As.lookAt(Tf,n4,this.up):As.lookAt(n4,Tf,this.up),this.quaternion.setFromRotationMatrix(As),x&&(As.extractRotation(x.matrixWorld),Ul.setFromRotationMatrix(As),this.quaternion.premultiply(Ul.invert()))}add(a){if(arguments.length>1){for(let g=0;g<arguments.length;g++)this.add(arguments[g]);return this}return a===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",a),this):(a&&a.isObject3D?(a.removeFromParent(),a.parent=this,this.children.push(a),a.dispatchEvent(hV),Gl.child=a,this.dispatchEvent(Gl),Gl.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",a),this)}remove(a){if(arguments.length>1){for(let w=0;w<arguments.length;w++)this.remove(arguments[w]);return this}const g=this.children.indexOf(a);return g!==-1&&(a.parent=null,this.children.splice(g,1),a.dispatchEvent(g42),Ga.child=a,this.dispatchEvent(Ga),Ga.child=null),this}removeFromParent(){const a=this.parent;return a!==null&&a.remove(this),this}clear(){return this.remove(...this.children)}attach(a){return this.updateWorldMatrix(!0,!1),As.copy(this.matrixWorld).invert(),a.parent!==null&&(a.parent.updateWorldMatrix(!0,!1),As.multiply(a.parent.matrixWorld)),a.applyMatrix4(As),a.removeFromParent(),a.parent=this,this.children.push(a),a.updateWorldMatrix(!1,!0),a.dispatchEvent(hV),Gl.child=a,this.dispatchEvent(Gl),Gl.child=null,this}getObjectById(a){return this.getObjectByProperty("id",a)}getObjectByName(a){return this.getObjectByProperty("name",a)}getObjectByProperty(a,g){if(this[a]===g)return this;for(let w=0,x=this.children.length;w<x;w++){const P=this.children[w].getObjectByProperty(a,g);if(P!==void 0)return P}}getObjectsByProperty(a,g,w=[]){this[a]===g&&w.push(this);const x=this.children;for(let E=0,P=x.length;E<P;E++)x[E].getObjectsByProperty(a,g,w);return w}getWorldPosition(a){return this.updateWorldMatrix(!0,!1),a.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(a){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tf,a,d42),a}getWorldScale(a){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Tf,A42,a),a}getWorldDirection(a){this.updateWorldMatrix(!0,!1);const g=this.matrixWorld.elements;return a.set(g[8],g[9],g[10]).normalize()}raycast(){}traverse(a){a(this);const g=this.children;for(let w=0,x=g.length;w<x;w++)g[w].traverse(a)}traverseVisible(a){if(this.visible===!1)return;a(this);const g=this.children;for(let w=0,x=g.length;w<x;w++)g[w].traverseVisible(a)}traverseAncestors(a){const g=this.parent;g!==null&&(a(g),g.traverseAncestors(a))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(a){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0);const g=this.children;for(let w=0,x=g.length;w<x;w++){const E=g[w];(E.matrixWorldAutoUpdate===!0||a===!0)&&E.updateMatrixWorld(a)}}updateWorldMatrix(a,g){const w=this.parent;if(a===!0&&w!==null&&w.matrixWorldAutoUpdate===!0&&w.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),g===!0){const x=this.children;for(let E=0,P=x.length;E<P;E++){const O=x[E];O.matrixWorldAutoUpdate===!0&&O.updateWorldMatrix(!1,!0)}}}toJSON(a){const g=a===void 0||typeof a=="string",w={};g&&(a={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},w.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const x={};x.uuid=this.uuid,x.type=this.type,this.name!==""&&(x.name=this.name),this.castShadow===!0&&(x.castShadow=!0),this.receiveShadow===!0&&(x.receiveShadow=!0),this.visible===!1&&(x.visible=!1),this.frustumCulled===!1&&(x.frustumCulled=!1),this.renderOrder!==0&&(x.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(x.userData=this.userData),x.layers=this.layers.mask,x.matrix=this.matrix.toArray(),x.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(x.matrixAutoUpdate=!1),this.isInstancedMesh&&(x.type="InstancedMesh",x.count=this.count,x.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(x.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(x.type="BatchedMesh",x.perObjectFrustumCulled=this.perObjectFrustumCulled,x.sortObjects=this.sortObjects,x.drawRanges=this._drawRanges,x.reservedRanges=this._reservedRanges,x.visibility=this._visibility,x.active=this._active,x.bounds=this._bounds.map(O=>({boxInitialized:O.boxInitialized,boxMin:O.box.min.toArray(),boxMax:O.box.max.toArray(),sphereInitialized:O.sphereInitialized,sphereRadius:O.sphere.radius,sphereCenter:O.sphere.center.toArray()})),x.maxGeometryCount=this._maxGeometryCount,x.maxVertexCount=this._maxVertexCount,x.maxIndexCount=this._maxIndexCount,x.geometryInitialized=this._geometryInitialized,x.geometryCount=this._geometryCount,x.matricesTexture=this._matricesTexture.toJSON(a),this.boundingSphere!==null&&(x.boundingSphere={center:x.boundingSphere.center.toArray(),radius:x.boundingSphere.radius}),this.boundingBox!==null&&(x.boundingBox={min:x.boundingBox.min.toArray(),max:x.boundingBox.max.toArray()}));function E(O,G){return O[G.uuid]===void 0&&(O[G.uuid]=G.toJSON(a)),G.uuid}if(this.isScene)this.background&&(this.background.isColor?x.background=this.background.toJSON():this.background.isTexture&&(x.background=this.background.toJSON(a).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(x.environment=this.environment.toJSON(a).uuid);else if(this.isMesh||this.isLine||this.isPoints){x.geometry=E(a.geometries,this.geometry);const O=this.geometry.parameters;if(O!==void 0&&O.shapes!==void 0){const G=O.shapes;if(Array.isArray(G))for(let h=0,X=G.length;h<X;h++){const Z=G[h];E(a.shapes,Z)}else E(a.shapes,G)}}if(this.isSkinnedMesh&&(x.bindMode=this.bindMode,x.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(E(a.skeletons,this.skeleton),x.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const O=[];for(let G=0,h=this.material.length;G<h;G++)O.push(E(a.materials,this.material[G]));x.material=O}else x.material=E(a.materials,this.material);if(this.children.length>0){x.children=[];for(let O=0;O<this.children.length;O++)x.children.push(this.children[O].toJSON(a).object)}if(this.animations.length>0){x.animations=[];for(let O=0;O<this.animations.length;O++){const G=this.animations[O];x.animations.push(E(a.animations,G))}}if(g){const O=P(a.geometries),G=P(a.materials),h=P(a.textures),X=P(a.images),Z=P(a.shapes),K=P(a.skeletons),e2=P(a.animations),l2=P(a.nodes);O.length>0&&(w.geometries=O),G.length>0&&(w.materials=G),h.length>0&&(w.textures=h),X.length>0&&(w.images=X),Z.length>0&&(w.shapes=Z),K.length>0&&(w.skeletons=K),e2.length>0&&(w.animations=e2),l2.length>0&&(w.nodes=l2)}return w.object=x,w;function P(O){const G=[];for(const h in O){const X=O[h];delete X.metadata,G.push(X)}return G}}clone(a){return new this.constructor().copy(this,a)}copy(a,g=!0){if(this.name=a.name,this.up.copy(a.up),this.position.copy(a.position),this.rotation.order=a.rotation.order,this.quaternion.copy(a.quaternion),this.scale.copy(a.scale),this.matrix.copy(a.matrix),this.matrixWorld.copy(a.matrixWorld),this.matrixAutoUpdate=a.matrixAutoUpdate,this.matrixWorldAutoUpdate=a.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=a.matrixWorldNeedsUpdate,this.layers.mask=a.layers.mask,this.visible=a.visible,this.castShadow=a.castShadow,this.receiveShadow=a.receiveShadow,this.frustumCulled=a.frustumCulled,this.renderOrder=a.renderOrder,this.animations=a.animations.slice(),this.userData=JSON.parse(JSON.stringify(a.userData)),g===!0)for(let w=0;w<a.children.length;w++){const x=a.children[w];this.add(x.clone())}return this}}Un.DEFAULT_UP=new E2(0,1,0);Un.DEFAULT_MATRIX_AUTO_UPDATE=!0;Un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const co=new E2,gs=new E2,Wa=new E2,ys=new E2,Wl=new E2,Hl=new E2,mV=new E2,Ha=new E2,Va=new E2,za=new E2;class Uo{constructor(a=new E2,g=new E2,w=new E2){this.a=a,this.b=g,this.c=w}static getNormal(a,g,w,x){x.subVectors(w,g),co.subVectors(a,g),x.cross(co);const E=x.lengthSq();return E>0?x.multiplyScalar(1/Math.sqrt(E)):x.set(0,0,0)}static getBarycoord(a,g,w,x,E){co.subVectors(x,g),gs.subVectors(w,g),Wa.subVectors(a,g);const P=co.dot(co),O=co.dot(gs),G=co.dot(Wa),h=gs.dot(gs),X=gs.dot(Wa),Z=P*h-O*O;if(Z===0)return E.set(0,0,0),null;const K=1/Z,e2=(h*G-O*X)*K,l2=(P*X-O*G)*K;return E.set(1-e2-l2,l2,e2)}static containsPoint(a,g,w,x){return this.getBarycoord(a,g,w,x,ys)===null?!1:ys.x>=0&&ys.y>=0&&ys.x+ys.y<=1}static getInterpolation(a,g,w,x,E,P,O,G){return this.getBarycoord(a,g,w,x,ys)===null?(G.x=0,G.y=0,"z"in G&&(G.z=0),"w"in G&&(G.w=0),null):(G.setScalar(0),G.addScaledVector(E,ys.x),G.addScaledVector(P,ys.y),G.addScaledVector(O,ys.z),G)}static isFrontFacing(a,g,w,x){return co.subVectors(w,g),gs.subVectors(a,g),co.cross(gs).dot(x)<0}set(a,g,w){return this.a.copy(a),this.b.copy(g),this.c.copy(w),this}setFromPointsAndIndices(a,g,w,x){return this.a.copy(a[g]),this.b.copy(a[w]),this.c.copy(a[x]),this}setFromAttributeAndIndices(a,g,w,x){return this.a.fromBufferAttribute(a,g),this.b.fromBufferAttribute(a,w),this.c.fromBufferAttribute(a,x),this}clone(){return new this.constructor().copy(this)}copy(a){return this.a.copy(a.a),this.b.copy(a.b),this.c.copy(a.c),this}getArea(){return co.subVectors(this.c,this.b),gs.subVectors(this.a,this.b),co.cross(gs).length()*.5}getMidpoint(a){return a.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(a){return Uo.getNormal(this.a,this.b,this.c,a)}getPlane(a){return a.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(a,g){return Uo.getBarycoord(a,this.a,this.b,this.c,g)}getInterpolation(a,g,w,x,E){return Uo.getInterpolation(a,this.a,this.b,this.c,g,w,x,E)}containsPoint(a){return Uo.containsPoint(a,this.a,this.b,this.c)}isFrontFacing(a){return Uo.isFrontFacing(this.a,this.b,this.c,a)}intersectsBox(a){return a.intersectsTriangle(this)}closestPointToPoint(a,g){const w=this.a,x=this.b,E=this.c;let P,O;Wl.subVectors(x,w),Hl.subVectors(E,w),Ha.subVectors(a,w);const G=Wl.dot(Ha),h=Hl.dot(Ha);if(G<=0&&h<=0)return g.copy(w);Va.subVectors(a,x);const X=Wl.dot(Va),Z=Hl.dot(Va);if(X>=0&&Z<=X)return g.copy(x);const K=G*Z-X*h;if(K<=0&&G>=0&&X<=0)return P=G/(G-X),g.copy(w).addScaledVector(Wl,P);za.subVectors(a,E);const e2=Wl.dot(za),l2=Hl.dot(za);if(l2>=0&&e2<=l2)return g.copy(E);const p2=e2*h-G*l2;if(p2<=0&&h>=0&&l2<=0)return O=h/(h-l2),g.copy(w).addScaledVector(Hl,O);const r2=X*l2-e2*Z;if(r2<=0&&Z-X>=0&&e2-l2>=0)return mV.subVectors(E,x),O=(Z-X)/(Z-X+(e2-l2)),g.copy(x).addScaledVector(mV,O);const o2=1/(r2+p2+K);return P=p2*o2,O=K*o2,g.copy(w).addScaledVector(Wl,P).addScaledVector(Hl,O)}equals(a){return a.a.equals(this.a)&&a.b.equals(this.b)&&a.c.equals(this.c)}}const Zz={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},l1={h:0,s:0,l:0},i4={h:0,s:0,l:0};function Qa(D,a,g){return g<0&&(g+=1),g>1&&(g-=1),g<1/6?D+(a-D)*6*g:g<1/2?a:g<2/3?D+(a-D)*6*(2/3-g):D}class ce{constructor(a,g,w){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(a,g,w)}set(a,g,w){if(g===void 0&&w===void 0){const x=a;x&&x.isColor?this.copy(x):typeof x=="number"?this.setHex(x):typeof x=="string"&&this.setStyle(x)}else this.setRGB(a,g,w);return this}setScalar(a){return this.r=a,this.g=a,this.b=a,this}setHex(a,g=di){return a=Math.floor(a),this.r=(a>>16&255)/255,this.g=(a>>8&255)/255,this.b=(a&255)/255,Dn.toWorkingColorSpace(this,g),this}setRGB(a,g,w,x=Dn.workingColorSpace){return this.r=a,this.g=g,this.b=w,Dn.toWorkingColorSpace(this,x),this}setHSL(a,g,w,x=Dn.workingColorSpace){if(a=J6(a,1),g=Mi(g,0,1),w=Mi(w,0,1),g===0)this.r=this.g=this.b=w;else{const E=w<=.5?w*(1+g):w+g-w*g,P=2*w-E;this.r=Qa(P,E,a+1/3),this.g=Qa(P,E,a),this.b=Qa(P,E,a-1/3)}return Dn.toWorkingColorSpace(this,x),this}setStyle(a,g=di){function w(E){E!==void 0&&parseFloat(E)<1&&console.warn("THREE.Color: Alpha component of "+a+" will be ignored.")}let x;if(x=/^(\w+)\(([^\)]*)\)/.exec(a)){let E;const P=x[1],O=x[2];switch(P){case"rgb":case"rgba":if(E=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(O))return w(E[4]),this.setRGB(Math.min(255,parseInt(E[1],10))/255,Math.min(255,parseInt(E[2],10))/255,Math.min(255,parseInt(E[3],10))/255,g);if(E=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(O))return w(E[4]),this.setRGB(Math.min(100,parseInt(E[1],10))/100,Math.min(100,parseInt(E[2],10))/100,Math.min(100,parseInt(E[3],10))/100,g);break;case"hsl":case"hsla":if(E=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(O))return w(E[4]),this.setHSL(parseFloat(E[1])/360,parseFloat(E[2])/100,parseFloat(E[3])/100,g);break;default:console.warn("THREE.Color: Unknown color model "+a)}}else if(x=/^\#([A-Fa-f\d]+)$/.exec(a)){const E=x[1],P=E.length;if(P===3)return this.setRGB(parseInt(E.charAt(0),16)/15,parseInt(E.charAt(1),16)/15,parseInt(E.charAt(2),16)/15,g);if(P===6)return this.setHex(parseInt(E,16),g);console.warn("THREE.Color: Invalid hex color "+a)}else if(a&&a.length>0)return this.setColorName(a,g);return this}setColorName(a,g=di){const w=Zz[a.toLowerCase()];return w!==void 0?this.setHex(w,g):console.warn("THREE.Color: Unknown color "+a),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(a){return this.r=a.r,this.g=a.g,this.b=a.b,this}copySRGBToLinear(a){return this.r=su(a.r),this.g=su(a.g),this.b=su(a.b),this}copyLinearToSRGB(a){return this.r=Ia(a.r),this.g=Ia(a.g),this.b=Ia(a.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(a=di){return Dn.fromWorkingColorSpace(B0.copy(this),a),Math.round(Mi(B0.r*255,0,255))*65536+Math.round(Mi(B0.g*255,0,255))*256+Math.round(Mi(B0.b*255,0,255))}getHexString(a=di){return("000000"+this.getHex(a).toString(16)).slice(-6)}getHSL(a,g=Dn.workingColorSpace){Dn.fromWorkingColorSpace(B0.copy(this),g);const w=B0.r,x=B0.g,E=B0.b,P=Math.max(w,x,E),O=Math.min(w,x,E);let G,h;const X=(O+P)/2;if(O===P)G=0,h=0;else{const Z=P-O;switch(h=X<=.5?Z/(P+O):Z/(2-P-O),P){case w:G=(x-E)/Z+(x<E?6:0);break;case x:G=(E-w)/Z+2;break;case E:G=(w-x)/Z+4;break}G/=6}return a.h=G,a.s=h,a.l=X,a}getRGB(a,g=Dn.workingColorSpace){return Dn.fromWorkingColorSpace(B0.copy(this),g),a.r=B0.r,a.g=B0.g,a.b=B0.b,a}getStyle(a=di){Dn.fromWorkingColorSpace(B0.copy(this),a);const g=B0.r,w=B0.g,x=B0.b;return a!==di?`color(${a} ${g.toFixed(3)} ${w.toFixed(3)} ${x.toFixed(3)})`:`rgb(${Math.round(g*255)},${Math.round(w*255)},${Math.round(x*255)})`}offsetHSL(a,g,w){return this.getHSL(l1),this.setHSL(l1.h+a,l1.s+g,l1.l+w)}add(a){return this.r+=a.r,this.g+=a.g,this.b+=a.b,this}addColors(a,g){return this.r=a.r+g.r,this.g=a.g+g.g,this.b=a.b+g.b,this}addScalar(a){return this.r+=a,this.g+=a,this.b+=a,this}sub(a){return this.r=Math.max(0,this.r-a.r),this.g=Math.max(0,this.g-a.g),this.b=Math.max(0,this.b-a.b),this}multiply(a){return this.r*=a.r,this.g*=a.g,this.b*=a.b,this}multiplyScalar(a){return this.r*=a,this.g*=a,this.b*=a,this}lerp(a,g){return this.r+=(a.r-this.r)*g,this.g+=(a.g-this.g)*g,this.b+=(a.b-this.b)*g,this}lerpColors(a,g,w){return this.r=a.r+(g.r-a.r)*w,this.g=a.g+(g.g-a.g)*w,this.b=a.b+(g.b-a.b)*w,this}lerpHSL(a,g){this.getHSL(l1),a.getHSL(i4);const w=jf(l1.h,i4.h,g),x=jf(l1.s,i4.s,g),E=jf(l1.l,i4.l,g);return this.setHSL(w,x,E),this}setFromVector3(a){return this.r=a.x,this.g=a.y,this.b=a.z,this}applyMatrix3(a){const g=this.r,w=this.g,x=this.b,E=a.elements;return this.r=E[0]*g+E[3]*w+E[6]*x,this.g=E[1]*g+E[4]*w+E[7]*x,this.b=E[2]*g+E[5]*w+E[8]*x,this}equals(a){return a.r===this.r&&a.g===this.g&&a.b===this.b}fromArray(a,g=0){return this.r=a[g],this.g=a[g+1],this.b=a[g+2],this}toArray(a=[],g=0){return a[g]=this.r,a[g+1]=this.g,a[g+2]=this.b,a}fromBufferAttribute(a,g){return this.r=a.getX(g),this.g=a.getY(g),this.b=a.getZ(g),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const B0=new ce;ce.NAMES=Zz;let y42=0;class zr extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:y42++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=ru,this.side=Wo,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=C6,this.blendDst=M6,this.blendEquation=Q1,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ce(0,0,0),this.blendAlpha=0,this.depthFunc=F4,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eV,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pl,this.stencilZFail=Pl,this.stencilZPass=Pl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(a){this._alphaTest>0!=a>0&&this.version++,this._alphaTest=a}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(a){if(a!==void 0)for(const g in a){const w=a[g];if(w===void 0){console.warn(`THREE.Material: parameter '${g}' has value of undefined.`);continue}const x=this[g];if(x===void 0){console.warn(`THREE.Material: '${g}' is not a property of THREE.${this.type}.`);continue}x&&x.isColor?x.set(w):x&&x.isVector3&&w&&w.isVector3?x.copy(w):this[g]=w}}toJSON(a){const g=a===void 0||typeof a=="string";g&&(a={textures:{},images:{}});const w={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};w.uuid=this.uuid,w.type=this.type,this.name!==""&&(w.name=this.name),this.color&&this.color.isColor&&(w.color=this.color.getHex()),this.roughness!==void 0&&(w.roughness=this.roughness),this.metalness!==void 0&&(w.metalness=this.metalness),this.sheen!==void 0&&(w.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(w.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(w.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(w.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(w.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(w.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(w.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(w.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(w.shininess=this.shininess),this.clearcoat!==void 0&&(w.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(w.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(w.clearcoatMap=this.clearcoatMap.toJSON(a).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(w.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(a).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(w.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(a).uuid,w.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(w.dispersion=this.dispersion),this.iridescence!==void 0&&(w.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(w.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(w.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(w.iridescenceMap=this.iridescenceMap.toJSON(a).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(w.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(a).uuid),this.anisotropy!==void 0&&(w.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(w.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(w.anisotropyMap=this.anisotropyMap.toJSON(a).uuid),this.map&&this.map.isTexture&&(w.map=this.map.toJSON(a).uuid),this.matcap&&this.matcap.isTexture&&(w.matcap=this.matcap.toJSON(a).uuid),this.alphaMap&&this.alphaMap.isTexture&&(w.alphaMap=this.alphaMap.toJSON(a).uuid),this.lightMap&&this.lightMap.isTexture&&(w.lightMap=this.lightMap.toJSON(a).uuid,w.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(w.aoMap=this.aoMap.toJSON(a).uuid,w.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(w.bumpMap=this.bumpMap.toJSON(a).uuid,w.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(w.normalMap=this.normalMap.toJSON(a).uuid,w.normalMapType=this.normalMapType,w.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(w.displacementMap=this.displacementMap.toJSON(a).uuid,w.displacementScale=this.displacementScale,w.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(w.roughnessMap=this.roughnessMap.toJSON(a).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(w.metalnessMap=this.metalnessMap.toJSON(a).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(w.emissiveMap=this.emissiveMap.toJSON(a).uuid),this.specularMap&&this.specularMap.isTexture&&(w.specularMap=this.specularMap.toJSON(a).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(w.specularIntensityMap=this.specularIntensityMap.toJSON(a).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(w.specularColorMap=this.specularColorMap.toJSON(a).uuid),this.envMap&&this.envMap.isTexture&&(w.envMap=this.envMap.toJSON(a).uuid,this.combine!==void 0&&(w.combine=this.combine)),this.envMapRotation!==void 0&&(w.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(w.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(w.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(w.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(w.gradientMap=this.gradientMap.toJSON(a).uuid),this.transmission!==void 0&&(w.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(w.transmissionMap=this.transmissionMap.toJSON(a).uuid),this.thickness!==void 0&&(w.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(w.thicknessMap=this.thicknessMap.toJSON(a).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(w.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(w.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(w.size=this.size),this.shadowSide!==null&&(w.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(w.sizeAttenuation=this.sizeAttenuation),this.blending!==ru&&(w.blending=this.blending),this.side!==Wo&&(w.side=this.side),this.vertexColors===!0&&(w.vertexColors=!0),this.opacity<1&&(w.opacity=this.opacity),this.transparent===!0&&(w.transparent=!0),this.blendSrc!==C6&&(w.blendSrc=this.blendSrc),this.blendDst!==M6&&(w.blendDst=this.blendDst),this.blendEquation!==Q1&&(w.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(w.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(w.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(w.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(w.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(w.blendAlpha=this.blendAlpha),this.depthFunc!==F4&&(w.depthFunc=this.depthFunc),this.depthTest===!1&&(w.depthTest=this.depthTest),this.depthWrite===!1&&(w.depthWrite=this.depthWrite),this.colorWrite===!1&&(w.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(w.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==eV&&(w.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(w.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(w.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pl&&(w.stencilFail=this.stencilFail),this.stencilZFail!==Pl&&(w.stencilZFail=this.stencilZFail),this.stencilZPass!==Pl&&(w.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(w.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(w.rotation=this.rotation),this.polygonOffset===!0&&(w.polygonOffset=!0),this.polygonOffsetFactor!==0&&(w.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(w.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(w.linewidth=this.linewidth),this.dashSize!==void 0&&(w.dashSize=this.dashSize),this.gapSize!==void 0&&(w.gapSize=this.gapSize),this.scale!==void 0&&(w.scale=this.scale),this.dithering===!0&&(w.dithering=!0),this.alphaTest>0&&(w.alphaTest=this.alphaTest),this.alphaHash===!0&&(w.alphaHash=!0),this.alphaToCoverage===!0&&(w.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(w.premultipliedAlpha=!0),this.forceSinglePass===!0&&(w.forceSinglePass=!0),this.wireframe===!0&&(w.wireframe=!0),this.wireframeLinewidth>1&&(w.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(w.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(w.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(w.flatShading=!0),this.visible===!1&&(w.visible=!1),this.toneMapped===!1&&(w.toneMapped=!1),this.fog===!1&&(w.fog=!1),Object.keys(this.userData).length>0&&(w.userData=this.userData);function x(E){const P=[];for(const O in E){const G=E[O];delete G.metadata,P.push(G)}return P}if(g){const E=x(a.textures),P=x(a.images);E.length>0&&(w.textures=E),P.length>0&&(w.images=P)}return w}clone(){return new this.constructor().copy(this)}copy(a){this.name=a.name,this.blending=a.blending,this.side=a.side,this.vertexColors=a.vertexColors,this.opacity=a.opacity,this.transparent=a.transparent,this.blendSrc=a.blendSrc,this.blendDst=a.blendDst,this.blendEquation=a.blendEquation,this.blendSrcAlpha=a.blendSrcAlpha,this.blendDstAlpha=a.blendDstAlpha,this.blendEquationAlpha=a.blendEquationAlpha,this.blendColor.copy(a.blendColor),this.blendAlpha=a.blendAlpha,this.depthFunc=a.depthFunc,this.depthTest=a.depthTest,this.depthWrite=a.depthWrite,this.stencilWriteMask=a.stencilWriteMask,this.stencilFunc=a.stencilFunc,this.stencilRef=a.stencilRef,this.stencilFuncMask=a.stencilFuncMask,this.stencilFail=a.stencilFail,this.stencilZFail=a.stencilZFail,this.stencilZPass=a.stencilZPass,this.stencilWrite=a.stencilWrite;const g=a.clippingPlanes;let w=null;if(g!==null){const x=g.length;w=new Array(x);for(let E=0;E!==x;++E)w[E]=g[E].clone()}return this.clippingPlanes=w,this.clipIntersection=a.clipIntersection,this.clipShadows=a.clipShadows,this.shadowSide=a.shadowSide,this.colorWrite=a.colorWrite,this.precision=a.precision,this.polygonOffset=a.polygonOffset,this.polygonOffsetFactor=a.polygonOffsetFactor,this.polygonOffsetUnits=a.polygonOffsetUnits,this.dithering=a.dithering,this.alphaTest=a.alphaTest,this.alphaHash=a.alphaHash,this.alphaToCoverage=a.alphaToCoverage,this.premultipliedAlpha=a.premultipliedAlpha,this.forceSinglePass=a.forceSinglePass,this.visible=a.visible,this.toneMapped=a.toneMapped,this.userData=JSON.parse(JSON.stringify(a.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(a){a===!0&&this.version++}}class xs extends zr{constructor(a){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Z4,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.specularMap=a.specularMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.envMapRotation.copy(a.envMapRotation),this.combine=a.combine,this.reflectivity=a.reflectivity,this.refractionRatio=a.refractionRatio,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.fog=a.fog,this}}const Bs=k42();function k42(){const D=new ArrayBuffer(4),a=new Float32Array(D),g=new Uint32Array(D),w=new Uint32Array(512),x=new Uint32Array(512);for(let G=0;G<256;++G){const h=G-127;h<-27?(w[G]=0,w[G|256]=32768,x[G]=24,x[G|256]=24):h<-14?(w[G]=1024>>-h-14,w[G|256]=1024>>-h-14|32768,x[G]=-h-1,x[G|256]=-h-1):h<=15?(w[G]=h+15<<10,w[G|256]=h+15<<10|32768,x[G]=13,x[G|256]=13):h<128?(w[G]=31744,w[G|256]=64512,x[G]=24,x[G|256]=24):(w[G]=31744,w[G|256]=64512,x[G]=13,x[G|256]=13)}const E=new Uint32Array(2048),P=new Uint32Array(64),O=new Uint32Array(64);for(let G=1;G<1024;++G){let h=G<<13,X=0;for(;!(h&8388608);)h<<=1,X-=8388608;h&=-8388609,X+=947912704,E[G]=h|X}for(let G=1024;G<2048;++G)E[G]=939524096+(G-1024<<13);for(let G=1;G<31;++G)P[G]=G<<23;P[31]=1199570944,P[32]=2147483648;for(let G=33;G<63;++G)P[G]=2147483648+(G-32<<23);P[63]=3347054592;for(let G=1;G<64;++G)G!==32&&(O[G]=1024);return{floatView:a,uint32View:g,baseTable:w,shiftTable:x,mantissaTable:E,exponentTable:P,offsetTable:O}}function v42(D){Math.abs(D)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),D=Mi(D,-65504,65504),Bs.floatView[0]=D;const a=Bs.uint32View[0],g=a>>23&511;return Bs.baseTable[g]+((a&8388607)>>Bs.shiftTable[g])}function w42(D){const a=D>>10;return Bs.uint32View[0]=Bs.mantissaTable[Bs.offsetTable[a]+(D&1023)]+Bs.exponentTable[a],Bs.floatView[0]}const r4={toHalfFloat:v42,fromHalfFloat:w42},Fi=new E2,o4=new Lt;class _0{constructor(a,g,w=!1){if(Array.isArray(a))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=a,this.itemSize=g,this.count=a!==void 0?a.length/g:0,this.normalized=w,this.usage=b6,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=kr,this.version=0}onUploadCallback(){}set needsUpdate(a){a===!0&&this.version++}get updateRange(){return zz("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(a){return this.usage=a,this}addUpdateRange(a,g){this.updateRanges.push({start:a,count:g})}clearUpdateRanges(){this.updateRanges.length=0}copy(a){return this.name=a.name,this.array=new a.array.constructor(a.array),this.itemSize=a.itemSize,this.count=a.count,this.normalized=a.normalized,this.usage=a.usage,this.gpuType=a.gpuType,this}copyAt(a,g,w){a*=this.itemSize,w*=g.itemSize;for(let x=0,E=this.itemSize;x<E;x++)this.array[a+x]=g.array[w+x];return this}copyArray(a){return this.array.set(a),this}applyMatrix3(a){if(this.itemSize===2)for(let g=0,w=this.count;g<w;g++)o4.fromBufferAttribute(this,g),o4.applyMatrix3(a),this.setXY(g,o4.x,o4.y);else if(this.itemSize===3)for(let g=0,w=this.count;g<w;g++)Fi.fromBufferAttribute(this,g),Fi.applyMatrix3(a),this.setXYZ(g,Fi.x,Fi.y,Fi.z);return this}applyMatrix4(a){for(let g=0,w=this.count;g<w;g++)Fi.fromBufferAttribute(this,g),Fi.applyMatrix4(a),this.setXYZ(g,Fi.x,Fi.y,Fi.z);return this}applyNormalMatrix(a){for(let g=0,w=this.count;g<w;g++)Fi.fromBufferAttribute(this,g),Fi.applyNormalMatrix(a),this.setXYZ(g,Fi.x,Fi.y,Fi.z);return this}transformDirection(a){for(let g=0,w=this.count;g<w;g++)Fi.fromBufferAttribute(this,g),Fi.transformDirection(a),this.setXYZ(g,Fi.x,Fi.y,Fi.z);return this}set(a,g=0){return this.array.set(a,g),this}getComponent(a,g){let w=this.array[a*this.itemSize+g];return this.normalized&&(w=ho(w,this.array)),w}setComponent(a,g,w){return this.normalized&&(w=Fn(w,this.array)),this.array[a*this.itemSize+g]=w,this}getX(a){let g=this.array[a*this.itemSize];return this.normalized&&(g=ho(g,this.array)),g}setX(a,g){return this.normalized&&(g=Fn(g,this.array)),this.array[a*this.itemSize]=g,this}getY(a){let g=this.array[a*this.itemSize+1];return this.normalized&&(g=ho(g,this.array)),g}setY(a,g){return this.normalized&&(g=Fn(g,this.array)),this.array[a*this.itemSize+1]=g,this}getZ(a){let g=this.array[a*this.itemSize+2];return this.normalized&&(g=ho(g,this.array)),g}setZ(a,g){return this.normalized&&(g=Fn(g,this.array)),this.array[a*this.itemSize+2]=g,this}getW(a){let g=this.array[a*this.itemSize+3];return this.normalized&&(g=ho(g,this.array)),g}setW(a,g){return this.normalized&&(g=Fn(g,this.array)),this.array[a*this.itemSize+3]=g,this}setXY(a,g,w){return a*=this.itemSize,this.normalized&&(g=Fn(g,this.array),w=Fn(w,this.array)),this.array[a+0]=g,this.array[a+1]=w,this}setXYZ(a,g,w,x){return a*=this.itemSize,this.normalized&&(g=Fn(g,this.array),w=Fn(w,this.array),x=Fn(x,this.array)),this.array[a+0]=g,this.array[a+1]=w,this.array[a+2]=x,this}setXYZW(a,g,w,x,E){return a*=this.itemSize,this.normalized&&(g=Fn(g,this.array),w=Fn(w,this.array),x=Fn(x,this.array),E=Fn(E,this.array)),this.array[a+0]=g,this.array[a+1]=w,this.array[a+2]=x,this.array[a+3]=E,this}onUpload(a){return this.onUploadCallback=a,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const a={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(a.name=this.name),this.usage!==b6&&(a.usage=this.usage),a}}class K6 extends _0{constructor(a,g,w){super(new Uint16Array(a),g,w)}}class qz extends _0{constructor(a,g,w){super(new Uint32Array(a),g,w)}}class gi extends _0{constructor(a,g,w){super(new Float32Array(a),g,w)}}let B42=0;const Gr=new te,Ya=new Un,Vl=new E2,yr=new Ho,Ef=new Ho,$i=new E2;class n0 extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:B42++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(a){return Array.isArray(a)?this.index=new(Vz(a)?qz:K6)(a,1):this.index=a,this}getAttribute(a){return this.attributes[a]}setAttribute(a,g){return this.attributes[a]=g,this}deleteAttribute(a){return delete this.attributes[a],this}hasAttribute(a){return this.attributes[a]!==void 0}addGroup(a,g,w=0){this.groups.push({start:a,count:g,materialIndex:w})}clearGroups(){this.groups=[]}setDrawRange(a,g){this.drawRange.start=a,this.drawRange.count=g}applyMatrix4(a){const g=this.attributes.position;g!==void 0&&(g.applyMatrix4(a),g.needsUpdate=!0);const w=this.attributes.normal;if(w!==void 0){const E=new Je().getNormalMatrix(a);w.applyNormalMatrix(E),w.needsUpdate=!0}const x=this.attributes.tangent;return x!==void 0&&(x.transformDirection(a),x.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(a){return Gr.makeRotationFromQuaternion(a),this.applyMatrix4(Gr),this}rotateX(a){return Gr.makeRotationX(a),this.applyMatrix4(Gr),this}rotateY(a){return Gr.makeRotationY(a),this.applyMatrix4(Gr),this}rotateZ(a){return Gr.makeRotationZ(a),this.applyMatrix4(Gr),this}translate(a,g,w){return Gr.makeTranslation(a,g,w),this.applyMatrix4(Gr),this}scale(a,g,w){return Gr.makeScale(a,g,w),this.applyMatrix4(Gr),this}lookAt(a){return Ya.lookAt(a),Ya.updateMatrix(),this.applyMatrix4(Ya.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vl).negate(),this.translate(Vl.x,Vl.y,Vl.z),this}setFromPoints(a){const g=[];for(let w=0,x=a.length;w<x;w++){const E=a[w];g.push(E.x,E.y,E.z||0)}return this.setAttribute("position",new gi(g,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ho);const a=this.attributes.position,g=this.morphAttributes.position;if(a&&a.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E2(-1/0,-1/0,-1/0),new E2(1/0,1/0,1/0));return}if(a!==void 0){if(this.boundingBox.setFromBufferAttribute(a),g)for(let w=0,x=g.length;w<x;w++){const E=g[w];yr.setFromBufferAttribute(E),this.morphTargetsRelative?($i.addVectors(this.boundingBox.min,yr.min),this.boundingBox.expandByPoint($i),$i.addVectors(this.boundingBox.max,yr.max),this.boundingBox.expandByPoint($i)):(this.boundingBox.expandByPoint(yr.min),this.boundingBox.expandByPoint(yr.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vo);const a=this.attributes.position,g=this.morphAttributes.position;if(a&&a.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E2,1/0);return}if(a){const w=this.boundingSphere.center;if(yr.setFromBufferAttribute(a),g)for(let E=0,P=g.length;E<P;E++){const O=g[E];Ef.setFromBufferAttribute(O),this.morphTargetsRelative?($i.addVectors(yr.min,Ef.min),yr.expandByPoint($i),$i.addVectors(yr.max,Ef.max),yr.expandByPoint($i)):(yr.expandByPoint(Ef.min),yr.expandByPoint(Ef.max))}yr.getCenter(w);let x=0;for(let E=0,P=a.count;E<P;E++)$i.fromBufferAttribute(a,E),x=Math.max(x,w.distanceToSquared($i));if(g)for(let E=0,P=g.length;E<P;E++){const O=g[E],G=this.morphTargetsRelative;for(let h=0,X=O.count;h<X;h++)$i.fromBufferAttribute(O,h),G&&(Vl.fromBufferAttribute(a,h),$i.add(Vl)),x=Math.max(x,w.distanceToSquared($i))}this.boundingSphere.radius=Math.sqrt(x),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const a=this.index,g=this.attributes;if(a===null||g.position===void 0||g.normal===void 0||g.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const w=g.position,x=g.normal,E=g.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _0(new Float32Array(4*w.count),4));const P=this.getAttribute("tangent"),O=[],G=[];for(let N2=0;N2<w.count;N2++)O[N2]=new E2,G[N2]=new E2;const h=new E2,X=new E2,Z=new E2,K=new Lt,e2=new Lt,l2=new Lt,p2=new E2,r2=new E2;function o2(N2,B2,g2){h.fromBufferAttribute(w,N2),X.fromBufferAttribute(w,B2),Z.fromBufferAttribute(w,g2),K.fromBufferAttribute(E,N2),e2.fromBufferAttribute(E,B2),l2.fromBufferAttribute(E,g2),X.sub(h),Z.sub(h),e2.sub(K),l2.sub(K);const W2=1/(e2.x*l2.y-l2.x*e2.y);isFinite(W2)&&(p2.copy(X).multiplyScalar(l2.y).addScaledVector(Z,-e2.y).multiplyScalar(W2),r2.copy(Z).multiplyScalar(e2.x).addScaledVector(X,-l2.x).multiplyScalar(W2),O[N2].add(p2),O[B2].add(p2),O[g2].add(p2),G[N2].add(r2),G[B2].add(r2),G[g2].add(r2))}let v2=this.groups;v2.length===0&&(v2=[{start:0,count:a.count}]);for(let N2=0,B2=v2.length;N2<B2;++N2){const g2=v2[N2],W2=g2.start,nt=g2.count;for(let U2=W2,q2=W2+nt;U2<q2;U2+=3)o2(a.getX(U2+0),a.getX(U2+1),a.getX(U2+2))}const m2=new E2,k2=new E2,j2=new E2,b2=new E2;function D2(N2){j2.fromBufferAttribute(x,N2),b2.copy(j2);const B2=O[N2];m2.copy(B2),m2.sub(j2.multiplyScalar(j2.dot(B2))).normalize(),k2.crossVectors(b2,B2);const W2=k2.dot(G[N2])<0?-1:1;P.setXYZW(N2,m2.x,m2.y,m2.z,W2)}for(let N2=0,B2=v2.length;N2<B2;++N2){const g2=v2[N2],W2=g2.start,nt=g2.count;for(let U2=W2,q2=W2+nt;U2<q2;U2+=3)D2(a.getX(U2+0)),D2(a.getX(U2+1)),D2(a.getX(U2+2))}}computeVertexNormals(){const a=this.index,g=this.getAttribute("position");if(g!==void 0){let w=this.getAttribute("normal");if(w===void 0)w=new _0(new Float32Array(g.count*3),3),this.setAttribute("normal",w);else for(let K=0,e2=w.count;K<e2;K++)w.setXYZ(K,0,0,0);const x=new E2,E=new E2,P=new E2,O=new E2,G=new E2,h=new E2,X=new E2,Z=new E2;if(a)for(let K=0,e2=a.count;K<e2;K+=3){const l2=a.getX(K+0),p2=a.getX(K+1),r2=a.getX(K+2);x.fromBufferAttribute(g,l2),E.fromBufferAttribute(g,p2),P.fromBufferAttribute(g,r2),X.subVectors(P,E),Z.subVectors(x,E),X.cross(Z),O.fromBufferAttribute(w,l2),G.fromBufferAttribute(w,p2),h.fromBufferAttribute(w,r2),O.add(X),G.add(X),h.add(X),w.setXYZ(l2,O.x,O.y,O.z),w.setXYZ(p2,G.x,G.y,G.z),w.setXYZ(r2,h.x,h.y,h.z)}else for(let K=0,e2=g.count;K<e2;K+=3)x.fromBufferAttribute(g,K+0),E.fromBufferAttribute(g,K+1),P.fromBufferAttribute(g,K+2),X.subVectors(P,E),Z.subVectors(x,E),X.cross(Z),w.setXYZ(K+0,X.x,X.y,X.z),w.setXYZ(K+1,X.x,X.y,X.z),w.setXYZ(K+2,X.x,X.y,X.z);this.normalizeNormals(),w.needsUpdate=!0}}normalizeNormals(){const a=this.attributes.normal;for(let g=0,w=a.count;g<w;g++)$i.fromBufferAttribute(a,g),$i.normalize(),a.setXYZ(g,$i.x,$i.y,$i.z)}toNonIndexed(){function a(O,G){const h=O.array,X=O.itemSize,Z=O.normalized,K=new h.constructor(G.length*X);let e2=0,l2=0;for(let p2=0,r2=G.length;p2<r2;p2++){O.isInterleavedBufferAttribute?e2=G[p2]*O.data.stride+O.offset:e2=G[p2]*X;for(let o2=0;o2<X;o2++)K[l2++]=h[e2++]}return new _0(K,X,Z)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const g=new n0,w=this.index.array,x=this.attributes;for(const O in x){const G=x[O],h=a(G,w);g.setAttribute(O,h)}const E=this.morphAttributes;for(const O in E){const G=[],h=E[O];for(let X=0,Z=h.length;X<Z;X++){const K=h[X],e2=a(K,w);G.push(e2)}g.morphAttributes[O]=G}g.morphTargetsRelative=this.morphTargetsRelative;const P=this.groups;for(let O=0,G=P.length;O<G;O++){const h=P[O];g.addGroup(h.start,h.count,h.materialIndex)}return g}toJSON(){const a={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),Object.keys(this.userData).length>0&&(a.userData=this.userData),this.parameters!==void 0){const G=this.parameters;for(const h in G)G[h]!==void 0&&(a[h]=G[h]);return a}a.data={attributes:{}};const g=this.index;g!==null&&(a.data.index={type:g.array.constructor.name,array:Array.prototype.slice.call(g.array)});const w=this.attributes;for(const G in w){const h=w[G];a.data.attributes[G]=h.toJSON(a.data)}const x={};let E=!1;for(const G in this.morphAttributes){const h=this.morphAttributes[G],X=[];for(let Z=0,K=h.length;Z<K;Z++){const e2=h[Z];X.push(e2.toJSON(a.data))}X.length>0&&(x[G]=X,E=!0)}E&&(a.data.morphAttributes=x,a.data.morphTargetsRelative=this.morphTargetsRelative);const P=this.groups;P.length>0&&(a.data.groups=JSON.parse(JSON.stringify(P)));const O=this.boundingSphere;return O!==null&&(a.data.boundingSphere={center:O.center.toArray(),radius:O.radius}),a}clone(){return new this.constructor().copy(this)}copy(a){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const g={};this.name=a.name;const w=a.index;w!==null&&this.setIndex(w.clone(g));const x=a.attributes;for(const h in x){const X=x[h];this.setAttribute(h,X.clone(g))}const E=a.morphAttributes;for(const h in E){const X=[],Z=E[h];for(let K=0,e2=Z.length;K<e2;K++)X.push(Z[K].clone(g));this.morphAttributes[h]=X}this.morphTargetsRelative=a.morphTargetsRelative;const P=a.groups;for(let h=0,X=P.length;h<X;h++){const Z=P[h];this.addGroup(Z.start,Z.count,Z.materialIndex)}const O=a.boundingBox;O!==null&&(this.boundingBox=O.clone());const G=a.boundingSphere;return G!==null&&(this.boundingSphere=G.clone()),this.drawRange.start=a.drawRange.start,this.drawRange.count=a.drawRange.count,this.userData=a.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dV=new te,U1=new ep,s4=new Vo,AV=new E2,zl=new E2,Ql=new E2,Yl=new E2,Xa=new E2,l4=new E2,u4=new Lt,f4=new Lt,p4=new Lt,gV=new E2,yV=new E2,kV=new E2,c4=new E2,_4=new E2;class e0 extends Un{constructor(a=new n0,g=new xs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=a,this.material=g,this.updateMorphTargets()}copy(a,g){return super.copy(a,g),a.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=a.morphTargetInfluences.slice()),a.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},a.morphTargetDictionary)),this.material=Array.isArray(a.material)?a.material.slice():a.material,this.geometry=a.geometry,this}updateMorphTargets(){const g=this.geometry.morphAttributes,w=Object.keys(g);if(w.length>0){const x=g[w[0]];if(x!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let E=0,P=x.length;E<P;E++){const O=x[E].name||String(E);this.morphTargetInfluences.push(0),this.morphTargetDictionary[O]=E}}}}getVertexPosition(a,g){const w=this.geometry,x=w.attributes.position,E=w.morphAttributes.position,P=w.morphTargetsRelative;g.fromBufferAttribute(x,a);const O=this.morphTargetInfluences;if(E&&O){l4.set(0,0,0);for(let G=0,h=E.length;G<h;G++){const X=O[G],Z=E[G];X!==0&&(Xa.fromBufferAttribute(Z,a),P?l4.addScaledVector(Xa,X):l4.addScaledVector(Xa.sub(g),X))}g.add(l4)}return g}raycast(a,g){const w=this.geometry,x=this.material,E=this.matrixWorld;x!==void 0&&(w.boundingSphere===null&&w.computeBoundingSphere(),s4.copy(w.boundingSphere),s4.applyMatrix4(E),U1.copy(a.ray).recast(a.near),!(s4.containsPoint(U1.origin)===!1&&(U1.intersectSphere(s4,AV)===null||U1.origin.distanceToSquared(AV)>(a.far-a.near)**2))&&(dV.copy(E).invert(),U1.copy(a.ray).applyMatrix4(dV),!(w.boundingBox!==null&&U1.intersectsBox(w.boundingBox)===!1)&&this._computeIntersections(a,g,U1)))}_computeIntersections(a,g,w){let x;const E=this.geometry,P=this.material,O=E.index,G=E.attributes.position,h=E.attributes.uv,X=E.attributes.uv1,Z=E.attributes.normal,K=E.groups,e2=E.drawRange;if(O!==null)if(Array.isArray(P))for(let l2=0,p2=K.length;l2<p2;l2++){const r2=K[l2],o2=P[r2.materialIndex],v2=Math.max(r2.start,e2.start),m2=Math.min(O.count,Math.min(r2.start+r2.count,e2.start+e2.count));for(let k2=v2,j2=m2;k2<j2;k2+=3){const b2=O.getX(k2),D2=O.getX(k2+1),N2=O.getX(k2+2);x=a4(this,o2,a,w,h,X,Z,b2,D2,N2),x&&(x.faceIndex=Math.floor(k2/3),x.face.materialIndex=r2.materialIndex,g.push(x))}}else{const l2=Math.max(0,e2.start),p2=Math.min(O.count,e2.start+e2.count);for(let r2=l2,o2=p2;r2<o2;r2+=3){const v2=O.getX(r2),m2=O.getX(r2+1),k2=O.getX(r2+2);x=a4(this,P,a,w,h,X,Z,v2,m2,k2),x&&(x.faceIndex=Math.floor(r2/3),g.push(x))}}else if(G!==void 0)if(Array.isArray(P))for(let l2=0,p2=K.length;l2<p2;l2++){const r2=K[l2],o2=P[r2.materialIndex],v2=Math.max(r2.start,e2.start),m2=Math.min(G.count,Math.min(r2.start+r2.count,e2.start+e2.count));for(let k2=v2,j2=m2;k2<j2;k2+=3){const b2=k2,D2=k2+1,N2=k2+2;x=a4(this,o2,a,w,h,X,Z,b2,D2,N2),x&&(x.faceIndex=Math.floor(k2/3),x.face.materialIndex=r2.materialIndex,g.push(x))}}else{const l2=Math.max(0,e2.start),p2=Math.min(G.count,e2.start+e2.count);for(let r2=l2,o2=p2;r2<o2;r2+=3){const v2=r2,m2=r2+1,k2=r2+2;x=a4(this,P,a,w,h,X,Z,v2,m2,k2),x&&(x.faceIndex=Math.floor(r2/3),g.push(x))}}}}function S42(D,a,g,w,x,E,P,O){let G;if(a.side===nr?G=w.intersectTriangle(P,E,x,!0,O):G=w.intersectTriangle(x,E,P,a.side===Wo,O),G===null)return null;_4.copy(O),_4.applyMatrix4(D.matrixWorld);const h=g.ray.origin.distanceTo(_4);return h<g.near||h>g.far?null:{distance:h,point:_4.clone(),object:D}}function a4(D,a,g,w,x,E,P,O,G,h){D.getVertexPosition(O,zl),D.getVertexPosition(G,Ql),D.getVertexPosition(h,Yl);const X=S42(D,a,g,w,zl,Ql,Yl,c4);if(X){x&&(u4.fromBufferAttribute(x,O),f4.fromBufferAttribute(x,G),p4.fromBufferAttribute(x,h),X.uv=Uo.getInterpolation(c4,zl,Ql,Yl,u4,f4,p4,new Lt)),E&&(u4.fromBufferAttribute(E,O),f4.fromBufferAttribute(E,G),p4.fromBufferAttribute(E,h),X.uv1=Uo.getInterpolation(c4,zl,Ql,Yl,u4,f4,p4,new Lt)),P&&(gV.fromBufferAttribute(P,O),yV.fromBufferAttribute(P,G),kV.fromBufferAttribute(P,h),X.normal=Uo.getInterpolation(c4,zl,Ql,Yl,gV,yV,kV,new E2),X.normal.dot(w.direction)>0&&X.normal.multiplyScalar(-1));const Z={a:O,b:G,c:h,normal:new E2,materialIndex:0};Uo.getNormal(zl,Ql,Yl,Z.normal),X.face=Z}return X}class gu extends n0{constructor(a=1,g=1,w=1,x=1,E=1,P=1){super(),this.type="BoxGeometry",this.parameters={width:a,height:g,depth:w,widthSegments:x,heightSegments:E,depthSegments:P};const O=this;x=Math.floor(x),E=Math.floor(E),P=Math.floor(P);const G=[],h=[],X=[],Z=[];let K=0,e2=0;l2("z","y","x",-1,-1,w,g,a,P,E,0),l2("z","y","x",1,-1,w,g,-a,P,E,1),l2("x","z","y",1,1,a,w,g,x,P,2),l2("x","z","y",1,-1,a,w,-g,x,P,3),l2("x","y","z",1,-1,a,g,w,x,E,4),l2("x","y","z",-1,-1,a,g,-w,x,E,5),this.setIndex(G),this.setAttribute("position",new gi(h,3)),this.setAttribute("normal",new gi(X,3)),this.setAttribute("uv",new gi(Z,2));function l2(p2,r2,o2,v2,m2,k2,j2,b2,D2,N2,B2){const g2=k2/D2,W2=j2/N2,nt=k2/2,U2=j2/2,q2=b2/2,ft=D2+1,ut=N2+1;let Et=0,it=0;const At=new E2;for(let yt=0;yt<ut;yt++){const re=yt*W2-U2;for(let ye=0;ye<ft;ye++){const Be=ye*g2-nt;At[p2]=Be*v2,At[r2]=re*m2,At[o2]=q2,h.push(At.x,At.y,At.z),At[p2]=0,At[r2]=0,At[o2]=b2>0?1:-1,X.push(At.x,At.y,At.z),Z.push(ye/D2),Z.push(1-yt/N2),Et+=1}}for(let yt=0;yt<N2;yt++)for(let re=0;re<D2;re++){const ye=K+re+ft*yt,Be=K+re+ft*(yt+1),rt=K+(re+1)+ft*(yt+1),Bt=K+(re+1)+ft*yt;G.push(ye,Be,Bt),G.push(Be,rt,Bt),it+=6}O.addGroup(e2,it,B2),e2+=it,K+=Et}}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new gu(a.width,a.height,a.depth,a.widthSegments,a.heightSegments,a.depthSegments)}}function mu(D){const a={};for(const g in D){a[g]={};for(const w in D[g]){const x=D[g][w];x&&(x.isColor||x.isMatrix3||x.isMatrix4||x.isVector2||x.isVector3||x.isVector4||x.isTexture||x.isQuaternion)?x.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),a[g][w]=null):a[g][w]=x.clone():Array.isArray(x)?a[g][w]=x.slice():a[g][w]=x}}return a}function F0(D){const a={};for(let g=0;g<D.length;g++){const w=mu(D[g]);for(const x in w)a[x]=w[x]}return a}function x42(D){const a=[];for(let g=0;g<D.length;g++)a.push(D[g].clone());return a}function Jz(D){const a=D.getRenderTarget();return a===null?D.outputColorSpace:a.isXRRenderTarget===!0?a.texture.colorSpace:Dn.workingColorSpace}const C42={clone:mu,merge:F0};var M42=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,T42=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class v1 extends zr{constructor(a){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=M42,this.fragmentShader=T42,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,a!==void 0&&this.setValues(a)}copy(a){return super.copy(a),this.fragmentShader=a.fragmentShader,this.vertexShader=a.vertexShader,this.uniforms=mu(a.uniforms),this.uniformsGroups=x42(a.uniformsGroups),this.defines=Object.assign({},a.defines),this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.fog=a.fog,this.lights=a.lights,this.clipping=a.clipping,this.extensions=Object.assign({},a.extensions),this.glslVersion=a.glslVersion,this}toJSON(a){const g=super.toJSON(a);g.glslVersion=this.glslVersion,g.uniforms={};for(const x in this.uniforms){const P=this.uniforms[x].value;P&&P.isTexture?g.uniforms[x]={type:"t",value:P.toJSON(a).uuid}:P&&P.isColor?g.uniforms[x]={type:"c",value:P.getHex()}:P&&P.isVector2?g.uniforms[x]={type:"v2",value:P.toArray()}:P&&P.isVector3?g.uniforms[x]={type:"v3",value:P.toArray()}:P&&P.isVector4?g.uniforms[x]={type:"v4",value:P.toArray()}:P&&P.isMatrix3?g.uniforms[x]={type:"m3",value:P.toArray()}:P&&P.isMatrix4?g.uniforms[x]={type:"m4",value:P.toArray()}:g.uniforms[x]={value:P}}Object.keys(this.defines).length>0&&(g.defines=this.defines),g.vertexShader=this.vertexShader,g.fragmentShader=this.fragmentShader,g.lights=this.lights,g.clipping=this.clipping;const w={};for(const x in this.extensions)this.extensions[x]===!0&&(w[x]=!0);return Object.keys(w).length>0&&(g.extensions=w),g}}class $6 extends Un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new te,this.projectionMatrix=new te,this.projectionMatrixInverse=new te,this.coordinateSystem=Ss}copy(a,g){return super.copy(a,g),this.matrixWorldInverse.copy(a.matrixWorldInverse),this.projectionMatrix.copy(a.projectionMatrix),this.projectionMatrixInverse.copy(a.projectionMatrixInverse),this.coordinateSystem=a.coordinateSystem,this}getWorldDirection(a){return super.getWorldDirection(a).negate()}updateMatrixWorld(a){super.updateMatrixWorld(a),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(a,g){super.updateWorldMatrix(a,g),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const u1=new E2,vV=new Lt,wV=new Lt;class S0 extends $6{constructor(a=50,g=1,w=.1,x=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=a,this.zoom=1,this.near=w,this.far=x,this.focus=10,this.aspect=g,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(a,g){return super.copy(a,g),this.fov=a.fov,this.zoom=a.zoom,this.near=a.near,this.far=a.far,this.focus=a.focus,this.aspect=a.aspect,this.view=a.view===null?null:Object.assign({},a.view),this.filmGauge=a.filmGauge,this.filmOffset=a.filmOffset,this}setFocalLength(a){const g=.5*this.getFilmHeight()/a;this.fov=hu*2*Math.atan(g),this.updateProjectionMatrix()}getFocalLength(){const a=Math.tan(Of*.5*this.fov);return .5*this.getFilmHeight()/a}getEffectiveFOV(){return hu*2*Math.atan(Math.tan(Of*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(a,g,w){u1.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),g.set(u1.x,u1.y).multiplyScalar(-a/u1.z),u1.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),w.set(u1.x,u1.y).multiplyScalar(-a/u1.z)}getViewSize(a,g){return this.getViewBounds(a,vV,wV),g.subVectors(wV,vV)}setViewOffset(a,g,w,x,E,P){this.aspect=a/g,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=a,this.view.fullHeight=g,this.view.offsetX=w,this.view.offsetY=x,this.view.width=E,this.view.height=P,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const a=this.near;let g=a*Math.tan(Of*.5*this.fov)/this.zoom,w=2*g,x=this.aspect*w,E=-.5*x;const P=this.view;if(this.view!==null&&this.view.enabled){const G=P.fullWidth,h=P.fullHeight;E+=P.offsetX*x/G,g-=P.offsetY*w/h,x*=P.width/G,w*=P.height/h}const O=this.filmOffset;O!==0&&(E+=a*O/this.getFilmWidth()),this.projectionMatrix.makePerspective(E,E+x,g,g-w,a,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(a){const g=super.toJSON(a);return g.object.fov=this.fov,g.object.zoom=this.zoom,g.object.near=this.near,g.object.far=this.far,g.object.focus=this.focus,g.object.aspect=this.aspect,this.view!==null&&(g.object.view=Object.assign({},this.view)),g.object.filmGauge=this.filmGauge,g.object.filmOffset=this.filmOffset,g}}const Xl=-90,Zl=1;class E42 extends Un{constructor(a,g,w){super(),this.type="CubeCamera",this.renderTarget=w,this.coordinateSystem=null,this.activeMipmapLevel=0;const x=new S0(Xl,Zl,a,g);x.layers=this.layers,this.add(x);const E=new S0(Xl,Zl,a,g);E.layers=this.layers,this.add(E);const P=new S0(Xl,Zl,a,g);P.layers=this.layers,this.add(P);const O=new S0(Xl,Zl,a,g);O.layers=this.layers,this.add(O);const G=new S0(Xl,Zl,a,g);G.layers=this.layers,this.add(G);const h=new S0(Xl,Zl,a,g);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const a=this.coordinateSystem,g=this.children.concat(),[w,x,E,P,O,G]=g;for(const h of g)this.remove(h);if(a===Ss)w.up.set(0,1,0),w.lookAt(1,0,0),x.up.set(0,1,0),x.lookAt(-1,0,0),E.up.set(0,0,-1),E.lookAt(0,1,0),P.up.set(0,0,1),P.lookAt(0,-1,0),O.up.set(0,1,0),O.lookAt(0,0,1),G.up.set(0,1,0),G.lookAt(0,0,-1);else if(a===W4)w.up.set(0,-1,0),w.lookAt(-1,0,0),x.up.set(0,-1,0),x.lookAt(1,0,0),E.up.set(0,0,1),E.lookAt(0,1,0),P.up.set(0,0,-1),P.lookAt(0,-1,0),O.up.set(0,-1,0),O.lookAt(0,0,1),G.up.set(0,-1,0),G.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+a);for(const h of g)this.add(h),h.updateMatrixWorld()}update(a,g){this.parent===null&&this.updateMatrixWorld();const{renderTarget:w,activeMipmapLevel:x}=this;this.coordinateSystem!==a.coordinateSystem&&(this.coordinateSystem=a.coordinateSystem,this.updateCoordinateSystem());const[E,P,O,G,h,X]=this.children,Z=a.getRenderTarget(),K=a.getActiveCubeFace(),e2=a.getActiveMipmapLevel(),l2=a.xr.enabled;a.xr.enabled=!1;const p2=w.texture.generateMipmaps;w.texture.generateMipmaps=!1,a.setRenderTarget(w,0,x),a.render(g,E),a.setRenderTarget(w,1,x),a.render(g,P),a.setRenderTarget(w,2,x),a.render(g,O),a.setRenderTarget(w,3,x),a.render(g,G),a.setRenderTarget(w,4,x),a.render(g,h),w.texture.generateMipmaps=p2,a.setRenderTarget(w,5,x),a.render(g,X),a.setRenderTarget(Z,K,e2),a.xr.enabled=l2,w.texture.needsPMREMUpdate=!0}}class Kz extends Ti{constructor(a,g,w,x,E,P,O,G,h,X){a=a!==void 0?a:[],g=g!==void 0?g:pu,super(a,g,w,x,E,P,O,G,h,X),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(a){this.image=a}}class R42 extends X1{constructor(a=1,g={}){super(a,a,g),this.isWebGLCubeRenderTarget=!0;const w={width:a,height:a,depth:1},x=[w,w,w,w,w,w];this.texture=new Kz(x,g.mapping,g.wrapS,g.wrapT,g.magFilter,g.minFilter,g.format,g.type,g.anisotropy,g.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=g.generateMipmaps!==void 0?g.generateMipmaps:!1,this.texture.minFilter=g.minFilter!==void 0?g.minFilter:t0}fromEquirectangularTexture(a,g){this.texture.type=g.type,this.texture.colorSpace=g.colorSpace,this.texture.generateMipmaps=g.generateMipmaps,this.texture.minFilter=g.minFilter,this.texture.magFilter=g.magFilter;const w={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},x=new gu(5,5,5),E=new v1({name:"CubemapFromEquirect",uniforms:mu(w.uniforms),vertexShader:w.vertexShader,fragmentShader:w.fragmentShader,side:nr,blending:d1});E.uniforms.tEquirect.value=g;const P=new e0(x,E),O=g.minFilter;return g.minFilter===Go&&(g.minFilter=t0),new E42(1,10,this).update(a,P),g.minFilter=O,P.geometry.dispose(),P.material.dispose(),this}clear(a,g,w,x){const E=a.getRenderTarget();for(let P=0;P<6;P++)a.setRenderTarget(this,P),a.clear(g,w,x);a.setRenderTarget(E)}}const Za=new E2,b42=new E2,D42=new Je;class c1{constructor(a=new E2(1,0,0),g=0){this.isPlane=!0,this.normal=a,this.constant=g}set(a,g){return this.normal.copy(a),this.constant=g,this}setComponents(a,g,w,x){return this.normal.set(a,g,w),this.constant=x,this}setFromNormalAndCoplanarPoint(a,g){return this.normal.copy(a),this.constant=-g.dot(this.normal),this}setFromCoplanarPoints(a,g,w){const x=Za.subVectors(w,g).cross(b42.subVectors(a,g)).normalize();return this.setFromNormalAndCoplanarPoint(x,a),this}copy(a){return this.normal.copy(a.normal),this.constant=a.constant,this}normalize(){const a=1/this.normal.length();return this.normal.multiplyScalar(a),this.constant*=a,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(a){return this.normal.dot(a)+this.constant}distanceToSphere(a){return this.distanceToPoint(a.center)-a.radius}projectPoint(a,g){return g.copy(a).addScaledVector(this.normal,-this.distanceToPoint(a))}intersectLine(a,g){const w=a.delta(Za),x=this.normal.dot(w);if(x===0)return this.distanceToPoint(a.start)===0?g.copy(a.start):null;const E=-(a.start.dot(this.normal)+this.constant)/x;return E<0||E>1?null:g.copy(a.start).addScaledVector(w,E)}intersectsLine(a){const g=this.distanceToPoint(a.start),w=this.distanceToPoint(a.end);return g<0&&w>0||w<0&&g>0}intersectsBox(a){return a.intersectsPlane(this)}intersectsSphere(a){return a.intersectsPlane(this)}coplanarPoint(a){return a.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(a,g){const w=g||D42.getNormalMatrix(a),x=this.coplanarPoint(Za).applyMatrix4(a),E=this.normal.applyMatrix3(w).normalize();return this.constant=-x.dot(E),this}translate(a){return this.constant-=a.dot(this.normal),this}equals(a){return a.normal.equals(this.normal)&&a.constant===this.constant}clone(){return new this.constructor().copy(this)}}const G1=new Vo,h4=new E2;class th{constructor(a=new c1,g=new c1,w=new c1,x=new c1,E=new c1,P=new c1){this.planes=[a,g,w,x,E,P]}set(a,g,w,x,E,P){const O=this.planes;return O[0].copy(a),O[1].copy(g),O[2].copy(w),O[3].copy(x),O[4].copy(E),O[5].copy(P),this}copy(a){const g=this.planes;for(let w=0;w<6;w++)g[w].copy(a.planes[w]);return this}setFromProjectionMatrix(a,g=Ss){const w=this.planes,x=a.elements,E=x[0],P=x[1],O=x[2],G=x[3],h=x[4],X=x[5],Z=x[6],K=x[7],e2=x[8],l2=x[9],p2=x[10],r2=x[11],o2=x[12],v2=x[13],m2=x[14],k2=x[15];if(w[0].setComponents(G-E,K-h,r2-e2,k2-o2).normalize(),w[1].setComponents(G+E,K+h,r2+e2,k2+o2).normalize(),w[2].setComponents(G+P,K+X,r2+l2,k2+v2).normalize(),w[3].setComponents(G-P,K-X,r2-l2,k2-v2).normalize(),w[4].setComponents(G-O,K-Z,r2-p2,k2-m2).normalize(),g===Ss)w[5].setComponents(G+O,K+Z,r2+p2,k2+m2).normalize();else if(g===W4)w[5].setComponents(O,Z,p2,m2).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+g);return this}intersectsObject(a){if(a.boundingSphere!==void 0)a.boundingSphere===null&&a.computeBoundingSphere(),G1.copy(a.boundingSphere).applyMatrix4(a.matrixWorld);else{const g=a.geometry;g.boundingSphere===null&&g.computeBoundingSphere(),G1.copy(g.boundingSphere).applyMatrix4(a.matrixWorld)}return this.intersectsSphere(G1)}intersectsSprite(a){return G1.center.set(0,0,0),G1.radius=.7071067811865476,G1.applyMatrix4(a.matrixWorld),this.intersectsSphere(G1)}intersectsSphere(a){const g=this.planes,w=a.center,x=-a.radius;for(let E=0;E<6;E++)if(g[E].distanceToPoint(w)<x)return!1;return!0}intersectsBox(a){const g=this.planes;for(let w=0;w<6;w++){const x=g[w];if(h4.x=x.normal.x>0?a.max.x:a.min.x,h4.y=x.normal.y>0?a.max.y:a.min.y,h4.z=x.normal.z>0?a.max.z:a.min.z,x.distanceToPoint(h4)<0)return!1}return!0}containsPoint(a){const g=this.planes;for(let w=0;w<6;w++)if(g[w].distanceToPoint(a)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $z(){let D=null,a=!1,g=null,w=null;function x(E,P){g(E,P),w=D.requestAnimationFrame(x)}return{start:function(){a!==!0&&g!==null&&(w=D.requestAnimationFrame(x),a=!0)},stop:function(){D.cancelAnimationFrame(w),a=!1},setAnimationLoop:function(E){g=E},setContext:function(E){D=E}}}function I42(D){const a=new WeakMap;function g(O,G){const h=O.array,X=O.usage,Z=h.byteLength,K=D.createBuffer();D.bindBuffer(G,K),D.bufferData(G,h,X),O.onUploadCallback();let e2;if(h instanceof Float32Array)e2=D.FLOAT;else if(h instanceof Uint16Array)O.isFloat16BufferAttribute?e2=D.HALF_FLOAT:e2=D.UNSIGNED_SHORT;else if(h instanceof Int16Array)e2=D.SHORT;else if(h instanceof Uint32Array)e2=D.UNSIGNED_INT;else if(h instanceof Int32Array)e2=D.INT;else if(h instanceof Int8Array)e2=D.BYTE;else if(h instanceof Uint8Array)e2=D.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)e2=D.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:K,type:e2,bytesPerElement:h.BYTES_PER_ELEMENT,version:O.version,size:Z}}function w(O,G,h){const X=G.array,Z=G._updateRange,K=G.updateRanges;if(D.bindBuffer(h,O),Z.count===-1&&K.length===0&&D.bufferSubData(h,0,X),K.length!==0){for(let e2=0,l2=K.length;e2<l2;e2++){const p2=K[e2];D.bufferSubData(h,p2.start*X.BYTES_PER_ELEMENT,X,p2.start,p2.count)}G.clearUpdateRanges()}Z.count!==-1&&(D.bufferSubData(h,Z.offset*X.BYTES_PER_ELEMENT,X,Z.offset,Z.count),Z.count=-1),G.onUploadCallback()}function x(O){return O.isInterleavedBufferAttribute&&(O=O.data),a.get(O)}function E(O){O.isInterleavedBufferAttribute&&(O=O.data);const G=a.get(O);G&&(D.deleteBuffer(G.buffer),a.delete(O))}function P(O,G){if(O.isGLBufferAttribute){const X=a.get(O);(!X||X.version<O.version)&&a.set(O,{buffer:O.buffer,type:O.type,bytesPerElement:O.elementSize,version:O.version});return}O.isInterleavedBufferAttribute&&(O=O.data);const h=a.get(O);if(h===void 0)a.set(O,g(O,G));else if(h.version<O.version){if(h.size!==O.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");w(h.buffer,O,G),h.version=O.version}}return{get:x,remove:E,update:P}}class $4 extends n0{constructor(a=1,g=1,w=1,x=1){super(),this.type="PlaneGeometry",this.parameters={width:a,height:g,widthSegments:w,heightSegments:x};const E=a/2,P=g/2,O=Math.floor(w),G=Math.floor(x),h=O+1,X=G+1,Z=a/O,K=g/G,e2=[],l2=[],p2=[],r2=[];for(let o2=0;o2<X;o2++){const v2=o2*K-P;for(let m2=0;m2<h;m2++){const k2=m2*Z-E;l2.push(k2,-v2,0),p2.push(0,0,1),r2.push(m2/O),r2.push(1-o2/G)}}for(let o2=0;o2<G;o2++)for(let v2=0;v2<O;v2++){const m2=v2+h*o2,k2=v2+h*(o2+1),j2=v2+1+h*(o2+1),b2=v2+1+h*o2;e2.push(m2,k2,b2),e2.push(k2,j2,b2)}this.setIndex(e2),this.setAttribute("position",new gi(l2,3)),this.setAttribute("normal",new gi(p2,3)),this.setAttribute("uv",new gi(r2,2))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new $4(a.width,a.height,a.widthSegments,a.heightSegments)}}var P42=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,L42=`#ifdef USE_ALPHAHASH
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
#endif`,F42=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O42=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,j42=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,N42=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,U42=`#ifdef USE_AOMAP
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
#endif`,G42=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,W42=`#ifdef USE_BATCHING
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
#endif`,H42=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,V42=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,z42=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Q42=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Y42=`#ifdef USE_IRIDESCENCE
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
#endif`,X42=`#ifdef USE_BUMPMAP
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
#endif`,Z42=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q42=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,J42=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,K42=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$42=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,t_2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,e_2=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,n_2=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,i_2=`#define PI 3.141592653589793
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
} // validated`,r_2=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,o_2=`vec3 transformedNormal = objectNormal;
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
#endif`,s_2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,l_2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u_2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,f_2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p_2="gl_FragColor = linearToOutputTexel( gl_FragColor );",c_2=`
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
}`,__2=`#ifdef USE_ENVMAP
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
#endif`,a_2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,h_2=`#ifdef USE_ENVMAP
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
#endif`,m_2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d_2=`#ifdef USE_ENVMAP
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
#endif`,A_2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,g_2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,y_2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k_2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v_2=`#ifdef USE_GRADIENTMAP
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
}`,w_2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,B_2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,S_2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,x_2=`uniform bool receiveShadow;
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
#endif`,C_2=`#ifdef USE_ENVMAP
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
#endif`,M_2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,T_2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,E_2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,R_2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b_2=`PhysicalMaterial material;
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
#endif`,D_2=`struct PhysicalMaterial {
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
}`,I_2=`
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
#endif`,P_2=`#if defined( RE_IndirectDiffuse )
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
#endif`,L_2=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,F_2=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,O_2=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,j_2=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N_2=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U_2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,G_2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W_2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,H_2=`#if defined( USE_POINTS_UV )
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
#endif`,V_2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,z_2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Q_2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Y_2=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X_2=`#ifdef USE_MORPHNORMALS
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
#endif`,Z_2=`#ifdef USE_MORPHTARGETS
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
#endif`,q_2=`#ifdef USE_MORPHTARGETS
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
#endif`,J_2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,K_2=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$_2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t82=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,e82=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,n82=`#ifdef USE_NORMALMAP
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
#endif`,i82=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,r82=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,o82=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,s82=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,l82=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,u82=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,f82=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,p82=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,c82=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,_82=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,a82=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h82=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,m82=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d82=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,A82=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,g82=`float getShadowMask() {
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
}`,y82=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,k82=`#ifdef USE_SKINNING
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
#endif`,v82=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,w82=`#ifdef USE_SKINNING
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
#endif`,B82=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,S82=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,x82=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,C82=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,M82=`#ifdef USE_TRANSMISSION
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
#endif`,T82=`#ifdef USE_TRANSMISSION
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
#endif`,E82=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,R82=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,b82=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,D82=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const I82=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,P82=`uniform sampler2D t2D;
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
}`,L82=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F82=`#ifdef ENVMAP_TYPE_CUBE
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
}`,O82=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j82=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N82=`#include <common>
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
}`,U82=`#if DEPTH_PACKING == 3200
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
}`,G82=`#define DISTANCE
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
}`,W82=`#define DISTANCE
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
}`,H82=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,V82=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z82=`uniform float scale;
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
}`,Q82=`uniform vec3 diffuse;
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
}`,Y82=`#include <common>
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
}`,X82=`uniform vec3 diffuse;
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
}`,Z82=`#define LAMBERT
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
}`,q82=`#define LAMBERT
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
}`,J82=`#define MATCAP
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
}`,K82=`#define MATCAP
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
}`,$82=`#define NORMAL
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
}`,ta2=`#define NORMAL
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
}`,ea2=`#define PHONG
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
}`,na2=`#define PHONG
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
}`,ia2=`#define STANDARD
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
}`,ra2=`#define STANDARD
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
}`,oa2=`#define TOON
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
}`,sa2=`#define TOON
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
}`,la2=`uniform float size;
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
}`,ua2=`uniform vec3 diffuse;
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
}`,fa2=`#include <common>
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
}`,pa2=`uniform vec3 color;
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
}`,ca2=`uniform float rotation;
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
}`,_a2=`uniform vec3 diffuse;
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
}`,tn={alphahash_fragment:P42,alphahash_pars_fragment:L42,alphamap_fragment:F42,alphamap_pars_fragment:O42,alphatest_fragment:j42,alphatest_pars_fragment:N42,aomap_fragment:U42,aomap_pars_fragment:G42,batching_pars_vertex:W42,batching_vertex:H42,begin_vertex:V42,beginnormal_vertex:z42,bsdfs:Q42,iridescence_fragment:Y42,bumpmap_pars_fragment:X42,clipping_planes_fragment:Z42,clipping_planes_pars_fragment:q42,clipping_planes_pars_vertex:J42,clipping_planes_vertex:K42,color_fragment:$42,color_pars_fragment:t_2,color_pars_vertex:e_2,color_vertex:n_2,common:i_2,cube_uv_reflection_fragment:r_2,defaultnormal_vertex:o_2,displacementmap_pars_vertex:s_2,displacementmap_vertex:l_2,emissivemap_fragment:u_2,emissivemap_pars_fragment:f_2,colorspace_fragment:p_2,colorspace_pars_fragment:c_2,envmap_fragment:__2,envmap_common_pars_fragment:a_2,envmap_pars_fragment:h_2,envmap_pars_vertex:m_2,envmap_physical_pars_fragment:C_2,envmap_vertex:d_2,fog_vertex:A_2,fog_pars_vertex:g_2,fog_fragment:y_2,fog_pars_fragment:k_2,gradientmap_pars_fragment:v_2,lightmap_pars_fragment:w_2,lights_lambert_fragment:B_2,lights_lambert_pars_fragment:S_2,lights_pars_begin:x_2,lights_toon_fragment:M_2,lights_toon_pars_fragment:T_2,lights_phong_fragment:E_2,lights_phong_pars_fragment:R_2,lights_physical_fragment:b_2,lights_physical_pars_fragment:D_2,lights_fragment_begin:I_2,lights_fragment_maps:P_2,lights_fragment_end:L_2,logdepthbuf_fragment:F_2,logdepthbuf_pars_fragment:O_2,logdepthbuf_pars_vertex:j_2,logdepthbuf_vertex:N_2,map_fragment:U_2,map_pars_fragment:G_2,map_particle_fragment:W_2,map_particle_pars_fragment:H_2,metalnessmap_fragment:V_2,metalnessmap_pars_fragment:z_2,morphinstance_vertex:Q_2,morphcolor_vertex:Y_2,morphnormal_vertex:X_2,morphtarget_pars_vertex:Z_2,morphtarget_vertex:q_2,normal_fragment_begin:J_2,normal_fragment_maps:K_2,normal_pars_fragment:$_2,normal_pars_vertex:t82,normal_vertex:e82,normalmap_pars_fragment:n82,clearcoat_normal_fragment_begin:i82,clearcoat_normal_fragment_maps:r82,clearcoat_pars_fragment:o82,iridescence_pars_fragment:s82,opaque_fragment:l82,packing:u82,premultiplied_alpha_fragment:f82,project_vertex:p82,dithering_fragment:c82,dithering_pars_fragment:_82,roughnessmap_fragment:a82,roughnessmap_pars_fragment:h82,shadowmap_pars_fragment:m82,shadowmap_pars_vertex:d82,shadowmap_vertex:A82,shadowmask_pars_fragment:g82,skinbase_vertex:y82,skinning_pars_vertex:k82,skinning_vertex:v82,skinnormal_vertex:w82,specularmap_fragment:B82,specularmap_pars_fragment:S82,tonemapping_fragment:x82,tonemapping_pars_fragment:C82,transmission_fragment:M82,transmission_pars_fragment:T82,uv_pars_fragment:E82,uv_pars_vertex:R82,uv_vertex:b82,worldpos_vertex:D82,background_vert:I82,background_frag:P82,backgroundCube_vert:L82,backgroundCube_frag:F82,cube_vert:O82,cube_frag:j82,depth_vert:N82,depth_frag:U82,distanceRGBA_vert:G82,distanceRGBA_frag:W82,equirect_vert:H82,equirect_frag:V82,linedashed_vert:z82,linedashed_frag:Q82,meshbasic_vert:Y82,meshbasic_frag:X82,meshlambert_vert:Z82,meshlambert_frag:q82,meshmatcap_vert:J82,meshmatcap_frag:K82,meshnormal_vert:$82,meshnormal_frag:ta2,meshphong_vert:ea2,meshphong_frag:na2,meshphysical_vert:ia2,meshphysical_frag:ra2,meshtoon_vert:oa2,meshtoon_frag:sa2,points_vert:la2,points_frag:ua2,shadow_vert:fa2,shadow_frag:pa2,sprite_vert:ca2,sprite_frag:_a2},Zt={common:{diffuse:{value:new ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new Lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new ce(16777215)},opacity:{value:1},center:{value:new Lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},jo={basic:{uniforms:F0([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.fog]),vertexShader:tn.meshbasic_vert,fragmentShader:tn.meshbasic_frag},lambert:{uniforms:F0([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new ce(0)}}]),vertexShader:tn.meshlambert_vert,fragmentShader:tn.meshlambert_frag},phong:{uniforms:F0([Zt.common,Zt.specularmap,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,Zt.lights,{emissive:{value:new ce(0)},specular:{value:new ce(1118481)},shininess:{value:30}}]),vertexShader:tn.meshphong_vert,fragmentShader:tn.meshphong_frag},standard:{uniforms:F0([Zt.common,Zt.envmap,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.roughnessmap,Zt.metalnessmap,Zt.fog,Zt.lights,{emissive:{value:new ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tn.meshphysical_vert,fragmentShader:tn.meshphysical_frag},toon:{uniforms:F0([Zt.common,Zt.aomap,Zt.lightmap,Zt.emissivemap,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.gradientmap,Zt.fog,Zt.lights,{emissive:{value:new ce(0)}}]),vertexShader:tn.meshtoon_vert,fragmentShader:tn.meshtoon_frag},matcap:{uniforms:F0([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,Zt.fog,{matcap:{value:null}}]),vertexShader:tn.meshmatcap_vert,fragmentShader:tn.meshmatcap_frag},points:{uniforms:F0([Zt.points,Zt.fog]),vertexShader:tn.points_vert,fragmentShader:tn.points_frag},dashed:{uniforms:F0([Zt.common,Zt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tn.linedashed_vert,fragmentShader:tn.linedashed_frag},depth:{uniforms:F0([Zt.common,Zt.displacementmap]),vertexShader:tn.depth_vert,fragmentShader:tn.depth_frag},normal:{uniforms:F0([Zt.common,Zt.bumpmap,Zt.normalmap,Zt.displacementmap,{opacity:{value:1}}]),vertexShader:tn.meshnormal_vert,fragmentShader:tn.meshnormal_frag},sprite:{uniforms:F0([Zt.sprite,Zt.fog]),vertexShader:tn.sprite_vert,fragmentShader:tn.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tn.background_vert,fragmentShader:tn.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:tn.backgroundCube_vert,fragmentShader:tn.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tn.cube_vert,fragmentShader:tn.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tn.equirect_vert,fragmentShader:tn.equirect_frag},distanceRGBA:{uniforms:F0([Zt.common,Zt.displacementmap,{referencePosition:{value:new E2},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tn.distanceRGBA_vert,fragmentShader:tn.distanceRGBA_frag},shadow:{uniforms:F0([Zt.lights,Zt.fog,{color:{value:new ce(0)},opacity:{value:1}}]),vertexShader:tn.shadow_vert,fragmentShader:tn.shadow_frag}};jo.physical={uniforms:F0([jo.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new Lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new Lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new ce(0)},specularColor:{value:new ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new Lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:tn.meshphysical_vert,fragmentShader:tn.meshphysical_frag};const m4={r:0,b:0,g:0},W1=new Ai,aa2=new te;function ha2(D,a,g,w,x,E,P){const O=new ce(0);let G=E===!0?0:1,h,X,Z=null,K=0,e2=null;function l2(v2){let m2=v2.isScene===!0?v2.background:null;return m2&&m2.isTexture&&(m2=(v2.backgroundBlurriness>0?g:a).get(m2)),m2}function p2(v2){let m2=!1;const k2=l2(v2);k2===null?o2(O,G):k2&&k2.isColor&&(o2(k2,1),m2=!0);const j2=D.xr.getEnvironmentBlendMode();j2==="additive"?w.buffers.color.setClear(0,0,0,1,P):j2==="alpha-blend"&&w.buffers.color.setClear(0,0,0,0,P),(D.autoClear||m2)&&D.clear(D.autoClearColor,D.autoClearDepth,D.autoClearStencil)}function r2(v2,m2){const k2=l2(m2);k2&&(k2.isCubeTexture||k2.mapping===q4)?(X===void 0&&(X=new e0(new gu(1,1,1),new v1({name:"BackgroundCubeMaterial",uniforms:mu(jo.backgroundCube.uniforms),vertexShader:jo.backgroundCube.vertexShader,fragmentShader:jo.backgroundCube.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1})),X.geometry.deleteAttribute("normal"),X.geometry.deleteAttribute("uv"),X.onBeforeRender=function(j2,b2,D2){this.matrixWorld.copyPosition(D2.matrixWorld)},Object.defineProperty(X.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),x.update(X)),W1.copy(m2.backgroundRotation),W1.x*=-1,W1.y*=-1,W1.z*=-1,k2.isCubeTexture&&k2.isRenderTargetTexture===!1&&(W1.y*=-1,W1.z*=-1),X.material.uniforms.envMap.value=k2,X.material.uniforms.flipEnvMap.value=k2.isCubeTexture&&k2.isRenderTargetTexture===!1?-1:1,X.material.uniforms.backgroundBlurriness.value=m2.backgroundBlurriness,X.material.uniforms.backgroundIntensity.value=m2.backgroundIntensity,X.material.uniforms.backgroundRotation.value.setFromMatrix4(aa2.makeRotationFromEuler(W1)),X.material.toneMapped=Dn.getTransfer(k2.colorSpace)!==Kn,(Z!==k2||K!==k2.version||e2!==D.toneMapping)&&(X.material.needsUpdate=!0,Z=k2,K=k2.version,e2=D.toneMapping),X.layers.enableAll(),v2.unshift(X,X.geometry,X.material,0,0,null)):k2&&k2.isTexture&&(h===void 0&&(h=new e0(new $4(2,2),new v1({name:"BackgroundMaterial",uniforms:mu(jo.background.uniforms),vertexShader:jo.background.vertexShader,fragmentShader:jo.background.fragmentShader,side:Wo,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),x.update(h)),h.material.uniforms.t2D.value=k2,h.material.uniforms.backgroundIntensity.value=m2.backgroundIntensity,h.material.toneMapped=Dn.getTransfer(k2.colorSpace)!==Kn,k2.matrixAutoUpdate===!0&&k2.updateMatrix(),h.material.uniforms.uvTransform.value.copy(k2.matrix),(Z!==k2||K!==k2.version||e2!==D.toneMapping)&&(h.material.needsUpdate=!0,Z=k2,K=k2.version,e2=D.toneMapping),h.layers.enableAll(),v2.unshift(h,h.geometry,h.material,0,0,null))}function o2(v2,m2){v2.getRGB(m4,Jz(D)),w.buffers.color.setClear(m4.r,m4.g,m4.b,m2,P)}return{getClearColor:function(){return O},setClearColor:function(v2,m2=1){O.set(v2),G=m2,o2(O,G)},getClearAlpha:function(){return G},setClearAlpha:function(v2){G=v2,o2(O,G)},render:p2,addToRenderList:r2}}function ma2(D,a){const g=D.getParameter(D.MAX_VERTEX_ATTRIBS),w={},x=K(null);let E=x,P=!1;function O(g2,W2,nt,U2,q2){let ft=!1;const ut=Z(U2,nt,W2);E!==ut&&(E=ut,h(E.object)),ft=e2(g2,U2,nt,q2),ft&&l2(g2,U2,nt,q2),q2!==null&&a.update(q2,D.ELEMENT_ARRAY_BUFFER),(ft||P)&&(P=!1,k2(g2,W2,nt,U2),q2!==null&&D.bindBuffer(D.ELEMENT_ARRAY_BUFFER,a.get(q2).buffer))}function G(){return D.createVertexArray()}function h(g2){return D.bindVertexArray(g2)}function X(g2){return D.deleteVertexArray(g2)}function Z(g2,W2,nt){const U2=nt.wireframe===!0;let q2=w[g2.id];q2===void 0&&(q2={},w[g2.id]=q2);let ft=q2[W2.id];ft===void 0&&(ft={},q2[W2.id]=ft);let ut=ft[U2];return ut===void 0&&(ut=K(G()),ft[U2]=ut),ut}function K(g2){const W2=[],nt=[],U2=[];for(let q2=0;q2<g;q2++)W2[q2]=0,nt[q2]=0,U2[q2]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:W2,enabledAttributes:nt,attributeDivisors:U2,object:g2,attributes:{},index:null}}function e2(g2,W2,nt,U2){const q2=E.attributes,ft=W2.attributes;let ut=0;const Et=nt.getAttributes();for(const it in Et)if(Et[it].location>=0){const yt=q2[it];let re=ft[it];if(re===void 0&&(it==="instanceMatrix"&&g2.instanceMatrix&&(re=g2.instanceMatrix),it==="instanceColor"&&g2.instanceColor&&(re=g2.instanceColor)),yt===void 0||yt.attribute!==re||re&&yt.data!==re.data)return!0;ut++}return E.attributesNum!==ut||E.index!==U2}function l2(g2,W2,nt,U2){const q2={},ft=W2.attributes;let ut=0;const Et=nt.getAttributes();for(const it in Et)if(Et[it].location>=0){let yt=ft[it];yt===void 0&&(it==="instanceMatrix"&&g2.instanceMatrix&&(yt=g2.instanceMatrix),it==="instanceColor"&&g2.instanceColor&&(yt=g2.instanceColor));const re={};re.attribute=yt,yt&&yt.data&&(re.data=yt.data),q2[it]=re,ut++}E.attributes=q2,E.attributesNum=ut,E.index=U2}function p2(){const g2=E.newAttributes;for(let W2=0,nt=g2.length;W2<nt;W2++)g2[W2]=0}function r2(g2){o2(g2,0)}function o2(g2,W2){const nt=E.newAttributes,U2=E.enabledAttributes,q2=E.attributeDivisors;nt[g2]=1,U2[g2]===0&&(D.enableVertexAttribArray(g2),U2[g2]=1),q2[g2]!==W2&&(D.vertexAttribDivisor(g2,W2),q2[g2]=W2)}function v2(){const g2=E.newAttributes,W2=E.enabledAttributes;for(let nt=0,U2=W2.length;nt<U2;nt++)W2[nt]!==g2[nt]&&(D.disableVertexAttribArray(nt),W2[nt]=0)}function m2(g2,W2,nt,U2,q2,ft,ut){ut===!0?D.vertexAttribIPointer(g2,W2,nt,q2,ft):D.vertexAttribPointer(g2,W2,nt,U2,q2,ft)}function k2(g2,W2,nt,U2){p2();const q2=U2.attributes,ft=nt.getAttributes(),ut=W2.defaultAttributeValues;for(const Et in ft){const it=ft[Et];if(it.location>=0){let At=q2[Et];if(At===void 0&&(Et==="instanceMatrix"&&g2.instanceMatrix&&(At=g2.instanceMatrix),Et==="instanceColor"&&g2.instanceColor&&(At=g2.instanceColor)),At!==void 0){const yt=At.normalized,re=At.itemSize,ye=a.get(At);if(ye===void 0)continue;const Be=ye.buffer,rt=ye.type,Bt=ye.bytesPerElement,ee=rt===D.INT||rt===D.UNSIGNED_INT||At.gpuType===Pz;if(At.isInterleavedBufferAttribute){const H2=At.data,Dt=H2.stride,ue=At.offset;if(H2.isInstancedInterleavedBuffer){for(let Y2=0;Y2<it.locationSize;Y2++)o2(it.location+Y2,H2.meshPerAttribute);g2.isInstancedMesh!==!0&&U2._maxInstanceCount===void 0&&(U2._maxInstanceCount=H2.meshPerAttribute*H2.count)}else for(let Y2=0;Y2<it.locationSize;Y2++)r2(it.location+Y2);D.bindBuffer(D.ARRAY_BUFFER,Be);for(let Y2=0;Y2<it.locationSize;Y2++)m2(it.location+Y2,re/it.locationSize,rt,yt,Dt*Bt,(ue+re/it.locationSize*Y2)*Bt,ee)}else{if(At.isInstancedBufferAttribute){for(let H2=0;H2<it.locationSize;H2++)o2(it.location+H2,At.meshPerAttribute);g2.isInstancedMesh!==!0&&U2._maxInstanceCount===void 0&&(U2._maxInstanceCount=At.meshPerAttribute*At.count)}else for(let H2=0;H2<it.locationSize;H2++)r2(it.location+H2);D.bindBuffer(D.ARRAY_BUFFER,Be);for(let H2=0;H2<it.locationSize;H2++)m2(it.location+H2,re/it.locationSize,rt,yt,re*Bt,re/it.locationSize*H2*Bt,ee)}}else if(ut!==void 0){const yt=ut[Et];if(yt!==void 0)switch(yt.length){case 2:D.vertexAttrib2fv(it.location,yt);break;case 3:D.vertexAttrib3fv(it.location,yt);break;case 4:D.vertexAttrib4fv(it.location,yt);break;default:D.vertexAttrib1fv(it.location,yt)}}}}v2()}function j2(){N2();for(const g2 in w){const W2=w[g2];for(const nt in W2){const U2=W2[nt];for(const q2 in U2)X(U2[q2].object),delete U2[q2];delete W2[nt]}delete w[g2]}}function b2(g2){if(w[g2.id]===void 0)return;const W2=w[g2.id];for(const nt in W2){const U2=W2[nt];for(const q2 in U2)X(U2[q2].object),delete U2[q2];delete W2[nt]}delete w[g2.id]}function D2(g2){for(const W2 in w){const nt=w[W2];if(nt[g2.id]===void 0)continue;const U2=nt[g2.id];for(const q2 in U2)X(U2[q2].object),delete U2[q2];delete nt[g2.id]}}function N2(){B2(),P=!0,E!==x&&(E=x,h(E.object))}function B2(){x.geometry=null,x.program=null,x.wireframe=!1}return{setup:O,reset:N2,resetDefaultState:B2,dispose:j2,releaseStatesOfGeometry:b2,releaseStatesOfProgram:D2,initAttributes:p2,enableAttribute:r2,disableUnusedAttributes:v2}}function da2(D,a,g){let w;function x(h){w=h}function E(h,X){D.drawArrays(w,h,X),g.update(X,w,1)}function P(h,X,Z){Z!==0&&(D.drawArraysInstanced(w,h,X,Z),g.update(X,w,Z))}function O(h,X,Z){if(Z===0)return;const K=a.get("WEBGL_multi_draw");if(K===null)for(let e2=0;e2<Z;e2++)this.render(h[e2],X[e2]);else{K.multiDrawArraysWEBGL(w,h,0,X,0,Z);let e2=0;for(let l2=0;l2<Z;l2++)e2+=X[l2];g.update(e2,w,1)}}function G(h,X,Z,K){if(Z===0)return;const e2=a.get("WEBGL_multi_draw");if(e2===null)for(let l2=0;l2<h.length;l2++)P(h[l2],X[l2],K[l2]);else{e2.multiDrawArraysInstancedWEBGL(w,h,0,X,0,K,0,Z);let l2=0;for(let p2=0;p2<Z;p2++)l2+=X[p2];for(let p2=0;p2<K.length;p2++)g.update(l2,w,K[p2])}}this.setMode=x,this.render=E,this.renderInstances=P,this.renderMultiDraw=O,this.renderMultiDrawInstances=G}function Aa2(D,a,g,w){let x;function E(){if(x!==void 0)return x;if(a.has("EXT_texture_filter_anisotropic")===!0){const b2=a.get("EXT_texture_filter_anisotropic");x=D.getParameter(b2.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else x=0;return x}function P(b2){return!(b2!==mo&&w.convert(b2)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT))}function O(b2){const D2=b2===h1&&(a.has("EXT_color_buffer_half_float")||a.has("EXT_color_buffer_float"));return!(b2!==k1&&w.convert(b2)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&b2!==kr&&!D2)}function G(b2){if(b2==="highp"){if(D.getShaderPrecisionFormat(D.VERTEX_SHADER,D.HIGH_FLOAT).precision>0&&D.getShaderPrecisionFormat(D.FRAGMENT_SHADER,D.HIGH_FLOAT).precision>0)return"highp";b2="mediump"}return b2==="mediump"&&D.getShaderPrecisionFormat(D.VERTEX_SHADER,D.MEDIUM_FLOAT).precision>0&&D.getShaderPrecisionFormat(D.FRAGMENT_SHADER,D.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=g.precision!==void 0?g.precision:"highp";const X=G(h);X!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",X,"instead."),h=X);const Z=g.logarithmicDepthBuffer===!0,K=D.getParameter(D.MAX_TEXTURE_IMAGE_UNITS),e2=D.getParameter(D.MAX_VERTEX_TEXTURE_IMAGE_UNITS),l2=D.getParameter(D.MAX_TEXTURE_SIZE),p2=D.getParameter(D.MAX_CUBE_MAP_TEXTURE_SIZE),r2=D.getParameter(D.MAX_VERTEX_ATTRIBS),o2=D.getParameter(D.MAX_VERTEX_UNIFORM_VECTORS),v2=D.getParameter(D.MAX_VARYING_VECTORS),m2=D.getParameter(D.MAX_FRAGMENT_UNIFORM_VECTORS),k2=e2>0,j2=D.getParameter(D.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:E,getMaxPrecision:G,textureFormatReadable:P,textureTypeReadable:O,precision:h,logarithmicDepthBuffer:Z,maxTextures:K,maxVertexTextures:e2,maxTextureSize:l2,maxCubemapSize:p2,maxAttributes:r2,maxVertexUniforms:o2,maxVaryings:v2,maxFragmentUniforms:m2,vertexTextures:k2,maxSamples:j2}}function ga2(D){const a=this;let g=null,w=0,x=!1,E=!1;const P=new c1,O=new Je,G={value:null,needsUpdate:!1};this.uniform=G,this.numPlanes=0,this.numIntersection=0,this.init=function(Z,K){const e2=Z.length!==0||K||w!==0||x;return x=K,w=Z.length,e2},this.beginShadows=function(){E=!0,X(null)},this.endShadows=function(){E=!1},this.setGlobalState=function(Z,K){g=X(Z,K,0)},this.setState=function(Z,K,e2){const l2=Z.clippingPlanes,p2=Z.clipIntersection,r2=Z.clipShadows,o2=D.get(Z);if(!x||l2===null||l2.length===0||E&&!r2)E?X(null):h();else{const v2=E?0:w,m2=v2*4;let k2=o2.clippingState||null;G.value=k2,k2=X(l2,K,m2,e2);for(let j2=0;j2!==m2;++j2)k2[j2]=g[j2];o2.clippingState=k2,this.numIntersection=p2?this.numPlanes:0,this.numPlanes+=v2}};function h(){G.value!==g&&(G.value=g,G.needsUpdate=w>0),a.numPlanes=w,a.numIntersection=0}function X(Z,K,e2,l2){const p2=Z!==null?Z.length:0;let r2=null;if(p2!==0){if(r2=G.value,l2!==!0||r2===null){const o2=e2+p2*4,v2=K.matrixWorldInverse;O.getNormalMatrix(v2),(r2===null||r2.length<o2)&&(r2=new Float32Array(o2));for(let m2=0,k2=e2;m2!==p2;++m2,k2+=4)P.copy(Z[m2]).applyMatrix4(v2,O),P.normal.toArray(r2,k2),r2[k2+3]=P.constant}G.value=r2,G.needsUpdate=!0}return a.numPlanes=p2,a.numIntersection=0,r2}}function ya2(D){let a=new WeakMap;function g(P,O){return O===Hf?P.mapping=pu:O===T6&&(P.mapping=cu),P}function w(P){if(P&&P.isTexture){const O=P.mapping;if(O===Hf||O===T6)if(a.has(P)){const G=a.get(P).texture;return g(G,P.mapping)}else{const G=P.image;if(G&&G.height>0){const h=new R42(G.height);return h.fromEquirectangularTexture(D,P),a.set(P,h),P.addEventListener("dispose",x),g(h.texture,P.mapping)}else return null}}return P}function x(P){const O=P.target;O.removeEventListener("dispose",x);const G=a.get(O);G!==void 0&&(a.delete(O),G.dispose())}function E(){a=new WeakMap}return{get:w,dispose:E}}class t_ extends $6{constructor(a=-1,g=1,w=1,x=-1,E=.1,P=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=a,this.right=g,this.top=w,this.bottom=x,this.near=E,this.far=P,this.updateProjectionMatrix()}copy(a,g){return super.copy(a,g),this.left=a.left,this.right=a.right,this.top=a.top,this.bottom=a.bottom,this.near=a.near,this.far=a.far,this.zoom=a.zoom,this.view=a.view===null?null:Object.assign({},a.view),this}setViewOffset(a,g,w,x,E,P){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=a,this.view.fullHeight=g,this.view.offsetX=w,this.view.offsetY=x,this.view.width=E,this.view.height=P,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const a=(this.right-this.left)/(2*this.zoom),g=(this.top-this.bottom)/(2*this.zoom),w=(this.right+this.left)/2,x=(this.top+this.bottom)/2;let E=w-a,P=w+a,O=x+g,G=x-g;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,X=(this.top-this.bottom)/this.view.fullHeight/this.zoom;E+=h*this.view.offsetX,P=E+h*this.view.width,O-=X*this.view.offsetY,G=O-X*this.view.height}this.projectionMatrix.makeOrthographic(E,P,O,G,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(a){const g=super.toJSON(a);return g.object.zoom=this.zoom,g.object.left=this.left,g.object.right=this.right,g.object.top=this.top,g.object.bottom=this.bottom,g.object.near=this.near,g.object.far=this.far,this.view!==null&&(g.object.view=Object.assign({},this.view)),g}}const eu=4,BV=[.125,.215,.35,.446,.526,.582],Y1=20,qa=new t_,SV=new ce;let Ja=null,Ka=0,$a=0,t6=!1;const z1=(1+Math.sqrt(5))/2,ql=1/z1,xV=[new E2(-z1,ql,0),new E2(z1,ql,0),new E2(-ql,0,z1),new E2(ql,0,z1),new E2(0,z1,-ql),new E2(0,z1,ql),new E2(-1,1,-1),new E2(1,1,-1),new E2(-1,1,1),new E2(1,1,1)];class CV{constructor(a){this._renderer=a,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(a,g=0,w=.1,x=100){Ja=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),t6=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const E=this._allocateTargets();return E.depthBuffer=!0,this._sceneToCubeUV(a,w,x,E),g>0&&this._blur(E,0,0,g),this._applyPMREM(E),this._cleanup(E),E}fromEquirectangular(a,g=null){return this._fromTexture(a,g)}fromCubemap(a,g=null){return this._fromTexture(a,g)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=EV(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=TV(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(a){this._lodMax=Math.floor(Math.log2(a)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let a=0;a<this._lodPlanes.length;a++)this._lodPlanes[a].dispose()}_cleanup(a){this._renderer.setRenderTarget(Ja,Ka,$a),this._renderer.xr.enabled=t6,a.scissorTest=!1,d4(a,0,0,a.width,a.height)}_fromTexture(a,g){a.mapping===pu||a.mapping===cu?this._setSize(a.image.length===0?16:a.image[0].width||a.image[0].image.width):this._setSize(a.image.width/4),Ja=this._renderer.getRenderTarget(),Ka=this._renderer.getActiveCubeFace(),$a=this._renderer.getActiveMipmapLevel(),t6=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const w=g||this._allocateTargets();return this._textureToCubeUV(a,w),this._applyPMREM(w),this._cleanup(w),w}_allocateTargets(){const a=3*Math.max(this._cubeSize,112),g=4*this._cubeSize,w={magFilter:t0,minFilter:t0,generateMipmaps:!1,type:h1,format:mo,colorSpace:Xi,depthBuffer:!1},x=MV(a,g,w);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==a||this._pingPongRenderTarget.height!==g){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=MV(a,g,w);const{_lodMax:E}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ka2(E)),this._blurMaterial=va2(E,a,g)}return x}_compileMaterial(a){const g=new e0(this._lodPlanes[0],a);this._renderer.compile(g,qa)}_sceneToCubeUV(a,g,w,x){const O=new S0(90,1,g,w),G=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],X=this._renderer,Z=X.autoClear,K=X.toneMapping;X.getClearColor(SV),X.toneMapping=A1,X.autoClear=!1;const e2=new xs({name:"PMREM.Background",side:nr,depthWrite:!1,depthTest:!1}),l2=new e0(new gu,e2);let p2=!1;const r2=a.background;r2?r2.isColor&&(e2.color.copy(r2),a.background=null,p2=!0):(e2.color.copy(SV),p2=!0);for(let o2=0;o2<6;o2++){const v2=o2%3;v2===0?(O.up.set(0,G[o2],0),O.lookAt(h[o2],0,0)):v2===1?(O.up.set(0,0,G[o2]),O.lookAt(0,h[o2],0)):(O.up.set(0,G[o2],0),O.lookAt(0,0,h[o2]));const m2=this._cubeSize;d4(x,v2*m2,o2>2?m2:0,m2,m2),X.setRenderTarget(x),p2&&X.render(l2,O),X.render(a,O)}l2.geometry.dispose(),l2.material.dispose(),X.toneMapping=K,X.autoClear=Z,a.background=r2}_textureToCubeUV(a,g){const w=this._renderer,x=a.mapping===pu||a.mapping===cu;x?(this._cubemapMaterial===null&&(this._cubemapMaterial=EV()),this._cubemapMaterial.uniforms.flipEnvMap.value=a.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=TV());const E=x?this._cubemapMaterial:this._equirectMaterial,P=new e0(this._lodPlanes[0],E),O=E.uniforms;O.envMap.value=a;const G=this._cubeSize;d4(g,0,0,3*G,2*G),w.setRenderTarget(g),w.render(P,qa)}_applyPMREM(a){const g=this._renderer,w=g.autoClear;g.autoClear=!1;const x=this._lodPlanes.length;for(let E=1;E<x;E++){const P=Math.sqrt(this._sigmas[E]*this._sigmas[E]-this._sigmas[E-1]*this._sigmas[E-1]),O=xV[(x-E-1)%xV.length];this._blur(a,E-1,E,P,O)}g.autoClear=w}_blur(a,g,w,x,E){const P=this._pingPongRenderTarget;this._halfBlur(a,P,g,w,x,"latitudinal",E),this._halfBlur(P,a,w,w,x,"longitudinal",E)}_halfBlur(a,g,w,x,E,P,O){const G=this._renderer,h=this._blurMaterial;P!=="latitudinal"&&P!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const X=3,Z=new e0(this._lodPlanes[x],h),K=h.uniforms,e2=this._sizeLods[w]-1,l2=isFinite(E)?Math.PI/(2*e2):2*Math.PI/(2*Y1-1),p2=E/l2,r2=isFinite(E)?1+Math.floor(X*p2):Y1;r2>Y1&&console.warn(`sigmaRadians, ${E}, is too large and will clip, as it requested ${r2} samples when the maximum is set to ${Y1}`);const o2=[];let v2=0;for(let D2=0;D2<Y1;++D2){const N2=D2/p2,B2=Math.exp(-N2*N2/2);o2.push(B2),D2===0?v2+=B2:D2<r2&&(v2+=2*B2)}for(let D2=0;D2<o2.length;D2++)o2[D2]=o2[D2]/v2;K.envMap.value=a.texture,K.samples.value=r2,K.weights.value=o2,K.latitudinal.value=P==="latitudinal",O&&(K.poleAxis.value=O);const{_lodMax:m2}=this;K.dTheta.value=l2,K.mipInt.value=m2-w;const k2=this._sizeLods[x],j2=3*k2*(x>m2-eu?x-m2+eu:0),b2=4*(this._cubeSize-k2);d4(g,j2,b2,3*k2,2*k2),G.setRenderTarget(g),G.render(Z,qa)}}function ka2(D){const a=[],g=[],w=[];let x=D;const E=D-eu+1+BV.length;for(let P=0;P<E;P++){const O=Math.pow(2,x);g.push(O);let G=1/O;P>D-eu?G=BV[P-D+eu-1]:P===0&&(G=0),w.push(G);const h=1/(O-2),X=-h,Z=1+h,K=[X,X,Z,X,Z,Z,X,X,Z,Z,X,Z],e2=6,l2=6,p2=3,r2=2,o2=1,v2=new Float32Array(p2*l2*e2),m2=new Float32Array(r2*l2*e2),k2=new Float32Array(o2*l2*e2);for(let b2=0;b2<e2;b2++){const D2=b2%3*2/3-1,N2=b2>2?0:-1,B2=[D2,N2,0,D2+2/3,N2,0,D2+2/3,N2+1,0,D2,N2,0,D2+2/3,N2+1,0,D2,N2+1,0];v2.set(B2,p2*l2*b2),m2.set(K,r2*l2*b2);const g2=[b2,b2,b2,b2,b2,b2];k2.set(g2,o2*l2*b2)}const j2=new n0;j2.setAttribute("position",new _0(v2,p2)),j2.setAttribute("uv",new _0(m2,r2)),j2.setAttribute("faceIndex",new _0(k2,o2)),a.push(j2),x>eu&&x--}return{lodPlanes:a,sizeLods:g,sigmas:w}}function MV(D,a,g){const w=new X1(D,a,g);return w.texture.mapping=q4,w.texture.name="PMREM.cubeUv",w.scissorTest=!0,w}function d4(D,a,g,w,x){D.viewport.set(a,g,w,x),D.scissor.set(a,g,w,x)}function va2(D,a,g){const w=new Float32Array(Y1),x=new E2(0,1,0);return new v1({name:"SphericalGaussianBlur",defines:{n:Y1,CUBEUV_TEXEL_WIDTH:1/a,CUBEUV_TEXEL_HEIGHT:1/g,CUBEUV_MAX_MIP:`${D}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:w},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:x}},vertexShader:eh(),fragmentShader:`

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
		`,blending:d1,depthTest:!1,depthWrite:!1})}function TV(){return new v1({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

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
		`,blending:d1,depthTest:!1,depthWrite:!1})}function EV(){return new v1({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:d1,depthTest:!1,depthWrite:!1})}function eh(){return`

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
	`}function wa2(D){let a=new WeakMap,g=null;function w(O){if(O&&O.isTexture){const G=O.mapping,h=G===Hf||G===T6,X=G===pu||G===cu;if(h||X){let Z=a.get(O);const K=Z!==void 0?Z.texture.pmremVersion:0;if(O.isRenderTargetTexture&&O.pmremVersion!==K)return g===null&&(g=new CV(D)),Z=h?g.fromEquirectangular(O,Z):g.fromCubemap(O,Z),Z.texture.pmremVersion=O.pmremVersion,a.set(O,Z),Z.texture;if(Z!==void 0)return Z.texture;{const e2=O.image;return h&&e2&&e2.height>0||X&&e2&&x(e2)?(g===null&&(g=new CV(D)),Z=h?g.fromEquirectangular(O):g.fromCubemap(O),Z.texture.pmremVersion=O.pmremVersion,a.set(O,Z),O.addEventListener("dispose",E),Z.texture):null}}}return O}function x(O){let G=0;const h=6;for(let X=0;X<h;X++)O[X]!==void 0&&G++;return G===h}function E(O){const G=O.target;G.removeEventListener("dispose",E);const h=a.get(G);h!==void 0&&(a.delete(G),h.dispose())}function P(){a=new WeakMap,g!==null&&(g.dispose(),g=null)}return{get:w,dispose:P}}function Ba2(D){const a={};function g(w){if(a[w]!==void 0)return a[w];let x;switch(w){case"WEBGL_depth_texture":x=D.getExtension("WEBGL_depth_texture")||D.getExtension("MOZ_WEBGL_depth_texture")||D.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":x=D.getExtension("EXT_texture_filter_anisotropic")||D.getExtension("MOZ_EXT_texture_filter_anisotropic")||D.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":x=D.getExtension("WEBGL_compressed_texture_s3tc")||D.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||D.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":x=D.getExtension("WEBGL_compressed_texture_pvrtc")||D.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:x=D.getExtension(w)}return a[w]=x,x}return{has:function(w){return g(w)!==null},init:function(){g("EXT_color_buffer_float"),g("WEBGL_clip_cull_distance"),g("OES_texture_float_linear"),g("EXT_color_buffer_half_float"),g("WEBGL_multisampled_render_to_texture"),g("WEBGL_render_shared_exponent")},get:function(w){const x=g(w);return x===null&&console.warn("THREE.WebGLRenderer: "+w+" extension not supported."),x}}}function Sa2(D,a,g,w){const x={},E=new WeakMap;function P(Z){const K=Z.target;K.index!==null&&a.remove(K.index);for(const l2 in K.attributes)a.remove(K.attributes[l2]);for(const l2 in K.morphAttributes){const p2=K.morphAttributes[l2];for(let r2=0,o2=p2.length;r2<o2;r2++)a.remove(p2[r2])}K.removeEventListener("dispose",P),delete x[K.id];const e2=E.get(K);e2&&(a.remove(e2),E.delete(K)),w.releaseStatesOfGeometry(K),K.isInstancedBufferGeometry===!0&&delete K._maxInstanceCount,g.memory.geometries--}function O(Z,K){return x[K.id]===!0||(K.addEventListener("dispose",P),x[K.id]=!0,g.memory.geometries++),K}function G(Z){const K=Z.attributes;for(const l2 in K)a.update(K[l2],D.ARRAY_BUFFER);const e2=Z.morphAttributes;for(const l2 in e2){const p2=e2[l2];for(let r2=0,o2=p2.length;r2<o2;r2++)a.update(p2[r2],D.ARRAY_BUFFER)}}function h(Z){const K=[],e2=Z.index,l2=Z.attributes.position;let p2=0;if(e2!==null){const v2=e2.array;p2=e2.version;for(let m2=0,k2=v2.length;m2<k2;m2+=3){const j2=v2[m2+0],b2=v2[m2+1],D2=v2[m2+2];K.push(j2,b2,b2,D2,D2,j2)}}else if(l2!==void 0){const v2=l2.array;p2=l2.version;for(let m2=0,k2=v2.length/3-1;m2<k2;m2+=3){const j2=m2+0,b2=m2+1,D2=m2+2;K.push(j2,b2,b2,D2,D2,j2)}}else return;const r2=new(Vz(K)?qz:K6)(K,1);r2.version=p2;const o2=E.get(Z);o2&&a.remove(o2),E.set(Z,r2)}function X(Z){const K=E.get(Z);if(K){const e2=Z.index;e2!==null&&K.version<e2.version&&h(Z)}else h(Z);return E.get(Z)}return{get:O,update:G,getWireframeAttribute:X}}function xa2(D,a,g){let w;function x(K){w=K}let E,P;function O(K){E=K.type,P=K.bytesPerElement}function G(K,e2){D.drawElements(w,e2,E,K*P),g.update(e2,w,1)}function h(K,e2,l2){l2!==0&&(D.drawElementsInstanced(w,e2,E,K*P,l2),g.update(e2,w,l2))}function X(K,e2,l2){if(l2===0)return;const p2=a.get("WEBGL_multi_draw");if(p2===null)for(let r2=0;r2<l2;r2++)this.render(K[r2]/P,e2[r2]);else{p2.multiDrawElementsWEBGL(w,e2,0,E,K,0,l2);let r2=0;for(let o2=0;o2<l2;o2++)r2+=e2[o2];g.update(r2,w,1)}}function Z(K,e2,l2,p2){if(l2===0)return;const r2=a.get("WEBGL_multi_draw");if(r2===null)for(let o2=0;o2<K.length;o2++)h(K[o2]/P,e2[o2],p2[o2]);else{r2.multiDrawElementsInstancedWEBGL(w,e2,0,E,K,0,p2,0,l2);let o2=0;for(let v2=0;v2<l2;v2++)o2+=e2[v2];for(let v2=0;v2<p2.length;v2++)g.update(o2,w,p2[v2])}}this.setMode=x,this.setIndex=O,this.render=G,this.renderInstances=h,this.renderMultiDraw=X,this.renderMultiDrawInstances=Z}function Ca2(D){const a={geometries:0,textures:0},g={frame:0,calls:0,triangles:0,points:0,lines:0};function w(E,P,O){switch(g.calls++,P){case D.TRIANGLES:g.triangles+=O*(E/3);break;case D.LINES:g.lines+=O*(E/2);break;case D.LINE_STRIP:g.lines+=O*(E-1);break;case D.LINE_LOOP:g.lines+=O*E;break;case D.POINTS:g.points+=O*E;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",P);break}}function x(){g.calls=0,g.triangles=0,g.points=0,g.lines=0}return{memory:a,render:g,programs:null,autoReset:!0,reset:x,update:w}}function Ma2(D,a,g){const w=new WeakMap,x=new En;function E(P,O,G){const h=P.morphTargetInfluences,X=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Z=X!==void 0?X.length:0;let K=w.get(O);if(K===void 0||K.count!==Z){let B2=function(){D2.dispose(),w.delete(O),O.removeEventListener("dispose",B2)};K!==void 0&&K.texture.dispose();const e2=O.morphAttributes.position!==void 0,l2=O.morphAttributes.normal!==void 0,p2=O.morphAttributes.color!==void 0,r2=O.morphAttributes.position||[],o2=O.morphAttributes.normal||[],v2=O.morphAttributes.color||[];let m2=0;e2===!0&&(m2=1),l2===!0&&(m2=2),p2===!0&&(m2=3);let k2=O.attributes.position.count*m2,j2=1;k2>a.maxTextureSize&&(j2=Math.ceil(k2/a.maxTextureSize),k2=a.maxTextureSize);const b2=new Float32Array(k2*j2*4*Z),D2=new Yz(b2,k2,j2,Z);D2.type=kr,D2.needsUpdate=!0;const N2=m2*4;for(let g2=0;g2<Z;g2++){const W2=r2[g2],nt=o2[g2],U2=v2[g2],q2=k2*j2*4*g2;for(let ft=0;ft<W2.count;ft++){const ut=ft*N2;e2===!0&&(x.fromBufferAttribute(W2,ft),b2[q2+ut+0]=x.x,b2[q2+ut+1]=x.y,b2[q2+ut+2]=x.z,b2[q2+ut+3]=0),l2===!0&&(x.fromBufferAttribute(nt,ft),b2[q2+ut+4]=x.x,b2[q2+ut+5]=x.y,b2[q2+ut+6]=x.z,b2[q2+ut+7]=0),p2===!0&&(x.fromBufferAttribute(U2,ft),b2[q2+ut+8]=x.x,b2[q2+ut+9]=x.y,b2[q2+ut+10]=x.z,b2[q2+ut+11]=U2.itemSize===4?x.w:1)}}K={count:Z,texture:D2,size:new Lt(k2,j2)},w.set(O,K),O.addEventListener("dispose",B2)}if(P.isInstancedMesh===!0&&P.morphTexture!==null)G.getUniforms().setValue(D,"morphTexture",P.morphTexture,g);else{let e2=0;for(let p2=0;p2<h.length;p2++)e2+=h[p2];const l2=O.morphTargetsRelative?1:1-e2;G.getUniforms().setValue(D,"morphTargetBaseInfluence",l2),G.getUniforms().setValue(D,"morphTargetInfluences",h)}G.getUniforms().setValue(D,"morphTargetsTexture",K.texture,g),G.getUniforms().setValue(D,"morphTargetsTextureSize",K.size)}return{update:E}}function Ta2(D,a,g,w){let x=new WeakMap;function E(G){const h=w.render.frame,X=G.geometry,Z=a.get(G,X);if(x.get(Z)!==h&&(a.update(Z),x.set(Z,h)),G.isInstancedMesh&&(G.hasEventListener("dispose",O)===!1&&G.addEventListener("dispose",O),x.get(G)!==h&&(g.update(G.instanceMatrix,D.ARRAY_BUFFER),G.instanceColor!==null&&g.update(G.instanceColor,D.ARRAY_BUFFER),x.set(G,h))),G.isSkinnedMesh){const K=G.skeleton;x.get(K)!==h&&(K.update(),x.set(K,h))}return Z}function P(){x=new WeakMap}function O(G){const h=G.target;h.removeEventListener("dispose",O),g.remove(h.instanceMatrix),h.instanceColor!==null&&g.remove(h.instanceColor)}return{update:E,dispose:P}}class tQ extends Ti{constructor(a,g,w,x,E,P,O,G,h,X){if(X=X!==void 0?X:ou,X!==ou&&X!==Vf)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");w===void 0&&X===ou&&(w=_u),w===void 0&&X===Vf&&(w=$f),super(null,x,E,P,O,G,X,w,h),this.isDepthTexture=!0,this.image={width:a,height:g},this.magFilter=O!==void 0?O:j0,this.minFilter=G!==void 0?G:j0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(a){return super.copy(a),this.compareFunction=a.compareFunction,this}toJSON(a){const g=super.toJSON(a);return this.compareFunction!==null&&(g.compareFunction=this.compareFunction),g}}const eQ=new Ti,nQ=new tQ(1,1);nQ.compareFunction=Hz;const iQ=new Yz,rQ=new c42,oQ=new Kz,RV=[],bV=[],DV=new Float32Array(16),IV=new Float32Array(9),PV=new Float32Array(4);function yu(D,a,g){const w=D[0];if(w<=0||w>0)return D;const x=a*g;let E=RV[x];if(E===void 0&&(E=new Float32Array(x),RV[x]=E),a!==0){w.toArray(E,0);for(let P=1,O=0;P!==a;++P)O+=g,D[P].toArray(E,O)}return E}function Zi(D,a){if(D.length!==a.length)return!1;for(let g=0,w=D.length;g<w;g++)if(D[g]!==a[g])return!1;return!0}function qi(D,a){for(let g=0,w=a.length;g<w;g++)D[g]=a[g]}function e_(D,a){let g=bV[a];g===void 0&&(g=new Int32Array(a),bV[a]=g);for(let w=0;w!==a;++w)g[w]=D.allocateTextureUnit();return g}function Ea2(D,a){const g=this.cache;g[0]!==a&&(D.uniform1f(this.addr,a),g[0]=a)}function Ra2(D,a){const g=this.cache;if(a.x!==void 0)(g[0]!==a.x||g[1]!==a.y)&&(D.uniform2f(this.addr,a.x,a.y),g[0]=a.x,g[1]=a.y);else{if(Zi(g,a))return;D.uniform2fv(this.addr,a),qi(g,a)}}function ba2(D,a){const g=this.cache;if(a.x!==void 0)(g[0]!==a.x||g[1]!==a.y||g[2]!==a.z)&&(D.uniform3f(this.addr,a.x,a.y,a.z),g[0]=a.x,g[1]=a.y,g[2]=a.z);else if(a.r!==void 0)(g[0]!==a.r||g[1]!==a.g||g[2]!==a.b)&&(D.uniform3f(this.addr,a.r,a.g,a.b),g[0]=a.r,g[1]=a.g,g[2]=a.b);else{if(Zi(g,a))return;D.uniform3fv(this.addr,a),qi(g,a)}}function Da2(D,a){const g=this.cache;if(a.x!==void 0)(g[0]!==a.x||g[1]!==a.y||g[2]!==a.z||g[3]!==a.w)&&(D.uniform4f(this.addr,a.x,a.y,a.z,a.w),g[0]=a.x,g[1]=a.y,g[2]=a.z,g[3]=a.w);else{if(Zi(g,a))return;D.uniform4fv(this.addr,a),qi(g,a)}}function Ia2(D,a){const g=this.cache,w=a.elements;if(w===void 0){if(Zi(g,a))return;D.uniformMatrix2fv(this.addr,!1,a),qi(g,a)}else{if(Zi(g,w))return;PV.set(w),D.uniformMatrix2fv(this.addr,!1,PV),qi(g,w)}}function Pa2(D,a){const g=this.cache,w=a.elements;if(w===void 0){if(Zi(g,a))return;D.uniformMatrix3fv(this.addr,!1,a),qi(g,a)}else{if(Zi(g,w))return;IV.set(w),D.uniformMatrix3fv(this.addr,!1,IV),qi(g,w)}}function La2(D,a){const g=this.cache,w=a.elements;if(w===void 0){if(Zi(g,a))return;D.uniformMatrix4fv(this.addr,!1,a),qi(g,a)}else{if(Zi(g,w))return;DV.set(w),D.uniformMatrix4fv(this.addr,!1,DV),qi(g,w)}}function Fa2(D,a){const g=this.cache;g[0]!==a&&(D.uniform1i(this.addr,a),g[0]=a)}function Oa2(D,a){const g=this.cache;if(a.x!==void 0)(g[0]!==a.x||g[1]!==a.y)&&(D.uniform2i(this.addr,a.x,a.y),g[0]=a.x,g[1]=a.y);else{if(Zi(g,a))return;D.uniform2iv(this.addr,a),qi(g,a)}}function ja2(D,a){const g=this.cache;if(a.x!==void 0)(g[0]!==a.x||g[1]!==a.y||g[2]!==a.z)&&(D.uniform3i(this.addr,a.x,a.y,a.z),g[0]=a.x,g[1]=a.y,g[2]=a.z);else{if(Zi(g,a))return;D.uniform3iv(this.addr,a),qi(g,a)}}function Na2(D,a){const g=this.cache;if(a.x!==void 0)(g[0]!==a.x||g[1]!==a.y||g[2]!==a.z||g[3]!==a.w)&&(D.uniform4i(this.addr,a.x,a.y,a.z,a.w),g[0]=a.x,g[1]=a.y,g[2]=a.z,g[3]=a.w);else{if(Zi(g,a))return;D.uniform4iv(this.addr,a),qi(g,a)}}function Ua2(D,a){const g=this.cache;g[0]!==a&&(D.uniform1ui(this.addr,a),g[0]=a)}function Ga2(D,a){const g=this.cache;if(a.x!==void 0)(g[0]!==a.x||g[1]!==a.y)&&(D.uniform2ui(this.addr,a.x,a.y),g[0]=a.x,g[1]=a.y);else{if(Zi(g,a))return;D.uniform2uiv(this.addr,a),qi(g,a)}}function Wa2(D,a){const g=this.cache;if(a.x!==void 0)(g[0]!==a.x||g[1]!==a.y||g[2]!==a.z)&&(D.uniform3ui(this.addr,a.x,a.y,a.z),g[0]=a.x,g[1]=a.y,g[2]=a.z);else{if(Zi(g,a))return;D.uniform3uiv(this.addr,a),qi(g,a)}}function Ha2(D,a){const g=this.cache;if(a.x!==void 0)(g[0]!==a.x||g[1]!==a.y||g[2]!==a.z||g[3]!==a.w)&&(D.uniform4ui(this.addr,a.x,a.y,a.z,a.w),g[0]=a.x,g[1]=a.y,g[2]=a.z,g[3]=a.w);else{if(Zi(g,a))return;D.uniform4uiv(this.addr,a),qi(g,a)}}function Va2(D,a,g){const w=this.cache,x=g.allocateTextureUnit();w[0]!==x&&(D.uniform1i(this.addr,x),w[0]=x);const E=this.type===D.SAMPLER_2D_SHADOW?nQ:eQ;g.setTexture2D(a||E,x)}function za2(D,a,g){const w=this.cache,x=g.allocateTextureUnit();w[0]!==x&&(D.uniform1i(this.addr,x),w[0]=x),g.setTexture3D(a||rQ,x)}function Qa2(D,a,g){const w=this.cache,x=g.allocateTextureUnit();w[0]!==x&&(D.uniform1i(this.addr,x),w[0]=x),g.setTextureCube(a||oQ,x)}function Ya2(D,a,g){const w=this.cache,x=g.allocateTextureUnit();w[0]!==x&&(D.uniform1i(this.addr,x),w[0]=x),g.setTexture2DArray(a||iQ,x)}function Xa2(D){switch(D){case 5126:return Ea2;case 35664:return Ra2;case 35665:return ba2;case 35666:return Da2;case 35674:return Ia2;case 35675:return Pa2;case 35676:return La2;case 5124:case 35670:return Fa2;case 35667:case 35671:return Oa2;case 35668:case 35672:return ja2;case 35669:case 35673:return Na2;case 5125:return Ua2;case 36294:return Ga2;case 36295:return Wa2;case 36296:return Ha2;case 35678:case 36198:case 36298:case 36306:case 35682:return Va2;case 35679:case 36299:case 36307:return za2;case 35680:case 36300:case 36308:case 36293:return Qa2;case 36289:case 36303:case 36311:case 36292:return Ya2}}function Za2(D,a){D.uniform1fv(this.addr,a)}function qa2(D,a){const g=yu(a,this.size,2);D.uniform2fv(this.addr,g)}function Ja2(D,a){const g=yu(a,this.size,3);D.uniform3fv(this.addr,g)}function Ka2(D,a){const g=yu(a,this.size,4);D.uniform4fv(this.addr,g)}function $a2(D,a){const g=yu(a,this.size,4);D.uniformMatrix2fv(this.addr,!1,g)}function t62(D,a){const g=yu(a,this.size,9);D.uniformMatrix3fv(this.addr,!1,g)}function e62(D,a){const g=yu(a,this.size,16);D.uniformMatrix4fv(this.addr,!1,g)}function n62(D,a){D.uniform1iv(this.addr,a)}function i62(D,a){D.uniform2iv(this.addr,a)}function r62(D,a){D.uniform3iv(this.addr,a)}function o62(D,a){D.uniform4iv(this.addr,a)}function s62(D,a){D.uniform1uiv(this.addr,a)}function l62(D,a){D.uniform2uiv(this.addr,a)}function u62(D,a){D.uniform3uiv(this.addr,a)}function f62(D,a){D.uniform4uiv(this.addr,a)}function p62(D,a,g){const w=this.cache,x=a.length,E=e_(g,x);Zi(w,E)||(D.uniform1iv(this.addr,E),qi(w,E));for(let P=0;P!==x;++P)g.setTexture2D(a[P]||eQ,E[P])}function c62(D,a,g){const w=this.cache,x=a.length,E=e_(g,x);Zi(w,E)||(D.uniform1iv(this.addr,E),qi(w,E));for(let P=0;P!==x;++P)g.setTexture3D(a[P]||rQ,E[P])}function _62(D,a,g){const w=this.cache,x=a.length,E=e_(g,x);Zi(w,E)||(D.uniform1iv(this.addr,E),qi(w,E));for(let P=0;P!==x;++P)g.setTextureCube(a[P]||oQ,E[P])}function a62(D,a,g){const w=this.cache,x=a.length,E=e_(g,x);Zi(w,E)||(D.uniform1iv(this.addr,E),qi(w,E));for(let P=0;P!==x;++P)g.setTexture2DArray(a[P]||iQ,E[P])}function h62(D){switch(D){case 5126:return Za2;case 35664:return qa2;case 35665:return Ja2;case 35666:return Ka2;case 35674:return $a2;case 35675:return t62;case 35676:return e62;case 5124:case 35670:return n62;case 35667:case 35671:return i62;case 35668:case 35672:return r62;case 35669:case 35673:return o62;case 5125:return s62;case 36294:return l62;case 36295:return u62;case 36296:return f62;case 35678:case 36198:case 36298:case 36306:case 35682:return p62;case 35679:case 36299:case 36307:return c62;case 35680:case 36300:case 36308:case 36293:return _62;case 36289:case 36303:case 36311:case 36292:return a62}}class m62{constructor(a,g,w){this.id=a,this.addr=w,this.cache=[],this.type=g.type,this.setValue=Xa2(g.type)}}class d62{constructor(a,g,w){this.id=a,this.addr=w,this.cache=[],this.type=g.type,this.size=g.size,this.setValue=h62(g.type)}}class A62{constructor(a){this.id=a,this.seq=[],this.map={}}setValue(a,g,w){const x=this.seq;for(let E=0,P=x.length;E!==P;++E){const O=x[E];O.setValue(a,g[O.id],w)}}}const e6=/(\w+)(\])?(\[|\.)?/g;function LV(D,a){D.seq.push(a),D.map[a.id]=a}function g62(D,a,g){const w=D.name,x=w.length;for(e6.lastIndex=0;;){const E=e6.exec(w),P=e6.lastIndex;let O=E[1];const G=E[2]==="]",h=E[3];if(G&&(O=O|0),h===void 0||h==="["&&P+2===x){LV(g,h===void 0?new m62(O,D,a):new d62(O,D,a));break}else{let Z=g.map[O];Z===void 0&&(Z=new A62(O),LV(g,Z)),g=Z}}}class D4{constructor(a,g){this.seq=[],this.map={};const w=a.getProgramParameter(g,a.ACTIVE_UNIFORMS);for(let x=0;x<w;++x){const E=a.getActiveUniform(g,x),P=a.getUniformLocation(g,E.name);g62(E,P,this)}}setValue(a,g,w,x){const E=this.map[g];E!==void 0&&E.setValue(a,w,x)}setOptional(a,g,w){const x=g[w];x!==void 0&&this.setValue(a,w,x)}static upload(a,g,w,x){for(let E=0,P=g.length;E!==P;++E){const O=g[E],G=w[O.id];G.needsUpdate!==!1&&O.setValue(a,G.value,x)}}static seqWithValue(a,g){const w=[];for(let x=0,E=a.length;x!==E;++x){const P=a[x];P.id in g&&w.push(P)}return w}}function FV(D,a,g){const w=D.createShader(a);return D.shaderSource(w,g),D.compileShader(w),w}const y62=37297;let k62=0;function v62(D,a){const g=D.split(`
`),w=[],x=Math.max(a-6,0),E=Math.min(a+6,g.length);for(let P=x;P<E;P++){const O=P+1;w.push(`${O===a?">":" "} ${O}: ${g[P]}`)}return w.join(`
`)}function w62(D){const a=Dn.getPrimaries(Dn.workingColorSpace),g=Dn.getPrimaries(D);let w;switch(a===g?w="":a===G4&&g===U4?w="LinearDisplayP3ToLinearSRGB":a===U4&&g===G4&&(w="LinearSRGBToLinearDisplayP3"),D){case Xi:case K4:return[w,"LinearTransferOETF"];case di:case q6:return[w,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",D),[w,"LinearTransferOETF"]}}function OV(D,a,g){const w=D.getShaderParameter(a,D.COMPILE_STATUS),x=D.getShaderInfoLog(a).trim();if(w&&x==="")return"";const E=/ERROR: 0:(\d+)/.exec(x);if(E){const P=parseInt(E[1]);return g.toUpperCase()+`

`+x+`

`+v62(D.getShaderSource(a),P)}else return x}function B62(D,a){const g=w62(a);return`vec4 ${D}( vec4 value ) { return ${g[0]}( ${g[1]}( value ) ); }`}function S62(D,a){let g;switch(a){case hc2:g="Linear";break;case mc2:g="Reinhard";break;case dc2:g="OptimizedCineon";break;case Rz:g="ACESFilmic";break;case gc2:g="AgX";break;case yc2:g="Neutral";break;case Ac2:g="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",a),g="Linear"}return"vec3 "+D+"( vec3 color ) { return "+g+"ToneMapping( color ); }"}function x62(D){return[D.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",D.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ff).join(`
`)}function C62(D){const a=[];for(const g in D){const w=D[g];w!==!1&&a.push("#define "+g+" "+w)}return a.join(`
`)}function M62(D,a){const g={},w=D.getProgramParameter(a,D.ACTIVE_ATTRIBUTES);for(let x=0;x<w;x++){const E=D.getActiveAttrib(a,x),P=E.name;let O=1;E.type===D.FLOAT_MAT2&&(O=2),E.type===D.FLOAT_MAT3&&(O=3),E.type===D.FLOAT_MAT4&&(O=4),g[P]={type:E.type,location:D.getAttribLocation(a,P),locationSize:O}}return g}function Ff(D){return D!==""}function jV(D,a){const g=a.numSpotLightShadows+a.numSpotLightMaps-a.numSpotLightShadowsWithMaps;return D.replace(/NUM_DIR_LIGHTS/g,a.numDirLights).replace(/NUM_SPOT_LIGHTS/g,a.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,a.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,g).replace(/NUM_RECT_AREA_LIGHTS/g,a.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,a.numPointLights).replace(/NUM_HEMI_LIGHTS/g,a.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,a.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,a.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,a.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,a.numPointLightShadows)}function NV(D,a){return D.replace(/NUM_CLIPPING_PLANES/g,a.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,a.numClippingPlanes-a.numClipIntersection)}const T62=/^[ \t]*#include +<([\w\d./]+)>/gm;function D6(D){return D.replace(T62,R62)}const E62=new Map;function R62(D,a){let g=tn[a];if(g===void 0){const w=E62.get(a);if(w!==void 0)g=tn[w],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',a,w);else throw new Error("Can not resolve #include <"+a+">")}return D6(g)}const b62=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function UV(D){return D.replace(b62,D62)}function D62(D,a,g,w){let x="";for(let E=parseInt(a);E<parseInt(g);E++)x+=w.replace(/\[\s*i\s*\]/g,"[ "+E+" ]").replace(/UNROLLED_LOOP_INDEX/g,E);return x}function GV(D){let a=`precision ${D.precision} float;
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
#define LOW_PRECISION`),a}function I62(D){let a="SHADOWMAP_TYPE_BASIC";return D.shadowMapType===X6?a="SHADOWMAP_TYPE_PCF":D.shadowMapType===Up2?a="SHADOWMAP_TYPE_PCF_SOFT":D.shadowMapType===vs&&(a="SHADOWMAP_TYPE_VSM"),a}function P62(D){let a="ENVMAP_TYPE_CUBE";if(D.envMap)switch(D.envMapMode){case pu:case cu:a="ENVMAP_TYPE_CUBE";break;case q4:a="ENVMAP_TYPE_CUBE_UV";break}return a}function L62(D){let a="ENVMAP_MODE_REFLECTION";if(D.envMap)switch(D.envMapMode){case cu:a="ENVMAP_MODE_REFRACTION";break}return a}function F62(D){let a="ENVMAP_BLENDING_NONE";if(D.envMap)switch(D.combine){case Z4:a="ENVMAP_BLENDING_MULTIPLY";break;case _c2:a="ENVMAP_BLENDING_MIX";break;case ac2:a="ENVMAP_BLENDING_ADD";break}return a}function O62(D){const a=D.envMapCubeUVHeight;if(a===null)return null;const g=Math.log2(a)-2,w=1/a;return{texelWidth:1/(3*Math.max(Math.pow(2,g),7*16)),texelHeight:w,maxMip:g}}function j62(D,a,g,w){const x=D.getContext(),E=g.defines;let P=g.vertexShader,O=g.fragmentShader;const G=I62(g),h=P62(g),X=L62(g),Z=F62(g),K=O62(g),e2=x62(g),l2=C62(E),p2=x.createProgram();let r2,o2,v2=g.glslVersion?"#version "+g.glslVersion+`
`:"";g.isRawShaderMaterial?(r2=["#define SHADER_TYPE "+g.shaderType,"#define SHADER_NAME "+g.shaderName,l2].filter(Ff).join(`
`),r2.length>0&&(r2+=`
`),o2=["#define SHADER_TYPE "+g.shaderType,"#define SHADER_NAME "+g.shaderName,l2].filter(Ff).join(`
`),o2.length>0&&(o2+=`
`)):(r2=[GV(g),"#define SHADER_TYPE "+g.shaderType,"#define SHADER_NAME "+g.shaderName,l2,g.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",g.batching?"#define USE_BATCHING":"",g.instancing?"#define USE_INSTANCING":"",g.instancingColor?"#define USE_INSTANCING_COLOR":"",g.instancingMorph?"#define USE_INSTANCING_MORPH":"",g.useFog&&g.fog?"#define USE_FOG":"",g.useFog&&g.fogExp2?"#define FOG_EXP2":"",g.map?"#define USE_MAP":"",g.envMap?"#define USE_ENVMAP":"",g.envMap?"#define "+X:"",g.lightMap?"#define USE_LIGHTMAP":"",g.aoMap?"#define USE_AOMAP":"",g.bumpMap?"#define USE_BUMPMAP":"",g.normalMap?"#define USE_NORMALMAP":"",g.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",g.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",g.displacementMap?"#define USE_DISPLACEMENTMAP":"",g.emissiveMap?"#define USE_EMISSIVEMAP":"",g.anisotropy?"#define USE_ANISOTROPY":"",g.anisotropyMap?"#define USE_ANISOTROPYMAP":"",g.clearcoatMap?"#define USE_CLEARCOATMAP":"",g.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",g.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",g.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",g.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",g.specularMap?"#define USE_SPECULARMAP":"",g.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",g.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",g.roughnessMap?"#define USE_ROUGHNESSMAP":"",g.metalnessMap?"#define USE_METALNESSMAP":"",g.alphaMap?"#define USE_ALPHAMAP":"",g.alphaHash?"#define USE_ALPHAHASH":"",g.transmission?"#define USE_TRANSMISSION":"",g.transmissionMap?"#define USE_TRANSMISSIONMAP":"",g.thicknessMap?"#define USE_THICKNESSMAP":"",g.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",g.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",g.mapUv?"#define MAP_UV "+g.mapUv:"",g.alphaMapUv?"#define ALPHAMAP_UV "+g.alphaMapUv:"",g.lightMapUv?"#define LIGHTMAP_UV "+g.lightMapUv:"",g.aoMapUv?"#define AOMAP_UV "+g.aoMapUv:"",g.emissiveMapUv?"#define EMISSIVEMAP_UV "+g.emissiveMapUv:"",g.bumpMapUv?"#define BUMPMAP_UV "+g.bumpMapUv:"",g.normalMapUv?"#define NORMALMAP_UV "+g.normalMapUv:"",g.displacementMapUv?"#define DISPLACEMENTMAP_UV "+g.displacementMapUv:"",g.metalnessMapUv?"#define METALNESSMAP_UV "+g.metalnessMapUv:"",g.roughnessMapUv?"#define ROUGHNESSMAP_UV "+g.roughnessMapUv:"",g.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+g.anisotropyMapUv:"",g.clearcoatMapUv?"#define CLEARCOATMAP_UV "+g.clearcoatMapUv:"",g.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+g.clearcoatNormalMapUv:"",g.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+g.clearcoatRoughnessMapUv:"",g.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+g.iridescenceMapUv:"",g.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+g.iridescenceThicknessMapUv:"",g.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+g.sheenColorMapUv:"",g.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+g.sheenRoughnessMapUv:"",g.specularMapUv?"#define SPECULARMAP_UV "+g.specularMapUv:"",g.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+g.specularColorMapUv:"",g.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+g.specularIntensityMapUv:"",g.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+g.transmissionMapUv:"",g.thicknessMapUv?"#define THICKNESSMAP_UV "+g.thicknessMapUv:"",g.vertexTangents&&g.flatShading===!1?"#define USE_TANGENT":"",g.vertexColors?"#define USE_COLOR":"",g.vertexAlphas?"#define USE_COLOR_ALPHA":"",g.vertexUv1s?"#define USE_UV1":"",g.vertexUv2s?"#define USE_UV2":"",g.vertexUv3s?"#define USE_UV3":"",g.pointsUvs?"#define USE_POINTS_UV":"",g.flatShading?"#define FLAT_SHADED":"",g.skinning?"#define USE_SKINNING":"",g.morphTargets?"#define USE_MORPHTARGETS":"",g.morphNormals&&g.flatShading===!1?"#define USE_MORPHNORMALS":"",g.morphColors?"#define USE_MORPHCOLORS":"",g.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",g.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+g.morphTextureStride:"",g.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+g.morphTargetsCount:"",g.doubleSided?"#define DOUBLE_SIDED":"",g.flipSided?"#define FLIP_SIDED":"",g.shadowMapEnabled?"#define USE_SHADOWMAP":"",g.shadowMapEnabled?"#define "+G:"",g.sizeAttenuation?"#define USE_SIZEATTENUATION":"",g.numLightProbes>0?"#define USE_LIGHT_PROBES":"",g.useLegacyLights?"#define LEGACY_LIGHTS":"",g.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ff).join(`
`),o2=[GV(g),"#define SHADER_TYPE "+g.shaderType,"#define SHADER_NAME "+g.shaderName,l2,g.useFog&&g.fog?"#define USE_FOG":"",g.useFog&&g.fogExp2?"#define FOG_EXP2":"",g.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",g.map?"#define USE_MAP":"",g.matcap?"#define USE_MATCAP":"",g.envMap?"#define USE_ENVMAP":"",g.envMap?"#define "+h:"",g.envMap?"#define "+X:"",g.envMap?"#define "+Z:"",K?"#define CUBEUV_TEXEL_WIDTH "+K.texelWidth:"",K?"#define CUBEUV_TEXEL_HEIGHT "+K.texelHeight:"",K?"#define CUBEUV_MAX_MIP "+K.maxMip+".0":"",g.lightMap?"#define USE_LIGHTMAP":"",g.aoMap?"#define USE_AOMAP":"",g.bumpMap?"#define USE_BUMPMAP":"",g.normalMap?"#define USE_NORMALMAP":"",g.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",g.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",g.emissiveMap?"#define USE_EMISSIVEMAP":"",g.anisotropy?"#define USE_ANISOTROPY":"",g.anisotropyMap?"#define USE_ANISOTROPYMAP":"",g.clearcoat?"#define USE_CLEARCOAT":"",g.clearcoatMap?"#define USE_CLEARCOATMAP":"",g.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",g.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",g.dispersion?"#define USE_DISPERSION":"",g.iridescence?"#define USE_IRIDESCENCE":"",g.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",g.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",g.specularMap?"#define USE_SPECULARMAP":"",g.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",g.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",g.roughnessMap?"#define USE_ROUGHNESSMAP":"",g.metalnessMap?"#define USE_METALNESSMAP":"",g.alphaMap?"#define USE_ALPHAMAP":"",g.alphaTest?"#define USE_ALPHATEST":"",g.alphaHash?"#define USE_ALPHAHASH":"",g.sheen?"#define USE_SHEEN":"",g.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",g.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",g.transmission?"#define USE_TRANSMISSION":"",g.transmissionMap?"#define USE_TRANSMISSIONMAP":"",g.thicknessMap?"#define USE_THICKNESSMAP":"",g.vertexTangents&&g.flatShading===!1?"#define USE_TANGENT":"",g.vertexColors||g.instancingColor?"#define USE_COLOR":"",g.vertexAlphas?"#define USE_COLOR_ALPHA":"",g.vertexUv1s?"#define USE_UV1":"",g.vertexUv2s?"#define USE_UV2":"",g.vertexUv3s?"#define USE_UV3":"",g.pointsUvs?"#define USE_POINTS_UV":"",g.gradientMap?"#define USE_GRADIENTMAP":"",g.flatShading?"#define FLAT_SHADED":"",g.doubleSided?"#define DOUBLE_SIDED":"",g.flipSided?"#define FLIP_SIDED":"",g.shadowMapEnabled?"#define USE_SHADOWMAP":"",g.shadowMapEnabled?"#define "+G:"",g.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",g.numLightProbes>0?"#define USE_LIGHT_PROBES":"",g.useLegacyLights?"#define LEGACY_LIGHTS":"",g.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",g.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",g.toneMapping!==A1?"#define TONE_MAPPING":"",g.toneMapping!==A1?tn.tonemapping_pars_fragment:"",g.toneMapping!==A1?S62("toneMapping",g.toneMapping):"",g.dithering?"#define DITHERING":"",g.opaque?"#define OPAQUE":"",tn.colorspace_pars_fragment,B62("linearToOutputTexel",g.outputColorSpace),g.useDepthPacking?"#define DEPTH_PACKING "+g.depthPacking:"",`
`].filter(Ff).join(`
`)),P=D6(P),P=jV(P,g),P=NV(P,g),O=D6(O),O=jV(O,g),O=NV(O,g),P=UV(P),O=UV(O),g.isRawShaderMaterial!==!0&&(v2=`#version 300 es
`,r2=[e2,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+r2,o2=["#define varying in",g.glslVersion===nV?"":"layout(location = 0) out highp vec4 pc_fragColor;",g.glslVersion===nV?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+o2);const m2=v2+r2+P,k2=v2+o2+O,j2=FV(x,x.VERTEX_SHADER,m2),b2=FV(x,x.FRAGMENT_SHADER,k2);x.attachShader(p2,j2),x.attachShader(p2,b2),g.index0AttributeName!==void 0?x.bindAttribLocation(p2,0,g.index0AttributeName):g.morphTargets===!0&&x.bindAttribLocation(p2,0,"position"),x.linkProgram(p2);function D2(W2){if(D.debug.checkShaderErrors){const nt=x.getProgramInfoLog(p2).trim(),U2=x.getShaderInfoLog(j2).trim(),q2=x.getShaderInfoLog(b2).trim();let ft=!0,ut=!0;if(x.getProgramParameter(p2,x.LINK_STATUS)===!1)if(ft=!1,typeof D.debug.onShaderError=="function")D.debug.onShaderError(x,p2,j2,b2);else{const Et=OV(x,j2,"vertex"),it=OV(x,b2,"fragment");console.error("THREE.WebGLProgram: Shader Error "+x.getError()+" - VALIDATE_STATUS "+x.getProgramParameter(p2,x.VALIDATE_STATUS)+`

Material Name: `+W2.name+`
Material Type: `+W2.type+`

Program Info Log: `+nt+`
`+Et+`
`+it)}else nt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",nt):(U2===""||q2==="")&&(ut=!1);ut&&(W2.diagnostics={runnable:ft,programLog:nt,vertexShader:{log:U2,prefix:r2},fragmentShader:{log:q2,prefix:o2}})}x.deleteShader(j2),x.deleteShader(b2),N2=new D4(x,p2),B2=M62(x,p2)}let N2;this.getUniforms=function(){return N2===void 0&&D2(this),N2};let B2;this.getAttributes=function(){return B2===void 0&&D2(this),B2};let g2=g.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return g2===!1&&(g2=x.getProgramParameter(p2,y62)),g2},this.destroy=function(){w.releaseStatesOfProgram(this),x.deleteProgram(p2),this.program=void 0},this.type=g.shaderType,this.name=g.shaderName,this.id=k62++,this.cacheKey=a,this.usedTimes=1,this.program=p2,this.vertexShader=j2,this.fragmentShader=b2,this}let N62=0;class U62{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(a){const g=a.vertexShader,w=a.fragmentShader,x=this._getShaderStage(g),E=this._getShaderStage(w),P=this._getShaderCacheForMaterial(a);return P.has(x)===!1&&(P.add(x),x.usedTimes++),P.has(E)===!1&&(P.add(E),E.usedTimes++),this}remove(a){const g=this.materialCache.get(a);for(const w of g)w.usedTimes--,w.usedTimes===0&&this.shaderCache.delete(w.code);return this.materialCache.delete(a),this}getVertexShaderID(a){return this._getShaderStage(a.vertexShader).id}getFragmentShaderID(a){return this._getShaderStage(a.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(a){const g=this.materialCache;let w=g.get(a);return w===void 0&&(w=new Set,g.set(a,w)),w}_getShaderStage(a){const g=this.shaderCache;let w=g.get(a);return w===void 0&&(w=new G62(a),g.set(a,w)),w}}class G62{constructor(a){this.id=N62++,this.code=a,this.usedTimes=0}}function W62(D,a,g,w,x,E,P){const O=new Xz,G=new U62,h=new Set,X=[],Z=x.logarithmicDepthBuffer,K=x.vertexTextures;let e2=x.precision;const l2={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p2(B2){return h.add(B2),B2===0?"uv":`uv${B2}`}function r2(B2,g2,W2,nt,U2){const q2=nt.fog,ft=U2.geometry,ut=B2.isMeshStandardMaterial?nt.environment:null,Et=(B2.isMeshStandardMaterial?g:a).get(B2.envMap||ut),it=Et&&Et.mapping===q4?Et.image.height:null,At=l2[B2.type];B2.precision!==null&&(e2=x.getMaxPrecision(B2.precision),e2!==B2.precision&&console.warn("THREE.WebGLProgram.getParameters:",B2.precision,"not supported, using",e2,"instead."));const yt=ft.morphAttributes.position||ft.morphAttributes.normal||ft.morphAttributes.color,re=yt!==void 0?yt.length:0;let ye=0;ft.morphAttributes.position!==void 0&&(ye=1),ft.morphAttributes.normal!==void 0&&(ye=2),ft.morphAttributes.color!==void 0&&(ye=3);let Be,rt,Bt,ee;if(At){const an=jo[At];Be=an.vertexShader,rt=an.fragmentShader}else Be=B2.vertexShader,rt=B2.fragmentShader,G.update(B2),Bt=G.getVertexShaderID(B2),ee=G.getFragmentShaderID(B2);const H2=D.getRenderTarget(),Dt=U2.isInstancedMesh===!0,ue=U2.isBatchedMesh===!0,Y2=!!B2.map,Oe=!!B2.matcap,ne=!!Et,on=!!B2.aoMap,pe=!!B2.lightMap,ze=!!B2.bumpMap,be=!!B2.normalMap,en=!!B2.displacementMap,Gn=!!B2.emissiveMap,F2=!!B2.metalnessMap,w2=!!B2.roughnessMap,st=B2.anisotropy>0,dt=B2.clearcoat>0,Ct=B2.dispersion>0,Mt=B2.iridescence>0,ke=B2.sheen>0,zt=B2.transmission>0,Vt=st&&!!B2.anisotropyMap,De=dt&&!!B2.clearcoatMap,Gt=dt&&!!B2.clearcoatNormalMap,ae=dt&&!!B2.clearcoatRoughnessMap,sn=Mt&&!!B2.iridescenceMap,Se=Mt&&!!B2.iridescenceThicknessMap,ie=ke&&!!B2.sheenColorMap,je=ke&&!!B2.sheenRoughnessMap,Xe=!!B2.specularMap,Sn=!!B2.specularColorMap,We=!!B2.specularIntensityMap,d2=zt&&!!B2.transmissionMap,X2=zt&&!!B2.thicknessMap,$2=!!B2.gradientMap,St=!!B2.alphaMap,Ot=B2.alphaTest>0,Ne=!!B2.alphaHash,Ze=!!B2.extensions;let zn=A1;B2.toneMapped&&(H2===null||H2.isXRRenderTarget===!0)&&(zn=D.toneMapping);const yi={shaderID:At,shaderType:B2.type,shaderName:B2.name,vertexShader:Be,fragmentShader:rt,defines:B2.defines,customVertexShaderID:Bt,customFragmentShaderID:ee,isRawShaderMaterial:B2.isRawShaderMaterial===!0,glslVersion:B2.glslVersion,precision:e2,batching:ue,instancing:Dt,instancingColor:Dt&&U2.instanceColor!==null,instancingMorph:Dt&&U2.morphTexture!==null,supportsVertexTextures:K,outputColorSpace:H2===null?D.outputColorSpace:H2.isXRRenderTarget===!0?H2.texture.colorSpace:Xi,alphaToCoverage:!!B2.alphaToCoverage,map:Y2,matcap:Oe,envMap:ne,envMapMode:ne&&Et.mapping,envMapCubeUVHeight:it,aoMap:on,lightMap:pe,bumpMap:ze,normalMap:be,displacementMap:K&&en,emissiveMap:Gn,normalMapObjectSpace:be&&B2.normalMapType===Lc2,normalMapTangentSpace:be&&B2.normalMapType===J4,metalnessMap:F2,roughnessMap:w2,anisotropy:st,anisotropyMap:Vt,clearcoat:dt,clearcoatMap:De,clearcoatNormalMap:Gt,clearcoatRoughnessMap:ae,dispersion:Ct,iridescence:Mt,iridescenceMap:sn,iridescenceThicknessMap:Se,sheen:ke,sheenColorMap:ie,sheenRoughnessMap:je,specularMap:Xe,specularColorMap:Sn,specularIntensityMap:We,transmission:zt,transmissionMap:d2,thicknessMap:X2,gradientMap:$2,opaque:B2.transparent===!1&&B2.blending===ru&&B2.alphaToCoverage===!1,alphaMap:St,alphaTest:Ot,alphaHash:Ne,combine:B2.combine,mapUv:Y2&&p2(B2.map.channel),aoMapUv:on&&p2(B2.aoMap.channel),lightMapUv:pe&&p2(B2.lightMap.channel),bumpMapUv:ze&&p2(B2.bumpMap.channel),normalMapUv:be&&p2(B2.normalMap.channel),displacementMapUv:en&&p2(B2.displacementMap.channel),emissiveMapUv:Gn&&p2(B2.emissiveMap.channel),metalnessMapUv:F2&&p2(B2.metalnessMap.channel),roughnessMapUv:w2&&p2(B2.roughnessMap.channel),anisotropyMapUv:Vt&&p2(B2.anisotropyMap.channel),clearcoatMapUv:De&&p2(B2.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&p2(B2.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ae&&p2(B2.clearcoatRoughnessMap.channel),iridescenceMapUv:sn&&p2(B2.iridescenceMap.channel),iridescenceThicknessMapUv:Se&&p2(B2.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&p2(B2.sheenColorMap.channel),sheenRoughnessMapUv:je&&p2(B2.sheenRoughnessMap.channel),specularMapUv:Xe&&p2(B2.specularMap.channel),specularColorMapUv:Sn&&p2(B2.specularColorMap.channel),specularIntensityMapUv:We&&p2(B2.specularIntensityMap.channel),transmissionMapUv:d2&&p2(B2.transmissionMap.channel),thicknessMapUv:X2&&p2(B2.thicknessMap.channel),alphaMapUv:St&&p2(B2.alphaMap.channel),vertexTangents:!!ft.attributes.tangent&&(be||st),vertexColors:B2.vertexColors,vertexAlphas:B2.vertexColors===!0&&!!ft.attributes.color&&ft.attributes.color.itemSize===4,pointsUvs:U2.isPoints===!0&&!!ft.attributes.uv&&(Y2||St),fog:!!q2,useFog:B2.fog===!0,fogExp2:!!q2&&q2.isFogExp2,flatShading:B2.flatShading===!0,sizeAttenuation:B2.sizeAttenuation===!0,logarithmicDepthBuffer:Z,skinning:U2.isSkinnedMesh===!0,morphTargets:ft.morphAttributes.position!==void 0,morphNormals:ft.morphAttributes.normal!==void 0,morphColors:ft.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ye,numDirLights:g2.directional.length,numPointLights:g2.point.length,numSpotLights:g2.spot.length,numSpotLightMaps:g2.spotLightMap.length,numRectAreaLights:g2.rectArea.length,numHemiLights:g2.hemi.length,numDirLightShadows:g2.directionalShadowMap.length,numPointLightShadows:g2.pointShadowMap.length,numSpotLightShadows:g2.spotShadowMap.length,numSpotLightShadowsWithMaps:g2.numSpotLightShadowsWithMaps,numLightProbes:g2.numLightProbes,numClippingPlanes:P.numPlanes,numClipIntersection:P.numIntersection,dithering:B2.dithering,shadowMapEnabled:D.shadowMap.enabled&&W2.length>0,shadowMapType:D.shadowMap.type,toneMapping:zn,useLegacyLights:D._useLegacyLights,decodeVideoTexture:Y2&&B2.map.isVideoTexture===!0&&Dn.getTransfer(B2.map.colorSpace)===Kn,premultipliedAlpha:B2.premultipliedAlpha,doubleSided:B2.side===No,flipSided:B2.side===nr,useDepthPacking:B2.depthPacking>=0,depthPacking:B2.depthPacking||0,index0AttributeName:B2.index0AttributeName,extensionClipCullDistance:Ze&&B2.extensions.clipCullDistance===!0&&w.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ze&&B2.extensions.multiDraw===!0&&w.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:w.has("KHR_parallel_shader_compile"),customProgramCacheKey:B2.customProgramCacheKey()};return yi.vertexUv1s=h.has(1),yi.vertexUv2s=h.has(2),yi.vertexUv3s=h.has(3),h.clear(),yi}function o2(B2){const g2=[];if(B2.shaderID?g2.push(B2.shaderID):(g2.push(B2.customVertexShaderID),g2.push(B2.customFragmentShaderID)),B2.defines!==void 0)for(const W2 in B2.defines)g2.push(W2),g2.push(B2.defines[W2]);return B2.isRawShaderMaterial===!1&&(v2(g2,B2),m2(g2,B2),g2.push(D.outputColorSpace)),g2.push(B2.customProgramCacheKey),g2.join()}function v2(B2,g2){B2.push(g2.precision),B2.push(g2.outputColorSpace),B2.push(g2.envMapMode),B2.push(g2.envMapCubeUVHeight),B2.push(g2.mapUv),B2.push(g2.alphaMapUv),B2.push(g2.lightMapUv),B2.push(g2.aoMapUv),B2.push(g2.bumpMapUv),B2.push(g2.normalMapUv),B2.push(g2.displacementMapUv),B2.push(g2.emissiveMapUv),B2.push(g2.metalnessMapUv),B2.push(g2.roughnessMapUv),B2.push(g2.anisotropyMapUv),B2.push(g2.clearcoatMapUv),B2.push(g2.clearcoatNormalMapUv),B2.push(g2.clearcoatRoughnessMapUv),B2.push(g2.iridescenceMapUv),B2.push(g2.iridescenceThicknessMapUv),B2.push(g2.sheenColorMapUv),B2.push(g2.sheenRoughnessMapUv),B2.push(g2.specularMapUv),B2.push(g2.specularColorMapUv),B2.push(g2.specularIntensityMapUv),B2.push(g2.transmissionMapUv),B2.push(g2.thicknessMapUv),B2.push(g2.combine),B2.push(g2.fogExp2),B2.push(g2.sizeAttenuation),B2.push(g2.morphTargetsCount),B2.push(g2.morphAttributeCount),B2.push(g2.numDirLights),B2.push(g2.numPointLights),B2.push(g2.numSpotLights),B2.push(g2.numSpotLightMaps),B2.push(g2.numHemiLights),B2.push(g2.numRectAreaLights),B2.push(g2.numDirLightShadows),B2.push(g2.numPointLightShadows),B2.push(g2.numSpotLightShadows),B2.push(g2.numSpotLightShadowsWithMaps),B2.push(g2.numLightProbes),B2.push(g2.shadowMapType),B2.push(g2.toneMapping),B2.push(g2.numClippingPlanes),B2.push(g2.numClipIntersection),B2.push(g2.depthPacking)}function m2(B2,g2){O.disableAll(),g2.supportsVertexTextures&&O.enable(0),g2.instancing&&O.enable(1),g2.instancingColor&&O.enable(2),g2.instancingMorph&&O.enable(3),g2.matcap&&O.enable(4),g2.envMap&&O.enable(5),g2.normalMapObjectSpace&&O.enable(6),g2.normalMapTangentSpace&&O.enable(7),g2.clearcoat&&O.enable(8),g2.iridescence&&O.enable(9),g2.alphaTest&&O.enable(10),g2.vertexColors&&O.enable(11),g2.vertexAlphas&&O.enable(12),g2.vertexUv1s&&O.enable(13),g2.vertexUv2s&&O.enable(14),g2.vertexUv3s&&O.enable(15),g2.vertexTangents&&O.enable(16),g2.anisotropy&&O.enable(17),g2.alphaHash&&O.enable(18),g2.batching&&O.enable(19),g2.dispersion&&O.enable(20),B2.push(O.mask),O.disableAll(),g2.fog&&O.enable(0),g2.useFog&&O.enable(1),g2.flatShading&&O.enable(2),g2.logarithmicDepthBuffer&&O.enable(3),g2.skinning&&O.enable(4),g2.morphTargets&&O.enable(5),g2.morphNormals&&O.enable(6),g2.morphColors&&O.enable(7),g2.premultipliedAlpha&&O.enable(8),g2.shadowMapEnabled&&O.enable(9),g2.useLegacyLights&&O.enable(10),g2.doubleSided&&O.enable(11),g2.flipSided&&O.enable(12),g2.useDepthPacking&&O.enable(13),g2.dithering&&O.enable(14),g2.transmission&&O.enable(15),g2.sheen&&O.enable(16),g2.opaque&&O.enable(17),g2.pointsUvs&&O.enable(18),g2.decodeVideoTexture&&O.enable(19),g2.alphaToCoverage&&O.enable(20),B2.push(O.mask)}function k2(B2){const g2=l2[B2.type];let W2;if(g2){const nt=jo[g2];W2=C42.clone(nt.uniforms)}else W2=B2.uniforms;return W2}function j2(B2,g2){let W2;for(let nt=0,U2=X.length;nt<U2;nt++){const q2=X[nt];if(q2.cacheKey===g2){W2=q2,++W2.usedTimes;break}}return W2===void 0&&(W2=new j62(D,g2,B2,E),X.push(W2)),W2}function b2(B2){if(--B2.usedTimes===0){const g2=X.indexOf(B2);X[g2]=X[X.length-1],X.pop(),B2.destroy()}}function D2(B2){G.remove(B2)}function N2(){G.dispose()}return{getParameters:r2,getProgramCacheKey:o2,getUniforms:k2,acquireProgram:j2,releaseProgram:b2,releaseShaderCache:D2,programs:X,dispose:N2}}function H62(){let D=new WeakMap;function a(E){let P=D.get(E);return P===void 0&&(P={},D.set(E,P)),P}function g(E){D.delete(E)}function w(E,P,O){D.get(E)[P]=O}function x(){D=new WeakMap}return{get:a,remove:g,update:w,dispose:x}}function V62(D,a){return D.groupOrder!==a.groupOrder?D.groupOrder-a.groupOrder:D.renderOrder!==a.renderOrder?D.renderOrder-a.renderOrder:D.material.id!==a.material.id?D.material.id-a.material.id:D.z!==a.z?D.z-a.z:D.id-a.id}function WV(D,a){return D.groupOrder!==a.groupOrder?D.groupOrder-a.groupOrder:D.renderOrder!==a.renderOrder?D.renderOrder-a.renderOrder:D.z!==a.z?a.z-D.z:D.id-a.id}function HV(){const D=[];let a=0;const g=[],w=[],x=[];function E(){a=0,g.length=0,w.length=0,x.length=0}function P(Z,K,e2,l2,p2,r2){let o2=D[a];return o2===void 0?(o2={id:Z.id,object:Z,geometry:K,material:e2,groupOrder:l2,renderOrder:Z.renderOrder,z:p2,group:r2},D[a]=o2):(o2.id=Z.id,o2.object=Z,o2.geometry=K,o2.material=e2,o2.groupOrder=l2,o2.renderOrder=Z.renderOrder,o2.z=p2,o2.group=r2),a++,o2}function O(Z,K,e2,l2,p2,r2){const o2=P(Z,K,e2,l2,p2,r2);e2.transmission>0?w.push(o2):e2.transparent===!0?x.push(o2):g.push(o2)}function G(Z,K,e2,l2,p2,r2){const o2=P(Z,K,e2,l2,p2,r2);e2.transmission>0?w.unshift(o2):e2.transparent===!0?x.unshift(o2):g.unshift(o2)}function h(Z,K){g.length>1&&g.sort(Z||V62),w.length>1&&w.sort(K||WV),x.length>1&&x.sort(K||WV)}function X(){for(let Z=a,K=D.length;Z<K;Z++){const e2=D[Z];if(e2.id===null)break;e2.id=null,e2.object=null,e2.geometry=null,e2.material=null,e2.group=null}}return{opaque:g,transmissive:w,transparent:x,init:E,push:O,unshift:G,finish:X,sort:h}}function z62(){let D=new WeakMap;function a(w,x){const E=D.get(w);let P;return E===void 0?(P=new HV,D.set(w,[P])):x>=E.length?(P=new HV,E.push(P)):P=E[x],P}function g(){D=new WeakMap}return{get:a,dispose:g}}function Q62(){const D={};return{get:function(a){if(D[a.id]!==void 0)return D[a.id];let g;switch(a.type){case"DirectionalLight":g={direction:new E2,color:new ce};break;case"SpotLight":g={position:new E2,direction:new E2,color:new ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":g={position:new E2,color:new ce,distance:0,decay:0};break;case"HemisphereLight":g={direction:new E2,skyColor:new ce,groundColor:new ce};break;case"RectAreaLight":g={color:new ce,position:new E2,halfWidth:new E2,halfHeight:new E2};break}return D[a.id]=g,g}}}function Y62(){const D={};return{get:function(a){if(D[a.id]!==void 0)return D[a.id];let g;switch(a.type){case"DirectionalLight":g={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"SpotLight":g={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt};break;case"PointLight":g={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return D[a.id]=g,g}}}let X62=0;function Z62(D,a){return(a.castShadow?2:0)-(D.castShadow?2:0)+(a.map?1:0)-(D.map?1:0)}function q62(D){const a=new Q62,g=Y62(),w={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)w.probe.push(new E2);const x=new E2,E=new te,P=new te;function O(h,X){let Z=0,K=0,e2=0;for(let W2=0;W2<9;W2++)w.probe[W2].set(0,0,0);let l2=0,p2=0,r2=0,o2=0,v2=0,m2=0,k2=0,j2=0,b2=0,D2=0,N2=0;h.sort(Z62);const B2=X===!0?Math.PI:1;for(let W2=0,nt=h.length;W2<nt;W2++){const U2=h[W2],q2=U2.color,ft=U2.intensity,ut=U2.distance,Et=U2.shadow&&U2.shadow.map?U2.shadow.map.texture:null;if(U2.isAmbientLight)Z+=q2.r*ft*B2,K+=q2.g*ft*B2,e2+=q2.b*ft*B2;else if(U2.isLightProbe){for(let it=0;it<9;it++)w.probe[it].addScaledVector(U2.sh.coefficients[it],ft);N2++}else if(U2.isDirectionalLight){const it=a.get(U2);if(it.color.copy(U2.color).multiplyScalar(U2.intensity*B2),U2.castShadow){const At=U2.shadow,yt=g.get(U2);yt.shadowBias=At.bias,yt.shadowNormalBias=At.normalBias,yt.shadowRadius=At.radius,yt.shadowMapSize=At.mapSize,w.directionalShadow[l2]=yt,w.directionalShadowMap[l2]=Et,w.directionalShadowMatrix[l2]=U2.shadow.matrix,m2++}w.directional[l2]=it,l2++}else if(U2.isSpotLight){const it=a.get(U2);it.position.setFromMatrixPosition(U2.matrixWorld),it.color.copy(q2).multiplyScalar(ft*B2),it.distance=ut,it.coneCos=Math.cos(U2.angle),it.penumbraCos=Math.cos(U2.angle*(1-U2.penumbra)),it.decay=U2.decay,w.spot[r2]=it;const At=U2.shadow;if(U2.map&&(w.spotLightMap[b2]=U2.map,b2++,At.updateMatrices(U2),U2.castShadow&&D2++),w.spotLightMatrix[r2]=At.matrix,U2.castShadow){const yt=g.get(U2);yt.shadowBias=At.bias,yt.shadowNormalBias=At.normalBias,yt.shadowRadius=At.radius,yt.shadowMapSize=At.mapSize,w.spotShadow[r2]=yt,w.spotShadowMap[r2]=Et,j2++}r2++}else if(U2.isRectAreaLight){const it=a.get(U2);it.color.copy(q2).multiplyScalar(ft),it.halfWidth.set(U2.width*.5,0,0),it.halfHeight.set(0,U2.height*.5,0),w.rectArea[o2]=it,o2++}else if(U2.isPointLight){const it=a.get(U2);if(it.color.copy(U2.color).multiplyScalar(U2.intensity*B2),it.distance=U2.distance,it.decay=U2.decay,U2.castShadow){const At=U2.shadow,yt=g.get(U2);yt.shadowBias=At.bias,yt.shadowNormalBias=At.normalBias,yt.shadowRadius=At.radius,yt.shadowMapSize=At.mapSize,yt.shadowCameraNear=At.camera.near,yt.shadowCameraFar=At.camera.far,w.pointShadow[p2]=yt,w.pointShadowMap[p2]=Et,w.pointShadowMatrix[p2]=U2.shadow.matrix,k2++}w.point[p2]=it,p2++}else if(U2.isHemisphereLight){const it=a.get(U2);it.skyColor.copy(U2.color).multiplyScalar(ft*B2),it.groundColor.copy(U2.groundColor).multiplyScalar(ft*B2),w.hemi[v2]=it,v2++}}o2>0&&(D.has("OES_texture_float_linear")===!0?(w.rectAreaLTC1=Zt.LTC_FLOAT_1,w.rectAreaLTC2=Zt.LTC_FLOAT_2):(w.rectAreaLTC1=Zt.LTC_HALF_1,w.rectAreaLTC2=Zt.LTC_HALF_2)),w.ambient[0]=Z,w.ambient[1]=K,w.ambient[2]=e2;const g2=w.hash;(g2.directionalLength!==l2||g2.pointLength!==p2||g2.spotLength!==r2||g2.rectAreaLength!==o2||g2.hemiLength!==v2||g2.numDirectionalShadows!==m2||g2.numPointShadows!==k2||g2.numSpotShadows!==j2||g2.numSpotMaps!==b2||g2.numLightProbes!==N2)&&(w.directional.length=l2,w.spot.length=r2,w.rectArea.length=o2,w.point.length=p2,w.hemi.length=v2,w.directionalShadow.length=m2,w.directionalShadowMap.length=m2,w.pointShadow.length=k2,w.pointShadowMap.length=k2,w.spotShadow.length=j2,w.spotShadowMap.length=j2,w.directionalShadowMatrix.length=m2,w.pointShadowMatrix.length=k2,w.spotLightMatrix.length=j2+b2-D2,w.spotLightMap.length=b2,w.numSpotLightShadowsWithMaps=D2,w.numLightProbes=N2,g2.directionalLength=l2,g2.pointLength=p2,g2.spotLength=r2,g2.rectAreaLength=o2,g2.hemiLength=v2,g2.numDirectionalShadows=m2,g2.numPointShadows=k2,g2.numSpotShadows=j2,g2.numSpotMaps=b2,g2.numLightProbes=N2,w.version=X62++)}function G(h,X){let Z=0,K=0,e2=0,l2=0,p2=0;const r2=X.matrixWorldInverse;for(let o2=0,v2=h.length;o2<v2;o2++){const m2=h[o2];if(m2.isDirectionalLight){const k2=w.directional[Z];k2.direction.setFromMatrixPosition(m2.matrixWorld),x.setFromMatrixPosition(m2.target.matrixWorld),k2.direction.sub(x),k2.direction.transformDirection(r2),Z++}else if(m2.isSpotLight){const k2=w.spot[e2];k2.position.setFromMatrixPosition(m2.matrixWorld),k2.position.applyMatrix4(r2),k2.direction.setFromMatrixPosition(m2.matrixWorld),x.setFromMatrixPosition(m2.target.matrixWorld),k2.direction.sub(x),k2.direction.transformDirection(r2),e2++}else if(m2.isRectAreaLight){const k2=w.rectArea[l2];k2.position.setFromMatrixPosition(m2.matrixWorld),k2.position.applyMatrix4(r2),P.identity(),E.copy(m2.matrixWorld),E.premultiply(r2),P.extractRotation(E),k2.halfWidth.set(m2.width*.5,0,0),k2.halfHeight.set(0,m2.height*.5,0),k2.halfWidth.applyMatrix4(P),k2.halfHeight.applyMatrix4(P),l2++}else if(m2.isPointLight){const k2=w.point[K];k2.position.setFromMatrixPosition(m2.matrixWorld),k2.position.applyMatrix4(r2),K++}else if(m2.isHemisphereLight){const k2=w.hemi[p2];k2.direction.setFromMatrixPosition(m2.matrixWorld),k2.direction.transformDirection(r2),p2++}}}return{setup:O,setupView:G,state:w}}function VV(D){const a=new q62(D),g=[],w=[];function x(X){h.camera=X,g.length=0,w.length=0}function E(X){g.push(X)}function P(X){w.push(X)}function O(X){a.setup(g,X)}function G(X){a.setupView(g,X)}const h={lightsArray:g,shadowsArray:w,camera:null,lights:a,transmissionRenderTarget:{}};return{init:x,state:h,setupLights:O,setupLightsView:G,pushLight:E,pushShadow:P}}function J62(D){let a=new WeakMap;function g(x,E=0){const P=a.get(x);let O;return P===void 0?(O=new VV(D),a.set(x,[O])):E>=P.length?(O=new VV(D),P.push(O)):O=P[E],O}function w(){a=new WeakMap}return{get:g,dispose:w}}class K62 extends zr{constructor(a){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ic2,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(a)}copy(a){return super.copy(a),this.depthPacking=a.depthPacking,this.map=a.map,this.alphaMap=a.alphaMap,this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this}}class $62 extends zr{constructor(a){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(a)}copy(a){return super.copy(a),this.map=a.map,this.alphaMap=a.alphaMap,this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this}}const th2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eh2=`uniform sampler2D shadow_pass;
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
}`;function nh2(D,a,g){let w=new th;const x=new Lt,E=new Lt,P=new En,O=new K62({depthPacking:Pc2}),G=new $62,h={},X=g.maxTextureSize,Z={[Wo]:nr,[nr]:Wo,[No]:No},K=new v1({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Lt},radius:{value:4}},vertexShader:th2,fragmentShader:eh2}),e2=K.clone();e2.defines.HORIZONTAL_PASS=1;const l2=new n0;l2.setAttribute("position",new _0(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p2=new e0(l2,K),r2=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=X6;let o2=this.type;this.render=function(b2,D2,N2){if(r2.enabled===!1||r2.autoUpdate===!1&&r2.needsUpdate===!1||b2.length===0)return;const B2=D.getRenderTarget(),g2=D.getActiveCubeFace(),W2=D.getActiveMipmapLevel(),nt=D.state;nt.setBlending(d1),nt.buffers.color.setClear(1,1,1,1),nt.buffers.depth.setTest(!0),nt.setScissorTest(!1);const U2=o2!==vs&&this.type===vs,q2=o2===vs&&this.type!==vs;for(let ft=0,ut=b2.length;ft<ut;ft++){const Et=b2[ft],it=Et.shadow;if(it===void 0){console.warn("THREE.WebGLShadowMap:",Et,"has no shadow.");continue}if(it.autoUpdate===!1&&it.needsUpdate===!1)continue;x.copy(it.mapSize);const At=it.getFrameExtents();if(x.multiply(At),E.copy(it.mapSize),(x.x>X||x.y>X)&&(x.x>X&&(E.x=Math.floor(X/At.x),x.x=E.x*At.x,it.mapSize.x=E.x),x.y>X&&(E.y=Math.floor(X/At.y),x.y=E.y*At.y,it.mapSize.y=E.y)),it.map===null||U2===!0||q2===!0){const re=this.type!==vs?{minFilter:j0,magFilter:j0}:{};it.map!==null&&it.map.dispose(),it.map=new X1(x.x,x.y,re),it.map.texture.name=Et.name+".shadowMap",it.camera.updateProjectionMatrix()}D.setRenderTarget(it.map),D.clear();const yt=it.getViewportCount();for(let re=0;re<yt;re++){const ye=it.getViewport(re);P.set(E.x*ye.x,E.y*ye.y,E.x*ye.z,E.y*ye.w),nt.viewport(P),it.updateMatrices(Et,re),w=it.getFrustum(),k2(D2,N2,it.camera,Et,this.type)}it.isPointLightShadow!==!0&&this.type===vs&&v2(it,N2),it.needsUpdate=!1}o2=this.type,r2.needsUpdate=!1,D.setRenderTarget(B2,g2,W2)};function v2(b2,D2){const N2=a.update(p2);K.defines.VSM_SAMPLES!==b2.blurSamples&&(K.defines.VSM_SAMPLES=b2.blurSamples,e2.defines.VSM_SAMPLES=b2.blurSamples,K.needsUpdate=!0,e2.needsUpdate=!0),b2.mapPass===null&&(b2.mapPass=new X1(x.x,x.y)),K.uniforms.shadow_pass.value=b2.map.texture,K.uniforms.resolution.value=b2.mapSize,K.uniforms.radius.value=b2.radius,D.setRenderTarget(b2.mapPass),D.clear(),D.renderBufferDirect(D2,null,N2,K,p2,null),e2.uniforms.shadow_pass.value=b2.mapPass.texture,e2.uniforms.resolution.value=b2.mapSize,e2.uniforms.radius.value=b2.radius,D.setRenderTarget(b2.map),D.clear(),D.renderBufferDirect(D2,null,N2,e2,p2,null)}function m2(b2,D2,N2,B2){let g2=null;const W2=N2.isPointLight===!0?b2.customDistanceMaterial:b2.customDepthMaterial;if(W2!==void 0)g2=W2;else if(g2=N2.isPointLight===!0?G:O,D.localClippingEnabled&&D2.clipShadows===!0&&Array.isArray(D2.clippingPlanes)&&D2.clippingPlanes.length!==0||D2.displacementMap&&D2.displacementScale!==0||D2.alphaMap&&D2.alphaTest>0||D2.map&&D2.alphaTest>0){const nt=g2.uuid,U2=D2.uuid;let q2=h[nt];q2===void 0&&(q2={},h[nt]=q2);let ft=q2[U2];ft===void 0&&(ft=g2.clone(),q2[U2]=ft,D2.addEventListener("dispose",j2)),g2=ft}if(g2.visible=D2.visible,g2.wireframe=D2.wireframe,B2===vs?g2.side=D2.shadowSide!==null?D2.shadowSide:D2.side:g2.side=D2.shadowSide!==null?D2.shadowSide:Z[D2.side],g2.alphaMap=D2.alphaMap,g2.alphaTest=D2.alphaTest,g2.map=D2.map,g2.clipShadows=D2.clipShadows,g2.clippingPlanes=D2.clippingPlanes,g2.clipIntersection=D2.clipIntersection,g2.displacementMap=D2.displacementMap,g2.displacementScale=D2.displacementScale,g2.displacementBias=D2.displacementBias,g2.wireframeLinewidth=D2.wireframeLinewidth,g2.linewidth=D2.linewidth,N2.isPointLight===!0&&g2.isMeshDistanceMaterial===!0){const nt=D.properties.get(g2);nt.light=N2}return g2}function k2(b2,D2,N2,B2,g2){if(b2.visible===!1)return;if(b2.layers.test(D2.layers)&&(b2.isMesh||b2.isLine||b2.isPoints)&&(b2.castShadow||b2.receiveShadow&&g2===vs)&&(!b2.frustumCulled||w.intersectsObject(b2))){b2.modelViewMatrix.multiplyMatrices(N2.matrixWorldInverse,b2.matrixWorld);const U2=a.update(b2),q2=b2.material;if(Array.isArray(q2)){const ft=U2.groups;for(let ut=0,Et=ft.length;ut<Et;ut++){const it=ft[ut],At=q2[it.materialIndex];if(At&&At.visible){const yt=m2(b2,At,B2,g2);b2.onBeforeShadow(D,b2,D2,N2,U2,yt,it),D.renderBufferDirect(N2,null,U2,yt,b2,it),b2.onAfterShadow(D,b2,D2,N2,U2,yt,it)}}}else if(q2.visible){const ft=m2(b2,q2,B2,g2);b2.onBeforeShadow(D,b2,D2,N2,U2,ft,null),D.renderBufferDirect(N2,null,U2,ft,b2,null),b2.onAfterShadow(D,b2,D2,N2,U2,ft,null)}}const nt=b2.children;for(let U2=0,q2=nt.length;U2<q2;U2++)k2(nt[U2],D2,N2,B2,g2)}function j2(b2){b2.target.removeEventListener("dispose",j2);for(const N2 in h){const B2=h[N2],g2=b2.target.uuid;g2 in B2&&(B2[g2].dispose(),delete B2[g2])}}}function ih2(D){function a(){let d2=!1;const X2=new En;let $2=null;const St=new En(0,0,0,0);return{setMask:function(Ot){$2!==Ot&&!d2&&(D.colorMask(Ot,Ot,Ot,Ot),$2=Ot)},setLocked:function(Ot){d2=Ot},setClear:function(Ot,Ne,Ze,zn,yi){yi===!0&&(Ot*=zn,Ne*=zn,Ze*=zn),X2.set(Ot,Ne,Ze,zn),St.equals(X2)===!1&&(D.clearColor(Ot,Ne,Ze,zn),St.copy(X2))},reset:function(){d2=!1,$2=null,St.set(-1,0,0,0)}}}function g(){let d2=!1,X2=null,$2=null,St=null;return{setTest:function(Ot){Ot?ee(D.DEPTH_TEST):H2(D.DEPTH_TEST)},setMask:function(Ot){X2!==Ot&&!d2&&(D.depthMask(Ot),X2=Ot)},setFunc:function(Ot){if($2!==Ot){switch(Ot){case oc2:D.depthFunc(D.NEVER);break;case sc2:D.depthFunc(D.ALWAYS);break;case lc2:D.depthFunc(D.LESS);break;case F4:D.depthFunc(D.LEQUAL);break;case uc2:D.depthFunc(D.EQUAL);break;case fc2:D.depthFunc(D.GEQUAL);break;case pc2:D.depthFunc(D.GREATER);break;case cc2:D.depthFunc(D.NOTEQUAL);break;default:D.depthFunc(D.LEQUAL)}$2=Ot}},setLocked:function(Ot){d2=Ot},setClear:function(Ot){St!==Ot&&(D.clearDepth(Ot),St=Ot)},reset:function(){d2=!1,X2=null,$2=null,St=null}}}function w(){let d2=!1,X2=null,$2=null,St=null,Ot=null,Ne=null,Ze=null,zn=null,yi=null;return{setTest:function(an){d2||(an?ee(D.STENCIL_TEST):H2(D.STENCIL_TEST))},setMask:function(an){X2!==an&&!d2&&(D.stencilMask(an),X2=an)},setFunc:function(an,ei,On){($2!==an||St!==ei||Ot!==On)&&(D.stencilFunc(an,ei,On),$2=an,St=ei,Ot=On)},setOp:function(an,ei,On){(Ne!==an||Ze!==ei||zn!==On)&&(D.stencilOp(an,ei,On),Ne=an,Ze=ei,zn=On)},setLocked:function(an){d2=an},setClear:function(an){yi!==an&&(D.clearStencil(an),yi=an)},reset:function(){d2=!1,X2=null,$2=null,St=null,Ot=null,Ne=null,Ze=null,zn=null,yi=null}}}const x=new a,E=new g,P=new w,O=new WeakMap,G=new WeakMap;let h={},X={},Z=new WeakMap,K=[],e2=null,l2=!1,p2=null,r2=null,o2=null,v2=null,m2=null,k2=null,j2=null,b2=new ce(0,0,0),D2=0,N2=!1,B2=null,g2=null,W2=null,nt=null,U2=null;const q2=D.getParameter(D.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ft=!1,ut=0;const Et=D.getParameter(D.VERSION);Et.indexOf("WebGL")!==-1?(ut=parseFloat(/^WebGL (\d)/.exec(Et)[1]),ft=ut>=1):Et.indexOf("OpenGL ES")!==-1&&(ut=parseFloat(/^OpenGL ES (\d)/.exec(Et)[1]),ft=ut>=2);let it=null,At={};const yt=D.getParameter(D.SCISSOR_BOX),re=D.getParameter(D.VIEWPORT),ye=new En().fromArray(yt),Be=new En().fromArray(re);function rt(d2,X2,$2,St){const Ot=new Uint8Array(4),Ne=D.createTexture();D.bindTexture(d2,Ne),D.texParameteri(d2,D.TEXTURE_MIN_FILTER,D.NEAREST),D.texParameteri(d2,D.TEXTURE_MAG_FILTER,D.NEAREST);for(let Ze=0;Ze<$2;Ze++)d2===D.TEXTURE_3D||d2===D.TEXTURE_2D_ARRAY?D.texImage3D(X2,0,D.RGBA,1,1,St,0,D.RGBA,D.UNSIGNED_BYTE,Ot):D.texImage2D(X2+Ze,0,D.RGBA,1,1,0,D.RGBA,D.UNSIGNED_BYTE,Ot);return Ne}const Bt={};Bt[D.TEXTURE_2D]=rt(D.TEXTURE_2D,D.TEXTURE_2D,1),Bt[D.TEXTURE_CUBE_MAP]=rt(D.TEXTURE_CUBE_MAP,D.TEXTURE_CUBE_MAP_POSITIVE_X,6),Bt[D.TEXTURE_2D_ARRAY]=rt(D.TEXTURE_2D_ARRAY,D.TEXTURE_2D_ARRAY,1,1),Bt[D.TEXTURE_3D]=rt(D.TEXTURE_3D,D.TEXTURE_3D,1,1),x.setClear(0,0,0,1),E.setClear(1),P.setClear(0),ee(D.DEPTH_TEST),E.setFunc(F4),ze(!1),be(SH),ee(D.CULL_FACE),on(d1);function ee(d2){h[d2]!==!0&&(D.enable(d2),h[d2]=!0)}function H2(d2){h[d2]!==!1&&(D.disable(d2),h[d2]=!1)}function Dt(d2,X2){return X[d2]!==X2?(D.bindFramebuffer(d2,X2),X[d2]=X2,d2===D.DRAW_FRAMEBUFFER&&(X[D.FRAMEBUFFER]=X2),d2===D.FRAMEBUFFER&&(X[D.DRAW_FRAMEBUFFER]=X2),!0):!1}function ue(d2,X2){let $2=K,St=!1;if(d2){$2=Z.get(X2),$2===void 0&&($2=[],Z.set(X2,$2));const Ot=d2.textures;if($2.length!==Ot.length||$2[0]!==D.COLOR_ATTACHMENT0){for(let Ne=0,Ze=Ot.length;Ne<Ze;Ne++)$2[Ne]=D.COLOR_ATTACHMENT0+Ne;$2.length=Ot.length,St=!0}}else $2[0]!==D.BACK&&($2[0]=D.BACK,St=!0);St&&D.drawBuffers($2)}function Y2(d2){return e2!==d2?(D.useProgram(d2),e2=d2,!0):!1}const Oe={[Q1]:D.FUNC_ADD,[Wp2]:D.FUNC_SUBTRACT,[Hp2]:D.FUNC_REVERSE_SUBTRACT};Oe[Vp2]=D.MIN,Oe[zp2]=D.MAX;const ne={[Qp2]:D.ZERO,[Yp2]:D.ONE,[Xp2]:D.SRC_COLOR,[C6]:D.SRC_ALPHA,[tc2]:D.SRC_ALPHA_SATURATE,[Kp2]:D.DST_COLOR,[qp2]:D.DST_ALPHA,[Zp2]:D.ONE_MINUS_SRC_COLOR,[M6]:D.ONE_MINUS_SRC_ALPHA,[$p2]:D.ONE_MINUS_DST_COLOR,[Jp2]:D.ONE_MINUS_DST_ALPHA,[ec2]:D.CONSTANT_COLOR,[nc2]:D.ONE_MINUS_CONSTANT_COLOR,[ic2]:D.CONSTANT_ALPHA,[rc2]:D.ONE_MINUS_CONSTANT_ALPHA};function on(d2,X2,$2,St,Ot,Ne,Ze,zn,yi,an){if(d2===d1){l2===!0&&(H2(D.BLEND),l2=!1);return}if(l2===!1&&(ee(D.BLEND),l2=!0),d2!==Gp2){if(d2!==p2||an!==N2){if((r2!==Q1||m2!==Q1)&&(D.blendEquation(D.FUNC_ADD),r2=Q1,m2=Q1),an)switch(d2){case ru:D.blendFuncSeparate(D.ONE,D.ONE_MINUS_SRC_ALPHA,D.ONE,D.ONE_MINUS_SRC_ALPHA);break;case xH:D.blendFunc(D.ONE,D.ONE);break;case CH:D.blendFuncSeparate(D.ZERO,D.ONE_MINUS_SRC_COLOR,D.ZERO,D.ONE);break;case MH:D.blendFuncSeparate(D.ZERO,D.SRC_COLOR,D.ZERO,D.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",d2);break}else switch(d2){case ru:D.blendFuncSeparate(D.SRC_ALPHA,D.ONE_MINUS_SRC_ALPHA,D.ONE,D.ONE_MINUS_SRC_ALPHA);break;case xH:D.blendFunc(D.SRC_ALPHA,D.ONE);break;case CH:D.blendFuncSeparate(D.ZERO,D.ONE_MINUS_SRC_COLOR,D.ZERO,D.ONE);break;case MH:D.blendFunc(D.ZERO,D.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",d2);break}o2=null,v2=null,k2=null,j2=null,b2.set(0,0,0),D2=0,p2=d2,N2=an}return}Ot=Ot||X2,Ne=Ne||$2,Ze=Ze||St,(X2!==r2||Ot!==m2)&&(D.blendEquationSeparate(Oe[X2],Oe[Ot]),r2=X2,m2=Ot),($2!==o2||St!==v2||Ne!==k2||Ze!==j2)&&(D.blendFuncSeparate(ne[$2],ne[St],ne[Ne],ne[Ze]),o2=$2,v2=St,k2=Ne,j2=Ze),(zn.equals(b2)===!1||yi!==D2)&&(D.blendColor(zn.r,zn.g,zn.b,yi),b2.copy(zn),D2=yi),p2=d2,N2=!1}function pe(d2,X2){d2.side===No?H2(D.CULL_FACE):ee(D.CULL_FACE);let $2=d2.side===nr;X2&&($2=!$2),ze($2),d2.blending===ru&&d2.transparent===!1?on(d1):on(d2.blending,d2.blendEquation,d2.blendSrc,d2.blendDst,d2.blendEquationAlpha,d2.blendSrcAlpha,d2.blendDstAlpha,d2.blendColor,d2.blendAlpha,d2.premultipliedAlpha),E.setFunc(d2.depthFunc),E.setTest(d2.depthTest),E.setMask(d2.depthWrite),x.setMask(d2.colorWrite);const St=d2.stencilWrite;P.setTest(St),St&&(P.setMask(d2.stencilWriteMask),P.setFunc(d2.stencilFunc,d2.stencilRef,d2.stencilFuncMask),P.setOp(d2.stencilFail,d2.stencilZFail,d2.stencilZPass)),Gn(d2.polygonOffset,d2.polygonOffsetFactor,d2.polygonOffsetUnits),d2.alphaToCoverage===!0?ee(D.SAMPLE_ALPHA_TO_COVERAGE):H2(D.SAMPLE_ALPHA_TO_COVERAGE)}function ze(d2){B2!==d2&&(d2?D.frontFace(D.CW):D.frontFace(D.CCW),B2=d2)}function be(d2){d2!==jp2?(ee(D.CULL_FACE),d2!==g2&&(d2===SH?D.cullFace(D.BACK):d2===Np2?D.cullFace(D.FRONT):D.cullFace(D.FRONT_AND_BACK))):H2(D.CULL_FACE),g2=d2}function en(d2){d2!==W2&&(ft&&D.lineWidth(d2),W2=d2)}function Gn(d2,X2,$2){d2?(ee(D.POLYGON_OFFSET_FILL),(nt!==X2||U2!==$2)&&(D.polygonOffset(X2,$2),nt=X2,U2=$2)):H2(D.POLYGON_OFFSET_FILL)}function F2(d2){d2?ee(D.SCISSOR_TEST):H2(D.SCISSOR_TEST)}function w2(d2){d2===void 0&&(d2=D.TEXTURE0+q2-1),it!==d2&&(D.activeTexture(d2),it=d2)}function st(d2,X2,$2){$2===void 0&&(it===null?$2=D.TEXTURE0+q2-1:$2=it);let St=At[$2];St===void 0&&(St={type:void 0,texture:void 0},At[$2]=St),(St.type!==d2||St.texture!==X2)&&(it!==$2&&(D.activeTexture($2),it=$2),D.bindTexture(d2,X2||Bt[d2]),St.type=d2,St.texture=X2)}function dt(){const d2=At[it];d2!==void 0&&d2.type!==void 0&&(D.bindTexture(d2.type,null),d2.type=void 0,d2.texture=void 0)}function Ct(){try{D.compressedTexImage2D.apply(D,arguments)}catch(d2){console.error("THREE.WebGLState:",d2)}}function Mt(){try{D.compressedTexImage3D.apply(D,arguments)}catch(d2){console.error("THREE.WebGLState:",d2)}}function ke(){try{D.texSubImage2D.apply(D,arguments)}catch(d2){console.error("THREE.WebGLState:",d2)}}function zt(){try{D.texSubImage3D.apply(D,arguments)}catch(d2){console.error("THREE.WebGLState:",d2)}}function Vt(){try{D.compressedTexSubImage2D.apply(D,arguments)}catch(d2){console.error("THREE.WebGLState:",d2)}}function De(){try{D.compressedTexSubImage3D.apply(D,arguments)}catch(d2){console.error("THREE.WebGLState:",d2)}}function Gt(){try{D.texStorage2D.apply(D,arguments)}catch(d2){console.error("THREE.WebGLState:",d2)}}function ae(){try{D.texStorage3D.apply(D,arguments)}catch(d2){console.error("THREE.WebGLState:",d2)}}function sn(){try{D.texImage2D.apply(D,arguments)}catch(d2){console.error("THREE.WebGLState:",d2)}}function Se(){try{D.texImage3D.apply(D,arguments)}catch(d2){console.error("THREE.WebGLState:",d2)}}function ie(d2){ye.equals(d2)===!1&&(D.scissor(d2.x,d2.y,d2.z,d2.w),ye.copy(d2))}function je(d2){Be.equals(d2)===!1&&(D.viewport(d2.x,d2.y,d2.z,d2.w),Be.copy(d2))}function Xe(d2,X2){let $2=G.get(X2);$2===void 0&&($2=new WeakMap,G.set(X2,$2));let St=$2.get(d2);St===void 0&&(St=D.getUniformBlockIndex(X2,d2.name),$2.set(d2,St))}function Sn(d2,X2){const St=G.get(X2).get(d2);O.get(X2)!==St&&(D.uniformBlockBinding(X2,St,d2.__bindingPointIndex),O.set(X2,St))}function We(){D.disable(D.BLEND),D.disable(D.CULL_FACE),D.disable(D.DEPTH_TEST),D.disable(D.POLYGON_OFFSET_FILL),D.disable(D.SCISSOR_TEST),D.disable(D.STENCIL_TEST),D.disable(D.SAMPLE_ALPHA_TO_COVERAGE),D.blendEquation(D.FUNC_ADD),D.blendFunc(D.ONE,D.ZERO),D.blendFuncSeparate(D.ONE,D.ZERO,D.ONE,D.ZERO),D.blendColor(0,0,0,0),D.colorMask(!0,!0,!0,!0),D.clearColor(0,0,0,0),D.depthMask(!0),D.depthFunc(D.LESS),D.clearDepth(1),D.stencilMask(4294967295),D.stencilFunc(D.ALWAYS,0,4294967295),D.stencilOp(D.KEEP,D.KEEP,D.KEEP),D.clearStencil(0),D.cullFace(D.BACK),D.frontFace(D.CCW),D.polygonOffset(0,0),D.activeTexture(D.TEXTURE0),D.bindFramebuffer(D.FRAMEBUFFER,null),D.bindFramebuffer(D.DRAW_FRAMEBUFFER,null),D.bindFramebuffer(D.READ_FRAMEBUFFER,null),D.useProgram(null),D.lineWidth(1),D.scissor(0,0,D.canvas.width,D.canvas.height),D.viewport(0,0,D.canvas.width,D.canvas.height),h={},it=null,At={},X={},Z=new WeakMap,K=[],e2=null,l2=!1,p2=null,r2=null,o2=null,v2=null,m2=null,k2=null,j2=null,b2=new ce(0,0,0),D2=0,N2=!1,B2=null,g2=null,W2=null,nt=null,U2=null,ye.set(0,0,D.canvas.width,D.canvas.height),Be.set(0,0,D.canvas.width,D.canvas.height),x.reset(),E.reset(),P.reset()}return{buffers:{color:x,depth:E,stencil:P},enable:ee,disable:H2,bindFramebuffer:Dt,drawBuffers:ue,useProgram:Y2,setBlending:on,setMaterial:pe,setFlipSided:ze,setCullFace:be,setLineWidth:en,setPolygonOffset:Gn,setScissorTest:F2,activeTexture:w2,bindTexture:st,unbindTexture:dt,compressedTexImage2D:Ct,compressedTexImage3D:Mt,texImage2D:sn,texImage3D:Se,updateUBOMapping:Xe,uniformBlockBinding:Sn,texStorage2D:Gt,texStorage3D:ae,texSubImage2D:ke,texSubImage3D:zt,compressedTexSubImage2D:Vt,compressedTexSubImage3D:De,scissor:ie,viewport:je,reset:We}}function rh2(D,a,g,w,x,E,P){const O=a.has("WEBGL_multisampled_render_to_texture")?a.get("WEBGL_multisampled_render_to_texture"):null,G=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Lt,X=new WeakMap;let Z;const K=new WeakMap;let e2=!1;try{e2=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function l2(F2,w2){return e2?new OffscreenCanvas(F2,w2):Qf("canvas")}function p2(F2,w2,st){let dt=1;const Ct=Gn(F2);if((Ct.width>st||Ct.height>st)&&(dt=st/Math.max(Ct.width,Ct.height)),dt<1)if(typeof HTMLImageElement<"u"&&F2 instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F2 instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F2 instanceof ImageBitmap||typeof VideoFrame<"u"&&F2 instanceof VideoFrame){const Mt=Math.floor(dt*Ct.width),ke=Math.floor(dt*Ct.height);Z===void 0&&(Z=l2(Mt,ke));const zt=w2?l2(Mt,ke):Z;return zt.width=Mt,zt.height=ke,zt.getContext("2d").drawImage(F2,0,0,Mt,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Ct.width+"x"+Ct.height+") to ("+Mt+"x"+ke+")."),zt}else return"data"in F2&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Ct.width+"x"+Ct.height+")."),F2;return F2}function r2(F2){return F2.generateMipmaps&&F2.minFilter!==j0&&F2.minFilter!==t0}function o2(F2){D.generateMipmap(F2)}function v2(F2,w2,st,dt,Ct=!1){if(F2!==null){if(D[F2]!==void 0)return D[F2];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F2+"'")}let Mt=w2;if(w2===D.RED&&(st===D.FLOAT&&(Mt=D.R32F),st===D.HALF_FLOAT&&(Mt=D.R16F),st===D.UNSIGNED_BYTE&&(Mt=D.R8)),w2===D.RED_INTEGER&&(st===D.UNSIGNED_BYTE&&(Mt=D.R8UI),st===D.UNSIGNED_SHORT&&(Mt=D.R16UI),st===D.UNSIGNED_INT&&(Mt=D.R32UI),st===D.BYTE&&(Mt=D.R8I),st===D.SHORT&&(Mt=D.R16I),st===D.INT&&(Mt=D.R32I)),w2===D.RG&&(st===D.FLOAT&&(Mt=D.RG32F),st===D.HALF_FLOAT&&(Mt=D.RG16F),st===D.UNSIGNED_BYTE&&(Mt=D.RG8)),w2===D.RG_INTEGER&&(st===D.UNSIGNED_BYTE&&(Mt=D.RG8UI),st===D.UNSIGNED_SHORT&&(Mt=D.RG16UI),st===D.UNSIGNED_INT&&(Mt=D.RG32UI),st===D.BYTE&&(Mt=D.RG8I),st===D.SHORT&&(Mt=D.RG16I),st===D.INT&&(Mt=D.RG32I)),w2===D.RGB&&st===D.UNSIGNED_INT_5_9_9_9_REV&&(Mt=D.RGB9_E5),w2===D.RGBA){const ke=Ct?N4:Dn.getTransfer(dt);st===D.FLOAT&&(Mt=D.RGBA32F),st===D.HALF_FLOAT&&(Mt=D.RGBA16F),st===D.UNSIGNED_BYTE&&(Mt=ke===Kn?D.SRGB8_ALPHA8:D.RGBA8),st===D.UNSIGNED_SHORT_4_4_4_4&&(Mt=D.RGBA4),st===D.UNSIGNED_SHORT_5_5_5_1&&(Mt=D.RGB5_A1)}return(Mt===D.R16F||Mt===D.R32F||Mt===D.RG16F||Mt===D.RG32F||Mt===D.RGBA16F||Mt===D.RGBA32F)&&a.get("EXT_color_buffer_float"),Mt}function m2(F2,w2){return r2(F2)===!0||F2.isFramebufferTexture&&F2.minFilter!==j0&&F2.minFilter!==t0?Math.log2(Math.max(w2.width,w2.height))+1:F2.mipmaps!==void 0&&F2.mipmaps.length>0?F2.mipmaps.length:F2.isCompressedTexture&&Array.isArray(F2.image)?w2.mipmaps.length:1}function k2(F2){const w2=F2.target;w2.removeEventListener("dispose",k2),b2(w2),w2.isVideoTexture&&X.delete(w2)}function j2(F2){const w2=F2.target;w2.removeEventListener("dispose",j2),N2(w2)}function b2(F2){const w2=w.get(F2);if(w2.__webglInit===void 0)return;const st=F2.source,dt=K.get(st);if(dt){const Ct=dt[w2.__cacheKey];Ct.usedTimes--,Ct.usedTimes===0&&D2(F2),Object.keys(dt).length===0&&K.delete(st)}w.remove(F2)}function D2(F2){const w2=w.get(F2);D.deleteTexture(w2.__webglTexture);const st=F2.source,dt=K.get(st);delete dt[w2.__cacheKey],P.memory.textures--}function N2(F2){const w2=w.get(F2);if(F2.depthTexture&&F2.depthTexture.dispose(),F2.isWebGLCubeRenderTarget)for(let dt=0;dt<6;dt++){if(Array.isArray(w2.__webglFramebuffer[dt]))for(let Ct=0;Ct<w2.__webglFramebuffer[dt].length;Ct++)D.deleteFramebuffer(w2.__webglFramebuffer[dt][Ct]);else D.deleteFramebuffer(w2.__webglFramebuffer[dt]);w2.__webglDepthbuffer&&D.deleteRenderbuffer(w2.__webglDepthbuffer[dt])}else{if(Array.isArray(w2.__webglFramebuffer))for(let dt=0;dt<w2.__webglFramebuffer.length;dt++)D.deleteFramebuffer(w2.__webglFramebuffer[dt]);else D.deleteFramebuffer(w2.__webglFramebuffer);if(w2.__webglDepthbuffer&&D.deleteRenderbuffer(w2.__webglDepthbuffer),w2.__webglMultisampledFramebuffer&&D.deleteFramebuffer(w2.__webglMultisampledFramebuffer),w2.__webglColorRenderbuffer)for(let dt=0;dt<w2.__webglColorRenderbuffer.length;dt++)w2.__webglColorRenderbuffer[dt]&&D.deleteRenderbuffer(w2.__webglColorRenderbuffer[dt]);w2.__webglDepthRenderbuffer&&D.deleteRenderbuffer(w2.__webglDepthRenderbuffer)}const st=F2.textures;for(let dt=0,Ct=st.length;dt<Ct;dt++){const Mt=w.get(st[dt]);Mt.__webglTexture&&(D.deleteTexture(Mt.__webglTexture),P.memory.textures--),w.remove(st[dt])}w.remove(F2)}let B2=0;function g2(){B2=0}function W2(){const F2=B2;return F2>=x.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+F2+" texture units while this GPU supports only "+x.maxTextures),B2+=1,F2}function nt(F2){const w2=[];return w2.push(F2.wrapS),w2.push(F2.wrapT),w2.push(F2.wrapR||0),w2.push(F2.magFilter),w2.push(F2.minFilter),w2.push(F2.anisotropy),w2.push(F2.internalFormat),w2.push(F2.format),w2.push(F2.type),w2.push(F2.generateMipmaps),w2.push(F2.premultiplyAlpha),w2.push(F2.flipY),w2.push(F2.unpackAlignment),w2.push(F2.colorSpace),w2.join()}function U2(F2,w2){const st=w.get(F2);if(F2.isVideoTexture&&be(F2),F2.isRenderTargetTexture===!1&&F2.version>0&&st.__version!==F2.version){const dt=F2.image;if(dt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(dt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(st,F2,w2);return}}g.bindTexture(D.TEXTURE_2D,st.__webglTexture,D.TEXTURE0+w2)}function q2(F2,w2){const st=w.get(F2);if(F2.version>0&&st.__version!==F2.version){ye(st,F2,w2);return}g.bindTexture(D.TEXTURE_2D_ARRAY,st.__webglTexture,D.TEXTURE0+w2)}function ft(F2,w2){const st=w.get(F2);if(F2.version>0&&st.__version!==F2.version){ye(st,F2,w2);return}g.bindTexture(D.TEXTURE_3D,st.__webglTexture,D.TEXTURE0+w2)}function ut(F2,w2){const st=w.get(F2);if(F2.version>0&&st.__version!==F2.version){Be(st,F2,w2);return}g.bindTexture(D.TEXTURE_CUBE_MAP,st.__webglTexture,D.TEXTURE0+w2)}const Et={[y1]:D.REPEAT,[Vr]:D.CLAMP_TO_EDGE,[O4]:D.MIRRORED_REPEAT},it={[j0]:D.NEAREST,[Dz]:D.NEAREST_MIPMAP_NEAREST,[Lf]:D.NEAREST_MIPMAP_LINEAR,[t0]:D.LINEAR,[b4]:D.LINEAR_MIPMAP_NEAREST,[Go]:D.LINEAR_MIPMAP_LINEAR},At={[Fc2]:D.NEVER,[Wc2]:D.ALWAYS,[Oc2]:D.LESS,[Hz]:D.LEQUAL,[jc2]:D.EQUAL,[Gc2]:D.GEQUAL,[Nc2]:D.GREATER,[Uc2]:D.NOTEQUAL};function yt(F2,w2){if(w2.type===kr&&a.has("OES_texture_float_linear")===!1&&(w2.magFilter===t0||w2.magFilter===b4||w2.magFilter===Lf||w2.magFilter===Go||w2.minFilter===t0||w2.minFilter===b4||w2.minFilter===Lf||w2.minFilter===Go)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),D.texParameteri(F2,D.TEXTURE_WRAP_S,Et[w2.wrapS]),D.texParameteri(F2,D.TEXTURE_WRAP_T,Et[w2.wrapT]),(F2===D.TEXTURE_3D||F2===D.TEXTURE_2D_ARRAY)&&D.texParameteri(F2,D.TEXTURE_WRAP_R,Et[w2.wrapR]),D.texParameteri(F2,D.TEXTURE_MAG_FILTER,it[w2.magFilter]),D.texParameteri(F2,D.TEXTURE_MIN_FILTER,it[w2.minFilter]),w2.compareFunction&&(D.texParameteri(F2,D.TEXTURE_COMPARE_MODE,D.COMPARE_REF_TO_TEXTURE),D.texParameteri(F2,D.TEXTURE_COMPARE_FUNC,At[w2.compareFunction])),a.has("EXT_texture_filter_anisotropic")===!0){if(w2.magFilter===j0||w2.minFilter!==Lf&&w2.minFilter!==Go||w2.type===kr&&a.has("OES_texture_float_linear")===!1)return;if(w2.anisotropy>1||w.get(w2).__currentAnisotropy){const st=a.get("EXT_texture_filter_anisotropic");D.texParameterf(F2,st.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w2.anisotropy,x.getMaxAnisotropy())),w.get(w2).__currentAnisotropy=w2.anisotropy}}}function re(F2,w2){let st=!1;F2.__webglInit===void 0&&(F2.__webglInit=!0,w2.addEventListener("dispose",k2));const dt=w2.source;let Ct=K.get(dt);Ct===void 0&&(Ct={},K.set(dt,Ct));const Mt=nt(w2);if(Mt!==F2.__cacheKey){Ct[Mt]===void 0&&(Ct[Mt]={texture:D.createTexture(),usedTimes:0},P.memory.textures++,st=!0),Ct[Mt].usedTimes++;const ke=Ct[F2.__cacheKey];ke!==void 0&&(Ct[F2.__cacheKey].usedTimes--,ke.usedTimes===0&&D2(w2)),F2.__cacheKey=Mt,F2.__webglTexture=Ct[Mt].texture}return st}function ye(F2,w2,st){let dt=D.TEXTURE_2D;(w2.isDataArrayTexture||w2.isCompressedArrayTexture)&&(dt=D.TEXTURE_2D_ARRAY),w2.isData3DTexture&&(dt=D.TEXTURE_3D);const Ct=re(F2,w2),Mt=w2.source;g.bindTexture(dt,F2.__webglTexture,D.TEXTURE0+st);const ke=w.get(Mt);if(Mt.version!==ke.__version||Ct===!0){g.activeTexture(D.TEXTURE0+st);const zt=Dn.getPrimaries(Dn.workingColorSpace),Vt=w2.colorSpace===a1?null:Dn.getPrimaries(w2.colorSpace),De=w2.colorSpace===a1||zt===Vt?D.NONE:D.BROWSER_DEFAULT_WEBGL;D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,w2.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w2.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,w2.unpackAlignment),D.pixelStorei(D.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let Gt=p2(w2.image,!1,x.maxTextureSize);Gt=en(w2,Gt);const ae=E.convert(w2.format,w2.colorSpace),sn=E.convert(w2.type);let Se=v2(w2.internalFormat,ae,sn,w2.colorSpace,w2.isVideoTexture);yt(dt,w2);let ie;const je=w2.mipmaps,Xe=w2.isVideoTexture!==!0,Sn=ke.__version===void 0||Ct===!0,We=Mt.dataReady,d2=m2(w2,Gt);if(w2.isDepthTexture)Se=D.DEPTH_COMPONENT16,w2.type===kr?Se=D.DEPTH_COMPONENT32F:w2.type===_u?Se=D.DEPTH_COMPONENT24:w2.type===$f&&(Se=D.DEPTH24_STENCIL8),Sn&&(Xe?g.texStorage2D(D.TEXTURE_2D,1,Se,Gt.width,Gt.height):g.texImage2D(D.TEXTURE_2D,0,Se,Gt.width,Gt.height,0,ae,sn,null));else if(w2.isDataTexture)if(je.length>0){Xe&&Sn&&g.texStorage2D(D.TEXTURE_2D,d2,Se,je[0].width,je[0].height);for(let X2=0,$2=je.length;X2<$2;X2++)ie=je[X2],Xe?We&&g.texSubImage2D(D.TEXTURE_2D,X2,0,0,ie.width,ie.height,ae,sn,ie.data):g.texImage2D(D.TEXTURE_2D,X2,Se,ie.width,ie.height,0,ae,sn,ie.data);w2.generateMipmaps=!1}else Xe?(Sn&&g.texStorage2D(D.TEXTURE_2D,d2,Se,Gt.width,Gt.height),We&&g.texSubImage2D(D.TEXTURE_2D,0,0,0,Gt.width,Gt.height,ae,sn,Gt.data)):g.texImage2D(D.TEXTURE_2D,0,Se,Gt.width,Gt.height,0,ae,sn,Gt.data);else if(w2.isCompressedTexture)if(w2.isCompressedArrayTexture){Xe&&Sn&&g.texStorage3D(D.TEXTURE_2D_ARRAY,d2,Se,je[0].width,je[0].height,Gt.depth);for(let X2=0,$2=je.length;X2<$2;X2++)ie=je[X2],w2.format!==mo?ae!==null?Xe?We&&g.compressedTexSubImage3D(D.TEXTURE_2D_ARRAY,X2,0,0,0,ie.width,ie.height,Gt.depth,ae,ie.data,0,0):g.compressedTexImage3D(D.TEXTURE_2D_ARRAY,X2,Se,ie.width,ie.height,Gt.depth,0,ie.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?We&&g.texSubImage3D(D.TEXTURE_2D_ARRAY,X2,0,0,0,ie.width,ie.height,Gt.depth,ae,sn,ie.data):g.texImage3D(D.TEXTURE_2D_ARRAY,X2,Se,ie.width,ie.height,Gt.depth,0,ae,sn,ie.data)}else{Xe&&Sn&&g.texStorage2D(D.TEXTURE_2D,d2,Se,je[0].width,je[0].height);for(let X2=0,$2=je.length;X2<$2;X2++)ie=je[X2],w2.format!==mo?ae!==null?Xe?We&&g.compressedTexSubImage2D(D.TEXTURE_2D,X2,0,0,ie.width,ie.height,ae,ie.data):g.compressedTexImage2D(D.TEXTURE_2D,X2,Se,ie.width,ie.height,0,ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?We&&g.texSubImage2D(D.TEXTURE_2D,X2,0,0,ie.width,ie.height,ae,sn,ie.data):g.texImage2D(D.TEXTURE_2D,X2,Se,ie.width,ie.height,0,ae,sn,ie.data)}else if(w2.isDataArrayTexture)Xe?(Sn&&g.texStorage3D(D.TEXTURE_2D_ARRAY,d2,Se,Gt.width,Gt.height,Gt.depth),We&&g.texSubImage3D(D.TEXTURE_2D_ARRAY,0,0,0,0,Gt.width,Gt.height,Gt.depth,ae,sn,Gt.data)):g.texImage3D(D.TEXTURE_2D_ARRAY,0,Se,Gt.width,Gt.height,Gt.depth,0,ae,sn,Gt.data);else if(w2.isData3DTexture)Xe?(Sn&&g.texStorage3D(D.TEXTURE_3D,d2,Se,Gt.width,Gt.height,Gt.depth),We&&g.texSubImage3D(D.TEXTURE_3D,0,0,0,0,Gt.width,Gt.height,Gt.depth,ae,sn,Gt.data)):g.texImage3D(D.TEXTURE_3D,0,Se,Gt.width,Gt.height,Gt.depth,0,ae,sn,Gt.data);else if(w2.isFramebufferTexture){if(Sn)if(Xe)g.texStorage2D(D.TEXTURE_2D,d2,Se,Gt.width,Gt.height);else{let X2=Gt.width,$2=Gt.height;for(let St=0;St<d2;St++)g.texImage2D(D.TEXTURE_2D,St,Se,X2,$2,0,ae,sn,null),X2>>=1,$2>>=1}}else if(je.length>0){if(Xe&&Sn){const X2=Gn(je[0]);g.texStorage2D(D.TEXTURE_2D,d2,Se,X2.width,X2.height)}for(let X2=0,$2=je.length;X2<$2;X2++)ie=je[X2],Xe?We&&g.texSubImage2D(D.TEXTURE_2D,X2,0,0,ae,sn,ie):g.texImage2D(D.TEXTURE_2D,X2,Se,ae,sn,ie);w2.generateMipmaps=!1}else if(Xe){if(Sn){const X2=Gn(Gt);g.texStorage2D(D.TEXTURE_2D,d2,Se,X2.width,X2.height)}We&&g.texSubImage2D(D.TEXTURE_2D,0,0,0,ae,sn,Gt)}else g.texImage2D(D.TEXTURE_2D,0,Se,ae,sn,Gt);r2(w2)&&o2(dt),ke.__version=Mt.version,w2.onUpdate&&w2.onUpdate(w2)}F2.__version=w2.version}function Be(F2,w2,st){if(w2.image.length!==6)return;const dt=re(F2,w2),Ct=w2.source;g.bindTexture(D.TEXTURE_CUBE_MAP,F2.__webglTexture,D.TEXTURE0+st);const Mt=w.get(Ct);if(Ct.version!==Mt.__version||dt===!0){g.activeTexture(D.TEXTURE0+st);const ke=Dn.getPrimaries(Dn.workingColorSpace),zt=w2.colorSpace===a1?null:Dn.getPrimaries(w2.colorSpace),Vt=w2.colorSpace===a1||ke===zt?D.NONE:D.BROWSER_DEFAULT_WEBGL;D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,w2.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w2.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,w2.unpackAlignment),D.pixelStorei(D.UNPACK_COLORSPACE_CONVERSION_WEBGL,Vt);const De=w2.isCompressedTexture||w2.image[0].isCompressedTexture,Gt=w2.image[0]&&w2.image[0].isDataTexture,ae=[];for(let $2=0;$2<6;$2++)!De&&!Gt?ae[$2]=p2(w2.image[$2],!0,x.maxCubemapSize):ae[$2]=Gt?w2.image[$2].image:w2.image[$2],ae[$2]=en(w2,ae[$2]);const sn=ae[0],Se=E.convert(w2.format,w2.colorSpace),ie=E.convert(w2.type),je=v2(w2.internalFormat,Se,ie,w2.colorSpace),Xe=w2.isVideoTexture!==!0,Sn=Mt.__version===void 0||dt===!0,We=Ct.dataReady;let d2=m2(w2,sn);yt(D.TEXTURE_CUBE_MAP,w2);let X2;if(De){Xe&&Sn&&g.texStorage2D(D.TEXTURE_CUBE_MAP,d2,je,sn.width,sn.height);for(let $2=0;$2<6;$2++){X2=ae[$2].mipmaps;for(let St=0;St<X2.length;St++){const Ot=X2[St];w2.format!==mo?Se!==null?Xe?We&&g.compressedTexSubImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+$2,St,0,0,Ot.width,Ot.height,Se,Ot.data):g.compressedTexImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+$2,St,je,Ot.width,Ot.height,0,Ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Xe?We&&g.texSubImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+$2,St,0,0,Ot.width,Ot.height,Se,ie,Ot.data):g.texImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+$2,St,je,Ot.width,Ot.height,0,Se,ie,Ot.data)}}}else{if(X2=w2.mipmaps,Xe&&Sn){X2.length>0&&d2++;const $2=Gn(ae[0]);g.texStorage2D(D.TEXTURE_CUBE_MAP,d2,je,$2.width,$2.height)}for(let $2=0;$2<6;$2++)if(Gt){Xe?We&&g.texSubImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+$2,0,0,0,ae[$2].width,ae[$2].height,Se,ie,ae[$2].data):g.texImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+$2,0,je,ae[$2].width,ae[$2].height,0,Se,ie,ae[$2].data);for(let St=0;St<X2.length;St++){const Ne=X2[St].image[$2].image;Xe?We&&g.texSubImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+$2,St+1,0,0,Ne.width,Ne.height,Se,ie,Ne.data):g.texImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+$2,St+1,je,Ne.width,Ne.height,0,Se,ie,Ne.data)}}else{Xe?We&&g.texSubImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+$2,0,0,0,Se,ie,ae[$2]):g.texImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+$2,0,je,Se,ie,ae[$2]);for(let St=0;St<X2.length;St++){const Ot=X2[St];Xe?We&&g.texSubImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+$2,St+1,0,0,Se,ie,Ot.image[$2]):g.texImage2D(D.TEXTURE_CUBE_MAP_POSITIVE_X+$2,St+1,je,Se,ie,Ot.image[$2])}}}r2(w2)&&o2(D.TEXTURE_CUBE_MAP),Mt.__version=Ct.version,w2.onUpdate&&w2.onUpdate(w2)}F2.__version=w2.version}function rt(F2,w2,st,dt,Ct,Mt){const ke=E.convert(st.format,st.colorSpace),zt=E.convert(st.type),Vt=v2(st.internalFormat,ke,zt,st.colorSpace);if(!w.get(w2).__hasExternalTextures){const Gt=Math.max(1,w2.width>>Mt),ae=Math.max(1,w2.height>>Mt);Ct===D.TEXTURE_3D||Ct===D.TEXTURE_2D_ARRAY?g.texImage3D(Ct,Mt,Vt,Gt,ae,w2.depth,0,ke,zt,null):g.texImage2D(Ct,Mt,Vt,Gt,ae,0,ke,zt,null)}g.bindFramebuffer(D.FRAMEBUFFER,F2),ze(w2)?O.framebufferTexture2DMultisampleEXT(D.FRAMEBUFFER,dt,Ct,w.get(st).__webglTexture,0,pe(w2)):(Ct===D.TEXTURE_2D||Ct>=D.TEXTURE_CUBE_MAP_POSITIVE_X&&Ct<=D.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&D.framebufferTexture2D(D.FRAMEBUFFER,dt,Ct,w.get(st).__webglTexture,Mt),g.bindFramebuffer(D.FRAMEBUFFER,null)}function Bt(F2,w2,st){if(D.bindRenderbuffer(D.RENDERBUFFER,F2),w2.depthBuffer&&!w2.stencilBuffer){let dt=D.DEPTH_COMPONENT24;if(st||ze(w2)){const Ct=w2.depthTexture;Ct&&Ct.isDepthTexture&&(Ct.type===kr?dt=D.DEPTH_COMPONENT32F:Ct.type===_u&&(dt=D.DEPTH_COMPONENT24));const Mt=pe(w2);ze(w2)?O.renderbufferStorageMultisampleEXT(D.RENDERBUFFER,Mt,dt,w2.width,w2.height):D.renderbufferStorageMultisample(D.RENDERBUFFER,Mt,dt,w2.width,w2.height)}else D.renderbufferStorage(D.RENDERBUFFER,dt,w2.width,w2.height);D.framebufferRenderbuffer(D.FRAMEBUFFER,D.DEPTH_ATTACHMENT,D.RENDERBUFFER,F2)}else if(w2.depthBuffer&&w2.stencilBuffer){const dt=pe(w2);st&&ze(w2)===!1?D.renderbufferStorageMultisample(D.RENDERBUFFER,dt,D.DEPTH24_STENCIL8,w2.width,w2.height):ze(w2)?O.renderbufferStorageMultisampleEXT(D.RENDERBUFFER,dt,D.DEPTH24_STENCIL8,w2.width,w2.height):D.renderbufferStorage(D.RENDERBUFFER,D.DEPTH_STENCIL,w2.width,w2.height),D.framebufferRenderbuffer(D.FRAMEBUFFER,D.DEPTH_STENCIL_ATTACHMENT,D.RENDERBUFFER,F2)}else{const dt=w2.textures;for(let Ct=0;Ct<dt.length;Ct++){const Mt=dt[Ct],ke=E.convert(Mt.format,Mt.colorSpace),zt=E.convert(Mt.type),Vt=v2(Mt.internalFormat,ke,zt,Mt.colorSpace),De=pe(w2);st&&ze(w2)===!1?D.renderbufferStorageMultisample(D.RENDERBUFFER,De,Vt,w2.width,w2.height):ze(w2)?O.renderbufferStorageMultisampleEXT(D.RENDERBUFFER,De,Vt,w2.width,w2.height):D.renderbufferStorage(D.RENDERBUFFER,Vt,w2.width,w2.height)}}D.bindRenderbuffer(D.RENDERBUFFER,null)}function ee(F2,w2){if(w2&&w2.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(g.bindFramebuffer(D.FRAMEBUFFER,F2),!(w2.depthTexture&&w2.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!w.get(w2.depthTexture).__webglTexture||w2.depthTexture.image.width!==w2.width||w2.depthTexture.image.height!==w2.height)&&(w2.depthTexture.image.width=w2.width,w2.depthTexture.image.height=w2.height,w2.depthTexture.needsUpdate=!0),U2(w2.depthTexture,0);const dt=w.get(w2.depthTexture).__webglTexture,Ct=pe(w2);if(w2.depthTexture.format===ou)ze(w2)?O.framebufferTexture2DMultisampleEXT(D.FRAMEBUFFER,D.DEPTH_ATTACHMENT,D.TEXTURE_2D,dt,0,Ct):D.framebufferTexture2D(D.FRAMEBUFFER,D.DEPTH_ATTACHMENT,D.TEXTURE_2D,dt,0);else if(w2.depthTexture.format===Vf)ze(w2)?O.framebufferTexture2DMultisampleEXT(D.FRAMEBUFFER,D.DEPTH_STENCIL_ATTACHMENT,D.TEXTURE_2D,dt,0,Ct):D.framebufferTexture2D(D.FRAMEBUFFER,D.DEPTH_STENCIL_ATTACHMENT,D.TEXTURE_2D,dt,0);else throw new Error("Unknown depthTexture format")}function H2(F2){const w2=w.get(F2),st=F2.isWebGLCubeRenderTarget===!0;if(F2.depthTexture&&!w2.__autoAllocateDepthBuffer){if(st)throw new Error("target.depthTexture not supported in Cube render targets");ee(w2.__webglFramebuffer,F2)}else if(st){w2.__webglDepthbuffer=[];for(let dt=0;dt<6;dt++)g.bindFramebuffer(D.FRAMEBUFFER,w2.__webglFramebuffer[dt]),w2.__webglDepthbuffer[dt]=D.createRenderbuffer(),Bt(w2.__webglDepthbuffer[dt],F2,!1)}else g.bindFramebuffer(D.FRAMEBUFFER,w2.__webglFramebuffer),w2.__webglDepthbuffer=D.createRenderbuffer(),Bt(w2.__webglDepthbuffer,F2,!1);g.bindFramebuffer(D.FRAMEBUFFER,null)}function Dt(F2,w2,st){const dt=w.get(F2);w2!==void 0&&rt(dt.__webglFramebuffer,F2,F2.texture,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,0),st!==void 0&&H2(F2)}function ue(F2){const w2=F2.texture,st=w.get(F2),dt=w.get(w2);F2.addEventListener("dispose",j2);const Ct=F2.textures,Mt=F2.isWebGLCubeRenderTarget===!0,ke=Ct.length>1;if(ke||(dt.__webglTexture===void 0&&(dt.__webglTexture=D.createTexture()),dt.__version=w2.version,P.memory.textures++),Mt){st.__webglFramebuffer=[];for(let zt=0;zt<6;zt++)if(w2.mipmaps&&w2.mipmaps.length>0){st.__webglFramebuffer[zt]=[];for(let Vt=0;Vt<w2.mipmaps.length;Vt++)st.__webglFramebuffer[zt][Vt]=D.createFramebuffer()}else st.__webglFramebuffer[zt]=D.createFramebuffer()}else{if(w2.mipmaps&&w2.mipmaps.length>0){st.__webglFramebuffer=[];for(let zt=0;zt<w2.mipmaps.length;zt++)st.__webglFramebuffer[zt]=D.createFramebuffer()}else st.__webglFramebuffer=D.createFramebuffer();if(ke)for(let zt=0,Vt=Ct.length;zt<Vt;zt++){const De=w.get(Ct[zt]);De.__webglTexture===void 0&&(De.__webglTexture=D.createTexture(),P.memory.textures++)}if(F2.samples>0&&ze(F2)===!1){st.__webglMultisampledFramebuffer=D.createFramebuffer(),st.__webglColorRenderbuffer=[],g.bindFramebuffer(D.FRAMEBUFFER,st.__webglMultisampledFramebuffer);for(let zt=0;zt<Ct.length;zt++){const Vt=Ct[zt];st.__webglColorRenderbuffer[zt]=D.createRenderbuffer(),D.bindRenderbuffer(D.RENDERBUFFER,st.__webglColorRenderbuffer[zt]);const De=E.convert(Vt.format,Vt.colorSpace),Gt=E.convert(Vt.type),ae=v2(Vt.internalFormat,De,Gt,Vt.colorSpace,F2.isXRRenderTarget===!0),sn=pe(F2);D.renderbufferStorageMultisample(D.RENDERBUFFER,sn,ae,F2.width,F2.height),D.framebufferRenderbuffer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+zt,D.RENDERBUFFER,st.__webglColorRenderbuffer[zt])}D.bindRenderbuffer(D.RENDERBUFFER,null),F2.depthBuffer&&(st.__webglDepthRenderbuffer=D.createRenderbuffer(),Bt(st.__webglDepthRenderbuffer,F2,!0)),g.bindFramebuffer(D.FRAMEBUFFER,null)}}if(Mt){g.bindTexture(D.TEXTURE_CUBE_MAP,dt.__webglTexture),yt(D.TEXTURE_CUBE_MAP,w2);for(let zt=0;zt<6;zt++)if(w2.mipmaps&&w2.mipmaps.length>0)for(let Vt=0;Vt<w2.mipmaps.length;Vt++)rt(st.__webglFramebuffer[zt][Vt],F2,w2,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+zt,Vt);else rt(st.__webglFramebuffer[zt],F2,w2,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0);r2(w2)&&o2(D.TEXTURE_CUBE_MAP),g.unbindTexture()}else if(ke){for(let zt=0,Vt=Ct.length;zt<Vt;zt++){const De=Ct[zt],Gt=w.get(De);g.bindTexture(D.TEXTURE_2D,Gt.__webglTexture),yt(D.TEXTURE_2D,De),rt(st.__webglFramebuffer,F2,De,D.COLOR_ATTACHMENT0+zt,D.TEXTURE_2D,0),r2(De)&&o2(D.TEXTURE_2D)}g.unbindTexture()}else{let zt=D.TEXTURE_2D;if((F2.isWebGL3DRenderTarget||F2.isWebGLArrayRenderTarget)&&(zt=F2.isWebGL3DRenderTarget?D.TEXTURE_3D:D.TEXTURE_2D_ARRAY),g.bindTexture(zt,dt.__webglTexture),yt(zt,w2),w2.mipmaps&&w2.mipmaps.length>0)for(let Vt=0;Vt<w2.mipmaps.length;Vt++)rt(st.__webglFramebuffer[Vt],F2,w2,D.COLOR_ATTACHMENT0,zt,Vt);else rt(st.__webglFramebuffer,F2,w2,D.COLOR_ATTACHMENT0,zt,0);r2(w2)&&o2(zt),g.unbindTexture()}F2.depthBuffer&&H2(F2)}function Y2(F2){const w2=F2.textures;for(let st=0,dt=w2.length;st<dt;st++){const Ct=w2[st];if(r2(Ct)){const Mt=F2.isWebGLCubeRenderTarget?D.TEXTURE_CUBE_MAP:D.TEXTURE_2D,ke=w.get(Ct).__webglTexture;g.bindTexture(Mt,ke),o2(Mt),g.unbindTexture()}}}const Oe=[],ne=[];function on(F2){if(F2.samples>0){if(ze(F2)===!1){const w2=F2.textures,st=F2.width,dt=F2.height;let Ct=D.COLOR_BUFFER_BIT;const Mt=F2.stencilBuffer?D.DEPTH_STENCIL_ATTACHMENT:D.DEPTH_ATTACHMENT,ke=w.get(F2),zt=w2.length>1;if(zt)for(let Vt=0;Vt<w2.length;Vt++)g.bindFramebuffer(D.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),D.framebufferRenderbuffer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Vt,D.RENDERBUFFER,null),g.bindFramebuffer(D.FRAMEBUFFER,ke.__webglFramebuffer),D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0+Vt,D.TEXTURE_2D,null,0);g.bindFramebuffer(D.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Vt=0;Vt<w2.length;Vt++){if(F2.resolveDepthBuffer&&(F2.depthBuffer&&(Ct|=D.DEPTH_BUFFER_BIT),F2.stencilBuffer&&F2.resolveStencilBuffer&&(Ct|=D.STENCIL_BUFFER_BIT)),zt){D.framebufferRenderbuffer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.RENDERBUFFER,ke.__webglColorRenderbuffer[Vt]);const De=w.get(w2[Vt]).__webglTexture;D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,De,0)}D.blitFramebuffer(0,0,st,dt,0,0,st,dt,Ct,D.NEAREST),G===!0&&(Oe.length=0,ne.length=0,Oe.push(D.COLOR_ATTACHMENT0+Vt),F2.depthBuffer&&F2.resolveDepthBuffer===!1&&(Oe.push(Mt),ne.push(Mt),D.invalidateFramebuffer(D.DRAW_FRAMEBUFFER,ne)),D.invalidateFramebuffer(D.READ_FRAMEBUFFER,Oe))}if(g.bindFramebuffer(D.READ_FRAMEBUFFER,null),g.bindFramebuffer(D.DRAW_FRAMEBUFFER,null),zt)for(let Vt=0;Vt<w2.length;Vt++){g.bindFramebuffer(D.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),D.framebufferRenderbuffer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Vt,D.RENDERBUFFER,ke.__webglColorRenderbuffer[Vt]);const De=w.get(w2[Vt]).__webglTexture;g.bindFramebuffer(D.FRAMEBUFFER,ke.__webglFramebuffer),D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0+Vt,D.TEXTURE_2D,De,0)}g.bindFramebuffer(D.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(F2.depthBuffer&&F2.resolveDepthBuffer===!1&&G){const w2=F2.stencilBuffer?D.DEPTH_STENCIL_ATTACHMENT:D.DEPTH_ATTACHMENT;D.invalidateFramebuffer(D.DRAW_FRAMEBUFFER,[w2])}}}function pe(F2){return Math.min(x.maxSamples,F2.samples)}function ze(F2){const w2=w.get(F2);return F2.samples>0&&a.has("WEBGL_multisampled_render_to_texture")===!0&&w2.__useRenderToTexture!==!1}function be(F2){const w2=P.render.frame;X.get(F2)!==w2&&(X.set(F2,w2),F2.update())}function en(F2,w2){const st=F2.colorSpace,dt=F2.format,Ct=F2.type;return F2.isCompressedTexture===!0||F2.isVideoTexture===!0||st!==Xi&&st!==a1&&(Dn.getTransfer(st)===Kn?(dt!==mo||Ct!==k1)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",st)),w2}function Gn(F2){return typeof HTMLImageElement<"u"&&F2 instanceof HTMLImageElement?(h.width=F2.naturalWidth||F2.width,h.height=F2.naturalHeight||F2.height):typeof VideoFrame<"u"&&F2 instanceof VideoFrame?(h.width=F2.displayWidth,h.height=F2.displayHeight):(h.width=F2.width,h.height=F2.height),h}this.allocateTextureUnit=W2,this.resetTextureUnits=g2,this.setTexture2D=U2,this.setTexture2DArray=q2,this.setTexture3D=ft,this.setTextureCube=ut,this.rebindTextures=Dt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=Y2,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=H2,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=ze}function oh2(D,a){function g(w,x=a1){let E;const P=Dn.getTransfer(x);if(w===k1)return D.UNSIGNED_BYTE;if(w===Lz)return D.UNSIGNED_SHORT_4_4_4_4;if(w===Fz)return D.UNSIGNED_SHORT_5_5_5_1;if(w===Bc2)return D.UNSIGNED_INT_5_9_9_9_REV;if(w===vc2)return D.BYTE;if(w===wc2)return D.SHORT;if(w===Iz)return D.UNSIGNED_SHORT;if(w===Pz)return D.INT;if(w===_u)return D.UNSIGNED_INT;if(w===kr)return D.FLOAT;if(w===h1)return D.HALF_FLOAT;if(w===Sc2)return D.ALPHA;if(w===xc2)return D.RGB;if(w===mo)return D.RGBA;if(w===Cc2)return D.LUMINANCE;if(w===Mc2)return D.LUMINANCE_ALPHA;if(w===ou)return D.DEPTH_COMPONENT;if(w===Vf)return D.DEPTH_STENCIL;if(w===Oz)return D.RED;if(w===jz)return D.RED_INTEGER;if(w===Tc2)return D.RG;if(w===Nz)return D.RG_INTEGER;if(w===Uz)return D.RGBA_INTEGER;if(w===Ca||w===Ma||w===Ta||w===Ea)if(P===Kn)if(E=a.get("WEBGL_compressed_texture_s3tc_srgb"),E!==null){if(w===Ca)return E.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(w===Ma)return E.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(w===Ta)return E.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(w===Ea)return E.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(E=a.get("WEBGL_compressed_texture_s3tc"),E!==null){if(w===Ca)return E.COMPRESSED_RGB_S3TC_DXT1_EXT;if(w===Ma)return E.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(w===Ta)return E.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(w===Ea)return E.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(w===EH||w===RH||w===bH||w===DH)if(E=a.get("WEBGL_compressed_texture_pvrtc"),E!==null){if(w===EH)return E.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(w===RH)return E.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(w===bH)return E.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(w===DH)return E.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(w===IH||w===PH||w===LH)if(E=a.get("WEBGL_compressed_texture_etc"),E!==null){if(w===IH||w===PH)return P===Kn?E.COMPRESSED_SRGB8_ETC2:E.COMPRESSED_RGB8_ETC2;if(w===LH)return P===Kn?E.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:E.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(w===FH||w===OH||w===jH||w===NH||w===UH||w===GH||w===WH||w===HH||w===VH||w===zH||w===QH||w===YH||w===XH||w===ZH)if(E=a.get("WEBGL_compressed_texture_astc"),E!==null){if(w===FH)return P===Kn?E.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:E.COMPRESSED_RGBA_ASTC_4x4_KHR;if(w===OH)return P===Kn?E.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:E.COMPRESSED_RGBA_ASTC_5x4_KHR;if(w===jH)return P===Kn?E.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:E.COMPRESSED_RGBA_ASTC_5x5_KHR;if(w===NH)return P===Kn?E.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:E.COMPRESSED_RGBA_ASTC_6x5_KHR;if(w===UH)return P===Kn?E.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:E.COMPRESSED_RGBA_ASTC_6x6_KHR;if(w===GH)return P===Kn?E.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:E.COMPRESSED_RGBA_ASTC_8x5_KHR;if(w===WH)return P===Kn?E.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:E.COMPRESSED_RGBA_ASTC_8x6_KHR;if(w===HH)return P===Kn?E.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:E.COMPRESSED_RGBA_ASTC_8x8_KHR;if(w===VH)return P===Kn?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:E.COMPRESSED_RGBA_ASTC_10x5_KHR;if(w===zH)return P===Kn?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:E.COMPRESSED_RGBA_ASTC_10x6_KHR;if(w===QH)return P===Kn?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:E.COMPRESSED_RGBA_ASTC_10x8_KHR;if(w===YH)return P===Kn?E.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:E.COMPRESSED_RGBA_ASTC_10x10_KHR;if(w===XH)return P===Kn?E.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:E.COMPRESSED_RGBA_ASTC_12x10_KHR;if(w===ZH)return P===Kn?E.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:E.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(w===Ra||w===qH||w===JH)if(E=a.get("EXT_texture_compression_bptc"),E!==null){if(w===Ra)return P===Kn?E.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:E.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(w===qH)return E.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(w===JH)return E.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(w===Ec2||w===KH||w===$H||w===tV)if(E=a.get("EXT_texture_compression_rgtc"),E!==null){if(w===Ra)return E.COMPRESSED_RED_RGTC1_EXT;if(w===KH)return E.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(w===$H)return E.COMPRESSED_RED_GREEN_RGTC2_EXT;if(w===tV)return E.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return w===$f?D.UNSIGNED_INT_24_8:D[w]!==void 0?D[w]:null}return{convert:g}}class sh2 extends S0{constructor(a=[]){super(),this.isArrayCamera=!0,this.cameras=a}}class Cs extends Un{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lh2={type:"move"};class n6{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Cs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Cs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E2,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E2),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Cs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E2,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E2),this._grip}dispatchEvent(a){return this._targetRay!==null&&this._targetRay.dispatchEvent(a),this._grip!==null&&this._grip.dispatchEvent(a),this._hand!==null&&this._hand.dispatchEvent(a),this}connect(a){if(a&&a.hand){const g=this._hand;if(g)for(const w of a.hand.values())this._getHandJoint(g,w)}return this.dispatchEvent({type:"connected",data:a}),this}disconnect(a){return this.dispatchEvent({type:"disconnected",data:a}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(a,g,w){let x=null,E=null,P=null;const O=this._targetRay,G=this._grip,h=this._hand;if(a&&g.session.visibilityState!=="visible-blurred"){if(h&&a.hand){P=!0;for(const p2 of a.hand.values()){const r2=g.getJointPose(p2,w),o2=this._getHandJoint(h,p2);r2!==null&&(o2.matrix.fromArray(r2.transform.matrix),o2.matrix.decompose(o2.position,o2.rotation,o2.scale),o2.matrixWorldNeedsUpdate=!0,o2.jointRadius=r2.radius),o2.visible=r2!==null}const X=h.joints["index-finger-tip"],Z=h.joints["thumb-tip"],K=X.position.distanceTo(Z.position),e2=.02,l2=.005;h.inputState.pinching&&K>e2+l2?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:a.handedness,target:this})):!h.inputState.pinching&&K<=e2-l2&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:a.handedness,target:this}))}else G!==null&&a.gripSpace&&(E=g.getPose(a.gripSpace,w),E!==null&&(G.matrix.fromArray(E.transform.matrix),G.matrix.decompose(G.position,G.rotation,G.scale),G.matrixWorldNeedsUpdate=!0,E.linearVelocity?(G.hasLinearVelocity=!0,G.linearVelocity.copy(E.linearVelocity)):G.hasLinearVelocity=!1,E.angularVelocity?(G.hasAngularVelocity=!0,G.angularVelocity.copy(E.angularVelocity)):G.hasAngularVelocity=!1));O!==null&&(x=g.getPose(a.targetRaySpace,w),x===null&&E!==null&&(x=E),x!==null&&(O.matrix.fromArray(x.transform.matrix),O.matrix.decompose(O.position,O.rotation,O.scale),O.matrixWorldNeedsUpdate=!0,x.linearVelocity?(O.hasLinearVelocity=!0,O.linearVelocity.copy(x.linearVelocity)):O.hasLinearVelocity=!1,x.angularVelocity?(O.hasAngularVelocity=!0,O.angularVelocity.copy(x.angularVelocity)):O.hasAngularVelocity=!1,this.dispatchEvent(lh2)))}return O!==null&&(O.visible=x!==null),G!==null&&(G.visible=E!==null),h!==null&&(h.visible=P!==null),this}_getHandJoint(a,g){if(a.joints[g.jointName]===void 0){const w=new Cs;w.matrixAutoUpdate=!1,w.visible=!1,a.joints[g.jointName]=w,a.add(w)}return a.joints[g.jointName]}}const uh2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fh2=`
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

}`;class ph2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(a,g,w){if(this.texture===null){const x=new Ti,E=a.properties.get(x);E.__webglTexture=g.texture,(g.depthNear!=w.depthNear||g.depthFar!=w.depthFar)&&(this.depthNear=g.depthNear,this.depthFar=g.depthFar),this.texture=x}}render(a,g){if(this.texture!==null){if(this.mesh===null){const w=g.cameras[0].viewport,x=new v1({vertexShader:uh2,fragmentShader:fh2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:w.z},depthHeight:{value:w.w}}});this.mesh=new e0(new $4(20,20),x)}a.render(this.mesh,g)}}reset(){this.texture=null,this.mesh=null}}class ch2 extends Ts{constructor(a,g){super();const w=this;let x=null,E=1,P=null,O="local-floor",G=1,h=null,X=null,Z=null,K=null,e2=null,l2=null;const p2=new ph2,r2=g.getContextAttributes();let o2=null,v2=null;const m2=[],k2=[],j2=new Lt;let b2=null;const D2=new S0;D2.layers.enable(1),D2.viewport=new En;const N2=new S0;N2.layers.enable(2),N2.viewport=new En;const B2=[D2,N2],g2=new sh2;g2.layers.enable(1),g2.layers.enable(2);let W2=null,nt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(rt){let Bt=m2[rt];return Bt===void 0&&(Bt=new n6,m2[rt]=Bt),Bt.getTargetRaySpace()},this.getControllerGrip=function(rt){let Bt=m2[rt];return Bt===void 0&&(Bt=new n6,m2[rt]=Bt),Bt.getGripSpace()},this.getHand=function(rt){let Bt=m2[rt];return Bt===void 0&&(Bt=new n6,m2[rt]=Bt),Bt.getHandSpace()};function U2(rt){const Bt=k2.indexOf(rt.inputSource);if(Bt===-1)return;const ee=m2[Bt];ee!==void 0&&(ee.update(rt.inputSource,rt.frame,h||P),ee.dispatchEvent({type:rt.type,data:rt.inputSource}))}function q2(){x.removeEventListener("select",U2),x.removeEventListener("selectstart",U2),x.removeEventListener("selectend",U2),x.removeEventListener("squeeze",U2),x.removeEventListener("squeezestart",U2),x.removeEventListener("squeezeend",U2),x.removeEventListener("end",q2),x.removeEventListener("inputsourceschange",ft);for(let rt=0;rt<m2.length;rt++){const Bt=k2[rt];Bt!==null&&(k2[rt]=null,m2[rt].disconnect(Bt))}W2=null,nt=null,p2.reset(),a.setRenderTarget(o2),e2=null,K=null,Z=null,x=null,v2=null,Be.stop(),w.isPresenting=!1,a.setPixelRatio(b2),a.setSize(j2.width,j2.height,!1),w.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(rt){E=rt,w.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(rt){O=rt,w.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||P},this.setReferenceSpace=function(rt){h=rt},this.getBaseLayer=function(){return K!==null?K:e2},this.getBinding=function(){return Z},this.getFrame=function(){return l2},this.getSession=function(){return x},this.setSession=async function(rt){if(x=rt,x!==null){if(o2=a.getRenderTarget(),x.addEventListener("select",U2),x.addEventListener("selectstart",U2),x.addEventListener("selectend",U2),x.addEventListener("squeeze",U2),x.addEventListener("squeezestart",U2),x.addEventListener("squeezeend",U2),x.addEventListener("end",q2),x.addEventListener("inputsourceschange",ft),r2.xrCompatible!==!0&&await g.makeXRCompatible(),b2=a.getPixelRatio(),a.getSize(j2),x.renderState.layers===void 0){const Bt={antialias:r2.antialias,alpha:!0,depth:r2.depth,stencil:r2.stencil,framebufferScaleFactor:E};e2=new XRWebGLLayer(x,g,Bt),x.updateRenderState({baseLayer:e2}),a.setPixelRatio(1),a.setSize(e2.framebufferWidth,e2.framebufferHeight,!1),v2=new X1(e2.framebufferWidth,e2.framebufferHeight,{format:mo,type:k1,colorSpace:a.outputColorSpace,stencilBuffer:r2.stencil})}else{let Bt=null,ee=null,H2=null;r2.depth&&(H2=r2.stencil?g.DEPTH24_STENCIL8:g.DEPTH_COMPONENT24,Bt=r2.stencil?Vf:ou,ee=r2.stencil?$f:_u);const Dt={colorFormat:g.RGBA8,depthFormat:H2,scaleFactor:E};Z=new XRWebGLBinding(x,g),K=Z.createProjectionLayer(Dt),x.updateRenderState({layers:[K]}),a.setPixelRatio(1),a.setSize(K.textureWidth,K.textureHeight,!1),v2=new X1(K.textureWidth,K.textureHeight,{format:mo,type:k1,depthTexture:new tQ(K.textureWidth,K.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Bt),stencilBuffer:r2.stencil,colorSpace:a.outputColorSpace,samples:r2.antialias?4:0,resolveDepthBuffer:K.ignoreDepthValues===!1})}v2.isXRRenderTarget=!0,this.setFoveation(G),h=null,P=await x.requestReferenceSpace(O),Be.setContext(x),Be.start(),w.isPresenting=!0,w.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(x!==null)return x.environmentBlendMode};function ft(rt){for(let Bt=0;Bt<rt.removed.length;Bt++){const ee=rt.removed[Bt],H2=k2.indexOf(ee);H2>=0&&(k2[H2]=null,m2[H2].disconnect(ee))}for(let Bt=0;Bt<rt.added.length;Bt++){const ee=rt.added[Bt];let H2=k2.indexOf(ee);if(H2===-1){for(let ue=0;ue<m2.length;ue++)if(ue>=k2.length){k2.push(ee),H2=ue;break}else if(k2[ue]===null){k2[ue]=ee,H2=ue;break}if(H2===-1)break}const Dt=m2[H2];Dt&&Dt.connect(ee)}}const ut=new E2,Et=new E2;function it(rt,Bt,ee){ut.setFromMatrixPosition(Bt.matrixWorld),Et.setFromMatrixPosition(ee.matrixWorld);const H2=ut.distanceTo(Et),Dt=Bt.projectionMatrix.elements,ue=ee.projectionMatrix.elements,Y2=Dt[14]/(Dt[10]-1),Oe=Dt[14]/(Dt[10]+1),ne=(Dt[9]+1)/Dt[5],on=(Dt[9]-1)/Dt[5],pe=(Dt[8]-1)/Dt[0],ze=(ue[8]+1)/ue[0],be=Y2*pe,en=Y2*ze,Gn=H2/(-pe+ze),F2=Gn*-pe;Bt.matrixWorld.decompose(rt.position,rt.quaternion,rt.scale),rt.translateX(F2),rt.translateZ(Gn),rt.matrixWorld.compose(rt.position,rt.quaternion,rt.scale),rt.matrixWorldInverse.copy(rt.matrixWorld).invert();const w2=Y2+Gn,st=Oe+Gn,dt=be-F2,Ct=en+(H2-F2),Mt=ne*Oe/st*w2,ke=on*Oe/st*w2;rt.projectionMatrix.makePerspective(dt,Ct,Mt,ke,w2,st),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert()}function At(rt,Bt){Bt===null?rt.matrixWorld.copy(rt.matrix):rt.matrixWorld.multiplyMatrices(Bt.matrixWorld,rt.matrix),rt.matrixWorldInverse.copy(rt.matrixWorld).invert()}this.updateCamera=function(rt){if(x===null)return;p2.texture!==null&&(rt.near=p2.depthNear,rt.far=p2.depthFar),g2.near=N2.near=D2.near=rt.near,g2.far=N2.far=D2.far=rt.far,(W2!==g2.near||nt!==g2.far)&&(x.updateRenderState({depthNear:g2.near,depthFar:g2.far}),W2=g2.near,nt=g2.far,D2.near=W2,D2.far=nt,N2.near=W2,N2.far=nt,D2.updateProjectionMatrix(),N2.updateProjectionMatrix(),rt.updateProjectionMatrix());const Bt=rt.parent,ee=g2.cameras;At(g2,Bt);for(let H2=0;H2<ee.length;H2++)At(ee[H2],Bt);ee.length===2?it(g2,D2,N2):g2.projectionMatrix.copy(D2.projectionMatrix),yt(rt,g2,Bt)};function yt(rt,Bt,ee){ee===null?rt.matrix.copy(Bt.matrixWorld):(rt.matrix.copy(ee.matrixWorld),rt.matrix.invert(),rt.matrix.multiply(Bt.matrixWorld)),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.updateMatrixWorld(!0),rt.projectionMatrix.copy(Bt.projectionMatrix),rt.projectionMatrixInverse.copy(Bt.projectionMatrixInverse),rt.isPerspectiveCamera&&(rt.fov=hu*2*Math.atan(1/rt.projectionMatrix.elements[5]),rt.zoom=1)}this.getCamera=function(){return g2},this.getFoveation=function(){if(!(K===null&&e2===null))return G},this.setFoveation=function(rt){G=rt,K!==null&&(K.fixedFoveation=rt),e2!==null&&e2.fixedFoveation!==void 0&&(e2.fixedFoveation=rt)},this.hasDepthSensing=function(){return p2.texture!==null};let re=null;function ye(rt,Bt){if(X=Bt.getViewerPose(h||P),l2=Bt,X!==null){const ee=X.views;e2!==null&&(a.setRenderTargetFramebuffer(v2,e2.framebuffer),a.setRenderTarget(v2));let H2=!1;ee.length!==g2.cameras.length&&(g2.cameras.length=0,H2=!0);for(let ue=0;ue<ee.length;ue++){const Y2=ee[ue];let Oe=null;if(e2!==null)Oe=e2.getViewport(Y2);else{const on=Z.getViewSubImage(K,Y2);Oe=on.viewport,ue===0&&(a.setRenderTargetTextures(v2,on.colorTexture,K.ignoreDepthValues?void 0:on.depthStencilTexture),a.setRenderTarget(v2))}let ne=B2[ue];ne===void 0&&(ne=new S0,ne.layers.enable(ue),ne.viewport=new En,B2[ue]=ne),ne.matrix.fromArray(Y2.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Y2.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Oe.x,Oe.y,Oe.width,Oe.height),ue===0&&(g2.matrix.copy(ne.matrix),g2.matrix.decompose(g2.position,g2.quaternion,g2.scale)),H2===!0&&g2.cameras.push(ne)}const Dt=x.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const ue=Z.getDepthInformation(ee[0]);ue&&ue.isValid&&ue.texture&&p2.init(a,ue,x.renderState)}}for(let ee=0;ee<m2.length;ee++){const H2=k2[ee],Dt=m2[ee];H2!==null&&Dt!==void 0&&Dt.update(H2,Bt,h||P)}p2.render(a,g2),re&&re(rt,Bt),Bt.detectedPlanes&&w.dispatchEvent({type:"planesdetected",data:Bt}),l2=null}const Be=new $z;Be.setAnimationLoop(ye),this.setAnimationLoop=function(rt){re=rt},this.dispose=function(){}}}const H1=new Ai,_h2=new te;function ah2(D,a){function g(r2,o2){r2.matrixAutoUpdate===!0&&r2.updateMatrix(),o2.value.copy(r2.matrix)}function w(r2,o2){o2.color.getRGB(r2.fogColor.value,Jz(D)),o2.isFog?(r2.fogNear.value=o2.near,r2.fogFar.value=o2.far):o2.isFogExp2&&(r2.fogDensity.value=o2.density)}function x(r2,o2,v2,m2,k2){o2.isMeshBasicMaterial||o2.isMeshLambertMaterial?E(r2,o2):o2.isMeshToonMaterial?(E(r2,o2),Z(r2,o2)):o2.isMeshPhongMaterial?(E(r2,o2),X(r2,o2)):o2.isMeshStandardMaterial?(E(r2,o2),K(r2,o2),o2.isMeshPhysicalMaterial&&e2(r2,o2,k2)):o2.isMeshMatcapMaterial?(E(r2,o2),l2(r2,o2)):o2.isMeshDepthMaterial?E(r2,o2):o2.isMeshDistanceMaterial?(E(r2,o2),p2(r2,o2)):o2.isMeshNormalMaterial?E(r2,o2):o2.isLineBasicMaterial?(P(r2,o2),o2.isLineDashedMaterial&&O(r2,o2)):o2.isPointsMaterial?G(r2,o2,v2,m2):o2.isSpriteMaterial?h(r2,o2):o2.isShadowMaterial?(r2.color.value.copy(o2.color),r2.opacity.value=o2.opacity):o2.isShaderMaterial&&(o2.uniformsNeedUpdate=!1)}function E(r2,o2){r2.opacity.value=o2.opacity,o2.color&&r2.diffuse.value.copy(o2.color),o2.emissive&&r2.emissive.value.copy(o2.emissive).multiplyScalar(o2.emissiveIntensity),o2.map&&(r2.map.value=o2.map,g(o2.map,r2.mapTransform)),o2.alphaMap&&(r2.alphaMap.value=o2.alphaMap,g(o2.alphaMap,r2.alphaMapTransform)),o2.bumpMap&&(r2.bumpMap.value=o2.bumpMap,g(o2.bumpMap,r2.bumpMapTransform),r2.bumpScale.value=o2.bumpScale,o2.side===nr&&(r2.bumpScale.value*=-1)),o2.normalMap&&(r2.normalMap.value=o2.normalMap,g(o2.normalMap,r2.normalMapTransform),r2.normalScale.value.copy(o2.normalScale),o2.side===nr&&r2.normalScale.value.negate()),o2.displacementMap&&(r2.displacementMap.value=o2.displacementMap,g(o2.displacementMap,r2.displacementMapTransform),r2.displacementScale.value=o2.displacementScale,r2.displacementBias.value=o2.displacementBias),o2.emissiveMap&&(r2.emissiveMap.value=o2.emissiveMap,g(o2.emissiveMap,r2.emissiveMapTransform)),o2.specularMap&&(r2.specularMap.value=o2.specularMap,g(o2.specularMap,r2.specularMapTransform)),o2.alphaTest>0&&(r2.alphaTest.value=o2.alphaTest);const v2=a.get(o2),m2=v2.envMap,k2=v2.envMapRotation;if(m2&&(r2.envMap.value=m2,H1.copy(k2),H1.x*=-1,H1.y*=-1,H1.z*=-1,m2.isCubeTexture&&m2.isRenderTargetTexture===!1&&(H1.y*=-1,H1.z*=-1),r2.envMapRotation.value.setFromMatrix4(_h2.makeRotationFromEuler(H1)),r2.flipEnvMap.value=m2.isCubeTexture&&m2.isRenderTargetTexture===!1?-1:1,r2.reflectivity.value=o2.reflectivity,r2.ior.value=o2.ior,r2.refractionRatio.value=o2.refractionRatio),o2.lightMap){r2.lightMap.value=o2.lightMap;const j2=D._useLegacyLights===!0?Math.PI:1;r2.lightMapIntensity.value=o2.lightMapIntensity*j2,g(o2.lightMap,r2.lightMapTransform)}o2.aoMap&&(r2.aoMap.value=o2.aoMap,r2.aoMapIntensity.value=o2.aoMapIntensity,g(o2.aoMap,r2.aoMapTransform))}function P(r2,o2){r2.diffuse.value.copy(o2.color),r2.opacity.value=o2.opacity,o2.map&&(r2.map.value=o2.map,g(o2.map,r2.mapTransform))}function O(r2,o2){r2.dashSize.value=o2.dashSize,r2.totalSize.value=o2.dashSize+o2.gapSize,r2.scale.value=o2.scale}function G(r2,o2,v2,m2){r2.diffuse.value.copy(o2.color),r2.opacity.value=o2.opacity,r2.size.value=o2.size*v2,r2.scale.value=m2*.5,o2.map&&(r2.map.value=o2.map,g(o2.map,r2.uvTransform)),o2.alphaMap&&(r2.alphaMap.value=o2.alphaMap,g(o2.alphaMap,r2.alphaMapTransform)),o2.alphaTest>0&&(r2.alphaTest.value=o2.alphaTest)}function h(r2,o2){r2.diffuse.value.copy(o2.color),r2.opacity.value=o2.opacity,r2.rotation.value=o2.rotation,o2.map&&(r2.map.value=o2.map,g(o2.map,r2.mapTransform)),o2.alphaMap&&(r2.alphaMap.value=o2.alphaMap,g(o2.alphaMap,r2.alphaMapTransform)),o2.alphaTest>0&&(r2.alphaTest.value=o2.alphaTest)}function X(r2,o2){r2.specular.value.copy(o2.specular),r2.shininess.value=Math.max(o2.shininess,1e-4)}function Z(r2,o2){o2.gradientMap&&(r2.gradientMap.value=o2.gradientMap)}function K(r2,o2){r2.metalness.value=o2.metalness,o2.metalnessMap&&(r2.metalnessMap.value=o2.metalnessMap,g(o2.metalnessMap,r2.metalnessMapTransform)),r2.roughness.value=o2.roughness,o2.roughnessMap&&(r2.roughnessMap.value=o2.roughnessMap,g(o2.roughnessMap,r2.roughnessMapTransform)),o2.envMap&&(r2.envMapIntensity.value=o2.envMapIntensity)}function e2(r2,o2,v2){r2.ior.value=o2.ior,o2.sheen>0&&(r2.sheenColor.value.copy(o2.sheenColor).multiplyScalar(o2.sheen),r2.sheenRoughness.value=o2.sheenRoughness,o2.sheenColorMap&&(r2.sheenColorMap.value=o2.sheenColorMap,g(o2.sheenColorMap,r2.sheenColorMapTransform)),o2.sheenRoughnessMap&&(r2.sheenRoughnessMap.value=o2.sheenRoughnessMap,g(o2.sheenRoughnessMap,r2.sheenRoughnessMapTransform))),o2.clearcoat>0&&(r2.clearcoat.value=o2.clearcoat,r2.clearcoatRoughness.value=o2.clearcoatRoughness,o2.clearcoatMap&&(r2.clearcoatMap.value=o2.clearcoatMap,g(o2.clearcoatMap,r2.clearcoatMapTransform)),o2.clearcoatRoughnessMap&&(r2.clearcoatRoughnessMap.value=o2.clearcoatRoughnessMap,g(o2.clearcoatRoughnessMap,r2.clearcoatRoughnessMapTransform)),o2.clearcoatNormalMap&&(r2.clearcoatNormalMap.value=o2.clearcoatNormalMap,g(o2.clearcoatNormalMap,r2.clearcoatNormalMapTransform),r2.clearcoatNormalScale.value.copy(o2.clearcoatNormalScale),o2.side===nr&&r2.clearcoatNormalScale.value.negate())),o2.dispersion>0&&(r2.dispersion.value=o2.dispersion),o2.iridescence>0&&(r2.iridescence.value=o2.iridescence,r2.iridescenceIOR.value=o2.iridescenceIOR,r2.iridescenceThicknessMinimum.value=o2.iridescenceThicknessRange[0],r2.iridescenceThicknessMaximum.value=o2.iridescenceThicknessRange[1],o2.iridescenceMap&&(r2.iridescenceMap.value=o2.iridescenceMap,g(o2.iridescenceMap,r2.iridescenceMapTransform)),o2.iridescenceThicknessMap&&(r2.iridescenceThicknessMap.value=o2.iridescenceThicknessMap,g(o2.iridescenceThicknessMap,r2.iridescenceThicknessMapTransform))),o2.transmission>0&&(r2.transmission.value=o2.transmission,r2.transmissionSamplerMap.value=v2.texture,r2.transmissionSamplerSize.value.set(v2.width,v2.height),o2.transmissionMap&&(r2.transmissionMap.value=o2.transmissionMap,g(o2.transmissionMap,r2.transmissionMapTransform)),r2.thickness.value=o2.thickness,o2.thicknessMap&&(r2.thicknessMap.value=o2.thicknessMap,g(o2.thicknessMap,r2.thicknessMapTransform)),r2.attenuationDistance.value=o2.attenuationDistance,r2.attenuationColor.value.copy(o2.attenuationColor)),o2.anisotropy>0&&(r2.anisotropyVector.value.set(o2.anisotropy*Math.cos(o2.anisotropyRotation),o2.anisotropy*Math.sin(o2.anisotropyRotation)),o2.anisotropyMap&&(r2.anisotropyMap.value=o2.anisotropyMap,g(o2.anisotropyMap,r2.anisotropyMapTransform))),r2.specularIntensity.value=o2.specularIntensity,r2.specularColor.value.copy(o2.specularColor),o2.specularColorMap&&(r2.specularColorMap.value=o2.specularColorMap,g(o2.specularColorMap,r2.specularColorMapTransform)),o2.specularIntensityMap&&(r2.specularIntensityMap.value=o2.specularIntensityMap,g(o2.specularIntensityMap,r2.specularIntensityMapTransform))}function l2(r2,o2){o2.matcap&&(r2.matcap.value=o2.matcap)}function p2(r2,o2){const v2=a.get(o2).light;r2.referencePosition.value.setFromMatrixPosition(v2.matrixWorld),r2.nearDistance.value=v2.shadow.camera.near,r2.farDistance.value=v2.shadow.camera.far}return{refreshFogUniforms:w,refreshMaterialUniforms:x}}function hh2(D,a,g,w){let x={},E={},P=[];const O=D.getParameter(D.MAX_UNIFORM_BUFFER_BINDINGS);function G(v2,m2){const k2=m2.program;w.uniformBlockBinding(v2,k2)}function h(v2,m2){let k2=x[v2.id];k2===void 0&&(l2(v2),k2=X(v2),x[v2.id]=k2,v2.addEventListener("dispose",r2));const j2=m2.program;w.updateUBOMapping(v2,j2);const b2=a.render.frame;E[v2.id]!==b2&&(K(v2),E[v2.id]=b2)}function X(v2){const m2=Z();v2.__bindingPointIndex=m2;const k2=D.createBuffer(),j2=v2.__size,b2=v2.usage;return D.bindBuffer(D.UNIFORM_BUFFER,k2),D.bufferData(D.UNIFORM_BUFFER,j2,b2),D.bindBuffer(D.UNIFORM_BUFFER,null),D.bindBufferBase(D.UNIFORM_BUFFER,m2,k2),k2}function Z(){for(let v2=0;v2<O;v2++)if(P.indexOf(v2)===-1)return P.push(v2),v2;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function K(v2){const m2=x[v2.id],k2=v2.uniforms,j2=v2.__cache;D.bindBuffer(D.UNIFORM_BUFFER,m2);for(let b2=0,D2=k2.length;b2<D2;b2++){const N2=Array.isArray(k2[b2])?k2[b2]:[k2[b2]];for(let B2=0,g2=N2.length;B2<g2;B2++){const W2=N2[B2];if(e2(W2,b2,B2,j2)===!0){const nt=W2.__offset,U2=Array.isArray(W2.value)?W2.value:[W2.value];let q2=0;for(let ft=0;ft<U2.length;ft++){const ut=U2[ft],Et=p2(ut);typeof ut=="number"||typeof ut=="boolean"?(W2.__data[0]=ut,D.bufferSubData(D.UNIFORM_BUFFER,nt+q2,W2.__data)):ut.isMatrix3?(W2.__data[0]=ut.elements[0],W2.__data[1]=ut.elements[1],W2.__data[2]=ut.elements[2],W2.__data[3]=0,W2.__data[4]=ut.elements[3],W2.__data[5]=ut.elements[4],W2.__data[6]=ut.elements[5],W2.__data[7]=0,W2.__data[8]=ut.elements[6],W2.__data[9]=ut.elements[7],W2.__data[10]=ut.elements[8],W2.__data[11]=0):(ut.toArray(W2.__data,q2),q2+=Et.storage/Float32Array.BYTES_PER_ELEMENT)}D.bufferSubData(D.UNIFORM_BUFFER,nt,W2.__data)}}}D.bindBuffer(D.UNIFORM_BUFFER,null)}function e2(v2,m2,k2,j2){const b2=v2.value,D2=m2+"_"+k2;if(j2[D2]===void 0)return typeof b2=="number"||typeof b2=="boolean"?j2[D2]=b2:j2[D2]=b2.clone(),!0;{const N2=j2[D2];if(typeof b2=="number"||typeof b2=="boolean"){if(N2!==b2)return j2[D2]=b2,!0}else if(N2.equals(b2)===!1)return N2.copy(b2),!0}return!1}function l2(v2){const m2=v2.uniforms;let k2=0;const j2=16;for(let D2=0,N2=m2.length;D2<N2;D2++){const B2=Array.isArray(m2[D2])?m2[D2]:[m2[D2]];for(let g2=0,W2=B2.length;g2<W2;g2++){const nt=B2[g2],U2=Array.isArray(nt.value)?nt.value:[nt.value];for(let q2=0,ft=U2.length;q2<ft;q2++){const ut=U2[q2],Et=p2(ut),it=k2%j2;it!==0&&j2-it<Et.boundary&&(k2+=j2-it),nt.__data=new Float32Array(Et.storage/Float32Array.BYTES_PER_ELEMENT),nt.__offset=k2,k2+=Et.storage}}}const b2=k2%j2;return b2>0&&(k2+=j2-b2),v2.__size=k2,v2.__cache={},this}function p2(v2){const m2={boundary:0,storage:0};return typeof v2=="number"||typeof v2=="boolean"?(m2.boundary=4,m2.storage=4):v2.isVector2?(m2.boundary=8,m2.storage=8):v2.isVector3||v2.isColor?(m2.boundary=16,m2.storage=12):v2.isVector4?(m2.boundary=16,m2.storage=16):v2.isMatrix3?(m2.boundary=48,m2.storage=48):v2.isMatrix4?(m2.boundary=64,m2.storage=64):v2.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v2),m2}function r2(v2){const m2=v2.target;m2.removeEventListener("dispose",r2);const k2=P.indexOf(m2.__bindingPointIndex);P.splice(k2,1),D.deleteBuffer(x[m2.id]),delete x[m2.id],delete E[m2.id]}function o2(){for(const v2 in x)D.deleteBuffer(x[v2]);P=[],x={},E={}}return{bind:G,update:h,dispose:o2}}class mh2{constructor(a={}){const{canvas:g=o42(),context:w=null,depth:x=!0,stencil:E=!1,alpha:P=!1,antialias:O=!1,premultipliedAlpha:G=!0,preserveDrawingBuffer:h=!1,powerPreference:X="default",failIfMajorPerformanceCaveat:Z=!1}=a;this.isWebGLRenderer=!0;let K;if(w!==null){if(typeof WebGLRenderingContext<"u"&&w instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");K=w.getContextAttributes().alpha}else K=P;const e2=new Uint32Array(4),l2=new Int32Array(4);let p2=null,r2=null;const o2=[],v2=[];this.domElement=g,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=di,this._useLegacyLights=!1,this.toneMapping=A1,this.toneMappingExposure=1;const m2=this;let k2=!1,j2=0,b2=0,D2=null,N2=-1,B2=null;const g2=new En,W2=new En;let nt=null;const U2=new ce(0);let q2=0,ft=g.width,ut=g.height,Et=1,it=null,At=null;const yt=new En(0,0,ft,ut),re=new En(0,0,ft,ut);let ye=!1;const Be=new th;let rt=!1,Bt=!1;const ee=new te,H2=new E2,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function ue(){return D2===null?Et:1}let Y2=w;function Oe(C2,Z2){return g.getContext(C2,Z2)}try{const C2={alpha:!0,depth:x,stencil:E,antialias:O,premultipliedAlpha:G,preserveDrawingBuffer:h,powerPreference:X,failIfMajorPerformanceCaveat:Z};if("setAttribute"in g&&g.setAttribute("data-engine",`three.js r${Y6}`),g.addEventListener("webglcontextlost",d2,!1),g.addEventListener("webglcontextrestored",X2,!1),g.addEventListener("webglcontextcreationerror",$2,!1),Y2===null){const Z2="webgl2";if(Y2=Oe(Z2,C2),Y2===null)throw Oe(Z2)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C2){throw console.error("THREE.WebGLRenderer: "+C2.message),C2}let ne,on,pe,ze,be,en,Gn,F2,w2,st,dt,Ct,Mt,ke,zt,Vt,De,Gt,ae,sn,Se,ie,je,Xe;function Sn(){ne=new Ba2(Y2),ne.init(),ie=new oh2(Y2,ne),on=new Aa2(Y2,ne,a,ie),pe=new ih2(Y2),ze=new Ca2(Y2),be=new H62,en=new rh2(Y2,ne,pe,be,on,ie,ze),Gn=new ya2(m2),F2=new wa2(m2),w2=new I42(Y2),je=new ma2(Y2,w2),st=new Sa2(Y2,w2,ze,je),dt=new Ta2(Y2,st,w2,ze),ae=new Ma2(Y2,on,en),Vt=new ga2(be),Ct=new W62(m2,Gn,F2,ne,on,je,Vt),Mt=new ah2(m2,be),ke=new z62,zt=new J62(ne),Gt=new ha2(m2,Gn,F2,pe,dt,K,G),De=new nh2(m2,dt,on),Xe=new hh2(Y2,ze,on,pe),sn=new da2(Y2,ne,ze),Se=new xa2(Y2,ne,ze),ze.programs=Ct.programs,m2.capabilities=on,m2.extensions=ne,m2.properties=be,m2.renderLists=ke,m2.shadowMap=De,m2.state=pe,m2.info=ze}Sn();const We=new ch2(m2,Y2);this.xr=We,this.getContext=function(){return Y2},this.getContextAttributes=function(){return Y2.getContextAttributes()},this.forceContextLoss=function(){const C2=ne.get("WEBGL_lose_context");C2&&C2.loseContext()},this.forceContextRestore=function(){const C2=ne.get("WEBGL_lose_context");C2&&C2.restoreContext()},this.getPixelRatio=function(){return Et},this.setPixelRatio=function(C2){C2!==void 0&&(Et=C2,this.setSize(ft,ut,!1))},this.getSize=function(C2){return C2.set(ft,ut)},this.setSize=function(C2,Z2,ot=!0){if(We.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ft=C2,ut=Z2,g.width=Math.floor(C2*Et),g.height=Math.floor(Z2*Et),ot===!0&&(g.style.width=C2+"px",g.style.height=Z2+"px"),this.setViewport(0,0,C2,Z2)},this.getDrawingBufferSize=function(C2){return C2.set(ft*Et,ut*Et).floor()},this.setDrawingBufferSize=function(C2,Z2,ot){ft=C2,ut=Z2,Et=ot,g.width=Math.floor(C2*ot),g.height=Math.floor(Z2*ot),this.setViewport(0,0,C2,Z2)},this.getCurrentViewport=function(C2){return C2.copy(g2)},this.getViewport=function(C2){return C2.copy(yt)},this.setViewport=function(C2,Z2,ot,tt){C2.isVector4?yt.set(C2.x,C2.y,C2.z,C2.w):yt.set(C2,Z2,ot,tt),pe.viewport(g2.copy(yt).multiplyScalar(Et).round())},this.getScissor=function(C2){return C2.copy(re)},this.setScissor=function(C2,Z2,ot,tt){C2.isVector4?re.set(C2.x,C2.y,C2.z,C2.w):re.set(C2,Z2,ot,tt),pe.scissor(W2.copy(re).multiplyScalar(Et).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(C2){pe.setScissorTest(ye=C2)},this.setOpaqueSort=function(C2){it=C2},this.setTransparentSort=function(C2){At=C2},this.getClearColor=function(C2){return C2.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(C2=!0,Z2=!0,ot=!0){let tt=0;if(C2){let et=!1;if(D2!==null){const Yt=D2.texture.format;et=Yt===Uz||Yt===Nz||Yt===jz}if(et){const Yt=D2.texture.type,he=Yt===k1||Yt===_u||Yt===Iz||Yt===$f||Yt===Lz||Yt===Fz,de=Gt.getClearColor(),Ce=Gt.getClearAlpha(),Pe=de.r,He=de.g,qe=de.b;he?(e2[0]=Pe,e2[1]=He,e2[2]=qe,e2[3]=Ce,Y2.clearBufferuiv(Y2.COLOR,0,e2)):(l2[0]=Pe,l2[1]=He,l2[2]=qe,l2[3]=Ce,Y2.clearBufferiv(Y2.COLOR,0,l2))}else tt|=Y2.COLOR_BUFFER_BIT}Z2&&(tt|=Y2.DEPTH_BUFFER_BIT),ot&&(tt|=Y2.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Y2.clear(tt)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){g.removeEventListener("webglcontextlost",d2,!1),g.removeEventListener("webglcontextrestored",X2,!1),g.removeEventListener("webglcontextcreationerror",$2,!1),ke.dispose(),zt.dispose(),be.dispose(),Gn.dispose(),F2.dispose(),dt.dispose(),je.dispose(),Xe.dispose(),Ct.dispose(),We.dispose(),We.removeEventListener("sessionstart",an),We.removeEventListener("sessionend",ei),On.stop()};function d2(C2){C2.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k2=!0}function X2(){console.log("THREE.WebGLRenderer: Context Restored."),k2=!1;const C2=ze.autoReset,Z2=De.enabled,ot=De.autoUpdate,tt=De.needsUpdate,et=De.type;Sn(),ze.autoReset=C2,De.enabled=Z2,De.autoUpdate=ot,De.needsUpdate=tt,De.type=et}function $2(C2){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C2.statusMessage)}function St(C2){const Z2=C2.target;Z2.removeEventListener("dispose",St),Ot(Z2)}function Ot(C2){Ne(C2),be.remove(C2)}function Ne(C2){const Z2=be.get(C2).programs;Z2!==void 0&&(Z2.forEach(function(ot){Ct.releaseProgram(ot)}),C2.isShaderMaterial&&Ct.releaseShaderCache(C2))}this.renderBufferDirect=function(C2,Z2,ot,tt,et,Yt){Z2===null&&(Z2=Dt);const he=et.isMesh&&et.matrixWorld.determinant()<0,de=lp(C2,Z2,ot,tt,et);pe.setMaterial(tt,he);let Ce=ot.index,Pe=1;if(tt.wireframe===!0){if(Ce=st.getWireframeAttribute(ot),Ce===void 0)return;Pe=2}const He=ot.drawRange,qe=ot.attributes.position;let ni=He.start*Pe,Oi=(He.start+He.count)*Pe;Yt!==null&&(ni=Math.max(ni,Yt.start*Pe),Oi=Math.min(Oi,(Yt.start+Yt.count)*Pe)),Ce!==null?(ni=Math.max(ni,0),Oi=Math.min(Oi,Ce.count)):qe!=null&&(ni=Math.max(ni,0),Oi=Math.min(Oi,qe.count));const a0=Oi-ni;if(a0<0||a0===1/0)return;je.setup(et,tt,de,ot,Ce);let wr,gn=sn;if(Ce!==null&&(wr=w2.get(Ce),gn=Se,gn.setIndex(wr)),et.isMesh)tt.wireframe===!0?(pe.setLineWidth(tt.wireframeLinewidth*ue()),gn.setMode(Y2.LINES)):gn.setMode(Y2.TRIANGLES);else if(et.isLine){let Le=tt.linewidth;Le===void 0&&(Le=1),pe.setLineWidth(Le*ue()),et.isLineSegments?gn.setMode(Y2.LINES):et.isLineLoop?gn.setMode(Y2.LINE_LOOP):gn.setMode(Y2.LINE_STRIP)}else et.isPoints?gn.setMode(Y2.POINTS):et.isSprite&&gn.setMode(Y2.TRIANGLES);if(et.isBatchedMesh)et._multiDrawInstances!==null?gn.renderMultiDrawInstances(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount,et._multiDrawInstances):gn.renderMultiDraw(et._multiDrawStarts,et._multiDrawCounts,et._multiDrawCount);else if(et.isInstancedMesh)gn.renderInstances(ni,a0,et.count);else if(ot.isInstancedBufferGeometry){const Le=ot._maxInstanceCount!==void 0?ot._maxInstanceCount:1/0,Rs=Math.min(ot.instanceCount,Le);gn.renderInstances(ni,a0,Rs)}else gn.render(ni,a0)};function Ze(C2,Z2,ot){C2.transparent===!0&&C2.side===No&&C2.forceSinglePass===!1?(C2.side=nr,C2.needsUpdate=!0,B1(C2,Z2,ot),C2.side=Wo,C2.needsUpdate=!0,B1(C2,Z2,ot),C2.side=No):B1(C2,Z2,ot)}this.compile=function(C2,Z2,ot=null){ot===null&&(ot=C2),r2=zt.get(ot),r2.init(Z2),v2.push(r2),ot.traverseVisible(function(et){et.isLight&&et.layers.test(Z2.layers)&&(r2.pushLight(et),et.castShadow&&r2.pushShadow(et))}),C2!==ot&&C2.traverseVisible(function(et){et.isLight&&et.layers.test(Z2.layers)&&(r2.pushLight(et),et.castShadow&&r2.pushShadow(et))}),r2.setupLights(m2._useLegacyLights);const tt=new Set;return C2.traverse(function(et){const Yt=et.material;if(Yt)if(Array.isArray(Yt))for(let he=0;he<Yt.length;he++){const de=Yt[he];Ze(de,ot,et),tt.add(de)}else Ze(Yt,ot,et),tt.add(Yt)}),v2.pop(),r2=null,tt},this.compileAsync=function(C2,Z2,ot=null){const tt=this.compile(C2,Z2,ot);return new Promise(et=>{function Yt(){if(tt.forEach(function(he){be.get(he).currentProgram.isReady()&&tt.delete(he)}),tt.size===0){et(C2);return}setTimeout(Yt,10)}ne.get("KHR_parallel_shader_compile")!==null?Yt():setTimeout(Yt,10)})};let zn=null;function yi(C2){zn&&zn(C2)}function an(){On.stop()}function ei(){On.start()}const On=new $z;On.setAnimationLoop(yi),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(C2){zn=C2,We.setAnimationLoop(C2),C2===null?On.stop():On.start()},We.addEventListener("sessionstart",an),We.addEventListener("sessionend",ei),this.render=function(C2,Z2){if(Z2!==void 0&&Z2.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k2===!0)return;C2.matrixWorldAutoUpdate===!0&&C2.updateMatrixWorld(),Z2.parent===null&&Z2.matrixWorldAutoUpdate===!0&&Z2.updateMatrixWorld(),We.enabled===!0&&We.isPresenting===!0&&(We.cameraAutoUpdate===!0&&We.updateCamera(Z2),Z2=We.getCamera()),C2.isScene===!0&&C2.onBeforeRender(m2,C2,Z2,D2),r2=zt.get(C2,v2.length),r2.init(Z2),v2.push(r2),ee.multiplyMatrices(Z2.projectionMatrix,Z2.matrixWorldInverse),Be.setFromProjectionMatrix(ee),Bt=this.localClippingEnabled,rt=Vt.init(this.clippingPlanes,Bt),p2=ke.get(C2,o2.length),p2.init(),o2.push(p2),Yr(C2,Z2,0,m2.sortObjects),p2.finish(),m2.sortObjects===!0&&p2.sort(it,At);const ot=We.enabled===!1||We.isPresenting===!1||We.hasDepthSensing()===!1;ot&&Gt.addToRenderList(p2,C2),this.info.render.frame++,rt===!0&&Vt.beginShadows();const tt=r2.state.shadowsArray;De.render(tt,C2,Z2),rt===!0&&Vt.endShadows(),this.info.autoReset===!0&&this.info.reset();const et=p2.opaque,Yt=p2.transmissive;if(r2.setupLights(m2._useLegacyLights),Z2.isArrayCamera){const he=Z2.cameras;if(Yt.length>0)for(let de=0,Ce=he.length;de<Ce;de++){const Pe=he[de];Xr(et,Yt,C2,Pe)}ot&&Gt.render(C2);for(let de=0,Ce=he.length;de<Ce;de++){const Pe=he[de];x0(p2,C2,Pe,Pe.viewport)}}else Yt.length>0&&Xr(et,Yt,C2,Z2),ot&&Gt.render(C2),x0(p2,C2,Z2);D2!==null&&(en.updateMultisampleRenderTarget(D2),en.updateRenderTargetMipmap(D2)),C2.isScene===!0&&C2.onAfterRender(m2,C2,Z2),je.resetDefaultState(),N2=-1,B2=null,v2.pop(),v2.length>0?(r2=v2[v2.length-1],rt===!0&&Vt.setGlobalState(m2.clippingPlanes,r2.state.camera)):r2=null,o2.pop(),o2.length>0?p2=o2[o2.length-1]:p2=null};function Yr(C2,Z2,ot,tt){if(C2.visible===!1)return;if(C2.layers.test(Z2.layers)){if(C2.isGroup)ot=C2.renderOrder;else if(C2.isLOD)C2.autoUpdate===!0&&C2.update(Z2);else if(C2.isLight)r2.pushLight(C2),C2.castShadow&&r2.pushShadow(C2);else if(C2.isSprite){if(!C2.frustumCulled||Be.intersectsSprite(C2)){tt&&H2.setFromMatrixPosition(C2.matrixWorld).applyMatrix4(ee);const he=dt.update(C2),de=C2.material;de.visible&&p2.push(C2,he,de,ot,H2.z,null)}}else if((C2.isMesh||C2.isLine||C2.isPoints)&&(!C2.frustumCulled||Be.intersectsObject(C2))){const he=dt.update(C2),de=C2.material;if(tt&&(C2.boundingSphere!==void 0?(C2.boundingSphere===null&&C2.computeBoundingSphere(),H2.copy(C2.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),H2.copy(he.boundingSphere.center)),H2.applyMatrix4(C2.matrixWorld).applyMatrix4(ee)),Array.isArray(de)){const Ce=he.groups;for(let Pe=0,He=Ce.length;Pe<He;Pe++){const qe=Ce[Pe],ni=de[qe.materialIndex];ni&&ni.visible&&p2.push(C2,he,ni,ot,H2.z,qe)}}else de.visible&&p2.push(C2,he,de,ot,H2.z,null)}}const Yt=C2.children;for(let he=0,de=Yt.length;he<de;he++)Yr(Yt[he],Z2,ot,tt)}function x0(C2,Z2,ot,tt){const et=C2.opaque,Yt=C2.transmissive,he=C2.transparent;r2.setupLightsView(ot),rt===!0&&Vt.setGlobalState(m2.clippingPlanes,ot),tt&&pe.viewport(g2.copy(tt)),et.length>0&&vr(et,Z2,ot),Yt.length>0&&vr(Yt,Z2,ot),he.length>0&&vr(he,Z2,ot),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Xr(C2,Z2,ot,tt){if((ot.isScene===!0?ot.overrideMaterial:null)!==null)return;r2.state.transmissionRenderTarget[tt.id]===void 0&&(r2.state.transmissionRenderTarget[tt.id]=new X1(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?h1:k1,minFilter:Go,samples:4,stencilBuffer:E,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Yt=r2.state.transmissionRenderTarget[tt.id],he=tt.viewport||g2;Yt.setSize(he.z,he.w);const de=m2.getRenderTarget();m2.setRenderTarget(Yt),m2.getClearColor(U2),q2=m2.getClearAlpha(),q2<1&&m2.setClearColor(16777215,.5),m2.clear();const Ce=m2.toneMapping;m2.toneMapping=A1;const Pe=tt.viewport;if(tt.viewport!==void 0&&(tt.viewport=void 0),r2.setupLightsView(tt),rt===!0&&Vt.setGlobalState(m2.clippingPlanes,tt),vr(C2,ot,tt),en.updateMultisampleRenderTarget(Yt),en.updateRenderTargetMipmap(Yt),ne.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let qe=0,ni=Z2.length;qe<ni;qe++){const Oi=Z2[qe],a0=Oi.object,wr=Oi.geometry,gn=Oi.material,Le=Oi.group;if(gn.side===No&&a0.layers.test(tt.layers)){const Rs=gn.side;gn.side=nr,gn.needsUpdate=!0,Es(a0,ot,tt,wr,gn,Le),gn.side=Rs,gn.needsUpdate=!0,He=!0}}He===!0&&(en.updateMultisampleRenderTarget(Yt),en.updateRenderTargetMipmap(Yt))}m2.setRenderTarget(de),m2.setClearColor(U2,q2),Pe!==void 0&&(tt.viewport=Pe),m2.toneMapping=Ce}function vr(C2,Z2,ot){const tt=Z2.isScene===!0?Z2.overrideMaterial:null;for(let et=0,Yt=C2.length;et<Yt;et++){const he=C2[et],de=he.object,Ce=he.geometry,Pe=tt===null?he.material:tt,He=he.group;de.layers.test(ot.layers)&&Es(de,Z2,ot,Ce,Pe,He)}}function Es(C2,Z2,ot,tt,et,Yt){C2.onBeforeRender(m2,Z2,ot,tt,et,Yt),C2.modelViewMatrix.multiplyMatrices(ot.matrixWorldInverse,C2.matrixWorld),C2.normalMatrix.getNormalMatrix(C2.modelViewMatrix),et.onBeforeRender(m2,Z2,ot,tt,C2,Yt),et.transparent===!0&&et.side===No&&et.forceSinglePass===!1?(et.side=nr,et.needsUpdate=!0,m2.renderBufferDirect(ot,Z2,tt,et,C2,Yt),et.side=Wo,et.needsUpdate=!0,m2.renderBufferDirect(ot,Z2,tt,et,C2,Yt),et.side=No):m2.renderBufferDirect(ot,Z2,tt,et,C2,Yt),C2.onAfterRender(m2,Z2,ot,tt,et,Yt)}function B1(C2,Z2,ot){Z2.isScene!==!0&&(Z2=Dt);const tt=be.get(C2),et=r2.state.lights,Yt=r2.state.shadowsArray,he=et.state.version,de=Ct.getParameters(C2,et.state,Yt,Z2,ot),Ce=Ct.getProgramCacheKey(de);let Pe=tt.programs;tt.environment=C2.isMeshStandardMaterial?Z2.environment:null,tt.fog=Z2.fog,tt.envMap=(C2.isMeshStandardMaterial?F2:Gn).get(C2.envMap||tt.environment),tt.envMapRotation=tt.environment!==null&&C2.envMap===null?Z2.environmentRotation:C2.envMapRotation,Pe===void 0&&(C2.addEventListener("dispose",St),Pe=new Map,tt.programs=Pe);let He=Pe.get(Ce);if(He!==void 0){if(tt.currentProgram===He&&tt.lightsStateVersion===he)return Su(C2,de),He}else de.uniforms=Ct.getUniforms(C2),C2.onBuild(ot,de,m2),C2.onBeforeCompile(de,m2),He=Ct.acquireProgram(de,Ce),Pe.set(Ce,He),tt.uniforms=de.uniforms;const qe=tt.uniforms;return(!C2.isShaderMaterial&&!C2.isRawShaderMaterial||C2.clipping===!0)&&(qe.clippingPlanes=Vt.uniform),Su(C2,de),tt.needsLights=fp(C2),tt.lightsStateVersion=he,tt.needsLights&&(qe.ambientLightColor.value=et.state.ambient,qe.lightProbe.value=et.state.probe,qe.directionalLights.value=et.state.directional,qe.directionalLightShadows.value=et.state.directionalShadow,qe.spotLights.value=et.state.spot,qe.spotLightShadows.value=et.state.spotShadow,qe.rectAreaLights.value=et.state.rectArea,qe.ltc_1.value=et.state.rectAreaLTC1,qe.ltc_2.value=et.state.rectAreaLTC2,qe.pointLights.value=et.state.point,qe.pointLightShadows.value=et.state.pointShadow,qe.hemisphereLights.value=et.state.hemi,qe.directionalShadowMap.value=et.state.directionalShadowMap,qe.directionalShadowMatrix.value=et.state.directionalShadowMatrix,qe.spotShadowMap.value=et.state.spotShadowMap,qe.spotLightMatrix.value=et.state.spotLightMatrix,qe.spotLightMap.value=et.state.spotLightMap,qe.pointShadowMap.value=et.state.pointShadowMap,qe.pointShadowMatrix.value=et.state.pointShadowMatrix),tt.currentProgram=He,tt.uniformsList=null,He}function Bu(C2){if(C2.uniformsList===null){const Z2=C2.currentProgram.getUniforms();C2.uniformsList=D4.seqWithValue(Z2.seq,C2.uniforms)}return C2.uniformsList}function Su(C2,Z2){const ot=be.get(C2);ot.outputColorSpace=Z2.outputColorSpace,ot.batching=Z2.batching,ot.instancing=Z2.instancing,ot.instancingColor=Z2.instancingColor,ot.instancingMorph=Z2.instancingMorph,ot.skinning=Z2.skinning,ot.morphTargets=Z2.morphTargets,ot.morphNormals=Z2.morphNormals,ot.morphColors=Z2.morphColors,ot.morphTargetsCount=Z2.morphTargetsCount,ot.numClippingPlanes=Z2.numClippingPlanes,ot.numIntersection=Z2.numClipIntersection,ot.vertexAlphas=Z2.vertexAlphas,ot.vertexTangents=Z2.vertexTangents,ot.toneMapping=Z2.toneMapping}function lp(C2,Z2,ot,tt,et){Z2.isScene!==!0&&(Z2=Dt),en.resetTextureUnits();const Yt=Z2.fog,he=tt.isMeshStandardMaterial?Z2.environment:null,de=D2===null?m2.outputColorSpace:D2.isXRRenderTarget===!0?D2.texture.colorSpace:Xi,Ce=(tt.isMeshStandardMaterial?F2:Gn).get(tt.envMap||he),Pe=tt.vertexColors===!0&&!!ot.attributes.color&&ot.attributes.color.itemSize===4,He=!!ot.attributes.tangent&&(!!tt.normalMap||tt.anisotropy>0),qe=!!ot.morphAttributes.position,ni=!!ot.morphAttributes.normal,Oi=!!ot.morphAttributes.color;let a0=A1;tt.toneMapped&&(D2===null||D2.isXRRenderTarget===!0)&&(a0=m2.toneMapping);const wr=ot.morphAttributes.position||ot.morphAttributes.normal||ot.morphAttributes.color,gn=wr!==void 0?wr.length:0,Le=be.get(tt),Rs=r2.state.lights;if(rt===!0&&(Bt===!0||C2!==B2)){const C0=C2===B2&&tt.id===N2;Vt.setState(tt,C2,C0)}let Wn=!1;tt.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Rs.state.version||Le.outputColorSpace!==de||et.isBatchedMesh&&Le.batching===!1||!et.isBatchedMesh&&Le.batching===!0||et.isInstancedMesh&&Le.instancing===!1||!et.isInstancedMesh&&Le.instancing===!0||et.isSkinnedMesh&&Le.skinning===!1||!et.isSkinnedMesh&&Le.skinning===!0||et.isInstancedMesh&&Le.instancingColor===!0&&et.instanceColor===null||et.isInstancedMesh&&Le.instancingColor===!1&&et.instanceColor!==null||et.isInstancedMesh&&Le.instancingMorph===!0&&et.morphTexture===null||et.isInstancedMesh&&Le.instancingMorph===!1&&et.morphTexture!==null||Le.envMap!==Ce||tt.fog===!0&&Le.fog!==Yt||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Vt.numPlanes||Le.numIntersection!==Vt.numIntersection)||Le.vertexAlphas!==Pe||Le.vertexTangents!==He||Le.morphTargets!==qe||Le.morphNormals!==ni||Le.morphColors!==Oi||Le.toneMapping!==a0||Le.morphTargetsCount!==gn)&&(Wn=!0):(Wn=!0,Le.__version=tt.version);let ko=Le.currentProgram;Wn===!0&&(ko=B1(tt,Z2,et));let xu=!1,bs=!1,$1=!1;const ji=ko.getUniforms(),Zr=Le.uniforms;if(pe.useProgram(ko.program)&&(xu=!0,bs=!0,$1=!0),tt.id!==N2&&(N2=tt.id,bs=!0),xu||B2!==C2){ji.setValue(Y2,"projectionMatrix",C2.projectionMatrix),ji.setValue(Y2,"viewMatrix",C2.matrixWorldInverse);const C0=ji.map.cameraPosition;C0!==void 0&&C0.setValue(Y2,H2.setFromMatrixPosition(C2.matrixWorld)),on.logarithmicDepthBuffer&&ji.setValue(Y2,"logDepthBufFC",2/(Math.log(C2.far+1)/Math.LN2)),(tt.isMeshPhongMaterial||tt.isMeshToonMaterial||tt.isMeshLambertMaterial||tt.isMeshBasicMaterial||tt.isMeshStandardMaterial||tt.isShaderMaterial)&&ji.setValue(Y2,"isOrthographic",C2.isOrthographicCamera===!0),B2!==C2&&(B2=C2,bs=!0,$1=!0)}if(et.isSkinnedMesh){ji.setOptional(Y2,et,"bindMatrix"),ji.setOptional(Y2,et,"bindMatrixInverse");const C0=et.skeleton;C0&&(C0.boneTexture===null&&C0.computeBoneTexture(),ji.setValue(Y2,"boneTexture",C0.boneTexture,en))}et.isBatchedMesh&&(ji.setOptional(Y2,et,"batchingTexture"),ji.setValue(Y2,"batchingTexture",et._matricesTexture,en));const tl=ot.morphAttributes;if((tl.position!==void 0||tl.normal!==void 0||tl.color!==void 0)&&ae.update(et,ot,ko),(bs||Le.receiveShadow!==et.receiveShadow)&&(Le.receiveShadow=et.receiveShadow,ji.setValue(Y2,"receiveShadow",et.receiveShadow)),tt.isMeshGouraudMaterial&&tt.envMap!==null&&(Zr.envMap.value=Ce,Zr.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),tt.isMeshStandardMaterial&&tt.envMap===null&&Z2.environment!==null&&(Zr.envMapIntensity.value=Z2.environmentIntensity),bs&&(ji.setValue(Y2,"toneMappingExposure",m2.toneMappingExposure),Le.needsLights&&up(Zr,$1),Yt&&tt.fog===!0&&Mt.refreshFogUniforms(Zr,Yt),Mt.refreshMaterialUniforms(Zr,tt,Et,ut,r2.state.transmissionRenderTarget[C2.id]),D4.upload(Y2,Bu(Le),Zr,en)),tt.isShaderMaterial&&tt.uniformsNeedUpdate===!0&&(D4.upload(Y2,Bu(Le),Zr,en),tt.uniformsNeedUpdate=!1),tt.isSpriteMaterial&&ji.setValue(Y2,"center",et.center),ji.setValue(Y2,"modelViewMatrix",et.modelViewMatrix),ji.setValue(Y2,"normalMatrix",et.normalMatrix),ji.setValue(Y2,"modelMatrix",et.matrixWorld),tt.isShaderMaterial||tt.isRawShaderMaterial){const C0=tt.uniformsGroups;for(let el=0,pp=C0.length;el<pp;el++){const Cu=C0[el];Xe.update(Cu,ko),Xe.bind(Cu,ko)}}return ko}function up(C2,Z2){C2.ambientLightColor.needsUpdate=Z2,C2.lightProbe.needsUpdate=Z2,C2.directionalLights.needsUpdate=Z2,C2.directionalLightShadows.needsUpdate=Z2,C2.pointLights.needsUpdate=Z2,C2.pointLightShadows.needsUpdate=Z2,C2.spotLights.needsUpdate=Z2,C2.spotLightShadows.needsUpdate=Z2,C2.rectAreaLights.needsUpdate=Z2,C2.hemisphereLights.needsUpdate=Z2}function fp(C2){return C2.isMeshLambertMaterial||C2.isMeshToonMaterial||C2.isMeshPhongMaterial||C2.isMeshStandardMaterial||C2.isShadowMaterial||C2.isShaderMaterial&&C2.lights===!0}this.getActiveCubeFace=function(){return j2},this.getActiveMipmapLevel=function(){return b2},this.getRenderTarget=function(){return D2},this.setRenderTargetTextures=function(C2,Z2,ot){be.get(C2.texture).__webglTexture=Z2,be.get(C2.depthTexture).__webglTexture=ot;const tt=be.get(C2);tt.__hasExternalTextures=!0,tt.__autoAllocateDepthBuffer=ot===void 0,tt.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),tt.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C2,Z2){const ot=be.get(C2);ot.__webglFramebuffer=Z2,ot.__useDefaultFramebuffer=Z2===void 0},this.setRenderTarget=function(C2,Z2=0,ot=0){D2=C2,j2=Z2,b2=ot;let tt=!0,et=null,Yt=!1,he=!1;if(C2){const Ce=be.get(C2);Ce.__useDefaultFramebuffer!==void 0?(pe.bindFramebuffer(Y2.FRAMEBUFFER,null),tt=!1):Ce.__webglFramebuffer===void 0?en.setupRenderTarget(C2):Ce.__hasExternalTextures&&en.rebindTextures(C2,be.get(C2.texture).__webglTexture,be.get(C2.depthTexture).__webglTexture);const Pe=C2.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(he=!0);const He=be.get(C2).__webglFramebuffer;C2.isWebGLCubeRenderTarget?(Array.isArray(He[Z2])?et=He[Z2][ot]:et=He[Z2],Yt=!0):C2.samples>0&&en.useMultisampledRTT(C2)===!1?et=be.get(C2).__webglMultisampledFramebuffer:Array.isArray(He)?et=He[ot]:et=He,g2.copy(C2.viewport),W2.copy(C2.scissor),nt=C2.scissorTest}else g2.copy(yt).multiplyScalar(Et).floor(),W2.copy(re).multiplyScalar(Et).floor(),nt=ye;if(pe.bindFramebuffer(Y2.FRAMEBUFFER,et)&&tt&&pe.drawBuffers(C2,et),pe.viewport(g2),pe.scissor(W2),pe.setScissorTest(nt),Yt){const Ce=be.get(C2.texture);Y2.framebufferTexture2D(Y2.FRAMEBUFFER,Y2.COLOR_ATTACHMENT0,Y2.TEXTURE_CUBE_MAP_POSITIVE_X+Z2,Ce.__webglTexture,ot)}else if(he){const Ce=be.get(C2.texture),Pe=Z2||0;Y2.framebufferTextureLayer(Y2.FRAMEBUFFER,Y2.COLOR_ATTACHMENT0,Ce.__webglTexture,ot||0,Pe)}N2=-1},this.readRenderTargetPixels=function(C2,Z2,ot,tt,et,Yt,he){if(!(C2&&C2.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let de=be.get(C2).__webglFramebuffer;if(C2.isWebGLCubeRenderTarget&&he!==void 0&&(de=de[he]),de){pe.bindFramebuffer(Y2.FRAMEBUFFER,de);try{const Ce=C2.texture,Pe=Ce.format,He=Ce.type;if(!on.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!on.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z2>=0&&Z2<=C2.width-tt&&ot>=0&&ot<=C2.height-et&&Y2.readPixels(Z2,ot,tt,et,ie.convert(Pe),ie.convert(He),Yt)}finally{const Ce=D2!==null?be.get(D2).__webglFramebuffer:null;pe.bindFramebuffer(Y2.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(C2,Z2,ot=0){const tt=Math.pow(2,-ot),et=Math.floor(Z2.image.width*tt),Yt=Math.floor(Z2.image.height*tt);en.setTexture2D(Z2,0),Y2.copyTexSubImage2D(Y2.TEXTURE_2D,ot,0,0,C2.x,C2.y,et,Yt),pe.unbindTexture()},this.copyTextureToTexture=function(C2,Z2,ot,tt=0){const et=Z2.image.width,Yt=Z2.image.height,he=ie.convert(ot.format),de=ie.convert(ot.type);en.setTexture2D(ot,0),Y2.pixelStorei(Y2.UNPACK_FLIP_Y_WEBGL,ot.flipY),Y2.pixelStorei(Y2.UNPACK_PREMULTIPLY_ALPHA_WEBGL,ot.premultiplyAlpha),Y2.pixelStorei(Y2.UNPACK_ALIGNMENT,ot.unpackAlignment),Z2.isDataTexture?Y2.texSubImage2D(Y2.TEXTURE_2D,tt,C2.x,C2.y,et,Yt,he,de,Z2.image.data):Z2.isCompressedTexture?Y2.compressedTexSubImage2D(Y2.TEXTURE_2D,tt,C2.x,C2.y,Z2.mipmaps[0].width,Z2.mipmaps[0].height,he,Z2.mipmaps[0].data):Y2.texSubImage2D(Y2.TEXTURE_2D,tt,C2.x,C2.y,he,de,Z2.image),tt===0&&ot.generateMipmaps&&Y2.generateMipmap(Y2.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(C2,Z2,ot,tt,et=0){const Yt=C2.max.x-C2.min.x,he=C2.max.y-C2.min.y,de=C2.max.z-C2.min.z,Ce=ie.convert(tt.format),Pe=ie.convert(tt.type);let He;if(tt.isData3DTexture)en.setTexture3D(tt,0),He=Y2.TEXTURE_3D;else if(tt.isDataArrayTexture||tt.isCompressedArrayTexture)en.setTexture2DArray(tt,0),He=Y2.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Y2.pixelStorei(Y2.UNPACK_FLIP_Y_WEBGL,tt.flipY),Y2.pixelStorei(Y2.UNPACK_PREMULTIPLY_ALPHA_WEBGL,tt.premultiplyAlpha),Y2.pixelStorei(Y2.UNPACK_ALIGNMENT,tt.unpackAlignment);const qe=Y2.getParameter(Y2.UNPACK_ROW_LENGTH),ni=Y2.getParameter(Y2.UNPACK_IMAGE_HEIGHT),Oi=Y2.getParameter(Y2.UNPACK_SKIP_PIXELS),a0=Y2.getParameter(Y2.UNPACK_SKIP_ROWS),wr=Y2.getParameter(Y2.UNPACK_SKIP_IMAGES),gn=ot.isCompressedTexture?ot.mipmaps[et]:ot.image;Y2.pixelStorei(Y2.UNPACK_ROW_LENGTH,gn.width),Y2.pixelStorei(Y2.UNPACK_IMAGE_HEIGHT,gn.height),Y2.pixelStorei(Y2.UNPACK_SKIP_PIXELS,C2.min.x),Y2.pixelStorei(Y2.UNPACK_SKIP_ROWS,C2.min.y),Y2.pixelStorei(Y2.UNPACK_SKIP_IMAGES,C2.min.z),ot.isDataTexture||ot.isData3DTexture?Y2.texSubImage3D(He,et,Z2.x,Z2.y,Z2.z,Yt,he,de,Ce,Pe,gn.data):tt.isCompressedArrayTexture?Y2.compressedTexSubImage3D(He,et,Z2.x,Z2.y,Z2.z,Yt,he,de,Ce,gn.data):Y2.texSubImage3D(He,et,Z2.x,Z2.y,Z2.z,Yt,he,de,Ce,Pe,gn),Y2.pixelStorei(Y2.UNPACK_ROW_LENGTH,qe),Y2.pixelStorei(Y2.UNPACK_IMAGE_HEIGHT,ni),Y2.pixelStorei(Y2.UNPACK_SKIP_PIXELS,Oi),Y2.pixelStorei(Y2.UNPACK_SKIP_ROWS,a0),Y2.pixelStorei(Y2.UNPACK_SKIP_IMAGES,wr),et===0&&tt.generateMipmaps&&Y2.generateMipmap(He),pe.unbindTexture()},this.initTexture=function(C2){C2.isCubeTexture?en.setTextureCube(C2,0):C2.isData3DTexture?en.setTexture3D(C2,0):C2.isDataArrayTexture||C2.isCompressedArrayTexture?en.setTexture2DArray(C2,0):en.setTexture2D(C2,0),pe.unbindTexture()},this.resetState=function(){j2=0,b2=0,D2=null,pe.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ss}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(a){this._outputColorSpace=a;const g=this.getContext();g.drawingBufferColorSpace=a===q6?"display-p3":"srgb",g.unpackColorSpace=Dn.workingColorSpace===K4?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(a){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=a}}class nh{constructor(a,g=25e-5){this.isFogExp2=!0,this.name="",this.color=new ce(a),this.density=g}clone(){return new nh(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class dh2 extends Un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(a,g){return super.copy(a,g),a.background!==null&&(this.background=a.background.clone()),a.environment!==null&&(this.environment=a.environment.clone()),a.fog!==null&&(this.fog=a.fog.clone()),this.backgroundBlurriness=a.backgroundBlurriness,this.backgroundIntensity=a.backgroundIntensity,this.backgroundRotation.copy(a.backgroundRotation),this.environmentIntensity=a.environmentIntensity,this.environmentRotation.copy(a.environmentRotation),a.overrideMaterial!==null&&(this.overrideMaterial=a.overrideMaterial.clone()),this.matrixAutoUpdate=a.matrixAutoUpdate,this}toJSON(a){const g=super.toJSON(a);return this.fog!==null&&(g.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(g.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(g.object.backgroundIntensity=this.backgroundIntensity),g.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(g.object.environmentIntensity=this.environmentIntensity),g.object.environmentRotation=this.environmentRotation.toArray(),g}}class Ah2{constructor(a,g){this.isInterleavedBuffer=!0,this.array=a,this.stride=g,this.count=a!==void 0?a.length/g:0,this.usage=b6,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ao()}onUploadCallback(){}set needsUpdate(a){a===!0&&this.version++}get updateRange(){return zz("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(a){return this.usage=a,this}addUpdateRange(a,g){this.updateRanges.push({start:a,count:g})}clearUpdateRanges(){this.updateRanges.length=0}copy(a){return this.array=new a.array.constructor(a.array),this.count=a.count,this.stride=a.stride,this.usage=a.usage,this}copyAt(a,g,w){a*=this.stride,w*=g.stride;for(let x=0,E=this.stride;x<E;x++)this.array[a+x]=g.array[w+x];return this}set(a,g=0){return this.array.set(a,g),this}clone(a){a.arrayBuffers===void 0&&(a.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ao()),a.arrayBuffers[this.array.buffer._uuid]===void 0&&(a.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const g=new this.array.constructor(a.arrayBuffers[this.array.buffer._uuid]),w=new this.constructor(g,this.stride);return w.setUsage(this.usage),w}onUpload(a){return this.onUploadCallback=a,this}toJSON(a){return a.arrayBuffers===void 0&&(a.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ao()),a.arrayBuffers[this.array.buffer._uuid]===void 0&&(a.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const L0=new E2;class ih{constructor(a,g,w,x=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=a,this.itemSize=g,this.offset=w,this.normalized=x}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(a){this.data.needsUpdate=a}applyMatrix4(a){for(let g=0,w=this.data.count;g<w;g++)L0.fromBufferAttribute(this,g),L0.applyMatrix4(a),this.setXYZ(g,L0.x,L0.y,L0.z);return this}applyNormalMatrix(a){for(let g=0,w=this.count;g<w;g++)L0.fromBufferAttribute(this,g),L0.applyNormalMatrix(a),this.setXYZ(g,L0.x,L0.y,L0.z);return this}transformDirection(a){for(let g=0,w=this.count;g<w;g++)L0.fromBufferAttribute(this,g),L0.transformDirection(a),this.setXYZ(g,L0.x,L0.y,L0.z);return this}getComponent(a,g){let w=this.array[a*this.data.stride+this.offset+g];return this.normalized&&(w=ho(w,this.array)),w}setComponent(a,g,w){return this.normalized&&(w=Fn(w,this.array)),this.data.array[a*this.data.stride+this.offset+g]=w,this}setX(a,g){return this.normalized&&(g=Fn(g,this.array)),this.data.array[a*this.data.stride+this.offset]=g,this}setY(a,g){return this.normalized&&(g=Fn(g,this.array)),this.data.array[a*this.data.stride+this.offset+1]=g,this}setZ(a,g){return this.normalized&&(g=Fn(g,this.array)),this.data.array[a*this.data.stride+this.offset+2]=g,this}setW(a,g){return this.normalized&&(g=Fn(g,this.array)),this.data.array[a*this.data.stride+this.offset+3]=g,this}getX(a){let g=this.data.array[a*this.data.stride+this.offset];return this.normalized&&(g=ho(g,this.array)),g}getY(a){let g=this.data.array[a*this.data.stride+this.offset+1];return this.normalized&&(g=ho(g,this.array)),g}getZ(a){let g=this.data.array[a*this.data.stride+this.offset+2];return this.normalized&&(g=ho(g,this.array)),g}getW(a){let g=this.data.array[a*this.data.stride+this.offset+3];return this.normalized&&(g=ho(g,this.array)),g}setXY(a,g,w){return a=a*this.data.stride+this.offset,this.normalized&&(g=Fn(g,this.array),w=Fn(w,this.array)),this.data.array[a+0]=g,this.data.array[a+1]=w,this}setXYZ(a,g,w,x){return a=a*this.data.stride+this.offset,this.normalized&&(g=Fn(g,this.array),w=Fn(w,this.array),x=Fn(x,this.array)),this.data.array[a+0]=g,this.data.array[a+1]=w,this.data.array[a+2]=x,this}setXYZW(a,g,w,x,E){return a=a*this.data.stride+this.offset,this.normalized&&(g=Fn(g,this.array),w=Fn(w,this.array),x=Fn(x,this.array),E=Fn(E,this.array)),this.data.array[a+0]=g,this.data.array[a+1]=w,this.data.array[a+2]=x,this.data.array[a+3]=E,this}clone(a){if(a===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const g=[];for(let w=0;w<this.count;w++){const x=w*this.data.stride+this.offset;for(let E=0;E<this.itemSize;E++)g.push(this.data.array[x+E])}return new _0(new this.array.constructor(g),this.itemSize,this.normalized)}else return a.interleavedBuffers===void 0&&(a.interleavedBuffers={}),a.interleavedBuffers[this.data.uuid]===void 0&&(a.interleavedBuffers[this.data.uuid]=this.data.clone(a)),new ih(a.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(a){if(a===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const g=[];for(let w=0;w<this.count;w++){const x=w*this.data.stride+this.offset;for(let E=0;E<this.itemSize;E++)g.push(this.data.array[x+E])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:g,normalized:this.normalized}}else return a.interleavedBuffers===void 0&&(a.interleavedBuffers={}),a.interleavedBuffers[this.data.uuid]===void 0&&(a.interleavedBuffers[this.data.uuid]=this.data.toJSON(a)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const zV=new E2,QV=new En,YV=new En,gh2=new E2,XV=new te,A4=new E2,i6=new Vo,ZV=new te,r6=new ep;class sQ extends e0{constructor(a,g){super(a,g),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=TH,this.bindMatrix=new te,this.bindMatrixInverse=new te,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const a=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ho),this.boundingBox.makeEmpty();const g=a.getAttribute("position");for(let w=0;w<g.count;w++)this.getVertexPosition(w,A4),this.boundingBox.expandByPoint(A4)}computeBoundingSphere(){const a=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Vo),this.boundingSphere.makeEmpty();const g=a.getAttribute("position");for(let w=0;w<g.count;w++)this.getVertexPosition(w,A4),this.boundingSphere.expandByPoint(A4)}copy(a,g){return super.copy(a,g),this.bindMode=a.bindMode,this.bindMatrix.copy(a.bindMatrix),this.bindMatrixInverse.copy(a.bindMatrixInverse),this.skeleton=a.skeleton,a.boundingBox!==null&&(this.boundingBox=a.boundingBox.clone()),a.boundingSphere!==null&&(this.boundingSphere=a.boundingSphere.clone()),this}raycast(a,g){const w=this.material,x=this.matrixWorld;w!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),i6.copy(this.boundingSphere),i6.applyMatrix4(x),a.ray.intersectsSphere(i6)!==!1&&(ZV.copy(x).invert(),r6.copy(a.ray).applyMatrix4(ZV),!(this.boundingBox!==null&&r6.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(a,g,r6)))}getVertexPosition(a,g){return super.getVertexPosition(a,g),this.applyBoneTransform(a,g),g}bind(a,g){this.skeleton=a,g===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),g=this.matrixWorld),this.bindMatrix.copy(g),this.bindMatrixInverse.copy(g).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const a=new En,g=this.geometry.attributes.skinWeight;for(let w=0,x=g.count;w<x;w++){a.fromBufferAttribute(g,w);const E=1/a.manhattanLength();E!==1/0?a.multiplyScalar(E):a.set(1,0,0,0),g.setXYZW(w,a.x,a.y,a.z,a.w)}}updateMatrixWorld(a){super.updateMatrixWorld(a),this.bindMode===TH?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===kc2?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(a,g){const w=this.skeleton,x=this.geometry;QV.fromBufferAttribute(x.attributes.skinIndex,a),YV.fromBufferAttribute(x.attributes.skinWeight,a),zV.copy(g).applyMatrix4(this.bindMatrix),g.set(0,0,0);for(let E=0;E<4;E++){const P=YV.getComponent(E);if(P!==0){const O=QV.getComponent(E);XV.multiplyMatrices(w.bones[O].matrixWorld,w.boneInverses[O]),g.addScaledVector(gh2.copy(zV).applyMatrix4(XV),P)}}return g.applyMatrix4(this.bindMatrixInverse)}}class H4 extends Un{constructor(){super(),this.isBone=!0,this.type="Bone"}}class rh extends Ti{constructor(a=null,g=1,w=1,x,E,P,O,G,h=j0,X=j0,Z,K){super(null,P,O,G,h,X,x,E,Z,K),this.isDataTexture=!0,this.image={data:a,width:g,height:w},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const qV=new te,yh2=new te;class n_{constructor(a=[],g=[]){this.uuid=Ao(),this.bones=a.slice(0),this.boneInverses=g,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const a=this.bones,g=this.boneInverses;if(this.boneMatrices=new Float32Array(a.length*16),g.length===0)this.calculateInverses();else if(a.length!==g.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let w=0,x=this.bones.length;w<x;w++)this.boneInverses.push(new te)}}calculateInverses(){this.boneInverses.length=0;for(let a=0,g=this.bones.length;a<g;a++){const w=new te;this.bones[a]&&w.copy(this.bones[a].matrixWorld).invert(),this.boneInverses.push(w)}}pose(){for(let a=0,g=this.bones.length;a<g;a++){const w=this.bones[a];w&&w.matrixWorld.copy(this.boneInverses[a]).invert()}for(let a=0,g=this.bones.length;a<g;a++){const w=this.bones[a];w&&(w.parent&&w.parent.isBone?(w.matrix.copy(w.parent.matrixWorld).invert(),w.matrix.multiply(w.matrixWorld)):w.matrix.copy(w.matrixWorld),w.matrix.decompose(w.position,w.quaternion,w.scale))}}update(){const a=this.bones,g=this.boneInverses,w=this.boneMatrices,x=this.boneTexture;for(let E=0,P=a.length;E<P;E++){const O=a[E]?a[E].matrixWorld:yh2;qV.multiplyMatrices(O,g[E]),qV.toArray(w,E*16)}x!==null&&(x.needsUpdate=!0)}clone(){return new n_(this.bones,this.boneInverses)}computeBoneTexture(){let a=Math.sqrt(this.bones.length*4);a=Math.ceil(a/4)*4,a=Math.max(a,4);const g=new Float32Array(a*a*4);g.set(this.boneMatrices);const w=new rh(g,a,a,mo,kr);return w.needsUpdate=!0,this.boneMatrices=g,this.boneTexture=w,this}getBoneByName(a){for(let g=0,w=this.bones.length;g<w;g++){const x=this.bones[g];if(x.name===a)return x}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(a,g){this.uuid=a.uuid;for(let w=0,x=a.bones.length;w<x;w++){const E=a.bones[w];let P=g[E];P===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",E),P=new H4),this.bones.push(P),this.boneInverses.push(new te().fromArray(a.boneInverses[w]))}return this.init(),this}toJSON(){const a={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};a.uuid=this.uuid;const g=this.bones,w=this.boneInverses;for(let x=0,E=g.length;x<E;x++){const P=g[x];a.bones.push(P.uuid);const O=w[x];a.boneInverses.push(O.toArray())}return a}}class I6 extends _0{constructor(a,g,w,x=1){super(a,g,w),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=x}copy(a){return super.copy(a),this.meshPerAttribute=a.meshPerAttribute,this}toJSON(){const a=super.toJSON();return a.meshPerAttribute=this.meshPerAttribute,a.isInstancedBufferAttribute=!0,a}}const Jl=new te,JV=new te,g4=[],KV=new Ho,kh2=new te,Rf=new e0,bf=new Vo;class ku extends e0{constructor(a,g,w){super(a,g),this.isInstancedMesh=!0,this.instanceMatrix=new I6(new Float32Array(w*16),16),this.instanceColor=null,this.morphTexture=null,this.count=w,this.boundingBox=null,this.boundingSphere=null;for(let x=0;x<w;x++)this.setMatrixAt(x,kh2)}computeBoundingBox(){const a=this.geometry,g=this.count;this.boundingBox===null&&(this.boundingBox=new Ho),a.boundingBox===null&&a.computeBoundingBox(),this.boundingBox.makeEmpty();for(let w=0;w<g;w++)this.getMatrixAt(w,Jl),KV.copy(a.boundingBox).applyMatrix4(Jl),this.boundingBox.union(KV)}computeBoundingSphere(){const a=this.geometry,g=this.count;this.boundingSphere===null&&(this.boundingSphere=new Vo),a.boundingSphere===null&&a.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let w=0;w<g;w++)this.getMatrixAt(w,Jl),bf.copy(a.boundingSphere).applyMatrix4(Jl),this.boundingSphere.union(bf)}copy(a,g){return super.copy(a,g),this.instanceMatrix.copy(a.instanceMatrix),a.morphTexture!==null&&(this.morphTexture=a.morphTexture.clone()),a.instanceColor!==null&&(this.instanceColor=a.instanceColor.clone()),this.count=a.count,a.boundingBox!==null&&(this.boundingBox=a.boundingBox.clone()),a.boundingSphere!==null&&(this.boundingSphere=a.boundingSphere.clone()),this}getColorAt(a,g){g.fromArray(this.instanceColor.array,a*3)}getMatrixAt(a,g){g.fromArray(this.instanceMatrix.array,a*16)}getMorphAt(a,g){const w=g.morphTargetInfluences,x=this.morphTexture.source.data.data,E=w.length+1,P=a*E+1;for(let O=0;O<w.length;O++)w[O]=x[P+O]}raycast(a,g){const w=this.matrixWorld,x=this.count;if(Rf.geometry=this.geometry,Rf.material=this.material,Rf.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bf.copy(this.boundingSphere),bf.applyMatrix4(w),a.ray.intersectsSphere(bf)!==!1))for(let E=0;E<x;E++){this.getMatrixAt(E,Jl),JV.multiplyMatrices(w,Jl),Rf.matrixWorld=JV,Rf.raycast(a,g4);for(let P=0,O=g4.length;P<O;P++){const G=g4[P];G.instanceId=E,G.object=this,g.push(G)}g4.length=0}}setColorAt(a,g){this.instanceColor===null&&(this.instanceColor=new I6(new Float32Array(this.instanceMatrix.count*3),3)),g.toArray(this.instanceColor.array,a*3)}setMatrixAt(a,g){g.toArray(this.instanceMatrix.array,a*16)}setMorphAt(a,g){const w=g.morphTargetInfluences,x=w.length+1;this.morphTexture===null&&(this.morphTexture=new rh(new Float32Array(x*this.count),x,this.count,Oz,kr));const E=this.morphTexture.source.data.data;let P=0;for(let h=0;h<w.length;h++)P+=w[h];const O=this.geometry.morphTargetsRelative?1:1-P,G=x*a;E[G]=O,E.set(w,G+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class np extends zr{constructor(a){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ce(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.map=a.map,this.linewidth=a.linewidth,this.linecap=a.linecap,this.linejoin=a.linejoin,this.fog=a.fog,this}}const V4=new E2,z4=new E2,$V=new te,Df=new ep,y4=new Vo,o6=new E2,tz=new E2;class du extends Un{constructor(a=new n0,g=new np){super(),this.isLine=!0,this.type="Line",this.geometry=a,this.material=g,this.updateMorphTargets()}copy(a,g){return super.copy(a,g),this.material=Array.isArray(a.material)?a.material.slice():a.material,this.geometry=a.geometry,this}computeLineDistances(){const a=this.geometry;if(a.index===null){const g=a.attributes.position,w=[0];for(let x=1,E=g.count;x<E;x++)V4.fromBufferAttribute(g,x-1),z4.fromBufferAttribute(g,x),w[x]=w[x-1],w[x]+=V4.distanceTo(z4);a.setAttribute("lineDistance",new gi(w,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(a,g){const w=this.geometry,x=this.matrixWorld,E=a.params.Line.threshold,P=w.drawRange;if(w.boundingSphere===null&&w.computeBoundingSphere(),y4.copy(w.boundingSphere),y4.applyMatrix4(x),y4.radius+=E,a.ray.intersectsSphere(y4)===!1)return;$V.copy(x).invert(),Df.copy(a.ray).applyMatrix4($V);const O=E/((this.scale.x+this.scale.y+this.scale.z)/3),G=O*O,h=this.isLineSegments?2:1,X=w.index,K=w.attributes.position;if(X!==null){const e2=Math.max(0,P.start),l2=Math.min(X.count,P.start+P.count);for(let p2=e2,r2=l2-1;p2<r2;p2+=h){const o2=X.getX(p2),v2=X.getX(p2+1),m2=k4(this,a,Df,G,o2,v2);m2&&g.push(m2)}if(this.isLineLoop){const p2=X.getX(l2-1),r2=X.getX(e2),o2=k4(this,a,Df,G,p2,r2);o2&&g.push(o2)}}else{const e2=Math.max(0,P.start),l2=Math.min(K.count,P.start+P.count);for(let p2=e2,r2=l2-1;p2<r2;p2+=h){const o2=k4(this,a,Df,G,p2,p2+1);o2&&g.push(o2)}if(this.isLineLoop){const p2=k4(this,a,Df,G,l2-1,e2);p2&&g.push(p2)}}}updateMorphTargets(){const g=this.geometry.morphAttributes,w=Object.keys(g);if(w.length>0){const x=g[w[0]];if(x!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let E=0,P=x.length;E<P;E++){const O=x[E].name||String(E);this.morphTargetInfluences.push(0),this.morphTargetDictionary[O]=E}}}}}function k4(D,a,g,w,x,E){const P=D.geometry.attributes.position;if(V4.fromBufferAttribute(P,x),z4.fromBufferAttribute(P,E),g.distanceSqToSegment(V4,z4,o6,tz)>w)return;o6.applyMatrix4(D.matrixWorld);const G=a.ray.origin.distanceTo(o6);if(!(G<a.near||G>a.far))return{distance:G,point:tz.clone().applyMatrix4(D.matrixWorld),index:x,face:null,faceIndex:null,object:D}}const ez=new E2,nz=new E2;class lQ extends du{constructor(a,g){super(a,g),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const a=this.geometry;if(a.index===null){const g=a.attributes.position,w=[];for(let x=0,E=g.count;x<E;x+=2)ez.fromBufferAttribute(g,x),nz.fromBufferAttribute(g,x+1),w[x]=x===0?0:w[x-1],w[x+1]=w[x]+ez.distanceTo(nz);a.setAttribute("lineDistance",new gi(w,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class vh2 extends du{constructor(a,g){super(a,g),this.isLineLoop=!0,this.type="LineLoop"}}class uQ extends zr{constructor(a){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.map=a.map,this.alphaMap=a.alphaMap,this.size=a.size,this.sizeAttenuation=a.sizeAttenuation,this.fog=a.fog,this}}const iz=new te,P6=new ep,v4=new Vo,w4=new E2;class wh2 extends Un{constructor(a=new n0,g=new uQ){super(),this.isPoints=!0,this.type="Points",this.geometry=a,this.material=g,this.updateMorphTargets()}copy(a,g){return super.copy(a,g),this.material=Array.isArray(a.material)?a.material.slice():a.material,this.geometry=a.geometry,this}raycast(a,g){const w=this.geometry,x=this.matrixWorld,E=a.params.Points.threshold,P=w.drawRange;if(w.boundingSphere===null&&w.computeBoundingSphere(),v4.copy(w.boundingSphere),v4.applyMatrix4(x),v4.radius+=E,a.ray.intersectsSphere(v4)===!1)return;iz.copy(x).invert(),P6.copy(a.ray).applyMatrix4(iz);const O=E/((this.scale.x+this.scale.y+this.scale.z)/3),G=O*O,h=w.index,Z=w.attributes.position;if(h!==null){const K=Math.max(0,P.start),e2=Math.min(h.count,P.start+P.count);for(let l2=K,p2=e2;l2<p2;l2++){const r2=h.getX(l2);w4.fromBufferAttribute(Z,r2),rz(w4,r2,G,x,a,g,this)}}else{const K=Math.max(0,P.start),e2=Math.min(Z.count,P.start+P.count);for(let l2=K,p2=e2;l2<p2;l2++)w4.fromBufferAttribute(Z,l2),rz(w4,l2,G,x,a,g,this)}}updateMorphTargets(){const g=this.geometry.morphAttributes,w=Object.keys(g);if(w.length>0){const x=g[w[0]];if(x!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let E=0,P=x.length;E<P;E++){const O=x[E].name||String(E);this.morphTargetInfluences.push(0),this.morphTargetDictionary[O]=E}}}}}function rz(D,a,g,w,x,E,P){const O=P6.distanceSqToPoint(D);if(O<g){const G=new E2;P6.closestPointToPoint(D,G),G.applyMatrix4(w);const h=x.ray.origin.distanceTo(G);if(h<x.near||h>x.far)return;E.push({distance:h,distanceToRay:Math.sqrt(O),point:G,index:a,face:null,object:P})}}class yo{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(a,g){const w=this.getUtoTmapping(a);return this.getPoint(w,g)}getPoints(a=5){const g=[];for(let w=0;w<=a;w++)g.push(this.getPoint(w/a));return g}getSpacedPoints(a=5){const g=[];for(let w=0;w<=a;w++)g.push(this.getPointAt(w/a));return g}getLength(){const a=this.getLengths();return a[a.length-1]}getLengths(a=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===a+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const g=[];let w,x=this.getPoint(0),E=0;g.push(0);for(let P=1;P<=a;P++)w=this.getPoint(P/a),E+=w.distanceTo(x),g.push(E),x=w;return this.cacheArcLengths=g,g}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(a,g){const w=this.getLengths();let x=0;const E=w.length;let P;g?P=g:P=a*w[E-1];let O=0,G=E-1,h;for(;O<=G;)if(x=Math.floor(O+(G-O)/2),h=w[x]-P,h<0)O=x+1;else if(h>0)G=x-1;else{G=x;break}if(x=G,w[x]===P)return x/(E-1);const X=w[x],K=w[x+1]-X,e2=(P-X)/K;return(x+e2)/(E-1)}getTangent(a,g){let x=a-1e-4,E=a+1e-4;x<0&&(x=0),E>1&&(E=1);const P=this.getPoint(x),O=this.getPoint(E),G=g||(P.isVector2?new Lt:new E2);return G.copy(O).sub(P).normalize(),G}getTangentAt(a,g){const w=this.getUtoTmapping(a);return this.getTangent(w,g)}computeFrenetFrames(a,g){const w=new E2,x=[],E=[],P=[],O=new E2,G=new te;for(let e2=0;e2<=a;e2++){const l2=e2/a;x[e2]=this.getTangentAt(l2,new E2)}E[0]=new E2,P[0]=new E2;let h=Number.MAX_VALUE;const X=Math.abs(x[0].x),Z=Math.abs(x[0].y),K=Math.abs(x[0].z);X<=h&&(h=X,w.set(1,0,0)),Z<=h&&(h=Z,w.set(0,1,0)),K<=h&&w.set(0,0,1),O.crossVectors(x[0],w).normalize(),E[0].crossVectors(x[0],O),P[0].crossVectors(x[0],E[0]);for(let e2=1;e2<=a;e2++){if(E[e2]=E[e2-1].clone(),P[e2]=P[e2-1].clone(),O.crossVectors(x[e2-1],x[e2]),O.length()>Number.EPSILON){O.normalize();const l2=Math.acos(Mi(x[e2-1].dot(x[e2]),-1,1));E[e2].applyMatrix4(G.makeRotationAxis(O,l2))}P[e2].crossVectors(x[e2],E[e2])}if(g===!0){let e2=Math.acos(Mi(E[0].dot(E[a]),-1,1));e2/=a,x[0].dot(O.crossVectors(E[0],E[a]))>0&&(e2=-e2);for(let l2=1;l2<=a;l2++)E[l2].applyMatrix4(G.makeRotationAxis(x[l2],e2*l2)),P[l2].crossVectors(x[l2],E[l2])}return{tangents:x,normals:E,binormals:P}}clone(){return new this.constructor().copy(this)}copy(a){return this.arcLengthDivisions=a.arcLengthDivisions,this}toJSON(){const a={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return a.arcLengthDivisions=this.arcLengthDivisions,a.type=this.type,a}fromJSON(a){return this.arcLengthDivisions=a.arcLengthDivisions,this}}class oh extends yo{constructor(a=0,g=0,w=1,x=1,E=0,P=Math.PI*2,O=!1,G=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=a,this.aY=g,this.xRadius=w,this.yRadius=x,this.aStartAngle=E,this.aEndAngle=P,this.aClockwise=O,this.aRotation=G}getPoint(a,g=new Lt){const w=g,x=Math.PI*2;let E=this.aEndAngle-this.aStartAngle;const P=Math.abs(E)<Number.EPSILON;for(;E<0;)E+=x;for(;E>x;)E-=x;E<Number.EPSILON&&(P?E=0:E=x),this.aClockwise===!0&&!P&&(E===x?E=-x:E=E-x);const O=this.aStartAngle+a*E;let G=this.aX+this.xRadius*Math.cos(O),h=this.aY+this.yRadius*Math.sin(O);if(this.aRotation!==0){const X=Math.cos(this.aRotation),Z=Math.sin(this.aRotation),K=G-this.aX,e2=h-this.aY;G=K*X-e2*Z+this.aX,h=K*Z+e2*X+this.aY}return w.set(G,h)}copy(a){return super.copy(a),this.aX=a.aX,this.aY=a.aY,this.xRadius=a.xRadius,this.yRadius=a.yRadius,this.aStartAngle=a.aStartAngle,this.aEndAngle=a.aEndAngle,this.aClockwise=a.aClockwise,this.aRotation=a.aRotation,this}toJSON(){const a=super.toJSON();return a.aX=this.aX,a.aY=this.aY,a.xRadius=this.xRadius,a.yRadius=this.yRadius,a.aStartAngle=this.aStartAngle,a.aEndAngle=this.aEndAngle,a.aClockwise=this.aClockwise,a.aRotation=this.aRotation,a}fromJSON(a){return super.fromJSON(a),this.aX=a.aX,this.aY=a.aY,this.xRadius=a.xRadius,this.yRadius=a.yRadius,this.aStartAngle=a.aStartAngle,this.aEndAngle=a.aEndAngle,this.aClockwise=a.aClockwise,this.aRotation=a.aRotation,this}}class Bh2 extends oh{constructor(a,g,w,x,E,P){super(a,g,w,w,x,E,P),this.isArcCurve=!0,this.type="ArcCurve"}}function sh(){let D=0,a=0,g=0,w=0;function x(E,P,O,G){D=E,a=O,g=-3*E+3*P-2*O-G,w=2*E-2*P+O+G}return{initCatmullRom:function(E,P,O,G,h){x(P,O,h*(O-E),h*(G-P))},initNonuniformCatmullRom:function(E,P,O,G,h,X,Z){let K=(P-E)/h-(O-E)/(h+X)+(O-P)/X,e2=(O-P)/X-(G-P)/(X+Z)+(G-O)/Z;K*=X,e2*=X,x(P,O,K,e2)},calc:function(E){const P=E*E,O=P*E;return D+a*E+g*P+w*O}}}const B4=new E2,s6=new sh,l6=new sh,u6=new sh;class Sh2 extends yo{constructor(a=[],g=!1,w="centripetal",x=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=a,this.closed=g,this.curveType=w,this.tension=x}getPoint(a,g=new E2){const w=g,x=this.points,E=x.length,P=(E-(this.closed?0:1))*a;let O=Math.floor(P),G=P-O;this.closed?O+=O>0?0:(Math.floor(Math.abs(O)/E)+1)*E:G===0&&O===E-1&&(O=E-2,G=1);let h,X;this.closed||O>0?h=x[(O-1)%E]:(B4.subVectors(x[0],x[1]).add(x[0]),h=B4);const Z=x[O%E],K=x[(O+1)%E];if(this.closed||O+2<E?X=x[(O+2)%E]:(B4.subVectors(x[E-1],x[E-2]).add(x[E-1]),X=B4),this.curveType==="centripetal"||this.curveType==="chordal"){const e2=this.curveType==="chordal"?.5:.25;let l2=Math.pow(h.distanceToSquared(Z),e2),p2=Math.pow(Z.distanceToSquared(K),e2),r2=Math.pow(K.distanceToSquared(X),e2);p2<1e-4&&(p2=1),l2<1e-4&&(l2=p2),r2<1e-4&&(r2=p2),s6.initNonuniformCatmullRom(h.x,Z.x,K.x,X.x,l2,p2,r2),l6.initNonuniformCatmullRom(h.y,Z.y,K.y,X.y,l2,p2,r2),u6.initNonuniformCatmullRom(h.z,Z.z,K.z,X.z,l2,p2,r2)}else this.curveType==="catmullrom"&&(s6.initCatmullRom(h.x,Z.x,K.x,X.x,this.tension),l6.initCatmullRom(h.y,Z.y,K.y,X.y,this.tension),u6.initCatmullRom(h.z,Z.z,K.z,X.z,this.tension));return w.set(s6.calc(G),l6.calc(G),u6.calc(G)),w}copy(a){super.copy(a),this.points=[];for(let g=0,w=a.points.length;g<w;g++){const x=a.points[g];this.points.push(x.clone())}return this.closed=a.closed,this.curveType=a.curveType,this.tension=a.tension,this}toJSON(){const a=super.toJSON();a.points=[];for(let g=0,w=this.points.length;g<w;g++){const x=this.points[g];a.points.push(x.toArray())}return a.closed=this.closed,a.curveType=this.curveType,a.tension=this.tension,a}fromJSON(a){super.fromJSON(a),this.points=[];for(let g=0,w=a.points.length;g<w;g++){const x=a.points[g];this.points.push(new E2().fromArray(x))}return this.closed=a.closed,this.curveType=a.curveType,this.tension=a.tension,this}}function oz(D,a,g,w,x){const E=(w-a)*.5,P=(x-g)*.5,O=D*D,G=D*O;return(2*g-2*w+E+P)*G+(-3*g+3*w-2*E-P)*O+E*D+g}function xh2(D,a){const g=1-D;return g*g*a}function Ch2(D,a){return 2*(1-D)*D*a}function Mh2(D,a){return D*D*a}function Nf(D,a,g,w){return xh2(D,a)+Ch2(D,g)+Mh2(D,w)}function Th2(D,a){const g=1-D;return g*g*g*a}function Eh2(D,a){const g=1-D;return 3*g*g*D*a}function Rh2(D,a){return 3*(1-D)*D*D*a}function bh2(D,a){return D*D*D*a}function Uf(D,a,g,w,x){return Th2(D,a)+Eh2(D,g)+Rh2(D,w)+bh2(D,x)}class fQ extends yo{constructor(a=new Lt,g=new Lt,w=new Lt,x=new Lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=a,this.v1=g,this.v2=w,this.v3=x}getPoint(a,g=new Lt){const w=g,x=this.v0,E=this.v1,P=this.v2,O=this.v3;return w.set(Uf(a,x.x,E.x,P.x,O.x),Uf(a,x.y,E.y,P.y,O.y)),w}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this.v3.copy(a.v3),this}toJSON(){const a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a.v3=this.v3.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this.v3.fromArray(a.v3),this}}class Dh2 extends yo{constructor(a=new E2,g=new E2,w=new E2,x=new E2){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=a,this.v1=g,this.v2=w,this.v3=x}getPoint(a,g=new E2){const w=g,x=this.v0,E=this.v1,P=this.v2,O=this.v3;return w.set(Uf(a,x.x,E.x,P.x,O.x),Uf(a,x.y,E.y,P.y,O.y),Uf(a,x.z,E.z,P.z,O.z)),w}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this.v3.copy(a.v3),this}toJSON(){const a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a.v3=this.v3.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this.v3.fromArray(a.v3),this}}class pQ extends yo{constructor(a=new Lt,g=new Lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=a,this.v2=g}getPoint(a,g=new Lt){const w=g;return a===1?w.copy(this.v2):(w.copy(this.v2).sub(this.v1),w.multiplyScalar(a).add(this.v1)),w}getPointAt(a,g){return this.getPoint(a,g)}getTangent(a,g=new Lt){return g.subVectors(this.v2,this.v1).normalize()}getTangentAt(a,g){return this.getTangent(a,g)}copy(a){return super.copy(a),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){const a=super.toJSON();return a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class Ih2 extends yo{constructor(a=new E2,g=new E2){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=a,this.v2=g}getPoint(a,g=new E2){const w=g;return a===1?w.copy(this.v2):(w.copy(this.v2).sub(this.v1),w.multiplyScalar(a).add(this.v1)),w}getPointAt(a,g){return this.getPoint(a,g)}getTangent(a,g=new E2){return g.subVectors(this.v2,this.v1).normalize()}getTangentAt(a,g){return this.getTangent(a,g)}copy(a){return super.copy(a),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){const a=super.toJSON();return a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class cQ extends yo{constructor(a=new Lt,g=new Lt,w=new Lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=a,this.v1=g,this.v2=w}getPoint(a,g=new Lt){const w=g,x=this.v0,E=this.v1,P=this.v2;return w.set(Nf(a,x.x,E.x,P.x),Nf(a,x.y,E.y,P.y)),w}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){const a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class Ph2 extends yo{constructor(a=new E2,g=new E2,w=new E2){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=a,this.v1=g,this.v2=w}getPoint(a,g=new E2){const w=g,x=this.v0,E=this.v1,P=this.v2;return w.set(Nf(a,x.x,E.x,P.x),Nf(a,x.y,E.y,P.y),Nf(a,x.z,E.z,P.z)),w}copy(a){return super.copy(a),this.v0.copy(a.v0),this.v1.copy(a.v1),this.v2.copy(a.v2),this}toJSON(){const a=super.toJSON();return a.v0=this.v0.toArray(),a.v1=this.v1.toArray(),a.v2=this.v2.toArray(),a}fromJSON(a){return super.fromJSON(a),this.v0.fromArray(a.v0),this.v1.fromArray(a.v1),this.v2.fromArray(a.v2),this}}class _Q extends yo{constructor(a=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=a}getPoint(a,g=new Lt){const w=g,x=this.points,E=(x.length-1)*a,P=Math.floor(E),O=E-P,G=x[P===0?P:P-1],h=x[P],X=x[P>x.length-2?x.length-1:P+1],Z=x[P>x.length-3?x.length-1:P+2];return w.set(oz(O,G.x,h.x,X.x,Z.x),oz(O,G.y,h.y,X.y,Z.y)),w}copy(a){super.copy(a),this.points=[];for(let g=0,w=a.points.length;g<w;g++){const x=a.points[g];this.points.push(x.clone())}return this}toJSON(){const a=super.toJSON();a.points=[];for(let g=0,w=this.points.length;g<w;g++){const x=this.points[g];a.points.push(x.toArray())}return a}fromJSON(a){super.fromJSON(a),this.points=[];for(let g=0,w=a.points.length;g<w;g++){const x=a.points[g];this.points.push(new Lt().fromArray(x))}return this}}var sz=Object.freeze({__proto__:null,ArcCurve:Bh2,CatmullRomCurve3:Sh2,CubicBezierCurve:fQ,CubicBezierCurve3:Dh2,EllipseCurve:oh,LineCurve:pQ,LineCurve3:Ih2,QuadraticBezierCurve:cQ,QuadraticBezierCurve3:Ph2,SplineCurve:_Q});class Lh2 extends yo{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(a){this.curves.push(a)}closePath(){const a=this.curves[0].getPoint(0),g=this.curves[this.curves.length-1].getPoint(1);if(!a.equals(g)){const w=a.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new sz[w](g,a))}return this}getPoint(a,g){const w=a*this.getLength(),x=this.getCurveLengths();let E=0;for(;E<x.length;){if(x[E]>=w){const P=x[E]-w,O=this.curves[E],G=O.getLength(),h=G===0?0:1-P/G;return O.getPointAt(h,g)}E++}return null}getLength(){const a=this.getCurveLengths();return a[a.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const a=[];let g=0;for(let w=0,x=this.curves.length;w<x;w++)g+=this.curves[w].getLength(),a.push(g);return this.cacheLengths=a,a}getSpacedPoints(a=40){const g=[];for(let w=0;w<=a;w++)g.push(this.getPoint(w/a));return this.autoClose&&g.push(g[0]),g}getPoints(a=12){const g=[];let w;for(let x=0,E=this.curves;x<E.length;x++){const P=E[x],O=P.isEllipseCurve?a*2:P.isLineCurve||P.isLineCurve3?1:P.isSplineCurve?a*P.points.length:a,G=P.getPoints(O);for(let h=0;h<G.length;h++){const X=G[h];w&&w.equals(X)||(g.push(X),w=X)}}return this.autoClose&&g.length>1&&!g[g.length-1].equals(g[0])&&g.push(g[0]),g}copy(a){super.copy(a),this.curves=[];for(let g=0,w=a.curves.length;g<w;g++){const x=a.curves[g];this.curves.push(x.clone())}return this.autoClose=a.autoClose,this}toJSON(){const a=super.toJSON();a.autoClose=this.autoClose,a.curves=[];for(let g=0,w=this.curves.length;g<w;g++){const x=this.curves[g];a.curves.push(x.toJSON())}return a}fromJSON(a){super.fromJSON(a),this.autoClose=a.autoClose,this.curves=[];for(let g=0,w=a.curves.length;g<w;g++){const x=a.curves[g];this.curves.push(new sz[x.type]().fromJSON(x))}return this}}class Fh2 extends Lh2{constructor(a){super(),this.type="Path",this.currentPoint=new Lt,a&&this.setFromPoints(a)}setFromPoints(a){this.moveTo(a[0].x,a[0].y);for(let g=1,w=a.length;g<w;g++)this.lineTo(a[g].x,a[g].y);return this}moveTo(a,g){return this.currentPoint.set(a,g),this}lineTo(a,g){const w=new pQ(this.currentPoint.clone(),new Lt(a,g));return this.curves.push(w),this.currentPoint.set(a,g),this}quadraticCurveTo(a,g,w,x){const E=new cQ(this.currentPoint.clone(),new Lt(a,g),new Lt(w,x));return this.curves.push(E),this.currentPoint.set(w,x),this}bezierCurveTo(a,g,w,x,E,P){const O=new fQ(this.currentPoint.clone(),new Lt(a,g),new Lt(w,x),new Lt(E,P));return this.curves.push(O),this.currentPoint.set(E,P),this}splineThru(a){const g=[this.currentPoint.clone()].concat(a),w=new _Q(g);return this.curves.push(w),this.currentPoint.copy(a[a.length-1]),this}arc(a,g,w,x,E,P){const O=this.currentPoint.x,G=this.currentPoint.y;return this.absarc(a+O,g+G,w,x,E,P),this}absarc(a,g,w,x,E,P){return this.absellipse(a,g,w,w,x,E,P),this}ellipse(a,g,w,x,E,P,O,G){const h=this.currentPoint.x,X=this.currentPoint.y;return this.absellipse(a+h,g+X,w,x,E,P,O,G),this}absellipse(a,g,w,x,E,P,O,G){const h=new oh(a,g,w,x,E,P,O,G);if(this.curves.length>0){const Z=h.getPoint(0);Z.equals(this.currentPoint)||this.lineTo(Z.x,Z.y)}this.curves.push(h);const X=h.getPoint(1);return this.currentPoint.copy(X),this}copy(a){return super.copy(a),this.currentPoint.copy(a.currentPoint),this}toJSON(){const a=super.toJSON();return a.currentPoint=this.currentPoint.toArray(),a}fromJSON(a){return super.fromJSON(a),this.currentPoint.fromArray(a.currentPoint),this}}class lh extends n0{constructor(a=[new Lt(0,-.5),new Lt(.5,0),new Lt(0,.5)],g=12,w=0,x=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:a,segments:g,phiStart:w,phiLength:x},g=Math.floor(g),x=Mi(x,0,Math.PI*2);const E=[],P=[],O=[],G=[],h=[],X=1/g,Z=new E2,K=new Lt,e2=new E2,l2=new E2,p2=new E2;let r2=0,o2=0;for(let v2=0;v2<=a.length-1;v2++)switch(v2){case 0:r2=a[v2+1].x-a[v2].x,o2=a[v2+1].y-a[v2].y,e2.x=o2*1,e2.y=-r2,e2.z=o2*0,p2.copy(e2),e2.normalize(),G.push(e2.x,e2.y,e2.z);break;case a.length-1:G.push(p2.x,p2.y,p2.z);break;default:r2=a[v2+1].x-a[v2].x,o2=a[v2+1].y-a[v2].y,e2.x=o2*1,e2.y=-r2,e2.z=o2*0,l2.copy(e2),e2.x+=p2.x,e2.y+=p2.y,e2.z+=p2.z,e2.normalize(),G.push(e2.x,e2.y,e2.z),p2.copy(l2)}for(let v2=0;v2<=g;v2++){const m2=w+v2*X*x,k2=Math.sin(m2),j2=Math.cos(m2);for(let b2=0;b2<=a.length-1;b2++){Z.x=a[b2].x*k2,Z.y=a[b2].y,Z.z=a[b2].x*j2,P.push(Z.x,Z.y,Z.z),K.x=v2/g,K.y=b2/(a.length-1),O.push(K.x,K.y);const D2=G[3*b2+0]*k2,N2=G[3*b2+1],B2=G[3*b2+0]*j2;h.push(D2,N2,B2)}}for(let v2=0;v2<g;v2++)for(let m2=0;m2<a.length-1;m2++){const k2=m2+v2*a.length,j2=k2,b2=k2+a.length,D2=k2+a.length+1,N2=k2+1;E.push(j2,b2,N2),E.push(D2,N2,b2)}this.setIndex(E),this.setAttribute("position",new gi(P,3)),this.setAttribute("uv",new gi(O,2)),this.setAttribute("normal",new gi(h,3))}copy(a){return super.copy(a),this.parameters=Object.assign({},a.parameters),this}static fromJSON(a){return new lh(a.points,a.segments,a.phiStart,a.phiLength)}}class Q4 extends lh{constructor(a=1,g=1,w=4,x=8){const E=new Fh2;E.absarc(0,-g/2,a,Math.PI*1.5,0),E.absarc(0,g/2,a,0,Math.PI*.5),super(E.getPoints(w),x),this.type="CapsuleGeometry",this.parameters={radius:a,length:g,capSegments:w,radialSegments:x}}static fromJSON(a){return new Q4(a.radius,a.length,a.capSegments,a.radialSegments)}}const Oh2={triangulate:function(D,a,g=2){const w=a&&a.length,x=w?a[0]*g:D.length;let E=aQ(D,0,x,g,!0);const P=[];if(!E||E.next===E.prev)return P;let O,G,h,X,Z,K,e2;if(w&&(E=Wh2(D,a,E,g)),D.length>80*g){O=h=D[0],G=X=D[1];for(let l2=g;l2<x;l2+=g)Z=D[l2],K=D[l2+1],Z<O&&(O=Z),K<G&&(G=K),Z>h&&(h=Z),K>X&&(X=K);e2=Math.max(h-O,X-G),e2=e2!==0?32767/e2:0}return Yf(E,P,g,O,G,e2,0),P}};function aQ(D,a,g,w,x){let E,P;if(x===$h2(D,a,g,w)>0)for(E=a;E<g;E+=w)P=lz(E,D[E],D[E+1],P);else for(E=g-w;E>=a;E-=w)P=lz(E,D[E],D[E+1],P);return P&&i_(P,P.next)&&(Zf(P),P=P.next),P}function Z1(D,a){if(!D)return D;a||(a=D);let g=D,w;do if(w=!1,!g.steiner&&(i_(g,g.next)||ci(g.prev,g,g.next)===0)){if(Zf(g),g=a=g.prev,g===g.next)break;w=!0}else g=g.next;while(w||g!==a);return a}function Yf(D,a,g,w,x,E,P){if(!D)return;!P&&E&&Yh2(D,w,x,E);let O=D,G,h;for(;D.prev!==D.next;){if(G=D.prev,h=D.next,E?Nh2(D,w,x,E):jh2(D)){a.push(G.i/g|0),a.push(D.i/g|0),a.push(h.i/g|0),Zf(D),D=h.next,O=h.next;continue}if(D=h,D===O){P?P===1?(D=Uh2(Z1(D),a,g),Yf(D,a,g,w,x,E,2)):P===2&&Gh2(D,a,g,w,x,E):Yf(Z1(D),a,g,w,x,E,1);break}}}function jh2(D){const a=D.prev,g=D,w=D.next;if(ci(a,g,w)>=0)return!1;const x=a.x,E=g.x,P=w.x,O=a.y,G=g.y,h=w.y,X=x<E?x<P?x:P:E<P?E:P,Z=O<G?O<h?O:h:G<h?G:h,K=x>E?x>P?x:P:E>P?E:P,e2=O>G?O>h?O:h:G>h?G:h;let l2=w.next;for(;l2!==a;){if(l2.x>=X&&l2.x<=K&&l2.y>=Z&&l2.y<=e2&&nu(x,O,E,G,P,h,l2.x,l2.y)&&ci(l2.prev,l2,l2.next)>=0)return!1;l2=l2.next}return!0}function Nh2(D,a,g,w){const x=D.prev,E=D,P=D.next;if(ci(x,E,P)>=0)return!1;const O=x.x,G=E.x,h=P.x,X=x.y,Z=E.y,K=P.y,e2=O<G?O<h?O:h:G<h?G:h,l2=X<Z?X<K?X:K:Z<K?Z:K,p2=O>G?O>h?O:h:G>h?G:h,r2=X>Z?X>K?X:K:Z>K?Z:K,o2=L6(e2,l2,a,g,w),v2=L6(p2,r2,a,g,w);let m2=D.prevZ,k2=D.nextZ;for(;m2&&m2.z>=o2&&k2&&k2.z<=v2;){if(m2.x>=e2&&m2.x<=p2&&m2.y>=l2&&m2.y<=r2&&m2!==x&&m2!==P&&nu(O,X,G,Z,h,K,m2.x,m2.y)&&ci(m2.prev,m2,m2.next)>=0||(m2=m2.prevZ,k2.x>=e2&&k2.x<=p2&&k2.y>=l2&&k2.y<=r2&&k2!==x&&k2!==P&&nu(O,X,G,Z,h,K,k2.x,k2.y)&&ci(k2.prev,k2,k2.next)>=0))return!1;k2=k2.nextZ}for(;m2&&m2.z>=o2;){if(m2.x>=e2&&m2.x<=p2&&m2.y>=l2&&m2.y<=r2&&m2!==x&&m2!==P&&nu(O,X,G,Z,h,K,m2.x,m2.y)&&ci(m2.prev,m2,m2.next)>=0)return!1;m2=m2.prevZ}for(;k2&&k2.z<=v2;){if(k2.x>=e2&&k2.x<=p2&&k2.y>=l2&&k2.y<=r2&&k2!==x&&k2!==P&&nu(O,X,G,Z,h,K,k2.x,k2.y)&&ci(k2.prev,k2,k2.next)>=0)return!1;k2=k2.nextZ}return!0}function Uh2(D,a,g){let w=D;do{const x=w.prev,E=w.next.next;!i_(x,E)&&hQ(x,w,w.next,E)&&Xf(x,E)&&Xf(E,x)&&(a.push(x.i/g|0),a.push(w.i/g|0),a.push(E.i/g|0),Zf(w),Zf(w.next),w=D=E),w=w.next}while(w!==D);return Z1(w)}function Gh2(D,a,g,w,x,E){let P=D;do{let O=P.next.next;for(;O!==P.prev;){if(P.i!==O.i&&qh2(P,O)){let G=mQ(P,O);P=Z1(P,P.next),G=Z1(G,G.next),Yf(P,a,g,w,x,E,0),Yf(G,a,g,w,x,E,0);return}O=O.next}P=P.next}while(P!==D)}function Wh2(D,a,g,w){const x=[];let E,P,O,G,h;for(E=0,P=a.length;E<P;E++)O=a[E]*w,G=E<P-1?a[E+1]*w:D.length,h=aQ(D,O,G,w,!1),h===h.next&&(h.steiner=!0),x.push(Zh2(h));for(x.sort(Hh2),E=0;E<x.length;E++)g=Vh2(x[E],g);return g}function Hh2(D,a){return D.x-a.x}function Vh2(D,a){const g=zh2(D,a);if(!g)return a;const w=mQ(g,D);return Z1(w,w.next),Z1(g,g.next)}function zh2(D,a){let g=a,w=-1/0,x;const E=D.x,P=D.y;do{if(P<=g.y&&P>=g.next.y&&g.next.y!==g.y){const K=g.x+(P-g.y)*(g.next.x-g.x)/(g.next.y-g.y);if(K<=E&&K>w&&(w=K,x=g.x<g.next.x?g:g.next,K===E))return x}g=g.next}while(g!==a);if(!x)return null;const O=x,G=x.x,h=x.y;let X=1/0,Z;g=x;do E>=g.x&&g.x>=G&&E!==g.x&&nu(P<h?E:w,P,G,h,P<h?w:E,P,g.x,g.y)&&(Z=Math.abs(P-g.y)/(E-g.x),Xf(g,D)&&(Z<X||Z===X&&(g.x>x.x||g.x===x.x&&Qh2(x,g)))&&(x=g,X=Z)),g=g.next;while(g!==O);return x}function Qh2(D,a){return ci(D.prev,D,a.prev)<0&&ci(a.next,D,D.next)<0}function Yh2(D,a,g,w){let x=D;do x.z===0&&(x.z=L6(x.x,x.y,a,g,w)),x.prevZ=x.prev,x.nextZ=x.next,x=x.next;while(x!==D);x.prevZ.nextZ=null,x.prevZ=null,Xh2(x)}function Xh2(D){let a,g,w,x,E,P,O,G,h=1;do{for(g=D,D=null,E=null,P=0;g;){for(P++,w=g,O=0,a=0;a<h&&(O++,w=w.nextZ,!!w);a++);for(G=h;O>0||G>0&&w;)O!==0&&(G===0||!w||g.z<=w.z)?(x=g,g=g.nextZ,O--):(x=w,w=w.nextZ,G--),E?E.nextZ=x:D=x,x.prevZ=E,E=x;g=w}E.nextZ=null,h*=2}while(P>1);return D}function L6(D,a,g,w,x){return D=(D-g)*x|0,a=(a-w)*x|0,D=(D|D<<8)&16711935,D=(D|D<<4)&252645135,D=(D|D<<2)&858993459,D=(D|D<<1)&1431655765,a=(a|a<<8)&16711935,a=(a|a<<4)&252645135,a=(a|a<<2)&858993459,a=(a|a<<1)&1431655765,D|a<<1}function Zh2(D){let a=D,g=D;do(a.x<g.x||a.x===g.x&&a.y<g.y)&&(g=a),a=a.next;while(a!==D);return g}function nu(D,a,g,w,x,E,P,O){return(x-P)*(a-O)>=(D-P)*(E-O)&&(D-P)*(w-O)>=(g-P)*(a-O)&&(g-P)*(E-O)>=(x-P)*(w-O)}function qh2(D,a){return D.next.i!==a.i&&D.prev.i!==a.i&&!Jh2(D,a)&&(Xf(D,a)&&Xf(a,D)&&Kh2(D,a)&&(ci(D.prev,D,a.prev)||ci(D,a.prev,a))||i_(D,a)&&ci(D.prev,D,D.next)>0&&ci(a.prev,a,a.next)>0)}function ci(D,a,g){return(a.y-D.y)*(g.x-a.x)-(a.x-D.x)*(g.y-a.y)}function i_(D,a){return D.x===a.x&&D.y===a.y}function hQ(D,a,g,w){const x=x4(ci(D,a,g)),E=x4(ci(D,a,w)),P=x4(ci(g,w,D)),O=x4(ci(g,w,a));return!!(x!==E&&P!==O||x===0&&S4(D,g,a)||E===0&&S4(D,w,a)||P===0&&S4(g,D,w)||O===0&&S4(g,a,w))}function S4(D,a,g){return a.x<=Math.max(D.x,g.x)&&a.x>=Math.min(D.x,g.x)&&a.y<=Math.max(D.y,g.y)&&a.y>=Math.min(D.y,g.y)}function x4(D){return D>0?1:D<0?-1:0}function Jh2(D,a){let g=D;do{if(g.i!==D.i&&g.next.i!==D.i&&g.i!==a.i&&g.next.i!==a.i&&hQ(g,g.next,D,a))return!0;g=g.next}while(g!==D);return!1}function Xf(D,a){return ci(D.prev,D,D.next)<0?ci(D,a,D.next)>=0&&ci(D,D.prev,a)>=0:ci(D,a,D.prev)<0||ci(D,D.next,a)<0}function Kh2(D,a){let g=D,w=!1;const x=(D.x+a.x)/2,E=(D.y+a.y)/2;do g.y>E!=g.next.y>E&&g.next.y!==g.y&&x<(g.next.x-g.x)*(E-g.y)/(g.next.y-g.y)+g.x&&(w=!w),g=g.next;while(g!==D);return w}function mQ(D,a){const g=new F6(D.i,D.x,D.y),w=new F6(a.i,a.x,a.y),x=D.next,E=a.prev;return D.next=a,a.prev=D,g.next=x,x.prev=g,w.next=g,g.prev=w,E.next=w,w.prev=E,w}function lz(D,a,g,w){const x=new F6(D,a,g);return w?(x.next=w.next,x.prev=w,w.next.prev=x,w.next=x):(x.prev=x,x.next=x),x}function Zf(D){D.next.prev=D.prev,D.prev.next=D.next,D.prevZ&&(D.prevZ.nextZ=D.nextZ),D.nextZ&&(D.nextZ.prevZ=D.prevZ)}function F6(D,a,g){this.i=D,this.x=a,this.y=g,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function $h2(D,a,g,w){let x=0;for(let E=a,P=g-w;E<g;E+=w)x+=(D[P]-D[E])*(D[E+1]+D[P+1]),P=E;return x}class uh{static area(a){const g=a.length;let w=0;for(let x=g-1,E=0;E<g;x=E++)w+=a[x].x*a[E].y-a[E].x*a[x].y;return w*.5}static isClockWise(a){return uh.area(a)<0}static triangulateShape(a,g){const w=[],x=[],E=[];uz(a),fz(w,a);let P=a.length;g.forEach(uz);for(let G=0;G<g.length;G++)x.push(P),P+=g[G].length,fz(w,g[G]);const O=Oh2.triangulate(w,x);for(let G=0;G<O.length;G+=3)E.push(O.slice(G,G+3));return E}}function uz(D){const a=D.length;a>2&&D[a-1].equals(D[0])&&D.pop()}function fz(D,a){for(let g=0;g<a.length;g++)D.push(a[g].x),D.push(a[g].y)}class qf extends zr{constructor(a){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=J4,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.defines={STANDARD:""},this.color.copy(a.color),this.roughness=a.roughness,this.metalness=a.metalness,this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.emissive.copy(a.emissive),this.emissiveMap=a.emissiveMap,this.emissiveIntensity=a.emissiveIntensity,this.bumpMap=a.bumpMap,this.bumpScale=a.bumpScale,this.normalMap=a.normalMap,this.normalMapType=a.normalMapType,this.normalScale.copy(a.normalScale),this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.roughnessMap=a.roughnessMap,this.metalnessMap=a.metalnessMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.envMapRotation.copy(a.envMapRotation),this.envMapIntensity=a.envMapIntensity,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.flatShading=a.flatShading,this.fog=a.fog,this}}class zo extends qf{constructor(a){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mi(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(g){this.ior=(1+.4*g)/(1-.4*g)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ce(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ce(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ce(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(a)}get anisotropy(){return this._anisotropy}set anisotropy(a){this._anisotropy>0!=a>0&&this.version++,this._anisotropy=a}get clearcoat(){return this._clearcoat}set clearcoat(a){this._clearcoat>0!=a>0&&this.version++,this._clearcoat=a}get iridescence(){return this._iridescence}set iridescence(a){this._iridescence>0!=a>0&&this.version++,this._iridescence=a}get dispersion(){return this._dispersion}set dispersion(a){this._dispersion>0!=a>0&&this.version++,this._dispersion=a}get sheen(){return this._sheen}set sheen(a){this._sheen>0!=a>0&&this.version++,this._sheen=a}get transmission(){return this._transmission}set transmission(a){this._transmission>0!=a>0&&this.version++,this._transmission=a}copy(a){return super.copy(a),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=a.anisotropy,this.anisotropyRotation=a.anisotropyRotation,this.anisotropyMap=a.anisotropyMap,this.clearcoat=a.clearcoat,this.clearcoatMap=a.clearcoatMap,this.clearcoatRoughness=a.clearcoatRoughness,this.clearcoatRoughnessMap=a.clearcoatRoughnessMap,this.clearcoatNormalMap=a.clearcoatNormalMap,this.clearcoatNormalScale.copy(a.clearcoatNormalScale),this.dispersion=a.dispersion,this.ior=a.ior,this.iridescence=a.iridescence,this.iridescenceMap=a.iridescenceMap,this.iridescenceIOR=a.iridescenceIOR,this.iridescenceThicknessRange=[...a.iridescenceThicknessRange],this.iridescenceThicknessMap=a.iridescenceThicknessMap,this.sheen=a.sheen,this.sheenColor.copy(a.sheenColor),this.sheenColorMap=a.sheenColorMap,this.sheenRoughness=a.sheenRoughness,this.sheenRoughnessMap=a.sheenRoughnessMap,this.transmission=a.transmission,this.transmissionMap=a.transmissionMap,this.thickness=a.thickness,this.thicknessMap=a.thicknessMap,this.attenuationDistance=a.attenuationDistance,this.attenuationColor.copy(a.attenuationColor),this.specularIntensity=a.specularIntensity,this.specularIntensityMap=a.specularIntensityMap,this.specularColor.copy(a.specularColor),this.specularColorMap=a.specularColorMap,this}}class f6 extends zr{constructor(a){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ce(16777215),this.specular=new ce(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=J4,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Z4,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.specular.copy(a.specular),this.shininess=a.shininess,this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.emissive.copy(a.emissive),this.emissiveMap=a.emissiveMap,this.emissiveIntensity=a.emissiveIntensity,this.bumpMap=a.bumpMap,this.bumpScale=a.bumpScale,this.normalMap=a.normalMap,this.normalMapType=a.normalMapType,this.normalScale.copy(a.normalScale),this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.specularMap=a.specularMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.envMapRotation.copy(a.envMapRotation),this.combine=a.combine,this.reflectivity=a.reflectivity,this.refractionRatio=a.refractionRatio,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.flatShading=a.flatShading,this.fog=a.fog,this}}class tm2 extends zr{constructor(a){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=J4,this.normalScale=new Lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=Z4,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(a)}copy(a){return super.copy(a),this.color.copy(a.color),this.map=a.map,this.lightMap=a.lightMap,this.lightMapIntensity=a.lightMapIntensity,this.aoMap=a.aoMap,this.aoMapIntensity=a.aoMapIntensity,this.emissive.copy(a.emissive),this.emissiveMap=a.emissiveMap,this.emissiveIntensity=a.emissiveIntensity,this.bumpMap=a.bumpMap,this.bumpScale=a.bumpScale,this.normalMap=a.normalMap,this.normalMapType=a.normalMapType,this.normalScale.copy(a.normalScale),this.displacementMap=a.displacementMap,this.displacementScale=a.displacementScale,this.displacementBias=a.displacementBias,this.specularMap=a.specularMap,this.alphaMap=a.alphaMap,this.envMap=a.envMap,this.envMapRotation.copy(a.envMapRotation),this.combine=a.combine,this.reflectivity=a.reflectivity,this.refractionRatio=a.refractionRatio,this.wireframe=a.wireframe,this.wireframeLinewidth=a.wireframeLinewidth,this.wireframeLinecap=a.wireframeLinecap,this.wireframeLinejoin=a.wireframeLinejoin,this.flatShading=a.flatShading,this.fog=a.fog,this}}function C4(D,a,g){return!D||!g&&D.constructor===a?D:typeof a.BYTES_PER_ELEMENT=="number"?new a(D):Array.prototype.slice.call(D)}function em2(D){return ArrayBuffer.isView(D)&&!(D instanceof DataView)}function nm2(D){function a(x,E){return D[x]-D[E]}const g=D.length,w=new Array(g);for(let x=0;x!==g;++x)w[x]=x;return w.sort(a),w}function pz(D,a,g){const w=D.length,x=new D.constructor(w);for(let E=0,P=0;P!==w;++E){const O=g[E]*a;for(let G=0;G!==a;++G)x[P++]=D[O+G]}return x}function dQ(D,a,g,w){let x=1,E=D[0];for(;E!==void 0&&E[w]===void 0;)E=D[x++];if(E===void 0)return;let P=E[w];if(P!==void 0)if(Array.isArray(P))do P=E[w],P!==void 0&&(a.push(E.time),g.push.apply(g,P)),E=D[x++];while(E!==void 0);else if(P.toArray!==void 0)do P=E[w],P!==void 0&&(a.push(E.time),P.toArray(g,g.length)),E=D[x++];while(E!==void 0);else do P=E[w],P!==void 0&&(a.push(E.time),g.push(P)),E=D[x++];while(E!==void 0)}class ip{constructor(a,g,w,x){this.parameterPositions=a,this._cachedIndex=0,this.resultBuffer=x!==void 0?x:new g.constructor(w),this.sampleValues=g,this.valueSize=w,this.settings=null,this.DefaultSettings_={}}evaluate(a){const g=this.parameterPositions;let w=this._cachedIndex,x=g[w],E=g[w-1];t:{e:{let P;n:{i:if(!(a<x)){for(let O=w+2;;){if(x===void 0){if(a<E)break i;return w=g.length,this._cachedIndex=w,this.copySampleValue_(w-1)}if(w===O)break;if(E=x,x=g[++w],a<x)break e}P=g.length;break n}if(!(a>=E)){const O=g[1];a<O&&(w=2,E=O);for(let G=w-2;;){if(E===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(w===G)break;if(x=E,E=g[--w-1],a>=E)break e}P=w,w=0;break n}break t}for(;w<P;){const O=w+P>>>1;a<g[O]?P=O:w=O+1}if(x=g[w],E=g[w-1],E===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(x===void 0)return w=g.length,this._cachedIndex=w,this.copySampleValue_(w-1)}this._cachedIndex=w,this.intervalChanged_(w,E,x)}return this.interpolate_(w,E,a,x)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(a){const g=this.resultBuffer,w=this.sampleValues,x=this.valueSize,E=a*x;for(let P=0;P!==x;++P)g[P]=w[E+P];return g}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class im2 extends ip{constructor(a,g,w,x){super(a,g,w,x),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:$l,endingEnd:$l}}intervalChanged_(a,g,w){const x=this.parameterPositions;let E=a-2,P=a+1,O=x[E],G=x[P];if(O===void 0)switch(this.getSettings_().endingStart){case tu:E=a,O=2*g-w;break;case j4:E=x.length-2,O=g+x[E]-x[E+1];break;default:E=a,O=w}if(G===void 0)switch(this.getSettings_().endingEnd){case tu:P=a,G=2*w-g;break;case j4:P=1,G=w+x[1]-x[0];break;default:P=a-1,G=g}const h=(w-g)*.5,X=this.valueSize;this._weightPrev=h/(g-O),this._weightNext=h/(G-w),this._offsetPrev=E*X,this._offsetNext=P*X}interpolate_(a,g,w,x){const E=this.resultBuffer,P=this.sampleValues,O=this.valueSize,G=a*O,h=G-O,X=this._offsetPrev,Z=this._offsetNext,K=this._weightPrev,e2=this._weightNext,l2=(w-g)/(x-g),p2=l2*l2,r2=p2*l2,o2=-K*r2+2*K*p2-K*l2,v2=(1+K)*r2+(-1.5-2*K)*p2+(-.5+K)*l2+1,m2=(-1-e2)*r2+(1.5+e2)*p2+.5*l2,k2=e2*r2-e2*p2;for(let j2=0;j2!==O;++j2)E[j2]=o2*P[X+j2]+v2*P[h+j2]+m2*P[G+j2]+k2*P[Z+j2];return E}}class AQ extends ip{constructor(a,g,w,x){super(a,g,w,x)}interpolate_(a,g,w,x){const E=this.resultBuffer,P=this.sampleValues,O=this.valueSize,G=a*O,h=G-O,X=(w-g)/(x-g),Z=1-X;for(let K=0;K!==O;++K)E[K]=P[h+K]*Z+P[G+K]*X;return E}}class rm2 extends ip{constructor(a,g,w,x){super(a,g,w,x)}interpolate_(a){return this.copySampleValue_(a-1)}}class Qo{constructor(a,g,w,x){if(a===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(g===void 0||g.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+a);this.name=a,this.times=C4(g,this.TimeBufferType),this.values=C4(w,this.ValueBufferType),this.setInterpolation(x||this.DefaultInterpolation)}static toJSON(a){const g=a.constructor;let w;if(g.toJSON!==this.toJSON)w=g.toJSON(a);else{w={name:a.name,times:C4(a.times,Array),values:C4(a.values,Array)};const x=a.getInterpolation();x!==a.DefaultInterpolation&&(w.interpolation=x)}return w.type=a.ValueTypeName,w}InterpolantFactoryMethodDiscrete(a){return new rm2(this.times,this.values,this.getValueSize(),a)}InterpolantFactoryMethodLinear(a){return new AQ(this.times,this.values,this.getValueSize(),a)}InterpolantFactoryMethodSmooth(a){return new im2(this.times,this.values,this.getValueSize(),a)}setInterpolation(a){let g;switch(a){case zf:g=this.InterpolantFactoryMethodDiscrete;break;case au:g=this.InterpolantFactoryMethodLinear;break;case ba:g=this.InterpolantFactoryMethodSmooth;break}if(g===void 0){const w="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(a!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(w);return console.warn("THREE.KeyframeTrack:",w),this}return this.createInterpolant=g,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return zf;case this.InterpolantFactoryMethodLinear:return au;case this.InterpolantFactoryMethodSmooth:return ba}}getValueSize(){return this.values.length/this.times.length}shift(a){if(a!==0){const g=this.times;for(let w=0,x=g.length;w!==x;++w)g[w]+=a}return this}scale(a){if(a!==1){const g=this.times;for(let w=0,x=g.length;w!==x;++w)g[w]*=a}return this}trim(a,g){const w=this.times,x=w.length;let E=0,P=x-1;for(;E!==x&&w[E]<a;)++E;for(;P!==-1&&w[P]>g;)--P;if(++P,E!==0||P!==x){E>=P&&(P=Math.max(P,1),E=P-1);const O=this.getValueSize();this.times=w.slice(E,P),this.values=this.values.slice(E*O,P*O)}return this}validate(){let a=!0;const g=this.getValueSize();g-Math.floor(g)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),a=!1);const w=this.times,x=this.values,E=w.length;E===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),a=!1);let P=null;for(let O=0;O!==E;O++){const G=w[O];if(typeof G=="number"&&isNaN(G)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,O,G),a=!1;break}if(P!==null&&P>G){console.error("THREE.KeyframeTrack: Out of order keys.",this,O,G,P),a=!1;break}P=G}if(x!==void 0&&em2(x))for(let O=0,G=x.length;O!==G;++O){const h=x[O];if(isNaN(h)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,O,h),a=!1;break}}return a}optimize(){const a=this.times.slice(),g=this.values.slice(),w=this.getValueSize(),x=this.getInterpolation()===ba,E=a.length-1;let P=1;for(let O=1;O<E;++O){let G=!1;const h=a[O],X=a[O+1];if(h!==X&&(O!==1||h!==a[0]))if(x)G=!0;else{const Z=O*w,K=Z-w,e2=Z+w;for(let l2=0;l2!==w;++l2){const p2=g[Z+l2];if(p2!==g[K+l2]||p2!==g[e2+l2]){G=!0;break}}}if(G){if(O!==P){a[P]=a[O];const Z=O*w,K=P*w;for(let e2=0;e2!==w;++e2)g[K+e2]=g[Z+e2]}++P}}if(E>0){a[P]=a[E];for(let O=E*w,G=P*w,h=0;h!==w;++h)g[G+h]=g[O+h];++P}return P!==a.length?(this.times=a.slice(0,P),this.values=g.slice(0,P*w)):(this.times=a,this.values=g),this}clone(){const a=this.times.slice(),g=this.values.slice(),w=this.constructor,x=new w(this.name,a,g);return x.createInterpolant=this.createInterpolant,x}}Qo.prototype.TimeBufferType=Float32Array;Qo.prototype.ValueBufferType=Float32Array;Qo.prototype.DefaultInterpolation=au;class vu extends Qo{}vu.prototype.ValueTypeName="bool";vu.prototype.ValueBufferType=Array;vu.prototype.DefaultInterpolation=zf;vu.prototype.InterpolantFactoryMethodLinear=void 0;vu.prototype.InterpolantFactoryMethodSmooth=void 0;class gQ extends Qo{}gQ.prototype.ValueTypeName="color";class q1 extends Qo{}q1.prototype.ValueTypeName="number";class om2 extends ip{constructor(a,g,w,x){super(a,g,w,x)}interpolate_(a,g,w,x){const E=this.resultBuffer,P=this.sampleValues,O=this.valueSize,G=(w-g)/(x-g);let h=a*O;for(let X=h+O;h!==X;h+=4)Xn.slerpFlat(E,0,P,h-O,P,h,G);return E}}class Ms extends Qo{InterpolantFactoryMethodLinear(a){return new om2(this.times,this.values,this.getValueSize(),a)}}Ms.prototype.ValueTypeName="quaternion";Ms.prototype.DefaultInterpolation=au;Ms.prototype.InterpolantFactoryMethodSmooth=void 0;class wu extends Qo{}wu.prototype.ValueTypeName="string";wu.prototype.ValueBufferType=Array;wu.prototype.DefaultInterpolation=zf;wu.prototype.InterpolantFactoryMethodLinear=void 0;wu.prototype.InterpolantFactoryMethodSmooth=void 0;class J1 extends Qo{}J1.prototype.ValueTypeName="vector";class Y4{constructor(a="",g=-1,w=[],x=Z6){this.name=a,this.tracks=w,this.duration=g,this.blendMode=x,this.uuid=Ao(),this.duration<0&&this.resetDuration()}static parse(a){const g=[],w=a.tracks,x=1/(a.fps||1);for(let P=0,O=w.length;P!==O;++P)g.push(lm2(w[P]).scale(x));const E=new this(a.name,a.duration,g,a.blendMode);return E.uuid=a.uuid,E}static toJSON(a){const g=[],w=a.tracks,x={name:a.name,duration:a.duration,tracks:g,uuid:a.uuid,blendMode:a.blendMode};for(let E=0,P=w.length;E!==P;++E)g.push(Qo.toJSON(w[E]));return x}static CreateFromMorphTargetSequence(a,g,w,x){const E=g.length,P=[];for(let O=0;O<E;O++){let G=[],h=[];G.push((O+E-1)%E,O,(O+1)%E),h.push(0,1,0);const X=nm2(G);G=pz(G,1,X),h=pz(h,1,X),!x&&G[0]===0&&(G.push(E),h.push(h[0])),P.push(new q1(".morphTargetInfluences["+g[O].name+"]",G,h).scale(1/w))}return new this(a,-1,P)}static findByName(a,g){let w=a;if(!Array.isArray(a)){const x=a;w=x.geometry&&x.geometry.animations||x.animations}for(let x=0;x<w.length;x++)if(w[x].name===g)return w[x];return null}static CreateClipsFromMorphTargetSequences(a,g,w){const x={},E=/^([\w-]*?)([\d]+)$/;for(let O=0,G=a.length;O<G;O++){const h=a[O],X=h.name.match(E);if(X&&X.length>1){const Z=X[1];let K=x[Z];K||(x[Z]=K=[]),K.push(h)}}const P=[];for(const O in x)P.push(this.CreateFromMorphTargetSequence(O,x[O],g,w));return P}static parseAnimation(a,g){if(!a)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const w=function(Z,K,e2,l2,p2){if(e2.length!==0){const r2=[],o2=[];dQ(e2,r2,o2,l2),r2.length!==0&&p2.push(new Z(K,r2,o2))}},x=[],E=a.name||"default",P=a.fps||30,O=a.blendMode;let G=a.length||-1;const h=a.hierarchy||[];for(let Z=0;Z<h.length;Z++){const K=h[Z].keys;if(!(!K||K.length===0))if(K[0].morphTargets){const e2={};let l2;for(l2=0;l2<K.length;l2++)if(K[l2].morphTargets)for(let p2=0;p2<K[l2].morphTargets.length;p2++)e2[K[l2].morphTargets[p2]]=-1;for(const p2 in e2){const r2=[],o2=[];for(let v2=0;v2!==K[l2].morphTargets.length;++v2){const m2=K[l2];r2.push(m2.time),o2.push(m2.morphTarget===p2?1:0)}x.push(new q1(".morphTargetInfluence["+p2+"]",r2,o2))}G=e2.length*P}else{const e2=".bones["+g[Z].name+"]";w(J1,e2+".position",K,"pos",x),w(Ms,e2+".quaternion",K,"rot",x),w(J1,e2+".scale",K,"scl",x)}}return x.length===0?null:new this(E,G,x,O)}resetDuration(){const a=this.tracks;let g=0;for(let w=0,x=a.length;w!==x;++w){const E=this.tracks[w];g=Math.max(g,E.times[E.times.length-1])}return this.duration=g,this}trim(){for(let a=0;a<this.tracks.length;a++)this.tracks[a].trim(0,this.duration);return this}validate(){let a=!0;for(let g=0;g<this.tracks.length;g++)a=a&&this.tracks[g].validate();return a}optimize(){for(let a=0;a<this.tracks.length;a++)this.tracks[a].optimize();return this}clone(){const a=[];for(let g=0;g<this.tracks.length;g++)a.push(this.tracks[g].clone());return new this.constructor(this.name,this.duration,a,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function sm2(D){switch(D.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return q1;case"vector":case"vector2":case"vector3":case"vector4":return J1;case"color":return gQ;case"quaternion":return Ms;case"bool":case"boolean":return vu;case"string":return wu}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+D)}function lm2(D){if(D.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const a=sm2(D.type);if(D.times===void 0){const g=[],w=[];dQ(D.keys,g,w,"value"),D.times=g,D.values=w}return a.parse!==void 0?a.parse(D):new a(D.name,D.times,D.values,D.interpolation)}const m1={enabled:!1,files:{},add:function(D,a){this.enabled!==!1&&(this.files[D]=a)},get:function(D){if(this.enabled!==!1)return this.files[D]},remove:function(D){delete this.files[D]},clear:function(){this.files={}}};class yQ{constructor(a,g,w){const x=this;let E=!1,P=0,O=0,G;const h=[];this.onStart=void 0,this.onLoad=a,this.onProgress=g,this.onError=w,this.itemStart=function(X){O++,E===!1&&x.onStart!==void 0&&x.onStart(X,P,O),E=!0},this.itemEnd=function(X){P++,x.onProgress!==void 0&&x.onProgress(X,P,O),P===O&&(E=!1,x.onLoad!==void 0&&x.onLoad())},this.itemError=function(X){x.onError!==void 0&&x.onError(X)},this.resolveURL=function(X){return G?G(X):X},this.setURLModifier=function(X){return G=X,this},this.addHandler=function(X,Z){return h.push(X,Z),this},this.removeHandler=function(X){const Z=h.indexOf(X);return Z!==-1&&h.splice(Z,2),this},this.getHandler=function(X){for(let Z=0,K=h.length;Z<K;Z+=2){const e2=h[Z],l2=h[Z+1];if(e2.global&&(e2.lastIndex=0),e2.test(X))return l2}return null}}}const um2=new yQ;class go{constructor(a){this.manager=a!==void 0?a:um2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(a,g){const w=this;return new Promise(function(x,E){w.load(a,x,g,E)})}parse(){}setCrossOrigin(a){return this.crossOrigin=a,this}setWithCredentials(a){return this.withCredentials=a,this}setPath(a){return this.path=a,this}setResourcePath(a){return this.resourcePath=a,this}setRequestHeader(a){return this.requestHeader=a,this}}go.DEFAULT_MATERIAL_NAME="__DEFAULT";const ks={};class fm2 extends Error{constructor(a,g){super(a),this.response=g}}class Au extends go{constructor(a){super(a)}load(a,g,w,x){a===void 0&&(a=""),this.path!==void 0&&(a=this.path+a),a=this.manager.resolveURL(a);const E=m1.get(a);if(E!==void 0)return this.manager.itemStart(a),setTimeout(()=>{g&&g(E),this.manager.itemEnd(a)},0),E;if(ks[a]!==void 0){ks[a].push({onLoad:g,onProgress:w,onError:x});return}ks[a]=[],ks[a].push({onLoad:g,onProgress:w,onError:x});const P=new Request(a,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),O=this.mimeType,G=this.responseType;fetch(P).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const X=ks[a],Z=h.body.getReader(),K=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),e2=K?parseInt(K):0,l2=e2!==0;let p2=0;const r2=new ReadableStream({start(o2){v2();function v2(){Z.read().then(({done:m2,value:k2})=>{if(m2)o2.close();else{p2+=k2.byteLength;const j2=new ProgressEvent("progress",{lengthComputable:l2,loaded:p2,total:e2});for(let b2=0,D2=X.length;b2<D2;b2++){const N2=X[b2];N2.onProgress&&N2.onProgress(j2)}o2.enqueue(k2),v2()}})}}});return new Response(r2)}else throw new fm2(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(G){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(X=>new DOMParser().parseFromString(X,O));case"json":return h.json();default:if(O===void 0)return h.text();{const Z=/charset="?([^;"\s]*)"?/i.exec(O),K=Z&&Z[1]?Z[1].toLowerCase():void 0,e2=new TextDecoder(K);return h.arrayBuffer().then(l2=>e2.decode(l2))}}}).then(h=>{m1.add(a,h);const X=ks[a];delete ks[a];for(let Z=0,K=X.length;Z<K;Z++){const e2=X[Z];e2.onLoad&&e2.onLoad(h)}}).catch(h=>{const X=ks[a];if(X===void 0)throw this.manager.itemError(a),h;delete ks[a];for(let Z=0,K=X.length;Z<K;Z++){const e2=X[Z];e2.onError&&e2.onError(h)}this.manager.itemError(a)}).finally(()=>{this.manager.itemEnd(a)}),this.manager.itemStart(a)}setResponseType(a){return this.responseType=a,this}setMimeType(a){return this.mimeType=a,this}}class pm2 extends go{constructor(a){super(a)}load(a,g,w,x){this.path!==void 0&&(a=this.path+a),a=this.manager.resolveURL(a);const E=this,P=m1.get(a);if(P!==void 0)return E.manager.itemStart(a),setTimeout(function(){g&&g(P),E.manager.itemEnd(a)},0),P;const O=Qf("img");function G(){X(),m1.add(a,this),g&&g(this),E.manager.itemEnd(a)}function h(Z){X(),x&&x(Z),E.manager.itemError(a),E.manager.itemEnd(a)}function X(){O.removeEventListener("load",G,!1),O.removeEventListener("error",h,!1)}return O.addEventListener("load",G,!1),O.addEventListener("error",h,!1),a.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(O.crossOrigin=this.crossOrigin),E.manager.itemStart(a),O.src=a,O}}class cm2 extends go{constructor(a){super(a)}load(a,g,w,x){const E=this,P=new rh,O=new Au(this.manager);return O.setResponseType("arraybuffer"),O.setRequestHeader(this.requestHeader),O.setPath(this.path),O.setWithCredentials(E.withCredentials),O.load(a,function(G){let h;try{h=E.parse(G)}catch(X){if(x!==void 0)x(X);else{console.error(X);return}}h.image!==void 0?P.image=h.image:h.data!==void 0&&(P.image.width=h.width,P.image.height=h.height,P.image.data=h.data),P.wrapS=h.wrapS!==void 0?h.wrapS:Vr,P.wrapT=h.wrapT!==void 0?h.wrapT:Vr,P.magFilter=h.magFilter!==void 0?h.magFilter:t0,P.minFilter=h.minFilter!==void 0?h.minFilter:t0,P.anisotropy=h.anisotropy!==void 0?h.anisotropy:1,h.colorSpace!==void 0&&(P.colorSpace=h.colorSpace),h.flipY!==void 0&&(P.flipY=h.flipY),h.format!==void 0&&(P.format=h.format),h.type!==void 0&&(P.type=h.type),h.mipmaps!==void 0&&(P.mipmaps=h.mipmaps,P.minFilter=Go),h.mipmapCount===1&&(P.minFilter=t0),h.generateMipmaps!==void 0&&(P.generateMipmaps=h.generateMipmaps),P.needsUpdate=!0,g&&g(P,h)},w,x),P}}class r_ extends go{constructor(a){super(a)}load(a,g,w,x){const E=new Ti,P=new pm2(this.manager);return P.setCrossOrigin(this.crossOrigin),P.setPath(this.path),P.load(a,function(O){E.image=O,E.needsUpdate=!0,g!==void 0&&g(E)},w,x),E}}class o_ extends Un{constructor(a,g=1){super(),this.isLight=!0,this.type="Light",this.color=new ce(a),this.intensity=g}dispose(){}copy(a,g){return super.copy(a,g),this.color.copy(a.color),this.intensity=a.intensity,this}toJSON(a){const g=super.toJSON(a);return g.object.color=this.color.getHex(),g.object.intensity=this.intensity,this.groundColor!==void 0&&(g.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(g.object.distance=this.distance),this.angle!==void 0&&(g.object.angle=this.angle),this.decay!==void 0&&(g.object.decay=this.decay),this.penumbra!==void 0&&(g.object.penumbra=this.penumbra),this.shadow!==void 0&&(g.object.shadow=this.shadow.toJSON()),g}}const p6=new te,cz=new E2,_z=new E2;class fh{constructor(a){this.camera=a,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Lt(512,512),this.map=null,this.mapPass=null,this.matrix=new te,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new th,this._frameExtents=new Lt(1,1),this._viewportCount=1,this._viewports=[new En(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(a){const g=this.camera,w=this.matrix;cz.setFromMatrixPosition(a.matrixWorld),g.position.copy(cz),_z.setFromMatrixPosition(a.target.matrixWorld),g.lookAt(_z),g.updateMatrixWorld(),p6.multiplyMatrices(g.projectionMatrix,g.matrixWorldInverse),this._frustum.setFromProjectionMatrix(p6),w.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),w.multiply(p6)}getViewport(a){return this._viewports[a]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(a){return this.camera=a.camera.clone(),this.bias=a.bias,this.radius=a.radius,this.mapSize.copy(a.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const a={};return this.bias!==0&&(a.bias=this.bias),this.normalBias!==0&&(a.normalBias=this.normalBias),this.radius!==1&&(a.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(a.mapSize=this.mapSize.toArray()),a.camera=this.camera.toJSON(!1).object,delete a.camera.matrix,a}}class _m2 extends fh{constructor(){super(new S0(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(a){const g=this.camera,w=hu*2*a.angle*this.focus,x=this.mapSize.width/this.mapSize.height,E=a.distance||g.far;(w!==g.fov||x!==g.aspect||E!==g.far)&&(g.fov=w,g.aspect=x,g.far=E,g.updateProjectionMatrix()),super.updateMatrices(a)}copy(a){return super.copy(a),this.focus=a.focus,this}}class kQ extends o_{constructor(a,g,w=0,x=Math.PI/3,E=0,P=2){super(a,g),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.distance=w,this.angle=x,this.penumbra=E,this.decay=P,this.map=null,this.shadow=new _m2}get power(){return this.intensity*Math.PI}set power(a){this.intensity=a/Math.PI}dispose(){this.shadow.dispose()}copy(a,g){return super.copy(a,g),this.distance=a.distance,this.angle=a.angle,this.penumbra=a.penumbra,this.decay=a.decay,this.target=a.target.clone(),this.shadow=a.shadow.clone(),this}}const az=new te,If=new E2,c6=new E2;class am2 extends fh{constructor(){super(new S0(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Lt(4,2),this._viewportCount=6,this._viewports=[new En(2,1,1,1),new En(0,1,1,1),new En(3,1,1,1),new En(1,1,1,1),new En(3,0,1,1),new En(1,0,1,1)],this._cubeDirections=[new E2(1,0,0),new E2(-1,0,0),new E2(0,0,1),new E2(0,0,-1),new E2(0,1,0),new E2(0,-1,0)],this._cubeUps=[new E2(0,1,0),new E2(0,1,0),new E2(0,1,0),new E2(0,1,0),new E2(0,0,1),new E2(0,0,-1)]}updateMatrices(a,g=0){const w=this.camera,x=this.matrix,E=a.distance||w.far;E!==w.far&&(w.far=E,w.updateProjectionMatrix()),If.setFromMatrixPosition(a.matrixWorld),w.position.copy(If),c6.copy(w.position),c6.add(this._cubeDirections[g]),w.up.copy(this._cubeUps[g]),w.lookAt(c6),w.updateMatrixWorld(),x.makeTranslation(-If.x,-If.y,-If.z),az.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),this._frustum.setFromProjectionMatrix(az)}}class O6 extends o_{constructor(a,g,w=0,x=2){super(a,g),this.isPointLight=!0,this.type="PointLight",this.distance=w,this.decay=x,this.shadow=new am2}get power(){return this.intensity*4*Math.PI}set power(a){this.intensity=a/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(a,g){return super.copy(a,g),this.distance=a.distance,this.decay=a.decay,this.shadow=a.shadow.clone(),this}}class hm2 extends fh{constructor(){super(new t_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class ph extends o_{constructor(a,g){super(a,g),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Un.DEFAULT_UP),this.updateMatrix(),this.target=new Un,this.shadow=new hm2}dispose(){this.shadow.dispose()}copy(a){return super.copy(a),this.target=a.target.clone(),this.shadow=a.shadow.clone(),this}}class vQ extends o_{constructor(a,g){super(a,g),this.isAmbientLight=!0,this.type="AmbientLight"}}class lu{static decodeText(a){if(typeof TextDecoder<"u")return new TextDecoder().decode(a);let g="";for(let w=0,x=a.length;w<x;w++)g+=String.fromCharCode(a[w]);try{return decodeURIComponent(escape(g))}catch{return g}}static extractUrlBase(a){const g=a.lastIndexOf("/");return g===-1?"./":a.slice(0,g+1)}static resolveURL(a,g){return typeof a!="string"||a===""?"":(/^https?:\/\//i.test(g)&&/^\//.test(a)&&(g=g.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(a)||/^data:.*,.*$/i.test(a)||/^blob:.*$/i.test(a)?a:g+a)}}class mm2 extends go{constructor(a){super(a),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(a){return this.options=a,this}load(a,g,w,x){a===void 0&&(a=""),this.path!==void 0&&(a=this.path+a),a=this.manager.resolveURL(a);const E=this,P=m1.get(a);if(P!==void 0){if(E.manager.itemStart(a),P.then){P.then(h=>{g&&g(h),E.manager.itemEnd(a)}).catch(h=>{x&&x(h)});return}return setTimeout(function(){g&&g(P),E.manager.itemEnd(a)},0),P}const O={};O.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",O.headers=this.requestHeader;const G=fetch(a,O).then(function(h){return h.blob()}).then(function(h){return createImageBitmap(h,Object.assign(E.options,{colorSpaceConversion:"none"}))}).then(function(h){return m1.add(a,h),g&&g(h),E.manager.itemEnd(a),h}).catch(function(h){x&&x(h),m1.remove(a),E.manager.itemError(a),E.manager.itemEnd(a)});m1.add(a,G),E.manager.itemStart(a)}}class dm2{constructor(a=!0){this.autoStart=a,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=hz(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let a=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const g=hz();a=(g-this.oldTime)/1e3,this.oldTime=g,this.elapsedTime+=a}return a}}function hz(){return(typeof performance>"u"?Date:performance).now()}class Am2{constructor(a,g,w){this.binding=a,this.valueSize=w;let x,E,P;switch(g){case"quaternion":x=this._slerp,E=this._slerpAdditive,P=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(w*6),this._workIndex=5;break;case"string":case"bool":x=this._select,E=this._select,P=this._setAdditiveIdentityOther,this.buffer=new Array(w*5);break;default:x=this._lerp,E=this._lerpAdditive,P=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(w*5)}this._mixBufferRegion=x,this._mixBufferRegionAdditive=E,this._setIdentity=P,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(a,g){const w=this.buffer,x=this.valueSize,E=a*x+x;let P=this.cumulativeWeight;if(P===0){for(let O=0;O!==x;++O)w[E+O]=w[O];P=g}else{P+=g;const O=g/P;this._mixBufferRegion(w,E,0,O,x)}this.cumulativeWeight=P}accumulateAdditive(a){const g=this.buffer,w=this.valueSize,x=w*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(g,x,0,a,w),this.cumulativeWeightAdditive+=a}apply(a){const g=this.valueSize,w=this.buffer,x=a*g+g,E=this.cumulativeWeight,P=this.cumulativeWeightAdditive,O=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,E<1){const G=g*this._origIndex;this._mixBufferRegion(w,x,G,1-E,g)}P>0&&this._mixBufferRegionAdditive(w,x,this._addIndex*g,1,g);for(let G=g,h=g+g;G!==h;++G)if(w[G]!==w[G+g]){O.setValue(w,x);break}}saveOriginalState(){const a=this.binding,g=this.buffer,w=this.valueSize,x=w*this._origIndex;a.getValue(g,x);for(let E=w,P=x;E!==P;++E)g[E]=g[x+E%w];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const a=this.valueSize*3;this.binding.setValue(this.buffer,a)}_setAdditiveIdentityNumeric(){const a=this._addIndex*this.valueSize,g=a+this.valueSize;for(let w=a;w<g;w++)this.buffer[w]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const a=this._origIndex*this.valueSize,g=this._addIndex*this.valueSize;for(let w=0;w<this.valueSize;w++)this.buffer[g+w]=this.buffer[a+w]}_select(a,g,w,x,E){if(x>=.5)for(let P=0;P!==E;++P)a[g+P]=a[w+P]}_slerp(a,g,w,x){Xn.slerpFlat(a,g,a,g,a,w,x)}_slerpAdditive(a,g,w,x,E){const P=this._workIndex*E;Xn.multiplyQuaternionsFlat(a,P,a,g,a,w),Xn.slerpFlat(a,g,a,g,a,P,x)}_lerp(a,g,w,x,E){const P=1-x;for(let O=0;O!==E;++O){const G=g+O;a[G]=a[G]*P+a[w+O]*x}}_lerpAdditive(a,g,w,x,E){for(let P=0;P!==E;++P){const O=g+P;a[O]=a[O]+a[w+P]*x}}}const ch="\\[\\]\\.:\\/",gm2=new RegExp("["+ch+"]","g"),_h="[^"+ch+"]",ym2="[^"+ch.replace("\\.","")+"]",km2=/((?:WC+[\/:])*)/.source.replace("WC",_h),vm2=/(WCOD+)?/.source.replace("WCOD",ym2),wm2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",_h),Bm2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",_h),Sm2=new RegExp("^"+km2+vm2+wm2+Bm2+"$"),xm2=["material","materials","bones","map"];class Cm2{constructor(a,g,w){const x=w||An.parseTrackName(g);this._targetGroup=a,this._bindings=a.subscribe_(g,x)}getValue(a,g){this.bind();const w=this._targetGroup.nCachedObjects_,x=this._bindings[w];x!==void 0&&x.getValue(a,g)}setValue(a,g){const w=this._bindings;for(let x=this._targetGroup.nCachedObjects_,E=w.length;x!==E;++x)w[x].setValue(a,g)}bind(){const a=this._bindings;for(let g=this._targetGroup.nCachedObjects_,w=a.length;g!==w;++g)a[g].bind()}unbind(){const a=this._bindings;for(let g=this._targetGroup.nCachedObjects_,w=a.length;g!==w;++g)a[g].unbind()}}class An{constructor(a,g,w){this.path=g,this.parsedPath=w||An.parseTrackName(g),this.node=An.findNode(a,this.parsedPath.nodeName),this.rootNode=a,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(a,g,w){return a&&a.isAnimationObjectGroup?new An.Composite(a,g,w):new An(a,g,w)}static sanitizeNodeName(a){return a.replace(/\s/g,"_").replace(gm2,"")}static parseTrackName(a){const g=Sm2.exec(a);if(g===null)throw new Error("PropertyBinding: Cannot parse trackName: "+a);const w={nodeName:g[2],objectName:g[3],objectIndex:g[4],propertyName:g[5],propertyIndex:g[6]},x=w.nodeName&&w.nodeName.lastIndexOf(".");if(x!==void 0&&x!==-1){const E=w.nodeName.substring(x+1);xm2.indexOf(E)!==-1&&(w.nodeName=w.nodeName.substring(0,x),w.objectName=E)}if(w.propertyName===null||w.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+a);return w}static findNode(a,g){if(g===void 0||g===""||g==="."||g===-1||g===a.name||g===a.uuid)return a;if(a.skeleton){const w=a.skeleton.getBoneByName(g);if(w!==void 0)return w}if(a.children){const w=function(E){for(let P=0;P<E.length;P++){const O=E[P];if(O.name===g||O.uuid===g)return O;const G=w(O.children);if(G)return G}return null},x=w(a.children);if(x)return x}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(a,g){a[g]=this.targetObject[this.propertyName]}_getValue_array(a,g){const w=this.resolvedProperty;for(let x=0,E=w.length;x!==E;++x)a[g++]=w[x]}_getValue_arrayElement(a,g){a[g]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(a,g){this.resolvedProperty.toArray(a,g)}_setValue_direct(a,g){this.targetObject[this.propertyName]=a[g]}_setValue_direct_setNeedsUpdate(a,g){this.targetObject[this.propertyName]=a[g],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(a,g){this.targetObject[this.propertyName]=a[g],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(a,g){const w=this.resolvedProperty;for(let x=0,E=w.length;x!==E;++x)w[x]=a[g++]}_setValue_array_setNeedsUpdate(a,g){const w=this.resolvedProperty;for(let x=0,E=w.length;x!==E;++x)w[x]=a[g++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(a,g){const w=this.resolvedProperty;for(let x=0,E=w.length;x!==E;++x)w[x]=a[g++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(a,g){this.resolvedProperty[this.propertyIndex]=a[g]}_setValue_arrayElement_setNeedsUpdate(a,g){this.resolvedProperty[this.propertyIndex]=a[g],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(a,g){this.resolvedProperty[this.propertyIndex]=a[g],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(a,g){this.resolvedProperty.fromArray(a,g)}_setValue_fromArray_setNeedsUpdate(a,g){this.resolvedProperty.fromArray(a,g),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(a,g){this.resolvedProperty.fromArray(a,g),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(a,g){this.bind(),this.getValue(a,g)}_setValue_unbound(a,g){this.bind(),this.setValue(a,g)}bind(){let a=this.node;const g=this.parsedPath,w=g.objectName,x=g.propertyName;let E=g.propertyIndex;if(a||(a=An.findNode(this.rootNode,g.nodeName),this.node=a),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!a){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(w){let h=g.objectIndex;switch(w){case"materials":if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}a=a.material.materials;break;case"bones":if(!a.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}a=a.skeleton.bones;for(let X=0;X<a.length;X++)if(a[X].name===h){h=X;break}break;case"map":if("map"in a){a=a.map;break}if(!a.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!a.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}a=a.material.map;break;default:if(a[w]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}a=a[w]}if(h!==void 0){if(a[h]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,a);return}a=a[h]}}const P=a[x];if(P===void 0){const h=g.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+h+"."+x+" but it wasn't found.",a);return}let O=this.Versioning.None;this.targetObject=a,a.needsUpdate!==void 0?O=this.Versioning.NeedsUpdate:a.matrixWorldNeedsUpdate!==void 0&&(O=this.Versioning.MatrixWorldNeedsUpdate);let G=this.BindingType.Direct;if(E!==void 0){if(x==="morphTargetInfluences"){if(!a.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!a.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}a.morphTargetDictionary[E]!==void 0&&(E=a.morphTargetDictionary[E])}G=this.BindingType.ArrayElement,this.resolvedProperty=P,this.propertyIndex=E}else P.fromArray!==void 0&&P.toArray!==void 0?(G=this.BindingType.HasFromToArray,this.resolvedProperty=P):Array.isArray(P)?(G=this.BindingType.EntireArray,this.resolvedProperty=P):this.propertyName=x;this.getValue=this.GetterByBindingType[G],this.setValue=this.SetterByBindingTypeAndVersioning[G][O]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}An.Composite=Cm2;An.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};An.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};An.prototype.GetterByBindingType=[An.prototype._getValue_direct,An.prototype._getValue_array,An.prototype._getValue_arrayElement,An.prototype._getValue_toArray];An.prototype.SetterByBindingTypeAndVersioning=[[An.prototype._setValue_direct,An.prototype._setValue_direct_setNeedsUpdate,An.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[An.prototype._setValue_array,An.prototype._setValue_array_setNeedsUpdate,An.prototype._setValue_array_setMatrixWorldNeedsUpdate],[An.prototype._setValue_arrayElement,An.prototype._setValue_arrayElement_setNeedsUpdate,An.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[An.prototype._setValue_fromArray,An.prototype._setValue_fromArray_setNeedsUpdate,An.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Mm2{constructor(a,g,w=null,x=g.blendMode){this._mixer=a,this._clip=g,this._localRoot=w,this.blendMode=x;const E=g.tracks,P=E.length,O=new Array(P),G={endingStart:$l,endingEnd:$l};for(let h=0;h!==P;++h){const X=E[h].createInterpolant(null);O[h]=X,X.settings=G}this._interpolantSettings=G,this._interpolants=O,this._propertyBindings=new Array(P),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Gz,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(a){return this._startTime=a,this}setLoop(a,g){return this.loop=a,this.repetitions=g,this}setEffectiveWeight(a){return this.weight=a,this._effectiveWeight=this.enabled?a:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(a){return this._scheduleFading(a,0,1)}fadeOut(a){return this._scheduleFading(a,1,0)}crossFadeFrom(a,g,w){if(a.fadeOut(g),this.fadeIn(g),w){const x=this._clip.duration,E=a._clip.duration,P=E/x,O=x/E;a.warp(1,P,g),this.warp(O,1,g)}return this}crossFadeTo(a,g,w){return a.crossFadeFrom(this,g,w)}stopFading(){const a=this._weightInterpolant;return a!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(a)),this}setEffectiveTimeScale(a){return this.timeScale=a,this._effectiveTimeScale=this.paused?0:a,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(a){return this.timeScale=this._clip.duration/a,this.stopWarping()}syncWith(a){return this.time=a.time,this.timeScale=a.timeScale,this.stopWarping()}halt(a){return this.warp(this._effectiveTimeScale,0,a)}warp(a,g,w){const x=this._mixer,E=x.time,P=this.timeScale;let O=this._timeScaleInterpolant;O===null&&(O=x._lendControlInterpolant(),this._timeScaleInterpolant=O);const G=O.parameterPositions,h=O.sampleValues;return G[0]=E,G[1]=E+w,h[0]=a/P,h[1]=g/P,this}stopWarping(){const a=this._timeScaleInterpolant;return a!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(a)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(a,g,w,x){if(!this.enabled){this._updateWeight(a);return}const E=this._startTime;if(E!==null){const G=(a-E)*w;G<0||w===0?g=0:(this._startTime=null,g=w*G)}g*=this._updateTimeScale(a);const P=this._updateTime(g),O=this._updateWeight(a);if(O>0){const G=this._interpolants,h=this._propertyBindings;switch(this.blendMode){case bc2:for(let X=0,Z=G.length;X!==Z;++X)G[X].evaluate(P),h[X].accumulateAdditive(O);break;case Z6:default:for(let X=0,Z=G.length;X!==Z;++X)G[X].evaluate(P),h[X].accumulate(x,O)}}}_updateWeight(a){let g=0;if(this.enabled){g=this.weight;const w=this._weightInterpolant;if(w!==null){const x=w.evaluate(a)[0];g*=x,a>w.parameterPositions[1]&&(this.stopFading(),x===0&&(this.enabled=!1))}}return this._effectiveWeight=g,g}_updateTimeScale(a){let g=0;if(!this.paused){g=this.timeScale;const w=this._timeScaleInterpolant;if(w!==null){const x=w.evaluate(a)[0];g*=x,a>w.parameterPositions[1]&&(this.stopWarping(),g===0?this.paused=!0:this.timeScale=g)}}return this._effectiveTimeScale=g,g}_updateTime(a){const g=this._clip.duration,w=this.loop;let x=this.time+a,E=this._loopCount;const P=w===Rc2;if(a===0)return E===-1?x:P&&(E&1)===1?g-x:x;if(w===E6){E===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(x>=g)x=g;else if(x<0)x=0;else{this.time=x;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=x,this._mixer.dispatchEvent({type:"finished",action:this,direction:a<0?-1:1})}}else{if(E===-1&&(a>=0?(E=0,this._setEndings(!0,this.repetitions===0,P)):this._setEndings(this.repetitions===0,!0,P)),x>=g||x<0){const O=Math.floor(x/g);x-=g*O,E+=Math.abs(O);const G=this.repetitions-E;if(G<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,x=a>0?g:0,this.time=x,this._mixer.dispatchEvent({type:"finished",action:this,direction:a>0?1:-1});else{if(G===1){const h=a<0;this._setEndings(h,!h,P)}else this._setEndings(!1,!1,P);this._loopCount=E,this.time=x,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:O})}}else this.time=x;if(P&&(E&1)===1)return g-x}return x}_setEndings(a,g,w){const x=this._interpolantSettings;w?(x.endingStart=tu,x.endingEnd=tu):(a?x.endingStart=this.zeroSlopeAtStart?tu:$l:x.endingStart=j4,g?x.endingEnd=this.zeroSlopeAtEnd?tu:$l:x.endingEnd=j4)}_scheduleFading(a,g,w){const x=this._mixer,E=x.time;let P=this._weightInterpolant;P===null&&(P=x._lendControlInterpolant(),this._weightInterpolant=P);const O=P.parameterPositions,G=P.sampleValues;return O[0]=E,G[0]=g,O[1]=E+a,G[1]=w,this}}const Tm2=new Float32Array(1);class Em2 extends Ts{constructor(a){super(),this._root=a,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(a,g){const w=a._localRoot||this._root,x=a._clip.tracks,E=x.length,P=a._propertyBindings,O=a._interpolants,G=w.uuid,h=this._bindingsByRootAndName;let X=h[G];X===void 0&&(X={},h[G]=X);for(let Z=0;Z!==E;++Z){const K=x[Z],e2=K.name;let l2=X[e2];if(l2!==void 0)++l2.referenceCount,P[Z]=l2;else{if(l2=P[Z],l2!==void 0){l2._cacheIndex===null&&(++l2.referenceCount,this._addInactiveBinding(l2,G,e2));continue}const p2=g&&g._propertyBindings[Z].binding.parsedPath;l2=new Am2(An.create(w,e2,p2),K.ValueTypeName,K.getValueSize()),++l2.referenceCount,this._addInactiveBinding(l2,G,e2),P[Z]=l2}O[Z].resultBuffer=l2.buffer}}_activateAction(a){if(!this._isActiveAction(a)){if(a._cacheIndex===null){const w=(a._localRoot||this._root).uuid,x=a._clip.uuid,E=this._actionsByClip[x];this._bindAction(a,E&&E.knownActions[0]),this._addInactiveAction(a,x,w)}const g=a._propertyBindings;for(let w=0,x=g.length;w!==x;++w){const E=g[w];E.useCount++===0&&(this._lendBinding(E),E.saveOriginalState())}this._lendAction(a)}}_deactivateAction(a){if(this._isActiveAction(a)){const g=a._propertyBindings;for(let w=0,x=g.length;w!==x;++w){const E=g[w];--E.useCount===0&&(E.restoreOriginalState(),this._takeBackBinding(E))}this._takeBackAction(a)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const a=this;this.stats={actions:{get total(){return a._actions.length},get inUse(){return a._nActiveActions}},bindings:{get total(){return a._bindings.length},get inUse(){return a._nActiveBindings}},controlInterpolants:{get total(){return a._controlInterpolants.length},get inUse(){return a._nActiveControlInterpolants}}}}_isActiveAction(a){const g=a._cacheIndex;return g!==null&&g<this._nActiveActions}_addInactiveAction(a,g,w){const x=this._actions,E=this._actionsByClip;let P=E[g];if(P===void 0)P={knownActions:[a],actionByRoot:{}},a._byClipCacheIndex=0,E[g]=P;else{const O=P.knownActions;a._byClipCacheIndex=O.length,O.push(a)}a._cacheIndex=x.length,x.push(a),P.actionByRoot[w]=a}_removeInactiveAction(a){const g=this._actions,w=g[g.length-1],x=a._cacheIndex;w._cacheIndex=x,g[x]=w,g.pop(),a._cacheIndex=null;const E=a._clip.uuid,P=this._actionsByClip,O=P[E],G=O.knownActions,h=G[G.length-1],X=a._byClipCacheIndex;h._byClipCacheIndex=X,G[X]=h,G.pop(),a._byClipCacheIndex=null;const Z=O.actionByRoot,K=(a._localRoot||this._root).uuid;delete Z[K],G.length===0&&delete P[E],this._removeInactiveBindingsForAction(a)}_removeInactiveBindingsForAction(a){const g=a._propertyBindings;for(let w=0,x=g.length;w!==x;++w){const E=g[w];--E.referenceCount===0&&this._removeInactiveBinding(E)}}_lendAction(a){const g=this._actions,w=a._cacheIndex,x=this._nActiveActions++,E=g[x];a._cacheIndex=x,g[x]=a,E._cacheIndex=w,g[w]=E}_takeBackAction(a){const g=this._actions,w=a._cacheIndex,x=--this._nActiveActions,E=g[x];a._cacheIndex=x,g[x]=a,E._cacheIndex=w,g[w]=E}_addInactiveBinding(a,g,w){const x=this._bindingsByRootAndName,E=this._bindings;let P=x[g];P===void 0&&(P={},x[g]=P),P[w]=a,a._cacheIndex=E.length,E.push(a)}_removeInactiveBinding(a){const g=this._bindings,w=a.binding,x=w.rootNode.uuid,E=w.path,P=this._bindingsByRootAndName,O=P[x],G=g[g.length-1],h=a._cacheIndex;G._cacheIndex=h,g[h]=G,g.pop(),delete O[E],Object.keys(O).length===0&&delete P[x]}_lendBinding(a){const g=this._bindings,w=a._cacheIndex,x=this._nActiveBindings++,E=g[x];a._cacheIndex=x,g[x]=a,E._cacheIndex=w,g[w]=E}_takeBackBinding(a){const g=this._bindings,w=a._cacheIndex,x=--this._nActiveBindings,E=g[x];a._cacheIndex=x,g[x]=a,E._cacheIndex=w,g[w]=E}_lendControlInterpolant(){const a=this._controlInterpolants,g=this._nActiveControlInterpolants++;let w=a[g];return w===void 0&&(w=new AQ(new Float32Array(2),new Float32Array(2),1,Tm2),w.__cacheIndex=g,a[g]=w),w}_takeBackControlInterpolant(a){const g=this._controlInterpolants,w=a.__cacheIndex,x=--this._nActiveControlInterpolants,E=g[x];a.__cacheIndex=x,g[x]=a,E.__cacheIndex=w,g[w]=E}clipAction(a,g,w){const x=g||this._root,E=x.uuid;let P=typeof a=="string"?Y4.findByName(x,a):a;const O=P!==null?P.uuid:a,G=this._actionsByClip[O];let h=null;if(w===void 0&&(P!==null?w=P.blendMode:w=Z6),G!==void 0){const Z=G.actionByRoot[E];if(Z!==void 0&&Z.blendMode===w)return Z;h=G.knownActions[0],P===null&&(P=h._clip)}if(P===null)return null;const X=new Mm2(this,P,g,w);return this._bindAction(X,h),this._addInactiveAction(X,O,E),X}existingAction(a,g){const w=g||this._root,x=w.uuid,E=typeof a=="string"?Y4.findByName(w,a):a,P=E?E.uuid:a,O=this._actionsByClip[P];return O!==void 0&&O.actionByRoot[x]||null}stopAllAction(){const a=this._actions,g=this._nActiveActions;for(let w=g-1;w>=0;--w)a[w].stop();return this}update(a){a*=this.timeScale;const g=this._actions,w=this._nActiveActions,x=this.time+=a,E=Math.sign(a),P=this._accuIndex^=1;for(let h=0;h!==w;++h)g[h]._update(x,a,E,P);const O=this._bindings,G=this._nActiveBindings;for(let h=0;h!==G;++h)O[h].apply(P);return this}setTime(a){this.time=0;for(let g=0;g<this._actions.length;g++)this._actions[g].time=0;return this.update(a)}getRoot(){return this._root}uncacheClip(a){const g=this._actions,w=a.uuid,x=this._actionsByClip,E=x[w];if(E!==void 0){const P=E.knownActions;for(let O=0,G=P.length;O!==G;++O){const h=P[O];this._deactivateAction(h);const X=h._cacheIndex,Z=g[g.length-1];h._cacheIndex=null,h._byClipCacheIndex=null,Z._cacheIndex=X,g[X]=Z,g.pop(),this._removeInactiveBindingsForAction(h)}delete x[w]}}uncacheRoot(a){const g=a.uuid,w=this._actionsByClip;for(const P in w){const O=w[P].actionByRoot,G=O[g];G!==void 0&&(this._deactivateAction(G),this._removeInactiveAction(G))}const x=this._bindingsByRootAndName,E=x[g];if(E!==void 0)for(const P in E){const O=E[P];O.restoreOriginalState(),this._removeInactiveBinding(O)}}uncacheAction(a,g){const w=this.existingAction(a,g);w!==null&&(this._deactivateAction(w),this._removeInactiveAction(w))}}class mz{constructor(a=1,g=0,w=0){return this.radius=a,this.phi=g,this.theta=w,this}set(a,g,w){return this.radius=a,this.phi=g,this.theta=w,this}copy(a){return this.radius=a.radius,this.phi=a.phi,this.theta=a.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(a){return this.setFromCartesianCoords(a.x,a.y,a.z)}setFromCartesianCoords(a,g,w){return this.radius=Math.sqrt(a*a+g*g+w*w),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(a,w),this.phi=Math.acos(Mi(g/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const dz=new E2,M4=new E2,Az=new E2;class Rm2 extends Un{constructor(a,g,w){super(),this.light=a,this.matrix=a.matrixWorld,this.matrixAutoUpdate=!1,this.color=w,this.type="DirectionalLightHelper",g===void 0&&(g=1);let x=new n0;x.setAttribute("position",new gi([-g,g,0,g,g,0,g,-g,0,-g,-g,0,-g,g,0],3));const E=new np({fog:!1,toneMapped:!1});this.lightPlane=new du(x,E),this.add(this.lightPlane),x=new n0,x.setAttribute("position",new gi([0,0,0,0,0,1],3)),this.targetLine=new du(x,E),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),dz.setFromMatrixPosition(this.light.matrixWorld),M4.setFromMatrixPosition(this.light.target.matrixWorld),Az.subVectors(M4,dz),this.lightPlane.lookAt(M4),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(M4),this.targetLine.scale.z=Az.length()}}const T4=new E2,mi=new $6;class bm2 extends lQ{constructor(a){const g=new n0,w=new np({color:16777215,vertexColors:!0,toneMapped:!1}),x=[],E=[],P={};O("n1","n2"),O("n2","n4"),O("n4","n3"),O("n3","n1"),O("f1","f2"),O("f2","f4"),O("f4","f3"),O("f3","f1"),O("n1","f1"),O("n2","f2"),O("n3","f3"),O("n4","f4"),O("p","n1"),O("p","n2"),O("p","n3"),O("p","n4"),O("u1","u2"),O("u2","u3"),O("u3","u1"),O("c","t"),O("p","c"),O("cn1","cn2"),O("cn3","cn4"),O("cf1","cf2"),O("cf3","cf4");function O(l2,p2){G(l2),G(p2)}function G(l2){x.push(0,0,0),E.push(0,0,0),P[l2]===void 0&&(P[l2]=[]),P[l2].push(x.length/3-1)}g.setAttribute("position",new gi(x,3)),g.setAttribute("color",new gi(E,3)),super(g,w),this.type="CameraHelper",this.camera=a,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=a.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=P,this.update();const h=new ce(16755200),X=new ce(16711680),Z=new ce(43775),K=new ce(16777215),e2=new ce(3355443);this.setColors(h,X,Z,K,e2)}setColors(a,g,w,x,E){const O=this.geometry.getAttribute("color");O.setXYZ(0,a.r,a.g,a.b),O.setXYZ(1,a.r,a.g,a.b),O.setXYZ(2,a.r,a.g,a.b),O.setXYZ(3,a.r,a.g,a.b),O.setXYZ(4,a.r,a.g,a.b),O.setXYZ(5,a.r,a.g,a.b),O.setXYZ(6,a.r,a.g,a.b),O.setXYZ(7,a.r,a.g,a.b),O.setXYZ(8,a.r,a.g,a.b),O.setXYZ(9,a.r,a.g,a.b),O.setXYZ(10,a.r,a.g,a.b),O.setXYZ(11,a.r,a.g,a.b),O.setXYZ(12,a.r,a.g,a.b),O.setXYZ(13,a.r,a.g,a.b),O.setXYZ(14,a.r,a.g,a.b),O.setXYZ(15,a.r,a.g,a.b),O.setXYZ(16,a.r,a.g,a.b),O.setXYZ(17,a.r,a.g,a.b),O.setXYZ(18,a.r,a.g,a.b),O.setXYZ(19,a.r,a.g,a.b),O.setXYZ(20,a.r,a.g,a.b),O.setXYZ(21,a.r,a.g,a.b),O.setXYZ(22,a.r,a.g,a.b),O.setXYZ(23,a.r,a.g,a.b),O.setXYZ(24,g.r,g.g,g.b),O.setXYZ(25,g.r,g.g,g.b),O.setXYZ(26,g.r,g.g,g.b),O.setXYZ(27,g.r,g.g,g.b),O.setXYZ(28,g.r,g.g,g.b),O.setXYZ(29,g.r,g.g,g.b),O.setXYZ(30,g.r,g.g,g.b),O.setXYZ(31,g.r,g.g,g.b),O.setXYZ(32,w.r,w.g,w.b),O.setXYZ(33,w.r,w.g,w.b),O.setXYZ(34,w.r,w.g,w.b),O.setXYZ(35,w.r,w.g,w.b),O.setXYZ(36,w.r,w.g,w.b),O.setXYZ(37,w.r,w.g,w.b),O.setXYZ(38,x.r,x.g,x.b),O.setXYZ(39,x.r,x.g,x.b),O.setXYZ(40,E.r,E.g,E.b),O.setXYZ(41,E.r,E.g,E.b),O.setXYZ(42,E.r,E.g,E.b),O.setXYZ(43,E.r,E.g,E.b),O.setXYZ(44,E.r,E.g,E.b),O.setXYZ(45,E.r,E.g,E.b),O.setXYZ(46,E.r,E.g,E.b),O.setXYZ(47,E.r,E.g,E.b),O.setXYZ(48,E.r,E.g,E.b),O.setXYZ(49,E.r,E.g,E.b),O.needsUpdate=!0}update(){const a=this.geometry,g=this.pointMap,w=1,x=1;mi.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),xi("c",g,a,mi,0,0,-1),xi("t",g,a,mi,0,0,1),xi("n1",g,a,mi,-w,-x,-1),xi("n2",g,a,mi,w,-x,-1),xi("n3",g,a,mi,-w,x,-1),xi("n4",g,a,mi,w,x,-1),xi("f1",g,a,mi,-w,-x,1),xi("f2",g,a,mi,w,-x,1),xi("f3",g,a,mi,-w,x,1),xi("f4",g,a,mi,w,x,1),xi("u1",g,a,mi,w*.7,x*1.1,-1),xi("u2",g,a,mi,-w*.7,x*1.1,-1),xi("u3",g,a,mi,0,x*2,-1),xi("cf1",g,a,mi,-w,0,1),xi("cf2",g,a,mi,w,0,1),xi("cf3",g,a,mi,0,-x,1),xi("cf4",g,a,mi,0,x,1),xi("cn1",g,a,mi,-w,0,-1),xi("cn2",g,a,mi,w,0,-1),xi("cn3",g,a,mi,0,-x,-1),xi("cn4",g,a,mi,0,x,-1),a.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function xi(D,a,g,w,x,E,P){T4.set(x,E,P).unproject(w);const O=a[D];if(O!==void 0){const G=g.getAttribute("position");for(let h=0,X=O.length;h<X;h++)G.setXYZ(O[h],T4.x,T4.y,T4.z)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Y6}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Y6);/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var Hr=Uint8Array,iu=Uint16Array,Dm2=Int32Array,wQ=new Hr([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),BQ=new Hr([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Im2=new Hr([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),SQ=function(D,a){for(var g=new iu(31),w=0;w<31;++w)g[w]=a+=1<<D[w-1];for(var x=new Dm2(g[30]),w=1;w<30;++w)for(var E=g[w];E<g[w+1];++E)x[E]=E-g[w]<<5|w;return{b:g,r:x}},xQ=SQ(wQ,2),CQ=xQ.b,Pm2=xQ.r;CQ[28]=258,Pm2[258]=28;var Lm2=SQ(BQ,0),Fm2=Lm2.b,j6=new iu(32768);for(var $n=0;$n<32768;++$n){var f1=($n&43690)>>1|($n&21845)<<1;f1=(f1&52428)>>2|(f1&13107)<<2,f1=(f1&61680)>>4|(f1&3855)<<4,j6[$n]=((f1&65280)>>8|(f1&255)<<8)>>1}var Gf=function(D,a,g){for(var w=D.length,x=0,E=new iu(a);x<w;++x)D[x]&&++E[D[x]-1];var P=new iu(a);for(x=1;x<a;++x)P[x]=P[x-1]+E[x-1]<<1;var O;if(g){O=new iu(1<<a);var G=15-a;for(x=0;x<w;++x)if(D[x])for(var h=x<<4|D[x],X=a-D[x],Z=P[D[x]-1]++<<X,K=Z|(1<<X)-1;Z<=K;++Z)O[j6[Z]>>G]=h}else for(O=new iu(w),x=0;x<w;++x)D[x]&&(O[x]=j6[P[D[x]-1]++]>>15-D[x]);return O},rp=new Hr(288);for(var $n=0;$n<144;++$n)rp[$n]=8;for(var $n=144;$n<256;++$n)rp[$n]=9;for(var $n=256;$n<280;++$n)rp[$n]=7;for(var $n=280;$n<288;++$n)rp[$n]=8;var MQ=new Hr(32);for(var $n=0;$n<32;++$n)MQ[$n]=5;var Om2=Gf(rp,9,1),jm2=Gf(MQ,5,1),_6=function(D){for(var a=D[0],g=1;g<D.length;++g)D[g]>a&&(a=D[g]);return a},_o=function(D,a,g){var w=a/8|0;return(D[w]|D[w+1]<<8)>>(a&7)&g},a6=function(D,a){var g=a/8|0;return(D[g]|D[g+1]<<8|D[g+2]<<16)>>(a&7)},Nm2=function(D){return(D+7)/8|0},Um2=function(D,a,g){return(g==null||g>D.length)&&(g=D.length),new Hr(D.subarray(a,g))},Gm2=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],ao=function(D,a,g){var w=new Error(a||Gm2[D]);if(w.code=D,Error.captureStackTrace&&Error.captureStackTrace(w,ao),!g)throw w;return w},Wm2=function(D,a,g,w){var x=D.length,E=0;if(!x||a.f&&!a.l)return g||new Hr(0);var P=!g,O=P||a.i!=2,G=a.i;P&&(g=new Hr(x*3));var h=function(Oe){var ne=g.length;if(Oe>ne){var on=new Hr(Math.max(ne*2,Oe));on.set(g),g=on}},X=a.f||0,Z=a.p||0,K=a.b||0,e2=a.l,l2=a.d,p2=a.m,r2=a.n,o2=x*8;do{if(!e2){X=_o(D,Z,1);var v2=_o(D,Z+1,3);if(Z+=3,v2)if(v2==1)e2=Om2,l2=jm2,p2=9,r2=5;else if(v2==2){var b2=_o(D,Z,31)+257,D2=_o(D,Z+10,15)+4,N2=b2+_o(D,Z+5,31)+1;Z+=14;for(var B2=new Hr(N2),g2=new Hr(19),W2=0;W2<D2;++W2)g2[Im2[W2]]=_o(D,Z+W2*3,7);Z+=D2*3;for(var nt=_6(g2),U2=(1<<nt)-1,q2=Gf(g2,nt,1),W2=0;W2<N2;){var ft=q2[_o(D,Z,U2)];Z+=ft&15;var m2=ft>>4;if(m2<16)B2[W2++]=m2;else{var ut=0,Et=0;for(m2==16?(Et=3+_o(D,Z,3),Z+=2,ut=B2[W2-1]):m2==17?(Et=3+_o(D,Z,7),Z+=3):m2==18&&(Et=11+_o(D,Z,127),Z+=7);Et--;)B2[W2++]=ut}}var it=B2.subarray(0,b2),At=B2.subarray(b2);p2=_6(it),r2=_6(At),e2=Gf(it,p2,1),l2=Gf(At,r2,1)}else ao(1);else{var m2=Nm2(Z)+4,k2=D[m2-4]|D[m2-3]<<8,j2=m2+k2;if(j2>x){G&&ao(0);break}O&&h(K+k2),g.set(D.subarray(m2,j2),K),a.b=K+=k2,a.p=Z=j2*8,a.f=X;continue}if(Z>o2){G&&ao(0);break}}O&&h(K+131072);for(var yt=(1<<p2)-1,re=(1<<r2)-1,ye=Z;;ye=Z){var ut=e2[a6(D,Z)&yt],Be=ut>>4;if(Z+=ut&15,Z>o2){G&&ao(0);break}if(ut||ao(2),Be<256)g[K++]=Be;else if(Be==256){ye=Z,e2=null;break}else{var rt=Be-254;if(Be>264){var W2=Be-257,Bt=wQ[W2];rt=_o(D,Z,(1<<Bt)-1)+CQ[W2],Z+=Bt}var ee=l2[a6(D,Z)&re],H2=ee>>4;ee||ao(3),Z+=ee&15;var At=Fm2[H2];if(H2>3){var Bt=BQ[H2];At+=a6(D,Z)&(1<<Bt)-1,Z+=Bt}if(Z>o2){G&&ao(0);break}O&&h(K+131072);var Dt=K+rt;if(K<At){var ue=E-At,Y2=Math.min(At,Dt);for(ue+K<0&&ao(3);K<Y2;++K)g[K]=w[ue+K]}for(;K<Dt;++K)g[K]=g[K-At]}}a.l=e2,a.p=ye,a.b=K,a.f=X,e2&&(X=1,a.m=p2,a.d=l2,a.n=r2)}while(!X);return K!=g.length&&P?Um2(g,0,K):g.subarray(0,K)},Hm2=new Hr(0),Vm2=function(D,a){return((D[0]&15)!=8||D[0]>>4>7||(D[0]<<8|D[1])%31)&&ao(6,"invalid zlib data"),(D[1]>>5&1)==+!a&&ao(6,"invalid zlib data: "+(D[1]&32?"need":"unexpected")+" dictionary"),(D[1]>>3&4)+2};function zm2(D,a){return Wm2(D.subarray(Vm2(D,a),-4),{i:2},a,a)}var Qm2=typeof TextDecoder<"u"&&new TextDecoder,Ym2=0;try{Qm2.decode(Hm2,{stream:!0}),Ym2=1}catch{}function TQ(D,a,g){const w=g.length-D-1;if(a>=g[w])return w-1;if(a<=g[D])return D;let x=D,E=w,P=Math.floor((x+E)/2);for(;a<g[P]||a>=g[P+1];)a<g[P]?E=P:x=P,P=Math.floor((x+E)/2);return P}function Xm2(D,a,g,w){const x=[],E=[],P=[];x[0]=1;for(let O=1;O<=g;++O){E[O]=a-w[D+1-O],P[O]=w[D+O]-a;let G=0;for(let h=0;h<O;++h){const X=P[h+1],Z=E[O-h],K=x[h]/(X+Z);x[h]=G+X*K,G=Z*K}x[O]=G}return x}function Zm2(D,a,g,w){const x=TQ(D,w,a),E=Xm2(x,w,D,a),P=new En(0,0,0,0);for(let O=0;O<=D;++O){const G=g[x-D+O],h=E[O],X=G.w*h;P.x+=G.x*X,P.y+=G.y*X,P.z+=G.z*X,P.w+=G.w*h}return P}function qm2(D,a,g,w,x){const E=[];for(let Z=0;Z<=g;++Z)E[Z]=0;const P=[];for(let Z=0;Z<=w;++Z)P[Z]=E.slice(0);const O=[];for(let Z=0;Z<=g;++Z)O[Z]=E.slice(0);O[0][0]=1;const G=E.slice(0),h=E.slice(0);for(let Z=1;Z<=g;++Z){G[Z]=a-x[D+1-Z],h[Z]=x[D+Z]-a;let K=0;for(let e2=0;e2<Z;++e2){const l2=h[e2+1],p2=G[Z-e2];O[Z][e2]=l2+p2;const r2=O[e2][Z-1]/O[Z][e2];O[e2][Z]=K+l2*r2,K=p2*r2}O[Z][Z]=K}for(let Z=0;Z<=g;++Z)P[0][Z]=O[Z][g];for(let Z=0;Z<=g;++Z){let K=0,e2=1;const l2=[];for(let p2=0;p2<=g;++p2)l2[p2]=E.slice(0);l2[0][0]=1;for(let p2=1;p2<=w;++p2){let r2=0;const o2=Z-p2,v2=g-p2;Z>=p2&&(l2[e2][0]=l2[K][0]/O[v2+1][o2],r2=l2[e2][0]*O[o2][v2]);const m2=o2>=-1?1:-o2,k2=Z-1<=v2?p2-1:g-Z;for(let b2=m2;b2<=k2;++b2)l2[e2][b2]=(l2[K][b2]-l2[K][b2-1])/O[v2+1][o2+b2],r2+=l2[e2][b2]*O[o2+b2][v2];Z<=v2&&(l2[e2][p2]=-l2[K][p2-1]/O[v2+1][Z],r2+=l2[e2][p2]*O[Z][v2]),P[p2][Z]=r2;const j2=K;K=e2,e2=j2}}let X=g;for(let Z=1;Z<=w;++Z){for(let K=0;K<=g;++K)P[Z][K]*=X;X*=g-Z}return P}function Jm2(D,a,g,w,x){const E=x<D?x:D,P=[],O=TQ(D,w,a),G=qm2(O,w,D,E,a),h=[];for(let X=0;X<g.length;++X){const Z=g[X].clone(),K=Z.w;Z.x*=K,Z.y*=K,Z.z*=K,h[X]=Z}for(let X=0;X<=E;++X){const Z=h[O-D].clone().multiplyScalar(G[X][0]);for(let K=1;K<=D;++K)Z.add(h[O-D+K].clone().multiplyScalar(G[X][K]));P[X]=Z}for(let X=E+1;X<=x+1;++X)P[X]=new En(0,0,0);return P}function Km2(D,a){let g=1;for(let x=2;x<=D;++x)g*=x;let w=1;for(let x=2;x<=a;++x)w*=x;for(let x=2;x<=D-a;++x)w*=x;return g/w}function $m2(D){const a=D.length,g=[],w=[];for(let E=0;E<a;++E){const P=D[E];g[E]=new E2(P.x,P.y,P.z),w[E]=P.w}const x=[];for(let E=0;E<a;++E){const P=g[E].clone();for(let O=1;O<=E;++O)P.sub(x[E-O].clone().multiplyScalar(Km2(E,O)*w[O]));x[E]=P.divideScalar(w[0])}return x}function td2(D,a,g,w,x){const E=Jm2(D,a,g,w,x);return $m2(E)}class ed2 extends yo{constructor(a,g,w,x,E){super(),this.degree=a,this.knots=g,this.controlPoints=[],this.startKnot=x||0,this.endKnot=E||this.knots.length-1;for(let P=0;P<w.length;++P){const O=w[P];this.controlPoints[P]=new En(O.x,O.y,O.z,O.w)}}getPoint(a,g=new E2){const w=g,x=this.knots[this.startKnot]+a*(this.knots[this.endKnot]-this.knots[this.startKnot]),E=Zm2(this.degree,this.knots,this.controlPoints,x);return E.w!==1&&E.divideScalar(E.w),w.set(E.x,E.y,E.z)}getTangent(a,g=new E2){const w=g,x=this.knots[0]+a*(this.knots[this.knots.length-1]-this.knots[0]),E=td2(this.degree,this.knots,this.controlPoints,x,1);return w.copy(E[1]).normalize(),w}}let rn,Ci,O0;class nd2 extends go{constructor(a){super(a)}load(a,g,w,x){const E=this,P=E.path===""?lu.extractUrlBase(a):E.path,O=new Au(this.manager);O.setPath(E.path),O.setResponseType("arraybuffer"),O.setRequestHeader(E.requestHeader),O.setWithCredentials(E.withCredentials),O.load(a,function(G){try{g(E.parse(G,P))}catch(h){x?x(h):console.error(h),E.manager.itemError(a)}},w,x)}parse(a,g){if(ud2(a))rn=new ld2().parse(a);else{const x=DQ(a);if(!fd2(x))throw new Error("THREE.FBXLoader: Unknown format.");if(yz(x)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+yz(x));rn=new sd2().parse(x)}const w=new r_(this.manager).setPath(this.resourcePath||g).setCrossOrigin(this.crossOrigin);return new id2(w,this.manager).parse(rn)}}class id2{constructor(a,g){this.textureLoader=a,this.manager=g}parse(){Ci=this.parseConnections();const a=this.parseImages(),g=this.parseTextures(a),w=this.parseMaterials(g),x=this.parseDeformers(),E=new rd2().parse(x);return this.parseScene(x,E,w),O0}parseConnections(){const a=new Map;return"Connections"in rn&&rn.Connections.connections.forEach(function(w){const x=w[0],E=w[1],P=w[2];a.has(x)||a.set(x,{parents:[],children:[]});const O={ID:E,relationship:P};a.get(x).parents.push(O),a.has(E)||a.set(E,{parents:[],children:[]});const G={ID:x,relationship:P};a.get(E).children.push(G)}),a}parseImages(){const a={},g={};if("Video"in rn.Objects){const w=rn.Objects.Video;for(const x in w){const E=w[x],P=parseInt(x);if(a[P]=E.RelativeFilename||E.Filename,"Content"in E){const O=E.Content instanceof ArrayBuffer&&E.Content.byteLength>0,G=typeof E.Content=="string"&&E.Content!=="";if(O||G){const h=this.parseImage(w[x]);g[E.RelativeFilename||E.Filename]=h}}}}for(const w in a){const x=a[w];g[x]!==void 0?a[w]=g[x]:a[w]=a[w].split("\\").pop()}return a}parseImage(a){const g=a.Content,w=a.RelativeFilename||a.Filename,x=w.slice(w.lastIndexOf(".")+1).toLowerCase();let E;switch(x){case"bmp":E="image/bmp";break;case"jpg":case"jpeg":E="image/jpeg";break;case"png":E="image/png";break;case"tif":E="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",w),E="image/tga";break;default:console.warn('FBXLoader: Image type "'+x+'" is not supported.');return}if(typeof g=="string")return"data:"+E+";base64,"+g;{const P=new Uint8Array(g);return window.URL.createObjectURL(new Blob([P],{type:E}))}}parseTextures(a){const g=new Map;if("Texture"in rn.Objects){const w=rn.Objects.Texture;for(const x in w){const E=this.parseTexture(w[x],a);g.set(parseInt(x),E)}}return g}parseTexture(a,g){const w=this.loadTexture(a,g);w.ID=a.id,w.name=a.attrName;const x=a.WrapModeU,E=a.WrapModeV,P=x!==void 0?x.value:0,O=E!==void 0?E.value:0;if(w.wrapS=P===0?y1:Vr,w.wrapT=O===0?y1:Vr,"Scaling"in a){const G=a.Scaling.value;w.repeat.x=G[0],w.repeat.y=G[1]}if("Translation"in a){const G=a.Translation.value;w.offset.x=G[0],w.offset.y=G[1]}return w}loadTexture(a,g){let w;const x=this.textureLoader.path,E=Ci.get(a.id).children;E!==void 0&&E.length>0&&g[E[0].ID]!==void 0&&(w=g[E[0].ID],(w.indexOf("blob:")===0||w.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let P;const O=a.FileName.slice(-3).toLowerCase();if(O==="tga"){const G=this.manager.getHandler(".tga");G===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",a.RelativeFilename),P=new Ti):(G.setPath(this.textureLoader.path),P=G.load(w))}else if(O==="dds"){const G=this.manager.getHandler(".dds");G===null?(console.warn("FBXLoader: DDS loader not found, creating placeholder texture for",a.RelativeFilename),P=new Ti):(G.setPath(this.textureLoader.path),P=G.load(w))}else O==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",a.RelativeFilename),P=new Ti):P=this.textureLoader.load(w);return this.textureLoader.setPath(x),P}parseMaterials(a){const g=new Map;if("Material"in rn.Objects){const w=rn.Objects.Material;for(const x in w){const E=this.parseMaterial(w[x],a);E!==null&&g.set(parseInt(x),E)}}return g}parseMaterial(a,g){const w=a.id,x=a.attrName;let E=a.ShadingModel;if(typeof E=="object"&&(E=E.value),!Ci.has(w))return null;const P=this.parseParameters(a,g,w);let O;switch(E.toLowerCase()){case"phong":O=new f6;break;case"lambert":O=new tm2;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',E),O=new f6;break}return O.setValues(P),O.name=x,O}parseParameters(a,g,w){const x={};a.BumpFactor&&(x.bumpScale=a.BumpFactor.value),a.Diffuse?x.color=new ce().fromArray(a.Diffuse.value).convertSRGBToLinear():a.DiffuseColor&&(a.DiffuseColor.type==="Color"||a.DiffuseColor.type==="ColorRGB")&&(x.color=new ce().fromArray(a.DiffuseColor.value).convertSRGBToLinear()),a.DisplacementFactor&&(x.displacementScale=a.DisplacementFactor.value),a.Emissive?x.emissive=new ce().fromArray(a.Emissive.value).convertSRGBToLinear():a.EmissiveColor&&(a.EmissiveColor.type==="Color"||a.EmissiveColor.type==="ColorRGB")&&(x.emissive=new ce().fromArray(a.EmissiveColor.value).convertSRGBToLinear()),a.EmissiveFactor&&(x.emissiveIntensity=parseFloat(a.EmissiveFactor.value)),a.Opacity&&(x.opacity=parseFloat(a.Opacity.value)),x.opacity<1&&(x.transparent=!0),a.ReflectionFactor&&(x.reflectivity=a.ReflectionFactor.value),a.Shininess&&(x.shininess=a.Shininess.value),a.Specular?x.specular=new ce().fromArray(a.Specular.value).convertSRGBToLinear():a.SpecularColor&&a.SpecularColor.type==="Color"&&(x.specular=new ce().fromArray(a.SpecularColor.value).convertSRGBToLinear());const E=this;return Ci.get(w).children.forEach(function(P){const O=P.relationship;switch(O){case"Bump":x.bumpMap=E.getTexture(g,P.ID);break;case"Maya|TEX_ao_map":x.aoMap=E.getTexture(g,P.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":x.map=E.getTexture(g,P.ID),x.map!==void 0&&(x.map.colorSpace=di);break;case"DisplacementColor":x.displacementMap=E.getTexture(g,P.ID);break;case"EmissiveColor":x.emissiveMap=E.getTexture(g,P.ID),x.emissiveMap!==void 0&&(x.emissiveMap.colorSpace=di);break;case"NormalMap":case"Maya|TEX_normal_map":x.normalMap=E.getTexture(g,P.ID);break;case"ReflectionColor":x.envMap=E.getTexture(g,P.ID),x.envMap!==void 0&&(x.envMap.mapping=Hf,x.envMap.colorSpace=di);break;case"SpecularColor":x.specularMap=E.getTexture(g,P.ID),x.specularMap!==void 0&&(x.specularMap.colorSpace=di);break;case"TransparentColor":case"TransparencyFactor":x.alphaMap=E.getTexture(g,P.ID),x.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",O);break}}),x}getTexture(a,g){return"LayeredTexture"in rn.Objects&&g in rn.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),g=Ci.get(g).children[0].ID),a.get(g)}parseDeformers(){const a={},g={};if("Deformer"in rn.Objects){const w=rn.Objects.Deformer;for(const x in w){const E=w[x],P=Ci.get(parseInt(x));if(E.attrType==="Skin"){const O=this.parseSkeleton(P,w);O.ID=x,P.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),O.geometryID=P.parents[0].ID,a[x]=O}else if(E.attrType==="BlendShape"){const O={id:x};O.rawTargets=this.parseMorphTargets(P,w),O.id=x,P.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),g[x]=O}}}return{skeletons:a,morphTargets:g}}parseSkeleton(a,g){const w=[];return a.children.forEach(function(x){const E=g[x.ID];if(E.attrType!=="Cluster")return;const P={ID:x.ID,indices:[],weights:[],transformLink:new te().fromArray(E.TransformLink.a)};"Indexes"in E&&(P.indices=E.Indexes.a,P.weights=E.Weights.a),w.push(P)}),{rawBones:w,bones:[]}}parseMorphTargets(a,g){const w=[];for(let x=0;x<a.children.length;x++){const E=a.children[x],P=g[E.ID],O={name:P.attrName,initialWeight:P.DeformPercent,id:P.id,fullWeights:P.FullWeights.a};if(P.attrType!=="BlendShapeChannel")return;O.geoID=Ci.get(parseInt(E.ID)).children.filter(function(G){return G.relationship===void 0})[0].ID,w.push(O)}return w}parseScene(a,g,w){O0=new Cs;const x=this.parseModels(a.skeletons,g,w),E=rn.Objects.Model,P=this;x.forEach(function(G){const h=E[G.ID];P.setLookAtProperties(G,h),Ci.get(G.ID).parents.forEach(function(Z){const K=x.get(Z.ID);K!==void 0&&K.add(G)}),G.parent===null&&O0.add(G)}),this.bindSkeleton(a.skeletons,g,x),this.addGlobalSceneSettings(),O0.traverse(function(G){if(G.userData.transformData){G.parent&&(G.userData.transformData.parentMatrix=G.parent.matrix,G.userData.transformData.parentMatrixWorld=G.parent.matrixWorld);const h=RQ(G.userData.transformData);G.applyMatrix4(h),G.updateWorldMatrix()}});const O=new od2().parse();O0.children.length===1&&O0.children[0].isGroup&&(O0.children[0].animations=O,O0=O0.children[0]),O0.animations=O}parseModels(a,g,w){const x=new Map,E=rn.Objects.Model;for(const P in E){const O=parseInt(P),G=E[P],h=Ci.get(O);let X=this.buildSkeleton(h,a,O,G.attrName);if(!X){switch(G.attrType){case"Camera":X=this.createCamera(h);break;case"Light":X=this.createLight(h);break;case"Mesh":X=this.createMesh(h,g,w);break;case"NurbsCurve":X=this.createCurve(h,g);break;case"LimbNode":case"Root":X=new H4;break;case"Null":default:X=new Cs;break}X.name=G.attrName?An.sanitizeNodeName(G.attrName):"",X.userData.originalName=G.attrName,X.ID=O}this.getTransformData(X,G),x.set(O,X)}return x}buildSkeleton(a,g,w,x){let E=null;return a.parents.forEach(function(P){for(const O in g){const G=g[O];G.rawBones.forEach(function(h,X){if(h.ID===P.ID){const Z=E;E=new H4,E.matrixWorld.copy(h.transformLink),E.name=x?An.sanitizeNodeName(x):"",E.userData.originalName=x,E.ID=w,G.bones[X]=E,Z!==null&&E.add(Z)}})}}),E}createCamera(a){let g,w;if(a.children.forEach(function(x){const E=rn.Objects.NodeAttribute[x.ID];E!==void 0&&(w=E)}),w===void 0)g=new Un;else{let x=0;w.CameraProjectionType!==void 0&&w.CameraProjectionType.value===1&&(x=1);let E=1;w.NearPlane!==void 0&&(E=w.NearPlane.value/1e3);let P=1e3;w.FarPlane!==void 0&&(P=w.FarPlane.value/1e3);let O=window.innerWidth,G=window.innerHeight;w.AspectWidth!==void 0&&w.AspectHeight!==void 0&&(O=w.AspectWidth.value,G=w.AspectHeight.value);const h=O/G;let X=45;w.FieldOfView!==void 0&&(X=w.FieldOfView.value);const Z=w.FocalLength?w.FocalLength.value:null;switch(x){case 0:g=new S0(X,h,E,P),Z!==null&&g.setFocalLength(Z);break;case 1:g=new t_(-O/2,O/2,G/2,-G/2,E,P);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+x+"."),g=new Un;break}}return g}createLight(a){let g,w;if(a.children.forEach(function(x){const E=rn.Objects.NodeAttribute[x.ID];E!==void 0&&(w=E)}),w===void 0)g=new Un;else{let x;w.LightType===void 0?x=0:x=w.LightType.value;let E=16777215;w.Color!==void 0&&(E=new ce().fromArray(w.Color.value).convertSRGBToLinear());let P=w.Intensity===void 0?1:w.Intensity.value/100;w.CastLightOnObject!==void 0&&w.CastLightOnObject.value===0&&(P=0);let O=0;w.FarAttenuationEnd!==void 0&&(w.EnableFarAttenuation!==void 0&&w.EnableFarAttenuation.value===0?O=0:O=w.FarAttenuationEnd.value);const G=1;switch(x){case 0:g=new O6(E,P,O,G);break;case 1:g=new ph(E,P);break;case 2:let h=Math.PI/3;w.InnerAngle!==void 0&&(h=Yi.degToRad(w.InnerAngle.value));let X=0;w.OuterAngle!==void 0&&(X=Yi.degToRad(w.OuterAngle.value),X=Math.max(X,1)),g=new kQ(E,P,O,h,X,G);break;default:console.warn("THREE.FBXLoader: Unknown light type "+w.LightType.value+", defaulting to a PointLight."),g=new O6(E,P);break}w.CastShadows!==void 0&&w.CastShadows.value===1&&(g.castShadow=!0)}return g}createMesh(a,g,w){let x,E=null,P=null;const O=[];return a.children.forEach(function(G){g.has(G.ID)&&(E=g.get(G.ID)),w.has(G.ID)&&O.push(w.get(G.ID))}),O.length>1?P=O:O.length>0?P=O[0]:(P=new f6({name:go.DEFAULT_MATERIAL_NAME,color:13421772}),O.push(P)),"color"in E.attributes&&O.forEach(function(G){G.vertexColors=!0}),E.FBX_Deformer?(x=new sQ(E,P),x.normalizeSkinWeights()):x=new e0(E,P),x}createCurve(a,g){const w=a.children.reduce(function(E,P){return g.has(P.ID)&&(E=g.get(P.ID)),E},null),x=new np({name:go.DEFAULT_MATERIAL_NAME,color:3342591,linewidth:1});return new du(w,x)}getTransformData(a,g){const w={};"InheritType"in g&&(w.inheritType=parseInt(g.InheritType.value)),"RotationOrder"in g?w.eulerOrder=bQ(g.RotationOrder.value):w.eulerOrder="ZYX","Lcl_Translation"in g&&(w.translation=g.Lcl_Translation.value),"PreRotation"in g&&(w.preRotation=g.PreRotation.value),"Lcl_Rotation"in g&&(w.rotation=g.Lcl_Rotation.value),"PostRotation"in g&&(w.postRotation=g.PostRotation.value),"Lcl_Scaling"in g&&(w.scale=g.Lcl_Scaling.value),"ScalingOffset"in g&&(w.scalingOffset=g.ScalingOffset.value),"ScalingPivot"in g&&(w.scalingPivot=g.ScalingPivot.value),"RotationOffset"in g&&(w.rotationOffset=g.RotationOffset.value),"RotationPivot"in g&&(w.rotationPivot=g.RotationPivot.value),a.userData.transformData=w}setLookAtProperties(a,g){"LookAtProperty"in g&&Ci.get(a.ID).children.forEach(function(x){if(x.relationship==="LookAtProperty"){const E=rn.Objects.Model[x.ID];if("Lcl_Translation"in E){const P=E.Lcl_Translation.value;a.target!==void 0?(a.target.position.fromArray(P),O0.add(a.target)):a.lookAt(new E2().fromArray(P))}}})}bindSkeleton(a,g,w){const x=this.parsePoseNodes();for(const E in a){const P=a[E];Ci.get(parseInt(P.ID)).parents.forEach(function(G){if(g.has(G.ID)){const h=G.ID;Ci.get(h).parents.forEach(function(Z){w.has(Z.ID)&&w.get(Z.ID).bind(new n_(P.bones),x[Z.ID])})}})}}parsePoseNodes(){const a={};if("Pose"in rn.Objects){const g=rn.Objects.Pose;for(const w in g)if(g[w].attrType==="BindPose"&&g[w].NbPoseNodes>0){const x=g[w].PoseNode;Array.isArray(x)?x.forEach(function(E){a[E.Node]=new te().fromArray(E.Matrix.a)}):a[x.Node]=new te().fromArray(x.Matrix.a)}}return a}addGlobalSceneSettings(){if("GlobalSettings"in rn){if("AmbientColor"in rn.GlobalSettings){const a=rn.GlobalSettings.AmbientColor.value,g=a[0],w=a[1],x=a[2];if(g!==0||w!==0||x!==0){const E=new ce(g,w,x).convertSRGBToLinear();O0.add(new vQ(E,1))}}"UnitScaleFactor"in rn.GlobalSettings&&(O0.userData.unitScaleFactor=rn.GlobalSettings.UnitScaleFactor.value)}}}class rd2{constructor(){this.negativeMaterialIndices=!1}parse(a){const g=new Map;if("Geometry"in rn.Objects){const w=rn.Objects.Geometry;for(const x in w){const E=Ci.get(parseInt(x)),P=this.parseGeometry(E,w[x],a);g.set(parseInt(x),P)}}return this.negativeMaterialIndices===!0&&console.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."),g}parseGeometry(a,g,w){switch(g.attrType){case"Mesh":return this.parseMeshGeometry(a,g,w);case"NurbsCurve":return this.parseNurbsGeometry(g)}}parseMeshGeometry(a,g,w){const x=w.skeletons,E=[],P=a.parents.map(function(Z){return rn.Objects.Model[Z.ID]});if(P.length===0)return;const O=a.children.reduce(function(Z,K){return x[K.ID]!==void 0&&(Z=x[K.ID]),Z},null);a.children.forEach(function(Z){w.morphTargets[Z.ID]!==void 0&&E.push(w.morphTargets[Z.ID])});const G=P[0],h={};"RotationOrder"in G&&(h.eulerOrder=bQ(G.RotationOrder.value)),"InheritType"in G&&(h.inheritType=parseInt(G.InheritType.value)),"GeometricTranslation"in G&&(h.translation=G.GeometricTranslation.value),"GeometricRotation"in G&&(h.rotation=G.GeometricRotation.value),"GeometricScaling"in G&&(h.scale=G.GeometricScaling.value);const X=RQ(h);return this.genGeometry(g,O,E,X)}genGeometry(a,g,w,x){const E=new n0;a.attrName&&(E.name=a.attrName);const P=this.parseGeoNode(a,g),O=this.genBuffers(P),G=new gi(O.vertex,3);if(G.applyMatrix4(x),E.setAttribute("position",G),O.colors.length>0&&E.setAttribute("color",new gi(O.colors,3)),g&&(E.setAttribute("skinIndex",new K6(O.weightsIndices,4)),E.setAttribute("skinWeight",new gi(O.vertexWeights,4)),E.FBX_Deformer=g),O.normal.length>0){const h=new Je().getNormalMatrix(x),X=new gi(O.normal,3);X.applyNormalMatrix(h),E.setAttribute("normal",X)}if(O.uvs.forEach(function(h,X){const Z=X===0?"uv":`uv${X}`;E.setAttribute(Z,new gi(O.uvs[X],2))}),P.material&&P.material.mappingType!=="AllSame"){let h=O.materialIndex[0],X=0;if(O.materialIndex.forEach(function(Z,K){Z!==h&&(E.addGroup(X,K-X,h),h=Z,X=K)}),E.groups.length>0){const Z=E.groups[E.groups.length-1],K=Z.start+Z.count;K!==O.materialIndex.length&&E.addGroup(K,O.materialIndex.length-K,h)}E.groups.length===0&&E.addGroup(0,O.materialIndex.length,O.materialIndex[0])}return this.addMorphTargets(E,a,w,x),E}parseGeoNode(a,g){const w={};if(w.vertexPositions=a.Vertices!==void 0?a.Vertices.a:[],w.vertexIndices=a.PolygonVertexIndex!==void 0?a.PolygonVertexIndex.a:[],a.LayerElementColor&&(w.color=this.parseVertexColors(a.LayerElementColor[0])),a.LayerElementMaterial&&(w.material=this.parseMaterialIndices(a.LayerElementMaterial[0])),a.LayerElementNormal&&(w.normal=this.parseNormals(a.LayerElementNormal[0])),a.LayerElementUV){w.uv=[];let x=0;for(;a.LayerElementUV[x];)a.LayerElementUV[x].UV&&w.uv.push(this.parseUVs(a.LayerElementUV[x])),x++}return w.weightTable={},g!==null&&(w.skeleton=g,g.rawBones.forEach(function(x,E){x.indices.forEach(function(P,O){w.weightTable[P]===void 0&&(w.weightTable[P]=[]),w.weightTable[P].push({id:E,weight:x.weights[O]})})})),w}genBuffers(a){const g={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let w=0,x=0,E=!1,P=[],O=[],G=[],h=[],X=[],Z=[];const K=this;return a.vertexIndices.forEach(function(e2,l2){let p2,r2=!1;e2<0&&(e2=e2^-1,r2=!0);let o2=[],v2=[];if(P.push(e2*3,e2*3+1,e2*3+2),a.color){const m2=E4(l2,w,e2,a.color);G.push(m2[0],m2[1],m2[2])}if(a.skeleton){if(a.weightTable[e2]!==void 0&&a.weightTable[e2].forEach(function(m2){v2.push(m2.weight),o2.push(m2.id)}),v2.length>4){E||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),E=!0);const m2=[0,0,0,0],k2=[0,0,0,0];v2.forEach(function(j2,b2){let D2=j2,N2=o2[b2];k2.forEach(function(B2,g2,W2){if(D2>B2){W2[g2]=D2,D2=B2;const nt=m2[g2];m2[g2]=N2,N2=nt}})}),o2=m2,v2=k2}for(;v2.length<4;)v2.push(0),o2.push(0);for(let m2=0;m2<4;++m2)X.push(v2[m2]),Z.push(o2[m2])}if(a.normal){const m2=E4(l2,w,e2,a.normal);O.push(m2[0],m2[1],m2[2])}a.material&&a.material.mappingType!=="AllSame"&&(p2=E4(l2,w,e2,a.material)[0],p2<0&&(K.negativeMaterialIndices=!0,p2=0)),a.uv&&a.uv.forEach(function(m2,k2){const j2=E4(l2,w,e2,m2);h[k2]===void 0&&(h[k2]=[]),h[k2].push(j2[0]),h[k2].push(j2[1])}),x++,r2&&(K.genFace(g,a,P,p2,O,G,h,X,Z,x),w++,x=0,P=[],O=[],G=[],h=[],X=[],Z=[])}),g}getNormalNewell(a){const g=new E2(0,0,0);for(let w=0;w<a.length;w++){const x=a[w],E=a[(w+1)%a.length];g.x+=(x.y-E.y)*(x.z+E.z),g.y+=(x.z-E.z)*(x.x+E.x),g.z+=(x.x-E.x)*(x.y+E.y)}return g.normalize(),g}getNormalTangentAndBitangent(a){const g=this.getNormalNewell(a),x=(Math.abs(g.z)>.5?new E2(0,1,0):new E2(0,0,1)).cross(g).normalize(),E=g.clone().cross(x).normalize();return{normal:g,tangent:x,bitangent:E}}flattenVertex(a,g,w){return new Lt(a.dot(g),a.dot(w))}genFace(a,g,w,x,E,P,O,G,h,X){let Z;if(X>3){const K=[];for(let r2=0;r2<w.length;r2+=3)K.push(new E2(g.vertexPositions[w[r2]],g.vertexPositions[w[r2+1]],g.vertexPositions[w[r2+2]]));const{tangent:e2,bitangent:l2}=this.getNormalTangentAndBitangent(K),p2=[];for(const r2 of K)p2.push(this.flattenVertex(r2,e2,l2));Z=uh.triangulateShape(p2,[])}else Z=[[0,1,2]];for(const[K,e2,l2]of Z)a.vertex.push(g.vertexPositions[w[K*3]]),a.vertex.push(g.vertexPositions[w[K*3+1]]),a.vertex.push(g.vertexPositions[w[K*3+2]]),a.vertex.push(g.vertexPositions[w[e2*3]]),a.vertex.push(g.vertexPositions[w[e2*3+1]]),a.vertex.push(g.vertexPositions[w[e2*3+2]]),a.vertex.push(g.vertexPositions[w[l2*3]]),a.vertex.push(g.vertexPositions[w[l2*3+1]]),a.vertex.push(g.vertexPositions[w[l2*3+2]]),g.skeleton&&(a.vertexWeights.push(G[K*4]),a.vertexWeights.push(G[K*4+1]),a.vertexWeights.push(G[K*4+2]),a.vertexWeights.push(G[K*4+3]),a.vertexWeights.push(G[e2*4]),a.vertexWeights.push(G[e2*4+1]),a.vertexWeights.push(G[e2*4+2]),a.vertexWeights.push(G[e2*4+3]),a.vertexWeights.push(G[l2*4]),a.vertexWeights.push(G[l2*4+1]),a.vertexWeights.push(G[l2*4+2]),a.vertexWeights.push(G[l2*4+3]),a.weightsIndices.push(h[K*4]),a.weightsIndices.push(h[K*4+1]),a.weightsIndices.push(h[K*4+2]),a.weightsIndices.push(h[K*4+3]),a.weightsIndices.push(h[e2*4]),a.weightsIndices.push(h[e2*4+1]),a.weightsIndices.push(h[e2*4+2]),a.weightsIndices.push(h[e2*4+3]),a.weightsIndices.push(h[l2*4]),a.weightsIndices.push(h[l2*4+1]),a.weightsIndices.push(h[l2*4+2]),a.weightsIndices.push(h[l2*4+3])),g.color&&(a.colors.push(P[K*3]),a.colors.push(P[K*3+1]),a.colors.push(P[K*3+2]),a.colors.push(P[e2*3]),a.colors.push(P[e2*3+1]),a.colors.push(P[e2*3+2]),a.colors.push(P[l2*3]),a.colors.push(P[l2*3+1]),a.colors.push(P[l2*3+2])),g.material&&g.material.mappingType!=="AllSame"&&(a.materialIndex.push(x),a.materialIndex.push(x),a.materialIndex.push(x)),g.normal&&(a.normal.push(E[K*3]),a.normal.push(E[K*3+1]),a.normal.push(E[K*3+2]),a.normal.push(E[e2*3]),a.normal.push(E[e2*3+1]),a.normal.push(E[e2*3+2]),a.normal.push(E[l2*3]),a.normal.push(E[l2*3+1]),a.normal.push(E[l2*3+2])),g.uv&&g.uv.forEach(function(p2,r2){a.uvs[r2]===void 0&&(a.uvs[r2]=[]),a.uvs[r2].push(O[r2][K*2]),a.uvs[r2].push(O[r2][K*2+1]),a.uvs[r2].push(O[r2][e2*2]),a.uvs[r2].push(O[r2][e2*2+1]),a.uvs[r2].push(O[r2][l2*2]),a.uvs[r2].push(O[r2][l2*2+1])})}addMorphTargets(a,g,w,x){if(w.length===0)return;a.morphTargetsRelative=!0,a.morphAttributes.position=[];const E=this;w.forEach(function(P){P.rawTargets.forEach(function(O){const G=rn.Objects.Geometry[O.geoID];G!==void 0&&E.genMorphGeometry(a,g,G,x,O.name)})})}genMorphGeometry(a,g,w,x,E){const P=g.PolygonVertexIndex!==void 0?g.PolygonVertexIndex.a:[],O=w.Vertices!==void 0?w.Vertices.a:[],G=w.Indexes!==void 0?w.Indexes.a:[],h=a.attributes.position.count*3,X=new Float32Array(h);for(let l2=0;l2<G.length;l2++){const p2=G[l2]*3;X[p2]=O[l2*3],X[p2+1]=O[l2*3+1],X[p2+2]=O[l2*3+2]}const Z={vertexIndices:P,vertexPositions:X},K=this.genBuffers(Z),e2=new gi(K.vertex,3);e2.name=E||w.attrName,e2.applyMatrix4(x),a.morphAttributes.position.push(e2)}parseNormals(a){const g=a.MappingInformationType,w=a.ReferenceInformationType,x=a.Normals.a;let E=[];return w==="IndexToDirect"&&("NormalIndex"in a?E=a.NormalIndex.a:"NormalsIndex"in a&&(E=a.NormalsIndex.a)),{dataSize:3,buffer:x,indices:E,mappingType:g,referenceType:w}}parseUVs(a){const g=a.MappingInformationType,w=a.ReferenceInformationType,x=a.UV.a;let E=[];return w==="IndexToDirect"&&(E=a.UVIndex.a),{dataSize:2,buffer:x,indices:E,mappingType:g,referenceType:w}}parseVertexColors(a){const g=a.MappingInformationType,w=a.ReferenceInformationType,x=a.Colors.a;let E=[];w==="IndexToDirect"&&(E=a.ColorIndex.a);for(let P=0,O=new ce;P<x.length;P+=4)O.fromArray(x,P).convertSRGBToLinear().toArray(x,P);return{dataSize:4,buffer:x,indices:E,mappingType:g,referenceType:w}}parseMaterialIndices(a){const g=a.MappingInformationType,w=a.ReferenceInformationType;if(g==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:w};const x=a.Materials.a,E=[];for(let P=0;P<x.length;++P)E.push(P);return{dataSize:1,buffer:x,indices:E,mappingType:g,referenceType:w}}parseNurbsGeometry(a){const g=parseInt(a.Order);if(isNaN(g))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",a.Order,a.id),new n0;const w=g-1,x=a.KnotVector.a,E=[],P=a.Points.a;for(let Z=0,K=P.length;Z<K;Z+=4)E.push(new En().fromArray(P,Z));let O,G;if(a.Form==="Closed")E.push(E[0]);else if(a.Form==="Periodic"){O=w,G=x.length-1-O;for(let Z=0;Z<w;++Z)E.push(E[Z])}const X=new ed2(w,x,E,O,G).getPoints(E.length*12);return new n0().setFromPoints(X)}}class od2{parse(){const a=[],g=this.parseClips();if(g!==void 0)for(const w in g){const x=g[w],E=this.addClip(x);a.push(E)}return a}parseClips(){if(rn.Objects.AnimationCurve===void 0)return;const a=this.parseAnimationCurveNodes();this.parseAnimationCurves(a);const g=this.parseAnimationLayers(a);return this.parseAnimStacks(g)}parseAnimationCurveNodes(){const a=rn.Objects.AnimationCurveNode,g=new Map;for(const w in a){const x=a[w];if(x.attrName.match(/S|R|T|DeformPercent/)!==null){const E={id:x.id,attr:x.attrName,curves:{}};g.set(E.id,E)}}return g}parseAnimationCurves(a){const g=rn.Objects.AnimationCurve;for(const w in g){const x={id:g[w].id,times:g[w].KeyTime.a.map(pd2),values:g[w].KeyValueFloat.a},E=Ci.get(x.id);if(E!==void 0){const P=E.parents[0].ID,O=E.parents[0].relationship;O.match(/X/)?a.get(P).curves.x=x:O.match(/Y/)?a.get(P).curves.y=x:O.match(/Z/)?a.get(P).curves.z=x:O.match(/DeformPercent/)&&a.has(P)&&(a.get(P).curves.morph=x)}}}parseAnimationLayers(a){const g=rn.Objects.AnimationLayer,w=new Map;for(const x in g){const E=[],P=Ci.get(parseInt(x));P!==void 0&&(P.children.forEach(function(G,h){if(a.has(G.ID)){const X=a.get(G.ID);if(X.curves.x!==void 0||X.curves.y!==void 0||X.curves.z!==void 0){if(E[h]===void 0){const Z=Ci.get(G.ID).parents.filter(function(K){return K.relationship!==void 0})[0].ID;if(Z!==void 0){const K=rn.Objects.Model[Z.toString()];if(K===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",G);return}const e2={modelName:K.attrName?An.sanitizeNodeName(K.attrName):"",ID:K.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};O0.traverse(function(l2){l2.ID===K.id&&(e2.transform=l2.matrix,l2.userData.transformData&&(e2.eulerOrder=l2.userData.transformData.eulerOrder))}),e2.transform||(e2.transform=new te),"PreRotation"in K&&(e2.preRotation=K.PreRotation.value),"PostRotation"in K&&(e2.postRotation=K.PostRotation.value),E[h]=e2}}E[h]&&(E[h][X.attr]=X)}else if(X.curves.morph!==void 0){if(E[h]===void 0){const Z=Ci.get(G.ID).parents.filter(function(o2){return o2.relationship!==void 0})[0].ID,K=Ci.get(Z).parents[0].ID,e2=Ci.get(K).parents[0].ID,l2=Ci.get(e2).parents[0].ID,p2=rn.Objects.Model[l2],r2={modelName:p2.attrName?An.sanitizeNodeName(p2.attrName):"",morphName:rn.Objects.Deformer[Z].attrName};E[h]=r2}E[h][X.attr]=X}}}),w.set(parseInt(x),E))}return w}parseAnimStacks(a){const g=rn.Objects.AnimationStack,w={};for(const x in g){const E=Ci.get(parseInt(x)).children;E.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const P=a.get(E[0].ID);w[x]={name:g[x].attrName,layer:P}}return w}addClip(a){let g=[];const w=this;return a.layer.forEach(function(x){g=g.concat(w.generateTracks(x))}),new Y4(a.name,-1,g)}generateTracks(a){const g=[];let w=new E2,x=new E2;if(a.transform&&a.transform.decompose(w,new Xn,x),w=w.toArray(),x=x.toArray(),a.T!==void 0&&Object.keys(a.T.curves).length>0){const E=this.generateVectorTrack(a.modelName,a.T.curves,w,"position");E!==void 0&&g.push(E)}if(a.R!==void 0&&Object.keys(a.R.curves).length>0){const E=this.generateRotationTrack(a.modelName,a.R.curves,a.preRotation,a.postRotation,a.eulerOrder);E!==void 0&&g.push(E)}if(a.S!==void 0&&Object.keys(a.S.curves).length>0){const E=this.generateVectorTrack(a.modelName,a.S.curves,x,"scale");E!==void 0&&g.push(E)}if(a.DeformPercent!==void 0){const E=this.generateMorphTrack(a);E!==void 0&&g.push(E)}return g}generateVectorTrack(a,g,w,x){const E=this.getTimesForAllAxes(g),P=this.getKeyframeTrackValues(E,g,w);return new J1(a+"."+x,E,P)}generateRotationTrack(a,g,w,x,E){let P,O;if(g.x!==void 0&&g.y!==void 0&&g.z!==void 0){const Z=this.interpolateRotations(g.x,g.y,g.z,E);P=Z[0],O=Z[1]}w!==void 0&&(w=w.map(Yi.degToRad),w.push(E),w=new Ai().fromArray(w),w=new Xn().setFromEuler(w)),x!==void 0&&(x=x.map(Yi.degToRad),x.push(E),x=new Ai().fromArray(x),x=new Xn().setFromEuler(x).invert());const G=new Xn,h=new Ai,X=[];if(!O||!P)return new Ms(a+".quaternion",[0],[0]);for(let Z=0;Z<O.length;Z+=3)h.set(O[Z],O[Z+1],O[Z+2],E),G.setFromEuler(h),w!==void 0&&G.premultiply(w),x!==void 0&&G.multiply(x),Z>2&&new Xn().fromArray(X,(Z-3)/3*4).dot(G)<0&&G.set(-G.x,-G.y,-G.z,-G.w),G.toArray(X,Z/3*4);return new Ms(a+".quaternion",P,X)}generateMorphTrack(a){const g=a.DeformPercent.curves.morph,w=g.values.map(function(E){return E/100}),x=O0.getObjectByName(a.modelName).morphTargetDictionary[a.morphName];return new q1(a.modelName+".morphTargetInfluences["+x+"]",g.times,w)}getTimesForAllAxes(a){let g=[];if(a.x!==void 0&&(g=g.concat(a.x.times)),a.y!==void 0&&(g=g.concat(a.y.times)),a.z!==void 0&&(g=g.concat(a.z.times)),g=g.sort(function(w,x){return w-x}),g.length>1){let w=1,x=g[0];for(let E=1;E<g.length;E++){const P=g[E];P!==x&&(g[w]=P,x=P,w++)}g=g.slice(0,w)}return g}getKeyframeTrackValues(a,g,w){const x=w,E=[];let P=-1,O=-1,G=-1;return a.forEach(function(h){if(g.x&&(P=g.x.times.indexOf(h)),g.y&&(O=g.y.times.indexOf(h)),g.z&&(G=g.z.times.indexOf(h)),P!==-1){const X=g.x.values[P];E.push(X),x[0]=X}else E.push(x[0]);if(O!==-1){const X=g.y.values[O];E.push(X),x[1]=X}else E.push(x[1]);if(G!==-1){const X=g.z.values[G];E.push(X),x[2]=X}else E.push(x[2])}),E}interpolateRotations(a,g,w,x){const E=[],P=[];E.push(a.times[0]),P.push(Yi.degToRad(a.values[0])),P.push(Yi.degToRad(g.values[0])),P.push(Yi.degToRad(w.values[0]));for(let O=1;O<a.values.length;O++){const G=[a.values[O-1],g.values[O-1],w.values[O-1]];if(isNaN(G[0])||isNaN(G[1])||isNaN(G[2]))continue;const h=G.map(Yi.degToRad),X=[a.values[O],g.values[O],w.values[O]];if(isNaN(X[0])||isNaN(X[1])||isNaN(X[2]))continue;const Z=X.map(Yi.degToRad),K=[X[0]-G[0],X[1]-G[1],X[2]-G[2]],e2=[Math.abs(K[0]),Math.abs(K[1]),Math.abs(K[2])];if(e2[0]>=180||e2[1]>=180||e2[2]>=180){const p2=Math.max(...e2)/180,r2=new Ai(...h,x),o2=new Ai(...Z,x),v2=new Xn().setFromEuler(r2),m2=new Xn().setFromEuler(o2);v2.dot(m2)&&m2.set(-m2.x,-m2.y,-m2.z,-m2.w);const k2=a.times[O-1],j2=a.times[O]-k2,b2=new Xn,D2=new Ai;for(let N2=0;N2<1;N2+=1/p2)b2.copy(v2.clone().slerp(m2.clone(),N2)),E.push(k2+N2*j2),D2.setFromQuaternion(b2,x),P.push(D2.x),P.push(D2.y),P.push(D2.z)}else E.push(a.times[O]),P.push(Yi.degToRad(a.values[O])),P.push(Yi.degToRad(g.values[O])),P.push(Yi.degToRad(w.values[O]))}return[E,P]}}class sd2{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(a){this.nodeStack.push(a),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(a,g){this.currentProp=a,this.currentPropName=g}parse(a){this.currentIndent=0,this.allNodes=new EQ,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const g=this,w=a.split(/[\r\n]+/);return w.forEach(function(x,E){const P=x.match(/^[\s\t]*;/),O=x.match(/^[\s\t]*$/);if(P||O)return;const G=x.match("^\\t{"+g.currentIndent+"}(\\w+):(.*){",""),h=x.match("^\\t{"+g.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),X=x.match("^\\t{"+(g.currentIndent-1)+"}}");G?g.parseNodeBegin(x,G):h?g.parseNodeProperty(x,h,w[++E]):X?g.popStack():x.match(/^[^\s\t}]/)&&g.parseNodePropertyContinued(x)}),this.allNodes}parseNodeBegin(a,g){const w=g[1].trim().replace(/^"/,"").replace(/"$/,""),x=g[2].split(",").map(function(G){return G.trim().replace(/^"/,"").replace(/"$/,"")}),E={name:w},P=this.parseNodeAttr(x),O=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(w,E):w in O?(w==="PoseNode"?O.PoseNode.push(E):O[w].id!==void 0&&(O[w]={},O[w][O[w].id]=O[w]),P.id!==""&&(O[w][P.id]=E)):typeof P.id=="number"?(O[w]={},O[w][P.id]=E):w!=="Properties70"&&(w==="PoseNode"?O[w]=[E]:O[w]=E),typeof P.id=="number"&&(E.id=P.id),P.name!==""&&(E.attrName=P.name),P.type!==""&&(E.attrType=P.type),this.pushStack(E)}parseNodeAttr(a){let g=a[0];a[0]!==""&&(g=parseInt(a[0]),isNaN(g)&&(g=a[0]));let w="",x="";return a.length>1&&(w=a[1].replace(/^(\w+)::/,""),x=a[2]),{id:g,name:w,type:x}}parseNodeProperty(a,g,w){let x=g[1].replace(/^"/,"").replace(/"$/,"").trim(),E=g[2].replace(/^"/,"").replace(/"$/,"").trim();x==="Content"&&E===","&&(E=w.replace(/"/g,"").replace(/,$/,"").trim());const P=this.getCurrentNode();if(P.name==="Properties70"){this.parseNodeSpecialProperty(a,x,E);return}if(x==="C"){const G=E.split(",").slice(1),h=parseInt(G[0]),X=parseInt(G[1]);let Z=E.split(",").slice(3);Z=Z.map(function(K){return K.trim().replace(/^"/,"")}),x="connections",E=[h,X],_d2(E,Z),P[x]===void 0&&(P[x]=[])}x==="Node"&&(P.id=E),x in P&&Array.isArray(P[x])?P[x].push(E):x!=="a"?P[x]=E:P.a=E,this.setCurrentProp(P,x),x==="a"&&E.slice(-1)!==","&&(P.a=m6(E))}parseNodePropertyContinued(a){const g=this.getCurrentNode();g.a+=a,a.slice(-1)!==","&&(g.a=m6(g.a))}parseNodeSpecialProperty(a,g,w){const x=w.split('",').map(function(X){return X.trim().replace(/^\"/,"").replace(/\s/,"_")}),E=x[0],P=x[1],O=x[2],G=x[3];let h=x[4];switch(P){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":h=parseFloat(h);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":h=m6(h);break}this.getPrevNode()[E]={type:P,type2:O,flag:G,value:h},this.setCurrentProp(this.getPrevNode(),E)}}class ld2{parse(a){const g=new gz(a);g.skip(23);const w=g.getUint32();if(w<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+w);const x=new EQ;for(;!this.endOfContent(g);){const E=this.parseNode(g,w);E!==null&&x.add(E.name,E)}return x}endOfContent(a){return a.size()%16===0?(a.getOffset()+160+16&-16)>=a.size():a.getOffset()+160+16>=a.size()}parseNode(a,g){const w={},x=g>=7500?a.getUint64():a.getUint32(),E=g>=7500?a.getUint64():a.getUint32();g>=7500?a.getUint64():a.getUint32();const P=a.getUint8(),O=a.getString(P);if(x===0)return null;const G=[];for(let K=0;K<E;K++)G.push(this.parseProperty(a));const h=G.length>0?G[0]:"",X=G.length>1?G[1]:"",Z=G.length>2?G[2]:"";for(w.singleProperty=E===1&&a.getOffset()===x;x>a.getOffset();){const K=this.parseNode(a,g);K!==null&&this.parseSubNode(O,w,K)}return w.propertyList=G,typeof h=="number"&&(w.id=h),X!==""&&(w.attrName=X),Z!==""&&(w.attrType=Z),O!==""&&(w.name=O),w}parseSubNode(a,g,w){if(w.singleProperty===!0){const x=w.propertyList[0];Array.isArray(x)?(g[w.name]=w,w.a=x):g[w.name]=x}else if(a==="Connections"&&w.name==="C"){const x=[];w.propertyList.forEach(function(E,P){P!==0&&x.push(E)}),g.connections===void 0&&(g.connections=[]),g.connections.push(x)}else if(w.name==="Properties70")Object.keys(w).forEach(function(E){g[E]=w[E]});else if(a==="Properties70"&&w.name==="P"){let x=w.propertyList[0],E=w.propertyList[1];const P=w.propertyList[2],O=w.propertyList[3];let G;x.indexOf("Lcl ")===0&&(x=x.replace("Lcl ","Lcl_")),E.indexOf("Lcl ")===0&&(E=E.replace("Lcl ","Lcl_")),E==="Color"||E==="ColorRGB"||E==="Vector"||E==="Vector3D"||E.indexOf("Lcl_")===0?G=[w.propertyList[4],w.propertyList[5],w.propertyList[6]]:G=w.propertyList[4],g[x]={type:E,type2:P,flag:O,value:G}}else g[w.name]===void 0?typeof w.id=="number"?(g[w.name]={},g[w.name][w.id]=w):g[w.name]=w:w.name==="PoseNode"?(Array.isArray(g[w.name])||(g[w.name]=[g[w.name]]),g[w.name].push(w)):g[w.name][w.id]===void 0&&(g[w.name][w.id]=w)}parseProperty(a){const g=a.getString(1);let w;switch(g){case"C":return a.getBoolean();case"D":return a.getFloat64();case"F":return a.getFloat32();case"I":return a.getInt32();case"L":return a.getInt64();case"R":return w=a.getUint32(),a.getArrayBuffer(w);case"S":return w=a.getUint32(),a.getString(w);case"Y":return a.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const x=a.getUint32(),E=a.getUint32(),P=a.getUint32();if(E===0)switch(g){case"b":case"c":return a.getBooleanArray(x);case"d":return a.getFloat64Array(x);case"f":return a.getFloat32Array(x);case"i":return a.getInt32Array(x);case"l":return a.getInt64Array(x)}const O=zm2(new Uint8Array(a.getArrayBuffer(P))),G=new gz(O.buffer);switch(g){case"b":case"c":return G.getBooleanArray(x);case"d":return G.getFloat64Array(x);case"f":return G.getFloat32Array(x);case"i":return G.getInt32Array(x);case"l":return G.getInt64Array(x)}break;default:throw new Error("THREE.FBXLoader: Unknown property type "+g)}}}class gz{constructor(a,g){this.dv=new DataView(a),this.offset=0,this.littleEndian=g!==void 0?g:!0,this._textDecoder=new TextDecoder}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(a){this.offset+=a}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(a){const g=[];for(let w=0;w<a;w++)g.push(this.getBoolean());return g}getUint8(){const a=this.dv.getUint8(this.offset);return this.offset+=1,a}getInt16(){const a=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,a}getInt32(){const a=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,a}getInt32Array(a){const g=[];for(let w=0;w<a;w++)g.push(this.getInt32());return g}getUint32(){const a=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,a}getInt64(){let a,g;return this.littleEndian?(a=this.getUint32(),g=this.getUint32()):(g=this.getUint32(),a=this.getUint32()),g&2147483648?(g=~g&4294967295,a=~a&4294967295,a===4294967295&&(g=g+1&4294967295),a=a+1&4294967295,-(g*4294967296+a)):g*4294967296+a}getInt64Array(a){const g=[];for(let w=0;w<a;w++)g.push(this.getInt64());return g}getUint64(){let a,g;return this.littleEndian?(a=this.getUint32(),g=this.getUint32()):(g=this.getUint32(),a=this.getUint32()),g*4294967296+a}getFloat32(){const a=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,a}getFloat32Array(a){const g=[];for(let w=0;w<a;w++)g.push(this.getFloat32());return g}getFloat64(){const a=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,a}getFloat64Array(a){const g=[];for(let w=0;w<a;w++)g.push(this.getFloat64());return g}getArrayBuffer(a){const g=this.dv.buffer.slice(this.offset,this.offset+a);return this.offset+=a,g}getString(a){const g=this.offset;let w=new Uint8Array(this.dv.buffer,g,a);this.skip(a);const x=w.indexOf(0);return x>=0&&(w=new Uint8Array(this.dv.buffer,g,x)),this._textDecoder.decode(w)}}class EQ{add(a,g){this[a]=g}}function ud2(D){const a="Kaydara FBX Binary  \0";return D.byteLength>=a.length&&a===DQ(D,0,a.length)}function fd2(D){const a=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let g=0;function w(x){const E=D[x-1];return D=D.slice(g+x),g++,E}for(let x=0;x<a.length;++x)if(w(1)===a[x])return!1;return!0}function yz(D){const a=/FBXVersion: (\d+)/,g=D.match(a);if(g)return parseInt(g[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function pd2(D){return D/46186158e3}const cd2=[];function E4(D,a,g,w){let x;switch(w.mappingType){case"ByPolygonVertex":x=D;break;case"ByPolygon":x=a;break;case"ByVertice":x=g;break;case"AllSame":x=w.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+w.mappingType)}w.referenceType==="IndexToDirect"&&(x=w.indices[x]);const E=x*w.dataSize,P=E+w.dataSize;return ad2(cd2,w.buffer,E,P)}const h6=new Ai,Kl=new E2;function RQ(D){const a=new te,g=new te,w=new te,x=new te,E=new te,P=new te,O=new te,G=new te,h=new te,X=new te,Z=new te,K=new te,e2=D.inheritType?D.inheritType:0;if(D.translation&&a.setPosition(Kl.fromArray(D.translation)),D.preRotation){const g2=D.preRotation.map(Yi.degToRad);g2.push(D.eulerOrder||Ai.DEFAULT_ORDER),g.makeRotationFromEuler(h6.fromArray(g2))}if(D.rotation){const g2=D.rotation.map(Yi.degToRad);g2.push(D.eulerOrder||Ai.DEFAULT_ORDER),w.makeRotationFromEuler(h6.fromArray(g2))}if(D.postRotation){const g2=D.postRotation.map(Yi.degToRad);g2.push(D.eulerOrder||Ai.DEFAULT_ORDER),x.makeRotationFromEuler(h6.fromArray(g2)),x.invert()}D.scale&&E.scale(Kl.fromArray(D.scale)),D.scalingOffset&&O.setPosition(Kl.fromArray(D.scalingOffset)),D.scalingPivot&&P.setPosition(Kl.fromArray(D.scalingPivot)),D.rotationOffset&&G.setPosition(Kl.fromArray(D.rotationOffset)),D.rotationPivot&&h.setPosition(Kl.fromArray(D.rotationPivot)),D.parentMatrixWorld&&(Z.copy(D.parentMatrix),X.copy(D.parentMatrixWorld));const l2=g.clone().multiply(w).multiply(x),p2=new te;p2.extractRotation(X);const r2=new te;r2.copyPosition(X);const o2=r2.clone().invert().multiply(X),v2=p2.clone().invert().multiply(o2),m2=E,k2=new te;if(e2===0)k2.copy(p2).multiply(l2).multiply(v2).multiply(m2);else if(e2===1)k2.copy(p2).multiply(v2).multiply(l2).multiply(m2);else{const W2=new te().scale(new E2().setFromMatrixScale(Z)).clone().invert(),nt=v2.clone().multiply(W2);k2.copy(p2).multiply(l2).multiply(nt).multiply(m2)}const j2=h.clone().invert(),b2=P.clone().invert();let D2=a.clone().multiply(G).multiply(h).multiply(g).multiply(w).multiply(x).multiply(j2).multiply(O).multiply(P).multiply(E).multiply(b2);const N2=new te().copyPosition(D2),B2=X.clone().multiply(N2);return K.copyPosition(B2),D2=K.clone().multiply(k2),D2.premultiply(X.invert()),D2}function bQ(D){D=D||0;const a=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return D===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),a[0]):a[D]}function m6(D){return D.split(",").map(function(g){return parseFloat(g)})}function DQ(D,a,g){return a===void 0&&(a=0),g===void 0&&(g=D.byteLength),new TextDecoder().decode(new Uint8Array(D,a,g))}function _d2(D,a){for(let g=0,w=D.length,x=a.length;g<x;g++,w++)D[w]=a[g]}function ad2(D,a,g,w){for(let x=g,E=0;x<w;x++,E++)D[E]=a[x];return D}function kz(D,a){if(a===Dc2)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),D;if(a===R6||a===Wz){let g=D.getIndex();if(g===null){const P=[],O=D.getAttribute("position");if(O!==void 0){for(let G=0;G<O.count;G++)P.push(G);D.setIndex(P),g=D.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),D}const w=g.count-2,x=[];if(a===R6)for(let P=1;P<=w;P++)x.push(g.getX(0)),x.push(g.getX(P)),x.push(g.getX(P+1));else for(let P=0;P<w;P++)P%2===0?(x.push(g.getX(P)),x.push(g.getX(P+1)),x.push(g.getX(P+2))):(x.push(g.getX(P+2)),x.push(g.getX(P+1)),x.push(g.getX(P)));x.length/3!==w&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const E=D.clone();return E.setIndex(x),E.clearGroups(),E}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",a),D}class op extends go{constructor(a){super(a),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(g){return new gd2(g)}),this.register(function(g){return new yd2(g)}),this.register(function(g){return new Td2(g)}),this.register(function(g){return new Ed2(g)}),this.register(function(g){return new Rd2(g)}),this.register(function(g){return new vd2(g)}),this.register(function(g){return new wd2(g)}),this.register(function(g){return new Bd2(g)}),this.register(function(g){return new Sd2(g)}),this.register(function(g){return new Ad2(g)}),this.register(function(g){return new xd2(g)}),this.register(function(g){return new kd2(g)}),this.register(function(g){return new Md2(g)}),this.register(function(g){return new Cd2(g)}),this.register(function(g){return new md2(g)}),this.register(function(g){return new bd2(g)}),this.register(function(g){return new Dd2(g)})}load(a,g,w,x){const E=this;let P;if(this.resourcePath!=="")P=this.resourcePath;else if(this.path!==""){const h=lu.extractUrlBase(a);P=lu.resolveURL(h,this.path)}else P=lu.extractUrlBase(a);this.manager.itemStart(a);const O=function(h){x?x(h):console.error(h),E.manager.itemError(a),E.manager.itemEnd(a)},G=new Au(this.manager);G.setPath(this.path),G.setResponseType("arraybuffer"),G.setRequestHeader(this.requestHeader),G.setWithCredentials(this.withCredentials),G.load(a,function(h){try{E.parse(h,P,function(X){g(X),E.manager.itemEnd(a)},O)}catch(X){O(X)}},w,O)}setDRACOLoader(a){return this.dracoLoader=a,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(a){return this.ktx2Loader=a,this}setMeshoptDecoder(a){return this.meshoptDecoder=a,this}register(a){return this.pluginCallbacks.indexOf(a)===-1&&this.pluginCallbacks.push(a),this}unregister(a){return this.pluginCallbacks.indexOf(a)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(a),1),this}parse(a,g,w,x){let E;const P={},O={},G=new TextDecoder;if(typeof a=="string")E=JSON.parse(a);else if(a instanceof ArrayBuffer)if(G.decode(new Uint8Array(a,0,4))===IQ){try{P[pn.KHR_BINARY_GLTF]=new Id2(a)}catch(Z){x&&x(Z);return}E=JSON.parse(P[pn.KHR_BINARY_GLTF].content)}else E=JSON.parse(G.decode(a));else E=a;if(E.asset===void 0||E.asset.version[0]<2){x&&x(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const h=new Qd2(E,{path:g||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});h.fileLoader.setRequestHeader(this.requestHeader);for(let X=0;X<this.pluginCallbacks.length;X++){const Z=this.pluginCallbacks[X](h);Z.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),O[Z.name]=Z,P[Z.name]=!0}if(E.extensionsUsed)for(let X=0;X<E.extensionsUsed.length;++X){const Z=E.extensionsUsed[X],K=E.extensionsRequired||[];switch(Z){case pn.KHR_MATERIALS_UNLIT:P[Z]=new dd2;break;case pn.KHR_DRACO_MESH_COMPRESSION:P[Z]=new Pd2(E,this.dracoLoader);break;case pn.KHR_TEXTURE_TRANSFORM:P[Z]=new Ld2;break;case pn.KHR_MESH_QUANTIZATION:P[Z]=new Fd2;break;default:K.indexOf(Z)>=0&&O[Z]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+Z+'".')}}h.setExtensions(P),h.setPlugins(O),h.parse(w,x)}parseAsync(a,g){const w=this;return new Promise(function(x,E){w.parse(a,g,x,E)})}}function hd2(){let D={};return{get:function(a){return D[a]},add:function(a,g){D[a]=g},remove:function(a){delete D[a]},removeAll:function(){D={}}}}const pn={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class md2{constructor(a){this.parser=a,this.name=pn.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const a=this.parser,g=this.parser.json.nodes||[];for(let w=0,x=g.length;w<x;w++){const E=g[w];E.extensions&&E.extensions[this.name]&&E.extensions[this.name].light!==void 0&&a._addNodeRef(this.cache,E.extensions[this.name].light)}}_loadLight(a){const g=this.parser,w="light:"+a;let x=g.cache.get(w);if(x)return x;const E=g.json,G=((E.extensions&&E.extensions[this.name]||{}).lights||[])[a];let h;const X=new ce(16777215);G.color!==void 0&&X.setRGB(G.color[0],G.color[1],G.color[2],Xi);const Z=G.range!==void 0?G.range:0;switch(G.type){case"directional":h=new ph(X),h.target.position.set(0,0,-1),h.add(h.target);break;case"point":h=new O6(X),h.distance=Z;break;case"spot":h=new kQ(X),h.distance=Z,G.spot=G.spot||{},G.spot.innerConeAngle=G.spot.innerConeAngle!==void 0?G.spot.innerConeAngle:0,G.spot.outerConeAngle=G.spot.outerConeAngle!==void 0?G.spot.outerConeAngle:Math.PI/4,h.angle=G.spot.outerConeAngle,h.penumbra=1-G.spot.innerConeAngle/G.spot.outerConeAngle,h.target.position.set(0,0,-1),h.add(h.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+G.type)}return h.position.set(0,0,0),h.decay=2,_1(h,G),G.intensity!==void 0&&(h.intensity=G.intensity),h.name=g.createUniqueName(G.name||"light_"+a),x=Promise.resolve(h),g.cache.add(w,x),x}getDependency(a,g){if(a==="light")return this._loadLight(g)}createNodeAttachment(a){const g=this,w=this.parser,E=w.json.nodes[a],O=(E.extensions&&E.extensions[this.name]||{}).light;return O===void 0?null:this._loadLight(O).then(function(G){return w._getNodeRef(g.cache,O,G)})}}class dd2{constructor(){this.name=pn.KHR_MATERIALS_UNLIT}getMaterialType(){return xs}extendParams(a,g,w){const x=[];a.color=new ce(1,1,1),a.opacity=1;const E=g.pbrMetallicRoughness;if(E){if(Array.isArray(E.baseColorFactor)){const P=E.baseColorFactor;a.color.setRGB(P[0],P[1],P[2],Xi),a.opacity=P[3]}E.baseColorTexture!==void 0&&x.push(w.assignTexture(a,"map",E.baseColorTexture,di))}return Promise.all(x)}}class Ad2{constructor(a){this.parser=a,this.name=pn.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(a,g){const x=this.parser.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=x.extensions[this.name].emissiveStrength;return E!==void 0&&(g.emissiveIntensity=E),Promise.resolve()}}class gd2{constructor(a){this.parser=a,this.name=pn.KHR_MATERIALS_CLEARCOAT}getMaterialType(a){const w=this.parser.json.materials[a];return!w.extensions||!w.extensions[this.name]?null:zo}extendMaterialParams(a,g){const w=this.parser,x=w.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=[],P=x.extensions[this.name];if(P.clearcoatFactor!==void 0&&(g.clearcoat=P.clearcoatFactor),P.clearcoatTexture!==void 0&&E.push(w.assignTexture(g,"clearcoatMap",P.clearcoatTexture)),P.clearcoatRoughnessFactor!==void 0&&(g.clearcoatRoughness=P.clearcoatRoughnessFactor),P.clearcoatRoughnessTexture!==void 0&&E.push(w.assignTexture(g,"clearcoatRoughnessMap",P.clearcoatRoughnessTexture)),P.clearcoatNormalTexture!==void 0&&(E.push(w.assignTexture(g,"clearcoatNormalMap",P.clearcoatNormalTexture)),P.clearcoatNormalTexture.scale!==void 0)){const O=P.clearcoatNormalTexture.scale;g.clearcoatNormalScale=new Lt(O,O)}return Promise.all(E)}}class yd2{constructor(a){this.parser=a,this.name=pn.KHR_MATERIALS_DISPERSION}getMaterialType(a){const w=this.parser.json.materials[a];return!w.extensions||!w.extensions[this.name]?null:zo}extendMaterialParams(a,g){const x=this.parser.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=x.extensions[this.name];return g.dispersion=E.dispersion!==void 0?E.dispersion:0,Promise.resolve()}}class kd2{constructor(a){this.parser=a,this.name=pn.KHR_MATERIALS_IRIDESCENCE}getMaterialType(a){const w=this.parser.json.materials[a];return!w.extensions||!w.extensions[this.name]?null:zo}extendMaterialParams(a,g){const w=this.parser,x=w.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=[],P=x.extensions[this.name];return P.iridescenceFactor!==void 0&&(g.iridescence=P.iridescenceFactor),P.iridescenceTexture!==void 0&&E.push(w.assignTexture(g,"iridescenceMap",P.iridescenceTexture)),P.iridescenceIor!==void 0&&(g.iridescenceIOR=P.iridescenceIor),g.iridescenceThicknessRange===void 0&&(g.iridescenceThicknessRange=[100,400]),P.iridescenceThicknessMinimum!==void 0&&(g.iridescenceThicknessRange[0]=P.iridescenceThicknessMinimum),P.iridescenceThicknessMaximum!==void 0&&(g.iridescenceThicknessRange[1]=P.iridescenceThicknessMaximum),P.iridescenceThicknessTexture!==void 0&&E.push(w.assignTexture(g,"iridescenceThicknessMap",P.iridescenceThicknessTexture)),Promise.all(E)}}class vd2{constructor(a){this.parser=a,this.name=pn.KHR_MATERIALS_SHEEN}getMaterialType(a){const w=this.parser.json.materials[a];return!w.extensions||!w.extensions[this.name]?null:zo}extendMaterialParams(a,g){const w=this.parser,x=w.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=[];g.sheenColor=new ce(0,0,0),g.sheenRoughness=0,g.sheen=1;const P=x.extensions[this.name];if(P.sheenColorFactor!==void 0){const O=P.sheenColorFactor;g.sheenColor.setRGB(O[0],O[1],O[2],Xi)}return P.sheenRoughnessFactor!==void 0&&(g.sheenRoughness=P.sheenRoughnessFactor),P.sheenColorTexture!==void 0&&E.push(w.assignTexture(g,"sheenColorMap",P.sheenColorTexture,di)),P.sheenRoughnessTexture!==void 0&&E.push(w.assignTexture(g,"sheenRoughnessMap",P.sheenRoughnessTexture)),Promise.all(E)}}class wd2{constructor(a){this.parser=a,this.name=pn.KHR_MATERIALS_TRANSMISSION}getMaterialType(a){const w=this.parser.json.materials[a];return!w.extensions||!w.extensions[this.name]?null:zo}extendMaterialParams(a,g){const w=this.parser,x=w.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=[],P=x.extensions[this.name];return P.transmissionFactor!==void 0&&(g.transmission=P.transmissionFactor),P.transmissionTexture!==void 0&&E.push(w.assignTexture(g,"transmissionMap",P.transmissionTexture)),Promise.all(E)}}class Bd2{constructor(a){this.parser=a,this.name=pn.KHR_MATERIALS_VOLUME}getMaterialType(a){const w=this.parser.json.materials[a];return!w.extensions||!w.extensions[this.name]?null:zo}extendMaterialParams(a,g){const w=this.parser,x=w.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=[],P=x.extensions[this.name];g.thickness=P.thicknessFactor!==void 0?P.thicknessFactor:0,P.thicknessTexture!==void 0&&E.push(w.assignTexture(g,"thicknessMap",P.thicknessTexture)),g.attenuationDistance=P.attenuationDistance||1/0;const O=P.attenuationColor||[1,1,1];return g.attenuationColor=new ce().setRGB(O[0],O[1],O[2],Xi),Promise.all(E)}}class Sd2{constructor(a){this.parser=a,this.name=pn.KHR_MATERIALS_IOR}getMaterialType(a){const w=this.parser.json.materials[a];return!w.extensions||!w.extensions[this.name]?null:zo}extendMaterialParams(a,g){const x=this.parser.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=x.extensions[this.name];return g.ior=E.ior!==void 0?E.ior:1.5,Promise.resolve()}}class xd2{constructor(a){this.parser=a,this.name=pn.KHR_MATERIALS_SPECULAR}getMaterialType(a){const w=this.parser.json.materials[a];return!w.extensions||!w.extensions[this.name]?null:zo}extendMaterialParams(a,g){const w=this.parser,x=w.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=[],P=x.extensions[this.name];g.specularIntensity=P.specularFactor!==void 0?P.specularFactor:1,P.specularTexture!==void 0&&E.push(w.assignTexture(g,"specularIntensityMap",P.specularTexture));const O=P.specularColorFactor||[1,1,1];return g.specularColor=new ce().setRGB(O[0],O[1],O[2],Xi),P.specularColorTexture!==void 0&&E.push(w.assignTexture(g,"specularColorMap",P.specularColorTexture,di)),Promise.all(E)}}class Cd2{constructor(a){this.parser=a,this.name=pn.EXT_MATERIALS_BUMP}getMaterialType(a){const w=this.parser.json.materials[a];return!w.extensions||!w.extensions[this.name]?null:zo}extendMaterialParams(a,g){const w=this.parser,x=w.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=[],P=x.extensions[this.name];return g.bumpScale=P.bumpFactor!==void 0?P.bumpFactor:1,P.bumpTexture!==void 0&&E.push(w.assignTexture(g,"bumpMap",P.bumpTexture)),Promise.all(E)}}class Md2{constructor(a){this.parser=a,this.name=pn.KHR_MATERIALS_ANISOTROPY}getMaterialType(a){const w=this.parser.json.materials[a];return!w.extensions||!w.extensions[this.name]?null:zo}extendMaterialParams(a,g){const w=this.parser,x=w.json.materials[a];if(!x.extensions||!x.extensions[this.name])return Promise.resolve();const E=[],P=x.extensions[this.name];return P.anisotropyStrength!==void 0&&(g.anisotropy=P.anisotropyStrength),P.anisotropyRotation!==void 0&&(g.anisotropyRotation=P.anisotropyRotation),P.anisotropyTexture!==void 0&&E.push(w.assignTexture(g,"anisotropyMap",P.anisotropyTexture)),Promise.all(E)}}class Td2{constructor(a){this.parser=a,this.name=pn.KHR_TEXTURE_BASISU}loadTexture(a){const g=this.parser,w=g.json,x=w.textures[a];if(!x.extensions||!x.extensions[this.name])return null;const E=x.extensions[this.name],P=g.options.ktx2Loader;if(!P){if(w.extensionsRequired&&w.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return g.loadTextureImage(a,E.source,P)}}class Ed2{constructor(a){this.parser=a,this.name=pn.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(a){const g=this.name,w=this.parser,x=w.json,E=x.textures[a];if(!E.extensions||!E.extensions[g])return null;const P=E.extensions[g],O=x.images[P.source];let G=w.textureLoader;if(O.uri){const h=w.options.manager.getHandler(O.uri);h!==null&&(G=h)}return this.detectSupport().then(function(h){if(h)return w.loadTextureImage(a,P.source,G);if(x.extensionsRequired&&x.extensionsRequired.indexOf(g)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return w.loadTexture(a)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(a){const g=new Image;g.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",g.onload=g.onerror=function(){a(g.height===1)}})),this.isSupported}}class Rd2{constructor(a){this.parser=a,this.name=pn.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(a){const g=this.name,w=this.parser,x=w.json,E=x.textures[a];if(!E.extensions||!E.extensions[g])return null;const P=E.extensions[g],O=x.images[P.source];let G=w.textureLoader;if(O.uri){const h=w.options.manager.getHandler(O.uri);h!==null&&(G=h)}return this.detectSupport().then(function(h){if(h)return w.loadTextureImage(a,P.source,G);if(x.extensionsRequired&&x.extensionsRequired.indexOf(g)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return w.loadTexture(a)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(a){const g=new Image;g.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",g.onload=g.onerror=function(){a(g.height===1)}})),this.isSupported}}class bd2{constructor(a){this.name=pn.EXT_MESHOPT_COMPRESSION,this.parser=a}loadBufferView(a){const g=this.parser.json,w=g.bufferViews[a];if(w.extensions&&w.extensions[this.name]){const x=w.extensions[this.name],E=this.parser.getDependency("buffer",x.buffer),P=this.parser.options.meshoptDecoder;if(!P||!P.supported){if(g.extensionsRequired&&g.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return E.then(function(O){const G=x.byteOffset||0,h=x.byteLength||0,X=x.count,Z=x.byteStride,K=new Uint8Array(O,G,h);return P.decodeGltfBufferAsync?P.decodeGltfBufferAsync(X,Z,K,x.mode,x.filter).then(function(e2){return e2.buffer}):P.ready.then(function(){const e2=new ArrayBuffer(X*Z);return P.decodeGltfBuffer(new Uint8Array(e2),X,Z,K,x.mode,x.filter),e2})})}else return null}}class Dd2{constructor(a){this.name=pn.EXT_MESH_GPU_INSTANCING,this.parser=a}createNodeMesh(a){const g=this.parser.json,w=g.nodes[a];if(!w.extensions||!w.extensions[this.name]||w.mesh===void 0)return null;const x=g.meshes[w.mesh];for(const h of x.primitives)if(h.mode!==Wr.TRIANGLES&&h.mode!==Wr.TRIANGLE_STRIP&&h.mode!==Wr.TRIANGLE_FAN&&h.mode!==void 0)return null;const P=w.extensions[this.name].attributes,O=[],G={};for(const h in P)O.push(this.parser.getDependency("accessor",P[h]).then(X=>(G[h]=X,G[h])));return O.length<1?null:(O.push(this.parser.createNodeMesh(a)),Promise.all(O).then(h=>{const X=h.pop(),Z=X.isGroup?X.children:[X],K=h[0].count,e2=[];for(const l2 of Z){const p2=new te,r2=new E2,o2=new Xn,v2=new E2(1,1,1),m2=new ku(l2.geometry,l2.material,K);for(let k2=0;k2<K;k2++)G.TRANSLATION&&r2.fromBufferAttribute(G.TRANSLATION,k2),G.ROTATION&&o2.fromBufferAttribute(G.ROTATION,k2),G.SCALE&&v2.fromBufferAttribute(G.SCALE,k2),m2.setMatrixAt(k2,p2.compose(r2,o2,v2));for(const k2 in G)if(k2==="_COLOR_0"){const j2=G[k2];m2.instanceColor=new I6(j2.array,j2.itemSize,j2.normalized)}else k2!=="TRANSLATION"&&k2!=="ROTATION"&&k2!=="SCALE"&&l2.geometry.setAttribute(k2,G[k2]);Un.prototype.copy.call(m2,l2),this.parser.assignFinalMaterial(m2),e2.push(m2)}return X.isGroup?(X.clear(),X.add(...e2),X):e2[0]}))}}const IQ="glTF",Pf=12,vz={JSON:1313821514,BIN:5130562};class Id2{constructor(a){this.name=pn.KHR_BINARY_GLTF,this.content=null,this.body=null;const g=new DataView(a,0,Pf),w=new TextDecoder;if(this.header={magic:w.decode(new Uint8Array(a.slice(0,4))),version:g.getUint32(4,!0),length:g.getUint32(8,!0)},this.header.magic!==IQ)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const x=this.header.length-Pf,E=new DataView(a,Pf);let P=0;for(;P<x;){const O=E.getUint32(P,!0);P+=4;const G=E.getUint32(P,!0);if(P+=4,G===vz.JSON){const h=new Uint8Array(a,Pf+P,O);this.content=w.decode(h)}else if(G===vz.BIN){const h=Pf+P;this.body=a.slice(h,h+O)}P+=O}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Pd2{constructor(a,g){if(!g)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=pn.KHR_DRACO_MESH_COMPRESSION,this.json=a,this.dracoLoader=g,this.dracoLoader.preload()}decodePrimitive(a,g){const w=this.json,x=this.dracoLoader,E=a.extensions[this.name].bufferView,P=a.extensions[this.name].attributes,O={},G={},h={};for(const X in P){const Z=N6[X]||X.toLowerCase();O[Z]=P[X]}for(const X in a.attributes){const Z=N6[X]||X.toLowerCase();if(P[X]!==void 0){const K=w.accessors[a.attributes[X]],e2=uu[K.componentType];h[Z]=e2.name,G[Z]=K.normalized===!0}}return g.getDependency("bufferView",E).then(function(X){return new Promise(function(Z,K){x.decodeDracoFile(X,function(e2){for(const l2 in e2.attributes){const p2=e2.attributes[l2],r2=G[l2];r2!==void 0&&(p2.normalized=r2)}Z(e2)},O,h,Xi,K)})})}}class Ld2{constructor(){this.name=pn.KHR_TEXTURE_TRANSFORM}extendTexture(a,g){return(g.texCoord===void 0||g.texCoord===a.channel)&&g.offset===void 0&&g.rotation===void 0&&g.scale===void 0||(a=a.clone(),g.texCoord!==void 0&&(a.channel=g.texCoord),g.offset!==void 0&&a.offset.fromArray(g.offset),g.rotation!==void 0&&(a.rotation=g.rotation),g.scale!==void 0&&a.repeat.fromArray(g.scale),a.needsUpdate=!0),a}}class Fd2{constructor(){this.name=pn.KHR_MESH_QUANTIZATION}}class PQ extends ip{constructor(a,g,w,x){super(a,g,w,x)}copySampleValue_(a){const g=this.resultBuffer,w=this.sampleValues,x=this.valueSize,E=a*x*3+x;for(let P=0;P!==x;P++)g[P]=w[E+P];return g}interpolate_(a,g,w,x){const E=this.resultBuffer,P=this.sampleValues,O=this.valueSize,G=O*2,h=O*3,X=x-g,Z=(w-g)/X,K=Z*Z,e2=K*Z,l2=a*h,p2=l2-h,r2=-2*e2+3*K,o2=e2-K,v2=1-r2,m2=o2-K+Z;for(let k2=0;k2!==O;k2++){const j2=P[p2+k2+O],b2=P[p2+k2+G]*X,D2=P[l2+k2+O],N2=P[l2+k2]*X;E[k2]=v2*j2+m2*b2+r2*D2+o2*N2}return E}}const Od2=new Xn;class jd2 extends PQ{interpolate_(a,g,w,x){const E=super.interpolate_(a,g,w,x);return Od2.fromArray(E).normalize().toArray(E),E}}const Wr={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},uu={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wz={9728:j0,9729:t0,9984:Dz,9985:b4,9986:Lf,9987:Go},Bz={33071:Vr,33648:O4,10497:y1},d6={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},N6={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},p1={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Nd2={CUBICSPLINE:void 0,LINEAR:au,STEP:zf},A6={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Ud2(D){return D.DefaultMaterial===void 0&&(D.DefaultMaterial=new qf({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Wo})),D.DefaultMaterial}function V1(D,a,g){for(const w in g.extensions)D[w]===void 0&&(a.userData.gltfExtensions=a.userData.gltfExtensions||{},a.userData.gltfExtensions[w]=g.extensions[w])}function _1(D,a){a.extras!==void 0&&(typeof a.extras=="object"?Object.assign(D.userData,a.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+a.extras))}function Gd2(D,a,g){let w=!1,x=!1,E=!1;for(let h=0,X=a.length;h<X;h++){const Z=a[h];if(Z.POSITION!==void 0&&(w=!0),Z.NORMAL!==void 0&&(x=!0),Z.COLOR_0!==void 0&&(E=!0),w&&x&&E)break}if(!w&&!x&&!E)return Promise.resolve(D);const P=[],O=[],G=[];for(let h=0,X=a.length;h<X;h++){const Z=a[h];if(w){const K=Z.POSITION!==void 0?g.getDependency("accessor",Z.POSITION):D.attributes.position;P.push(K)}if(x){const K=Z.NORMAL!==void 0?g.getDependency("accessor",Z.NORMAL):D.attributes.normal;O.push(K)}if(E){const K=Z.COLOR_0!==void 0?g.getDependency("accessor",Z.COLOR_0):D.attributes.color;G.push(K)}}return Promise.all([Promise.all(P),Promise.all(O),Promise.all(G)]).then(function(h){const X=h[0],Z=h[1],K=h[2];return w&&(D.morphAttributes.position=X),x&&(D.morphAttributes.normal=Z),E&&(D.morphAttributes.color=K),D.morphTargetsRelative=!0,D})}function Wd2(D,a){if(D.updateMorphTargets(),a.weights!==void 0)for(let g=0,w=a.weights.length;g<w;g++)D.morphTargetInfluences[g]=a.weights[g];if(a.extras&&Array.isArray(a.extras.targetNames)){const g=a.extras.targetNames;if(D.morphTargetInfluences.length===g.length){D.morphTargetDictionary={};for(let w=0,x=g.length;w<x;w++)D.morphTargetDictionary[g[w]]=w}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Hd2(D){let a;const g=D.extensions&&D.extensions[pn.KHR_DRACO_MESH_COMPRESSION];if(g?a="draco:"+g.bufferView+":"+g.indices+":"+g6(g.attributes):a=D.indices+":"+g6(D.attributes)+":"+D.mode,D.targets!==void 0)for(let w=0,x=D.targets.length;w<x;w++)a+=":"+g6(D.targets[w]);return a}function g6(D){let a="";const g=Object.keys(D).sort();for(let w=0,x=g.length;w<x;w++)a+=g[w]+":"+D[g[w]]+";";return a}function U6(D){switch(D){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Vd2(D){return D.search(/\.jpe?g($|\?)/i)>0||D.search(/^data\:image\/jpeg/)===0?"image/jpeg":D.search(/\.webp($|\?)/i)>0||D.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const zd2=new te;class Qd2{constructor(a={},g={}){this.json=a,this.extensions={},this.plugins={},this.options=g,this.cache=new hd2,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let w=!1,x=!1,E=-1;typeof navigator<"u"&&(w=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,x=navigator.userAgent.indexOf("Firefox")>-1,E=x?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||w||x&&E<98?this.textureLoader=new r_(this.options.manager):this.textureLoader=new mm2(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Au(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(a){this.extensions=a}setPlugins(a){this.plugins=a}parse(a,g){const w=this,x=this.json,E=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(P){return P._markDefs&&P._markDefs()}),Promise.all(this._invokeAll(function(P){return P.beforeRoot&&P.beforeRoot()})).then(function(){return Promise.all([w.getDependencies("scene"),w.getDependencies("animation"),w.getDependencies("camera")])}).then(function(P){const O={scene:P[0][x.scene||0],scenes:P[0],animations:P[1],cameras:P[2],asset:x.asset,parser:w,userData:{}};return V1(E,O,x),_1(O,x),Promise.all(w._invokeAll(function(G){return G.afterRoot&&G.afterRoot(O)})).then(function(){for(const G of O.scenes)G.updateMatrixWorld();a(O)})}).catch(g)}_markDefs(){const a=this.json.nodes||[],g=this.json.skins||[],w=this.json.meshes||[];for(let x=0,E=g.length;x<E;x++){const P=g[x].joints;for(let O=0,G=P.length;O<G;O++)a[P[O]].isBone=!0}for(let x=0,E=a.length;x<E;x++){const P=a[x];P.mesh!==void 0&&(this._addNodeRef(this.meshCache,P.mesh),P.skin!==void 0&&(w[P.mesh].isSkinnedMesh=!0)),P.camera!==void 0&&this._addNodeRef(this.cameraCache,P.camera)}}_addNodeRef(a,g){g!==void 0&&(a.refs[g]===void 0&&(a.refs[g]=a.uses[g]=0),a.refs[g]++)}_getNodeRef(a,g,w){if(a.refs[g]<=1)return w;const x=w.clone(),E=(P,O)=>{const G=this.associations.get(P);G!=null&&this.associations.set(O,G);for(const[h,X]of P.children.entries())E(X,O.children[h])};return E(w,x),x.name+="_instance_"+a.uses[g]++,x}_invokeOne(a){const g=Object.values(this.plugins);g.push(this);for(let w=0;w<g.length;w++){const x=a(g[w]);if(x)return x}return null}_invokeAll(a){const g=Object.values(this.plugins);g.unshift(this);const w=[];for(let x=0;x<g.length;x++){const E=a(g[x]);E&&w.push(E)}return w}getDependency(a,g){const w=a+":"+g;let x=this.cache.get(w);if(!x){switch(a){case"scene":x=this.loadScene(g);break;case"node":x=this._invokeOne(function(E){return E.loadNode&&E.loadNode(g)});break;case"mesh":x=this._invokeOne(function(E){return E.loadMesh&&E.loadMesh(g)});break;case"accessor":x=this.loadAccessor(g);break;case"bufferView":x=this._invokeOne(function(E){return E.loadBufferView&&E.loadBufferView(g)});break;case"buffer":x=this.loadBuffer(g);break;case"material":x=this._invokeOne(function(E){return E.loadMaterial&&E.loadMaterial(g)});break;case"texture":x=this._invokeOne(function(E){return E.loadTexture&&E.loadTexture(g)});break;case"skin":x=this.loadSkin(g);break;case"animation":x=this._invokeOne(function(E){return E.loadAnimation&&E.loadAnimation(g)});break;case"camera":x=this.loadCamera(g);break;default:if(x=this._invokeOne(function(E){return E!=this&&E.getDependency&&E.getDependency(a,g)}),!x)throw new Error("Unknown type: "+a);break}this.cache.add(w,x)}return x}getDependencies(a){let g=this.cache.get(a);if(!g){const w=this,x=this.json[a+(a==="mesh"?"es":"s")]||[];g=Promise.all(x.map(function(E,P){return w.getDependency(a,P)})),this.cache.add(a,g)}return g}loadBuffer(a){const g=this.json.buffers[a],w=this.fileLoader;if(g.type&&g.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+g.type+" buffer type is not supported.");if(g.uri===void 0&&a===0)return Promise.resolve(this.extensions[pn.KHR_BINARY_GLTF].body);const x=this.options;return new Promise(function(E,P){w.load(lu.resolveURL(g.uri,x.path),E,void 0,function(){P(new Error('THREE.GLTFLoader: Failed to load buffer "'+g.uri+'".'))})})}loadBufferView(a){const g=this.json.bufferViews[a];return this.getDependency("buffer",g.buffer).then(function(w){const x=g.byteLength||0,E=g.byteOffset||0;return w.slice(E,E+x)})}loadAccessor(a){const g=this,w=this.json,x=this.json.accessors[a];if(x.bufferView===void 0&&x.sparse===void 0){const P=d6[x.type],O=uu[x.componentType],G=x.normalized===!0,h=new O(x.count*P);return Promise.resolve(new _0(h,P,G))}const E=[];return x.bufferView!==void 0?E.push(this.getDependency("bufferView",x.bufferView)):E.push(null),x.sparse!==void 0&&(E.push(this.getDependency("bufferView",x.sparse.indices.bufferView)),E.push(this.getDependency("bufferView",x.sparse.values.bufferView))),Promise.all(E).then(function(P){const O=P[0],G=d6[x.type],h=uu[x.componentType],X=h.BYTES_PER_ELEMENT,Z=X*G,K=x.byteOffset||0,e2=x.bufferView!==void 0?w.bufferViews[x.bufferView].byteStride:void 0,l2=x.normalized===!0;let p2,r2;if(e2&&e2!==Z){const o2=Math.floor(K/e2),v2="InterleavedBuffer:"+x.bufferView+":"+x.componentType+":"+o2+":"+x.count;let m2=g.cache.get(v2);m2||(p2=new h(O,o2*e2,x.count*e2/X),m2=new Ah2(p2,e2/X),g.cache.add(v2,m2)),r2=new ih(m2,G,K%e2/X,l2)}else O===null?p2=new h(x.count*G):p2=new h(O,K,x.count*G),r2=new _0(p2,G,l2);if(x.sparse!==void 0){const o2=d6.SCALAR,v2=uu[x.sparse.indices.componentType],m2=x.sparse.indices.byteOffset||0,k2=x.sparse.values.byteOffset||0,j2=new v2(P[1],m2,x.sparse.count*o2),b2=new h(P[2],k2,x.sparse.count*G);O!==null&&(r2=new _0(r2.array.slice(),r2.itemSize,r2.normalized));for(let D2=0,N2=j2.length;D2<N2;D2++){const B2=j2[D2];if(r2.setX(B2,b2[D2*G]),G>=2&&r2.setY(B2,b2[D2*G+1]),G>=3&&r2.setZ(B2,b2[D2*G+2]),G>=4&&r2.setW(B2,b2[D2*G+3]),G>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return r2})}loadTexture(a){const g=this.json,w=this.options,E=g.textures[a].source,P=g.images[E];let O=this.textureLoader;if(P.uri){const G=w.manager.getHandler(P.uri);G!==null&&(O=G)}return this.loadTextureImage(a,E,O)}loadTextureImage(a,g,w){const x=this,E=this.json,P=E.textures[a],O=E.images[g],G=(O.uri||O.bufferView)+":"+P.sampler;if(this.textureCache[G])return this.textureCache[G];const h=this.loadImageSource(g,w).then(function(X){X.flipY=!1,X.name=P.name||O.name||"",X.name===""&&typeof O.uri=="string"&&O.uri.startsWith("data:image/")===!1&&(X.name=O.uri);const K=(E.samplers||{})[P.sampler]||{};return X.magFilter=wz[K.magFilter]||t0,X.minFilter=wz[K.minFilter]||Go,X.wrapS=Bz[K.wrapS]||y1,X.wrapT=Bz[K.wrapT]||y1,x.associations.set(X,{textures:a}),X}).catch(function(){return null});return this.textureCache[G]=h,h}loadImageSource(a,g){const w=this,x=this.json,E=this.options;if(this.sourceCache[a]!==void 0)return this.sourceCache[a].then(Z=>Z.clone());const P=x.images[a],O=self.URL||self.webkitURL;let G=P.uri||"",h=!1;if(P.bufferView!==void 0)G=w.getDependency("bufferView",P.bufferView).then(function(Z){h=!0;const K=new Blob([Z],{type:P.mimeType});return G=O.createObjectURL(K),G});else if(P.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+a+" is missing URI and bufferView");const X=Promise.resolve(G).then(function(Z){return new Promise(function(K,e2){let l2=K;g.isImageBitmapLoader===!0&&(l2=function(p2){const r2=new Ti(p2);r2.needsUpdate=!0,K(r2)}),g.load(lu.resolveURL(Z,E.path),l2,void 0,e2)})}).then(function(Z){return h===!0&&O.revokeObjectURL(G),Z.userData.mimeType=P.mimeType||Vd2(P.uri),Z}).catch(function(Z){throw console.error("THREE.GLTFLoader: Couldn't load texture",G),Z});return this.sourceCache[a]=X,X}assignTexture(a,g,w,x){const E=this;return this.getDependency("texture",w.index).then(function(P){if(!P)return null;if(w.texCoord!==void 0&&w.texCoord>0&&(P=P.clone(),P.channel=w.texCoord),E.extensions[pn.KHR_TEXTURE_TRANSFORM]){const O=w.extensions!==void 0?w.extensions[pn.KHR_TEXTURE_TRANSFORM]:void 0;if(O){const G=E.associations.get(P);P=E.extensions[pn.KHR_TEXTURE_TRANSFORM].extendTexture(P,O),E.associations.set(P,G)}}return x!==void 0&&(P.colorSpace=x),a[g]=P,P})}assignFinalMaterial(a){const g=a.geometry;let w=a.material;const x=g.attributes.tangent===void 0,E=g.attributes.color!==void 0,P=g.attributes.normal===void 0;if(a.isPoints){const O="PointsMaterial:"+w.uuid;let G=this.cache.get(O);G||(G=new uQ,zr.prototype.copy.call(G,w),G.color.copy(w.color),G.map=w.map,G.sizeAttenuation=!1,this.cache.add(O,G)),w=G}else if(a.isLine){const O="LineBasicMaterial:"+w.uuid;let G=this.cache.get(O);G||(G=new np,zr.prototype.copy.call(G,w),G.color.copy(w.color),G.map=w.map,this.cache.add(O,G)),w=G}if(x||E||P){let O="ClonedMaterial:"+w.uuid+":";x&&(O+="derivative-tangents:"),E&&(O+="vertex-colors:"),P&&(O+="flat-shading:");let G=this.cache.get(O);G||(G=w.clone(),E&&(G.vertexColors=!0),P&&(G.flatShading=!0),x&&(G.normalScale&&(G.normalScale.y*=-1),G.clearcoatNormalScale&&(G.clearcoatNormalScale.y*=-1)),this.cache.add(O,G),this.associations.set(G,this.associations.get(w))),w=G}a.material=w}getMaterialType(){return qf}loadMaterial(a){const g=this,w=this.json,x=this.extensions,E=w.materials[a];let P;const O={},G=E.extensions||{},h=[];if(G[pn.KHR_MATERIALS_UNLIT]){const Z=x[pn.KHR_MATERIALS_UNLIT];P=Z.getMaterialType(),h.push(Z.extendParams(O,E,g))}else{const Z=E.pbrMetallicRoughness||{};if(O.color=new ce(1,1,1),O.opacity=1,Array.isArray(Z.baseColorFactor)){const K=Z.baseColorFactor;O.color.setRGB(K[0],K[1],K[2],Xi),O.opacity=K[3]}Z.baseColorTexture!==void 0&&h.push(g.assignTexture(O,"map",Z.baseColorTexture,di)),O.metalness=Z.metallicFactor!==void 0?Z.metallicFactor:1,O.roughness=Z.roughnessFactor!==void 0?Z.roughnessFactor:1,Z.metallicRoughnessTexture!==void 0&&(h.push(g.assignTexture(O,"metalnessMap",Z.metallicRoughnessTexture)),h.push(g.assignTexture(O,"roughnessMap",Z.metallicRoughnessTexture))),P=this._invokeOne(function(K){return K.getMaterialType&&K.getMaterialType(a)}),h.push(Promise.all(this._invokeAll(function(K){return K.extendMaterialParams&&K.extendMaterialParams(a,O)})))}E.doubleSided===!0&&(O.side=No);const X=E.alphaMode||A6.OPAQUE;if(X===A6.BLEND?(O.transparent=!0,O.depthWrite=!1):(O.transparent=!1,X===A6.MASK&&(O.alphaTest=E.alphaCutoff!==void 0?E.alphaCutoff:.5)),E.normalTexture!==void 0&&P!==xs&&(h.push(g.assignTexture(O,"normalMap",E.normalTexture)),O.normalScale=new Lt(1,1),E.normalTexture.scale!==void 0)){const Z=E.normalTexture.scale;O.normalScale.set(Z,Z)}if(E.occlusionTexture!==void 0&&P!==xs&&(h.push(g.assignTexture(O,"aoMap",E.occlusionTexture)),E.occlusionTexture.strength!==void 0&&(O.aoMapIntensity=E.occlusionTexture.strength)),E.emissiveFactor!==void 0&&P!==xs){const Z=E.emissiveFactor;O.emissive=new ce().setRGB(Z[0],Z[1],Z[2],Xi)}return E.emissiveTexture!==void 0&&P!==xs&&h.push(g.assignTexture(O,"emissiveMap",E.emissiveTexture,di)),Promise.all(h).then(function(){const Z=new P(O);return E.name&&(Z.name=E.name),_1(Z,E),g.associations.set(Z,{materials:a}),E.extensions&&V1(x,Z,E),Z})}createUniqueName(a){const g=An.sanitizeNodeName(a||"");return g in this.nodeNamesUsed?g+"_"+ ++this.nodeNamesUsed[g]:(this.nodeNamesUsed[g]=0,g)}loadGeometries(a){const g=this,w=this.extensions,x=this.primitiveCache;function E(O){return w[pn.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(O,g).then(function(G){return Sz(G,O,g)})}const P=[];for(let O=0,G=a.length;O<G;O++){const h=a[O],X=Hd2(h),Z=x[X];if(Z)P.push(Z.promise);else{let K;h.extensions&&h.extensions[pn.KHR_DRACO_MESH_COMPRESSION]?K=E(h):K=Sz(new n0,h,g),x[X]={primitive:h,promise:K},P.push(K)}}return Promise.all(P)}loadMesh(a){const g=this,w=this.json,x=this.extensions,E=w.meshes[a],P=E.primitives,O=[];for(let G=0,h=P.length;G<h;G++){const X=P[G].material===void 0?Ud2(this.cache):this.getDependency("material",P[G].material);O.push(X)}return O.push(g.loadGeometries(P)),Promise.all(O).then(function(G){const h=G.slice(0,G.length-1),X=G[G.length-1],Z=[];for(let e2=0,l2=X.length;e2<l2;e2++){const p2=X[e2],r2=P[e2];let o2;const v2=h[e2];if(r2.mode===Wr.TRIANGLES||r2.mode===Wr.TRIANGLE_STRIP||r2.mode===Wr.TRIANGLE_FAN||r2.mode===void 0)o2=E.isSkinnedMesh===!0?new sQ(p2,v2):new e0(p2,v2),o2.isSkinnedMesh===!0&&o2.normalizeSkinWeights(),r2.mode===Wr.TRIANGLE_STRIP?o2.geometry=kz(o2.geometry,Wz):r2.mode===Wr.TRIANGLE_FAN&&(o2.geometry=kz(o2.geometry,R6));else if(r2.mode===Wr.LINES)o2=new lQ(p2,v2);else if(r2.mode===Wr.LINE_STRIP)o2=new du(p2,v2);else if(r2.mode===Wr.LINE_LOOP)o2=new vh2(p2,v2);else if(r2.mode===Wr.POINTS)o2=new wh2(p2,v2);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+r2.mode);Object.keys(o2.geometry.morphAttributes).length>0&&Wd2(o2,E),o2.name=g.createUniqueName(E.name||"mesh_"+a),_1(o2,E),r2.extensions&&V1(x,o2,r2),g.assignFinalMaterial(o2),Z.push(o2)}for(let e2=0,l2=Z.length;e2<l2;e2++)g.associations.set(Z[e2],{meshes:a,primitives:e2});if(Z.length===1)return E.extensions&&V1(x,Z[0],E),Z[0];const K=new Cs;E.extensions&&V1(x,K,E),g.associations.set(K,{meshes:a});for(let e2=0,l2=Z.length;e2<l2;e2++)K.add(Z[e2]);return K})}loadCamera(a){let g;const w=this.json.cameras[a],x=w[w.type];if(!x){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return w.type==="perspective"?g=new S0(Yi.radToDeg(x.yfov),x.aspectRatio||1,x.znear||1,x.zfar||2e6):w.type==="orthographic"&&(g=new t_(-x.xmag,x.xmag,x.ymag,-x.ymag,x.znear,x.zfar)),w.name&&(g.name=this.createUniqueName(w.name)),_1(g,w),Promise.resolve(g)}loadSkin(a){const g=this.json.skins[a],w=[];for(let x=0,E=g.joints.length;x<E;x++)w.push(this._loadNodeShallow(g.joints[x]));return g.inverseBindMatrices!==void 0?w.push(this.getDependency("accessor",g.inverseBindMatrices)):w.push(null),Promise.all(w).then(function(x){const E=x.pop(),P=x,O=[],G=[];for(let h=0,X=P.length;h<X;h++){const Z=P[h];if(Z){O.push(Z);const K=new te;E!==null&&K.fromArray(E.array,h*16),G.push(K)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',g.joints[h])}return new n_(O,G)})}loadAnimation(a){const g=this.json,w=this,x=g.animations[a],E=x.name?x.name:"animation_"+a,P=[],O=[],G=[],h=[],X=[];for(let Z=0,K=x.channels.length;Z<K;Z++){const e2=x.channels[Z],l2=x.samplers[e2.sampler],p2=e2.target,r2=p2.node,o2=x.parameters!==void 0?x.parameters[l2.input]:l2.input,v2=x.parameters!==void 0?x.parameters[l2.output]:l2.output;p2.node!==void 0&&(P.push(this.getDependency("node",r2)),O.push(this.getDependency("accessor",o2)),G.push(this.getDependency("accessor",v2)),h.push(l2),X.push(p2))}return Promise.all([Promise.all(P),Promise.all(O),Promise.all(G),Promise.all(h),Promise.all(X)]).then(function(Z){const K=Z[0],e2=Z[1],l2=Z[2],p2=Z[3],r2=Z[4],o2=[];for(let v2=0,m2=K.length;v2<m2;v2++){const k2=K[v2],j2=e2[v2],b2=l2[v2],D2=p2[v2],N2=r2[v2];if(k2===void 0)continue;k2.updateMatrix&&k2.updateMatrix();const B2=w._createAnimationTracks(k2,j2,b2,D2,N2);if(B2)for(let g2=0;g2<B2.length;g2++)o2.push(B2[g2])}return new Y4(E,void 0,o2)})}createNodeMesh(a){const g=this.json,w=this,x=g.nodes[a];return x.mesh===void 0?null:w.getDependency("mesh",x.mesh).then(function(E){const P=w._getNodeRef(w.meshCache,x.mesh,E);return x.weights!==void 0&&P.traverse(function(O){if(O.isMesh)for(let G=0,h=x.weights.length;G<h;G++)O.morphTargetInfluences[G]=x.weights[G]}),P})}loadNode(a){const g=this.json,w=this,x=g.nodes[a],E=w._loadNodeShallow(a),P=[],O=x.children||[];for(let h=0,X=O.length;h<X;h++)P.push(w.getDependency("node",O[h]));const G=x.skin===void 0?Promise.resolve(null):w.getDependency("skin",x.skin);return Promise.all([E,Promise.all(P),G]).then(function(h){const X=h[0],Z=h[1],K=h[2];K!==null&&X.traverse(function(e2){e2.isSkinnedMesh&&e2.bind(K,zd2)});for(let e2=0,l2=Z.length;e2<l2;e2++)X.add(Z[e2]);return X})}_loadNodeShallow(a){const g=this.json,w=this.extensions,x=this;if(this.nodeCache[a]!==void 0)return this.nodeCache[a];const E=g.nodes[a],P=E.name?x.createUniqueName(E.name):"",O=[],G=x._invokeOne(function(h){return h.createNodeMesh&&h.createNodeMesh(a)});return G&&O.push(G),E.camera!==void 0&&O.push(x.getDependency("camera",E.camera).then(function(h){return x._getNodeRef(x.cameraCache,E.camera,h)})),x._invokeAll(function(h){return h.createNodeAttachment&&h.createNodeAttachment(a)}).forEach(function(h){O.push(h)}),this.nodeCache[a]=Promise.all(O).then(function(h){let X;if(E.isBone===!0?X=new H4:h.length>1?X=new Cs:h.length===1?X=h[0]:X=new Un,X!==h[0])for(let Z=0,K=h.length;Z<K;Z++)X.add(h[Z]);if(E.name&&(X.userData.name=E.name,X.name=P),_1(X,E),E.extensions&&V1(w,X,E),E.matrix!==void 0){const Z=new te;Z.fromArray(E.matrix),X.applyMatrix4(Z)}else E.translation!==void 0&&X.position.fromArray(E.translation),E.rotation!==void 0&&X.quaternion.fromArray(E.rotation),E.scale!==void 0&&X.scale.fromArray(E.scale);return x.associations.has(X)||x.associations.set(X,{}),x.associations.get(X).nodes=a,X}),this.nodeCache[a]}loadScene(a){const g=this.extensions,w=this.json.scenes[a],x=this,E=new Cs;w.name&&(E.name=x.createUniqueName(w.name)),_1(E,w),w.extensions&&V1(g,E,w);const P=w.nodes||[],O=[];for(let G=0,h=P.length;G<h;G++)O.push(x.getDependency("node",P[G]));return Promise.all(O).then(function(G){for(let X=0,Z=G.length;X<Z;X++)E.add(G[X]);const h=X=>{const Z=new Map;for(const[K,e2]of x.associations)(K instanceof zr||K instanceof Ti)&&Z.set(K,e2);return X.traverse(K=>{const e2=x.associations.get(K);e2!=null&&Z.set(K,e2)}),Z};return x.associations=h(E),E})}_createAnimationTracks(a,g,w,x,E){const P=[],O=a.name?a.name:a.uuid,G=[];p1[E.path]===p1.weights?a.traverse(function(K){K.morphTargetInfluences&&G.push(K.name?K.name:K.uuid)}):G.push(O);let h;switch(p1[E.path]){case p1.weights:h=q1;break;case p1.rotation:h=Ms;break;case p1.position:case p1.scale:h=J1;break;default:switch(w.itemSize){case 1:h=q1;break;case 2:case 3:default:h=J1;break}break}const X=x.interpolation!==void 0?Nd2[x.interpolation]:au,Z=this._getArrayFromAccessor(w);for(let K=0,e2=G.length;K<e2;K++){const l2=new h(G[K]+"."+p1[E.path],g.array,Z,X);x.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(l2),P.push(l2)}return P}_getArrayFromAccessor(a){let g=a.array;if(a.normalized){const w=U6(g.constructor),x=new Float32Array(g.length);for(let E=0,P=g.length;E<P;E++)x[E]=g[E]*w;g=x}return g}_createCubicSplineTrackInterpolant(a){a.createInterpolant=function(w){const x=this instanceof Ms?jd2:PQ;return new x(this.times,this.values,this.getValueSize()/3,w)},a.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Yd2(D,a,g){const w=a.attributes,x=new Ho;if(w.POSITION!==void 0){const O=g.json.accessors[w.POSITION],G=O.min,h=O.max;if(G!==void 0&&h!==void 0){if(x.set(new E2(G[0],G[1],G[2]),new E2(h[0],h[1],h[2])),O.normalized){const X=U6(uu[O.componentType]);x.min.multiplyScalar(X),x.max.multiplyScalar(X)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const E=a.targets;if(E!==void 0){const O=new E2,G=new E2;for(let h=0,X=E.length;h<X;h++){const Z=E[h];if(Z.POSITION!==void 0){const K=g.json.accessors[Z.POSITION],e2=K.min,l2=K.max;if(e2!==void 0&&l2!==void 0){if(G.setX(Math.max(Math.abs(e2[0]),Math.abs(l2[0]))),G.setY(Math.max(Math.abs(e2[1]),Math.abs(l2[1]))),G.setZ(Math.max(Math.abs(e2[2]),Math.abs(l2[2]))),K.normalized){const p2=U6(uu[K.componentType]);G.multiplyScalar(p2)}O.max(G)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}x.expandByVector(O)}D.boundingBox=x;const P=new Vo;x.getCenter(P.center),P.radius=x.min.distanceTo(x.max)/2,D.boundingSphere=P}function Sz(D,a,g){const w=a.attributes,x=[];function E(P,O){return g.getDependency("accessor",P).then(function(G){D.setAttribute(O,G)})}for(const P in w){const O=N6[P]||P.toLowerCase();O in D.attributes||x.push(E(w[P],O))}if(a.indices!==void 0&&!D.index){const P=g.getDependency("accessor",a.indices).then(function(O){D.setIndex(O)});x.push(P)}return Dn.workingColorSpace!==Xi&&"COLOR_0"in w&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Dn.workingColorSpace}" not supported.`),_1(D,a),Yd2(D,a,g),Promise.all(x).then(function(){return a.targets!==void 0?Gd2(D,a.targets,g):D})}const y6=new WeakMap;class sp extends go{constructor(a){super(a),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(a){return this.decoderPath=a,this}setDecoderConfig(a){return this.decoderConfig=a,this}setWorkerLimit(a){return this.workerLimit=a,this}load(a,g,w,x){const E=new Au(this.manager);E.setPath(this.path),E.setResponseType("arraybuffer"),E.setRequestHeader(this.requestHeader),E.setWithCredentials(this.withCredentials),E.load(a,P=>{this.parse(P,g,x)},w,x)}parse(a,g,w=()=>{}){this.decodeDracoFile(a,g,null,null,di).catch(w)}decodeDracoFile(a,g,w,x,E=Xi,P=()=>{}){const O={attributeIDs:w||this.defaultAttributeIDs,attributeTypes:x||this.defaultAttributeTypes,useUniqueIDs:!!w,vertexColorSpace:E};return this.decodeGeometry(a,O).then(g).catch(P)}decodeGeometry(a,g){const w=JSON.stringify(g);if(y6.has(a)){const G=y6.get(a);if(G.key===w)return G.promise;if(a.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let x;const E=this.workerNextTaskID++,P=a.byteLength,O=this._getWorker(E,P).then(G=>(x=G,new Promise((h,X)=>{x._callbacks[E]={resolve:h,reject:X},x.postMessage({type:"decode",id:E,taskConfig:g,buffer:a},[a])}))).then(G=>this._createGeometry(G.geometry));return O.catch(()=>!0).then(()=>{x&&E&&this._releaseTask(x,E)}),y6.set(a,{key:w,promise:O}),O}_createGeometry(a){const g=new n0;a.index&&g.setIndex(new _0(a.index.array,1));for(let w=0;w<a.attributes.length;w++){const x=a.attributes[w],E=x.name,P=x.array,O=x.itemSize,G=new _0(P,O);E==="color"&&(this._assignVertexColorSpace(G,x.vertexColorSpace),G.normalized=!(P instanceof Float32Array)),g.setAttribute(E,G)}return g}_assignVertexColorSpace(a,g){if(g!==di)return;const w=new ce;for(let x=0,E=a.count;x<E;x++)w.fromBufferAttribute(a,x).convertSRGBToLinear(),a.setXYZ(x,w.r,w.g,w.b)}_loadLibrary(a,g){const w=new Au(this.manager);return w.setPath(this.decoderPath),w.setResponseType(g),w.setWithCredentials(this.withCredentials),new Promise((x,E)=>{w.load(a,x,void 0,E)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const a=typeof WebAssembly!="object"||this.decoderConfig.type==="js",g=[];return a?g.push(this._loadLibrary("draco_decoder.js","text")):(g.push(this._loadLibrary("draco_wasm_wrapper.js","text")),g.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(g).then(w=>{const x=w[0];a||(this.decoderConfig.wasmBinary=w[1]);const E=Xd2.toString(),P=["/* draco decoder */",x,"","/* worker */",E.substring(E.indexOf("{")+1,E.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([P]))}),this.decoderPending}_getWorker(a,g){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const x=new Worker(this.workerSourceURL);x._callbacks={},x._taskCosts={},x._taskLoad=0,x.postMessage({type:"init",decoderConfig:this.decoderConfig}),x.onmessage=function(E){const P=E.data;switch(P.type){case"decode":x._callbacks[P.id].resolve(P);break;case"error":x._callbacks[P.id].reject(P);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+P.type+'"')}},this.workerPool.push(x)}else this.workerPool.sort(function(x,E){return x._taskLoad>E._taskLoad?-1:1});const w=this.workerPool[this.workerPool.length-1];return w._taskCosts[a]=g,w._taskLoad+=g,w})}_releaseTask(a,g){a._taskLoad-=a._taskCosts[g],delete a._callbacks[g],delete a._taskCosts[g]}debug(){console.log("Task load: ",this.workerPool.map(a=>a._taskLoad))}dispose(){for(let a=0;a<this.workerPool.length;++a)this.workerPool[a].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Xd2(){let D,a;onmessage=function(P){const O=P.data;switch(O.type){case"init":D=O.decoderConfig,a=new Promise(function(X){D.onModuleLoaded=function(Z){X({draco:Z})},DracoDecoderModule(D)});break;case"decode":const G=O.buffer,h=O.taskConfig;a.then(X=>{const Z=X.draco,K=new Z.Decoder;try{const e2=g(Z,K,new Int8Array(G),h),l2=e2.attributes.map(p2=>p2.array.buffer);e2.index&&l2.push(e2.index.array.buffer),self.postMessage({type:"decode",id:O.id,geometry:e2},l2)}catch(e2){console.error(e2),self.postMessage({type:"error",id:O.id,error:e2.message})}finally{Z.destroy(K)}});break}};function g(P,O,G,h){const X=h.attributeIDs,Z=h.attributeTypes;let K,e2;const l2=O.GetEncodedGeometryType(G);if(l2===P.TRIANGULAR_MESH)K=new P.Mesh,e2=O.DecodeArrayToMesh(G,G.byteLength,K);else if(l2===P.POINT_CLOUD)K=new P.PointCloud,e2=O.DecodeArrayToPointCloud(G,G.byteLength,K);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!e2.ok()||K.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+e2.error_msg());const p2={index:null,attributes:[]};for(const r2 in X){const o2=self[Z[r2]];let v2,m2;if(h.useUniqueIDs)m2=X[r2],v2=O.GetAttributeByUniqueId(K,m2);else{if(m2=O.GetAttributeId(K,P[X[r2]]),m2===-1)continue;v2=O.GetAttribute(K,m2)}const k2=x(P,O,K,r2,o2,v2);r2==="color"&&(k2.vertexColorSpace=h.vertexColorSpace),p2.attributes.push(k2)}return l2===P.TRIANGULAR_MESH&&(p2.index=w(P,O,K)),P.destroy(K),p2}function w(P,O,G){const X=G.num_faces()*3,Z=X*4,K=P._malloc(Z);O.GetTrianglesUInt32Array(G,Z,K);const e2=new Uint32Array(P.HEAPF32.buffer,K,X).slice();return P._free(K),{array:e2,itemSize:1}}function x(P,O,G,h,X,Z){const K=Z.num_components(),l2=G.num_points()*K,p2=l2*X.BYTES_PER_ELEMENT,r2=E(P,X),o2=P._malloc(p2);O.GetAttributeDataArrayForAllPoints(G,Z,r2,p2,o2);const v2=new X(P.HEAPF32.buffer,o2,l2).slice();return P._free(o2),{name:h,array:v2,itemSize:K}}function E(P,O){switch(O){case Float32Array:return P.DT_FLOAT32;case Int8Array:return P.DT_INT8;case Int16Array:return P.DT_INT16;case Int32Array:return P.DT_INT32;case Uint8Array:return P.DT_UINT8;case Uint16Array:return P.DT_UINT16;case Uint32Array:return P.DT_UINT32}}}class Zd2 extends cm2{constructor(a){super(a),this.type=h1}parse(a){const P=function(N2,B2){switch(N2){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(B2||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(B2||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(B2||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(B2||""))}},X=`
`,Z=function(N2,B2,g2){B2=B2||1024;let nt=N2.pos,U2=-1,q2=0,ft="",ut=String.fromCharCode.apply(null,new Uint16Array(N2.subarray(nt,nt+128)));for(;0>(U2=ut.indexOf(X))&&q2<B2&&nt<N2.byteLength;)ft+=ut,q2+=ut.length,nt+=128,ut+=String.fromCharCode.apply(null,new Uint16Array(N2.subarray(nt,nt+128)));return-1<U2?(N2.pos+=q2+U2+1,ft+ut.slice(0,U2)):!1},K=function(N2){const B2=/^#\?(\S+)/,g2=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,W2=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,nt=/^\s*FORMAT=(\S+)\s*$/,U2=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,q2={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let ft,ut;for((N2.pos>=N2.byteLength||!(ft=Z(N2)))&&P(1,"no header found"),(ut=ft.match(B2))||P(3,"bad initial token"),q2.valid|=1,q2.programtype=ut[1],q2.string+=ft+`
`;ft=Z(N2),ft!==!1;){if(q2.string+=ft+`
`,ft.charAt(0)==="#"){q2.comments+=ft+`