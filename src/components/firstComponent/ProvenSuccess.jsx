import { Button } from "@/components/ui/button"


const ProvenSuccess = () => {
  return (
    <div className="px-5 py-10 sm:px-10 xl:px-50 3xl:px-100 lg:py-20 xl:py-40 lg:w-[80%] xl:w-[75%] ">
        <p className='uppercase text-[#707070]'>proven success... time and time again!</p>
        <p className="text-4xl md:text-5xl lg:text-6xl font-semibold mt-5">Be our next Sunshine Coast marketing success story</p>
        <p className="mt-10 text-lg">Explore our case studies, demonstrating our ability to <span className="font-semibold">deliver measurable results.</span> From increased website traffic and lead generation, to boosted brand awareness and sales, we’re committed to data-driven strategies that produce tangible outcomes.</p>
        <Button className="mt-10 p-6 font-semibold cursor-pointer" variant="outline">View All Case Studies</Button>
    </div>
  )
}

export default ProvenSuccess