export type ServiceType = "数据服务" | "咨询" | "定制开发";

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
    slug: "data-processing",
    title: "数据处理与交付",
    type: "数据服务",
    scenario: "你有原始数据，需要清洗、加工、分析，并拿到可确认、可验收的数据交付物。",
    deliverables: ["需求拆解与处理流程说明", "中间结果预览与确认", "最终数据交付与报告"],
    pricing: "项目制报价；或按量处理费（几分几毛一次）",
  },
  {
    slug: "data-storage",
    title: "数据存储与管理",
    type: "数据服务",
    scenario: "数据需要长期保存、备份与归档，且希望数据格式开放、随时可导出。",
    deliverables: ["按年存储服务", "保存期 → 只读 → 删除的阶梯管理", "开放格式导出与备份"],
    pricing: "存储年费，不续费即删除；无成本数据可一次性永久存储",
  },
  {
    slug: "data-consulting",
    title: "数据咨询",
    type: "咨询",
    scenario: "想清楚自己的数据该怎么处理、怎么用，需要懂业务的专家先帮你理清问题。",
    deliverables: ["业务问题梳理", "数据处理方案建议", "成本与定价评估"],
    pricing: "按次咨询",
  },
  {
    slug: "custom-development",
    title: "定制开发",
    type: "定制开发",
    scenario: "现有产品与服务覆盖不了的需求，需要从零定制一套解决方案。",
    deliverables: ["需求澄清与报价", "方案设计与实施", "交付验收与复盘"],
    pricing: "项目制报价（商务云五步流程）",
  },
];
