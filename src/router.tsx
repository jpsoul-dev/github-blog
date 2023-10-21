import { Route, Routes } from 'react-router-dom'

import { BlogPage } from './pages/Blog'
import { PostPage } from './pages/Post'
import { DefaultLayout } from './components/layouts/Default'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<BlogPage />} />
        <Route path="/post/:issueNumber" element={<PostPage />} />
      </Route>
    </Routes>
  )
}
