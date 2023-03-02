interface PostsProps {
  title?: string;
  author?: string;
}

export default function Posts({
  title,
  author,
}: PostsProps) {
  return (
    <li className="">
      <div className="flex-start flex items-center">
        <div className="flex-start flex items-center pt-3">
          <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
        </div>
        <div className="mt-2 ml-0 mb-4">
          <h4 className="mb-1.5 text-l font-semibold ">
            <a
              href="#"
              className="no-underline hover:underline p-1"
            >
              {title}
            </a>
          </h4>
          <p className="text-xs ml-4 mt-[-2px]">
            <a
              href="#"
              className="no-underline hover:underline p-1"
            >
              {author}
            </a>
            · 1 hours ago
          </p>
        </div>
      </div>
    </li>
  );
}
