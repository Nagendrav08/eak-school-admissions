import { useState } from "react";
import "./App.css";

const reasons = [
  {
    icon: "✦",
    title: "Learning That Inspires",
    description:
      "Activity-based lessons encourage curiosity, creativity, and independent thinking.",
  },
  {
    icon: "◎",
    title: "Expert Educators",
    description:
      "Supportive teachers guide every student with personal attention and encouragement.",
  },
  {
    icon: "◇",
    title: "Beyond the Classroom",
    description:
      "Sports, arts, and clubs help students discover their strengths and interests.",
  },
  {
    icon: "⌂",
    title: "A Safe Community",
    description:
      "A welcoming school environment helps children feel supported and confident.",
  },
  {
    icon: "▦",
    title: "Modern Learning Spaces",
    description:
      "Technology-enabled classrooms make learning engaging and interactive.",
  },
  {
    icon: "↗",
    title: "Future-Ready Skills",
    description:
      "Projects and collaborative activities develop communication and problem-solving.",
  },
];

const programs = [
  {
    level: "01",
    title: "Primary School",
    classes: "Classes 1–5 · Ages 6–10",
    description:
      "Build strong foundations in language, mathematics, science, and creative thinking.",
    features: [
      "Foundational skills",
      "Creative activities",
      "Learning through play",
    ],
  },
  {
    level: "02",
    title: "Middle School",
    classes: "Classes 6–8 · Ages 11–13",
    description:
      "Explore new subjects, develop independence, and learn through discovery.",
    features: ["Hands-on projects", "Digital literacy", "Teamwork"],
  },
  {
    level: "03",
    title: "Secondary School",
    classes: "Classes 9–10 · Ages 14–15",
    description:
      "Strengthen subject knowledge and prepare for academic milestones.",
    features: ["Subject mastery", "Practical learning", "Study guidance"],
  },
  {
    level: "04",
    title: "Senior Secondary",
    classes: "Classes 11–12 · Ages 16–18",
    description:
      "Develop deeper expertise and prepare for higher education and careers.",
    features: ["Advanced subjects", "Career exploration", "Exam preparation"],
  },
];

const highlights = [
  { number: "15+", label: "Years of learning excellence" },
  { number: "40+", label: "Dedicated educators" },
  { number: "25+", label: "Clubs and activities" },
  { number: "1,200+", label: "Growing student community" },
];

const facilities = [
  {
    icon: "▤",
    title: "Smart Classrooms",
    description:
      "Interactive displays and technology-supported lessons create engaging learning experiences.",
  },
  {
    icon: "⚗",
    title: "Science & Computer Labs",
    description:
      "Dedicated spaces for experiments, digital skills, and hands-on discovery.",
  },
  {
    icon: "▥",
    title: "Library & Reading Zone",
    description:
      "A welcoming collection of books that encourages reading and imagination.",
  },
  {
    icon: "⚽",
    title: "Sports & Recreation",
    description:
      "Space for physical fitness, team sports, and healthy competition.",
  },
  {
    icon: "✚",
    title: "Health & Wellbeing",
    description:
      "A planned approach to student wellbeing and access to first-aid support.",
  },
  {
    icon: "♧",
    title: "Transport & Cafeteria",
    description:
      "Convenient campus services designed with student comfort in mind.",
  },
];

const admissionSteps = [
  {
    number: "01",
    title: "Make an Enquiry",
    description: "Tell us about your child and the class you're interested in.",
  },
  {
    number: "02",
    title: "Submit Application",
    description:
      "Complete the application form and provide the required documents.",
  },
  {
    number: "03",
    title: "Assessment / Interaction",
    description:
      "Attend the age-appropriate assessment or interaction, if applicable.",
  },
  {
    number: "04",
    title: "Admission Decision",
    description: "Receive the admission decision and next-step instructions.",
  },
  {
    number: "05",
    title: "Complete Enrollment",
    description: "Confirm your place and complete the enrollment formalities.",
  },
];

const importantDates = [
  { date: "01 Nov 2026", event: "Applications Open" },
  { date: "31 Jan 2027", event: "Application Deadline" },
  { date: "15 Feb 2027", event: "Assessment / Interaction" },
  { date: "01 Mar 2027", event: "Result Announcement" },
  { date: "31 Mar 2027", event: "Enrollment Deadline" },
];

