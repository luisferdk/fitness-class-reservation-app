import Header from '@/components/Header'
import ClassCard from '@/components/ClassCard'
import { useParams } from 'react-router-dom'
import { classesByType } from '@/components/utils'

const titles: Record<string, string> = { crossfit:'Crossfit', boxeo:'Boxeo', pilates:'Pilates' }

export default function ClassList(){
  const { type = '' } = useParams<{type: string}>()
  const items = classesByType[type] ?? []
  return (
    <div className="pb-24">
      <Header title={titles[type] ?? 'Clases'} showBack />
      <div className="px-5 mt-4 space-y-4">
        {items.map((it)=> <ClassCard key={it.id} item={it} disabled={it.spots===0}/>)}
      </div>
    </div>
  )
}
