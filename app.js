const ASSETS = {
  logo: 'fac-logo.png',
  campus: 'campus-library-building.jpg',
  library: 'library-exhibition.jpg',
  event: 'academic-event.jpg',
  inauguration: 'campus-inauguration.jpg',
  students: 'student-library.jpg',
  meritPdf: 'bca-merit-list-2025-26.pdf'
};

const data = {
  stats: [
    { value: 1979, label: 'year of establishment', note: 'verify before publishing' },
    { value: 3, label: 'core UG programmes shown', note: 'BA · B.Com · BCA NEP' },
    { value: 12, label: 'major portals organised', note: 'student-facing sections' },
    { value: 100, suffix: '+', label: 'editable impact indicators', note: 'replace with official data' }
  ],
  quick: [
    ['Admissions', 'Apply, eligibility, documents', 'admissions', 'A'],
    ['Academics', 'Courses and departments', 'academics', 'C'],
    ['Notices', 'Exams, admissions, events', 'notices', 'N'],
    ['Prospectus', 'Forms and downloads', 'downloads', 'P'],
    ['Placements', 'Career cell and recruiters', 'placements', '↗'],
    ['Faculty', 'Search academic profiles', 'faculty', 'F'],
    ['Support', 'Counselling, ICC, scholarships', 'student-support', 'S'],
    ['Contact', 'Office, address, enquiry', 'contact', '☎']
  ],
  courses: [
    {
      id: 'bcom', code: 'B.Com', title: 'Bachelor of Commerce (NEP)', department: 'Commerce', duration: '3 / 4 years as per NEP structure', eligibility: 'Class XII or equivalent as per Goa University / college admission rules.', overview: 'A commerce programme built around accounting, finance, management, business law, taxation and employability skills.', outcomes: ['Accounting and audit readiness', 'Business and entrepreneurship foundations', 'Banking, finance and taxation pathways'], downloads: 'BCOM Syllabus'
    },
    {
      id: 'ba', code: 'B.A.', title: 'Bachelor of Arts (NEP)', department: 'Arts', duration: '3 / 4 years as per NEP structure', eligibility: 'Class XII or equivalent as per official admission norms.', overview: 'A humanities pathway for students interested in language, society, culture, public service, education and research.', outcomes: ['Writing, critical thinking and communication', 'Civil services and public policy foundations', 'Teaching, media and research pathways'], downloads: 'BA Syllabus'
    },
    {
      id: 'bca', code: 'BCA', title: 'Bachelor of Computer Applications (NEP)', department: 'Computer Applications', duration: '3 / 4 years as per NEP structure', eligibility: 'Class XII or equivalent; verify current entrance / merit requirements before publishing.', overview: 'A technology-focused programme for students preparing for software, data, systems and digital careers.', outcomes: ['Programming and web development', 'Database and systems foundations', 'Internship-ready digital portfolio'], downloads: 'BCA Syllabus'
    },
    {
      id: 'phd-commerce', code: 'Ph.D', title: 'Ph.D. in Commerce', department: 'Research', duration: 'As per university research framework', eligibility: 'As per Goa University / research admission rules.', overview: 'A research track for advanced inquiry in commerce, finance, management and related disciplines.', outcomes: ['Research publication pathways', 'Seminar and conference output', 'Academic mentorship'], downloads: 'Research Guidelines'
    },
    {
      id: 'skill-certification', code: 'Skill', title: 'Skill & Certification Programmes', department: 'Add-on Learning', duration: 'Short-term / modular', eligibility: 'Open to eligible students as notified.', overview: 'Certificate and skill-building modules that strengthen employability, digital literacy and practical readiness.', outcomes: ['Value-added certificates', 'Hands-on workshops', 'Portfolio development'], downloads: 'Certificate Course Details'
    }
  ],
  notices: [
    { date: '2026-06-23', category: 'Admissions', title: 'Admissions 2026–27 information desk', summary: 'Central space for eligibility, application portal, counselling support and merit-list updates.', link: '#/admissions' },
    { date: '2026-06-22', category: 'Admissions', title: 'BCA Merit List / Wait List 2025–26', summary: 'Uploaded PDF sample attached for the prototype download centre.', link: ASSETS.meritPdf },
    { date: '2026-06-18', category: 'Exams', title: 'Exams and results notice area', summary: 'Dedicated category for exam timetables, results and official academic notices.', link: '#/notices' },
    { date: '2026-06-12', category: 'Events', title: 'International Yoga Day campus activity', summary: 'Structured event card for photo stories, reports and gallery documentation.', link: '#/events' },
    { date: '2026-05-30', category: 'General', title: 'Vacancies and institutional updates', summary: 'Employment and administrative updates placed outside the social-media feed.', link: '#/notices' },
    { date: '2026-04-25', category: 'Placements', title: 'Placement cell registration window', summary: 'Students can register interest for internships, training and recruiter interactions.', link: '#/placements' },
    { date: '2026-03-14', category: 'Scholarships', title: 'Scholarship support checklist', summary: 'Documents, eligibility and assistance desk for eligible students.', link: '#/student-support' },
    { date: '2026-02-09', category: 'Cultural', title: 'Campus cultural documentation drive', summary: 'Events can be preserved as permanent stories with dates, categories and galleries.', link: '#/campus-life' }
  ],
  faculty: [
    { name: 'Prof. (Dr.) Annie Rajan', dept: 'Administration', role: 'Principal', qual: 'Ph.D.', email: 'principal@fragnelcollege.edu.in', interests: 'Academic leadership, institutional development, student mentoring', publications: 'Profile page placeholder' },
    { name: 'Dr. Frederick U. R. Rodrigues', dept: 'Administration', role: 'Offg. Principal / Academic leadership archive', qual: 'Ph.D.', email: 'office@fragnelcollege.edu.in', interests: 'Institutional administration, student development', publications: 'Profile page placeholder' },
    { name: 'Commerce Faculty Profile', dept: 'Commerce', role: 'Assistant Professor', qual: 'M.Com / NET / Ph.D. placeholder', email: 'commerce@fragnelcollege.edu.in', interests: 'Finance, accounting, taxation, research methods', publications: 'Add publications link' },
    { name: 'Arts Faculty Profile', dept: 'Arts', role: 'Assistant Professor', qual: 'M.A. / NET / Ph.D. placeholder', email: 'arts@fragnelcollege.edu.in', interests: 'Language, society, literature, cultural studies', publications: 'Add publications link' },
    { name: 'BCA Faculty Profile', dept: 'Computer Applications', role: 'Assistant Professor', qual: 'MCA / M.Tech / Ph.D. placeholder', email: 'bca@fragnelcollege.edu.in', interests: 'Programming, databases, web technology, AI literacy', publications: 'Add publications link' },
    { name: 'Library Coordinator', dept: 'Library', role: 'Librarian', qual: 'MLISc placeholder', email: 'library@fragnelcollege.edu.in', interests: 'Information literacy, repositories, library of things', publications: 'Library portal link' }
  ],
  events: [
    { date: '2026-06-23', title: 'Admissions Support Desk', category: 'Admissions', place: 'College Office', summary: 'Guidance counter for students and parents.' },
    { date: '2026-07-02', title: 'Orientation Week', category: 'Academic', place: 'Seminar Hall', summary: 'Bridge programme, campus introduction and mentoring.' },
    { date: '2026-07-12', title: 'NCC Naval Wing Briefing', category: 'NCC', place: 'Campus Grounds', summary: 'Leadership, discipline and defence-career guidance.' },
    { date: '2026-07-18', title: 'Lakshya Aptitude Session', category: 'Training', place: 'ICT Lab', summary: 'Competitive exam and employability training.' },
    { date: '2026-08-08', title: 'Anchor Research Call', category: 'Research', place: 'Online / Department', summary: 'Research papers and publication support.' }
  ],
  downloads: [
    { title: 'Prospectus 2026–27', type: 'Admissions', summary: 'Editable placeholder for official prospectus PDF.', link: '#' },
    { title: 'BCA Merit List / Wait List 2025–26', type: 'Admissions', summary: 'Uploaded PDF included in the prototype for sample download behaviour.', link: ASSETS.meritPdf },
    { title: 'Bachelor of Arts Syllabus', type: 'Academics', summary: 'Replace with the current official syllabus PDF.', link: '#' },
    { title: 'Bachelor of Commerce Syllabus', type: 'Academics', summary: 'Replace with the current official syllabus PDF.', link: '#' },
    { title: 'Bachelor of Computer Applications Syllabus', type: 'Academics', summary: 'Replace with the current official syllabus PDF.', link: '#' },
    { title: 'Mental Health & Suicide Prevention Policy', type: 'Student Support', summary: 'Policy download slot based on current public site structure.', link: '#' },
    { title: 'IDP 2022–32', type: 'Institutional', summary: 'Institutional development plan slot.', link: '#' },
    { title: 'RTI Manual', type: 'Institutional', summary: 'Statutory document slot.', link: '#' }
  ],
  research: [
    { title: 'Anchor-E Journals', type: 'Publication', summary: 'Permanent archive for journal issues, calls for papers and publication guidelines.' },
    { title: 'Faculty Research Profiles', type: 'Research', summary: 'Searchable profile pages for papers, seminars, projects and conference presentations.' },
    { title: 'Institutional Repository', type: 'Library', summary: 'Curated repository space for academic records, papers and knowledge resources.' },
    { title: 'Seminars & Conferences', type: 'Events', summary: 'Academic event archive for reports, photographs, outcomes and certificates.' }
  ],
  partners: ['Hospitality', 'Banking', 'IT Services', 'Accounting Firms', 'NGOs', 'Local Enterprises', 'Higher Education', 'Government Portals'],
  faqs: [
    ['Where do I apply for admission?', 'Use the Admissions page and replace the application portal placeholder with the official E-Samarth / college admission link.'],
    ['Are the statistics on this prototype official?', 'No. Any number marked editable should be replaced with verified college data before launch.'],
    ['Can notices be filtered?', 'Yes. Notices are structured by category, date, title, summary and link / PDF download.'],
    ['Can this become a real CMS later?', 'Yes. The editable JavaScript data can be connected to WordPress, Strapi, Sanity, Firebase or a custom admin panel later.']
  ]
};

