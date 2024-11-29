export const Spinner = ({ loadingScreen }: { loadingScreen: boolean }) => {
  if (loadingScreen) {
    return (
      <div className='absolute bottom-1/2 flex items-center gap-1'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          viewBox='0 0 24 24'
          className='animate-spin'
        >
          <g fill='black'>
            <path
              fillRule='evenodd'
              d='M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10'
              clipRule='evenodd'
              opacity='0.2'
            />
            <path d='M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7z' />
          </g>
        </svg>
        <span>Loading...</span>
      </div>
    )
  } else {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='32'
        height='32'
        viewBox='0 0 24 24'
        className='animate-spin'
      >
        <g fill='black'>
          <path
            fillRule='evenodd'
            d='M12 19a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0 3c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10'
            clipRule='evenodd'
            opacity='0.2'
          />
          <path d='M2 12C2 6.477 6.477 2 12 2v3a7 7 0 0 0-7 7z' />
        </g>
      </svg>
    )
  }
}
