import type React from "react"
export const metadata = {
  title: "AGRC2025 EALAN Conference - Content Studio",
  description: "Content management for the AGRC2025 EALAN Conference website",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
