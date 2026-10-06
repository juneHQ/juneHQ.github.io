export const CloudsBackground = () => {
    return (
        <div className='flex absolute top-0 w-full h-[100px] justify-center items-center overflow-y-visible overflow-x-clip gap-4'>
            <div className='-z-10 -top-[800px] from-cyan-500 bg-[radial-gradient(500px_500px,_var(--tw-gradient-stops))] h-[1200px] w-full absolute'>

            </div>
            <img src='/cloud.png' className='h-[270px] w-[500px]'></img>
            <img src='/cloud.png' className='h-[350px] w-[500px]'></img>
        </div>
    )
}