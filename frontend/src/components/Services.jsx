const services = [
  { icon: '⌁', title: 'SAT Preparation', items: ['Personalized study plans', 'Practice examinations', 'Score improvement strategy'] },
  { icon: '✚', title: 'Nursing Exams', items: ['Level 300 support', 'Level 400 finals', 'Licensure readiness'] },
  { icon: '✈', title: 'Visa Application', items: ['Expert counseling', 'Document review', 'Interview coaching'] },
  { icon: '◎', title: 'School Applications', items: ['Placement guidance', 'Essay support', 'Scholarship mapping'] },
  { icon: '✎', title: 'Assignments & Academic Support', items: ['Research assistance', 'Assignment guidance', 'Academic proofreading'] },
  { icon: '▤', title: 'Online Document Assistance', items: ['Online form completion', 'Document preparation', 'Submission support'] },
  { icon: '✈', title: 'Study Abroad & Admission Support', items: ['University selection', 'Application assistance', 'Visa process guidance'] },
  { icon: '◎', title: 'Career Guidance', items: ['Career path planning', 'Course selection', 'Professional development'] },
  { icon: '◇', title: 'Consulting Services', items: ['Personalized assessment', 'Strategic planning', 'One-on-one expert advice'] },
];

export default function Services() {
  return <section className="section dark" id="services"><div className="container">
    <header className="section-head center"><p className="eyebrow">What we do</p><h2>Specialized services for every milestone</h2><p>Practical academic, admissions, career, and consulting support tailored to your goals.</p></header>
    <div className="services">{services.map(({ icon, title, items }) => <article className="service" key={title}><span>{icon}</span><h3>{title}</h3><ul>{items.map(item => <li key={item}>{item}</li>)}</ul><i>↗</i></article>)}</div>
  </div></section>;
}
