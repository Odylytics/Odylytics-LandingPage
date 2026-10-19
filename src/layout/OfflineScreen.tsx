import { useEffect, useState } from 'react'
import { StateScreen } from '../components/StateScreen'
import { useT } from '../lib/lang'

/** Full-screen notice when the connection drops. Reading what is already loaded stays possible. */
export function OfflineScreen() {
  const t = useT()
  const [online, setOnline] = useState(() => navigator.onLine)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const up = () => {
      setOnline(true)
      setDismissed(false)
    }
    const down = () => {
      setOnline(false)
      setDismissed(false)
    }
    window.addEventListener('online', up)
    window.addEventListener('offline', down)
    return () => {
      window.removeEventListener('online', up)
      window.removeEventListener('offline', down)
    }
  }, [])

  if (online || dismissed) return null

  return (
    <div className="offline" role="alertdialog" aria-labelledby="offline-title">
      <StateScreen
        kind="offline"
        label="No connection"
        title="You’re offline."
        text="We can’t reach the network right now. Check your wifi or mobile data. This screen disappears as soon as you’re back online."
        actions={
          <>
            <button type="button" className="btn btn--primary" onClick={() => setOnline(navigator.onLine)}>
              {t('Try again')}
            </button>
            <button type="button" className="btn btn--outline" onClick={() => setDismissed(true)}>
              {t('Keep reading')}
            </button>
          </>
        }
      />
    </div>
  )
}
