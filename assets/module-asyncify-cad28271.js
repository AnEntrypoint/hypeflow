import{_ as S,$ as v,a0 as A,a1 as _}from"./index-dd7a7116.js";import{c as w,t as y,r as x,a as M}from"./module-aeafb171.js";function p(r,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const n in s)if(n!=="default"&&!(n in r)){const i=Object.getOwnPropertyDescriptor(s,n);i&&Object.defineProperty(r,n,i.get?i:{enumerable:!0,get:()=>s[n]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}var c={},a={},l={};Object.defineProperty(l,"__esModule",{value:!0});l.QuickJSAsyncContext=void 0;const k=w,Q=S,b=y;class C extends k.QuickJSContext{async evalCodeAsync(e,t="eval.js",s){const n=s===void 0?1:0,i=(0,b.evalOptionsToFlags)(s);let o=0;try{o=await this.memory.newHeapCharPointer(e).consume(u=>this.ffi.QTS_Eval_MaybeAsync(this.ctx.value,u.value,t,n,i))}catch(u){throw(0,Q.debugLog)("QTS_Eval_MaybeAsync threw",u),u}const d=this.ffi.QTS_ResolveException(this.ctx.value,o);return d?(this.ffi.QTS_FreeValuePointer(this.ctx.value,o),{error:this.memory.heapValueHandle(d)}):{value:this.memory.heapValueHandle(o)}}newAsyncifiedFunction(e,t){return this.newFunction(e,t)}}l.QuickJSAsyncContext=C;Object.defineProperty(a,"__esModule",{value:!0});a.QuickJSAsyncRuntime=void 0;const g=v,J=l,L=x,O=y;class R extends L.QuickJSRuntime{constructor(e){super(e)}newContext(e={}){if(e.intrinsics&&e.intrinsics!==O.DefaultIntrinsics)throw new Error("TODO: Custom intrinsics are not supported yet");const t=new g.Lifetime(this.ffi.QTS_NewContext(this.rt.value),void 0,n=>{this.contextMap.delete(n),this.callbacks.deleteContext(n),this.ffi.QTS_FreeContext(n)}),s=new J.QuickJSAsyncContext({module:this.module,ctx:t,ffi:this.ffi,rt:this.rt,ownedLifetimes:[],runtime:this,callbacks:this.callbacks});return this.contextMap.set(t.value,s),s}setModuleLoader(e,t){super.setModuleLoader(e,t)}setMaxStackSize(e){return super.setMaxStackSize(e)}}a.QuickJSAsyncRuntime=R;Object.defineProperty(c,"__esModule",{value:!0});var h=c.QuickJSAsyncWASMModule=void 0;const T=A,f=_,m=M,P=a;class j extends m.QuickJSWASMModule{constructor(e,t){super(e,t),this.ffi=t,this.module=e}newRuntime(e={}){const t=new f.Lifetime(this.ffi.QTS_NewRuntime(),void 0,n=>{this.callbacks.deleteRuntime(n),this.ffi.QTS_FreeRuntime(n)}),s=new P.QuickJSAsyncRuntime({module:this.module,ffi:this.ffi,rt:t,callbacks:this.callbacks});return(0,m.applyBaseRuntimeOptions)(s,e),e.moduleLoader&&s.setModuleLoader(e.moduleLoader),s}newContext(e={}){const t=this.newRuntime(),s=e.ownedLifetimes?e.ownedLifetimes.concat([t]):[t],n=t.newContext({...e,ownedLifetimes:s});return t.context=n,n}evalCode(){throw new T.QuickJSNotImplemented("QuickJSWASMModuleAsyncify.evalCode: use evalCodeAsync instead")}evalCodeAsync(e,t){return f.Scope.withScopeAsync(async s=>{const n=s.manage(this.newContext());(0,m.applyModuleEvalRuntimeOptions)(n.runtime,t);const i=await n.evalCodeAsync(e,"eval.js");if(t.memoryLimitBytes!==void 0&&n.runtime.setMemoryLimit(-1),i.error)throw n.dump(s.manage(i.error));return n.dump(s.manage(i.value))})}}h=c.QuickJSAsyncWASMModule=j;const E=p({__proto__:null,get QuickJSAsyncWASMModule(){return h},default:c},[c]);export{E as m};
