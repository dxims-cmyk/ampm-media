'use client'
import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const responseTimes = [
  { label: '< 5 minutes', value: 'under5', lossRate: 0.10 },
  { label: '1 hour', value: '1hr', lossRate: 0.50 },
  { label: '4+ hours', value: '4hr', lossRate: 0.70 },
  { label: '24+ hours', value: '24hr', lossRate: 0.90 },
  { label: '48+ hours', value: '48hr', lossRate: 0.90 },
]

const FIRST_RESPONDER_WIN_RATE = 0.78

export function ROICalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState(50)
  const [responseTime, setResponseTime] = useState('1hr')
  const [dealValue, setDealValue] = useState(2000)

  const results = useMemo(() => {
    const selected = responseTimes.find(r => r.value === responseTime)!
    const leadsLost = Math.round(monthlyLeads * selected.lossRate)
    const revenueLostMonthly = leadsLost * dealValue
    const revenueLostAnnually = revenueLostMonthly * 12

    // Impact projections: recover lost leads with <5min response
    const recoveredLeads = Math.round(leadsLost * (1 - 0.10)) // reduce to 10% loss
    const additionalCloses = Math.round(recoveredLeads * FIRST_RESPONDER_WIN_RATE)
    const revenueGain = additionalCloses * dealValue
    const investmentMonthly = 1500
    const roi = investmentMonthly > 0 ? Math.round((revenueGain / investmentMonthly) * 100) : 0

    return { leadsLost, revenueLostMonthly, revenueLostAnnually, additionalCloses, revenueGain, roi }
  }, [monthlyLeads, responseTime, dealValue])

  const formatCurrency = (n: number) => {
    if (n >= 1000000) return `£${(n / 1000000).toFixed(1)}M`
    if (n >= 1000) return `£${(n / 1000).toFixed(0)}K`
    return `£${n}`
  }

  return (
    <section id="roi-calculator" className="relative py-24 px-6 bg-gradient-to-b from-black/30 to-black/50">
      <div className="container-wide max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-6 border border-white/20">Interactive Tool</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">Speed-to-Lead ROI Calculator</h2>
          <p className="text-white/60 max-w-xl mx-auto">See how much revenue you're losing from slow response times - and what :Impact can recover.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Inputs */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 space-y-8">
            {/* Monthly Leads */}
            <div>
              <div className="flex justify-between mb-3">
                <label className="text-white font-medium text-sm">Monthly Leads</label>
                <span className="text-white font-display font-bold text-lg">{monthlyLeads}</span>
              </div>
              <input
                type="range"
                min={10}
                max={500}
                step={5}
                value={monthlyLeads}
                onChange={(e) => setMonthlyLeads(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-white [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <div className="flex justify-between text-white/30 text-xs mt-1"><span>10</span><span>500</span></div>
            </div>

            {/* Response Time */}
            <div>
              <label className="text-white font-medium text-sm block mb-3">Current Response Time</label>
              <select
                value={responseTime}
                onChange={(e) => setResponseTime(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white focus:border-white/40 focus:outline-none appearance-none cursor-pointer"
              >
                {responseTimes.map(rt => (
                  <option key={rt.value} value={rt.value} className="bg-[#1a0a06] text-white">{rt.label}</option>
                ))}
              </select>
            </div>

            {/* Deal Value */}
            <div>
              <div className="flex justify-between mb-3">
                <label className="text-white font-medium text-sm">Average Deal Value</label>
                <span className="text-white font-display font-bold text-lg">£{dealValue.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min={500}
                max={50000}
                step={500}
                value={dealValue}
                onChange={(e) => setDealValue(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-white [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
              />
              <div className="flex justify-between text-white/30 text-xs mt-1"><span>£500</span><span>£50,000</span></div>
            </div>
          </motion.div>

          {/* Results */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-4">
            {/* Current Loss */}
            <div className="bg-red-500/10 border border-red-500/20 rounded-2xl p-6">
              <p className="text-red-400/80 text-xs font-bold uppercase tracking-wider mb-4">You're Currently Losing</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl sm:text-4xl font-display font-bold text-red-400">{results.leadsLost}</p>
                  <p className="text-white/50 text-sm">leads/month</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-display font-bold text-red-400">{formatCurrency(results.revenueLostMonthly)}</p>
                  <p className="text-white/50 text-sm">revenue/month</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-red-500/10">
                <p className="text-white/40 text-sm">Annual loss: <span className="text-red-400 font-bold">{formatCurrency(results.revenueLostAnnually)}</span></p>
              </div>
            </div>

            {/* Impact Projections */}
            <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6">
              <p className="text-emerald-400/80 text-xs font-bold uppercase tracking-wider mb-4">With :Impact</p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-3xl sm:text-4xl font-display font-bold text-emerald-400">+{results.additionalCloses}</p>
                  <p className="text-white/50 text-sm">additional closes/mo</p>
                </div>
                <div>
                  <p className="text-3xl sm:text-4xl font-display font-bold text-emerald-400">{formatCurrency(results.revenueGain)}</p>
                  <p className="text-white/50 text-sm">revenue gained/mo</p>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-emerald-500/10">
                <p className="text-white/40 text-sm">Projected ROI: <span className="text-emerald-400 font-bold">{results.roi}%</span></p>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="https://cal.com/ampmedia/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-white text-impact font-bold px-8 py-4 rounded-full hover:bg-white/90 transition-all hover:-translate-y-1 text-center uppercase tracking-wide"
            >
              Book Your Audit
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
