export type LegalSection = { heading: string; body?: string[]; items?: string[]; after?: string[] }
export type LegalDoc = { title: string; updated: string; intro: string; sections: LegalSection[] }

const UPDATED = '11 October 2026'
const EMAIL = 'odylytics@gmail.com'

// TODO(content): have these documents reviewed by a qualified lawyer and add the registered legal entity name and address before relying on them.

export const PRIVACY: LegalDoc = {
  title: 'Privacy Policy',
  updated: UPDATED,
  intro: `This policy explains what personal data Odylytics ("Odylytics", "we", "us") collects through this website, why we collect it, who we share it with, how long we keep it and the rights you have. We keep data collection to the minimum needed to run the site and to reply to you.`,
  sections: [
    {
      heading: 'Who we are',
      body: [
        'Odylytics is a team of student founders in Ho Chi Minh City, Vietnam, that takes digital solutions built by students to market. We are the controller of the personal data described in this policy.',
        `You can reach us about anything in this policy at ${EMAIL}.`,
      ],
    },
    {
      heading: 'What data we collect',
      body: ['We collect data in four ways.'],
      items: [
        'Data you send us. When you use the contact form, your email app opens with a message addressed to us. We receive only what you choose to send, normally your name, email address, organisation and message. The form itself does not store anything on our servers.',
        'Member account data. If you are an invited member, we process your email address, a securely hashed password, your sign-in sessions and the content you create or edit in the member dashboard (for example news posts and testimonials).',
        'Technical data collected automatically. Our hosting provider records standard request logs such as IP address, browser and device type, pages requested, referrer and timestamps. This is used to deliver the site, keep it secure and diagnose faults.',
        'Preferences stored in your browser. We save your chosen theme (light or dark) and language in your browser. These stay on your device and are not sent to us.',
      ],
      after: ['We do not ask for payment details, government identifiers or other sensitive categories of data through this website, and we ask that you do not send them to us.'],
    },
    {
      heading: 'Why we use your data and our legal bases',
      items: [
        'To reply to partnership, pilot, press and general enquiries (your consent when you contact us, and our legitimate interest in running the organisation).',
        'To operate member accounts and let members manage site content (performance of our arrangement with the member).',
        'To host the site, keep it secure, prevent abuse and fix errors (our legitimate interest in a safe, working website).',
        'To remember your theme and language (your choice, stored on your device).',
        'To meet legal obligations that apply to us.',
      ],
      after: ['We do not use your data for advertising, we do not build advertising profiles and we do not sell personal data.'],
    },
    {
      heading: 'Analytics and cookies',
      body: [
        'At the time of writing we do not use analytics or advertising cookies. If we add analytics in the future we will update this policy and, where the law requires, ask for your consent first.',
        'Details of the browser storage and third-party requests the site uses are in our Cookie Policy.',
      ],
    },
    {
      heading: 'Who we share data with',
      body: ['We share personal data only with service providers that help us run the site, and only as far as needed for that purpose:'],
      items: [
        'Vercel Inc., which hosts and delivers this website and keeps the request logs described above.',
        'Supabase, which provides member sign-in and stores member-managed content.',
        'Google Fonts, which serves the typefaces used on the site. Your browser requests font files from Google, so Google receives your IP address and browser details.',
        'Your own email provider, when you send us a message.',
        'Professional advisers, public authorities and courts where we are legally required to or need to protect our legal rights.',
      ],
      after: ['These providers act on our instructions or under their own privacy terms. We do not allow them to use your data for their own marketing through us.'],
    },
    {
      heading: 'International transfers',
      body: [
        'Our providers operate data centres in several countries, so your data may be processed outside Vietnam and outside your own country. Where we transfer personal data internationally we rely on the safeguards the law requires, such as contractual protections offered by the provider, and we take reasonable steps to make sure the data keeps an equivalent level of protection.',
      ],
    },
    {
      heading: 'How long we keep data',
      items: [
        'Enquiry emails: kept for as long as needed to answer you and keep a record of the conversation, normally up to 24 months after the last message, unless a longer period is needed for a continuing partnership or a legal reason.',
        'Member accounts and member-created content: kept while the account is active. When an account is closed we delete or anonymise its personal data within 90 days, except content that has been published as part of the public site, which we may keep with the member’s name removed on request.',
        'Hosting request logs: kept by our hosting provider for a short period, typically no more than 30 days, unless needed to investigate abuse or a security incident.',
        'Browser preferences: remain on your device until you clear them.',
      ],
    },
    {
      heading: 'How we protect data',
      body: [
        'We use encrypted connections (HTTPS) on the site, store passwords only in hashed form, restrict write access to authenticated members through database access rules, and limit which team members can reach enquiry emails and member data. No system is completely secure. If a breach affecting your personal data occurs, we will notify you and the relevant authority as the law requires.',
      ],
    },
    {
      heading: 'Your rights',
      body: ['Depending on where you live and the law that applies, you can ask us to:'],
      items: [
        'confirm whether we hold personal data about you and give you a copy;',
        'correct data that is inaccurate or incomplete;',
        'delete your data, or restrict how we use it;',
        'stop using your data where we rely on legitimate interest, and withdraw consent you gave us at any time;',
        'provide your data in a portable format;',
        'lodge a complaint with the data protection authority in your country.',
      ],
      after: [
        `To use any of these rights email ${EMAIL}. We may need to confirm your identity first, and we aim to reply within 30 days. Where Vietnamese law applies, including Decree 13/2023/ND-CP on personal data protection and the Law on Personal Data Protection, these rights are provided as that law sets them out. Where the EU or UK GDPR applies to you, the rights above apply as set out in those laws.`,
      ],
    },
    {
      heading: 'Children',
      body: ['This website is aimed at partners, institutions, students and the general public. It is not directed at children under 16, and we do not knowingly collect their personal data. If you believe a child has sent us personal data, contact us and we will delete it.'],
    },
    {
      heading: 'Links to other sites',
      body: ['The site links to news articles, partner websites and social profiles such as LinkedIn. Those sites have their own privacy practices, and this policy does not cover them.'],
    },
    {
      heading: 'Changes to this policy',
      body: ['We may update this policy when our practices or the law change. The date at the top shows when it was last revised. If a change is significant we will highlight it on the site before it takes effect.'],
    },
    {
      heading: 'Contact',
      body: [`Questions, requests or complaints about privacy: ${EMAIL}.`],
    },
  ],
}

