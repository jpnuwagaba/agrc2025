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

interface RegistrationConfirmationEmailProps {
  formData: any
  referenceNumber: string
  totalAmount: string
  date: string
}

export const RegistrationConfirmationEmail = ({
  formData,
  referenceNumber,
  totalAmount,
  date,
}: RegistrationConfirmationEmailProps) => {
  // Ensure additionalPeople exists or default to empty array
  const additionalPeople = formData.additionalPeople || []

  return (
    <Html>
      <Head />
      <Preview>
        Thank you for registering for the AGRC2025 EALAN Conference. Your registration details and payment instructions
        inside.
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
          <Heading style={h1}>Registration Successful</Heading>

          <Text style={text}>
            Dear {formData.prefix} {formData.firstName} {formData.lastName},
          </Text>

          <Text style={text}>
            Thank you for registering for the <strong>AGRC2025 EALAN Conference</strong>. Your registration has been
            successfully received. Please complete your registration by making payment using the instructions below.
          </Text>

          <Section style={boxInfos}>
            <Row>
              <Column>
                <Text style={boxTitle}>Registration Number</Text>
                <Text style={boxContent}>{referenceNumber}</Text>
              </Column>
              <Column>
                <Text style={boxTitle}>Registration Date</Text>
                <Text style={boxContent}>{date}</Text>
              </Column>
            </Row>
          </Section>

          <Heading as="h2" style={h2}>
            Registration Summary
          </Heading>

          <Section style={detailsContainer}>
            <Text style={sectionTitle}>Personal Information</Text>
            <Row style={detailRow}>
              <Column style={detailLabel}>Name:</Column>
              <Column style={detailValue}>
                {formData.prefix} {formData.firstName} {formData.lastName}
              </Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Email:</Column>
              <Column style={detailValue}>{formData.email}</Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Phone:</Column>
              <Column style={detailValue}>
                {formData.countryCode} {formData.phone}
              </Column>
            </Row>
            {formData.organization && (
              <Row style={detailRow}>
                <Column style={detailLabel}>Organization:</Column>
                <Column style={detailValue}>{formData.organization}</Column>
              </Row>
            )}
            <Row style={detailRow}>
              <Column style={detailLabel}>Nationality:</Column>
              <Column style={detailValue}>{formData.nationality}</Column>
            </Row>
          </Section>

          <Section style={detailsContainer}>
            <Text style={sectionTitle}>Registration Details</Text>
            <Row style={detailRow}>
              <Column style={detailLabel}>Ticket Type:</Column>
              <Column style={detailValue}>{formData.ticketType}</Column>
            </Row>
            {formData.preConferenceWorkshop && (
              <Row style={detailRow}>
                <Column style={detailLabel}>Pre-conference Workshop:</Column>
                <Column style={detailValue}>{formData.preConferenceWorkshop}</Column>
              </Row>
            )}
            {formData.willAttendPublicDialogue && (
              <Row style={detailRow}>
                <Column style={detailLabel}>Public Dialogue:</Column>
                <Column style={detailValue}>{formData.willAttendPublicDialogue}</Column>
              </Row>
            )}
            {formData.mainConferenceDay !== undefined && (
              <Row style={detailRow}>
                <Column style={detailLabel}>Main Conference Day:</Column>
                <Column style={detailValue}>{formData.mainConferenceDay ? "Yes" : "No"}</Column>
              </Row>
            )}
            <Row style={detailRow}>
              <Column style={detailLabel}>Additional Attendees:</Column>
              <Column style={detailValue}>{additionalPeople.length || 0}</Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Total Amount:</Column>
              <Column style={detailValue}>
                <strong>{totalAmount}</strong>
              </Column>
            </Row>
          </Section>

          {additionalPeople.length > 0 && (
            <Section style={detailsContainer}>
              <Text style={sectionTitle}>Additional Attendees</Text>
              {additionalPeople.map((person: any, index: number) => (
                <div key={index}>
                  <Text style={subSectionTitle}>Person {index + 1}</Text>
                  <Row style={detailRow}>
                    <Column style={detailLabel}>Name:</Column>
                    <Column style={detailValue}>
                      {person.prefix} {person.firstName} {person.lastName}
                    </Column>
                  </Row>
                  <Row style={detailRow}>
                    <Column style={detailLabel}>Email:</Column>
                    <Column style={detailValue}>{person.email}</Column>
                  </Row>
                  <Row style={detailRow}>
                    <Column style={detailLabel}>Organization:</Column>
                    <Column style={detailValue}>{person.organization}</Column>
                  </Row>
                </div>
              ))}
            </Section>
          )}

          <Section style={paymentContainer}>
            <Heading as="h2" style={h2}>
              Next Steps: Complete Your Payment
            </Heading>
            <Text style={importantText}>
              To complete your registration, please make your payment using one of the following methods:
            </Text>

            <Text style={sectionTitle}>Bank Transfer</Text>
            <Row style={detailRow}>
              <Column style={detailLabel}>Bank:</Column>
              <Column style={detailValue}>Standard Chartered Bank</Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Account Name:</Column>
              <Column style={detailValue}>
                Makerere University College of Engineering, Design, Art and Technology
              </Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Account Number:</Column>
              <Column style={detailValue}>8705612273400</Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Swift Code:</Column>
              <Column style={detailValue}>SCBLUGKA</Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Physical Branch:</Column>
              <Column style={detailValue}>Speke Road</Column>
            </Row>
            <Text style={noteText}>
              <strong>Important:</strong> Please include your full name and "AGRC2025 Registration" in the payment
              reference.
            </Text>

            <Hr style={hr} />

            <Text style={sectionTitle}>Mobile Money (Ugandans Only)</Text>
            <Text style={noteText}>
              <strong>Pay using MoMo Pay on MTN:</strong>
            </Text>
            <Row style={detailRow}>
              <Column style={detailLabel}>Step 1:</Column>
              <Column style={detailValue}>Dial *165*3#</Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Step 2:</Column>
              <Column style={detailValue}>Use Merchant ID: 514578</Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Step 3:</Column>
              <Column style={detailValue}>Use Reference: Agrc2025ealan payment</Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Registered to:</Column>
              <Column style={detailValue}>Nazziwa Flavia</Column>
            </Row>
            <Text style={noteText}>
              <strong>Important:</strong> Please include your full name in the payment reference.
            </Text>

            <Hr style={hr} />

            <Text style={sectionTitle}>Mobile Money (Ugandans Only)</Text>
            <Row style={detailRow}>
              <Column style={detailLabel}>MTN Mobile Money:</Column>
              <Column style={detailValue}>+256 706 712830</Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Airtel Money:</Column>
              <Column style={detailValue}>+256 775 702 841</Column>
            </Row>
            <Row style={detailRow}>
              <Column style={detailLabel}>Registered to:</Column>
              <Column style={detailValue}>FLAVIA NAZZIWA</Column>
            </Row>
            <Text style={noteText}>
              <strong>Important:</strong> Please include your full name and "AGRC2025 Registration" in the payment
              message.
            </Text>
          </Section>

          <Section style={actionContainer}>
            <Text style={importantText}>
              <strong>IMPORTANT:</strong> After making your payment, please send proof of payment (screenshot or photo)
              to{" "}
              <Link href="mailto:registration@agrc2025ealan.com" style={link}>
                registration@agrc2025ealan.com
              </Link>
            </Text>
            <Text style={text}>
              Include your full name, registration number ({referenceNumber}), and the email address you used for
              registration.
            </Text>
            <Text style={text}>
              Your registration will be confirmed once we receive and verify your payment. You will receive a final
              confirmation email with your registration details.
            </Text>
          </Section>

          <Hr style={hr} />

          <Text style={footer}>
            If you have any questions or need assistance, please contact us at{" "}
            <Link href="mailto:registration@agrc2025ealan.com" style={link}>
              registration@agrc2025ealan.com
            </Link>
          </Text>

          <Text style={footer}>© 2025 AGRC2025 EALAN Conference. All rights reserved.</Text>
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

const importantText = {
  color: "#e13622",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "16px 0",
  fontWeight: "bold",
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

const paymentContainer = {
  backgroundColor: "#f9f9f9",
  borderRadius: "4px",
  margin: "20px 0",
  padding: "20px",
  border: "1px solid #eaeaea",
}

const actionContainer = {
  backgroundColor: "#fff8f8",
  borderRadius: "4px",
  margin: "20px 0",
  padding: "20px",
  border: "1px solid #ffcccc",
}

const sectionTitle = {
  fontSize: "18px",
  fontWeight: "bold",
  color: "#38a347",
  margin: "0 0 10px",
}

const subSectionTitle = {
  fontSize: "16px",
  fontWeight: "bold",
  color: "#666",
  margin: "15px 0 5px",
}

const detailRow = {
  margin: "8px 0",
}

const detailLabel = {
  width: "40%",
  color: "#666",
  fontSize: "14px",
  verticalAlign: "top",
}

const detailValue = {
  width: "60%",
  color: "#333",
  fontSize: "14px",
}

const noteText = {
  fontSize: "14px",
  color: "#666",
  margin: "10px 0",
  fontStyle: "italic",
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

export default RegistrationConfirmationEmail
