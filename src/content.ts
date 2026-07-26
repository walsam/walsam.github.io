export type Language = 'en' | 'fr'

export const profile = {
  name: 'Walid Maarad',
  initials: 'WM',
  company: 'Intelcia Software Solutions',
  linkedin: 'https://www.linkedin.com/in/walidmaarad/',
  github: 'https://github.com/walsam',
  email: 'mailto:wmaarad@gmail.com',
}

const shared = {
  tags: {
    backend: ['Java', 'Spring Boot', 'Symfony', 'Laravel', 'Microservices', 'REST', 'SOAP'],
    frontend: ['React', 'Angular', 'JavaScript', 'React Native', 'Flutter', 'Sass'],
    delivery: ['MySQL', 'Oracle', 'SQL Server', 'Docker', 'GitLab', 'Git', 'Jira'],
  },
}

export const translations = {
  en: {
    documentTitle: 'Walid Maarad — Technical Lead',
    documentDescription: 'Walid Maarad — technical lead building public platforms, travel products, and payment journeys.',
    skip: 'Skip to content',
    homeLabel: 'Walid Maarad, home',
    menu: 'Menu',
    close: 'Close',
    themeToDark: 'Switch to dark theme',
    themeToLight: 'Switch to light theme',
    languageLabel: 'Language',
    nav: { about: 'About', journey: 'Journey', projects: 'Projects', toolkit: 'Toolkit', contact: 'Contact' },
    availability: 'Open to meaningful conversations',
    role: 'Technical Lead · Référent',
    location: 'Rabat, Morocco',
    hero: {
      before: 'Technical lead moving comfortably between',
      emphasis: 'architecture, delivery,',
      after: 'and people.',
      explore: 'Explore',
      exploreLabel: 'Explore my work',
      meta: 'Java · React · Leadership',
    },
    about: {
      label: 'About',
      eyebrow: 'A builder at heart',
      titleBefore: 'From writing features to leading',
      titleAccent: 'systems',
      titleAfter: ', teams, and change.',
      paragraphs: [
        'I started as a full-stack engineer delivering public services for Moroccan citizens, then moved through private-sector and travel projects before growing into technical leadership at Intelcia Software Solutions.',
        'Today I lead teams of 5 to 15 people, shape architectures, estimate projects, review merge requests, and stay close enough to the code to solve the difficult parts with the team.',
      ],
    },
    work: {
      label: 'Work',
      eyebrow: 'One company · many contexts',
      title: 'Comfortable with change. Accountable for delivery.',
    },
    careerStages: [
      {
        period: 'Current', client: 'AB · Karavel Group', title: 'Technical Lead · Référent',
        summary: 'Leading the technical direction of cruise products, from the public storefront to B2C and B2B booking and payment journeys.',
        details: [
          'Integrated Monext and FLOA payment solutions for full, 3x, and 4x payment options.',
          'Owns architecture decisions, merge-request reviews, delivery estimates, and technical coordination.',
          'Works across customer-facing journeys where reliability, security, and conversion all matter.',
        ],
        tags: ['Spring Boot', 'React', 'Payments', 'REST', 'SOAP'],
      },
      {
        period: 'From May 2023', client: 'Karavel', title: 'Technical Lead',
        summary: 'Progressed from full-stack delivery to leading multiple tourism and holiday-platform initiatives.',
        details: [
          'Led teams ranging from 5 to 15 engineers across concurrent projects.',
          'Handled project estimation, quotations, architecture, code reviews, and delivery planning.',
          'Modernized Promovacances, Promocroisière, and FRAM applications while protecting existing business functionality.',
        ],
        tags: ['Java', 'Spring Boot', 'React', 'Architecture', 'Leadership'],
      },
      {
        period: 'Jan 2021 — Apr 2023', client: 'Public & private sector', title: 'Software Engineer',
        summary: 'Delivered web and mobile platforms for national services, ministries, public entities, and private-sector clients.',
        details: [
          'Contributed to ADD public portals including Watiqa, Chikaya, and Mawiidi.',
          'Built a mobile application for the Ministry of Justice.',
          'Contributed to other platforms for TMSA, Tanger Med West, MCJS, and additional public entities.',
          'Later delivered solutions in private-client contexts including RADEES and inwi.',
        ],
        tags: ['Spring', 'Symfony', 'Laravel', 'Angular', 'React Native'],
      },
    ],
    projectsSection: {
      label: 'Selected work', eyebrow: 'Platforms with real users',
      title: 'Across public service, travel, and payments.',
      note: 'Some work is covered by client confidentiality. Descriptions focus on public context, responsibilities, and technologies.',
    },
    projects: [
      { index: '01', category: 'Travel · Commerce', title: 'Cruise booking & payment', client: 'AB · Promocroisière', copy: 'Customer and business booking tunnels with payment-in-full and instalment options, integrated with Monext and FLOA.', tags: ['B2C / B2B', 'Monext', 'FLOA', '3x / 4x payments'] },
      { index: '02', category: 'Travel · Modernisation', title: 'Promovacances · FRAM · Promocroisière', client: 'Karavel', copy: 'Modernisation of high-traffic tourism platforms without losing the mature features and dependencies behind them.', tags: ['Spring Boot', 'React', 'Sass', 'REST / SOAP'] },
      { index: '03', category: 'GovTech · Mobile', title: 'Criminal-record mobile service', client: 'Ministry of Justice', copy: 'A mobile service enabling citizens to request an official criminal-record extract online from Moroccan courts.', tags: ['React Native', 'Java', 'Swift'] },
      { index: '04', category: 'GovTech · Platforms', title: 'Citizen-facing public services', client: 'ADD & public entities', copy: 'Contributions across Watiqa, Chikaya, Mawiidi, e-procurement, auto-entrepreneur, and other institutional platforms.', tags: ['Symfony', 'Angular', 'Flowable', 'MySQL'] },
    ],
    toolkit: {
      label: 'Toolkit', eyebrow: 'Depth and range', title: 'Technical enough to build. Broad enough to lead.',
      leadershipLabel: 'Leadership scope', educationLabel: 'Education',
      educationTitle: 'Built on a strong systems foundation.', communityLabel: 'Community',
    },
    principles: [
      { number: '01', title: 'Make complexity feel calm.', copy: 'I like systems that are rigorous underneath and simple where people touch them.' },
      { number: '02', title: 'Build for the real world.', copy: 'Useful software survives changing requirements, imperfect data, and the pressure of production.' },
      { number: '03', title: 'Care past the handoff.', copy: 'Quality is not a final polish. It shapes how a product is designed, shipped, and maintained.' },
    ],
    capabilities: ['Architecture', 'Team leadership', 'Project estimation', 'Merge-request reviews', 'Client communication', 'Payment integrations'],
    skillGroups: [
      { label: 'Backend', items: shared.tags.backend },
      { label: 'Frontend & mobile', items: shared.tags.frontend },
      { label: 'Data & delivery', items: shared.tags.delivery },
      { label: 'Methods', items: ['Scrum', 'XP', 'UML', 'Merise', 'Architecture', 'Code review'] },
    ],
    education: [
      { year: '2018 — 2020', degree: 'Specialized Master’s · Information Systems Engineering', school: 'Faculty of Sciences Semlalia · Cadi Ayyad University, Marrakech' },
      { year: '2017 — 2018', degree: 'Professional Bachelor’s · Computer Science', school: 'École Supérieure de Technologie · Mohammed I University, Oujda' },
      { year: '2015 — 2017', degree: 'DUT · Software Application Development', school: 'École Supérieure de Technologie · Mohammed I University, Oujda' },
    ],
    community: [
      { name: 'ForLoop Africa', role: 'Co-organizer', period: '2018 — 2022' },
      { name: 'Enactus', role: 'Member', period: '2015 — 2018' },
    ],
    contact: {
      orbit: 'LET’S TALK · LET’S BUILD · LET’S TALK ·', eyebrow: 'The next good conversation',
      titleBefore: 'Have something', titleAccent: 'interesting', titleAfter: 'in mind?',
      copy: 'Tell me about the problem you’re trying to solve, the team you’re building, or simply say hello.',
      linkedin: 'Connect on LinkedIn', email: 'Email me',
    },
    footer: { statementOne: 'Thoughtful engineering.', statementTwo: 'Dependable products.', backToTop: 'Back to top ↑' },
  },
  fr: {
    documentTitle: 'Walid Maarad — Lead technique',
    documentDescription: 'Walid Maarad — lead technique spécialisé dans les plateformes publiques, les produits touristiques et les parcours de paiement.',
    skip: 'Aller au contenu',
    homeLabel: 'Walid Maarad, accueil',
    menu: 'Menu',
    close: 'Fermer',
    themeToDark: 'Passer au thème sombre',
    themeToLight: 'Passer au thème clair',
    languageLabel: 'Langue',
    nav: { about: 'À propos', journey: 'Parcours', projects: 'Projets', toolkit: 'Compétences', contact: 'Contact' },
    availability: 'Ouvert aux échanges qui ont du sens',
    role: 'Lead technique · Référent',
    location: 'Rabat, Maroc',
    hero: {
      before: 'Lead technique, à l’aise entre',
      emphasis: 'architecture, livraison',
      after: 'et humain.',
      explore: 'Explorer',
      exploreLabel: 'Découvrir mon parcours',
      meta: 'Java · React · Leadership',
    },
    about: {
      label: 'À propos', eyebrow: 'Bâtisseur dans l’âme',
      titleBefore: 'Du développement de fonctionnalités au pilotage de', titleAccent: 'systèmes', titleAfter: ', d’équipes et du changement.',
      paragraphs: [
        'J’ai commencé comme développeur full-stack sur des services publics destinés aux citoyens marocains, avant d’évoluer dans des contextes privés et touristiques, puis vers le leadership technique chez Intelcia Software Solutions.',
        'Aujourd’hui, j’encadre des équipes de 5 à 15 personnes, je conçois des architectures, réalise les chiffrages, relis les merge requests et reste suffisamment proche du code pour résoudre les sujets complexes avec l’équipe.',
      ],
    },
    work: { label: 'Parcours', eyebrow: 'Une entreprise · plusieurs contextes', title: 'À l’aise avec le changement. Responsable de la livraison.' },
    careerStages: [
      {
        period: 'Aujourd’hui', client: 'AB · Groupe Karavel', title: 'Lead technique · Référent',
        summary: 'Pilotage technique des produits croisière, de la vitrine aux parcours de réservation et de paiement B2C et B2B.',
        details: [
          'Intégration des solutions de paiement Monext et FLOA pour les règlements en totalité, en 3x et en 4x.',
          'Responsable des choix d’architecture, des revues de merge requests, des chiffrages et de la coordination technique.',
          'Intervention sur des parcours clients où la fiabilité, la sécurité et la conversion sont essentielles.',
        ],
        tags: ['Spring Boot', 'React', 'Paiement', 'REST', 'SOAP'],
      },
      {
        period: 'Depuis mai 2023', client: 'Karavel', title: 'Lead technique',
        summary: 'Évolution du développement full-stack vers le pilotage de plusieurs projets dans le tourisme et le séjour.',
        details: [
          'Encadrement d’équipes de 5 à 15 ingénieurs sur plusieurs projets menés en parallèle.',
          'Prise en charge des chiffrages, devis, architectures, revues de code et plans de livraison.',
          'Modernisation des applications Promovacances, Promocroisière et FRAM en préservant leurs fonctionnalités métier existantes.',
        ],
        tags: ['Java', 'Spring Boot', 'React', 'Architecture', 'Leadership'],
      },
      {
        period: 'Janv. 2021 — avr. 2023', client: 'Secteurs public & privé', title: 'Ingénieur logiciel',
        summary: 'Conception de plateformes web et mobiles pour des services nationaux, ministères, organismes publics et clients privés.',
        details: [
          'Contribution aux portails publics de l’ADD, notamment Watiqa, Chikaya et Mawiidi.',
          'Développement d’une application mobile pour le ministère de la Justice.',
          'Contribution à d’autres plateformes pour TMSA, Tanger Med West, MCJS et d’autres organismes publics.',
          'Réalisation ultérieure de solutions pour des clients privés, dont RADEES et inwi.',
        ],
        tags: ['Spring', 'Symfony', 'Laravel', 'Angular', 'React Native'],
      },
    ],
    projectsSection: {
      label: 'Réalisations', eyebrow: 'Des plateformes pour de vrais utilisateurs', title: 'Service public, tourisme et paiement.',
      note: 'Certains travaux sont soumis à la confidentialité client. Les descriptions se limitent au contexte public, aux responsabilités et aux technologies.',
    },
    projects: [
      { index: '01', category: 'Tourisme · Commerce', title: 'Réservation & paiement croisière', client: 'AB · Promocroisière', copy: 'Parcours de réservation pour particuliers et professionnels, avec paiement en totalité ou en plusieurs fois via Monext et FLOA.', tags: ['B2C / B2B', 'Monext', 'FLOA', 'Paiement 3x / 4x'] },
      { index: '02', category: 'Tourisme · Modernisation', title: 'Promovacances · FRAM · Promocroisière', client: 'Karavel', copy: 'Modernisation de plateformes touristiques à fort trafic, sans perdre les fonctionnalités métier et dépendances déjà en place.', tags: ['Spring Boot', 'React', 'Sass', 'REST / SOAP'] },
      { index: '03', category: 'GovTech · Mobile', title: 'Application mobile Casier judiciaire', client: 'Ministère de la Justice', copy: 'Un service mobile permettant aux citoyens de demander en ligne un extrait officiel du casier judiciaire auprès des tribunaux marocains.', tags: ['React Native', 'Java', 'Swift'] },
      { index: '04', category: 'GovTech · Plateformes', title: 'Services publics numériques', client: 'ADD & organismes publics', copy: 'Contributions à Watiqa, Chikaya, Mawiidi, l’e-procurement, l’auto-entrepreneur et d’autres plateformes institutionnelles.', tags: ['Symfony', 'Angular', 'Flowable', 'MySQL'] },
    ],
    toolkit: {
      label: 'Compétences', eyebrow: 'Expertise et polyvalence', title: 'Assez technique pour construire. Assez transversal pour piloter.',
      leadershipLabel: 'Périmètre de leadership', educationLabel: 'Formation', educationTitle: 'Une solide base en ingénierie des systèmes.', communityLabel: 'Communauté',
    },
    principles: [
      { number: '01', title: 'Rendre la complexité fluide.', copy: 'J’apprécie les systèmes rigoureux en profondeur et simples là où les utilisateurs les rencontrent.' },
      { number: '02', title: 'Construire pour le réel.', copy: 'Un logiciel utile résiste aux exigences changeantes, aux données imparfaites et à la pression de la production.' },
      { number: '03', title: 'S’investir au-delà de la livraison.', copy: 'La qualité n’est pas une finition. Elle guide la conception, la livraison et la maintenance du produit.' },
    ],
    capabilities: ['Architecture', 'Encadrement d’équipe', 'Chiffrage de projets', 'Revues de merge requests', 'Communication client', 'Intégrations de paiement'],
    skillGroups: [
      { label: 'Backend', items: shared.tags.backend },
      { label: 'Frontend & mobile', items: shared.tags.frontend },
      { label: 'Données & livraison', items: shared.tags.delivery },
      { label: 'Méthodes', items: ['Scrum', 'XP', 'UML', 'Merise', 'Architecture', 'Revue de code'] },
    ],
    education: [
      { year: '2018 — 2020', degree: 'Master spécialisé · Ingénierie des systèmes d’information', school: 'Faculté des Sciences Semlalia · Université Cadi Ayyad, Marrakech' },
      { year: '2017 — 2018', degree: 'Licence professionnelle · Informatique', school: 'École Supérieure de Technologie · Université Mohammed Ier, Oujda' },
      { year: '2015 — 2017', degree: 'DUT · Développement d’applications informatiques', school: 'École Supérieure de Technologie · Université Mohammed Ier, Oujda' },
    ],
    community: [
      { name: 'ForLoop Africa', role: 'Co-organisateur', period: '2018 — 2022' },
      { name: 'Enactus', role: 'Membre', period: '2015 — 2018' },
    ],
    contact: {
      orbit: 'ÉCHANGEONS · CONSTRUISONS · ÉCHANGEONS ·', eyebrow: 'La prochaine bonne conversation',
      titleBefore: 'Vous avez quelque chose', titleAccent: 'd’intéressant', titleAfter: 'en tête ?',
      copy: 'Parlez-moi du problème que vous souhaitez résoudre, de l’équipe que vous construisez, ou dites-moi simplement bonjour.',
      linkedin: 'Me contacter sur LinkedIn', email: 'M’écrire',
    },
    footer: { statementOne: 'Une ingénierie réfléchie.', statementTwo: 'Des produits fiables.', backToTop: 'Retour en haut ↑' },
  },
} as const
