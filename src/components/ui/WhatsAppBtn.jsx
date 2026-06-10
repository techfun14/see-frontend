import Icons from '../../constants/icons'
import { COMPANY } from '../../constants/data'
import './WhatsAppBtn.css'

export default function WhatsAppBtn() {
  return (
    <a
      href={COMPANY.whatsapp}
      target="_blank"
      rel="noreferrer"
      className="wa-btn"
      aria-label="Chat on WhatsApp"
    >
      {Icons.whatsapp}
    </a>
  )
}
