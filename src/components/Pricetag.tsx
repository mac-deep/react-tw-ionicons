import { SVGProps, SVGAttributes } from 'react'

type PricetagProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function Pricetag({ extraStyles, extraClasses, ...rest }: PricetagProps) {
  const defaultProps: PricetagProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: PricetagProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M467,45.2A44.45,44.45,0,0,0,435.29,32H312.36a30.63,30.63,0,0,0-21.52,8.89L45.09,286.59a44.82,44.82,0,0,0,0,63.32l117,117a44.83,44.83,0,0,0,63.34,0l245.65-245.6A30.6,30.6,0,0,0,480,199.8v-123A44.24,44.24,0,0,0,467,45.2ZM384,160a32,32,0,1,1,32-32A32,32,0,0,1,384,160Z" />
      </svg>
    </>
  )
}