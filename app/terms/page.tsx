export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 35% at 50% 0%, rgba(226, 232, 240, 0.12), transparent 60%), #000000",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Terms of Service</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <h2>1. Purpose</h2>
          <p>
            These Terms of Service ("Terms") govern your use of PyLibKit services ("Service")
            provided by Byteflow ("Company", "we", "us", or "our") and define the rights,
            obligations, and responsibilities between the Company and users.
          </p>

          <h2>2. Definitions</h2>
          <ol>
            <li>"Service" means PyLibKit SDK and related software provided by the Company.</li>
            <li>"User" means any individual who accesses or uses our Service.</li>
            <li>"Member" means a user who has registered for an account by providing personal information.</li>
          </ol>

          <h2>3. Acceptance and Modification of Terms</h2>
          <ol>
            <li>These Terms apply to all users who wish to use the Service.</li>
            <li>The Company may modify these Terms when reasonable grounds exist.</li>
            <li>Modified Terms become effective upon posting on our website.</li>
          </ol>

          <h2>4. Service Provision and Changes</h2>
          <ol>
            <li>The Company provides users with the following services:
              <ul>
                <li>PyLibKit SDK download and usage</li>
                <li>Related documentation and guides</li>
                <li>Technical support services</li>
              </ul>
            </li>
            <li>The Company may modify the content of the Service and will provide advance notice of such changes.</li>
          </ol>

          <h2>5. User Obligations</h2>
          <ol>
            <li>Users must comply with these Terms and applicable laws.</li>
            <li>Users may not use the Service for:
              <ul>
                <li>Illegal purposes</li>
                <li>Activities that infringe on others' rights</li>
                <li>Actions that disrupt the stable operation of the Service</li>
              </ul>
            </li>
          </ol>

          <h2>6. Intellectual Property Rights</h2>
          <ol>
            <li>All copyrights and intellectual property rights related to the Service belong to the Company.</li>
            <li>Users may not reproduce, transmit, publish, distribute, broadcast, or otherwise commercially exploit any information obtained through the Service without the Company's prior consent.</li>
          </ol>

          <h2>7. Service Use Restrictions</h2>
          <p>
            The Company may restrict or suspend Service usage if users violate these Terms
            or disrupt the normal operation of the Service.
          </p>

          <h2>8. Disclaimer</h2>
          <ol>
            <li>The Company is exempt from liability for Service provision if unable to provide Service due to force majeure events such as natural disasters.</li>
            <li>The Company is not responsible for Service usage disruptions caused by user negligence.</li>
          </ol>

          <h2>9. Governing Law and Jurisdiction</h2>
          <ol>
            <li>These Terms shall be governed by and construed in accordance with the laws of the Republic of Korea.</li>
            <li>Any disputes arising from Service usage shall be subject to the jurisdiction of the Seoul Central District Court in the Republic of Korea.</li>
          </ol>
        </div>

        {/* Back to home */}
        <div className="mt-12 pt-8 border-t border-border">
          <a
            href="/"
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}