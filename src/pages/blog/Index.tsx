import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { Link } from 'react-router-dom';
import { LocalBusinessSchema } from '@/components/StructuredData';

const posts = [
  { slug: 'choose-best-construction-company-wardha', title: 'How to Choose the Best Construction Company in Wardha' },
  { slug: 'cost-guide-building-house-vidarbha', title: 'Cost Guide: Building a House in Vidarbha (Wardha & Nagpur)' },
  { slug: 'home-design-trends-vidarbha', title: 'Top Home Design Trends for Vidarbha Homes' },
  { slug: 'site-prep-foundation-wardha', title: 'Site Preparation & Foundation Tips for Wardha Soil' },
  { slug: 'commercial-building-checklist-vidarbha', title: 'Commercial Building Checklist for Vidarbha Businesses' },
  { slug: 'budget-friendly-home-wardha', title: 'How to Plan a Budget-Friendly Home in Wardha' },
  { slug: 'permits-approvals-wardha', title: 'Permits & Approvals for Construction in Wardha, Maharashtra' },
  { slug: 'sustainable-materials-vidarbha', title: 'Sustainable Building Materials for Vidarbha Climate' },
  { slug: 'construction-timeline-wardha', title: "Timeline: How Long Does Home Construction Take in Wardha" },
  { slug: 'structural-issues-vidarbha', title: 'Common Structural Issues in Vidarbha and How to Avoid Them' },
  { slug: 'choose-architect-wardha', title: 'Choosing the Right Architect in Wardha: Questions to Ask' },
  { slug: 'renovation-tips-vidarbha', title: 'Renovation Tips for Older Homes in Vidarbha' },
  { slug: 'civil-contracting-large-projects-vidarbha', title: 'How Civil Contractors in Vidarbha Manage Large Projects' },
  { slug: 'cost-comparison-materials-wardha', title: 'Cost Comparison: Local Materials vs Imported Finishes in Wardha' },
  { slug: 'prepare-plot-construction-nagpur-wardha', title: 'Preparing Your Plot for Construction in Nagpur & Wardha' },
];

const BlogIndex = () => {
  return (
    <main className="min-h-screen">
      <SEOHead title="Construction Blog — Vidarbha | Balaji Design & Construction" description="Read construction tips, cost guides and local insights for Wardha and Vidarbha from Balaji Design & Construction. Practical advice for homeowners and builders." canonical="/blog" />
      <LocalBusinessSchema />
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-display text-4xl mb-6">Balaji Construction Blog — Vidarbha</h1>
          <p className="text-muted-foreground mb-6">Helpful articles covering construction, design and local insights across Wardha, Nagpur, Amravati and surrounding districts.</p>

          <ul className="space-y-4">
            {posts.map((p) => (
              <li key={p.slug}>
                <Link to={`/blog/${p.slug}`} className="text-primary font-medium text-lg hover:underline">{p.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogIndex;
