import React from 'react'
import Crop from '../../public/Logo.svg';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button"

const Navbar = () => {

    const menuData = [
        {
            label: "The Agency",
            items: ["About Us", "Our Team", "Our Awards", "Careers", "Testimonials"],
        },
        {
            label: "Our Services",
            items: [
            "Branding & Logo",
            "Webdesign",
            "SEO",
            "Google Ads",
            "Conversion Rate Optimisation",
            "Social Media Marketing",
            ],
        },
        {
            label: "Our Work",
            items: ["Blog", "Case Studies", "FAQs", "Pricing", "Contact Us"],
        },
        {
            label: "Industries",
            items: ["Blog", "Case Studies", "FAQs", "Pricing", "Contact Us"],
        }
    ];

    const ele = menuData.map(function(item){
        return (
            <NavigationMenu >
                <NavigationMenuList >
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                        <NavigationMenuContent className="font-semibold p-5 flex flex-col gap-5 bg-neutral-100">{item.items.map((item12) => {
                            return (
                                <ul>
                                    <li>{item12}</li>
                                </ul>
                            )
                        })}</NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        )
    })


  return (
    <div className='flex justify-between py-10 sm:px-10 xl:px-50 3xl:px-100'>
        <div>
            <img className='w-[100%]' src={Crop} />
        </div>

        <div className='grid grid-cols-5 items-center'>
            {ele}
            <p>Contact</p>
        </div>

        <div className='flex items-center gap-5 font-semibold invisible lg:visible'>
            <p>897911001</p>
            <Button className="rounded-4xl p-8" >Im Ready</Button>
        </div>
    </div>
  )
}

export default Navbar