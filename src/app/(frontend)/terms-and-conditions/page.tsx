import React from 'react'
import { PolicyLayout } from '@/components/PolicyLayout'

export default function TermsAndConditionsPage() {
  return (
    <PolicyLayout title="Terms & Conditions" lastUpdated="March 30, 2026">
      <h2>1. Acceptance of Terms</h2>
      <p>
        By accessing this website and engaging our services, you agree to be bound by these Terms & Conditions and all applicable laws and regulations.
      </p>

      <h2>2. Intellectual Property</h2>
      <p>
        Unless otherwise stated, all intellectual property rights for the website content and design are owned by Edmond Moepswa. Upon full payment for service-based projects, the client is granted a license to use the final deliverables for their intended business purpose.
      </p>

      <h2>3. Client Responsibilities</h2>
      <p>
        Clients are responsible for providing accurate information, timely feedback, and necessary assets for project completion. Delays in client delivery may result in adjusted project timelines.
      </p>

      <h2>4. Limitation of Liability</h2>
      <p>
        Edmond Moepswa will not be liable for any indirect, incidental, or consequential damages arising out of the use or inability to use our services or products.
      </p>
    </PolicyLayout>
  )
}
