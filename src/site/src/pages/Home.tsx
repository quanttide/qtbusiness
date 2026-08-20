import { Link } from "react-router-dom";
import { services } from "../data/services";

// 联系信息：GitHub 为真实链接；邮件为占位，待补充后启用
const contacts = [
  { label: "GitHub", value: "github.com/quanttide", href: "https://github.com/quanttide" },
  { label: "邮件", value: "待补充", href: "" },
];

export default function Home() {
  return (
    <div className="page home">
      <section className="hero">
        <h1 className="hero-tagline">
          量潮商务：服务黄页。<br />
          展示没有产品形态的定制服务与解决方案。
        </h1>
        <p className="hero-anchor">数据服务 · 咨询 · 定制开发 · 招聘</p>
      </section>

      <section className="section">
        <h2>服务</h2>
        {services.map(service => (
          <div className="service-item" key={service.slug}>
            <span className="service-type">{service.type}</span>
            <Link to={`/services/${service.slug}`} className="service-title">
              {service.title}
            </Link>
            <p className="service-desc">{service.scenario}</p>
            <p className="service-pricing">{service.pricing}</p>
          </div>
        ))}
        <Link to="/services" className="view-all">全部服务 &rarr;</Link>
      </section>

      <section className="section">
        <h2>定价模式</h2>
        <p>
          以数据为中心定价（源自业务档案）：
        </p>
        <ul>
          <li>处理费按量：0.01 元/次起，0.1 元为上限；质量不好可退款、不接受可不收钱；</li>
          <li>存储费按年：不续费即删除；无成本数据可一次性永久存储；</li>
          <li>帮你存数据 → 收存储费；帮你处理完、数据是你的 → 只收处理费；不用我们的资源 → 不收费；</li>
          <li>按效果付费：效果即交付的领域模型与数据，用量的下降（成本下降）成为我们的优势。</li>
        </ul>
        <p className="contact-note">
          公开定价即公开商业模型，降低客户的评估与信任成本。
        </p>
      </section>

      <section className="section">
        <h2>联系</h2>
        <div className="contact-list">
          {contacts.map(contact => (
            <div className="contact-item" key={contact.label}>
              <span className="contact-label">{contact.label}</span>
              {contact.href ? (
                <a href={contact.href} target="_blank" rel="noopener noreferrer">
                  {contact.value}
                </a>
              ) : (
                <span className="contact-placeholder">{contact.value}</span>
              )}
            </div>
          ))}
        </div>
        <p className="contact-note">
          询盘入口：通过联系渠道发起询盘，进入商务云流程（澄清需求 → 报价 → 合同）。
        </p>
      </section>
    </div>
  );
}
