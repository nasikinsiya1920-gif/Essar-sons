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
    description: 'One company, one standard, multiple businesses — explore the five divisions of Essar Sons Group, each managed by its own specialist firm.',
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
    title: firm.name,
    description: firm.tagline,
    firm,
    projects: projectsFor('wholesale').slice(0, 6),
  });
});

app.get('/business/:firm', (req, res, next) => {
  const firm = firms[req.params.firm];
  if (!firm) return next();
  res.render('firm', {
    title: firm.name,
    description: firm.tagline,
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
