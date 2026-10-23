import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { ScrollToTop } from "./ScrollToTop";
import { motion } from "framer-motion";
import { PAGE_X } from "@/lib/utils";

const ease = [0.22, 1, 0.36, 1] as const;

const serviceScope = [
  "Candidate sourcing",
  "Database Maintenance",
  "Lead generation",
  "Data Entry",
  "Job Searches",
  "Data validation",
  "Tracking candidates for job changes",
  "Administrative support tasks, as mutually discussed and agreed",
];

export function Agreements() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-background text-foreground">
      <ScrollToTop />
      <Nav />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-white py-24 lg:py-32">
          <div className={PAGE_X}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              className="max-w-5xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#EE8021]">
                OUR AGREEMENTS
              </p>

              <h1 className="mt-6 text-4xl font-bold leading-tight text-[#071330] sm:text-5xl lg:text-6xl">
                Full-Time Research Support
                <br />
                Service Level Agreement
              </h1>

              <div className="mt-8 inline-flex rounded-full bg-[#377589]/10 px-6 py-3 text-lg font-semibold text-[#377589]">
                $1,200 / Month
              </div>

              <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-600">
                This Service Level Agreement establishes the terms and conditions for dedicated
                full-time research support services provided by Legacy Group International.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Agreement Content */}
        <section className="bg-[#FAFAF8] py-16 lg:py-24">
          <div className={PAGE_X}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
              className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-xl"
            >
              {/* Introduction */}
              <div className="border-b border-gray-200 p-8 md:p-12 lg:p-14">
                <div className="max-w-5xl space-y-6 text-base leading-8 text-[#071330]">
                  <p>
                    This Agreement is entered into by and between Legacy Group International dba as
                    “Legacy Digitronics Pvt. Ltd.” and the subscribing party “customer”,
                    collectively referred to as the “parties.”
                  </p>

                  <p>
                    By clicking{" "}
                    <a
                      href="https://buy.stripe.com/5kA9BTczk7mM51eeZW"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-orange-500 hover:underline"
                    >
                      Click Here to Pay / Subscribe
                    </a>
                    , the Customer agrees to enter into this Service Agreement Subscription
                    digitally...
                  </p>
                </div>
              </div>

              {/* 1. Service Scope */}
              <AgreementSection number="1" title="Service Scope">
                <p>
                  Legacy Group shall provide the Customer with dedicated researchers/teams/virtual
                  assistants to perform services including, but not limited to:
                </p>

                <BulletList items={serviceScope} />
              </AgreementSection>

              {/* 2. Pricing */}
              <AgreementSection
                number="2"
                title="Full-Time Research Support Service, Subscription and Pricing"
              >
                <Clause number="2.1">
                  The Full-time research support services are non-refundable, subscription-based,
                  and payable in advance via auto-debit payment systems.
                </Clause>

                <Clause number="2.2">
                  The Full-Time Subscription Plan comprises 160 hours of research support per month
                  at a rate of USD $1200/month.
                </Clause>

                <Clause number="2.3">
                  The Customer agrees to provide a minimum of 160 hours of work per month, as a
                  customary obligation.
                </Clause>

                <Clause number="2.4">
                  In the event the Customer fails to provide or assign a minimum of 160 hours of
                  work in any given month, the monthly subscription fee shall remain unaffected. A
                  flat fee of USD $1200 per month will continue to be billed to the Customer
                  irrespective of the actual hours of work assigned.
                </Clause>

                <Clause number="2.5">
                  Legacy Group shall provide:
                  <ul className="mt-4 list-disc space-y-2 pl-6">
                    <li>Daily email status updates</li>
                    <li>Monthly time sheets detailing hours worked and tasks performed</li>
                  </ul>
                </Clause>
              </AgreementSection>

              {/* 3. Customer Responsibilities */}
              <AgreementSection number="3" title="Customer Responsibilities and Logistics">
                <Clause number="3.1">
                  The Customer shall provide all necessary access to job boards, databases, CRMs/ATS
                  systems, and any other licensed or proprietary platforms required to perform
                  assigned tasks.
                </Clause>

                <Clause number="3.2">Payments must be made in advance on a monthly basis.</Clause>

                <Clause number="3.3">
                  This Agreement has a minimum term of three (3) months. Upon completion of the
                  initial three-month period, the subscription may be cancelled by either Party with
                  a minimum of one (1) month’s written notice.
                </Clause>

                <Clause number="3.4">
                  Legacy Group shall address and resolve any performance or quality-related issues
                  reported by the Customer in a timely manner.
                </Clause>
              </AgreementSection>

              {/* 4. Confidentiality */}
              <AgreementSection number="4" title="Confidentiality and Data Security">
                <Clause number="4.1">
                  Legacy Group shall maintain strict confidentiality regarding all information,
                  data, and materials received from the Customer and shall not disclose, share, or
                  use such information except for the execution of agreed services.
                </Clause>

                <Clause number="4.2">
                  Any breach of confidentiality shall constitute grounds for immediate termination
                  of this Agreement.
                </Clause>

                <Clause number="4.3">
                  Legacy Group employs robust cybersecurity protocols, including UNIX-based secured
                  networks, monitored staff email and activity tracking, and ERP-controlled access
                  to Customer resources.
                </Clause>

                <Clause number="4.4">
                  For platforms such as LinkedIn Recruiter, access shall be facilitated through
                  secure remote desktops to avoid direct credential sharing.
                </Clause>
              </AgreementSection>

              {/* 5. Non-Competition */}
              <AgreementSection number="5" title="Non-Competition and Non-Solicitation">
                <Clause number="5.1">
                  Legacy Group shall not engage in any business activities that directly or
                  indirectly compete with the Customer’s line of business.
                </Clause>

                <Clause number="5.2">
                  The Customer shall not solicit or engage (directly or indirectly) with current or
                  former employees of Legacy Group for employment, consultancy, or business dealings
                  without prior written consent of Legacy Group.
                </Clause>

                <Clause number="5.3">
                  Both Parties mutually agree to honour this non-competition and non-solicitation
                  clause.
                </Clause>

                <Clause number="5.4">
                  A breach of this clause by either Party shall render the breaching Party liable to
                  pay liquidated damages of INR 25,00,000/- (Twenty-Five Lakhs, approx. USD
                  $30,000).
                </Clause>
              </AgreementSection>

              {/* 6. Termination */}
              <AgreementSection number="6" title="Subscription Terms and Termination">
                <Clause number="6.1">
                  This Agreement shall become effective on the date of subscription and shall remain
                  in force for three (3) months.
                </Clause>

                <Clause number="6.2">
                  Either Party may terminate the Agreement after the completion of the initial term,
                  i.e. 3 months, with one (1) month’s written notice.
                </Clause>

                <Clause number="6.3">
                  Legacy Group shall complete all ongoing tasks or projects during the notice
                  period.
                </Clause>

                <Clause number="6.4">
                  In the event of payment default, the Customer expressly authorizes Legacy Group to
                  charge any outstanding dues directly to the Customer’s credit card on record and
                  agrees to pay any legal expenditure incurred by Legacy Group in the process of
                  recovering any outstanding dues.
                </Clause>
              </AgreementSection>

              {/* 7. No Refund */}
              <AgreementSection number="7" title="No Refund Policy">
                <Clause number="7.1">There will not be any refund issued to the customers.</Clause>

                <Clause number="7.2">
                  Any subscription payments made by the customers will be traded against services
                  only.
                </Clause>

                <Clause number="7.3">
                  Legacy Group will pay attention to any customary issued reported in writing and
                  provide resolutions in timely manner, as far as the customary issues are under the
                  service scope as per this service agreement.
                </Clause>

                <Clause number="7.4">
                  The customer agrees to resolve any dispute working with Legacy Group and won’t
                  attempt any charge backs to their credit cards as per this written No Refund
                  Policy.
                </Clause>
              </AgreementSection>

              {/* Agreement Footer */}
              <div className="border-t border-gray-200 bg-[#377589] px-8 py-10 text-white md:px-12 lg:px-14">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#EE8021]">
                      Legacy Group International
                    </p>

                    <p className="mt-3 text-lg font-semibold">Intelligent Business Solutions</p>

                    <p className="mt-4 leading-7 text-gray-200">
                      1252, Turnbury Lane,
                      <br />
                      North Wales, PA 19454
                      <br />
                      USA
                    </p>

                    <p className="mt-4 text-gray-200">Phone: +1 (215) 458-6729</p>
                  </div>

                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#EE8021]">
                      India Office
                    </p>

                    <p className="mt-3 leading-7 text-gray-200">
                      201, Brij Industries Complex,
                      <br />
                      Makarpura GIDC, Vadsar Road,
                      <br />
                      Vadodara, Gujarat – 390010
                    </p>

                    <p className="mt-4 text-gray-200">Phone: +91 (265) 263-4480</p>
                  </div>
                </div>

                <div className="mt-8 border-t border-white/20 pt-6 text-sm text-gray-300">
                  www.intlg.com · www.legacydigitronics.com · sales@intlg.com
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function AgreementSection({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-b border-gray-200 px-8 py-10 md:px-12 lg:px-14">
      <div className="flex items-start gap-5">
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#377589] text-sm font-bold text-white">
          {number}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="text-2xl font-bold text-[#071330] md:text-3xl">{title}</h2>

          <div className="mt-6 space-y-6 text-base leading-8 text-[#071330]">{children}</div>
        </div>
      </div>
    </section>
  );
}