const pages = {
  about: {
    title: 'About FAC Pillar', kicker: 'Institutional Identity', image: ASSETS.inauguration,
    intro: 'A calmer, clearer and more prestigious digital identity for Fr. Agnel College of Arts and Commerce, Pilar — rooted in Goa, service, discipline, academic growth and future readiness.',
    blocks: [
      ['A college with memory', 'The redesign treats FAC not as a notice feed but as a living institution — with history, leadership, courses, students, alumni and community work arranged with dignity.'],
      ['A Goan academic voice', 'Coastal warmth, blue-and-gold identity, real campus imagery and structured storytelling make the site feel local, official and trustworthy.'],
      ['Built for every visitor', 'Students need admissions. Parents need trust. Faculty need profiles. Recruiters need placement entry points. NAAC/NIRF visitors need evidence. The information architecture serves them separately.']
    ]
  },
  'principal-message': {
    title: 'Principal’s Message', kicker: 'Leadership', image: ASSETS.event,
    intro: 'A dedicated leadership page with a warm message, portrait space, institutional priorities and direct links to admissions, IQAC and student support.',
    blocks: [['Message Area', 'Replace this placeholder with the current Principal’s official message. Keep it human, direct and student-centred.'], ['Leadership Priorities', 'Academic discipline, student welfare, research culture, community service, digital readiness and employability.'], ['Office Desk', 'Add principal office timings, appointment process and contact protocol.']]
  },
  'vision-mission': {
    title: 'Vision & Mission', kicker: 'Purpose', image: ASSETS.library,
    intro: 'A focused page for vision, mission, values and graduate attributes, written in clean institutional language.',
    blocks: [['Vision', 'Editable official vision statement goes here.'], ['Mission', 'Editable official mission bullets can be placed here with accessible spacing.'], ['Values', 'Integrity, service, discipline, intellectual curiosity, community, sustainability and leadership.']]
  },
  'campus-life': {
    title: 'Campus Life', kicker: 'Life Beyond Classrooms', image: ASSETS.event,
    intro: 'Events, clubs, cultural programmes, sports, workshops, library activity and student achievements become permanent stories instead of disappearing social posts.',
    blocks: [['Clubs & Associations', 'Dedicated cards for cultural, literary, commerce, IT, sports, NSS and subject associations.'], ['Student Achievement Wall', 'A structured wall for winners, certificates, competitions and student milestones.'], ['Photo Stories', 'Every major event can carry a date, gallery, report, outcome and download.']]
  },
  ncc: {
    title: 'NCC / Defence Career Track', kicker: 'FAC Differentiator', image: ASSETS.inauguration,
    intro: 'A unique defence-readiness section highlighting NCC Naval Wing, discipline, leadership, service, adventure, national integration and career guidance.',
    blocks: [['Naval Wing Identity', 'Space for parade photos, annual reports, camps, ranks, achievements and officer details.'], ['Defence Career Guidance', 'Guidance for NDA, CDS, AFCAT, Coast Guard, Navy, SSB orientation and physical preparation.'], ['Cadet Gallery', 'A proud visual archive of cadets, camps, drills, social service and achievements.']]
  },
  lakshya: {
    title: 'Lakshya Training Hub', kicker: 'Competitive Exam Portal', image: ASSETS.students,
    intro: 'A portal-style training hub for competitive exams, aptitude building, mentoring, study resources, registrations and student success stories.',
    blocks: [['Training Calendar', 'Upcoming aptitude, reasoning, communication, GK and exam strategy sessions.'], ['Resource Bank', 'Study material, recordings, forms, worksheets and practice links.'], ['Mentor Network', 'Faculty, alumni and guest mentors for students preparing beyond graduation.']]
  },
  outreach: {
    title: 'Community Outreach Dashboard', kicker: 'Service & Impact', image: ASSETS.inauguration,
    intro: 'A clear dashboard for NSS, beach cleanups, rural engagement, awareness drives, social action and measurable community impact.',
    blocks: [['Impact Counters', 'Editable counters for hours, villages, volunteers, beneficiaries and drives.'], ['Project Reports', 'Each outreach activity can hold photos, reports, partners and outcomes.'], ['Values in Action', 'Show service as a core part of the institution, not just an event album.']]
  },
  placements: {
    title: 'Placements & Internships', kicker: 'Career Readiness', image: ASSETS.event,
    intro: 'A stronger placement cell experience for students, recruiters and parents — with internships, partners, training, success stories and recruiter CTAs.',
    blocks: [['Student Desk', 'Registration forms, resume support, aptitude training, interview preparation and internship updates.'], ['Recruiter Desk', 'Invite recruiters with a clean CTA, college profile and contact point.'], ['Editable Statistics', 'Placement percentage, median salary, partners and internship numbers should be added only after verification.']]
  },
  alumni: {
    title: 'Alumni', kicker: 'Network & Memory', image: ASSETS.event,
    intro: 'A polished alumni section for association links, registration, mentorship, success stories and alumni events.',
    blocks: [['Alumni Registration', 'Connect to the official alumni platform or a college-managed form.'], ['Mentorship Network', 'Invite alumni to guide students in careers, exams, entrepreneurship and higher studies.'], ['Success Stories', 'Use editorial story cards with portraits, batches, journeys and advice.']]
  },
  'student-support': {
    title: 'Student Support Services', kicker: 'Care System', image: ASSETS.students,
    intro: 'Counselling, scholarships, anti-ragging, ICC, mentoring, wellness, stress management, yoga, accessibility and student grievance support in one calm, visible place.',
    blocks: [['Counselling & Wellness', 'Mental health, stress management, yoga, suicide prevention policy and contact points.'], ['Scholarships & Mentoring', 'Eligibility support, documents, reminders and mentor allocation.'], ['Accessibility & Safety', 'Anti-ragging, ICC, grievance cell, CSGRC, code of conduct and student protection links.']]
  },
  'anti-ragging': {
    title: 'Anti-Ragging / ICC', kicker: 'Safety & Dignity', image: ASSETS.library,
    intro: 'A serious and easy-to-find page for anti-ragging, ICC, complaint process, emergency contacts, policies and reporting links.',
    blocks: [['Anti-Ragging Cell', 'Add official committee members, helpline, email, rules and reporting protocol.'], ['Internal Complaints Committee', 'Add ICC members, confidential process, timelines and student rights.'], ['Policy Downloads', 'Attach official PDFs and statutory notices.']]
  },
  sustainability: {
    title: 'Green Campus / Sustainability', kicker: 'Campus Responsibility', image: ASSETS.inauguration,
    intro: 'A dedicated page for environmental initiatives, waste management, energy saving, green audits, outreach and sustainability reports.',
    blocks: [['Green Initiatives', 'Tree plantation, cleanups, waste segregation, environmental awareness and energy saving.'], ['Evidence Gallery', 'Before-after images, report downloads and outcome counters.'], ['Student Participation', 'NSS, clubs and departments working together for a greener campus.']]
  }
};

