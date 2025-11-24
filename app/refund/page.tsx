export default function RefundPolicy() {
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
          <h1 className="text-4xl font-bold mb-4">Refund Policy</h1>
          <p className="text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none">
          <h2>1. Overview</h2>
          <p>
            At Byteflow, we want you to be satisfied with your purchase of PyLibKit SDK.
            This Refund Policy explains when and how you can request a refund for our services.
          </p>

          <h2>2. Refund Eligibility</h2>
          <h3>2.1 30-Day Money-Back Guarantee</h3>
          <p>
            We offer a 30-day money-back guarantee for all PyLibKit SDK purchases.
            You may request a full refund within 30 days of your initial purchase if:
          </p>
          <ul>
            <li>You are not satisfied with the SDK functionality</li>
            <li>The SDK does not meet the technical specifications as described</li>
            <li>You experience technical issues that cannot be resolved by our support team</li>
          </ul>

          <h3>2.2 Conditions for Refunds</h3>
          <p>Refunds are subject to the following conditions:</p>
          <ul>
            <li>The refund request must be made within 30 days of purchase</li>
            <li>You must provide a valid reason for the refund request</li>
            <li>You must allow our support team to attempt to resolve any technical issues</li>
            <li>The license must not have been used in a production application that has been distributed</li>
          </ul>

          <h2>3. Non-Refundable Items</h2>
          <p>The following items are not eligible for refunds:</p>
          <ul>
            <li>Custom development services</li>
            <li>Training and consultation services after they have been delivered</li>
            <li>Licenses purchased more than 30 days ago</li>
            <li>Licenses that have been used in distributed production applications</li>
          </ul>

          <h2>4. How to Request a Refund</h2>
          <p>To request a refund, please follow these steps:</p>
          <ol>
            <li>Contact our support team at <strong>support@pylibkit.org</strong></li>
            <li>Include your purchase information (order number, purchase date, email address)</li>
            <li>Provide a clear reason for your refund request</li>
            <li>Allow our team to work with you to resolve any issues before proceeding with the refund</li>
          </ol>

          <h2>5. Refund Processing</h2>
          <h3>5.1 Processing Time</h3>
          <ul>
            <li>Refund requests will be reviewed within 2-3 business days</li>
            <li>Once approved, refunds will be processed within 5-7 business days</li>
            <li>The refunded amount will be credited to your original payment method</li>
          </ul>

          <h3>5.2 Partial Refunds</h3>
          <p>
            In certain cases, we may offer partial refunds at our discretion, such as:
          </p>
          <ul>
            <li>When only specific features of the SDK are not working as expected</li>
            <li>For enterprise licenses where only partial functionality has been utilized</li>
          </ul>

          <h2>6. Enterprise and Custom Plans</h2>
          <p>
            For Enterprise and custom plans, refund terms may vary and will be specified
            in your individual service agreement. Please refer to your contract for specific refund terms.
          </p>

          <h2>7. Subscription Cancellations</h2>
          <p>
            If we offer subscription-based services in the future:
          </p>
          <ul>
            <li>You may cancel your subscription at any time</li>
            <li>Cancellations will take effect at the end of your current billing period</li>
            <li>No refunds will be provided for partial billing periods unless required by law</li>
          </ul>

          <h2>8. Exceptional Circumstances</h2>
          <p>
            We may consider refunds outside of this policy in exceptional circumstances,
            such as technical failures on our part or other situations at our sole discretion.
          </p>

          <h2>9. Contact Information</h2>
          <p>
            If you have any questions about this Refund Policy or need to request a refund,
            please contact us:
          </p>
          <ul>
            <li>Email: <strong>support@pylibkit.org</strong></li>
            <li>Subject line: "Refund Request - [Your Order Number]"</li>
          </ul>

          <h2>10. Policy Changes</h2>
          <p>
            We reserve the right to modify this Refund Policy at any time.
            Any changes will be posted on this page and will take effect immediately upon posting.
          </p>
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