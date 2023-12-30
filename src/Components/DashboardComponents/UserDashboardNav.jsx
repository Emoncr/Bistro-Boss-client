"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { IoMdHome } from 'react-icons/io'


const UserDashboardNav = () => {
    const currentPath = usePathname()
    return (
        <>
            <ul>
                <li>
                    <Link href={"/dashboard/home"}
                        className={`
                        ${currentPath === "/dashboard" ? "bg-brandSecoundry text-white hover:bg-brandSecoundry" : "text-brandDark bg-transparent"} 
                        px-2 sm:px-4 lg:px-8  py-2 md:py-3  flex items-center justify-start text-sm sm:text-base   font-inter font-bold gap-1 hover:bg-brandLite  duration-300 uppercase`}
                    >
                        <IoMdHome className='mb-1' />
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link href={"/dashboard"}
                        className={`
                        ${currentPath === "/" ? "bg-brandSecoundry text-white hover:bg-brandSecoundry" : "text-brandDark bg-transparent"} 
                        px-2 sm:px-4 lg:px-8  py-2 md:py-3  flex items-center justify-start text-sm sm:text-base   font-inter font-bold gap-1 hover:bg-brandLite  duration-300 mt-2 uppercase`}
                    >
                        <IoMdHome className='mb-1' />
                        <span>reservation</span>
                    </Link>
                </li>
                <li>
                    <Link href={"/dashboard"}
                        className={`
                        ${currentPath === "/" ? "bg-brandSecoundry text-white hover:bg-brandSecoundry" : "text-brandDark bg-transparent"} 
                        px-2 sm:px-4 lg:px-8  py-2 md:py-3  flex items-center justify-start text-sm sm:text-base   font-inter font-bold gap-1 hover:bg-brandLite  duration-300 mt-2 uppercase`}
                    >
                        <IoMdHome className='mb-1' />
                        <span>payment history</span>
                    </Link>
                </li>
                <li>
                    <Link href={"/dashboard"}
                        className={`
                        ${currentPath === "/" ? "bg-brandSecoundry text-white hover:bg-brandSecoundry" : "text-brandDark bg-transparent"} 
                        px-2 sm:px-4 lg:px-8  py-2 md:py-3  flex items-center justify-start text-sm sm:text-base   font-inter font-bold gap-1 hover:bg-brandLite  duration-300 mt-2 uppercase`}
                    >
                        <IoMdHome className='mb-1' />
                        <span>my cart</span>
                    </Link>
                </li>
                <li>
                    <Link href={"/dashboard"}
                        className={`
                        ${currentPath === "/" ? "bg-brandSecoundry text-white hover:bg-brandSecoundry" : "text-brandDark bg-transparent"} 
                        px-2 sm:px-4 lg:px-8  py-2 md:py-3  flex items-center justify-start text-sm sm:text-base   font-inter font-bold gap-1 hover:bg-brandLite  duration-300 mt-2 uppercase`}
                    >
                        <IoMdHome className='mb-1' />
                        <span>add review</span>
                    </Link>
                </li>
                <li>
                    <Link href={"/dashboard"}
                        className={`
                        ${currentPath === "/" ? "bg-brandSecoundry text-white hover:bg-brandSecoundry" : "text-brandDark bg-transparent"} 
                        px-2 sm:px-4 lg:px-8  py-2 md:py-3  flex items-center justify-start text-sm sm:text-base   font-inter font-bold gap-1 hover:bg-brandLite  duration-300 mt-2 uppercase`}
                    >
                        <IoMdHome className='mb-1' />
                        <span>my booking</span>
                    </Link>
                </li>
            </ul>
        </>
    )
}

export default UserDashboardNav