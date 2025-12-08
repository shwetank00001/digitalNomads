import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const DigitalServices = () => {

  // const [cardContent, setCardContent] = useState({

  // });

  const cardContent = [
    {
      id: 1,
      header:"Google Ads",
      content: "Paid media is all about strategically investing in advertising to broaden your brand’s visibility and reach as well as generating leads."
    },
    {
      id: 2,
      header:"Web Design",
      content: "The foundation of virtually all your marketing, a strong UI/UX designed website, backed by a flawless user journey is essential to business growth. "
    },
    {
      id: 3,
      header:"SEO Services",
      content: "Implementing a data-based Search Engine Optimisation Strategy is considered by industry experts, as the best investment for long term marketing return."
    },
    {
      id: 4,
      header:"Meta Marketing",
      content: "Paid media is all about strategically investing in advertising to broaden your brand’s visibility and reach as well as generating leads."
    },
    {
      id: 5,
      header:"Branding & Logo",
      content: "Paid media is all about strategically investing in advertising to broaden your brand’s visibility and reach as well as generating leads."
    },
    {
      id: 6,
      header:"CRO",
      content: "Paid media is all about strategically investing in advertising to broaden your brand’s visibility and reach as well as generating leads."
    },

  ];


  const ele =  cardContent.map((item) => {
    return (
      <Card className="border-black first:bg-black first:text-white">
        <CardHeader>
          <CardTitle className="text-4xl">{item.header}</CardTitle>
        </CardHeader>
        <CardContent className="mt-10">
          <p className="text-lg">{item.content}</p>
        </CardContent>
        <CardFooter>
          <Button className ="p-7 text-md first:text-black" variant ="outline">Read More</Button>
        </CardFooter>
      </Card>
    )
  })

  return (
    <div className='px-5 py-10 sm:px-10 xl:px-50 3xl:px-100 lg:py-20 xl:py-40'>
        <div className="flex flex-col justify-center items-center gap-5">
            <p className="text-5xl font-semibold">Digital services to establish, build or grow your business...</p>
            <p>With in-house digital marketing experts based on the coast… we’ve got you covered!</p>
            <p>Whether you’re starting digital marketing for the first time, our looking to elevate upon an existing foundation, our team will work with you. </p>
            <p>From SEO to paid media and web design, not to mention our killer content services – everything we do is geared towards supporting your business goals.</p>
        </div>
        
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-5">
          {ele}
        </section>
    </div>
  )
}

export default DigitalServices