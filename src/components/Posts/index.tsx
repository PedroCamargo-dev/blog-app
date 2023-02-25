interface PostsProps {
  title?: string;
  text?: string;
}

export default function Posts({
  title,
  text,
}: PostsProps) {
  return (
    <li className="">
      <div className="flex-start flex items-center pt-3 ">
        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
        <p className="text-sm text-neutral-500 dark:text-neutral-300">
          01/43/1343
        </p>
      </div>
      <div className="mt-2 ml-4 mb-6">
        <h4 className="mb-1.5 text-xl ">
          {title}
        </h4>
        <p className="mb-3 text-neutral-500 dark:text-neutral-300">
          {text}
        </p>
      </div>
    </li>
  );
}