const documents = [
  "Child's birth certificate",
  "Previous school records, if applicable",
  "Recent passport-size photographs",
  "Proof of residential address",
  "Parent / guardian identity proof",
];

const feeStructure = [
  {
    grade: "Grade 1–5",
    annualFee: "₹45,000",
    admissionFee: "₹8,000",
  },
  {
    grade: "Grade 6–8",
    annualFee: "₹58,000",
    admissionFee: "₹10,000",
  },
  {
    grade: "Grade 9–12",
    annualFee: "₹72,000",
    admissionFee: "₹12,000",
  },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of a Primary School student",
    quote:
      "The welcoming environment and encouraging teachers make learning an enjoyable experience for our child.",
  },
  {
    name: "Rahul Mehta",
    role: "Parent of a Middle School student",
    quote:
      "We appreciate the balance between academics, creative activities, and opportunities to build confidence.",
  },
  {
    name: "Ananya Rao",
    role: "Parent of a Secondary School student",
    quote:
      "The focus on independent thinking and personal development has made a positive impression on our family.",
  },
];

const faqs = [
  {
    question: "How do I apply for admission?",
    answer:
      "Start by submitting an enquiry through this page. The admissions team can guide you through the application and next steps.",
  },
  {
    question: "Which classes are accepting applications?",
    answer:
      "The sample admissions page covers Primary, Middle, Secondary, and Senior Secondary levels for the 2027–28 session. Confirm grade availability with the school.",
  },
  {
    question: "What documents should I prepare?",
    answer:
      "Typical documents include a birth certificate, previous school records where applicable, passport-size photographs, address proof, and parent or guardian ID proof.",
  },
  {
    question: "Is an entrance assessment required?",
    answer:
      "An age-appropriate assessment or interaction may apply depending on the grade. Please contact admissions for the applicable process.",
  },
  {
    question: "How can I schedule a campus visit?",
    answer:
      "Use the enquiry form and select Campus Visit as your enquiry type. The school can then coordinate a suitable visit time.",
  },
];

