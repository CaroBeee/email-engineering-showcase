"use client";

import { useState, useEffect } from "react";
import type { Locale } from "@/lib/i18n";
import { journeyData } from "@/lib/journey-data";
import { DevJourneyPage } from "@/components/ui/dev-journey-page";

export default function TransactionalJourneyPage() {
  const [locale, setLocale] = useState<Locale>("de");

  useEffect(() => {
    const stored = localStorage.getItem("locale") as Locale | null;
    if (stored === "de" || stored === "en") setLocale(stored);
  }, []);

  return <DevJourneyPage data={journeyData.transactional} locale={locale} />;
}
