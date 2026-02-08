import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEOHead from '@/components/SEOHead';
import { LocalBusinessSchema } from '@/components/StructuredData';

type Post = {
  title: string;
  seoTitle: string;
  seoDescription: string;
  content: string;
  h2s: string[];
};

const posts: Record<string, Post> = {
  'choose-best-construction-company-wardha': {
    title: 'How to Choose the Best Construction Company in Wardha',
    seoTitle: 'Choose Best Construction Company in Wardha | Balaji',
    seoDescription: 'Practical guide to selecting the right construction company in Wardha. Tips on credentials, local experience, pricing and warranties from Balaji Design & Construction.',
    content: 'Learn how to evaluate contractors, check credentials, and compare quotes to pick a reliable construction partner in Wardha and Vidarbha.',
    h2s: ['Check local experience in Wardha', 'Verify licenses and insurance', 'Request references and site visits']
  },
  'cost-guide-building-house-vidarbha': {
    title: 'Cost Guide: Building a House in Vidarbha (Wardha & Nagpur)',
    seoTitle: 'Cost Guide Building House Vidarbha | Balaji',
    seoDescription: 'Understand construction costs in Vidarbha — labour, materials and timelines explained. Get a realistic budget estimate for Wardha projects.',
    content: 'Breaking down the major cost components for residential construction in Vidarbha, with tips to reduce expenses without compromising quality.',
    h2s: ['Material costs in Vidarbha', 'Labour and contractor fees', 'Ways to optimize budget']
  },
  'home-design-trends-vidarbha': {
    title: 'Top Home Design Trends for Vidarbha Homes',
    seoTitle: 'Home Design Trends Vidarbha | Balaji',
    seoDescription: 'Explore modern home design ideas suited to Vidarbha climate and lifestyle — efficient layouts, ventilation and material choices recommended by local architects.',
    content: 'Design ideas focused on daylight, ventilation, and materials that perform well in the Vidarbha region.',
    h2s: ['Climate-appropriate design', 'Efficient layouts', 'Material recommendations']
  },
  'site-prep-foundation-wardha': {
    title: 'Site Preparation & Foundation Tips for Wardha Soil',
    seoTitle: 'Site Preparation Foundation Wardha | Balaji',
    seoDescription: 'Site preparation and foundation guidance for Wardha soils. Essential geotech checks, drainage and foundation types explained by experienced civil contractors.',
    content: 'Key steps to prepare your plot, assess soil and choose the right foundation in Wardha and nearby regions.',
    h2s: ['Soil testing and geotech', 'Drainage and water table concerns', 'Foundation types for local soils']
  },
  'commercial-building-checklist-vidarbha': {
    title: 'Commercial Building Checklist for Vidarbha Businesses',
    seoTitle: 'Commercial Building Checklist Vidarbha | Balaji',
    seoDescription: 'Checklist for planning commercial construction in Vidarbha — permits, services, accessibility and MEP considerations for business owners.',
    content: 'A practical checklist to prepare for commercial construction projects in Wardha, Nagpur and Vidarbha districts.',
    h2s: ['Permits and approvals', 'MEP and services', 'Accessibility and fire safety']
  },
  'budget-friendly-home-wardha': {
    title: 'How to Plan a Budget-Friendly Home in Wardha',
    seoTitle: 'Budget-Friendly Home Wardha | Balaji',
    seoDescription: 'Affordable construction tips for Wardha homeowners. Prioritise scope, choose local materials and phase work to control budget without sacrificing quality.',
    content: 'Practical strategies to reduce costs including phasing, standardised components and local material sourcing.',
    h2s: ['Prioritise scope', 'Use local materials', 'Phased construction approach']
  },
  'permits-approvals-wardha': {
    title: 'Permits & Approvals for Construction in Wardha, Maharashtra',
    seoTitle: 'Permits Approvals Wardha | Balaji',
    seoDescription: 'Guide to building permits in Wardha — documents, agencies and typical timelines for approvals. Avoid delays with the right paperwork.',
    content: 'Overview of municipal requirements and tips to expedite permit approvals in Wardha.',
    h2s: ['Common permits required', 'Application tips', 'Engage local professionals']
  },
  'sustainable-materials-vidarbha': {
    title: 'Sustainable Building Materials for Vidarbha Climate',
    seoTitle: 'Sustainable Materials Vidarbha | Balaji',
    seoDescription: 'Discover sustainable materials that work well in Vidarbha — durable, low-maintenance and cost-effective choices for local projects.',
    content: 'Material suggestions that balance durability, thermal performance and cost for Vidarbha projects.',
    h2s: ['Thermal performance', 'Locally-available options', 'Maintenance considerations']
  },
  'construction-timeline-wardha': {
    title: "Timeline: How Long Does Home Construction Take in Wardha",
    seoTitle: 'Construction Timeline Wardha | Balaji',
    seoDescription: 'Typical construction timelines for homes in Wardha. Phases, milestones and realistic scheduling advice from Balaji Design & Construction.',
    content: 'Estimate timelines by project type and tips to stay on schedule.',
    h2s: ['Typical timelines', 'Factors affecting schedule', 'Tips to keep project on track']
  },
  'structural-issues-vidarbha': {
    title: 'Common Structural Issues in Vidarbha and How to Avoid Them',
    seoTitle: 'Structural Issues Vidarbha | Balaji',
    seoDescription: 'Identify common structural problems in regional projects and learn prevention strategies from experienced engineers in Wardha and Vidarbha.',
    content: 'Common failure modes and preventive measures during design and construction.',
    h2s: ['Cracking and settlement', 'Waterproofing failures', 'Reinforcement and detailing']
  },
  'choose-architect-wardha': {
    title: 'Choosing the Right Architect in Wardha: Questions to Ask',
    seoTitle: 'Choose Architect Wardha | Balaji',
    seoDescription: 'Questions and criteria to select an architect in Wardha. Learn how to assess portfolios, communication and local building knowledge.',
    content: 'Checklist to interview and select architects and designers for your Vidarbha project.',
    h2s: ['Portfolio review', 'Communication and process', 'Local code familiarity']
  },
  'renovation-tips-vidarbha': {
    title: 'Renovation Tips for Older Homes in Vidarbha',
    seoTitle: 'Renovation Tips Vidarbha | Balaji',
    seoDescription: 'Practical renovation advice for older homes in Vidarbha including structural checks, retrofitting and modern finishes that respect local context.',
    content: 'Steps to assess, plan and execute renovations that improve performance and aesthetics.',
    h2s: ['Assessment and survey', 'Structural retrofitting', 'Finish and energy upgrades']
  },
  'civil-contracting-large-projects-vidarbha': {
    title: 'How Civil Contractors in Vidarbha Manage Large Projects',
    seoTitle: 'Civil Contracting Large Projects Vidarbha | Balaji',
    seoDescription: 'Insights into project management, procurement and quality control methods used by contractors handling large-scale projects in Vidarbha.',
    content: 'Project management practices, vendor coordination and logistics for larger works in the region.',
    h2s: ['Project management', 'Procurement strategies', 'Quality assurance']
  },
  'cost-comparison-materials-wardha': {
    title: 'Cost Comparison: Local Materials vs Imported Finishes in Wardha',
    seoTitle: 'Cost Comparison Materials Wardha | Balaji',
    seoDescription: 'Compare costs and benefits of local materials versus imported finishes for Wardha projects to make informed choices on quality and budget.',
    content: 'A practical comparison to help choose finishes that match budget and durability needs.',
    h2s: ['Local vs imported costs', 'Durability comparison', 'Maintenance considerations']
  },
  'prepare-plot-construction-nagpur-wardha': {
    title: 'Preparing Your Plot for Construction in Nagpur & Wardha',
    seoTitle: 'Prepare Plot Construction Nagpur Wardha | Balaji',
    seoDescription: 'Checklist to prepare your plot for construction in Nagpur and Wardha — surveys, utilities and site readiness guidance from Balaji.',
    content: 'Essential steps to ensure your plot is ready including surveys, utility connections and access planning.',
    h2s: ['Survey and boundaries', 'Utility connections', 'Site access and storage']
  }
};

const BlogPost = () => {
  const { slug } = useParams();
  const post = slug ? posts[slug] : undefined;

  if (!post) {
    return (
      <main className="min-h-screen">
        <Header />
        <section className="pt-32 pb-20 container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="text-4xl">Post not found</h1>
          <p className="mt-4">The article you requested does not exist. Visit the <Link to="/blog" className="text-primary">blog index</Link>.</p>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <SEOHead title={post.seoTitle} description={post.seoDescription} canonical={`/blog/${slug}`} />
      <LocalBusinessSchema />
      <Header />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <h1 className="font-display text-4xl mb-4">{post.title}</h1>
          <p className="text-muted-foreground mb-6">{post.seoDescription}</p>

          {post.h2s.map((h2, i) => (
            <section key={i} className="mb-6">
              <h2 className="text-2xl font-semibold mb-2">{h2}</h2>
              <p className="text-muted-foreground">{post.content}</p>
            </section>
          ))}

          <div className="mt-8">
            <Link to="/services" className="text-primary underline">Related Services</Link>
            <span className="mx-2">•</span>
            <Link to="/contact" className="text-primary underline">Contact Us</Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default BlogPost;
