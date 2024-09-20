import React, { FC } from "react";
import Breadcrumb from "@/components/Breadcrumb";
import {BreadcrumbLink} from "@/types/breadcrumb"

interface HeroSubProps {
    title: string;
    description: string;
    breadcrumbLinks: BreadcrumbLink[];
}

const HeroSub: FC<HeroSubProps> = ({ title, description, breadcrumbLinks }) => {

    return (
        <>
            <section className="text-center py-24 pt-44 dark:bg-darkmode">
                <h2 className="dark:text-white md:text-40 text-36 font-bold text-midnight_text">{title}</h2>
                <p className="md:text-21 text-18 text-grey dark:text-white dark:text-opacity-50 font-normal max-w-45 w-full mx-auto my-[1.875rem] sm:px-0 px-4">
                    {description}
                </p>
                <Breadcrumb links={breadcrumbLinks} />
            </section>
        </>
    );
};

export default HeroSub;