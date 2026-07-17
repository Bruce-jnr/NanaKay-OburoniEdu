const stats = [
  ['98%', 'Visa success rate'],
  ['500+', 'School placements'],
  ['1,200+', 'SAT training hours'],
  ['24/7', 'Student support'],
];
export default function Stats() {
  return (
    <div className="container stats-wrap">
      <section className="stats" aria-label="Our results">
        {stats.map(([v, l]) => (
          <div className="stat" key={l}>
            <strong>{v}</strong>
            <span>{l}</span>
          </div>
        ))}
      </section>
    </div>
  );
}
