import { useState } from 'react'
import Specialist1 from '../../../public/Specialist1.jpg'
import Specialist2 from '../../../public/Specialist2.jpg'
import Specialist3 from '../../../public/Specialist3.jpg'
import { Button } from "@/components/ui/button"


const Specialist = () => {

  const [goals, showGoals] = useState(false);
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
            <p className='text-lg font-semibold cursor-pointer' onClick={() => showGoals(i => !i)}>Your Goals, Our Strategy</p>
            <br />
            <hr />
            {goals && 
            <>
              <p className='mt-5 text-lg'>Our team of subject matter experts will create a digital marketing strategy that’s strategically aligned with your goals. Leveraging <span className='font-bold'>years of insight and proven success</span>, we have the expertise to market a business effectively. </p>
              <p className='mt-5 text-lg'> Generic “B-grade” solutions won’t get you the results you need. We meticulously craft campaigns backed by a deep understanding of your goals, ensuring a strategy that drives success.</p>
            </>
            }
        </div>
      </div>

      <div className='mt-5  hover:pointer'>
        <Button className="rounded-4xl p-8 border-2" variant="outline">See our awards...</Button>
      </div>
    </section>
  )
}

export default Specialist