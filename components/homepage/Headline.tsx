


import Image from 'next/image'
import styles from '../../styles/Home.module.scss'


const Headline = () => {
  return (
     <section className='bg-green-light w-full'>
       <div className="container">
          <div className={styles.headline}>
            <div className="col-span-5">
              <div className="">
                <span className={styles.headline_main}>
                  <span className=""> Experience a</span><br /> 
                  <span className=""> Fresh way to </span> <br />
                  <span className="text-green-primary">Save money</span>
                </span>
                <br /> 

                <div className={styles.headline_subtext}>
                Reach your goals with personalised insights,
                Custom budgets, send tracking, 
                and subscription Monitoring
                </div>
              </div>

            <div className="">
              <button className={styles.headline_button}>
                SAVE NOW
              </button>
            </div>

          </div>

          <div className="col-span-7">
            <Image
            src='/assets/images/header-image.png'
            alt='SaveMe Headline Background'
            width={1200}
            height={600}
            />
          </div>

          </div>
       </div>
     </section>
  )
}

export default Headline