export const TERMS: LegalDoc = {
  title: 'Terms of Use',
  updated: UPDATED,
  intro: `These terms govern your use of the Odylytics website and the member dashboard ("the Site"). By using the Site you agree to them. If you do not agree, please do not use the Site.`,
  sections: [
    {
      heading: 'About the Site',
      body: [
        'The Site presents Odylytics, our digital solutions, our team, our prizes and our news. It is provided for general information. Nothing on the Site is a binding offer, professional advice or a promise that a product is available in your location.',
      ],
    },
    {
      heading: 'Eligibility and your responsibilities',
      items: [
        'You must be able to form a binding agreement under the law that applies to you to use any part of the Site that involves an account.',
        'You agree to provide accurate information when you contact us.',
        'You are responsible for your own device, connection and any costs of accessing the Site.',
      ],
    },
    {
      heading: 'Acceptable use',
      body: ['You agree not to:'],
      items: [
        'break the law or infringe anyone’s rights while using the Site;',
        'attempt to gain unauthorised access to the Site, its servers, member accounts or data;',
        'introduce malware, scrape the Site at a rate that harms its performance, or interfere with how it works;',
        'use the Site to send spam, harass others or impersonate any person or organisation;',
        'copy, reverse engineer or resell any part of the Site except as the law permits.',
      ],
    },
    {
      heading: 'Member accounts',
      body: ['Accounts are issued by invitation to members of the Odylytics team and approved collaborators.'],
      items: [
        'Keep your password confidential and tell us immediately if you suspect it has been compromised. You are responsible for activity under your account.',
        'Members may create and edit content such as news posts and testimonials. You must have the right to publish everything you add, including photos, quotes and links, and you must have obtained consent from anyone quoted or shown.',
        'Content you publish must be accurate, lawful and not misleading. Testimonials must be real, attributed with permission and must not be altered in a way that changes their meaning.',
        'We may edit, unpublish or delete content, and suspend or close an account, at any time if we believe these terms or the law have been breached or to protect the Site.',
      ],
    },
    {
      heading: 'Intellectual property',
      body: [
        'The Site’s design, text, graphics, software, the Odylytics name and logo, and the names and logos of our solutions (AquaGuard, EnableCode, AirGuard, Includio, RooMie and HearWork) belong to Odylytics or its licensors and are protected by intellectual property law.',
        'Names and logos of partners, universities, competition organisers and news publishers belong to their respective owners. They appear here only to identify those organisations and do not imply endorsement beyond the facts stated.',
        'You may view the Site and share links to it. You may quote short extracts with attribution. Any other use of our materials, including commercial use of our branding, needs our written permission.',
        'Content that members publish remains owned by whoever owns it, but by publishing it on the Site the member grants Odylytics a non-exclusive, worldwide, royalty-free licence to host, display and promote it as part of the Site.',
      ],
    },
    {
      heading: 'Products, prizes and press coverage',
      body: [
        'Some of our solutions are prototypes or in pilot stage. Descriptions, features, metrics and availability may change, and statements on the Site about what a product does reflect its intended behaviour rather than a guarantee of performance in every situation.',
        'Prizes, rankings and press coverage are reported in good faith and credited to the organisers and publishers. If you believe something is inaccurate, tell us and we will review it promptly.',
        'Our safety-related products, such as flood coordination tools, support human decision-making and do not replace official warnings, emergency services or professional judgement. In an emergency, contact your local emergency services.',
      ],
    },
    {
      heading: 'Third-party links and services',
      body: ['The Site links to third-party websites and relies on third-party services for hosting, sign-in and fonts. We do not control them and are not responsible for their content, availability or practices.'],
    },
    {
      heading: 'Disclaimers',
      body: [
        'The Site is provided "as is" and "as available". To the fullest extent the law allows, we do not give any warranty that it will be uninterrupted, error-free or free of harmful components, or that its content is complete or up to date.',
      ],
    },
    {
      heading: 'Limitation of liability',
      body: [
        'To the fullest extent the law allows, Odylytics and its team members are not liable for any indirect, incidental, special or consequential loss, or any loss of profit, data or goodwill, arising from your use of or inability to use the Site or from reliance on its content.',
        'Nothing in these terms limits liability that cannot be limited by law, including liability for death or personal injury caused by negligence, or for fraud.',
      ],
    },
    {
      heading: 'Indemnity',
      body: ['If you are a member, you agree to compensate Odylytics for losses and claims that arise from content you publish in breach of these terms or from your misuse of your account.'],
    },
    {
      heading: 'Suspension and termination',
      body: ['We may change, suspend or discontinue all or part of the Site at any time. You may stop using it at any time. Sections that by their nature should survive termination, such as intellectual property, disclaimers, limitation of liability and governing law, will continue to apply.'],
    },
    {
      heading: 'Governing law and disputes',
      body: [
        'These terms are governed by the laws of Vietnam. We encourage you to contact us first so we can try to resolve any dispute informally. If that fails, the courts of Ho Chi Minh City, Vietnam have jurisdiction, without affecting any mandatory consumer rights you have in your own country.',
      ],
    },
    {
      heading: 'General',
      items: [
        'If any part of these terms is found unenforceable, the rest stays in effect.',
        'Our failure to enforce a term is not a waiver of it.',
        'These terms, together with our Privacy Policy and Cookie Policy, are the whole agreement between you and Odylytics about the Site.',
      ],
    },
    {
      heading: 'Changes to these terms',
      body: ['We may update these terms from time to time. The date at the top shows the latest revision. Using the Site after a change means you accept the updated terms.'],
    },
    {
      heading: 'Contact',
      body: [`Questions about these terms: ${EMAIL}.`],
    },
  ],
}