function WhyChooseUs() {
  return (
    <section className="section" id="why-us">
      <div className="section-heading">
        <p className="eyebrow">THE EAK DIFFERENCE</p>
        <h2>A place where every child can thrive.</h2>
        <p>
          Great education is about more than grades. It's about helping every
          child discover their potential.
        </p>
      </div>

      <div className="reasons-grid">
        {reasons.map((reason) => (
          <article className="reason-card" key={reason.title}>
            <div className="reason-icon">{reason.icon}</div>
            <h3>{reason.title}</h3>
            <p>{reason.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AcademicPrograms() {
  return (
    <section className="section programs-section" id="programs">
      <div className="section-heading">
        <p className="eyebrow">LEARNING FOR EVERY STAGE</p>
        <h2>Every stage. A new possibility.</h2>
        <p>
          A thoughtful learning journey from foundational skills to higher
          education readiness.
        </p>
      </div>

      <div className="programs-grid">
        {programs.map((program) => (
          <article className="program-card" key={program.level}>
            <span className="program-number">{program.level}</span>
            <h3>{program.title}</h3>
            <p className="program-classes">{program.classes}</p>
            <p>{program.description}</p>

            <ul>
              {program.features.map((feature) => (
                <li key={feature}>✓ {feature}</li>
              ))}
            </ul>

            <a href="#contact" className="program-link">
              Enquire about this level ↗
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function SchoolHighlights() {
  return (
    <section className="highlights-section" id="highlights">
      <div className="section-heading">
        <p className="eyebrow">OUR SCHOOL AT A GLANCE</p>
        <h2>Growing together, achieving more.</h2>
      </div>

      <div className="highlights-grid">
        {highlights.map((item) => (
          <div className="highlight-item" key={item.label}>
            <h3>{item.number}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>

      <p className="sample-note">
        Illustrative sample statistics for this assignment.
      </p>
    </section>
  );
}

function Facilities() {
  return (
    <section className="section" id="facilities">
      <div className="section-heading">
        <p className="eyebrow">OUR CAMPUS</p>
        <h2>Space to learn, explore, and grow.</h2>
        <p>
          A supportive environment with spaces designed for academic learning
          and personal development.
        </p>
      </div>

      <div className="facilities-grid">
        {facilities.map((facility) => (
          <article className="facility-card" key={facility.title}>
            <div className="reason-icon">{facility.icon}</div>
            <h3>{facility.title}</h3>
            <p>{facility.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AdmissionProcess() {
  return (
    <section className="section process-section" id="admissions">
      <div className="section-heading">
        <p className="eyebrow">HOW TO JOIN EAK</p>
        <h2>Your admission journey, made simple.</h2>
        <p>
          Five clear steps to help families understand the admission process.
        </p>
      </div>

      <div className="process-list">
        {admissionSteps.map((step) => (
          <article className="process-step" key={step.number}>
            <div className="process-number">{step.number}</div>
            <div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ImportantDates() {
  return (
    <section className="section dates-section" id="dates">
      <div className="section-heading">
        <p className="eyebrow">PLAN AHEAD</p>
        <h2>Important admission dates.</h2>
        <p>
          Keep track of the key milestones for the 2027–28 academic session.
        </p>
      </div>

      <div className="dates-list">
        {importantDates.map((item, index) => (
          <article className="date-card" key={item.event}>
            <div className="date-marker">
              {String(index + 1).padStart(2, "0")}
            </div>
            <div className="date-info">
              <h3>{item.event}</h3>
              <p>{item.date}</p>
            </div>
          </article>
        ))}
      </div>
      <p className="sample-note date-note">
        Sample dates for demonstration. Confirm actual dates with the school.
      </p>
    </section>
  );
}

function RequiredDocuments() {
  return (
    <section className="section documents-section" id="documents">
      <div className="section-heading">
        <p className="eyebrow">BE PREPARED</p>
        <h2>Documents to keep ready.</h2>
        <p>
          Prepare these documents before completing your admission application.
        </p>
      </div>

      <div className="documents-card">
        {documents.map((document) => (
          <div className="document-row" key={document}>
            <span className="document-check">✓</span>
            <span>{document}</span>
          </div>
        ))}
        <p className="documents-note">
          Additional documents may be requested depending on the grade.
        </p>
      </div>
    </section>
  );
}

function FeeStructure() {
  return (
    <section className="section fees-section" id="fees">
      <div className="section-heading">
        <p className="eyebrow">FEE INFORMATION</p>
        <h2>Clear fees. Confident planning.</h2>
        <p>
          Review the sample annual and one-time admission fees for different
          grade ranges.
        </p>
      </div>

      <div className="fees-table-wrapper">
        <table className="fees-table">
          <thead>
            <tr>
              <th>Grade</th>
              <th>Annual Fee</th>
              <th>Admission Fee</th>
            </tr>
          </thead>

          <tbody>
            {feeStructure.map((fee) => (
              <tr key={fee.grade}>
                <td>{fee.grade}</td>
                <td>{fee.annualFee}</td>
                <td>{fee.admissionFee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="fees-note">
        Illustrative fees for this assignment only. Confirm the actual fee
        structure with the school.
      </p>
    </section>
  );
}

function ParentTestimonials() {
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="section-heading">
        <p className="eyebrow">PARENT EXPERIENCES</p>
        <h2>Growing together, as one community.</h2>
        <p>
          A sample of the positive experiences families might share about their
          school journey.
        </p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.name}>
            <div
              className="testimonial-stars"
              aria-label="Sample five-star rating"
            >
              ★★★★★
            </div>

            <blockquote>"{item.quote}"</blockquote>

            <div className="testimonial-author">
              <div className="author-avatar" aria-hidden="true">
                {item.name.charAt(0)}
              </div>

              <div>
                <h3>{item.name}</h3>
                <p>{item.role}</p>
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="fees-note">
        Fictional testimonials created for this assignment.
      </p>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section" id="faq">
      <div className="section-heading">
        <p className="eyebrow">HAVE QUESTIONS?</p>
        <h2>Answers for your admission journey.</h2>
        <p>Find answers to some common questions from parents.</p>
      </div>

      <div className="faq-list">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <article className="faq-item" key={faq.question}>
              <button
                type="button"
                className="faq-question"
                aria-expanded={isOpen}
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon" aria-hidden="true">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

function EnquirySection() {
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    grade: "",
    enquiryType: "Admission Enquiry",
  });

  const [message, setMessage] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setMessage("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    setMessage(
      `Thank you, ${formData.parentName}! Your enquiry has been recorded in this demo. No data was sent to a server.`,
    );

    setFormData({
      parentName: "",
      email: "",
      phone: "",
      grade: "",
      enquiryType: "Admission Enquiry",
    });
  }

  return (
    <>
      <section className="final-cta">
        <p className="eyebrow">YOUR CHILD'S NEXT CHAPTER</p>

        <h2>Give your child a future-ready education.</h2>

        <p>
          Discover a learning community that encourages curiosity, confidence,
          and lifelong growth.
        </p>

        <div className="final-cta-actions">
          <a href="#contact" className="cta-light-button">
            Apply Now ↗
          </a>

          <a href="#contact" className="cta-outline-button">
            Book a Campus Visit
          </a>

          <a href="#contact" className="cta-outline-button">
            Talk to Admissions
          </a>
        </div>
      </section>

      <section className="section enquiry-section" id="contact">
        <div className="section-heading">
          <p className="eyebrow">WE'RE HERE TO HELP</p>
          <h2>Let's start a conversation.</h2>
          <p>
            Share a few details and explore the next steps for your child's
            admission.
          </p>
        </div>

        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="parentName">Parent / Guardian Name</label>
            <input
              id="parentName"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
              placeholder="Enter your full name"
              autoComplete="name"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="phone">Phone Number</label>
            <input
              id="phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              autoComplete="tel"
              pattern="[0-9+\-\s()]{7,20}"
              title="Enter a valid phone number using 7 to 20 digits or common phone symbols."
              required
            />
          </div>

          <div className="form-field">
            <label htmlFor="grade">Class Applying For</label>
            <select
              id="grade"
              name="grade"
              value={formData.grade}
              onChange={handleChange}
              required
            >
              <option value="">Select a class range</option>
              <option value="Primary School (1–5)">Primary School (1–5)</option>
              <option value="Middle School (6–8)">Middle School (6–8)</option>
              <option value="Secondary School (9–10)">
                Secondary School (9–10)
              </option>
              <option value="Senior Secondary (11–12)">
                Senior Secondary (11–12)
              </option>
            </select>
          </div>

          <div className="form-field full-width">
            <label htmlFor="enquiryType">How can we help?</label>
            <select
              id="enquiryType"
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
            >
              <option value="Admission Enquiry">Admission Enquiry</option>
              <option value="Campus Visit">Schedule a Campus Visit</option>
              <option value="Fee Information">Fee Information</option>
              <option value="General Question">General Question</option>
            </select>
          </div>

          <button type="submit" className="primary-button form-submit">
            Submit Enquiry ↗
          </button>

          {message && (
            <p className="form-message" role="status">
              {message}
            </p>
          )}
        </form>
      </section>

      <footer className="site-footer">
        <a href="#home" className="logo footer-logo">
          EAK <span>INTERNATIONAL SCHOOL</span>
        </a>

        <p>Inspiring young minds. Building brighter futures.</p>

        <a href="#home" className="back-to-top">
          Back to top ↑
        </a>

        <p className="footer-copyright">
          © 2026 EAK International School · Demo website for an assignment
        </p>
      </footer>
    </>
  );
}

function App() {
  return (
    <div className="website">
      <header className="navbar">
        <a href="#home" className="logo">
          EAK <span>INTERNATIONAL SCHOOL</span>
        </a>

        <nav>
          <a href="#programs">Academics</a>
          <a href="#facilities">Facilities</a>
          <a href="#admissions">Admissions</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Enquire Now
        </a>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">ADMISSIONS OPEN · 2027–28</p>

            <h1>
              A brighter future
              <br />
              begins <span>here.</span>
            </h1>

            <p className="hero-description">
              Discover a learning environment where curiosity, confidence, and
              creativity help every child thrive.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="primary-button">
                Apply Now ↗
              </a>

              <a href="#programs" className="secondary-button">
                Explore Academics
              </a>
            </div>

            <p className="hero-note">
              Nurturing young minds. Inspiring lifelong learning.
            </p>
          </div>

          <div className="hero-visual">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"
              alt="Students learning together in a classroom"
            />

            <div className="image-label">
              <span>✦</span>
              Learning beyond boundaries
            </div>
          </div>
        </section>

        <WhyChooseUs />
        <AcademicPrograms />
        <SchoolHighlights />
        <Facilities />
        <AdmissionProcess />
        <ImportantDates />
        <RequiredDocuments />
        <FeeStructure />
        <ParentTestimonials />
        <FAQ />
        <EnquirySection />
      </main>
    </div>
  );
}

export default App;
