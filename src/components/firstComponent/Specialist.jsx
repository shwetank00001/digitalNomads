import Specialist1 from '../../../public/Specialist1.jpg'
import Specialist2 from '../../../public/Specialist2.jpg'
import Specialist3 from '../../../public/Specialist3.jpg'
import { Button } from "@/components/ui/button"


const Specialist = () => {
  return (
    <section className='px-5 py-10 sm:px-10 xl:px-50 3xl:px-100 lg:py-20 xl:py-40 flex flex-col items-center '>
      <div className='sm:flex gap-20 '>
      <div>
        <div>
          <img src={Specialist1} className='rounded-2xl'/>
        </div>
        <div className='flex gap-1 pt-5 '>
          <img className='w-[50%] h-[50%] rounded-2xl' src={Specialist2} />        
          <img className='w-[50%] h-[50%] rounded-2xl' src={Specialist3} />        
               
        </div>
      </div>

        <div className='mt-5'>
            <p className='text-xs md:text-md lg:text-lg text-md uppercase text-[#F34D01]'>a team of specialists... not generalists</p>
            <p className='text-3xl lg:text-5xl font-semibold'>Local experts, providing honest digital marketing</p>
            <br />
            <p className='text-lg'>Work with our incredible team of local talent… right here on the Sunshine Coast! Let Digital Nomads HQ be your creative partner in digital marketing. With our combined expertise and your vision – that’s the formula for success. We’ll tailor a strategy that blends our services to reach your target audience and drive growth. Being one of the fastest-growing digital marketing agencies on the Sunshine Coast, know that <span className='underline font-semibold'>we have the expertise to deliver</span> on your next marketing campaign.</p>
                        <br />
            <p className='text-lg font-semibold'>Your Goals, Our Strategy</p>
            <br />
            <hr />
        </div>
      </div>

      <div className='mt-5  hover:pointer'>
        <Button className="rounded-4xl p-8 border-2" variant="outline">See our awards...</Button>
      </div>
    </section>
  )
}

export default Specialist