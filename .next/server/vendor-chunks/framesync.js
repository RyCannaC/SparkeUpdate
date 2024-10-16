"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/framesync";
exports.ids = ["vendor-chunks/framesync"];
exports.modules = {

/***/ "(ssr)/./node_modules/framesync/dist/framesync.cjs.js":
/*!******************************************************!*\
  !*** ./node_modules/framesync/dist/framesync.cjs.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n\nvar defaultTimestep = (1 / 60) * 1000;\nvar getCurrentTime = typeof performance !== \"undefined\"\n    ? function () { return performance.now(); }\n    : function () { return Date.now(); };\nvar onNextFrame = typeof window !== \"undefined\"\n    ? function (callback) {\n        return window.requestAnimationFrame(callback);\n    }\n    : function (callback) {\n        return setTimeout(function () { return callback(getCurrentTime()); }, defaultTimestep);\n    };\n\nfunction createRenderStep(runNextFrame) {\n    var toRun = [];\n    var toRunNextFrame = [];\n    var numToRun = 0;\n    var isProcessing = false;\n    var toKeepAlive = new WeakSet();\n    var step = {\n        schedule: function (callback, keepAlive, immediate) {\n            if (keepAlive === void 0) { keepAlive = false; }\n            if (immediate === void 0) { immediate = false; }\n            var addToCurrentFrame = immediate && isProcessing;\n            var buffer = addToCurrentFrame ? toRun : toRunNextFrame;\n            if (keepAlive)\n                toKeepAlive.add(callback);\n            if (buffer.indexOf(callback) === -1) {\n                buffer.push(callback);\n                if (addToCurrentFrame && isProcessing)\n                    numToRun = toRun.length;\n            }\n            return callback;\n        },\n        cancel: function (callback) {\n            var index = toRunNextFrame.indexOf(callback);\n            if (index !== -1)\n                toRunNextFrame.splice(index, 1);\n            toKeepAlive.delete(callback);\n        },\n        process: function (frameData) {\n            var _a;\n            isProcessing = true;\n            _a = [toRunNextFrame, toRun], toRun = _a[0], toRunNextFrame = _a[1];\n            toRunNextFrame.length = 0;\n            numToRun = toRun.length;\n            if (numToRun) {\n                for (var i = 0; i < numToRun; i++) {\n                    var callback = toRun[i];\n                    callback(frameData);\n                    if (toKeepAlive.has(callback)) {\n                        step.schedule(callback);\n                        runNextFrame();\n                    }\n                }\n            }\n            isProcessing = false;\n        },\n    };\n    return step;\n}\n\nvar maxElapsed = 40;\nvar useDefaultElapsed = true;\nvar runNextFrame = false;\nvar isProcessing = false;\nvar frame = {\n    delta: 0,\n    timestamp: 0,\n};\nvar stepsOrder = [\n    \"read\",\n    \"update\",\n    \"preRender\",\n    \"render\",\n    \"postRender\",\n];\nvar steps = stepsOrder.reduce(function (acc, key) {\n    acc[key] = createRenderStep(function () { return (runNextFrame = true); });\n    return acc;\n}, {});\nvar sync = stepsOrder.reduce(function (acc, key) {\n    var step = steps[key];\n    acc[key] = function (process, keepAlive, immediate) {\n        if (keepAlive === void 0) { keepAlive = false; }\n        if (immediate === void 0) { immediate = false; }\n        if (!runNextFrame)\n            startLoop();\n        return step.schedule(process, keepAlive, immediate);\n    };\n    return acc;\n}, {});\nvar cancelSync = stepsOrder.reduce(function (acc, key) {\n    acc[key] = steps[key].cancel;\n    return acc;\n}, {});\nvar flushSync = stepsOrder.reduce(function (acc, key) {\n    acc[key] = function () { return steps[key].process(frame); };\n    return acc;\n}, {});\nvar processStep = function (stepId) { return steps[stepId].process(frame); };\nvar processFrame = function (timestamp) {\n    runNextFrame = false;\n    frame.delta = useDefaultElapsed\n        ? defaultTimestep\n        : Math.max(Math.min(timestamp - frame.timestamp, maxElapsed), 1);\n    frame.timestamp = timestamp;\n    isProcessing = true;\n    stepsOrder.forEach(processStep);\n    isProcessing = false;\n    if (runNextFrame) {\n        useDefaultElapsed = false;\n        onNextFrame(processFrame);\n    }\n};\nvar startLoop = function () {\n    runNextFrame = true;\n    useDefaultElapsed = true;\n    if (!isProcessing)\n        onNextFrame(processFrame);\n};\nvar getFrameData = function () { return frame; };\n\nexports.cancelSync = cancelSync;\nexports[\"default\"] = sync;\nexports.flushSync = flushSync;\nexports.getFrameData = getFrameData;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvZnJhbWVzeW5jL2Rpc3QvZnJhbWVzeW5jLmNqcy5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdEO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEIsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msb0NBQW9DO0FBQzVFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0M7QUFDeEMsd0NBQXdDO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsY0FBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLCtCQUErQjtBQUM3RTtBQUNBLENBQUMsSUFBSTtBQUNMO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQyxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSTtBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUMsSUFBSTtBQUNMO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0EsQ0FBQyxJQUFJO0FBQ0wsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7O0FBRWpDLGtCQUFrQjtBQUNsQixrQkFBZTtBQUNmLGlCQUFpQjtBQUNqQixvQkFBb0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0c3BhcmtlLy4vbm9kZV9tb2R1bGVzL2ZyYW1lc3luYy9kaXN0L2ZyYW1lc3luYy5janMuanM/MjRkMyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBkZWZhdWx0VGltZXN0ZXAgPSAoMSAvIDYwKSAqIDEwMDA7XG52YXIgZ2V0Q3VycmVudFRpbWUgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09IFwidW5kZWZpbmVkXCJcbiAgICA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBlcmZvcm1hbmNlLm5vdygpOyB9XG4gICAgOiBmdW5jdGlvbiAoKSB7IHJldHVybiBEYXRlLm5vdygpOyB9O1xudmFyIG9uTmV4dEZyYW1lID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxuICAgID8gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKTtcbiAgICB9XG4gICAgOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gY2FsbGJhY2soZ2V0Q3VycmVudFRpbWUoKSk7IH0sIGRlZmF1bHRUaW1lc3RlcCk7XG4gICAgfTtcblxuZnVuY3Rpb24gY3JlYXRlUmVuZGVyU3RlcChydW5OZXh0RnJhbWUpIHtcbiAgICB2YXIgdG9SdW4gPSBbXTtcbiAgICB2YXIgdG9SdW5OZXh0RnJhbWUgPSBbXTtcbiAgICB2YXIgbnVtVG9SdW4gPSAwO1xuICAgIHZhciBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICB2YXIgdG9LZWVwQWxpdmUgPSBuZXcgV2Vha1NldCgpO1xuICAgIHZhciBzdGVwID0ge1xuICAgICAgICBzY2hlZHVsZTogZnVuY3Rpb24gKGNhbGxiYWNrLCBrZWVwQWxpdmUsIGltbWVkaWF0ZSkge1xuICAgICAgICAgICAgaWYgKGtlZXBBbGl2ZSA9PT0gdm9pZCAwKSB7IGtlZXBBbGl2ZSA9IGZhbHNlOyB9XG4gICAgICAgICAgICBpZiAoaW1tZWRpYXRlID09PSB2b2lkIDApIHsgaW1tZWRpYXRlID0gZmFsc2U7IH1cbiAgICAgICAgICAgIHZhciBhZGRUb0N1cnJlbnRGcmFtZSA9IGltbWVkaWF0ZSAmJiBpc1Byb2Nlc3Npbmc7XG4gICAgICAgICAgICB2YXIgYnVmZmVyID0gYWRkVG9DdXJyZW50RnJhbWUgPyB0b1J1biA6IHRvUnVuTmV4dEZyYW1lO1xuICAgICAgICAgICAgaWYgKGtlZXBBbGl2ZSlcbiAgICAgICAgICAgICAgICB0b0tlZXBBbGl2ZS5hZGQoY2FsbGJhY2spO1xuICAgICAgICAgICAgaWYgKGJ1ZmZlci5pbmRleE9mKGNhbGxiYWNrKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBidWZmZXIucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgaWYgKGFkZFRvQ3VycmVudEZyYW1lICYmIGlzUHJvY2Vzc2luZylcbiAgICAgICAgICAgICAgICAgICAgbnVtVG9SdW4gPSB0b1J1bi5sZW5ndGg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2s7XG4gICAgICAgIH0sXG4gICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSB0b1J1bk5leHRGcmFtZS5pbmRleE9mKGNhbGxiYWNrKTtcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXG4gICAgICAgICAgICAgICAgdG9SdW5OZXh0RnJhbWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRvS2VlcEFsaXZlLmRlbGV0ZShjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIHByb2Nlc3M6IGZ1bmN0aW9uIChmcmFtZURhdGEpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlzUHJvY2Vzc2luZyA9IHRydWU7XG4gICAgICAgICAgICBfYSA9IFt0b1J1bk5leHRGcmFtZSwgdG9SdW5dLCB0b1J1biA9IF9hWzBdLCB0b1J1bk5leHRGcmFtZSA9IF9hWzFdO1xuICAgICAgICAgICAgdG9SdW5OZXh0RnJhbWUubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIG51bVRvUnVuID0gdG9SdW4ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKG51bVRvUnVuKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBudW1Ub1J1bjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBjYWxsYmFjayA9IHRvUnVuW2ldO1xuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhmcmFtZURhdGEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9LZWVwQWxpdmUuaGFzKGNhbGxiYWNrKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcC5zY2hlZHVsZShjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBydW5OZXh0RnJhbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIHN0ZXA7XG59XG5cbnZhciBtYXhFbGFwc2VkID0gNDA7XG52YXIgdXNlRGVmYXVsdEVsYXBzZWQgPSB0cnVlO1xudmFyIHJ1bk5leHRGcmFtZSA9IGZhbHNlO1xudmFyIGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xudmFyIGZyYW1lID0ge1xuICAgIGRlbHRhOiAwLFxuICAgIHRpbWVzdGFtcDogMCxcbn07XG52YXIgc3RlcHNPcmRlciA9IFtcbiAgICBcInJlYWRcIixcbiAgICBcInVwZGF0ZVwiLFxuICAgIFwicHJlUmVuZGVyXCIsXG4gICAgXCJyZW5kZXJcIixcbiAgICBcInBvc3RSZW5kZXJcIixcbl07XG52YXIgc3RlcHMgPSBzdGVwc09yZGVyLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICBhY2Nba2V5XSA9IGNyZWF0ZVJlbmRlclN0ZXAoZnVuY3Rpb24gKCkgeyByZXR1cm4gKHJ1bk5leHRGcmFtZSA9IHRydWUpOyB9KTtcbiAgICByZXR1cm4gYWNjO1xufSwge30pO1xudmFyIHN5bmMgPSBzdGVwc09yZGVyLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICB2YXIgc3RlcCA9IHN0ZXBzW2tleV07XG4gICAgYWNjW2tleV0gPSBmdW5jdGlvbiAocHJvY2Vzcywga2VlcEFsaXZlLCBpbW1lZGlhdGUpIHtcbiAgICAgICAgaWYgKGtlZXBBbGl2ZSA9PT0gdm9pZCAwKSB7IGtlZXBBbGl2ZSA9IGZhbHNlOyB9XG4gICAgICAgIGlmIChpbW1lZGlhdGUgPT09IHZvaWQgMCkgeyBpbW1lZGlhdGUgPSBmYWxzZTsgfVxuICAgICAgICBpZiAoIXJ1bk5leHRGcmFtZSlcbiAgICAgICAgICAgIHN0YXJ0TG9vcCgpO1xuICAgICAgICByZXR1cm4gc3RlcC5zY2hlZHVsZShwcm9jZXNzLCBrZWVwQWxpdmUsIGltbWVkaWF0ZSk7XG4gICAgfTtcbiAgICByZXR1cm4gYWNjO1xufSwge30pO1xudmFyIGNhbmNlbFN5bmMgPSBzdGVwc09yZGVyLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBrZXkpIHtcbiAgICBhY2Nba2V5XSA9IHN0ZXBzW2tleV0uY2FuY2VsO1xuICAgIHJldHVybiBhY2M7XG59LCB7fSk7XG52YXIgZmx1c2hTeW5jID0gc3RlcHNPcmRlci5yZWR1Y2UoZnVuY3Rpb24gKGFjYywga2V5KSB7XG4gICAgYWNjW2tleV0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBzdGVwc1trZXldLnByb2Nlc3MoZnJhbWUpOyB9O1xuICAgIHJldHVybiBhY2M7XG59LCB7fSk7XG52YXIgcHJvY2Vzc1N0ZXAgPSBmdW5jdGlvbiAoc3RlcElkKSB7IHJldHVybiBzdGVwc1tzdGVwSWRdLnByb2Nlc3MoZnJhbWUpOyB9O1xudmFyIHByb2Nlc3NGcmFtZSA9IGZ1bmN0aW9uICh0aW1lc3RhbXApIHtcbiAgICBydW5OZXh0RnJhbWUgPSBmYWxzZTtcbiAgICBmcmFtZS5kZWx0YSA9IHVzZURlZmF1bHRFbGFwc2VkXG4gICAgICAgID8gZGVmYXVsdFRpbWVzdGVwXG4gICAgICAgIDogTWF0aC5tYXgoTWF0aC5taW4odGltZXN0YW1wIC0gZnJhbWUudGltZXN0YW1wLCBtYXhFbGFwc2VkKSwgMSk7XG4gICAgZnJhbWUudGltZXN0YW1wID0gdGltZXN0YW1wO1xuICAgIGlzUHJvY2Vzc2luZyA9IHRydWU7XG4gICAgc3RlcHNPcmRlci5mb3JFYWNoKHByb2Nlc3NTdGVwKTtcbiAgICBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICBpZiAocnVuTmV4dEZyYW1lKSB7XG4gICAgICAgIHVzZURlZmF1bHRFbGFwc2VkID0gZmFsc2U7XG4gICAgICAgIG9uTmV4dEZyYW1lKHByb2Nlc3NGcmFtZSk7XG4gICAgfVxufTtcbnZhciBzdGFydExvb3AgPSBmdW5jdGlvbiAoKSB7XG4gICAgcnVuTmV4dEZyYW1lID0gdHJ1ZTtcbiAgICB1c2VEZWZhdWx0RWxhcHNlZCA9IHRydWU7XG4gICAgaWYgKCFpc1Byb2Nlc3NpbmcpXG4gICAgICAgIG9uTmV4dEZyYW1lKHByb2Nlc3NGcmFtZSk7XG59O1xudmFyIGdldEZyYW1lRGF0YSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZyYW1lOyB9O1xuXG5leHBvcnRzLmNhbmNlbFN5bmMgPSBjYW5jZWxTeW5jO1xuZXhwb3J0cy5kZWZhdWx0ID0gc3luYztcbmV4cG9ydHMuZmx1c2hTeW5jID0gZmx1c2hTeW5jO1xuZXhwb3J0cy5nZXRGcmFtZURhdGEgPSBnZXRGcmFtZURhdGE7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/framesync/dist/framesync.cjs.js\n");

/***/ })

};
;