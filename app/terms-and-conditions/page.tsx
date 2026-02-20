import Navbar from '@/components/Navbar'
import Link from 'next/link'

export const metadata = {
  title: 'Terms & Conditions — CLBR',
}

const LAST_UPDATED = 'February 20, 2026'

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-[#0d0d0d] min-h-screen text-white">
      <Navbar />

      {/* ── Hero ── */}
      <div className="pt-[130px] pb-16 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium mb-4">Legal Documentation</p>
          <h1 className="text-[52px] sm:text-[72px] md:text-[96px] font-black uppercase leading-none tracking-tight mb-6">
            Terms &amp;<br />Conditions
          </h1>
          <p className="text-white/40 text-sm">
            clbr.com &nbsp;·&nbsp; Last updated: {LAST_UPDATED}
          </p>
        </div>
      </div>

      <div className="px-6 sm:px-10 md:px-16 lg:px-24 py-16">
        <div className="max-w-4xl mx-auto">

          {/* ── Intro Banner ── */}
          <div className="border-l-2 border-white/20 bg-white/[0.03] pl-5 pr-5 py-5 mb-8 rounded-r-sm">
            <p className="text-white/70 text-sm leading-relaxed">
              <strong className="text-white">Please read this document carefully.</strong> These Terms govern the use of Caliber and any other related Agreement or legal relationship with the Owner in a legally binding way. Capitalized words are defined in the Definitions section at the end of this document.
            </p>
            <p className="text-white/70 text-sm leading-relaxed mt-3">
              Although the entire contractual relationship relating to these Products is entered into solely by the Owner and Users, Users acknowledge and agree that, where Caliber has been provided to them via the Apple App Store, Apple may enforce these Terms as a third-party beneficiary.
            </p>
          </div>

          {/* ── Owner Info ── */}
          <div className="border border-white/10 rounded-sm p-6 mb-8">
            <p className="text-white/30 text-xs uppercase tracking-[0.17em] font-medium mb-3">Caliber is provided by</p>
            <p className="text-white/70 text-sm mb-1">Caliber (CLBR)</p>
            <p className="text-white/50 text-sm mb-1">1261 S 820 E, Ste 300</p>
            <p className="text-white/50 text-sm mb-3">American Fork, UT 84003, United States</p>
            <p className="text-white/50 text-sm">
              Owner contact email:{' '}
              <a href="mailto:mktg@clbr.com" className="text-white/70 hover:text-white underline underline-offset-4 transition-colors">
                mktg@clbr.com
              </a>
            </p>
          </div>

          {/* ── Table of Contents ── */}
          <div className="border border-white/10 rounded-sm p-8 mb-16">
            <h2 className="text-white font-black uppercase text-sm tracking-widest mb-6">Table of Contents</h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-decimal list-inside">
              {[
                ['#information', 'About Caliber & SMS Consent'],
                ['#terms-of-use', 'Terms of Use'],
                ['#account-registration', 'Account Registration'],
                ['#content', 'Content on Caliber'],
                ['#acceptable-use', 'Acceptable Use'],
                ['#terms-of-sale', 'Terms & Conditions of Sale'],
                ['#liability', 'Liability & Indemnification'],
                ['#common', 'Common Provisions'],
                ['#governing-law', 'Governing Law & Jurisdiction'],
                ['#definitions', 'Definitions'],
              ].map(([href, label]) => (
                <li key={href} className="text-sm">
                  <a href={href} className="text-white/50 hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ol>
          </div>

          {/* ────────────────────────────────── */}
          {/* 01 — ABOUT / SMS */}
          {/* ────────────────────────────────── */}
          <PolicySection id="information" number="01" title="About Caliber & SMS Communications">
            <SubHeading>SMS Communication Consent</SubHeading>
            <p className="text-white/60 leading-relaxed mb-4">
              By providing your phone number, you consent to receive SMS and text messages, including automated messages, regarding your account, service updates, scheduling confirmations, project status changes, and important alerts, as well as — if you have separately opted in — promotional offers, special deals, event notifications, and other marketing communications.
            </p>
            <HighlightBox title="Important SMS Information">
              Message and data rates may apply. Message frequency may vary. You may opt out at any time by replying{' '}
              <strong className="text-white">"STOP"</strong> to any message or by contacting us directly. Opting out of marketing messages will not affect your ability to receive necessary transactional or service-related messages. For more information about our data handling practices, refer to our{' '}
              <Link href="/privacy-policy" className="text-white/70 underline underline-offset-2 hover:text-white transition-colors">Privacy Policy</Link>.
            </HighlightBox>
          </PolicySection>

          {/* 02 — TERMS OF USE */}
          <PolicySection id="terms-of-use" number="02" title="Terms of Use">
            <p className="text-white/60 leading-relaxed mb-4">
              Unless otherwise specified, the terms of use detailed in this section apply generally when using Caliber. Single or additional conditions of use or access may apply in specific scenarios and will be indicated within this document.
            </p>
            <SubHeading>User Requirements</SubHeading>
            <p className="text-white/60 leading-relaxed mb-4">By using Caliber, Users confirm they meet the following requirements:</p>
            <BulletList items={[
              'There are no restrictions for Users in terms of being Consumers or Business Users.',
              'Users are not located in a country subject to a U.S. government embargo or designated as a "terrorist-supporting" country.',
              'Users are not listed on any U.S. government list of prohibited or restricted parties.',
            ]} />
            <HighlightBox title="A Note on Certain Provisions">
              Some provisions in these Terms may only apply to certain categories of Users — in particular, to Consumers or to Users that do not qualify as Consumers. Such limitations are always explicitly mentioned within each affected clause. Where no such mention is made, clauses apply to all Users.
            </HighlightBox>
          </PolicySection>

          {/* 03 — ACCOUNT REGISTRATION */}
          <PolicySection id="account-registration" number="03" title="Account Registration">
            <p className="text-white/60 leading-relaxed mb-4">
              Registration of User accounts on Caliber is subject to the conditions outlined below. By registering, Users agree to meet such conditions.
            </p>
            <BulletList items={[
              'Accounts registered by bots or any other automated methods are not permitted.',
              'Unless otherwise specified, each User must register only one account.',
              'Unless explicitly permitted, a User account may not be shared with other persons.',
            ]} />
          </PolicySection>

          {/* 04 — CONTENT */}
          <PolicySection id="content" number="04" title="Content on Caliber">
            <p className="text-white/60 leading-relaxed mb-4">
              Unless where otherwise specified or clearly recognizable, all content available on Caliber is owned or provided by the Owner or its licensors. The Owner undertakes its utmost effort to ensure that the content provided on Caliber infringes no applicable legal provisions or third-party rights.
            </p>
            <SubHeading>All Rights Reserved</SubHeading>
            <p className="text-white/60 leading-relaxed mb-4">
              The Owner holds and reserves all intellectual property rights for any such content. Users may not use such content in any way that is not necessary or implicit in the proper use of the Service.
            </p>
            <p className="text-white/60 leading-relaxed mb-4">
              In particular, but without limitation, Users may not copy, download, share (beyond the limits set forth below), modify, translate, transform, publish, transmit, sell, sublicense, edit, transfer/assign to third parties, or create derivative works from the content available on Caliber — nor allow any third party to do so through the User or their device, even without the User's knowledge.
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              Where explicitly stated on Caliber, the User may download, copy, and/or share some content available through Caliber for its sole personal and non-commercial use, provided that the copyright attributions and all other attributions requested by the Owner are correctly implemented.
            </p>
            <SubHeading>Removal of Content via App Store</SubHeading>
            <p className="text-white/60 leading-relaxed mb-6">
              If content available through the App Store is reported and deemed objectionable, it will be removed within 24 hours and the User who provided the content will be barred from using the Service.
            </p>
            <SubHeading>Access to External Resources</SubHeading>
            <p className="text-white/60 leading-relaxed">
              Through Caliber, Users may have access to external resources provided by third parties. Users acknowledge and accept that the Owner has no control over such resources and is therefore not responsible for their content and availability. Conditions applicable to any resources provided by third parties result from each such third party's terms and conditions, or in their absence, from applicable statutory law.
            </p>
          </PolicySection>

          {/* 05 — ACCEPTABLE USE */}
          <PolicySection id="acceptable-use" number="05" title="Acceptable Use">
            <p className="text-white/60 leading-relaxed mb-4">
              Caliber and the Service may only be used within the scope of what they are provided for, under these Terms and applicable law. Users are solely responsible for making sure that their use of Caliber and/or the Service does not violate any applicable law, regulations, or third-party rights.
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              The Owner reserves the right to take any appropriate measure to protect its legitimate interests — including denying Users access, terminating contracts, or reporting misconduct to competent authorities — whenever Users are suspected of engaging in any of the following prohibited activities:
            </p>

            <ConductCategory label="Conduct Restrictions" />
            <ConductList items={[
              'Pretending to fulfill conditions for accessing Caliber that are not met, such as age requirements or Consumer status.',
              'Concealing identity, stealing someone else\'s identity, or impersonating a third party without permission.',
              'Manipulating identifiers to disguise or conceal the origin of messages or posted content.',
              'Defaming, abusing, harassing, using threatening practices, or violating the legal rights of others.',
              'Promoting activity that may endanger the User\'s life or the life of any other User, including self-destructive or violent behavior.',
              'Probing, scanning, or testing the vulnerability of Caliber, or breaching its security or authentication measures.',
              'Installing, embedding, uploading, or incorporating any malware into or via Caliber.',
              'Using Caliber in an abusive, excessive, or inappropriate way (for example, for spamming purposes).',
              'Attempting to disrupt or tamper with the technical infrastructure in a manner that harms or places an undue burden on Caliber.',
            ]} />

            <ConductCategory label="Excessive Use" />
            <ConductList items={[
              'Using resources of Caliber excessively in relation to other Users. In such cases, the Owner may suspend the User\'s account or limit activity until consumption is reduced.',
            ]} />

            <ConductCategory label="Scraping" />
            <ConductList items={[
              'Adopting any automated process to extract, harvest, or scrape information, data, and/or content from Caliber unless explicitly permitted by the Owner.',
            ]} />

            <ConductCategory label="Content Restrictions" />
            <ConductList items={[
              'Disseminating or publishing content that is unlawful, obscene, illegitimate, libelous, or inappropriate.',
              'Publishing content that promotes hate, racism, discrimination, pornography, or violence.',
              'Disseminating content that is false or may create unjustified alarm.',
              'Using Caliber to publish content protected by intellectual property laws without the right-holder\'s consent.',
              'Publishing content that infringes on any third-party rights, including state, military, trade, or professional secrets and personal data.',
              'Publishing content or carrying out activities that disrupt, interrupt, or harm the integrity of Caliber or another User\'s experience (e.g., spamming, phishing, distributing malware).',
            ]} />

            <ConductCategory label="Commercial Use Restrictions" />
            <ConductList items={[
              'Registering or using Caliber to promote, sell, or advertise products or services of any kind.',
              'Indicating or implying a qualified relationship with Caliber or that Caliber has endorsed the User, the User\'s products, or any third party\'s products or services.',
            ]} />
          </PolicySection>

          {/* 06 — TERMS OF SALE */}
          <PolicySection id="terms-of-sale" number="06" title="Terms & Conditions of Sale">
            <SubHeading>Purchase via App Store</SubHeading>
            <p className="text-white/60 leading-relaxed mb-4">
              Caliber or specific Products available for sale on Caliber must be purchased via a third-party app store. To access such purchases, Users must follow the instructions provided on the relevant online store (such as the Apple App Store or Google Play), which may vary depending on the device in use.
            </p>
            <p className="text-white/60 leading-relaxed">
              Unless otherwise specified, purchases made via third-party online stores are also subject to such third parties' terms and conditions, which, in case of any inconsistency or conflict, shall always prevail upon these Terms. Users purchasing through such stores must therefore read and accept those terms and conditions of sale carefully.
            </p>
          </PolicySection>

          {/* 07 — LIABILITY */}
          <PolicySection id="liability" number="07" title="Liability & Indemnification">
            <p className="text-white/60 leading-relaxed mb-6">
              Unless otherwise explicitly stated or agreed with Users, the Owner's liability for damages in connection with the execution of the Agreement shall be excluded, limited, and/or reduced to the maximum extent permitted by applicable law.
            </p>
            <SubHeading>Disclaimer of Warranties (US Users)</SubHeading>
            <WarningBox title="As-Is Service">
              Caliber is provided strictly on an "as is" and "as available" basis. Use of the Service is at Users' own risk. To the maximum extent permitted by applicable law, the Owner expressly disclaims all conditions, representations, and warranties — whether express, implied, statutory, or otherwise — including any implied warranty of merchantability, fitness for a particular purpose, or non-infringement of third-party rights.
            </WarningBox>
            <p className="text-white/60 leading-relaxed mb-4">
              The Owner, its subsidiaries, affiliates, licensors, officers, directors, agents, co-branders, partners, suppliers, and employees do not warrant that: the content is accurate, reliable, or correct; the Service will meet Users' requirements; the Service will be available at any particular time, uninterrupted, or secure; any defects or errors will be corrected; or the Service is free of viruses or other harmful components.
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              Federal law, some states, and other jurisdictions do not allow the exclusion and limitations of certain implied warranties. The above exclusions may not apply to all Users.
            </p>
            <SubHeading>Limitations of Liability (US Users)</SubHeading>
            <p className="text-white/60 leading-relaxed mb-4">
              To the maximum extent permitted by applicable law, in no event shall the Owner and its subsidiaries, affiliates, officers, directors, agents, co-branders, partners, suppliers, and employees be liable for:
            </p>
            <BulletList items={[
              'Any indirect, punitive, incidental, special, consequential, or exemplary damages, including loss of profits, goodwill, use, data, or other intangible losses arising out of or relating to the use of, or inability to use, the Service.',
              'Any damage, loss, or injury resulting from hacking, tampering, or other unauthorized access or use of the Service or User account.',
              'Any errors, mistakes, or inaccuracies of content.',
              'Personal injury or property damage resulting from User access to or use of the Service.',
              "Any unauthorized access to or use of the Owner's secure servers or personal information stored therein.",
              'Any interruption or cessation of transmission to or from the Service.',
              'Any bugs, viruses, trojan horses, or similar items transmitted to or through the Service.',
              'Any errors or omissions in content or any loss or damage incurred as a result of content posted, emailed, transmitted, or otherwise made available through the Service.',
              'The defamatory, offensive, or illegal conduct of any User or third party.',
            ]} />
            <p className="text-white/60 leading-relaxed mb-6">
              In no event shall the Owner and its affiliates be liable for any claims, proceedings, liabilities, obligations, damages, losses, or costs in an amount exceeding the amount paid by User to the Owner in the preceding 12 months, or the period of duration of this agreement between the parties, whichever is shorter.
            </p>
            <SubHeading>Indemnification</SubHeading>
            <p className="text-white/60 leading-relaxed mb-4">
              The User agrees to defend, indemnify, and hold the Owner and its subsidiaries, affiliates, officers, directors, agents, co-branders, partners, suppliers, and employees harmless from and against any and all claims or demands, damages, obligations, losses, liabilities, costs, and expenses — including legal fees — arising from:
            </p>
            <BulletList items={[
              "User's use of and access to the Service, including any data or content transmitted or received.",
              "User's violation of these Terms, including any breach of the representations and warranties set forth herein.",
              "User's violation of any third-party rights, including privacy or intellectual property rights.",
              "User's violation of any statutory law, rule, or regulation.",
              "Any content submitted from User's account, including third-party access with User's credentials.",
              "User's willful misconduct.",
            ]} />
          </PolicySection>

          {/* 08 — COMMON PROVISIONS */}
          <PolicySection id="common" number="08" title="Common Provisions">
            <SubHeading>No Waiver</SubHeading>
            <p className="text-white/60 leading-relaxed mb-6">
              The Owner's failure to assert any right or provision under these Terms shall not constitute a waiver of any such right or provision. No waiver shall be considered a further or continuing waiver of such term or any other term.
            </p>
            <SubHeading>Service Interruption</SubHeading>
            <p className="text-white/60 leading-relaxed mb-4">
              To ensure the best possible service level, the Owner reserves the right to interrupt the Service for maintenance, system updates, or any other changes, informing Users appropriately. Within the limits of law, the Owner may also decide to suspend or discontinue the Service altogether. If the Service is discontinued, the Owner will cooperate with Users to enable them to withdraw personal data or information and will respect Users' rights relating to continued product use and/or compensation as provided for by applicable law.
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              Additionally, the Service might not be available due to reasons outside the Owner's reasonable control, such as force majeure events (e.g., infrastructural breakdowns or blackouts). The Owner will endeavor to inform the User in advance with as much notice as reasonably possible.
            </p>
            <SubHeading>Service Reselling</SubHeading>
            <p className="text-white/60 leading-relaxed mb-6">
              Users may not reproduce, duplicate, copy, sell, resell, or exploit any portion of Caliber and its Service without the Owner's express prior written permission, granted either directly or through a legitimate reselling program.
            </p>
            <SubHeading>Privacy Policy</SubHeading>
            <p className="text-white/60 leading-relaxed mb-6">
              To learn more about the use of their personal data, Users may refer to the{' '}
              <Link href="/privacy-policy" className="text-white/70 underline underline-offset-2 hover:text-white transition-colors">
                Privacy Policy of Caliber
              </Link>.
            </p>
            <SubHeading>Intellectual Property Rights</SubHeading>
            <p className="text-white/60 leading-relaxed mb-4">
              Without prejudice to any more specific provision of these Terms, any intellectual property rights — such as copyrights, trademark rights, patent rights, and design rights — related to Caliber are the exclusive property of the Owner or its licensors and are subject to the protection granted by applicable laws or international treaties relating to intellectual property.
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              All trademarks — nominal or figurative — and all other marks, trade names, service marks, word marks, illustrations, images, or logos appearing in connection with Caliber are, and remain, the exclusive property of the Owner or its licensors.
            </p>
            <SubHeading>Changes to These Terms</SubHeading>
            <p className="text-white/60 leading-relaxed mb-6">
              The Owner reserves the right to amend or otherwise modify these Terms at any time. In such cases, the Owner will appropriately inform the User of these changes. Such changes will only affect the relationship with the User from the date communicated to Users onwards. The continued use of the Service will signify the User's acceptance of the revised Terms. If Users do not wish to be bound by the changes, they must stop using the Service and may terminate the Agreement.
            </p>
            <SubHeading>Assignment of Contract</SubHeading>
            <p className="text-white/60 leading-relaxed mb-6">
              The Owner reserves the right to transfer, assign, dispose of by novation, or subcontract any or all rights or obligations under these Terms, taking the User's legitimate interests into account. Users may not assign or transfer their rights or obligations under these Terms in any way without the written permission of the Owner.
            </p>
            <SubHeading>Contacts</SubHeading>
            <p className="text-white/60 leading-relaxed mb-6">
              All communications relating to the use of Caliber must be sent using the contact information stated in this document.
            </p>
            <SubHeading>Severability</SubHeading>
            <p className="text-white/60 leading-relaxed mb-4">
              Should any provision of these Terms be deemed or become invalid or unenforceable under applicable law, the invalidity or unenforceability of such provision shall not affect the validity of the remaining provisions, which shall remain in full force and effect.
            </p>
            <p className="text-white/60 leading-relaxed mb-4">
              <strong className="text-white/80">US Users:</strong> Any such invalid or unenforceable provision will be interpreted, construed, and reformed to the extent reasonably required to render it valid, enforceable, and consistent with its original intent. These Terms constitute the entire Agreement between Users and the Owner with respect to the subject matter hereof, and supersede all other communications, including all prior agreements between the parties with respect to such subject matter.
            </p>
            <p className="text-white/60 leading-relaxed">
              <strong className="text-white/80">EU Users:</strong> Should any provision of these Terms be or be deemed void, invalid, or unenforceable, the parties shall do their best to find, in an amicable way, an agreement on valid and enforceable provisions thereby substituting the void, invalid, or unenforceable parts. In case of failure to do so, the applicable statutory provisions shall apply.
            </p>
          </PolicySection>

          {/* 09 — GOVERNING LAW */}
          <PolicySection id="governing-law" number="09" title="Governing Law & Jurisdiction">
            <SubHeading>Governing Law</SubHeading>
            <p className="text-white/60 leading-relaxed mb-4">
              These Terms are governed by the law of the place where the Owner is based, as disclosed in the relevant section of this document, without regard to conflict of laws principles.
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              However, regardless of the above, if the law of the country in which the User is located provides for higher applicable consumer protection standards, such higher standards shall prevail. If the User qualifies as a Consumer in Brazil and the product and/or service is commercialized in Brazil, Brazilian law will apply.
            </p>
            <SubHeading>Venue of Jurisdiction</SubHeading>
            <p className="text-white/60 leading-relaxed mb-4">
              The exclusive competence to decide on any controversy resulting from or connected to these Terms lies with the courts of the place where the Owner is based, as displayed in the relevant section of this document.
            </p>
            <p className="text-white/60 leading-relaxed mb-4">
              <strong className="text-white/80">Exception for Consumers in Europe:</strong> The above does not apply to any Users that qualify as European Consumers, nor to Consumers based in the United Kingdom, Switzerland, Norway, or Iceland.
            </p>
            <p className="text-white/60 leading-relaxed">
              <strong className="text-white/80">Exception for Consumers in Brazil:</strong> The above does not apply to Users in Brazil that qualify as Consumers.
            </p>
          </PolicySection>

          {/* 10 — DEFINITIONS */}
          <PolicySection id="definitions" number="10" title="Definitions & Legal References">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ['Caliber (or this Application)', 'The property that enables the provision of the Service.'],
                ['Agreement', 'Any legally binding or contractual relationship between the Owner and the User, governed by these Terms.'],
                ['Owner (or We)', 'The natural person(s) or legal entity that provides Caliber and/or the Service to Users.'],
                ['User (or You)', 'Any natural person or legal entity using Caliber.'],
                ['Consumer', 'Any User qualifying as such under applicable law.'],
                ['Business User', 'Any User that does not qualify as a Consumer.'],
                ['Product', 'A good or service available through Caliber, including physical goods, digital files, software, booking services, and more.'],
                ['Service', 'The service provided by Caliber as described in these Terms and on Caliber.'],
                ['Terms', 'All provisions applicable to the use of Caliber and/or the Service as described in this document, including any related documents or agreements.'],
                ['European (or Europe)', 'Applies where a User, regardless of nationality, is located in the EU.'],
                ['Brazilian (or Brazil)', 'Applies where a User, regardless of nationality, is located in Brazil.'],
              ].map(([term, def]) => (
                <div key={term} className="border border-white/10 rounded-sm p-4">
                  <p className="text-white font-bold text-xs uppercase tracking-wider mb-2">{term}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{def}</p>
                </div>
              ))}
            </div>
          </PolicySection>

          {/* ── Contact Box ── */}
          <div id="contact" className="border border-white/10 rounded-sm p-8 md:p-12 mt-4 mb-16">
            <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium mb-3">Contact</p>
            <h2 className="text-white font-black text-[28px] sm:text-[36px] uppercase leading-tight mb-6">Contact Us</h2>
            <p className="text-white/40 text-xs uppercase tracking-widest mb-4">Owner and Data Controller</p>
            <p className="text-white/70 mb-1">Caliber (CLBR)</p>
            <p className="text-white/50 text-sm mb-1">1261 S 820 E, Ste 300</p>
            <p className="text-white/50 text-sm mb-4">American Fork, UT 84003, United States</p>
            <p className="text-white/70 text-sm mb-6">
              Email:{' '}
              <a href="mailto:mktg@clbr.com" className="text-white underline underline-offset-4 hover:text-white/70 transition-colors">
                mktg@clbr.com
              </a>
            </p>
            <p className="text-white/30 text-sm">
              All communications relating to the use of Caliber must be sent using the contact information above.
            </p>
          </div>

          {/* ── Page Footer ── */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/30 text-sm mb-2">© {new Date().getFullYear()} CLBR (clbr.com) — All rights reserved.</p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <Link href="/privacy-policy" className="text-white/30 hover:text-white/60 transition-colors">Privacy Policy</Link>
              <span className="text-white/10">·</span>
              <Link href="/terms-and-conditions" className="text-white/30 hover:text-white/60 transition-colors">Terms &amp; Conditions</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

/* ── Shared sub-components ── */

function PolicySection({ id, number, title, children }: { id: string; number: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mb-16 scroll-mt-6">
      <span className="text-white/10 text-[40px] font-black leading-none block mb-2">{number}</span>
      <h2 className="text-white font-black text-[28px] sm:text-[36px] uppercase leading-tight mb-8 pb-6 border-b border-white/10">
        {title}
      </h2>
      {children}
    </div>
  )
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="text-white/50 text-xs font-bold uppercase tracking-[0.12em] mt-8 mb-3">
      {children}
    </h3>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 mb-6">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3 text-white/60 text-sm leading-relaxed">
          <span className="text-white/20 mt-0.5 flex-shrink-0">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

function HighlightBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-white/20 bg-white/[0.03] pl-5 pr-5 py-4 my-6 rounded-r-sm">
      <p className="text-white font-bold text-sm mb-2">{title}</p>
      <p className="text-white/50 text-sm leading-relaxed">{children}</p>
    </div>
  )
}

function WarningBox({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-l-2 border-white/10 bg-white/[0.02] pl-5 pr-5 py-4 my-6 rounded-r-sm">
      <p className="text-white/60 font-bold text-sm mb-2 uppercase tracking-wider">{title}</p>
      <p className="text-white/40 text-sm leading-relaxed">{children}</p>
    </div>
  )
}

function ConductCategory({ label }: { label: string }) {
  return (
    <p className="text-white/30 text-xs font-bold uppercase tracking-[0.15em] mt-8 mb-0 px-4 py-3 bg-white/[0.03] border border-white/10 border-b-0 rounded-t-sm">
      {label}
    </p>
  )
}

function ConductList({ items }: { items: string[] }) {
  return (
    <div className="border border-white/10 rounded-b-sm mb-2 divide-y divide-white/5">
      {items.map((item, i) => (
        <div key={i} className="flex gap-3 px-4 py-3">
          <span className="text-white/20 text-xs mt-0.5 flex-shrink-0 font-bold">✕</span>
          <p className="text-white/50 text-sm leading-relaxed">{item}</p>
        </div>
      ))}
    </div>
  )
}
