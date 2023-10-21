import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { SearchContainer } from './styles'

const searchFormSchema = z.object({
  query: z.string(),
})

export type SearchFormInput = z.infer<typeof searchFormSchema>

interface SearchProps {
  postsLength: number
  getPosts: (query?: string) => void
}

export function Search(props: SearchProps) {
  const { register, handleSubmit } = useForm<SearchFormInput>({
    resolver: zodResolver(searchFormSchema),
  })

  async function handleSearchPosts(data: SearchFormInput) {
    await props.getPosts(data.query)
  }

  return (
    <SearchContainer onSubmit={handleSubmit(handleSearchPosts)}>
      <div>
        <h3>Publicações</h3>
        <span>{props.postsLength} publicações</span>
      </div>
      <input type="text" placeholder="Buscar conteúdo" {...register('query')} />
    </SearchContainer>
  )
}
