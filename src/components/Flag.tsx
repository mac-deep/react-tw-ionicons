import { SVGProps, SVGAttributes } from 'react'

type FlagProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function Flag({ extraStyles, extraClasses, ...rest }: FlagProps) {
  const defaultProps: FlagProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: FlagProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <path d="M80,480a16,16,0,0,1-16-16V68.13A24,24,0,0,1,75.9,47.41C88,40.38,112.38,32,160,32c37.21,0,78.83,14.71,115.55,27.68C305.12,70.13,333.05,80,352,80a183.84,183.84,0,0,0,71-14.5,18,18,0,0,1,25,16.58V301.44a20,20,0,0,1-12,18.31c-8.71,3.81-40.51,16.25-84,16.25-24.14,0-54.38-7.14-86.39-14.71C229.63,312.79,192.43,304,160,304c-36.87,0-55.74,5.58-64,9.11V464A16,16,0,0,1,80,480Z" />
      </svg>
    </>
  )
}