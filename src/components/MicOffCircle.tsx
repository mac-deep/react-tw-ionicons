import { SVGProps, SVGAttributes } from 'react'

type MicOffCircleProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function MicOffCircle({ extraStyles, extraClasses, ...rest }: MicOffCircleProps) {
  const defaultProps: MicOffCircleProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: MicOffCircleProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M256,48C141.31,48,48,141.31,48,256s93.31,208,208,208,208-93.31,208-208S370.69,48,256,48Zm0,80h0a48.14,48.14,0,0,1,48,48v64a47.84,47.84,0,0,1-.63,7.71,2,2,0,0,1-3.46,1l-84.42-92.86a4,4,0,0,1-.47-4.77A48.08,48.08,0,0,1,256,128Zm32,256H224.45c-8.61,0-16-6.62-16.43-15.23A16,16,0,0,1,224,352h16V334.26a103.71,103.71,0,0,1-49.21-23.38C170.94,293.83,160,271.58,160,248.22V224a15.91,15.91,0,0,1,16.39-16A16.26,16.26,0,0,1,192,224.4v23.82c0,25.66,28,55.48,64,55.48,1.67,0,3.37-.09,5.06-.24a3.94,3.94,0,0,1,3.29,1.29l21.07,23.19a2,2,0,0,1-.89,3.26A100.33,100.33,0,0,1,272,334.26V352h15.55c8.61,0,16,6.62,16.43,15.23A16,16,0,0,1,288,384ZM210.11,245.09l36.46,40.11a1,1,0,0,1-.95,1.66,48.26,48.26,0,0,1-37.25-41A1,1,0,0,1,210.11,245.09ZM362.76,364.84a16,16,0,0,1-22.6-1.08l-192-210a16,16,0,0,1,23.68-21.52l192,210A16,16,0,0,1,362.76,364.84ZM352,248.22a77.12,77.12,0,0,1-11.93,40.87,2,2,0,0,1-3.19.3l-19.19-21.1a4,4,0,0,1-.76-4.16A43.35,43.35,0,0,0,320,248.22v-23.8a16.3,16.3,0,0,1,13.64-16.24c9.88-1.48,18.36,6.51,18.36,16.12Z" />
      </svg>
    </>
  )
}