function Clause({ number, children }: { number: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-[#FAFAF8] p-5 md:p-6 text-[#071330]">
      <p>
        <span className="mr-2 font-semibold text-[#377589]">{number}</span>
        {children}
      </p>
    </div>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-5 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item} className="rounded-xl border border-gray-100 bg-[#FAFAF8] px-5 py-4">
          <span className="mr-3 font-bold text-[#EE8021]">•</span>
          {item}
        </li>
      ))}
    </ul>
  );
}

function AgreementContact() {
  return (
    <div className="border-b border-gray-200 bg-[#FAFAF8] px-8 py-8 md:px-12 lg:px-14">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <p className="font-semibold text-[#071330]">Legacy Group International</p>
          <p className="mt-2 text-sm leading-6 text-[#071330]">
            Intelligent Business Solutions
            <br />
            1252, Turnbury Lane,
            <br />
            North Wales, PA 19454
            <br />
            USA
            <br />
            Phone: +1 (215) 458-6729
            <br />
            Web: www.intlg.com
            <br />
            Email: sales@intlg.com
          </p>
        </div>

        <div>
          <p className="font-semibold text-[#071330]">India Office</p>
          <p className="mt-2 text-sm leading-6 text-[#071330]">
            201, Brij Industries Complex,
            <br />
            Makarpura GIDC, Vadsar Road,
            <br />
            Vadodara, Gujarat – 390010
            <br />
            Phone: +91 (265) 263-4480
            <br />
            Web: www.legacydigitronics.com
            <br />
            Email: sales@intlg.com
          </p>
        </div>
      </div>
    </div>
  );
}
