import Link from "next/link";
import React from "react";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <Link href="/staff/Arshad-Khan">Staff Arshad Khan</Link>
      <Link href="/staff/Muneeb-ur-rehman">Staff Muneeb ur rehman</Link>
      <Link href="/staff/Muhammad-Awais">Staff Awais</Link>

      <div className="">{children}</div>
    </div>
  );
};

export default BlogLayout;
