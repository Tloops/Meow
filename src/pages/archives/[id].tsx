import { useRouter } from 'next/router'

export function CatArchive() {
  const router = useRouter()
  return (
    <>{router.query.id}</>
  )
}