const routeTitles = {
  home: 'Home', about: 'About FAC', 'principal-message': 'Principal’s Message', 'vision-mission': 'Vision & Mission', academics: 'Academics', admissions: 'Admissions', notices: 'Notices', events: 'Events Calendar', 'campus-life': 'Campus Life', ncc: 'NCC / Defence Track', lakshya: 'Lakshya Training Hub', outreach: 'Community Outreach', placements: 'Placements', alumni: 'Alumni', faculty: 'Faculty Directory', research: 'Research & Publications', 'student-support': 'Student Support', 'anti-ragging': 'Anti-Ragging / ICC', downloads: 'Downloads / Prospectus', contact: 'Contact', sustainability: 'Green Campus'
};

const main = document.querySelector('#main');

function navigate(route) {
  window.location.hash = `/${route}`;
}

function getRoute() {
  return (location.hash.replace(/^#\/?/, '') || 'home').replace(/^\//, '');
}

function heroPage(slug, page) {
  return `
    <section class="page-hero" style="--hero-img: url('${page.image || ASSETS.campus}')">
      <div class="page-hero-content">
        <div class="breadcrumbs"><a href="#/home" data-route="home">Home</a><span>›</span><span>${page.title}</span></div>
        <span class="eyebrow">${page.kicker || 'FAC Pillar'}</span>
        <h1>${page.title}</h1>
        <p>${page.intro}</p>
      </div>
    </section>`;
}

function renderHome() {
  main.innerHTML = `
  <div class="page">
    <section class="hero" aria-labelledby="homeTitle">
      <div class="hero-copy">
        <div class="hero-kicker">✦ Fr. Agnel College of Arts & Commerce · Pilar, Goa</div>
        <h1 id="homeTitle">A college website that feels like an <span>institution.</span></h1>
        <p class="lead">A premium redesign concept for FAC Pillar — built around admissions clarity, academic structure, student support, campus pride, NCC discipline, community service and future-ready learning.</p>
        <div class="hero-actions">
          <a class="btn btn-primary" href="#/admissions" data-route="admissions">Apply Now</a>
          <a class="btn btn-ghost" href="#/downloads" data-route="downloads">Download Prospectus</a>
          <a class="btn btn-ghost" href="#/academics" data-route="academics">Explore Courses</a>
          <a class="btn btn-ghost" href="#/contact" data-route="contact">Contact Us</a>
        </div>
        <div class="cred-strip" aria-label="Credibility markers">
          <div class="cred-badge"><strong>NAAC</strong><small>Grade / cycle placeholder. Replace with official accreditation details.</small></div>
          <div class="cred-badge"><strong>NIRF</strong><small>Dedicated ranking/profile slot. Do not publish a rank unless verified.</small></div>
          <div class="cred-badge"><strong>Goa University</strong><small>Affiliation details placeholder. Verify before final deployment.</small></div>
          <div class="cred-badge"><strong>403203</strong><small>Pilar, Goa campus identity with official contact points.</small></div>
        </div>
      </div>
      <div class="hero-visual" aria-label="Campus image collage">
        <div class="photo-stack">
          <div class="stack-card stack-main"><img src="${ASSETS.campus}" alt="FAC Pillar library and gym building" loading="lazy"><div class="visual-caption"><strong>Learning anchored in place.</strong><small>Real campus imagery used as the centre of the design language.</small></div></div>
          <div class="stack-card stack-small"><img src="${ASSETS.event}" alt="College academic event on stage" loading="lazy"></div>
          <div class="stack-card stack-wide"><img src="${ASSETS.students}" alt="FAC students in library" loading="lazy"></div>
          <div class="portal-card"><span class="eyebrow">FAC Compass</span><h3>One portal for students, parents, faculty and visitors.</h3><p>Admissions, notices, courses and support stay visible in the first five seconds.</p></div>
        </div>
      </div>
    </section>

    <section class="quick-panel container" aria-label="Quick access panel">
      <div class="quick-grid">${data.quick.map(([name, desc, route, icon]) => `<a class="quick-card reveal" href="#/${route}" data-route="${route}"><span class="quick-icon">${icon}</span><strong>${name}</strong><small>${desc}</small></a>`).join('')}</div>
    </section>

    <section class="section container">
      <div class="section-head reveal"><div><span class="eyebrow">Institutional Highlights</span><h2>Credibility without clutter.</h2></div><p>Every public-facing number is editable and clearly marked, so the college can replace sample data with verified official figures before launch.</p></div>
      <div class="grid grid-4">${data.stats.map(s => `<div class="card stat-card reveal"><small>${s.note}</small><div><div class="stat-value" data-count="${s.value}" data-suffix="${s.suffix || ''}">0${s.suffix || ''}</div><div class="stat-label">${s.label}</div></div></div>`).join('')}</div>
    </section>

    <section class="section container">
      <div class="editorial-split">
        <div class="card image-card reveal"><img src="${ASSETS.inauguration}" alt="FAC Pillar campus inauguration scene" loading="lazy"><div class="visual-caption"><strong>Not a feed. A story system.</strong><small>Campus moments become structured institutional evidence.</small></div></div>
        <div>
          <span class="eyebrow reveal">About FAC Pillar</span>
          <h2 class="reveal" style="font-size:clamp(2rem,4.8vw,5rem);letter-spacing:-.07em;line-height:.92;margin:.4rem 0 1rem">Goan, grounded, academic and future-facing.</h2>
          <p class="lead reveal">The redesign gives FAC a stronger identity by organising its public life into clear pathways: learning, admission, support, service, leadership, research and employability.</p>
          <div class="value-ladder">
            <div class="value-row reveal"><span class="value-number">01</span><div><h3>Admissions become effortless</h3><p>Application steps, eligibility, documents, FAQs and merit-list downloads are never buried.</p></div></div>
            <div class="value-row reveal"><span class="value-number">02</span><div><h3>Academics become searchable</h3><p>Courses, departments, syllabi, outcomes and faculty profiles are structured for SEO and students.</p></div></div>
            <div class="value-row reveal"><span class="value-number">03</span><div><h3>Campus life becomes evidence</h3><p>Events, NSS, NCC, Lakshya, library and achievements become permanent records, not disappearing posts.</p></div></div>
          </div>
        </div>
      </div>
    </section>

    ${renderAcademicsPreview()}
    ${renderAdmissionsPreview()}
    ${renderNoticePreview()}
    ${renderDifferentiators()}
    ${renderCampusGallery()}
    ${renderPlacementPreview()}
    ${renderSupportPreview()}
    ${renderContactPreview()}
  </div>`;
  afterRender();
}

function renderAcademicsPreview() {
  return `<section class="section container"><div class="section-head reveal"><div><span class="eyebrow">Academics</span><h2>Courses presented like real academic products.</h2></div><p>Each programme supports overview, eligibility, duration, NEP structure, syllabus, department page and career outcomes.</p></div><div class="grid grid-3">${data.courses.slice(0,3).map(courseCard).join('')}</div></section>`;
}

function courseCard(c) {
  return `<article class="card course-card reveal" data-course="${c.id}"><div class="course-top"><div><span class="eyebrow">${c.department}</span><h3>${c.title}</h3></div><span class="course-code">${c.code}</span></div><p>${c.overview}</p><div class="pill">${c.duration}</div><ul>${c.outcomes.map(o => `<li>${o}</li>`).join('')}</ul><div class="course-actions"><a class="btn btn-light" href="#/department/${c.id}" data-route="department/${c.id}">Department page</a><a class="pill gold" href="#/downloads" data-route="downloads">${c.downloads}</a></div></article>`;
}

function renderAdmissionsPreview() {
  return `<section class="section container"><div class="feature-panel"><div class="feature-deep reveal"><span class="eyebrow">Admissions</span><h3>From confusion to a clear first step.</h3><p>The admissions page is treated like the main conversion route of the site: timeline, eligibility, documents, prospectus, portal link, FAQs and direct contact cards.</p><div class="mini-metrics"><span>Apply Now CTA</span><span>Document checklist</span><span>FAQ accordion</span><span>Merit list area</span></div><a class="btn btn-primary" href="#/admissions" data-route="admissions" style="margin-top:1.4rem">Open Admissions</a></div><div class="card reveal"><span class="eyebrow">Admission Process</span><div class="timeline" style="margin-top:1rem">${['Check eligibility and course options','Download prospectus and prepare documents','Fill official application / E-Samarth form','Track merit list, counselling and fee instructions'].map((t,i)=>`<div class="timeline-step"><span class="timeline-dot">${i+1}</span><div class="card"><h3>${t}</h3><p>Editable official details can be added here.</p></div></div>`).join('')}</div></div></div></section>`;
}

function renderNoticePreview() {
  return `<section class="section container"><div class="notice-board reveal"><span class="eyebrow">Notice Board</span><div class="section-head" style="color:#fff;margin:0"><div><h2>Separate from social media. Built for action.</h2></div><p style="color:rgba(255,255,255,.7)">Filter admissions, exams, events, scholarships, placements, sports, cultural and general notices with dates and downloads.</p></div><div class="filter-row" id="homeNoticeFilters"></div><div class="notice-list" id="homeNoticeList"></div></div></section>`;
}

function renderDifferentiators() {
  const items = [
    ['NCC / Defence Track', 'Discipline, service, Naval Wing identity and defence career guidance.', 'ncc'],
    ['Lakshya Training Hub', 'Competitive exam support, mentoring, sessions and resources.', 'lakshya'],
    ['Community Outreach', 'NSS, beach cleanups, rural engagement and impact dashboards.', 'outreach'],
    ['Green Campus', 'Sustainability activities, green audits and environmental reports.', 'sustainability']
  ];
  return `<section class="section container"><div class="section-head reveal"><div><span class="eyebrow">FAC Differentiators</span><h2>Sections that make the college feel alive.</h2></div><p>These areas give FAC a stronger identity than a template site.</p></div><div class="grid grid-4">${items.map(([t,p,r])=>`<a href="#/${r}" data-route="${r}" class="card reveal"><span class="eyebrow">Portal</span><h3>${t}</h3><p>${p}</p><span class="pill gold">Explore →</span></a>`).join('')}</div></section>`;
}

function renderCampusGallery() {
  return `<section class="section container"><div class="gallery-strip"><div class="gallery-mosaic reveal"><figure class="gallery-tall"><img src="${ASSETS.library}" alt="Library exhibition at FAC Pillar" loading="lazy"><figcaption>Library as a living academic space</figcaption></figure><figure><img src="${ASSETS.event}" alt="Academic event at FAC Pillar" loading="lazy"><figcaption>Events documented as institutional memory</figcaption></figure><figure><img src="${ASSETS.students}" alt="Students in FAC library" loading="lazy"><figcaption>Students at the centre of the portal</figcaption></figure></div><div class="card reveal"><span class="eyebrow">Campus Life</span><h2>Photo-rich, but never messy.</h2><p>Social-style updates are converted into clean event cards, galleries, outcomes and archive pages. The website stays professional while still feeling youthful and warm.</p><a class="btn btn-dark" href="#/campus-life" data-route="campus-life">View Campus Life</a></div></div></section>`;
}

function renderPlacementPreview() {
  return `<section class="section container"><div class="section-head reveal"><div><span class="eyebrow">Placements & Internships</span><h2>One front door for careers.</h2></div><p>Recruiters, students and alumni get separate routes into the placement ecosystem.</p></div><div class="card reveal"><div class="grid grid-4">${data.partners.map(p=>`<div class="pill" style="justify-content:center;padding:1rem">${p}</div>`).join('')}</div><div style="margin-top:1rem"><a class="btn btn-dark" href="#/placements" data-route="placements">Open Placement Cell</a></div></div></section>`;
}

function renderSupportPreview() {
  return `<section class="section container"><div class="grid grid-3"><a class="card reveal" href="#/student-support" data-route="student-support"><span class="eyebrow">Student Care</span><h3>Counselling & wellness</h3><p>Mental health, mentoring, yoga, stress management and support contacts in one place.</p></a><a class="card reveal" href="#/anti-ragging" data-route="anti-ragging"><span class="eyebrow">Safety</span><h3>Anti-Ragging / ICC</h3><p>Complaint process, committee details and statutory policy downloads clearly visible.</p></a><a class="card reveal" href="#/downloads" data-route="downloads"><span class="eyebrow">Documents</span><h3>Download Centre</h3><p>Prospectus, forms, policies, syllabi, merit lists and reports organised by category.</p></a></div></section>`;
}

function renderContactPreview() {
  return `<section class="section container"><div class="feature-panel"><div class="card reveal"><span class="eyebrow">Contact</span><h2>Clear enough for parents. Fast enough for students.</h2><p>Fr. Agnel College of Arts and Commerce, Pilar – Goa, 403203</p><p><strong>Telephone:</strong> +91-832 2218673<br><strong>Email:</strong> principal@fragnelcollege.edu.in</p><a class="btn btn-dark" href="#/contact" data-route="contact">Contact FAC</a></div><div class="map-placeholder reveal"><div><strong>Google Map Embed Placeholder</strong><p>Replace with the official FAC Pillar Google Maps embed during deployment.</p></div></div></div></section>`;
}

function renderAcademics() {
  main.innerHTML = `<div class="page">${heroPage('academics',{title:'Academics',kicker:'Courses & Departments',image:ASSETS.campus,intro:'A structured academic portal with course finder, NEP programme cards, department pages, syllabus downloads, outcomes and faculty connections.'})}<section class="section container"><div class="course-toolbar reveal"><input class="field" id="courseSearch" placeholder="Search course, department or career outcome"><select class="field select" id="deptFilter"><option value="all">All departments</option>${[...new Set(data.courses.map(c=>c.department))].map(d=>`<option>${d}</option>`).join('')}</select></div><div class="grid grid-3" id="courseGrid"></div></section><section class="section-tight container"><div class="grid grid-3"><a class="card reveal" href="#/faculty" data-route="faculty"><span class="eyebrow">People</span><h3>Faculty Directory</h3><p>Search faculty by department, role, qualification and research interest.</p></a><a class="card reveal" href="#/downloads" data-route="downloads"><span class="eyebrow">Syllabus</span><h3>Download Centre</h3><p>Host BA, B.Com, BCA and policy PDFs in one organised area.</p></a><a class="card reveal" href="#/research" data-route="research"><span class="eyebrow">Research</span><h3>Publications</h3><p>Archive papers, seminars, journals, projects and conference activity.</p></a></div></section></div>`;
  afterRender();
  initCourseFinder();
}

function renderAdmissions() {
  main.innerHTML = `<div class="page">${heroPage('admissions',{title:'Admissions',kicker:'Apply to FAC Pillar',image:ASSETS.students,intro:'A parent-friendly and student-friendly admissions route with timeline, eligibility, required documents, portal placeholders, merit-list downloads and FAQs.'})}<section class="section container"><div class="feature-panel"><div><div class="section-head reveal"><div><span class="eyebrow">Process</span><h2>Admissions in four clean steps.</h2></div></div><div class="timeline">${['Choose your programme','Prepare documents','Apply through official portal','Track merit list and counselling'].map((t,i)=>`<div class="timeline-step reveal"><span class="timeline-dot">${i+1}</span><div class="card"><h3>${t}</h3><p>${['Compare BA, B.Com, BCA and other available programmes.','Keep marksheets, ID proof, photographs, certificates and category documents ready.','Replace this button with the official admission / E-Samarth link.','Use the notice board and download centre for merit lists, wait lists and instructions.'][i]}</p></div></div>`).join('')}</div></div><div class="card reveal"><span class="eyebrow">Admission CTA</span><h2>Apply through official portal</h2><p>This placeholder prevents false linking. Add the verified official application link before publishing.</p><a class="btn btn-primary" href="#">Official Portal Placeholder</a><hr style="border:0;border-top:1px solid var(--line);margin:1.3rem 0"><h3>Required Documents</h3><ul class="clean-list"><li>Class XII marksheet / passing certificate</li><li>Transfer certificate / leaving certificate</li><li>Identity proof and recent photograph</li><li>Category / reservation certificate, if applicable</li><li>Any course-specific entrance or eligibility document</li></ul></div></div></section><section class="section-tight container"><div class="section-head reveal"><div><span class="eyebrow">Student & Parent FAQs</span><h2>Common questions answered clearly.</h2></div></div><div class="faq">${data.faqs.map(([q,a])=>faqItem(q,a)).join('')}</div></section></div>`;
  afterRender();
}

function faqItem(q,a){ return `<div class="faq-item reveal"><button class="faq-question" aria-expanded="false"><span>${q}</span><span>+</span></button><div class="faq-answer">${a}</div></div>`; }

function renderNotices() {
  main.innerHTML = `<div class="page">${heroPage('notices',{title:'Notices & Announcements',kicker:'Official Board',image:ASSETS.library,intro:'A filterable notice board separated from social media, built for admissions, exams, events, scholarships, placements, sports, cultural and general updates.'})}<section class="section container"><div class="course-toolbar reveal"><input class="field" id="noticeSearch" placeholder="Search notices"><select class="field select" id="noticeSelect"><option value="all">All categories</option>${noticeCategories().map(c=>`<option>${c}</option>`).join('')}</select></div><div class="notice-board reveal"><div class="filter-row" id="noticeFilters"></div><div class="notice-list" id="noticeList"></div></div></section></div>`;
  afterRender();
  initNoticeBoard('noticeFilters','noticeList','noticeSearch','noticeSelect');
}

function renderEvents() {
  const days = Array.from({length: 31}, (_,i)=>i+1);
  const eventDays = new Map(data.events.map(e => [Number(e.date.split('-')[2]), e]));
  main.innerHTML = `<div class="page">${heroPage('events',{title:'Events Calendar',kicker:'What’s Happening',image:ASSETS.event,intro:'A permanent calendar for academic, cultural, admissions, NCC, Lakshya, research and campus-life events.'})}<section class="section container"><div class="calendar-grid reveal">${days.map(d=>{const e=eventDays.get(d); return `<div class="calendar-day ${e?'has-event':''}"><strong>${d}</strong>${e?`<small>${e.category}</small><div>${e.title}</div>`:''}</div>`}).join('')}</div></section><section class="section-tight container"><div class="event-list">${data.events.map(e=>`<article class="event-item reveal"><div><span class="eyebrow">${e.category} · ${formatDate(e.date)}</span><h3>${e.title}</h3><p>${e.place} — ${e.summary}</p></div><a class="pill gold" href="#/events" data-route="events">Details</a></article>`).join('')}</div></section></div>`;
  afterRender();
}

function renderFaculty() {
  main.innerHTML = `<div class="page">${heroPage('faculty',{title:'Faculty Directory',kicker:'Academic Profiles',image:ASSETS.students,intro:'Searchable, department-wise faculty profile cards with role, qualification, email, research interests and publication links.'})}<section class="section container"><div class="faculty-toolbar reveal"><input id="facultySearch" class="field" placeholder="Search name, department, research interest"><select id="facultyDept" class="field select"><option value="all">All departments</option>${[...new Set(data.faculty.map(f=>f.dept))].map(d=>`<option>${d}</option>`).join('')}</select></div><div class="grid grid-3" id="facultyGrid"></div></section></div>`;
  afterRender();
  initFaculty();
}

function renderResearch() {
  main.innerHTML = `<div class="page">${heroPage('research',{title:'Research & Publications',kicker:'Academic Output',image:ASSETS.library,intro:'A searchable research archive for faculty papers, conferences, seminars, journals, institutional repository and academic projects.'})}<section class="section container"><div class="research-list">${data.research.map(r=>`<article class="research-item reveal"><div><span class="eyebrow">${r.type}</span><h3>${r.title}</h3><p>${r.summary}</p></div><a href="#/research" data-route="research" class="pill gold">Archive</a></article>`).join('')}</div></section></div>`;
  afterRender();
}

function renderDownloads() {
  main.innerHTML = `<div class="page">${heroPage('downloads',{title:'Downloads / Prospectus',kicker:'Document Centre',image:ASSETS.library,intro:'One organised space for prospectus, forms, syllabi, policies, merit lists, RTI, IDP and reports.'})}<section class="section container"><div class="download-list">${data.downloads.map(d=>`<article class="download-item reveal"><div><span class="eyebrow">${d.type}</span><h3>${d.title}</h3><p>${d.summary}</p></div><a class="btn btn-light" href="${d.link}" ${d.link.endsWith('.pdf')?'target="_blank" rel="noopener"':''}>Download</a></article>`).join('')}</div></section></div>`;
  afterRender();
}

function renderContact() {
  main.innerHTML = `<div class="page">${heroPage('contact',{title:'Contact FAC Pillar',kicker:'Reach the College',image:ASSETS.campus,intro:'Clear contact points for admissions, office, principal, placement cell, student support and general enquiry.'})}<section class="section container"><div class="feature-panel"><div class="card reveal"><span class="eyebrow">Contact Info</span><h2>Fr. Agnel College of Arts and Commerce</h2><p>Pilar – Goa, 403203</p><p><strong>Telephone:</strong> +91-832 2218673<br><strong>Email:</strong> principal@fragnelcollege.edu.in</p><div class="grid grid-2" style="margin-top:1rem"><div class="pill">Admissions Desk</div><div class="pill">College Office</div><div class="pill">Principal</div><div class="pill">Placement Cell</div></div></div><form class="card contact-form reveal" onsubmit="event.preventDefault(); alert('Prototype form only. Connect this to a backend before launch.');"><span class="eyebrow">Enquiry Form</span><input required placeholder="Full name"><input required type="email" placeholder="Email"><select><option>Admission enquiry</option><option>Office enquiry</option><option>Placement / recruiter enquiry</option><option>Student support</option></select><textarea required placeholder="Write your message"></textarea><button class="btn btn-dark" type="submit">Send Enquiry</button></form></div></section><section class="section-tight container"><div class="map-placeholder reveal"><div><strong>Google Map Embed Placeholder</strong><p>Add the official Google Maps embed code here.</p></div></div></section></div>`;
  afterRender();
}

function renderGeneric(slug) {
  const page = pages[slug];
  if (!page) return renderHome();
  main.innerHTML = `<div class="page">${heroPage(slug,page)}<section class="section container"><div class="grid grid-3">${page.blocks.map(([h,p])=>`<article class="card reveal"><span class="eyebrow">${page.kicker}</span><h3>${h}</h3><p>${p}</p></article>`).join('')}</div></section>${slug==='campus-life'?renderCampusGallery():''}${slug==='placements'?renderPlacementPreview():''}${slug==='student-support'?`<section class="section-tight container"><div class="faq">${data.faqs.map(([q,a])=>faqItem(q,a)).join('')}</div></section>`:''}</div>`;
  afterRender();
}

function renderDepartment(id) {
  const c = data.courses.find(x => x.id === id) || data.courses[0];
  main.innerHTML = `<div class="page">${heroPage(`department/${id}`,{title:c.title,kicker:`${c.department} Department`,image:id==='bca'?ASSETS.students:id==='ba'?ASSETS.library:ASSETS.campus,intro:c.overview})}<section class="section container"><div class="feature-panel"><article class="card reveal"><span class="eyebrow">Programme Overview</span><h2>${c.title}</h2><p>${c.overview}</p><div class="grid grid-2"><div class="pill">${c.duration}</div><div class="pill">${c.eligibility}</div></div><h3>Career Outcomes</h3><ul class="clean-list">${c.outcomes.map(o=>`<li>${o}</li>`).join('')}</ul><a class="btn btn-dark" href="#/admissions" data-route="admissions">Apply for this course</a></article><article class="card reveal"><span class="eyebrow">Department Microsite</span><h2>SEO-ready academic page.</h2><p>This page can hold faculty, syllabus, timetable, results, student achievements, events, publications and departmental contact details.</p><div class="download-list">${['Syllabus download','Course outcomes','Department notices','Faculty profiles'].map(x=>`<div class="download-item"><div><h3>${x}</h3><p>Editable official content placeholder.</p></div><a class="pill gold" href="#/downloads" data-route="downloads">Open</a></div>`).join('')}</div></article></div></section></div>`;
  afterRender();
}

function noticeCategories() { return ['All', ...new Set(data.notices.map(n => n.category))].filter((v,i,a)=>a.indexOf(v)===i && v !== 'All'); }
function formatDate(date) { return new Date(date + 'T00:00:00').toLocaleDateString('en-IN', { day:'2-digit', month:'short', year:'numeric' }); }

function initNoticeBoard(filterId='homeNoticeFilters', listId='homeNoticeList', searchId=null, selectId=null) {
  const filterEl = document.getElementById(filterId);
  const listEl = document.getElementById(listId);
  if (!filterEl || !listEl) return;
  let active = 'All';
  const renderFilters = () => {
    filterEl.innerHTML = ['All', ...noticeCategories()].map(cat => `<button class="${cat===active?'active':''}" data-cat="${cat}">${cat}</button>`).join('');
    filterEl.querySelectorAll('button').forEach(btn => btn.addEventListener('click', () => { active = btn.dataset.cat; if (selectId) document.getElementById(selectId).value = active.toLowerCase()==='all'?'all':active; render(); renderFilters(); }));
  };
  const render = () => {
    const q = searchId && document.getElementById(searchId) ? document.getElementById(searchId).value.toLowerCase() : '';
    const select = selectId && document.getElementById(selectId) ? document.getElementById(selectId).value : 'all';
    const category = select !== 'all' ? select : active;
    const items = data.notices.filter(n => (category === 'All' || category === 'all' || n.category === category) && (`${n.title} ${n.summary} ${n.category}`).toLowerCase().includes(q));
    listEl.innerHTML = items.map(n => `<article class="notice-item"><time>${formatDate(n.date)}</time><div><span class="eyebrow">${n.category}</span><h3>${n.title}</h3><p>${n.summary}</p></div><a class="notice-link" href="${n.link}" ${n.link.endsWith('.pdf')?'target="_blank" rel="noopener"':''}>Open</a></article>`).join('') || `<p>No notices found.</p>`;
  };
  renderFilters(); render();
  if (searchId && document.getElementById(searchId)) document.getElementById(searchId).addEventListener('input', render);
  if (selectId && document.getElementById(selectId)) document.getElementById(selectId).addEventListener('change', e => { active = e.target.value === 'all' ? 'All' : e.target.value; render(); renderFilters(); });
}

function initCourseFinder() {
  const grid = document.getElementById('courseGrid');
  const search = document.getElementById('courseSearch');
  const dept = document.getElementById('deptFilter');
  if (!grid) return;
  const render = () => {
    const q = (search?.value || '').toLowerCase();
    const d = dept?.value || 'all';
    const items = data.courses.filter(c => (d === 'all' || c.department === d) && (`${c.title} ${c.department} ${c.overview} ${c.outcomes.join(' ')}`).toLowerCase().includes(q));
    grid.innerHTML = items.map(courseCard).join('') || `<p>No courses found.</p>`;
    afterRender(false);
  };
  search?.addEventListener('input', render); dept?.addEventListener('change', render); render();
}

function initFaculty() {
  const grid = document.getElementById('facultyGrid');
  const search = document.getElementById('facultySearch');
  const dept = document.getElementById('facultyDept');
  if (!grid) return;
  const render = () => {
    const q = (search.value || '').toLowerCase();
    const d = dept.value;
    const items = data.faculty.filter(f => (d === 'all' || f.dept === d) && (`${f.name} ${f.dept} ${f.role} ${f.qual} ${f.interests}`).toLowerCase().includes(q));
    grid.innerHTML = items.map(f => `<article class="card faculty-card reveal"><div class="avatar">${f.name.split(' ').map(w=>w[0]).join('').slice(0,2)}</div><div><span class="eyebrow">${f.dept}</span><h3>${f.name}</h3><p><strong>${f.role}</strong><br>${f.qual}</p><p>${f.interests}</p><a href="mailto:${f.email}">${f.email}</a><p><small>${f.publications}</small></p></div></article>`).join('') || `<p>No faculty profiles found.</p>`;
    afterRender(false);
  };
  search.addEventListener('input', render); dept.addEventListener('change', render); render();
}

function initSearch() {
  const overlay = document.getElementById('searchOverlay');
  const input = document.getElementById('globalSearch');
  const results = document.getElementById('globalSearchResults');
  const open = () => { overlay.classList.add('open'); overlay.setAttribute('aria-hidden','false'); document.body.classList.add('no-scroll'); setTimeout(()=>input.focus(), 50); renderResults(''); };
  const close = () => { overlay.classList.remove('open'); overlay.setAttribute('aria-hidden','true'); document.body.classList.remove('no-scroll'); };
  document.getElementById('openSearch')?.addEventListener('click', open);
  document.getElementById('openSearchTop')?.addEventListener('click', open);
  document.getElementById('closeSearch')?.addEventListener('click', close);
  overlay.addEventListener('click', e => { if (e.target === overlay) close(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') close(); if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); open(); } });
  const docs = [
    ...Object.entries(routeTitles).map(([route,title]) => ({ title, route, type:'Page', text:title })),
    ...data.courses.map(c => ({ title:c.title, route:`department/${c.id}`, type:'Course', text:`${c.department} ${c.overview} ${c.outcomes.join(' ')}` })),
    ...data.notices.map(n => ({ title:n.title, route:'notices', type:n.category, text:n.summary })),
    ...data.faculty.map(f => ({ title:f.name, route:'faculty', type:f.dept, text:`${f.role} ${f.interests}` }))
  ];
  function renderResults(q) {
    const query = q.toLowerCase();
    const items = docs.filter(d => !query || `${d.title} ${d.text} ${d.type}`.toLowerCase().includes(query)).slice(0, 12);
    results.innerHTML = items.map(d => `<a class="search-result" href="#/${d.route}" data-route="${d.route}"><strong>${d.title}</strong><small>${d.type} · ${d.text.slice(0,110)}</small></a>`).join('') || '<p>No results found.</p>';
    results.querySelectorAll('[data-route]').forEach(a => a.addEventListener('click', close));
  }
  input.addEventListener('input', () => renderResults(input.value));
}

function afterRender(scrollTop=true) {
  if (scrollTop) window.scrollTo({ top: 0, behavior: 'smooth' });
  document.querySelectorAll('[data-route]').forEach(el => {
    el.addEventListener('click', e => {
      const route = el.dataset.route;
      if (!route) return;
      if (el.tagName === 'A') return;
      e.preventDefault(); navigate(route);
    });
  });
  document.querySelectorAll('.faq-question').forEach(btn => btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const open = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.querySelector('span:last-child').textContent = open ? '−' : '+';
  }));
  observeReveal();
  animateCounters();
  initNoticeBoard('homeNoticeFilters','homeNoticeList');
  updateActiveNav();
}

function observeReveal() {
  const io = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
  }), { threshold: .12 });
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => io.observe(el));
}

