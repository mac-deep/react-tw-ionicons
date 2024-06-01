import { SVGProps, SVGAttributes } from 'react'

type NuclearProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function Nuclear({ extraStyles, extraClasses, ...rest }: NuclearProps) {
  const defaultProps: NuclearProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: NuclearProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M258.9,48C141.92,46.42,46.42,141.92,48,258.9,49.56,371.09,140.91,462.44,253.1,464c117,1.6,212.48-93.9,210.88-210.88C462.44,140.91,371.09,49.56,258.9,48ZM429,239.92l-93.08-.1a2,2,0,0,1-1.95-1.57,80.08,80.08,0,0,0-27.44-44.17,2,2,0,0,1-.54-2.43l41.32-83.43a2,2,0,0,1,2.87-.81A176.2,176.2,0,0,1,431,237.71,2,2,0,0,1,429,239.92ZM208.2,260.38a48,48,0,1,1,43.42,43.42A48,48,0,0,1,208.2,260.38ZM164.65,108.22,206,191.65a2,2,0,0,1-.54,2.43A80.08,80.08,0,0,0,178,238.25a2,2,0,0,1-2,1.57l-93.08.1a2,2,0,0,1-2-2.21,176.2,176.2,0,0,1,80.82-130.3A2,2,0,0,1,164.65,108.22Zm-.37,295.34,56.31-74.09a2,2,0,0,1,2.43-.6,79.84,79.84,0,0,0,66,0,2,2,0,0,1,2.43.6l56.31,74.09a2,2,0,0,1-.54,2.92,175.65,175.65,0,0,1-182.36,0A2,2,0,0,1,164.28,403.56Z" />
      </svg>
    </>
  )
}
