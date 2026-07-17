import graduateCelebrate from '../assets/graduates.jpg';
import studentsCollaborating from '../assets/SchoolProg.jpg';

const images = [studentsCollaborating, graduateCelebrate];
export default function About() {
  return (
    <section className="section" id="about">
      <div className="container two-col">
        <div>
          <p className="eyebrow">Who we are</p>
          <h2>Empowering future global professionals</h2>
          <p className="lead">
            Education is the most powerful tool for global mobility. We equip
            students with the strategy, preparation, and confidence needed to
            succeed in international exams and university applications.
          </p>
          <div className="about-points">
            <article>
              <b>✓</b>
              <div>
                <h3>Our vision</h3>
                <p>
                  To be the preferred gateway for African students seeking
                  outstanding global education.
                </p>
              </div>
            </article>
            <article>
              <b>✦</b>
              <div>
                <h3>Proven guidance</h3>
                <p>
                  Experienced support for admissions, exam preparation, and visa
                  protocols.
                </p>
              </div>
            </article>
          </div>
        </div>
        <div className="collage">
          {images.map((src, i) => (
            <img
              src={src}
              key={src}
              alt={i ? 'Graduates celebrating' : 'Students collaborating'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
