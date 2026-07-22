import ReactMarkdown from 'react-markdown'

// Lightweight markdown renderer for speaker summary/bio (paragraphs, bullets, bold).
// Editors write plain text in TinaCMS — never HTML.
const mdComponents = {
  p: ({ node, children, ...props }) => (
    <p className="text-gray-300 leading-relaxed mb-3" {...props}>{children}</p>
  ),
  ul: ({ node, children, ...props }) => (
    <ul className="list-disc list-inside text-gray-300 mb-3 space-y-1 ml-2" {...props}>{children}</ul>
  ),
  ol: ({ node, children, ...props }) => (
    <ol className="list-decimal list-inside text-gray-300 mb-3 space-y-1 ml-2" {...props}>{children}</ol>
  ),
  li: ({ node, children, ...props }) => <li {...props}>{children}</li>,
  strong: ({ node, children, ...props }) => (
    <strong className="text-white font-semibold" {...props}>{children}</strong>
  ),
  a: ({ node, children, ...props }) => (
    <a className="text-[#9cc5ad] underline" target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
  ),
}

function Rich({ text }) {
  if (!text) return null
  return <ReactMarkdown components={mdComponents}>{text}</ReactMarkdown>
}

function SpeakerCard({ o, locale }) {
  const isEvent = !o.name && !o.photo
  if (isEvent) {
    return (
      <div className="p-4 bg-[#9cc5ad]/10 rounded-lg">
        {o.slot && <p className="text-[#9cc5ad] font-semibold">{o.slot}</p>}
        {o.location && <p className="text-[#b8dbc4] text-sm mt-1">{o.location}</p>}
      </div>
    )
  }
  const hasDetails = o.talkTitle || o.summary || o.bio
  return (
    <div className="p-4 bg-[#9cc5ad]/10 rounded-lg">
      {o.slot && <p className="text-[#9cc5ad] font-semibold mb-3">{o.slot}</p>}
      <div className="flex gap-6 items-center flex-wrap">
        {o.photo && (
          <img
            src={o.photo}
            alt={o.name || ''}
            className="w-[130px] h-[130px] rounded-full object-cover border-[3px] border-[#9cc5ad]"
          />
        )}
        {(o.logos || []).map((l, i) =>
          l.image ? (
            <div key={i} className="bg-white p-3 rounded-lg flex items-center justify-center h-[90px] min-w-[130px]">
              <img src={l.image} alt={l.alt || ''} className="max-w-[120px] max-h-[60px] w-auto h-auto object-contain" />
            </div>
          ) : null
        )}
        <div className="flex-1 min-w-[250px]">
          {o.name && <h4 className="text-[#9cc5ad] font-bold text-lg">{o.name}</h4>}
          {o.role && <p className="text-[#b8dbc4] text-sm mt-1">{o.role}</p>}
          {hasDetails && (
            <details className="mt-3">
              <summary className="cursor-pointer text-[#9cc5ad] font-semibold">
                {locale === 'pt' ? 'Ver Bio e Detalhes' : 'View Bio & Details'}
              </summary>
              <div className="mt-3 p-4 bg-[#9cc5ad]/5 rounded-lg text-sm">
                {o.talkTitle && (
                  <p className="mb-3">
                    <strong className="text-white">{locale === 'pt' ? 'Título' : 'Title'}:</strong> {o.talkTitle}
                  </p>
                )}
                {o.summary && (
                  <>
                    <p className="font-semibold text-white mb-1">{locale === 'pt' ? 'Resumo' : 'Summary'}:</p>
                    <Rich text={o.summary} />
                  </>
                )}
                {o.bio && (
                  <>
                    <p className="font-semibold text-white mb-1 mt-3">{locale === 'pt' ? 'Biografia' : 'Biography'}:</p>
                    <Rich text={o.bio} />
                  </>
                )}
              </div>
            </details>
          )}
        </div>
      </div>
    </div>
  )
}

