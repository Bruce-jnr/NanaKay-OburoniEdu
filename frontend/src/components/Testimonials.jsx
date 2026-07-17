import grad1 from '../assets/grad1.jpg';
import grad2 from '../assets/grad2.jpg';
import grad3 from '../assets/grad3.jpg';

const people = [
  {
    name: 'Emmanuel Owusu Frimpong',
    service: 'SAT Prep',
    quote:
      'The tutors were patient and strategic. The mock exams made me confident for the real thing.',
    image: grad1,
  },
  {
    name: 'Abigail Acheampong',
    service: 'Nursing Exams',
    quote:
      'I was nervous, but the support was incredible. I passed on my first attempt.',
    image: grad3,
  },
  {
    name: 'James Anokye',
    service: 'Visa Application',
    quote:
      'They made my visa application feel simple. I always knew the next step.',
    image: grad2,
  },
];

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <header className="section-head center">
          <p className="eyebrow">Student stories</p>
          <h2>Real outcomes, lasting confidence</h2>
          <p>
            Students who turned their international academic goals into reality.
          </p>
        </header>
        <div className="testimonials">
          {people.map((person) => (
            <article key={person.name}>
              <div className="person">
                <img src={person.image} alt={person.name} />
                <div>
                  <strong>{person.name}</strong>
                  <small>{person.service}</small>
                </div>
              </div>
              <div className="stars">★★★★★</div>
              <blockquote>“{person.quote}”</blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
