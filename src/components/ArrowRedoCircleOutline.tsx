import { SVGProps, SVGAttributes } from 'react'

type ArrowRedoCircleOutlineProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function ArrowRedoCircleOutline({ extraStyles, extraClasses, ...rest }: ArrowRedoCircleOutlineProps) {
  const defaultProps: ArrowRedoCircleOutlineProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: ArrowRedoCircleOutlineProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M266.91,327.74V290.42c-57.07,0-84.51,13.47-108.58,38.68-5.4,5.65-15,1.32-14.29-6.43,5.45-61.45,34.14-117.09,122.87-117.09V168.26a8.32,8.32,0,0,1,14-6L365.42,242a8.2,8.2,0,0,1,0,11.94L281,333.71A8.32,8.32,0,0,1,266.91,327.74Z" />
        <path
          d="M64,256c0,106,86,192,192,192s192-86,192-192S362,64,256,64,64,150,64,256Z"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
      </svg>
    </>
  )
}
