'use client'
import React from 'react'
import { PolicyLayout } from '@/components/PolicyLayout'

export default function LegalRestrictionsPage() {
  return (
    <PolicyLayout title="Legal Restrictions" lastUpdated="March 30, 2026">
      <h2>1. Permitted Use</h2>
      <p>
        You are granted a limited, non-exclusive license to access the free resources on this site for personal or internal business use.
      </p>

      <h2>2. Prohibited Activities</h2>
      <p>
        You may not:
      </p>
      <ul>
        <li>Modify or copy the materials for commercial resale.</li>
        <li>Use the materials for any public display (commercial or non-commercial) without attribution.</li>
        <li>Attempt to decompile or reverse engineer any software contained on the website.</li>
        <li>Remove any copyright or other proprietary notations from the materials.</li>
      </ul>

      <h2>3. Disclaimer</h2>
      <p>
        The materials on this website are provided on an 'as is' basis. Edmond Moepswa makes no warranties, expressed or implied, regarding the accuracy or reliability of the materials or any sites linked to this site.
      </p>
    </PolicyLayout>
  )
}
