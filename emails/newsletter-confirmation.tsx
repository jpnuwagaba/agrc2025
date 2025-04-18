import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
  Img,
  Link,
  Row,
  Column,
} from "@react-email/components"

interface NewsletterConfirmationEmailProps {
  name: string
  email: string
  date: string
}

export const NewsletterConfirmationEmail = ({ name, email, date }: NewsletterConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>
        Thank you for subscribing to the AGRC2025 EALAN Conference newsletter. Stay updated with the latest conference
        news!
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/agrclogo.png-rXimB.png"
              width="120"
              height="50"
              alt="AGRC2025 Logo"
              style={logo}
            />
          </Section>
          <Heading style={h1}>Newsletter Subscription Confirmed</Heading>

          <Text style={text}>Dear {name || "Subscriber"},</Text>

          <Text style={text}>
            Thank you for subscribing to the <strong>AGRC2025 EALAN Conference</strong> newsletter. You're now part of
            our community and will receive important updates about the conference.
          </Text>

          <Section style={boxInfos}>
            <Row>
              <Column>
                <Text style={boxTitle}>Subscription Email</Text>
                <Text style={boxContent}>{email}</Text>
              </Column>
              <Column>
                <Text style={boxTitle}>Subscription Date</Text>
                <Text style={boxContent}>{date}</Text>
              </Column>
            </Row>
          </Section>

          <Heading as="h2" style={h2}>
            What to Expect
          </Heading>

          <Section style={detailsContainer}>
            <Text style={sectionTitle}>You'll receive updates about:</Text>
            <ul style={listStyle}>
              <li style={listItemStyle}>Important conference dates and deadlines</li>
              <li style={listItemStyle}>Keynote speakers and special guests</li>
              <li style={listItemStyle}>Workshop and session details</li>
              <li style={listItemStyle}>Registration information and early bird offers</li>
              <li style={listItemStyle}>Accommodation and travel tips</li>
            </ul>
          </Section>

          <Section style={ctaContainer}>
            <Text style={text}>
              We're excited to have you join us for this important event focused on "Geo-Enablement for Sustainable
              Development: Harnessing Innovation in Geomatics and Land Administration."
            </Text>
            <Text style={text}>Visit our website to learn more about the conference and register to attend:</Text>
            <Link href="https://agrc2025ealan.org" style={button}>
              Visit Conference Website
            </Link>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            If you did not sign up for this newsletter, please disregard this email or{" "}
            <Link
              href="mailto:unsubscribe@agrc2025ealan.com?subject=Unsubscribe&body=Please unsubscribe me from the AGRC2025 EALAN Conference newsletter"
              style={link}
            >
              click here to unsubscribe
            </Link>
            .
          </Text>

          <Text style={footer}>© 2025 AGRC2025 EALAN Conference. All rights reserved.</Text>

          <Text style={footer}>
            Makerere University, Department of Geomatics and Land Management
            <br />
            University Road, Kampala, Uganda
          </Text>
        </Container>
      </Body>
    </Html>
  )
}

// Styles
const main = {
  backgroundColor: "#f5f5f5",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif',
}

const container = {
  margin: "0 auto",
  padding: "20px 0",
  maxWidth: "600px",
}

const logoContainer = {
  padding: "20px 0",
  textAlign: "center" as const,
}

const logo = {
  margin: "0 auto",
}

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  margin: "30px 0",
  padding: "0",
  textAlign: "center" as const,
}

const h2 = {
  color: "#333",
  fontSize: "20px",
  fontWeight: "bold",
  margin: "20px 0 10px",
  padding: "0",
}

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "16px 0",
}

const boxInfos = {
  backgroundColor: "#f0f0f0",
  borderRadius: "4px",
  margin: "20px 0",
  padding: "20px",
}

const boxTitle = {
  fontSize: "12px",
  color: "#666",
  margin: "0",
}

const boxContent = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#333",
  margin: "4px 0 0",
}

const detailsContainer = {
  backgroundColor: "#ffffff",
  borderRadius: "4px",
  margin: "20px 0",
  padding: "20px",
  border: "1px solid #eaeaea",
}

const ctaContainer = {
  backgroundColor: "#f9f9f9",
  borderRadius: "4px",
  margin: "20px 0",
  padding: "20px",
  border: "1px solid #eaeaea",
  textAlign: "center" as const,
}

const sectionTitle = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#38a347",
  margin: "0 0 10px",
}

const listStyle = {
  paddingLeft: "20px",
  margin: "10px 0",
}

const listItemStyle = {
  margin: "8px 0",
  color: "#333",
}

const button = {
  backgroundColor: "#38a347",
  borderRadius: "4px",
  color: "#fff",
  display: "inline-block",
  fontSize: "16px",
  fontWeight: "bold",
  margin: "20px 0",
  padding: "12px 24px",
  textDecoration: "none",
}

const hr = {
  borderColor: "#eaeaea",
  margin: "20px 0",
}

const link = {
  color: "#38a347",
  textDecoration: "underline",
}

const footer = {
  color: "#666",
  fontSize: "12px",
  lineHeight: "20px",
  margin: "12px 0",
  textAlign: "center" as const,
}

export default NewsletterConfirmationEmail
