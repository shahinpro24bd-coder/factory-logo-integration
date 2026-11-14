import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { company, services } from "@/lib/site";
import { PageHeader } from "@/components/site/Layout";
import { CtaBanner } from "@/components/site/Sections";
import { serviceDetails } from "@/lib/service-details";
import { T, Img } from "@/lib/editable";

export function ServiceDetailPage({ slug }: { slug: string }) {
  const idx = services.findIndex((s) => s.slug === slug);
  const s = services[idx]!;
  const others = services.map((x, n) => ({ ...x, n })).filter((x) => x.slug !== slug);
  const d = serviceDetails[slug]!;
  const flip = idx % 2 === 1;
  const [openQ, setOpenQ] = useState(0);
  const p = `sd.${slug}`;
  const sv = `services.${idx}`;

  return (
    <>
      <PageHeader k={p} title={s.title} crumb={s.title} image={s.image} />

      <section className="sd-intro">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className={`col-lg-6 ${flip ? "order-lg-2" : ""}`}>
              <div className="sd-media">
                <Img k={`${sv}.image`} d={s.image} alt={s.title} className="sd-img" decoding="async" />
                <span className="sd-frame" aria-hidden="true" />
                <div className="sd-badge">
                  <span className="sd-badge-icon"><i className={`fa ${s.icon}`}></i></span>
                  <span><small>Service</small><strong>{String(idx + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}</strong></span>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <span className="ind-kicker"><T k="sd.overview" d="Service Overview" line /></span>
              <h2 className="sd-title"><T k={`${sv}.title`} d={s.title} /></h2>
              <p className="sd-lead"><T k={`${sv}.summary`} d={s.summary} /></p>
              <p><T k={`${p}.intro`} d={d.intro} /></p>
              <div className="sd-stats">
                {d.stats.map((st, i) => (
                  <div key={st.label} className="sd-stat"><strong><T k={`${p}.stat.${i}.value`} d={st.value} line /></strong><small><T k={`${p}.stat.${i}.label`} d={st.label} line /></small></div>
                ))}
              </div>
              <div className="d-flex flex-wrap gap-2 mt-4">
                <Link to="/contact" className="btn btn-primary py-3 px-5"><T k={`${sv}.cta`} d={s.cta} line /></Link>
                <a href={company.whatsappHref} target="_blank" rel="noreferrer" className="btn btn-outline-primary py-3 px-4"><i className="fab fa-whatsapp me-2"></i><T k="sd.wa" d="WhatsApp Us" line /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sd-scope">
        <div className="container">
          <div className="sd-scope-head">
            <span className="ind-kicker"><T k="sd.scope.kicker" d="What's Included" line /></span>
            <h2 className="sd-title text-white"><T k="sd.scope.title" d="Scope of Work" line /></h2>
          </div>
          <div className={flip ? "sd-scope-list" : "sd-scope-grid"}>
            {s.items.map((it, i) => (
              <div key={i} className="sd-scope-item">
                <span className="sd-scope-num">{String(i + 1).padStart(2, "0")}</span>
                <i className="fa fa-check sd-scope-check"></i>
                <h3><T k={`${sv}.items.${i}`} d={it} /></h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sd-signs">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className={`col-lg-5 ${flip ? "" : "order-lg-2"}`}>
              <span className="ind-kicker"><T k="sd.signs.kicker" d="Good To Know" line /></span>
              <h2 className="sd-title"><T k={`${p}.signsTitle`} d={d.signsTitle} /></h2>
              <p className="mb-4"><T k="sd.signs.lead" d="If any of these sound familiar, our team can inspect and advise on the right next step." /></p>
              <Link to="/contact" className="btn btn-primary py-3 px-5"><T k="sd.signs.btn" d="Book an Inspection" line /></Link>
            </div>
            <div className="col-lg-7">
              <ul className="sd-signs-list">
                {d.signs.map((g, i) => (
                  <li key={g}><i className="fa fa-exclamation"></i><T k={`${p}.sign.${i}`} d={g} /></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="sd-benefits">
        <div className="container">
          <div className="row g-0">
            {d.benefits.map((bn, i) => (
              <div key={bn.title} className="col-md-4">
                <div className="sd-benefit">
                  <span className="sd-benefit-num">{String(i + 1).padStart(2, "0")}</span>
                  <i className={`fa ${bn.icon} sd-benefit-icon`}></i>
                  <h3><T k={`${p}.benefit.${i}.title`} d={bn.title} /></h3>
                  <p className="mb-0"><T k={`${p}.benefit.${i}.text`} d={bn.text} /></p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sd-others">
        <div className="container">
          <div className="sd-scope-head">
            <span className="ind-kicker"><T k="sd.others.kicker" d="Explore More" line /></span>
            <h2 className="sd-title"><T k="sd.others.title" d="Other Services" line /></h2>
          </div>
          <div className="row g-4">
            {others.map((o) => (
              <div key={o.slug} className="col-lg-4 col-md-6">
                <Link to="/services/$slug" params={{ slug: o.slug }} className="sd-other">
                  <Img k={`services.${o.n}.image`} d={o.image} alt={o.title} />
                  <span className="sd-other-body">
                    <span className="sd-other-icon"><i className={`fa ${o.icon}`}></i></span>
                    <strong>{o.title}</strong>
                    <i className="fa fa-arrow-right sd-other-arrow"></i>
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sd-faq">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-4">
              <span className="ind-kicker"><T k="sd.faq.kicker" d="Questions" line /></span>
              <h2 className="sd-title"><T k={`${p}.faqTitle`} d={`${s.title} FAQs`} /></h2>
              <a href={company.phoneHref} className="aud-call mt-3"><i className="fa fa-phone-alt"></i> {company.phone}</a>
            </div>
            <div className="col-lg-8">
              {d.faqs.map((f, i) => (
                <div key={f.q} className={`sd-q ${openQ === i ? "is-open" : ""}`}>
                  <button type="button" onClick={() => setOpenQ(openQ === i ? -1 : i)}>
                    <span><T k={`${p}.faq.${i}.q`} d={f.q} /></span><i className="fa fa-plus"></i>
                  </button>
                  <div className="sd-a"><p><T k={`${p}.faq.${i}.a`} d={f.a} /></p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CtaBanner k={`${p}.cta`} title={`Need ${s.title}?`} text="Tell us about your property and requirements. Our team will review the details and advise on the next steps." button={s.cta} />
    </>
  );
}
