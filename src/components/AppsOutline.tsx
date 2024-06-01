import { SVGProps, SVGAttributes } from 'react'

type AppsOutlineProps = {
  extraStyles?: SVGAttributes<SVGElement>['style']
  extraClasses?: SVGAttributes<SVGElement>['className']
} & Omit<SVGProps<SVGSVGElement>, 'style' | 'className'>

export default function AppsOutline({ extraStyles, extraClasses, ...rest }: AppsOutlineProps) {
  const defaultProps: AppsOutlineProps = {
    width: '20px',
    height: '20px',
    extraClasses: '',
  }

  const mergedProps: AppsOutlineProps = { ...defaultProps, ...rest }

  return (
    <>
      <svg
        className={`[&>*]:stroke-current fill-current  ${extraClasses}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        {...mergedProps}
      >
        <rect
          x="64"
          y="64"
          width="80"
          height="80"
          rx="40"
          ry="40"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <rect
          x="216"
          y="64"
          width="80"
          height="80"
          rx="40"
          ry="40"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <rect
          x="368"
          y="64"
          width="80"
          height="80"
          rx="40"
          ry="40"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <rect
          x="64"
          y="216"
          width="80"
          height="80"
          rx="40"
          ry="40"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <rect
          x="216"
          y="216"
          width="80"
          height="80"
          rx="40"
          ry="40"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <rect
          x="368"
          y="216"
          width="80"
          height="80"
          rx="40"
          ry="40"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <rect
          x="64"
          y="368"
          width="80"
          height="80"
          rx="40"
          ry="40"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <rect
          x="216"
          y="368"
          width="80"
          height="80"
          rx="40"
          ry="40"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
        <rect
          x="368"
          y="368"
          width="80"
          height="80"
          rx="40"
          ry="40"
          style={{ fill: 'none', stroke: 'currentColor', strokeMiterlimit: '10', strokeWidth: '32px' }}
        />
      </svg>
    </>
  )
}
