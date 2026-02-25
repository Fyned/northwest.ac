import { Link } from 'react-router-dom';
import { Container } from '../../components/common/Container';
import { PageHeader } from '../../components/common/PageHeader';
import { SmartImage } from '../../components/common/SmartImage';
import { Compass, Users, Calendar, Map, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import orientationImg from '../../assets/images/student-life.jpg';

const orientationCards = [
  {
    icon: Calendar,
    title: 'What Happens at Orientation?',
    color: 'secondary',
    items: [
      'Register for courses',
      'Get tools for the first day of class',
      'Learn about student involvement opportunities',
      'Meet the UNW Community',
    ],
  },
  {
    icon: Compass,
    title: 'Why is it Important?',
    color: 'primary',
    description: 'Transition is difficult for anyone. We have developed a truly immersive program to help you transition to our community. Meeting the challenges of the college environment should not be done alone. Our goal is to make sure you get the support and acclimate to your new community.',
  },
  {
    icon: Map,
    title: 'GPS Program',
    color: 'amber',
    description: 'We have programs tailored for all our new students, such as our GPS program for students not already in a specialized program.',
    note: 'International students will receive their Orientation appointments by email.',
  },
];

export const Orientation = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <PageHeader
        title="International Orientation"
        subtitle="Welcome to Campus"
        description="A comprehensive program to help you transition smoothly into the University of NorthWest community."
      />

      {/* Welcome */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="grid lg:grid-cols-2 gap-12 items-center"
          >
            <div className="space-y-5">
              <h2 className="text-3xl font-display font-bold text-primary-900">Welcome to University of NorthWest!</h2>
              <div className="h-1 w-16 bg-secondary-500 rounded-full" />
              <p className="text-neutral-600 leading-relaxed">
                This site contains critical information for first-year, transfer, and international students. As a new student, you must fulfill several requirements from various offices before you can begin classes.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                This guide helps you navigate the actions you must take to complete requirements by the stated deadlines so that you can avoid delays and penalties.
              </p>
            </div>
            <SmartImage
              src={orientationImg}
              alt="Orientation Day"
              className="rounded-2xl shadow-elevated w-full"
              aspectRatio="landscape"
              placeholderText="Orientation Group"
            />
          </motion.div>
        </Container>
      </section>

      {/* Orientation Details */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid lg:grid-cols-3 gap-6"
          >
            {orientationCards.map((card, idx) => {
              const bgMap: Record<string, string> = { secondary: 'bg-secondary-50', primary: 'bg-primary-50', amber: 'bg-amber-50' };
              const iconMap: Record<string, string> = { secondary: 'text-secondary-600', primary: 'text-primary-900', amber: 'text-amber-600' };
              const borderMap: Record<string, string> = { secondary: 'border-t-secondary-500', primary: 'border-t-primary-600', amber: 'border-t-amber-500' };
              return (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className={`bg-white p-7 rounded-xl border border-neutral-200 border-t-4 ${borderMap[card.color]}`}
                >
                  <div className={`w-12 h-12 ${bgMap[card.color]} rounded-xl flex items-center justify-center mb-5`}>
                    <card.icon className={`w-6 h-6 ${iconMap[card.color]}`} />
                  </div>
                  <h3 className="text-lg font-bold text-primary-900 mb-4">{card.title}</h3>
                  {'items' in card && card.items ? (
                    <ul className="space-y-3 text-sm text-neutral-600">
                      {card.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-secondary-500 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <>
                      <p className="text-sm text-neutral-600 leading-relaxed">{card.description}</p>
                      {'note' in card && card.note && (
                        <div className="mt-4 p-3 bg-primary-50 rounded-lg text-xs text-primary-800 font-medium">
                          {card.note}
                        </div>
                      )}
                    </>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

      {/* Prepare Section */}
      <section className="py-16 md:py-20 bg-primary-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <Container className="relative z-10">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto"
          >
            <Users className="w-12 h-12 text-secondary-500 mx-auto mb-5" />
            <h2 className="text-2xl font-display font-bold text-white mb-4">Prepare for Orientation</h2>
            <p className="text-neutral-400 leading-relaxed">
              We&apos;re here to help you succeed. Part of being a successful college student is learning how to navigate the university rules, regulations, and deadlines. Start by reviewing your acceptance package and checking your email regularly.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Questions About Orientation?</h2>
              <p className="text-neutral-300">Get in touch with our student support team.</p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Contact Us <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>
    </div>
  );
};
