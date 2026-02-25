import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { PageHeader } from '../components/common/PageHeader';
import { SmartImage } from '../components/common/SmartImage';
import { Award, Globe, CheckCircle, Quote, Users, BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import campusImg from '../assets/images/campus-building.jpg';

export const About = () => {
  return (
    <div className="bg-white min-h-screen font-sans">

      <PageHeader
        title="About University of NorthWest"
        subtitle="Our Story"
        description="An ISO certified, international university dedicated to excellence, creativity, and an innovative approach to learning."
      />

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={stagger}
              className="space-y-6"
            >
              <motion.span variants={fadeInUp} className="text-secondary-600 font-bold tracking-[0.2em] uppercase text-xs">
                Our Identity
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-primary-900 leading-tight">
                Who We Are
              </motion.h2>
              <motion.div variants={fadeInUp} className="h-1 w-20 bg-secondary-500 rounded-full" />
              <motion.p variants={fadeInUp} className="text-neutral-600 text-lg leading-relaxed">
                University of NorthWest is rapidly becoming a pioneer in the field of online and distance education.
                With students from all religions, races, and nationalities, we are proud to offer opportunities
                for lifelong learning through quality higher education.
              </motion.p>
              <motion.p variants={fadeInUp} className="text-neutral-600 leading-relaxed">
                We offer multiple modes of study including On-Campus, Off-Campus (Distance Learning), and Executive Programmes
                across various disciplines, ensuring education is accessible to everyone, everywhere.
              </motion.p>
              <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-5 bg-primary-50 rounded-xl border border-primary-100">
                  <Globe className="w-7 h-7 text-primary-900 mb-3" />
                  <h3 className="font-bold text-primary-900 mb-1">Global Reach</h3>
                  <p className="text-sm text-neutral-600">Presence in over 25 countries</p>
                </div>
                <div className="p-5 bg-secondary-50 rounded-xl border border-secondary-100">
                  <Award className="w-7 h-7 text-secondary-600 mb-3" />
                  <h3 className="font-bold text-primary-900 mb-1">ISO Certified</h3>
                  <p className="text-sm text-neutral-600">International quality standards</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeInUp}
              className="relative"
            >
              <SmartImage
                src={campusImg}
                alt="University Campus"
                className="rounded-2xl shadow-elevated w-full"
                aspectRatio="portrait"
                placeholderText="Modern Campus Building"
              />
              <div className="absolute -bottom-4 -left-4 w-28 h-28 border-2 border-secondary-500/20 rounded-2xl -z-10 hidden lg:block" />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-28 bg-primary-950 relative overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-15" />
        <Container className="relative z-10">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={stagger}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={fadeInUp}>
              <Award className="w-14 h-14 text-secondary-500 mx-auto mb-6" />
            </motion.div>
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-white mb-8">
              Our Mission
            </motion.h2>
            <motion.blockquote variants={fadeInUp} className="text-xl md:text-2xl font-display italic leading-relaxed text-neutral-300 mb-8">
              &ldquo;Education is the power to think clearly, the power to act well in the working world, and the power to appreciate life.&rdquo;
            </motion.blockquote>
            <motion.p variants={fadeInUp} className="text-neutral-400 text-lg leading-relaxed">
              We believe that a strong higher education system is the cornerstone of an autonomous society.
              We are committed to providing equal educational opportunities for all segments of society,
              empowering individuals to achieve their full potential.
            </motion.p>
          </motion.div>
        </Container>
      </section>

      {/* Values */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <span className="text-secondary-600 font-bold tracking-[0.2em] uppercase text-xs">What We Stand For</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mt-3 mb-4">Our Core Values</h2>
            <div className="h-1 w-20 bg-secondary-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={stagger}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: CheckCircle, title: 'Excellence', desc: 'Striving for the highest standards in education and research.' },
              { icon: Globe, title: 'Inclusivity', desc: 'Welcoming students from all backgrounds and nationalities.' },
              { icon: BookOpen, title: 'Innovation', desc: 'Embracing new technologies and teaching methodologies.' },
              { icon: Users, title: 'Community', desc: 'Building a supportive global network of scholars and professionals.' },
            ].map((val, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white border border-neutral-200 rounded-xl p-6 text-center hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mx-auto mb-4">
                  <val.icon className="w-7 h-7 text-primary-900" />
                </div>
                <h3 className="text-lg font-bold text-primary-900 mb-2">{val.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* Rector's Message */}
      <section className="section-padding bg-white">
        <Container>
          <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-elevated border border-neutral-100 overflow-hidden flex flex-col md:flex-row">
            <div className="bg-gradient-to-br from-secondary-500 to-secondary-600 p-8 md:p-12 md:w-1/3 flex flex-col justify-center items-center text-center text-primary-950">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-5 backdrop-blur-sm">
                <Quote className="w-12 h-12 text-primary-950" />
              </div>
              <h3 className="text-xl font-display font-bold mb-1">The Rector</h3>
              <p className="text-sm font-medium opacity-80">University of NorthWest</p>
            </div>
            <div className="p-8 md:p-12 md:w-2/3 flex flex-col justify-center">
              <h3 className="text-2xl font-display font-bold text-primary-900 mb-5">A Message of Welcome</h3>
              <p className="text-neutral-600 leading-relaxed mb-6">
                We thank you for your interest in University of NorthWest. We are proud to offer you the opportunity
                to pursue your academic goals with us. Our exceptional faculty and staff are dedicated to each
                student&apos;s success, providing a supportive and innovative environment.
              </p>
              <div className="flex items-center gap-2 text-secondary-600 font-display font-bold text-lg italic">
                <span>With Pride and Honour!</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary-900">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">Ready to Join Us?</h2>
              <p className="text-neutral-300">Take the first step towards your academic journey.</p>
            </div>
            <Link
              to="/apply/undergraduate"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 flex-shrink-0"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

    </div>
  );
};
