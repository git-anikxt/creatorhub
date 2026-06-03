"use client";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer style={{background:'var(--color-surface)',borderTop:'1px solid var(--color-border)',marginTop:'0'}}>
      <div className="container-custom py-14">
        <div className="grid md:grid-cols-4 gap-10">
          <div>
            <div style={{display:'flex',alignItems:'center',gap:'0.6rem',marginBottom:'0.75rem'}}>
              <div className="avatar w-8 h-8" style={{fontSize:'0.75rem',fontWeight:800,background:'linear-gradient(135deg,#6366f1,#a78bfa)'}}>C</div>
              <span style={{fontWeight:700,fontSize:'1rem',color:'var(--color-text)'}}>CreatorHub</span>
            </div>
            <p style={{color:'var(--color-text-muted)',fontSize:'0.875rem',lineHeight:'1.7',maxWidth:'220px'}}>
              Support creators directly and help bring meaningful projects to life.
            </p>
          </div>

          {[{
            heading: 'Product',
            links: [{ label:'Home', href:'/' }, { label:'About', href:'/about' }, { label:'Explore', href:'/explore' }]
          }, {
            heading: 'Resources',
            links: [{ label:'FAQ', href:'#' }, { label:'Privacy', href:'#' }, { label:'Terms', href:'#' }]
          }, {
            heading: 'Social',
            links: [{ label:'GitHub', href:'#' }, { label:'LinkedIn', href:'#' }, { label:'Twitter', href:'#' }]
          }].map((col) => (
            <div key={col.heading}>
              <h3 style={{fontWeight:600,fontSize:'0.875rem',color:'var(--color-text)',marginBottom:'0.875rem',textTransform:'uppercase',letterSpacing:'0.06em'}}>
                {col.heading}
              </h3>
              <div style={{display:'flex',flexDirection:'column',gap:'0.6rem'}}>
                {col.links.map(l => (
                  <Link
                    key={l.label}
                    href={l.href}
                    style={{color:'var(--color-text-muted)',fontSize:'0.875rem',textDecoration:'none',transition:'color 0.18s'}}
                    onMouseEnter={e => e.currentTarget.style.color='var(--color-text)'}
                    onMouseLeave={e => e.currentTarget.style.color='var(--color-text-muted)'}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{borderTop:'1px solid var(--color-border)',marginTop:'3rem',paddingTop:'1.5rem',display:'flex',flexWrap:'wrap',justifyContent:'space-between',alignItems:'center',gap:'0.75rem'}}>
          <span style={{color:'var(--color-text-faint)',fontSize:'0.8rem'}}>© {currentYear} CreatorHub. All rights reserved.</span>
          <span style={{color:'var(--color-text-faint)',fontSize:'0.8rem'}}>Made with ☕ for creators.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
