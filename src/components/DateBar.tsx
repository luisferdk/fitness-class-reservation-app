export default function DateBar(){
  const days = ['Lu','Ma','Mi','Ju','Vi','Sa']
  return (
    <div className="px-5 mt-4">
      <div className="flex items-center justify-between text-gray-700">
        <button className="p-2" aria-label="Día anterior">◀</button>
        <div className="px-4 py-2 rounded-full bg-gray-100">Septiembre, 2025</div>
        <button className="p-2" aria-label="Día siguiente">▶</button>
      </div>
      <div className="flex items-center gap-2 mt-3">
        {days.map((d, i)=>(
          <div key={i} className={`flex flex-col items-center justify-center w-12 h-14 rounded-2xl border ${i===0?'bg-primary text-white border-primary':'bg-white'} shadow-soft`}>
            <span className="text-xs">{d}</span>
            <span className="font-bold">{String(i+1).padStart(2,'0')}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
