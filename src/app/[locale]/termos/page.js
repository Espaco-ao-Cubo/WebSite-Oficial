import { useTranslations } from 'next-intl'
import { setRequestLocale } from 'next-intl/server'

export const metadata = {
  title: 'Termos de Serviço - Espaço ao Cubo',
  description: 'Termos e condições de utilização do website',
}

export default async function TermosPage({ params }) {
  const { locale } = await params
  setRequestLocale(locale)

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1f1a] to-[#1a3a2e] pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-16 xl:px-24 max-w-4xl">
        <div className="bg-white/5 backdrop-blur-sm border border-[#9cc5ad]/20 rounded-2xl p-8 lg:p-12">
          {locale === 'pt' ? <TermosPortugues /> : <TermsEnglish />}
        </div>
      </div>
    </div>
  )
}

function TermosPortugues() {
  return (
    <div className="prose prose-invert prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Termos de Serviço</h1>
      <p className="text-gray-400 mb-8">Última atualização: {new Date().toLocaleDateString('pt-PT')}</p>

      <div className="space-y-8 text-gray-300">
        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">1. Aceitação dos Termos</h2>
          <p>
            Ao aceder e utilizar o website do Espaço ao Cubo ("o Website"), o utilizador concorda 
            em ficar vinculado a estes Termos de Serviço e a toda a legislação aplicável. Se não 
            concordar com algum destes termos, está proibido de usar ou aceder a este Website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">2. Identificação da Entidade</h2>
          <p>
            O Website é propriedade e operado pela Associação Espaço ao Cubo, uma associação 
            estudantil registada em Portugal, com sede em Lisboa.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Denominação: Espaço ao Cubo - Associação de Estudantes</li>
            <li>Sede: Lisboa, Portugal</li>
            <li>Email: info@espacoaocubo.pt</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">3. Utilização do Website</h2>
          <p>O utilizador compromete-se a:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Utilizar o Website de forma lícita e conforme estes Termos</li>
            <li>Não utilizar o Website para fins comerciais não autorizados</li>
            <li>Não tentar obter acesso não autorizado a quaisquer partes do Website</li>
            <li>Não transmitir vírus ou código malicioso</li>
            <li>Respeitar os direitos de propriedade intelectual do Espaço ao Cubo</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">4. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo presente neste Website, incluindo mas não limitado a textos, gráficos, 
            logótipos, imagens, fotografias, vídeos e software, é propriedade do Espaço ao Cubo ou 
            dos seus licenciadores e está protegido pelas leis de direitos de autor portuguesas e 
            internacionais.
          </p>
          <p>
            É proibida a reprodução, distribuição, modificação ou utilização comercial de qualquer 
            conteúdo sem autorização prévia por escrito.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">5. Links para Websites de Terceiros</h2>
          <p>
            O Website pode conter links para websites de terceiros. O Espaço ao Cubo não tem controlo 
            sobre o conteúdo desses websites e não assume qualquer responsabilidade pelo mesmo.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">6. Limitação de Responsabilidade</h2>
          <p>
            O Espaço ao Cubo não garante que o Website estará sempre disponível, sem interrupções ou 
            livre de erros. O utilizador utiliza o Website por sua conta e risco.
          </p>
          <p>
            Na medida máxima permitida por lei, o Espaço ao Cubo não será responsável por quaisquer 
            danos diretos, indiretos, incidentais ou consequenciais resultantes da utilização ou 
            impossibilidade de utilização do Website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">7. Modificações aos Termos</h2>
          <p>
            O Espaço ao Cubo reserva-se o direito de modificar estes Termos a qualquer momento. 
            As alterações entrarão em vigor imediatamente após a sua publicação no Website. 
            A utilização continuada do Website após tais alterações constitui aceitação dos novos Termos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">8. Lei Aplicável e Jurisdição</h2>
          <p>
            Estes Termos são regidos pela lei portuguesa. Qualquer litígio relacionado com estes 
            Termos será da competência exclusiva dos tribunais portugueses.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">9. Contacto</h2>
          <p>
            Para questões relacionadas com estes Termos de Serviço, por favor contacte-nos através de:
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

function TermsEnglish() {
  return (
    <div className="prose prose-invert prose-lg max-w-none">
      <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
      <p className="text-gray-400 mb-8">Last updated: {new Date().toLocaleDateString('en-US')}</p>

      <div className="space-y-8 text-gray-300">
        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Espaço ao Cubo website ("the Website"), you agree to be bound 
            by these Terms of Service and all applicable laws. If you do not agree with any of these 
            terms, you are prohibited from using or accessing this Website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">2. Entity Identification</h2>
          <p>
            The Website is owned and operated by Associação Espaço ao Cubo, a student association 
            registered in Portugal, headquartered in Lisbon.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Name: Espaço ao Cubo - Student Association</li>
            <li>Headquarters: Lisbon, Portugal</li>
            <li>Email: info@espacoaocubo.pt</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">3. Use of Website</h2>
          <p>The user agrees to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the Website lawfully and in accordance with these Terms</li>
            <li>Not use the Website for unauthorized commercial purposes</li>
            <li>Not attempt to gain unauthorized access to any parts of the Website</li>
            <li>Not transmit viruses or malicious code</li>
            <li>Respect Espaço ao Cubo's intellectual property rights</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">4. Intellectual Property</h2>
          <p>
            All content on this Website, including but not limited to text, graphics, logos, images, 
            photographs, videos, and software, is owned by Espaço ao Cubo or its licensors and is 
            protected by Portuguese and international copyright laws.
          </p>
          <p>
            Reproduction, distribution, modification, or commercial use of any content without prior 
            written authorization is prohibited.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">5. Third-Party Links</h2>
          <p>
            The Website may contain links to third-party websites. Espaço ao Cubo has no control over 
            the content of these websites and assumes no responsibility for it.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">6. Limitation of Liability</h2>
          <p>
            Espaço ao Cubo does not guarantee that the Website will always be available, uninterrupted, 
            or error-free. You use the Website at your own risk.
          </p>
          <p>
            To the maximum extent permitted by law, Espaço ao Cubo shall not be liable for any direct, 
            indirect, incidental, or consequential damages resulting from the use or inability to use 
            the Website.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">7. Modifications to Terms</h2>
          <p>
            Espaço ao Cubo reserves the right to modify these Terms at any time. Changes will take 
            effect immediately upon posting on the Website. Continued use of the Website after such 
            changes constitutes acceptance of the new Terms.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">8. Applicable Law and Jurisdiction</h2>
          <p>
            These Terms are governed by Portuguese law. Any disputes related to these Terms shall be 
            subject to the exclusive jurisdiction of Portuguese courts.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-[#9cc5ad] mb-4">9. Contact</h2>
          <p>
            For questions related to these Terms of Service, please contact us at:
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