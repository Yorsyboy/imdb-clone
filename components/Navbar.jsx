import { useRouter } from "next/router";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  const router = useRouter();
  return (
    <div className="flex justify-center dark:bg-gray-600 bg-amber-100 lg:text-lg p-4">
      <NavbarItem title="Trending" param="fetchTrending" />
      <NavbarItem title="Top Rated" param="fetchTopRated" />
    </div>
  );
}
