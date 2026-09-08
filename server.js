require('dotenv').config();

const express = require('express');
const path = require('path');
const { Resend } = require('resend');

const company = require('./data/company');
const divisions = require('./data/divisions');
const { PROJECTS, projectsFor } = require('./data/projects');
const firms = require('./data/firms');
const flagshipFirms = require('./data/flagshipFirms');
const contactUnits = require('./data/contactUnits');
const team = require('./data/team');
const clients = require('./data/clients');

const app = express();
const PORT = process.env.PORT || 3000;
const resend = new Resend(process.env.RESEND_API_KEY);
const ENQUIRY_FROM_EMAIL = 'noreply@essarsons.com';

app.set('view engine', 'ejs');
app.set('views', path.join(process.cwd(), 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(process.cwd(), 'public')));

// Data available to every view.
app.use((req, res, next) => {
  res.locals.company = company;
  res.locals.divisions = divisions;
  res.locals.currentPath = req.path;
  next();
});

app.get('/', (req, res) => {
  const splitAt = Math.ceil(clients.length / 2);
  res.render('home', {
    title: 'Glass, Aluminium & Construction Solutions',
    description: 'Glass, aluminium and structural solutions that people can build their lives and businesses around — engineered with precision, delivered with care.',
    clientsRowA: clients.slice(0, splitAt),
    clientsRowB: clients.slice(splitAt),
    projects: projectsFor('all').slice(0, 6),
    homeUnits: contactUnits.filter((u) => u.showOnHome),
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us',
    description: 'For more than 40 years, Essar has been a leader in the glass industry, manufacturing both structural and decorative glass.',
    team,
  });
});

app.get('/businesses', (req, res) => {
  res.render('businesses', {
    title: 'Our Businesses',
    description: 'Essar Sons Group operates across architectural glass and glass trading (Essar Glass), facade and fenestration (Essar Windoors), industrial lifting (Alfa Lifters), and construction (ACPL) — five divisions, one standard.',
  });
});

app.get('/projects', (req, res) => {
  res.render('projects', {
    title: 'Projects',
    description: 'Every project the group has delivered, across architectural glass, wholesale supply, fabrication and construction. Filter by division.',
    projects: PROJECTS,
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact Us',
    description: 'Every unit of the group keeps its own desk. Find contact details and addresses for our head office and all five business divisions.',
    contactUnits,
  });
});

app.get('/business/architectural-glass', (req, res) => {
  const firm = flagshipFirms.architectural;
  res.render('flagship', {
    title: firm.name,
    description: firm.tagline,
    firm,
    projects: projectsFor('architectural').slice(0, 6),
  });
});

app.get('/business/glass-wholesale', (req, res) => {
  const firm = flagshipFirms.wholesale;
  res.render('flagship', {
    title: 'Laminated Glass Supplier in Maharashtra',
    description: 'Essar Sons Group is a laminated glass supplier in Maharashtra, wholesaling float, laminated and processed glass to retailers and fabricators across Mumbai, Pune, Surat and Nashik.',
    h1: "Glass Imports and Trading, Maharashtra's Laminated Glass Supplier.",
    firm,
    projects: projectsFor('wholesale').slice(0, 6),
  });
});

const firmSeoOverrides = {
  windoors: {
    title: 'Facade Contractor in Mumbai',
    description: 'Essar Windoors is a facade contractor in Mumbai, delivering aluminium fabrication and glass façade solutions — windows, doors, partitions and cubicles.',
    h1: "Facade and Fenestration, Mumbai's Facade Contractor for Aluminium and Glass.",
  },
  lifters: {
    title: 'Industrial Lifting Equipment Supplier in Mumbai',
    description: 'Excel Traders and Muzaf Enterprise are an industrial lifting equipment supplier in Mumbai, supplying hoists, winches, slings and material handling equipment nationwide.',
    h1: "Lifting Tackles and Material Handling — Mumbai's Industrial Lifting Equipment Supplier.",
  },
  constructions: {
    title: 'Commercial Construction Company in Mumbai',
    description: 'Arsiwala Constructions (ACPL) is a commercial construction company in Mumbai, building RERA-registered high-rise residential and commercial spaces across Virar and the region.',
    h1: "Construction, Mumbai's Commercial Construction Company.",
  },
};

app.get('/business/:firm', (req, res, next) => {
  const firm = firms[req.params.firm];
  if (!firm) return next();
  const seo = firmSeoOverrides[req.params.firm] || {};
  res.render('firm', {
    title: seo.title || firm.name,
    description: seo.description || firm.tagline,
    h1: seo.h1,
    firm,
  });
});

app.post('/api/enquiry', async (req, res) => {
  const { name, company: companyName, contact, division, message } = req.body;

  if (!name || !contact || !division) {
    return res.status(400).json({ ok: false, error: 'Name, contact, and division are required.' });
  }

  const entry = {
    name: String(name).trim(),
    company: companyName ? String(companyName).trim() : '',
    contact: String(contact).trim(),
    division: String(division).trim(),
    message: message ? String(message).trim() : '',
  };

  console.log('New enquiry received:', entry);

  try {
    await resend.emails.send({
      from: ENQUIRY_FROM_EMAIL,
      to: process.env.NOTIFY_EMAIL,
      subject: `New enquiry from ${entry.name} — ${entry.division}`,
      html: `
        <p><strong>Name:</strong> ${entry.name}</p>
        <p><strong>Company:</strong> ${entry.company || '—'}</p>
        <p><strong>Phone/Email:</strong> ${entry.contact}</p>
        <p><strong>Division:</strong> ${entry.division}</p>
        <p><strong>Message:</strong> ${entry.message || '—'}</p>
      `,
    });
  } catch (err) {
    console.error('Failed to send enquiry notification email:', err);
  }

  res.json({ ok: true });
});

app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Page Not Found',
    description: "The page you're looking for doesn't exist. Head back to the Essar Sons Group homepage.",
  });
});

if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Running on port ${PORT}`));
}

module.exports = app;
