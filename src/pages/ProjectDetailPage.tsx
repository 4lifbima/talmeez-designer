import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Clock, Award, CheckCircle2, UserCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { getProjectBySlug, getNextAndPrevProject } from '../utils/portfolio';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';

interface ProjectDetailPageProps {
  onOpenContact: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ onOpenContact }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = slug ? getProjectBySlug(slug) : undefined;
  const { prev, next } = slug ? getNextAndPrevProject(slug) : {};

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#faf8f5] flex flex-col justify-between">
        <Navbar onOpenContact={onOpenContact} />
        <main className="max-w-xl mx-auto px-6 py-20 text-center">
          <h1 className="text-3xl font-extrabold text-gray-950 mb-3">Project Not Found</h1>
          <p className="text-gray-600 mb-6">The project you are looking for does not exist or has been moved.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-[#121316] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-black transition-colors"
          >
            ← Back to Home
          </button>
        </main>
        <Footer onOpenContact={onOpenContact} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#faf8f5] text-gray-900 flex flex-col justify-between">
      <Navbar onOpenContact={onOpenContact} />

      <motion.main
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="flex-grow pt-6 pb-20"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
          
          {/* Breadcrumb / Back Link */}
          <div className="mb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-gray-600 hover:text-[#ff5520] transition-colors py-1"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Selected Projects</span>
            </Link>
          </div>

          {/* Project Header */}
          <div className="mb-8">
            <div className="flex flex-wrap items-center gap-2.5 mb-3">
              <span className="text-[#ff5520] font-bold text-xs uppercase tracking-widest bg-orange-100/70 px-3 py-1 rounded-full">
                {project.category}
              </span>
              <span className="text-gray-400 text-xs">•</span>
              <span className="text-gray-600 text-xs font-semibold">{project.year}</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
              {project.fullTitle}
            </h1>
            <p className="text-base sm:text-lg text-gray-600 mt-3 max-w-2xl leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Project Key Metadata Grid */}
          <div className="bg-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 mb-8 grid grid-cols-2 sm:grid-cols-4 gap-4 shadow-xs">
            <div className="flex items-start gap-3">
              <UserCheck className="w-5 h-5 text-[#ff5520] shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Client</span>
                <span className="text-sm font-bold text-gray-900">{project.client}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-[#ff5520] shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Timeline</span>
                <span className="text-sm font-bold text-gray-900">{project.duration}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-[#ff5520] shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Year</span>
                <span className="text-sm font-bold text-gray-900">{project.year}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-[#ff5520] shrink-0 mt-0.5" />
              <div>
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Role</span>
                <span className="text-sm font-bold text-gray-900">{project.role}</span>
              </div>
            </div>
          </div>

          {/* Main Visual Showcase */}
          <div className="bg-[#edeae4] border border-gray-200/90 rounded-3xl overflow-hidden shadow-md mb-12 aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center">
            <img
              src={project.image}
              alt={project.fullTitle}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Case Study Details Section */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-14">
            
            {/* Left Column: Challenge & Solution */}
            <div className="md:col-span-8 space-y-8">
              <section className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight mb-3">
                  The Challenge
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {project.challenge}
                </p>
              </section>

              <section className="bg-white border border-gray-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight mb-3">
                  The Strategy & Solution
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  {project.solution}
                </p>
              </section>

              {/* Measured Impact Card */}
              <section className="bg-[#fef4ed] border border-orange-200 rounded-3xl p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-extrabold text-gray-950 tracking-tight mb-3 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-[#ff5520]" />
                  <span>Key Impact & Results</span>
                </h2>
                <p className="text-gray-900 font-semibold text-sm sm:text-base leading-relaxed">
                  {project.impact}
                </p>
              </section>
            </div>

            {/* Right Column: Deliverables & Quick Actions */}
            <div className="md:col-span-4 space-y-6">
              <div className="bg-white border border-gray-200/80 rounded-3xl p-6 shadow-xs">
                <h3 className="text-sm font-bold text-gray-950 uppercase tracking-wider mb-4">
                  Deliverables
                </h3>
                <ul className="space-y-2.5">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ff5520]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#121316] text-white rounded-3xl p-6 text-center shadow-lg">
                <h3 className="text-lg font-bold mb-2">Want similar results?</h3>
                <p className="text-xs text-gray-400 mb-5 leading-relaxed">
                  Let's craft a tailored design solution for your brand.
                </p>
                <button
                  onClick={onOpenContact}
                  className="w-full bg-[#ff5520] hover:bg-[#e04414] text-white font-semibold py-2.5 px-4 rounded-full text-xs sm:text-sm transition-colors shadow-sm"
                >
                  Discuss Your Project
                </button>
              </div>
            </div>

          </div>

          {/* Previous / Next Project Navigation Bar */}
          <div className="border-t border-gray-200/80 pt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {prev && (
              <Link
                to={`/project/${prev.slug}`}
                className="group bg-white hover:bg-gray-50 border border-gray-200/80 rounded-2xl p-4 flex items-center gap-4 transition-all"
              >
                <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#ff5520] group-hover:text-white text-gray-700 flex items-center justify-center transition-colors shrink-0">
                  <ArrowLeft className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Previous Project</span>
                  <span className="text-sm font-bold text-gray-950 group-hover:text-[#ff5520] transition-colors">{prev.fullTitle}</span>
                </div>
              </Link>
            )}

            {next && (
              <Link
                to={`/project/${next.slug}`}
                className="group bg-white hover:bg-gray-50 border border-gray-200/80 rounded-2xl p-4 flex items-center justify-end gap-4 text-right transition-all sm:ml-auto w-full"
              >
                <div>
                  <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Next Project</span>
                  <span className="text-sm font-bold text-gray-950 group-hover:text-[#ff5520] transition-colors">{next.fullTitle}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-100 group-hover:bg-[#ff5520] group-hover:text-white text-gray-700 flex items-center justify-center transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            )}
          </div>

        </div>
      </motion.main>

      <Footer onOpenContact={onOpenContact} />
    </div>
  );
};
