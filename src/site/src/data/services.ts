// 服务黄页静态清单：量潮数据、量潮课堂、量潮咨询三个定制服务
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
    scenario: "处理与管理你的数据：从需求拆解、清洗加工到存储归档，过程透明、中间结果可确认、交付可验收。",
    deliverables: [
      "需求拆解与范围界定",
      "数据处理与中间结果预览",
      "数据存储管理与交付",
    ],
    pricing: "项目制报价；或按量处理费（0.01 元/次起）、存储年费",
  },
  {
    slug: "qtclass",
    title: "量潮课堂",
    type: "课堂",
    scenario: "课程贴合企业真实需求、有一定难度——为企业培养能上手干活的人，并以招聘与推荐机制对接用人需求。",
    deliverables: [
      "贴合企业需求的课程",
      "与招聘/推荐机制衔接",
      "企业人才供给",
    ],
    pricing: "按课程/订阅收费",
  },
  {
    slug: "qtconsulting",
    title: "量潮咨询",
    type: "咨询",
    scenario: "业务或数据问题说不清的时候，先找懂行的人聊清楚：问题梳理、方案建议、成本与定价评估。",
    deliverables: [
      "业务问题梳理",
      "方案与成本评估",
      "后续服务衔接（数据 / 课堂）",
    ],
    pricing: "按次咨询",
  },
];
