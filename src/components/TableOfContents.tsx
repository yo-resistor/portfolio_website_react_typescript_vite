interface Heading {
  id: string;
  text: string;
  level: string;
}

interface TableOfContentsProps {
  headings: Heading[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ headings }) => {
  if (headings.length === 0) return null; // Hide TOC if no headings

  return (
    <div className="fixed top-24 right-10 hidden lg:block bg-gray-100 dark:bg-gray-800 p-4 rounded-md w-64">
      <h2 className="text-lg font-semibold">Table of Contents</h2>
      <ul className="mt-2 space-y-2">
        {headings.map((heading) => (
          <li key={heading.id} className="text-sm">
            <a
              href={`#${heading.id}`}
              className="text-blue-500 hover:underline"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TableOfContents;
