import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"

interface CsrGenerationDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  formData: any
  onConfirm: () => void
  isBasicPlan?: boolean
  isEnterprisePlan?: boolean
}

export default function CsrGenerationDialog({
  open,
  onOpenChange,
  formData,
  onConfirm,
  isBasicPlan = false,
  isEnterprisePlan = false,
}: CsrGenerationDialogProps) {
  const [step, setStep] = useState<"confirm" | "generating" | "complete">("confirm")

  const handleConfirm = () => {
    setStep("generating")
    // Simulate API call
    setTimeout(() => {
      setStep("complete")
    }, 1500)
  }

  const handleDone = () => {
    setStep("confirm")
    onOpenChange(false)
    onConfirm()
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Generate CSR</DialogTitle>
          <DialogDescription>Certificate Signing Request generation</DialogDescription>
        </DialogHeader>

        {step === "confirm" && (
          <div className="space-y-4">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                Please confirm all entered information is correct. This action cannot be undone.
              </AlertDescription>
            </Alert>

            <div className="bg-muted p-4 rounded-lg text-sm space-y-2">
              {isBasicPlan ? (
                <>
                  <p>
                    <span className="font-semibold">Domains:</span>{" "}
                    {formData.domains.map((d: any) => d.domain).join(", ")}
                  </p>
                </>
              ) : isEnterprisePlan ? (
                <>
                  <p>
                    <span className="font-semibold">Certificate Type:</span>{" "}
                    {formData.certificateType === "ucc-san" ? "UCC/SAN" : "Wildcard"}
                  </p>
                  {formData.certificateType === "ucc-san" ? (
                    <p>
                      <span className="font-semibold">Domains:</span>{" "}
                      {formData.domains.map((d: any) => d.domain).join(", ")}
                    </p>
                  ) : (
                    <>
                      {formData.validateBaseUrl && (
                        <p>
                          <span className="font-semibold">Base URL:</span> {formData.baseUrl}
                        </p>
                      )}
                      <p>
                        <span className="font-semibold">Wildcard:</span> {formData.wildcardUrl}
                      </p>
                    </>
                  )}
                </>
              ) : (
                <>
                  <p>
                    <span className="font-semibold">Domain:</span> {formData.domain}
                  </p>
                </>
              )}
              <p>
                <span className="font-semibold">Organization:</span> {formData.organizationName}
              </p>
              <p>
                <span className="font-semibold">Location:</span> {formData.city}, {formData.state}, {formData.country}
              </p>
            </div>

            <div className="flex gap-2">
              <Button variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
                Cancel
              </Button>
              <Button onClick={handleConfirm} className="flex-1">
                Generate
              </Button>
            </div>
          </div>
        )}

        {step === "generating" && (
          <div className="flex flex-col items-center justify-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mb-4"></div>
            <p className="text-sm text-muted-foreground">Generating CSR...</p>
          </div>
        )}

        {step === "complete" && (
          <div className="space-y-4">
            <Alert className="bg-green-50 border-green-200">
              <AlertCircle className="h-4 w-4 text-green-600" />
              <AlertDescription className="text-green-800">CSR generated successfully!</AlertDescription>
            </Alert>

            <div className="bg-muted p-4 rounded-lg text-sm">
              <p className="font-semibold mb-2">CSR Output:</p>
              <code className="text-xs break-all">-----BEGIN CERTIFICATE REQUEST-----</code>
              <code className="text-xs block text-muted-foreground mt-2">
                MIICljCCAX4CAQAwDQYJKoZIhvcNAQEBBQAwgaAxCzAJBgNVBAYTAkFVMRMwEQYD...
              </code>
              <code className="text-xs break-all">-----END CERTIFICATE REQUEST-----</code>
            </div>

            <Button onClick={handleDone} className="w-full">
              Continue
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
