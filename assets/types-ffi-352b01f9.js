var _={};Object.defineProperty(_,"__esModule",{value:!0});_.EvalFlags=_.assertSync=void 0;function r(t){return function(...E){const e=t(...E);if(e&&typeof e=="object"&&e instanceof Promise)throw new Error("Function unexpectedly returned a Promise");return e}}_.assertSync=r;_.EvalFlags={JS_EVAL_TYPE_GLOBAL:0,JS_EVAL_TYPE_MODULE:1,JS_EVAL_TYPE_DIRECT:2,JS_EVAL_TYPE_INDIRECT:3,JS_EVAL_TYPE_MASK:3,JS_EVAL_FLAG_STRICT:8,JS_EVAL_FLAG_STRIP:16,JS_EVAL_FLAG_COMPILE_ONLY:32,JS_EVAL_FLAG_BACKTRACE_BARRIER:64};export{_ as t};