export default function ProjectSections({ project, locale }) {
  const t = (pt, en) => (locale === 'pt' ? pt : en)
  const blocos = Array.isArray(project.blocosTematicos) ? project.blocosTematicos : []
  const horario = Array.isArray(project.horario) ? project.horario : []
  const oradores = Array.isArray(project.oradores) ? project.oradores : []
  const apoios = Array.isArray(project.apoios) ? project.apoios : []
  const contacto = project.contacto || {}

  // Group speakers by theme, preserving first-appearance order.
  const themeOrder = []
  const byTheme = {}
  for (const o of oradores) {
    const th = o.theme || ''
    if (!(th in byTheme)) { byTheme[th] = []; themeOrder.push(th) }
    byTheme[th].push(o)
  }

  const h2 = 'text-2xl font-bold text-white mb-6 mt-16'

  return (
    <>
      {blocos.length > 0 && (
        <section>
          <h2 className={h2}>{t('Blocos Temáticos', 'Thematic Blocks')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blocos.map((b, i) => (
              <div key={i} className="p-5 bg-[#9cc5ad]/5 border border-[#9cc5ad]/20 rounded-xl">
                <h3 className="text-lg font-bold text-[#9cc5ad] mb-2">
                  {b.icon ? `${b.icon} ` : ''}{b.title}
                </h3>
                {b.description && <p className="text-gray-300 text-sm leading-relaxed">{b.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {horario.length > 0 && (
        <section>
          <h2 className={h2}>{t('Horário', 'Schedule')}</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
            {horario.map((h, i) =>
              h.image ? (
                <img key={i} src={h.image} alt={h.caption || ''} className="w-full h-auto rounded-xl" />
              ) : null
            )}
          </div>
        </section>
      )}

      {oradores.length > 0 && (
        <section>
          <h2 className={h2}>{t('Oradores', 'Speakers')}</h2>
          {themeOrder.map((th) => (
            <div key={th} className="mb-10">
              {th && <h3 className="text-xl font-bold text-[#9cc5ad] mb-4 mt-6">{th}</h3>}
              <div className="space-y-4">
                {byTheme[th].map((o, i) => (
                  <SpeakerCard key={i} o={o} locale={locale} />
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {apoios.length > 0 && (
        <section>
          <h2 className={h2}>{t('Apoios e Patrocínios', 'Support and Sponsorships')}</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 items-center justify-items-center p-10 bg-[#9cc5ad]/5 rounded-2xl border border-[#9cc5ad]/20">
            {apoios.map((apoio, i) => {
              const logo = (
                <div className="bg-white p-6 rounded-xl flex items-center justify-center w-full h-[120px]">
                  {apoio.logo && (
                    <img src={apoio.logo} alt={apoio.name || ''} className="max-w-[150px] max-h-[100px] w-auto h-auto object-contain" />
                  )}
                </div>
              )
              return apoio.website ? (
                <a key={i} href={apoio.website} target="_blank" rel="noopener noreferrer" className="w-full" title={apoio.name || ''}>
                  {logo}
                </a>
              ) : (
                <div key={i} className="w-full">{logo}</div>
              )
            })}
          </div>
        </section>
      )}

      {(contacto.email || contacto.instagram) && (
        <section>
          <h2 className={h2}>{t('Contacto', 'Contact')}</h2>
          <p className="text-gray-300 mb-3">
            {t('Dúvidas? Entre em contacto connosco:', 'Questions? Get in touch:')}
          </p>
          <ul className="text-gray-300 space-y-2">
            {contacto.email && (
              <li>
                <strong className="text-white">Email:</strong>{' '}
                <a className="text-[#9cc5ad] underline" href={`mailto:${contacto.email}`}>{contacto.email}</a>
              </li>
            )}
            {contacto.instagram && (
              <li>
                <strong className="text-white">{t('Redes Sociais', 'Social Media')}:</strong>{' '}
                <a className="text-[#9cc5ad] underline" href={contacto.instagramUrl || '#'} target="_blank" rel="noopener noreferrer">
                  {contacto.instagram}
                </a>
              </li>
            )}
          </ul>
        </section>
      )}
    </>
  )
}
