(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["icons/arrow.svg"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<svg\n  xmlns=\"http://www.w3.org/2000/svg\"\n  width=\"1em\"\n  height=\"1em\"\n  viewBox=\"0 0 24 24\"\n  focusable=\"false\"\n  aria-hidden=\"true\"\n  fill=\"currentColor\"\n>\n  <path\n    d=\"M9.707 18.707l6-6a.999.999 0 0 0 0-1.414l-6-6a.999.999 0 1 0-1.414 1.414L13.586 12l-5.293 5.293a.999.999 0 1 0 1.414 1.414z\"\n  />\n</svg>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/archive.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/archive.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
var t_4;
t_4 = "Post Archive";
frame.set("pageType", t_4, true);
if(frame.topLevel) {
context.setVariable("pageType", t_4);
}
if(frame.topLevel) {
context.addExport("pageType", t_4);
}
output += "\n\n";
output += "\n";
var t_5;
t_5 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_5, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_5);
}
if(frame.topLevel) {
context.addExport("introHeading", t_5);
}
output += "\n";
var t_6;
t_6 = (function() {
var output = "";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
;
return output;
})()
;
frame.set("introSummary", t_6, true);
if(frame.topLevel) {
context.setVariable("introSummary", t_6);
}
if(frame.topLevel) {
context.addExport("introSummary", t_6);
}
output += "\n\n";
output += "\n";
var t_7;
t_7 = "All posts";
frame.set("postListHeading", t_7, true);
if(frame.topLevel) {
context.setVariable("postListHeading", t_7);
}
if(frame.topLevel) {
context.addExport("postListHeading", t_7);
}
output += "\n";
var t_8;
t_8 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"posts");
frame.set("postListItems", t_8, true);
if(frame.topLevel) {
context.setVariable("postListItems", t_8);
}
if(frame.topLevel) {
context.addExport("postListItems", t_8);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
output += t_9;
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 11;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "layouts/archive.njk", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/post-list.njk", false, "layouts/archive.njk", false, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
callback(null,t_15);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
callback(null,t_17);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  </main>\n";
cb(null, output);
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/base.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!DOCTYPE html>\n<html lang=\"en\" class=\"no-js\">\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n    ";
output += "\n    <link rel=\"icon\" href=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"faviconPath"), env.opts.autoescape);
output += "\" type=\"image/png\"/>\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/meta-info.njk", false, "layouts/base.njk", false, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
callback(null,t_1);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_4,t_3) {
if(t_4) { cb(t_4); return; }
callback(null,t_3);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    <script>\n      document\n        .documentElement\n        .classList\n        .remove('no-js');\n    </script>\n    <link rel=\"stylesheet\" type=\"text/css\"  href=\"/assets/css/global.css\"></link>\n\n    <!-- Global site tag (gtag.js) - Google Analytics -->\n    <script async src=\"https://www.googletagmanager.com/gtag/js?id=UA-161608018-1\"></script>\n    <script>\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n      gtag('js', new Date());\n\n      gtag('config', 'UA-161608018-1');\n    </script>\n\n    ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("head"))(env, context, frame, runtime, function(t_6,t_5) {
if(t_6) { cb(t_6); return; }
output += t_5;
output += "\n  </head>\n  <body>\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/site-head.njk", false, "layouts/base.njk", false, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
callback(null,t_7);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
output += t_11;
output += "\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/site-foot.njk", false, "layouts/base.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
callback(null,t_15);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    ";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("foot"))(env, context, frame, runtime, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
output += t_17;
output += "\n  </body>\n</html>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})})})})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_head(env, context, frame, runtime, cb) {
var lineno = 29;
var colno = 7;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 33;
var colno = 7;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_foot(env, context, frame, runtime, cb) {
var lineno = 35;
var colno = 7;
var output = "";
try {
var frame = frame.push(true);
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_head: b_head,
b_content: b_content,
b_foot: b_foot,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/home.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/home.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
var t_4;
t_4 = "Homepage";
frame.set("pageType", t_4, true);
if(frame.topLevel) {
context.setVariable("pageType", t_4);
}
if(frame.topLevel) {
context.addExport("pageType", t_4);
}
output += "\n\n";
output += "\n";
var t_5;
t_5 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_5, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_5);
}
if(frame.topLevel) {
context.addExport("introHeading", t_5);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += t_6;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 6;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    <article class=\"[ post ] [ h-entry ]\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "layouts/home.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
callback(null,t_10);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      <div class=\"[ post__body ] [ inner-wrapper ] [ leading-loose pad-top-900 text-500 ] [ sf-flow ] [ e-content ]\"></div>\n    </article>\n  </main>\n";
cb(null, output);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/page.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/page.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
var t_4;
t_4 = "Page";
frame.set("pageType", t_4, true);
if(frame.topLevel) {
context.setVariable("pageType", t_4);
}
if(frame.topLevel) {
context.addExport("pageType", t_4);
}
output += "\n\n";
output += "\n";
var t_5;
t_5 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_5, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_5);
}
if(frame.topLevel) {
context.addExport("introHeading", t_5);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
output += t_6;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 6;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    <article class=\"[ post ] [ h-entry ]\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "layouts/page.njk", false, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_11,t_10) {
if(t_11) { cb(t_11); return; }
callback(null,t_10);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      <div class=\"[ post__body ] [ inner-wrapper ] [ leading-loose pad-top-900 pad-bottom-900 text-500 ] [ sf-flow ] [ e-content ]\">\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n      </div>\n    </article>\n  </main>\n";
cb(null, output);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/post.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/post.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
var t_4;
t_4 = "Post";
frame.set("pageType", t_4, true);
if(frame.topLevel) {
context.setVariable("pageType", t_4);
}
if(frame.topLevel) {
context.addExport("pageType", t_4);
}
output += "\n\n";
output += "\n";
var t_5;
t_5 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_5, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_5);
}
if(frame.topLevel) {
context.addExport("introHeading", t_5);
}
output += "\n";
var t_6;
t_6 = (function() {
var output = "";
output += "\n<p class=\"[ intro__meta ] [ text-500 leading-tight ]\">\n  ";
if(runtime.contextOrFrameLookup(context, frame, "date")) {
output += "\n    <time datetime=\"";
output += runtime.suppressValue(env.getFilter("w3DateFilter").call(context, runtime.contextOrFrameLookup(context, frame, "date")), env.opts.autoescape);
output += "\" class=\"dt-published\">";
output += runtime.suppressValue(env.getFilter("dateFilter").call(context, runtime.contextOrFrameLookup(context, frame, "date")), env.opts.autoescape);
output += "</time>\n  ";
;
}
output += "\n  <span>— ";
output += runtime.suppressValue((lineno = 10, colno = 35, runtime.callWrap(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "helpers")),"getReadingTime"), "helpers[\"getReadingTime\"]", context, [runtime.contextOrFrameLookup(context, frame, "content")])), env.opts.autoescape);
output += " minute read</span>\n</p>\n";
;
return output;
})()
;
frame.set("introSummary", t_6, true);
if(frame.topLevel) {
context.setVariable("introSummary", t_6);
}
if(frame.topLevel) {
context.addExport("introSummary", t_6);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_8,t_7) {
if(t_8) { cb(t_8); return; }
output += t_7;
output += "\n\n";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 14;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    <article class=\"[ post ] [ h-entry ]\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "layouts/post.njk", false, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
callback(null,t_9);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      <div class=\"[ post__body ] [ inner-wrapper ] [ leading-loose pad-top-900 ";
output += runtime.suppressValue((!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"enableThirdPartyComments")?"pad-bottom-900":""), env.opts.autoescape);
output += " text-500 ] [ sf-flow ] [ e-content ]\">\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n      </div>\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"enableThirdPartyComments")) {
output += "\n        <hr />\n        <aside class=\"[ post__body ] [ inner-wrapper ] [ pad-bottom-900 text-500 ]\">\n          ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/global/third-party-comments.njk", false, "layouts/post.njk", false, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
callback(null,t_15);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n        </aside>\n      ";
});
}
output += "\n      ";
if(runtime.contextOrFrameLookup(context, frame, "tags")) {
output += "\n        <footer class=\"[ post__footer ] [ pad-top-500 pad-bottom-500 ]\">\n          <div class=\"inner-wrapper\">\n            <div class=\"[ nav ] [ box-flex align-center ]\">\n              <h2 class=\"font-base text-600 weight-mid\">Filed under</h2>\n              <ul class=\"[ nav__list ] [ box-flex align-center pad-left-400 ] [ p-category ]\">\n                ";
frame = frame.push();
var t_19 = runtime.contextOrFrameLookup(context, frame, "tags");
if(t_19) {t_19 = runtime.fromIterator(t_19);
var t_18 = t_19.length;
for(var t_17=0; t_17 < t_19.length; t_17++) {
var t_20 = t_19[t_17];
frame.set("item", t_20);
frame.set("loop.index", t_17 + 1);
frame.set("loop.index0", t_17);
frame.set("loop.revindex", t_18 - t_17);
frame.set("loop.revindex0", t_18 - t_17 - 1);
frame.set("loop.first", t_17 === 0);
frame.set("loop.last", t_17 === t_18 - 1);
frame.set("loop.length", t_18);
output += "\n                  <li class=\"nav__item\">\n                    <a href=\"/tags/";
output += runtime.suppressValue(t_20, env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(t_20, env.opts.autoescape);
output += "</a>\n                  </li>\n                ";
;
}
}
frame = frame.pop();
output += "\n              </ul>\n            </div>\n          </div>\n        </footer>\n      ";
;
}
output += "\n    </article>\n  </main>\n";
cb(null, output);
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["layouts/principle.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
env.getTemplate("layouts/base.njk", true, "layouts/principle.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
parentTemplate = t_2
for(var t_1 in parentTemplate.blocks) {
context.addBlock(t_1, parentTemplate.blocks[t_1]);
}
output += "\n";
var t_4;
t_4 = "Post";
frame.set("pageType", t_4, true);
if(frame.topLevel) {
context.setVariable("pageType", t_4);
}
if(frame.topLevel) {
context.addExport("pageType", t_4);
}
output += "\n\n";
output += "\n";
var t_5;
t_5 = runtime.contextOrFrameLookup(context, frame, "title");
frame.set("introHeading", t_5, true);
if(frame.topLevel) {
context.setVariable("introHeading", t_5);
}
if(frame.topLevel) {
context.addExport("introHeading", t_5);
}
output += "\n";
var t_6;
t_6 = runtime.contextOrFrameLookup(context, frame, "summary");
frame.set("introSummary", t_6, true);
if(frame.topLevel) {
context.setVariable("introSummary", t_6);
}
if(frame.topLevel) {
context.addExport("introSummary", t_6);
}
output += "\n";
var t_7;
t_7 = runtime.contextOrFrameLookup(context, frame, "nextUrl");
frame.set("paginationNextUrl", t_7, true);
if(frame.topLevel) {
context.setVariable("paginationNextUrl", t_7);
}
if(frame.topLevel) {
context.addExport("paginationNextUrl", t_7);
}
output += "\n";
var t_8;
t_8 = runtime.contextOrFrameLookup(context, frame, "prevUrl");
frame.set("paginationPrevUrl", t_8, true);
if(frame.topLevel) {
context.setVariable("paginationPrevUrl", t_8);
}
if(frame.topLevel) {
context.addExport("paginationPrevUrl", t_8);
}
output += "\n\n";
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("content"))(env, context, frame, runtime, function(t_10,t_9) {
if(t_10) { cb(t_10); return; }
output += t_9;
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_content(env, context, frame, runtime, cb) {
var lineno = 9;
var colno = 3;
var output = "";
try {
var frame = frame.push(true);
output += "\n  <main id=\"main-content\" tabindex=\"-1\">\n    <article class=\"[ post ] [ h-entry ]\">\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/intro.njk", false, "layouts/principle.njk", false, function(t_12,t_11) {
if(t_12) { cb(t_12); return; }
callback(null,t_11);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_14,t_13) {
if(t_14) { cb(t_14); return; }
callback(null,t_13);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      <div class=\"[ post__body ] [ inner-wrapper ] [ leading-loose pad-top-900 ";
output += runtime.suppressValue((!runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"enableThirdPartyComments")?"pad-bottom-900":""), env.opts.autoescape);
output += " text-500 ] [ sf-flow ] [ e-content ]\">\n\n        ";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "content")), env.opts.autoescape);
output += "\n\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/principle-list.njk", false, "layouts/principle.njk", false, function(t_16,t_15) {
if(t_16) { cb(t_16); return; }
callback(null,t_15);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_18,t_17) {
if(t_18) { cb(t_18); return; }
callback(null,t_17);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      </div>\n    </article>\n    ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/pagination.njk", false, "layouts/principle.njk", false, function(t_20,t_19) {
if(t_20) { cb(t_20); return; }
callback(null,t_19);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_22,t_21) {
if(t_22) { cb(t_22); return; }
callback(null,t_21);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n  </main>\n";
cb(null, output);
})})});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_content: b_content,
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/intro.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<header class=\"[ intro ] [ pad-top-900 pad-bottom-max ]\">\n  <div class=\"[ inner-wrapper ] [ sf-flow ]\">\n    <h1 class=\"[ intro__heading ] [ text-800 md:text-900 leading-tight ] [ p-name ]\">\n      ";
if(runtime.contextOrFrameLookup(context, frame, "order")) {
output += "\n        ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "order"), env.opts.autoescape);
output += ". \n      ";
;
}
output += "\n      ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "introHeading"), env.opts.autoescape);
output += "</h1>\n    ";
if(runtime.contextOrFrameLookup(context, frame, "introSummary")) {
output += "\n      <div class=\"[ intro__summary ] [ sf-flow ] [ leading-mid measure-short ]\">";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "introSummary")), env.opts.autoescape);
output += "\n      </div>\n    ";
;
}
output += "\n\n    ";
if(runtime.contextOrFrameLookup(context, frame, "showCTAButtons")) {
output += "\n      <p>\n        <a class=\"[ button ] [ font-base text-base weight-bold ]\" href=\"https://go.principles.green/pledge\" target=\"_blank\">Sign the Pledge</a>\n        ";
output += "\n      </p>\n    ";
;
}
output += "\n  </div>\n</header>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/nav.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "navigation")),"items")) {
output += "\n  <nav class=\"nav\" aria-label=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "ariaLabel"), env.opts.autoescape);
output += "\">\n    <ul class=\"[ nav__list ] [ box-flex align-center md:space-before ]\">\n      ";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "navigation")),"items");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n        ";
var t_5;
t_5 = "";
frame.set("relAttribute", t_5, true);
if(frame.topLevel) {
context.setVariable("relAttribute", t_5);
}
if(frame.topLevel) {
context.addExport("relAttribute", t_5);
}
output += "\n        ";
var t_6;
t_6 = "";
frame.set("currentAttribute", t_6, true);
if(frame.topLevel) {
context.setVariable("currentAttribute", t_6);
}
if(frame.topLevel) {
context.addExport("currentAttribute", t_6);
}
output += "\n\n        ";
if(runtime.memberLookup((t_4),"rel")) {
output += "\n          ";
var t_7;
t_7 = " rel=\"" + runtime.memberLookup((t_4),"rel") + "\"";
frame.set("relAttribute", t_7, true);
if(frame.topLevel) {
context.setVariable("relAttribute", t_7);
}
if(frame.topLevel) {
context.addExport("relAttribute", t_7);
}
output += "\n        ";
;
}
output += "\n\n        ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") == runtime.memberLookup((t_4),"url")) {
output += "\n          ";
var t_8;
t_8 = " aria-current=\"page\"";
frame.set("currentAttribute", t_8, true);
if(frame.topLevel) {
context.setVariable("currentAttribute", t_8);
}
if(frame.topLevel) {
context.addExport("currentAttribute", t_8);
}
output += "\n        ";
;
}
output += "\n\n        <li class=\"nav__item\">\n          <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\"";
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "relAttribute")), env.opts.autoescape);
output += runtime.suppressValue(env.getFilter("safe").call(context, runtime.contextOrFrameLookup(context, frame, "currentAttribute")), env.opts.autoescape);
output += ">";
output += runtime.suppressValue(runtime.memberLookup((t_4),"text"), env.opts.autoescape);
output += "</a>\n        </li>\n      ";
;
}
}
frame = frame.pop();
output += "\n    </ul>\n  </nav>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/pagination.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = "leading-tight text-500 weight-mid box-inline-flex align-center pad-bottom-300";
frame.set("paginationLinkTokens", t_1, true);
if(frame.topLevel) {
context.setVariable("paginationLinkTokens", t_1);
}
if(frame.topLevel) {
context.addExport("paginationLinkTokens", t_1);
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "paginationNextUrl") || runtime.contextOrFrameLookup(context, frame, "paginationPrevUrl")) {
output += "\n  ";
output += "\n  <div class=\"inner-wrapper\">\n    <footer class=\"[ pagination ] [ pad-bottom-900 ]\">\n      <nav class=\"[ pagination__nav ] [ box-flex space-between align-center ]\">\n        ";
if(runtime.contextOrFrameLookup(context, frame, "paginationPrevUrl")) {
output += "\n          <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationPrevUrl"), env.opts.autoescape);
output += "\" class=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationLinkTokens"), env.opts.autoescape);
output += "\" data-direction=\"backwards\">\n            <span>";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "paginationPrevText")?runtime.contextOrFrameLookup(context, frame, "paginationPrevText"):"Previous"), env.opts.autoescape);
output += "</span>\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("icons/arrow.svg", false, "partials/components/pagination.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
callback(null,t_2);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
callback(null,t_4);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n          </a>\n        ";
});
}
output += "\n        ";
if(runtime.contextOrFrameLookup(context, frame, "paginationNextUrl")) {
output += "\n          <a href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationNextUrl"), env.opts.autoescape);
output += "\" class=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "paginationLinkTokens"), env.opts.autoescape);
output += "\" data-direction=\"forwards\">\n            <span>";
output += runtime.suppressValue((runtime.contextOrFrameLookup(context, frame, "paginationNextText")?runtime.contextOrFrameLookup(context, frame, "paginationNextText"):"Next"), env.opts.autoescape);
output += "</span>\n            ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("icons/arrow.svg", false, "partials/components/pagination.njk", false, function(t_7,t_6) {
if(t_7) { cb(t_7); return; }
callback(null,t_6);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_9,t_8) {
if(t_9) { cb(t_9); return; }
callback(null,t_8);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n          </a>\n        ";
});
}
output += "\n      </nav>\n    </footer>\n  </div>\n";
;
}
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/post-list.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "postListItems")),"length")) {
output += "\n  <section class=\"[ post-list ] [ pad-top-700 gap-bottom-900 ]\">\n    <div class=\"[ inner-wrapper ] [ sf-flow ]\">\n      <h2 class=\"[ post-list__heading ] [ text-700 md:text-800 ]\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "postListHeading"), env.opts.autoescape);
output += "</h2>\n      <ol class=\"[ post-list__items ] [ sf-flow ] [ pad-top-300 ]\" reversed>\n        ";
frame = frame.push();
var t_3 = runtime.contextOrFrameLookup(context, frame, "postListItems");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("item", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "\n          ";
if((lineno = 6, colno = 33, runtime.callWrap(runtime.memberLookup((runtime.memberLookup((t_4),"date")),"getTime"), "item[\"date\"][\"getTime\"]", context, [])) <= runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "global")),"now")) {
output += "\n            <li class=\"post-list__item\">\n              <h3 class=\"font-base leading-tight text-600 weight-mid\">\n                <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\" class=\"post-list__link\" rel=\"bookmark\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"title"), env.opts.autoescape);
output += "</a>\n              </h3>\n              <p class=\"text-500 gap-top-300 weight-mid\">\n                <time datetime=\"";
output += runtime.suppressValue(env.getFilter("w3DateFilter").call(context, runtime.memberLookup((t_4),"date")), env.opts.autoescape);
output += "\">";
output += runtime.suppressValue(env.getFilter("dateFilter").call(context, runtime.memberLookup((t_4),"date")), env.opts.autoescape);
output += "</time>\n              </p>\n            </li>\n          ";
;
}
output += "\n        ";
;
}
}
frame = frame.pop();
output += "\n      </ol>\n    </div>\n  </section>\n";
;
}
output += "\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/components/principle-list.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<hr/>\n\n<h2 class=\"[ post-list__heading ] [ text-700 md:text-800 ]\">All Principles</h2>\n\n<div class=\"principles-list\">\n    <ol>";
frame = frame.push();
var t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "collections")),"principles");
if(t_3) {t_3 = runtime.fromIterator(t_3);
var t_2 = t_3.length;
for(var t_1=0; t_1 < t_3.length; t_1++) {
var t_4 = t_3[t_1];
frame.set("principle", t_4);
frame.set("loop.index", t_1 + 1);
frame.set("loop.index0", t_1);
frame.set("loop.revindex", t_2 - t_1);
frame.set("loop.revindex0", t_2 - t_1 - 1);
frame.set("loop.first", t_1 === 0);
frame.set("loop.last", t_1 === t_2 - 1);
frame.set("loop.length", t_2);
output += "<li ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") == runtime.memberLookup((t_4),"url")) {
output += " class=\"active\"";
;
}
output += ">\n\n                <a href=\"";
output += runtime.suppressValue(runtime.memberLookup((t_4),"url"), env.opts.autoescape);
output += "\">\n                    ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"title"), env.opts.autoescape);
output += "\n                </a>&nbsp;\n            ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") == runtime.memberLookup((t_4),"url")) {
output += " ▶ ";
;
}
output += "\n                ";
output += runtime.suppressValue(runtime.memberLookup((runtime.memberLookup((t_4),"data")),"summary"), env.opts.autoescape);
output += "\n                ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") == runtime.memberLookup((t_4),"url")) {
output += " ◀";
;
}
output += "\n            </li>";
;
}
}
frame = frame.pop();
output += "</ol>\n</div>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/meta-info.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
var t_1;
t_1 = runtime.contextOrFrameLookup(context, frame, "title") + " • " + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"longName");
frame.set("pageTitle", t_1, true);
if(frame.topLevel) {
context.setVariable("pageTitle", t_1);
}
if(frame.topLevel) {
context.addExport("pageTitle", t_1);
}
output += "\n";
var t_2;
t_2 = runtime.contextOrFrameLookup(context, frame, "summary");
frame.set("pageDesc", t_2, true);
if(frame.topLevel) {
context.setVariable("pageDesc", t_2);
}
if(frame.topLevel) {
context.addExport("pageDesc", t_2);
}
output += "\n";
var t_3;
t_3 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name");
frame.set("siteTitle", t_3, true);
if(frame.topLevel) {
context.setVariable("siteTitle", t_3);
}
if(frame.topLevel) {
context.addExport("siteTitle", t_3);
}
output += "\n";
var t_4;
t_4 = runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"url") + runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url");
frame.set("currentUrl", t_4, true);
if(frame.topLevel) {
context.setVariable("currentUrl", t_4);
}
if(frame.topLevel) {
context.addExport("currentUrl", t_4);
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "metaTitle")) {
output += "\n  ";
var t_5;
t_5 = runtime.contextOrFrameLookup(context, frame, "metaTitle");
frame.set("pageTitle", t_5, true);
if(frame.topLevel) {
context.setVariable("pageTitle", t_5);
}
if(frame.topLevel) {
context.addExport("pageTitle", t_5);
}
output += "\n";
;
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "metaDesc")) {
output += "\n  ";
var t_6;
t_6 = runtime.contextOrFrameLookup(context, frame, "metaDesc");
frame.set("pageDesc", t_6, true);
if(frame.topLevel) {
context.setVariable("pageDesc", t_6);
}
if(frame.topLevel) {
context.addExport("pageDesc", t_6);
}
output += "\n";
;
}
output += "\n\n<title>";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageTitle"), env.opts.autoescape);
output += "</title>\n<link rel=\"canonical\" href=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "currentUrl"), env.opts.autoescape);
output += "\"/>\n\n<meta property=\"og:site_name\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "siteTitle"), env.opts.autoescape);
output += "\"/>\n<meta property=\"og:title\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageTitle"), env.opts.autoescape);
output += "\"/>\n<meta property=\"og:type\" content=\"website\"/>\n<meta property=\"og:url\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "currentUrl"), env.opts.autoescape);
output += "\"/>\n\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"authorHandle")) {
output += "\n  <meta name=\"twitter:creator\" content=\"@";
output += runtime.suppressValue(env.getFilter("replace").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"authorHandle"),"@",""), env.opts.autoescape);
output += "\"/>\n";
;
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "pageDesc")) {
output += "\n  <meta name=\"description\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageDesc"), env.opts.autoescape);
output += "\"/>\n  <meta name=\"twitter:description\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageDesc"), env.opts.autoescape);
output += "\"/>\n  <meta property=\"og:description\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageDesc"), env.opts.autoescape);
output += "\"/>\n";
;
}
output += "\n\n";
if(runtime.contextOrFrameLookup(context, frame, "socialImage")) {
output += "\n  <meta property=\"og:image\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "socialImage"), env.opts.autoescape);
output += "\"/>\n  <meta name=\"twitter:image\" content=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "socialImage"), env.opts.autoescape);
output += "\"/>\n  <meta property=\"og:image:alt\" content=\"Page image for ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += "\"/>\n  <meta name=\"twitter:image:alt\" content=\"Page image for ";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += "\"/>\n";
;
}
output += "\n\n";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"paymentPointer")) {
output += "\n  <meta name=\"monetization\" content=\"";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"paymentPointer"), env.opts.autoescape);
output += "\"/>\n";
;
}
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/site-foot.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<footer role=\"contentinfo\" class=\"[ site-foot ] [ pad-top-700 pad-bottom-900 ]\">\n  <div class=\"wrapper\">\n    <div class=\"[ site-foot__inner ] [ md:box-flex space-between align-start ]\">\n      ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"shortDesc")) {
output += "\n        <div>\n          <article class=\"[ site-foot__details ] [ sf-flow measure-compact ]\">\n            <h2 class=\"font-base text-600\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += "</h2>\n            ";
output += runtime.suppressValue(env.getFilter("safe").call(context, env.getFilter("markdownFilter").call(context, runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"shortDesc"))), env.opts.autoescape);
output += "\n          </article>\n        </div>\n      ";
;
}
output += "\n      <div>\n        ";
var t_1;
t_1 = "footer navigation";
frame.set("ariaLabel", t_1, true);
if(frame.topLevel) {
context.setVariable("ariaLabel", t_1);
}
if(frame.topLevel) {
context.addExport("ariaLabel", t_1);
}
output += "\n        ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/nav.njk", false, "partials/global/site-foot.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
callback(null,t_2);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
callback(null,t_4);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n      </div>\n    </div>\n    ";
if(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"showThemeCredit")) {
output += "\n      <p class=\"[ site-foot__credit ] [ pad-top-900 ]\">\n        Powered by the <a href=\"https://hylia.website\" rel=\"external\">Hylia Eleventy Starter Kit v";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "pkg")),"version"), env.opts.autoescape);
output += "</a>.\n      </p>\n    ";
;
}
output += "\n  </div>\n</footer>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/site-head.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<a class=\"skip-link\" href=\"#main-content\">Skip to content</a>\n<header role=\"banner\" class=\"[ site-head ] [ pad-top-700 pad-bottom-700 \">\n  <div class=\"wrapper\">\n    <span class=\"visually-hidden\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += ": ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "pageType"), env.opts.autoescape);
output += "</span>\n    <div class=\"[ site-head__inner ] [ md:box-flex space-between align-center ]\">\n      <a href=\"/\" class=\"[ site-head__site-name ] [ leading-tight ]\"";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") == env.getFilter("safe").call(context, "/")?"aria-current=page":""), env.opts.autoescape);
output += ">\n        <span class=\"visually-hidden\">";
output += runtime.suppressValue((runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "page")),"url") != "/"?"Back to homepage":"Homepage"), env.opts.autoescape);
output += "</span>\n        <span class=\"[ site-head__site-name ] [ text-600 ]\" aria-hidden=\"true\">";
output += runtime.suppressValue(runtime.memberLookup((runtime.contextOrFrameLookup(context, frame, "site")),"name"), env.opts.autoescape);
output += "</span>\n      </a>\n      ";
var t_1;
t_1 = "navigation";
frame.set("ariaLabel", t_1, true);
if(frame.topLevel) {
context.setVariable("ariaLabel", t_1);
}
if(frame.topLevel) {
context.addExport("ariaLabel", t_1);
}
output += "\n      ";
var tasks = [];
tasks.push(
function(callback) {
env.getTemplate("partials/components/nav.njk", false, "partials/global/site-head.njk", false, function(t_3,t_2) {
if(t_3) { cb(t_3); return; }
callback(null,t_2);});
});
tasks.push(
function(template, callback){
template.render(context.getVariables(), frame, function(t_5,t_4) {
if(t_5) { cb(t_5); return; }
callback(null,t_4);});
});
tasks.push(
function(result, callback){
output += result;
callback(null);
});
env.waterfall(tasks, function(){
output += "\n    </div>\n  </div>\n</header>\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["partials/global/third-party-comments.njk"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = 0;
var colno = 0;
var output = "";
try {
var parentTemplate = null;
output += "<!-- ADD YOUR THIRD PARTY COMMENTS CODE HERE -->\n<!-- COMMENTO EXAMPLE \n<div id=\"commento\"></div>\n<script defer\n  src=\"https://cdn.commento.io/js/commento.js\">\n</script>\n-->\n";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();

