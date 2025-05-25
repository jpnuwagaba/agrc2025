import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CreditCard, Building, Smartphone, Mail, AlertTriangle, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "How to Pay - Joint AGRC and EALAN Conference 2025",
  description:
    "Complete payment instructions for the Joint AGRC and EALAN Conference 2025 registration including bank transfer and mobile money options.",
}

export default function HowToPayPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">How to Complete Your Payment</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete your conference registration by making payment using any of the methods below. Choose the option
            that works best for you.
          </p>
        </div>

        {/* Important Notice */}
        <Alert className="mb-8 border-chili_red bg-chili_red/5">
          <AlertTriangle className="h-4 w-4 text-chili_red" />
          <AlertDescription className="text-chili_red font-medium">
            <strong>Important:</strong> After making your payment, please send proof of payment to{" "}
            <Link href="mailto:agrc.ealan2025@mak.ac.ug" className="underline hover:text-chili_red-600">
              agrc.ealan2025@mak.ac.ug
            </Link>{" "}
            with your full name and registration number.
          </AlertDescription>
        </Alert>

        <div className="grid gap-8">
          {/* Bank Transfer */}
          <Card className="shadow-lg">
            <CardHeader className="bg-pigment_green text-white">
              <CardTitle className="flex items-center gap-3">
                <Building className="h-6 w-6" />
                Bank Transfer (Recommended for International Participants)
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Bank Name</label>
                    <p className="text-lg font-semibold">Standard Chartered Bank</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Account Name</label>
                    <p className="text-lg font-semibold">
                      Makerere University College of Engineering, Design, Art and Technology
                    </p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Account Number</label>
                    <p className="text-lg font-semibold font-mono">8705612273400</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">Swift Code</label>
                    <p className="text-lg font-semibold font-mono">SCBLUGKA</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Physical Branch</label>
                    <p className="text-lg font-semibold">Speke Road</p>
                  </div>
                  <div className="bg-pigment_green/10 p-4 rounded-lg">
                    <p className="text-sm text-pigment_green font-medium">
                      <strong>Payment Reference:</strong> Include your full name and "AGRC2025 Registration"
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Mobile Money Options */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* MTN MoMo Pay */}
            <Card className="shadow-lg">
              <CardHeader className="bg-orange-500 text-white">
                <CardTitle className="flex items-center gap-3">
                  <Smartphone className="h-6 w-6" />
                  MTN MoMo Pay (Ugandans Only)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Quick Steps:</h4>
                    <ol className="list-decimal list-inside space-y-1 text-sm">
                      <li>
                        Dial <span className="font-mono font-bold">*165*3#</span>
                      </li>
                      <li>
                        Use Merchant ID: <span className="font-mono font-bold">514578</span>
                      </li>
                      <li>
                        Reference: <span className="font-bold">Agrc2025ealan payment</span>
                      </li>
                    </ol>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Registered to</label>
                    <p className="text-lg font-semibold">Nazziwa Flavia</p>
                  </div>
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      Include your full name in the payment reference for easy identification.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>

            {/* Direct Mobile Money */}
            <Card className="shadow-lg">
              <CardHeader className="bg-blue-500 text-white">
                <CardTitle className="flex items-center gap-3">
                  <CreditCard className="h-6 w-6" />
                  Direct Mobile Money (Ugandans Only)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-gray-500">MTN Mobile Money</label>
                    <p className="text-lg font-semibold font-mono">+256 706 712830</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Airtel Money</label>
                    <p className="text-lg font-semibold font-mono">+256 775 702 841</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-500">Registered to</label>
                    <p className="text-lg font-semibold">FLAVIA NAZZIWA</p>
                  </div>
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertDescription>
                      Include your full name and "AGRC2025 Registration" in the payment message.
                    </AlertDescription>
                  </Alert>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* After Payment Instructions */}
          <Card className="shadow-lg border-pigment_green">
            <CardHeader className="bg-pigment_green/10">
              <CardTitle className="flex items-center gap-3 text-pigment_green">
                <Mail className="h-6 w-6" />
                After Making Payment
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg">Required Steps:</h4>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Take a screenshot or photo of your payment confirmation</li>
                  <li>
                    Email the proof of payment to{" "}
                    <Link
                      href="mailto:agrc.ealan2025@mak.ac.ug"
                      className="text-pigment_green hover:underline font-semibold"
                    >
                      agrc.ealan2025@mak.ac.ug
                    </Link>
                  </li>
                  <li>
                    Include the following in your email:
                    <ul className="list-disc list-inside ml-4 mt-1 space-y-1">
                      <li>Your full name</li>
                      <li>Your registration number</li>
                      <li>The email address used for registration</li>
                    </ul>
                  </li>
                </ol>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-700 font-medium">
                    <CheckCircle className="h-4 w-4 inline mr-2" />
                    You will receive a final confirmation email once your payment is verified.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Need Help */}
          <Card className="shadow-lg">
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-4">Need Assistance?</h3>
              <p className="text-gray-600 mb-4">
                If you encounter any issues or have questions about payment, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-pigment_green hover:bg-pigment_green-600">
                  <Link href="mailto:registration@agrc2025ealan.com">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Support
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-pigment_green text-pigment_green hover:bg-pigment_green hover:text-white"
                >
                  <Link href="/registration">
                    <CreditCard className="h-4 w-4 mr-2" />
                    Back to Registration
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
