import { NavbarShell } from '@/components/shared/navbar-shell'
import { Footer } from '@/components/shared/footer'

export const CONTACT_PAGE_OVERRIDE_ENABLED = true

export function ContactPageOverride() {
  return (
    <div className="min-h-screen media24-soft-gradient text-[#1d1340]">
      <NavbarShell />
      <main className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="mb-8 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#7f60cf]">Contact Us</p>
          <h1 className="mt-2 text-4xl font-semibold">Talk to the Media24Press team</h1>
        </div>
        <div className="grid gap-6">
          <div className="media24-card p-6">
            <form className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input placeholder="Contact Name *" className="h-11 rounded-xl border border-[#ddceff] bg-white px-4 text-sm" />
                <input placeholder="Phone Number" className="h-11 rounded-xl border border-[#ddceff] bg-white px-4 text-sm" />
              </div>
              <input placeholder="Email *" className="h-11 rounded-xl border border-[#ddceff] bg-white px-4 text-sm" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#7f60cf]">Help us understand your needs</p>
              <div className="grid gap-4 sm:grid-cols-2">
                <select className="h-11 rounded-xl border border-[#ddceff] bg-white px-3 text-sm">
                  <option>What type of organization are you?</option>
                  <option>Startup</option>
                  <option>Agency</option>
                  <option>Enterprise</option>
                </select>
                <select className="h-11 rounded-xl border border-[#ddceff] bg-white px-3 text-sm">
                  <option>Subject: How may we help?</option>
                  <option>Distribution</option>
                  <option>Pricing</option>
                  <option>Support</option>
                </select>
              </div>
              <textarea placeholder="Message / Comment *" className="min-h-[150px] rounded-xl border border-[#ddceff] bg-white px-4 py-3 text-sm" />
              <div className="flex flex-wrap gap-3">
                <button type="button" className="h-11 rounded-xl border border-[#ddceff] bg-white px-4 text-sm font-medium">
                  I am not a robot
                </button>
                <button type="submit" className="h-11 rounded-xl bg-[#3b14a7] px-6 text-sm font-semibold text-white hover:bg-[#5321d0]">
                  Submit Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
