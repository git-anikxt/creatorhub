export default function PrivacyPolicy() {
  return (
    <div className="hero-mesh dot-grid min-h-screen">
      <div
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "80px 24px",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "700",
            marginBottom: "1rem",
          }}
        >
          Privacy Policy
        </h1>

        <p style={{ color: "#94a3b8", marginBottom: "3rem" }}>
          Last Updated: June 2026
        </p>

        <p>
          Welcome to FundFlow. Your privacy is important to us. This Privacy
          Policy explains how we collect, use, and protect your information
          when you use our platform.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">1. Information We Collect</h2>

        <h3 className="mt-6 text-xl font-medium">Account Information</h3>
        <ul className="list-disc ml-6 mt-3">
          <li>Name</li>
          <li>Email address</li>
          <li>Profile picture</li>
          <li>Public profile information provided by the authentication provider</li>
        </ul>

        <h3 className="mt-6 text-xl font-medium">Creator Information</h3>
        <ul className="list-disc ml-6 mt-3">
          <li>Display name</li>
          <li>Username</li>
          <li>Bio</li>
          <li>Profile image</li>
          <li>Cover image</li>
          <li>Social media links</li>
          <li>Payment-related details required for creator support</li>
        </ul>

        <h3 className="mt-6 text-xl font-medium">Payment Information</h3>
        <p className="mt-3">
          FundFlow uses third-party payment providers such as Razorpay to
          process payments.
        </p>

        <p className="mt-3">We do not store:</p>

        <ul className="list-disc ml-6 mt-3">
          <li>Credit card information</li>
          <li>Debit card information</li>
          <li>UPI PINs</li>
          <li>Banking passwords</li>
        </ul>

        <p className="mt-3">
          Payment processing is handled securely by our payment partners.
        </p>

        <h3 className="mt-6 text-xl font-medium">Technical Information</h3>

        <ul className="list-disc ml-6 mt-3">
          <li>Browser type</li>
          <li>Device information</li>
          <li>IP address</li>
          <li>Session information</li>
          <li>Usage analytics</li>
          <li>Error logs</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">
          2. How We Use Your Information
        </h2>

        <ul className="list-disc ml-6 mt-3">
          <li>Create and manage user accounts</li>
          <li>Authenticate users</li>
          <li>Enable creator support and payments</li>
          <li>Improve platform functionality</li>
          <li>Prevent fraud and abuse</li>
          <li>Provide customer support</li>
          <li>Maintain platform security</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">
          3. Authentication Services
        </h2>

        <p className="mt-3">
          FundFlow uses third-party authentication providers including Google
          OAuth and GitHub OAuth.
        </p>

        <p className="mt-3">
          When you sign in through these services, we receive only the
          information that you authorize those providers to share.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          4. Payment Processing
        </h2>

        <p className="mt-3">
          Payments made through FundFlow are processed by trusted payment
          providers.
        </p>

        <p className="mt-3">
          FundFlow does not directly collect or store sensitive payment
          credentials.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">5. Data Security</h2>

        <ul className="list-disc ml-6 mt-3">
          <li>Secure authentication mechanisms</li>
          <li>Encrypted communication (HTTPS)</li>
          <li>Access controls</li>
          <li>Regular security monitoring</li>
        </ul>

        <p className="mt-3">
          However, no internet-based service can guarantee absolute security.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">6. Data Retention</h2>

        <p className="mt-3">
          We retain information only as long as necessary to provide our
          services, comply with legal obligations, resolve disputes, and enforce
          our agreements.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">7. User Rights</h2>

        <ul className="list-disc ml-6 mt-3">
          <li>Access your account information</li>
          <li>Update profile details</li>
          <li>Request deletion of your account</li>
          <li>Contact us regarding privacy concerns</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">
          8. Third-Party Services
        </h2>

        <ul className="list-disc ml-6 mt-3">
          <li>Google</li>
          <li>GitHub</li>
          <li>Razorpay</li>
          <li>Hosting providers</li>
          <li>Analytics providers</li>
        </ul>

        <h2 className="mt-10 text-2xl font-semibold">
          9. Children&apos;s Privacy
        </h2>

        <p className="mt-3">
          FundFlow is not intended for children under the age of 13.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">
          10. Changes to This Policy
        </h2>

        <p className="mt-3">
          We may update this Privacy Policy periodically. Updated versions will
          be posted on this page with a revised date.
        </p>

        <h2 className="mt-10 text-2xl font-semibold">11. Contact Us</h2>

        <p className="mt-3">
          For privacy-related questions or concerns:
        </p>

        <p className="mt-3">
          <strong>FundFlow Team</strong>
        </p>

        <p>Email: support@fundflow.app</p>

        <p className="mt-10 text-gray-400">
          By using FundFlow, you agree to the collection and use of information
          described in this Privacy Policy.
        </p>
      </div>
    </div>
  );
}