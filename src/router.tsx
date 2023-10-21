import { Route, Routes } from 'react-router-dom'

import { BlogPage } from './pages/Blog'
import { PostPage } from './pages/Post'
import { DefaultLayout } from './components/layouts/Default'

export function Router() {
  return (
    <Routes>
      <Route path="/github-blog" element={<DefaultLayout />}>
        <Route path="/github-blog" element={<BlogPage />} />
        <Route path="/github-blog/post/:issueNumber" element={<PostPage />} />
      </Route>
    </Routes>
  )
}
