import YourPlanSection from "./sections/your-plan-section"
import CertificatesSection from "./sections/certificates-section"
import BuyCertificateSection from "./sections/buy-certificate-section"
import SettingsSection from "./sections/settings-section"

interface DashboardLayoutProps {
  section: "plan" | "certificates" | "buy" | "settings"
}

export default function DashboardLayout({ section }: DashboardLayoutProps) {
  return (
    <div className="text-black">
      {section === "plan" && <YourPlanSection />}
      {section === "certificates" && <CertificatesSection />}
      {section === "buy" && <BuyCertificateSection />}
      {section === "settings" && <SettingsSection />}
    </div>
  )
}
