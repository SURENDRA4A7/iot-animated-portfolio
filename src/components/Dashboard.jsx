import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Activity, Zap, Cloud, Thermometer } from 'lucide-react'

const Dashboard = () => {
  const [metrics, setMetrics] = useState([
    { id: 1, label: 'Device Uptime', value: 99.8, unit: '%', icon: Activity, color: 'from-blue-500 to-cyan-500' },
    { id: 2, label: 'Power Efficiency', value: 94.2, unit: '%', icon: Zap, color: 'from-yellow-500 to-orange-500' },
    { id: 3, label: 'Cloud Connectivity', value: 100, unit: '%', icon: Cloud, color: 'from-purple-500 to-pink-500' },
    { id: 4, label: 'Avg Temperature', value: 28.5, unit: '°C', icon: Thermometer, color: 'from-red-500 to-orange-500' },
  ])

  const [liveData, setLiveData] = useState([
    { sensor: 'DHT22-01', temperature: 25.3, humidity: 65, status: 'online' },
    { sensor: 'DHT22-02', temperature: 26.1, humidity: 62, status: 'online' },
    { sensor: 'DHT22-03', temperature: 24.8, humidity: 68, status: 'online' },
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => prev.map(metric => ({
        ...metric,
        value: metric.value + (Math.random() - 0.5) * 0.5,
      })))

      setLiveData(prev => prev.map(sensor => ({
        ...sensor,
        temperature: sensor.temperature + (Math.random() - 0.5) * 0.3,
        humidity: sensor.humidity + (Math.random() - 0.5) * 0.2,
      })))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="dashboard" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Live IoT Dashboard
          </h2>
          <p className="text-slate-400 text-lg">Real-time monitoring and analytics</p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {metrics.map((metric, index) => {
            const Icon = metric.icon
            return (
              <motion.div
                key={metric.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm hover:border-slate-600 transition-colors"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-slate-400">{metric.label}</h3>
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${metric.color}`}>
                    <Icon size={20} className="text-white" />
                  </div>
                </div>
                <div className="flex items-end gap-2">
                  <motion.span
                    key={metric.value}
                    className="text-3xl font-bold text-white"
                  >
                    {metric.value.toFixed(1)}
                  </motion.span>
                  <span className="text-slate-400 text-sm">{metric.unit}</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Live Sensor Data */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-8 rounded-xl bg-slate-800/50 border border-slate-700 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-white">Active Sensors</h3>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm text-slate-400">Live Feed</span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="px-4 py-3 text-slate-400 font-semibold">Sensor ID</th>
                  <th className="px-4 py-3 text-slate-400 font-semibold">Temperature</th>
                  <th className="px-4 py-3 text-slate-400 font-semibold">Humidity</th>
                  <th className="px-4 py-3 text-slate-400 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody>
                {liveData.map((sensor, index) => (
                  <tr key={index} className="border-b border-slate-700/50 hover:bg-slate-700/20 transition-colors">
                    <td className="px-4 py-3 text-white font-medium">{sensor.sensor}</td>
                    <td className="px-4 py-3 text-slate-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-sm">
                        {sensor.temperature.toFixed(1)}°C
                      </span>
                    </td>
                    <td className="px-4 py-3 text-slate-300">
                      <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">
                        {sensor.humidity.toFixed(1)}%
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <span className="text-green-400 text-sm font-medium">{sensor.status}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Dashboard