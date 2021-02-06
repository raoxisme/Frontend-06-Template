### 动画和时间线

- setInterval： 大多数浏览器动画fps值为60 （16ms刷新一次动画更流畅）。setInterval不是立即执行，在16ms后添加任务到队列中，有可能出现上一个添加任务未执行，当前任务被添加了，上个任务执行完毕，当前任务立即执行情况，存在不稳定因素. `setInterval(() => {}, 16);`
- setTimeout: 容易出现内存泄漏，如果不清理setTimeout的话. `let tick = () => { setTimeout(tick, 16) }`
- requestAnimationFrame:更安全的实现,自适应帧变动，随浏览器帧变化而适配.  `let tick = () => {  requestAnimationFrame(tick) } `