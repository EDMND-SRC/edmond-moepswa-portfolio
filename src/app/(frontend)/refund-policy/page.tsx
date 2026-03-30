import React from 'react'
import { PolicyLayout } from '@/components/PolicyLayout'

export default function RefundPolicyPage() {
  return (
    <PolicyLayout title="Refund & Dispute Policy" lastUpdated="March 30, 2026">
      <h2>1. Overview</h2>
      <p>
        At Edmond Moepswa Portfolios, we strive for 100% client satisfaction. However, due to the digital nature of our services and products, we have established the following refund and dispute policy.
      </p>

      <h2>2. Digital Products (Gumroad)</h2>
      <p>
        All digital products, including guides, checklists, and templates, are considered "used" once downloaded or opened. As such, all sales are final and non-refundable.
      </p>

      <h2>3. Service-Based Projects</h2>
      <p>
        For web design, branding, and development services:
      </p>
      <ul>
        <li><strong>Deposit:</strong> All project deposits are non-refundable as they secure your spot in our production schedule.</li>
        <li><strong>Work in Progress:</strong> If a project is cancelled by the client after work has commenced, the client is responsible for payment proportional to the work completed.</li>
        <li><strong>Final Delivery:</strong> No refunds will be issued once the final project files have been delivered or the website has been launched.</li>
      </ul>

      <h2>4. Dispute Resolution</h2>
      <p>
        We encourage clients to contact us directly at edmond.moepswa@gmail.com to resolve any issues. We commit to responding to all service-related concerns within 48 business hours.
      </p>
    </PolicyLayout>
  )
}
