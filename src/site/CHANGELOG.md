# Changelog

## 2026-08-20

### 新增

- 初始化 src/site：Vite + React 19 + TS 脚手架（参考 qtfounder）
- 首页：Hero + 服务列表 + 定价模式说明 + 联系
- 服务页：类型筛选（全部 / 数据服务 / 咨询 / 定制开发）
- 详情页：适用场景 / 交付物 / 定价模式 / 询盘说明
- 数据：`src/data/services.ts` 静态服务清单
- 页面使用 profile 资料：服务条目与定价源自 data/profile（qtdata / qtcloud / qtrecurit），新增"招聘"类型与来源业务展示
- 服务清单收敛为三个定制服务：量潮数据、量潮课堂、量潮咨询；筛选类型调整为 数据 / 课堂 / 咨询
- 服务信息核对自 quanttide-brochure-of-business-entity：数据按设计/实施/交付/维护分阶段报价（交付物：数据蓝图、数据集、数据报告）；课堂按小时计费；咨询明码标价
