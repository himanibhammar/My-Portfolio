import Link from "next/link";

import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Link href="/">
        <div className="flex flex-col gap-1">
         
          <div>
            <span className="group text-xl font-black leading-none text-base-900">
              <span>Himani</span>
              <span className="group-hover:text-indigo-500 transition ease-in-out delay-100">
                ⚡
              </span>
              <span className="text-indigo-600">.</span>
            </span>
          </div>
        </div>
      </Link>
    </>
  );
}
