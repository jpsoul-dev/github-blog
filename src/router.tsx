import { Route, Routes } from 'react-router-dom'

import { BlogPage } from './pages/Blog'
import { PostPage } from './pages/Post'
import { DefaultLayout } from './components/layouts/Default'

export function Router() {
  return (
    <Routes>
      <Route path="/github_blog" element={<DefaultLayout />}>
        <Route path="/github_blog" element={<BlogPage />} />
        <Route path="/github_blog/post/:issueNumber" element={<PostPage />} />
      </Route>
    </Routes>
  )
}
