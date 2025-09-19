type Props = { current?: number; total?: number }

export default function WeeklyGoal({ current=0, total=5 }: Props){
  const pct = Math.min(100, Math.round((current/total)*100))
  return (
    <div className="card mx-5 mt-4 p-4 border-primary/10">
      <p className="text-center font-semibold text-primary mb-2">Tu meta semanal</p>
      <div className="w-full h-3 bg-primaryLight rounded-full overflow-hidden">
        <div style={{width: pct+'%'}} className="h-full bg-primary"></div>
      </div>
      <p className="text-center text-sm text-primary mt-2">{current}/{total}</p>
      <p className="text-center text-sm text-muted mt-1">¡Vamos por tu primera clase de la semana!</p>
    </div>
  )
}
