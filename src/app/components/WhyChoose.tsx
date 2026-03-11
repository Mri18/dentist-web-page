import clinicWaitingRoomImg from '../../assets/clinic-waiting-room.png';
import receptionDeskImg from '../../assets/reception-desk.png';

const reasons = [
  {
    title: 'Calm & Hygienic',
    description: 'Spa-like clinic with a soothing atmosphere.',
    image: clinicWaitingRoomImg,
  },
  {
    title: 'Friendly Staff',
    description: 'Warm, welcoming and attentive to your needs.',
    image: receptionDeskImg,
  },
  {
    title: 'Certified Experts',
    description: 'Highly qualified and experienced dental professionals.',
    image: clinicWaitingRoomImg,
  },
];

export function WhyChoose() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#f5ede0] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="dental-heading mb-3 text-4xl sm:text-5xl lg:text-[4rem]">
            Why Choose Our Clinic
          </h2>
          <p className="dental-copy mx-auto max-w-2xl text-[1.05rem]">
            Comprehensive dental care for the whole family. Explore our wide range of
            services tailored to fit your needs.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {reasons.map((reason) => (
            <article key={reason.title} className="overflow-hidden rounded-2xl border border-[#dacbb8] bg-[#f8f2e8] shadow-[0_8px_20px_rgba(74,58,38,0.12)]">
              <div
                className="h-36 bg-cover bg-center bg-no-repeat sm:h-44"
                style={{ backgroundImage: `url('${reason.image}')` }}
                role="img"
                aria-label={reason.title}
              />
              <div className="px-5 py-4 text-center">
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif" }} className="mb-2 text-4xl leading-none text-[#433830] sm:text-[2.2rem]">
                  {reason.title}
                </h3>
                <p className="text-[0.95rem] text-[#675c50]">{reason.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
