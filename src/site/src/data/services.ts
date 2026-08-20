// 服务黄页静态清单：量潮数据、量潮课堂、量潮咨询三个定制服务
// 服务信息核对自 quanttide-brochure-of-business-entity（量潮科技宣传册）
export type ServiceType = "数据" | "课堂" | "咨询";

export interface Service {
  slug: string;
  title: string;
  type: ServiceType;
  scenario: string;
  deliverables: string[];
  pricing: string;
}

export const services: Service[] = [
  {
    slug: "qtdata",
    title: "量潮数据",
    type: "数据",
    scenario: "为科研团队与高新科技企业提供数据处理服务：把原始数据变成可靠、可用的结构化数据，涵盖问卷数据、面板数据、文本数据与大规模非结构化数据，全程可复现、可审计。",
    deliverables: [
      "数据蓝图：处理方案与链路设计",
      "数据集：附数据字典与字段说明",
      "数据报告：处理逻辑、参数与中间结果，可复现可审计",
    ],
    pricing: "项目制：按设计、实施、交付、维护分阶段报价",
  },
  {
    slug: "qtclass",
    title: "量潮课堂",
    type: "课堂",
    scenario: "以「教研 + 教学」为基本模型：教研侧取材真实业务、以重构为中心研发课程内容；教学侧以一对一与实战课程交付，帮助非专业开发者转型为专业开发者。",
    deliverables: [
      "教研：课程设计与内容研发（取材真实业务）",
      "教学：一对一授课与大数据系列课程",
      "助教答疑、作业批改与进度跟进",
    ],
    pricing: "按小时计费（参考律师、咨询师的专业服务定价）；提供免费试听",
  },
  {
    slug: "qtconsult",
    title: "量潮咨询",
    type: "咨询",
    scenario: "面向成长期与发展期企业：数字化与智能化转型、创始人边界等问题的企业咨询与顾问服务，以 OODA 循环适配需求变化。",
    deliverables: [
      "调研：梳理技术架构、研发流程与业务战略",
      "分析：初步分析判断与决策梳理",
      "执行：按既定计划实施",
    ],
    pricing: "明码标价；按调研、分析、决策、执行分阶段",
  },
];
