import Header from '@/components/Header'
import DateBar from '@/components/DateBar'
import ClassCard from '@/components/ClassCard'
import { classesByType } from '@/components/utils'

export default function CategoryList(){
  const items = classesByType['crossfit']
  return (
    <div className="pb-24">
      <Header />
      <DateBar />
      <div className="px-5 mt-6">
        <h2 className="text-xl font-extrabold mb-3">🏋️ Clases de Crossfit para hoy</h2>
        <div className="space-y-4">
          {items.map((it)=> <ClassCard key={it.id} item={it} disabled={it.spots===0}/>)}
        </div>
      </div>
    </div>
  )
}
