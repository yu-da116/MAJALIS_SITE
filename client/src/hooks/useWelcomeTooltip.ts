import { useState, useEffect } from 'react';

export function useWelcomeTooltip(featureKey: string) {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const hasSeenTooltip = localStorage.getItem(`hasSeenTooltip_${featureKey}`);
    if (!hasSeenTooltip) {
      setShowTooltip(true);
    }
  }, [featureKey]);

  const dismissTooltip = () => {
    localStorage.setItem(`hasSeenTooltip_${featureKey}`, 'true');
    setShowTooltip(false);
  };

  return { showTooltip, dismissTooltip };
}