function animateCounters() {
  const els = document.querySelectorAll('[data-count]');
  if (!els.length) return;
  const io = new IntersectionObserver(entries => entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const el = entry.target, target = Number(el.dataset.count), suffix = el.dataset.suffix || '';
    const start = performance.now();
    const step = now => {
      const p = Math.min((now - start) / 1000, 1);
      el.textContent = Math.round(target * p).toLocaleString('en-IN') + suffix;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step); io.unobserve(el);
  }), { threshold: .4 });
  els.forEach(el => io.observe(el));
}

function updateActiveNav() {
  const route = getRoute();
  document.querySelectorAll('.nav-links a, .mobile-bottom-nav button').forEach(el => {
    const r = el.dataset.route;
    el.classList.toggle('active', r && (route === r || route.startsWith(r + '/') || (r === 'academics' && route.startsWith('department/'))));
  });
  const menu = document.getElementById('navLinks');
  const toggle = document.getElementById('menuToggle');
  menu?.classList.remove('open');
  toggle?.setAttribute('aria-expanded','false');
}

function renderRoute() {
  const route = getRoute();
  if (route === 'home') return renderHome();
  if (route === 'academics') return renderAcademics();
  if (route === 'admissions') return renderAdmissions();
  if (route === 'notices') return renderNotices();
  if (route === 'events') return renderEvents();
  if (route === 'faculty') return renderFaculty();
  if (route === 'research') return renderResearch();
  if (route === 'downloads') return renderDownloads();
  if (route === 'contact') return renderContact();
  if (route.startsWith('department/')) return renderDepartment(route.split('/')[1]);
  return renderGeneric(route);
}

function boot() {
  const savedTheme = localStorage.getItem('fac-theme') || 'light';
  document.documentElement.dataset.theme = savedTheme;
  document.getElementById('themeToggle')?.addEventListener('click', () => {
    const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    localStorage.setItem('fac-theme', next);
  });
  document.getElementById('menuToggle')?.addEventListener('click', () => {
    const menu = document.getElementById('navLinks');
    const open = menu.classList.toggle('open');
    document.getElementById('menuToggle').setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  document.getElementById('backToTop')?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  initSearch();
  window.addEventListener('hashchange', renderRoute);
  renderRoute();
}

document.addEventListener('DOMContentLoaded', boot);
