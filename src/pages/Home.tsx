import { Link } from 'react-router-dom';
import { Container } from '../components/common/Container';
import { SmartImage } from '../components/common/SmartImage';
import { Hero } from '../components/sections/Hero';
import { AnimatedCounter } from '../components/common/AnimatedCounter';
import {
  ArrowRight, CheckCircle, GraduationCap, Globe, Users, Award,
  BookOpen, Briefcase, TrendingUp, Monitor, Lightbulb, Shield,
  Calendar, MapPin, Clock, ChevronRight, Quote, Star, Mail
} from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../utils/animations';
import { programmes } from '../data/programmes';

import campusImg from '../assets/images/campus-building.jpg';


export const Home = () => {
  const featuredProgrammes = [
    programmes.find(p => p.id === 'bsc-cs'),
    programmes.find(p => p.id === 'msc-cyber'),
    programmes.find(p => p.id === 'phd-polsci'),
    programmes.find(p => p.id === 'ba-polsci'),
    programmes.find(p => p.id === 'msc-cs'),
    programmes.find(p => p.id === 'ba-media'),
  ].filter(Boolean);

  const whyUsFeatures = [
    { icon: Globe, title: 'Global Recognition', desc: 'Degrees recognised by employers and institutions in over 25 countries worldwide.' },
    { icon: Monitor, title: 'Flexible Learning', desc: 'Study on-campus or online with our award-winning distance learning platform.' },
    { icon: Briefcase, title: 'Career Support', desc: 'Dedicated career services team with 93% graduate employment rate.' },
    { icon: Lightbulb, title: 'Research Excellence', desc: 'Join cutting-edge research projects with published, experienced faculty.' },
    { icon: Users, title: 'Diverse Community', desc: 'Connect with students from 25+ countries in a truly international environment.' },
    { icon: Shield, title: 'ISO Certified', desc: 'Quality-assured education meeting international standards of excellence.' },
  ];

  const newsItems = [
    { date: 'Feb 20, 2026', category: 'Academic', title: 'New Partnership with European Research Council', excerpt: 'University of NorthWest joins prestigious ERC network, opening new research funding opportunities for faculty and doctoral students.' },
    { date: 'Feb 15, 2026', category: 'Campus', title: 'Spring 2026 Commencement Ceremony Announced', excerpt: 'The annual commencement ceremony will be held on May 15th at the Brooklyn Campus, celebrating over 1,200 graduates.' },
    { date: 'Feb 10, 2026', category: 'Innovation', title: 'AI & Data Science Lab Grand Opening', excerpt: 'Our new state-of-the-art laboratory brings together machine learning researchers and industry partners.' },
  ];

  const events = [
    { date: { day: '05', month: 'Mar' }, title: 'Open Day - Brooklyn Campus', time: '10:00 AM - 4:00 PM', location: 'Main Campus' },
    { date: { day: '12', month: 'Mar' }, title: 'Webinar: Study Abroad Opportunities', time: '2:00 PM - 3:30 PM', location: 'Online' },
    { date: { day: '20', month: 'Mar' }, title: 'Career Fair 2026', time: '9:00 AM - 5:00 PM', location: 'Conference Hall' },
    { date: { day: '28', month: 'Mar' }, title: 'Research Symposium', time: '1:00 PM - 6:00 PM', location: 'Auditorium' },
  ];

  const testimonials = [
    { name: 'Madison Moore', country: 'Canada', programme: 'MBA Executive', text: 'At NorthWest I have learnt to be adaptable to the global working environment. The faculty are incredibly supportive and the network is invaluable.', rating: 5 },
    { name: 'Lydia Lopez', country: 'United States', programme: 'BSc Computer Science', text: 'I like that this degree has a practicum component for each subject. The hands-on approach prepared me well for my career in tech.', rating: 5 },
    { name: 'Martin Robinson', country: 'Venezuela', programme: 'BA Political Science', text: 'Your options are quite wide by studying at UNW because there is an emphasis on societies, cultures and global perspectives.', rating: 4 },
  ];

  const partners = [
    'ISO 9001:2015', 'British Accreditation Council', 'ASIC', 'Quality Assurance Agency',
    'European Association', 'International Council', 'UNESCO Partner', 'Commonwealth Universities'
  ];

  const staggerContainer = stagger;

  return (
    <div className="bg-white font-sans">

      {/* ===== HERO ===== */}
      <Hero />

      {/* ===== FAZ 6: UNIVERSITY INTRODUCTION ===== */}
      <section className="section-padding bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Image Composition */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeInUp}
              className="relative"
            >
              <div className="relative z-10">
                <SmartImage
                  src={campusImg}
                  alt="University Campus"
                  className="rounded-2xl shadow-elevated w-full"
                  placeholderText="Main Campus"
                  aspectRatio="video"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -right-6 bg-secondary-500 text-primary-950 rounded-xl p-5 shadow-lg z-20 hidden md:block">
                <div className="text-3xl font-display font-bold leading-none">25+</div>
                <div className="text-xs font-semibold uppercase tracking-wider mt-1">Years of Excellence</div>
              </div>
              {/* Decorative element */}
              <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-secondary-500/20 rounded-2xl -z-0 hidden lg:block" />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.span variants={fadeInUp} className="text-secondary-600 font-bold tracking-[0.2em] uppercase text-xs">
                Discover NorthWest
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-[2.75rem] font-display font-bold text-primary-900 leading-tight">
                An ISO Certified, International University
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-neutral-600 text-lg leading-relaxed">
                University of NorthWest is rapidly becoming a pioneer in the field of online education.
                We cater to students from all religions, races, and nationalities, offering opportunities
                for lifelong learning through quality higher education.
              </motion.p>
              <motion.ul variants={fadeInUp} className="space-y-3 pt-2">
                {[
                  'Excellence, creativity and innovative approach',
                  'On-Campus and Off-Campus (Distance Learning)',
                  'Strong career support and counseling',
                  'Internationally recognised qualifications',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-primary-800">
                    <CheckCircle className="w-5 h-5 text-secondary-500 flex-shrink-0" />
                    <span className="font-medium text-[15px]">{item}</span>
                  </li>
                ))}
              </motion.ul>
              <motion.div variants={fadeInUp} className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-900 text-primary-900 font-semibold text-sm rounded-lg hover:bg-primary-900 hover:text-white transition-all duration-200"
                >
                  Read More About Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Quote Divider */}
      <section className="py-16 md:py-20 bg-neutral-50 border-y border-neutral-100">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-10 h-10 text-secondary-500/30 mx-auto mb-6" />
            <blockquote className="text-2xl md:text-3xl font-display font-semibold text-primary-900 leading-snug italic">
              University of NorthWest has focused on providing professional opportunity for all who can benefit for well over a century
            </blockquote>
            <div className="h-1 w-20 bg-secondary-500 mx-auto rounded-full mt-8" />
          </div>
        </Container>
      </section>

      {/* ===== FAZ 7: FEATURED PROGRAMMES ===== */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <span className="text-secondary-600 font-bold tracking-[0.2em] uppercase text-xs">Academic Excellence</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mt-3 mb-4">Featured Programmes</h2>
            <div className="h-1 w-20 bg-secondary-500 mx-auto rounded-full" />
          </motion.div>

          {/* Programme Cards */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {featuredProgrammes.slice(0, 6).map((prog: any) => (
              <motion.div key={prog.id} variants={fadeInUp}>
                <Link to="/academics" className="group block h-full">
                  <div className="bg-white border border-neutral-200 rounded-xl p-6 h-full hover:shadow-card-hover hover:border-neutral-300 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                    <div className="flex items-center gap-3 mb-4">
                      <span className={`inline-flex px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider ${
                        prog.level === 'Bachelor' ? 'bg-blue-50 text-blue-700' :
                        prog.level === 'Master' ? 'bg-purple-50 text-purple-700' :
                        prog.level === 'Doctorate' ? 'bg-amber-50 text-amber-700' :
                        'bg-emerald-50 text-emerald-700'
                      }`}>
                        {prog.level}
                      </span>
                      {prog.duration && (
                        <span className="text-xs text-neutral-400 font-medium">{prog.duration}</span>
                      )}
                    </div>
                    <h3 className="text-lg font-display font-bold text-primary-900 mb-3 group-hover:text-secondary-600 transition-colors leading-snug">
                      {prog.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed flex-grow line-clamp-2">
                      {prog.description}
                    </p>
                    <div className="mt-5 pt-4 border-t border-neutral-100 flex items-center text-secondary-600 text-sm font-semibold group-hover:text-secondary-700">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center">
            <Link
              to="/academics"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-900 hover:bg-primary-800 text-white font-semibold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-primary-900/20"
            >
              View All 478+ Programmes
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ===== FAZ 8: WHY CHOOSE US ===== */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
            {/* Left Content - 2 cols */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={staggerContainer}
              className="lg:col-span-2"
            >
              <motion.span variants={fadeInUp} className="text-secondary-600 font-bold tracking-[0.2em] uppercase text-xs">
                Why Choose Us
              </motion.span>
              <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-display font-bold text-primary-900 mt-3 mb-6 leading-tight">
                Preparing Leaders for a Global Future
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-neutral-600 leading-relaxed mb-8">
                At NorthWest, we combine academic rigour with practical experience. Our internationally
                recognised programmes are designed to equip you with the skills employers value most.
              </motion.p>
              <motion.div variants={fadeInUp}>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-md shadow-secondary-500/20"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Grid - 3 cols */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer}
              className="lg:col-span-3 grid sm:grid-cols-2 gap-5"
            >
              {whyUsFeatures.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  className="bg-white border border-neutral-200 rounded-xl p-6 hover:shadow-card hover:border-neutral-300 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center mb-4 group-hover:bg-primary-900 transition-colors duration-300">
                    <feature.icon className="w-6 h-6 text-primary-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-bold text-primary-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ===== FAZ 9: STATISTICS & ACHIEVEMENTS ===== */}
      <section className="relative py-20 md:py-28 bg-primary-950 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 dot-pattern opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/50 to-primary-950" />

        <Container className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="text-secondary-400 font-bold tracking-[0.2em] uppercase text-xs">By The Numbers</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-3">Our Impact in Numbers</h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
          >
            {[
              { number: 9458, suffix: '+', label: 'Graduates Worldwide', icon: GraduationCap },
              { number: 478, suffix: '+', label: 'Accredited Programmes', icon: BookOpen },
              { number: 25, suffix: '+', label: 'Countries Represented', icon: Globe },
              { number: 93, suffix: '%', label: 'Employment Rate', icon: TrendingUp },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-secondary-500/10 group-hover:border-secondary-500/20 transition-all duration-300">
                  <stat.icon className="w-7 h-7 text-secondary-400" />
                </div>
                <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                </div>
                <div className="text-sm text-neutral-400 font-medium uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ===== FAZ 10: NEWS & EVENTS ===== */}
      <section className="section-padding bg-white">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <span className="text-secondary-600 font-bold tracking-[0.2em] uppercase text-xs">Stay Informed</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mt-3 mb-4">News & Events</h2>
            <div className="h-1 w-20 bg-secondary-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10">
            {/* News - 3 cols */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer}
              className="lg:col-span-3 space-y-6"
            >
              {newsItems.map((item, idx) => (
                <motion.article
                  key={idx}
                  variants={fadeInUp}
                  className="group flex gap-5 p-5 bg-white border border-neutral-200 rounded-xl hover:shadow-card hover:border-neutral-300 transition-all duration-300 cursor-pointer"
                >
                  <div className="hidden sm:flex flex-col items-center justify-center w-20 flex-shrink-0 bg-primary-50 rounded-lg p-3 group-hover:bg-primary-900 transition-colors duration-300">
                    <span className="text-xs font-bold text-secondary-600 group-hover:text-secondary-400 uppercase transition-colors">{item.category}</span>
                  </div>
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-neutral-400 font-medium">{item.date}</span>
                      <span className="sm:hidden text-xs font-bold text-secondary-600 bg-secondary-50 px-2 py-0.5 rounded">{item.category}</span>
                    </div>
                    <h3 className="text-base font-bold text-primary-900 mb-2 group-hover:text-secondary-600 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed line-clamp-2">{item.excerpt}</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-neutral-300 flex-shrink-0 self-center group-hover:text-secondary-500 group-hover:translate-x-1 transition-all" />
                </motion.article>
              ))}
            </motion.div>

            {/* Events - 2 cols */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer}
              className="lg:col-span-2"
            >
              <h3 className="text-lg font-display font-bold text-primary-900 mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-secondary-500" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {events.map((event, idx) => (
                  <motion.div
                    key={idx}
                    variants={fadeInUp}
                    className="flex gap-4 p-4 bg-neutral-50 rounded-xl border border-neutral-100 hover:border-secondary-200 hover:bg-secondary-50/30 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-14 h-14 bg-primary-900 rounded-lg flex flex-col items-center justify-center flex-shrink-0 group-hover:bg-secondary-500 transition-colors duration-300">
                      <span className="text-lg font-bold text-white leading-none">{event.date.day}</span>
                      <span className="text-[10px] font-bold text-primary-300 uppercase group-hover:text-primary-950 transition-colors">{event.date.month}</span>
                    </div>
                    <div className="flex-grow min-w-0">
                      <h4 className="text-sm font-bold text-primary-900 mb-1 truncate">{event.title}</h4>
                      <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {event.time}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ===== FAZ 11: TESTIMONIALS ===== */}
      <section className="section-padding bg-neutral-50">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="text-center mb-14"
          >
            <span className="text-secondary-600 font-bold tracking-[0.2em] uppercase text-xs">Student Voices</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary-900 mt-3 mb-4">What Our Students Say</h2>
            <div className="h-1 w-20 bg-secondary-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-6 mb-16"
          >
            {testimonials.map((t, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="bg-white border border-neutral-200 rounded-xl p-7 hover:shadow-card transition-all duration-300 flex flex-col relative"
              >
                <Quote className="w-10 h-10 text-secondary-500/15 absolute top-6 right-6" />
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < t.rating ? 'text-secondary-500 fill-secondary-500' : 'text-neutral-200'}`} />
                  ))}
                </div>
                <p className="text-neutral-600 text-sm leading-relaxed flex-grow mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-5 border-t border-neutral-100">
                  <div className="w-11 h-11 bg-primary-100 rounded-full flex items-center justify-center font-bold text-primary-800 text-sm flex-shrink-0">
                    {t.name.charAt(0)}{t.name.split(' ')[1]?.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-primary-900">{t.name}</h4>
                    <span className="text-xs text-neutral-500">{t.programme} &middot; {t.country}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Partners/Accreditations */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <p className="text-center text-xs font-bold text-neutral-400 uppercase tracking-[0.2em] mb-8">
              Accreditations & Partnerships
            </p>
            <div className="flex flex-wrap justify-center gap-6 md:gap-10">
              {partners.map((partner, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center px-5 py-3 bg-white border border-neutral-200 rounded-lg text-xs font-bold text-neutral-500 uppercase tracking-wider hover:border-secondary-300 hover:text-primary-900 transition-all duration-300"
                >
                  <Award className="w-4 h-4 mr-2 text-secondary-500" />
                  {partner}
                </div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ===== FAZ 12: CTA & NEWSLETTER ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-950 to-primary-900" />
        <div className="absolute inset-0 dot-pattern opacity-15" />

        <Container className="relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Ready to Shape Your Future?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-neutral-300 mb-10 max-w-xl mx-auto leading-relaxed">
              Join over 9,000 successful graduates from 25+ countries.
              Applications for the 2026 academic year are now open.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
              <Link
                to="/apply/undergraduate"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 shadow-lg shadow-secondary-500/20 btn-shine"
              >
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm rounded-lg border border-white/20 backdrop-blur-sm transition-all duration-200"
              >
                Contact Admissions
              </Link>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={fadeInUp} className="pt-10 border-t border-white/10">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Mail className="w-5 h-5 text-secondary-400" />
                <h3 className="text-white font-semibold">Stay Updated</h3>
              </div>
              <p className="text-sm text-neutral-400 mb-5">
                Subscribe to our newsletter for the latest news, events and opportunities.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" aria-label="Newsletter subscription">
                <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                <input
                  id="newsletter-email"
                  type="email"
                  placeholder="Enter your email address"
                  autoComplete="email"
                  className="flex-grow px-4 py-3 bg-white/10 border border-white/15 rounded-lg text-white text-sm placeholder:text-neutral-500 focus:outline-none focus:border-secondary-500 focus:bg-white/15 transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-secondary-500 hover:bg-secondary-400 text-primary-950 font-bold text-sm rounded-lg transition-all duration-200 flex-shrink-0"
                >
                  Subscribe
                </button>
              </form>
            </motion.div>
          </motion.div>
        </Container>
      </section>

    </div>
  );
};
