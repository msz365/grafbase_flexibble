import React from "react";
import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";
import { getCurrentUser } from "@/lib/session";
import { signOut } from "next-auth/react";
import ProfielMenu from "./ProfielMenu";

const Navbar = async () => {
  // const session = {}
  const session = await getCurrentUser();
  return (
    <nav className='flexBetween navbar'>
      <div className='flex-1 flexStart gap-10'>
        <Link href='/'>
          <Image src='/logo.svg' width={115} height={43} alt='Flexibble Logo' />
        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
          {NavLinks.map((navlink) => (
            <Link href={navlink.href} key={navlink.key}>
              {navlink.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className='flexCenter gap-4'>
        {session?.user ? (
          <>
            {session?.user?.image && (
              // <Link href={`/profile/${session?.user?.id}`}>
              //   <Image
              //     src={session.user.image}
              //     width={40}
              //     height={40}
              //     className='rounded-full'
              //     alt={session.user.name}
              //   />
              // </Link>
              <ProfielMenu session={session} />
            )}
            <Link href='/create-project'>Share work</Link>
            
          </>
        ) : (
          <>
            <AuthProviders />
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
