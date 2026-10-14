/** Two drifting water layers pinned to the bottom of a card. Fill colours come from `--wave-a` / `--wave-b`. */
export function Waves() {
  return (
    <div className="waves" aria-hidden="true">
      <svg className="waves__layer waves__layer--a" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0 50 Q150 10 300 50 T600 50 T900 50 T1200 50 V120 H0Z" />
      </svg>
      <svg className="waves__layer waves__layer--b" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M0 62 Q150 92 300 62 T600 62 T900 62 T1200 62 V120 H0Z" />
      </svg>
    </div>
  )
}
