const express = require('express');
const path = require('path');
const fs = require('fs');

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
const ENQUIRIES_FILE = path.join(__dirname, 'data', 'enquiries.json');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

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
    title: 'Essar Sons Group — Innovating with strength, building with trust.',
    clientsRowA: clients.slice(0, splitAt),
    clientsRowB: clients.slice(splitAt),
    projects: projectsFor('all').slice(0, 6),
    homeUnits: contactUnits.filter((u) => u.showOnHome),
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Us — Essar Sons Group',
    team,
  });
});

app.get('/businesses', (req, res) => {
  res.render('businesses', {
    title: 'Our Businesses — Essar Sons Group',
  });
});

app.get('/projects', (req, res) => {
  res.render('projects', {
    title: 'Projects — Essar Sons Group',
    projects: PROJECTS,
  });
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    title: 'Contact — Essar Sons Group',
    contactUnits,
  });
});

app.get('/business/architectural-glass', (req, res) => {
  const firm = flagshipFirms.architectural;
  res.render('flagship', {
    title: `${firm.name} — Essar Sons Group`,
    firm,
    projects: projectsFor('architectural').slice(0, 6),
  });
});

app.get('/business/glass-wholesale', (req, res) => {
  const firm = flagshipFirms.wholesale;
  res.render('flagship', {
    title: `${firm.name} — Essar Sons Group`,
    firm,
    projects: projectsFor('wholesale').slice(0, 6),
  });
});

app.get('/business/:firm', (req, res, next) => {
  const firm = firms[req.params.firm];
  if (!firm) return next();
  res.render('firm', {
    title: `${firm.name} — Essar Sons Group`,
    firm,
  });
});

app.post('/api/enquiry', (req, res) => {
  const { name, company: companyName, contact, division, message } = req.body;

  if (!name || !contact || !division) {
    return res.status(400).json({ ok: false, error: 'Name, contact, and division are required.' });
  }

  const entry = {
    id: Date.now(),
    name: String(name).trim(),
    company: companyName ? String(companyName).trim() : '',
    contact: String(contact).trim(),
    division: String(division).trim(),
    message: message ? String(message).trim() : '',
    receivedAt: new Date().toISOString(),
  };

  let enquiries = [];
  try {
    enquiries = JSON.parse(fs.readFileSync(ENQUIRIES_FILE, 'utf8'));
  } catch (err) {
    enquiries = [];
  }
  enquiries.push(entry);
  fs.writeFileSync(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2));

  console.log('New enquiry received:', entry);
  // TODO: wire up email/CRM delivery

  res.json({ ok: true });
});

app.use((req, res) => {
  res.status(404).render('404', { title: 'Page Not Found — Essar Sons Group' });
});

app.listen(PORT, () => {
  console.log(`Essar Sons website running at http://localhost:${PORT}`);
});
