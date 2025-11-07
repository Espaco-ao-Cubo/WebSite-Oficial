import { setRequestLocale } from 'next-intl/server'

export const metadata = {
  title: 'Política de Privacidade - Espaço ao Cubo',
  description: 'Política de privacidade e proteção de dados',
}

export default async function PrivacidadePage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1f1a] to-[#1a3a2e] pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-16 xl:px-24 max-w-4xl">
        <div className="bg-white/5 backdrop-blur-sm border border-[#9cc5ad]/20 rounded-2xl p-8 lg:p-12">
          {locale === 'pt' ? <PrivacidadePortugues /> : <PrivacyEnglish />}
        </div>
      </div>
    </div>
  )
}

function PrivacidadePortugues() {
  return (
    <div className="prose prose-invert prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Política de Privacidade</h1>
      <p className="text-gray-400 mb-8">Última atualização: {new Date().toLocaleDateString('pt-PT')}</p>

      <div className="space-y-8 text-gray-300">
        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">1. Introdução</h2>
          <p>
            O Espaço ao Cubo respeita a sua privacidade e está comprometido em proteger os seus dados 
            pessoais. Esta Política de Privacidade explica como recolhemos, utilizamos e protegemos 
            as suas informações, em conformidade com o Regulamento Geral sobre a Proteção de Dados 
            (RGPD) - Regulamento (UE) 2016/679.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">2. Responsável pelo Tratamento</h2>
          <p>O responsável pelo tratamento dos seus dados pessoais é:</p>
          <ul className="list-none space-y-2">
            <li><strong>Entidade:</strong> Espaço ao Cubo - Associação de Estudantes</li>
            <li><strong>Morada:</strong> Lisboa, Portugal</li>
            <li><strong>Email:</strong> info@espacoaocubo.pt</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">3. Dados Pessoais Recolhidos</h2>
          <p>Podemos recolher as seguintes categorias de dados pessoais:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Dados de contacto:</strong> nome, endereço de email, número de telefone</li>
            <li><strong>Dados de navegação:</strong> endereço IP, tipo de browser, páginas visitadas, 
            data e hora de acesso</li>
            <li><strong>Cookies:</strong> informações recolhidas através de cookies e tecnologias 
            semelhantes</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">4. Finalidade do Tratamento</h2>
          <p>Os seus dados pessoais são utilizados para:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Responder às suas solicitações de informação</li>
            <li>Enviar newsletters e comunicações (com o seu consentimento)</li>
            <li>Melhorar o funcionamento do Website</li>
            <li>Cumprir obrigações legais</li>
            <li>Análise estatística e melhoria dos serviços</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">5. Base Legal do Tratamento</h2>
          <p>O tratamento dos seus dados pessoais baseia-se em:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Consentimento:</strong> quando fornece explicitamente o seu consentimento</li>
            <li><strong>Interesse legítimo:</strong> para análise e melhoria dos nossos serviços</li>
            <li><strong>Obrigação legal:</strong> quando exigido por lei</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">6. Partilha de Dados</h2>
          <p>
            O Espaço ao Cubo não vende, aluga ou partilha os seus dados pessoais com terceiros para 
            fins comerciais. Os dados podem ser partilhados apenas:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Com prestadores de serviços que nos auxiliam (ex: serviços de hosting)</li>
            <li>Quando legalmente obrigados</li>
            <li>Com o seu consentimento expresso</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">7. Transferências Internacionais</h2>
          <p>
            Os seus dados pessoais podem ser transferidos para países fora da União Europeia. 
            Garantimos que tais transferências respeitam as garantias adequadas previstas no RGPD.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">8. Prazo de Conservação</h2>
          <p>
            Os seus dados pessoais serão conservados apenas pelo período necessário para cumprir 
            as finalidades para as quais foram recolhidos ou conforme exigido por lei.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">9. Os Seus Direitos</h2>
          <p>Em conformidade com o RGPD, tem os seguintes direitos:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Direito de acesso:</strong> consultar os dados pessoais que detemos</li>
            <li><strong>Direito de retificação:</strong> corrigir dados incorretos ou desatualizados</li>
            <li><strong>Direito ao apagamento:</strong> solicitar a eliminação dos seus dados</li>
            <li><strong>Direito à limitação:</strong> restringir o tratamento dos seus dados</li>
            <li><strong>Direito à portabilidade:</strong> receber os seus dados em formato estruturado</li>
            <li><strong>Direito de oposição:</strong> opor-se ao tratamento dos seus dados</li>
            <li><strong>Direito de retirar consentimento:</strong> a qualquer momento</li>
          </ul>
          <p>
            Para exercer qualquer destes direitos, contacte-nos através de info@espacoaocubo.pt
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">10. Cookies</h2>
          <p>
            O Website utiliza cookies para melhorar a experiência do utilizador. Pode configurar 
            o seu browser para recusar cookies, mas isso pode afetar algumas funcionalidades do Website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">11. Segurança</h2>
          <p>
            Implementamos medidas técnicas e organizativas adequadas para proteger os seus dados 
            pessoais contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">12. Reclamações</h2>
          <p>
            Tem o direito de apresentar uma reclamação junto da Comissão Nacional de Proteção de 
            Dados (CNPD) se considerar que o tratamento dos seus dados pessoais viola o RGPD.
          </p>
          <ul className="list-none space-y-2">
            <li><strong>CNPD:</strong> www.cnpd.pt</li>
            <li><strong>Email:</strong> geral@cnpd.pt</li>
            <li><strong>Telefone:</strong> +351 213 928 400</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">13. Alterações a Esta Política</h2>
          <p>
            O Espaço ao Cubo reserva-se o direito de atualizar esta Política de Privacidade. 
            Quaisquer alterações serão publicadas nesta página com a data de atualização.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">14. Contacto</h2>
          <p>
            Para questões sobre esta Política de Privacidade ou sobre o tratamento dos seus dados 
            pessoais, contacte-nos:
          </p>
          <ul className="list-none space-y-2">
            <li>Email: info@espacoaocubo.pt</li>
            <li>Morada: Lisboa, Portugal</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

function PrivacyEnglish() {
  return (
    <div className="prose prose-invert prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
      <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US')}</p>

      <div className="space-y-8 text-gray-300">
        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">1. Introduction</h2>
          <p>
            Espaço ao Cubo respects your privacy and is committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, and protect your information, in 
            accordance with the General Data Protection Regulation (GDPR) - Regulation (EU) 2016/679.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">2. Data Controller</h2>
          <p>The data controller for your personal data is:</p>
          <ul className="list-none space-y-2">
            <li><strong>Entity:</strong> Espaço ao Cubo - Student Association</li>
            <li><strong>Address:</strong> Lisbon, Portugal</li>
            <li><strong>Email:</strong> info@espacoaocubo.pt</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">3. Personal Data Collected</h2>
          <p>We may collect the following categories of personal data:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Contact data:</strong> name, email address, phone number</li>
            <li><strong>Navigation data:</strong> IP address, browser type, pages visited, 
            date and time of access</li>
            <li><strong>Cookies:</strong> information collected through cookies and similar 
            technologies</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">4. Purpose of Processing</h2>
          <p>Your personal data is used to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to your information requests</li>
            <li>Send newsletters and communications (with your consent)</li>
            <li>Improve Website functionality</li>
            <li>Comply with legal obligations</li>
            <li>Statistical analysis and service improvement</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">5. Legal Basis for Processing</h2>
          <p>The processing of your personal data is based on:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Consent:</strong> when you explicitly provide your consent</li>
            <li><strong>Legitimate interest:</strong> for analysis and improvement of our services</li>
            <li><strong>Legal obligation:</strong> when required by law</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">6. Data Sharing</h2>
          <p>
            Espaço ao Cubo does not sell, rent, or share your personal data with third parties for 
            commercial purposes. Data may only be shared:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>With service providers that assist us (e.g., hosting services)</li>
            <li>When legally required</li>
            <li>With your express consent</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">7. International Transfers</h2>
          <p>
            Your personal data may be transferred to countries outside the European Union. 
            We ensure that such transfers comply with appropriate safeguards under GDPR.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">8. Retention Period</h2>
          <p>
            Your personal data will be retained only for as long as necessary to fulfill the purposes 
            for which it was collected or as required by law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">9. Your Rights</h2>
          <p>In accordance with GDPR, you have the following rights:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Right of access:</strong> view the personal data we hold</li>
            <li><strong>Right to rectification:</strong> correct inaccurate or outdated data</li>
            <li><strong>Right to erasure:</strong> request deletion of your data</li>
            <li><strong>Right to restriction:</strong> restrict processing of your data</li>
            <li><strong>Right to portability:</strong> receive your data in structured format</li>
            <li><strong>Right to object:</strong> object to processing of your data</li>
            <li><strong>Right to withdraw consent:</strong> at any time</li>
          </ul>
          <p>
            To exercise any of these rights, contact us at info@espacoaocubo.pt
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">10. Cookies</h2>
          <p>
            The Website uses cookies to improve user experience. You can configure your browser to 
            refuse cookies, but this may affect some Website functionalities.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">11. Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal 
            data against unauthorized access, alteration, disclosure, or destruction.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">12. Complaints</h2>
          <p>
            You have the right to lodge a complaint with the Portuguese Data Protection Authority 
            (CNPD) if you believe the processing of your personal data violates GDPR.
          </p>
          <ul className="list-none space-y-2">
            <li><strong>CNPD:</strong> www.cnpd.pt</li>
            <li><strong>Email:</strong> geral@cnpd.pt</li>
            <li><strong>Phone:</strong> +351 213 928 400 </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">13. Changes to This Policy</h2>
          <p>
            Espaço ao Cubo reserves the right to update this Privacy Policy. Any changes will be 
            posted on this page with the updated date.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">14. Contact</h2>
          <p>
            For questions about this Privacy Policy or about the processing of your personal data, 
            contact us:
          </p>
          <ul className="list-none space-y-2">
            <li>Email: info@espacoaocubo.pt</li>
            <li>Address: Lisbon, Portugal</li>
          </ul>
        </section>
      </div>
    </div>
  )
}