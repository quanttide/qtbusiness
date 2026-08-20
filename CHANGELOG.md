# Changelog

## [0.0.1] - 2026-08-20

### 新增

- 初始化仓库：README、LICENSE、CHANGELOG
- 定位：服务黄页，展示定制服务与解决方案（意图档案见 data/intention/qtbusiness）
- 文档：docs/dev-guide/index.md，基于 journal 与 profile 的 qtbusiness 设计（PRD）
- 代码：src/site 初始化（Vite + React 19 + TS，参考 qtfounder）：首页 / 服务页 / 服务详情，静态服务清单
- 部署：deploy-site.yml 工作流（site/* tag → OSS qtbusiness-site → CDN business.quanttide.com），首次部署 site/v0.1.0
