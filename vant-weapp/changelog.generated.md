## 更新日志

## [v0.5.13](https://github.com/youzan/vant-weapp/tree/v0.5.13) (2019-05-15)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.12...v0.5.13)

**Breaking changes**

- \[Feature Request\] Dialog的宽度设置 [\#1592](https://github.com/youzan/vant-weapp/issues/1592)
- \[Feature Request\] 建议NoticeBar left-icon支持icon组件 [\#1589](https://github.com/youzan/vant-weapp/issues/1589)
- \[Feature Request\] field组件对password的支持 [\#1581](https://github.com/youzan/vant-weapp/issues/1581)
- NoticeBar取消不了滚动；用不多行显示 [\#1568](https://github.com/youzan/vant-weapp/issues/1568)

**Bug Fixes**

- 关于CheckBox问题 [\#1606](https://github.com/youzan/vant-weapp/issues/1606)
- toast 设置loading 隐藏之后还有view遮住页面 导致页面不能点击 [\#1565](https://github.com/youzan/vant-weapp/issues/1565)
- Stepper 步进器的输入框，从别的地方复制文字进去，会导致整个小程序报错，从而无法使用 [\#1546](https://github.com/youzan/vant-weapp/issues/1546)
- Stepper 录入小数点马上被还原成整数 [\#1533](https://github.com/youzan/vant-weapp/issues/1533)
- van-icon实底question没有问号 [\#1522](https://github.com/youzan/vant-weapp/issues/1522)

**Issue**

- van-swipe-cell向左滑动，右边的 “删除” 没有样式 [\#1622](https://github.com/youzan/vant-weapp/issues/1622)
- picker需要增加一下range-key属性 [\#1619](https://github.com/youzan/vant-weapp/issues/1619)
- formatter	选项格式化函数 报错 [\#1615](https://github.com/youzan/vant-weapp/issues/1615)
- popup 组件中的 close-on-click-overlay 失效 [\#1613](https://github.com/youzan/vant-weapp/issues/1613)
- stepper async-change无效 [\#1611](https://github.com/youzan/vant-weapp/issues/1611)
- van-field不渲染 [\#1608](https://github.com/youzan/vant-weapp/issues/1608)
- tab 文字过长显示不全 [\#1607](https://github.com/youzan/vant-weapp/issues/1607)
- 部分手机 cell is-link 会造成页面空白 [\#1537](https://github.com/youzan/vant-weapp/issues/1537)
- van-toast调用是，关闭的时候还有一块透明的view，没有完全隐藏 [\#1476](https://github.com/youzan/vant-weapp/issues/1476)

**Improvements**

- \[new feature\] Rate: add new prop allow-half [\#1623](https://github.com/youzan/vant-weapp/pull/1623) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Transition: 修复leave阶段时节点不消失 [\#1621](https://github.com/youzan/vant-weapp/pull/1621) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] NoticeBar: add new prop wrapable [\#1617](https://github.com/youzan/vant-weapp/pull/1617) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Checkbox: fix style error [\#1616](https://github.com/youzan/vant-weapp/pull/1616) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] NoticeBar: left-icon replace to Icon component [\#1604](https://github.com/youzan/vant-weapp/pull/1604) ([JakeLaoyu](https://github.com/JakeLaoyu))

## [v0.5.12](https://github.com/youzan/vant-weapp/tree/v0.5.12) (2019-05-05)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.11...v0.5.12)

**Bug Fixes**

- radio和checkbox后面的选项内容如果太长会导致排版变形 [\#1413](https://github.com/youzan/vant-weapp/issues/1413)

**Issue**

- van-tabs type=card时的宽度如何设置 [\#1598](https://github.com/youzan/vant-weapp/issues/1598)
- Collapse折叠板点击无变化 bug [\#1597](https://github.com/youzan/vant-weapp/issues/1597)
- vant-weapp 官网文档 中 Search 组件缺少 change 方法 [\#1596](https://github.com/youzan/vant-weapp/issues/1596)
- van-stepper 的点击事件会传递给父层级 [\#1594](https://github.com/youzan/vant-weapp/issues/1594)
-  form表单提交无法获得数据 [\#1590](https://github.com/youzan/vant-weapp/issues/1590)
- 请教小程序版van-field如何搭配van-popup? [\#1588](https://github.com/youzan/vant-weapp/issues/1588)
- Layout组件设置gutter无效 [\#1587](https://github.com/youzan/vant-weapp/issues/1587)
- goodsAction的info只显示了1/4（疑似与wxParse样式冲突） [\#1582](https://github.com/youzan/vant-weapp/issues/1582)
- DatetimePikcer 选择2019年的时候 月份显示不全 [\#1580](https://github.com/youzan/vant-weapp/issues/1580)
- switch在微信小程序中显示异常 [\#1575](https://github.com/youzan/vant-weapp/issues/1575)
- Collapse 可以默认展开吗？ [\#1573](https://github.com/youzan/vant-weapp/issues/1573)
- vant-weapp   Slider 组件文档中有垂直方向 但是属性或者propsl里并没有提供参数可以配置 [\#1571](https://github.com/youzan/vant-weapp/issues/1571)
- 官方是否可以增加scroll-view下拉刷新的模块 [\#1570](https://github.com/youzan/vant-weapp/issues/1570)
- 表单placeholder 遮挡 [\#1569](https://github.com/youzan/vant-weapp/issues/1569)
- 框架是否可以增加 pageLifetimes  [\#1566](https://github.com/youzan/vant-weapp/issues/1566)
- SwipeCell 滑动单元格 没效果 [\#1563](https://github.com/youzan/vant-weapp/issues/1563)
- notify无法弹出 [\#1562](https://github.com/youzan/vant-weapp/issues/1562)
- SubmitBar 提交订单栏 没有全选按钮 [\#1561](https://github.com/youzan/vant-weapp/issues/1561)
- van-slider max为200的时候样式会有问题 [\#1559](https://github.com/youzan/vant-weapp/issues/1559)

**Improvements**

- \[Doc\] Tab: update demo [\#1603](https://github.com/youzan/vant-weapp/pull/1603) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] Collapse: fix typo in document [\#1602](https://github.com/youzan/vant-weapp/pull/1602) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Dialog: add class-name prop [\#1601](https://github.com/youzan/vant-weapp/pull/1601) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Stepper: can not input decimal number [\#1600](https://github.com/youzan/vant-weapp/pull/1600) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Stepper: should filter invalid input [\#1599](https://github.com/youzan/vant-weapp/pull/1599) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] Icon: new and question icon incomplete render [\#1595](https://github.com/youzan/vant-weapp/pull/1595) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] SubmitBar: add tip-icon prop [\#1593](https://github.com/youzan/vant-weapp/pull/1593) ([JakeLaoyu](https://github.com/JakeLaoyu))
- \[Doc\] support layout demo [\#1585](https://github.com/youzan/vant-weapp/pull/1585) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] add weapp flag to demo page [\#1584](https://github.com/youzan/vant-weapp/pull/1584) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Field: add password prop [\#1583](https://github.com/youzan/vant-weapp/pull/1583) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] Dialog: update demo [\#1579](https://github.com/youzan/vant-weapp/pull/1579) ([chenjiahan](https://github.com/chenjiahan))
- \[Doc\] Rate: update demo [\#1578](https://github.com/youzan/vant-weapp/pull/1578) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] SubmitBar: avoid using tag selector [\#1577](https://github.com/youzan/vant-weapp/pull/1577) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] NoticeBar: optimize wxml [\#1576](https://github.com/youzan/vant-weapp/pull/1576) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] NoticeBar: avoid using tag selector [\#1574](https://github.com/youzan/vant-weapp/pull/1574) ([chenjiahan](https://github.com/chenjiahan))

## [v0.5.11](https://github.com/youzan/vant-weapp/tree/v0.5.11) (2019-04-24)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.10...v0.5.11)

**Breaking changes**

- cell的title自定义时，label不显示 [\#1554](https://github.com/youzan/vant-weapp/issues/1554)
- Toast 轻提示 是否可以增加回调函数 [\#1551](https://github.com/youzan/vant-weapp/issues/1551)
- 文档中Badge组件没有列出事件 [\#1542](https://github.com/youzan/vant-weapp/issues/1542)
- dateTimePicker什么没有自定义的custom-class啊，不支持自定义的class [\#1526](https://github.com/youzan/vant-weapp/issues/1526)
- 功能性的优化希望知悉！ [\#1502](https://github.com/youzan/vant-weapp/issues/1502)
- notify 麻烦支持top 和 zIndex [\#1498](https://github.com/youzan/vant-weapp/issues/1498)

**Bug Fixes**

- area 组件无地区选项又不显示了 [\#1543](https://github.com/youzan/vant-weapp/issues/1543)
- 页面只有一个collapse, 点击tabs 的时候重新加载数据,会报错 [\#1515](https://github.com/youzan/vant-weapp/issues/1515)
- van-field 组件在不输入文本时placeholder提示文本没有垂直居中，输入文本正常 [\#1483](https://github.com/youzan/vant-weapp/issues/1483)

**Issue**

- swipe [\#1550](https://github.com/youzan/vant-weapp/issues/1550)
- vant [\#1549](https://github.com/youzan/vant-weapp/issues/1549)
- 关于mpvue使用van-swipe-cell不出现内容 [\#1548](https://github.com/youzan/vant-weapp/issues/1548)
- 提供megalo版本 [\#1547](https://github.com/youzan/vant-weapp/issues/1547)
- tabbar 未适配 iPhone X，border-top 那条线和 icon 重叠了 [\#1545](https://github.com/youzan/vant-weapp/issues/1545)
- van-action-sheet中close-on-click-overlay属性无效 [\#1544](https://github.com/youzan/vant-weapp/issues/1544)
- Dialog弹出框弹出时，其中的Field输入框会向下抖动 [\#1534](https://github.com/youzan/vant-weapp/issues/1534)
- popup底部弹出时，被页面底部内容覆盖 [\#1532](https://github.com/youzan/vant-weapp/issues/1532)
- auth required for publishing [\#1531](https://github.com/youzan/vant-weapp/issues/1531)
- 希望实现通过active属性在业务代码中能控制tabs组件内容切换 [\#1528](https://github.com/youzan/vant-weapp/issues/1528)
- tbs 组件报错 [\#1523](https://github.com/youzan/vant-weapp/issues/1523)
- https://youzan.github.io/vant-weapp 文档打不开 [\#1521](https://github.com/youzan/vant-weapp/issues/1521)
- https://youzan.github.io/vant-weapp 文档打不开 [\#1520](https://github.com/youzan/vant-weapp/issues/1520)
- 动态修改datePicker defaultIndex ，默认选中项不更新 [\#1519](https://github.com/youzan/vant-weapp/issues/1519)
- 构建npm成功之后，编译报错 : module "miniprogram\_npm/vant-weapp/mixins/observer/props" is not defined [\#1516](https://github.com/youzan/vant-weapp/issues/1516)
- 新需求：van-goods-action-input [\#1514](https://github.com/youzan/vant-weapp/issues/1514)
- 按钮box-shadow在ios问题 [\#1513](https://github.com/youzan/vant-weapp/issues/1513)
- Dialog弹窗被原生组件覆盖 [\#1511](https://github.com/youzan/vant-weapp/issues/1511)
- NavBar 组件safe-area-inset-top属性设置无效 [\#1505](https://github.com/youzan/vant-weapp/issues/1505)

**Improvements**

- \[new feature\] Icon: update @vant/icons [\#1560](https://github.com/youzan/vant-weapp/pull/1560) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] DatetimePicker: add new prop formatter & add new external classes [\#1558](https://github.com/youzan/vant-weapp/pull/1558) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Badge: add new event click & improve docs [\#1557](https://github.com/youzan/vant-weapp/pull/1557) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Area: 修复同步设置areaList时不显示选项 [\#1556](https://github.com/youzan/vant-weapp/pull/1556) ([rex-zsd](https://github.com/rex-zsd))
- refactor\(Picker\): 回滚movable-view重构 @rex-zsd [\#1555](https://github.com/youzan/vant-weapp/pull/1555) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Slider: fix slider drag and `value` props change at the same time can not drag success [\#1553](https://github.com/youzan/vant-weapp/pull/1553) ([cookfront](https://github.com/cookfront))
- \[new feature\] Toast: add new option onClose & add new slot [\#1552](https://github.com/youzan/vant-weapp/pull/1552) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Picker: add new prop default-index [\#1540](https://github.com/youzan/vant-weapp/pull/1540) ([rex-zsd](https://github.com/rex-zsd))
- \[Doc\] update demo index [\#1539](https://github.com/youzan/vant-weapp/pull/1539) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Collapse: add clickable prop [\#1538](https://github.com/youzan/vant-weapp/pull/1538) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Notify: add new prop zIndex [\#1535](https://github.com/youzan/vant-weapp/pull/1535) ([rex-zsd](https://github.com/rex-zsd))
- \[Doc\] Icon: update demo [\#1530](https://github.com/youzan/vant-weapp/pull/1530) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] SubmitBar: add decimal-length prop [\#1529](https://github.com/youzan/vant-weapp/pull/1529) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] Field: add right-icon & fix placeholder style problem [\#1527](https://github.com/youzan/vant-weapp/pull/1527) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] Picker: refactor component with movable-view [\#1524](https://github.com/youzan/vant-weapp/pull/1524) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Collapse: remove reference from children of collapse when collapse-item unlinked [\#1517](https://github.com/youzan/vant-weapp/pull/1517) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Cell: add new prop useLabelSlot & add new slot label [\#1510](https://github.com/youzan/vant-weapp/pull/1510) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Feild: add error-message-align prop [\#1509](https://github.com/youzan/vant-weapp/pull/1509) ([zavven](https://github.com/zavven))

## [v0.5.10](https://github.com/youzan/vant-weapp/tree/v0.5.10) (2019-04-11)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.9...v0.5.10)

**Breaking changes**

- van-tabs多个tab页的情况下   切换tab页会显示滚动条 [\#1471](https://github.com/youzan/vant-weapp/issues/1471)

**Bug Fixes**

- BUG:当组件van-collapse 被第二个van-tab中使用时，默认展开的效果会丢失 [\#1494](https://github.com/youzan/vant-weapp/issues/1494)
- SwipeCell 内放输入框无法focus输入 [\#1464](https://github.com/youzan/vant-weapp/issues/1464)

**Issue**

- css错误 [\#1508](https://github.com/youzan/vant-weapp/issues/1508)
- 我想在自己的组件中再次封装vant组件，始终不起作用，在page中是有效的 [\#1507](https://github.com/youzan/vant-weapp/issues/1507)
- 当页面同时使用两个tab时点击切换后第二个tab的当前标签没有恢复到第一个 [\#1503](https://github.com/youzan/vant-weapp/issues/1503)
- 感谢你们的辛勤付出 [\#1500](https://github.com/youzan/vant-weapp/issues/1500)
- title-active-color 自定义颜色，选中时文字的颜色没有变化 [\#1499](https://github.com/youzan/vant-weapp/issues/1499)
- van-swipe-cell所有的点击都没有效果 [\#1497](https://github.com/youzan/vant-weapp/issues/1497)
- 我在mpvue中引入van-swipe-cell,没有任何效果 [\#1496](https://github.com/youzan/vant-weapp/issues/1496)
- Bug：van-info在引用wxParse的页面中数字错位 [\#1495](https://github.com/youzan/vant-weapp/issues/1495)
- van-dialog 加 van-field,弹出后field文字会抖动一下 [\#1488](https://github.com/youzan/vant-weapp/issues/1488)
- tree-select点击事件没有效果？ [\#1487](https://github.com/youzan/vant-weapp/issues/1487)

**Improvements**

- \[bugfix\] Collapse: improve performance & optimize initial style set [\#1506](https://github.com/youzan/vant-weapp/pull/1506) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] SwipeCell: improve performance & fix prevent scroll [\#1501](https://github.com/youzan/vant-weapp/pull/1501) ([rex-zsd](https://github.com/rex-zsd))
- \[docs\] README: fix change log url [\#1491](https://github.com/youzan/vant-weapp/pull/1491) ([nyaapass](https://github.com/nyaapass))
- \[docs\]: update issue template [\#1490](https://github.com/youzan/vant-weapp/pull/1490) ([rex-zsd](https://github.com/rex-zsd))
- \[docs\]: add es5 guide [\#1489](https://github.com/youzan/vant-weapp/pull/1489) ([rex-zsd](https://github.com/rex-zsd))

## [v0.5.9](https://github.com/youzan/vant-weapp/tree/v0.5.9) (2019-04-03)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.8...v0.5.9)

**Breaking changes**

- 是否有编译后的es5版本 [\#1469](https://github.com/youzan/vant-weapp/issues/1469)
- 使用tabBar组件作为小程序自定义tabBar [\#1429](https://github.com/youzan/vant-weapp/issues/1429)

**Bug Fixes**

- Slider 单击滑动区域，不能修改滑块位置 [\#1477](https://github.com/youzan/vant-weapp/issues/1477)
- swipe-cell不能触发事件 [\#1449](https://github.com/youzan/vant-weapp/issues/1449)

**Issue**

- 设置van-tabbar为自定义tabbar时，调用wx.switchTab后active激活状态异常，无法正常对应tabbar [\#1481](https://github.com/youzan/vant-weapp/issues/1481)
- swiperCell组件的event事件无效 [\#1475](https://github.com/youzan/vant-weapp/issues/1475)
- 组件用最新的开发工具，各种报错 [\#1474](https://github.com/youzan/vant-weapp/issues/1474)
- uni-app框架支持 [\#1473](https://github.com/youzan/vant-weapp/issues/1473)
- van-popup无法关闭弹出层，只能关闭遮罩层，微信小程序 [\#1472](https://github.com/youzan/vant-weapp/issues/1472)
- van-cell组件跳转深度层级页数问题？ [\#1470](https://github.com/youzan/vant-weapp/issues/1470)
- van-popup 微信苹果IOS下不显示弹出框 [\#1468](https://github.com/youzan/vant-weapp/issues/1468)
- Tab组件若被包含在 if block当中会存在bug [\#1467](https://github.com/youzan/vant-weapp/issues/1467)
- Toast引用求助 [\#1466](https://github.com/youzan/vant-weapp/issues/1466)
- tab标签页，bind:scroll如何使用 [\#1465](https://github.com/youzan/vant-weapp/issues/1465)
- 在微信小程序预览，可以详细一些吗， [\#1463](https://github.com/youzan/vant-weapp/issues/1463)
- 文档错误·checkbox自定义图标image标签缺少闭合斜杠 [\#1462](https://github.com/youzan/vant-weapp/issues/1462)
- Popup不能弹出图片 [\#1458](https://github.com/youzan/vant-weapp/issues/1458)
- vant tab页  可以加上竖着滑动 [\#1456](https://github.com/youzan/vant-weapp/issues/1456)
- 增强DatetimePicker控件 [\#1455](https://github.com/youzan/vant-weapp/issues/1455)
- Picker选择器 默认选中项 实现方式 [\#1454](https://github.com/youzan/vant-weapp/issues/1454)
- radio加载字体图标报错 [\#1453](https://github.com/youzan/vant-weapp/issues/1453)
- Picker 选择器默认值 [\#1452](https://github.com/youzan/vant-weapp/issues/1452)
- tab标签页设置背景后  下面没有内容就没有背景颜色了   而且设置了滑动   没有内容的地方也不能滑动 [\#1451](https://github.com/youzan/vant-weapp/issues/1451)
- van-field里添加popup，输入法会弹出覆盖popup，怎么禁用输入法 [\#1450](https://github.com/youzan/vant-weapp/issues/1450)
- 构建npm后编译出错提示找不到../wxs/utils.wxs [\#1448](https://github.com/youzan/vant-weapp/issues/1448)
- 如何支持 i18n ? [\#1446](https://github.com/youzan/vant-weapp/issues/1446)
- 使用tab标签页"usingComponents": {   "van-tab": "path/to/vant-weapp/dist/tab/index",   "van-tabs": "path/to/vant-weapp/dist/tabs/index" }这个组件时，设置Tabs API中的color初始化时会无效 [\#1411](https://github.com/youzan/vant-weapp/issues/1411)
- slider可以增加竖向样式的么 [\#1410](https://github.com/youzan/vant-weapp/issues/1410)

**Improvements**

- \[new feature\]: compile es5 dist [\#1485](https://github.com/youzan/vant-weapp/pull/1485) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Slider: fix click not work [\#1484](https://github.com/youzan/vant-weapp/pull/1484) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Icon: avoid using tag selector [\#1482](https://github.com/youzan/vant-weapp/pull/1482) ([chenjiahan](https://github.com/chenjiahan))
- \[new feature\] Stepper: add input-width prop [\#1480](https://github.com/youzan/vant-weapp/pull/1480) ([chenjiahan](https://github.com/chenjiahan))
- \[docs\] Checkbox: fix doc error [\#1479](https://github.com/youzan/vant-weapp/pull/1479) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\]: support safe-area-inset-top [\#1478](https://github.com/youzan/vant-weapp/pull/1478) ([rex-zsd](https://github.com/rex-zsd))
- \[build\]: fix watch not work [\#1461](https://github.com/youzan/vant-weapp/pull/1461) ([rex-zsd](https://github.com/rex-zsd))
- \[improvement\] Tabbar: improve performance [\#1460](https://github.com/youzan/vant-weapp/pull/1460) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] SwipeCell: close event never emit [\#1459](https://github.com/youzan/vant-weapp/pull/1459) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Button: add hairline prop [\#1439](https://github.com/youzan/vant-weapp/pull/1439) ([chenjiahan](https://github.com/chenjiahan))

## [v0.5.8](https://github.com/youzan/vant-weapp/tree/v0.5.8) (2019-03-22)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.7...v0.5.8)

**Bug Fixes**

- van-popup组件BUG [\#1431](https://github.com/youzan/vant-weapp/issues/1431)

**Issue**

- button组件 [\#1445](https://github.com/youzan/vant-weapp/issues/1445)
- vant什么时候出支持其他小程序的UI？ [\#1444](https://github.com/youzan/vant-weapp/issues/1444)
- picker的render渲染延迟与设置选中项的冲突问题 [\#1443](https://github.com/youzan/vant-weapp/issues/1443)
- van-field 没有效果 [\#1442](https://github.com/youzan/vant-weapp/issues/1442)
- picker column 选中效果 [\#1441](https://github.com/youzan/vant-weapp/issues/1441)
- van-field 组件中的size 有哪些可选值，能不能在说明文档中列出来？ [\#1440](https://github.com/youzan/vant-weapp/issues/1440)
- 关于VantComponent内置的computed和watch的一些困惑 [\#1436](https://github.com/youzan/vant-weapp/issues/1436)
- 使用var-tabs组件，给tab自定义数据属性 [\#1432](https://github.com/youzan/vant-weapp/issues/1432)
- 使用 megalo vue tabs 吸顶失效，页面滚动事件失效 [\#1428](https://github.com/youzan/vant-weapp/issues/1428)
- van-popup组件不能完全遮盖van-field，当 type="textarea"，会透明重叠显示 [\#1427](https://github.com/youzan/vant-weapp/issues/1427)
- van-fieldt组件type="textarea"时，van-popup没有罩住，会透明重叠显示 [\#1426](https://github.com/youzan/vant-weapp/issues/1426)
- GoodsActionIcon type 属性无效 [\#1425](https://github.com/youzan/vant-weapp/issues/1425)
- Stepper 的input框为空时按退格造成maximum call stack size exceeded错误 [\#1422](https://github.com/youzan/vant-weapp/issues/1422)
- 部分机型van-filed 发送验证码按钮无法触发 [\#1421](https://github.com/youzan/vant-weapp/issues/1421)
- cell里图标上下居中显示 [\#1418](https://github.com/youzan/vant-weapp/issues/1418)
- van-button 设置 form-type 无效，表单无法提交 [\#1417](https://github.com/youzan/vant-weapp/issues/1417)
- form 表单提交无反应 [\#1416](https://github.com/youzan/vant-weapp/issues/1416)
- 受控组件不能包装为自定义组件 [\#1415](https://github.com/youzan/vant-weapp/issues/1415)
- mpvue+vant tabs标签页使用echarts切换宽度无法适应 [\#1414](https://github.com/youzan/vant-weapp/issues/1414)
- 可以增加color-picker组件吗 [\#1409](https://github.com/youzan/vant-weapp/issues/1409)

**Improvements**

- \[build\]: upgrade dependence & use cssnano instead of clean-css [\#1447](https://github.com/youzan/vant-weapp/pull/1447) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] ActionSheet: slot content should above cancel-text [\#1438](https://github.com/youzan/vant-weapp/pull/1438) ([chenjiahan](https://github.com/chenjiahan))
- \[improvement\] optimize active color [\#1437](https://github.com/youzan/vant-weapp/pull/1437) ([chenjiahan](https://github.com/chenjiahan))
- \[bugfix\] GoodsAction: fix document error, fix disabled & loading not work [\#1435](https://github.com/youzan/vant-weapp/pull/1435) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Transition: behavior error when set duration zero [\#1434](https://github.com/youzan/vant-weapp/pull/1434) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Info: fix wrong style [\#1433](https://github.com/youzan/vant-weapp/pull/1433) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Stepper: update style [\#1424](https://github.com/youzan/vant-weapp/pull/1424) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] Picker: defaultIndex not work [\#1423](https://github.com/youzan/vant-weapp/pull/1423) ([rex-zsd](https://github.com/rex-zsd))
- \[docs\] DatetimePicker: fix wrong example [\#1420](https://github.com/youzan/vant-weapp/pull/1420) ([rex-zsd](https://github.com/rex-zsd))
- \[bugfix\] SwipeCell: prevent page scroll [\#1419](https://github.com/youzan/vant-weapp/pull/1419) ([rex-zsd](https://github.com/rex-zsd))
- \[new feature\] Collapse: add border prop [\#1408](https://github.com/youzan/vant-weapp/pull/1408) ([chenjiahan](https://github.com/chenjiahan))

## [v0.5.7](https://github.com/youzan/vant-weapp/tree/v0.5.7) (2019-03-09)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.6...v0.5.7)

## [v0.5.6](https://github.com/youzan/vant-weapp/tree/v0.5.6) (2019-02-28)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.5...v0.5.6)

## [v0.5.5](https://github.com/youzan/vant-weapp/tree/v0.5.5) (2019-02-26)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.4...v0.5.5)

## [v0.5.4](https://github.com/youzan/vant-weapp/tree/v0.5.4) (2019-02-18)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.3...v0.5.4)

## [v0.5.3](https://github.com/youzan/vant-weapp/tree/v0.5.3) (2019-02-06)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.2...v0.5.3)

## [v0.5.2](https://github.com/youzan/vant-weapp/tree/v0.5.2) (2019-01-20)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.1...v0.5.2)

## [v0.5.1](https://github.com/youzan/vant-weapp/tree/v0.5.1) (2019-01-10)
[Full Changelog](https://github.com/youzan/vant-weapp/compare/v0.5.0...v0.5.1)



\* *This Change Log was automatically generated by [github_changelog_generator](https://github.com/skywinder/Github-Changelog-Generator)*