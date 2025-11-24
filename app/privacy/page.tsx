export default function PrivacyPolicy() {
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
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <h2>1. Purpose of Personal Information Processing</h2>
          <p>
            PyLibKit ("Company") processes personal information for the following purposes.
            Personal information being processed will not be used for purposes other than those stated below,
            and when the purpose of use changes, we will implement necessary measures such as obtaining separate consent
            in accordance with Article 18 of the Personal Information Protection Act.
          </p>
          <ol>
            <li>Member registration and management</li>
            <li>Service provision and improvement</li>
            <li>Customer support and inquiry response</li>
            <li>Analysis for service quality improvement</li>
          </ol>

          <h2>2. Personal Information Processing and Retention Period</h2>
          <ol>
            <li>The Company processes and retains personal information within the retention and use period required by law or the retention and use period agreed upon when collecting personal information from data subjects.</li>
            <li>The specific processing and retention periods for personal information are as follows:
              <ul>
                <li>Member information: Until membership withdrawal</li>
                <li>Service usage records: 3 years</li>
                <li>Website visit records: 1 year</li>
              </ul>
            </li>
          </ol>

          <h2>3. Categories of Personal Information Processed</h2>
          <p>The Company processes the following categories of personal information:</p>
          <ol>
            <li>Required items: Email address, password</li>
            <li>Optional items: Nickname, profile image</li>
            <li>Automatically collected items: IP address, cookies, service usage records, access logs</li>
          </ol>

          <h2>4. Provision of Personal Information to Third Parties</h2>
          <ol>
            <li>The Company processes personal information only within the scope specified in Section 1 (Purpose of Personal Information Processing) and provides personal information to third parties only when it falls under Article 17 of the Personal Information Protection Act, such as with the consent of the data subject or special provisions of law.</li>
            <li>Currently, the Company does not provide personal information to third parties.</li>
          </ol>

          <h2>5. Consignment of Personal Information Processing</h2>
          <p>
            The Company entrusts personal information processing tasks as follows for smooth personal information processing:
          </p>
          <ol>
            <li>Consignee: Vercel Inc.</li>
            <li>Entrusted tasks: Website hosting and operation</li>
          </ol>

          <h2>6. Rights and Obligations of Data Subjects and Exercise Methods</h2>
          <ol>
            <li>Data subjects may exercise the following personal information protection-related rights against the Company at any time:
              <ul>
                <li>Request notification of personal information processing status</li>
                <li>Request access to personal information</li>
                <li>Request correction or deletion of personal information</li>
                <li>Request suspension of personal information processing</li>
              </ul>
            </li>
            <li>Rights may be exercised in writing, by email, or fax according to Form 8 attached to the Enforcement Rules of the Personal Information Protection Act.</li>
          </ol>

          <h2>7. Security Measures for Personal Information</h2>
          <p>The Company takes the following measures to ensure the security of personal information:</p>
          <ol>
            <li>Minimization and training of personal information handling staff</li>
            <li>Access restriction to personal information</li>
            <li>Access control to networks storing personal information</li>
            <li>Encryption of personal information</li>
            <li>Storage and forgery prevention of access records</li>
          </ol>

          <h2>8. Personal Information Protection Officer</h2>
          <p>
            The Company designates a Personal Information Protection Officer as follows to take overall responsibility
            for personal information processing and to handle complaints and remedy damages related to personal information processing:
          </p>
          <ul>
            <li>Personal Information Protection Officer: PyLibKit Development Team</li>
            <li>Contact: support@pylibkit.org</li>
          </ul>

          <h2>9. Use of Cookies</h2>
          <ol>
            <li>The Company uses 'cookies' that store and frequently retrieve usage information to provide users with personalized services.</li>
            <li>Cookies are small pieces of information sent by the server (http) operating the website to the user's computer browser and may be stored on the user's PC hard disk.</li>
          </ol>

          <h2>10. Changes to Privacy Policy</h2>
          <ol>
            <li>This Privacy Policy is effective from the enforcement date, and when there are additions, deletions, or corrections to changes in accordance with laws and policies, we will notify through announcements from 7 days before the implementation of the changes.</li>
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