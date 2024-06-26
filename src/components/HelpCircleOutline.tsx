import { SVGProps, SVGAttributes } from 'react'

type HelpCircleOutlineProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function HelpCircleOutline({ extraStyles, extraClasses, ...rest }: HelpCircleOutlineProps) {
  const defaultProps: HelpCircleOutlineProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: HelpCircleOutlineProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path
          d="M256,80A176,176,0,1,0,432,256,176,176,0,0,0,256,80Z"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <path
          d="M200,202.29s.84-17.5,19.57-32.57C230.68,160.77,244,158.18,256,158c10.93-.14,20.69,1.67,26.53,4.45,10,4.76,29.47,16.38,29.47,41.09,0,26-17,37.81-36.37,50.8S251,281.43,251,296"
          style={{
            fill: 'none',
            stroke: 'currentColor',
            strokeLinecap: 'round',
            strokeMiterlimit: '10',
            strokeWidth: '28px',
          }}
        />
        <circle cx="250" cy="348" r="20" />
      </svg>
    </>
  )
}
