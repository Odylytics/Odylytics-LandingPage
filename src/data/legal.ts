export type LegalSection = { heading: string; body: string[] }
export type LegalDoc = { title: string; updated: string; intro: string; sections: LegalSection[] }

// TODO(content): generic drafts. Have them reviewed by a lawyer and confirm the legal entity and contact details before launch.

export const PRIVACY: LegalDoc = {
  title: 'Privacy Policy',
  updated: 'Draft',
  intro: 'This policy explains what information Odylytics collects through this website, why we collect it and the choices you have.',
  sections: [
    {
      heading: 'Information we collect',
      body: [
        'Information you give us, such as your name, email address and message when you use the contact form or email us.',
        'Basic technical data, such as browser type, device and approximate location, collected through standard server logs and analytics.',
        'Your theme preference, which is stored in your browser only.',
      ],
    },
    {
      heading: 'How we use it',
      body: [
        'To reply to partnership, pilot and press enquiries.',
        'To keep the website secure and understand which content is useful.',
        'We do not sell your personal information.',
      ],
    },
    {
      heading: 'Cookies and local storage',
      body: [
        'We use local storage to remember your light or dark theme. Any analytics cookies are used only to measure aggregate traffic.',
        'You can clear or block cookies in your browser settings at any time.',
      ],
    },
    {
      heading: 'Sharing and retention',
      body: [
        'We share data only with service providers that host or operate the website, and when required by law.',
        'We keep enquiry messages only as long as needed to respond and maintain a record of the conversation.',
      ],
    },
    {
      heading: 'Your rights',
      body: ['You can ask to access, correct or delete the personal information we hold about you by emailing us.'],
    },
    {
      heading: 'Contact',
      body: ['Questions about this policy can be sent to the email address listed in the Contact section.'],
    },
  ],
}

export const TERMS: LegalDoc = {
  title: 'Terms of Use',
  updated: 'Draft',
  intro: 'By using this website you agree to these terms. If you do not agree, please do not use the site.',
  sections: [
    {
      heading: 'Use of the website',
      body: [
        'The site is provided for information about Odylytics and its solutions. You agree not to misuse it, interfere with its operation or attempt unauthorised access.',
      ],
    },
    {
      heading: 'Intellectual property',
      body: [
        'Text, graphics, logos and product names on this site belong to Odylytics or their respective owners. Partner and issuer logos remain the property of those organisations.',
        'You may share links to the site, but may not copy or reuse our branding without written permission.',
      ],
    },
    {
      heading: 'Product information',
      body: [
        'Some solutions are in pilot or prototype stage. Descriptions, features and results may change and are not a guarantee of performance or availability.',
      ],
    },
    {
      heading: 'Third-party links',
      body: ['We link to news articles and partner sites for convenience. We are not responsible for their content.'],
    },
    {
      heading: 'Limitation of liability',
      body: ['To the extent permitted by law, Odylytics is not liable for losses arising from use of this website or reliance on its content.'],
    },
    {
      heading: 'Changes',
      body: ['We may update these terms from time to time. Continued use of the site means you accept the updated terms.'],
    },
  ],
}
