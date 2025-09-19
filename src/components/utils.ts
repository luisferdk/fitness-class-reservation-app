export type ClassItem = {
  id: number
  time: string // 'HH:mm' 24h
  coach: string
  spots: number
}

export const formatTime = (time: string): string => {
  const [h, m] = time.split(':').map(Number);
  const ampm = h >= 12 ? 'p.m' : 'a.m';
  const h12 = h % 12 || 12;
  return `${String(h12).padStart(2,'0')}:${m.toString().padStart(2,'0')} ${ampm}`;
}

export const classesByType: Record<string, ClassItem[]> = {
  crossfit: [
    { id:1, time:'07:00', coach:'Javier R.', spots:5 },
    { id:2, time:'08:00', coach:'Javier R.', spots:3 },
    { id:3, time:'09:00', coach:'Esther Howard', spots:2 },
    { id:4, time:'17:00', coach:'Esther Howard', spots:3 },
    { id:5, time:'18:00', coach:'Jenny Wilson', spots:0 },
  ],
  boxeo: [
    { id:6, time:'10:00', coach:'Luis F.', spots:1 },
  ],
  pilates: [
    { id:7, time:'11:00', coach:'Ney G.', spots:2 },
    { id:8, time:'16:00', coach:'Ney G.', spots:4 },
  ],
}
