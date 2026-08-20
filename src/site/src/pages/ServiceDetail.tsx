import { useParams, Link } from 'react-router-dom'
import { services } from '../data/services'

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? services.find(s => s.slug === slug) : undefined

  if (!service) {
    return (
      <div className="page service-detail">
        <Link to="/services" className="back-link">&larr; 服务</Link>
        <p className="empty">服务不存在</p>
      </div>
    )
  }

  return (
    <div className="page service-detail">
      <Link to="/services" className="back-link">&larr; 服务</Link>
      <article>
        <header className="detail-header">
          <h1>{service.title}</h1>
          <div className="detail-meta">
            <span className="service-type">{service.type}</span>
            <span className="service-pricing">{service.pricing}</span>
          </div>
        </header>

        <section className="detail-section">
          <h2>适用场景</h2>
          <p>{service.scenario}</p>
        </section>

        <section className="detail-section">
          <h2>交付物</h2>
          <ul>
            {service.deliverables.map(d => (
              <li key={d}>{d}</li>
            ))}
          </ul>
        </section>

        <section className="detail-section">
          <h2>询盘</h2>
          <p>
            通过联系渠道发起询盘（GitHub：github.com/quanttide，邮件待补充），
            进入商务云流程：澄清需求 → 报价 → 合同 → 实施 → 交付验收。
          </p>
        </section>
      </article>
    </div>
  )
}
