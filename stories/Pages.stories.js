export default { title: 'Pages/Website', parameters: { full: true } };
const page = (file) => ({ render: () => `<iframe class="sb-frame" title="${file}" src="website/${file}"></iframe>` });
export const Home = page('index.html');
export const AboutStory = page('About-Story.html');
export const SolutionIFRS = page('Solution-IFRS.html');
export const Blog = page('Blog.html');
export const BlogArticle = page('Blog-Article.html');
export const Contact = page('Contact.html');
