import { useState } from 'react'
import { Link } from 'react-router-dom'
import { services, type ServiceType } from '../data/services'

type Filter = '全部' | ServiceType
const filters: Filter[] = ['全部', '数据', '课堂', '咨询']

export default function Services() {
  const [activeFilter, setActiveFilter] = useState<Filter>('全部')

  const filtered = activeFilter === '全部'
    ? services
    : services.filter(s => s.type === activeFilter)

  return (
    <div className="page services-page">
      <Link to="/" className="back-link">&larr; 首页</Link>
      <h1>服务</h1>

      <nav className="filter-nav">
        {filters.map(f => (
          <button
            key={f}
            className={f === activeFilter ? 'filter-active' : ''}
            onClick={() => setActiveFilter(f)}
          >
            {f}
          </button>
        ))}
      </nav>

      {filtered.length === 0 ? (
        <p className="empty">暂无匹配服务</p>
      ) : (
        <div className="service-list">
          {filtered.map(service => (
            <div className="service-item" key={service.slug}>
              <span className="service-type">{service.type}</span>
              <Link to={`/services/${service.slug}`} className="service-title">
                {service.title}
              </Link>
              <p className="service-desc">{service.scenario}</p>
              <p className="service-pricing">{service.pricing}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
