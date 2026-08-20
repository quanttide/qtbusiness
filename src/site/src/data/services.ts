// 服务黄页静态清单：条目与定价源自 data/profile/ 业务档案
// （qtdata、qtcloud、qtrecurit 的 index.md 与 business-model.md）
export type ServiceType = "数据服务" | "咨询" | "定制开发" | "招聘";

export interface Service {
  slug: string;
  title: string;
  type: ServiceType;
  scenario: string;
  deliverables: string[];
  pricing: string;
  source: string;
}

export const services: Service[] = [
  {
    slug: "data-processing",
    title: "数据处理与交付",
    type: "数据服务",
    scenario: "你有原始数据，需要清洗、加工、分析，并拿到可确认、可验收的数据交付物；过程透明，中间结果可预览确认。",
    deliverables: [
      "需求拆解（blueprint）与范围界定（scope）",
      "处理流程说明与中间结果预览",
      "最终数据交付、验收与复盘",
    ],
    pricing: "项目制报价（quotation）；或按量处理费：几分几毛处理一次数据",
    source: "qtdata",
  },
  {
    slug: "on-demand-processing",
    title: "按量 AI 数据处理",
    type: "数据服务",
    scenario: "需求颗粒度很小——一次情绪日记、一次量表生成、一次文本加工，不值得走完整项目流程。",
    deliverables: [
      "标准数据结构定义",
      "AI 生成处理结果",
      "结果存储（可选）",
    ],
    pricing: "处理费 0.01 元/次（0.1 元为上限）；质量不好可退款、不接受可不收钱",
    source: "qtcloud",
  },
  {
    slug: "data-storage",
    title: "数据存储与管理",
    type: "数据服务",
    scenario: "数据需要长期保存、备份与归档；希望格式开放、随时可导出——数据是你的，我们只是代管。",
    deliverables: [
      "按年存储服务",
      "保存期 → 只读 → 删除的阶梯管理",
      "开放格式导出与备份",
    ],
    pricing: "存储年费，不续费即删除；无成本数据（如量表）可一次性永久存储",
    source: "qtdata / qtcloud",
  },
  {
    slug: "data-consulting",
    title: "数据咨询",
    type: "咨询",
    scenario: "想清楚自己的数据该怎么处理、怎么用；需要懂业务的专家先帮你把模糊问题变成可执行任务。",
    deliverables: [
      "业务问题梳理",
      "数据处理方案与成本评估",
      "定价与付费方式建议",
    ],
    pricing: "按次咨询",
    source: "qtdata",
  },
  {
    slug: "custom-development",
    title: "定制开发",
    type: "定制开发",
    scenario: "现有服务覆盖不了的需求，需要从零定制解决方案；按商务五步流程推进，报价最终版本作为合同的一部分。",
    deliverables: [
      "澄清需求与初步报价",
      "谈判生成合同和订单",
      "实施、交付验收、复盘总结",
    ],
    pricing: "项目制报价（商务云五步流程）",
    source: "商务云（qtcloud-business）",
  },
  {
    slug: "talent-referral",
    title: "招聘与人才推荐",
    type: "招聘",
    scenario: "求职者想获得推荐机会，企业需要靠谱人才——以开源贡献建立信用，用招聘作为导流点，不录用也会帮你推荐。",
    deliverables: [
      "信用建立（开源贡献记录）",
      "实习/岗位推荐（即使不录用也推荐）",
      "向课堂等业务的导流",
    ],
    pricing: "求职者免费（信用换推荐）；企业方作为资源合作；通过课堂变现",
    source: "qtrecurit",
  },
];
