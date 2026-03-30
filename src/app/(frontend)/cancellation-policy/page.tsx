import React from 'react'
import { PolicyLayout } from '@/components/PolicyLayout'

export default function CancellationPolicyPage() {
  return (
    <PolicyLayout title="Cancellation Policy" lastUpdated="March 30, 2026">
      <h2>1. Project Cancellation</h2>
      <p>
        Clients may cancel a service-based project at any time. To cancel, please provide written notice via email to edmond.moepswa@gmail.com.
      </p>

      <h2>2. Rescheduling</h2>
      <p>
        If you need to reschedule a consulting call or project kickoff:
      </p>
      <ul>
        <li><strong>More than 24 hours notice:</strong> No penalty. You can reschedule using the link provided in your confirmation email.</li>
        <li><strong>Less than 24 hours notice:</strong> A rescheduling fee may apply at our discretion.</li>
      </ul>

      <h2>3. Termination for Cause</h2>
      <p>
        We reserve the right to terminate a project if the client fails to provide necessary feedback or assets for more than 30 consecutive days, or if there is a breach of the agreed-upon Terms & Conditions.
      </p>
    </PolicyLayout>
  )
}
