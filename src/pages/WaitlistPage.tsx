import { useState, useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import WaitlistBackground from "@/components/waitlist/WaitlistBackground";
import WaitlistHeader from "@/components/waitlist/WaitlistHeader";
import WaitlistForm, { WaitlistFormData } from "@/components/waitlist/WaitlistForm";
import TelegramStep from "@/components/waitlist/TelegramStep";
import WaitlistDashboard from "@/components/waitlist/WaitlistDashboard";
import LeaderboardView from "@/components/waitlist/LeaderboardView";
import WaitlistFooter from "@/components/waitlist/WaitlistFooter";

type WaitlistViewStep = "form" | "telegram" | "dashboard" | "leaderboard";

const WaitlistPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const initialView = (searchParams.get("view") as WaitlistViewStep) || "form";
  const [currentStep, setCurrentStep] = useState<WaitlistViewStep>(initialView);

  // User State saved in localStorage for seamless return
  const [userData, setUserData] = useState<WaitlistFormData>(() => {
    const saved = localStorage.getItem("xane_waitlist_user");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        // fallback
      }
    }
    return {
      fullName: "Goodness Paul",
      phone: "+23408012345678",
      email: "goodnesspaul@gmail.com",
      freeTag: "@erva_22.xane",
      premiumTag: "@erva.xane",
    };
  });

  useEffect(() => {
    const viewParam = searchParams.get("view") as WaitlistViewStep;
    if (viewParam && ["form", "telegram", "dashboard", "leaderboard"].includes(viewParam)) {
      setCurrentStep(viewParam);
    }
  }, [searchParams]);

  // Step 1 Complete: Transition to Telegram Step
  const handleFormSuccess = (data: WaitlistFormData) => {
    setUserData(data);
    localStorage.setItem("xane_waitlist_user", JSON.stringify(data));
    setCurrentStep("telegram");
    setSearchParams({ view: "telegram" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Step 2 Complete: Transition to Dashboard
  const handleTelegramContinue = () => {
    setCurrentStep("dashboard");
    setSearchParams({ view: "dashboard" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Switch to Leaderboard
  const handleGoToLeaderboard = () => {
    setCurrentStep("leaderboard");
    setSearchParams({ view: "leaderboard" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Switch back to Form / Waitlist
  const handleGoToForm = () => {
    setCurrentStep("form");
    setSearchParams({ view: "form" });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <WaitlistBackground showWatermark={true}>
      {/* Dynamic Header based on active view */}
      {currentStep === "leaderboard" ? (
        <WaitlistHeader
          rightAction="leaderboard-nav"
          onJoinWaitlistClick={handleGoToForm}
        />
      ) : (
        <WaitlistHeader rightAction="homepage" />
      )}

      {/* Main View Switcher */}
      <main className="flex flex-1 flex-col items-center justify-center">
        {currentStep === "form" && (
          <WaitlistForm onSubmitSuccess={handleFormSuccess} />
        )}

        {currentStep === "telegram" && (
          <TelegramStep onContinue={handleTelegramContinue} />
        )}

        {currentStep === "dashboard" && (
          <WaitlistDashboard
            userData={userData}
            onViewLeaderboard={handleGoToLeaderboard}
          />
        )}

        {currentStep === "leaderboard" && (
          <LeaderboardView
            currentUserTag={userData.premiumTag || userData.freeTag || "@erva.xane"}
          />
        )}
      </main>

      {/* Footer */}
      <WaitlistFooter />
    </WaitlistBackground>
  );
};

export default WaitlistPage;
