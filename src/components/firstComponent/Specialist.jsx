import Specialist1 from '../../../public/Specialist1.jpg'
import Specialist2 from '../../../public/Specialist2.jpg'
import Specialist3 from '../../../public/Specialist3.jpg'

const Specialist = () => {
  return (
    <section className='px-5 py-10 sm:px-10 xl:px-50 md:py-40 flex gap-10 '>
        <div className='p-5 gap-10 flex flex-col '>
          <div>
            <img className='rounded-2xl w-50%' src={Specialist1} />
          </div>
            <div className='flex gap-5'>
              <img className='rounded-2xl w-73' src={Specialist2} />
              <img className='rounded-2xl w-73' src={Specialist3} />
            </div>

        </div>

        <div>
            <p className='text-md uppercase text-[#F34D01]'>a team of specialists... not generalists</p>
            <p className='text-5xl font-semibold'>Local experts, providing honest digital marketing</p>
            <br />
            <p className='text-lg'>Work with our incredible team of local talent… right here on the Sunshine Coast! Let Digital Nomads HQ be your creative partner in digital marketing. With our combined expertise and your vision – that’s the formula for success. We’ll tailor a strategy that blends our services to reach your target audience and drive growth. Being one of the fastest-growing digital marketing agencies on the Sunshine Coast, know that <span className='underline font-semibold'>we have the expertise to deliver</span> on your next marketing campaign.</p>
                        <br />
            <p className='text-lg font-semibold'>Your Goals, Our Strategy</p>
            <br />
            <hr />
        </div>
    </section>
  )
}

export default Specialist