export const COOKIES: LegalDoc = {
  title: 'Cookie Policy',
  updated: UPDATED,
  intro: 'This policy explains what information the Odylytics website stores in your browser, what third-party requests it makes, and how you can control them.',
  sections: [
    {
      heading: 'What are cookies and local storage',
      body: [
        'Cookies are small files a website places on your device. Local storage is a similar browser feature that lets a site save settings on your device. Both can make a site remember your choices.',
      ],
    },
    {
      heading: 'What this site stores',
      body: ['We do not set advertising, tracking or analytics cookies. The Site stores the following in your browser:'],
      items: [
        'odylytics-theme (local storage): your chosen light or dark theme. Kept until you clear it. Strictly a preference, never sent to us.',
        'odylytics-lang (local storage): your chosen language. Kept until you clear it. Never sent to us.',
        'Member session (local storage): only if you sign in as a member. Our sign-in provider, Supabase, stores a session token so you stay signed in. It is removed when you sign out.',
      ],
      after: ['Because these items only remember choices you make or keep you signed in, they are strictly necessary for features you ask for and do not need a consent banner.'],
    },
    {
      heading: 'Third-party requests',
      items: [
        'Google Fonts: your browser downloads typefaces from Google’s servers, which means Google receives your IP address and browser details. We use it only to display the Site’s fonts.',
        'Vercel: our hosting provider serves the pages and records standard request logs.',
        'Supabase: contacted only when a member signs in or when the Site loads member-managed content such as news posts and testimonials.',
        'LinkedIn and news websites: opened only when you click a link, and governed by their own policies.',
      ],
    },
    {
      heading: 'If we add analytics',
      body: ['If we later add analytics or any non-essential storage, we will update this policy and, where the law requires, ask for your consent before it is used.'],
    },
    {
      heading: 'How to control storage',
      items: [
        'Clear the Site’s stored data in your browser settings, under site data or cookies and site data. This resets your theme and language and signs you out.',
        'Block or restrict third-party requests with your browser’s privacy settings or an extension. The Site still works, but may fall back to your device’s default fonts.',
        'Most browsers have private windows that delete stored data when closed.',
      ],
    },
    {
      heading: 'Contact',
      body: [`Questions about this policy: ${EMAIL}. See also our Privacy Policy.`],
    },
  ],
}
