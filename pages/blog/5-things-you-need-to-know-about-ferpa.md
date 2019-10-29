import BlogPost from '../../components/BlogPost";

export const meta = {
  published: true,
  publishedAt: "2019-10-29",
  title: 'Test Page',
  summary: 'This is a summary',
  image: '/static/images/ferpa.jpg'
}

export default ({ children }) => <BlogPost meta={meta}>{children}</BlogPost>;
### Test Blog Post

This is a test blog post.
