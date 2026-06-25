/**
 * SlideIndicators — minimal slide navigation.
 *
 * Vertical dots on the right (desktop), horizontal along the bottom (mobile).
 * Each dot is a real button with an accessible label; the active one elongates.
 */
export default function SlideIndicators({
  total,
  active,
  onSelect,
  kickers,
}: {
  total: number;
  active: number;
  onSelect: (i: number) => void;
  kickers: string[];
}) {
  return (
    <div className="kc-indicators absolute z-20" role="tablist" aria-label="Choose slide">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          className={`kc-dot ${i === active ? 'is-active' : ''}`}
          aria-label={`Slide ${i + 1}: ${kickers[i]}`}
          aria-selected={i === active}
          onClick={() => onSelect(i)}
        />
      ))}
    </div>
  );
}
