function calculateTime(deliveries) {
  const max = 7*60*60
  let time = 0

  deliveries.forEach(delivery => {
    const [hh, mm, ss] = delivery.match(/\d\d/g)
    time += Number(hh) * 60 * 60
    time += Number(mm) * 60
    time += Number(ss)
  })

  const remaining = Math.abs(time - max)
  const sym = time - max < 0 ? '-' : ''

  const h = Math.floor(remaining / 60 / 60)
  const m = Math.floor((remaining - h*60*60) / 60)
  const s = Math.floor((remaining - h*60*60 - m*60))

  const fh = String(h).padStart(2, '0')
  const fm = String(m).padStart(2, '0')
  const fs = String(s).padStart(2, '0')

  return `${sym}${fh}:${fm}:${fs}`
}

calculateTime(['00:10:00', '01:00:00', '03:30:00']) // "-02:20:00"
// calculateTime(['01:01:01', '09:59:59', '01:01:01']) // "05:02:01"
