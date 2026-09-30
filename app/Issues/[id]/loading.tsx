import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const loading = () => {
  return (
    <div className='max-w-2xl'>
      <Skeleton width={'5rem'}/>
      <Skeleton/>
      <Skeleton/>

    <article className="prose lg:prose-xl mt-6">
    <div className="bg-blue-50 p-7">
        <Skeleton width={'10rem'}/>

    </div>

    </article>




    </div>
  )
}

export default loading
