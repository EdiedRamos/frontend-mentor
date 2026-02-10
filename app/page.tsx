import Link from 'next/link';

const Projects = [
  { name: 'Faq Accordion', url: '/vanilla/faq-accordion/index.html' },
  {
    name: 'Article Preview Component',
    url: '/vanilla/article-preview-component/index.html',
  },
];

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <div>
          <p className="text-2xl">Frontend mentor challenge solutions</p>
          <ul className="mt-10">
            {Projects.map((project, index) => (
              <li key={index}>
                <Link className="hover:text-gray-400" href={project.url}>
                  {project.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
