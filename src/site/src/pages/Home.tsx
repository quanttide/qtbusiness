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
          三个定制服务：数据、课堂、咨询。
        </h1>
        <p className="hero-anchor">量潮数据 · 量潮课堂 · 量潮咨询</p>
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
          三个服务均公开定价：数据按设计、实施、交付、维护分阶段报价；
          课堂一对一按小时计费（提供免费试听）；咨询明码标价。
        </p>
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
