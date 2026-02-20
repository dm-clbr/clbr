import Navbar from '@/components/Navbar'
import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — CLBR',
}

const LAST_UPDATED = 'February 20, 2026'

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#0d0d0d] min-h-screen text-white">
      <Navbar />

      {/* ── Hero ── */}
      <div className="pt-[130px] pb-16 px-6 sm:px-10 md:px-16 lg:px-24 border-b border-white/10">
        <div className="max-w-4xl mx-auto">
          <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium mb-4">Legal Documentation</p>
          <h1 className="text-[52px] sm:text-[72px] md:text-[96px] font-black uppercase leading-none tracking-tight mb-6">
            Privacy<br />Policy
          </h1>
          <p className="text-white/40 text-sm">
            clbr.com &nbsp;·&nbsp; Last updated: {LAST_UPDATED}
          </p>
        </div>
      </div>

      <div className="px-6 sm:px-10 md:px-16 lg:px-24 py-16">
        <div className="max-w-4xl mx-auto">

          {/* ── Table of Contents ── */}
          <div className="border border-white/10 rounded-sm p-8 mb-16">
            <h2 className="text-white font-black uppercase text-sm tracking-widest mb-6">Table of Contents</h2>
            <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 list-decimal list-inside">
              {[
                ['#summary', 'Policy Summary'],
                ['#data-collected', 'Types of Data Collected'],
                ['#methods', 'Methods & Place of Processing'],
                ['#purposes', 'Purposes of Processing'],
                ['#device-permissions', 'Device Permissions'],
                ['#detailed', 'Detailed Processing Information'],
                ['#further-info', 'Further Information'],
                ['#gdpr', 'Your Rights (GDPR)'],
                ['#us-rights', 'Your Rights (US State Laws)'],
                ['#contact', 'Contact Us'],
              ].map(([href, label]) => (
                <li key={href} className="text-sm">
                  <a href={href} className="text-white/50 hover:text-white transition-colors">{label}</a>
                </li>
              ))}
            </ol>
          </div>

          {/* ── At a Glance Cards ── */}
          <div className="mb-16">
            <p className="text-white/30 text-xs uppercase tracking-[0.18em] font-medium mb-6">At a Glance</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { title: 'Analytics', body: 'Google Analytics 4 and Universal Analytics. Trackers and usage data.' },
                { title: 'Beta Testing', body: 'TestFlight and Google Play Beta. Device info, logs, and contact data.' },
                { title: 'Contact Forms', body: 'Name, email, phone, address, company, and profile information.' },
                { title: 'Device Permissions', body: 'Location, camera, contacts, calendar, sensors, and storage.' },
                { title: 'Messaging', body: 'BulkSMS used to send SMS communications to your phone number.' },
                { title: 'Security', body: 'Cloudflare Bot Management protects the platform from spam and fraud.' },
              ].map(({ title, body }) => (
                <div key={title} className="border border-white/10 rounded-sm p-5 hover:border-white/20 transition-colors">
                  <p className="text-white font-bold text-xs uppercase tracking-wider mb-2">{title}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ────────────────────────────────── */}
          {/* 01 — SUMMARY */}
          {/* ────────────────────────────────── */}
          <PolicySection id="summary" number="01" title="Policy Summary">
            <p className="text-white/60 leading-relaxed mb-4">
              Caliber (<strong className="text-white">clbr.com</strong>) collects Personal Data from its Users in order to provide its services. This policy describes what data is collected, how it is used, and what rights you have in relation to that data.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              This document contains a dedicated section for Users in the United States outlining additional state-specific privacy rights. This document can be printed for reference by using the print command in your browser settings.
            </p>

            <SubHeading>Personal Data Processed &amp; Services Used</SubHeading>
            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-white/5 border border-white/10">
                    <th className="text-left px-4 py-3 text-white/40 uppercase tracking-wider text-xs font-medium">Purpose</th>
                    <th className="text-left px-4 py-3 text-white/40 uppercase tracking-wider text-xs font-medium">Service</th>
                    <th className="text-left px-4 py-3 text-white/40 uppercase tracking-wider text-xs font-medium">Data Collected</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Analytics', 'Google Analytics (Universal Analytics)', 'Trackers; Usage Data'],
                    ['Analytics', 'Google Analytics 4', 'Number of Users; session statistics; Trackers; Usage Data'],
                    ['Beta Testing', 'TestFlight', 'App info; device info; device logs; email; name; phone; Trackers; Usage Data'],
                    ['Beta Testing', 'Google Play Beta Testing', 'Data communicated via service; device info; device logs; email; name; phone; Usage Data'],
                    ['Contacting the User', 'Contact Form', 'City; company; country; date of birth; email; name; phone; address; Tax ID; ZIP/Postal code; and more'],
                    ['Device Permissions', 'Device Permissions Access', 'Location (approx. & precise); calendar; camera; contacts; sensors; storage; reminders; photo library'],
                    ['External Content', 'Google Fonts', 'Trackers; Usage Data'],
                    ['Messaging', 'BulkSMS', 'Phone number'],
                    ['Platform & Hosting', 'Google Play Store; Webflow', 'Usage Data; Trackers; various data per service privacy policies'],
                    ['Registration & Auth', 'Direct Registration (Caliber)', 'Billing address; email; name; password; phone; SSN; Tax ID; username; profile picture; and more'],
                    ['Spam & Bot Protection', 'Cloudflare Bot Management', 'App info; browser info; browsing history; device info; IP address; keypress events; mouse movements; Usage Data; and more'],
                    ['Tag Management', 'Google Tag Manager', 'Trackers'],
                    ['Traffic Optimization', 'Cloudflare; jsDelivr CDN; Google Hosted Libraries', 'Trackers; Usage Data; various data per service'],
                    ['CRM', 'HubSpot CRM', 'Email; first name; last name; Trackers; Usage Data'],
                  ].map(([purpose, service, data], i) => (
                    <tr key={i} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="px-4 py-3 text-white/70 align-top">{purpose}</td>
                      <td className="px-4 py-3 text-white/50 align-top">{service}</td>
                      <td className="px-4 py-3 text-white/40 align-top">{data}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <HighlightBox title="Opting Out of Interest-Based Advertising">
              In addition to any opt-out features provided by the services listed above, Users may learn more about how to opt out of interest-based advertising by visiting the dedicated section of our Cookie Policy.
            </HighlightBox>
          </PolicySection>

          {/* 02 — DATA COLLECTED */}
          <PolicySection id="data-collected" number="02" title="Types of Data Collected">
            <p className="text-white/60 leading-relaxed mb-4">Among the types of Personal Data that Caliber collects, by itself or through third parties, are:</p>
            <BulletList items={[
              'Trackers; Usage Data',
              'Calendar, Contacts, Camera, Location (approximate & precise), Sensors, Storage, Reminders, and Photo Library permissions',
              'Email address; first name; last name; phone number',
              'App information; device logs; device information',
              'City; ZIP/Postal code; state; province; country; county; latitude; longitude; metro area; geography/region',
              'IP address; operating systems; browser information; language',
              'Session statistics; page views; interaction events; clicks; browsing history; search history; scroll position; keypress, motion sensor, and touch events; video views',
              'Date of birth; company name; profession; physical address; Tax ID; number of employees; website; gender; username; password; Social Security number (SSN); picture; profile picture; User ID; billing address; field of activity; house number',
            ]} />
            <p className="text-white/60 leading-relaxed mb-4">
              Personal Data may be freely provided by the User or, in the case of Usage Data, collected automatically when using Caliber. Unless specified otherwise, all Data requested by Caliber is mandatory — failure to provide it may make it impossible for Caliber to provide its services.
            </p>
            <p className="text-white/60 leading-relaxed">
              Users who are uncertain about which Personal Data is mandatory are welcome to contact us using the information at the end of this document.
            </p>
          </PolicySection>

          {/* 03 — METHODS */}
          <PolicySection id="methods" number="03" title="Methods & Place of Processing">
            <SubHeading>Methods of Processing</SubHeading>
            <p className="text-white/60 leading-relaxed mb-4">
              Caliber takes appropriate security measures to prevent unauthorized access, disclosure, modification, or unauthorized destruction of your Data. Processing is carried out using computers and IT-enabled tools, following organizational procedures strictly related to the purposes indicated.
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              In addition to Caliber, in some cases your Data may be accessible to certain types of persons involved with the operation of Caliber (administration, sales, marketing, legal, system administration) or to external parties (such as third-party technical service providers, mail carriers, hosting providers, IT companies, communications agencies) appointed, if necessary, as Data Processors by Caliber. An updated list of these parties may be requested from us at any time.
            </p>
            <SubHeading>Place</SubHeading>
            <p className="text-white/60 leading-relaxed mb-6">
              Data is processed at Caliber's operating offices and in any other places where the parties involved in the processing are located. Depending on the User's location, data transfers may involve transferring the User's Data to a country other than their own.
            </p>
            <SubHeading>Retention Time</SubHeading>
            <p className="text-white/60 leading-relaxed">
              Unless specified otherwise in this document, Personal Data shall be processed and stored for as long as required by the purpose for which it was collected, and may be retained for longer due to applicable legal obligations or based on the User's consent.
            </p>
          </PolicySection>

          {/* 04 — PURPOSES */}
          <PolicySection id="purposes" number="04" title="Purposes of Processing">
            <p className="text-white/60 leading-relaxed mb-4">
              Data concerning the User is collected to allow Caliber to provide its services, comply with legal obligations, respond to enforcement requests, protect its rights and interests, detect malicious or fraudulent activity, and for the following specific purposes:
            </p>
            <BulletList items={[
              'Analytics and performance monitoring',
              'Tag management',
              'Device permissions for Personal Data access',
              'Beta testing and product improvement',
              'Platform services and hosting',
              'Traffic optimization and distribution',
              'Spam and bot protection',
              'Contacting the User',
              'Registration and authentication',
              'Managing contacts and sending messages',
              'Displaying content from external platforms',
              'User database management (CRM)',
            ]} />
          </PolicySection>

          {/* 05 — DEVICE PERMISSIONS */}
          <PolicySection id="device-permissions" number="05" title="Device Permissions">
            <p className="text-white/60 leading-relaxed mb-4">
              Depending on the User's device, Caliber may request certain permissions that allow it to access device data as described below. By default, these permissions must be granted by the User before the respective information can be accessed. Once granted, permissions can be revoked at any time via device settings or by contacting us.
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              Please note that revoking such permissions might impact the proper functioning of Caliber.
            </p>
            <SubHeading>Permissions &amp; Their Purpose</SubHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ['Location (Approximate)', 'Used to provide location-based services. Collected continuously or non-continuously depending on context.'],
                ['Location (Precise)', "Used to access the User's exact device location for location-based services, collected non-continuously."],
                ['Calendar', "Used for reading, adding, and removing calendar entries on the User's device."],
                ['Camera', 'Used for accessing the camera or capturing images and video. In some cases Caliber does not save or record the output.'],
                ['Contacts', "Used for accessing contacts and profiles on the User's device, including the ability to modify entries."],
                ['Photo Library', "Used to access the User's photo library. In some contexts, only write access is granted."],
                ['Sensors', 'Used for accessing data from body sensors such as heart rate monitors.'],
                ['Storage', 'Used for accessing shared external storage, including reading and adding items.'],
                ['Reminders', 'Used for reading, adding, and removing entries in the Reminders app.'],
                ['Call', "Used to access typical features associated with telephony on the User's device."],
              ].map(([name, desc]) => (
                <div key={name} className="border border-white/10 rounded-sm p-4">
                  <p className="text-white font-bold text-xs uppercase tracking-wider mb-2">{name}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </PolicySection>

          {/* 06 — DETAILED */}
          <PolicySection id="detailed" number="06" title="Detailed Processing Information">
            <p className="text-white/60 leading-relaxed mb-4">
              Full descriptions of each processing service are provided in our extended policy documentation. Key categories include:
            </p>
            <BulletList items={[
              'Analytics — Google Analytics (Universal Analytics & GA4)',
              'Beta Testing — TestFlight; Google Play Beta Testing',
              'Contacting the User — Caliber contact form',
              'Device Permissions — As described in Section 05',
              'External Platforms — Google Fonts',
              'Messaging — BulkSMS',
              'Platform & Hosting — Google Play Store; Webflow',
              'Registration & Auth — Caliber direct registration',
              'Spam & Bot Protection — Cloudflare Bot Management',
              'Tag Management — Google Tag Manager',
              'Traffic Optimization — Cloudflare; jsDelivr CDN; Google Hosted Libraries',
              'CRM — HubSpot CRM',
            ]} />
          </PolicySection>

          {/* 07 — FURTHER INFO */}
          <PolicySection id="further-info" number="07" title="Further Information">
            <SubHeading>SMS Communication Consent</SubHeading>
            <p className="text-white/60 leading-relaxed mb-6">
              By providing your phone number, you consent to receive SMS communications regarding your account, services, and updates. You can opt out of receiving these messages at any time by replying <strong className="text-white">"STOP"</strong> to any message. All messages comply with applicable laws and regulations, and your consent is recorded during account creation or inquiry.
            </p>
            <SubHeading>Push Notifications</SubHeading>
            <p className="text-white/60 leading-relaxed mb-6">
              Caliber may send push notifications to the User in order to achieve the purposes outlined in this privacy policy. Users may opt out at any time by visiting their device settings and adjusting notification preferences for Caliber. Please be aware that disabling push notifications may negatively affect the utility of Caliber.
            </p>
            <SubHeading>Location-Based Push Notifications</SubHeading>
            <p className="text-white/60 leading-relaxed mb-6">
              Caliber may use the User's geographic location to send push notifications. Users can disable this in their device's notification settings for Caliber at any time.
            </p>
            <SubHeading>Unique Device Identification</SubHeading>
            <p className="text-white/60 leading-relaxed mb-6">
              Caliber may track Users by storing a unique identifier of their device for analytics purposes or for storing User preferences.
            </p>
            <SubHeading>Legal Action</SubHeading>
            <p className="text-white/60 leading-relaxed mb-6">
              The User's Personal Data may be used for legal purposes by Caliber in Court or in stages leading to possible legal action arising from improper use of Caliber or related services. The User declares awareness that Caliber may be required to reveal personal data upon request of public authorities.
            </p>
            <SubHeading>System Logs &amp; Maintenance</SubHeading>
            <p className="text-white/60 leading-relaxed mb-6">
              For operation and maintenance purposes, Caliber and any third-party services may collect files that record interaction with Caliber (System logs) or use other Personal Data (such as the IP address) for this purpose.
            </p>
            <SubHeading>Changes to This Privacy Policy</SubHeading>
            <p className="text-white/60 leading-relaxed">
              Caliber reserves the right to make changes to this privacy policy at any time by notifying Users on this page and, as far as technically and legally feasible, sending a notice to Users via any available contact information. We strongly recommend checking this page periodically. Should changes affect processing activities based on the User's consent, Caliber shall collect new consent from the User where required.
            </p>
          </PolicySection>

          {/* 08 — GDPR */}
          <PolicySection id="gdpr" number="08" title="Your Rights Under GDPR">
            <p className="text-white/60 leading-relaxed mb-6">
              Users may exercise certain rights regarding their Data processed by Caliber. In particular, Users have the right to:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                ['Withdraw Consent', 'Withdraw consent at any time where you previously gave consent to the processing of your Personal Data.'],
                ['Object to Processing', 'Object to processing carried out on a legal basis other than consent, including direct marketing.'],
                ['Access Your Data', 'Learn if your Data is being processed, and obtain a copy of the Data undergoing processing.'],
                ['Rectification', 'Verify the accuracy of your Data and ask for it to be updated or corrected.'],
                ['Restrict Processing', 'Request that Caliber restrict processing to storage only while your request is evaluated.'],
                ['Erasure', "Request deletion of your Personal Data from Caliber's systems."],
                ['Data Portability', 'Receive your Data in a structured, machine-readable format and have it transferred to another controller.'],
                ['Lodge a Complaint', 'Bring a claim before your competent data protection authority.'],
              ].map(([name, desc]) => (
                <div key={name} className="border border-white/10 rounded-sm p-4">
                  <p className="text-white font-bold text-xs uppercase tracking-wider mb-2">{name}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
            <SubHeading>How to Exercise These Rights</SubHeading>
            <p className="text-white/60 leading-relaxed mb-6">
              Requests to exercise User rights can be directed to Caliber through the contact details provided at the end of this document. Such requests are free of charge and will be answered as early as possible and always within one month, providing Users with the information required by law.
            </p>
            <SubHeading>Legal Basis of Processing</SubHeading>
            <p className="text-white/60 leading-relaxed mb-4">Caliber may process Personal Data when one of the following applies:</p>
            <BulletList items={[
              'The User has given their consent for one or more specific purposes.',
              'Provision of Data is necessary for the performance of an agreement with the User.',
              'Processing is necessary for compliance with a legal obligation.',
              'Processing is related to a task carried out in the public interest or exercise of official authority.',
              'Processing is necessary for the legitimate interests pursued by Caliber or a third party.',
            ]} />
          </PolicySection>

          {/* 09 — US RIGHTS */}
          <PolicySection id="us-rights" number="09" title="Your Rights Under US State Laws">
            <p className="text-white/60 leading-relaxed mb-4">
              This section supplements the rest of this privacy policy for Users who are residents of the following states:
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {['California','Virginia','Colorado','Connecticut','Utah','Texas','Oregon','Nevada','Delaware','Iowa','New Hampshire','New Jersey','Nebraska','Tennessee','Minnesota','Maryland','Indiana','Kentucky','Rhode Island','Montana'].map((state) => (
                <span key={state} className="inline-block border border-white/10 text-white/50 text-xs px-3 py-1 rounded-sm">
                  {state}
                </span>
              ))}
            </div>

            <SubHeading>Categories of Personal Information Collected</SubHeading>
            <BulletList items={[
              'Internet or other electronic network activity information',
              'Identifiers',
              'Geolocation data',
              'Inferences drawn from other personal information',
              'Commercial information',
              'Employment-related information',
              'Audio, electronic, visual, thermal, olfactory, or similar information',
            ]} />

            <SubHeading>Rights Common to All US State Residents</SubHeading>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                ['Right to Know', 'Request confirmation that we are processing your Personal Information and access a copy of it.'],
                ['Right to Correct', 'Request correction of inaccurate Personal Information we maintain about you.'],
                ['Right to Delete', 'Request deletion of any of your Personal Information.'],
                ['Right to Portability', 'Receive your Personal Information in a portable, usable format.'],
                ['Right to Opt Out of Sale', 'Opt out of the sale of your Personal Information.'],
                ['Non-Discrimination', 'We will not discriminate against you for exercising any of your privacy rights.'],
              ].map(([name, desc]) => (
                <div key={name} className="border border-white/10 rounded-sm p-4">
                  <p className="text-white font-bold text-xs uppercase tracking-wider mb-2">{name}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>

            <SubHeading>Additional Rights — California Residents</SubHeading>
            <BulletList items={[
              'The right to opt out of the Sharing of your Personal Information for cross-context behavioral advertising.',
              'The right to limit our use or disclosure of your Sensitive Personal Information to only that necessary to perform services or provide goods, as reasonably expected by an average consumer.',
            ]} />

            <SubHeading>Additional Rights — Virginia, Colorado, Connecticut, Texas, Oregon, Nevada, Delaware, Iowa, New Hampshire, New Jersey, Nebraska, Tennessee, Minnesota, Maryland, Indiana, Kentucky, Rhode Island, and Montana</SubHeading>
            <BulletList items={[
              'The right to opt out of the processing of your personal information for Targeted Advertising or profiling in furtherance of decisions that produce legal or similarly significant effects.',
              'The right to freely give, deny, or withdraw your consent for the processing of your Sensitive Personal Information.',
              'In Minnesota and Maryland: the right to obtain a list of the specific third parties to which we have disclosed your personal data.',
            ]} />

            <SubHeading>Additional Rights — Utah and Iowa Residents</SubHeading>
            <BulletList items={[
              'The right to opt out of the processing of your Personal Information for Targeted Advertising.',
              'The right to opt out of the processing of your Sensitive Personal Information.',
            ]} />

            <SubHeading>Minnesota-Specific Profiling Rights</SubHeading>
            <BulletList items={[
              'The right to question the results of profiling.',
              'The right to be informed of the reason a profiling decision was reached.',
              'The right to be informed of actions that may secure a different decision in the future.',
              'The right to review personal data used in profiling and, if inaccurate, have it corrected and the decision reevaluated.',
            ]} />

            <HighlightBox title="How to Submit a US Privacy Request">
              Contact us using the information at the bottom of this page. We must be able to verify your identity before processing your request. If you are an adult, you may make a request on behalf of a child under your parental authority. We will respond within the timeframe required by applicable law.
            </HighlightBox>

            <SubHeading>Global Privacy Control (GPC)</SubHeading>
            <p className="text-white/60 leading-relaxed">
              If you wish to submit requests to opt out of Sale, Sharing, or Targeted Advertising via a user-enabled global privacy control such as the Global Privacy Control (GPC), you are free to do so and Caliber will abide by such requests in a frictionless manner.
            </p>
          </PolicySection>

          {/* ── Contact Box ── */}
          <div id="contact" className="border border-white/10 rounded-sm p-8 md:p-12 mt-4 mb-16">
            <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium mb-3">Section 10</p>
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
              Requests to exercise your rights are free of charge and will be answered within one month.
            </p>
          </div>

          {/* ── Page Footer ── */}
          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/30 text-sm mb-2">© {new Date().getFullYear()} CLBR (clbr.com) — All rights reserved.</p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <Link href="/terms-and-conditions" className="text-white/30 hover:text-white/60 transition-colors">Terms &amp; Conditions</Link>
              <span className="text-white/10">·</span>
              <Link href="/privacy-policy" className="text-white/30 hover:text-white/60 transition-colors">Privacy Policy</Link>
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
